<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Products",
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          name: "Item 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! ",
          price: "$100",
        },
        {
          name: "Item 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloremque!",
          price: "$80",
        },
        {
          name: "Item 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quae.",
          price: "$120",
        },
        {
          name: "Item 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, earum.",
          price: "$90",
        },
        {
          name: "Item 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, cupiditate?",
          price: "$150",
        },
        {
          name: "Item 6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ipsa?",
          price: "$70",
        },
        {
          name: "Item 7",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, mollitia?",
          price: "$110",
        },
        {
          name: "Item 8",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, earum.",
          price: "$95",
        },
        {
          name: "Item 9",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.",
          price: "$130",
        },
        {
          name: "Item 10",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, autem?",
          price: "$85",
        },
      ],
    };
  },
};
</script>
<template>
  <section id="products" class="max-w-7xl mx-auto">
    <h1 class="text-4xl font-extrabold my-10 text-center">Products</h1>

    <div
      class="flex flex-col justify-center items-center md:items-start md:flex-row"
    >
      <div
        class="flex flex-col space-y-6 p-7 max-h-80 bg-gray-200 max-w-xs text-center text-neutral-800"
      >
        <button class="hover:bg-gray-400 w-full">ALL</button>
        <button class="hover:bg-gray-400 w-full">SHAMPOOS</button>
        <button class="hover:bg-gray-400 w-full">CONDITIONERS</button>
        <button class="hover:bg-gray-400 w-full">SPRAYS</button>
        <button class="hover:bg-gray-400 w-full">OILS</button>
        <button class="hover:bg-gray-400 w-full">BUNDLES</button>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-4 mx-auto">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>
<style></style>
