<template>
  <section class="todoist-hero">
    <div class="todoist-hero-text">
      <div>
        <h1>
          Organize it all <br />
          <span>with Todoist</span>
        </h1>
        <call-to-action />
      </div>
    </div>

    <div class="todoist-hero-images">
      <img
        src="https://todoist.com/_next/static/images/header@2x_b52d8f7c7bf19d6c702569d1072ed6a2.webp"
        alt="people using todoist to get organized"
      />
      <img
        src="@/assets/hero-secondary.webp"
        class="interface-background"
        alt=""
      />
    </div>
  </section>
</template>

<script>
import CallToAction from "@/components/CallToAction.vue";
export default {
  name: "HeroSection",
  components: {
    CallToAction
  }
};
</script>

<style lang="scss">
.todoist-hero {
  &-text {
    position: relative;
    z-index: 12;
    display: flex;
    justify-content: center;
    padding: 8rem 1rem 0;
    margin-bottom: -2rem;

    h1 {
      font-size: 2.75rem;
      line-height: 1.05;
      font-weight: 900;

      span {
        display: inline-block;
        padding-left: 1.8rem;
      }

      @media (min-width: 768px) {
        font-size: 3.75rem;
      }

      @media (min-width: 1024px) {
        font-size: 5rem;
      }
    }

    > div > div {
      display: flex;
      justify-content: center;
    }

    @media (min-width: 768px) {
      margin-bottom: -5rem;
    }

    @media (min-width: 768px) {
      margin-bottom: -6rem;
    }
  }

  &-images {
    position: relative;

    img:first-child {
      width: 100%;
      max-width: 1034px;
      margin: 0 auto;
    }

    // The image below is the background image for the section that follows i.e. todoist-interfaces

    img:nth-child(2) {
      display: none;
      width: 100%;
      transform: translate(-50%);
      position: absolute;
      left: 50%;
      top: 28rem;

      @media (min-width: 768px) {
        display: block;
      }

      @media (min-width: 1024px) {
        top: 38rem;
      }
    }
  }
}
</style>
