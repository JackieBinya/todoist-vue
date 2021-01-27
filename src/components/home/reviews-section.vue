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

<style></style>
