<template>
  <section class="home">
    <b-container>
      <router-link to="accidents">Accidents</router-link>
      <router-link to="roadworks">Roadworks</router-link>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
  }
}
</script>

<style scoped>
</style>
