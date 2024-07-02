const mongoose = require("mongoose");
const initData = require("./data");

const MONGO_URL =
  "mongodb+srv://abhinayanair:2rSQQNNGj37OwVML@cluster0.t5tw7sl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function initializeData() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    const activitySchema = new mongoose.Schema({
      category: String,
      activities: [
        {
          name: String,
          carbonEmission: Number,
          carbonEmission24: Number,
          how:String,
        },
      ],
    });

    const Activity = mongoose.model("Activity", activitySchema);

    const deleted = await Activity.deleteMany();
    const result = await Activity.insertMany(initData.data);
    console.log(`${result.length} documents inserted`);

    return Activity; // Exporting Activity model
  } catch (error) {
    console.error("Error initializing data:", error);
    throw error;
  }
}

module.exports = initializeData();
