<template>
    <div class="loading">
      <LoadingHeader/>
      <div class="loading-content">
        <div class="img">
          <img src="./images/2.png" alt="">
        </div>
        <div class="loading-rightw">
          <div class="loading-right one"  @click="goto('/LoadingPhone')">
          <span>
            手机号码登录
          </span>
          </div>
          <div class="loading-right two" @click="goto('/LoadingEmail')">
          <span>
            邮箱账号登陆
          </span>
          </div>
          <div class="loading-rightr" @click="goto('/LoadingRegister')">
          <span>
            手机号快捷注册
          </span>
          </div>
        </div>

      </div>
    </div>
</template>
<script>
  import LoadingHeader from  '../../components/LoadingHeader/LoadingHeader.vue'
    export default {
        components:{
          LoadingHeader,
        },

      methods : {
        goto(path){
          this.$router.replace(path)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scopet>
    .loading-content
      height 623px
      background #F2F5F4
      .img
        padding 3.4rem 0
        text-align center
        img
          width 5.7rem
          height 1.92rem
      .loading-rightw
        font-size .6rem
        padding 0 .84rem
        text-align center
        .loading-right
          height 2rem
          line-height 2rem
          border-radius 2px
          border 1px solid #b4282d
          font-weight 700
          margin-bottom .64rem
          &.one
            color #fff
            background #b4282d
          &.two
            color #b4282d

</style>
