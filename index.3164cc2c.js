!function(){var e,o,t=document.querySelector(".slider");function c(){e>0?(window.scrollTo(0,e),e-=50,o=setTimeout(c,20)):(clearTimeout(o),window.scrollTo(0,0))}t.addEventListener("click",(function(){t.classList.toggle("active")})),document.querySelector(".slider").addEventListener("click",(function(){document.body.classList.toggle("dark-mode"),document.querySelector(".container-header").classList.toggle("dark-mode")})),document.querySelector(".scroll-up-button").addEventListener("click",(function(){e=window.pageYOffset,window.scrollTo(0,0),c()}))}();
//# sourceMappingURL=index.3164cc2c.js.map