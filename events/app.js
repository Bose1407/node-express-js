const eventemitter = require('events');
const fs = require('fs')
const customemitter = new eventemitter();
customemitter.on('response',()=>{
    console.log("Data received");
})
customemitter.on('open',()=>{
    const text = fs.readFile('./folder/first.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
    })
})
customemitter.emit('open');