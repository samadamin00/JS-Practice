function tuch(e){
    var clickMe = document.getElementById('inp').value +=e
}

function evalute() {
    let get = document.getElementById('inp')
    get.value=eval(get.value)
}

function clearo(){
    var inp = document.getElementById('inp').value = ""
}
let del=()=>{
    var accInp = document.getElementById('inp')
    var accValue = accInp.value.slice(0,-1)
    accInp.value = accValue  
}

