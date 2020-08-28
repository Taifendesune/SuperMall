<template>
  <article id="tab-bar" class="tab-bar">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  }
};
</script>
<style scoped>
@import url("tabbar.css");
</style>