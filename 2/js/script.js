
let pageCount = 0;
let scrollPosition= 0;

const bodyObj = document.querySelector(".container");
let topBtn = document.querySelector('.top-btn');

const main = document.querySelector('#main');
const loginBtn = document.querySelector('.login-btn');
const joinBtn = document.querySelector('.join-btn');
const box = document.querySelector('form');
const loginBox = document.querySelector('.login-box');
const joinBox = document.querySelector('.join-box');
const boxLoginBtn = document.querySelector('.box-btn-login');
const boxJoinBtn = document.querySelector('.box-btn-join');

const headPrivate =document.querySelector('.head-private');
const nav = document.querySelector('nav');
const section = document.querySelectorAll('section');
const subMenu = document.querySelectorAll('.sub-menu');
const mainMenu = document.querySelectorAll('.main-menu ');
const subItem_1 = document.querySelector('header > nav > .main-menu .itag i:nth-child(1)');
const subItem_2 = document.querySelector('header > nav > .main-menu .itag i:nth-child(2)');
const subItem_home = document.querySelector('header > nav > .main-menu .home i');
const menuBg = document.querySelector('.menu-bg');
const bgColor = document.querySelector('.bg-color');
const subMenuLi = document.querySelectorAll('.main-menu > li > ul > li > a');



bodyObj.addEventListener("mousewheel", function (e) {
  e.preventDefault();
 
  if (e.deltaY < 0) {
    //위로
    if (pageCount <= 0) return; // return 나가버림-_-;; break; 멈춤하고 다시 돌아감
    pageCount--;
  }
  if (e.deltaY > 0) {
    //아래로
    if (pageCount >= section.length) return;
    pageCount++;
  }

  scrollPosition = pageCount * window.innerHeight;
  window.scrollTo({ left: 0, top: scrollPosition, behavior: "smooth" });
},
{ passive: false }
);


const menuButtonEvent = () =>{
  subItem_1.addEventListener("click", function(e){
    e.preventDefault();
    subItem_1.style.display='none';
    subItem_2.style.display='block';
    for(let i =0; i<subMenu.length;i++){
      subMenu[i].classList.toggle('sub-menu');
    }
    menuBg.classList.toggle('menu-bg');
   
    
  });
  subItem_2.addEventListener("click", function(e){
    e.preventDefault();
    subItem_1.style.display='block';
    subItem_2.style.display='none';
    for(let i =0; i<subMenu.length;i++){
      subMenu[i].classList.toggle('sub-menu');
    }
    menuBg.classList.toggle('menu-bg');
  });

  subItem_home.addEventListener("click", function(){
    location.href="index.html";
  });
  loginBtn.addEventListener("click", function(e){
    e.preventDefault();
    loginBox.classList.toggle('login-box');
  });
  joinBtn.addEventListener("click", function(e){
    e.preventDefault();
    joinBox.classList.toggle('join-box');
  });

}


const boxDisplayNone = () =>{
  boxLoginBtn.addEventListener("click", function(e){
    e.preventDefault();
    loginBox.classList.toggle('login-box');

  });
  
  boxJoinBtn.addEventListener("click", function(e){
    e.preventDefault();
    joinBox.classList.toggle('join-box');
   
  });
}


 const scrollEvent = () => {
  window.addEventListener("scroll", () => {
        if (document.scrollingElement.scrollTop > 100) {
          topBtn.style.display="block";
          headPrivate.style.display="none";
          nav.classList.add("sticky");
          nav.classList.add("background");
          for(let i =0; i <subMenuLi.length;i++) {
            subMenuLi[i].classList.add("background");
          }
          bgColor.classList.add("background");
        } else {
          topBtn.style.display="none";
          headPrivate.style.display="block";
          nav.classList.remove("sticky");
          nav.classList.remove("background");
          for(let i =0; i <subMenuLi.length;i++) {
            subMenuLi[i].classList.remove("background");
          }
          bgColor.classList.remove("background");
        }
       
    });
    
    topBtn.addEventListener("click", function() {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      pageCount = 0;
    });
  }
  
  

const scrollPageEvent = () => {
 
  pageCount = 0;
  scrollPosition = 0;
  window.scrollTo(0, 0);
 
};

const init = () => {
  window.addEventListener("scroll", scrollEvent);
  scrollEvent();
  window.addEventListener("beforeunload", scrollPageEvent);
  scrollPageEvent();
  menuButtonEvent();
  boxDisplayNone();
};
init();