<template>
    <footer class="footer">
      <a href="javascript:;" :class="{on:$route.path==='/msite'}" @click="goto('/msite')" >
        <span><i class="iconfont icon-shouye"></i></span>
        <span class="text">首页</span>
      </a>
      <a href="javascript:;" :class="{on:$route.path==='/classify'}" @click="goto('/classify')">
        <span><i class="iconfont icon-leimupinleifenleileibie"></i></span>
        <span class="text">分类</span>
      </a>
      <a href="javascript:;" :class="{on:$route.path==='/discover'}" @click="goto('/discover')">
        <span><i class="iconfont icon-shiwu"></i></span>
        <span class="text">识物</span>
      </a>
      <a href="javascript:;" :class="{on:$route.path==='/shopping'}" @click="goto('/shopping')">
        <span><i class="iconfont icon-gouwuche"></i></span>
        <span class="text">购物车</span>
      </a><a href="javascript:;" :class="{on:$route.path==='/loading'}" @click="goto('/loading')">
      <span><i class="iconfont icon-renwu"></i></span>
      <span class="text">个人</span>
    </a>
    </footer>
</template>
<script>
    export default {
        methods : {
            goto(path){
                this.$router.replace(path)
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scopet>

  footer
    background #fff
    position fixed
    left 0
    bottom 0
    width 100%
    height 2.3rem
    z-index 7
    color #666
    display flex
    a
      display flex
      flex-direction column
      flex 1
      align-items center
      margin-top .4rem
      &.on
        color #b4282d
      .iconfont
        font-size .8rem
      .text
        font-size .55rem
        margin-top .2rem

</style>
