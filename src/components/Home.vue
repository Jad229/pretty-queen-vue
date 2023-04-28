<script>
export default {
  name: "Home",
};
</script>
<template>
  <section id="home">
    <div
      class="flex bg-marble-texture justify-center items-center bg-cover h-96 w-screen"
    >
      <div class="flex flex-col text-center space-y-6">
        <p class="text-4xl font-bold text-neutral-600">Always Look Your Best</p>
        <p class="text-4xl font-bold text-neutral-600">
          Embrace Your Inner Queen
        </p>
        <div class="flex justify-center space-x-3">
          <button
            class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
          >
            Book
          </button>
          <button
            class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
          >
            Shop
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-center items-center md:items-start space-y-5 md:space-y-0 md:space-x-10 bg-amber-400 w-screen py-5 md:py-10 h-full"
    >
      <div class="w-2/3 md:w-1/4 space-y-3 text-center">
        <h2 class="text-2xl font-semibold">Expert Hairdressers</h2>
        <p>
          At Pretty Queen, we take pride in our team of expert hairdressers who
          are dedicated to providing exceptional service to our clients. Our
          hairdressers are highly skilled and knowledgeable in the latest hair
          trends and techniques
        </p>
      </div>
      <div class="w-2/3 md:w-1/4 space-y-3 text-center">
        <h2 class="text-2xl font-semibold">Excellent Nail Spa</h2>
        <p>
          Our luxurious nail spa at Pretty Queen offers a range of services,
          from classic manicures and pedicures to indulgent treatments like nail
          art, all in a relaxing and welcoming atmosphere.
        </p>
      </div>
    </div>
  </section>
</template>
<style></style>
