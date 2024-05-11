const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["published", "draft"],
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("categoryModel", categorySchema);
