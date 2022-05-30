if (sessionStorage.getItem("userid")==null){
    
    window.location.href="http://localhost/foodex-group-project-front-end/index.html";
    window.alert("Please login");
} else {

let star=document.getElementsByName('rating');
let btn=document.getElementById('btn');
let user_id = sessionStorage.getItem("userid");
let id=window.location.href.split('id=')[1];
let back=document.getElementById('back');
let rating=0;



for (let i=0;i<star.length;i++){
    star[i].addEventListener('click',function(event){
        rating=event.currentTarget.id;
    })
}
btn.addEventListener('click',addreview);
back.addEventListener('click',function(event){
    window.location.href='http://localhost/foodex-group-project-front-end/html/reviews.html?id='+id;
})


function addreview(){
    if (document.getElementById('textarea').value==''){
        window.alert('You did not enter a review!')
    } else {
    let data =new FormData();

    data.append('user_id',user_id);
    data.append('id_restaurant',id);
    data.append('rating',rating);
    data.append('review_text',document.getElementById('textarea').value);

    axios({
        method:'post',
        url:'http://localhost/foodex-group-project-back-end/addreview.php',
        data:data
    }).then(function(response){
        console.log(response);
        
        document.getElementById('status').style.display="block";
        setTimeout(function(){
            document.getElementById('status').style.display="none";
        },2000);
    })  
    }
    

}
}


//let data = new FormData();
//data.append('')