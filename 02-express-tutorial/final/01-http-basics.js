const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method)
    const url = req.url;
    
    //Home page 
    if(url === "/"){
    res.writeHead(200, {"content-type": "text/html"})
    res.write("<h1>Home Page</h1>")
    res.end()
    }

    //About Page
    else if(url === "/about"){
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
    }

    // 404
    else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }

})

server.listen(5000, ()=>{
    console.log("APP RODANDO!")
})