if (sessionStorage.getItem("userid")==null){
    
    window.location.href="http://localhost/foodex-group-project-front-end/index.html";
    window.alert("Please login");
} else {


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
	window.onload=function(){
		let user_id = sessionStorage.getItem("userid");
        let mainContainer=document.getElementById('main-container');
        let data =new FormData();
        data.append("id_user",user_id);
    axios({
        method : 'post',
        url:'http://localhost/foodex-group-project-back-end/profile.php',
        data : data
    }).then (function (response){
       console.log(response);
       mainContainer.innerHTML='';
       mainContainer.innerHTML+=`<div class="fx-div left-title">
       <label for="fileId">Browse...</label>
       
       <input type="file" name="photo" id="fileId"
       onchange="imageUploaded()">
           <div class="upload" id="upload">
          <div id="display">
               <img src="${response.data[0].profile_picture}" id="uploaded">
           </div></div>

           <div class="img-text">
               Upload your profile picture
           </div>
       </div>
       <div class="fx-div">
           <div class="cardboard">
               
           <div><h1 class="cardboard-header"><a href="http://localhost/foodex-group-project-front-end/html/landingpage.html"><span class="arrow material-icons">
               arrow_back
               </span></a>Change the fields</h1></div>
                       <input type="text" id="email" placeholder="${response.data[0].email}">
                       <input type="password" id="password" placeholder="••••••">
                       <input type="text" id="name" placeholder="${response.data[0].name}">
                       <input type="text" id="lname" placeholder="${response.data[0].last_name}">
                       <button id="btn" class="btn">Save</button>
                       <div class="msg" id="msg"></div>
                       
           </div>
           
       </div>`;
       let btn=document.getElementById('btn');
    btn.addEventListener('click',updateUser);

    function updateUser(){
       
        let prof=base64String;
        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;
        let first_name=document.getElementById('name').value;
        let last_name=document.getElementById('lname').value;
        let user_id = sessionStorage.getItem("userid");
        if (email=='' || password=='' || prof==''){
            window.alert("At least enter an email,password and profile picture again")
        } else{
         let data =new FormData();
        data.append("email",email);
        data.append("password",password);
        data.append("name",first_name);
        data.append("last_name",last_name);
        data.append("profile_picture",prof);
        data.append("id_user",user_id);

        axios({
            method:'post',
            url:'http://localhost/foodex-group-project-back-end/editprofile.php',
            data:data
        }).then(function(response){
            let div=document.getElementById("msg");
            div.innerText="Updated ✔️"
            setTimeout(function(){
                div.innerText=""
            },1000);
            setTimeout(function(){
                window.location.reload();
            },1100)
            
        })
          
        }
        
        
     
        
    }
    })

    
	}
	

}