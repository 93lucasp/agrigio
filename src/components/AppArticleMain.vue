<template>
  <div class="relative group">
    <g-link to="/" class="absolute inset-0"></g-link>
    <div class="lg:flex lg:space-x-8">
      <div class="lg:w-6/12 relative">
        <slot />
      </div>
      <div class="lg:w-6/12 flex flex-col">
        <div class="my-4 lg:mt-0">
          <small class="block mb-4">{{ date }}</small>
          <h1 class="text-2xl font-bold mb-2">{{ title }}</h1>
          <p class="text-lg">{{ description }}</p>
        </div>
        <div class="mt-auto text-right lg:text-left">
          <button
            class="
              rounded
              text-white
              group-hover:bg-gray-100 group-hover:text-gray-900
              py-2
              lg:px-4
              relative
              z-10
            "
          >
            Leggi di più
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>