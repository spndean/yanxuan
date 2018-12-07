<template>
  <div class="shop">
    <div class="shopping">
      <div class="shopping-c">
        <span>购物车</span>
      </div>
      <span class="shopping-y">领券</span>
    </div>
    <div class="car">
      <span>登陆</span>
    </div>
  </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scopet>
  .shop
    width 100%
    height 100%
    .shopping
      width 100%
      height 100%
      background #ddd
      .shopping-c
        position fixed
        top 0
        left 0
        font-size .76rem
        width 100%
        height 1.87rem
        line-height 1.87rem
        text-align center
        background #fff
      .shopping-y
        position absolute
        right .64rem
        top .6rem
        font-size .64rem
        color #b4282d

</style>
