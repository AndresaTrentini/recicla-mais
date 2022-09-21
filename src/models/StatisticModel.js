import mongoose from "mongoose";

const StatModel = mongoose.model("stats", {
    totalUsers: Number,
    activeUsers: Number,
    totalSchedule: Number,
    completeSchedule: Number,
    canceledSchedule: Number,
    createdAt: Date
})

export default StatModel