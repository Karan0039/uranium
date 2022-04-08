const express = require('express');

const router = express.Router();

let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]

router.post('/players', function (req, res) {
    let data = req.body;
    let temp=0;
    for(let i=0;i<players.length;i++){
    if(players[i].name==data.name)
        res.send("Error: player is already present, enter new data!!")
        else temp++;
    }
    if(temp>0){
        players.push(data);
    }
    res.send(players);
});





    router.post('/post1', function (req, res) {
        let data=req.body;
        console.log(data);
        res.send({msg:"This is my post api"});
        });
    
module.exports = router;
// adding this comment for no reason