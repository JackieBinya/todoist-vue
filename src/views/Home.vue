<template>
  <div>
    <Menu />

    <main id="home">
      <hero-section />

      <demo-section />

      <section class="todoist-reviews">
        <div class="todoist-reviews-background"></div>

        <div class="todoist-reviews-content">
          <div v-for="review in reviews" :key="review.id">
            <p>
              {{ review.platform }}
            </p>
            <h4 class="todoist-reviews-desc">
              {{ review.description }}
            </h4>

            <div>
              ★★★★★
            </div>
          </div>
        </div>
      </section>

      <section class="todoist-community">
        <div class="todoist-community-patners">
          <p>
            Todoist has helped
            <br />
            millions of people complete
            <em>
              over 1.5 billion tasks
              <br />
              in 150+ million projects.
            </em>
          </p>

          <div class="todoist-community-patners-icons">
            <svg
              fill="#575757"
              viewBox="0 0 1100 1000"
              height="50"
              class="_2X7F_"
            >
              <path
                d="M2 776c3-5 9-6 16-1a1065 1065 0 00959 60c10-4 18-2 24 6 5 8 3 15-6 22a708 708 0 01-238 109A809 809 0 016 792c-4-3-6-7-6-10l2-6zm301-285c0-46 11-85 34-118s54-57 93-74c36-15 80-26 133-33l88-8v-17c0-43-5-71-14-86-14-20-36-30-66-30h-8c-22 2-41 9-57 21s-26 29-31 50c-3 13-9 21-20 23l-115-14c-11-3-17-9-17-18l1-7c11-59 39-103 84-132 44-29 96-45 155-48h25c76 0 135 20 178 59a191 191 0 0119 22l13 20 9 26 6 24 3 28 1 25v242a143 143 0 0022 79l23 30c4 6 6 11 6 16s-3 10-8 14l-90 78c-8 6-18 7-29 2a338 338 0 01-68-78c-37 41-74 66-110 76-23 7-51 10-84 10-51 0-93-16-126-47s-50-77-50-135zm172-20c0 26 7 47 20 63a64 64 0 0061 22l7-1c28-7 50-25 65-54a190 190 0 0023-78v-71c-39 0-68 3-88 8-59 17-88 54-88 111zm420 322l6-8c17-11 33-19 48-23a326 326 0 0193-10c30 3 48 8 54 15 3 4 4 10 4 18v7c0 23-6 51-19 83-13 31-30 57-53 76-3 3-6 4-9 4l-4-1c-4-2-5-6-3-11 25-58 37-98 37-121 0-7-1-13-4-16-7-8-25-12-56-12a470 470 0 00-86 8l-8-2c-1-1-2-3-1-4l1-3z"
              ></path>
            </svg>

            <svg fill="#575757" viewBox="0 0 22 22" height="50" class="_2X7F_">
              <defs>
                <path
                  id="facebook_svg__a"
                  d="M25.5 24.4c0 .7-.3 1.1-1 1.1h-5.4v-8h2.8l.4-3.4H19v-1.7c0-1 .2-1.7 1.6-1.7h1.9V8h-2.7c-2.4 0-4.3 1.4-4.3 4v2.1h-3v3.5h3v7.9h-10c-.7 0-1-.4-1-1V5.8c0-.6.3-1.4 1-1.4h19c.7 0 1 .8 1 1.4v18.5z"
                ></path>
              </defs>
              <use
                fill-rule="evenodd"
                transform="translate(-4 -4)"
                xlink:href="#facebook_svg__a"
              ></use>
            </svg>

            <svg fill="#575757" viewBox="0 0 46 47" height="50" class="_2X7F_">
              <path
                d="M.9 11l20.9-9.8a4 4 0 013.5.1c6.6 3 13.2 6.1 19.7 9.3.4.2 1 .4 1 1s-.6.7-1.1 1L26 21.4c-1.8.8-3.3.8-5 0L.9 12v-1zM1 36l3.7-2c1.5-.8 3-.6 4.5.1l12 5.7a5 5 0 004.5 0c4-1.9 8.1-3.7 12.2-5.8 1.5-.7 3-.7 4.4 0l2.7 1.3c.4.3 1 .4 1 1 0 .5-.6.7-1 .9l-9 4.3-10.3 4.8c-1.4.7-2.7.7-4 .1l-19.4-9-1-.8c-.3-.1-.3-.4-.3-.7z"
              ></path>
              <path
                d="M1 23.6l2.8-1.4c2.2-1.3 4.2-1 6.4 0 3.8 2 7.6 3.6 11.3 5.4 1.5.7 2.7.7 4.1 0l12-5.7c1.7-.8 3.3-.8 5 0l2.8 1.4c.8.5.7 1 0 1.5l-.7.3-19.3 9a4 4 0 01-3.8 0L2.4 25 1 24.3v-.7z"
              ></path>
            </svg>

            <svg
              fill="#575757"
              viewBox="0 220 652 252"
              width="120"
              height="120"
            >
              <path
                d="M71 320l10 1c4 1 8 6 8 9l-1 5-11 21a360 360 0 01-14-27 17 17 0 01-2-6c0-2 4-3 10-3zm-46 0c4 1 6 2 8 7 11 18 21 38 30 58l5 1 5-1c4-9 16-32 22-41a906 906 0 0121 41l4 1 5-1 27-56c4-6 5-8 12-9l3-1c1-1 1-5-1-6a184 184 0 01-32 0c-2 1-2 5-1 6l3 1 5 2c0 2 0 4-2 7l-11 27a489 489 0 01-14-28l-1-6 7-2 3-1c2 0 2-6 0-6l-36 1H46l-24-1c-2 1-2 5-1 6l4 1z"
                class="wework_svg__st0"
              ></path>
              <path
                d="M195 319c7 0 11 4 11 10l-2 4a19 19 0 01-8 1h-7c-7 0-10 0-10-2 0-6 7-13 16-13zm0 67a40 40 0 0035-20c0-3-3-4-5-4-5 8-13 9-19 9-19 0-29-13-29-26 1-3 1-3 6-3h39c6 0 7-2 7-6 0-13-11-25-33-25-25 0-43 17-43 39 0 19 14 36 42 36zm86-66l10 1c4 1 7 6 7 9v5l-11 21a360 360 0 01-15-27 17 17 0 01-1-6c-1-2 3-3 10-3zm-46 0c3 1 5 2 8 7l30 58 5 1 4-1 22-41a899 899 0 0121 41l5 1 5-1 27-56c3-6 5-8 11-9l3-1c2-1 1-5 0-6a183 183 0 01-33 0c-2 1-2 5-1 6l4 1 5 2-2 7-11 27a489 489 0 01-14-28l-2-6 8-2 3-1c1 0 2-6-1-6l-36 1h-41l-23-1c-2 1-2 5-1 6l4 1z"
                class="wework_svg__st0"
              ></path>
              <path
                d="M409 319c11 0 17 15 17 32 1 16-3 27-15 27s-18-14-18-32c0-19 7-27 16-27zm0 67c25 0 47-12 47-38 0-24-22-37-46-37s-47 14-47 39c0 24 22 36 46 36z"
                class="wework_svg__st0"
              ></path>
              <path
                d="M490 326c1 0 3 0 8 3 2 2 5 4 8 4 6 0 13-4 13-12 0-6-6-10-11-10-9 0-15 6-20 9-2-1-2-1-2-3v-7c0-1-1-2-3-2-6 4-20 8-30 11v5l3 2c4 2 4 4 4 11v27c0 12-1 13-8 14h-4c-1 1-1 5 1 6a856 856 0 0151 0c2-1 2-5 0-6h-6c-7-1-8-2-8-15v-27c0-6 1-10 4-10"
                class="wework_svg__st0"
              ></path>
              <path
                d="M570 378h-3c-1 2-1 5 1 6a523 523 0 0151 0c2 0 2-5 0-6h-3l-12-4a283 283 0 01-28-37l2-2 13-11a36 36 0 0114-6l6-1c2-1 2-5 0-6a342 342 0 01-39 3h-5c-2 0-2 4 0 6h5l4 2-5 7-9 9c-4 4-8 5-11 5s-3-1-3-3v-81l-3-1a258 258 0 01-31 10c-2 1-2 4 0 5l3 2c4 2 4 4 4 11v77c0 13 0 14-8 15h-4v6a593 593 0 0150 0v-6h-3c-7-1-8-2-8-15v-10c0-3 1-4 2-4 2 0 4 1 5 3l15 19 3 5-3 2"
                class="wework_svg__st0"
              ></path>
            </svg>

            <svg
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 100 560 200"
              width="120"
              height="120"
            >
              <path
                fill="#575757"
                d="M281 126c4 0 7 1 9 3 3 3 4 8 2 12-6 12-20 21-29 23-6 2-13 2-19 0-2 1-4 6-7 4-5-3-1-9-4-13l-2-2c-4-8 1-15 6-21 8-9 31-20 44-6zm-27 6c-4 1-10 3-12 6-3 3-5 6-3 10 6-5 8-11 15-15v-1zm28 1c-12-1-21 8-29 17-1 1-4 3-1 4 11 1 22-2 30-10 2-2 4-5 3-8l-3-3zm101 51c6 13 10 34 0 47-2 3-7 6-10 3-12-9-16-21-23-33-1-1-1 1-2 1-2 12 2 27-6 36-3 1-5-1-6-4-4-12 0-24 1-36 2-6 3-13 8-18 9 3 13 13 18 20l10 16c4-2 2-6 2-9-1-11-4-21-7-32 0-3-2-7 1-9 8 3 11 11 14 18zm-51-4c0 2-2 6-4 6-16 3-34 1-49 6-1 2 1 2 2 3 13 2 27 2 40 6 7 1 9 9 10 16 0 5-2 11-7 15-13 8-32 8-45 0-4-2-9-7-9-12 0-4 1-8 4-10 13-4 28-2 38 5 1 3-3 3-4 4-12 7-21-8-32-2-1 1-2 3-1 4 14 6 29 2 42-2l3-3c0-6-6-7-10-8-12-3-24-3-37-4l-6-5c-1-4-1-9 2-13 16-14 40-12 60-9l3 3zm-74 6l2 49c0 2-3 3-5 3-2 1-6 0-7-1-4-6-3-15-3-22 1-12 0-26 4-37 0-1 2-3 4-2 4 2 5 6 5 10zm188-2c1 1 2 4 0 4-7 4-18 2-26 3-3 2-5 6-4 9l3 1c5 0 13-3 17 3 1 1 0 7-3 7-6 1-17-1-20 1-4 2-4 8-6 12 3 2 6 0 10-1 6-1 13-3 19-1 1 2 3 4 2 7-11 9-25 17-39 11-6-2-8-11-6-18 1-5 6-10 3-15-1-3 1-5 3-5 5 0 4-7 7-10-3-4-11-4-11-11 4-2 9-1 14-2 10-2 21-3 31-2 2 0 5 4 6 7zm-242-39c16 13 36 35 33 60-3 20-24 35-41 40-18 5-39 4-57 0-1 3-3 7-6 9-3 0-6 0-8-2-5-5-1-14-8-17-15-6-31-19-39-34-1-3 0-6 2-8 12-10 27-14 41-16l2-2c0-10 1-20 4-29 1-2 3-2 4-1 9 7 5 20 9 30 18 1 35 2 49 12 5 4 6 11 5 15-2 5-7 8-11 8-3 0-9 0-9-2 1-2 11-6 8-9-5-5-27-8-41-9-1-1-3 0-3 2 0 13-1 27 1 39l2 2c24 4 50 2 69-12 9-7 12-17 10-28-8-31-40-49-66-61-26-11-54-17-84-16-5 1-13 2-13 4s9 1 8 4c-1 4-10 2-13 1-2-1-2-5-2-7 7-12 26-13 34-13 46-1 91 16 120 40zm-83 46c-12 0-24 1-35 5-2 1-5 3-3 6a64 64 0 0038 23l1-33-1-1zm351-16c-1 15-15 24-15 39l2 1c11-12 22-29 38-34 4-1 8 3 10 6 5 11 4 27-4 37s-22 20-38 18c-7 17-11 34-14 51-1 4-4 1-6 0-14-11-3-39-2-43l7-20c-6-11-2-25 3-36 4-7 10-14 17-19h2zm27 19c-2-1-3 2-5 3-7 8-15 17-19 28 5 0 10-3 14-5 8-5 13-13 12-22l-2-4z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="todoist-community-video">
          <img
            src="@/assets/community-video-background.webp"
            alt=""
            class="thumbnail-background"
          />
          <img src="@/assets/community-vid.webp" alt="" class="thumbnail" />

          <div role="button" @click="playVideo">
            <svg viewBox="0 0 60 61" class="_2o_bh">
              <g fill="none" fill-rule="evenodd" transform="translate(0 .2)">
                <circle cx="30" cy="30" fill="#000" r="30"></circle>
                <path d="M45 30.5L22 42V19z" fill="#fff"></path>
              </g>
            </svg>
          </div>
          <!--  <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IL8jpc8Lik4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->
        </div>
      </section>

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

