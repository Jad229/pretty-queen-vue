<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
};
</script>
<template>
  <div
    class="flex flex-col justify-center text-center max-w-xs rounded overflow-hidden shadow-lg"
  >
    <img
      class="w-full"
      src="/shop-placeholder.png"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.name }}</div>
      <p class="text-gray-700 text-base">{{ product.description }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <button
        class="inline-block bg-amber-400 rounded p-3 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Shop Now: <span>{{ product.price }}</span>
      </button>
    </div>
  </div>
</template>
<style></style>
