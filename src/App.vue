<template>
  <div class="app">
    <app-header class="pb-5"/>
    <router-view class="mt-5"/>
    <app-footer class="pt-5"/>
  </div>
</template>

<script>
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  },
}
</script>

<style>
</style>
