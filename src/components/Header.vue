<script>
export default {
  name: "Header",
};
</script>
<template>
  <nav
    class="flex flex-row py-5 px-16 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"
  >
    <div class="flex flex-row me-auto space-x-3">
      <a href="/" class="text-4xl font-bold text-amber-400">Pretty Queen</a>
    </div>
    <div class="flex flex-row ms-auto space-x-3">
      <a href="/rsvp">Products</a>
    </div>
    <div class="flex flex-row ms-auto space-x-3">
      <a href="/rsvp">Services</a>
    </div>
    <div class="flex flex-row ms-auto space-x-3">
      <a href="/rsvp">RSVP</a>
    </div>
  </nav>
</template>
<style></style>
