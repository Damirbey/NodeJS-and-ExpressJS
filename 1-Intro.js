const {readFile,WriteFile, writeFile} = require("fs");

const getFileContent = (filePath)=>{
    return new Promise((resolve,reject)=>{
        readFile(filePath,"utf8",(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(result)
            }
        })
    })
}

const writeToFile = (filePath,file1,file2)=>{
    return new Promise((resolve,reject)=>{
        writeFile(filePath,file1+ ' '+file2,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result);
            }
        })
    })
}

const start = async()=>{
    try{
        const firstFile = await getFileContent("./file1.txt");
        const secondFile = await getFileContent("./file2.txt");
        const write = await writeToFile("./result.txt",firstFile,secondFile);

    }catch(error){
        console.log(error);
    }
}

start();