var star=document.getElementsByName('rating');
let rating=0;
for (let i=0;i<star.length;i++){
    star[i].addEventListener('click',function(event){
        rating=event.currentTarget.id;
    })
}
