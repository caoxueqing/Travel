<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" :alt="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped >
    @import '~styles/mixins.styl'
    .title
        line-height .8rem
        background #eeeeee
        text-indent .2rem
    .item
        border-bottom 1px solid #eeeeee
        &:last-of-type
            border-bottom none
        .item-img-wrapper
            overflow hidden
            height 0
            padding-bottom 37.09%
            .item-img
                width 100%
        .item-info
            padding .14rem .2rem .2rem .2rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #cccccc
                ellipsis()
</style>
