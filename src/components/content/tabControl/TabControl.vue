<template>
  <nav class="tab-control">
    <div v-for="(title, index) in titles" :key="title" :class="{'active' : currentIndex === index}" @click="itemClick(index)">
      <span>{{title}}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TabControl',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit('tab-click', index);
    }
  }
}
</script>
<style scoped>
  .tab-control {
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-items: stretch;
    line-height: 40px;
    color: var(--color-text);
    background: #fff;
  }
  .tab-control div {
    text-align: center;
    border-bottom: 3px solid #fff;
  }
  .tab-control .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>