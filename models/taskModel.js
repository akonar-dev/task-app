import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Description needed"],
      trim: true,
      minLength: [5,"Title must be more than 5 characters"],
      maxLength: [10,"Title must be less than 10 characters"]
    },
    description: {
      type: String,
      trim: true,
      maxLength: [500,"Description must be at max 500 characters"]
    },
    dueDate: {
      type: Date,
      validate :{
        validator : (v)=> {
          return v> new Date()
        },
        message :"Due date must be in the future"
      }
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
