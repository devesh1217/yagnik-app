import mongoose from "mongoose";

const MicroService = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
        },
        serviceId: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
    }
);

export default mongoose.models.MicroService || mongoose.model("MicroService", MicroService);