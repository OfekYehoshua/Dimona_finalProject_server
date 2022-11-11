const mongoose = require("mongoose");

const alertSchema = mongoose.Schema(
  {
    title: { type: "String", required: true },
    subTitle: { type: "String", required: true },
    body: { type: "String", required: true },
    pic: {
      type: "String",
      required: true,
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;
