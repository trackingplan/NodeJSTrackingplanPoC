/*
    Just a testing script to show that the interceptor base library works
*/

import { ClientRequestInterceptor } from '@mswjs/interceptors/lib/interceptors/ClientRequest/index.js'

import analytics from './analytics.mjs';

const interceptor = new ClientRequestInterceptor()

// Enable the interception of requests.
interceptor.apply()

// Listen to any "http.ClientRequest" being dispatched,
// and log its method and full URL.
interceptor.on('request', (request, requestId) => {
  console.log(request.method, request.url)
})

// Listen to any responses sent to "http.ClientRequest".
// Note that this listener is read-only and cannot affect responses.
interceptor.on('response', (response, request) => {
  console.log('response to %s %s was:', request.method, request.url, response)
})

/* Track page views */
analytics.page();
