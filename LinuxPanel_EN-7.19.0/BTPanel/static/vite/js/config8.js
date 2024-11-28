import{_ as a}from"./index96.js?v=1732601582185";import{_ as e}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{k as t,I as l}from"./page_layout.js?v=1732601582185";import{d as i,f as s,u as n}from"./public.js?v=1732601582185";import{B as r,C as o,D as u}from"./setting.js?v=1732601582185";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{d as c,ap as f,aq as d,e as m,O as v,P as _,Q as g,Z as y,ad as h,R as b,F as S,L as x,W as C,r as P,j,M as W,Y as w,c as E}from"./vue.js?v=1732601582185";import{bL as k,ad as O,bG as R,aa as L}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const T={class:"param-list"},A=["onClick"],I=t(c({__name:"param",props:{value:{default:()=>[]},valueModifiers:{}},emits:f(["change"],["update:value"]),setup(a,{emit:e}){const t=e,l=d(a,"value"),i=["POST","GET","PUT","OPTIONS","HEAD","DELETE","TRACE","PATCH","MOVE","COPY","LINK","UNLINK","WRAPPED","PROPFIND","PROPPATCH","MKCOL","CONNECT","SRARCH"],s=m((()=>i.length===l.value.length)),n=()=>{l.value=[],s.value||(l.value=i.map((a=>a))),t("change")};return(a,e)=>(v(),_("div",T,[g("div",{class:h(["param-item",{active:b(s)}]),onClick:n},y(a.$t("Public.SelectAll")),3),(v(),_(S,null,x(i,(a=>{return g("div",{key:a,class:h(["param-item",{active:(e=a,l.value.includes(e))}]),onClick:e=>(a=>{const e=l.value.indexOf(a);-1===e?l.value.push(a):l.value.splice(e,1),t("change")})(a)},y(a),11,A);var e})),64))]))}}),[["__scopeId","data-v-d6f769f3"]]),N={class:"p-20px"},U={class:"w-100px mr-8px"},D={class:"w-220px"},$={class:"w-328px"},H=c({__name:"form",props:{isEdit:{type:Boolean,default:!1}},emits:["refresh"],setup(a,{expose:e,emit:t}){const l=t,{t:i}=C(),s=P(null),n=P(null),o=j({type:"refuse",url:"",param:[]}),u=[{label:i("Waf.Setting.config_111"),value:"refuse"},{label:i("Waf.Setting.config_110"),value:"accept"}],c={url:{trigger:["blur","input"],validator:()=>""!==o.url.trim()||new Error(i("Waf.Setting.config_55"))},param:{validator:()=>0!==o.param.length||new Error(i("Waf.Setting.config_112"))}},f=()=>{var a;null==(a=n.value)||a.restoreValidation()};return e({onConfirm:async()=>{var a;await(null==(a=s.value)?void 0:a.validate()),await r({type:o.type,url:o.url,param:o.param.join(",")}),l("refresh")}}),(a,e)=>{const t=k,l=O,i=R,r=p;return v(),_("div",N,[W(r,{ref_key:"formRef",ref:s,model:b(o),rules:c},{default:w((()=>[W(i,{label:a.$t("Waf.Setting.config_73"),path:"url"},{default:w((()=>[g("div",U,[W(t,{value:b(o).type,"onUpdate:value":e[0]||(e[0]=a=>b(o).type=a),options:u},null,8,["value"])]),g("div",D,[W(l,{value:b(o).url,"onUpdate:value":e[1]||(e[1]=a=>b(o).url=a),placeholder:"URL"},null,8,["value"])])])),_:1},8,["label"]),W(i,{ref_key:"paramItemRef",ref:n,label:a.$t("Waf.Setting.config_65"),path:"param"},{default:w((()=>[g("div",$,[W(I,{value:b(o).param,"onUpdate:value":e[2]||(e[2]=a=>b(o).param=a),onChange:f},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),B={class:"p-20px"},M={class:"flex mb-16px"},K=c({__name:"config",setup(t){const{t:r}=C(),p=async()=>{var a;a={title:r("Waf.Setting.config_64"),data:{isEdit:!1}},n({title:a.title,width:550,footer:!0,data:{...a.data,onRefresh:()=>{m()}},component:H})},{table:c,columns:f,setLoading:d}=i([{key:"url",title:"URL",ellipsis:{tooltip:!0}},{key:"type",title:r("Waf.Setting.config_73"),width:80,ellipsis:{tooltip:!0},render:a=>"refuse"===a.type?r("Waf.Setting.config_111"):r("Waf.Setting.config_110")},{key:"mode",title:r("Waf.Setting.config_93"),width:216,ellipsis:{tooltip:!0},render:a=>Object.entries(a.mode).map((([,a])=>a)).join(", ")},s({width:60,options:a=>[{label:r("Public.Btn.Del"),onClick:async()=>{await o({url:a.url}),m()}}]})]),m=async()=>{try{d(!0);const{message:a}=await u();c.data=l(a)?a:[]}finally{d(!1)}};return m(),(t,l)=>{const i=L,s=e,n=a;return v(),_("div",B,[g("div",M,[W(i,{type:"primary",onClick:p},{default:w((()=>[E(y(t.$t("Public.Btn.Add")),1)])),_:1})]),W(s,{"max-height":270,loading:b(c).loading,data:b(c).data,columns:b(f)},null,8,["loading","data","columns"]),W(n,{class:"mt-12px"},{default:w((()=>[g("li",null,y(t.$t("Waf.Setting.config_108")),1),g("li",null,y(t.$t("Waf.Setting.config_109")),1)])),_:1})])}}});export{K as default};