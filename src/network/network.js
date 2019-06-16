import Axios from 'axios'
import Url from './url'
import Uris from './uris'
import HttpHandler from './httpHandler'

const baseUrl = Url.getUrl()
const uris = Uris.uris

// example
//  uri: "/api/info"
//  argument: {id: "111212323"}
//  handler: function(code, error, data){ }
//  interceptor: function(response){ return response; }
function post(uri, argument, handler, interceptor) {
    let config = {
        timeout: 30000,
        baseURL: baseUrl,
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        }
    };
    let httpHandler = HttpHandler.create(handler);
    let http = Axios.create(config);
    if(interceptor) {
        http.interceptors.response.use(interceptor,
            function (error) {
                return Promise.reject(error);
            });
    }

    http.post(uri, argument).then(httpHandler.onResponse).catch(httpHandler.onError);
}

export default {
    uris,
    post
}