System.register(["./page_layout-legacy.js?v=1732601582185","./index-legacy215.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./public-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy14.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1732601582185","./index-legacy230.js?v=1732601582185","./new-legacy.js?v=1732601582185","./index-legacy171.js?v=1732601582185","./index-legacy102.js?v=1732601582185","./site-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185"],(function(e,t){"use strict";var a,n,l,i,o,s,d,c,r,u,p,_,m,x,v,g,f,y,b,w,h,j,k,C,$,N,S,R,U,P,D,T,L,I,M,F,q,B,A,z,O,H,K,E,G,J,Q,V,W,X,Y,Z,ee,te,ae,ne,le,ie,oe,se,de,ce,re,ue,pe,_e,me,xe,ve,ge,fe,ye,be,we,he,je,ke,Ce,$e,Ne,Se,Re,Ue,Pe,De,Te,Le,Ie,Me,Fe,qe,Be,Ae,ze,Oe,He;return{setters:[e=>{a=e.i,n=e.j,l=e.dE,i=e.dF,o=e.I,s=e.m,d=e.dG,c=e.bI,r=e.dH,u=e.dI,p=e.dJ,_=e.dK,m=e.dL,x=e.dM,v=e.dN,g=e.k,f=e.bd,y=e.S,b=e.h,w=e.dO,h=e.f,j=e.at,k=e.au,C=e.bJ,$=e.bK,N=e.dP,S=e.dB,R=e.dQ,U=e.dC,P=e.dR,D=e.o,T=e.a0,L=e.c},e=>{I=e._},e=>{M=e.p,F=e.a,q=e.M,B=e.d,A=e.W,z=e.r,O=e.O,H=e.P,K=e.Q,E=e.Y,G=e.Z,J=e.R,Q=e.ac,V=e.c,W=e.j,X=e.X,Y=e.ao,Z=e.m,ee=e.f,te=e.F,ae=e.L,ne=e.ad,le=e.e,ie=e.n,oe=e.V,se=e.w,de=e.a6},e=>{ce=e._},e=>{re=e._},e=>{ue=e._},e=>{pe=e._},e=>{_e=e.a,me=e.H,xe=e.d,ve=e.b,ge=e.f,fe=e.q,ye=e.u},e=>{be=e.aa,we=e.ad,he=e.bh,je=e.bo,ke=e.bL,Ce=e.bG,$e=e.bl,Ne=e._,Se=e.aV},e=>{Re=e._},e=>{Ue=e._},e=>{Pe=e._},e=>{De=e._},e=>{Te=e.v},e=>{Le=e.o},e=>{Ie=e._},e=>{Me=e._},e=>{Fe=e.aE,qe=e.aF,Be=e.a,Ae=e.aG,ze=e.g,Oe=e.aH},e=>{He=e._}],execute:function(){var Ke=document.createElement("style");Ke.textContent=".install-box[data-v-3fa52c5e]{position:absolute;top:0;left:0;z-index:100;width:100%;height:100%;display:flex;align-items:center;justify-content:center;--un-bg-opacity:1;background-color:rgb(127 127 127 / var(--un-bg-opacity))}.install-box .install-desc[data-v-3fa52c5e]{max-width:350px;display:flex;align-items:center;justify-content:center;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));padding:16px;text-align:center;font-size:13px;--un-text-opacity:1;color:rgb(85 85 85 / var(--un-text-opacity))}[data-v-9c2e6736] .n-descriptions-table-header{--n-th-padding: 8px !important}[data-v-9c2e6736] .n-descriptions-table-content{padding:8px!important}\n",document.head.appendChild(Ke),e("u",Ge);const Ee=Symbol("site-config");function Ge(){return F(Ee)}const{t:Je}=a.global;function Qe({delDomain:e}){return{key:"action",title:Je("Public.Table.Action"),width:80,align:"right",render:t=>q(me,{options:[{label:Je("Public.Btn.Del"),onClick:()=>{_e({title:`${Je("Site.Batch.index_12")}[${t.name}]`,content:Je("Site.Batch.index_13"),onConfirm:async({hide:a})=>{await e(t),a()}})}}]},null)}}const Ve={class:"flex justify-between items-center mb-24px"},We={class:"w-400px"},Xe={class:"pr-40px"},Ye=B({__name:"index",setup(e,{expose:t}){const{t:a}=A(),{data:c}=Ge(),r=z(""),u=async()=>{""!==r.value.trim()?(await d({project_name:c.name,domains:r.value.trim().split("\n").map((e=>e.trim())).filter((e=>e))}),r.value="",b()):s.error(a("Site.RulesError.index_31"))},p=async e=>{await l({project_name:c.name,domain:e.name}),b()},{keys:_,table:m,columns:x}=xe([{type:"selection",width:40},{key:"name",title:Je("Site.TableRow.index_19"),render:e=>q(n,{href:`http://${e.name}:${e.port}`,target:"_blank"},{default:()=>[e.name]})},{key:"port",title:Je("Site.TableRow.index_16"),width:100},Qe({delDomain:p})]),v=()=>{m.data.length>1?x.value[x.value.length-1]=Qe({delDomain:p}):x.value[x.value.length-1]={key:"action",title:Je("Public.Table.Action"),width:80,align:"right",render:()=>q("span",{class:"text-default"},[Je("Config.Panel.index_82")])}},g=[{key:"del",type:"confirm",label:a("Site.Batch.index_20"),confirm:{title:a("Site.Batch.index_21"),desc:a("Site.Batch.index_11"),api:e=>l({project_name:c.name,domain:e.name},!1),done:()=>{b()},columns:[{key:"name",title:a("Site.Cert.index_29"),ellipsis:{tooltip:{width:"trigger"}}}]}}],{loading:f,setLoading:y}=ve(),b=async()=>{try{y(!0);const{message:e}=await i({project_name:c.name});m.data=o(e)?e:[],v()}finally{_.value=[],y(!1)}};return b(),t({init:b}),(e,t)=>{const a=pe,n=be,l=ue,i=re,o=ce;return O(),H("div",null,[K("div",Ve,[K("div",We,[q(a,{value:J(r),"onUpdate:value":t[0]||(t[0]=e=>Q(r)?r.value=e:null)},{default:E((()=>[K("p",null,G(e.$t("Site.Config.index_30")),1),K("p",null,G(e.$t("Site.Config.index_31")),1),K("p",null,G(e.$t("Site.Config.index_32")),1)])),_:1},8,["value"])]),K("div",Xe,[q(n,{type:"primary",onClick:u},{default:E((()=>[V(G(e.$t("Site.Cert.index_62")),1)])),_:1})])]),q(o,null,{table:E((()=>[q(l,{"checked-row-keys":J(_),"onUpdate:checkedRowKeys":t[1]||(t[1]=e=>Q(_)?_.value=e:null),loading:J(f),"max-height":400,data:J(m).data,columns:J(x)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:E((()=>[q(i,{"checked-row-keys":J(_),"onUpdate:checkedRowKeys":t[2]||(t[2]=e=>Q(_)?_.value=e:null),data:J(m).data,options:g},null,8,["checked-row-keys","data"])])),_:1})])}}}),Ze=B({__name:"index",setup(e,{expose:t}){const{t:a}=A(),{data:n}=Ge(),l=c(),i=W({module:""}),d=async()=>{""!==i.module?(await _({project_name:n.name,mod_name:i.module}),w(),i.module=""):s.error(a("Node.index_72"))},x=async()=>{await m({project_name:n.name}),w()},{keys:v,table:g,columns:f}=xe([{key:"name",title:a("Node.index_46"),ellipsis:{tooltip:{width:"trigger"}}},{key:"version",title:a("Site.TableRow.index_3"),width:80},{key:"license",title:a("Node.index_47"),width:80,render:e=>"object"==typeof e.license&&null!==e.license?e.license.type:e.license},{key:"description",title:a("Docker.Container.config.image.index_11"),ellipsis:{tooltip:{width:"trigger"}}},ge({width:130,options:e=>[{label:a("Home.index_5"),onClick:()=>{fe({title:a("Node.index_48"),content:a("Node.index_49",[e.name]),onConfirm:async()=>{await r({project_name:n.name,mod_name:e.name}),w()}})}},{label:a("Public.Btn.Uninstall"),onClick:()=>{fe({title:a("Node.index_50"),content:a("Node.index_51",[e.name]),onConfirm:async()=>{await u({project_name:n.name,mod_name:e.name}),w()}})}}]})]),{loading:y,setLoading:b}=ve(),w=async()=>{try{b(!0);const{message:e}=await p({project_name:n.name,project_cwd:l.nodePath});o(e)&&(g.data=e)}finally{v.value=[],b(!1)}},h=async()=>{await l.getConfig(!1),w()};return h(),t({init:h}),(e,t)=>{const a=we,n=be,l=he,o=ue,s=ce;return O(),H("div",null,[q(l,{class:"justify-between!"},{default:E((()=>[K("div",null,[q(a,{class:"w-240px!",value:J(i).module,"onUpdate:value":t[0]||(t[0]=e=>J(i).module=e),placeholder:e.$t("Node.index_45")},null,8,["value","placeholder"]),q(n,{type:"primary",onClick:d},{default:E((()=>[V(G(e.$t("Docker.App.index_4")),1)])),_:1})]),K("div",null,[J(g).data.length?Y("",!0):(O(),X(n,{key:0,type:"primary",onClick:x},{default:E((()=>[V(G(e.$t("Node.index_74")),1)])),_:1}))])])),_:1}),q(s,{class:"mt-16px"},{table:E((()=>[q(o,{"checked-row-keys":J(v),"onUpdate:checkedRowKeys":t[1]||(t[1]=e=>Q(v)?v.value=e:null),loading:J(y),"max-height":440,data:J(g).data,columns:J(f)},null,8,["checked-row-keys","loading","data","columns"])])),_:1})])}}}),et=B({__name:"index",setup(e,{expose:t}){const{t:a}=A(),{data:n}=Ge(),l=c(),i=z(!0),o=async e=>{i.value=!e;const t=a("Node.index_42"),o=a("Node.index_80"),s=a("Node.index_81");_e({title:t,content:e?s:o,onConfirm:async({hide:t})=>{e?await v({project_name:n.name,domains:l.domains}):await x({project_name:n.name}),i.value=e,t()}})},{loading:s,setLoading:d}=ve(),r=async()=>{try{d(!0),await l.getConfig(!1),i.value=l.isMapping}finally{d(!1)}};return r(),t({init:r}),(e,t)=>{const a=je,n=he,l=Re;return O(),H("div",null,[q(n,{class:"items-center"},{default:E((()=>[K("span",null,G(e.$t("Node.index_42")),1),q(a,{value:J(i),"onUpdate:value":[t[0]||(t[0]=e=>Q(i)?i.value=e:null),o],"rubber-band":!1,loading:J(s)},null,8,["value","loading"])])),_:1}),q(l,{class:"mt-16px"},{default:E((()=>[K("li",null,G(e.$t("Node.index_43")),1),K("li",null,G(e.$t("Node.index_44")),1)])),_:1})])}}}),tt={class:"relative h-full"},at={key:0,class:"install-box"},nt={class:"install-desc"},lt=B({__name:"index",props:{active:{type:Boolean,default:!0}},setup:e=>(e,t)=>(O(),H("div",tt,[Z(e.$slots,"default",{},void 0,!0),e.active?Y("",!0):(O(),H("div",at,[K("div",nt,[Z(e.$slots,"desc",{},void 0,!0)])]))]))}),it=e("_",g(lt,[["__scopeId","data-v-3fa52c5e"]])),ot={class:"mt-8px"},st=B({__name:"index",setup(e,{expose:t}){const{data:a}=Ge(),l=f(),i=c(),o=z(null),s=()=>{i.activeMenu="mapping"},d=z((()=>{const{webserver:e}=l;return`/www/server/panel/vhost/${"openlitespeed"===e?`${e}/detail`:e}/node_${a.name}.conf`})()),r=async()=>{await i.getConfig(),o.value?.getContent()},u=()=>{o.value?.saveFile()};return ee((()=>{r()})),t({init:r}),(e,t)=>{const a=n,l=be,c=Re,r=it;return O(),X(r,{active:J(i).isMapping},{desc:E((()=>[K("span",null,[V(G(e.$t("Node.index_55"))+" ",1),q(a,{onClick:s},{default:E((()=>[V(G(e.$t("Node.index_42")),1)])),_:1}),V(" "+G(e.$t("Node.index_56")),1)])])),default:E((()=>[K("div",null,[q(Ue,{ref_key:"configRef",ref:o,path:J(d),"onUpdate:path":t[0]||(t[0]=e=>Q(d)?d.value=e:null),height:"500"},null,8,["path"]),K("div",ot,[q(l,{type:"primary",onClick:u},{default:E((()=>[V(G(e.$t("Site.Cert.index_60")),1)])),_:1})]),q(c,{class:"mt-16px"},{default:E((()=>[K("li",null,G(e.$t("Site.Config.index_59")),1),K("li",null,G(e.$t("Site.Config.index_60")),1)])),_:1})])])),_:1},8,["active"])}}}),{t:dt}=a.global,ct=z([{label:dt("Config.Alarm.index_43"),value:"name"},{label:dt("Component.UploadFile.index_5"),value:"status"},{label:dt("Ftp.Analysis.Index_27"),value:"user"},{label:dt("Public.Search.StartTime"),value:"create_time",isTime:!0},{label:"PID",value:"pid"},{label:"PPID",value:"ppid"},{label:dt("Node.index_75"),value:"threads"},{label:"Socket",value:"connects"},{label:"CPU",value:"cpu_percent"},{label:"RAM",value:"memory_used",isSize:!0},{label:"Disk/R",value:"io_read_bytes",isSize:!0},{label:"Disk/W",value:"io_write_bytes",isSize:!0},{label:dt("Term.index_24"),value:"exe"}]),rt={class:"my-16px"},ut={class:"my-16px"},pt=B({__name:"index",setup(e,{expose:t}){const{t:a}=A(),{data:l}=Ge(),i=c(),o=()=>{i.activeMenu="service"},s=z(!0),d=z(""),r=z([]),u=e=>{const t=f.value[e];p.value=t,m.data=t.connections,v.data=t.open_files},p=z(),_=e=>{if(!p.value)return;const t=p.value[e.value];return void 0===t?"--":e.isTime?y(t):e.isSize?b(t):t},{table:m,columns:x}=xe([{key:"client_addr",title:a("Node.index_77")},{key:"client_rport",title:a("Node.index_78")},{key:"family",title:a("Docker.Container.create.port_4")},{key:"fd",title:"FD",width:"50px"},{key:"local_addr",title:a("Node.index_79")},{key:"status",title:a("Component.UploadFile.index_5")}]),{table:v,columns:g}=xe([{key:"path",title:a("Logs.Soft.index_3")},{key:"mode",title:a("Site.TableRow.index_12"),width:"50px"},{key:"position",title:a("Database.tools.index_76"),width:"100px"},{key:"flags",title:"Flags",width:"100px"},{key:"fd",title:"FD",width:"50px"}]),f=z({}),{loading:C,setLoading:$}=ve(),N=async()=>{try{$(!0);const{message:e}=await w({project_name:l.name});if(h(e)){if(s.value=e.run,0===Object.keys(e.load_info).length)return;f.value=e.load_info,r.value=Object.keys(e.load_info).map((e=>({label:e,value:e}))),d.value=r.value[0].value,u(d.value)}}finally{$(!1)}};return N(),t({init:N}),(e,t)=>{const a=n,l=ke,i=he,c=j,p=k,f=ue,y=it;return O(),X(y,{active:J(s)},{desc:E((()=>[K("span",null,[V(G(e.$t("Node.index_64"))+" ",1),q(a,{onClick:o},{default:E((()=>[V(G(e.$t("Node.index_65")),1)])),_:1})])])),default:E((()=>[K("div",null,[q(i,{class:"items-center"},{default:E((()=>[t[1]||(t[1]=K("span",null,"PID",-1)),q(l,{class:"w-150px!",value:J(d),"onUpdate:value":[t[0]||(t[0]=e=>Q(d)?d.value=e:null),u],loading:J(C),options:J(r)},null,8,["value","loading","options"])])),_:1}),q(p,{"label-placement":"left",bordered:"",column:4,class:"mt-16px"},{default:E((()=>[(O(!0),H(te,null,ae(J(ct),(e=>(O(),X(c,{label:e.label,key:e.value},{default:E((()=>[V(G(_(e)),1)])),_:2},1032,["label"])))),128))])),_:1}),K("div",rt,G(e.$t("Docker.Container.create.index_31")),1),q(f,{"max-height":150,data:J(m).data,columns:J(x)},null,8,["data","columns"]),K("div",ut,G(e.$t("Node.index_76")),1),q(f,{"max-height":150,data:J(v).data,columns:J(g)},null,8,["data","columns"])])])),_:1},8,["active"])}}}),_t=g(pt,[["__scopeId","data-v-9c2e6736"]]),mt={__name:"index",setup(e,{expose:t}){const{data:a}=Ge(),{t:n}=A(),l=c(),i=z(!0),o=()=>{_e({title:n("Node.index_58"),content:i.value?n("Node.index_70"):n("Node.index_59"),onConfirm:async()=>{i.value?await $({project_name:a.name}):await C({project_name:a.name}),r(),l.setRefresh(!0)}})},d=()=>{_e({title:n("Node.index_58"),content:n("Node.index_60"),onConfirm:async()=>{await N({project_name:a.name}),r()}})},r=async()=>{s.loading(n("Component.Api.index_1")),await l.getConfig(!1),i.value=l.isRun,s.clear()};return r(),t({init:r}),(e,t)=>{const a=he,l=be;return O(),H(te,null,[q(a,{class:"items-center",size:0},{default:E((()=>[V(G(e.$t("Node.index_57"))+"："+G(J(i)?e.$t("Public.Status.Start"):e.$t("Public.Status.Stop")),1),K("span",{class:ne(["iconfont","icon-"+(J(i)?"start":"stop")])},null,2)])),_:1}),q(a,{class:"mt-16px"},{default:E((()=>[q(l,{onClick:o},{default:E((()=>[V(G(J(i)?e.$t("Public.Status.Stop"):e.$t("Public.Status.Start")),1)])),_:1}),q(l,{onClick:d},{default:E((()=>[V(G(J(n)("Public.Status.Restart")),1)])),_:1})])),_:1})],64)}}},xt={class:"w-360px"},vt={class:"w-360px"},gt={class:"w-200px"},ft={class:"ml-10px text-default"},yt={class:"w-440px"},bt={class:"w-200px"},wt={class:"ml-10px text-default"},ht={class:"w-150px"},jt={class:"ml-10px text-default"},kt={class:"w-150px"},Ct={class:"ml-10px text-default"},$t={class:"w-440px"},Nt=B({__name:"index",setup(e,{expose:t}){const{t:a}=A(),l=c(),i=z(null),d=z(""),r=W({project_cwd:"/www/wwwroot",project_name:"",project_script:"",project_script_two:"",port:null,run_user:"www",nodejs_version:null,project_ps:"",boot:!1}),u={project_cwd:{trigger:["blur","input"],required:!0,message:a("Node.index_28")},project_name:{trigger:["blur","input"],required:!0,message:a("Node.index_29")},project_script:{trigger:["change"],required:!0,message:a("Node.index_30")},project_script_two:{trigger:["blur","input"],required:!0,message:a("Node.index_31")},port:Te(),nodejs_version:{trigger:["change"],required:!0,message:a("Node.index_32")}},p=()=>{const e=r.project_cwd.split("/"),t=e[e.length-1];r.project_name=t,r.project_ps=t,d.value=r.project_cwd,m()},_=z([]),m=async()=>{const{message:e}=await S({project_cwd:r.project_cwd});if(h(e)){const t=Object.keys(e).map((t=>({label:`${t} [${e[t]}]`,value:t})));t.find((e=>e.value==r.project_script))||(r.project_script_two=r.project_script,r.project_script="custom"),t.push({label:a("Node.index_33"),value:"custom"}),_.value=t}},x=[{label:"www",value:"www"},{label:"root",value:"root"}],v=z([]),g=e=>{r.project_ps=e},f=async()=>{await(i.value?.validate());const e={project_cwd:r.project_cwd,project_name:r.project_name,project_script:"custom"===r.project_script?r.project_script_two:r.project_script,port:r.port?.toString(),run_user:r.run_user,nodejs_version:r.nodejs_version,project_ps:r.project_ps,is_power_on:r.boot?1:0};await R(e),l.setRefresh(!0)},y=async()=>{await(async()=>{const{message:e}=await w({project_name:l.siteName});h(e)&&(r.project_cwd=e.path,d.value=e.path,r.project_name=e.name,r.project_script=e.project_config.project_script,r.port=e.project_config.port,r.run_user=e.project_config.run_user,r.nodejs_version=e.project_config.nodejs_version,r.project_ps=e.ps,r.boot=!!Number(e.project_config.is_power_on))})(),m(),(async()=>{const{message:e}=await U();o(e)&&e.length>0?v.value=e.map((e=>({label:e,value:e}))):s.error({close:!0,content:a("Node.index_34"),onClose:()=>{Le()}})})()};return y(),t({init:y}),(e,t)=>{const a=De,l=Ce,o=we,s=ke,c=$e,m=n,y=Ne,b=be,w=Pe,h=Re;return O(),H("div",null,[q(w,{ref_key:"formRef",ref:i,model:J(r),rules:u},{default:E((()=>[q(l,{label:e.$t("Docker.Container.index_17"),path:"project_cwd"},{default:E((()=>[K("div",xt,[q(a,{value:J(r).project_cwd,"onUpdate:value":t[0]||(t[0]=e=>J(r).project_cwd=e),readonly:!0,onChange:p},null,8,["value"])])])),_:1},8,["label"]),q(l,{label:e.$t("Config.Alarm.index_43"),path:"project_name"},{default:E((()=>[K("div",vt,[q(o,{disabled:"",value:J(r).project_name,"onUpdate:value":[t[1]||(t[1]=e=>J(r).project_name=e),g],placeholder:e.$t("Node.index_11")},null,8,["value","placeholder"])])])),_:1},8,["label"]),q(l,{label:e.$t("Node.index_12"),path:"project_script","show-feedback":!("custom"===J(r).project_script)},{default:E((()=>[K("div",gt,[q(s,{value:J(r).project_script,"onUpdate:value":t[2]||(t[2]=e=>J(r).project_script=e),placeholder:e.$t("Node.index_13"),options:J(_)},null,8,["value","placeholder","options"])]),K("div",ft,"* "+G(e.$t("Node.index_14")),1)])),_:1},8,["label","show-feedback"]),"custom"===J(r).project_script?(O(),X(l,{key:0,class:"mt-8px",label:" ",path:"project_script_two"},{default:E((()=>[K("div",yt,[q(a,{defaultPath:J(d),"checked-type":["file"],value:J(r).project_script_two,"onUpdate:value":t[3]||(t[3]=e=>J(r).project_script_two=e)},null,8,["defaultPath","value"])])])),_:1})):Y("",!0),q(l,{label:e.$t("Docker.Container.create.index_7"),path:"port"},{default:E((()=>[K("div",bt,[q(c,{value:J(r).port,"onUpdate:value":t[4]||(t[4]=e=>J(r).port=e),min:1,max:65535,"show-button":!1,placeholder:e.$t("Node.index_15")},null,8,["value","placeholder"])]),K("div",wt,"* "+G(e.$t("Node.index_15")),1)])),_:1},8,["label"]),q(l,{label:e.$t("Ftp.Analysis.Index_27")},{default:E((()=>[K("div",ht,[q(s,{value:J(r).run_user,"onUpdate:value":t[5]||(t[5]=e=>J(r).run_user=e),options:x},null,8,["value"])]),K("div",jt,"* "+G(e.$t("Node.index_16")),1)])),_:1},8,["label"]),q(l,{label:"Node",path:"nodejs_version"},{default:E((()=>[K("div",kt,[q(s,{value:J(r).nodejs_version,"onUpdate:value":t[6]||(t[6]=e=>J(r).nodejs_version=e),options:J(v)},null,8,["value","options"])]),K("div",Ct,[K("span",null,"* "+G(e.$t("Node.index_17"))+", ",1),q(m,{onClick:J(Le)},{default:E((()=>[V(G(e.$t("Node.index_18")),1)])),_:1},8,["onClick"])])])),_:1}),q(l,{label:e.$t("Docker.Container.create.index_46"),path:"project_ps"},{default:E((()=>[K("div",$t,[q(o,{value:J(r).project_ps,"onUpdate:value":t[7]||(t[7]=e=>J(r).project_ps=e),placeholder:e.$t("Node.index_19")},null,8,["value","placeholder"])])])),_:1},8,["label"]),q(l,{label:e.$t("Node.index_52")},{default:E((()=>[q(y,{checked:J(r).boot,"onUpdate:checked":t[8]||(t[8]=e=>J(r).boot=e)},{default:E((()=>[V(G(e.$t("Node.index_53")),1)])),_:1},8,["checked"])])),_:1},8,["label"]),q(l,{label:" "},{default:E((()=>[q(b,{type:"primary",onClick:f},{default:E((()=>[V(G(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])),_:1},8,["model"]),q(h,{class:"mt-8px"},{default:E((()=>[K("li",null,G(e.$t("Node.index_24")),1),K("li",null,G(e.$t("Node.index_25")),1),K("li",null,G(e.$t("Node.index_26")),1),K("li",null,G(e.$t("Node.index_27")),1)])),_:1})])}}}),St=B({__name:"index",setup(e,{expose:t}){const{data:a}=Ge(),n=z("None"),{loading:l,setLoading:i}=ve(),o=async()=>{try{i(!0);const{message:e}=await P({project_name:a.name});h(e)&&(n.value=D(e.result)?e.result:"None")}finally{i(!1)}};return o(),t({init:o}),(e,t)=>{const a=Ie,i=T;return O(),X(i,{class:"h-full",show:J(l)},{default:E((()=>[q(a,{log:J(n)},null,8,["log"])])),_:1},8,["show"])}}}),Rt=B({__name:"index",setup(e,{expose:t}){const{data:a}=Ge(),n=c(),l=z("None"),{loading:i,setLoading:o}=ve(),s=async()=>{await n.getConfig();try{o(!0);const{message:e}=await Fe({siteName:a.name});h(e)&&(l.value=D(e.result)?e.result:"None")}finally{o(!1)}};return s(),t({init:s}),(e,t)=>{const a=Ie,n=T;return O(),X(n,{class:"h-560px",show:J(i)},{default:E((()=>[q(a,{log:J(l)},null,8,["log"])])),_:1},8,["show"])}}}),Ut=B({__name:"index",setup(e,{expose:t}){const{data:a}=Ge(),n=z("None"),{loading:l,setLoading:i}=ve(),o=async()=>{try{i(!0);const{message:e}=await qe({siteName:a.name});h(e)&&(n.value=D(e.result)?e.result:"None")}finally{i(!1)}};return o(),t({init:o}),(e,t)=>{const a=Ie,i=T;return O(),X(i,{class:"h-560px",show:J(l)},{default:E((()=>[q(a,{log:J(n)},null,8,["log"])])),_:1},8,["show"])}}}),Pt=B({__name:"logs",props:{data:{}},setup(e){const t=e,{type:a,path:n}=t.data,l=z(""),{loading:i,setLoading:o}=ve();return(async()=>{try{o(!0);const{message:e}=await Be({type:a,path:n});h(e)&&(l.value=e.result)}finally{o(!1)}})(),(e,t)=>{const a=Ie,n=T;return O(),X(n,{class:"w-650px h-550px bg-#282C34",show:J(i)},{default:E((()=>[q(a,{log:J(l)},null,8,["log"])])),_:1},8,["show"])}}}),Dt={class:"text-error"},Tt={class:"w-400px p-20px"},Lt={class:"mb-16px"},It=B({__name:"index",setup(e,{expose:t}){const{t:a}=A(),l=f(),{data:i}=Ge(),o=le((()=>{let e="";switch(l.webserver){case"nginx":e=".log";break;case"apache":e="-access_log";break;default:e="_ols.access_log"}return`/www/wwwlogs/${i.name}${e}`})),d=le((()=>{const e=o.value.split("/");return e[e.length-1]})),c=()=>{_e({title:a("Site.Config.index_104"),content:`${a("Site.Config.index_105")} [${d.value}] ${a("Site.Config.index_106")}`,onConfirm:async({hide:e})=>{try{await Ae({path:o.value}),e(),p()}catch{e()}}})},r=z(!1),u=z(0),p=async()=>{r.value=!0,_()},_=(e=0)=>{let t=setTimeout((async()=>{const{message:e}=await ze({path:o.value});h(e)&&(u.value=e.result,u.value>=100?(s.success(a("Site.Config.index_107")),r.value=!1,u.value=0,b(),clearTimeout(t)):_(1e3))}),e)},m=e=>{ye({title:`[${e}] ${a("Site.Config.index_103")}`,data:{type:e,path:o.value},component:Pt})},{table:x,columns:v}=xe([{key:"start_time",title:a("Site.Cert.index_68")},{key:"time",title:a("Site.DelSite.index_6"),render:e=>`${e.time.substring(0,4)} s`},{key:"xss",title:a("Site.TableRow.index_4"),render:e=>e.xss>0?q("span",{class:"text-error"},[e.xss]):e.xss},{key:"sql",title:a("Site.TableRow.index_5"),render:e=>e.sql>0?q("span",{class:"text-error"},[e.sql]):e.sql},{key:"san",title:a("Site.TableRow.index_6"),render:e=>e.san>0?q("span",{class:"text-error"},[e.san]):e.san},{key:"php",title:a("Site.TableRow.index_27"),render:e=>e.php>0?q("span",{class:"text-error"},[e.php]):e.php},{key:"ip",title:a("Site.TableRow.index_7"),render:e=>e.ip>0?q(n,{onClick:()=>{m("ip")}},{default:()=>[e.ip]}):e.ip},{key:"url",title:a("Site.TableRow.index_8"),render:e=>e.url>0?q(n,{onClick:()=>{m("url")}},{default:()=>[e.url]}):e.url}]),{loading:g,setLoading:y}=ve(),b=async()=>{try{y(!0);const{message:e}=await Oe({path:o.value});h(e)&&(x.data=[e])}finally{y(!1)}},w=()=>{b()};return w(),t({init:w}),(e,t)=>{const a=be,l=ue,i=ce,o=Re,s=Se,d=He;return O(),H("div",null,[q(i,null,{toolsLeft:E((()=>[q(a,{type:"primary",onClick:c},{default:E((()=>[V(G(e.$t("Site.Config.index_104")),1)])),_:1})])),table:E((()=>[q(l,{loading:J(g),"loading-num":1,data:J(x).data,columns:J(v)},null,8,["loading","data","columns"])])),_:1}),q(o,{class:"mt-16px"},{default:E((()=>[K("li",null,[V(G(e.$t("Site.Config.index_108"))+" ",1),K("span",Dt,G(e.$t("Site.Config.index_109")),1)]),K("li",null,G(e.$t("Site.Config.index_110")),1),K("li",null,G(e.$t("Site.Config.index_111")),1),K("li",null,G(e.$t("Site.Config.index_112")),1),K("li",null,[q(n,{href:"https://www.aapanel.com/forum/d/3351-nginx-waf-instructions",target:"_blank"},{default:E((()=>[V(G(e.$t("Site.Config.index_113")),1)])),_:1}),V(" "+G(e.$t("Site.Config.index_114")),1)])])),_:1}),q(d,{show:J(r),"onUpdate:show":t[0]||(t[0]=e=>Q(r)?r.value=e:null)},{default:E((()=>[K("div",Tt,[K("div",Lt,G(e.$t("Site.Config.index_115")),1),q(s,{type:"line",status:"success",height:24,percentage:J(u),"border-radius":4,"indicator-placement":"inside"},null,8,["percentage"])])])),_:1},8,["show"])])}}}),Mt=B({__name:"index",setup(e,{expose:t}){const{t:a}=A(),{config:l}=Ge(),i=c(),o=()=>{i.activeMenu="mapping"},s=z("access"),d=z(),r=[{key:"access",label:a("Site.Config.index_100"),component:Rt},{key:"error",label:a("Site.Config.index_101"),component:Ut},{key:"security",label:a("Site.Config.index_102"),component:It}];return s.value=l.subMenu||"access",l.subMenu="",t({init:()=>{s.value="access",ie((()=>{d.value?.init()}))}}),(e,t)=>{const a=n,l=Me,c=it;return O(),X(c,{active:J(i).isMapping},{desc:E((()=>[K("span",null,[V(G(e.$t("Node.index_55"))+" ",1),q(a,{onClick:o},{default:E((()=>[V(G(e.$t("Node.index_42")),1)])),_:1}),V(" "+G(e.$t("Node.index_56")),1)])])),default:E((()=>[q(l,{value:J(s),"onUpdate:value":t[0]||(t[0]=e=>Q(s)?s.value=e:null),ref_key:"tabsRef",ref:d,options:r},null,8,["value"])])),_:1},8,["active"])}}}),Ft={class:"h-full"},qt=B({__name:"index",props:{siteInfo:{},config:{}},setup(e){const{t:a}=A(),n=c(),{siteName:l}=oe(n),i=de((()=>L((()=>t.import("./index-legacy237.js?v=1732601582185")),void 0))),o=de((()=>L((()=>t.import("./old-legacy5.js?v=1732601582185")),void 0))),s=e,{siteInfo:d,config:r}=s;l.value=s.siteInfo.name;const u=z();d&&M(Ee,{data:d,config:r});const p=z("project"),_=[{key:"project",label:a("Node.index_61"),component:Nt},{key:"domain",label:a("Site.Config.index_1"),component:Ye},{key:"mapping",label:a("Node.index_42"),component:et},{key:"rewrite",label:a("Site.Config.index_7"),component:i},{key:"config",label:a("Site.Config.index_10"),component:st},{key:"ssl",label:()=>q(te,null,[a("Site.Config.index_11")]),component:o},{key:"load",label:a("Home.index_30"),component:_t},{key:"service",label:a("Config.Safe.index_54"),component:mt},{key:"module",label:a("Node.index_46"),component:Ze},{key:"project log",label:a("Node.index_62"),component:St},{key:"logs",label:a("Node.index_63"),component:Mt}];return se((()=>n.activeMenu),(e=>{e&&(n.setMenu(),p.value=e)})),p.value=r.menu||"project",r.menu="",ee((()=>{window.siteConfigInit=u.value.init})),(e,t)=>{const a=I;return O(),H("div",Ft,[q(a,{value:J(p),"onUpdate:value":t[0]||(t[0]=e=>Q(p)?p.value=e:null),ref_key:"tabsRef",ref:u,data:_},null,8,["value"])])}}}),Bt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"}));e("i",Bt)}}}));