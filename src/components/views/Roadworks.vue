<template>
  <section class="roadworks">
    <b-container>
      <b-list-group>
        <b-list-group-item v-for="post in posts" :key="post.guid" class="text-capitalize"><h2>{{post.title}}</h2><p v-html="post.description" style="white-space: pre;"></p></b-list-group-item>
      </b-list-group>

    </b-container>
  </section>
</template>
<script>
import axios from 'axios';

export default {
  name: 'roadworks',
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    

    axios.get('https://api.rss2json.com/v1/api.json?rss_url='+encodeURIComponent('https://m.highways.gov.uk/feeds/rss/CurrentAndFutureEvents.xml'))
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data.items;
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>

<style scoped>
</style>
