import{a as v,i as l,S}from"./assets/vendor-BGz2EIcA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const q="46968352-3644d680d7f4886b7770d091e";async function p(t,r=1,o=20){const n=new URLSearchParams({key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:o}),{data:e}=await v(`https://pixabay.com/api/?${n}`);return e}function y(t){return t.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:a,comments:i,downloads:L})=>`<li class="gallery-card">
      <a class="card-link" href="${o}">
    <img class="card-image" src="${r}" alt="${n}"/>
    </a>
    <ul class="card-info">
    <li class="params-item-value"><h2 class="textBold">Likes</h2> <p class="amount">${e}</p></li>
    <li class="params-item-value"><h2 class="textBold">Views</h2> <p class="amount">${a}</p></li>
    <li class="params-item-value"><h2 class="textBold">Comments</h2> <p class="amount">${i}</p></li>
    <li class="params-item-value"><h2 class="textBold">Downloads</h2> <p class="amount">${L}</p></li>
    </ul>
    </li> `).join("")}const g=document.querySelector(".gallery"),b=document.querySelector(".form-container"),h=document.querySelector(".loader"),s=document.querySelector(".load-btn");b.addEventListener("submit",x);s.addEventListener("click",P);let c=1;const u=15;let d;m(s);async function x(t){if(t.preventDefault(),d=t.currentTarget.elements.query.value.trim(),d!==""){f(h);try{const r=await p(d,c,u);if(r.hits.length===0){l.info({message:"Photos not found, try another query"});return}b.reset(),g.innerHTML=y(r.hits),c*u>=r.totalHits?(l.info({message:"We're sorry, but you've reached the end of search results."}),m(s)):f(s),w.refresh()}catch{l.error({message:"Something went wrong"})}finally{m(h)}}}async function P(){c+=1,s.disabled=!0;try{const t=await p(d,c,u);console.log(t),g.insertAdjacentHTML("beforeend",y(t.hits)),w.refresh(),c*u>=t.totalHits?(l.info({message:"We're sorry, but you've reached the end of search results."}),m(s)):f(s);const o=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch{l.error({message:"Something went wrong"})}finally{s.disabled=!1}}let w=new S(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){t.classList.remove("hidden")}function m(t){t.classList.add("hidden")}
//# sourceMappingURL=index.js.map