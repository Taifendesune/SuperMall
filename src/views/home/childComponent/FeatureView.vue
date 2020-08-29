<template>
  <div class="feature">
    <a :href="feature.href">
      <header>本周热卖</header>
      <img src="~assets/imitate/swiper/5.jpg" alt="本周热卖">
    </a>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
  props: {
    feature: {
      type: Object,
      default () {
        return {
          href: '',
          src: ''
        };
      }
    }
  }
}
</script>

<style scoped>
  .feature {
    width: 100%;
  }
  .feature a {
    width: 100%;
    display: block;
    text-decoration: none;
  }
  .feature a header {
    font-size: 1.5rem;
    line-height: 2.5em;
    text-align: center;
    
    color: var(--color-text);
  }
  .feature a img {
    width: 100%;
  }
</style>