<template>
  <mu-appbar v-bind:title="title">
  </mu-appbar>
</template>

<script>
  export default {
    data () {
      return {
        title: ''
      }
    },
    mounted: function () {
      this.title = '果壳'
    }
  }
</script>
