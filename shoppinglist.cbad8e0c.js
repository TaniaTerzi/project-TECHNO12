const e=document.querySelector(".reg-modal-backdrop"),t=document.querySelector(".reg-close-button"),n=document.querySelector("#header-signup-link"),i=(document.getElementById("myForm"),document.querySelector(".reg-form-register")),r=(i.querySelector('input[name="email"]'),i.querySelector('input[name="password"]'),i.querySelector("#login")),l=i.querySelector("#register");function o(){e.classList.toggle("visually-hidden")}function s(e){"login"===e?(l.style.display="inline-block",r.style.display="none",i.setAttribute("action","signInWithEmailPassword()")):"register"===e&&(r.style.display="inline-block",l.style.display="none",i.setAttribute("action","createUserWithEmailPassword()"))}e.addEventListener("click",(function(t){t.target===e&&o()})),document.addEventListener("keydown",(function(e){"Escape"!==e.key||o()}));const c=i.querySelector(".reg-signup-btn"),d=i.querySelector(".reg-signin-btn");c.addEventListener("click",(e=>{e.preventDefault(),s("register")})),d.addEventListener("click",(e=>{e.preventDefault(),s("login")})),t.addEventListener("click",o),n.addEventListener("click",(function(){e.classList.remove("visually-hidden"),r.style.display="none"}));
//# sourceMappingURL=shoppinglist.cbad8e0c.js.map
