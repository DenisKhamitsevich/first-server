(function(){"use strict";var e={2099:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var i=n(89);const u={},c=(0,i.Z)(u,[["render",a]]);var s=c,l=n(2483);const d={class:"home"},p=(0,o._)("h1",null,"Welcome to First Task Server demo application!",-1),f=(0,o.Uk)("Login");function m(e,t){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",d,[p,(0,o.Wm)(n,{to:"/login"},{default:(0,o.w5)((()=>[f])),_:1})])}const v={},g=(0,i.Z)(v,[["render",m]]);var h=g;const b={id:"login"},_={class:"no_account_paragraph"},w=(0,o.Uk)("No account? "),y=(0,o.Uk)("Register"),k=(0,o.uE)('<form data-v-c199cae0><p class="email_paragraph" data-v-c199cae0>Email</p><input name="email" type="email" class="email" id="email" required data-v-c199cae0><p class="password_paragraph" data-v-c199cae0>Password</p><input name="password" type="text" class="password" required data-v-c199cae0><p data-v-c199cae0><input type="submit" class="login" value="Sign In" data-v-c199cae0></p></form>',1),O=(0,o.Uk)("Home");function j(e,t){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("p",_,[w,(0,o.Wm)(n,{to:"/register",class:"register"},{default:(0,o.w5)((()=>[y])),_:1})]),k,(0,o.Wm)(n,{to:"/",class:"home register"},{default:(0,o.w5)((()=>[O])),_:1})])}const P={},E=(0,i.Z)(P,[["render",j],["__scopeId","data-v-c199cae0"]]);var S=E;const T=(0,o.Uk)("Already have account?"),q=(0,o._)("form",null,[(0,o._)("input",{type:"text",placeholder:"Full name",class:"input_data",id:"name",name:"name",required:""}),(0,o._)("input",{type:"email",placeholder:"email",class:"input_data",id:"email",name:"email",required:""}),(0,o._)("input",{type:"text",placeholder:"Password",class:"input_data",id:"password",name:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}",required:""}),(0,o._)("input",{type:"submit",value:"Sign Up",class:"sign_up_button",id:"sign_up_button_value"})],-1),x=(0,o.Uk)("Home");function A(e,t){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(n,{to:"/login"},{default:(0,o.w5)((()=>[T])),_:1}),q,(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[x])),_:1})])}const U={},C=(0,i.Z)(U,[["render",A]]);var W=C;const Z=[{path:"/",name:"home",component:h},{path:"/about",name:"about",meta:{requiresAuth:!0},component:()=>n.e(443).then(n.bind(n,7381))},{path:"/login",name:"login",component:S},{path:"/register",name:"register",component:W}],F=(0,l.p7)({history:(0,l.PO)("/"),routes:Z});var N=F;(0,r.ri)(s).use(N).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/about.7035dbcb.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2099)}));r=n.O(r)})();
//# sourceMappingURL=app.8d3b0f54.js.map