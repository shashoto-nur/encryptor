(this.webpackJsonpencryptor=this.webpackJsonpencryptor||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(10),s=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},i=(n(15),n(7)),l=n(1),u=n.n(l),p=n(9),d=n(2),f=n(6),b=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.crypto.subtle.importKey("raw",(new TextEncoder).encode(t),{name:"PBKDF2"},!1,["deriveKey"]);case 3:return n=e.sent,r=function(e){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:(new TextEncoder).encode("salt"),iterations:1e3,hash:"SHA-256"},e,{name:"AES-GCM",length:128},!0,["encrypt","decrypt"])}(n),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),alert("An error occured! Please try again...");case 13:case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){return new Promise((function(t,n){try{var r,a=new FileReader;a.readAsArrayBuffer(e),a.onloadend=function(e){if(e.target&&e.target.readyState===FileReader.DONE){var n=e.target.result;r=new Uint8Array(n)}t(r)}}catch(c){console.log(c.message),alert("An error occured! Please try again...")}}))},y=function(){var e=Object(d.a)(u.a.mark((function e(t,n,r){var a,c,s,o,i,l,d,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a={name:"AES-GCM",iv:(new TextEncoder).encode("Initialization Vector")},c=new Uint8Array([n.length].concat(Object(p.a)(n),Object(p.a)(t))),e.t0=r,!e.t0){e.next=8;break}return e.next=7,window.crypto.subtle.encrypt(a,r,c);case 7:e.t0=e.sent;case 8:if(s=e.t0,o=new Uint8Array(s),e.t1=r,!e.t1){e.next=15;break}return e.next=14,window.crypto.subtle.encrypt(a,r,n);case 14:e.t1=e.sent;case 15:return i=e.t1,l=new Uint8Array(i),d=String.fromCharCode.apply(null,[].slice.call(l)),f=btoa(d),e.abrupt("return",{uint8MergedData:o,base64Filename:f});case 22:e.prev=22,e.t2=e.catch(0),console.log(e.t2.message),alert("An error occured! Please try again...");case 26:case 27:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(u.a.mark((function e(t,n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Object(d.a)(u.a.mark((function e(){var a,c,s,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(r);case 2:return a=e.sent,e.next=5,j(t);case 5:return c=e.sent,s=(new TextEncoder).encode(n),e.next=9,y(c,s,a);case 9:(o=e.sent)&&(i=new Blob([o.uint8MergedData],{type:"application/octet-stream"}),Object(f.saveAs)(i,"".concat(o.base64Filename)));case 11:case"end":return e.stop()}}),e)})))()}catch(a){console.log(a.message),alert("An error occured! Please try again...")}case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(e){return new Promise((function(t,n){try{var r=new FileReader;r.readAsArrayBuffer(e),r.onload=function(e){e.target&&t(e.target.result)}}catch(a){console.log(a.message),alert("An error occured! Please try again...")}}))},v=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r,a,c,s,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r={name:"AES-GCM",iv:(new TextEncoder).encode("Initialization Vector")},e.t0=n,!e.t0){e.next=7;break}return e.next=6,window.crypto.subtle.decrypt(r,n,t);case 6:e.t0=e.sent;case 7:if(!(a=e.t0)){e.next=15;break}return c=new Uint8Array(a),s=c[0]+1,o=c.slice(1,s),i=c.slice(s,c.length),l=(new TextDecoder).decode(o),e.abrupt("return",{fileData:i,filename:l});case 15:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(0),console.log(e.t1.message),alert("An error occured! Please try again...");case 22:case 23:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Object(d.a)(u.a.mark((function e(){var r,a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n);case 2:return r=e.sent,e.next=5,x(t);case 5:return a=e.sent,e.next=8,v(a,r);case 8:(c=e.sent)&&(s=new Blob([c.fileData]),Object(f.saveAs)(s,c.filename));case 11:case"end":return e.stop()}}),e)})))()}catch(r){console.log(r.message),alert("An error occured! Please try again...")}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=n(0),w=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("Choose A File"),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(r.useState)("Enter A Passkey"),p=Object(i.a)(u,2),d=p[0],f=p[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:" Encryptor "}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"file",children:"File: "}),Object(O.jsx)("input",{type:"file",id:"file",name:"file",onChange:function(e){var t,n;a((null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files[0])?e.target.files[0]:""),l((null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.files[0])?e.target.files[0].name:"Choose File")}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"key",children:"Passkey: "}),Object(O.jsx)("input",{type:"text",id:"key",name:"key",onChange:function(e){f(e.target.value)},placeholder:d})]}),Object(O.jsx)("input",{type:"button",value:"Encrypt",onClick:function(){""!==n&&"Enter A Passkey"!==d?h(n,o,d):alert("Please provide a file and a passkey in order to encrypt!")}}),Object(O.jsx)("input",{type:"button",value:"Decrypt",onClick:function(){""!==n&&"Enter A Passkey"!==d?g(n,d):alert("Please provide a file and a passkey in order to decrypt!")}})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Instructions:"}),Object(O.jsxs)("ol",{children:[Object(O.jsx)("li",{children:"Select a file."}),Object(O.jsx)("li",{children:"Write any passkey to encrypt/decrypt the file against."}),Object(O.jsx)("li",{children:"Press any of the button to perform the operation you wish to perform."})]}),Object(O.jsx)("p",{children:"Note: Only the passkey used to encrypt a file can be used to decrypt the same."}),Object(O.jsx)("br",{}),"No copyrights \ud83d\ude09"]})},m=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(w,{})})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root")),o()}},[[19,1,2]]]);
//# sourceMappingURL=main.0b963cb2.chunk.js.map