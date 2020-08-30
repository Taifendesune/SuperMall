<template>
  <nav-bar class="detail-nav-bar">
      <template #left>
        <div class="detail-nav-left"  @click="backClick">
          <back-btn></back-btn>
        </div>
      </template>
      <template #center>
        <ul class="titles">
          <li v-for="title in titles" @click="itemClick(title)" :key="title" :class="{'active-item' : currentTitle === title}">
            {{title}}
          </li>
        </ul>
      </template>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import BackBtn from 'components/common/backBtn/BackBtn';


export default {
  name: 'DetailNavBar',
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentTitle: '商品'
    }
  },
  components: {
    NavBar,
    BackBtn
  },
  methods: {
    itemClick (title) {
      this.currentTitle = title;
    },
    backClick () {
      console.log(this.$router.back())
    }
  }
}
</script>

<style scoped>
  .titles {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    color: var(--color-text);
  }
  .active-item {
    color: var(--color-high-text);
  }
  .detail-nav-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>