<template>
  <div class="headerSwiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HeaderSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/b4/7101381b7b2c0702.jpg_750x200_b8da41bf.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/ce/bca92895556c5002.jpg_750x200_cf56d46c.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/f0/b39b64c33a62e002.jpg_750x200_3e961ce7.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .headerSwiper >>> .swiper-pagination-bullet-active
    background #ffffff
  .headerSwiper
    overflow hidden
    height 0
    width 100%
    padding-bottom: 26.7%;
    background #eeeeee
    .swiper-img
      width 100%
</style>
