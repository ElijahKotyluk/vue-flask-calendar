// Application routes and routing utilities.
const GET = "GET";
const POST = "POST";
const PATCH = "PATCH";
const DELETE = "DELETE";
const ROUTE_PARAM_RE = /\/:([\w-]+)(\/?)/g;

// The character our URL paths are separated by.
export const DELIMITER = '/';

/**
 * Takes a URL path with params (e.g. '/user/:user_id') and a map of param
 * names to values, interpolates the param values and returns the URL.
 */
export const parseRoute = (route = '', params = {}) => {
  if (!route) {
    return route;
  }

  return route.replace(ROUTE_PARAM_RE, (match, paramName, trailingSlash) => {
    return DELIMITER + (params[paramName] || '') + trailingSlash;
  });
};

export default {
  // Event service routes.
  myEvent: {
    '/events': {
      service: 'list',
      method: GET,
      isArray: true
    },
    '/event': {
      service: 'create',
      method: POST
    },
    '/event/:event_id': [
      {
        service: 'fetch',
        method: GET
      },
      {
        service: 'update',
        method: PATCH
      },
      {
        service: 'delete',
        method: DELETE
      }
    ]
  }
};
