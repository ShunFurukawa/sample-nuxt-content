<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document='article' />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const [article] = await $content({ deep: true })
        .where({ dir: `/${params.slug}` })
        .fetch()

      return { article }
    },
    head() {
      return {
        title: this.article.title,
        meta: [
          { hid: 'description', name: 'description', content: this.article.description }
        ]
      }
    }
  };
</script>
