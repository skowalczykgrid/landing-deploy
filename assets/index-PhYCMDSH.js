(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const E of i.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&s(E)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const b=document.querySelector(".cookies-popup");document.cookie.includes("cookies-displayed=true")?b.style.display="none":b.style.display="grid";b.lastElementChild.addEventListener("click",()=>{b.style.display="none",document.cookie="cookies-displayed=true; max-age=3600"});const O=document.querySelector("body"),c=document.querySelector(".slider"),n=document.querySelector(".house-slider"),U=document.querySelector(".house-slider__buttons"),M=U.querySelectorAll("svg"),l=document.querySelector(".review-slider"),a=Array.from(l.querySelectorAll(".review-card")),x=document.querySelector(".review-slider-dots");let m=Array.from(x.querySelectorAll(".review-slider-dot")),v=!1,f,y,W,L=window.innerWidth,B=O.getBoundingClientRect().width;window.addEventListener("resize",()=>{B=O.getBoundingClientRect().width,L=B});const V=e=>{if(e.type==="touchmove"){c.classList.remove("slider--no-snap");return}if(!v)return;e.preventDefault(),c.classList.add("slider--dragging"),e.type==="mousemove"&&c.classList.add("slider--no-snap");const t=e.type==="touchmove"?e.touches[0].clientX:e.clientX;y=f-t,c.scrollLeft+=y,f=t},N=e=>{if(e.type==="touchmove"){n.classList.remove("house-slider--no-snap");return}if(!v)return;e.preventDefault(),n.classList.add("house-slider--dragging"),e.type==="mousemove"&&n.classList.add("house-slider--no-snap");const t=e.type==="touchmove"?e.touches[0].clientX:e.clientX;y=f-t,n.scrollLeft+=y,f=t},z=e=>{if(l.removeEventListener("scrollend",C),e.type==="touchmove"){l.classList.remove("review-slider--no-snap"),l.addEventListener("scrollend",C);return}if(l.removeEventListener("scrollend",C),!v)return;e.preventDefault(),l.classList.add("review-slider--dragging"),e.type==="mousemove"&&l.classList.add("review-slider--no-snap");const t=e.type==="touchmove"?e.touches[0].clientX:e.clientX;y=f-t,l.scrollLeft+=y,f=t},R=e=>{v=!0,e.preventDefault(),f=e.type==="touchstart"?e.touches[0].clientX:e.clientX},Y=e=>{v=!1,n.classList.remove("house-slider--dragging");const t=Array.from(n.querySelectorAll(".house-card")).map(r=>L>1250?r.offsetLeft-124:L>1024?r.offsetLeft-100:r.offsetLeft-20),o=n.scrollLeft,s=t.reduce((r,i)=>Math.abs(i-o)<Math.abs(r-o)?i:r);n.scrollTo({left:s,behavior:"smooth"})},Z=e=>{v=!1,l.classList.remove("review-slider--dragging");const t=a.map((r,i)=>i===0?-70:r.offsetLeft-32-(B-64-r.offsetWidth)/2),o=l.scrollLeft,s=t.reduce((r,i,E)=>Math.abs(i-o)<Math.abs(r-o)?i:r);l.scrollTo({left:s,behavior:"smooth"}),m.forEach(r=>r.classList.remove("review-slider-dot--active")),W=t.indexOf(s),m[W].classList.add("review-slider-dot--active")};function ee(e){a.forEach((t,o)=>{let s=document.createElement("div");s.classList.add("review-slider-dot"),x.appendChild(s),m=Array.from(x.querySelectorAll(".review-slider-dot")),s.addEventListener("click",()=>{l.classList.remove("review-slider--no-snap"),m.forEach(r=>r.classList.remove("review-slider-dot--active")),o===1||o===a.length-2?a[o].scrollIntoView({block:"nearest",inline:"center"}):a[o].scrollIntoView({block:"nearest"}),s.classList.add("review-slider-dot--active")})})}function te(){m[1].classList.add("review-slider-dot--active"),a[1].scrollIntoView({behavior:"instant",inline:"center"}),document.body.scrollIntoView()}function re(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function C(e){let t;a.forEach((o,s)=>{re(o)&&(t=s)}),m.forEach(o=>o.classList.remove("review-slider-dot--active")),W=m[t].classList.add("review-slider-dot--active")}const oe=e=>{v=!1,c.classList.remove("slider--dragging");const t=Array.from(c.querySelectorAll(".hero-box")).map(r=>L>1250?r.offsetLeft-124:L>1024?r.offsetLeft-100:r.offsetLeft-20),o=c.scrollLeft,s=t.reduce((r,i)=>Math.abs(i-o)<Math.abs(r-o)?i:r);c.scrollTo({left:s,behavior:"smooth"})};ee();te();c.addEventListener("mousedown",R);n.addEventListener("mousedown",R);l.addEventListener("mousedown",R);c.addEventListener("touchmove",V);c.addEventListener("mousemove",V);n.addEventListener("touchmove",N);n.addEventListener("mousemove",N);l.addEventListener("touchmove",z);l.addEventListener("mousemove",z);document.addEventListener("mouseup",oe);document.addEventListener("mouseup",Y);document.addEventListener("mouseup",Z);M.forEach((e,t)=>{["click","keypress"].forEach(o=>{e.addEventListener(o,s=>{o==="keypress"&&s.key!="Enter"||(M.forEach(r=>{r.classList.remove("house-slider__active-button")}),n.classList.remove("house-slider--no-snap"),e.classList.add("house-slider__active-button"),t===0?n.scrollTo({left:n.scrollLeft-n.firstElementChild.offsetWidth,behavior:"smooth"}):n.scrollTo({left:n.scrollLeft+n.firstElementChild.offsetWidth,behavior:"smooth"}))})})});document.querySelector(".video-miniature");const h=document.querySelector(".youtube-video");document.querySelector(".play-icon");document.querySelector(".section-ready-to-sell-video__images");const p=document.querySelector(".section-ready-to-sell-video__wrapper"),q=document.querySelector(".video-close"),$=document.querySelector(".video-to-hide"),se=(e,t)=>{t==="keypress"&&e.key!="Enter"||($.classList.add("video-hidden"),q.style.display="block",p.style.cursor="auto",q.style.cursor="pointer",p.classList.add("video-stretch"),h.style.display="block",h.src+="&autoplay=1")},ie=(e,t)=>{t==="keypress"&&e.key!="Enter"||(e.stopPropagation(),$.classList.remove("video-hidden"),q.style.display="none",p.style.cursor="pointer",p.classList.remove("video-stretch"),h.style.display="none",h.src=h.src.replace("&autoplay=1","&autoplay=0"))};["click","keypress"].forEach(e=>{p.addEventListener(e,t=>se(t,e)),q.addEventListener(e,t=>ie(t,e))});const F=document.querySelector(".section-recommendations__type-buttons"),g=Array.from(F.children),d=document.createElement("div");d.classList.add("arrow");let _=!1,A=window.innerWidth<=450,K=0;function j(){A=window.innerWidth<=450,d.style.display="none",g.forEach((e,t)=>{A?(d.style.display="block",t!==K?e.classList.add("type-button-hidden"):e.appendChild(d)):e.classList.remove("type-button-hidden")})}j();window.addEventListener("resize",j);g.forEach((e,t)=>{e.addEventListener("click",o=>{const s="btn-transparent-primary--active";d.classList.remove("arrow-up"),_&&o.stopPropagation(),g.forEach(r=>{var i;A&&r.classList.add("type-button-hidden"),r.classList.remove(s),r.classList.remove("type-button-selected"),(i=r.querySelector(".arrow"))==null||i.remove()}),e.classList.add(s),A&&(e.classList.remove("type-button-hidden"),_=!_,K=t,e.classList.add("type-button-selected"),e.appendChild(d))})});F.addEventListener("click",e=>{const t="btn-transparent-primary--active";g.forEach(o=>{o.classList.remove("type-button-hidden"),o.contains(d)&&d.classList.add("arrow-up"),e.target.localName==="button"&&(g.forEach(s=>s.classList.remove(t)),e.target.classList.add(t))})});let k=document.querySelectorAll(".article"),w=document.querySelector(".articles__small"),D=document.querySelector(".articles__big"),H=w.querySelectorAll(".article");const u=document.querySelector(".btn-more-articles");let P=w.querySelectorAll(".article:not(:nth-child(-n + 3))"),G=window.innerWidth;window.addEventListener("resize",()=>G=window.innerWidth);function ne(){k.forEach(e=>{let t=e.cloneNode(!0);e.addEventListener("click",()=>{e.classList.contains("article--big")||G<=600||(k.forEach(o=>o.classList.remove("article--big")),t.classList.add("article--big"),D.innerHTML="",D.appendChild(t),t.classList.remove("article--hidden"))})})}function T(){H=w.querySelectorAll(".article"),H.forEach(e=>e.classList.remove("article--hidden")),k=document.querySelectorAll(".article"),k.forEach(e=>e.classList.remove("article--hidden")),u.textContent="Less Articles",u.removeEventListener("click",T),u.addEventListener("click",J)}function J(){H=w.querySelectorAll(".article"),P=w.querySelectorAll(".article:not(:nth-child(-n + 3))"),P.forEach(e=>{e.classList.add("article--hidden")}),u.textContent="More Articles",u.removeEventListener("click",J),u.addEventListener("click",T)}u.addEventListener("click",T);ne();const Q=document.querySelector(".loader");window.addEventListener("load",()=>{Q.classList.add("loader--hidden")});Q.addEventListener("transitionend",()=>{document.body.removeChild(document.body.firstChild)});const le=document.getElementById("form_message"),ce=document.getElementById("form_message-counter");le.addEventListener("input",e=>{const t=e.target,o=t.getAttribute("maxlength"),s=t.value.length;console.log("asd"),ce.innerText=`${s} / ${o}`});const X=document.querySelector(".email-bar__input"),I=document.querySelector(".email-bar__error"),S=document.querySelector(".email-bar");function de(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}X.addEventListener("input",()=>{const e=X.value.trim();e===""?(I.textContent="",S.classList.remove("email-bar--error","email-bar--success")):de(e)?(I.textContent="",S.classList.remove("email-bar--error"),S.classList.add("email-bar--success")):(I.textContent="Invalid email address",S.classList.add("email-bar--error"))});document.querySelector(".dropdown-form");const ae=document.querySelector(".dropdown-form__property"),ue=document.querySelector(".dropdown-form__content"),me=ue.querySelectorAll("a");me.forEach(e=>{e.addEventListener("click",()=>{ae.textContent=e.textContent})});
