<template lang="html">
  <form v-on:submit.prevent="handleSubmit">
    <h1>Add a booking</h1>
    <label for="name">Guest Name:</label>
    <input type="text" id="name" name="name" v-model="name" required/>

    <label for="number_of_nights">Number of Nights: </label>
    <input type="number" id="number_of_nights" name="number_of_nights" v-model="number_of_nights" required/>

    <label for="email">Guest Email:</label>
    <input type="email" id="email" name="email" v-model="email" required/>

    <label for="checked_in">Checked In:</label>
    <input type="checkbox" id="checked_in" name="checked_in" v-model="checked_in">

    <input type="submit" name="submit" value="Save" />
  </form>
</template>

<script>
import { eventBus } from '@/main';
export default {
  name: 'booking-form',
  data() {
    return {
      name: '',
      number_of_nights: '',
      email: '',
      checked_in: false
    };
  },
  methods: {
    handleSubmit() {
      eventBus.$emit('edit-booking', this.$data);
      this.name = this.email = this.number_of_nights ='';
      this.checked_in = false;
    }
  }
};
</script>

<style lang="css" scoped>
form {
  font-size: 16px;
}
input[type="text"],
input[type="number"],
input[type="email"] {
  padding: 7px;
  margin: 10px;
}
input[type="submit"] {
  background: lightblue;
  border-radius: 0;
  border: none;
  font-size: 16px;
  color: #333;
  padding: 10px;
  display: inline;
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;

}
</style>