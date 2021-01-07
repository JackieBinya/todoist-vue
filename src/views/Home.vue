<template>
  <div>
    <Menu />
    <main>
      <section class="intro">
        <div>
          <h1>
            Organize it all <br />
            <span>with Todoist</span>
          </h1>
          <div>
            <router-link to="/">
              <span class="call-to-action-sm">
                Get the app
              </span>
              <span class="call-to-action-bg">
                Get started
              </span>
            </router-link>
          </div>
        </div>
      </section>
      <div class="hero">
        <img
          src="https://todoist.com/_next/static/images/header@2x_b52d8f7c7bf19d6c702569d1072ed6a2.webp"
          alt="pe
          ople using todoist to get organized"
          class="todoist-hero"
        />
        <img
          src="@/assets/hero-secondary.webp"
          class="interface-background"
          alt=""
        />
      </div>

      <div class="todoist-interface">
        <img src="@/assets/hero-phone.webp" alt="" class="mobile-interface" />

        <img
          src="@/assets/hero-interface.webp"
          alt=""
          class="desktop-interface"
        />
      </div>

      <section class="todoist-demo">
        <h2>Free up your mental space</h2>
        <p>
          Regain clarity and calmness by getting all those tasks out of your
          head and onto your to-do list (no matter where you are or what device
          you use).
        </p>
        <div class="todoist-demo-links">
          <router-link to="/">
            <span>
              <play-circle-icon />
            </span>
            <span>
              See Todoist in action
            </span>
          </router-link>

          <router-link to="/">
            <span>
              <arrow-right-icon />
            </span>
            <span>
              Browse Todoist's Features
            </span>
          </router-link>
        </div>
      </section>

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
              over 1.5 billion tasks in 150+ million projects.
            </em>
          </p>

          <div class="todoist-community-patners-icons ">
            <img src="@/assets/amazon.svg" alt="" />
            <img src="@/assets/blocks.svg" alt="" />
            <img src="@/assets/we-work.svg" alt="" />
            <img src="@/assets/disney.svg" alt="" />
          </div>
        </div>

        <div class="todoist-community-video">
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

      <section class="testimonials"></section>

      <section class="todoist-mission"></section>

      <section class="secondary-call-to-action"></section>
    </main>

    <footer></footer>
  </div>
</template>

<script>
// import { ChevronDownIcon, ChevronUpIcon } from "vue-feather-icons";
import Menu from "@/components/Menu.vue";
import { ArrowRightIcon, PlayCircleIcon } from "vue-feather-icons";

export default {
  components: {
    Menu,
    ArrowRightIcon,
    PlayCircleIcon
  },
  data() {
    return {
      showDropdown: false,
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
  }
};
</script>

<style lang="scss">
.intro {
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

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background-color: #ee5244;
    border: 1px solid #ee5244;
    border-radius: 0.5rem;
    margin: 2rem 0 0;
    padding: 0.5em 2em;
    font-weight: bold;
    font-size: 0.9375rem;
    letter-spacing: 0;

    @media (min-width: 768px) {
      font-size: 1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }

  > div > div {
    display: flex;
    justify-content: center;
  }

  .call-to-action-bg {
    display: none;

    @media (min-width: 1024px) {
      display: inline;
    }
  }

  .call-to-action-sm {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: -5rem;
  }

  @media (min-width: 768px) {
    margin-bottom: -6rem;
  }
}

.hero {
  position: relative;

  .todoist-hero {
    width: 100%;
    max-width: 1034px;
    margin: 0 auto;
  }
}

.todoist-interface {
  position: relative;
  margin: -11% 0 0;

  /*  @media (max-width: 1020px) {
    margin: -8% 0 -20.5%;
  } */

  @media (min-width: 1024px) {
    margin: -6rem 0 -17.5rem;
  }
}

.desktop-interface {
  width: 100%;
  max-width: 1398px;
}

.mobile-interface {
  position: absolute;
  top: 1rem;
  right: 14%;
  width: 42%;
  max-width: 581px;

  @media (min-width: 768px) {
    top: 13%;
  }
}

.interface-background {
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
.todoist-demo {
  text-align: left;
  padding: 0 1rem 8vw;

  @media (min-width: 481px) {
    padding: 4rem 1rem 8vw;
  }

  h2 {
    max-width: 80%;
    font-size: 2rem;
    line-height: 1.15;

    @media (min-width: 481px) {
      font-size: 2.75rem;
    }

    @media (min-width: 1024px) {
      font-size: 3.45rem;
      max-width: 100%;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
  }

  p {
    max-width: 47rem;
    font-size: 1.0625rem;
    margin: 1rem 0;
    line-height: 1.5;
    font-weight: 400;

    @media (min-width: 1024px) {
      display: inline-block;
      font-size: 1.4rem;
      letter-spacing: -0.01em;
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    background-color: #fff;
    z-index: 17;
    margin-top: -1rem;
    text-align: center;
    padding-bottom: 0.3rem;
  }
}

.todoist-demo-links {
  a {
    display: flex;
    align-items: center;
    color: #3773ef;
    font-weight: 400;
    padding: 0.8rem 0;

    @media (min-width: 768px) {
      justify-content: center;
    }

    @media (min-width: 1024px) {
      font-size: 1.1rem;
      letter-spacing: 0.02em;
      margin-left: 3.5em;
    }
  }

  span {
    display: block;
  }

  span:nth-child(2) {
    margin-left: 0.4rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
}

.todoist-reviews {
  position: relative;
  background-color: #fff;

  @media (min-width: 1024px) {
    margin: -5rem 0 -3rem;
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
    top: 6rem;
  }
}

.todoist-reviews-background {
  position: absolute;
  background: url("../assets/reviews-bacground.webp");
  width: 100%;
  height: 100%;
  background-size: auto 100%;
  background-repeat: repeat-x;
  background-position: 50%;
}

.todoist-community{
  div{
    img{
      width: 50px;
      height: 50px;
    }
  }
}
</style>
