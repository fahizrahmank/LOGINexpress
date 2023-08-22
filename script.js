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

app.post("/user", (req, res) => {
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

app.post('/adduser',(req,res)=> {
    const data = req.body;
    console.log(data);
})

app.get("/*", (req, res) => {
    res.json('NO ROUTES AVAILABLE')
});

app.listen(PORT);
