(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>A});var r=t(648),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Urbanist:wght@200;300;400;500;900&display=swap);"]),i.push([n.id,"body {\n    margin: 0;\n    background-color: var(--accent-color);\n    height: 100vh;\n}\n\n::-webkit-scrollbar{\n    width:0;\n}\n\n:root{\n    --bg-color: whitesmoke;\n    --bg-window-color: #CBCCFF;\n    --accent-color: #5B63B7 ;\n    --choose-color: #9296F0;\n    --wrong-input-outline-color: rgb(247, 91, 91);\n    --correct-input-outline-color: rgb(121, 230, 121);\n    --urgent-color: #ffec70;\n    --normal-color:hotpink;\n    --longterm-color:#65baff;\n}\n\nmain {\n    margin:0;\n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n#logo{\n    font-weight: bold;\n    font-family: 'Urbanist', sans-serif;\n    font-weight: 900;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n    background-color: var(--accent-color);\n    color: black;\n    font-family: 'Urbanist', sans-serif;\n    font-weight:300;\n}\n\n#add-btn {\n    display: block;\n    position: fixed;\n    bottom: 5vh;\n    right: 5vw;\n    width: 10vh;\n    aspect-ratio: 1/1;\n    background-color: black;\n    color: white;\n    border: none;\n    border-radius: 50%;\n    font-size: large;\n    font-weight: bold;\n    align-items: center;\n    justify-content: center;\n}\n\n#add-btn:hover {\n    outline: solid white 1px;\n}\n\n#add-window{\n    display: none;\n    position:fixed;\n    bottom:15vh;\n    right:5vw;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width:50vw;\n    max-width: 200px;\n    height: 20vh;\n    background-color: var(--bg-window-color);\n    color: black;\n    border:none;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n#add-window.active{\n    display:flex;\n}\n\n#task-btn, #paper-btn{\n    display: flex;\n    width:100%;\n    color:black;\n    background-color: transparent;\n    height: 50%;\n    align-items: center;\n    justify-content:center;\n    text-align: center;\n    font-family: 'Urbanist', sans-serif;\n    font-weight: 500;\n}\n\n#task-btn:hover, #paper-btn:hover{\n    background-color: var(--choose-color);\n    color:white;\n}\n\n#create-btn{\n    color: black;\n    background-color: var(--accent-color);\n    width:30%;\n    height:10%;\n    border:none;\n    border-radius: 5px;\n    font-family: 'Urbanist', sans-serif;\n    font-weight: 500;\n}\n\n#display{\n    width:70vw;\n    height:100vh;\n    border:none;\n    background-color: whitesmoke;\n    z-index: 0;\n}\n\n#sidebar{\n    width:30vw;\n    height:100vh;\n    background-color: whitesmoke;\n    box-shadow: 5px 0px 5px rgb(167, 167, 167);\n    z-index: 1;\n}\n\n#project-window,\n#task-window {\n    display: none;\n    position: relative;\n    justify-content: last baseline;\n    padding-bottom: 3%;\n    padding-left: 3%;\n    padding-right: 3%;\n    flex-direction: column;\n    gap: 0;\n    align-items: center;\n    background-color: var(--bg-window-color);\n    color:black;\n    width: 50vw;\n    max-width: fit-content;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    border:none;\n    border-radius: 10px;\n}\n\n#task-window-header {\n    font-weight: 900;\n    font-family: 'Urbanist';\n    color: black;\n}\n\n\n\n#project-window {\n    justify-content: space-between;\n}\n\n#project-window.active, #task-window.active {\n    display:flex;\n    z-index: 1;\n}\n\n.categories{\n    width:90%;\n    display: flex;\n    flex-direction: column;\n    gap:10%;\n    font-family: 'Urbanist', sans-serif;\n    font-weight: 500;\n    color: black;\n    text-align: center;\n}\n\n#task-title, #notes, #dealine, #project-title {\n    margin: 10px;\n    border: none;\n    border-radius: 5px;\n    height: 15%;\n}\n\n#task-title:valid, #notes:valid, #dealine:valid {\n    outline: var(--correct-input-outline-color);\n}\n\n[class ^= \"task-\"].category{\n    font-family: 'Urbanist', sans-serif;\n    font-weight: 500;\n}\n\n#urgent, #longterm, #normal{\n    width:90%;\n    border: solid transparent 2px;\n    text-align: center;\n    color:black;\n}\n\n#urgent.active{\n    border:solid white 2px;\n    border-radius: 7px;\n    background-color: var(--urgent-color);\n}\n\n#normal.active{\n    border:solid white 2px;\n    border-radius: 7px;\n    background-color: var(--normal-color);\n}\n\n#longterm.active{\n    border:solid white 2px;\n    border-radius: 7px;\n    background-color: var(--longterm-color);\n}\n\n[class^=\"project-\"] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    border: solid lightgray 1px;\n    position: relative;\n    font-weight: 400;\n    font-family: 'Urbanist';\n    color: black;\n}\n\n.delete-project-btn, #exit-task-window, #exit-project-window {\n    width: 10px;\n    height: 10px;\n    font-size: small;\n    font-family: Arial, Helvetica, sans-serif;\n    color: grey;\n    text-align: center;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    border:none;\n    background-color: transparent;\n}\n\n#tasks-container{\n    height:80vh;\n    overflow: scroll;\n}\n\n#project-header {\n    margin-left: 5%;\n    font-weight: 900;\n    font-family: 'Urbanist';\n}\n\n#date-display {\n    margin-left: 5%;\n    font-weight: 400;\n    font-family: 'Urbanist';\n    color: grey;\n}\n\n[class^=\"task-\"] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: 0px 5px 5px rgba(167, 167, 167, 0.402);\n    width: 100%;\n    overflow: hidden;\n    margin-bottom: 10px;\n    padding:5%;\n}\n\n.title{\n    font-family: 'Urbanist', sans-serif;\n    font-weight: 500;\n}\n\n.category {\n    font-family: 'Urbanist';\n    font-weight: 400;\n    width: 20%;\n    text-align: center;\n}\n\n.btn-container {\n    display:flex;\n    justify-content: space-between;\n    width: 50%;\n}\n\n.complete-task-btn, .delete-task-btn, #create-task-btn, #create-project-btn {\n    color: white;\n    background-color: var(--accent-color);\n    border: none;\n    border-radius: 7px;\n    width: 40%;\n    margin: 10px;\n    aspect-ratio: 3/1;\n}\n\n.deadline {\n    font-size: 14px;\n    font-weight: 300;\n    font-family: 'Urbanist';\n    color: grey;\n}\n\n.notes {\n    font-weight: 400;\n    font-family: 'Urbanist';\n    color: black;\n}\n\n.completed {\n    opacity: 70%;\n}\n\n#delete-all-btn {\n    background-color: black;\n    color:white;\n    width: 100%;\n    height: 5%;\n    border:none;\n}\n\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["body {\r\n    margin: 0;\r\n    background-color: var(--accent-color);\r\n    height: 100vh;\r\n}\r\n\r\n::-webkit-scrollbar{\r\n    width:0;\r\n}\r\n\r\n:root{\r\n    --bg-color: whitesmoke;\r\n    --bg-window-color: #CBCCFF;\r\n    --accent-color: #5B63B7 ;\r\n    --choose-color: #9296F0;\r\n    --wrong-input-outline-color: rgb(247, 91, 91);\r\n    --correct-input-outline-color: rgb(121, 230, 121);\r\n    --urgent-color: #ffec70;\r\n    --normal-color:hotpink;\r\n    --longterm-color:#65baff;\r\n}\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;300;400;500;900&display=swap');\r\n\r\nmain {\r\n    margin:0;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#logo{\r\n    font-weight: bold;\r\n    font-family: 'Urbanist', sans-serif;\r\n    font-weight: 900;\r\n}\r\n\r\n#footer {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 10vh;\r\n    background-color: var(--accent-color);\r\n    color: black;\r\n    font-family: 'Urbanist', sans-serif;\r\n    font-weight:300;\r\n}\r\n\r\n#add-btn {\r\n    display: block;\r\n    position: fixed;\r\n    bottom: 5vh;\r\n    right: 5vw;\r\n    width: 10vh;\r\n    aspect-ratio: 1/1;\r\n    background-color: black;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 50%;\r\n    font-size: large;\r\n    font-weight: bold;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#add-btn:hover {\r\n    outline: solid white 1px;\r\n}\r\n\r\n#add-window{\r\n    display: none;\r\n    position:fixed;\r\n    bottom:15vh;\r\n    right:5vw;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width:50vw;\r\n    max-width: 200px;\r\n    height: 20vh;\r\n    background-color: var(--bg-window-color);\r\n    color: black;\r\n    border:none;\r\n    overflow: hidden;\r\n    border-radius: 10px;\r\n}\r\n\r\n#add-window.active{\r\n    display:flex;\r\n}\r\n\r\n#task-btn, #paper-btn{\r\n    display: flex;\r\n    width:100%;\r\n    color:black;\r\n    background-color: transparent;\r\n    height: 50%;\r\n    align-items: center;\r\n    justify-content:center;\r\n    text-align: center;\r\n    font-family: 'Urbanist', sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\n#task-btn:hover, #paper-btn:hover{\r\n    background-color: var(--choose-color);\r\n    color:white;\r\n}\r\n\r\n#create-btn{\r\n    color: black;\r\n    background-color: var(--accent-color);\r\n    width:30%;\r\n    height:10%;\r\n    border:none;\r\n    border-radius: 5px;\r\n    font-family: 'Urbanist', sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\n#display{\r\n    width:70vw;\r\n    height:100vh;\r\n    border:none;\r\n    background-color: whitesmoke;\r\n    z-index: 0;\r\n}\r\n\r\n#sidebar{\r\n    width:30vw;\r\n    height:100vh;\r\n    background-color: whitesmoke;\r\n    box-shadow: 5px 0px 5px rgb(167, 167, 167);\r\n    z-index: 1;\r\n}\r\n\r\n#project-window,\r\n#task-window {\r\n    display: none;\r\n    position: relative;\r\n    justify-content: last baseline;\r\n    padding-bottom: 3%;\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    flex-direction: column;\r\n    gap: 0;\r\n    align-items: center;\r\n    background-color: var(--bg-window-color);\r\n    color:black;\r\n    width: 50vw;\r\n    max-width: fit-content;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    z-index: 2;\r\n    border:none;\r\n    border-radius: 10px;\r\n}\r\n\r\n#task-window-header {\r\n    font-weight: 900;\r\n    font-family: 'Urbanist';\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n#project-window {\r\n    justify-content: space-between;\r\n}\r\n\r\n#project-window.active, #task-window.active {\r\n    display:flex;\r\n    z-index: 1;\r\n}\r\n\r\n.categories{\r\n    width:90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:10%;\r\n    font-family: 'Urbanist', sans-serif;\r\n    font-weight: 500;\r\n    color: black;\r\n    text-align: center;\r\n}\r\n\r\n#task-title, #notes, #dealine, #project-title {\r\n    margin: 10px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    height: 15%;\r\n}\r\n\r\n#task-title:valid, #notes:valid, #dealine:valid {\r\n    outline: var(--correct-input-outline-color);\r\n}\r\n\r\n[class ^= \"task-\"].category{\r\n    font-family: 'Urbanist', sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\n#urgent, #longterm, #normal{\r\n    width:90%;\r\n    border: solid transparent 2px;\r\n    text-align: center;\r\n    color:black;\r\n}\r\n\r\n#urgent.active{\r\n    border:solid white 2px;\r\n    border-radius: 7px;\r\n    background-color: var(--urgent-color);\r\n}\r\n\r\n#normal.active{\r\n    border:solid white 2px;\r\n    border-radius: 7px;\r\n    background-color: var(--normal-color);\r\n}\r\n\r\n#longterm.active{\r\n    border:solid white 2px;\r\n    border-radius: 7px;\r\n    background-color: var(--longterm-color);\r\n}\r\n\r\n[class^=\"project-\"] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 10%;\r\n    text-align: center;\r\n    border: solid lightgray 1px;\r\n    position: relative;\r\n    font-weight: 400;\r\n    font-family: 'Urbanist';\r\n    color: black;\r\n}\r\n\r\n.delete-project-btn, #exit-task-window, #exit-project-window {\r\n    width: 10px;\r\n    height: 10px;\r\n    font-size: small;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: grey;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n    border:none;\r\n    background-color: transparent;\r\n}\r\n\r\n#tasks-container{\r\n    height:80vh;\r\n    overflow: scroll;\r\n}\r\n\r\n#project-header {\r\n    margin-left: 5%;\r\n    font-weight: 900;\r\n    font-family: 'Urbanist';\r\n}\r\n\r\n#date-display {\r\n    margin-left: 5%;\r\n    font-weight: 400;\r\n    font-family: 'Urbanist';\r\n    color: grey;\r\n}\r\n\r\n[class^=\"task-\"] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    box-shadow: 0px 5px 5px rgba(167, 167, 167, 0.402);\r\n    width: 100%;\r\n    overflow: hidden;\r\n    margin-bottom: 10px;\r\n    padding:5%;\r\n}\r\n\r\n.title{\r\n    font-family: 'Urbanist', sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\n.category {\r\n    font-family: 'Urbanist';\r\n    font-weight: 400;\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.btn-container {\r\n    display:flex;\r\n    justify-content: space-between;\r\n    width: 50%;\r\n}\r\n\r\n.complete-task-btn, .delete-task-btn, #create-task-btn, #create-project-btn {\r\n    color: white;\r\n    background-color: var(--accent-color);\r\n    border: none;\r\n    border-radius: 7px;\r\n    width: 40%;\r\n    margin: 10px;\r\n    aspect-ratio: 3/1;\r\n}\r\n\r\n.deadline {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    font-family: 'Urbanist';\r\n    color: grey;\r\n}\r\n\r\n.notes {\r\n    font-weight: 400;\r\n    font-family: 'Urbanist';\r\n    color: black;\r\n}\r\n\r\n.completed {\r\n    opacity: 70%;\r\n}\r\n\r\n#delete-all-btn {\r\n    background-color: black;\r\n    color:white;\r\n    width: 100%;\r\n    height: 5%;\r\n    border:none;\r\n}\r\n\r\n"],sourceRoot:""}]);const A=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},648:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],l=r.base?c[0]+r.base:c[0],s=a[l]||0,d="".concat(l," ").concat(s);a[l]=s+1;var g=t(d),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==g)e[g].references++,e[g].updater(C);else{var m=o(C,r);r.byIndex=A,e.splice(A,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=r(n,o),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),o=t.n(r),a=t(176),i=t.n(a),A=t(120),c=t.n(A),l=t(808),s=t.n(l),d=t(936),g=t.n(d),C=t(904),m={};m.styleTagTransform=g(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(C.c,m),C.c&&C.c.locals&&C.c.locals;var p,u=new Uint8Array(16);function f(){if(!p&&!(p="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(u)}const B=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var I=[],h=0;h<256;++h)I.push((h+256).toString(16).substr(1));const b=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(I[n[e+0]]+I[n[e+1]]+I[n[e+2]]+I[n[e+3]]+"-"+I[n[e+4]]+I[n[e+5]]+"-"+I[n[e+6]]+I[n[e+7]]+"-"+I[n[e+8]]+I[n[e+9]]+"-"+I[n[e+10]]+I[n[e+11]]+I[n[e+12]]+I[n[e+13]]+I[n[e+14]]+I[n[e+15]]).toLowerCase();if(!function(n){return"string"==typeof n&&B.test(n)}(t))throw TypeError("Stringified UUID is invalid");return t},w=function(n,e,t){var r=(n=n||{}).random||(n.rng||f)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=r[o];return e}return b(r)},v=(n,e,t,r,o,a)=>{const i={normal:"var(--normal-color)",urgent:"var(--urgent-color)",longterm:"var(--longterm-color)"},A=(()=>{const A=document.createElement("div");A.id=n||w(),A.className="task-"+A.id,A.date=r instanceof Date?r:new Date,A.deadline=a instanceof Date?a:new Date,A.category=o||"normal",A.title=e,A.notes=t;const c=document.createElement("div"),l=document.createElement("h3");l.className="title",l.textContent=e;const s=document.createElement("h4");s.className="category",s.textContent=A.category,s.style.backgroundColor=i[A.category];const d=document.createElement("p");d.className="deadline",d.textContent="Deadline: "+A.deadline.toDateString();const g=document.createElement("p");g.className="notes",g.textContent=t,document.createElement("p").textContent=A.date.toDateString(),c.appendChild(l),c.appendChild(s),c.appendChild(d),c.appendChild(g);const C=document.createElement("div");C.className="btn-container";const m=document.createElement("button");m.className="complete-task-btn",m.textContent="Done",m.addEventListener("click",(()=>{A.classList.add("completed"),m.disabled=!0}));const p=document.createElement("button");return p.textContent="Delete",p.className="delete-task-btn",p.addEventListener("click",(()=>{y(A)})),C.appendChild(m),C.appendChild(p),A.appendChild(c),A.appendChild(C),A})();return{id:A.id,title:A.title,notes:A.notes,date:A.date,category:A.category,deadline:A.deadline,element:A}},y=n=>{const e=document.getElementById("tasks-container"),t=JSON.parse(localStorage.getItem("projects"))||[],r=t.find((n=>n.id===k)),o=r.tasks.findIndex((e=>e.id===n.id));if(-1!==o){r.tasks.splice(o,1),localStorage.setItem("projects",JSON.stringify(t));const a=document.querySelector(".task-"+n.id);e.removeChild(a)}else console.log("Error: task is not found")};let k=null;const x=(n,e,t,r)=>{const o=(()=>{const o=document.createElement("div");o.id=n||uuidv4(),o.className="project-"+o.id,o.textContent=e,o.title=e,o.date=r instanceof Date?r:new Date,o.tasks=t||[];const a=document.createElement("div");return a.innerHTML="x",a.className="delete-project-btn",a.addEventListener("click",(n=>{n.stopPropagation(),E(o.id)})),o.append(a),o})();return{id:o.id,title:e,date:o.date,tasks:o.tasks,element:o}},E=n=>{const e=document.getElementById("project-header"),t=document.getElementById("date-display"),r=JSON.parse(localStorage.getItem("projects"))||[],o=r.findIndex((e=>e.id===n));if(-1!==o){r.splice(o,1),localStorage.setItem("projects",JSON.stringify(r));const a=document.getElementById("sidebar"),i=document.querySelector(".project-"+n);i&&(a.removeChild(i),k=null,console.log("Success: deleted project with ID: "+n)),console.log(r),e.textContent="",t.textContent=""}},j=n=>{const e=document.getElementById("project-header"),t=document.getElementById("date-display"),r=document.getElementById("tasks-container");r.innerHTML="";const o=JSON.parse(localStorage.getItem("projects")).find((e=>e.id===n));e.textContent=o.title.trim(),t.textContent="Creation date: "+new Date(o.date).toUTCString(),o.tasks.forEach((n=>{const e=v(n.id,n.title,n.notes,n.date,n.category,n.deadline);r.appendChild(e.element)}))};document.getElementById("delete-all-btn").addEventListener("click",(()=>{(()=>{localStorage.removeItem("projects");const n=document.getElementById("project-header"),e=document.getElementById("date-display"),t=document.getElementById("tasks-container"),r=document.getElementById("sidebar");document.querySelectorAll('[class^="project"]').forEach((o=>{r.removeChild(o),n.textContent="",e.textContent="",t.innerHTML=""})),k=null,console.log("Success: local storage is clear now"),console.log("Success: sidebar is clear now")})()})),(()=>{const n=document.getElementById("add-window"),e=document.getElementById("task-btn"),t=document.getElementById("paper-btn"),r=()=>{n.classList.remove("active"),document.getElementById("task-window").classList.add("active")};e.removeEventListener("click",r),e.addEventListener("click",r),t.addEventListener("click",(()=>{n.classList.remove("active"),document.getElementById("project-window").classList.add("active")}))})(),(()=>{const n=document.getElementById("add-window");document.getElementById("add-btn").addEventListener("click",(()=>{n.classList.add("active"),console.log("Open add window")}))})(),(()=>{const n=document.getElementById("task-window"),e=document.getElementById("task-title"),t=document.getElementById("notes"),r=document.getElementById("urgent"),o=document.getElementById("normal"),a=document.getElementById("longterm"),i=document.getElementById("deadline");o.classList.add("active");let A="normal";const c=n=>{A=n,r.classList.toggle("active","urgent"===A),o.classList.toggle("active","normal"===A),a.classList.toggle("active","longterm"===A)};r.addEventListener("click",(()=>c("urgent"))),o.addEventListener("click",(()=>c("normal"))),a.addEventListener("click",(()=>c("longterm")));const l=document.getElementById("create-task-btn"),s=()=>{const r=v(w(),e.value.trim(),t.value.trim(),new Date,A,new Date(i.value));((n,e)=>{if(!n)return void window.alert("Choose a project first or create a new one");const t=document.getElementById("tasks-container"),r=JSON.parse(localStorage.getItem("projects"))||[],o=r.findIndex((e=>e.id===n));if(-1!==o){const n=r[o],a=n.tasks,i=a.findIndex((n=>n.title===e.title));if(a.length>10)return void window.alert("Error: no task can be created. You have overcome limit of 10");-1===i&&(n.tasks.push({id:e.id,title:e.title,notes:e.notes,date:e.date,category:e.category,deadline:e.deadline}),t.appendChild(e.element),localStorage.setItem("projects",JSON.stringify(r)))}})(k,r),n.classList.remove("active")};l.removeEventListener("click",s),l.addEventListener("click",s),document.getElementById("exit-task-window").addEventListener("click",(()=>{n.classList.remove("active"),console.log("Task window is closed"),e.value="",t.value="",i.value="",A="normal"}))})(),(()=>{const n=document.getElementById("project-window");document.getElementById("exit-project-window").addEventListener("click",(()=>{n.classList.remove("active"),console.log("Project window is closed")}));const e=document.getElementById("project-title");document.getElementById("create-project-btn").addEventListener("click",(()=>{const t=x(w(),e.value.trim(),[],new Date);t.element.classList.add("project-obj"),(n=>{if(""===n.title)return void window.alert("Error: no project can be created");const e=document.getElementById("sidebar"),t=JSON.parse(localStorage.getItem("projects"))||[],r=t.findIndex((e=>e.title===n.title));console.log(t),t.length>15?window.alert("Error: no project can be created. You have overcome limit of 15 projects"):-1===r&&(t.push({id:n.id,title:n.title,date:n.date.toJSON(),tasks:n.tasks}),localStorage.setItem("projects",JSON.stringify(t)),e.appendChild(n.element))})(t),n.classList.remove("active")}))})(),document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("sidebar").addEventListener("click",(n=>{"delete-all-btn"===n.target.id&&console.log("Delete all projects clicked"),n.target.className&&n.target.className.includes("project-")&&(j(n.target.id),k=n.target.id)})),(()=>{const n=JSON.parse(localStorage.getItem("projects"))||[],e=document.getElementById("sidebar");console.log(n),n.length>0&&n.forEach((n=>{const t=x(n.id,n.title,n.tasks,new Date(n.date));e.appendChild(t.element),null===k&&(j(t.id),k=t.id,console.log("Info: current project ID: "+k))}))})()}))})()})();
//# sourceMappingURL=index.bundle.js.map