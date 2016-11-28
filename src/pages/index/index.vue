<template>
  <div>
    <div>
      {{msg}}
    </div>
    <div>
      {{indexMsg}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        indexMsg: '223'
      }
    },
    created: function () {
      // `this` 指向 vm 实例
      console.log(this.$store)
      this.$store.dispatch('SET_INDEXMSG', 'Hello World!223')

    },
    mounted: function () {
      // `this` 指向 vm 实例
      this.indexMsg = this.$store.getters.getIndexData
    }
  }
</script>
