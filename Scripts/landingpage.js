window.onload=function(){
let fname = sessionStorage.getItem("name");

let greeting =document.getElementById('greet');
greeting.innerHTML='We are glad you made it ' + fname + '!' ;

var restau=document.getElementById('restau-body');
console.log(restau);
var row='';
var n=1
for( let i=0 ;i<2;i++){
    for (let j=n;j<7;j++){
        row += '<h'+j+'>chris'+'</h'+j+'>';
        if (j%3==0) {
            n=j+1;
            break;}
    }
    restau.innerHTML+='<div class="restau-row">'+ row+ '</div>';
    row='';
}


}