import{_ as f,a as g,u as y,r,o as h,g as l,f as p,h as _,i as e,D as S,j as b,F as x,p as k,q as w,a7 as q,k as B}from"./index.1a9d6375.js";import{p as o}from"./index.d0a4230b.js";var C="/assets/personajeFinal.4919f3e9.png";const v=s=>(k("data-v-373f532a"),s=s(),w(),s),E=v(()=>e("div",{class:"emulate-confetti-1"},null,-1)),F=v(()=>e("div",{class:"emulate-confetti-2"},null,-1)),L={class:"contenedor-actividad"},D={class:"contenedor-items-ventana-final center-element"},I=v(()=>e("div",{class:"personaje flex-center-elements-column"},[e("div",{class:"flex-center-elements-row gap-3"},[e("img",{src:C,class:"responsive-personaje",alt:""})])],-1)),V={class:"flex-center-elements-column gap-4"},j={class:"titulo"},A=q('<div class="flex-center-elements-column gap-4" data-v-373f532a><div class="contenedor-iconos gap-2" data-v-373f532a><div class="icono-salud" data-v-373f532a></div><div class="icono-estres" data-v-373f532a></div><div class="icono-energia" data-v-373f532a></div></div><div id="salud" class="flex-center-elements-row-nowrap gap-1" data-v-373f532a><div data-v-373f532a> Salud </div><div class="contenedor-barras" data-v-373f532a><div class="overlay" data-v-373f532a><div class="barra-salud" data-v-373f532a></div></div></div></div><div id="estres" class="flex-center-elements-row-nowrap gap-1" data-v-373f532a><div data-v-373f532a> Estr\xE9s </div><div class="contenedor-barras" data-v-373f532a><div class="overlay" data-v-373f532a><div class="barra-estres" data-v-373f532a></div></div></div></div><div id="energia" class="flex-center-elements-row-nowrap gap-1" data-v-373f532a><div data-v-373f532a> Energ\xEDa </div><div class="contenedor-barras" data-v-373f532a><div class="overlay" data-v-373f532a><div class="barra-energia" data-v-373f532a></div></div></div></div></div>',1),N={setup(s){const n=g(),u=y(),t=r(0),i=r(100),c=r(100),d=r(100);h(()=>{document.querySelector(".barra-energia").getBoundingClientRect(),t.value=n.puntosGlobalesActividad,t.value<10&&(t.value=t.value*10),i.value=Math.round(i.value-t.value/3/100*100-30),c.value=Math.round(c.value-t.value/3/100*100-15),d.value=Math.round(d.value-t.value/3/100*100-40),l.to(".icono-energia",1.4,{marginLeft:`${i.value}%`,repeat:0,repeatDelay:1.3,yoyo:!0,transformOrigin:"center center"}),l.to(".icono-salud",2.4,{marginLeft:`${c.value}%`,repeat:0,repeatDelay:1.3,yoyo:!1,transformOrigin:"center center"}),l.to(".icono-estres",1.8,{marginLeft:`${d.value}%`,repeat:0,repeatDelay:1.3,yoyo:!1,transformOrigin:"center center"}),document.querySelector(".emulate-confetti-1").addEventListener("click",a=>{o.confetti(a.target)}),document.querySelector(".emulate-confetti-2").addEventListener("click",a=>{o.confetti(a.target)}),setInterval(()=>{document.querySelector(".emulate-confetti-1").click()},4500),setInterval(()=>{document.querySelector(".emulate-confetti-2").click()},4500),document.querySelector(".icono-estres").addEventListener("mouseover",a=>{o.sparkles(a)}),document.querySelector(".icono-salud").addEventListener("mouseover",a=>{o.sparkles(a)}),document.querySelector(".icono-energia").addEventListener("mouseover",a=>{o.sparkles(a)})});const m=()=>{n.reiniciarTodo(),u.push("/")};return(a,T)=>(p(),_(x,null,[E,F,e("div",L,[e("div",null,[e("div",D,[I,e("div",V,[e("div",null,[e("div",j,"Balance de "+S(b(n).nombreUsuario.toUpperCase()),1)]),A]),e("div",{class:"auto"},[e("div",{class:"btn-primary",onClick:m},"CONTINUAR")])])])])],64))}};var M=f(N,[["__scopeId","data-v-373f532a"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/BalanceFinal.vue"]]);const O={setup(s){return(n,u)=>(p(),_("div",null,[B(M)]))}};var R=f(O,[["__file","D:/Trabajo/Pausas Activas/Codigo/src/views/VentanaFinalJuegoView.vue"]]);export{R as default};
