<template>
  <div>
    <nuxt-content :document="indexContent" />

    <br>
    <hr>
    <h2>Article Index</h2>
    <div v-for="article in articles" :key="article.slug">
      <nuxt-link :to="article.dir">{{article.title}} {{article.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const indexContent = await $content('index').fetch()

      const query = await $content('articles', { deep: true })
      const articles = await query.fetch()

      return {
        indexContent, articles
      }
    }
  };
</script>
