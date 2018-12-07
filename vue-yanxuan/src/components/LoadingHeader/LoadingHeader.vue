<template>
    <div>
      <div class="loading-header" @click="goto('/msite')">
        <span><i class="iconfont icon-shouye"></i></span>
        <div class="middle">网易严选</div>
        <div class="right">
          <span><i class="iconfont icon-sousuo"></i></span>
          <span><i class="iconfont icon-gouwuche"></i></span>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      methods:{
        goto(path){
          this.$router.replace(path)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scopet>
  .loading-header
    position relative
    height 1.2rem
    background #eee
    padding .33rem .51rem
    .iconfont
      font-size 1rem
    .middle
      width 3.6rem
      height 1.15rem
      font-size .9rem
      margin auto
      position absolute
      right 0
      top 0
      bottom 0
      left 0
    .right
      float right
</style>
