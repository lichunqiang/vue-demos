<style scoped>
  :scope {
    border: 1px solid #00f;
  };
  .red {
    color: #f00;
  }
</style>
<template>
<div>
  <h2 class="red" v-on="click: trigger">{{msg}}</h2>
  <p>{{a}}</p>
  <p> <partial name="test"></partial>  </p>
</div>
</template>

<script>
  export default {

    data() {
      return {
        msg: 'hello from component a'
      }
    },
    //defined methods
    methods: {
      trigger() {
        this.$emit('__clicked')
      },
      behavior() {
        alert('cliced')
      }
    },

    computed: {
      a() {
        return this.msg + '__a';
      }
    },

    events: {
      'hook:ready': function() {
        console.log(this)

        // this.$el.addEventListener('click', function() {
        //   alert('clicked')
        // });
      },
      '__clicked': 'behavior'
    },

    partials: {
      'test': '<h3>{{msg}}</h3>'
    }
  }
</script>
