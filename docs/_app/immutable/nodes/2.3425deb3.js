import{S as W,i as X,s as Y,k as g,q as I,a as y,l as q,m as k,r as z,h as p,c as U,n as _,J as G,b as V,H as i,K as j,u as F,L as Z,C as H,M as $}from"../chunks/index.129df4ad.js";import{v as J}from"../chunks/v4.cf522c50.js";function K(c,e,l){const s=c.slice();return s[5]=e[l],s}function O(c,e){let l,s=e[5]+"",h,o,n;function v(){return e[4](e[5])}return{key:c,first:null,c(){l=g("a"),h=I(s),this.h()},l(r){l=q(r,"A",{alt:!0,class:!0});var d=k(l);h=z(d,s),d.forEach(p),this.h()},h(){_(l,"alt","foo"),_(l,"class","history-item svelte-thql3r"),this.first=l},m(r,d){V(r,l,d),i(l,h),o||(n=j(l,"click",v),o=!0)},p(r,d){e=r,d&2&&s!==(s=e[5]+"")&&F(h,s)},d(r){r&&p(l),o=!1,n()}}}function x(c){let e,l,s,h,o,n,v,r,d,T,b,w,C,m,D,M,u=[],L=new Map,N,P,E=c[1];const Q=a=>a[5];for(let a=0;a<E.length;a+=1){let t=K(c,E,a),f=Q(t);L.set(f,u[a]=O(f,t))}return{c(){e=g("div"),l=g("title"),s=I("QR code generator"),h=y(),o=g("a"),n=g("img"),T=y(),b=g("p"),w=I(c[0]),C=y(),m=g("button"),D=I("New UUID"),M=y();for(let a=0;a<u.length;a+=1)u[a].c();this.h()},l(a){e=q(a,"DIV",{class:!0});var t=k(e);l=q(t,"TITLE",{});var f=k(l);s=z(f,"QR code generator"),f.forEach(p),h=U(t),o=q(t,"A",{href:!0,download:!0});var R=k(o);n=q(R,"IMG",{alt:!0,class:!0,src:!0}),R.forEach(p),T=U(t),b=q(t,"P",{});var S=k(b);w=z(S,c[0]),S.forEach(p),C=U(t),m=q(t,"BUTTON",{"aria-label":!0});var B=k(m);D=z(B,"New UUID"),B.forEach(p),M=U(t);for(let A=0;A<u.length;A+=1)u[A].l(t);t.forEach(p),this.h()},h(){_(n,"alt","foo"),_(n,"class","qr svelte-thql3r"),G(n.src,v="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+c[0])||_(n,"src",v),_(o,"href",r="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+c[0]),_(o,"download",d=c[0]+".png"),_(m,"aria-label","new uuid"),_(e,"class","container svelte-thql3r")},m(a,t){V(a,e,t),i(e,l),i(l,s),i(e,h),i(e,o),i(o,n),i(e,T),i(e,b),i(b,w),i(e,C),i(e,m),i(m,D),i(e,M);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(e,null);N||(P=j(m,"click",c[2]),N=!0)},p(a,[t]){t&1&&!G(n.src,v="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+a[0])&&_(n,"src",v),t&1&&r!==(r="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+a[0])&&_(o,"href",r),t&1&&d!==(d=a[0]+".png")&&_(o,"download",d),t&1&&F(w,a[0]),t&10&&(E=a[1],u=Z(u,t,Q,1,a,E,L,e,$,O,null,K))},i:H,o:H,d(a){a&&p(e);for(let t=0;t<u.length;t+=1)u[t].d();N=!1,P()}}}function ee(c,e,l){let s=J(),h=[s];function o(){l(0,s=J()),l(1,h=[s].concat(h))}function n(r){l(0,s=r)}return[s,h,o,n,r=>{n(r)}]}class le extends W{constructor(e){super(),X(this,e,ee,x,Y,{})}}export{le as component};
