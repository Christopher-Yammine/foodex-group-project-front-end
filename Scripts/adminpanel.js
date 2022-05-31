if (sessionStorage.getItem("userid")!=1){
    
    window.location.href="http://localhost/foodex-group-project-front-end/index.html";
    window.alert("You are not allowed to be here");
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

	let btn=document.getElementById('btn');
	let locbtn=document.getElementById('locbtn');
	let typebtn=document.getElementById('typebtn');
	function cardboardDiv(){
		
	


	let data=new FormData();
	axios({
		method:'get',
		url:'http://localhost/foodex-group-project-back-end/locations.php',
		data:data
	}).then(function(response){
		
		let locations=document.getElementById('locations');
		locations.innerHTML=''
		let options=''
		for (let i=0;i<response.data.length;i++){
						options+=`<option value="${response.data[i].id_location}">${response.data[i].city_name}, ${response.data[i].street_name}</option>`	
		}
		locations.innerHTML+=options;
		
	})

	

	let data1=new FormData();
	axios({
		method:'get',
		url:'http://localhost/foodex-group-project-back-end/types.php',
		data:data1
	}).then(function(response){
		console.log(response);
		let types=document.getElementById('types');
		types.innerHTML=''
		let options=''
		for (let i=0;i<response.data.length;i++){
						options+=`<option value="${response.data[i].id_restaurant_type}">${response.data[i].type}</option>`	
		}
		types.innerHTML+=options;
		
	})
	}
	cardboardDiv();


	btn.addEventListener('click',addRestau);
	locbtn.addEventListener('click', addloc);
	typebtn.addEventListener('click', addtype);

	function addloc(){
		let location=document.getElementById('newloc').value;
		let separate=location.split(', ')
		let data =new FormData();
		data.append("city_name",separate[0]);
		data.append("street_name",separate[1]);

		axios({
			method:'post',
			url:'http://localhost/foodex-group-project-back-end/addlocation.php',
			data:data
		}).then(function(response){
			console.log(response);
			cardboardDiv();
		})

	}
	function addtype(){
		console.log("also working");
	}

	


	function addRestau(){
		let dispPic=base64String;
		let restaurant_name=document.getElementById('restaurant_name');
		let restaurant_description=document.getElementById('restaurant_description');
		let restaurant_number=document.getElementById('restaurant_number');
		console.log(dispPic);
	}


}
}