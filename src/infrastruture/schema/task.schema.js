import mongoose from "mongoose";

const schema = new mongoose.Schema({
	_id: { type: String, _id: false },
	title: { type: String },
	description: { type: String },
	status: { type: Boolean, default: false },
	_user: { type: String, ref: "User" },
});

export const UserSchema = mongoose.model("Task", schema);
