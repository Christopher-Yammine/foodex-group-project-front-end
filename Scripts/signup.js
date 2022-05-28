let signup=document.getElementById('signup');

signup.addEventListener('click', addUser);

function addUser(){
    let fname=document.getElementById('fname').value;
    let lastname=document.getElementById('lname').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let gender=document.getElementById('gender-types').value;
    
    if (fname=='' || lastname=='' || email=='' || password=='' || gender==''){
        window.alert('These fields are required')
    } else {
        let data = new FormData();

        data.append('email',email);
        data.append('password',password);
        data.append('name',fname);
        data.append('last_name',lastname);
        data.append('gender',gender);
    
        axios({
            method:'post',
            url:'http://localhost/foodex-group-project-back-end/signup.php',
            data:data
        }).then(function(response){
            if (response.data['success']){
                window.location.href='http://localhost/foodex-group-project-front-end/index.html';
                console.log(response.data['success']);
            }else {
                window.alert('email and/or password already exists')
            }
               
            })
    }



}