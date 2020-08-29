<template>
  <my-swiper>
      <template #items>
        <my-swiper-item>
          <a class="swiper-a" href="http://www.bilibili.com" target="_blank"><img src="~assets/imitate/swiper/1.jpg" alt=""></a>
        </my-swiper-item>
        <my-swiper-item>
          <a class="swiper-a" href="http://www.bilibili.com" target="_blank"><img src="~assets/imitate/swiper/2.jpg" alt=""></a>
        </my-swiper-item>
        <my-swiper-item>
          <a class="swiper-a" href="http://www.bilibili.com" target="_blank"><img src="~assets/imitate/swiper/3.jpg" alt=""></a>
        </my-swiper-item>
        <my-swiper-item>
          <a class="swiper-a" href="http://www.bilibili.com" target="_blank"><img src="~assets/imitate/swiper/4.jpg" alt=""></a>
        </my-swiper-item>
        <my-swiper-item>
          <a class="swiper-a" href="http://www.bilibili.com" target="_blank"><img src="~assets/imitate/swiper/5.jpg" alt=""></a>
        </my-swiper-item>
      </template>
    </my-swiper>
</template>

<script>
import MySwiper from 'components/common/mySwiper/MySwiper';
import MySwiperItem from 'components/common/mySwiper/MySwiperItem';

export default {
  name: 'HomeSwiper',
  data () {
    return {

    };
  },
  
  props: {
    swipers: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: {
    MySwiper,
    MySwiperItem
  }
};
</script>

<style>
  .swiper-a {
    display: block;
    width: 100%;
  }
  .swiper-a img {
    width: 100%;
  }
</style>