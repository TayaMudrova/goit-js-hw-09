import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r="feedback-form-state",o=document.querySelector(".feedback-form"),c=o.querySelector("textarea"),i=o.querySelector('input[name="email"]'),u=o.querySelector('textarea[name="message"]');o.addEventListener("submit",d);c.addEventListener("input",f);i.addEventListener("input",s);u.addEventListener("input",s);let n=l();function l(){const e=localStorage.getItem(r);return e?JSON.parse(e):{}}function m(e){localStorage.setItem(r,JSON.stringify(e))}function f(e){const{name:t,value:a}=e.target;n[t]=a.trim(),m(n)}function s(e){const{name:t,value:a}=e.target;n[t]=a.trim(),m(n)}function d(e){e.preventDefault();const{email:t,message:a}=n;if(!t||!a)return alert("Будь ласка, заповніть обидва поля.");console.log({email:t,message:a}),localStorage.removeItem(r),o.reset(),n={}}
//# sourceMappingURL=commonHelpers2.js.map
