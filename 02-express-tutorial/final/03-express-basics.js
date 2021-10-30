const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    console.log('user hit the resource')
    res.status(200).send("Home Page!")
})

app.get("/about",(req, res)=>{
    console.log("About Page!")
    res.status(200).send("About Page!")
})

app.all("*", (req, res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})


app.listen(5000, ()=>{
    console.log("APP RODANDO!")
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen