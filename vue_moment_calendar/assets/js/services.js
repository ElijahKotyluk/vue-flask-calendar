// Application service bootstrap, classes and utilities.
import routes, {parseRoute} from './routes'

const OK = 200;

// Normalize the passed request options.
const parseRequestOptions = function (options = {}) {
  const parsed = {
    headers: {},
    params: {},
    data: null
  };

  for (let [key, value] of Object.entries(options)) {
    if (key === 'headers') {
      parsed.headers = value;
    } else if (key === 'data') {
      parsed.data = value;
    } else {
      parsed.params[key] = value;
    }
  }

  return parsed;
};


/**
 * A ServiceProvider...provides a service. Lmao. Services are groups of remote
 * calls organized around a specific feature - for example, the "user" service.
 * The ServiceProvider takes route config from routes.js and provides methods
 * based on those values that make calls to the supplied URLs.
 */
export class ServiceProvider {
  constructor(serviceRoutes = {}) {
    for (let [route, methods] of Object.entries(serviceRoutes)) {
      if (!Array.isArray(methods)) {
        methods = [methods];
      }

      this.register(route, methods);
    }
  }

  /**
   * Registers a specific URL and the HTTP methods (GET, POST etc) it accepts,
   * creating the correct service methods to make those calls.
   */
  register(route, methods) {
    for (let {service, method} of methods) {
      this[service] = (requestOptions) => {
        //console.log(requestOptions);
        const {headers, params} = parseRequestOptions(requestOptions);
        const data = requestOptions;
        console.log('my data is ', data, ' and my requestOptions ', requestOptions);
        const url = parseRoute(route, params);

        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();

          xhr.open(method, url, true);

          for (let [key, value] of Object.entries(headers)) {
            xhr.setRequestHeader(key, value);
          }

          xhr.onloadend = (event) => {
            const response = JSON.parse(xhr.responseText);

            if (xhr.status === OK) {
              resolve(response);
            } else {
              reject(response);
            }
          };

          if (data) {
            if (!headers['Content-Type']) {
              xhr.setRequestHeader('Content-Type', 'application/json');
            }

            if (!headers['Accept']) {
              xhr.setRequestHeader('Accept', 'application/json');
            }

            xhr.send(typeof data === 'string' ? data : JSON.stringify(data));
          } else {
            xhr.send();
          }
        });
      };
    }
  }
}

const services = {};

// Bootstrap the services from our route config.
for (let [serviceName, serviceRoutes] of Object.entries(routes)) {
  services[serviceName] = new ServiceProvider(serviceRoutes);
}

export default services;
