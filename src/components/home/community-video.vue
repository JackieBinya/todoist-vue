<template>
  <div class="todoist-community-video">
    <div class="todoist-community-video-images">
      <img
        src="@/assets/community-video-background.webp"
        alt=""
        class="thumbnail-background"
      />

      <div class="thumbnail" role="button">
        <img src="@/assets/community-vid.webp" alt="" class="thumbnail" />
        <svg viewBox="0 0 60 61" class="_2o_bh">
          <g fill="none" fill-rule="evenodd" transform="translate(0 .2)">
            <circle cx="30" cy="30" fill="#000" r="30"></circle>
            <path d="M45 30.5L22 42V19z" fill="#fff"></path>
          </g>
        </svg>
      </div>
    </div>

    <router-link to="/" class="link">
      <arrow-right-icon size="1.5x"></arrow-right-icon>
      <span>Learn more about the Todoist Community</span>
    </router-link>

    <!--  <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IL8jpc8Lik4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->
  </div>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "CommunityVideo",
  components: {
    ArrowRightIcon
  }
};
</script>

<style lang="scss">
.todoist-community-video {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  &-images {
    margin-right: auto;
    margin-left: auto;
    width: 100%;

    @media (min-width: 768px) {
      width: 350px;
      position: relative;
    }

    @media (min-width: 1024px) {
      width: 478px;
      margin-right: -1rem;
    }
  }

  .thumbnail {
    width: 100%;

    position: relative;
    cursor: pointer;

    img {
      max-width: 478px;
      border-radius: 8px;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.24);
    }

    > svg {
      position: absolute;
      width: 60px;
      opacity: 0.3;
      top: 32%;
      right: 40%;

      @media (min-width: 1024px) {
        top: 37%;
        right: 44%;
      }
    }

    @media (min-width: 768px) {
      position: relative;
    }

    @media (min-width: 1024px) {
      left: 0;
    }
  }

  .thumbnail-background {
    display: none;
    position: absolute;
    width: 110%;
    max-width: 528px;
    max-height: 363px;
    left: 5%;
    top: -23%;

    @media (min-width: 768px) {
      display: block;
    }
  }

  a {
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
      padding-left: 2em;
    }

    @media (min-width: 1024px) {
      margin-left: 2rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
}
</style>
