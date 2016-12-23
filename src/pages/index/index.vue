<template>
  <div>
    <com-head></com-head>
    <com-navi v-bind:active = "biology"></com-navi>
    <com-datalist v-bind:items="biolist" v-bind:ends="bioend" v-on:updatelist = "updatebiolist"></com-datalist>
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
        biolist:[],
        bioend:0
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
      this.$store.dispatch('SET_BIOLOGYLIST', 0)
    },
    mounted: function () {
      // `this` 指向 vm 实例
      this.indexMsg = this.$store.getters.getIndexData;
    },
    computed:{
      biolist(){
        //console.log('length1122:' + this.$store.getters.getBiologyList.length);
        return this.$store.getters.getBiologyList
      },
      bioend(){
        console.log( this.$store.getters.getBioEnd);
        return this.$store.getters.getBioEnd
      }
    },
    methods:{
      updatebiolist:function(start){
        this.$store.dispatch('SET_BIOEND',start);
        this.$store.dispatch('SET_BIOLOGYLIST', start)
      }
    }
  }
</script>
