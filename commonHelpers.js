(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".task-list"),d=document.querySelector(".form"),l="key-task",n=JSON.parse(localStorage.getItem(l))??[];a(n);d.addEventListener("submit",s=>{s.preventDefault();const r={id:Date.now(),taskName:s.target.taskInput.value,checked:!1};n.push(r),localStorage.setItem(l,JSON.stringify(n)),a(n),s.target.taskInput.value=""});function a(s){u.innerHTML=s.map(({id:r,taskName:i,checked:o})=>`<li class="task-list_element" id="${r}">
	<p class="task-list_text ${o?"completed-task":""}">${i}</p><button	class="task-list_rm-btn btn">x</button></li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
