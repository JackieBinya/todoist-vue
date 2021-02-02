<template>
  <div :class="[showOverlay ? 'show' : 'hide', 'yt-video-wrapper']">
    <youtube :video-id="videoId" ref="youtube"></youtube>
  </div>
</template>

<script>
export default {
  name: "YoutubeVideo",
  data() {
    return {
      videoId: "IL8jpc8Lik4"
    };
  },
  computed: {
    showOverlay() {
      return this.$store.state.showOverlay;
    }
  }
};
</script>

<style lang="scss" scoped>
.yt-video-wrapper {
  width: 288px;
  height: 162.016px;
  position: absolute;
  top: 48%;
  z-index: 99;
  left: 10%;

  @media (min-width: 768px) {
    width: 614px;
    height: 345.409px;
    top: 58%;
  }

  @media (min-width: 1024px) {
    width: 1093px;
    height: 614.872px;
    top: 49.5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
