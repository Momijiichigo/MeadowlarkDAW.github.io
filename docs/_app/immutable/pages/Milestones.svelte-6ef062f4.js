import{S as y,i as B,s as R,l as _,r as S,a as k,m as v,n as g,u as C,h as d,c as D,p as $,b as H,J as u,f as b,d as J,t as M,M as N,N as j,w as x,x as z,y as A,B as F,g as G}from"../chunks/index-f3b5f3fe.js";import{d as K}from"../chunks/stores-bea0f4a6.js";/* empty css                                                           */import L from"./Milestone.svelte-27d7d829.js";import"../chunks/index-5bd72393.js";import"../chunks/Logo-c1a927c1.js";function I(r,t,n){const e=r.slice();return e[1]=t[n].name,e[2]=t[n].description,e[3]=t[n].expected,e[4]=t[n].color,e[5]=t[n].icon,e[7]=n,e}function V(r){let t,n;return t=new L({props:{name:r[1],description:r[2],expected:r[3],color:r[4],icon:r[5],odd:r[7]%2==1}}),{c(){x(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,c){A(t,e,c),n=!0},p(e,c){const i={};c&1&&(i.name=e[1]),c&1&&(i.description=e[2]),c&1&&(i.expected=e[3]),c&1&&(i.color=e[4]),c&1&&(i.icon=e[5]),t.$set(i)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){M(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function O(r){let t,n,e,c,i,q,m,h,f=r[0].roadmap,s=[];for(let o=0;o<f.length;o+=1)s[o]=V(I(r,f,o));const w=o=>M(s[o],1,1,()=>{s[o]=null});return{c(){t=_("div"),n=_("h1"),e=S("Roadmap"),c=k(),i=_("div"),q=k(),m=_("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){t=v(o,"DIV",{class:!0});var l=g(t);n=v(l,"H1",{class:!0});var a=g(n);e=C(a,"Roadmap"),a.forEach(d),c=D(l),i=v(l,"DIV",{class:!0}),g(i).forEach(d),q=D(l),m=v(l,"DIV",{class:!0});var p=g(m);for(let E=0;E<s.length;E+=1)s[E].l(p);p.forEach(d),l.forEach(d),this.h()},h(){$(n,"class","svelte-qu2549"),$(i,"class","divisor svelte-qu2549"),$(m,"class","milestones-list svelte-qu2549"),$(t,"class","milestones svelte-qu2549")},m(o,l){H(o,t,l),u(t,n),u(n,e),u(t,c),u(t,i),u(t,q),u(t,m);for(let a=0;a<s.length;a+=1)s[a].m(m,null);h=!0},p(o,[l]){if(l&1){f=o[0].roadmap;let a;for(a=0;a<f.length;a+=1){const p=I(o,f,a);s[a]?(s[a].p(p,l),b(s[a],1)):(s[a]=V(p),s[a].c(),b(s[a],1),s[a].m(m,null))}for(G(),a=f.length;a<s.length;a+=1)w(a);J()}},i(o){if(!h){for(let l=0;l<f.length;l+=1)b(s[l]);h=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)M(s[l]);h=!1},d(o){o&&d(t),N(s,o)}}}function P(r,t,n){let e;return j(r,K,c=>n(0,e=c)),[e]}class Z extends y{constructor(t){super(),B(this,t,P,O,R,{})}}export{Z as default};
