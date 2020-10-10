const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//external imports
const dotenv = require("dotenv");

//internal imports
const mongoDB = require("./database/mongoDB");
const verifyToken = require("./routes/auth/verifyToken");

//routes
const registerRoute = require("./routes/auth/register");
const loginRoute = require("./routes/auth/login");

dotenv.config();
app.use(express.json());

mongoDB.connectToDatabase();

app.use("/api/user", registerRoute);
app.use("/api/user", loginRoute);

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log("Server Started");
});