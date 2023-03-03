var a= document.getElementById("demo1")


function num(n){
 a.value+=n

}
function equal(){
    a.value=(eval(a.value))
}

function errase1(){
    a.value=""
}
function delet(){
//  a.value=Math.trunc(a.value/10)
a.value=a.value.slice(0,-1)
}