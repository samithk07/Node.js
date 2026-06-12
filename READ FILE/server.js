const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    fs.readFile("data.txt", "utf8", (err, data) => {
        if(err){
            res.end("Error reading file")
            return;
        }
        res.end(data)
    })
})
server.listen(3000,()=>{
    console.log("Server running on the port 3000")
})
