<script>
import ServiceCard from "../components/ServiceCard.vue";
import { haircuts, colors } from "../scripts/services";

export default {
  name: "Services",
  components: { ServiceCard },
  computed: {
    haircuts() {
      return haircuts;
    },
    colors() {
      return colors;
    },
  },
};
</script>
<template>
  <section class="p-6 space-y-6 max-w-7xl mx-auto">
    <div class="bg-gray-100 py-6">
      <div class="max-w-7xl space-y-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Haircuts and Styling
          </h2>
        </div>
        <div class="space-x-6 mt-10 flex justify-center">
          <ServiceCard
            v-for="(haircut, index) in haircuts"
            :key="index"
            :service="haircut"
            class="w-full"
          />
        </div>
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Colors and Treatments
          </h2>
        </div>
        <div class="space-x-6 mt-10 flex justify-center">
          <ServiceCard
            v-for="(color, index) in colors"
            :key="index"
            :service="color"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
