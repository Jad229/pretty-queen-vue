<script>
export default {
  name: "ProductCard",
};
</script>
<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="/shop-placeholder.png"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Product</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla!
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <button
        class="inline-block bg-amber-400 rounded p-3 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Shop Now
      </button>
    </div>
  </div>
</template>
<style></style>
