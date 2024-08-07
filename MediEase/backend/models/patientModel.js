require('dotenv').config();
const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide Name'],
        trim: true,
        maxlength: [20, 'Name can not be longer than 20 characters'],
        match: [/^[a-zA-Z\s]*$/, 'Please provide a valid Name'],
    },
    gender: {
        type: String,
        required: [true, "Please provide Gender"],
        enum: ["male", "female"],
    },
    age: {
        type: Number,
        required: [true, "Please provide Age"],
        min: [0, "Age must be at least 0 years old"],
        max: [100, "Age must be at most 100 years old"]
    }, 
    address: {
        type:String,
        trim:true,
    },
    number: {
        type: String,
        required: [true, 'Please provide Phone Number'],
        trim: true,
        maxlength: [10, 'Phone Number cannot be more than 10 digits'],
        match: [/^[0-9]+$/,'Please provide a valid Phone Number'],
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('PatientSchema', PatientSchema);