var bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json())

function calculatesum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum=sum+i;
    }
    return sum;
}
function handlefirstrequest(req,res){
    var counter=req.query.counter;
        var calculatedsum=calculatesum(counter);
        var answerobject={
            sum:calculatedsum,  
        };
        res.status(200).send(answerobject);
}
app.get('/handleSum',handlefirstrequest)

///app.get('/handleSum', handlefirstrequest)
function started(){
console.log(`Example app listening on port ${port}`);
}
app.listen(port, started)


