import{N as s,O as je}from"./index.1a9d6375.js";var M={},A={},B={},oe={},O={};Object.defineProperty(O,"__esModule",{value:!0});O.settings=void 0;O.settings={debug:!1,gravity:800,zIndex:99999,respectReducedMotion:!0};var b={},S={};Object.defineProperty(S,"__esModule",{value:!0});S.overrideDefaults=void 0;function ze(e,t){return Object.assign({},e,t)}S.overrideDefaults=ze;var F={},y={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.Circle=void 0;var Re=function(){function e(t,r,i){i===void 0&&(i=0),this.x=t,this.y=r,this.radius=i}return e.zero=new e(0,0),e}();k.Circle=Re;var x={},g={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.approximately=e.clamp=e.invlerp=e.slerp=e.lerp=e.epsilon=e.rad2deg=e.deg2rad=void 0,e.deg2rad=Math.PI/180,e.rad2deg=180/Math.PI,e.epsilon=1e-6;function t(a,u,l){return(1-l)*a+l*u}e.lerp=t;function r(a,u,l){return t(a,u,(1-Math.cos(l*Math.PI))/2)}e.slerp=r;function i(a,u,l){return(l-a)/(u-a)}e.invlerp=i;function n(a,u,l){return Math.min(l,Math.max(u,a))}e.clamp=n;function o(a,u){return Math.abs(a-u)<e.epsilon}e.approximately=o})(g);Object.defineProperty(x,"__esModule",{value:!0});x.Color=void 0;var Q=g,Ee=function(){function e(t,r,i){this.values=new Float32Array(3),this.rgb=[t,r,i]}return Object.defineProperty(e.prototype,"r",{get:function(){return this.values[0]},set:function(t){this.values[0]=Math.floor(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"g",{get:function(){return this.values[1]},set:function(t){this.values[1]=Math.floor(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"b",{get:function(){return this.values[2]},set:function(t){this.values[2]=Math.floor(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rgb",{get:function(){return[this.r,this.g,this.b]},set:function(t){this.r=t[0],this.g=t[1],this.b=t[2]},enumerable:!1,configurable:!0}),e.prototype.mix=function(t,r){return r===void 0&&(r=.5),new e(Q.lerp(this.r,t.r,r),Q.lerp(this.g,t.g,r),Q.lerp(this.b,t.b,r))},e.prototype.toHex=function(){var t=function(r){return r.toString(16).padStart(2,"0")};return"#"+t(this.r)+t(this.g)+t(this.b)},e.prototype.toString=function(){return"rgb("+this.values.join(", ")+")"},e.fromHex=function(t){return t.startsWith("#")&&(t=t.substr(1)),new e(parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16))},e.fromHsl=function(t,r,i){if(t/=360,r/=100,i/=100,r===0)return new e(i,i,i);var n=function(l,d,c){return c<0&&(c+=1),c>1&&(c-=1),c<.16666666666666666?l+(d-l)*6*c:c<.5?d:c<.6666666666666666?l+(d-l)*(.6666666666666666-c)*6:l},o=function(l){return Math.min(255,256*l)},a=i<.5?i*(1+r):i+r-i*r,u=2*i-a;return new e(o(n(u,a,t+1/3)),o(n(u,a,t)),o(n(u,a,t-1/3)))},e.white=new e(255,255,255),e.black=new e(0,0,0),e}();x.Color=Ee;var N={},C={};Object.defineProperty(C,"__esModule",{value:!0});C.Spline=void 0;var Ce=g,Te=function(){function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t.length===0)throw new Error("Splines require at least one key.");if(Array.isArray(t[0]))throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");this.keys=t}return e.prototype.evaluate=function(t){if(this.keys.length===0)throw new Error("Attempt to evaluate a spline with no keys.");if(this.keys.length===1)return this.keys[0].value;var r=this.keys.sort(function(u,l){return u.time-l.time}),i=r.findIndex(function(u){return u.time>t});if(i===0)return r[0].value;if(i===-1)return r[r.length-1].value;var n=r[i-1],o=r[i],a=Ce.invlerp(n.time,o.time,t);return this.interpolate(n.value,o.value,a)},e}();C.Spline=Te;var Ve=s&&s.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function i(){this.constructor=t}t.prototype=r===null?Object.create(r):(i.prototype=r.prototype,new i)}}(),De=s&&s.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(N,"__esModule",{value:!0});N.Gradient=void 0;var Ie=C,$e=function(e){Ve(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.interpolate=function(r,i,n){return r.mix(i,n)},t.solid=function(r){return new t({value:r,time:.5})},t.simple=function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var n=1/(r.length-1);return new(t.bind.apply(t,De([void 0],r.map(function(o,a){return{value:o,time:a*n}}))))},t}(Ie.Spline);N.Gradient=$e;var H={},Le=s&&s.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function i(){this.constructor=t}t.prototype=r===null?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(H,"__esModule",{value:!0});H.NumericSpline=void 0;var Ae=g,Be=C,Fe=function(e){Le(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.interpolate=function(r,i,n){return Ae.slerp(r,i,n)},t}(Be.Spline);H.NumericSpline=Fe;var G={};Object.defineProperty(G,"__esModule",{value:!0});G.Rect=void 0;var ke=function(){function e(t,r,i,n){i===void 0&&(i=0),n===void 0&&(n=0),this.x=t,this.y=r,this.width=i,this.height=n}return e.fromScreen=function(){return new e(window.scrollX,window.scrollY,window.innerWidth,window.innerHeight)},e.fromElement=function(t){var r=t.getBoundingClientRect();return new e(window.scrollX+r.x,window.scrollY+r.y,r.width,r.height)},e.zero=new e(0,0),e}();G.Rect=ke;var j={},xe=s&&s.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(j,"__esModule",{value:!0});j.Vector=void 0;var I=g,Ne=function(){function e(t,r,i){t===void 0&&(t=0),r===void 0&&(r=0),i===void 0&&(i=0),this.values=new Float32Array(3),this.xyz=[t,r,i]}return Object.defineProperty(e.prototype,"x",{get:function(){return this.values[0]},set:function(t){this.values[0]=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.values[1]},set:function(t){this.values[1]=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this.values[2]},set:function(t){this.values[2]=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"xyz",{get:function(){return[this.x,this.y,this.z]},set:function(t){this.values[0]=t[0],this.values[1]=t[1],this.values[2]=t[2]},enumerable:!1,configurable:!0}),e.prototype.magnitude=function(){return Math.sqrt(this.sqrMagnitude())},e.prototype.sqrMagnitude=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scale=function(t){return typeof t=="number"?new e(this.x*t,this.y*t,this.z*t):new e(this.x*t.x,this.y*t.y,this.z*t.z)},e.prototype.normalized=function(){var t=this.magnitude();return t!==0?this.scale(1/t):new(e.bind.apply(e,xe([void 0],this.xyz)))},e.prototype.angle=function(t){return I.rad2deg*Math.acos((this.x*t.x+this.y*t.y+this.z*t.z)/(this.magnitude()*t.magnitude()))},e.prototype.cross=function(t){return new e(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},e.prototype.dot=function(t){return this.magnitude()*t.magnitude()*Math.cos(I.deg2rad*this.angle(t))},e.prototype.toString=function(){return"Vector("+this.values.join(", ")+")"},e.from2dAngle=function(t){return new e(Math.cos(t*I.deg2rad),Math.sin(t*I.deg2rad))},e.zero=new e(0,0,0),e.one=new e(1,1,1),e.right=new e(1,0,0),e.up=new e(0,1,0),e.forward=new e(0,0,1),e}();j.Vector=Ne;(function(e){var t=s&&s.__createBinding||(Object.create?function(i,n,o,a){a===void 0&&(a=o),Object.defineProperty(i,a,{enumerable:!0,get:function(){return n[o]}})}:function(i,n,o,a){a===void 0&&(a=o),i[a]=n[o]}),r=s&&s.__exportStar||function(i,n){for(var o in i)o!=="default"&&!Object.prototype.hasOwnProperty.call(n,o)&&t(n,i,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(k,e),r(x,e),r(N,e),r(H,e),r(G,e),r(j,e)})(y);Object.defineProperty(F,"__esModule",{value:!0});F.rotationToNormal=void 0;var le=y,ce=g;function He(e){var t=e.x*ce.deg2rad,r=e.y*ce.deg2rad,i=new le.Vector(Math.cos(r),0,Math.sin(r)),n=new le.Vector(0,Math.cos(t),Math.sin(t));return i.cross(n)}F.rotationToNormal=He;var T={};Object.defineProperty(T,"__esModule",{value:!0});T.despawningRules=void 0;T.despawningRules={lifetime:function(e){return e.lifetime<=0},bounds:function(e){var t=document.documentElement.scrollHeight;return e.location.y>t}};var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.Lazy=void 0;var Ge=function(){function e(t,r){r===void 0&&(r=e.defaultExists),this.factory=t,this.exists=r}return Object.defineProperty(e.prototype,"current",{get:function(){return this.exists(this.value)||(this.value=this.factory()),this.value},enumerable:!1,configurable:!0}),e.defaultExists=function(t){return typeof t!="undefined"},e}();Y.Lazy=Ge;(function(e){var t=s&&s.__createBinding||(Object.create?function(i,n,o,a){a===void 0&&(a=o),Object.defineProperty(i,a,{enumerable:!0,get:function(){return n[o]}})}:function(i,n,o,a){a===void 0&&(a=o),i[a]=n[o]}),r=s&&s.__exportStar||function(i,n){for(var o in i)o!=="default"&&!Object.prototype.hasOwnProperty.call(n,o)&&t(n,i,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(S,e),r(F,e),r(T,e),r(Y,e)})(b);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.particleContainer=e.debugContainer=e.rootContainer=void 0;var t=O,r=b,i="party-js-";function n(a){return a&&a.isConnected}function o(a,u,l){var d=document.createElement("div");return d.id=i+a,Object.assign(d.style,u),l.appendChild(d)}e.rootContainer=new r.Lazy(function(){return o("container",{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",pointerEvents:"none",userSelect:"none",zIndex:t.settings.zIndex.toString()},document.body)},n),e.debugContainer=new r.Lazy(function(){return o("debug",{position:"absolute",top:"0",left:"0",margin:"0.5em",padding:"0.5em 1em",border:"2px solid rgb(0, 0, 0, 0.2)",background:"rgb(0, 0, 0, 0.1)",color:"#555",fontFamily:"monospace"},e.rootContainer.current)},n),e.particleContainer=new r.Lazy(function(){return o("particles",{width:"100%",height:"100%",overflow:"hidden",perspective:"1200px"},e.rootContainer.current)},n)})(oe);var Ye=s&&s.__spreadArray||function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e};Object.defineProperty(B,"__esModule",{value:!0});B.Debug=void 0;var Ke=oe,de=O,Ue=function(){function e(t){this.scene=t,this.refreshRate=8,this.refreshTimer=1/this.refreshRate}return e.prototype.tick=function(t){var r=Ke.debugContainer.current,i=de.settings.debug?"block":"none";r.style.display!==i&&(r.style.display=i),de.settings.debug&&(this.refreshTimer+=t,this.refreshTimer>1/this.refreshRate&&(this.refreshTimer=0,r.innerHTML=this.getDebugInformation(t).join("<br>")))},e.prototype.getDebugInformation=function(t){var r=this.scene.emitters.length,i=this.scene.emitters.reduce(function(a,u){return a+u.particles.length},0),n=["<b>party.js Debug</b>","--------------","FPS: "+Math.round(1/t),"Emitters: "+r,"Particles: "+i],o=this.scene.emitters.map(function(a){return["\u2B6F: "+(a.currentLoop+1)+"/"+(a.options.loops>=0?a.options.loops:"\u221E"),"\u03A3p: "+a.particles.length,a.isExpired?"<i>expired</i>":"\u03A3t: "+a.durationTimer.toFixed(3)+"s"].join(", ")});return n.push.apply(n,Ye(["--------------"],o)),n},e}();B.Debug=Ue;var V={},f={},h={};Object.defineProperty(h,"__esModule",{value:!0});h.randomInsideCircle=h.randomInsideRect=h.randomUnitVector=h.pick=h.randomRange=void 0;var ae=y,Xe=g;function w(e,t){return e===void 0&&(e=0),t===void 0&&(t=1),Xe.lerp(e,t,Math.random())}h.randomRange=w;function qe(e){return e.length===0?void 0:e[Math.floor(Math.random()*e.length)]}h.pick=qe;function We(){var e=w(0,2*Math.PI),t=w(-1,1);return new ae.Vector(Math.sqrt(1-t*t)*Math.cos(e),Math.sqrt(1-t*t)*Math.sin(e),t)}h.randomUnitVector=We;function Ze(e){return new ae.Vector(e.x+w(0,e.width),e.y+w(0,e.height))}h.randomInsideRect=Ze;function Je(e){var t=w(0,2*Math.PI),r=w(0,e.radius);return new ae.Vector(e.x+Math.cos(t)*r,e.y+Math.sin(t)*r)}h.randomInsideCircle=Je;Object.defineProperty(f,"__esModule",{value:!0});f.gradientSample=f.splineSample=f.skewRelative=f.skew=f.range=f.evaluateVariation=void 0;var K=h;function Qe(e){return Array.isArray(e)?K.pick(e):typeof e=="function"?e():e}f.evaluateVariation=Qe;function et(e,t){return function(){return K.randomRange(e,t)}}f.range=et;function tt(e,t){return function(){return e+K.randomRange(-t,t)}}f.skew=tt;function rt(e,t){return function(){return e*(1+K.randomRange(-t,t))}}f.skewRelative=rt;function ge(e){return function(){return e.evaluate(Math.random())}}f.splineSample=ge;function it(e){return ge(e)}f.gradientSample=it;var _e={},U={};Object.defineProperty(U,"__esModule",{value:!0});U.getDefaultEmitterOptions=void 0;var fe=T;function nt(){return{duration:5,loops:1,useGravity:!0,maxParticles:300,despawningRules:[fe.despawningRules.lifetime,fe.despawningRules.bounds],modules:[]}}U.getDefaultEmitterOptions=nt;var X={},p={};Object.defineProperty(p,"__esModule",{value:!0});p.circleSource=p.rectSource=p.mouseSource=p.elementSource=p.dynamicSource=void 0;var L=y,ue=h;function ot(e){if(e instanceof HTMLElement)return be(e);if(e instanceof L.Circle)return Pe(e);if(e instanceof L.Rect)return Oe(e);if(e instanceof MouseEvent)return we(e);throw new Error("Cannot infer the source type of '"+e+"'.")}p.dynamicSource=ot;function be(e){return function(){return ue.randomInsideRect(L.Rect.fromElement(e))}}p.elementSource=be;function we(e){return function(){return new L.Vector(window.scrollX+e.clientX,window.scrollY+e.clientY)}}p.mouseSource=we;function Oe(e){return function(){return ue.randomInsideRect(e)}}p.rectSource=Oe;function Pe(e){return function(){return ue.randomInsideCircle(e)}}p.circleSource=Pe;Object.defineProperty(X,"__esModule",{value:!0});X.getDefaultEmissionOptions=void 0;var ee=y,at=p;function ut(){return{rate:10,angle:0,bursts:[],sourceSampler:at.rectSource(ee.Rect.zero),initialLifetime:5,initialSpeed:5,initialSize:1,initialRotation:ee.Vector.zero,initialColor:ee.Color.white}}X.getDefaultEmissionOptions=ut;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.getDefaultRendererOptions=void 0;function st(){return{shapeFactory:"square",applyColor:lt,applyOpacity:ct,applyLighting:dt,applyTransform:ft}}q.getDefaultRendererOptions=st;function lt(e,t){var r=e.toHex();switch(t.nodeName.toLowerCase()){case"div":t.style.background=r;break;case"svg":t.style.fill=t.style.color=r;break;default:t.style.color=r;break}}function ct(e,t){t.style.opacity=e.toString()}function dt(e,t){t.style.filter="brightness("+(.5+Math.abs(e))+")"}function ft(e,t){t.style.transform="translateX("+(e.location.x-window.scrollX).toFixed(3)+"px) "+("translateY("+(e.location.y-window.scrollY).toFixed(3)+"px) ")+("translateZ("+e.location.z.toFixed(3)+"px) ")+("rotateX("+e.rotation.x.toFixed(3)+"deg) ")+("rotateY("+e.rotation.y.toFixed(3)+"deg) ")+("rotateZ("+e.rotation.z.toFixed(3)+"deg) ")+("scale("+e.size.toFixed(3)+")")}(function(e){var t=s&&s.__createBinding||(Object.create?function(i,n,o,a){a===void 0&&(a=o),Object.defineProperty(i,a,{enumerable:!0,get:function(){return n[o]}})}:function(i,n,o,a){a===void 0&&(a=o),i[a]=n[o]}),r=s&&s.__exportStar||function(i,n){for(var o in i)o!=="default"&&!Object.prototype.hasOwnProperty.call(n,o)&&t(n,i,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(U,e),r(X,e),r(q,e)})(_e);var D={};Object.defineProperty(D,"__esModule",{value:!0});D.Particle=void 0;var $=y,ht=S,pt=function(){function e(t){var r=ht.overrideDefaults({lifetime:0,size:1,location:$.Vector.zero,rotation:$.Vector.zero,velocity:$.Vector.zero,color:$.Color.white,opacity:1},t);this.id=Symbol(),this.size=this.initialSize=r.size,this.lifetime=this.initialLifetime=r.lifetime,this.rotation=this.initialRotation=r.rotation,this.location=r.location,this.velocity=r.velocity,this.color=r.color,this.opacity=r.opacity}return e}();D.Particle=pt;Object.defineProperty(V,"__esModule",{value:!0});V.Emitter=void 0;var he=j,vt=O,_=f,te=S,re=_e,mt=D,yt=function(){function e(t){this.particles=[],this.currentLoop=0,this.durationTimer=0,this.emissionTimer=0,this.attemptedBurstIndices=[],this.options=te.overrideDefaults(re.getDefaultEmitterOptions(),t==null?void 0:t.emitterOptions),this.emission=te.overrideDefaults(re.getDefaultEmissionOptions(),t==null?void 0:t.emissionOptions),this.renderer=te.overrideDefaults(re.getDefaultRendererOptions(),t==null?void 0:t.rendererOptions)}return Object.defineProperty(e.prototype,"isExpired",{get:function(){return this.options.loops>=0&&this.currentLoop>=this.options.loops},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canRemove",{get:function(){return this.particles.length===0},enumerable:!1,configurable:!0}),e.prototype.clearParticles=function(){return this.particles.splice(0).length},e.prototype.tick=function(t){if(!this.isExpired&&(this.durationTimer+=t,this.durationTimer>=this.options.duration&&(this.currentLoop++,this.durationTimer=0,this.attemptedBurstIndices=[]),!this.isExpired)){for(var r=0,i=0,n=this.emission.bursts;i<n.length;i++){var o=n[i];if(o.time<=this.durationTimer&&!this.attemptedBurstIndices.includes(r)){for(var a=_.evaluateVariation(o.count),u=0;u<a;u++)this.emitParticle();this.attemptedBurstIndices.push(r)}r++}this.emissionTimer+=t;for(var l=1/this.emission.rate;this.emissionTimer>l;)this.emissionTimer-=l,this.emitParticle()}for(var d=function(v){var m=c.particles[v];c.tickParticle(m,t),c.options.despawningRules.some(function(Se){return Se(m)})&&c.particles.splice(v,1)},c=this,u=this.particles.length-1;u>=0;u--)d(u)},e.prototype.tickParticle=function(t,r){t.lifetime-=r,this.options.useGravity&&(t.velocity=t.velocity.add(he.Vector.up.scale(vt.settings.gravity*r))),t.location=t.location.add(t.velocity.scale(r));for(var i=0,n=this.options.modules;i<n.length;i++){var o=n[i];o(t)}},e.prototype.emitParticle=function(){var t=new mt.Particle({location:this.emission.sourceSampler(),lifetime:_.evaluateVariation(this.emission.initialLifetime),velocity:he.Vector.from2dAngle(_.evaluateVariation(this.emission.angle)).scale(_.evaluateVariation(this.emission.initialSpeed)),size:_.evaluateVariation(this.emission.initialSize),rotation:_.evaluateVariation(this.emission.initialRotation),color:_.evaluateVariation(this.emission.initialColor)});return this.particles.push(t),this.particles.length>this.options.maxParticles&&this.particles.shift(),t},e}();V.Emitter=yt;var W={},se={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resolveShapeFactory=e.resolvableShapes=void 0;var t=f;e.resolvableShapes={square:'<div style="height: 10px; width: 10px;"></div>',rectangle:'<div style="height: 6px; width: 10px;"></div>',circle:'<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',roundedSquare:'<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',roundedRectangle:'<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',star:'<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'};function r(i){var n=t.evaluateVariation(i);if(typeof n=="string"){var o=e.resolvableShapes[n];if(!o)throw new Error("Failed to resolve shape key '"+n+"'. Did you forget to add it to the 'resolvableShapes' lookup?");var a=document.createElement("div");return a.innerHTML=o,a.firstElementChild}return n}e.resolveShapeFactory=r})(se);Object.defineProperty(W,"__esModule",{value:!0});W.Renderer=void 0;var gt=M,_t=j,bt=oe,wt=se,Ot=b,Pt=function(){function e(){this.elements=new Map,this.light=new _t.Vector(0,0,1),this.enabled=!0,this.enabled=!gt.settings.respectReducedMotion||!window.matchMedia("(prefers-reduced-motion)").matches}return e.prototype.begin=function(){this.renderedParticles=[]},e.prototype.end=function(){for(var t=this.elements.keys(),r=t.next();!r.done;){var i=r.value;this.renderedParticles.includes(i)||(this.elements.get(i).remove(),this.elements.delete(i)),r=t.next()}return this.renderedParticles.length},e.prototype.renderParticle=function(t,r){if(!!this.enabled){var i=r.renderer,n=this.elements.has(t.id)?this.elements.get(t.id):this.createParticleElement(t,i);if(i.applyColor&&i.applyColor(t.color,n),i.applyOpacity&&i.applyOpacity(t.opacity,n),i.applyLighting){var o=Ot.rotationToNormal(t.rotation),a=o.dot(this.light);i.applyLighting(a,n)}i.applyTransform&&i.applyTransform(t,n),this.renderedParticles.push(t.id)}},e.prototype.createParticleElement=function(t,r){var i=wt.resolveShapeFactory(r.shapeFactory),n=i.cloneNode(!0);return n.style.position="absolute",this.elements.set(t.id,bt.particleContainer.current.appendChild(n)),n},e}();W.Renderer=Pt;Object.defineProperty(A,"__esModule",{value:!0});A.Scene=void 0;var Mt=B,St=V,jt=W,zt=function(){function e(){this.emitters=[],this.debug=new Mt.Debug(this),this.renderer=new jt.Renderer,this.scheduledTickId=void 0,this.lastTickTimestamp=performance.now(),this.tick=this.tick.bind(this),this.scheduleTick()}return e.prototype.createEmitter=function(t){var r=new St.Emitter(t);return this.emitters.push(r),r},e.prototype.clearEmitters=function(){return this.emitters.splice(0).length},e.prototype.clearParticles=function(){return this.emitters.reduce(function(t,r){return t+r.clearParticles()},0)},e.prototype.scheduleTick=function(){this.scheduledTickId=window.requestAnimationFrame(this.tick)},e.prototype.cancelTick=function(){window.cancelAnimationFrame(this.scheduledTickId)},e.prototype.tick=function(t){var r=(t-this.lastTickTimestamp)/1e3;try{for(var i=0;i<this.emitters.length;i++){var n=this.emitters[i];n.tick(r),n.isExpired&&n.canRemove&&this.emitters.splice(i--,1)}}catch(c){console.error(`An error occurred while updating the scene's emitters:
"`+c+'"')}try{this.renderer.begin();for(var o=0,a=this.emitters;o<a.length;o++)for(var n=a[o],u=0,l=n.particles;u<l.length;u++){var d=l[u];this.renderer.renderParticle(d,n)}this.renderer.end()}catch(c){console.error(`An error occurred while rendering the scene's particles:
"`+c+'"')}this.debug.tick(r),this.lastTickTimestamp=t,this.scheduleTick()},e}();A.Scene=zt;var Me={},Z={},z={};Object.defineProperty(z,"__esModule",{value:!0});z.ModuleBuilder=void 0;var Rt=y,Et=function(){function e(){this.factor="lifetime",this.isRelative=!1}return e.prototype.drive=function(t){return this.driverKey=t,this},e.prototype.through=function(t){return this.factor=t,this},e.prototype.by=function(t){return this.driverValue=t,this},e.prototype.relative=function(t){return t===void 0&&(t=!0),this.isRelative=t,this},e.prototype.build=function(){var t=this;if(typeof this.driverKey=="undefined")throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");if(typeof this.driverValue=="undefined")throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");return function(r){ne(r,t.driverKey,Ct(t.driverValue,Tt(t.factor,r),r),t.isRelative)}},e}();z.ModuleBuilder=Et;function Ct(e,t,r){return typeof e=="object"&&"evaluate"in e?e.evaluate(t):typeof e=="function"?e(t,r):e}function Tt(e,t){switch(e){case"lifetime":return t.initialLifetime-t.lifetime;case"relativeLifetime":return(t.initialLifetime-t.lifetime)/t.initialLifetime;case"size":return t.size;default:throw new Error("Invalid driving factor '"+e+"'.")}}function ne(e,t,r,i){if(i===void 0&&(i=!1),!i)e[t]=r;else{var n=e["initial"+t[0].toUpperCase()+t.substr(1)];if(typeof n=="undefined")throw new Error("Unable to use relative chaining with key '"+t+"'; no initial value exists.");if(r instanceof Rt.Vector)ne(e,t,n.add(r));else if(typeof r=="number")ne(e,t,n*r);else throw new Error("Unable to use relative chaining with particle key '"+t+"'; no relative operation for '"+r+"' could be inferred.")}}Object.defineProperty(Z,"__esModule",{value:!0});Z.confetti=void 0;var Vt=M,pe=y,ve=z,me=h,Dt=p,P=f,It=b;function $t(e,t){var r=It.overrideDefaults({count:P.range(20,40),spread:P.range(35,45),speed:P.range(300,600),size:P.skew(1,.2),rotation:function(){return me.randomUnitVector().scale(180)},color:function(){return pe.Color.fromHsl(me.randomRange(0,360),100,70)},modules:[new ve.ModuleBuilder().drive("size").by(function(n){return Math.min(1,n*3)}).relative().build(),new ve.ModuleBuilder().drive("rotation").by(function(n){return new pe.Vector(140,200,260).scale(n)}).relative().build()],shapes:["square","circle"]},t),i=Vt.scene.current.createEmitter({emitterOptions:{loops:1,duration:8,modules:r.modules},emissionOptions:{rate:0,bursts:[{time:0,count:r.count}],sourceSampler:Dt.dynamicSource(e),angle:P.skew(-90,P.evaluateVariation(r.spread)),initialLifetime:8,initialSpeed:r.speed,initialSize:r.size,initialRotation:r.rotation,initialColor:r.color},rendererOptions:{shapeFactory:r.shapes}});return i}Z.confetti=$t;var J={};Object.defineProperty(J,"__esModule",{value:!0});J.sparkles=void 0;var Lt=M,R=y,ie=z,ye=h,At=p,E=f,Bt=b;function Ft(e,t){var r=Bt.overrideDefaults({lifetime:E.range(1,2),count:E.range(10,20),speed:E.range(100,200),size:E.range(.8,1.8),rotation:function(){return new R.Vector(0,0,ye.randomRange(0,360))},color:function(){return R.Color.fromHsl(50,100,ye.randomRange(55,85))},modules:[new ie.ModuleBuilder().drive("rotation").by(function(n){return new R.Vector(0,0,200).scale(n)}).relative().build(),new ie.ModuleBuilder().drive("size").by(new R.NumericSpline({time:0,value:0},{time:.3,value:1},{time:.7,value:1},{time:1,value:0})).through("relativeLifetime").relative().build(),new ie.ModuleBuilder().drive("opacity").by(new R.NumericSpline({time:0,value:1},{time:.5,value:1},{time:1,value:0})).through("relativeLifetime").build()]},t),i=Lt.scene.current.createEmitter({emitterOptions:{loops:1,duration:3,useGravity:!1,modules:r.modules},emissionOptions:{rate:0,bursts:[{time:0,count:r.count}],sourceSampler:At.dynamicSource(e),angle:E.range(0,360),initialLifetime:r.lifetime,initialSpeed:r.speed,initialSize:r.size,initialRotation:r.rotation,initialColor:r.color},rendererOptions:{applyLighting:void 0,shapeFactory:"star"}});return i}J.sparkles=Ft;(function(e){var t=s&&s.__createBinding||(Object.create?function(i,n,o,a){a===void 0&&(a=o),Object.defineProperty(i,a,{enumerable:!0,get:function(){return n[o]}})}:function(i,n,o,a){a===void 0&&(a=o),i[a]=n[o]}),r=s&&s.__exportStar||function(i,n){for(var o in i)o!=="default"&&!Object.prototype.hasOwnProperty.call(n,o)&&t(n,i,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(Z,e),r(J,e)})(Me);(function(e){var t=s&&s.__createBinding||(Object.create?function(d,c,v,m){m===void 0&&(m=v),Object.defineProperty(d,m,{enumerable:!0,get:function(){return c[v]}})}:function(d,c,v,m){m===void 0&&(m=v),d[m]=c[v]}),r=s&&s.__exportStar||function(d,c){for(var v in d)v!=="default"&&!Object.prototype.hasOwnProperty.call(c,v)&&t(c,d,v)};Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.forceInit=e.util=e.math=e.random=e.sources=e.variation=e.Emitter=e.Particle=e.settings=e.scene=void 0;var i=A,n=b;r(y,e),r(Me,e),r(se,e),r(z,e),e.scene=new n.Lazy(function(){if(typeof document=="undefined"||typeof window=="undefined")throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");return new i.Scene});var o=O;Object.defineProperty(e,"settings",{enumerable:!0,get:function(){return o.settings}});var a=D;Object.defineProperty(e,"Particle",{enumerable:!0,get:function(){return a.Particle}});var u=V;Object.defineProperty(e,"Emitter",{enumerable:!0,get:function(){return u.Emitter}}),e.variation=f,e.sources=p,e.random=h,e.math=g,e.util=b;function l(){e.scene.current}e.forceInit=l,e.default=M})(M);var xt=je(M);export{xt as p};
