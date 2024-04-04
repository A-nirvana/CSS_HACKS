import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = async (database, url) => {
  try {
    if (!url) url = process.env.MONGODB_URI; // Get the MongoDB URI from the .env file
    await mongoose.connect(url + database);
    console.log("Connection with database successful");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDatabase;