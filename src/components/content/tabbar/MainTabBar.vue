<template>
  <tab-bar>
      <tab-bar-item path="/home" :active-color="'var(--color-high-text)'">
        <template #item-img>
          <img src="~assets/img/common/shouye.svg" alt="首页" />
        </template>
        <template #item-img-act>
          <img src="~assets/img/common/shouye-active.svg" alt="首页" />
        </template>
        <template #item-text>
          <span>首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" :active-color="'var(--color-high-text)'">
        <template #item-img>
          <img src="~assets/img/common/shouye.svg" alt="分类" />
        </template>
        <template #item-img-act>
          <img src="~assets/img/common/shouye-active.svg" alt="分类" />
        </template>
        <template #item-text>
          <span>分类</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" :active-color="'var(--color-high-text)'">
        <template #item-img>
          <img src="~assets/img/common/gouwuche.svg" alt="购物车" />
        </template>
        <template #item-img-act>
          <img src="~assets/img/common/gouwuche-active.svg" alt="购物车" />
        </template>
        <template #item-text>
          <span>购物车</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" :active-color="'var(--color-high-text)'">
        <template #item-img>
          <img src="~assets/img/common/profile.svg" alt="我的" />
        </template>
        <template #item-img-act>
          <img src="~assets/img/common/profile-active.svg" alt="我的" />
        </template>
        <template #item-text>
          <span>我的</span>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>