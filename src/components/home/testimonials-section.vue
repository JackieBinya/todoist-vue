<template>
  <div>
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
          <div class="todoist-testimonials-images">
            <img :src="require(`@/${t.url}`)" alt="" />
          </div>
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
  </div>
</template>

<script>
import testimonialsData from "@/assets/testimonials-data.json";

export default {
  name: "TestimonialsSection",
  data() {
    return {
      testimonials: testimonialsData.data
    };
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
  },
  methods: {
    selectCard(id) {
      this.$refs[`${id}`][0].scrollIntoView({
        // behavior: "smooth",
        inline: "center"
      });
    }
  }
};
</script>

<style lang="scss">
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

    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
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
</style>
