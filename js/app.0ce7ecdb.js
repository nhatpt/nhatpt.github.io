(function(){"use strict";var t={4655:function(t,n,e){var l=e(9242),o=e(3396),i=e(7139);const u={class:"container"},r={class:"get-in-touch"},s=(0,o._)("h1",{class:"title m-1"},[(0,o.Uk)("Tool cho bạn Hieunnm sài chơi "),(0,o._)("i",{class:"fa fa-smile-o","aria-hidden":"true"},"HAHA")],-1),a={class:"form-field col-lg-12"},d={class:"form-field col-lg-12"},c={class:"form-field col-lg-12"},p={class:"form-field col-lg-6"},m={class:"form-field col-lg-12"},f={class:"form-field col-lg-12"},h={class:"form-field col-lg-12"},b=["disabled"],v={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},_={class:"modal-dialog"},g={class:"modal-content"},y=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Số tiền hoa hồng mà Hiếu có thể sài:"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body"},w={class:"card shadow-lg"},x={class:"row"},A={class:"col-12"},j=(0,o._)("div",{class:"modal-footer"},[(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);function O(t,n,e,O,q,H){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("section",r,[s,(0,o._)("form",{class:"contact-form row",onSubmit:n[6]||(n[6]=(0,l.iM)((t=>H.calculate()),["prevent"]))},[(0,o._)("div",a,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[0]||(n[0]=n=>t.productItem.amount=n),id:"amount",class:"input-text js-input",type:"number",required:"",placeholder:"Giá tiền bịch bánh Hiếu muốn mua"},null,512),[[l.nr,t.productItem.amount]])]),(0,o._)("div",d,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[1]||(n[1]=n=>t.productItem.minAmount=n),id:"minAmount",class:"input-text js-input",type:"number",required:"",placeholder:"Số tiền nhỏ nhất Hiếu cần trả để quán không bị ăn quỵt"},null,512),[[l.nr,t.productItem.minAmount]])]),(0,o._)("div",c,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[2]||(n[2]=n=>t.productItem.multiply=n),id:"multiply",class:"input-text js-input",type:"number",required:"",placeholder:"Bội số để kiếm lời từ Hiếu"},null,512),[[l.nr,t.productItem.multiply]])]),(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[3]||(n[3]=n=>t.productItem.point=n),id:"point",class:"input-text js-input",type:"number",required:"",placeholder:"Số tiền thừa mà quán thiếu Hiếu"},null,512),[[l.nr,t.productItem.point]])]),(0,o._)("div",m,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[4]||(n[4]=n=>t.productItem.lps=n),id:"lps",class:"input-text js-input",type:"number",required:"",placeholder:"Số tiền hoa hồng Hiếu gạ Tuấn mua hàng"},null,512),[[l.nr,t.productItem.lps]])]),(0,o._)("div",f,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[5]||(n[5]=n=>t.productItem.discount=n),id:"discount",class:"input-text js-input",type:"text",required:"",placeholder:"Là thành viên trung thành, quán giảm giá cho Hiếu (%)"},null,512),[[l.nr,t.productItem.discount]])]),(0,o._)("div",h,[(0,o._)("input",{disabled:H.isDisabled,class:"submit-btn",type:"submit",value:"Submit","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},null,8,b)])],32)]),(0,o._)("section",null,[(0,o._)("div",v,[(0,o._)("div",_,[(0,o._)("div",g,[y,(0,o._)("div",I,[(0,o._)("div",w,[(0,o._)("div",x,[(0,o._)("div",A,[(0,o._)("span",null,(0,i.zw)(this.productItem.useLpsAmount),1)])])])]),j])])])])])}var q={name:"App",components:{},computed:{isDisabled(){return null===this.productItem.amount||null===this.productItem.minAmount||null===this.productItem.multiply||null===this.productItem.point||null===this.productItem.lps||null===this.productItem.discount}},data:function(){return{productItem:{amount:null,minAmount:null,multiply:null,point:null,lps:null,discount:null,useLpsAmount:null}}},methods:{calculate:function(){let t=this.productItem.amount,n=this.productItem.minAmount,e=this.productItem.point,l=this.productItem.lps,o=""===this.productItem.discount?"0":this.productItem.discount,i=this.productItem.multiply,u=t-e,r=u%i,s=u-n;s>l&&(s=l);let a=Math.floor(s/i);while(a>=0){let t=r+i*a;if(t>s){a--;continue}let e=u-t;if(e<n){a--;continue}let l=e*((100-o)/100);if(l>=n)return void(this.productItem.useLpsAmount=t);a--}this.productItem.useLpsAmount=0}}},H=e(89);const k=(0,H.Z)(q,[["render",O]]);var L=k;e(6744);(0,l.ri)(L).mount("#app")}},n={};function e(l){var o=n[l];if(void 0!==o)return o.exports;var i=n[l]={exports:{}};return t[l].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,l,o,i){if(!l){var u=1/0;for(d=0;d<t.length;d++){l=t[d][0],o=t[d][1],i=t[d][2];for(var r=!0,s=0;s<l.length;s++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](l[s])}))?l.splice(s--,1):(r=!1,i<u&&(u=i));if(r){t.splice(d--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[l,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,l){var o,i,u=l[0],r=l[1],s=l[2],a=0;if(u.some((function(n){return 0!==t[n]}))){for(o in r)e.o(r,o)&&(e.m[o]=r[o]);if(s)var d=s(e)}for(n&&n(l);a<u.length;a++)i=u[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},l=self["webpackChunkblog_n_tools"]=self["webpackChunkblog_n_tools"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=e.O(void 0,[998],(function(){return e(4655)}));l=e.O(l)})();
//# sourceMappingURL=app.0ce7ecdb.js.map