System.register(["./vue-legacy.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./index-legacy.js?v=1723125373998"],(function(a,t){"use strict";var e,n,l,s,b,d,o,r,f,p,i,u,c,v,m,y,g,x,_;return{setters:[a=>{e=a.l,n=a.ah,l=a.ai,s=a.S,b=a.U,d=a.V,o=a.Z,r=a.ag,f=a.F,p=a.al,i=a.a8,u=a.af,c=a.P,v=a.q,m=a.a3},a=>{y=a.a,g=a._},a=>{x=a._},a=>{_=a.a}],execute:function(){var t=document.createElement("style");t.textContent=".bt-tabs-modal[data-v-a1f5745f]{--n-tab-gap-vertical: 0;--n-tab-border-color: #f0f0f1;--n-tab-color: #f0f0f1;--n-tab-border-radius: 0;--n-tab-text-color-active: #333;--n-tab-padding-vertical: 0 10px 0 20px;height:100%}.bt-tabs-modal[data-v-a1f5745f]>.n-tabs-nav{width:170px;background-color:#f0f0f1}.bt-tabs-modal[data-v-a1f5745f]>.n-tabs-nav .n-tabs-scroll-padding{border:none}.bt-tabs-modal[data-v-a1f5745f]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab{width:170px;height:40px;border:none;justify-content:flex-start}.bt-tabs-modal[data-v-a1f5745f]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab.n-tabs-tab--active{background-color:#fff}.bt-tabs-modal[data-v-a1f5745f]>.n-tabs-nav .n-tabs-wrapper .n-tabs-tab-wrapper .n-tabs-tab .n-tabs-tab__label{overflow:hidden}.bt-tabs-modal[data-v-a1f5745f]>.n-tab-pane{overflow:auto}\n",document.head.appendChild(t);const k=e({__name:"index",props:n({data:{default:()=>[]},isEllipsis:{type:Boolean,default:!1},panePadding:{default:"16px"}},{value:{},valueModifiers:{}}),emits:n(["click-self"],["update:value"]),setup(a,{expose:t,emit:e}){const n=e,_=l(a,"value"),k={},h=()=>{_.value&&k[_.value]?.init?.()};return t({init:h}),(a,t)=>{const e=x,l=g,w=y;return s(),b(w,{value:_.value,"onUpdate:value":t[0]||(t[0]=a=>_.value=a),class:"bt-tabs-modal",type:"card",placement:"left","pane-style":{padding:a.panePadding}},{default:d((()=>[(s(!0),o(f,null,r(a.data,(t=>(s(),o(f,null,[!1!==t.show?(s(),b(l,{key:t.key,name:t.key,tab:t.label,"tab-props":{onClick:a=>{t.key===_.value&&(h(),n("click-self"))}}},p({default:d((()=>[t.component?(s(),b(i(t.component),{key:0,ref_for:!0,ref:a=>((a,t)=>{k[t]=a})(a,t.key)},null,512)):u("",!0)])),_:2},[a.isEllipsis?{name:"tab",fn:d((()=>[c(e,null,{default:d((()=>[v(m(t.label),1)])),_:2},1024)])),key:"0"}:void 0]),1032,["name","tab","tab-props"])):u("",!0)],64)))),256))])),_:1},8,["value","pane-style"])}}});a("_",_(k,[["__scopeId","data-v-a1f5745f"]]))}}}));