import { Api, ApiUrl } from './base';

class ApiInit extends Api {
    constructor(config) {
        super({
            url: ApiUrl.Atg.INIT,
            params: {},
            cache: true,
            ...config
          })
    }
}

export default ApiInit;
