const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/api/test", (req, res) => res.send("API working"));
app.listen(5000, () => console.log("Server started on port 5000"));

const authRoute = require("./routes/auth");
const photoRoute = require("./routes/photo");
const albumRoute = require("./routes/album");
const shareRoute = require("./routes/share");

app.use("/api/auth", authRoute);
app.use("/api/photos", photoRoute);
app.use("/api/albums", albumRoute);
app.use("/api/share", shareRoute);
