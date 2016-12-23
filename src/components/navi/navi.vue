<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="biology" title="生物"></mu-tab>
      <mu-tab value="math" title="数学"></mu-tab>
      <mu-tab value="internet" title="互联网" @active="handleActive"></mu-tab>
      <mu-tab value="interview" title="专访"></mu-tab>
    </mu-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'biology'
      }
    },
    props:['active'],
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        console.log(this.activeTab);
        // window.alert('tab active')
      }
    }
  }
</script>
