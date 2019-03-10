const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['H', 'M']
  },
  is_adopted: {
    type: Boolean,
    default: false
  },
  is_active: {
    type: Boolean,
    default: true
  },
  first_owner: {
    type: [{
      name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: true
      },
      celphone: {
        type: Number,
        required: true
      }
    }],
    required: true
  },
  current_owner: {
    type: [{
      name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: true
      },
      celphone: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      adopt_date: {
        type: String,
        default: new Date()
      }
    }]
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: [{
      user_comment: {
        type: String
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }]
  }
}, { timestamps: true })

const Cat = mongoose.model('Cat', catSchema)

module.exports = { Cat }
