const {JSDOM} = require("jsdom")

module.exports = function createDOM() {

  const dom = new JSDOM('<html><body></body></html>', {
    url: 'http://api.giphy.com',
    referrer: "http://api.giphy.com",
  })
  global.window = dom.window
  global.document = dom.window.document
  Object.keys(dom.window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = dom.window[property]
    }
  })
}