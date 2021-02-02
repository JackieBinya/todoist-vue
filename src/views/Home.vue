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

      <footer>
        <hr />

        <div class="todoist-footer-content">
          <router-link to="/">
            <img src="@/assets/footer-logo.svg" alt="" />
          </router-link>
          <div class="todoist-footer-content-links">
            <div class="todoist-footer-content-links-external">
              <router-link to="/">
                <img src="@/assets/footer-logo.svg" alt="" />
              </router-link>
              <p>
                Join millions of people who organize their lives with Todoist
              </p>
              <div>
                <router-link to="/">
                  <img src="@/assets/footer/facebook.svg" alt="" />
                </router-link>

                <router-link to="/">
                  <img src="@/assets/footer/twitter.svg" alt="" />
                </router-link>

                <router-link to="/">
                  <img src="@/assets/footer/youtube.svg" alt="" />
                </router-link>

                <router-link to="/">
                  <img src="@/assets/footer/instagram.svg" alt="" />
                </router-link>
              </div>
            </div>

            <div class="todoist-footer-content-links-internal">
              <div>
                <div class="todoist-footer-content-links-internal-heading">
                  Features
                </div>
                <router-link to="/">How it works </router-link>

                <router-link to="/">Premium </router-link>

                <router-link to="/">For Teams </router-link>

                <router-link to="/">Pricing</router-link>

                <router-link to="/">Templates</router-link>
              </div>

              <div>
                <div class="todoist-footer-content-links-internal-heading">
                  Resources
                </div>
                <router-link to="/">Download Apps</router-link>

                <router-link to="/"> Help Center</router-link>

                <router-link to="/"> Productivity Methods</router-link>

                <router-link to="/"> Refer a friend</router-link>

                <router-link to="/"> Integrations</router-link>
                <router-link to="/"> Channel Partners</router-link>

                <router-link to="/">Developer API </router-link>
              </div>

              <div>
                <div class="todoist-footer-content-links-internal-heading">
                  Company
                </div>
                <router-link to="/"> About Us</router-link>

                <router-link to="/"> We are hiring!</router-link>

                <router-link to="/">Blog </router-link>

                <router-link to="/">Press </router-link>

                <router-link to="/">Twist </router-link>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

export default {
  components: {
    Menu,
    CallToAction,
    HeroSection,
    DemoSection,
    ReviewsSection,
    CommunitySection,
    TestimonialsSection,
    MissionSection
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

// Footer Styles
footer {
  background: #fff9f3;
  color: rgb(31, 31, 31);
  padding: 4rem 1rem 3rem;
  position: relative;

  hr {
    color: rgba(0, 0, 0, 0.14);

    @media (min-width: 768px) {
      max-width: 500px;
      margin: 0 auto;
    }

    @media (min-width: 1024px) {
      max-width: 1020px;
    }
  }

  img {
    margin: 0;
  }

  .todoist-footer-content {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    padding: 4rem 1rem 1rem;

    > a {
      > img {
        width: 32px;
        height: 32px;
      }
      @media (min-width: 768px) {
        display: none;
      }
    }

    &-links {
      display: flex;
      flex-direction: column;
      margin-left: 3rem;
      width: 100%;

      @media (min-width: 768px) {
        margin-left: 0;
      }

      @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    &-links-external {
      p {
        margin-bottom: 2rem;
        font-size: 1rem;
        letter-spacing: 0.02em;
        line-height: 1.1;

        @media (min-width: 768px) {
          margin-top: 1rem;
        }

        @media (min-width: 768px) {
          font-size: 1.05rem;
          line-height: 1.5;
        }
      }

      div {
        display: flex;
        align-items: center;
      }

      > a {
        display: none;

        > img {
          width: 32px;
          height: 32px;
        }

        @media (min-width: 768px) {
          display: block;
        }

        @media (min-width: 1024px) {
          display: none;
        }
      }

      div > a {
        opacity: 0.45;
        width: 1.5rem;
        height: 1.5rem;
      }

      a:not(:first-child) {
        margin-left: 1rem;
      }

      @media (min-width: 1024px) {
        padding-top: 5.5rem;
        max-width: 300px;
      }
    }

    &-links-internal {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 3rem;

      &-heading {
        font-size: 1rem;
        line-height: 1.2;
        letter-spacing: 0.02em;
        color: #575757;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }

      > div:not(:first-child) {
        margin-top: 2rem;

        @media (min-width: 768px) {
          margin-top: 0;
        }
      }

      > div {
        @media (min-width: 1024px) {
          margin-right: 4rem;
        }
      }

      a {
        font-size: 0.93rem;
        line-height: 1.5;
        color: inherit;
        letter-spacing: 0.02em;
        margin: 0.8em 0;

        &:hover {
          text-decoration: underline;
        }

        @media (min-width: 1024px) {
          font-size: 1.05rem;
        }
      }

      @media (min-width: 768px) {
        flex-direction: row;
      }

      @media (min-width: 1024px) {
        flex: 1;
        align-items: flex-start;
        justify-content: flex-end;
      }
    }

    @media (min-width: 768px) {
      max-width: 500px;
      margin: 0 auto;
      padding-bottom: 3rem;
    }

    @media (min-width: 1024px) {
      max-width: 1088px;
      margin: 0 auto;
      padding: 1rem 1rem 1rem;
    }
  }
}
</style>
