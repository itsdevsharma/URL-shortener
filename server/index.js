import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import router from "./routes/url.routes.js"

const app = express();

app.use((req, res, next) => {
  res.removeHeader("Content-Security-Policy");
  next();
});

dotenv.config(); 

connectDB();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.send("API is running...");
});
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => { console.log(`Port is running on port ${PORT}`)});