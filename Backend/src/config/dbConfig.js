import mongoose from "mongoose";

let isConnected = false;

const database = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Database connected");
  } catch (e) {
    console.log(e);
  }
};

export default database