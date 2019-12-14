var family_slider=document.querySelector('#family-slider');
family_slider.style.height=screen.height/2 + 'p';
var carousel_item=document.querySelectorAll('.carousel-item>img');
carousel_item.forEach(e=>{
    e.style.height=screen.height/2+'px';
    console.log(e);
})