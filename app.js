const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/skills", function(req, res){
    res.render("skills");
});

app.get("/education", function(req, res){
    res.render("education");
});

app.get("/experience", function(req, res){
    res.render("experience");
});

app.get("/certification", function(req, res){
    res.render("certification");
});


























app.listen(3000, function(){
    console.log("Server started at port 3000");
})