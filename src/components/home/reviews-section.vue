<template>
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
</template>

<script>
import reviewsData from "@/assets/reviews-data.json";

export default {
  name: "ReviewsSection",
  data() {
    return {
      reviews: reviewsData.data
    };
  }
};
</script>

<style lang="scss">
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
  background: url("../../assets/reviews-bacground.webp");
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
</style>
