import{p as l}from"./index.d0a4230b.js";/* empty css                                                                       */import{_ as r,r as c,o as u,d,e as m,f as p,h as _,i as e,H as s,p as v,q as f}from"./index.1a9d6375.js";const o=n=>(v("data-v-8b89e690"),n=n(),f(),n),h=o(()=>e("div",{class:"emulate-confetti-1-pantantalla-puntos"},null,-1)),g=o(()=>e("div",{class:"emulate-confetti-2-pantantalla-puntos"},null,-1)),b={class:"ventana-mensaje-puntos center-element flex-center-elements-column gap-2 padding-2 animate__animated animate__fadeIn"},k={class:"contenedor-central flex-center-elements-column",id:"simulate-click"},x={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column","justify-content":"flex-start","align-items":"baseline","grid-gap":"59px"}},j={class:"contenedor-puntos-buenos flex-center-elements-column gap-2"},y={class:"contenedor-mensajes"},I={class:"info-mensaje"},q={class:"mensaje-opcion"},S=o(()=>e("h1",null," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad repudiandae, quos, dolores pariatur vero accusantium ut doloremque ratione sint soluta, recusandae porro possimus modi distinctio minus placeat? Incidunt, exercitationem cumque? ",-1)),E={class:"auto flex-center-elements-row gap-2",style:{"text-align":"center"}},B=o(()=>e("div",{class:"button"},"Click me!",-1)),$={emits:["continuarTriviaEvent","volverEscenarioEvent"],setup(n,{emit:w}){c(null);const a=c(null);u(()=>{document.querySelector(".button").addEventListener("click",i),a.value=setInterval(()=>{document.querySelector(".button").click()},4500)});const i=t=>{l.sparkles(t.target)};return d(()=>{}),m(()=>{document.querySelector(".button").removeEventListener("click",i),a.value!=null&&clearInterval(a.value)}),(t,L)=>(p(),_("div",null,[h,g,e("div",b,[e("div",k,[e("div",x,[e("div",j,[s(t.$slots,"puntos-buenos",{},void 0,!0)]),e("div",y,[e("div",I,[s(t.$slots,"mensaje-respuestas",{},void 0,!0)]),e("div",q,[s(t.$slots,"mensaje-opcion",{},()=>[S],!0)])]),e("div",E,[s(t.$slots,"botones",{},void 0,!0)])])])]),B]))}};var C=r($,[["__scopeId","data-v-8b89e690"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/VentanaPuntosFinal.vue"]]);export{C as default};
