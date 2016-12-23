<template>
  <div>
    <com-head></com-head>
    <com-navi></com-navi>
    <com-datalist v-bind:items="biolist"></com-datalist>
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
        indexMsg: '223',
        biolist:[]
      }
    },
    components: {
      comHead:head,
      comNavi:navi,
      comDatalist:datalist
    },
    created: function () {
      // `this` 指向 vm 实例
      this.$store.dispatch('SET_INDEXMSG', 'Hello World!223')
      this.$store.dispatch('SET_BIOLOGYLIST', 10)
    },
    mounted: function () {
      // `this` 指向 vm 实例
      this.indexMsg = this.$store.getters.getIndexData;
    },
    computed:{
      biolist(){
        console.log('length1122:' + this.$store.getters.getBiologyList.length);
        return this.$store.getters.getBiologyList
      }
    }
  }
</script>
