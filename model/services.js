import mongoose from "mongoose";

const Service = mongoose.Schema(
    {
      name: String,
      description: String
    },
    {
      timestamps: true,
    }
  );
  
  export default mongoose.models.Service || mongoose.model("Service", Service);