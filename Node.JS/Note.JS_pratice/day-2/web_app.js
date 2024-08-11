const http=require("http");

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html")//contect type backend  response yanna type inth line sollum (plain text,html,json)
    res.end("<p><u>SAKTHI</u> is My <b>Name</b></p>")
})

server.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})