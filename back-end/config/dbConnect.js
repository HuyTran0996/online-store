const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose
      .connect(process.env.DATABASE)
      .then(() => console.log("Database Connected Successfully"));
  } catch (error) {
    console.log("Database error");
    throw new Error(error);
  }
};
module.exports = dbConnect;
