function receivesAFunction(parameter){
    parameter();
    return true;
}
function returnsANamedFunction(){
    return(function a(){
    })
}

function returnsAnAnonymousFunction(){
    return(function(){})
}