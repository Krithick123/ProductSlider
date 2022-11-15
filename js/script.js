const imgs=document.querySelectorAll('.img a');
const img2=document.querySelectorAll('.img');
let imgId=1;

imgs.forEach((img)=>{

    img.addEventListener('click', (e)=>{

        e.preventDefault();
        imgId=img.dataset.id;

        img2.forEach((ig)=>{
            ig.classList.remove('active');
        });

        img.parentElement.classList.add('active');


        moveImage();
 });

});

function moveImage(){
    const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
   
    let width=(imgId-1)*imgWidth;
    const displayImg=document.querySelector('.main-image ');
    displayImg.style.transform=`translate(${-width}px)`;
}

