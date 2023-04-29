<script>
export default {
  name: "ServiceCard",
  props: {
    service: Object,
  },
};
</script>
<template>
  <div class="bg-white rounded-lg shadow-md">
    <div class="p-6">
      <h3 class="text-lg font-medium text-gray-900">
        {{ service.name }}
      </h3>
      <p class="mt-4 text-base text-gray-500">
        Starting at {{ service.price }}
      </p>
    </div>
  </div>
</template>
<style scoped></style>
