import{_ as S,u as A,r as s,a as w,o as M,b as O,c as g,d as f,e as y,f as t,g as d,n as m,p as B,h as I,i as R}from"./index.adbe3f98.js";import{g as C}from"./index.a1b928dc.js";import"./anime.es.729cdde2.js";var V="/assets/puntos_fondo.651c7518.svg",k="/assets/personaje.dd4bf819.png";const D=a=>(B("data-v-b2baa388"),a=a(),I(),a),U={class:"container-escena"},$={class:"puntos-avance"},q=["data"],L=D(()=>t("img",{src:k,alt:""},null,-1)),N=[L],T={setup(a){const n=A(),p=s(null),u=s([]),r=s(["/JuegoPosturas","/JuegoManos","/JuegoRuleta","/JuegoOjos","/JuegoPosturas","/JuegoRuleta","/JuegoManos","/JuegoOjos","/JuegoRuleta","/JuegoPosturaAudios","/VentanaFinal"]),o=w(),l=s(null),i=s([{x:"-31",y:17},{x:-38,y:9},{x:-38,y:1},{x:-27.3,y:-5},{x:-15,y:-9},{x:-3,y:-7.4},{x:-3.5,y:.6},{x:8.5,y:-5.4},{x:8.5,y:2.6},{x:22.9,y:1.8},{x:22.9,y:10.8},{x:31.9,y:15.8},{x:"-31",y:17}]);M(()=>{x()}),O(()=>{o.posicionactualEscenarioJuego>0&&(_.transform=`translate(${i.value[o.posicionactualEscenarioJuego-1].x+"vw"}, ${i.value[o.posicionactualEscenarioJuego-1].y+"vw"})`)});const x=()=>{let e=document.querySelector(".puntos-escena");e.addEventListener("load",()=>{let j=e.getSVGDocument().querySelectorAll("svg g"),P=Object.values(j).filter(c=>c.id.includes("cojin"));u.value=Object.values(P).filter((c,F)=>{if(c.id!="undefined")return c.id}),v(),E()})},h=()=>{let e=o.posicionactualEscenarioJuego;v(),e==4||e==8||e==12?(e++,o.setPosicionActualUsuario(e),l.value.pause(),setTimeout(()=>{n.push(r.value[e-1])},1500)):(setTimeout(()=>{e==0?n.push(r.value[e]):n.push(r.value[e-1])},1500),e++,o.setPosicionActualUsuario(e),l.value.pause()),e==u.value.length&&(e=0,o.setPosicionActualUsuario(e))},E=()=>{let e=o.posicionactualEscenarioJuego;l.value=C.timeline({timeScale:.1,delay:.2}).to("#ovalo",{x:i.value[e].x+"vw",y:i.value[e].y+"vw",delay:1.2,duration:1,ease:"Linear.easeInOut",onComplete:h},"2")},v=()=>{Object.values(u.value).forEach(e=>{e.style.fill="#B5D0EE"})},J=g({position:"absolute",left:"-14px",bottom:"-4vh",transform:"translate(0px, 0px)"}),_=g({width:"3vw",height:"3vh",borderRadius:"100%",position:"fixed",bottom:"50%",left:"50%",transform:"translate(-49vw, 24.5vw)"});return(e,b)=>(f(),y("div",U,[t("div",$,[t("object",{ref_key:"escena",ref:p,type:"image/svg+xml",data:d(V),class:"puntos-escena"},null,8,q)]),t("div",{style:m(d(_)),id:"ovalo"},[t("div",{id:"personaje",style:m(d(J))},N,4)],4)]))}};var z=S(T,[["__scopeId","data-v-b2baa388"]]);const K={setup(a){return(n,p)=>(f(),y("div",null,[R(z)]))}};export{K as default};
