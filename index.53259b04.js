function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("3ZRvh",(function(t,n){e(t.exports,"fetchVideo",(function(){return o})),e(t.exports,"fetchVideoPopular",(function(){return i})),e(t.exports,"fetchDetails",(function(){return a})),e(t.exports,"fetchGenres",(function(){return r}));const o=async(e,t)=>{const n=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US&query=${e}&page=${t}&include_adult=false`);return await n.json()},i=async()=>{const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=5349b69c770fce41df09c49c43dbcd6b");return await e.json()},a=async e=>{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US`);return await t.json()},r=async()=>{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=5349b69c770fce41df09c49c43dbcd6b&language=en-US");return await e.json()}})),i.register("3wwqR",(function(t,n){e(t.exports,"renderModal",(function(){return s}));var o=i("Iwkks");const a=document.querySelector(".more-info-modal"),r=document.querySelector("[data-modal-video]"),l=document.querySelector("body"),s=e=>{let t="";t=null===e.poster_path?"https://scontent.xx.fbcdn.net/v/t1.15752-9/324876433_515011753945907_5094880799937398186_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CPCI4Yam_e0AX9eRJN5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ0lgdF3j2QdVnr26sq4kCrZ-wu3LsaYxKDz79-gqJ0-w&oe=63E68EEB":`https://image.tmdb.org/t/p/w300${e.poster_path}`,r.classList.remove("is-hidden");const n=e.genres.map((e=>e.name)).join(", "),i=`<button class="more-info-modal__close-btn">\n    X\n  </button>\n  <div class="container-modal">\n    <img class="more-info-modal__poster" loading="lazy" src="${t}"  />\n    <div class="more-info-modal__description">\n      <h1 class="more-info-modal__title">${e.title}</h1>\n      <div class="more-info-modal__details">\n      <ul>\n      <li class='more-info-modal__details--header'>Vote/Votes</li>\n      <li class='more-info-modal__details--header'>Popularity</li>\n      <li class='more-info-modal__details--header'>Original Title</li>\n      <li class='more-info-modal__details--header'>Genre</li>\n      </ul>\n\n      <ul>\n      <li class='more-info-modal__details--text'>\n      <span class='more-info-modal__details--average'>${e.vote_average}</span>\n      /\n      <span class='more-info-modal__details--count'>${e.vote_count}</span>\n      </li>\n\n      <li class="more-info-modal__details--text">${e.popularity}</li>\n      <li class="more-info-modal__details--text">${e.original_title}</li>\n      <li class="more-info-modal__details--text">${n}</li>\n      </ul>\n      </div>\n\n      <h3 class='more-info-modal__subtitle'>ABOUT</h3>\n      <p class='more-info-modal__text'>\n        ${e.overview}\n      </p>\n      <div class="more-info-modal__btn-box">\n      <button id='${c}' class='more-info-modal__btn'>\n      </button>\n      <button id='${d}' class='more-info-modal__btn'>\n      </button>\n    </div>\n\n    </div>\n  </div>`;a.innerHTML=i,l.classList.add("no-scroll"),_(e.id),function(e){const t=document.querySelectorAll(".more-info-modal__btn");null==t||t.forEach((t=>t.addEventListener("click",(n=>{const i=n.target.getAttribute("id");u(i,e.id)?function(e,t){const n=localStorage.getItem(e),o=JSON.parse(n).slice().filter((e=>e.id!==t));localStorage.setItem(e,JSON.stringify([...o])),_(t)}(i,e.id):function(e,t){var n;const o="https://image.tmdb.org/t/p/w300",i={title:t.title,categories:(null===(n=t.genres)||void 0===n?void 0:n.length)>0?t.genres.map((e=>e.name)).join(", "):null,year:t.release_date?t.release_date.slice(0,4):null,score:t.vote_average?t.vote_average.toFixed(1):null,imageSrc:t.poster_path?`${o}${t.poster_path}`:null,id:t.id},a=localStorage.getItem(e);a||localStorage.setItem(e,JSON.stringify([i]));const r=JSON.parse(a);localStorage.setItem(e,JSON.stringify([...r,i])),_(t.id)}(i,e);const a=document.querySelectorAll(".my-library-space__btn");if(a.length>0){const e="active";i===Array.from(a).find((t=>t.classList.contains(e))).getAttribute("id")&&(0,o.populateSection)(t)}}))))}(e),r.classList.remove("is-hidden");const s=document.querySelectorAll(".more-info-modal__btn");try{const e=localStorage.getItem("IsUserLoged"),t=JSON.parse(e);0===t?s.forEach((e=>{e.style.display="none"})):1===t&&s.forEach((e=>{e.style.display="block"}))}catch(e){console.error(e)}};r.addEventListener("click",(e=>{e.target.closest(".more-info-modal__btn-box")||(r.classList.add("is-hidden"),l.classList.remove("no-scroll"))})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&(r.classList.add("is-hidden"),r.classList.remove("backdrop"))}));const c="filmoteka-watched",d="filmoteka-queue",m="in-storage";function _(e){document.querySelectorAll(".more-info-modal__btn").forEach((t=>{const n=t.getAttribute("id"),o=u(n,e);o?t.classList.add(m):t.classList.remove(m),t.innerHTML=function(e,t){return e?t===c?"REMOVE FROM WATCHED":"REMOVE FROM QUEUE":t===c?"ADD TO WATCHED":"ADD TO QUEUE"}(o,n)}))}function u(e,t){if(!localStorage.getItem(e))return!1;return JSON.parse(localStorage.getItem(e)).some((e=>e.id===t))}})),i.register("Iwkks",(function(t,n){e(t.exports,"populateSection",(function(){return p}));var o=i("3wwqR"),a=i("3ZRvh");const r="active",l="hidden",s="filmoteka-watched",c="filmoteka-queue",d="filmoteka-watched",m="filmoteka-queue",_=document.querySelectorAll(".my-library-space__btn"),u=document.getElementById(s),f=document.querySelector(".grid_my_library__elements");function g(e){_.forEach((e=>e.classList.remove(r))),e.classList.add(r)}function p(e){f.classList.add(l);const t=setTimeout((()=>{var n;f.innerHTML=null;const i=null!==(n=null==e?void 0:e.getAttribute("id"))&&void 0!==n?n:s,r=JSON.parse(function(e){let t;switch(e){case s:t=b(d);break;case c:t=b(m);break;default:throw new Error("Not implemented sectionName: "+e)}return t}(i));(null==r?void 0:r.length)>0?r.forEach((e=>function(e){const{title:t,categories:n,year:i,score:r,imageSrc:l,id:s}=e,c=document.createElement("div"),d=`<div class="grid_my_library__label">\n  <p class="grid_my_library__label-text">Click for more detalis</p>\n</div>\n        <img src='${l}'\n             class='grid_my_library__element-img'\n             alt='${t}' />\n        <div class="grid_my_library__signature">\n        <span class='grid_my_library__element-title'>${t}</span><br/>\n        ${n?`<span class='grid_my_library__element-category'>${n}</span>`:""}\n        ${n?`<span class='grid_my_library__element-year'>${i}</span>`:""}\n        ${n?`<span class='grid_my_library__element-score'>${r}</span>`:""}</div>\n  `;c.setAttribute("title",t),c.classList.add("grid_my_library__element"),c.innerHTML=d,c.addEventListener("click",(e=>function(e){(0,a.fetchDetails)(e).then((e=>{(0,o.renderModal)(e)})).catch((e=>{console.error(e)}))}(s))),f.appendChild(c)}(e))):function(){const e="\n  <div class='grid_my_library__element-empty'>\n      <p class='grid_my_library__element-empty-txt'>\n        The Movie Dog<br/>\n        <strong>is waiting for you</strong><br/>\n        to add some movies<br/>\n        to the list\n      </p>\n        <div class='grid_my_library__element-empty-img'></div>\n    </div>\n  ";f.innerHTML=e}(),f.classList.remove(l),clearTimeout(t)}),300)}function b(e){return localStorage.getItem(e)}_.length>0&&(g(u),null==_||_.forEach((e=>e.addEventListener("click",(e=>{e.target.classList.contains("active")||(g(e.target),p(e.target))})))),p())}));
//# sourceMappingURL=index.53259b04.js.map