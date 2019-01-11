<template>
  <pull-to :top-load-method="refresh">
  <section class="accidents">
    <b-container>

      <div v-for="report in reports" :key="report.guid._Data" class="text-capitalize">
        <hr>
        <h2>{{report.title}}</h2>
        <b-badge v-html="report.pubDate"></b-badge>
        <p v-html="report.description" class="description" style="white-space: pre-wrap; word-wrap: break-word;"></p>
      </div>
    </b-container>
  </section>
</pull-to>
</template>
<script>
import axios from 'axios';
import XML from 'pixl-xml';
import PullTo from 'vue-pull-to';
const BOTTOM_DEFAULT_CONFIG = {
  pullText: 'Refresh...', // The text is displayed when you pull down
  triggerText: 'Loading...', // The text that appears when the trigger distance is pulled down
  loadingText: 'Loading...', // The text in the load
  doneText: 'Done!', // Load the finished text
  failText: 'Failed to refresh.', // Load failed text
  loadedStayTime: 400, // Time to stay after loading ms
  stayDistance: 50, // Trigger the distance after the refresh
  triggerDistance: 70 // Pull down the trigger to trigger the distance
}
export default {

  name: 'accidents',
  components: {
      PullTo
    },
  data() {
    return {
      reports: [],
      errors: []
    }
  },

methods: {
  refresh(loaded) {
    console.log('hello');
    axios.get('https://m.highwaysengland.co.uk/feeds/rss/UnplannedEvents.xml')
    .then(response => {
      this.reports = XML.parse(response.data);
      this.reports = this.reports.channel.item;
    })
    .catch(e => {
      this.errors.push(e)
    });
    loaded('done')
  }
},

mounted() {
    this.refresh();
  }
}
</script>

<style scoped>
</style>
