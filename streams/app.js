const http = require('http')
const fs = require('fs')

http
    
    .createServer((req,res)=>{
        res.setHeader('Content-Type','text/html')
        const stream = fs.createReadStream('text.html','utf-8');
        stream.on('data',(data)=>{
            console.log(`${data.length} of chunks of data has been transmitted`)
        })
        stream.on('end',()=>{
            console.log("data transmission complete");
        })
    })
    .listen(5000,()=>{
        console.log("server is running at port 5000");
    }) 