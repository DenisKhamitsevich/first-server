(function(){"use strict";var e={3264:function(e,n,t){var r=t(9242),o=t(3396);function a(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var i=t(89);const u={},s=(0,i.Z)(u,[["render",a]]);var c=s,l=t(2483);const p={class:"home"},d=(0,o._)("h1",null,"Welcome to First Task Server demo application!",-1),f=(0,o.Uk)("Login");function m(e,n){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",p,[d,(0,o.Wm)(t,{to:"/login"},{default:(0,o.w5)((()=>[f])),_:1})])}const v={},g=(0,i.Z)(v,[["render",m]]);var h=g;const b=e=>((0,o.dD)("data-v-2c3b63f6"),e=e(),(0,o.Cn)(),e),w=b((()=>(0,o._)("h1",null,"Login",-1))),y={id:"login"},_={class:"no_account_paragraph"},k=(0,o.Uk)("No account? "),O=(0,o.Uk)("Register"),j=(0,o.uE)('<form data-v-2c3b63f6><p class="email_paragraph" data-v-2c3b63f6>Email</p><input name="email" type="email" class="email" id="email" required data-v-2c3b63f6><p class="password_paragraph" data-v-2c3b63f6>Password</p><input name="password" type="text" class="password" required data-v-2c3b63f6><p data-v-2c3b63f6><input type="submit" class="login" value="Sign In" data-v-2c3b63f6></p></form>',1),S=(0,o.Uk)("Home");function U(e,n){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[w,(0,o._)("div",y,[(0,o._)("p",_,[k,(0,o.Wm)(t,{to:"/register",class:"register"},{default:(0,o.w5)((()=>[O])),_:1})]),j,(0,o.Wm)(t,{to:"/",class:"home register"},{default:(0,o.w5)((()=>[S])),_:1})])],64)}const C={},P=(0,i.Z)(C,[["render",U],["__scopeId","data-v-2c3b63f6"]]);var T=P;const q=e=>((0,o.dD)("data-v-9502561c"),e=e(),(0,o.Cn)(),e),E=q((()=>(0,o._)("h1",null,"Register",-1))),x={class:"have_account_paragraph"},A=(0,o.Uk)("Already have account? "),D=(0,o.Uk)("Login"),W={key:0,class:"error"},L={key:1,class:"successful"},N=q((()=>(0,o._)("p",null,[(0,o._)("input",{type:"submit",value:"Sign Up",class:"register"})],-1))),H=(0,o.Uk)("Home");function M(e,n,t,a,i,u){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[E,(0,o._)("div",null,[(0,o._)("p",x,[A,(0,o.Wm)(s,{to:"/login",class:"login"},{default:(0,o.w5)((()=>[D])),_:1})]),i.error?((0,o.wg)(),(0,o.iD)("p",W,"Account with this email already exists!")):(0,o.kq)("",!0),i.successful?((0,o.wg)(),(0,o.iD)("p",L,"Your account has been created successfully, you can now log in!")):(0,o.kq)("",!0),(0,o._)("form",{onSubmit:n[2]||(n[2]=(0,r.iM)((e=>u.Register()),["prevent"]))},[(0,o._)("p",null,[(0,o.wy)((0,o._)("input",{type:"email",placeholder:"email",class:"email",id:"email","onUpdate:modelValue":n[0]||(n[0]=e=>i.login=e),required:""},null,512),[[r.nr,i.login]])]),(0,o._)("p",null,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Password",class:"password",id:"password","onUpdate:modelValue":n[1]||(n[1]=e=>i.password=e),pattern:"({8,16}",required:""},null,512),[[r.nr,i.password]])]),N],32),(0,o.Wm)(s,{to:"/",class:"home"},{default:(0,o.w5)((()=>[H])),_:1})])],64)}var R=t(6265),Z=t.n(R),F={data(){return{login:"",password:"",error:!1,successful:!1}},methods:{Register(){const e=JSON.stringify({login:this.login,password:this.password}),n={headers:{"Content-Type":"application/json"}};Z().post("api/account/signup",e,n).then((()=>{this.successful=!0,this.error=!1})).catch((e=>{this.error=!0,this.successful=!1,console.log(e.response.status)}))}}};const I=(0,i.Z)(F,[["render",M],["__scopeId","data-v-9502561c"]]);var Y=I;const V=[{path:"/",name:"home",component:h},{path:"/about",name:"about",meta:{requiresAuth:!0},component:()=>t.e(443).then(t.bind(t,7381))},{path:"/login",name:"login",component:T},{path:"/register",name:"register",component:Y}],B=(0,l.p7)({history:(0,l.PO)("/"),routes:V});var J=B;(0,r.ri)(c).use(J).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"static/js/about.97e4b332.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="frontend:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+a){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var l=s(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3264)}));r=t.O(r)})();
//# sourceMappingURL=app.980bdf38.js.map