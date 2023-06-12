import{r as _,V as D,W as R,X as W,u as b,J as E,Y as z,Z as F,f as j,a as I,C as q,o as h,i as x,k as P,m as T,w as J,c as B,T as U,j as $,$ as X,s as Y,v as Z,x as M,t as G,l as H,U as K}from"./entry.407da981.js";function L(e){return R()?(W(e),!0):!1}function w(e){return typeof e=="function"?e():b(e)}const S=typeof window<"u",N=()=>{},Q=ee();function ee(){var e;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function te(e,n,s={}){const{immediate:t=!0}=s,r=_(!1);let a=null;function f(){a&&(clearTimeout(a),a=null)}function i(){r.value=!1,f()}function l(...p){f(),r.value=!0,a=setTimeout(()=>{r.value=!1,a=null,e(...p)},w(n))}return t&&(r.value=!0,S&&l()),L(i),{isPending:D(r),start:l,stop:i}}function g(e){var n;const s=w(e);return(n=s==null?void 0:s.$el)!=null?n:s}const O=S?window:void 0,oe=S?window.navigator:void 0;function C(...e){let n,s,t,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,t,r]=e,n=O):[n,s,t,r]=e,!n)return N;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const a=[],f=()=>{a.forEach(u=>u()),a.length=0},i=(u,v,o,c)=>(u.addEventListener(v,o,c),()=>u.removeEventListener(v,o,c)),l=z(()=>[g(n),w(r)],([u,v])=>{f(),u&&a.push(...s.flatMap(o=>t.map(c=>i(u,o,c,v))))},{immediate:!0,flush:"post"}),p=()=>{l(),f()};return L(p),p}let k=!1;function ne(e,n,s={}){const{window:t=O,ignore:r=[],capture:a=!0,detectIframe:f=!1}=s;if(!t)return;Q&&!k&&(k=!0,Array.from(t.document.body.children).forEach(o=>o.addEventListener("click",N)));let i=!0;const l=o=>r.some(c=>{if(typeof c=="string")return Array.from(t.document.querySelectorAll(c)).some(m=>m===o.target||o.composedPath().includes(m));{const m=g(c);return m&&(o.target===m||o.composedPath().includes(m))}}),u=[C(t,"click",o=>{const c=g(e);if(!(!c||c===o.target||o.composedPath().includes(c))){if(o.detail===0&&(i=!l(o)),!i){i=!0;return}n(o)}},{passive:!0,capture:a}),C(t,"pointerdown",o=>{const c=g(e);c&&(i=!o.composedPath().includes(c)&&!l(o))},{passive:!0}),f&&C(t,"blur",o=>{var c;const m=g(e);((c=t.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(t.document.activeElement))&&n(o)})].filter(Boolean);return()=>u.forEach(o=>o())}function se(){const e=_(!1);return F()&&j(()=>{e.value=!0}),e}function ae(e){const n=se();return E(()=>(n.value,!!e()))}function ce(e={}){const{navigator:n=oe,read:s=!1,source:t,copiedDuring:r=1500,legacy:a=!1}=e,f=["copy","cut"],i=ae(()=>n&&"clipboard"in n),l=E(()=>i.value||a),p=_(""),u=_(!1),v=te(()=>u.value=!1,r);function o(){i.value?n.clipboard.readText().then(d=>{p.value=d}):p.value=V()}if(l.value&&s)for(const d of f)C(d,o);async function c(d=w(t)){l.value&&d!=null&&(i.value?await n.clipboard.writeText(d):m(d),p.value=d,u.value=!0,v.start())}function m(d){const y=document.createElement("textarea");y.value=d??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function V(){var d,y,A;return(A=(y=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:y.toString())!=null?A:""}return{isSupported:l,text:p,copied:u,copy:c}}const re=e=>(Y("data-v-75636234"),e=e(),Z(),e),ue=re(()=>P("span",{class:"sr-only"},"Copy to clipboard",-1)),ie={class:"icon-wrapper"},le=I({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=_(),{copy:t}=ce();ne(s,()=>{a.value==="copied"&&(a.value="init")});const{prose:r}=q(),a=_("init"),f=i=>{t(n.content).then(()=>{a.value="copied"}).catch(l=>{console.warn("Couldn't copy to clipboard!",l)})};return(i,l)=>{const p=X;return h(),x("button",{ref_key:"copyButtonRef",ref:s,class:$([(e.show||a.value==="copied")&&"show"]),onClick:f},[ue,P("span",ie,[T(U,{name:"fade"},{default:J(()=>{var u,v;return[a.value==="copied"?(h(),B(p,{key:0,name:(u=b(r).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),B(p,{key:1,name:(v=b(r).copyButton)==null?void 0:v.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const de=M(le,[["__scopeId","data-v-75636234"]]),pe={key:0,class:"filename"},fe=I({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=_(!1);return(s,t)=>{const r=de;return h(),x("div",{class:$([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=a=>n.value=!0),onMouseleave:t[1]||(t[1]=a=>n.value=!1)},[e.filename?(h(),x("span",pe,G(e.filename),1)):H("",!0),K(s.$slots,"default",{},void 0,!0),T(r,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const ve=M(fe,[["__scopeId","data-v-bfc7416e"]]);export{ve as default};
