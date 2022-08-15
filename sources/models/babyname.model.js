


import mongoose from 'mongoose';
import babyNameSchema from '../schema/babyname.js';


const babyNameModel = mongoose.model("BabyNames", babyNameSchema,"BabyNames");

export default babyNameModel;