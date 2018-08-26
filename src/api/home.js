import { Api, ApiUrl } from './base';

class ApiHomeLayout extends Api {
    constructor(config) {
        super({
            url: ApiUrl.Endeca.HOME,
            params: {
              format: 'json'
            },
            cache: true,
            ...config
          })
    }
}

export default ApiHomeLayout;
