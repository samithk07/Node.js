const http =require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    if(req.url==="/save"){
        fs.writeFile("message.txt",{},(err)=>{
            if(err){
                res.end({
                    
                })
                return
            }
            res.end(" File saved Succesfuly ")
        })
    }
})
server.listen(4000,()=>{
    console.log("Server Running in port 3000")
})