(function(){"use strict";var n={3725:function(n,e,t){var r=t(9242),o=t(3396);function a(n,e){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var i=t(89);const u={},s=(0,i.Z)(u,[["render",a]]);var c=s,l=t(2483);const p={class:"home"},d=(0,o._)("h1",null,"Welcome to First Task Server demo application!",-1),f=(0,o.Uk)("Login");function m(n,e){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",p,[d,(0,o.Wm)(t,{to:"/login"},{default:(0,o.w5)((()=>[f])),_:1})])}const g={},v=(0,i.Z)(g,[["render",m]]);var h=v;const b=n=>((0,o.dD)("data-v-2c3b63f6"),n=n(),(0,o.Cn)(),n),w=b((()=>(0,o._)("h1",null,"Login",-1))),y={id:"login"},_={class:"no_account_paragraph"},k=(0,o.Uk)("No account? "),O=(0,o.Uk)("Register"),j=(0,o.uE)('<form data-v-2c3b63f6><p class="email_paragraph" data-v-2c3b63f6>Email</p><input name="email" type="email" class="email" id="email" required data-v-2c3b63f6><p class="password_paragraph" data-v-2c3b63f6>Password</p><input name="password" type="text" class="password" required data-v-2c3b63f6><p data-v-2c3b63f6><input type="submit" class="login" value="Sign In" data-v-2c3b63f6></p></form>',1),S=(0,o.Uk)("Home");function U(n,e){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[w,(0,o._)("div",y,[(0,o._)("p",_,[k,(0,o.Wm)(t,{to:"/register",class:"register"},{default:(0,o.w5)((()=>[O])),_:1})]),j,(0,o.Wm)(t,{to:"/",class:"home register"},{default:(0,o.w5)((()=>[S])),_:1})])],64)}const C={},P=(0,i.Z)(C,[["render",U],["__scopeId","data-v-2c3b63f6"]]);var T=P;const E=n=>((0,o.dD)("data-v-a4277480"),n=n(),(0,o.Cn)(),n),q=E((()=>(0,o._)("h1",null,"Register",-1))),x={class:"have_account_paragraph"},A=(0,o.Uk)("Already have account? "),D=(0,o.Uk)("Login"),W={key:0},L=E((()=>(0,o._)("p",null,[(0,o._)("input",{type:"submit",value:"Sign Up",class:"register"})],-1))),N=(0,o.Uk)("Home");function H(n,e,t,a,i,u){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[q,(0,o._)("div",null,[(0,o._)("p",x,[A,(0,o.Wm)(s,{to:"/login",class:"login"},{default:(0,o.w5)((()=>[D])),_:1})]),i.error?((0,o.wg)(),(0,o.iD)("p",W,"Stupid nigga!")):(0,o.kq)("",!0),(0,o._)("form",{onSubmit:e[2]||(e[2]=n=>u.Register())},[(0,o._)("p",null,[(0,o.wy)((0,o._)("input",{type:"email",placeholder:"email",class:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=n=>i.login=n),required:""},null,512),[[r.nr,i.login]])]),(0,o._)("p",null,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Password",class:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=n=>i.password=n),pattern:"({8,16}",required:""},null,512),[[r.nr,i.password]])]),L],32),(0,o.Wm)(s,{to:"/",class:"home"},{default:(0,o.w5)((()=>[N])),_:1})])],64)}var R=t(6265),Z=t.n(R),F={data(){return{login:"",password:"",error:""}},methods:{Register(){const n=JSON.stringify({login:this.login,password:this.password}),e={headers:{"Content-Type":"application/json"}};Z().post("api/account/signup",n,e).then((function(n){this.$router.push("/login"),console.log(n)})).catch((function(n){console.log(n)}))}}};const I=(0,i.Z)(F,[["render",H],["__scopeId","data-v-a4277480"]]);var M=I;const V=[{path:"/",name:"home",component:h},{path:"/about",name:"about",meta:{requiresAuth:!0},component:()=>t.e(443).then(t.bind(t,7381))},{path:"/login",name:"login",component:T},{path:"/register",name:"register",component:M}],Y=(0,l.p7)({history:(0,l.PO)("/"),routes:V});var B=Y;(0,r.ri)(c).use(B).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){n.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"static/js/about.97e4b332.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="frontend:";t.l=function(r,o,a,i){if(n[r])n[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+a){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+a),u.src=r),n[r]=[o];var d=function(e,t){u.onerror=u.onload=null,clearTimeout(f);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(t)})),e)return e(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(e),u=new Error,s=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var l=s(t)}for(e&&e(r);c<i.length;c++)a=i[c],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3725)}));r=t.O(r)})();
//# sourceMappingURL=app.a1b2bbf8.js.map