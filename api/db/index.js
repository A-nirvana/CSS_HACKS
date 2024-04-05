import mongoose from "mongoose";

const NgoSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    moto : String,
    logo : String,
    address : String,
    followers : Number,
    volunteers : Number,
    drills : Number,
    type : String,
    desc : String,
    uid : String,
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

