<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        购物街
      </template>
    </nav-bar>
    <home-swiper :swipers="swipers"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view :feature="feature"></feature-view>
    <tab-control @tab-click="currentTab = $event" class="tab-control-home" :titles="titles"></tab-control>
    <good-list :goods="goods[currentTabName].list"></good-list>
    <back-top></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComponent/HomeSwiper';
import RecommendView from './childComponent/RecommendView';
import FeatureView from './childComponent/FeatureView';

import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodList from 'components/content/goodsList/GoodList';
import BackTop from 'components/content/backTop/BackTop';

import * as network from 'network/home';

export default {
  name: "Home",
  created () {
    this.getHomeGoods();
  },
  data() {
    return {
      swipers: [
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
        {href: 'http://www.bilibili.com'},
      ],
      recommends: [
        {id: 1, title: '战斗法师', href: 'http://www.bilibili.com', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598696669877&di=c8a748eeccc1f076b803fcc92ad3ca6a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F12%2F20170312180706_dxnUW.jpeg'},
        {id: 2, title: '元素师', href: 'http://www.bilibili.com', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598697530905&di=9d9fd7c9f2aa74b563bed62feb405799&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F6b9d10fd9300bb0f0a4df9cd3b180b593ff528ad.jpg'},
        {id: 3, title: '魔道学者', href: 'http://www.bilibili.com', src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2664117381,3770808857&fm=15&gp=0.jpg'},
        {id: 4, title: '召唤师', href: 'http://www.bilibili.com', src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3503917445,2136004486&fm=15&gp=0.jpg'}
      ],
      feature: {
        href: 'http://www.bilibili.com',
        src: ''
      },
      goods: {
        sell: {
          page: 0,
          list: []
        },
        pop: {
          page: 0,
          list: []
        },
        casual: {
          page: 0,
          list: []
        }
      },
      titles: ['精选', '流行', '休闲'],
      currentTab: 0
    };
  },
  computed: {
    currentTabName () {
      switch (this.currentTab) {
        case 0: return 'sell';
        case 1: return 'pop';
        case 2: return 'casual';
      }
    }
    
  },
  created () {
    this.getHomeGoods('sell');
    this.getHomeGoods('pop');
    this.getHomeGoods('casual');  
  },
  methods: {
    getHomeGoods (type) {
      network.getGoods(type, ++this.goods[type].page)
      .then(res => {
        this.goods[type].list.push(... res);
      })
    }  
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    BackTop
  }
};
</script>
<style scoped>
  @import url("home.css");
</style>