System.register(["./index-legacy.js?v=1723125373998","./index-legacy77.js?v=1723125373998","./index-legacy73.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy13.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1723125373998","./Image-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1723125373998","./InputGroupLabel-legacy.js?v=1723125373998","./InputGroup-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./_createCompounder-legacy.js?v=1723125373998"],(function(e,t){"use strict";var a,l,n,s,i,o,u,c,d,r,p,y,_,m,g,x,h,f,v,w,b,S,k,I,A,$,j,C,T,P,U,q,O,R,H,L,M,z,D,K,B,G,E,W,F,N,Q,V,Z,J,X,Y,ee,te,ae,le,ne,se,ie,oe;return{setters:[e=>{a=e.aw,l=e.ax,n=e.ae,s=e.j,i=e.g,o=e.B,u=e.q,c=e.cG,d=e.p,r=e.a,p=e.k,y=e.cP,_=e.n,m=e.G,g=e.m,x=e.b8,h=e._,f=e.r,v=e.au,w=e.cQ},e=>{b=e._},e=>{S=e._},e=>{k=e._},e=>{I=e.u,A=e._},e=>{$=e.u},e=>{j=e.b,C=e.h},e=>{T=e._,P=e.a},e=>{U=e._},e=>{q=e.l,O=e.ad,R=e.r,H=e.f,L=e.S,M=e.Z,z=e.P,D=e.V,K=e.W,B=e.q,G=e.a3,E=e.b,W=e._,F=e.t,N=e.w,Q=e.F,V=e.U,Z=e.ag,J=e.B,X=e.M,Y=e.a5,ee=e.a6,te=e.aj,ae=e.k},e=>{le=e._},e=>{ne=e.s},e=>{se=e._},e=>{ie=e._},e=>{oe=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".form[data-v-58d5bb81] .n-form-item{margin-right:5px!important}.form[data-v-58d5bb81] .n-form-item-label{width:auto!important;padding:5px!important}.ul-style[data-v-ec798fd8]{margin:0 auto;display:flex;align-items:center;justify-content:center;gap:48px;font-size:16px}.ul-style li[data-v-ec798fd8]{display:flex;align-items:center}.item[data-v-ec798fd8]{border-left:3px solid #def2e2}.item li[data-v-ec798fd8]{width:180px;margin-left:-3px;font-size:14px;line-height:36px;padding:0 20px;cursor:pointer}.item .active[data-v-ec798fd8]{border-left:3px solid #20a53a;color:#20a53a;font-weight:700;font-size:16px}\n",document.head.appendChild(t);const{t:ue}=a.global,ce=e=>l.post("/plugin?name=syssafe&action=a&s=set_safe_status",e,{requestOptions:{loading:ue("Security.Api.Index_5"),successMessage:!0}}),de=e=>l.post("/plugin?name=syssafe&action=a&s=remove_safe_path",e,{requestOptions:{loading:ue("Security.Api.Index_3"),successMessage:!0}}),re=e=>l.post("/plugin?name=syssafe&action=a&s=add_safe_path",e,{requestOptions:{loading:ue("Security.Api.Index_4"),successMessage:!0}}),pe=e=>l.post("/plugin?name=syssafe&action=a&s=add_ssh_limit",e,{requestOptions:{loading:ue("Security.Api.Index_4"),successMessage:!0}}),ye=e=>l.post("/plugin?name=syssafe&action=a&s=remove_ssh_limit",e,{requestOptions:{loading:ue("Security.Api.Index_3"),successMessage:!0}}),_e=e=>l.post("/plugin?name=syssafe&action=a&s=save_ssh_config",e,{requestOptions:{loading:ue("Security.Api.Index_6"),successMessage:!0}}),me=e=>l.post("/plugin?name=syssafe&action=a&s=remove_process_white",e,{requestOptions:{loading:ue("Security.Api.Index_3"),successMessage:!0}}),ge=e=>l.post("/plugin?name=syssafe&action=a&s=add_process_white",e,{requestOptions:{loading:ue("Security.Api.Index_4"),successMessage:!0}}),xe={class:"p-20px"},he=q({__name:"form",props:{data:{}},setup(e,{expose:t}){const{t:a}=O(),l=[{label:a("Security.Anti.Index_28"),value:"i"},{label:a("Security.Anti.Index_29"),value:"a"}],s=e,{getList:i}=s.data,{row:o}=s.data,u=R(null),c=H({path:"",chattr:"i",d_mode:""}),d={path:{required:!0,message:a("Security.Conf.Index_28"),trigger:["blur","input"]},d_mode:{required:!0,message:a("Security.Conf.Index_28"),trigger:["blur","input"]}};return t({onConfirm:async({hide:e})=>{await(u.value?.validate()),await re({...c,s_key:o.key}),i?.(),e()}}),(e,t)=>{const a=U,s=T,i=le,o=n,r=P;return L(),M("div",xe,[z(r,{ref_key:"formRef",ref:u,model:K(c),rules:d},{default:D((()=>[z(s,{label:e.$t("Site.DelSite.Path"),path:"path"},{default:D((()=>[z(a,{class:"w-280px",value:K(c).path,"onUpdate:value":t[0]||(t[0]=e=>K(c).path=e),placeholder:e.$t("Security.Anti.Index_26")},null,8,["value","placeholder"])])),_:1},8,["label"]),z(s,{label:e.$t("Public.Table.Model")},{default:D((()=>[z(i,{class:"w-280px",value:K(c).chattr,"onUpdate:value":t[1]||(t[1]=e=>K(c).chattr=e),options:l},null,8,["value"])])),_:1},8,["label"]),z(s,{label:e.$t("Public.Table.Permissions"),path:"d_mode"},{default:D((()=>[z(o,{class:"w-280px!",value:K(c).d_mode,"onUpdate:value":t[2]||(t[2]=e=>K(c).d_mode=e),type:"text",placeholder:e.$t("Security.Anti.Index_27")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),fe={class:"p-20px"},ve=q({__name:"index",props:{data:{}},setup(e){const{t:t}=O(),a=e,{data:n}=a,{keys:c,table:d,columns:r}=I([{key:"path",title:t("Site.DelSite.Path")},{key:"chattr",title:t("Public.Table.Model"),render:e=>"i"==e.chattr?t("Security.Anti.Index_28"):t("Security.Anti.Index_29")},{key:"s_mode",title:t("Public.Table.Permissions"),render:e=>e.s_mode!==e.d_mode?`${e.s_mode} >> ${e.d_mode}`:e.d_mode},{key:"state",title:"Status",render:e=>z("span",{style:{color:e.state?"#20a53a":"#ff0029"}},[e.state?t("Security.Anti.Index_35"):t("Security.Anti.Index_36")])},j({width:130,title:t("Public.Table.Operation"),options:e=>[{label:t("Site.TableOP.Del"),onClick:async()=>{await de({s_key:n.key,path:e.path}),await m()}}]})]),p=async()=>{g.data.row=n,g.show=!0},{loading:y,setLoading:_}=$(),m=async()=>{try{_(!0);const{message:e}=await(e=>l.post("/plugin?name=syssafe&action=a&s=get_safe_config",e))({s_key:n.key});s(e)&&(d.data=e.paths)}finally{c.value=[],_(!1)}};m();const g=i(t("Security.Anti.Index_30"),{getList:m});return(e,t)=>{const a=o,l=A,n=S,s=k,i=u;return L(),M("div",fe,[z(s,null,{toolsLeft:D((()=>[z(a,{type:"primary",onClick:p},{default:D((()=>[B(G(e.$t("Security.Anti.Index_30")),1)])),_:1})])),table:D((()=>[z(l,{"checked-row-keys":K(c),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>E(c)?c.value=e:null),loading:K(y),"loading-num":3,"max-height":340,data:K(d).data,columns:K(r)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:D((()=>[z(n,null,{default:D((()=>[W("li",null,G(e.$t("Security.Anti.Index_31")),1),W("li",null,G(e.$t("Security.Anti.Index_32")),1),W("li",null,G(e.$t("Security.Anti.Index_33")),1),W("li",null,G(e.$t("Security.Anti.Index_34")),1)])),_:1})])),_:1}),z(i,{show:K(g).show,"onUpdate:show":t[1]||(t[1]=e=>K(g).show=e),title:K(g).title,data:K(g).data,width:500,footer:!0,component:he},null,8,["show","title","data"])])}}}),we={class:"p-20px"},be={class:"leading-32px"},Se=q({__name:"index",setup(e){const{t:t}=O(),a=R(null),n=H({cycle:120,limit_count:3,limit:3600}),i={cycle:{required:!0,type:"number",message:t("Security.Conf.Index_28"),trigger:["blur","input"]},limit_count:{required:!0,type:"number",message:t("Security.Conf.Index_28"),trigger:["blur","input"]},limit:{required:!0,type:"number",message:t("Security.Conf.Index_28"),trigger:["blur","input"]}},u=async()=>{await(a.value?.validate()),await _e(F(n))};return(async()=>{const{message:e}=await l.post("/plugin?name=syssafe&action=a&s=get_ssh_config");s(e)&&(n.cycle=e.cycle,n.limit=e.limit,n.limit_count=e.limit_count)})(),(e,t)=>{const l=c,s=T,r=o,p=P,y=d,_=S;return L(),M("div",we,[z(p,{ref_key:"formRef",ref:a,model:K(n),rules:i,inline:"","label-width":"auto",class:"form"},{default:D((()=>[z(s,{label:e.$t("Security.Anti.Index_37"),path:"cycle"},{default:D((()=>[z(l,{"show-button":!1,value:K(n).cycle,"onUpdate:value":t[0]||(t[0]=e=>K(n).cycle=e),class:"w-100px!"},null,8,["value"])])),_:1},8,["label"]),z(s,{label:e.$t("Security.Anti.Index_38"),path:"limit_count"},{default:D((()=>[z(l,{"show-button":!1,value:K(n).limit_count,"onUpdate:value":t[1]||(t[1]=e=>K(n).limit_count=e),class:"w-100px!"},null,8,["value"])])),_:1},8,["label"]),z(s,{label:e.$t("Security.Anti.Index_39"),path:"limit"},{default:D((()=>[z(l,{"show-button":!1,value:K(n).limit,"onUpdate:value":t[2]||(t[2]=e=>K(n).limit=e),class:"w-100px!"},null,8,["value"])])),_:1},8,["label"]),W("span",be,G(e.$t("Security.Anti.Index_40")),1),z(r,{type:"primary",class:"ml-auto",onClick:u},{default:D((()=>[B(G(e.$t("Site.Cert.Save")),1)])),_:1})])),_:1},8,["model"]),z(y,{class:"mb-15px!"}),z(_,null,{default:D((()=>[W("li",null,G(e.$t("Security.Anti.Index_41")),1),W("li",null,G(e.$t("Security.Anti.Index_42")),1),W("li",null,G(e.$t("Security.Anti.Index_43")),1)])),_:1})])}}}),ke=r(Se,[["__scopeId","data-v-58d5bb81"]]),Ie={class:"p-20px"},Ae=q({__name:"form",props:{data:{}},setup(e,{expose:t}){const{t:a}=O(),l=e,{getList:s}=l.data,i=R(null),o=H({process_name:""}),u={process_name:{required:!0,message:a("Security.Conf.Index_28"),trigger:["blur","input"]}};return t({onConfirm:async({hide:e})=>{await(i.value?.validate()),await ge(F(o)),s?.(),e()}}),(e,t)=>{const a=n,l=T,s=P;return L(),M("div",Ie,[z(s,{ref_key:"formRef",ref:i,model:K(o),rules:u},{default:D((()=>[z(l,{label:e.$t("Home.index_24"),path:"process_name"},{default:D((()=>[z(a,{class:"w-280px!",value:K(o).process_name,"onUpdate:value":t[0]||(t[0]=e=>K(o).process_name=e),type:"text",placeholder:e.$t("Security.Anti.Index_22")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),$e={class:"p-20px"},je=q({__name:"index",setup(e){const{t:t}=O(),{keys:a,table:n,columns:s}=I([{key:"name",title:t("Home.index_24")},j({width:130,title:t("Public.Table.Operation"),options:e=>[{label:t("Site.TableOP.Del"),onClick:async()=>{await me({process_name:e.name}),await y()}}]})]),c=async()=>{_.show=!0},{loading:d,setLoading:r}=$(),y=async()=>{try{r(!0);const{message:e}=await l.post("/plugin?name=syssafe&action=a&s=get_process_white");p(e)&&(n.data=e.map((e=>({name:e}))))}finally{a.value=[],r(!1)}};y();const _=i(t("Security.Anti.Index_23"),{getList:y});return(e,t)=>{const l=o,i=A,r=S,p=k,y=u;return L(),M("div",$e,[z(p,null,{toolsLeft:D((()=>[z(l,{type:"primary",onClick:c},{default:D((()=>[B(G(e.$t("Security.Anti.Index_23")),1)])),_:1})])),table:D((()=>[z(i,{"checked-row-keys":K(a),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>E(a)?a.value=e:null),loading:K(d),"loading-num":3,"max-height":340,data:K(n).data,columns:K(s)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:D((()=>[z(r,null,{default:D((()=>[W("li",null,G(e.$t("Security.Anti.Index_24")),1),W("li",null,G(e.$t("Security.Anti.Index_25")),1)])),_:1})])),_:1}),z(y,{show:K(_).show,"onUpdate:show":t[1]||(t[1]=e=>K(_).show=e),title:K(_).title,data:K(_).data,width:500,footer:!0,component:Ae},null,8,["show","title","data"])])}}}),Ce={class:"color-#ff3333"},Te=q({__name:"index",setup(e,{expose:t}){const{t:a}=O(),n=y(),{systemHardening:o}=ne(n),c=i(),d=i(),r=i(),{keys:p,table:m,columns:g}=I([{key:"name",width:"10%",title:a("Site.TableRow.Name")},{key:"ps",title:a("Security.Hardening.Index_5"),ellipsis:{tooltip:{width:"trigger"}}},C({key:"open",title:a("Site.TableRow.Status"),onClick:async(e,t)=>{if(!o.value)return _.error(a("Security.Hardening.Index_6")),void f();await ce({s_key:t.key})}}),j({width:130,title:a("Site.TableRow.Operation"),options:e=>[{label:a("Site.TableOP.Set"),onClick:()=>"ssh"===e.key?(d.title=`${a("Security.Hardening.Index_7")} [${e.name}]`,void(d.show=!0)):"process"===e.key?(r.title=`${a("Security.Hardening.Index_7")} [${e.name}]`,void(r.show=!0)):(c.title=`${a("Security.Hardening.Index_7")} [${e.name}]`,c.data=e,void(c.show=!0))}]})]);N((()=>n.isRefresh),(e=>{e&&(n.setRefresh(!1),f())}));const{loading:x,setLoading:h}=$(),f=async()=>{try{h(!0);const{message:e}=await l.post("/plugin?name=syssafe&action=a&s=get_safe_status");s(e)&&(o.value=e.open,m.data=e.list)}finally{p.value=[],h(!1)}};return f(),t({init:f}),(e,t)=>{const a=A,l=k,n=S,s=u;return L(),M(Q,null,[z(l,{feedback:!0},{table:D((()=>[z(a,{"checked-row-keys":K(p),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>E(p)?p.value=e:null),"row-key":"title",loading:K(x),data:K(m).data,columns:K(g)},null,8,["checked-row-keys","loading","data","columns"])])),_:1}),z(n,{class:"mt-16px"},{default:D((()=>[W("li",null,G(e.$t("Security.Hardening.Index_1")),1),W("li",null,G(e.$t("Security.Hardening.Index_2")),1),W("li",null,G(e.$t("Security.Hardening.Index_3")),1),W("li",Ce,G(e.$t("Security.Hardening.Index_4")),1)])),_:1}),z(s,{show:K(c).show,"onUpdate:show":t[1]||(t[1]=e=>K(c).show=e),title:K(c).title,data:K(c).data,width:700,"min-height":500,footer:!1,component:ve},null,8,["show","title","data"]),z(s,{show:K(d).show,"onUpdate:show":t[2]||(t[2]=e=>K(d).show=e),title:K(d).title,data:K(d).data,width:800,footer:!1,component:ke},null,8,["show","title","data"]),z(s,{show:K(r).show,"onUpdate:show":t[3]||(t[3]=e=>K(r).show=e),title:K(r).title,data:K(r).data,width:700,"min-height":580,footer:!1,component:je},null,8,["show","title","data"])],64)}}}),Pe=q({__name:"index",setup(e,{expose:t}){const{t:a}=O(),{loading:s,setLoading:i}=$(),u=R(""),c=/^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/,{keys:d,table:r,columns:y}=I([{key:"address",title:a("Security.Anti.Index_15"),width:"70%"},{key:"end",title:a("Security.History.Index_12"),render:e=>0==e.end?a("Security.Anti.Index_18"):e.end},j({width:130,title:a("Site.TableRow.Operation"),options:e=>[{label:a("Security.Anti.Index_19"),onClick:async()=>{await ye({ip:e.address}),x()}}]})]),g=async()=>{c.test(u.value)?(await pe({ip:u.value}),x(),u.value=""):_.error(a("Security.Anti.Index_20"))},x=async()=>{try{i(!0);const{message:e}=await l.post("/plugin?name=syssafe&action=a&s=get_ssh_limit_info");p(e)&&(r.data=e)}finally{d.value=[],i(!1)}};return x(),t({init:x}),(e,t)=>{const a=n,l=o,i=m,c=A,p=k,_=S;return L(),M("div",null,[z(p,null,{toolsLeft:D((()=>[z(i,{class:"flex-nowrap!"},{default:D((()=>[z(a,{value:K(u),"onUpdate:value":t[0]||(t[0]=e=>E(u)?u.value=e:null),type:"text",placeholder:e.$t("Security.Anti.Index_15"),class:"w-280px!"},null,8,["value","placeholder"]),z(l,{type:"primary",onClick:g},{default:D((()=>[B(G(e.$t("Public.Btn.Add")),1)])),_:1})])),_:1})])),table:D((()=>[z(c,{"checked-row-keys":K(d),"onUpdate:checkedRowKeys":t[1]||(t[1]=e=>E(d)?d.value=e:null),"row-key":"address",loading:K(s),"max-height":440,data:K(r).data,columns:K(y)},null,8,["checked-row-keys","loading","data","columns"])])),_:1}),z(_,{class:"mt-16px"},{default:D((()=>[W("li",null,G(e.$t("Security.Anti.Index_16")),1),W("li",null,G(e.$t("Security.Anti.Index_17")),1)])),_:1})])}}}),Ue=q({__name:"index",setup(e,{expose:t}){const{t:a}=O(),{keys:n,table:i,columns:o}=I([{key:"addtime",title:a("Public.Table.Date"),width:"20%"},{key:"log",title:a("Security.Anti.Index_21")}]),u=H({p:1,limit:10,search:"System hardening"}),{loading:c,setLoading:d}=$(),r=async()=>{try{d(!0);const{message:t}=await(e=F(u),l.post("/data?action=getData",{...e,table:"logs",order:"id desc"}));s(t)&&(i.data=t.data,i.total=g(t.page))}finally{n.value=[],d(!1)}var e};return r(),t({init:r}),(e,t)=>{const a=A,l=se,s=k;return L(),V(s,{feedback:!0},{table:D((()=>[z(a,{"checked-row-keys":K(n),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>E(n)?n.value=e:null),"row-key":"addtime",loading:K(c),data:K(i).data,columns:K(o)},null,8,["checked-row-keys","loading","data","columns"])])),pageRight:D((()=>[z(l,{page:K(u).p,"onUpdate:page":t[1]||(t[1]=e=>K(u).p=e),"page-size":K(u).limit,"onUpdate:pageSize":t[2]||(t[2]=e=>K(u).limit=e),"item-count":K(i).total,"store-key":"security-log",onRefresh:r},null,8,["page","page-size","item-count"])])),_:1})}}}),qe=q({__name:"index",setup(e){const{t:t}=O(),a=R("protection"),l=[{key:"protection",label:t("Security.Tabs.Index_8"),component:Te},{key:"block",label:t("Security.Tabs.Index_9"),component:Pe},{key:"operation",label:t("Security.Tabs.Index_10"),component:Ue}];return(e,t)=>{const n=b;return L(),V(n,{value:K(a),"onUpdate:value":t[0]||(t[0]=e=>E(a)?a.value=e:null),options:l},null,8,["value"])}}}),Oe=e=>(Y("data-v-ec798fd8"),e=e(),ee(),e),Re={class:"pt-40px pb-40px"},He=Oe((()=>W("div",{class:"mb-24px text-center text-22px font-bold"}," System Hardening prevention features ",-1))),Le={class:"mb-16px"},Me={class:"ul-style"},ze=Oe((()=>W("span",{class:"ml-8px"},"Prevents the system from being implanted with a Trojan",-1))),De=Oe((()=>W("span",null,"Harden the system security configuration",-1))),Ke={class:"text-center my-24px"},Be={class:"flex justify-center"},Ge={class:"item"},Ee=["onClick"],We=r(q({__name:"conversion",setup(e){const t=R(0),a=["Protection","Block IP","Operation logs"],l=()=>{x({source:102})};return(e,n)=>{const s=h,i=o,u=ie,c=f;return L(),V(c,null,{default:D((()=>[W("div",Re,[He,W("div",Le,[W("ul",Me,[W("li",null,[z(s,{name:"security-system",size:"18"}),ze]),W("li",null,[z(s,{name:"security-surety",size:"30"}),De])])]),W("div",Ke,[z(i,{type:"primary",class:"h-36px text-14px",onClick:l},{default:D((()=>[B(G(e.$t("WP.Transition.index_7")),1)])),_:1})]),W("div",Be,[W("div",Ge,[W("ul",null,[(L(),M(Q,null,Z(a,((e,a)=>W("li",{class:te({active:K(t)==a}),key:a,onClick:e=>t.value=a},G(e),11,Ee))),64))])]),J(z(u,{width:"100%",src:K("/static/vite/images/protection.png")},null,8,["src"]),[[X,0==K(t)]]),J(z(u,{width:"100%",src:K("/static/vite/images/block.png")},null,8,["src"]),[[X,1==K(t)]]),J(z(u,{width:"100%",src:K("/static/vite/images/log.png")},null,8,["src"]),[[X,2==K(t)]])])])])),_:1})}}}),[["__scopeId","data-v-ec798fd8"]]),Fe={key:0};e("default",q({__name:"index",setup(e){const t=v(),{isPro:a}=ne(t),n=y(),{systemHardening:s}=ne(n),i=R(s.value),o=ae((()=>s.value));N(o,(e=>{i.value=e}));const u=async()=>{await l.post("/plugin?name=syssafe&action=a&s=set_open",{},{requestOptions:{loading:ue("Security.Api.Index_5"),successMessage:!0}}),await n.setRefresh(!0)};return(async()=>{a.value&&await w("syssafe")})(),(e,t)=>{const l=oe,n=m,s=f;return K(a)?(L(),M("div",Fe,[z(s,{class:"my-15px"},{default:D((()=>[z(n,{class:"p-15px items-center"},{default:D((()=>[W("span",null,G(e.$t("Security.Anti.Index_14")),1),z(l,{value:K(i),"onUpdate:value":[t[0]||(t[0]=e=>E(i)?i.value=e:null),u],"rubber-band":!1},null,8,["value"])])),_:1})])),_:1}),z(s,{class:"p-15px"},{default:D((()=>[z(qe)])),_:1})])):(L(),V(We,{key:1}))}}}))}}}));