import ApiInfo from './ApiInfo';
import callFunc from './callFunc';
import cache from './../../cache';
import qs from 'querystrings';

export default class Api extends ApiInfo {
  constructor(config) {
    super(config);
  }
  async fetch() {
    const cacheBurst = {
      _: +Date.now()
    };
    const query = qs.stringify({
      ...this.params,
      ...cacheBurst
    });

    const cacheKey = cache.genUrlKey({
      url: this.url,
      params: this.params
    });
    console.log(this);
    if (this.cache) {
      let hasCache = false;
      const result = await cache.select(cacheKey).then(doc => {
        console.log('EEE', this.cache, cacheKey, doc);
        hasCache = !!(doc && doc.data);
        return doc && doc.data;
      });
      if (hasCache) return result;
    }
    const url = this.url + (this.url.indexOf('?') === -1 ? '?' : '&') + query;
    return fetch(url, {
        headers: {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            Referer: 'https://www.sams.com.mx/'
        }
    })
      .then(async res => {
        this.result = await this.parse(res);
        console.log('cacheKey', cacheKey, this.result);
        if (res.status === 200) {
          cache.upsert({
            _id: cacheKey,
            data: this.result
          });
        }
        return this.result;
        // return callFunc(this, onSuccess, this.result, res);
      })
      .catch(err => {
        console.log(err);
        // return callFunc(this, onError, this.error, err);
      });
  }
  async parse(res) {
    if (res.status === 200) {
      return await res.json().then(data => data);
    }
  }
  cancel() {}
  abort() {}
}
