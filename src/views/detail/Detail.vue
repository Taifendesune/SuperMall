<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <home-swiper :swipers="swipers"></home-swiper>
    <div @click="$bus.$emit('aling', 'message')">详情页:id={{id}}</div>
    <bottom-bar @add-cart="addCart"></bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar';
import BottomBar from './childComponents/BottomBar';

import HomeSwiper from 'views/home/childComponent/HomeSwiper';

export default {
  name: 'Detail',
  data () {
    return {
      swipers: [
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
      ],
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id;
  },
  components: {
    DetailNavBar,
    BottomBar,
    HomeSwiper
  },
  mounted () {
    window.scrollTo(0, 0);
  },
  methods: {
    addCart () {
      this.$store.commit('addCart', {id: this.id})
    }
  }
}
</script>

<style>
  #detail {
    background: #fff;
    position: relative;
    height: 1000px;
    z-index: 2;
    padding: 44px 0 58px 0;
  }
  .detail-nav-bar {
    position: fixed;
    top: 0;
    background:#fff;
    width: 100vw;
    z-index: 3
  }
</style>