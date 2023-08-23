const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userData = [
  { id: 1, name: "debug1", company: "google" },
  { id: 2, name: "debug2", company: "microsoft" },
  { id: 3, name: "debug3", company: "facebook" },
];

app.get("/user", (req, res) => {
    const query = parseInt(req.query.id)
    const userName = req.query.name
    const filteredDATA = userData.filter((data)=>{
        if(query || userName){
           return data.id === query || data.name === userName
        }else{
            return data
        }
    })

    res.json(filteredDATA)
});

app.post("/user/:id", (req, res) => {
    const userID = parseInt(req.params.id)
    const filteredDATA = userData.filter((data)=>data.id === userID)

    res.json(filteredDATA)
});

const userArray = []

app.post('/adduser',(req,res)=> {
    const {name} = req.body;
    userArray.push(name)
    console.log(userArray);
    res.json('data has been added succesfully')
})
app.get('/displayUser',(req,res)=> {
    res.json(userArray)
})

app.get("/*", (req, res) => {
    res.json('NO ROUTES AVAILABLE')
});

app.listen(PORT);
