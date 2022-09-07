require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");

// Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

// Middleware
app.use(express.json());

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () =>
  console.log(`server running on https://localhost:${port}`)
);
