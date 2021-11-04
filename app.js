const express = require('express');
const app = express();
let { people } = require("./data")


app.get("/api/people",(req, res) => {
  res.status(200).json({ sucess: true, data: people })
})

app.listen(5000, () => {
  console.log("APP RODANDO!")
})
