(function(){"use strict";var e={9450:function(e,n,t){var r=t(9242),o=t(3396);function a(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var i=t(89);const s={},u=(0,i.Z)(s,[["render",a]]);var l=u,c=t(2483);const p={class:"home"},d=(0,o._)("h1",null,"Welcome to First Task Server demo application!",-1),f=(0,o.Uk)("Login");function g(e,n){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",p,[d,(0,o.Wm)(t,{to:"/login"},{default:(0,o.w5)((()=>[f])),_:1})])}const m={},h=(0,i.Z)(m,[["render",g]]);var v=h;const w=e=>((0,o.dD)("data-v-ec0e6ec0"),e=e(),(0,o.Cn)(),e),y=w((()=>(0,o._)("h1",null,"Login",-1))),_={id:"login"},b={class:"no_account_paragraph"},k=(0,o.Uk)("No account? "),O=(0,o.Uk)("Register"),j={key:0,class:"error"},U=w((()=>(0,o._)("p",{class:"email_paragraph"},"Email",-1))),S=w((()=>(0,o._)("p",{class:"password_paragraph"},"Password",-1))),C=w((()=>(0,o._)("p",null,[(0,o._)("input",{type:"submit",class:"login",value:"Sign In"})],-1))),T=(0,o.Uk)("Home");function q(e,n,t,a,i,s){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[y,(0,o._)("div",_,[(0,o._)("p",b,[k,(0,o.Wm)(u,{to:"/register",class:"register"},{default:(0,o.w5)((()=>[O])),_:1})]),(0,o._)("form",{onSubmit:n[2]||(n[2]=(0,r.iM)((e=>s.LoginUser()),["prevent"]))},[i.error?((0,o.wg)(),(0,o.iD)("p",j,"Wrong credentials!")):(0,o.kq)("",!0),U,(0,o.wy)((0,o._)("input",{name:"email",type:"email","onUpdate:modelValue":n[0]||(n[0]=e=>i.login=e),class:"email",id:"email",required:""},null,512),[[r.nr,i.login]]),S,(0,o.wy)((0,o._)("input",{name:"password",type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>i.password=e),class:"password",required:""},null,512),[[r.nr,i.password]]),C],32),(0,o.Wm)(u,{to:"/",class:"home register"},{default:(0,o.w5)((()=>[T])),_:1})])],64)}var D=t(6265),P=t.n(D),x={data(){return{login:"",password:"",error:!1,responseData:[]}},methods:{LoginUser(){const e=JSON.stringify({login:this.login,password:this.password}),n={headers:{"Content-Type":"application/json"}};P().post("api/account/signin",e,n).then((e=>{console.log(e.data.token)})).catch((e=>{this.error=!0,console.log(e.response.status)}))}}};const A=(0,i.Z)(x,[["render",q],["__scopeId","data-v-ec0e6ec0"]]);var E=A;const L=e=>((0,o.dD)("data-v-f3442a3a"),e=e(),(0,o.Cn)(),e),W=L((()=>(0,o._)("h1",null,"Register",-1))),N={class:"have_account_paragraph"},M=(0,o.Uk)("Already have account? "),H=(0,o.Uk)("Login"),R={key:0,class:"error"},V={key:1,class:"successful"},Z=L((()=>(0,o._)("p",null,[(0,o._)("input",{type:"submit",value:"Sign Up",class:"register"})],-1))),F=(0,o.Uk)("Home");function I(e,n,t,a,i,s){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[W,(0,o._)("div",null,[(0,o._)("p",N,[M,(0,o.Wm)(u,{to:"/login",class:"login"},{default:(0,o.w5)((()=>[H])),_:1})]),(0,o._)("form",{onSubmit:n[2]||(n[2]=(0,r.iM)((e=>s.Register()),["prevent"]))},[i.error?((0,o.wg)(),(0,o.iD)("p",R,"Account with this email already exists!")):(0,o.kq)("",!0),i.successful?((0,o.wg)(),(0,o.iD)("p",V,"Your account has been created successfully, you can now log in!")):(0,o.kq)("",!0),(0,o._)("p",null,[(0,o.wy)((0,o._)("input",{type:"email",placeholder:"email",class:"email",id:"email","onUpdate:modelValue":n[0]||(n[0]=e=>i.login=e),required:""},null,512),[[r.nr,i.login]])]),(0,o._)("p",null,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Password",class:"password",id:"password","onUpdate:modelValue":n[1]||(n[1]=e=>i.password=e),minlength:"8",maxlength:"50",required:""},null,512),[[r.nr,i.password]])]),Z],32),(0,o.Wm)(u,{to:"/",class:"home"},{default:(0,o.w5)((()=>[F])),_:1})])],64)}var Y={data(){return{login:"",password:"",error:!1,successful:!1}},methods:{Register(){const e=JSON.stringify({login:this.login,password:this.password}),n={headers:{"Content-Type":"application/json"}};P().post("api/account/signup",e,n).then((()=>{this.successful=!0,this.error=!1})).catch((e=>{this.error=!0,this.successful=!1,console.log(e.response.status)}))}}};const J=(0,i.Z)(Y,[["render",I],["__scopeId","data-v-f3442a3a"]]);var B=J;const z=[{path:"/",name:"home",component:v},{path:"/about",name:"about",meta:{requiresAuth:!0},component:()=>t.e(443).then(t.bind(t,7381))},{path:"/login",name:"login",component:E},{path:"/register",name:"register",component:B}],G=(0,c.p7)({history:(0,c.PO)("/"),routes:z});var K=G;(0,r.ri)(l).use(K).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"static/js/about.083124b2.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="frontend:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+a){s=p;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=r),e[r]=[o];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var c=u(t)}for(n&&n(r);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9450)}));r=t.O(r)})();
//# sourceMappingURL=app.8d75b2b4.js.map