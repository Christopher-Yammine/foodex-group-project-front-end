if (sessionStorage.getItem("userid")==null){
    
    window.location.href="http://localhost/foodex-group-project-front-end/index.html";
    window.alert("Please login");
} else {
window.onload = function(){
var admin=document.getElementById('admin');
if(sessionStorage.getItem('userid')==1){
    admin.style.display="block";
    admin.style.margin="23px 0 0 0";
    
}
let fname = sessionStorage.getItem("name");

let greeting =document.getElementById('greet');
greeting.innerHTML='We are glad you made it ' + fname + '!' ;

/*var restau=document.getElementById('restau-body');
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
let div0=document.getElementsByClassName('restau-div');
console.log(div0);
for (let i=0;i<div0.length;i++){
    console.log(div0);
    div0[i].addEventListener('click',function(event){
        console.log(event.currentTarget.id);
    })
}*/


let restauBody=document.getElementById('restau-body');
    restauBody.innerHTML='';
    let data=new FormData();

    axios({
        method:'get',
        url:'http://localhost/foodex-group-project-back-end/landingpage.php',
        data:data
    }).then (function(response){
        let n=1;
        var row='';
        for (let i=0;i<Math.ceil(response.data.length/3);i++){
            for (let j=n;j<response.data.length+1;++j){
                row+=`<div class="restau-div" id=${response.data[j-1].id_restaurant}>
                <img src="${response.data[j-1].restaurant_picture}">
                <div class="inner-title">
                    <h4>${response.data[j-1].restaurant_name}</h4>
                    <h4>${response.data[j-1].city_name},${response.data[j-1].restaurant_number}</h4>
                </div>
                <div class="description">${response.data[j-1].restaurant_description}
                </div>
                <div class="type">
                ${response.data[j-1].type}
                </div> 
            </div>`;
            if (j%3==0) {
                n=j+1;
                break;
                } 
            }
            restauBody.innerHTML+='<div class="restau-row">'+row+'</div>';
            row='';
        }
        let div0=document.getElementsByClassName('restau-div');
        
        for (let i=0;i<div0.length;i++){

        div0[i].addEventListener('click',function(event){
        window.location.href='http://localhost/foodex-group-project-front-end/html/reviews.html?id='+event.currentTarget.id;
        
        
    })}
    })
    
    
}
}
//${response.data[j-1].restaurant_picture}