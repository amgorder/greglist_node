import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        levels: { type: Number, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        imgUrl: { type: String, default: "http://placehold.it/200x200" },
    },

    { timestamps: true, toJSON: { virtuals: true } }

);

export default House;
