import mongoose from "mongoose";
const { Schema } = mongoose;

const businessSchema = new mongoose.Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },

    address: {
      type: String,
    },
    contact: {
      type: Number,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },
    activities: [{ type: String }],
    openTime: {
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
    },
    membership: {
      one: {
        type: String,
        required: true,
      },
      three: {
        type: String,
        required: true,
      },
      six: {
        type: String,
        required: true,
      },
      twelve: {
        type: String,
        required: true,
      },
    },
    userimage: {
      Type: String,
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
export default Business;
