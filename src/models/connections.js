import mongoose, { Schema, model } from 'mongoose';

const connSchema = new Schema({
    data: {
        type: Object,
        required: true,
    },
},{
    timestamps: true
});

export default mongoose.models.Connection || model('Connection', connSchema);
