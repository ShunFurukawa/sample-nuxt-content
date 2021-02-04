<template>
  <div>
    <h2>Article Index</h2>
    <div v-for="article in articles" :key="article.title">
      <nuxt-link :to="'/articles/' + article.path.split('/')[1]">{{article.title}} {{article.date}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const query = await $content({ deep: true })
      const articles = await query
        .only(['title', 'description', 'thumb', 'path'])
        .sortBy('createdAt')
        .fetch()

      return {
        articles
      }
    }
  };
</script>
