<template>
  <vc-header></vc-header>
  <slot></slot>
</template>
<script>
  import vcHeader from './header.vue'
  export default {
    components: {
      vcHeader
    }
  }
</script>
