import mongoose from "mongoose";

const schema = new mongoose.Schema({
	_id: { type: String, _id: false },
	email: { type: String, unique: true, required: true },
	username: { type: String, unique: true },
	password: { type: String },
	tasks: [{ type: String, ref: "Task" }],
});

export const UserSchema = mongoose.model("User", schema);
