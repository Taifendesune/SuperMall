<template>
  <div id="back"></div>
</template>

<script>
export default {
  name: 'BackBtn'
}
</script>

<style>
  #back {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-left: 3px solid var(--color-text);
    border-bottom: 3px solid var(--color-text);
    border-right: 3px solid transparent;
    border-top: 3px solid transparent;
    transform: rotate(45deg);
  }
</style>