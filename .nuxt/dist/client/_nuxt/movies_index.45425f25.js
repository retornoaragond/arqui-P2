import l from"./HeaderView.e209f2ad.js";import{_ as u}from"./nuxt-link.5435f5c8.js";import f from"./FooterView.f7e430ea.js";import{_ as x,n as h,c as o,b as _,a,F as v,q as w,u as y,o as n,w as k,d as F,t as V,p as I,e as N}from"./entry.6f003dd5.js";import{u as S}from"./fetch.20a68291.js";const i=e=>(I("data-v-53f16629"),e=e(),N(),e),b={class:"container"},g=i(()=>a("h3",null,"Películas",-1)),B=i(()=>a("p",null,"Esta sección presenta información sobre películas.",-1)),C={class:"movie-list"},E={__name:"movies_index",async setup(e){let t,c;const{data:r}=([t,c]=h(()=>S('https://cms-una.000webhostapp.com/api/content/items/Movies?fields={"title":true}',"$FQJdizRsdd")),t=await t,c(),t);return(L,$)=>{const p=l,m=u,d=f;return n(),o("div",b,[_(p),g,B,a("ul",C,[(n(!0),o(v,null,w(y(r),s=>(n(),o("li",{key:s._id,class:"movie-item"},[_(m,{to:"/movies/"+s._id,class:"movie-link"},{default:k(()=>[F(V(s.title),1)]),_:2},1032,["to"])]))),128))]),_(d)])}}},J=x(E,[["__scopeId","data-v-53f16629"]]);export{J as default};