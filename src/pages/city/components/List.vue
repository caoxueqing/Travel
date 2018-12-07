<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="erea">
                <div class="title border-top-bottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currntCity}}</div>
                    </div>
                </div>
            </div>
            <div class="erea">
                <div class="title  border-top-bottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id"
                         @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="erea" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title  border-top-bottom">{{key}}</div>
                <div class="item-list">
                    <div class="item"
                        v-for="innerItem of item" 
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >{{innerItem.name}}</div>
                </div>
            </div>
        </div>
        <div class="now_num" v-if="isShow"><span>{{now_num}}</span></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState,mapActions } from 'Vuex'
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String,
    },
    computed: {
        ...mapState({
            currntCity: 'city'
        })
    },
    data () {
        return {
            now_num: '',
            isShow: false,
            timer: null
        }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.dispatch("changeCity",city);
            this.changeCity(city)
            this.$router.push('/');
        },
        ...mapActions(['changeCity'])
    },
    watch : {
        letter () {
            const element = this.$refs[this.letter][0];
            this.scroll.scrollToElement(element);
            this.now_num = this.letter;
            if(this.timer){
                clearTimeout(this.timer);
                this.isShow = true;
            }
            
            this.timer = setTimeout( () => {
                this.isShow = false;
            },600)
            
        }
    },
    mounted () {
       this.scroll = new BScroll(this.$refs.wrapper);
    },
}
</script>

<style lang="stylus" scoped>
  .list
    overflow hidden
    position absolute
    top 1.58rem;
    left 0
    right 0
    bottom 0
    .now_num
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      margin auto 
      width 1rem
      height 1rem
      line-height 1rem
      border-radius 50% 
      background rgba(11,11,11,.26)
      color #ffffff
      text-align center
      font-size .45rem
      z-index 999
    .border-top-bottom
      border 1px solid #CCC
      border-right none 
      border-left none
    .title
      line-height .54rem
      background #eeeeee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
        border-bottom 1px solid #EEE
</style>
