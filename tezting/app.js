const fs = require('fs').Promise


let result = async()=>{
    const res = await writeFile('./folder/fourth5.txt','new text',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("successfully written the file");
        }
    });
    
}
result();