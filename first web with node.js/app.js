const http = require('http')
const fs = require('fs')
const htmlfile= fs.readFileSync('index.html','utf-8')
const stylessheet = fs.readFileSync('styles.css')
const scriptfile = fs.readFileSync('script.js')
http
    .createServer((req,res)=>{
        res.setHeader('Content-Type','text/html')
        if(req.url=="/"){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(htmlfile)
        }
        if(req.url=="/styles.css"){
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(stylessheet)
        }
        if(req.url=="/script.js"){
            res.writeHead(200, { 'Content-Type': 'text/script' });
            res.end(scriptfile)
        }
    })
    .listen(5000,()=>{
        console.log("Server running at port 5000");
    })