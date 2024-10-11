const express = require("express");

const booksRoutes = require("./routes/books.js");
const mongoose = require("mongoose");

let password = "yEhkVBKnsAUGmTIl" //just in case



//const DB_CONNECTION_STRING = "mongodb+srv://alexis:aaaaaaaaaa@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const DB_CONNECTION_STRING = "mongodb://alexis:aaaaaaaaaa@cluster0-shard-00-00-abcde.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
//"mongodb+srv://alexisgorospe:HjJZsKwpQbLy9Qxn@cluster0.nfsps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const DB_CONNECTION_STRING = "mongodb+srv://alexisgorospe:yEhkVBKnsAUGmTIl@cluster0.nfsps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("error: " + err)
})

const app = express();

const SERVER_PORT = 3001;

app.use(express.json())
app.use(express.urlencoded())


app.use("/", booksRoutes)

app.route("/").get((req, res) => {
        res.send("<h1>MongoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})