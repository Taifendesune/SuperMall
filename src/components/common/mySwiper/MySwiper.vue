<template>
  <div id="al-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot name="items"></slot>
    </div>
    <div class="indicator"  v-if="showIndicator && totalNumber>1">
      <slot name="indicator">
        <div v-for="(item, index) in totalNumber" class="indicator-item" :class="{'active-indicator': index === currentIndex-1 || index === currentIndex - 6}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySwiper",
  data() {
    return {
      timer: null,
      currentIndex: 1,
      totalNumber: 0,
      itemWidth: 0,
      swiperStyle: {},
      animationPlaying: false,
      startX: 0,
      distance: 0
    };
  },
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    swiperDuration: {
      type: Number,
      default: 300
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
  },
  mounted() {
    this.init();
    this.startTimer();
  },
  methods: {
    init () {
      let swiper = document.querySelector(".swiper");
      let items = document.getElementsByClassName("swiper-item");
      this.totalNumber = items.length;
      this.itemWidth = items[0].clientWidth;
      if (this.totalNumber > 1) {
        let firstItem = items[0].cloneNode(true);
        let lastItem = items[this.totalNumber - 1].cloneNode(true);
        swiper.appendChild(firstItem);
        swiper.prepend(lastItem);
        this.swiperStyle = swiper.style;
        this.setTransform();
      }
    },

    startTimer () {
      this.timer = setInterval(() => {
        this.currentIndex++;
        this.scrollItem();
      }, this.interval);
    },

    stopTimer () {
      clearInterval(this.timer);
    },

    scrollItem () {
      this.animationPlaying = true;
      this.swiperStyle.transition = "transform " + this.swiperDuration + "ms";
      this.setTransform();
      this.checkPosition();
    },
    checkPosition () {
      setTimeout(() => {
        this.animationPlaying = false;
        this.swiperStyle.transition = 'transform 0ms';
        if (this.currentIndex > this.totalNumber) {
          this.currentIndex = 1;
          this.setTransform();
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }, this.swiperDuration);
    },
    setTransform () {
      this.swiperStyle.transform = `translateX(${-this.itemWidth * this.currentIndex}px)`;
    },
    touchStart (e) {
      if (this.animationPlaying) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove (e) {
      this.distance = e.touches[0].pageX - this.startX;
      this.swiperStyle.transform = `translateX(${-this.currentIndex * this.itemWidth + this.distance}px)`;
    },
    touchEnd () {
      let moveAll = Math.abs(this.distance);
      if (this.distance > 0 && moveAll > this.itemWidth * this.moveRatio) {
        this.currentIndex--;
        if (this.currentIndex <= 0) {
          this.currentIndex = 5;
        }
      } else if (this.distance < 0 && moveAll > this.itemWidth * this.moveRatio) {
        this.currentIndex++;
        if (this.currentIndex >= 6) {
          this.currentIndex = 1;
        }
      } else {
        this.distance = 0;
        this.startTimer();
        return;
      }
      this.setTransform();
      this.distance = 0;
      this.startTimer();
    }
  }
};
</script>

<style scoped>
#al-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.swiper-item {
  width: 100%;
  flex-shrink: 0;
}
.indicator {
  display: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: center;
  left: 0;
  bottom: 20px;
}
.indicator-item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background: #fff;
}
.active-indicator {
  background: var(--color-high-text);
}
</style>