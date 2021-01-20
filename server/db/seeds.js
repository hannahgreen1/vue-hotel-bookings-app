use hotel_bookings;

db.dropDatabase();

db.bookings.insertMany([
  {
    "name": "Emma Green",
    "email": "egg01@gmail.org",
    "checked_in": true
  },
  {
    "name": "Ali Green",
    "email": "aeg1@gmail.com",
    "checked_in": true
  },
  {
    "name": "Gemma Green",
    "email": "geg5@gmail.com",
    "checked_in": false
  }
])