export default {
  components: {
    Menu,
    ArrowRightIcon,
    CallToAction,
    HeroSection,
    DemoSection
  },
  data() {
    return {
      showDropdown: false,
      showOverlay: false,
      innerWidth: "",
      testimonials: testimonialsData.data,
      reviews: [
        {
          id: 1,
          platform: "Google Play",
          description: "Editor’s Choice \n 4.7 stars, 187K+ reviews"
        },
        {
          id: 2,
          platform: "Apple Store",
          description: "Featured app \n 4.8 stars, 30K+ reviews"
        },
        {
          id: 3,
          platform: "The Verge",
          description: " 9/10\n “The best to-do list app\n right now”"
        }
      ]
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

// Todoist Community Section Styles

.todoist-community {
  font-weight: 800;
  padding: 18vw 1rem 14vw;
  max-width: 1088px;
  margin: 0 auto;

  svg {
    display: block;
  }

  svg:nth-child(1) {
    margin: 1rem;
    margin-left: 0;
  }

  svg:nth-child(2) {
    margin: 1rem;
  }

  svg:nth-child(3) {
    margin: 1rem;
  }

  p {
    font-size: 1.1rem;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
      font-size: 1.4rem;
      line-height: 1.35;
    }
  }

  em {
    font-size: 2.2rem;
    display: block;
    letter-spacing: -1px;
    font-style: normal;

    @media (min-width: 1024px) {
      font-size: 3.2rem;
      line-height: -2px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 1rem 8rem;
  }
}

.todoist-community-patners {
  @media (min-width: 1024px) {
    padding-top: 4rem;
  }
}

.todoist-community-patners-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
}

.todoist-community-video {
  width: 100%;
  position: relative;

  .thumbnail {
    width: 100%;
    max-width: 478px;
    border-radius: 8px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.24);

    @media (min-width: 768px) {
      position: relative;
    }

    @media (min-width: 1024px) {
      left: 5%;
    }
  }

  .thumbnail-background {
    display: none;
    position: absolute;
    width: 110%;
    max-width: 528px;
    max-height: 363px;
    left: 19%;
    top: -23%;

    @media (min-width: 768px) {
      display: block;
    }
  }

  div {
    position: absolute;
    cursor: pointer;
    width: 60px;
    opacity: 0.3;
    top: 26%;
    left: 36%;

    @media (min-width: 768px) {
      left: 43%;
      top: 32%;
    }

    @media (min-width: 1024px) {
      left: 55%;
    }
  }

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0, 8;
  z-index: 98;
  top: 0;
  left: 0;
  display: none;
}

.show-overlay {
  display: block;
}

#player {
  position: absolute;
  top: 50%;
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
