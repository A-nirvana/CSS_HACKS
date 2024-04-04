import mongoose from "mongoose";

const NgoSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    password : String,
    Phone : Number,
    Address : String,
    Description : String,
    Rating : Number,
    Verified : Boolean,
    ImageLink : String,
    DonationLink : String,
    DonationType : String
})

const BusinessSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    password : String,
    ImageLink : String,
    website : String,
    sector : String,
})

const Ngo = mongoose.model('Ngo', NgoSchema);
const Business = mongoose.model('Business', BusinessSchema);

export {Ngo, Business};

