const express = require("express");

//connection
const { connectMongoDb } = require("./connection")
const userRouter = require("./routes/user")
const { logReqRes } = require("./middlewares")

const app = express();
const PORT = 8000;

//mongoose connection
//hm mongoDb connect karenge and ye ek promise return karega
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("MongoDb Connected"))
    .catch((err) => console.log("Mongo Error", err));

//middleware - plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//routes
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))