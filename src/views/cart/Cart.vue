<template>
  <div>
    <section v-for="item in $store.state.cartList" :key="item.id">
      id为{{item.id}}，数量为{{item.count}}
    </section>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>