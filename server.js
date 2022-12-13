const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routers/users")
const showRouter = require("./routers/shows")
const {db} = require('./db');
const seed = require("./seed")

// middleware
app.use(express.json());
app.use(express.urlencoded({extent: true}));

app.use("/users", userRouter)
app.use("/shows", showRouter)
app.listen(port,()=>{
    seed()
    console.log(`API listening on port ${port}`)
})
// app.get('/', (req, res) => {
//     res.send("The root path GET endpoint works.")
// })