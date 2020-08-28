<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!active">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-act"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'pink'
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path);
    }
  },
  computed: {
    active () {
      return this.$route.path.includes(this.path);
    },
    activeStyle () {
      return this.active ? {color: this.activeColor} : {}
    }
  }
};
</script>
<style scoped>
  
</style>