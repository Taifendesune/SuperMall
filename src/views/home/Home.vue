<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>
        购物街
      </template>
    </nav-bar>
    <home-swiper :swipers="swipers"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComponent/HomeSwiper';

import * as network from 'network/home';

export default {
  name: "Home",
  data() {
    return {
      swipers: [
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
      ],
      recommends: null
    };
  },
  created () {
    // network.getHomeMultidata()
    // .then(successResponse => {
    //   this.slideShowImg = successResponse.data.binner.list;
    //   this.recommends = successResponse.data.recommend.list;
    // });
  },
  components: {
    NavBar,
    HomeSwiper
  }
};
</script>
<style scoped>
  @import url("home.css");
</style>