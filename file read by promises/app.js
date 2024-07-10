const fs = require('fs')

const gettext = (path)=>{
    return new Promise((res,rej)=>{
        const readtext = fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                rej("File not Found error!");
            }
            res(data);
        })
    })
}

gettext('./folder/first.txt')
                             .then((data)=>{
                                console.log(data);
                             })
                             .catch((err)=>{
                                console.log(err);
                             })