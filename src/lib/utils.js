import mongoose from "mongoose";

const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Database already connected ..");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection.readyState;
    console.log("Connecting to database..");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to database");
  }
};
