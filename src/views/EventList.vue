<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    axios
      .get('http://localhost:3000/events')
      .then(res => {
        this.events = res.data
        console.log(res.data)
      })
      .catch(error => {
        console.log('There was an error:' + error.response)
      })
  }
}
</script>
