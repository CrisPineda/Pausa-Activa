import{I as xe,_ as Ie}from"./InstruccionesPausas.10586745.js";import{_ as W,r as a,o as te,b as $,A as D,c as oe,f as i,h as n,i as s,j as g,X as Ae,Q as q,n as R,F as U,I as ie,Y as Se,g as ee,a as $e,u as ke,l as O,m as l,w as H,k as P,P as Ve,V as Me,p as we,q as Oe,Z as Pe,E as G}from"./index.a8a6967d.js";import{I as Re}from"./pregunta.5680b359.js";import{C as se}from"./Cronometro.aa81b117.js";import"./index.5d3ac505.js";/* empty css                                                                       */import{V as Te}from"./VentanaIntroNivel.a187e50e.js";import Ne from"./CamaraWeb.c31406d0.js";import Ee from"./MenuPrincipal.49d36119.js";import{P as ae}from"./PausasActivas.502dba5a.js";var je="/assets/Intrucciones_mano.0df66851.png";var qe="/assets/mano1.fd978dc6.png",Be="/assets/mano2.c937d2de.png",ze="/assets/mano3.90d7573c.png",Le="/assets/mano4.3b89d721.png",Fe="/assets/mano5.c3c2d1a8.png";const Je={class:"contenedor-principal-sliders flex-center-elements-column"},De=["src"],He={class:"container-slider slider-style-dinamic"},Ue=["id"],Ge=["src"],We=["src"],Ze={props:{id:Number,src:Array,correcto:Boolean,ocultarNavegacion:{type:Boolean,default:!1},finTime:Boolean,finTimeOpcionesActividad:Boolean},emits:["validarOpciones","guardarOrdenRespuesta"],setup(h,{emit:k}){const t=h,u=a(0);a(!1);const d=a(!1);te(()=>{});const A=a([]),v=a([{src:Re,isVisible:!0,id:0},{src:qe,isVisible:!0,id:1},{src:Be,isVisible:!0,id:2},{src:ze,isVisible:!0,id:3},{src:Le,isVisible:!0,id:4},{src:Fe,isVisible:!0,id:5}]),p=$({cursor:"default",zIndex:"9999",padding:"5px",borderRadius:"100%",filter:"opacity(0.5)",pointerEvents:"all",color:"white",transform:"rotate(90deg)",width:"min-content",height:"100vw",visibility:"hidden",display:"block"}),m=$({cursor:"pointer",zIndex:"9999",padding:"5px",borderRadius:"100%",pointerEvents:"all",color:"white",transform:"rotate(90deg)",width:"min-content",height:"100vw",visibility:"hidden",display:"block"}),B=$({width:"32vh",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",justifyContent:"flex-start",height:"fit-content",gridGap:"20px"}),f=$({boxShadow:"none",borderRadius:"12px",backgroundColor:"white"});D(()=>t.finTimeOpcionesActividad,(o,r)=>{o&&(p.display="none",m.display="none")}),D(()=>t.correcto,(o,r)=>{o?f.backgroundColor="var(--border-error-mensaje)":f.backgroundColor="var(--border-success-mensaje)"}),D(()=>t.ocultarNavegacion,(o,r)=>{o==!0?(m.visibility="visible",p.visibility="visible"):(m.visibility="hidden",p.visibility="hidden")});const b=oe(()=>{let o=null;return t.finTime?o=v.value.slice(0,v.value.length):(o=v.value.slice(1,v.value.length).sort(()=>Math.random()-.5),A.value.push(o[0])),o}),V=()=>{if(u.value!=v.value.length-1&&d.value!=!0){d.value=!0;let o=document.querySelector(`.contenedor-imagenes-${t.id}`).getBoundingClientRect();ee.to(`.contenedor-imagenes-${t.id}`,{y:`+=-${Math.round(o.height/6)+3}px`,onComplete:()=>{d.value=!1,u.value++,k("validarOpciones",{posicionSlider:t.id-1,actual:u,validacionArray:A}),T()}})}},C=()=>{if(u.value>0&&d.value!=!0){d.value=!0;let o=document.querySelector(`.contenedor-imagenes-${t.id}`).getBoundingClientRect();ee.to(`.contenedor-imagenes-${t.id}`,{y:`+=${Math.round(o.height/6)+3}px`,ease:"Power.easeInOut",onComplete:()=>{d.value=!1,u.value--,k("validarOpciones",{posicionSlider:t.id-1,actual:u,validacionArray:A}),T()}})}},T=()=>{let o=document.querySelector(`.prev-${t.id}`),r=document.querySelector(`.next-${t.id}`);(o!=null||r!=null)&&(u.value==0?(o.style.cursor="pointer",r.style.cursor="pointer",o.style.filter="opacity(1)",r.style.filter="opacity(0.5)"):u.value==v.value.length-1?(o.style.cursor="pointer",r.style.cursor="pointer",o.style.filter="opacity(0.5)",r.style.filter="opacity(1)"):(o.style.cursor="pointer",r.style.cursor="pointer",o.style.filter="opacity(1)",r.style.filter="opacity(1)"))};return(o,r)=>(i(),n("div",Je,[s("div",{class:q(`next-${t.id}`),style:R(g(p)),onClick:r[0]||(r[0]=x=>C())},[s("img",{src:g(Ae),alt:"",width:"38"},null,8,De)],6),s("div",He,[s("div",{class:q(`contenedor-imagenes-${t.id}`),style:R([g(B),g(f)])},[(i(!0),n(U,null,ie(g(b),(x,S)=>(i(),n("div",{class:"sliders-order",id:`sliders-order-${S}`,key:x},[s("img",{src:x.src,alt:"imagen",width:"50"},null,8,Ge)],8,Ue))),128))],6)]),s("div",{class:q(`prev-${t.id}`),style:R(g(m)),onClick:r[1]||(r[1]=x=>V())},[s("img",{src:g(Se),alt:"",width:"38"},null,8,We)],6)]))}};var Qe=W(Ze,[["__scopeId","data-v-24c4d480"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Manos/ItemSliders.vue"]]),Xe="/assets/manosCompleta.6d31e0f4.gif";const y=h=>(we("data-v-f1691baa"),h=h(),Oe(),h),Ye=y(()=>s("div",{class:"item-slider"},[s("img",{src:je,class:"responsive-imagen-slider",alt:""})],-1)),Ke=y(()=>s("div",{class:"btn-primary2"}," CONTINUAR",-1)),es=[Ke],ss={class:"contenedor-actividad gap-2"},as={class:"contenedor-mensaje center-element flex-center-elements-column gap-3Manos"},ts=y(()=>s("span",{class:"tooltiptext"},"Ver Instrucciones",-1)),os=[ts],is={key:3,class:"contenedor-opciones flex-center-elements-column"},ns={key:0},rs={key:0},ls=y(()=>s("div",{class:"titulo-instruccion"},[G(" \xA1Hora de memorizar la secuencia! "),s("br"),s("br"),G("Cuando est\xE9 listo, debe dar clic sobre continuar. ")],-1)),cs=[ls],us={key:1},ds=y(()=>s("div",{class:"titulo-instruccion"},[G(" Haciendo uso de las flechas, fije la secuencia memorizada. Si ya tiene fijada la secuencia correcta, debe dar clic sobre comprobar. Si responde correctamente deber\xE1 realizar la misma con sus manos. Si por el contrario, no acierta, deber\xE1 dar clic sobre el bot\xF3n modificar hasta acertar la secuencia memorizada."),s("br"),s("br")],-1)),vs=[ds],ps={class:"contenedor-opciones-items"},ms={class:"flex-center-elements-row gap-3Manos"},fs={key:0,class:"titulo auto"},gs=y(()=>s("div",null,"\xA1Hora de realizar la pausa activa! Siga la secuencia con sus manos. ",-1)),_s=[gs],ys={key:0,class:"auto flex-center-elements-column gap-3Manos"},hs={key:1},bs={class:"auto flex-center-elements-row gap-2",style:{"text-align":"center"}},Cs=y(()=>s("div",null,[s("img",{id:"tam",src:Ie,alt:""})],-1)),xs={class:"contenedor-ejercicio-pausas gap-1"},Is=y(()=>s("div",{class:"titulo-instrucciones-pausas auto"},[s("div",null,"Instrucciones")],-1)),As=["innerHTML"],Ss={setup(h){const k=a(Pe),t=$e();oe(()=>t.isCamara);const u=ke();a(4);const d=a(null),A=a(!1),v=a(!1),p=a(!1),m=a(!1),B=a(!0),f=a(!0),b=a(!0),V=a(!0),C=a(!0),T=a(0),o=a(!1),r=a(!1),x=a(!1),S=a(!1),Z=a(!1),z=a(0),L=a(0),N=a(0),_=a(!1),Q=a(!1),X=a(""),F=a(!1),Y=a(!1),M=a(!1),J=a(!1),E=a(!1),K=a(!1);te(()=>{console.log(ae),X.value=Object.values(ae).filter(e=>e.id==10)[0].instruccion});const j=$({margin:"0px auto",display:"grid"}),ne=e=>{e==1?(d.value=2,j.gridTemplateColumns="repeat(2,1fr)"):(d.value=4,j.gridTemplateColumns="repeat(4,1fr)")},I=$({posicionSlider:null,actual:null,respuesta:[],orderArray:[],finalizado:!1}),re=()=>{b.value=!b.value,r.value==!1&&(o.value=!0,r.value=!0)},le=()=>{M.value=!1,S.value=!1,f.value=!0,C.value=!0,m.value=!1,p.value=!0},ce=()=>{M.value=!0,m.value=!1,p.value=!1,S.value=!0,f.value=!1,C.value=!1},ue=()=>{E.value=!1,Y.value=!0},de=e=>{I.posicionSlider=e.posicionSlider,I.actual=e.actual.value,I.respuesta=e.validacionArray.value,I.orderArray[e.posicionSlider]={slider:e.posicionSlider,posicion:I.actual,respuesta:I.respuesta[0].id}},ve=()=>{if(S.value=!1,p.value=!1,m.value=!0,C.value=!0,I.orderArray.forEach((e,c)=>{e.posicion==e.respuesta?(Z.value=!0,be(),N.value=N.value+1,document.querySelector(`.prev-${e.slider+1}`).style.visibility="hidden",document.querySelector(`.next-${e.slider+1}`).style.visibility="hidden",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} img`).style.boxShadow="-1px -1px 16px inset green",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} img`).style.borderRadius="12px",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} img`).style.border="1px solid #4caf50",document.querySelector(`.contenedor-imagenes-${e.slider+1}`).style.pointerEvent="none",document.querySelector(`.contenedor-imagenes-${e.slider+1} #sliders-order-${e.posicion}`).classList.add("opcion-correcta-item")):(Z.value=!1,he(),document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} img`).style.boxShadow="-1px -1px 16px inset red",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} img`).style.borderRadius="12px",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} img`).style.boder="1px solid #4caf50",document.querySelector(`.contenedor-imagenes-${e.slider+1} #sliders-order-${e.posicion}`).classList.add("opcion-incorrecta-item"))}),N.value==d.value){m.value=!1,x.value=!0,V.value=!1,p.value=!1,B.value=!0,_.value=!0,M.value=!0,F.value=!1,j.gridTemplateColumns="repeat(2,1fr)";let e=document.querySelectorAll(".contenedor-principal-sliders");Object.values(e).forEach(c=>{c.style.height="332px ",c.style.maxHeight="25vh"})}else N.value=0},pe=()=>{M.value=!0,F.value=!0,v.value=!0,S.value=!0,A.value=!0,V.value=!0,f.value=!1,C.value=!1},me=()=>{o.value=!1},fe=()=>{K.value=!0,_.value=!0},ge=()=>{_.value=!_.value,E.value=!0,Q.value=!0,J.value=!0},_e=()=>{Ce(),t.setActividadActual(u.currentRoute.value.path),t.setActividadCompletada();let e=t.posicionactualEscenarioJuego,c=t.posicionActualActividades;t.setPosicionActualActividades(c+1),t.setPosicionActualUsuario(e+1),u.push("/escenario")},ye=()=>{t.setMenuEstadoVisible(!t.menuEstadoVisible)},he=()=>{L.value=L.value+1},be=()=>{z.value=z.value+1},Ce=()=>{let e=z.value-L.value;e<0&&(e=e*-1),t.setPuntosGlobales(e)};return(e,c)=>(i(),n(U,null,[s("div",{class:"botonMenu",onClick:ye}),o.value?(i(),O(Te,{key:0,onFinAnimacionIntroNivel:me,onConfiguraActividad:ne,urlImagenFondo:e.marco_nivel_1},null,8,["urlImagenFondo"])):l("",!0),b.value?(i(),O(Me,{key:1},{texto:H(()=>[s("div",null,[P(Ve,{numerodeSliders:0,ocultarNavegacion:!0,tituloInstruccion:k.value},{sliders:H(()=>[Ye]),_:1},8,["tituloInstruccion"])]),s("div",{class:"btn-jugar auto flex-center-elements-row gap-2",style:{"text-align":"center"},onClick:re},es)]),_:1})):l("",!0),s("div",ss,[s("div",as,[M.value?(i(),O(se,{key:0,isRun:F.value,segundos:15,onEndTime:le},null,8,["isRun"])):l("",!0),J.value?(i(),O(se,{key:1,isRun:Y.value,segundos:15,onEndTime:c[0]||(c[0]=w=>f.value=!f.value)},null,8,["isRun"])):l("",!0),J.value?(i(),n("div",{key:2,class:"btn-ayuda tooltip",onClick:fe},os)):l("",!0),T.value!=3?(i(),n("div",is,[V.value?(i(),n("div",ns,[v.value?(i(),n("div",us,vs)):(i(),n("div",rs,cs))])):l("",!0),s("div",ps,[s("div",ms,[Q.value?(i(),n("div",fs,_s)):l("",!0),s("div",{style:R(g(j)),class:"gap-1"},[(i(!0),n(U,null,ie(d.value,w=>(i(),n("div",{key:`_${w}`},[P(Qe,{finTime:A.value,finTimeOpcionesActividad:_.value,ocultarNavegacion:!C.value,id:w,onValidarOpciones:de,comprobar:!1},null,8,["finTime","finTimeOpcionesActividad","ocultarNavegacion","id"])]))),128))],4)]),x.value?(i(),n("div",ys,[P(Ne,{width:140,height:140,onCamaraLoad:e.finLoadCamara},null,8,["onCamaraLoad"]),f.value?l("",!0):(i(),n("div",{key:0,class:"btn-primary2",onClick:_e},"VOLVER AL ESCENARIO")),E.value?(i(),n("div",{key:1,class:q([{"habilitar-boton-listo":E.value},"auto inhabilitar-boton-listo flex-center-elements-row gap-2"]),style:{"text-align":"center"}},[s("div",{class:"button-bs",onClick:ue}," COMENZAR")],2)):l("",!0)])):l("",!0)]),v.value?l("",!0):(i(),n("div",hs,[s("div",{class:"auto",style:{"text-align":"center"}},[s("div",{class:"btn-primary2",onClick:pe},"CONTINUAR")])])),s("div",null,[s("div",bs,[s("div",null,[p.value?(i(),n("div",{key:0,class:"btn-primary2",onClick:ve}," COMPROBAR ")):l("",!0),m.value?(i(),n("div",{key:1,class:"btn-primary2",onClick:ce},"MODIFICAR ")):l("",!0)])])])])):l("",!0)]),_.value?(i(),O(xe,{key:0,onEventOcultarInstruccionesVentana:ge,isCerrarVisible:K.value,onEventOcultarInstrucciones:c[1]||(c[1]=w=>_.value=!_.value)},{"texto-instrucciones":H(()=>[Cs,s("div",xs,[s("div",null,[Is,s("div",null,[s("div",{innerHTML:X.value,class:"texto-descripcion-pausas"},null,8,As)])]),s("div",{style:R({border:"1.35px solid black",background:`transparent url(${g(Xe)}) no-repeat center center`,width:"320px",height:"65%",backgroundSize:"100% 100%",width:"49vh"})},null,4)])]),_:1},8,["isCerrarVisible"])):l("",!0),P(Ee,{isvisible:!1,onEventInstrucciones:c[2]||(c[2]=w=>b.value=!b.value)})])],64))}};var $s=W(Ss,[["__scopeId","data-v-f1691baa"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Manos/JuegoManos.vue"]]);const ks={setup(h){return(k,t)=>(i(),n("div",null,[P($s)]))}};var qs=W(ks,[["__file","D:/Trabajo/Pausas Activas/Codigo/src/views/VentanaJuegoManosView.vue"]]);export{qs as default};
