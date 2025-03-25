import express from "express";
import "dotenv/config";
import userRouter from "./src/routes/userRoute.js";
import connectToDB from "./src/config/mongoCofig.js";
connectToDB();
const app = express()
app.use(express.json());
const port = 3000
app.use('/user',userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})