import mongoose from "mongoose";

const URLschema = new mongoose.Schema({
    longUrl: {type: String, required: true},
    shortUrl: {type: String, required: true, unique: true},
    urlCode: {type: String, required: true, unique: true}
}, { timestamps: true});

export default mongoose.model("Url" , URLschema);