<template>
  <div id="app">
    <router-view />
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  height 100%
  width 100%

</style>
