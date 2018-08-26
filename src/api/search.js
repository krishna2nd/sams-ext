import { Api, ApiUrl } from './base';

export class ApiSearch extends Api {
  constructor(config) {
    let url = ApiUrl.Endeca.SEARCH.text;
    if (config.url){
        url = ApiUrl.Endeca.SEARCH[config.type] + config.url;
    }
    super({
      params: {
        format: 'json'
      },
      cache: true,
      ...config,
      url
    });
  }
}

export default ApiSearch;
