<template>
    <div>
      <LoadingHeader/>
      <div class="phone">
        <img src="./images/2.png" alt="">
      </div>
      <div class="phone-content">
        <input type="tel" class="phone-q" placeholder="请输入手机号"
                maxlength="11" v-model="phone">
        <div class="phone-q">
          <input class="phone-q email" placeholder="请输入短信验证码">
          <!--disabled 为false时不能操作按钮 所以当手机号不正确或者有倒计时时不能够操作-->
          <!--若外层有from包裹，点击时会出现刷新页面的行为，是因为提交了表单，
                解决： @click.prevent="sendCode"   加prevent阻止事件的默认行为 停止事件冒泡-->
          <button class="phone-w"  :disabled="!isRightPhone || computeTime>0" :class="{right:isRightPhone}"
                  @click="sendCode"
                    >{{computeTime>0 ? `已发送(${computeTime}s)`:'获取验证码'}}
          </button>
          <input class="phone-m" placeholder="请输入密码">
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
            phone:'',
            computeTime:0,
          }
      },
      methods:{
        sendCode(){
            this.computeTime =  30
          const interval = setInterval(()=>{
            this.computeTime --;
            if(this.computeTime<=0){
              this.computeTime =  0
              clearInterval(interval)
            }
          },1000)
        },
        goto(path){
          this.$router.replace(path)
        }
      },
      components:{
        LoadingHeader
      },
      computed: {
        isRightPhone () {
          return /^1\d{10}$/.test(this.phone)
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
      .phone-w
        height 1rem
        line-height 1rem
        float right
        border 1px solid #ccc
        border-radius 1px
        margin-top .5rem
        &.right
          color #000
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
