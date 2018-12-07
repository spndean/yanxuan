<template>
    <div>
      <LoadingHeader/>
      <div class="phone">
        <img src="./images/2.png" alt="">
      </div>
      <div class="phone-content">
        <input class="phone-q" placeholder="邮箱账号" v-model="email">


        <div class="phone-q" @click="isShowPwd=!isShowPwd">
          <input :type="isShowPwd? 'text': 'password'" class="phone-q" placeholder="密码" >
        </div>
        <div class="phone-q">
          <span>遇到问题？</span>
          <span>使用密码登陆</span>
        </div>
        <div class="loading-right one">
          <span >登陆</span>
        </div>
        <div class="loading-right two" @click="goto('/Loading')">
          <span>其他登陆方式</span>
        </div>
        <div class="loading-right three">
          <span>注册账号</span>
        </div>
      </div>

    </div>
</template>
<script>
  import LoadingHeader from  '../../components/LoadingHeader/LoadingHeader.vue'
    export default {
      data(){
          return{
            email:'',
            isShowPwd: false, // 是否显示密码
          }
      },

      components:{
        LoadingHeader
      },
      computed: {
        isRightemail () {
          return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
        }
      },
      methods : {
        goto(path){
          this.$router.replace(path)
        }
      },


    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scopet>
  .phone
    width 100%
    margin-top 1.11rem
    text-align center
    img
      width 4rem
      height 1.28rem
  .phone-content
    font-size .64rem
    color #aaa
    padding 2.6rem .9rem 0
    .phone-q
      height 2.3rem
      line-height 2rem
      width 13rem
      border-bottom 1px solid #ccc
      outline none
    .loading-right
        height 2rem
        line-height 2rem
        border-radius 2px
        border 1px solid #b4282d
        font-weight 700
        margin-bottom .64rem
        text-align center
        &.one
          color #fff
          background #b4282d
        &.two
          color #b4282d
        &.three
          border none
</style>
