<template>
  <div id="bottom-bar">
    <div class="cart" @click="addCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  data () {
    return {

    }
  },
  methods: {
    addCart () {
      this.$emit('add-cart');
    }
  }
}
</script>

<style>
  #bottom-bar {
    width: 100vw;
    height: 58px;
    position: fixed;
    bottom: 0;
    z-index: 3;
    background: #fff;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    box-shadow: 0 0 1px var(--color-text);
  }
  .cart, .buy {
    height: 100%;
    width: 25%;
    text-align: center;
    line-height: 58px;
    cursor: pointer;
  }
  .cart {
    background: yellow;
  }
  .buy {
    background: var(--color-high-text);
    color: #fff;
  }
</style>