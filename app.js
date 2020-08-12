const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fetch = require('node-fetch');

const app = express();
const API = 'https://jsonplaceholder.typicode.com/posts';
let userId;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  fetch(API)
    .then(response => response.json())
    .then(data => users = data);
  res.render("home");
});

app.post("/", function(req, res){

  const userId = req.body.userId;
  console.log(userId);
  const filteredUsers = users.filter(item => item.userId == userId);
  if (userId != 0 && userId < 11) {
    res.render("success", {usersNumber: filteredUsers.length, usersFinal: filteredUsers});
    } else {
    res.render("home");
  }
});

// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
