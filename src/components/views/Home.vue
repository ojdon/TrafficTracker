<template>
  <section class="home">
    <b-container>
      <b-row>
        <b-col>
          <router-link to="accidents" class="btn btn-primary btn-lg btn-block">Accidents</router-link>
        </b-col>
        <b-col>
          <router-link to="roadworks" class="btn btn-primary btn-lg btn-block">Roadworks</router-link>
        </b-col>
      </b-row>

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
