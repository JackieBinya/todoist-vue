<template>
  <div>
    <Menu />

    <div id="home">
      <main>
        <hero-section />

        <demo-section />

        <reviews-section />

        <community-section />

        <testimonials-section></testimonials-section>

        <mission-section></mission-section>

        <section class="todoist-secondary-call">
          <div class="todoist-secondary-call-wrapper">
            <div class="todoist-secondary-call-text">
              <h2>Achieve piece of mind with Todoist</h2>

              <CallToAction />
            </div>

            <img src="@/assets/secondary-call.webp" alt="" />
          </div>
        </section>
      </main>

      <footer-section />
    </div>
  </div>
</template>

<script>
// import { ChevronDownIcon, ChevronUpIcon } from "vue-feather-icons";
import Menu from "@/components/Menu.vue";
import CallToAction from "@/components/CallToAction.vue";
import HeroSection from "../components/home/hero-section.vue";
import DemoSection from "../components/home/demo-section.vue";
import ReviewsSection from "../components/home/reviews-section.vue";
import CommunitySection from "../components/home/community-section.vue";
import TestimonialsSection from "../components/home/testimonials-section.vue";
import MissionSection from "../components/home/mission-section.vue";
import FooterSection from "../components/home/footer-section.vue";

export default {
  components: {
    Menu,
    CallToAction,
    HeroSection,
    DemoSection,
    ReviewsSection,
    CommunitySection,
    TestimonialsSection,
    MissionSection,
    FooterSection
  },
  data() {
    return {
      showDropdown: false
    };
  }
};
</script>

<style lang="scss">
#home {
  // The rule below ensures that the overlay covers the whole view port
  position: relative;
  width: 100%;
}

//Todoist Reviews Section

.todoist-reviews {
  position: relative;
  background-color: #fff;

  @media (min-width: 1024px) {
    // margin: -5rem 0 0rem;
    padding: 5rem 0 5rem;
  }
}

.todoist-reviews-content {
  white-space: pre-line;
  margin: 2rem 0 0;
  padding: 2rem 0 1rem;
  background: #ffd669;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 19;

  p {
    margin-bottom: 0.8rem;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.1;
    letter-spacing: 0.01em;
    margin-bottom: 0.8em;

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  > div {
    text-align: center;
    padding: 0.8rem 0.5rem;

    @media (min-width: 1024px) {
      text-align: left;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    background: none;
    max-width: 1088px;
    margin: 0 auto;
    top: 1rem;
  }
}

.todoist-reviews-background {
  position: absolute;
  top: 0;
  background: url("../assets/reviews-bacground.webp");
  width: 100%;
  height: 100%;
  background-size: auto 100%;
  background-repeat: repeat-x;
  background-position: 50%;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}

// Todoist Secondary Call Section Styles
.todoist-secondary-call {
  padding: 3rem 1rem;

  background: #fff9f3;

  &-text {
    text-align: center;

    @media (min-width: 1024px) {
      width: 52%;
      text-align: left;
    }
  }

  h2 {
    width: 100%;
    padding: 0 1rem;

    @media (min-width: 1024px) {
      font-size: 3.4rem;
      margin-top: 1em;
      line-height: 1.1;
      letter-spacing: -0.02em;
      padding: 0;
    }
  }

  img {
    max-width: 404px;
    max-height: 468px;
    display: none;
    margin: -10rem 0 0 0;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &-wrapper {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      max-width: 1088px;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
}
</style>
