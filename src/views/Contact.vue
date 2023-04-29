<script>
export default {
  name: "Contact",
};
</script>
<template>
  <form class="w-full max-w-lg mx-auto my-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="first-name"
        >
          First Name
          <span class="text-red-500">*</span>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          id="first-name"
          type="text"
          placeholder="John"
          required
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="last-name"
        >
          Last Name
          <span class="text-red-500">*</span>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          id="last-name"
          type="text"
          placeholder="Doe"
          required
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="phone-number"
        >
          Phone Number
          <span class="text-red-500">*</span>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          id="phone-number"
          type="tel"
          placeholder="(123) 456-7890"
          required
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="first-time"
        >
          Is This Your First Time At Pretty Queen?
          <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select
            class="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="first-time"
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6"
              />
            </svg>
          </div>
          <div class="my-4">
            <label class="block font-medium text-gray-700 mb-2" for="time">
              What Time Would Work Best For You?
              <span class="text-red-600">*</span>
            </label>
            <input
              class="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200"
              id="time"
              type="time"
              name="time"
              required
            />
          </div>
        </div>

        <div class="my-4">
          <label class="block font-medium text-gray-700 mb-2" for="service">
            What Are You Looking To Have Done?
            <span class="text-red-600">*</span>
          </label>
          <textarea
            class="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200"
            id="service"
            name="service"
            rows="4"
            required
          ></textarea>
        </div>

        <div class="my-4">
          <button
            type="submit"
            class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<style></style>
