import{S as l}from"./assets/vendor-0cdf484e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=document.querySelector(".swiper-container"),u=document.querySelector(".arrow-btn-left"),f=document.querySelector(".arrow-btn-right"),r=new l(d,{mousewheel:{enabled:!0}});console.log(r);u.addEventListener("click",function(){r.slidePrev()});f.addEventListener("click",function(){r.slideNext()});document.addEventListener("keydown",function(o){o.key==="ArrowLeft"||o.key==="Tab"?r.slidePrev():o.key==="ArrowRight"&&r.slideNext()});
//# sourceMappingURL=commonHelpers.js.map