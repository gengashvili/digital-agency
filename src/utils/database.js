import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    throw new Error("database connection failed :(");
  }
};

export default connection;
