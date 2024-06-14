const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const initializeData = require("./init");

const app = express();

const MONGO_URL = "mongodb+srv://abhinayanair:2rSQQNNGj37OwVML@cluster0.t5tw7sl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Initial rendering of the test page
app.get("/ecochoice/test", async (req, res) => {
    try {
        const Activity = await initializeData;
        const allActivities = await Activity.find({});
        res.render("test", { allActivities, categoryActivities: [] }); // Initialize categoryActivities as an empty array
    } catch (error) {
        console.error("Error finding activities:", error);
        res.status(500).send("Error finding activities");
    }
});

// Handling form submission for /ecochoice/test
app.post("/ecochoice/test", async(req, res) => {
    const Activity = await initializeData;
    const { category } = req.body;

    try {
        const allActivities = await Activity.find({});
        const categoryActivities = await Activity.find({ category });

        res.render("test", { allActivities, categoryActivities });
    } catch (error) {
        console.error("Error finding activities:", error);
        res.status(500).send("Error finding activities");
    }
});

// Handling form submission for /ecochoice/test/form
app.post("/ecochoice/test/form", async (req, res) => {
    const Activity = await initializeData;
    const { activity } = req.body;

    try {
        const allActivities = await Activity.find({});

        // Find the category and selected activity
        const matchedCategory = allActivities.find(cat => {
            return cat.activities.some(act => act.name.toLowerCase() === activity.toLowerCase());
        });

        if (matchedCategory) {
            const selectedActivity = matchedCategory.activities.find(act => act.name.toLowerCase() === activity.toLowerCase());
            const carbonEmission = selectedActivity.carbonEmission;
            console.log(`Carbon emitted for ${activity}: ${carbonEmission}`);

            // Find the activity with minimum carbon emission (best alternative)
            let bestAlternative = null;
            let minCarbonEmission = Number.MAX_SAFE_INTEGER;

            matchedCategory.activities.forEach(act => {
                if ( act.carbonEmission <= minCarbonEmission) {
                    minCarbonEmission = act.carbonEmission;
                    bestAlternative = act;
                }
            });

            // Determine if selected activity is the best alternative
            const isBestAlternative = bestAlternative && bestAlternative.name.toLowerCase() === activity.toLowerCase();

            console.log(bestAlternative);
            console.log(isBestAlternative)
            res.render("test", { allActivities, categoryActivities: [], carbonEmission, bestAlternative, isBestAlternative });
        } else {
            console.log(`Activity '${activity}' not found.`);
            res.status(404).send(`Activity '${activity}' not found.`);
        }
    } catch (error) {
        console.error("Error finding activities:", error);
        res.status(500).send("Error finding activities");
    }
});

// Other routes
app.get("/", (req, res) => {
    res.redirect('/ecochoice');
});

app.get("/ecochoice", (req, res) => {
    res.render("index");
});

app.get("/ecochoice/show", (req, res) => {
    res.render("show");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
