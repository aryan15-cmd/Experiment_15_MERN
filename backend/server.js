const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/students", (req, res) => {

    res.json([
        {
            id: 1,
            name: "Aryan",
            course: "IT"
        },
        {
            id: 2,
            name: "Rahul",
            course: "IT"
        },
        {
            id: 3,
            name: "Priya",
            course: "IT"
        }
    ]);

});

app.listen(5000, () => {
    console.log("Backend running at http://localhost:5000");
});