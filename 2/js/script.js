
let pageCount = 0;
let scrollPosition= 0;

const bodyObj = document.querySelector(".container");
let topBtn = document.querySelector('.top-btn');
const loginBtn = document.querySelector('.login-btn');
const joinBtn = document.querySelector('.join-btn');
const box = document.querySelector('.box');
const loginBox = document.querySelector('.login-box');
const joinBox = document.querySelector('.join-box');
const boxLoginBtn = document.querySelector('button.box-btn-login');
const boxJoinBtn = document.querySelector('button.box-btn-join');
// const header = document.querySelector('.container > header');
const headPrivate =document.querySelector('.head-private');
const nav = document.querySelector('nav');
const section = document.querySelectorAll('section');
const article = document.querySelectorAll('article')
const menuIntro = document.querySelector('#joinus');
const menuInfo = document.querySelector('#info');






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

const buttonEvent = () =>{
  loginBtn.addEventListener("click", function(e){
    e.preventDefault();
    location.href="#main";
    loginBox.style.display="block";
  });
  joinBtn.addEventListener("click", function(e){
    e.preventDefault();
    location.href="#joinus";
    scrollEvent();
    joinBox.style.display="block";
  });
  menuIntro.addEventListener("click", function(e){
    e.preventDefault();
    location.href="#joinus";
    scrollEvent();
  });
  menuInfo.addEventListener("click", function(e){
    e.preventDefault();
    location.href="#info";
    scrollEvent();
  });
}


const boxDisplayNone = () =>{
  boxLoginBtn.addEventListener("click", function(){
      loginBox.style.display='none';
  });
  boxJoinBtn.addEventListener("click", function(){
      joinBox.style.display='none';
  });
}


 const scrollEvent = () => {
  window.addEventListener("scroll", () => {
        if (document.scrollingElement.scrollTop > 100) {
          topBtn.style.display="block";
          headPrivate.style.display="none";
          nav.classList.add("sticky");

        } else {
          topBtn.style.display="none";
          nav.classList.remove("sticky");
          headPrivate.style.display="block";
        }

    });
    
    topBtn.addEventListener("click", function() {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      pageCount = 0;
    });
  }
  
  
const init = () => {
    window.addEventListener("scroll", scrollEvent);
    scrollEvent();
    buttonEvent();
    window.addEventListener("beforeunload", scrollPageEvent);
    scrollPageEvent();
    boxDisplayNone();
   
  };
const scrollPageEvent = () => {
 
  pageCount = 0;
  scrollPosition = 0;
  window.scrollTo(0, 0);
 
};
init();