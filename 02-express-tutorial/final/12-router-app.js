const express = require("express")
const app = express();
// let { people } = require("./data");

const people = require("./routes/people");
const auth = require('./routes/auth')

app.use(express.static("./methods-public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/people", people);
app.use('/login', auth)

app.listen(5000, () => {
  console.log("APP RODANDO!!!")
})