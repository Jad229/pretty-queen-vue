<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Home",
  components: { ProductCard },
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
        <div
          class="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3"
        >
          <button
            class="w-5/6 md:w-1/6 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
          >
            Book
          </button>
          <a href="/products" class="w-5/6 md:w-1/6"
            ><button
              class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
            >
              Shop
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-center items-center md:items-start space-y-5 md:space-y-0 md:space-x-24 bg-amber-400 w-screen py-5 md:py-10 h-full"
    >
      <div class="w-2/3 md:w-1/4 space-y-3 text-center">
        <h2 class="text-2xl font-semibold">Expert Hairdressers</h2>
        <p class="text-neutral-700">
          At Pretty Queen, we take pride in our team of expert hairdressers who
          are dedicated to providing exceptional service to our clients. Our
          hairdressers are highly skilled and knowledgeable in the latest hair
          trends and techniques
        </p>
      </div>
      <div class="w-2/3 md:w-1/4 space-y-3 text-center">
        <h2 class="text-2xl font-semibold">Excellent Nail Spa</h2>
        <p class="text-neutral-700">
          Our luxurious nail spa at Pretty Queen offers a range of services,
          from classic manicures and pedicures to indulgent treatments like nail
          art, all in a relaxing and welcoming atmosphere.
        </p>
      </div>
    </div>
    <div class="flex flex-col max-w-7xl mx-auto mt-10 space-y-10 text-center">
      <div>
        <h2 class="text-2xl font-semibold">Customer Favorites</h2>
        <p class="text-neutral-600">Here's what our clients love!</p>
      </div>

      <div
        class="flex flex-col flex-wrap md:flex-row space-y-5 md:space-y-0 md:space-x-0 gap-5 justify-center items-center"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </section>
</template>
<style></style>
