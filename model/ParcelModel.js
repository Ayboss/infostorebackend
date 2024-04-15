const mongoose = require("mongoose");

const PercelSchema = mongoose.Schema({
  text: {
    type: [String],
  },
  media: {
    type: [String],
  },
  passcode: {
    type: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model("Parcel", PercelSchema);
