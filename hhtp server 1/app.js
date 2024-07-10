const fs = require('fs')
const http = require('http')
http
    .createServer((req,res)=>{
        res.setHeader('Content-Type','text/html');
        if(req.url=="/"){
            res.end("<h1>Welcome to my website</h1>");
        }
        else if(req.url==="/text"){
            fs.readFile("text.html","utf-8",(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data);
                }
            })
        }else{
            res.end("<h4>Bad Gateway</h4>")
        }
    })
    .listen(5000,()=>{
        console.log("server running on port 5000");
    })