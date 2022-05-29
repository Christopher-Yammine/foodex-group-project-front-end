window.onload=function(){
    let id=window.location.href.split('id=')[1];


    let data =new FormData();
    data.append("id",id);
    axios({
        method : 'post',
        url:'http://localhost/foodex-group-project-back-end/countreview.php',
        data : data
    }).then (function (response){
        let restaurantName=document.getElementById('restaurant-name');
        restaurantName.innerHTML='';
        restaurantName.innerHTML+=`<div>
        <h1>${response.data[0].restaurant_name}</h1>
        <h3>rating of ${response.data[0].avg} from ${response.data[0].count} users</h3>
    </div>
    <div><h2>${response.data[0].restaurant_number}</h2></div>  `
    })

    let data1=new FormData();
    data1.append("id",id);
    axios({
        method:'post',
        url:'http://localhost/foodex-group-project-back-end/getreviews.php',
        data:data1
    }).then (function(response){
        
        let userReviews =document.getElementById('user-reviews');
       
        userReviews.innerHTML='';
        var divs='';
        console.log(response);
        for (let i=0;i<response.data.length;i++){

       
        divs+=`<div class="review-container">
        <div class="review-title">
        <div>
                   <h2>${response.data[i].name} said at ${response.data[i].time}</h2> 
                </div>
                <div>
                   <h2>${response.data[i].rating}⭐</h2> 
                </div>
                </div>
            <div class="review">
                <div>
                    ${response.data[i].review_text}
                </div>
                </div>
        </div>` }
        userReviews.innerHTML+=divs;
        
           /*divs+=`<div class="review-container">
            <div class="review-title">
                <div>
                   <h2>${response.data[0].name} said at ${response.data[0].time}</h2> 
                </div>
                <div>
                   <h2>${response.data[0].rating}⭐</h2> 
                </div>   
            </div>
            <div class="review">
                <div>
                    ${response.data[0].review_text}
                </div>
            </div>
        </div>`;
        
        */console.log('the divs are',divs);
        }
    )

}