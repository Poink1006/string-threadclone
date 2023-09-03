import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String, required: true },
  strings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "String",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Community" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
