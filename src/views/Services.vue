<script>
import ServiceCard from "../components/ServiceCard.vue";
import {
  haircuts,
  colors,
  treatments,
  makeupAndBridalServices,
  permsAndStraightening,
} from "../scripts/services";

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
    treatments() {
      return treatments;
    },
    makeupAndBridalServices() {
      return makeupAndBridalServices;
    },
    permsAndStraightening() {
      return permsAndStraightening;
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
        <div
          class="flex flex-col md:flex-row flex-wrap max-w-4xl gap-10 mx-auto mt-10 justify-center"
        >
          <ServiceCard
            v-for="(haircut, index) in haircuts"
            :key="index"
            :service="haircut"
            class="w-full md:w-1/4"
          />
        </div>
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Colors and Treatments
          </h2>
        </div>
        <div
          class="flex flex-col md:flex-row flex-wrap max-w-4xl gap-10 mx-auto mt-10 justify-center"
        >
          <ServiceCard
            v-for="(color, index) in colors"
            :key="index"
            :service="color"
            class="w-full md:w-1/4"
          />
        </div>
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Treatments
          </h2>
        </div>
        <div
          class="flex flex-col md:flex-row flex-wrap max-w-4xl gap-10 mx-auto mt-10 justify-center"
        >
          <ServiceCard
            v-for="(treatment, index) in treatments"
            :key="index"
            :service="treatment"
            class="w-full md:w-1/4"
          />
        </div>
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Perms And Straightening
          </h2>
        </div>
        <div
          class="flex flex-col md:flex-row flex-wrap max-w-4xl gap-10 mx-auto mt-10 justify-center"
        >
          <ServiceCard
            v-for="(treatment, index) in permsAndStraightening"
            :key="index"
            :service="treatment"
            class="w-full md:w-1/4"
          />
        </div>
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Makeup and Bridal Services
          </h2>
        </div>
        <div
          class="flex flex-col md:flex-row flex-wrap max-w-4xl gap-10 mx-auto mt-10 justify-center"
        >
          <ServiceCard
            v-for="(service, index) in makeupAndBridalServices"
            :key="index"
            :service="service"
            class="w-full md:w-1/4"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
