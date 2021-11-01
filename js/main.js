// window.onload = function (){
//     window.addEventListener('scroll',function (e){
//         if (window.pageYOffset > 100){
//             document.querySelector("header").classList.add('is-scrolling');
//         }
//         else{
//             document.querySelector("header").classList.remove('is-scrolling');
//         }
//     });






// 





  





window.onload=function(){
  const menu_btn=document.querySelector('.hamburger');
  const mobile_menu= document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function(){
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
  })
 
}











//     document.getElementsById("first").style.display = 'block';
// document.getElementsById("second").style.display = 'none';
// document.getElementsByClassId("third").style.display = 'none';

// const myFunction = () => {
//     document.getElementsByClassId("second").style.display = 'block';
//     document.getElementsById("first").style.display = 'none';
//     document.getElementsById("third").style.display = 'none';

// }
// const myFunction2 = () => {
//     document.getElementsById("second").style.display = 'none';
//     document.getElementsById("first").style.display = 'block';
//     document.getElementsById("third").style.display = 'none';

// }
// const myFunction3 = () => {
//     document.getElementsById("second").style.display = 'none';
//     document.getElementsById("first").style.display = 'none';
//     document.getElementsById("third").style.display = 'block';

// }


document.getElementById ("first").style.display = 'block';

document.getElementById ("second").style.display = 'none';
document.getElementById ("third").style.display = 'none';



const myFunction1 = () => {
document.getElementById ("first").style.display = 'block';

document.getElementById ("second").style.display = 'none';
document.getElementById ("third").style.display = 'none';

}


const myFunction2 = () => {
document.getElementById ("first").style.display = 'none';

document.getElementById ("second").style.display = 'block';
document.getElementById ("third").style.display = 'none';

}


const myFunction3 = () => {
document.getElementById ("first").style.display = 'none';

document.getElementById ("second").style.display = 'none';
document.getElementById ("third").style.display = 'block';

}


const myFunction4 = () => {
  document.getElementById ("first").style.display = 'block';
  
  document.getElementById ("second").style.display = 'none';
  document.getElementById ("third").style.display = 'none';
  
  }

