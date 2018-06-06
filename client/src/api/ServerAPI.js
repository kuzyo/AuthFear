import accessTokenStorage from "../api/AccessTokenStorage"

function status(response) {
  if (response.ok) {
    return response;
  } else {
    // TODO: why do you need this check
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json().then(body => {
        return Promise.reject({ ...body, status: response.status });
      });
    } else {
      return Promise.reject({ message: response.statusText });
    }
  }
}

function json(response) {
  if (response.status !== 204) {
    return response.json();
  }
}

class ServerApi {
  constructor() {
    this.opts = {
      headers: {
        ...(accessTokenStorage.isExist()
          ? { "x-access-token": `${accessTokenStorage.get()}` }
          : {}), Accept: "application/json",
        "Content-type": "application/json"
      }
      //credentials: 'include'
      // mode: "no-cors"
    };
    this.bodyConverter = body => JSON.stringify(body);
  }

  buildUrl(path) {
    // TODO: how to pass CORS correctly
    // return `http://localhost:5000/api${path}`;
    return `/api${path}`;
  }

  /**
   * Make GET ajax request.
   * @param url - requested url
   * @returns {Promise.<TResult>}
   */
  get(url) {
    return fetch(this.buildUrl(url), {
      method: "get",
      ...this.opts
    })
      .then(status)
      .then(json);
  }

  /**
   * Make POST ajax request.
   * @param url - requested url
   * @param body - object {key: value}
   * @returns {Promise.<TResult>}
   */
  post(url, body) {
    return fetch(this.buildUrl(url), {
      method: "post",
      ...this.opts,
      body: this.bodyConverter(body)
    })
      .then(status)
      .then(json);
  }

  /**
   * Make PUT ajax request.
   * @param url - requested url
   * @param body - object {key: value}
   * @returns {Promise.<TResult>}
   */
  put(url, body) {
    return fetch(this.buildUrl(url), {
      method: "put",
      ...this.opts,
      body: this.bodyConverter(body)
    })
      .then(status)
      .then(json);
  }

  /**
   * Make DELETE ajax request.
   * @param url - requested url
   * @param body - object {key: value}
   * @returns {Promise.<TResult>}
   */
  remove(url, body = {}) {
    return fetch(this.buildUrl(url), {
      method: "delete",
      ...this.opts,
      body: this.bodyConverter(body)
    })
      .then(status)
      .then(json);
  }
}

export default ServerApi;
