import { Schema, model } from "mongoose";

const urls = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export const urlSchema = model("urls", urls)