import{S as l,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="46153478-1b8179550e9312780d25c3b1d";async function p(s){const o=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(o);if(!r.ok)throw new Error("Failed to fetch images");return(await r.json()).hits}catch(r){throw console.error("Error fetching images:",r),r}}function h(s){const o=document.querySelector(".gallery"),r=s.map(({webformatURL:e,largeImageURL:t,tags:n,likes:u,views:d,comments:f,downloads:y})=>`
      <div class="photo-card">
        <a href="${t}">
          <img src="${e}" alt="${n}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${u}</p>
          <p><b>Views</b> ${d}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${y}</p>
        </div>
      </div>`).join("");o.insertAdjacentHTML("beforeend",r),new l(".gallery a",{captionsData:"alt",captionDelay:250,close:!0}).refresh()}function g(){const s=document.querySelector(".gallery");s.innerHTML=""}const b=document.querySelector("#search-form");document.querySelector(".gallery");const c=document.querySelector("#loader");b.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search query"});return}c.style.display="block";try{const r=await p(o);if(r.length===0){i.error({title:"No results",message:"No images found for your search query"});return}g(),h(r),new l(".gallery a",{captionsData:"alt",captionDelay:250,close:!0}).refresh()}catch{i.error({title:"Error",message:"Failed to fetch images"})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
