<template>
  <div>
    <h1>Hello World!</h1>
    <div v-for="article in articles" :key="article.slug">
      <nuxt-link :to="'/articles/'+ article.slug">{{article.title}} {{article.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const query = await $content('articles')
      const articles = await query.fetch()

      return {
        articles
      }
    }
  };
</script>
