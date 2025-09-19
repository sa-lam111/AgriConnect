import { Schema, model } from 'mongoose';

const farmerProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    farmName: { type: String, required: true },
    farmAddress: { type: String, required: true },
    contactNumber: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const FarmerProfile = model('FarmerProfile', farmerProfileSchema);

export default FarmerProfile;
