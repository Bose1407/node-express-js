console.log("started");


const fs = require('fs')
try{
    const readfile = fs.readFile('./folder/first.txt','utf-8',((err,res)=>{
        if(err){
            throw new Error("File not Found!!");
            
        }
        console.log(res);
        console.log("successfully read");
    }));

}
catch(err){
    console.log(err.message);
}
fs.writeFile('./folder/third.txt',"This is the third text",(err,res)=>{
    if(err){
        console.log("Error occured");
    }
    console.log("written sucessfully");
    
})
console.log("ended the process");