<template>
  <section class="roadworks">
    <b-container>
        <div v-for="report in reports" :key="report.guid._data" class="text-capitalize">
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
import XML from 'pixl-xml';

export default {
  name: 'roadworks',
  data() {
    return {
      reports: [],
      errors: []
    }
  },
  created() {
    

    axios.get('https://m.highways.gov.uk/feeds/rss/CurrentAndFutureEvents.xml')
    .then(response => {
      this.reports = XML.parse(response.data);
      this.reports = this.reports.channel.item;
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>

<style scoped>
</style>
