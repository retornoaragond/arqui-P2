import $ from"./HeaderView.88ad92a6.js";import{_ as H}from"./nuxt-link.9c1542ca.js";import I from"./FooterView.ad1c4122.js";import{_ as L,s as S,n as f,c as r,b as u,a as t,u as o,t as c,d,F as V,q as k,o as m,w as A,p as F,e as N}from"./entry.35912991.js";import{u as v}from"./fetch.cdf1685a.js";const s=_=>(F("data-v-48d0323f"),_=_(),N(),_),B={class:"container"},q={class:"row"},z={class:"column image-column"},C=["src"],D={class:"column info-column"},E=s(()=>t("b",null,"Año de lanzamiento:",-1)),G=s(()=>t("b",null,"Géneros:",-1)),R=s(()=>t("br",null,null,-1)),U=s(()=>t("br",null,null,-1)),Y=s(()=>t("b",null,"Sinopsis",-1)),Z=s(()=>t("br",null,null,-1)),j=["innerHTML"],J=s(()=>t("h5",null,"Álbumes",-1)),K={class:"album-list"},O={__name:"[_slug]",async setup(_){let e,a;const p=S(),{data:n,refresh:b}=([e,a]=f(()=>v(`https://cms-una.000webhostapp.com/api/content/item/Movies/${p.params._slug}`,"$2rZddDcUh8")),e=await e,a(),e);b();const{data:g,refresh:w}=([e,a]=f(()=>v(`https://cms-una.000webhostapp.com/api/content/items/Albums?filter={"movieId._id":"${p.params._slug}"}&fields={"title":true}`,"$qvh07dYMdT")),e=await e,a(),e);w();const x=h=>{{const i=document.createElement("div");return i.innerHTML=h,i.innerText}};return(h,i)=>{const y=$,M=H,T=I;return m(),r("div",B,[u(y),t("div",q,[t("div",z,[t("img",{class:"movie-image",src:`https://cms-una.000webhostapp.com/storage/uploads${o(n).image.path}`},null,8,C)]),t("div",D,[t("h4",null,c(o(n).title),1),E,d(" "+c(o(n).release_year)+"; ",1),G,d(" "+c(o(n).genres),1),R,U,Y,Z,t("div",{innerHTML:x(o(n).description)},null,8,j),J,t("ul",K,[(m(!0),r(V,null,k(o(g),l=>(m(),r("li",{key:l.id,class:"album-item"},[u(M,{to:"/albums/"+l._id},{default:A(()=>[d(c(l.title),1)]),_:2},1032,["to"])]))),128))])])]),u(T)])}}},et=L(O,[["__scopeId","data-v-48d0323f"]]);export{et as default};