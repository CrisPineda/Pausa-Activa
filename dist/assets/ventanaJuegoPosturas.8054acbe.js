var ta=Object.defineProperty,sa=Object.defineProperties;var na=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var ia=Object.prototype.hasOwnProperty,la=Object.prototype.propertyIsEnumerable;var Ae=(d,u,s)=>u in d?ta(d,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[u]=s,r=(d,u)=>{for(var s in u||(u={}))ia.call(u,s)&&Ae(d,s,u[s]);if(ke)for(var s of ke(u))la.call(u,s)&&Ae(d,s,u[s]);return d},c=(d,u)=>sa(d,na(u));import{I as ra,_ as ca}from"./InstruccionesPausas.c42ba072.js";import{_ as me,r as e,a as je,c as j,b as M,o as ua,g as va,d as de,A as X,f as t,h as l,Q as Ve,j as g,i as a,n as z,u as da,l as F,m,w as x,k as $,P as ma,V as pa,D as ga,F as Pe,I as _a,p as fa,q as ha,E as Ee,W as Ca}from"./index.705e1255.js";import{a as Ia}from"./imagenes.202000f6.js";import{A as ya,I as ba}from"./incorrecto.20f82147.js";import{C as ka}from"./Cronometro.4824efe7.js";import Aa from"./VentanaPuntosFinal.f4052453.js";import{V as Pa}from"./VentanaIntroNivel.e5747827.js";import Oa from"./CamaraWeb.2466a1a0.js";import xa from"./MenuPrincipal.d38e7995.js";import{I as Oe}from"./pregunta.5680b359.js";import{V as xe}from"./videoPausas.aea9b385.js";import{C as ja,W as Va}from"./chek-list.4fb9f8b7.js";import{P as Ea}from"./PausasActivas.502dba5a.js";import"./index.fdd66ac4.js";/* empty css                                                                       */var wa="/assets/Intrucciones_posturas.243754b6.png";const Ta=["id"],Na=["id"],Sa=["src"],Ma={key:1},Ra=["src"],Ua={props:{srcUrlImagen:String,posicion:Number,numero:Number,correcto:Boolean,opcion:Number,girarOpciones:Boolean,idImagenEjericicio:Number},emits:["ocultarVentana","finAnimacion","finAnimacionFlip","OpcionCorrecto","OpcionInCorrecto"],setup(d,{emit:u}){const s=d,V=e(null),I=e(null),y=e(!1),R=e(!1),G=e(!1),f=e(""),Y=je(),J=e(Ia),b=j(()=>J.value[s.numero-1].numero);M({display:"flex",alignItem:"center",alignContent:"center",textAlign:"center",width:"10vw",height:"25vh"});const U=M({width:"14vw",height:"29vh",textAlign:"center",display:"flex",justifyContent:"center",alignContent:"center",margin:"0px auto"}),E=M({pointerEvents:"none",backgroundColor:"transparent",pointerEvents:"none"});ua(()=>{f.value=s.srcUrlImagen,s.girarOpciones&&va.to(".contenedor-opciones",{alpha:1,delay:.9,rotationY:-180,transformStyle:"preserve-3d",transformPerspective:1e3,duration:.4,stagger:{grid:[7,1],from:"center",amount:1.5},onComplete:()=>{E.pointerEvents="all"},onUpdate:function(){}})}),de(()=>{document.body.focus()}),X(()=>s.srcUrlImagen,(_,i)=>{f.value=`url(${_})`}),X(()=>s.correcto,(_,i)=>{_?respuestacorecta.value=!respuestacorecta.value:respuestacorecta.value}),X(()=>s.srcUrlImagen,(_,i)=>{}),X(()=>s.girarOpciones,(_,i)=>{});const w=_=>{let i=_;if(parseInt(s.opcion)===parseInt(i)){if(I.value==null){E.pointerEvents="none",document.getElementById(`contenedor-${i}`).classList.add("opcion-correcto");let p=document.querySelectorAll(".item-image-img"),ee=J.value.filter(Z=>Z.id==s.idImagenEjericicio)[0].imagen;p[i-1].style.boxShadow="-1px -1px 16px inset green",y.value=!0,f.value=ee,Y.audioPausas?(I.value=new Audio(ya),I.value.play(),I.value.addEventListener("ended",()=>{u("OpcionCorrecto",i)})):(y.value=!1,u("OpcionCorrecto",i))}else I.value.stopAudio();R.value=!0}else{document.getElementById(`contenedor-${i}`).classList.add("opcion-incorrecto");let p=document.querySelectorAll(".item-image-img");p[i-1].style.boxShadow="-1px -1px 16px inset red",Y.audioPausas&&(V.value=new Audio(ba),V.value.play()),u("OpcionInCorrecto"),G.value=!0}};return(_,i)=>(t(),l("div",{id:"contenedor-"+s.posicion,style:z(g(E)),class:"contenedor-opciones",onClick:i[0]||(i[0]=p=>w(s.posicion))},[y.value?(t(),l("div",{key:0,class:Ve({correcto:R.value,incorrecto:G.value}),id:"contenedor-imagen"+g(b)},[a("div",{class:"item-image",style:z(g(U))},[a("img",{class:"item-image-img",src:f.value,alt:""},null,8,Sa)],4)],10,Na)):(t(),l("div",Ma,[a("div",{class:"item-image",style:z(g(U))},[a("img",{class:"item-image-img",src:f.value,alt:""},null,8,Ra)],4)]))],12,Ta))}};var La=me(Ua,[["__scopeId","data-v-4b7c3c00"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Posturas/cuadroNumero.vue"]]);const h=d=>(fa("data-v-685cf719"),d=d(),ha(),d),Ba=h(()=>a("div",{class:"item-slider"},[a("img",{src:wa,class:"responsive-imagen-slider",alt:""})],-1)),Fa=h(()=>a("div",{class:"btn-primary"}," CONTINUAR",-1)),$a=[Fa],za={class:"contenedor-actividad"},Ga={key:0},Ja=h(()=>a("span",null,"\xA1Genial!",-1)),Wa=[Ja],Da={key:1},qa=h(()=>a("span",null,"\xA1Lo sentimos!",-1)),Ha=[qa],Qa={key:0,class:"auto"},Ya=["src"],Za={key:1,class:"auto"},Ka=["src"],Xa={style:{"font-size":"2em"}},eo=Ee(),ao=h(()=>a("span",null,"Respuestas seguidas",-1)),oo={class:"contenedor-items flex-center-elements-column gap-2 center-element"},to={key:0},so={key:0},no=h(()=>a("div",{class:"title"},"\xBFEn qu\xE9 posici\xF3n se encontraba la pausa activa?",-1)),io=[no],lo={key:1},ro=h(()=>a("div",{class:"title"},"Memorice la ubicaci\xF3n de cada uno de los ejercicios.",-1)),co=[ro],uo=h(()=>a("span",{class:"tooltiptext"},"Ver Instrucciones",-1)),vo=[uo],mo={key:0},po={class:"imagen-random"},go={class:"imagen-random-img"},_o=["id","src"],fo={key:0,class:"contenedor-opciones animate__animated animate__fadeIn animate__zoomIn"},ho={key:3},Co=h(()=>a("div",{class:"titulo auto"},[a("h4",null,"Si por recomendaci\xF3n m\xE9dica no debe realizar el ejercicio, por favor abstenerse."),a("h3",null,"Cuando est\xE9 listo para hacer la pausa activa, debe dar clic sobre el bot\xF3n comenzar para que el tiempo del cron\xF3metro inicie."),a("h2",null,"\xA1Hora de realizar el ejercicio!")],-1)),Io={class:"contenedor-ejercicio-realizado gap-4"},yo={key:0,class:"contenedor-ejercicios"},bo={key:0,class:"flex-center-elements-column loading-camara"},ko=h(()=>a("span",{class:"spiner"},null,-1)),Ao=[ko],Po=h(()=>a("div",{class:"button-bs"}," COMENZAR",-1)),Oo=[Po],xo={class:"auto flex-center-elements-row gap-2",style:{"text-align":"center",height:"5vh"}},jo=Ee("> "),Vo=h(()=>a("div",null,[a("img",{src:ca,width:"580",alt:""})],-1)),Eo={class:"contenedor-ejercicio-pausas gap-1"},wo=h(()=>a("div",{class:"titulo-instrucciones-pausas auto"},[a("div",null,"Instrucciones")],-1)),To=["innerHTML"],No={setup(d){const u=e(Ca),s=da();e(0);const V=e(null),I=e(!0),y=e(!0),R=e(!1),G=e(!1),f=e(!1),Y=e(!1),J=e(!1),b=e(0),U=e(0),E=e(0),w=e(""),_=e(!1),i=je(),p=e(!1),ee=j(()=>i.isCamara),Z=e(""),W=e([]),ae=e(!1),we=e(!1),pe=e(!0),ge=e(!1),oe=e(!0),T=e([]);e([]);const k=e([]),n=e([]),_e=e(!1),N=e(!1),fe=e(!1),D=e(null),te=e(!1),se=e(!0),S=e(10),he=e(!1),ne=e(!1),q=e(!1),ie=e(null),le=e(!1),re=e(!1),L=e(!1),H=e(!1),ce=e(null);e(null);const B=e(null),ue=e(!1);de(()=>{}),de(()=>{W.value=Object.values(Ea).filter(o=>o.tipo=="recordarPosicion"),W.value=W.value.sort(()=>Math.random()-.5),k.value=k.value.sort(()=>Math.random()-.5),Object.values(W.value).forEach((o,v)=>{const{imagen:C,id:P,cambio:O,tiempo:K,video:aa,loop:oa}=o;n.value.push({imagen:C==null?null:C,idInstruccion:P,cambio:O,tiempo:K,loop:oa,video:aa})}),n.value=Object.values(n.value).filter(o=>o.imagen!==null),n.value=n.value.sort(()=>Math.random()-.5)});const Te=o=>{o==1?(T.value=[c(r({id:1},n.value[0]),{valorCheck:1}),c(r({id:2},n.value[1]),{valorCheck:2}),c(r({id:3},n.value[2]),{valorCheck:3}),c(r({id:4},n.value[3]),{valorCheck:4})],k.value=[c(r({id:1},n.value[0]),{valorCheck:1}),c(r({id:2},n.value[1]),{valorCheck:2}),c(r({id:3},n.value[2]),{valorCheck:3}),c(r({id:4},n.value[3]),{valorCheck:4})],A.gridGap="5vh 20vh",A.gridTemplateColumns="repeat(2,1fr)",ve.height="28vh"):(T.value=[c(r({id:1},n.value[0]),{valorCheck:1}),c(r({id:2},n.value[1]),{valorCheck:2}),c(r({id:3},n.value[2]),{valorCheck:3}),c(r({id:4},n.value[3]),{valorCheck:4}),c(r({id:5},n.value[4]),{valorCheck:5}),c(r({id:6},n.value[5]),{valorCheck:6})],k.value=[c(r({id:1},n.value[0]),{valorCheck:1}),c(r({id:2},n.value[1]),{valorCheck:2}),c(r({id:3},n.value[2]),{valorCheck:3}),c(r({id:4},n.value[3]),{valorCheck:4}),c(r({id:5},n.value[4]),{valorCheck:5}),c(r({id:6},n.value[5]),{valorCheck:6})],A.gridGap="5vh 7vh",A.gridTemplateColumns="repeat(3,1fr)",ve.height="28vh")};M({imagenFondo:{type:String,default:"marco_nivel_2"},nivel:{type:Number,default:0},filas:{type:Number,default:3}});const A=M({width:"auto",height:"61vh",display:"grid",gridTemplateColumns:"repeat(3,1fr);",placeItems:"center",alignItems:"center",flexWrap:"wrap",margin:"0px auto",gridGap:"5vh 20vh"}),ve=M({width:"auto",height:"58vh",textAlign:"center",color:"white",display:"flex",alignItems:"center"}),Q=M({width:"90%",display:"grid",placeContent:"center",placeItems:"center",gridTemplateColumns:"repeat(1,1fr)",gridGap:"11px"}),Ne=j(()=>{var o;return(o=Z.value[0])==null?void 0:o.instruccion});j(()=>p.value);const Ce=j(()=>S.value),Se=j(()=>le.value);j(()=>L.value);const Ie=()=>{y.value=!y.value,G.value==!1&&(R.value=!0,G.value=!0)},Me=()=>{R.value=!1,Y.value=!0,ye()},Re=()=>{p.value?y.value=!1:y.value=!0},Ue=()=>{ne.value=!0,p.value=!0},Le=j(()=>k.value),Be=()=>{ae.value=!0,q.value=!0},Fe=()=>{U.value=U.value+1},$e=()=>{b.value=b.value+1},ze=()=>{let o=b.value-U.value;o<0&&(o=o*-1),i.setPuntosGlobales(o)},Ge=o=>{let v=Object.values(n.value).filter(C=>C.idInstruccion==o);Ce.value!=="null"?(S.value=0,S.value=v[0].tiempo):(S.value=0,S.value=5)},Je=()=>{Object.values(T.value).length==0?(J.value=!0,ze()):(ae.value=!1,L.value=!1,_.value=!1,oe.value=!0,N.value=!N.value,se.value=!1,f.value=!f.value,E.value=0,w.value="",ye())},We=o=>{ie.value==!0&&Math.round(S.value/2)==o&&(re.value==!1&&(B.value=!1,le.value=!0,ue.value=!0,H.value=!1,setTimeout(()=>{B.value=!0,H.value=!0,S.value=o,ue.value=!1,le.value=!1,L.value=!0,re.value=!1},7e3)),re.value=!0,ie.value=null)},De=()=>{N.value=!1,f.value=!f.value,te.value=!te.value,pe.value=!1,I.value=!1,se.value=!1;let o=setTimeout(()=>{I.value=!0,ge.value=!0,clearTimeout(o)},500);A.placeContent="flex-end",A.margin="0px 10% 0px auto",k.value.length==4?A.gridGap="5vh 9vh":A.gridGap="4vh 1vh",k.value.length==6?(Q.gridTemplateColumns="1fr 3fr",Q.gridGap="1fr 3fr",Q.width="100%"):Q.gridTemplateColumns="repeat(2,1fr)"},qe=o=>{p.value=!0,oe.value=!1;let v=k.value.filter((C,P)=>C.id==o);Z.value=Xe(Object.values(v)[0].idInstruccion),ie.value=Object.values(v)[0].cambio,Ge(Object.values(v)[0].idInstruccion),ce.value=Object.values(v)[0].video,he.value=Object.values(v)[0].loop,$e()},He=()=>{H.value=!0,q.value=!0,p.value=!p.value,_.value=!0,_e.value=!1,f.value=!f.value},ye=()=>{Object.values(T.value).length==1?V.value=0:V.value=Math.floor(Math.random()*(Object.values(T.value).length-1)-0),D.value=Object.values(T.value)[V.value],T.value.splice(V.value,1)},be=()=>{var o,v,C,P;return E.value=(o=D.value)==null?void 0:o.valorCheck,w.value=(v=D.value)==null?void 0:v.imagen,{imagen:(C=D.value)==null?void 0:C.imagen,id:(P=D.value)==null?void 0:P.valorCheck}},Qe=()=>{b.value==k.value.legnth-1||(N.value=!N.value,_e.value=!0,we.value=!0,H.value=!1,ne.value=!1,p.value=!1,B.value=!1,w.value=Oe,Je())},Ye=()=>{N.value=!0,fe.value=!fe.value;let o=setTimeout(()=>{I.value=!0,clearTimeout(o)},500)},Ze=()=>{i.setActividadActual(s.currentRoute.value.path),i.setActividadCompletada();let o=i.posicionactualEscenarioJuego,v=i.posicionActualActividades;i.setPosicionActualActividades(v+1),i.setPosicionActualUsuario(o+1),s.push("/Escenario")},Ke=()=>{i.setMenuEstadoVisible(!i.menuEstadoVisible)},Xe=o=>Object.values(W.value).filter(v=>v.id==o),ea=()=>{B.value=!0,L.value=!L.value,q.value=!1};return(o,v)=>{var C,P;return t(),l(Pe,null,[a("div",{class:"botonMenu",onClick:Ke}),R.value?(t(),F(Pa,{key:0,onFinAnimacionIntroNivel:Me,onConfiguraActividad:Te,urlImagenFondo:o.marco_nivel_1},null,8,["urlImagenFondo"])):m("",!0),y.value?(t(),F(pa,{key:1,onOcultarVentana:Ie},{texto:x(()=>[a("div",null,[$(ma,{numerodeSliders:0,ocultarNavegacion:!0,tituloInstruccion:u.value},{sliders:x(()=>[Ba]),_:1},8,["tituloInstruccion"])]),a("div",{class:"btn-jugar auto flex-center-elements-row gap-2",style:{"text-align":"center"},onClick:Ie},$a)]),_:1})):m("",!0),a("div",za,[J.value?(t(),F(Aa,{key:0,onContinuarTriviaEvent:o.continuarTrivia},{"puntos-buenos":x(()=>[b.value>0?(t(),l("div",Ga,Wa)):(t(),l("div",Da,Ha))]),"mensaje-respuestas":x(()=>[b.value>0?(t(),l("div",Qa,[a("img",{src:g(ja),width:"180",height:"180",alt:""},null,8,Ya)])):(t(),l("div",Za,[a("img",{src:g(Va),width:"180",height:"180",alt:""},null,8,Ka)]))]),"mensaje-opcion":x(()=>[a("span",Xa,ga(b.value),1),eo,ao]),botones:x(()=>[a("div",{class:"btn-primary",onMousemove:v[0]||(v[0]=(...O)=>o.confity&&o.confity(...O)),onClick:Ze},"VOLVER AL ESCENARIO",32)]),_:1},8,["onContinuarTriviaEvent"])):m("",!0),a("div",null,[a("div",oo,[oe.value?(t(),l("div",to,[te.value?(t(),l("div",so,io)):(t(),l("div",lo,co))])):m("",!0),H.value?(t(),F(ka,{key:1,isCronometroPausa:g(Se),isRun:L.value,segundos:g(Ce),onEndTime:Qe,onTiempoActual:We},null,8,["isCronometroPausa","isRun","segundos"])):m("",!0),_.value?(t(),l("div",{key:2,class:"btn-ayuda tooltip",onClick:Ue},vo)):m("",!0),a("div",{style:z(g(Q))},[f.value?(t(),l("div",mo,[a("div",po,[a("div",go,[a("div",null,[a("img",{id:(C=be())==null?void 0:C.id,src:(P=be())==null?void 0:P.imagen,alt:""},null,8,_o)])])])])):m("",!0),_.value?m("",!0):(t(),l("div",{key:1,style:z(g(A)),class:"auto",id:"cuadricula"},[(t(!0),l(Pe,null,_a(g(Le),(O,K)=>(t(),l("div",{style:{border:"1px solid var(--azul-axa)","border-radius":"12px",overflow:"hidden"},key:`cuadrado-${K}`},[N.value?m("",!0):(t(),l("div",fo,[I.value?(t(),F(La,{key:0,numero:O.valorCheck,posicion:K+1,idImagenEjericicio:O.idInstruccion,opcion:E.value,girarOpciones:ge.value,onFinAnimacionFlip:Ye,onOpcionCorrecto:qe,onOpcionInCorrecto:Fe,srcUrlImagen:pe.value?O.imagen:g(Oe)},null,8,["numero","posicion","idImagenEjericicio","opcion","girarOpciones","srcUrlImagen"])):m("",!0)]))]))),128))],4))],4),_.value?(t(),l("div",ho,[Co,a("div",Io,[a("div",{style:z(g(ve))},[$(xe,{mostrarimagenReferencia:!1,ismonstrarMensajeCambio:ue.value,videoPausaUrl:ce.value,isPlayVideo:B.value,isPauseVideo:!B.value,mostrarImagenUrl:w.value,isLoop:he.value},null,8,["ismonstrarMensajeCambio","videoPausaUrl","isPlayVideo","isPauseVideo","mostrarImagenUrl","isLoop"])],4),g(ee)?(t(),l("div",yo,[a("div",null,[$(Oa,{width:250,height:250,onCamaraLoad:Be}),ae.value?m("",!0):(t(),l("div",bo,Ao))])])):m("",!0)])])):m("",!0),q.value?(t(),l("div",{key:4,class:Ve([{"habilitar-boton-listo":q.value},"auto inhabilitar-boton-listo flex-center-elements-row gap-2"]),style:{"text-align":"center"},onClick:ea},Oo,2)):m("",!0),a("div",xo,[se.value?(t(),l("div",{key:0,class:"btn-primary",onClick:De},"CONTINUAR")):m("",!0)])])]),p.value?(t(),F(ra,{key:1,onEventOcultarInstruccionesVentana:He,isCerrarVisible:ne.value,onEventOcultarInstrucciones:v[1]||(v[1]=O=>p.value=!p.value)},{"texto-instrucciones":x(()=>[Vo,a("div",Eo,[a("div",null,[wo,a("div",null,[a("div",{innerHTML:g(Ne),class:"texto-descripcion-pausas"},null,8,To)])]),a("div",null,[$(xe,{mostrarimagenReferencia:!0,isPlayVideo:!0,videoPausaUrl:ce.value,mostrarImagenUrl:w.value},null,8,["videoPausaUrl","mostrarImagenUrl"])])])]),default:x(()=>[jo]),_:1},8,["isCerrarVisible"])):m("",!0),$(xa,{isvisible:!1,onEventInstrucciones:Re})])],64)}}};var So=me(No,[["__scopeId","data-v-685cf719"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Posturas/cuadriculaOpciones.vue"]]);const Mo={setup(d){return(u,s)=>(t(),l("div",null,[$(So)]))}};var Ko=me(Mo,[["__file","D:/Trabajo/Pausas Activas/Codigo/src/views/ventanaJuegoPosturas.vue"]]);export{Ko as default};
