<template>
  <div class="demo-infinite-container">
    <mu-grid-list class="gridlist-demo">
      <!--<mu-sub-header>图片展示</mu-sub-header>-->
      <mu-grid-tile v-for="item in list">
        <!--<img :src="tile.image"/>-->
        <span slot="title">11</span>
        <span slot="subTitle">by <b>222</b></span>
      </mu-grid-tile>
    </mu-grid-list>
    <mu-flat-button label="加载更多"  @click="loadMore" class="demo-flat-button" primary/>
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
        num: 2,
        loading: false,
        scroller: null
      }
    },
    props:['items'],
    created:function(){
      this.items = this.items ? this.items : [];
    },
    mounted () {
      this.scroller = this.$el;
     // console.log('length: '+this.items);
    },
    methods: {
      loadMore () {
       // console.log(1234);
        this.loading = true;
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          //this.loading = false
        }, 500);
      }
    }
  }
</script>

