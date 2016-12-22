<template>
  <div class="demo-infinite-container">
    <!--<mu-list>-->
      <!--<template v-for="item in list">-->
        <!--<mu-list-item :title="item"/>-->
        <!--<mu-divider/>-->
      <!--</template>-->
    <!--</mu-list>-->
    <!--<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>-->
  </div>
</template>

<style lang="css">
  @import './datalist.styl';
</style>

<script>
  export default {
    data () {
      const list = []
      for (let i = 0; i < 10; i++) {
        list.push('item' + (i + 1))
      }
      return {
        list,
        num: 10,
        loading: false,
        scroller: null
      }
    },
    //props:['items'],
    created:function(){
      this.items = this.items ? this.items : [];
    },
    mounted () {
      this.scroller = this.$el;
     // console.log('length: '+this.items);
    },
    methods: {
      loadMore () {
        this.loading = true;
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          this.loading = false
        }, 2000);
      }
    }
  }
</script>

