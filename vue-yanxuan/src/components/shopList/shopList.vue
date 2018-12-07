<template>
    <div>
      <div class="shopList" v-for="(item,index) in msiteData.newItemList" :key="index">
        <div class="shopList-top" >
          <img v-lazy="item.listPicUrl" alt="">
        </div>
        <div class="carousel">
          <ul class="sole">
            <li class="li"  v-for="(item,index) in msiteData.newItemList" :key="index">
              <div class="img">
                <img v-lazy="item.primaryPicUrl" alt="">
              </div>
              <span>{{item.name}}</span>
              <span class="money">￥{{item.retailPrice}}</span>
              <span class="food">新品</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

    export default {
      computed:{
        ...mapState(['msiteData'])
      },
      mounted(){
          setTimeout(()=>{
              new BScroll('.carousel',{
                  scrollX:true,
                  click:true

              })
          },500)
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scopet>
  .shopList
    width 100%
    .shopList-top
      width 100%
      height 7.8rem
      img
        width 100%
        height 100%
    .carousel
      height 12rem
      margin 0.64rem
      .sole
        width 1100px
        display flex
        font-size .51rem
        height 10rem
        li
          margin-right .64rem
          .img
            width 6.25rem
            height 6.25rem
            img
              width 100%
              height 100%
          .money
            display block
            margin .2rem 0
            color red
          .food
            height .64rem
            padding .096rem .33rem
            background #f48f18
            color #fff
</style>
