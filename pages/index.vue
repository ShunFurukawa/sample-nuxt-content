<template>
  <div>
    <h1>Hello World!</h1>
    <h2>Article Index</h2>
    <!-- <div>{{ home }}</div> -->
    <div v-for="article in articles" :key="article.slug">
      <nuxt-link :to="'/articles/'+ article.slug">{{article.title}} {{article.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const query = await $content('articles', { deep: true })
      const articles = await query.fetch()
      // const home = await $content('home' || 'index').fetch()

      return {
        articles
      }
    }
  };
</script>
