import{_ as g,r as a,b as y,d as L,o as B,A as c,U as D,f as E,h as O,i as p,Q as N,D as w,j as H}from"./index.1a9d6375.js";const M={id:"cronometro"},P={class:"base-timer"},S={props:{segundos:{type:Number,default:10},reiniciar:{type:Boolean,default:!1},isRun:{type:Boolean,default:!0},isCronometroPausa:{type:Boolean,default:!1}},emits:["endTime","tiempoActual"],setup(u,{emit:m}){const n=u,f=a(283),_=a(10),T=a(5),l=a(null),b=y({info:{color:"green"},warning:{color:"orange",threshold:_},alert:{color:"red",threshold:T}}),i=n.segundos;let s=a(0),t=a(i),r=a(null);a(b.info.color);let h=a(null);L(()=>{}),B(()=>{n.isRun&&d()}),c(n.reiniciar,(e,o)=>{}),c(()=>n.isRun,(e,o)=>{d()}),c(()=>n.isCronometroPausa,(e,o)=>{clearInterval(r.value),l.value!=null&&(l.value.stopAudio(),l.value=null)});const A=()=>{clearInterval(r.value),document.getElementById("base-timer-label").style.animation="none",m("endTime")},d=()=>{r.value=setInterval(()=>{s.value=s.value+=1,t.value=i-s.value,m("tiempoActual",t.value),document.getElementById("base-timer-label").innerHTML=v(t.value),C(),I(t.value),t.value===0&&A()},1e3)},v=e=>{let o=e%60;return o<10&&(o=`0${o}`),`${o}`},I=e=>{},R=()=>{const e=t.value/i.value;return e-1/i.value*(1-e)},C=()=>{h.value=`${(R()*f.value).toFixed(0)} 283`};return D(()=>{clearInterval(r.value),l.value!=null&&(l.value.stopAudio(),l.value=null)}),(e,o)=>(E(),O("div",M,[p("div",P,[p("span",{id:"base-timer-label",class:N(["base-timer__label",{animate_blinks:u.isRun}])},w(v(H(t))),3)])]))}};var x=g(S,[["__scopeId","data-v-5e860048"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Cronometro.vue"]]);export{x as C};
