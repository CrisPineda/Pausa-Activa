import{_ as Y,r as a,d as W,o as K,b as U,f as s,h as i,n as C,j as c,c as x,y as Ye,i as t,H as qe,k as p,w as B,E as H,D as ie,F as w,I as E,m as S,p as le,q as re,u as Ge,a as Qe,A as je,l as j,P as Je,V as We,Q as oe,B as se,R as ne,T as Ke}from"./index.705e1255.js";import{a as A}from"./anime.es.729cdde2.js";import{C as Oe}from"./Cronometro.4824efe7.js";import De from"./VentanaPuntosFinal.f4052453.js";import{V as Ze}from"./VentanaIntroNivel.e5747827.js";import xe from"./MenuPrincipal.d38e7995.js";import{C as Me,W as Le}from"./chek-list.4fb9f8b7.js";import"./index.fdd66ac4.js";/* empty css                                                                       */var Ne="/assets/slider_Juego_ojos.7c5c1342.gif",Pe="/assets/silla.39b2cd76.svg",Te="/assets/computador.2fd079cf.svg",He="/assets/lampara.e167f8ee.svg";const ze=["id"],Xe={props:{srcImagen:String,id:Number,textoImagen:String},setup(u){const g=u;a(null),a(null),a(window.screen.height),a(window.screen.width);const h=a(0),m=a(0);W(()=>{}),K(()=>{r(),d.transform=`translate(${h.values}px,${m.values}px)`});const r=()=>{},d=U({textAlign:"center",width:"7vw",height:"17vh",display:"inline",position:"absolute",backgroundImage:`url(${g.srcImagen})`,backgroundPosition:"center center",backgroundSize:"contain",backgroundRepeat:"no-repeat"});return(v,F)=>(s(),i("div",{id:`recuadro-imagen-${u.id}`,style:C(c(d))},null,12,ze))}};var J=Y(Xe,[["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Ojos/contendorImagen.vue"]]),M="/assets/banano.8aef6f32.png",L="data:image/png;base64,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",_e="data:image/png;base64,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",ce="data:image/png;base64,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",N="data:image/png;base64,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",P="data:image/png;base64,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",T="data:image/png;base64,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";const ue=u=>(le("data-v-37dfb086"),u=u(),re(),u),$e={class:"interrogacion"},ea={class:"tema-texto"},aa=H("Seleccione las siguientes im\xE1genes:"),ta=ue(()=>t("br",null,null,-1)),oa=ue(()=>t("br",null,null,-1)),sa={class:"tema-texto flex-center-elements-row gap-2"},na={key:0,class:"contenedor-imagenes"},ia=["src"],la={emits:["finSeleccionTemas"],setup(u,{emit:g}){const h=a(["animal","oficina","fruta"]),m=a(""),r=a("");a();const d=a(!1),v=a([{imagen:M,tipo:"fruta"},{imagen:N,tipo:"animal"},{imagen:L,tipo:"fruta"},{imagen:P,tipo:"animal"},{imagen:ce,tipo:"fruta"},{imagen:T,tipo:"animal"},{imagen:P,tipo:"oficina"},{imagen:T,tipo:"oficina"},{imagen:N,tipo:"oficina"}]);K(()=>{}),W(()=>{F()});const F=()=>{d.value=!0,r.value=h.value.sort(()=>Math.random()-.5)[1],m.value=r.value.charAt(0).toUpperCase()+r.value.slice(1),g("finSeleccionTemas",m.value.toLocaleLowerCase())},R=x(()=>Object.values(v.value).filter(f=>f.tipo==m.value.toLocaleLowerCase()));return(f,G)=>{const b=Ye("bold");return s(),i("div",null,[t("div",$e,[qe(f.$slots,"texto",{},()=>[t("div",ea,[aa,ta,oa,p(b,null,{default:B(()=>[H(ie(m.value),1)]),_:1})])],!0)]),t("div",sa,[d.value?(s(),i("div",na,[(s(!0),i(w,null,E(c(R),(V,y)=>(s(),i("img",{src:V.imagen,key:`imagen-${y}`,class:"imagen-fruta",alt:""},null,8,ia))),128))])):S("",!0)])])}}};var ra=Y(la,[["__scopeId","data-v-37dfb086"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Ojos/randomTemaItem.vue"]]);const ca={props:{opciones:{type:Array},cantidadTemas:{type:Number,default:1}},emits:["finSeleccionTemasAleatorios","continuar"],setup(u,{emit:g}){K(()=>{}),W(()=>{});const h=()=>{g("continuar")},m=r=>{g("finSeleccionTemasAleatorios",r)};return(r,d)=>(s(),i("div",null,[(s(!0),i(w,null,E(u.cantidadTemas,(v,F)=>(s(),i("div",{class:"contenedor-temas flex-center-elements-column gap-3",key:`recuadros-${F}`},[p(ra,{class:"flex-center-elements-column gap-3",onFinSeleccionTemas:m}),t("div",{class:"auto flex-center-elements-row gap-2",style:{"text-align":"center"}},[t("div",{class:"btn-primary",onClick:h},"CONTINUAR")])]))),128))]))}};var ua=Y(ca,[["__scopeId","data-v-4150d9ec"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Ojos/randomTema.vue"]]);const q=u=>(le("data-v-2a2233a0"),u=u(),re(),u),da=q(()=>t("div",{class:"item-slider"},[t("div",{class:"juego-visual-slider"},[t("div",null,[t("img",{src:Ne,class:"responsive-imagen-slider",alt:""})]),t("div",null,[t("img",{src:Pe,class:"responsive-imagen-slider",alt:""})]),t("div",null,[t("img",{src:Te,class:"responsive-imagen-slider",alt:""})]),t("div",null,[t("img",{src:He,class:"responsive-imagen-slider",alt:""})])])],-1)),Aa=q(()=>t("div",{class:"btn-primary"}," CONTINUAR",-1)),ma=[Aa],ga={key:0},va=q(()=>t("span",null,"\xA1Genial!",-1)),pa=[va],ha={key:1},fa=q(()=>t("span",null,"\xA1Lo sentimos!",-1)),Ia=[fa],Fa={key:0,class:"auto"},Ba=["src"],wa={key:1,class:"auto"},Ra=["src"],Ua={style:{"font-size":"2em"}},Sa=H(),Ea=q(()=>t("span",null,"Respuestas seguidas",-1)),ba={class:"container-ojos"},Va={class:"ventana-juego-ojos"},ya={key:0},ka=["id","onClick"],Ca=["id","onClick"],Ya=["id","onClick"],qa=["id","onClick"],Ga={setup(u){const g=a(!1),h=a(!1),m=Ge(),r=Qe(),d=a(!1),v=a(0),F=a(0);a(0);const R=a([]),f=a([]),G=a([]),b=a([]),V=a(1),y=a([]),z=a(null),de=a(!1);a(!1);const O=a(2500),k=a(!0),D=a(!1),X=a(!1),_=a(!1),Ae=a(["animal","colores","oficina","paises"]),me=a(null),ge=a(Ke),$=a(!1),ee=a(!1),ve=()=>{k.value=!k.value,g.value==!1&&(D.value=!0,g.value=!0)},pe=()=>{D.value=!1,X.value=!0},he=U({direcciones:[{animacion:"fadeInLeftBig",classFlecha:".flecha-left"},{animacion:"fadeInRightBig",classFlecha:".flecha-right"},{animacion:"fadeInUpBig",classFlecha:".flecha-bottom"},{animacion:"fadeInDownBig",classFlecha:".flecha-top"},{animacion:"backInDown",classFlecha:".flecha-bottom"},{animacion:"backInLeft",classFlecha:".flecha-left"},{animacion:"backInRight",classFlecha:".flecha-right"},{animacion:"backInUp",classFlecha:".flecha-top"}],imagen:[{imagen:M,tipo:"fruta"},{imagen:L,tipo:"fruta"},{imagen:_e,tipo:"fruta"},{imagen:M,tipo:"fruta"},{imagen:ce,tipo:"fruta"},{imagen:L,tipo:"fruta"},{imagen:N,tipo:"oficina"},{imagen:P,tipo:"oficina"},{imagen:T,tipo:"oficina"}]}),fe=U({position:"relative",top:"100%",left:"0%",width:"15vh",height:"15vh",cursor:"pointer"}),Ie=()=>{r.setMenuEstadoVisible(!r.menuEstadoVisible)},Fe=U({position:"relative",top:"-36vh",left:"0%",width:"15vh",heigth:"15vh",cursor:"pointer"}),Be=U({position:"relative",top:"-21vh",right:"-100%",width:"15vh",height:"15vh",cursor:"pointer"}),we=U({position:"relative",top:"-199%",left:"-15%",width:"15vh",height:"15vh",cursor:"pointer"});K(()=>{R.value=document.querySelectorAll(".contenedor-mensaje .objetos-actividad-1"),f.value=document.querySelectorAll(".contenedor-mensaje .objetos-actividad-2"),G.value=document.querySelectorAll(".contenedor-mensaje .objetos-actividad-3"),b.value=document.querySelectorAll(".contenedor-mensaje .objetos-actividad-4")}),W(()=>{});const Re=()=>{h.value?k.value=!1:k.value=!0},Ue=()=>{d.value=!0,ee.value=!0,$.value=!0,Se()},Se=()=>{let n=0,l=0,o=0,e=0;z.value=setInterval(()=>{n=Math.floor(Math.random()*(R.value.length-0)+0),l=Math.floor(Math.random()*(f.value.length-0)+0),o=Math.floor(Math.random()*(G.value.length-0)+0),e=Math.floor(Math.random()*(b.value.length-0)+0),Ve(R.value[n]),ye(f.value[l]),ke(G.value[o]),Ce(b.value[e])},O.value),setInterval(()=>{O.value=O.value-1},3e3)},Q=(n,l)=>{Object.values(y.value)[0].toLowerCase()==n.toLowerCase()?(document.getElementById(`${l}`).style.filter="drop-shadow(2px 4px 6px green)",v.value=v.value+1,setTimeout(()=>{document.getElementById(`${l}`).style.filter="none"},1e3)):(document.getElementById(`${l}`).style.filter="drop-shadow(2px 4px 6px red)",F.value=F.value+1,setTimeout(()=>{document.getElementById(`${l}`).style.filter="none"},1e3))},Ee=()=>{clearInterval(z.value),R.value.forEach(n=>{n.style.visibility="hidden"}),f.value.forEach(n=>{n.style.visibility="hidden"}),_.value=!0,r.setPuntosGlobales(v.value),d.value=!1},be=n=>{y.value.push(n),y.value.length==V.value&&(de.value=!0)},Ve=n=>{A({targets:n,translateY:function(){return A.random(400,(1034-150)*-1)},delay:function(l,o,e){return o*3},endDelay:function(l,o,e){return(e-o)*190},delay:A.stagger(1e3,{direction:"alternate"}),direction:"alternate",easing:"easeOutSine",loop:1})},ye=n=>{A({targets:n,translateY:function(){return A.random(-400,(1034-150)*-1)},delay:function(l,o,e){return o*9},endDelay:function(l,o,e){return(e-o)*90},delay:A.stagger(1e3,{direction:"alternate"}),direction:"alternate",easing:"easeOutSine",loop:1})},ke=n=>{A({targets:n,translateX:function(){return A.random(-100,(1034-100)*-1)},delay:function(l,o,e){return o*9},endDelay:function(l,o,e){return(e-o)*90},delay:A.stagger(1e3,{direction:"alternate"}),direction:"alternate",easing:"easeOutSine",loop:1})},Ce=n=>{A({targets:n,translateX:function(){return A.random(100,(1034-100)*1)},delay:function(l,o,e){return o*9},endDelay:function(l,o,e){return(e-o)*90},delay:A.stagger(1e3,{direction:"alternate"}),direction:"alternate",easing:"easeOutSine",loop:1})},I=x(()=>he.imagen.sort(()=>Math.random()-.5)),ae=x(()=>V.value==1?"flex-center-elements-column":"flex-center-elements-row");je(d,(n,l)=>{});const te=()=>{r.setActividadActual(m.currentRoute.value.path),r.setActividadCompletada();let n=r.posicionactualEscenarioJuego,l=r.posicionActualActividades;r.setPosicionActualActividades(l+1),r.setPosicionActualUsuario(n+1),m.push("/Escenario")};return(n,l)=>(s(),i(w,null,[t("div",{class:"botonMenu",onClick:Ie}),D.value?(s(),j(Ze,{key:0,onFinAnimacionIntroNivel:pe,urlImagenFondo:"marco_nivel_1"})):S("",!0),k.value?(s(),j(We,{key:1},{texto:B(()=>[t("div",null,[p(Je,{numerodeSliders:0,ocultarNavegacion:!0,tituloInstruccion:ge.value},{sliders:B(()=>[da]),_:1},8,["tituloInstruccion"])]),t("div",{class:"btn-jugar auto flex-center-elements-row gap-2",style:{"text-align":"center"},onClick:ve},ma)]),_:1})):S("",!0),_.value?(s(),j(De,{key:2,onContinuarTriviaEvent:n.continuarTrivia,onVolverEscenarioEvent:te},{"puntos-buenos":B(()=>[v.value>0?(s(),i("div",ga,pa)):(s(),i("div",ha,Ia))]),"mensaje-respuestas":B(()=>[v.value>0?(s(),i("div",Fa,[t("img",{src:c(Me),width:"180",height:"180",alt:""},null,8,Ba)])):(s(),i("div",wa,[t("img",{src:c(Le),width:"180",height:"180",alt:""},null,8,Ra)]))]),"mensaje-opcion":B(()=>[t("span",Ua,ie(v.value),1),Sa,Ea]),botones:B(()=>[t("div",{class:"btn-primary",onMousemove:l[0]||(l[0]=(...o)=>n.confity&&n.confity(...o)),onClick:te},"VOLVER AL ESCENARIO",32)]),_:1},8,["onContinuarTriviaEvent"])):S("",!0),t("div",ba,[t("div",Va,[t("div",{class:oe(`contenedor-temas-aleatorios  center-element
      ${c(ae)}
      gap-3`)},[X.value?(s(),i("div",ya,[p(ua,{cantidadTemas:V.value,opciones:Ae.value,onFinSeleccionTemasAleatorios:be,class:oe(`${c(ae)} gap-3`),onContinuar:Ue},null,8,["cantidadTemas","opciones","class"])])):S("",!0)],2)]),se(t("div",null,[t("div",{ref_key:"tamanoContenedor",ref:me,id:"contenedor-elemento-random",class:"contenedor-mensaje center-element"},[se(t("div",null,[ee.value?(s(),j(Oe,{key:0,isRun:$.value,segundos:30,onEndTime:Ee},null,8,["isRun"])):S("",!0)],512),[[ne,d.value]]),(s(!0),i(w,null,E(c(I),(o,e)=>(s(),i("div",{id:`objetos-volador-abajo-${e+1} `,style:C(c(Fe)),class:"objetos-actividad-1 flex-center-elements-row",key:e,onClick:Z=>Q(o.tipo,`objetos-volador-abajo-${e+1} `)},[p(J,{id:e+1,srcImagen:c(I)[e].imagen,class:"animate__animated animate__heartBeat animate__infinite"},null,8,["id","srcImagen"])],12,ka))),128)),(s(!0),i(w,null,E(c(I),(o,e)=>(s(),i("div",{id:`objetos-volador-arriba-${e+1} `,style:C(c(fe)),class:"objetos-actividad-2 flex-center-elements-column",key:e,onClick:Z=>Q(o.tipo,`objetos-volador-arriba-${e+1} `)},[p(J,{id:e+1,srcImagen:c(I)[e].imagen,class:"animate__animated animate__heartBeat animate__infinite"},null,8,["id","srcImagen"])],12,Ca))),128)),(s(!0),i(w,null,E(c(I),(o,e)=>(s(),i("div",{id:`objetos-volador-derecha-${e+1} `,style:C(c(Be)),class:"objetos-actividad-3 flex-center-elements-column",key:e,onClick:Z=>Q(o.tipo,`objetos-volador-derecha-${e+1} `)},[p(J,{id:e+1,srcImagen:c(I)[e].imagen,class:"animate__animated animate__heartBeat animate__infinite"},null,8,["id","srcImagen"])],12,Ya))),128)),(s(!0),i(w,null,E(c(I),(o,e)=>(s(),i("div",{id:`objetos-volador-izquierda-${e+1} `,style:C(c(we)),class:"objetos-actividad-4 flex-center-elements-column",key:e,onClick:Z=>Q(o.tipo,`objetos-volador-izquierda-${e+1} `)},[p(J,{id:e+1,srcImagen:c(I)[e].imagen,class:"animate__animated animate__heartBeat animate__infinite"},null,8,["id","srcImagen"])],12,qa))),128))],512)],512),[[ne,d.value]]),p(xe,{isvisible:!1,onEventInstrucciones:Re})])],64))}};var Qa=Y(Ga,[["__scopeId","data-v-2a2233a0"],["__file","D:/Trabajo/Pausas Activas/Codigo/src/components/Juegos/Ojos/JuegoVisual.vue"]]);const ja={setup(u){return(g,h)=>(s(),i("div",null,[p(Qa)]))}};var Na=Y(ja,[["__file","D:/Trabajo/Pausas Activas/Codigo/src/views/VentanaJuegoVisualView.vue"]]);export{Na as default};
