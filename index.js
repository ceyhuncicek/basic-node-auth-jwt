const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(console.log(`MongoDB connected`))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
//route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => console.log("server is running"));
