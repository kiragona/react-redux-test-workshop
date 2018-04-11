let jsdom
try {
  jsdom = require("jsdom/lib/old-api.js") // jsdom >= 10.x
} catch (e) {
  jsdom = require("jsdom") // jsdom <= 9.x
}


const createVirtualConsole = function createVirtualConsole() {
  const virtualConsole = jsdom.createVirtualConsole();
  virtualConsole.sendTo(console);
  return virtualConsole;
};


module.exports = function createDOM(isLogging) {
  return new Promise(function (resolve, reject) {
    jsdom.env({
      virtualConsole: isLogging ? createVirtualConsole() : undefined,
      html: '<html><body></body></html>',
      url: 'http://api.giphy.com',
      done: function done(err, window) {
        if (err) return reject(err)
        //add polyfill for window.fetch
        window.fetch = require('whatwg-fetch').fetch
        global.window = window
        global.document = window.document
        Object.keys(window).forEach((property) => {
          if (typeof global[property] === 'undefined') {
            global[property] = window[property]
          }
        })
        return resolve(window)
      }
    })
  })
}