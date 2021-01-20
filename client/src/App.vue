<template>
  <div id="app">
    <h1>Hotel Bookings App</h1>
  </div>
</template>

<script>

import { eventBus } from '@/main';


export default {
  name: 'App',
  data(){
    return {
      bookings: []
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
