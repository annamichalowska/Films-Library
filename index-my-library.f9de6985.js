var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},d={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in d){var n=d[e];delete d[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){d[e]=o},e.parcelRequired7c6=n);n("Iwkks");document.querySelector(".more-info-modal");let t=document.querySelector("[data-modal-video]");const r=document.querySelector("body");t.addEventListener("click",(e=>{e.target.closest(".more-info-modal__btn-box")||(t.classList.add("is-hidden"),r.classList.remove("no-scroll"))})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&(t.classList.add("is-hidden"),t.classList.remove("backdrop"))}));
//# sourceMappingURL=index-my-library.f9de6985.js.map