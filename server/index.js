const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//external imports
const dotenv = require("dotenv");

//internal imports
const mongoDB = require("./database/mongoDB");

//routes
const registerRoute = require("./routes/auth/register");
const loginRoute = require("./routes/auth/login");

const addSnippetRoute = require("./routes/processSnippet");

dotenv.config();
app.use(express.json());

mongoDB.connectToDatabase();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use("/api/user", registerRoute);
app.use("/api/user", loginRoute);
app.use("/api/snippet", addSnippetRoute);

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log("Server Started");
});