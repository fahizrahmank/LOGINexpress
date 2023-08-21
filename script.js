const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userData = [
  { id: 1, name: "debug1", company: "google" },
  { id: 2, name: "debug2", company: "microsoft" },
  { id: 3, name: "debug3", company: "facebook" },
];

app.post("/user", (req, res) => {
    res.json(userData)
});

app.post("/user/:id", (req, res) => {
    const userID = parseInt(req.params.id)
    const filteredDATA = userData.filter((data)=> data.id === userID)

    res.json(filteredDATA)
});
app.get("/*", (req, res) => {
    res.json('NO ROUTES AVAILABLE')
});

app.listen(PORT);
