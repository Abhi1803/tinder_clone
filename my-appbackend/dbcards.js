import mongoose from "mongoose";

const cardSchema = mongoose.Schema ({
    name: String,
    ingUrl: String
}) 

export default mongoose.model('cards',cardSchema)