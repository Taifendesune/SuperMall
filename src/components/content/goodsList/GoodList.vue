<template>
  <div id="good-list" class="good-list">
    <good-list-item v-for="good in goods" :good-item="good" :key="good.id" />
  </div>
</template>

<script>
import GoodListItem from './GoodListItem';

export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style>
  .good-list {
    display: flex;
    flex-flow: row wrap;
  }
</style>