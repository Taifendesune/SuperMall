<template>
  <div class="back-top">
    <img src="~assets/img/common/backtop.svg" alt="回到顶部">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #fff;
    display: grid;
    grid-template: 1fr / 1fr;
    place-items: center;
  }
  .back-top img {
    width: 60%;
    height: 60%;
  }
</style>