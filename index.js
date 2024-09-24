import{i as a,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="46153478-1b8179550e9312780d25c3b1d";async function m(s){const o=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(o);if(!r.ok)throw new Error("Failed to fetch images");return(await r.json()).hits}catch(r){throw console.error("Error fetching images:",r),r}}function p(s){const o=document.querySelector(".gallery"),r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:c,comments:l,downloads:u})=>`
      <div class="photo-card">
        <a href="${e}">
          <img src="${n}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${i}</p>
          <p><b>Views:</b> ${c}</p>
          <p><b>Comments:</b> ${l}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </div>`).join("");o.insertAdjacentHTML("beforeend",r),new SimpleLightbox(".gallery a",{}).refresh()}function y(){const s=document.querySelector(".gallery");s.innerHTML=""}const h=document.querySelector("#search-form");document.querySelector(".gallery");h.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search query"});return}try{const r=await m(o);if(r.length===0){a.error({title:"No results",message:"No images found for your search query"});return}y(),p(r),new f(".gallery a",{}).refresh()}catch{a.error({title:"Error",message:"Failed to fetch images"})}});
//# sourceMappingURL=index.js.map
