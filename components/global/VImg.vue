<template>
  <img :src='imgSrc()' :alt='alt' />
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    },
    methods: {
      imgSrc() {
        try {
          const article = this.$parent;
          return require(`~/content${article.document.dir}/images/${this.src}`);
        } catch(err) {
          return null
        }
      }
    }
  };
</script>
