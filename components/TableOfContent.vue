<template>
  <section>
    <h3>Table Of Content</h3>
    <div>
      <ul>
        <li
          v-for='link of toc'
          :key='link.id'
        >
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['toc']
  };
</script>
