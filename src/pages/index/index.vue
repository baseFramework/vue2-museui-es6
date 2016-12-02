<template>
  <div>
    <com-head></com-head>
    <com-navi></com-navi>
    <com-datalist></com-datalist>
    <div>{{indexMsg}}</div>
  </div>
</template>

<script>
  import head from '../../components/header/header.vue'
  import navi from '../../components/navi/navi.vue'
  import datalist from '../../components/datalist/datalist.vue'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        indexMsg: '223'
      }
    },
    components: {
      comHead:head,
      comNavi:navi,
      comDatalist:datalist
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
