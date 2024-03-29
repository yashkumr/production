import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import sizeRoute from "./routes/sizeRoute.js"
import colorRoute from "./routes/colorRoute.js"
import paymentRoutes from "./routes/paymentRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';


dotenv.config();
connectDB();

//Es module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const __dirname = path.resolve();

export const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./client/dist")));


//routing
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/color", colorRoute);
app.use("/api/v1/size", sizeRoute);
app.use("/api/v1/product", productRoutes);

// Razorpay payment Gateway
app.use("/api", paymentRoutes);

app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});


const PORT = process.env.PORT || 8080;

// export const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_API_SECRET,
// });

app.use("*", function(req,res){
  res.sendFile(path.join,(__dirname, "./client/dist/index.html"));

app.listen(PORT, () => {
  console.log(
    `server is running on development mode port ${PORT}`.bgCyan.white
  );
});
