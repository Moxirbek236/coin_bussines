import mongoose from "mongoose";

const coinSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    material: {
      type: String,
      enum: ["mis", "oltin", "kumush", "bronza", "nikel"],
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    image: {
      type: String 
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Coin", coinSchema);
