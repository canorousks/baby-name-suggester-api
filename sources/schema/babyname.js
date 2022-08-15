import mongoose from 'mongoose';
// import { config } from '../config.js';

const babyNameSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  pythagorean: {
    type:Number,
  },
  chaldean: {
    type:Number,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
  first_letter: {
    type: String,
  }
});

export default babyNameSchema;