<template>
  <Layout class="pb-16">
    <div class="container mb-8 lg:mb-16">
      <app-article-main
        title="titolo food blog"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum rem autem pariatur, voluptates voluptatibus deleniti dolores nam dignissimos veritatis aliquid nulla in, reiciendis vitae commodi magnam a obcaecati. Eius, labore."
        date="24/04/2022"
      >
        <g-image
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=80"
          class="w-full h-56 lg:h-80 object-cover rounded-lg"
        />
      </app-article-main>
    </div>

    <div class="container lg:flex flex-wrap items-center space-y-12 lg:space-y-8">
      <app-article
        class="lg:w-6/12"
        title="titolo food blog"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        date="24/04/2022"
        v-for="i in 5"
        :key="i"
      >
        <g-image
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=80"
          class="w-full h-56 object-cover rounded-lg"
        />
      </app-article>
    </div>
  </Layout>
</template>

<script>
import AppArticleMain from "~/components/AppArticleMain.vue";
import AppArticle from "~/components/AppArticle.vue";

export default {
  components: {
    AppArticle,
    AppArticleMain,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
