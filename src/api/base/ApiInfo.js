export default class ApiInfo {
    constructor(config = {}) {
        this.url ;
        this.params = {};
        this.timeout = 60000;
        this.error;
        this.method = 'GET';
        this.cache = true;
        Object.assign(this, config);
    }
    setURL(url) {
        this.url = url;
    }
}
