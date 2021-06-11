const expresss = require ("express");
const app = expresss ();

const mongoose = require("mongoose");
var Schema = mongoose.Schema ;
var url = "mongo://localhost:27017/Classroom";
    mongoose.connect(url.{useNewUrlParser:true})

var mySchema = new mongoose.mongoose.Schema(
    {
        name : String,
        website : String
    }
);

var comments =mongoose.model("article", mySchema);

var x = new comments ({name: "Pilar", website:"www.pilar.com"});

app.get