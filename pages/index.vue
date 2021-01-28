<template>
  <div>
    <h1>Hello World!</h1>
    <nuxt-content :document="home" />
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content }) {
      const home = await $content('home' || 'index').fetch()
      return {
        home
      }
    }
  };
</script>
