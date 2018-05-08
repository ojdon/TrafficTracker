<template>
  <section class="home">
    <b-container>
      <b-row>
        <b-col>
          <router-link to="accidents" class="btn btn-primary btn-lg btn-block py-5"><b-img center class="w-50 py-3" :src="require('@/assets/home-white/car-collision.svg')" fluid/><strong class="mb-5">Accidents</strong></router-link>
        </b-col>
        <b-col>
          <router-link to="roadworks" class="btn btn-primary btn-lg btn-block py-5"><b-img center class="w-50 py-3" :src="require('@/assets/home-white/worker-with-shovel.svg')" fluid style="height: 190px"/><strong class="mb-5">Roadworks</strong></router-link>
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
