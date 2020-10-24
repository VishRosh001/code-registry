const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//external imports
const dotenv = require("dotenv");
const cors = require("cors");

//internal imports
const mongoDB = require("./database/mongoDB");

//routes
const registerRoute = require("./routes/auth/register");
const loginRoute = require("./routes/auth/login");

const addSnippetRoute = require("./routes/processSnippet");

dotenv.config();
app.use(express.json());
app.use(cors());

mongoDB.connectToDatabase();

app.use("/api/user", registerRoute);
app.use("/api/user", loginRoute);
app.use("/api/snippet", addSnippetRoute);

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log("Server Started");
});