const express = require("express");
const app = express();
const http = require("http");
const PORT = 9001

app.get("/", (req, res, next)=>{
        res.send("hello")
})
app.get("/books", (req, res, next)=>{
        res.json({
            "book1" : "content1",
            "book2" : "content2",
            "book3" : "content3",
            "book4" : "content4"
        })
})
http.createServer(app).listen(PORT, ()=>{
    console.log(`Listenning at port ${PORT}`)
})
