<template lang="html">
  <div class="booking-info">
    <h3 :class="checkedInClass">{{ booking.name }}</h3>
    <p>Email: {{ booking.email }}</p>
    <p>Nights: {{ booking.number_of_nights }}</p>
    <button v-on:click="toggleCheckedIn">{{ checkInButtonText }}</button>
    <button v-on:click="editBooking">Edit This Booking</button>
    <button v-on:click="deleteBooking">Delete This Booking</button>
  </div>

</template>

<script>
import { eventBus } from '@/main';
import BookingService from '@/services/BookingService';
export default {
  name: 'booking-info',
  props: ['booking'],
  computed: {
    checkedInClass() {
      return this.booking.checked_in ? 'checked-in' : 'checked-out';
    },
    checkInButtonText() {
      return this.booking.checked_in ? 'Check out' : 'Check in';
    }
  },
  methods: {
    toggleCheckedIn: function() {
      eventBus.$emit('toggle-booking-checked-in', this.booking);
    },
    deleteBooking: function() {
      eventBus.$emit('delete-booking', this.booking._id);
    },
    editBooking: function() {
      eventBus.$emit('edit-booking', this.booking._id);
    }
  }
};
</script>

<style lang="css" scoped>
.booking-info {
  box-sizing: border-box;
  width: 32%;
  background: rgb(197, 180, 201);
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 40;
}
.checked-in {
  color: rgb(14, 163, 14);
  font-weight: bolder;
}
.checked-out {
  color: darkred;
  font-weight: bold;
}
button{
  background: white;
  border-radius: 40;
  border: none;
  font-size: 12px;
  color: #333;
  padding: 5px 10px;
  display: block;
  margin-top: 20px;
  cursor: pointer;
}
h3 {
  margin-top: 0;
}
</style>