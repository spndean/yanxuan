<template>
  <div>
      <header class="header">
        <div class="logo">
          <a href="javascript:;">网易严选</a>
        </div>
        <div class="search">
          <span><i class="iconfont icon-sousuo"></i></span>
          <span>搜索商品，共19704件好物</span>
        </div>
        <div class="login" @click="goto('/loading')">登录</div>
      </header>
      <div class="nav">
        <ul class="navlist">
          <li v-for="(item,index) in msiteData.headCateList" :key="index" >
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>

  <!--轮播图-->
      <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in msiteData.focusList" :key="index" >
          <div class="banImg">
            <img  v-lazy="item.picUrl" alt="">
          </div>
        </div>
      </div>
      <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
      <div class="swiper-pagination"></div>
    </div>

    <shopList/>



    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import shopList from '../../components/shopList/shopList.vue'
  import {mapState} from 'vuex'


    export default {
      components:{
        shopList
      },
      /*
       bug: 分类轮播有问题
       解决: watch + nextTick()
       */
      watch: {
        // 更新状态数据==>调用监视的回调函数 ==> 异步更新界面 ==> 执行$nextTick()指定的回调函数
        item (){ // categorys的状态更新了
          // 必须在列表数据页面显示之后才创建
          // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它

        }
      },

      mounted(){

          this.$store.dispatch('getMsiteData');


          setTimeout(() => {
            new Swiper('.swiper-container', {
              loop: true, // 循环模式选项zx f
              // 如果需要分页器
              autoplay : true ,      //循环
              pagination: {
                el: '.swiper-pagination',
              },
            })
          },500)


//        要等到页面渲染完成再执行，所以写在mounted中   mounted是在初始页面显示之后执行
//            new Swiper('.swiper-container', {
//          loop: true, // 循环模式选项
//          // 如果需要分页器
//          pagination: {
//            el: '.swiper-pagination',
//          }
//        });

          this.$nextTick(() => {
            this.scroll = new BScroll('.nav',{
                        scrollX : true
                    })
          })
      },
      computed:{
        ...mapState(['msiteData','item'])
      },
      methods:{
        goto(path){
          this.$router.replace(path)
        }
  }



    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .header
    width 100%
    position fixed
    top 0
    left 0
    z-index 5
    padding .33rem .64rem
    background #fff
    div
      float left
    .logo
      font-size .8rem
      margin-right .41rem
    .search
      height 1.1rem
      line-height 1.1rem
      text-align center
      width 8.8rem
      font-size .6rem
      color #666
      background #ededed
      .iconfont
          font-size .48rem
    .login
      width 1.6rem
      height .8rem
      line-height .8rem
      text-align center
      color #b4282d
      font-size .5rem
      border 1px solid #b4282d
      border-radius .16rem
      margin-left .33rem

  .nav
    height 1.28rem
    margin-top 1.8rem
    .navlist
      width 30rem
      display flex
      line-height 1.28rem
      font-size .6rem
      padding 0 .64rem
      white-space nowrap
      li
        flex-flow row nowrap
        padding 0  .33rem

  .swiper-slide
    .banImg
      width 20opx
      height 200px
      img
        width 100%
        height 100%
</style>
