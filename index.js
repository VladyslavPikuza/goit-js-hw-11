import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="46153478-1b8179550e9312780d25c3b1d";async function f(s){const t=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,o=await fetch(t);if(!o.ok)throw new Error("Failed to fetch images");return(await o.json()).hits}function m(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:n,largeImageURL:e,tags:r,likes:i,views:c,comments:l,downloads:u})=>`
      <div class="photo-card">
        <a href="${e}">
          <img src="${n}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${i}</p>
          <p><b>Views:</b> ${c}</p>
          <p><b>Comments:</b> ${l}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </div>`).join("");t.insertAdjacentHTML("beforeend",o),new SimpleLightbox(".gallery a",{}).refresh()}function p(){const s=document.querySelector(".gallery");s.innerHTML=""}const y=document.querySelector("#search-form");document.querySelector(".gallery");y.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(t===""){a.error({title:"Error",message:"Please enter a search query"});return}try{const o=await f(t);if(o.length===0){a.error({title:"No results",message:"No images found for your search query"});return}p(),m(o)}catch{a.error({title:"Error",message:"Failed to fetch images"})}});
//# sourceMappingURL=index.js.map
