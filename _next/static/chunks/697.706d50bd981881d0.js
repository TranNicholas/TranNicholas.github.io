"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{3697:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.ReactCusdis=void 0;const s=a(7294),r=a(168);e.ReactCusdis=function(t){const e=s.useRef(null),a=t.attrs.host||"https://cusdis.com";return r.useScript(`${a}/js/cusdis.es.js`),r.useScript(t.lang?`${a}/js/widget/lang/${t.lang}.js`:""),s.useLayoutEffect((()=>{const t=window.renderCusdis;t&&t(e.current)}),[t.attrs.appId,t.attrs.host,t.attrs.pageId,t.attrs.pageTitle,t.attrs.pageUrl,t.lang]),s.createElement(s.Fragment,null,s.createElement("div",{id:"cusdis_thread","data-host":a,"data-page-id":t.attrs.pageId,"data-app-id":t.attrs.appId,"data-page-title":t.attrs.pageTitle,"data-page-url":t.attrs.pageUrl,"data-theme":t.attrs.theme,style:t.style,ref:e}))}},168:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.useScript=void 0;const s=a(7294);e.useScript=function(t){const[e,a]=s.useState(t?"loading":"idle");return s.useEffect((()=>{if(!t)return void a("idle");let e=document.querySelector(`script[src="${t}"]`);if(e)a(e.getAttribute("data-status"));else{e=document.createElement("script"),e.src=t,e.async=!0,e.setAttribute("data-status","loading"),document.body.appendChild(e);const a=t=>{e.setAttribute("data-status","load"===t.type?"ready":"error")};e.addEventListener("load",a),e.addEventListener("error",a)}const s=t=>{a("load"===t.type?"ready":"error")};return e.addEventListener("load",s),e.addEventListener("error",s),()=>{e&&(e.removeEventListener("load",s),e.removeEventListener("error",s))}}),[t]),e}}}]);