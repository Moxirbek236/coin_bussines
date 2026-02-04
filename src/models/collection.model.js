import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    image: {
      type: String 
    }
  },
  {
    timestamps: true 
  }
);

export default mongoose.model("Collection", collectionSchema);
