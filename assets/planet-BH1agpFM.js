import{m as Me,aq as Ee,ar as Se,ds as Ce,Q as ke,A as ze,E as Ae,G as te,S as F,c8 as j,b as A,c as Le,bn as Pe,du as ne,cg as oe,a as De,cP as Ie,B as Be,g as Ge,dl as $e,cf as Fe,dv as je,dt as Re,V as Ye}from"./three.module-B2wpZ3oa.js";const ae=[1941109,14178864,12219671,1597349,5458615,10040662,1011286,8736523];function qe(){if(document.getElementById("planet-styles"))return;const u=document.createElement("style");u.id="planet-styles",u.textContent=`
.planet-view { position: absolute; inset: 0; z-index: 5; background: #0C1A3A; overflow: hidden; }
.planet-view[hidden] { display: none !important; }
.planet-canvas-wrap { position: absolute; inset: 0; }
.planet-canvas-wrap canvas { display: block; width: 100%; height: 100%; }
.planet-close-button {
  position: absolute; top: 16px; left: 16px; z-index: 25;
  min-height: 36px; padding: 0 13px; border: 1px solid rgba(255,255,255,.22);
  border-radius: 8px; color: #fff; background: rgba(10,24,54,.76);
  box-shadow: 0 5px 18px rgba(0,0,0,.2); cursor: pointer; font-size: 12px; font-weight: 700;
  backdrop-filter: blur(8px); transition: border-color .15s, background .15s, transform .15s;
}
.planet-close-button:hover { border-color: rgba(255,255,255,.5); background: rgba(20,43,87,.92); }
.planet-close-button:active { transform: translateY(1px); }
.planet-close-button:focus-visible { outline: 2px solid #8de1cd; outline-offset: 2px; }
.planet-tooltip {
  position: fixed; pointer-events: none; z-index: 30;
  background: #ffffff; color: #2C2C2A; border: 0.5px solid #e3e3e3;
  border-radius: 10px; padding: 8px 12px; font-size: 12px; line-height: 1.5;
  box-shadow: 0 4px 16px rgba(12,26,58,0.25); max-width: 240px;
}
.planet-tooltip b { color: #534AB7; }
.planet-tooltip .pt-sub { color: #6b7280; }
.planet-sidepanel {
  position: absolute; top: 16px; right: 16px; bottom: 16px; width: 280px; z-index: 20;
  background: #ffffff; border: 0.5px solid #e3e3e3; border-radius: 14px;
  padding: 16px; overflow-y: auto; box-shadow: 0 6px 24px rgba(12,26,58,0.3);
}
.planet-sidepanel .ps-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
.planet-sidepanel .ps-company { font-size: 15px; font-weight: 500; color: #2C2C2A; }
.planet-sidepanel .ps-country { font-size: 12px; color: #6b7280; margin-bottom: 12px; }
.planet-sidepanel .ps-close { border: none; background: #f1f3f7; border-radius: 8px; width: 26px; height: 26px; cursor: pointer; color: #6b7280; font-size: 14px; }
.planet-sidepanel .ps-doc {
  display: block; width: 100%; text-align: left; border: 0.5px solid #e3e3e3;
  border-radius: 10px; padding: 10px 12px; margin-bottom: 8px; background: #fbfcfe;
  cursor: pointer; transition: border-color .15s, background .15s;
}
.planet-sidepanel .ps-doc:hover { border-color: #534AB7; background: #f5f3ff; }
.planet-sidepanel .ps-doc b { display: block; font-size: 13px; color: #2C2C2A; font-weight: 500; }
.planet-sidepanel .ps-doc span { font-size: 11px; color: #6b7280; }
.planet-sidepanel .ps-empty { font-size: 12px; color: #9aa0a6; padding: 8px 0; }
.planet-legend {
  position: absolute; left: 16px; bottom: 16px; z-index: 20;
  background: rgba(20,38,79,0.78); color: #EAF0FF; border-radius: 12px; padding: 10px 14px;
}
.planet-legend-title { display: block; font-size: 13px; font-weight: 500; }
.planet-legend-hint { display: block; font-size: 11px; color: #9FB0D6; margin-top: 2px; }
`,document.head.appendChild(u)}function se(u,i){const p=document.createElement("canvas");p.width=512,p.height=128;const d=p.getContext("2d");d.clearRect(0,0,p.width,p.height),d.font="600 46px -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif",d.textBaseline="middle",d.fillStyle="#"+i.toString(16).padStart(6,"0"),d.fillText(u,16,64);const h=new je(p);return h.anisotropy=4,h}function He(u,i){qe();const p=u.querySelector("#planet-canvas-wrap"),d=u.querySelector("#planet-tooltip"),h=u.querySelector("#planet-sidepanel"),S=i.customers||[],ie=i.documents||[],v=new Map;for(const e of ie){if(!e.customerId)continue;const t=v.get(e.customerId)||[];t.push(e),v.set(e.customerId,t)}const x=new Me;x.background=new Ee(793146);const g=new Se(50,1,.1,1e3);g.position.set(0,2,16);const r=new Ce({antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),p.appendChild(r.domElement),x.add(new ke(16777215,.55));const re=new ze(10127103,1.4,60);x.add(re);const R=new Ae(16777215,.5);R.position.set(5,8,10),x.add(R);const l=new te;x.add(l);const ce=new F(1.5,48,48),de=new j({color:5458615,emissive:5458615,emissiveIntensity:.7,roughness:.4}),le=new A(ce,de);l.add(le);const pe=new F(2.1,48,48),Y=new Le({color:8353757,transparent:!0,opacity:.18,blending:Pe});l.add(new A(pe,Y));const L=new ne(new oe({map:se("GoodJob",11512300),transparent:!0}));L.scale.set(3,.75,1),L.position.set(0,-2.6,0),l.add(L);const P=[],ue=6.5,me=Math.max(S.length,1);S.forEach((e,t)=>{const n=Math.acos(1-2*(t+.5)/me),a=Math.PI*(1+Math.sqrt(5))*t,s=new De(Math.sin(n)*Math.cos(a),Math.sin(n)*Math.sin(a),Math.cos(n)).clone().multiplyScalar(ue),c=new te;c.position.copy(s),l.add(c);const f=ae[t%ae.length],be=new F(.55,32,32),xe=new j({color:f,emissive:f,emissiveIntensity:.35,roughness:.5}),B=new A(be,xe);B.userData={customerId:e.id,baseScale:1,color:f},c.add(B),P.push(B);const G=new ne(new oe({map:se(e.company,f),transparent:!0}));G.scale.set(2.6,.65,1),G.position.set(0,.95,0),c.add(G);const Z=v.get(e.id)||[],_=1.15;Z.forEach((ge,we)=>{const ee=we/Math.max(Z.length,1)*Math.PI*2,ye=new Ie(.28,.36,.06),ve=new j({color:15397119,emissive:7045040,emissiveIntensity:.2,roughness:.6}),$=new A(ye,ve);$.position.set(Math.cos(ee)*_,Math.sin(ee)*_,0),$.userData={docId:ge.id,baseScale:1},c.add($)})});const q=new Be,C=new Float32Array(400*3);for(let e=0;e<400;e++){const t=18+Math.random()*20,n=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);C[e*3]=t*Math.sin(a)*Math.cos(n),C[e*3+1]=t*Math.sin(a)*Math.sin(n),C[e*3+2]=t*Math.cos(a)}q.setAttribute("position",new Ge(C,3)),x.add(new $e(q,new Fe({color:16777215,size:.08,transparent:!0,opacity:.6})));const M=new Re,k=new Ye;let m=null,E=!1,D=0,I=0,T=0,z=0,w=0,y=0,H=!0;function X(e){const t=r.domElement.getBoundingClientRect();k.x=(e.clientX-t.left)/t.width*2-1,k.y=-((e.clientY-t.top)/t.height)*2+1}function V(e){var a;if(X(e),E){const o=e.clientX-D,s=e.clientY-I;z=Math.max(z,Math.abs(o)+Math.abs(s)),y=o*.005,w=s*.005,l.rotation.y+=y,l.rotation.x=Math.min(Math.max(l.rotation.x+w,-1.2),1.2),D=e.clientX,I=e.clientY,H=!1,d.hidden=!0;return}M.setFromCamera(k,g);const n=((a=M.intersectObjects(P,!1)[0])==null?void 0:a.object)||null;if(n!==m&&(m&&m.scale.setScalar(m.userData.baseScale),m=n,m&&m.scale.setScalar(m.userData.baseScale*1.5),p.style.cursor=m?"pointer":"grab"),m){const o=m.userData.customerId,s=S.find(f=>f.id===o),c=(v.get(o)||[]).length;d.innerHTML=`<b>${b((s==null?void 0:s.company)||"")}</b><br><span class="pt-sub">${b((s==null?void 0:s.country)||"")} · ${c} 份单据</span>`,d.hidden=!1,d.style.left=e.clientX+14+"px",d.style.top=e.clientY+14+"px"}else d.hidden=!0}function O(e){E=!0,D=e.clientX,I=e.clientY,T=Date.now(),z=0,w=0,y=0}function W(e){var o,s;const t=z<6&&Date.now()-T<350;if(E=!1,!t)return;X(e),M.setFromCamera(k,g);const n=M.intersectObjects(l.children.flatMap(c=>c.children||[]).filter(c=>{var f;return(f=c.userData)==null?void 0:f.docId}),!1);if(n[0]){const c=n[0].object.userData.docId;(o=i.onSelectDocument)==null||o.call(i,c);return}const a=M.intersectObjects(P,!1);if(a[0]){const c=a[0].object.userData.customerId;he(c),(s=i.onSelectCustomer)==null||s.call(i,c)}}function he(e){var a;const t=S.find(o=>o.id===e),n=v.get(e)||[];h.innerHTML=`
      <div class="ps-head">
        <span class="ps-company">${b((t==null?void 0:t.company)||"")}</span>
        <button class="ps-close" id="planetSideClose">×</button>
      </div>
      <div class="ps-country">${b((t==null?void 0:t.country)||"未知国家")} · 共 ${n.length} 份单据</div>
      ${n.length?n.map(o=>`<button class="ps-doc" data-doc-id="${b(o.id)}"><b>${b(o.type)} · ${b(o.number)}</b><span>${b(o.title)} · ${b(o.status)}</span></button>`).join(""):'<div class="ps-empty">该客户暂无关联单据</div>'}
    `,h.hidden=!1,(a=h.querySelector("#planetSideClose"))==null||a.addEventListener("click",()=>{h.hidden=!0}),h.querySelectorAll(".ps-doc").forEach(o=>{o.addEventListener("click",()=>{var s;return(s=i.onSelectDocument)==null?void 0:s.call(i,o.dataset.docId||"")})})}function N(e){e.preventDefault(),g.position.z=Math.min(Math.max(g.position.z+e.deltaY*.01,8),30)}r.domElement.style.cursor="grab",r.domElement.addEventListener("pointermove",V),r.domElement.addEventListener("pointerdown",O),window.addEventListener("pointerup",W),r.domElement.addEventListener("wheel",N,{passive:!1});function J(){const e=p.clientWidth||1,t=p.clientHeight||1;g.aspect=e/t,g.updateProjectionMatrix(),r.setSize(e,t,!1)}const Q=new ResizeObserver(J);Q.observe(p),J();let U=0;function K(){U=requestAnimationFrame(K),H&&!E&&(l.rotation.y+=.0015),E||(Math.abs(y)>1e-4&&(l.rotation.y+=y,y*=.95),Math.abs(w)>1e-4&&(l.rotation.x=Math.min(Math.max(l.rotation.x+w,-1.2),1.2),w*=.95)),Y.opacity=.16+Math.sin(Date.now()*.002)*.05,r.render(x,g)}K();function fe(){cancelAnimationFrame(U),Q.disconnect(),r.domElement.removeEventListener("pointermove",V),r.domElement.removeEventListener("pointerdown",O),window.removeEventListener("pointerup",W),r.domElement.removeEventListener("wheel",N),x.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(a=>a.dispose()):n&&n.dispose()}),r.dispose(),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),d.hidden=!0,h.hidden=!0}return{unmount:fe}}function b(u){return(u||"").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i]||i)}export{He as mountPlanet};
