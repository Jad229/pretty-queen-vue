<script>
export default {
  name: "Header",
};
</script>
<template>
  <nav
    class="flex flex-row max-w-7xl mx-auto py-5 px-16 bg-white backdrop-filter backdrop-blur-xl bg-opacity-10"
  >
    <div class="flex flex-row me-auto space-x-3">
      <a href="/" class="text-4xl font-bold text-amber-400">Pretty Queen</a>
    </div>
    <div class="flex flex-row items-center ms-auto space-x-3">
      <a href="/products">Products</a>
      <a href="/services">Services</a>
      <a href="/rsvp"
        ><button
          class="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
        >
          RSVP
        </button></a
      >
    </div>
  </nav>
</template>
<style></style>
