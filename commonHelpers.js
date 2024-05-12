import{i as c,S as f}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=a=>a.reduce((t,{tags:s,webformatURL:o,largeImageURL:e,likes:r,views:n,comments:d,downloads:u})=>t+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${o}" alt="${s}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${d}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${u}</span>
        </div>
    </div>
</li>
    `,""),m="36831131-bfb1c5890fc73f15a7de29d05",h="https://pixabay.com/api/",y=a=>{const t=new URLSearchParams({key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}/?${t}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})},i=document.querySelector(".gallery"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");function L(a){a.preventDefault();const t=a.target.elements.searchKeyword.value.trim();if(i.innerHTML="",t==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",l.classList.remove("is-hidden"),y(t).then(s=>{s.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML=p(s.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(s=>console.log(s)).finally(()=>{a.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
