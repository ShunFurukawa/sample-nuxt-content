<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content, params }) {
      const query = $content('articles', params.slug)
      const article = await query.fetch()

      return {
        article
      }
    }
  };
</script>
