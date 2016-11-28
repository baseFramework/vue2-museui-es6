<template>
  <div>
    <layout>
      <div>
        {{indexMsg}}
      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from '../../components/layout'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        indexMsg: '223'
      }
    },
    components: {
      Layout
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
