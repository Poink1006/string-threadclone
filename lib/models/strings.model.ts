import mongoose from "mongoose";

const stringSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true, ref: "User" },
  community: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
  createdAt: { type: Date, default: Date.now },
  parentId: { type: String },
});

const Strings =
  mongoose.models.Strings || mongoose.model("Strings", stringSchema);

export default Strings;
