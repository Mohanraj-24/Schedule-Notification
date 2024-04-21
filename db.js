const mongoose = require("mongoose");

const username = "Mohanraj";
const password = "Mohan2004";
const dbName = "Notification"; 

const MONGO_URI = `mongodb+srv://${username}:${password}@cluster0.ogcmvth.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("error connecting database =>", err));

module.exports = mongoose;
