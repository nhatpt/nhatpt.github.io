(function(){"use strict";var t={180:function(t,e,n){var o=n(5130),l=n(6768),u=n(4232);const i={class:"container"},a={class:"get-in-touch"},c={class:"form-field col-lg-12"},r={class:"form-field col-lg-12"},s={class:"form-field col-lg-12"},d={class:"form-field col-lg-6"},p={class:"form-field col-lg-12"},m={class:"form-field col-lg-12"},f={class:"form-field col-lg-12"},h=["disabled"],b={action:"login"},v={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},k={class:"modal-dialog"},L={class:"modal-content"},g={class:"modal-body"},y={class:"card shadow-lg"},I={class:"row"},x={class:"col-12"};function A(t,e,n,A,j,w){return(0,l.uX)(),(0,l.CE)("div",i,[(0,l.Lk)("section",a,[e[8]||(e[8]=(0,l.Lk)("h1",{class:"title m-1"},[(0,l.eW)("Tool cho bạn Hieunnm sài chơi "),(0,l.Lk)("i",{class:"fa fa-regular fa-face-smile"})],-1)),(0,l.Lk)("form",{class:"contact-form row",onSubmit:e[7]||(e[7]=(0,o.D$)((t=>w.calculate()),["prevent"]))},[(0,l.Lk)("div",c,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.productItem.amount=e),id:"amount",class:"input-text js-input",type:"number",required:"",placeholder:"Giá tiền bịch bánh Hiếu muốn mua"},null,512),[[o.Jo,t.productItem.amount]])]),(0,l.Lk)("div",r,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.productItem.minAmount=e),id:"minAmount",class:"input-text js-input",type:"number",required:"",placeholder:"Số tiền nhỏ nhất Hiếu cần trả để quán không bị ăn quỵt"},null,512),[[o.Jo,t.productItem.minAmount]])]),(0,l.Lk)("div",s,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=e=>t.productItem.multiply=e),id:"multiply",class:"input-text js-input",type:"number",required:"",placeholder:"Bội số để kiếm lời từ Hiếu"},null,512),[[o.Jo,t.productItem.multiply]])]),(0,l.Lk)("div",d,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=e=>t.productItem.point=e),id:"point",class:"input-text js-input",type:"number",required:"",placeholder:"Số tiền thừa mà quán thiếu Hiếu"},null,512),[[o.Jo,t.productItem.point]])]),(0,l.Lk)("div",p,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=e=>t.productItem.lps=e),id:"lps",class:"input-text js-input",type:"number",required:"",placeholder:"Số tiền hoa hồng Hiếu gạ Tuấn mua hàng"},null,512),[[o.Jo,t.productItem.lps]])]),(0,l.Lk)("div",m,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":e[5]||(e[5]=e=>t.productItem.discount=e),id:"discount",class:"input-text js-input",type:"text",required:"",placeholder:"Là thành viên trung thành, quán giảm giá cho Hiếu (%)"},null,512),[[o.Jo,t.productItem.discount]])]),(0,l.Lk)("div",f,[(0,l.Lk)("input",{disabled:w.isDisabled,class:"submit-btn",type:"submit",value:"Submit","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},null,8,h),(0,l.Lk)("form",b,[(0,l.Lk)("button",{onClick:e[6]||(e[6]=(...e)=>t.recaptcha&&t.recaptcha(...e))},"Execute recaptcha")])])],32)]),(0,l.Lk)("section",null,[(0,l.Lk)("div",v,[(0,l.Lk)("div",k,[(0,l.Lk)("div",L,[e[9]||(e[9]=(0,l.Lk)("div",{class:"modal-header"},[(0,l.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},"Số tiền hoa hồng mà Hiếu có thể sài:"),(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,l.Lk)("div",g,[(0,l.Lk)("div",y,[(0,l.Lk)("div",I,[(0,l.Lk)("div",x,[(0,l.Lk)("span",null,(0,u.v_)(this.productItem.useLpsAmount),1)])])])]),e[10]||(e[10]=(0,l.Lk)("div",{class:"modal-footer"},[(0,l.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1))])])])])])}var j=n(6859),w={name:"App",components:{},setup(){const t=(0,j.useReCaptcha)(),e=async()=>{await t.recaptchaLoaded();const e=await t.executeRecaptcha("login");console.log("token",e)};console.log(e)},computed:{isDisabled(){return null===this.productItem.amount||null===this.productItem.minAmount||null===this.productItem.multiply||null===this.productItem.point||null===this.productItem.lps||null===this.productItem.discount}},data:function(){return{productItem:{amount:null,minAmount:null,multiply:null,point:null,lps:null,discount:null,useLpsAmount:null}}},methods:{calculate:function(){let t=this.productItem.amount,e=this.productItem.minAmount,n=this.productItem.point,o=this.productItem.lps,l=""===this.productItem.discount?"0":this.productItem.discount,u=this.productItem.multiply,i=t-n,a=i%u,c=i-e;c>o&&(c=o);let r=Math.floor(c/u);while(r>=0){let t=a+u*r;if(t>c){r--;continue}let n=i-t;if(n<e){r--;continue}let o=n*((100-l)/100);if(o>=e)return void(this.productItem.useLpsAmount=t);r--}this.productItem.useLpsAmount=0}}},O=n(1241);const S=(0,O.A)(w,[["render",A]]);var q=S;n(323);(0,o.Ef)(q).use(j.VueReCaptcha,{siteKey:"6LdhoQ0rAAAAAN8nJOZRpzFGpRJRIGu_vPDmmA8o"}).mount("#app")}},e={};function n(o){var l=e[o];if(void 0!==l)return l.exports;var u=e[o]={exports:{}};return t[o].call(u.exports,u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,o,l,u){if(!o){var i=1/0;for(s=0;s<t.length;s++){o=t[s][0],l=t[s][1],u=t[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){t.splice(s--,1);var r=l();void 0!==r&&(e=r)}}return e}u=u||0;for(var s=t.length;s>0&&t[s-1][2]>u;s--)t[s]=t[s-1];t[s]=[o,l,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,u,i=o[0],a=o[1],c=o[2],r=0;if(i.some((function(e){return 0!==t[e]}))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(c)var s=c(n)}for(e&&e(o);r<i.length;r++)u=i[r],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(s)},o=self["webpackChunkblog_n_tools"]=self["webpackChunkblog_n_tools"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(180)}));o=n.O(o)})();
//# sourceMappingURL=app.92af1a86.js.map