<template>
  <section class="accidents">
    <b-container>
        <div v-for="report in reports" :key="report.guid" class="text-capitalize">
          <hr>
          <h2>{{report.title}}</h2>
          <b-badge v-html="report.pubDate"></b-badge>
          <p v-html="report.description" class="description" style="white-space: pre-wrap; word-wrap: break-word;"></p>
        </div>
    </b-container>
  </section>
</template>
<script>
import axios from 'axios';

export default {
  name: 'accidents',
  data() {
    return {
      reports: [],
      errors: []
    }
  },
  mounted() {
    

    axios.get('https://api.rss2json.com/v1/api.json?rss_url='+encodeURIComponent('https://m.highways.gov.uk/feeds/rss/UnplannedEvents.xml'))
    .then(response => {
      // JSON responses are automatically parsed.
      this.reports = response.data.items;
      console.log(response.data);
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>

<style scoped>
</style>
