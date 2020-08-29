<template>
  <div class="recommends">
    <section v-for="item in recommends" :key="item.id" class="recommend-item">
      <a :href="item.href">
        <img :src="item.src" alt="">
        <div>{{item.title}}</div>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  @import url(recommend-view.css);
</style>