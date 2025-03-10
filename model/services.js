import mongoose from "mongoose";

const Service = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
    }
);

export default mongoose.models.Service || mongoose.model("Service", Service);