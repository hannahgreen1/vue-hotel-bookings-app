<template>
  <div id="app">
    <h1>Hotel Bookings App</h1>
    <booking-form/>
    <booking-list :bookings="bookings"/>
  </div>
</template>

<script>
import BookingForm from "@/components/BookingForm";
import BookingList from "@/components/BookingList";
import BookingService from "@/services/BookingService";
import { eventBus } from '@/main';

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList
  },
  data() {
    return {
      bookings: []
    }
  },
  mounted() {
    this.fetchBookings();
    eventBus.$on('add-booking', (booking) => {
      BookingService.addBooking(booking)
        .then(bookingWithId => this.bookings.push(bookingWithId));
    });
    eventBus.$on('delete-booking', (id) => {
      BookingService.deleteBooking(id);
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    });
    eventBus.$on('toggle-checked-in', booking => {
      const updatedBooking = {
        ...booking,
        checked_in: !booking.checked_in
      };
      BookingService.updateBooking(updatedBooking);
      const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
      this.bookings.splice(index, 1, updatedBooking);
    });
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #310233;
  margin-top: 60px;
}
</style>
