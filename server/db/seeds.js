use hotel_bookings;

db.dropDatabase();

db.bookings.insertMany([
  {
    "name": "Emma Green",
    "email": "egg01@gmail.org",
    "number_of_nights": 3,
    "checked_in": true
  },
  {
    "name": "Ali Green",
    "email": "aeg1@mail.com",
    "number_of_nights": 3,
    "checked_in": true
  },
  {
    "name": "Gemma Green",
    "email": "geg5@gmail.com",
    "number_of_nights": 1,
    "checked_in": false
  },
  {
    "name": "Harry Williams",
    "email": "hw@google.com",
    "number_of_nights": 1,
    "checked_in": false
  }

])