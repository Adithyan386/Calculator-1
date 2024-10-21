function display(content){
    result.value += content
}

function aclear(){
    result.value = ""
}

function out(){
    try{
        result.value = eval(result.value)
    }
    catch(err){
        console.log(err);
        result.value = "Da Mone Eth Wrong Aaa.... "
        
    }
}

function dele(){
    result.value = result.value.slice(0,-1)
}