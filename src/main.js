require('./main.styl')

var Vue = require('vue')
var app = new Vue({
  el: '#app',
  data: {
    view: 'a'
  },
  components: {
    // define the main pages as async components.
    a: function (resolve) {
      require(['./views/a'], resolve)
    },
    b: function (resolve) {
      require(['./views/b'], resolve)
    }
  }
})

function route () {
  app.view = window.location.hash.slice(1) || 'a'
}

window.addEventListener('hashchange', route)
window.addEventListener('load', route)
