function logresponsebody(jsonBody){
    console.log(jsonBody);

}

function callbackfn(result){
    result.json().then(logresponsebody);
}


var sendobj={
    method:"GET"
};

fetch("http://localhost:3000/handleSum",sendobj).then(callbackfn);