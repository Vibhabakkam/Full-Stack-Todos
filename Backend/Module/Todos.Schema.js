import mongoose, { Schema } from "mongoose";

const todos = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  subject:{ 
    type:"String",
    required:true,
  },
  description:{
    type:"String",
    required:true,
  }
});

export default mongoose.model("Todos", todos);
 