const fs = require('fs')

const writetext = (path,text)=>{
    try{
        return new Promise((res,rej)=>{
            const write= fs.writeFile(path,text,(err,data)=>{
                if(err){
                    throw new Error("Cannot write the file");
                }
                res("Written sucessfully!!!");
    
            })
        })
    }
    catch(err){
        console.log(err.message);
    }
}

let result = async()=>{
    const res = await writetext('./folder/fourth.txt','new text');
    console.log(res);
}
result();