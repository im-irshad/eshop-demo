const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DBHOST)
    .catch((error) => console.log("error connecting to MongoDB" + error));

  mongoose.connection.once("open", () =>
    console.log("connected successfully to MongoDB")
  );
};

module.exports = connectDatabase;
