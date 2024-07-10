const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');


    if(req.url === "/" ){
        res.end("youre currently in my home page ");
    }
    else if(req.url === "/about" ){
        res.end("<h1>Hello its me Bose</h1>");
    }
    else {
               res.end(`<h2>Your requested URL is not found. <a href="/">Click here to redirect to the home page</a></h2>`);
    }
});
server.listen(3000);


