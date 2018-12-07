<template>
    <div>
      <div class="header">
        <div class="search">
          <span>搜索商品，共19760款好物</span>
        </div>
      </div>
      <div class="classify">
        <ul class="classifyList">
          <li v-for="(item,index) in classifyData" :key="index" @click="handleClick(index)">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="classify-content" v-if="rightUl">
        <div class="top">
          <img v-lazy="rightUl.bannerUrl" alt="">
        </div>
        <div class="content" >
          <ul>
            <li v-for="(lis,index) in rightUl.subCateList" :key="index">
              <a href="javascript:;">
                <div class="img">
                  <img v-lazy="lis.wapBannerUrl" alt="">
                </div>
                <div class="name">
                  <span>{{lis.name}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      data(){
        return{
            navIndex:0
        }
      },
      mounted(){
        this.$store.dispatch('getClassifyData')
      },
      computed:{
        ...mapState(['classifyData']),
        rightUl(){
          return this.classifyData[this.navIndex]
        }
      },
      methods:{
          handleClick(index){
              this.navIndex = index
          }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scopet>
  .header
    z-index 5
    position fixed
    top 0
    left  0
    height 1.87rem
    width 90%
    padding  .2rem .64rem
    font-size .6rem
    background #fff
    .search
      width 100%
      height 1.17rem
      line-height 1.17rem
      text-align center
      background #ededed
  .classify
    position absolute
    top 0
    left 0
    width 3.5rem
    font-size .6rem
    margin-top 1.87rem
    .classifyList
      padding-top .8rem
      li
        width 100%
        height .96rem
        line-height .96rem
        margin-bottom  .84rem
        text-align center
        a
          color #333
  .classify-content
    box-sizing border-box
    margin 1.87rem 0 0 3.45rem
    padding .64rem .64rem .44rem
    .top
      width 100%
      height 4rem
      margin-bottom .67rem
      img
        width 100%
        height 100%
    .content
      li
        display inline-block
        width  2.7rem
        margin-right .7rem
        .img
          width 3rem
          height 3rem
          img
            height 100%
            width 100%


        .name
          height  1.53rem
          text-align center
          color #333
          font-size .51rem

</style>
