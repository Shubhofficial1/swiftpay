import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected : ${conn.connection.host}`.yellow.bold);
  } catch (err) {
    console.log(`Error : ${err.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
