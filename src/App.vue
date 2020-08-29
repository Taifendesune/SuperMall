<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/tabbar/MainTabBar';


export default {
  name: 'App',
  data () {
    return {
      message: ''
    }
  },
  components: {
    MainTabBar
  },
  mounted () {
    
  }
}
</script>

<style>
  @import url('~assets/css/base.css');
</style>
