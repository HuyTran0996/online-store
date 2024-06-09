const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const authRouter = require("./routes/authRoute");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/user", authRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
