<template>
  <section class="good-item" @click="itemClick">
    <img :src="goodItem.src" alt="商品图片">
    <p>{{goodItem.title}}</p>
  </section>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    goodItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    itemClick () {
      this.$router.push('/detail/' + this.goodItem.id);
    }
  }
}
</script>

<style scoped>
  .good-item {
    width: 50%;
    padding: 5px;
    overflow: hidden;
    box-sizing: border-box;
    
  }
  .good-item img {
    width: 100%;
    border-radius: 5px;
  }
  .good-item p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>