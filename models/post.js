import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true}
});

const PostSchema = mongoose.model('images', Schema);

export default PostSchema;