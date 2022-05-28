
let signin=document.getElementById('signin');

signin.addEventListener('click',checkcred);
function checkcred(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    
    let data =new FormData();
    data.append('email',email);
    data.append('password',password);
    axios({
        method:'post',
        url:'http://localhost/foodex-group-project-back-end/login.php',
        data:data
    }).then(function(response){
        if (response.data['response']=="logged in"){
            console.log(response);
            console.log(response.data['user_id']);
            console.log(response.data['id_usertype']);
            sessionStorage.setItem("userid", response.data['user_id']);
            sessionStorage.setItem("name", response.data['name']);
            window.location.href='http://localhost/foodex-group-project-front-end/html/landingpage.html'
        }
        else {
            window.alert(response.data['response']);
        }
    })
}