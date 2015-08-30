var Vue = require('vue')
var aComponent = require('./a.vue')
Vue.config.debug = true
Vue.component('a-component', aComponent)

console.log(Vue.util)
  new Vue({
    el: '#test',

    components: {
      'a-component': aComponent
    }
  });
