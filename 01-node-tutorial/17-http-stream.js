const http = require('http');
const fs = require('fs');

http
    .createServer((req,res)=>{
        // const text = fs.readFileSync("./content/big.txt", "utf-8")
        // res.end(text)
        const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
        fileStream.on("open", () => {
            fileStream.pipe(res)
        })
        fileStream.on("error", (err) => {
            res.end(err)
        })


    })

.listen(5000, ()=>{
    console.log("APP RODANDO!")
})