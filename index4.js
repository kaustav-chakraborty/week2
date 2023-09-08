const express=require('express');
const bodyParser=require('body-parser');
const port=3000;
const app=express();

app.use(bodyParser.json());

let todo=[{
    id:1

}];
app.get('/todolist',(req,res)=>{
    res.json(todo);
})
app.get('/todolist/:id',(req,res)=>{
    const tod=todo.find(t=>t.id===parseInt(req.params.id));
    if(!tod){
        res.status(400).send();
    }else{
        res.json(tod);
    }
})
app.post('/todolist',(req,res)=>{
    const newtodo={
        uniqueid:Math.floor(Math.random()*1000),
        title:req.body.title,
        description:req.body.description
    }
    todo.push(newtodo);
    res.status(201).json(newtodo);
})
app.put('/todolist/:id',(req,res)=>{
    const todoindex=todo.findIndex(t=>t.id===parseInt(req.params.id));
    if(todoindex===-1){
        res.sendStatus(404)
    }else {
        todo[todoindex].title = req.body.title;
        todo[todoindex].description = req.body.description;
        res.json(todo[todoindex]);
      }
})
function started(){
    console.log(`Example app listening on port ${port}`);
    }
    app.listen(port, started)
    
