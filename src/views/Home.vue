<template>
  <div>
    <Menu />

    <main id="home">
      <hero-section />

      <demo-section />

      <reviews-section />

      <community-section />

      <div class="overlay" :class="[showOverlay ? 'show-overlay' : '']"></div>

      <div id="player"></div>

      <section class="todoist-testimonials">
        <div
          class="todoist-testimonials-card"
          v-for="t in testimonials"
          :key="t.id"
          :ref="t.id"
        >
          <div class="todoist-testimonials-text">
            <div>“</div>
            <div>{{ t.content }}</div>
            <div>
              <div>{{ t.name }}</div>
              <div>{{ t.title }}</div>
            </div>
          </div>

          <div class="todoist-testimonials-images">
            <img :src="require(`@/${t.url}`)" alt="" />
          </div>
        </div>
      </section>

      <ul class="todoist-testimonials-selectors">
        <li
          v-for="t in testimonials"
          ref="list"
          :key="t.id"
          @click="selectCard(t.id)"
        >
          {{ t.subject }}
        </li>
      </ul>

      <section class="todoist-mission">
        <div class="todoist-mission-text">
          <h2>A task manager you can trust for life</h2>
          <p class="p-content">
            In the 13 years and 358 days that we’ve been building Todoist, we’ve
            never considered selling out or becoming acquired.
          </p>

          <p class="p-content">
            Our team is committed to staying independent and earning your trust
            for as long as you need our apps.
          </p>

          <router-link to="/" class="link">
            <arrow-right-icon size="1.5x"></arrow-right-icon>
            <span>Learn about our long term mission</span>
          </router-link>
        </div>

        <div class="todoist-mission-image">
          <img src="@/assets/mission.webp" alt="" />
        </div>
      </section>

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
            <p>Join millions of people who organize their lives with Todoist</p>
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
</template>

<script>
// import { ChevronDownIcon, ChevronUpIcon } from "vue-feather-icons";
import Menu from "@/components/Menu.vue";
import CallToAction from "@/components/CallToAction.vue";
import { ArrowRightIcon } from "vue-feather-icons";
import testimonialsData from "../assets/testimonials-data.json";
import HeroSection from "../components/home/hero-section.vue";
import DemoSection from "../components/home/demo-section.vue";
import ReviewsSection from "../components/home/reviews-section.vue";
import CommunitySection from "../components/home/community-section.vue";

export default {
  components: {
    Menu,
    ArrowRightIcon,
    CallToAction,
    HeroSection,
    DemoSection,
    ReviewsSection,
    CommunitySection
  },
  data() {
    return {
      showDropdown: false,
      showOverlay: false,
      innerWidth: "",
      testimonials: testimonialsData.data
    };
  },
  methods: {
    playVideo() {
      this.showOverlay = true;
      /* 
    const player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }); */
    },
    selectCard(id) {
      this.$refs[`${id}`][0].scrollIntoView({
        // behavior: "smooth",
        inline: "center"
      });
    }
  },

  mounted: function() {
    this.$refs.list[0].classList.add("active-list-item");

    const listArray = this.$refs.list;

    for (const item of listArray) {
      item.addEventListener("click", function() {
        const previous = document.querySelector(".active-list-item");

        previous.classList.remove("active-list-item");

        this.classList.add("active-list-item");
      });
    }
  }
};
</script>

<style lang="scss">
#home {
  // The rule below ensures that the overlay covers the whole view port
  position: relative;
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

// Testimonials Section
.todoist-testimonials {
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 1088px;
  margin: 0 auto;

  &-card {
    position: relative;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      width: 100%;
      padding-bottom: 6rem;
      background: #fff;
      z-index: -2;
    }
  }

  &-text-wrapper {
    position: relative;
    background: #fff;

    @media (min-width: 768px) {
      top: 19%;
    }
  }

  &-text {
    width: 284px;
    min-height: 360px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
    margin: 1rem;
    display: inline-flex;
    white-space: normal;
    flex-direction: column;
    // margin-right: 0.5rem;
    background: #fff;
    position: relative;

    > div:nth-child(1) {
      font-size: 4rem;
      padding: 1rem 1rem 0;
      line-height: 0.6;
    }

    > div:nth-child(2) {
      font-style: italic;
      font-size: 1.6rem;
      line-height: 1.6;
      padding: 0rem 1rem 1rem;
      font-family: "Crimson Text", serif;
    }

    > div:nth-child(3) {
      padding: 1rem;
    }

    @media (min-width: 768px) {
      min-width: 460px;
      min-height: 320px;
      border-radius: 12px;
      top: 55px;
    }
  }

  &-images {
    display: none;
    position: relative;
    width: 50%;
    height: 470px;

    img {
      width: 100%;
      max-height: 100%;
      transform: translateY(-11%);

      @media (min-width: 768px) {
        width: auto;
      }
    }

    @media (min-width: 768px) {
      display: block;
      position: absolute;
      right: 2%;
      top: 0;
      z-index: -1;
    }
  }

  &-selectors {
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    margin: 2rem 0;
    padding: 0 1rem 1rem;

    li {
      cursor: pointer;
      display: inline-block;
      color: #616161;
      padding: 1rem;
      font-size: 1rem;
      letter-spacing: 0;
      border-top: 2px solid #dedede;
    }

    @media (min-width: 768px) {
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    overflow: hidden;
  }
}

.active-list-item {
  border-top: 2px solid red !important;
}

// Todoist Mission
.todoist-mission {
  padding: 0 1rem 3rem;
  display: flex;
  justify-content: space-between;
  max-width: 1088px;
  margin: 0 auto;

  a {
    justify-content: center;

    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }

  p {
    margin: 1rem 0;
  }

  &-image {
    width: 45%;
    position: relative;
    top: -8rem;
    display: none;

    img {
      width: 100%;
      max-width: 495px;
      max-height: 470px;
      margin: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &-text {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      max-width: 500px;
      margin: 0 auto;
      padding-bottom: 8rem;
    }

    @media (min-width: 1024px) {
      text-align: left;
      max-width: 50%;
      margin: 0;
      padding: 0 1rem;
    }
  }

  @media (min-width: 768px) {
    padding: 4rem 0 0;
  }

  @media (min-width: 1024px) {
    padding: 12rem 0 0;
  }
}

/* .todoist-mission-image {
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
} */

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
