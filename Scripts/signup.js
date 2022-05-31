let base64String = "";
function imageUploaded() {
	var file = document.querySelector(
		'input[type=file]')['files'][0];

	var reader = new FileReader();
	console.log("next");
	
	reader.onload = function () {
		base64String = reader.result;
		var disp=document.getElementById('display');
        disp.innerHTML='';
		disp.innerHTML=`<img src="`+base64String+`">`
	}
	reader.readAsDataURL(file);

}    
let signup=document.getElementById('signup');

signup.addEventListener('click', addUser);

function addUser(){

    let disp=base64String;
    let fname=document.getElementById('fname').value;
    let lastname=document.getElementById('lname').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let gender=document.getElementById('gender-types').value;
    
    if (fname=='' || lastname=='' || email=='' || password=='' || gender=='' || disp==''){
        window.alert('These fields are required');
    } else {
      
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
                    window.alert('username and/or password already exist')
                }
                else {
                   
                    let data = new FormData();

        data.append('email',email);
        data.append('password',password);
        data.append('name',fname);
        data.append('last_name',lastname);
        data.append('gender',gender);
        data.append('profile_picture',disp);
    
        axios({
            method:'post',
            url:'http://localhost/foodex-group-project-back-end/signup.php',
            data:data
        }).then(function(response){
           
            let div=document.getElementById("msg");
            div.innerText="You are in! ✔️"
            setTimeout(function(){
                div.innerText=""
            },1000);
            setTimeout(function(){
                window.location.reload();
            },1100)
           
               
            })
                }
            })
        
        
    }



}