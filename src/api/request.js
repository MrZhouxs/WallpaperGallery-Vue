import http from "./base";

const request = {
  get(url, params, headers) {
    return this.api("GET", url, params, {}, headers);
  },
  post(url, params, data, headers) {
    return this.api("POST", url, params, data, headers);
  },

  put(url, params, data, headers) {
    return this.api("PUT", url, params, data, headers);
  },

  delete(url, params, data, headers) {
    return this.api("DELETE", url, params, data, headers);
  },

  api(method, url, params, data, headers){
    const config = {
      method: method,
      url: url,
      params: params ? params : {},
      data: data ? data : {},
      headers: headers ? headers : {},
    };
    return http(config);
  },

}

export default request;
