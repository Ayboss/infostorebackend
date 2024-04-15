const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

console.log(process.env.MONGOURL, "str");
mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("Connection succesful");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("SERVER LISTENING");
});
