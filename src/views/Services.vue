<script>
import ServiceCard from "../components/ServiceCard.vue";
export default {
  name: "Services",
  components: { ServiceCard },
};
</script>
<template>
  <section class="p-6 space-y-6 max-w-7xl mx-auto">
    <div class="bg-gray-100 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Haircuts and Styling
          </h2>
        </div>
        <div class="mt-10 flex justify-center">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
