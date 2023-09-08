const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port =3000;

app.get('/files',(req,res)=>{
    const directory='./file/files';
    fs.readFile(directory,'utf8',(err,files)=>{
        if (err){
            console.log("error reading files",err);
            res.sendStatus(500);
        }
        res.status(200).json(files);
    })
})
function started(){
    console.log(`Example app listening on port ${port}`);
    }
app.listen(port,started);