const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const blogRouter = require("./routes/blogRoutes");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

mongoose.connect(
  "mongodb://localhost:27017/blog-app",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongodb connection established successfully");
    }
  }
);

app.use("/users", userRouter);
app.use("/blog", blogRouter);

app.get("/", (req, res) => {
  return res.json("hello");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
