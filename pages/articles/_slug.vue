<template>
  <div>
    <h1>{{ article.title }}</h1>
    <TableOfContent :toc='article.toc' />
    <nuxt-content :document='article' />
  </div>
</template>

<script>
  import TableOfContent from '~/components/TableOfContent.vue';

  export default {
    components: {
      TableOfContent
    },
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
