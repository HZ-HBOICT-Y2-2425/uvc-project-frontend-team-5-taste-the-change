import{aD as f,V as l,B as y,A as b,an as S,aE as m,j as q,am as x}from"./runtime.Cmgmoomy.js";let w=!1;function D(){w||(w=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function E(r){var t=y,a=b;f(null),l(null);try{return r()}finally{f(t),l(a)}}function j(r,t,a,i=a){r.addEventListener(t,()=>E(a));const n=r.__on_r;n?r.__on_r=()=>{n(),i()}:r.__on_r=i,D()}const A=new Set,M=new Set;function O(r,t,a,i){function n(e){if(i.capture||T.call(t,e),!e.cancelBubble)return E(()=>a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?S(()=>{t.addEventListener(r,n,i)}):t.addEventListener(r,n,i),n}function N(r,t,a,i,n){var e={capture:i,passive:n},o=O(r,t,a,e);(t===document.body||t===window||t===document)&&x(()=>{t.removeEventListener(r,o,e)})}function T(r){var g;var t=this,a=t.ownerDocument,i=r.type,n=((g=r.composedPath)==null?void 0:g.call(r))||[],e=n[0]||r.target,o=0,v=r.__root;if(v){var _=n.indexOf(v);if(_!==-1&&(t===document||t===window)){r.__root=t;return}var p=n.indexOf(t);if(p===-1)return;_<=p&&(o=_)}if(e=n[o]||r.target,e!==t){m(r,"currentTarget",{configurable:!0,get(){return e||a}});var L=y,k=b;f(null),l(null);try{for(var s,h=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var u=e["__"+i];if(u!==void 0&&!e.disabled)if(q(u)){var[B,...P]=u;B.apply(e,[r,...P])}else u.call(e,r)}catch(c){s?h.push(c):s=c}if(r.cancelBubble||d===t||d===null)break;e=d}if(s){for(let c of h)queueMicrotask(()=>{throw c});throw s}}finally{r.__root=t,delete r.currentTarget,f(L),l(k)}}}export{D as a,A as b,N as e,T as h,j as l,M as r};
