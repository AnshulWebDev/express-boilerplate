import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.error(error);
      process.exit(1);
    });
};
