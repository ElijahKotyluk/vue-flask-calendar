const mongoose = require('mongoose')

const event = new mongoose.Schema({
  description: {
    type: String
  },
  date: {
    type: Date
  },
},
  {
    collection: 'events'
});

module.exports = mongoose.model('Event', event);
