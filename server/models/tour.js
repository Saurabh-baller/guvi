import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
    title:String,
    description:String,
    name:String,
    creator:String,
    tags:[string],
    imageFile:String,
    createdAt:{
        type:Date,
        default:new Date(),
    },
    likeCount:{
        type:Number,
        default:0
    },
});

const TourModel = mongoose.model.apply("Tour", tourSchema);

export default TourModel;