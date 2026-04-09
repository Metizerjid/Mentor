import{o as br}from"./vendor-idb-Bn1DMRyg.js";const Di=()=>{};var or={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=function(n){const r=[];let s=0;for(let a=0;a<n.length;a++){let c=n.charCodeAt(a);c<128?r[s++]=c:c<2048?(r[s++]=c>>6|192,r[s++]=c&63|128):(c&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(n.charCodeAt(++a)&1023),r[s++]=c>>18|240,r[s++]=c>>12&63|128,r[s++]=c>>6&63|128,r[s++]=c&63|128):(r[s++]=c>>12|224,r[s++]=c>>6&63|128,r[s++]=c&63|128)}return r},ki=function(n){const r=[];let s=0,a=0;for(;s<n.length;){const c=n[s++];if(c<128)r[a++]=String.fromCharCode(c);else if(c>191&&c<224){const v=n[s++];r[a++]=String.fromCharCode((c&31)<<6|v&63)}else if(c>239&&c<365){const v=n[s++],b=n[s++],w=n[s++],A=((c&7)<<18|(v&63)<<12|(b&63)<<6|w&63)-65536;r[a++]=String.fromCharCode(55296+(A>>10)),r[a++]=String.fromCharCode(56320+(A&1023))}else{const v=n[s++],b=n[s++];r[a++]=String.fromCharCode((c&15)<<12|(v&63)<<6|b&63)}}return r.join("")},Sr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,r){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<n.length;c+=3){const v=n[c],b=c+1<n.length,w=b?n[c+1]:0,A=c+2<n.length,T=A?n[c+2]:0,C=v>>2,k=(v&3)<<4|w>>4;let S=(w&15)<<2|T>>6,O=T&63;A||(O=64,b||(S=64)),a.push(s[C],s[k],s[S],s[O])}return a.join("")},encodeString(n,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(n):this.encodeByteArray(Er(n),r)},decodeString(n,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(n):ki(this.decodeStringToByteArray(n,r))},decodeStringToByteArray(n,r){this.init_();const s=r?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<n.length;){const v=s[n.charAt(c++)],w=c<n.length?s[n.charAt(c)]:0;++c;const T=c<n.length?s[n.charAt(c)]:64;++c;const k=c<n.length?s[n.charAt(c)]:64;if(++c,v==null||w==null||T==null||k==null)throw new Ri;const S=v<<2|w>>4;if(a.push(S),T!==64){const O=w<<4&240|T>>2;if(a.push(O),k!==64){const I=T<<6&192|k;a.push(I)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ri extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ni=function(n){const r=Er(n);return Sr.encodeByteArray(r,!0)},ue=function(n){return Ni(n).replace(/\./g,"")},Pi=function(n){try{return Sr.decodeString(n,!0)}catch(r){console.error("base64Decode failed: ",r)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=()=>xi().__FIREBASE_DEFAULTS__,ji=()=>{if(typeof process>"u"||typeof or>"u")return;const n=or.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const r=n&&Pi(n[1]);return r&&JSON.parse(r)},de=()=>{try{return Di()||Mi()||ji()||Bi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Li=n=>{var r,s;return(s=(r=de())===null||r===void 0?void 0:r.emulatorHosts)===null||s===void 0?void 0:s[n]},Hi=n=>{const r=Li(n);if(!r)return;const s=r.lastIndexOf(":");if(s<=0||s+1===r.length)throw new Error(`Invalid host ${r} with no separate hostname and port!`);const a=parseInt(r.substring(s+1),10);return r[0]==="["?[r.substring(1,s-1),a]:[r.substring(0,s),a]},Tr=()=>{var n;return(n=de())===null||n===void 0?void 0:n.config},Ta=n=>{var r;return(r=de())===null||r===void 0?void 0:r[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((r,s)=>{this.resolve=r,this.reject=s})}wrapCallback(r){return(s,a)=>{s?this.reject(s):this.resolve(a),typeof r=="function"&&(this.promise.catch(()=>{}),r.length===1?r(s):r(s,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $i(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,r){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},a=r||"demo-project",c=n.iat||0,v=n.sub||n.user_id;if(!v)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const b=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:c,exp:c+3600,auth_time:c,sub:v,user_id:v,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ue(JSON.stringify(s)),ue(JSON.stringify(b)),""].join(".")}const Ft={};function Ui(){const n={prod:[],emulator:[]};for(const r of Object.keys(Ft))Ft[r]?n.emulator.push(r):n.prod.push(r);return n}function Vi(n){let r=document.getElementById(n),s=!1;return r||(r=document.createElement("div"),r.setAttribute("id",n),s=!0),{created:s,element:r}}let ar=!1;function zi(n,r){if(typeof window>"u"||typeof document>"u"||!Ar(window.location.host)||Ft[n]===r||Ft[n]||ar)return;Ft[n]=r;function s(S){return`__firebase__banner__${S}`}const a="__firebase__banner",v=Ui().prod.length>0;function b(){const S=document.getElementById(a);S&&S.remove()}function w(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function A(S,O){S.setAttribute("width","24"),S.setAttribute("id",O),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function T(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{ar=!0,b()},S}function C(S,O){S.setAttribute("id",O),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function k(){const S=Vi(a),O=s("text"),I=document.getElementById(O)||document.createElement("span"),P=s("learnmore"),x=document.getElementById(P)||document.createElement("a"),K=s("preprendIcon"),U=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const B=S.element;w(B),C(x,P);const W=T();A(U,K),B.append(U,I,x,W),document.body.appendChild(B)}v?(I.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ir())}function qi(){var n;const r=(n=de())===null||n===void 0?void 0:n.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ca(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _a(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Oa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Da(){const n=Ir();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ka(){return!qi()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gi(){try{return typeof indexedDB=="object"}catch{return!1}}function Xi(){return new Promise((n,r)=>{try{let s=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),s||self.indexedDB.deleteDatabase(a),n(!0)},c.onupgradeneeded=()=>{s=!1},c.onerror=()=>{var v;r(((v=c.error)===null||v===void 0?void 0:v.message)||"")}}catch(s){r(s)}})}function Ra(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="FirebaseError";class mt extends Error{constructor(r,s,a){super(s),this.code=r,this.customData=a,this.name=Wi,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ye.prototype.create)}}class Ye{constructor(r,s,a){this.service=r,this.serviceName=s,this.errors=a}create(r,...s){const a=s[0]||{},c=`${this.service}/${r}`,v=this.errors[r],b=v?Ji(v,a):"Error",w=`${this.serviceName}: ${b} (${c}).`;return new mt(c,w,a)}}function Ji(n,r){return n.replace(Ki,(s,a)=>{const c=r[a];return c!=null?String(c):`<${a}?>`})}const Ki=/\{\$([^}]+)}/g;function Na(n){for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r))return!1;return!0}function qe(n,r){if(n===r)return!0;const s=Object.keys(n),a=Object.keys(r);for(const c of s){if(!a.includes(c))return!1;const v=n[c],b=r[c];if(hr(v)&&hr(b)){if(!qe(v,b))return!1}else if(v!==b)return!1}for(const c of a)if(!s.includes(c))return!1;return!0}function hr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n){const r=[];for(const[s,a]of Object.entries(n))Array.isArray(a)?a.forEach(c=>{r.push(encodeURIComponent(s)+"="+encodeURIComponent(c))}):r.push(encodeURIComponent(s)+"="+encodeURIComponent(a));return r.length?"&"+r.join("&"):""}function xa(n){const r={};return n.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[c,v]=a.split("=");r[decodeURIComponent(c)]=decodeURIComponent(v)}}),r}function Ma(n){const r=n.indexOf("?");if(!r)return"";const s=n.indexOf("#",r);return n.substring(r,s>0?s:void 0)}function ja(n,r){const s=new Yi(n,r);return s.subscribe.bind(s)}class Yi{constructor(r,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{r(this)}).catch(a=>{this.error(a)})}next(r){this.forEachObserver(s=>{s.next(r)})}error(r){this.forEachObserver(s=>{s.error(r)}),this.close(r)}complete(){this.forEachObserver(r=>{r.complete()}),this.close()}subscribe(r,s,a){let c;if(r===void 0&&s===void 0&&a===void 0)throw new Error("Missing Observer.");Zi(r,["next","error","complete"])?c=r:c={next:r,error:s,complete:a},c.next===void 0&&(c.next=$e),c.error===void 0&&(c.error=$e),c.complete===void 0&&(c.complete=$e);const v=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?c.error(this.finalError):c.complete()}catch{}}),this.observers.push(c),v}unsubscribeOne(r){this.observers===void 0||this.observers[r]===void 0||(delete this.observers[r],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(r){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,r)}sendOne(r,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[r]!==void 0)try{s(this.observers[r])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(r){this.finalized||(this.finalized=!0,r!==void 0&&(this.finalError=r),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zi(n,r){if(typeof n!="object"||n===null)return!1;for(const s of r)if(s in n&&typeof n[s]=="function")return!0;return!1}function $e(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=1e3,ts=2,es=14400*1e3,ns=.5;function Ba(n,r=Qi,s=ts){const a=r*Math.pow(s,n),c=Math.round(ns*a*(Math.random()-.5)*2);return Math.min(es,a+c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){return n&&n._delegate?n._delegate:n}class pt{constructor(r,s,a){this.name=r,this.instanceFactory=s,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(r){return this.instantiationMode=r,this}setMultipleInstances(r){return this.multipleInstances=r,this}setServiceProps(r){return this.serviceProps=r,this}setInstanceCreatedCallback(r){return this.onInstanceCreated=r,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(r,s){this.name=r,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(r){const s=this.normalizeInstanceIdentifier(r);if(!this.instancesDeferred.has(s)){const a=new Fi;if(this.instancesDeferred.set(s,a),this.isInitialized(s)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:s});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(r){var s;const a=this.normalizeInstanceIdentifier(r==null?void 0:r.identifier),c=(s=r==null?void 0:r.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(v){if(c)return null;throw v}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(r){if(r.name!==this.name)throw Error(`Mismatching Component ${r.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=r,!!this.shouldAutoInitialize()){if(ss(r))try{this.getOrInitializeService({instanceIdentifier:ct})}catch{}for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);try{const v=this.getOrInitializeService({instanceIdentifier:c});a.resolve(v)}catch{}}}}clearInstance(r=ct){this.instancesDeferred.delete(r),this.instancesOptions.delete(r),this.instances.delete(r)}async delete(){const r=Array.from(this.instances.values());await Promise.all([...r.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...r.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(r=ct){return this.instances.has(r)}getOptions(r=ct){return this.instancesOptions.get(r)||{}}initialize(r={}){const{options:s={}}=r,a=this.normalizeInstanceIdentifier(r.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:s});for(const[v,b]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(v);a===w&&b.resolve(c)}return c}onInit(r,s){var a;const c=this.normalizeInstanceIdentifier(s),v=(a=this.onInitCallbacks.get(c))!==null&&a!==void 0?a:new Set;v.add(r),this.onInitCallbacks.set(c,v);const b=this.instances.get(c);return b&&r(b,c),()=>{v.delete(r)}}invokeOnInitCallbacks(r,s){const a=this.onInitCallbacks.get(s);if(a)for(const c of a)try{c(r,s)}catch{}}getOrInitializeService({instanceIdentifier:r,options:s={}}){let a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:is(r),options:s}),this.instances.set(r,a),this.instancesOptions.set(r,s),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch{}return a||null}normalizeInstanceIdentifier(r=ct){return this.component?this.component.multipleInstances?r:ct:r}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function is(n){return n===ct?void 0:n}function ss(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(r){this.name=r,this.providers=new Map}addComponent(r){const s=this.getProvider(r.name);if(s.isComponentSet())throw new Error(`Component ${r.name} has already been registered with ${this.name}`);s.setComponent(r)}addOrOverwriteComponent(r){this.getProvider(r.name).isComponentSet()&&this.providers.delete(r.name),this.addComponent(r)}getProvider(r){if(this.providers.has(r))return this.providers.get(r);const s=new rs(r,this);return this.providers.set(r,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const as={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},hs=N.INFO,ls={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},us=(n,r,...s)=>{if(r<n.logLevel)return;const a=new Date().toISOString(),c=ls[r];if(c)console[c](`[${a}]  ${n.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${r})`)};class cs{constructor(r){this.name=r,this._logLevel=hs,this._logHandler=us,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(r){if(!(r in N))throw new TypeError(`Invalid value "${r}" assigned to \`logLevel\``);this._logLevel=r}setLogLevel(r){this._logLevel=typeof r=="string"?as[r]:r}get logHandler(){return this._logHandler}set logHandler(r){if(typeof r!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=r}get userLogHandler(){return this._userLogHandler}set userLogHandler(r){this._userLogHandler=r}debug(...r){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...r),this._logHandler(this,N.DEBUG,...r)}log(...r){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...r),this._logHandler(this,N.VERBOSE,...r)}info(...r){this._userLogHandler&&this._userLogHandler(this,N.INFO,...r),this._logHandler(this,N.INFO,...r)}warn(...r){this._userLogHandler&&this._userLogHandler(this,N.WARN,...r),this._logHandler(this,N.WARN,...r)}error(...r){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...r),this._logHandler(this,N.ERROR,...r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(r){this.container=r}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(ps(s)){const a=s.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(s=>s).join(" ")}}function ps(n){const r=n.getComponent();return(r==null?void 0:r.type)==="VERSION"}const Ge="@firebase/app",lr="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new cs("@firebase/app"),ds="@firebase/app-compat",gs="@firebase/analytics-compat",ms="@firebase/analytics",ys="@firebase/app-check-compat",vs="@firebase/app-check",ws="@firebase/auth",bs="@firebase/auth-compat",Es="@firebase/database",Ss="@firebase/data-connect",Ts="@firebase/database-compat",As="@firebase/functions",Is="@firebase/functions-compat",Cs="@firebase/installations",_s="@firebase/installations-compat",Os="@firebase/messaging",Ds="@firebase/messaging-compat",ks="@firebase/performance",Rs="@firebase/performance-compat",Ns="@firebase/remote-config",Ps="@firebase/remote-config-compat",xs="@firebase/storage",Ms="@firebase/storage-compat",js="@firebase/firestore",Bs="@firebase/ai",Ls="@firebase/firestore-compat",Hs="firebase",Fs="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="[DEFAULT]",$s={[Ge]:"fire-core",[ds]:"fire-core-compat",[ms]:"fire-analytics",[gs]:"fire-analytics-compat",[vs]:"fire-app-check",[ys]:"fire-app-check-compat",[ws]:"fire-auth",[bs]:"fire-auth-compat",[Es]:"fire-rtdb",[Ss]:"fire-data-connect",[Ts]:"fire-rtdb-compat",[As]:"fire-fn",[Is]:"fire-fn-compat",[Cs]:"fire-iid",[_s]:"fire-iid-compat",[Os]:"fire-fcm",[Ds]:"fire-fcm-compat",[ks]:"fire-perf",[Rs]:"fire-perf-compat",[Ns]:"fire-rc",[Ps]:"fire-rc-compat",[xs]:"fire-gcs",[Ms]:"fire-gcs-compat",[js]:"fire-fst",[Ls]:"fire-fst-compat",[Bs]:"fire-vertex","fire-js":"fire-js",[Hs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Map,Us=new Map,We=new Map;function ur(n,r){try{n.container.addComponent(r)}catch(s){tt.debug(`Component ${r.name} failed to register with FirebaseApp ${n.name}`,s)}}function Et(n){const r=n.name;if(We.has(r))return tt.debug(`There were multiple attempts to register component ${r}.`),!1;We.set(r,n);for(const s of $t.values())ur(s,n);for(const s of Us.values())ur(s,n);return!0}function Qe(n,r){const s=n.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),n.container.getProvider(r)}function Vs(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},st=new Ye("app","Firebase",zs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(r,s,a){this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(r){this.checkDestroyed(),this._automaticDataCollectionEnabled=r}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(r){this._isDeleted=r}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=Fs;function Gs(n,r={}){let s=n;typeof r!="object"&&(r={name:r});const a=Object.assign({name:Xe,automaticDataCollectionEnabled:!0},r),c=a.name;if(typeof c!="string"||!c)throw st.create("bad-app-name",{appName:String(c)});if(s||(s=Tr()),!s)throw st.create("no-options");const v=$t.get(c);if(v){if(qe(s,v.options)&&qe(a,v.config))return v;throw st.create("duplicate-app",{appName:c})}const b=new os(c);for(const A of We.values())b.addComponent(A);const w=new qs(s,a,b);return $t.set(c,w),w}function Xs(n=Xe){const r=$t.get(n);if(!r&&n===Xe&&Tr())return Gs();if(!r)throw st.create("no-app",{appName:n});return r}function Ha(){return Array.from($t.values())}function ot(n,r,s){var a;let c=(a=$s[n])!==null&&a!==void 0?a:n;s&&(c+=`-${s}`);const v=c.match(/\s|\//),b=r.match(/\s|\//);if(v||b){const w=[`Unable to register library "${c}" with version "${r}":`];v&&w.push(`library name "${c}" contains illegal characters (whitespace or "/")`),v&&b&&w.push("and"),b&&w.push(`version name "${r}" contains illegal characters (whitespace or "/")`),tt.warn(w.join(" "));return}Et(new pt(`${c}-version`,()=>({library:c,version:r}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="firebase-heartbeat-database",Js=1,Ut="firebase-heartbeat-store";let Ue=null;function Cr(){return Ue||(Ue=br(Ws,Js,{upgrade:(n,r)=>{switch(r){case 0:try{n.createObjectStore(Ut)}catch(s){console.warn(s)}}}}).catch(n=>{throw st.create("idb-open",{originalErrorMessage:n.message})})),Ue}async function Ks(n){try{const s=(await Cr()).transaction(Ut),a=await s.objectStore(Ut).get(_r(n));return await s.done,a}catch(r){if(r instanceof mt)tt.warn(r.message);else{const s=st.create("idb-get",{originalErrorMessage:r==null?void 0:r.message});tt.warn(s.message)}}}async function cr(n,r){try{const a=(await Cr()).transaction(Ut,"readwrite");await a.objectStore(Ut).put(r,_r(n)),await a.done}catch(s){if(s instanceof mt)tt.warn(s.message);else{const a=st.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});tt.warn(a.message)}}}function _r(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=1024,Zs=30;class Qs{constructor(r){this.container=r,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new eo(s),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var r,s;try{const c=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),v=fr();if(((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===v||this._heartbeatsCache.heartbeats.some(b=>b.date===v))return;if(this._heartbeatsCache.heartbeats.push({date:v,agent:c}),this._heartbeatsCache.heartbeats.length>Zs){const b=no(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(b,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){tt.warn(a)}}async getHeartbeatsHeader(){var r;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=fr(),{heartbeatsToSend:a,unsentEntries:c}=to(this._heartbeatsCache.heartbeats),v=ue(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=s,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),v}catch(s){return tt.warn(s),""}}}function fr(){return new Date().toISOString().substring(0,10)}function to(n,r=Ys){const s=[];let a=n.slice();for(const c of n){const v=s.find(b=>b.agent===c.agent);if(v){if(v.dates.push(c.date),pr(s)>r){v.dates.pop();break}}else if(s.push({agent:c.agent,dates:[c.date]}),pr(s)>r){s.pop();break}a=a.slice(1)}return{heartbeatsToSend:s,unsentEntries:a}}class eo{constructor(r){this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gi()?Xi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Ks(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(r){var s;if(await this._canUseIndexedDBPromise){const c=await this.read();return cr(this.app,{lastSentHeartbeatDate:(s=r.lastSentHeartbeatDate)!==null&&s!==void 0?s:c.lastSentHeartbeatDate,heartbeats:r.heartbeats})}else return}async add(r){var s;if(await this._canUseIndexedDBPromise){const c=await this.read();return cr(this.app,{lastSentHeartbeatDate:(s=r.lastSentHeartbeatDate)!==null&&s!==void 0?s:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...r.heartbeats]})}else return}}function pr(n){return ue(JSON.stringify({version:2,heartbeats:n})).length}function no(n){if(n.length===0)return-1;let r=0,s=n[0].date;for(let a=1;a<n.length;a++)n[a].date<s&&(s=n[a].date,r=a);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n){Et(new pt("platform-logger",r=>new fs(r),"PRIVATE")),Et(new pt("heartbeat",r=>new Qs(r),"PRIVATE")),ot(Ge,lr,n),ot(Ge,lr,"esm2017"),ot("fire-js","")}ro("");var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var io,so;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function r(d,h){function u(){}u.prototype=h.prototype,d.D=h.prototype,d.prototype=new u,d.prototype.constructor=d,d.C=function(f,p,m){for(var l=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)l[Y-2]=arguments[Y];return h.prototype[p].apply(f,l)}}function s(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}r(a,s),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function c(d,h,u){u||(u=0);var f=Array(16);if(typeof h=="string")for(var p=0;16>p;++p)f[p]=h.charCodeAt(u++)|h.charCodeAt(u++)<<8|h.charCodeAt(u++)<<16|h.charCodeAt(u++)<<24;else for(p=0;16>p;++p)f[p]=h[u++]|h[u++]<<8|h[u++]<<16|h[u++]<<24;h=d.g[0],u=d.g[1],p=d.g[2];var m=d.g[3],l=h+(m^u&(p^m))+f[0]+3614090360&4294967295;h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[1]+3905402710&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[2]+606105819&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[3]+3250441966&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(m^u&(p^m))+f[4]+4118548399&4294967295,h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[5]+1200080426&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[6]+2821735955&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[7]+4249261313&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(m^u&(p^m))+f[8]+1770035416&4294967295,h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[9]+2336552879&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[10]+4294925233&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[11]+2304563134&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(m^u&(p^m))+f[12]+1804603682&4294967295,h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[13]+4254626195&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[14]+2792965006&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[15]+1236535329&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(p^m&(u^p))+f[1]+4129170786&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[6]+3225465664&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[11]+643717713&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[0]+3921069994&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(p^m&(u^p))+f[5]+3593408605&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[10]+38016083&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[15]+3634488961&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[4]+3889429448&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(p^m&(u^p))+f[9]+568446438&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[14]+3275163606&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[3]+4107603335&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[8]+1163531501&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(p^m&(u^p))+f[13]+2850285829&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[2]+4243563512&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[7]+1735328473&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[12]+2368359562&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(u^p^m)+f[5]+4294588738&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[8]+2272392833&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[11]+1839030562&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[14]+4259657740&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(u^p^m)+f[1]+2763975236&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[4]+1272893353&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[7]+4139469664&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[10]+3200236656&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(u^p^m)+f[13]+681279174&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[0]+3936430074&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[3]+3572445317&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[6]+76029189&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(u^p^m)+f[9]+3654602809&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[12]+3873151461&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[15]+530742520&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[2]+3299628645&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(p^(u|~m))+f[0]+4096336452&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[7]+1126891415&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[14]+2878612391&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[5]+4237533241&4294967295,u=p+(l<<21&4294967295|l>>>11),l=h+(p^(u|~m))+f[12]+1700485571&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[3]+2399980690&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[10]+4293915773&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[1]+2240044497&4294967295,u=p+(l<<21&4294967295|l>>>11),l=h+(p^(u|~m))+f[8]+1873313359&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[15]+4264355552&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[6]+2734768916&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[13]+1309151649&4294967295,u=p+(l<<21&4294967295|l>>>11),l=h+(p^(u|~m))+f[4]+4149444226&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[11]+3174756917&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[2]+718787259&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[9]+3951481745&4294967295,d.g[0]=d.g[0]+h&4294967295,d.g[1]=d.g[1]+(p+(l<<21&4294967295|l>>>11))&4294967295,d.g[2]=d.g[2]+p&4294967295,d.g[3]=d.g[3]+m&4294967295}a.prototype.u=function(d,h){h===void 0&&(h=d.length);for(var u=h-this.blockSize,f=this.B,p=this.h,m=0;m<h;){if(p==0)for(;m<=u;)c(this,d,m),m+=this.blockSize;if(typeof d=="string"){for(;m<h;)if(f[p++]=d.charCodeAt(m++),p==this.blockSize){c(this,f),p=0;break}}else for(;m<h;)if(f[p++]=d[m++],p==this.blockSize){c(this,f),p=0;break}}this.h=p,this.o+=h},a.prototype.v=function(){var d=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);d[0]=128;for(var h=1;h<d.length-8;++h)d[h]=0;var u=8*this.o;for(h=d.length-8;h<d.length;++h)d[h]=u&255,u/=256;for(this.u(d),d=Array(16),h=u=0;4>h;++h)for(var f=0;32>f;f+=8)d[u++]=this.g[h]>>>f&255;return d};function v(d,h){var u=w;return Object.prototype.hasOwnProperty.call(u,d)?u[d]:u[d]=h(d)}function b(d,h){this.h=h;for(var u=[],f=!0,p=d.length-1;0<=p;p--){var m=d[p]|0;f&&m==h||(u[p]=m,f=!1)}this.g=u}var w={};function A(d){return-128<=d&&128>d?v(d,function(h){return new b([h|0],0>h?-1:0)}):new b([d|0],0>d?-1:0)}function T(d){if(isNaN(d)||!isFinite(d))return k;if(0>d)return x(T(-d));for(var h=[],u=1,f=0;d>=u;f++)h[f]=d/u|0,u*=4294967296;return new b(h,0)}function C(d,h){if(d.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(d.charAt(0)=="-")return x(C(d.substring(1),h));if(0<=d.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=T(Math.pow(h,8)),f=k,p=0;p<d.length;p+=8){var m=Math.min(8,d.length-p),l=parseInt(d.substring(p,p+m),h);8>m?(m=T(Math.pow(h,m)),f=f.j(m).add(T(l))):(f=f.j(u),f=f.add(T(l)))}return f}var k=A(0),S=A(1),O=A(16777216);n=b.prototype,n.m=function(){if(P(this))return-x(this).m();for(var d=0,h=1,u=0;u<this.g.length;u++){var f=this.i(u);d+=(0<=f?f:4294967296+f)*h,h*=4294967296}return d},n.toString=function(d){if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(I(this))return"0";if(P(this))return"-"+x(this).toString(d);for(var h=T(Math.pow(d,6)),u=this,f="";;){var p=W(u,h).g;u=K(u,p.j(h));var m=((0<u.g.length?u.g[0]:u.h)>>>0).toString(d);if(u=p,I(u))return m+f;for(;6>m.length;)m="0"+m;f=m+f}},n.i=function(d){return 0>d?0:d<this.g.length?this.g[d]:this.h};function I(d){if(d.h!=0)return!1;for(var h=0;h<d.g.length;h++)if(d.g[h]!=0)return!1;return!0}function P(d){return d.h==-1}n.l=function(d){return d=K(this,d),P(d)?-1:I(d)?0:1};function x(d){for(var h=d.g.length,u=[],f=0;f<h;f++)u[f]=~d.g[f];return new b(u,~d.h).add(S)}n.abs=function(){return P(this)?x(this):this},n.add=function(d){for(var h=Math.max(this.g.length,d.g.length),u=[],f=0,p=0;p<=h;p++){var m=f+(this.i(p)&65535)+(d.i(p)&65535),l=(m>>>16)+(this.i(p)>>>16)+(d.i(p)>>>16);f=l>>>16,m&=65535,l&=65535,u[p]=l<<16|m}return new b(u,u[u.length-1]&-2147483648?-1:0)};function K(d,h){return d.add(x(h))}n.j=function(d){if(I(this)||I(d))return k;if(P(this))return P(d)?x(this).j(x(d)):x(x(this).j(d));if(P(d))return x(this.j(x(d)));if(0>this.l(O)&&0>d.l(O))return T(this.m()*d.m());for(var h=this.g.length+d.g.length,u=[],f=0;f<2*h;f++)u[f]=0;for(f=0;f<this.g.length;f++)for(var p=0;p<d.g.length;p++){var m=this.i(f)>>>16,l=this.i(f)&65535,Y=d.i(p)>>>16,Tt=d.i(p)&65535;u[2*f+2*p]+=l*Tt,U(u,2*f+2*p),u[2*f+2*p+1]+=m*Tt,U(u,2*f+2*p+1),u[2*f+2*p+1]+=l*Y,U(u,2*f+2*p+1),u[2*f+2*p+2]+=m*Y,U(u,2*f+2*p+2)}for(f=0;f<h;f++)u[f]=u[2*f+1]<<16|u[2*f];for(f=h;f<2*h;f++)u[f]=0;return new b(u,0)};function U(d,h){for(;(d[h]&65535)!=d[h];)d[h+1]+=d[h]>>>16,d[h]&=65535,h++}function B(d,h){this.g=d,this.h=h}function W(d,h){if(I(h))throw Error("division by zero");if(I(d))return new B(k,k);if(P(d))return h=W(x(d),h),new B(x(h.g),x(h.h));if(P(h))return h=W(d,x(h)),new B(x(h.g),h.h);if(30<d.g.length){if(P(d)||P(h))throw Error("slowDivide_ only works with positive integers.");for(var u=S,f=h;0>=f.l(d);)u=Vt(u),f=Vt(f);var p=J(u,1),m=J(f,1);for(f=J(f,2),u=J(u,2);!I(f);){var l=m.add(f);0>=l.l(d)&&(p=p.add(u),m=l),f=J(f,1),u=J(u,1)}return h=K(d,p.j(h)),new B(p,h)}for(p=k;0<=d.l(h);){for(u=Math.max(1,Math.floor(d.m()/h.m())),f=Math.ceil(Math.log(u)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),m=T(u),l=m.j(h);P(l)||0<l.l(d);)u-=f,m=T(u),l=m.j(h);I(m)&&(m=S),p=p.add(m),d=K(d,l)}return new B(p,d)}n.A=function(d){return W(this,d).h},n.and=function(d){for(var h=Math.max(this.g.length,d.g.length),u=[],f=0;f<h;f++)u[f]=this.i(f)&d.i(f);return new b(u,this.h&d.h)},n.or=function(d){for(var h=Math.max(this.g.length,d.g.length),u=[],f=0;f<h;f++)u[f]=this.i(f)|d.i(f);return new b(u,this.h|d.h)},n.xor=function(d){for(var h=Math.max(this.g.length,d.g.length),u=[],f=0;f<h;f++)u[f]=this.i(f)^d.i(f);return new b(u,this.h^d.h)};function Vt(d){for(var h=d.g.length+1,u=[],f=0;f<h;f++)u[f]=d.i(f)<<1|d.i(f-1)>>>31;return new b(u,d.h)}function J(d,h){var u=h>>5;h%=32;for(var f=d.g.length-u,p=[],m=0;m<f;m++)p[m]=0<h?d.i(m+u)>>>h|d.i(m+u+1)<<32-h:d.i(m+u);return new b(p,d.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,so=a,b.prototype.add=b.prototype.add,b.prototype.multiply=b.prototype.j,b.prototype.modulo=b.prototype.A,b.prototype.compare=b.prototype.l,b.prototype.toNumber=b.prototype.m,b.prototype.toString=b.prototype.toString,b.prototype.getBits=b.prototype.i,b.fromNumber=T,b.fromString=C,io=b}).apply(typeof dr<"u"?dr:typeof self<"u"?self:typeof window<"u"?window:{});var le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oo,ao,ho,lo,uo,co,fo,po;(function(){var n,r=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,i){return t==Array.prototype||t==Object.prototype||(t[e]=i.value),t};function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof le=="object"&&le];for(var e=0;e<t.length;++e){var i=t[e];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var a=s(this);function c(t,e){if(e)t:{var i=a;t=t.split(".");for(var o=0;o<t.length-1;o++){var g=t[o];if(!(g in i))break t;i=i[g]}t=t[t.length-1],o=i[t],e=e(o),e!=o&&e!=null&&r(i,t,{configurable:!0,writable:!0,value:e})}}function v(t,e){t instanceof String&&(t+="");var i=0,o=!1,g={next:function(){if(!o&&i<t.length){var y=i++;return{value:e(y,t[y]),done:!1}}return o=!0,{done:!0,value:void 0}}};return g[Symbol.iterator]=function(){return g},g}c("Array.prototype.values",function(t){return t||function(){return v(this,function(e,i){return i})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var b=b||{},w=this||self;function A(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function T(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function C(t,e,i){return t.call.apply(t.bind,arguments)}function k(t,e,i){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var g=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(g,o),t.apply(e,g)}}return function(){return t.apply(e,arguments)}}function S(t,e,i){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:k,S.apply(null,arguments)}function O(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var o=i.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function I(t,e){function i(){}i.prototype=e.prototype,t.aa=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Qb=function(o,g,y){for(var E=Array(arguments.length-2),D=2;D<arguments.length;D++)E[D-2]=arguments[D];return e.prototype[g].apply(o,E)}}function P(t){const e=t.length;if(0<e){const i=Array(e);for(let o=0;o<e;o++)i[o]=t[o];return i}return[]}function x(t,e){for(let i=1;i<arguments.length;i++){const o=arguments[i];if(A(o)){const g=t.length||0,y=o.length||0;t.length=g+y;for(let E=0;E<y;E++)t[g+E]=o[E]}else t.push(o)}}class K{constructor(e,i){this.i=e,this.j=i,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function U(t){return/^[\s\xa0]*$/.test(t)}function B(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function W(t){return W[" "](t),t}W[" "]=function(){};var Vt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function J(t,e,i){for(const o in t)e.call(i,t[o],o,t)}function d(t,e){for(const i in t)e.call(void 0,t[i],i,t)}function h(t){const e={};for(const i in t)e[i]=t[i];return e}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,e){let i,o;for(let g=1;g<arguments.length;g++){o=arguments[g];for(i in o)t[i]=o[i];for(let y=0;y<u.length;y++)i=u[y],Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}}function p(t){var e=1;t=t.split(":");const i=[];for(;0<e&&t.length;)i.push(t.shift()),e--;return t.length&&i.push(t.join(":")),i}function m(t){w.setTimeout(()=>{throw t},0)}function l(){var t=ye;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Y{constructor(){this.h=this.g=null}add(e,i){const o=Tt.get();o.set(e,i),this.h?this.h.next=o:this.g=o,this.h=o}}var Tt=new K(()=>new Wr,t=>t.reset());class Wr{constructor(){this.next=this.g=this.h=null}set(e,i){this.h=e,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let At,It=!1,ye=new Y,on=()=>{const t=w.Promise.resolve(void 0);At=()=>{t.then(Jr)}};var Jr=()=>{for(var t;t=l();){try{t.h.call(t.g)}catch(i){m(i)}var e=Tt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}It=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var Kr=(function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const i=()=>{};w.addEventListener("test",i,e),w.removeEventListener("test",i,e)}catch{}return t})();function Ct(t,e){if(L.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vt){t:{try{W(e.nodeName);var g=!0;break t}catch{}g=!1}g||(e=null)}}else i=="mouseover"?e=t.fromElement:i=="mouseout"&&(e=t.toElement);this.relatedTarget=e,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Yr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ct.aa.h.call(this)}}I(Ct,L);var Yr={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),Zr=0;function Qr(t,e,i,o,g){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!o,this.ha=g,this.key=++Zr,this.da=this.fa=!1}function qt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Gt(t){this.src=t,this.g={},this.h=0}Gt.prototype.add=function(t,e,i,o,g){var y=t.toString();t=this.g[y],t||(t=this.g[y]=[],this.h++);var E=we(t,e,o,g);return-1<E?(e=t[E],i||(e.fa=!1)):(e=new Qr(e,this.src,y,!!o,g),e.fa=i,t.push(e)),e};function ve(t,e){var i=e.type;if(i in t.g){var o=t.g[i],g=Array.prototype.indexOf.call(o,e,void 0),y;(y=0<=g)&&Array.prototype.splice.call(o,g,1),y&&(qt(e),t.g[i].length==0&&(delete t.g[i],t.h--))}}function we(t,e,i,o){for(var g=0;g<t.length;++g){var y=t[g];if(!y.da&&y.listener==e&&y.capture==!!i&&y.ha==o)return g}return-1}var be="closure_lm_"+(1e6*Math.random()|0),Ee={};function an(t,e,i,o,g){if(Array.isArray(e)){for(var y=0;y<e.length;y++)an(t,e[y],i,o,g);return null}return i=un(i),t&&t[zt]?t.K(e,i,T(o)?!!o.capture:!1,g):ti(t,e,i,!1,o,g)}function ti(t,e,i,o,g,y){if(!e)throw Error("Invalid event type");var E=T(g)?!!g.capture:!!g,D=Te(t);if(D||(t[be]=D=new Gt(t)),i=D.add(e,i,o,E,y),i.proxy)return i;if(o=ei(),i.proxy=o,o.src=t,o.listener=i,t.addEventListener)Kr||(g=E),g===void 0&&(g=!1),t.addEventListener(e.toString(),o,g);else if(t.attachEvent)t.attachEvent(ln(e.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return i}function ei(){function t(i){return e.call(t.src,t.listener,i)}const e=ni;return t}function hn(t,e,i,o,g){if(Array.isArray(e))for(var y=0;y<e.length;y++)hn(t,e[y],i,o,g);else o=T(o)?!!o.capture:!!o,i=un(i),t&&t[zt]?(t=t.i,e=String(e).toString(),e in t.g&&(y=t.g[e],i=we(y,i,o,g),-1<i&&(qt(y[i]),Array.prototype.splice.call(y,i,1),y.length==0&&(delete t.g[e],t.h--)))):t&&(t=Te(t))&&(e=t.g[e.toString()],t=-1,e&&(t=we(e,i,o,g)),(i=-1<t?e[t]:null)&&Se(i))}function Se(t){if(typeof t!="number"&&t&&!t.da){var e=t.src;if(e&&e[zt])ve(e.i,t);else{var i=t.type,o=t.proxy;e.removeEventListener?e.removeEventListener(i,o,t.capture):e.detachEvent?e.detachEvent(ln(i),o):e.addListener&&e.removeListener&&e.removeListener(o),(i=Te(e))?(ve(i,t),i.h==0&&(i.src=null,e[be]=null)):qt(t)}}}function ln(t){return t in Ee?Ee[t]:Ee[t]="on"+t}function ni(t,e){if(t.da)t=!0;else{e=new Ct(e,this);var i=t.listener,o=t.ha||t.src;t.fa&&Se(t),t=i.call(o,e)}return t}function Te(t){return t=t[be],t instanceof Gt?t:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function un(t){return typeof t=="function"?t:(t[Ae]||(t[Ae]=function(e){return t.handleEvent(e)}),t[Ae])}function H(){et.call(this),this.i=new Gt(this),this.M=this,this.F=null}I(H,et),H.prototype[zt]=!0,H.prototype.removeEventListener=function(t,e,i,o){hn(this,t,e,i,o)};function V(t,e){var i,o=t.F;if(o)for(i=[];o;o=o.F)i.push(o);if(t=t.M,o=e.type||e,typeof e=="string")e=new L(e,t);else if(e instanceof L)e.target=e.target||t;else{var g=e;e=new L(o,t),f(e,g)}if(g=!0,i)for(var y=i.length-1;0<=y;y--){var E=e.g=i[y];g=Xt(E,o,!0,e)&&g}if(E=e.g=t,g=Xt(E,o,!0,e)&&g,g=Xt(E,o,!1,e)&&g,i)for(y=0;y<i.length;y++)E=e.g=i[y],g=Xt(E,o,!1,e)&&g}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var i=t.g[e],o=0;o<i.length;o++)qt(i[o]);delete t.g[e],t.h--}}this.F=null},H.prototype.K=function(t,e,i,o){return this.i.add(String(t),e,!1,i,o)},H.prototype.L=function(t,e,i,o){return this.i.add(String(t),e,!0,i,o)};function Xt(t,e,i,o){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var g=!0,y=0;y<e.length;++y){var E=e[y];if(E&&!E.da&&E.capture==i){var D=E.listener,j=E.ha||E.src;E.fa&&ve(t.i,E),g=D.call(j,o)!==!1&&g}}return g&&!o.defaultPrevented}function cn(t,e,i){if(typeof t=="function")i&&(t=S(t,i));else if(t&&typeof t.handleEvent=="function")t=S(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:w.setTimeout(t,e||0)}function fn(t){t.g=cn(()=>{t.g=null,t.i&&(t.i=!1,fn(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}class ri extends et{constructor(e,i){super(),this.m=e,this.l=i,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:fn(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(t){et.call(this),this.h=t,this.g={}}I(_t,et);var pn=[];function dn(t){J(t.g,function(e,i){this.g.hasOwnProperty(i)&&Se(e)},t),t.g={}}_t.prototype.N=function(){_t.aa.N.call(this),dn(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ie=w.JSON.stringify,ii=w.JSON.parse,si=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function Ce(){}Ce.prototype.h=null;function gn(t){return t.h||(t.h=t.i())}function mn(){}var Ot={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _e(){L.call(this,"d")}I(_e,L);function Oe(){L.call(this,"c")}I(Oe,L);var at={},yn=null;function Wt(){return yn=yn||new H}at.La="serverreachability";function vn(t){L.call(this,at.La,t)}I(vn,L);function Dt(t){const e=Wt();V(e,new vn(e))}at.STAT_EVENT="statevent";function wn(t,e){L.call(this,at.STAT_EVENT,t),this.stat=e}I(wn,L);function z(t){const e=Wt();V(e,new wn(e,t))}at.Ma="timingevent";function bn(t,e){L.call(this,at.Ma,t),this.size=e}I(bn,L);function kt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},e)}function Rt(){this.g=!0}Rt.prototype.xa=function(){this.g=!1};function oi(t,e,i,o,g,y){t.info(function(){if(t.g)if(y)for(var E="",D=y.split("&"),j=0;j<D.length;j++){var _=D[j].split("=");if(1<_.length){var F=_[0];_=_[1];var $=F.split("_");E=2<=$.length&&$[1]=="type"?E+(F+"="+_+"&"):E+(F+"=redacted&")}}else E=null;else E=y;return"XMLHTTP REQ ("+o+") [attempt "+g+"]: "+e+`
`+i+`
`+E})}function ai(t,e,i,o,g,y,E){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+g+"]: "+e+`
`+i+`
`+y+" "+E})}function yt(t,e,i,o){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+li(t,i)+(o?" "+o:"")})}function hi(t,e){t.info(function(){return"TIMEOUT: "+e})}Rt.prototype.info=function(){};function li(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i){for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var o=i[t];if(!(2>o.length)){var g=o[1];if(Array.isArray(g)&&!(1>g.length)){var y=g[0];if(y!="noop"&&y!="stop"&&y!="close")for(var E=1;E<g.length;E++)g[E]=""}}}}return Ie(i)}catch{return e}}var Jt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},En={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},De;function Kt(){}I(Kt,Ce),Kt.prototype.g=function(){return new XMLHttpRequest},Kt.prototype.i=function(){return{}},De=new Kt;function nt(t,e,i,o){this.j=t,this.i=e,this.l=i,this.R=o||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sn}function Sn(){this.i=null,this.g="",this.h=!1}var Tn={},ke={};function Re(t,e,i){t.L=1,t.v=te(Z(e)),t.m=i,t.P=!0,An(t,null)}function An(t,e){t.F=Date.now(),Yt(t),t.A=Z(t.v);var i=t.A,o=t.R;Array.isArray(o)||(o=[String(o)]),Ln(i.i,"t",o),t.C=0,i=t.j.J,t.h=new Sn,t.g=nr(t.j,i?e:null,!t.m),0<t.O&&(t.M=new ri(S(t.Y,t,t.g),t.O)),e=t.U,i=t.g,o=t.ca;var g="readystatechange";Array.isArray(g)||(g&&(pn[0]=g.toString()),g=pn);for(var y=0;y<g.length;y++){var E=an(i,g[y],o||e.handleEvent,!1,e.h||e);if(!E)break;e.g[E.key]=E}e=t.H?h(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Dt(),oi(t.i,t.u,t.A,t.l,t.R,t.m)}nt.prototype.ca=function(t){t=t.target;const e=this.M;e&&Q(t)==3?e.j():this.Y(t)},nt.prototype.Y=function(t){try{if(t==this.g)t:{const $=Q(this.g);var e=this.g.Ba();const bt=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||qn(this.g)))){this.J||$!=4||e==7||(e==8||0>=bt?Dt(3):Dt(2)),Ne(this);var i=this.g.Z();this.X=i;e:if(In(this)){var o=qn(this.g);t="";var g=o.length,y=Q(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ht(this),Nt(this);var E="";break e}this.h.i=new w.TextDecoder}for(e=0;e<g;e++)this.h.h=!0,t+=this.h.i.decode(o[e],{stream:!(y&&e==g-1)});o.length=0,this.h.g+=t,this.C=0,E=this.h.g}else E=this.g.oa();if(this.o=i==200,ai(this.i,this.u,this.A,this.l,this.R,$,i),this.o){if(this.T&&!this.K){e:{if(this.g){var D,j=this.g;if((D=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(D)){var _=D;break e}}_=null}if(i=_)yt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pe(this,i);else{this.o=!1,this.s=3,z(12),ht(this),Nt(this);break t}}if(this.P){i=!0;let X;for(;!this.J&&this.C<E.length;)if(X=ui(this,E),X==ke){$==4&&(this.s=4,z(14),i=!1),yt(this.i,this.l,null,"[Incomplete Response]");break}else if(X==Tn){this.s=4,z(15),yt(this.i,this.l,E,"[Invalid Chunk]"),i=!1;break}else yt(this.i,this.l,X,null),Pe(this,X);if(In(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||E.length!=0||this.h.h||(this.s=1,z(16),i=!1),this.o=this.o&&i,!i)yt(this.i,this.l,E,"[Invalid Chunked Response]"),ht(this),Nt(this);else if(0<E.length&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.ba&&!F.M&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),He(F),F.M=!0,z(11))}}else yt(this.i,this.l,E,null),Pe(this,E);$==4&&ht(this),this.o&&!this.J&&($==4?Zn(this.j,this):(this.o=!1,Yt(this)))}else _i(this.g),i==400&&0<E.indexOf("Unknown SID")?(this.s=3,z(12)):(this.s=0,z(13)),ht(this),Nt(this)}}}catch{}finally{}};function In(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ui(t,e){var i=t.C,o=e.indexOf(`
`,i);return o==-1?ke:(i=Number(e.substring(i,o)),isNaN(i)?Tn:(o+=1,o+i>e.length?ke:(e=e.slice(o,o+i),t.C=o+i,e)))}nt.prototype.cancel=function(){this.J=!0,ht(this)};function Yt(t){t.S=Date.now()+t.I,Cn(t,t.I)}function Cn(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kt(S(t.ba,t),e)}function Ne(t){t.B&&(w.clearTimeout(t.B),t.B=null)}nt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(hi(this.i,this.A),this.L!=2&&(Dt(),z(17)),ht(this),this.s=2,Nt(this)):Cn(this,this.S-t)};function Nt(t){t.j.G==0||t.J||Zn(t.j,t)}function ht(t){Ne(t);var e=t.M;e&&typeof e.ma=="function"&&e.ma(),t.M=null,dn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Pe(t,e){try{var i=t.j;if(i.G!=0&&(i.g==t||xe(i.h,t))){if(!t.K&&xe(i.h,t)&&i.G==3){try{var o=i.Da.g.parse(e)}catch{o=null}if(Array.isArray(o)&&o.length==3){var g=o;if(g[0]==0){t:if(!i.u){if(i.g)if(i.g.F+3e3<t.F)oe(i),ie(i);else break t;Le(i),z(18)}}else i.za=g[1],0<i.za-i.T&&37500>g[2]&&i.F&&i.v==0&&!i.C&&(i.C=kt(S(i.Za,i),6e3));if(1>=Dn(i.h)&&i.ca){try{i.ca()}catch{}i.ca=void 0}}else ut(i,11)}else if((t.K||i.g==t)&&oe(i),!U(e))for(g=i.Da.g.parse(e),e=0;e<g.length;e++){let _=g[e];if(i.T=_[0],_=_[1],i.G==2)if(_[0]=="c"){i.K=_[1],i.ia=_[2];const F=_[3];F!=null&&(i.la=F,i.j.info("VER="+i.la));const $=_[4];$!=null&&(i.Aa=$,i.j.info("SVER="+i.Aa));const bt=_[5];bt!=null&&typeof bt=="number"&&0<bt&&(o=1.5*bt,i.L=o,i.j.info("backChannelRequestTimeoutMs_="+o)),o=i;const X=t.g;if(X){const he=X.g?X.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(he){var y=o.h;y.g||he.indexOf("spdy")==-1&&he.indexOf("quic")==-1&&he.indexOf("h2")==-1||(y.j=y.l,y.g=new Set,y.h&&(Me(y,y.h),y.h=null))}if(o.D){const Fe=X.g?X.g.getResponseHeader("X-HTTP-Session-Id"):null;Fe&&(o.ya=Fe,R(o.I,o.D,Fe))}}i.G=3,i.l&&i.l.ua(),i.ba&&(i.R=Date.now()-t.F,i.j.info("Handshake RTT: "+i.R+"ms")),o=i;var E=t;if(o.qa=er(o,o.J?o.ia:null,o.W),E.K){kn(o.h,E);var D=E,j=o.L;j&&(D.I=j),D.B&&(Ne(D),Yt(D)),o.g=E}else Kn(o);0<i.i.length&&se(i)}else _[0]!="stop"&&_[0]!="close"||ut(i,7);else i.G==3&&(_[0]=="stop"||_[0]=="close"?_[0]=="stop"?ut(i,7):Be(i):_[0]!="noop"&&i.l&&i.l.ta(_),i.v=0)}}Dt(4)}catch{}}var ci=class{constructor(t,e){this.g=t,this.map=e}};function _n(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function On(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dn(t){return t.h?1:t.g?t.g.size:0}function xe(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Me(t,e){t.g?t.g.add(e):t.h=e}function kn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_n.prototype.cancel=function(){if(this.i=Rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return P(t.i)}function fi(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(A(t)){for(var e=[],i=t.length,o=0;o<i;o++)e.push(t[o]);return e}e=[],i=0;for(o in t)e[i++]=t[o];return e}function pi(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(A(t)||typeof t=="string"){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const o in t)e[i++]=o;return e}}}function Nn(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(A(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var i=pi(t),o=fi(t),g=o.length,y=0;y<g;y++)e.call(void 0,o[y],i&&i[y],t)}var Pn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function di(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var o=t[i].indexOf("="),g=null;if(0<=o){var y=t[i].substring(0,o);g=t[i].substring(o+1)}else y=t[i];e(y,g?decodeURIComponent(g.replace(/\+/g," ")):"")}}}function lt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof lt){this.h=t.h,Zt(this,t.j),this.o=t.o,this.g=t.g,Qt(this,t.s),this.l=t.l;var e=t.i,i=new Mt;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),xn(this,i),this.m=t.m}else t&&(e=String(t).match(Pn))?(this.h=!1,Zt(this,e[1]||"",!0),this.o=Pt(e[2]||""),this.g=Pt(e[3]||"",!0),Qt(this,e[4]),this.l=Pt(e[5]||"",!0),xn(this,e[6]||"",!0),this.m=Pt(e[7]||"")):(this.h=!1,this.i=new Mt(null,this.h))}lt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xt(e,Mn,!0),":");var i=this.g;return(i||e=="file")&&(t.push("//"),(e=this.o)&&t.push(xt(e,Mn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.s,i!=null&&t.push(":",String(i))),(i=this.l)&&(this.g&&i.charAt(0)!="/"&&t.push("/"),t.push(xt(i,i.charAt(0)=="/"?yi:mi,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.m)&&t.push("#",xt(i,wi)),t.join("")};function Z(t){return new lt(t)}function Zt(t,e,i){t.j=i?Pt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function xn(t,e,i){e instanceof Mt?(t.i=e,bi(t.i,t.h)):(i||(e=xt(e,vi)),t.i=new Mt(e,t.h))}function R(t,e,i){t.i.set(e,i)}function te(t){return R(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xt(t,e,i){return typeof t=="string"?(t=encodeURI(t).replace(e,gi),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gi(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mn=/[#\/\?@]/g,mi=/[#\?:]/g,yi=/[#\?]/g,vi=/[#\?@]/g,wi=/#/g;function Mt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rt(t){t.g||(t.g=new Map,t.h=0,t.i&&di(t.i,function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)}))}n=Mt.prototype,n.add=function(t,e){rt(this),this.i=null,t=vt(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this};function jn(t,e){rt(t),e=vt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bn(t,e){return rt(t),e=vt(t,e),t.g.has(e)}n.forEach=function(t,e){rt(this),this.g.forEach(function(i,o){i.forEach(function(g){t.call(e,g,o,this)},this)},this)},n.na=function(){rt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let o=0;o<e.length;o++){const g=t[o];for(let y=0;y<g.length;y++)i.push(e[o])}return i},n.V=function(t){rt(this);let e=[];if(typeof t=="string")Bn(this,t)&&(e=e.concat(this.g.get(vt(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},n.set=function(t,e){return rt(this),this.i=null,t=vt(this,t),Bn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},n.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e};function Ln(t,e,i){jn(t,e),0<i.length&&(t.i=null,t.g.set(vt(t,e),P(i)),t.h+=i.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var o=e[i];const y=encodeURIComponent(String(o)),E=this.V(o);for(o=0;o<E.length;o++){var g=y;E[o]!==""&&(g+="="+encodeURIComponent(String(E[o]))),t.push(g)}}return this.i=t.join("&")};function vt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bi(t,e){e&&!t.j&&(rt(t),t.i=null,t.g.forEach(function(i,o){var g=o.toLowerCase();o!=g&&(jn(this,o),Ln(this,g,i))},t)),t.j=e}function Ei(t,e){const i=new Rt;if(w.Image){const o=new Image;o.onload=O(it,i,"TestLoadImage: loaded",!0,e,o),o.onerror=O(it,i,"TestLoadImage: error",!1,e,o),o.onabort=O(it,i,"TestLoadImage: abort",!1,e,o),o.ontimeout=O(it,i,"TestLoadImage: timeout",!1,e,o),w.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else e(!1)}function Si(t,e){const i=new Rt,o=new AbortController,g=setTimeout(()=>{o.abort(),it(i,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:o.signal}).then(y=>{clearTimeout(g),y.ok?it(i,"TestPingServer: ok",!0,e):it(i,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(g),it(i,"TestPingServer: error",!1,e)})}function it(t,e,i,o,g){try{g&&(g.onload=null,g.onerror=null,g.onabort=null,g.ontimeout=null),o(i)}catch{}}function Ti(){this.g=new si}function Ai(t,e,i){const o=i||"";try{Nn(t,function(g,y){let E=g;T(g)&&(E=Ie(g)),e.push(o+y+"="+encodeURIComponent(E))})}catch(g){throw e.push(o+"type="+encodeURIComponent("_badmap")),g}}function ee(t){this.l=t.Ub||null,this.j=t.eb||!1}I(ee,Ce),ee.prototype.g=function(){return new ne(this.l,this.j)},ee.prototype.i=(function(t){return function(){return t}})({});function ne(t,e){H.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ne,H),n=ne.prototype,n.open=function(t,e){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Bt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||w).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bt(this)),this.g&&(this.readyState=3,Bt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jt(this):Bt(this),this.readyState==3&&Hn(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,jt(this))},n.Qa=function(t){this.g&&(this.response=t,jt(this))},n.ga=function(){this.g&&jt(this)};function jt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Bt(t)}n.setRequestHeader=function(t,e){this.u.append(t,e)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join(`\r
`)};function Bt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ne.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Fn(t){let e="";return J(t,function(i,o){e+=o,e+=":",e+=i,e+=`\r
`}),e}function je(t,e,i){t:{for(o in i){var o=!1;break t}o=!0}o||(i=Fn(i),typeof t=="string"?i!=null&&encodeURIComponent(String(i)):R(t,e,i))}function M(t){H.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(M,H);var Ii=/^https?$/i,Ci=["POST","PUT"];n=M.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,e,i,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():De.g(),this.v=this.o?gn(this.o):gn(De),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(y){$n(this,y);return}if(t=i||"",i=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var g in o)i.set(g,o[g]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const y of o.keys())i.set(y,o.get(y));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(i.keys()).find(y=>y.toLowerCase()=="content-type"),g=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(Ci,e,void 0))||o||g||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[y,E]of i)this.g.setRequestHeader(y,E);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zn(this),this.u=!0,this.g.send(t),this.u=!1}catch(y){$n(this,y)}};function $n(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Un(t),re(t)}function Un(t){t.A||(t.A=!0,V(t,"complete"),V(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,V(this,"complete"),V(this,"abort"),re(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),re(this,!0)),M.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Vn(this):this.bb())},n.bb=function(){Vn(this)};function Vn(t){if(t.h&&typeof b<"u"&&(!t.v[1]||Q(t)!=4||t.Z()!=2)){if(t.u&&Q(t)==4)cn(t.Ea,0,t);else if(V(t,"readystatechange"),Q(t)==4){t.h=!1;try{const E=t.Z();t:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var o;if(o=E===0){var g=String(t.D).match(Pn)[1]||null;!g&&w.self&&w.self.location&&(g=w.self.location.protocol.slice(0,-1)),o=!Ii.test(g?g.toLowerCase():"")}i=o}if(i)V(t,"complete"),V(t,"success");else{t.m=6;try{var y=2<Q(t)?t.g.statusText:""}catch{y=""}t.l=y+" ["+t.Z()+"]",Un(t)}}finally{re(t)}}}}function re(t,e){if(t.g){zn(t);const i=t.g,o=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||V(t,"ready");try{i.onreadystatechange=o}catch{}}}function zn(t){t.I&&(w.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function Q(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<Q(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ii(e)}};function qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _i(t){const e={};t=(t.g&&2<=Q(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(U(t[o]))continue;var i=p(t[o]);const g=i[0];if(i=i[1],typeof i!="string")continue;i=i.trim();const y=e[g]||[];e[g]=y,y.push(i)}d(e,function(o){return o.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lt(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function Gn(t){this.Aa=0,this.i=[],this.j=new Rt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lt("baseRetryDelayMs",5e3,t),this.cb=Lt("retryDelaySeedMs",1e4,t),this.Wa=Lt("forwardChannelMaxRetries",2,t),this.wa=Lt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new _n(t&&t.concurrentRequestLimit),this.Da=new Ti,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gn.prototype,n.la=8,n.G=1,n.connect=function(t,e,i,o){z(0),this.W=t,this.H=e||{},i&&o!==void 0&&(this.H.OSID=i,this.H.OAID=o),this.F=this.X,this.I=er(this,null,this.W),se(this)};function Be(t){if(Xn(t),t.G==3){var e=t.U++,i=Z(t.I);if(R(i,"SID",t.K),R(i,"RID",e),R(i,"TYPE","terminate"),Ht(t,i),e=new nt(t,t.j,e),e.L=2,e.v=te(Z(i)),i=!1,w.navigator&&w.navigator.sendBeacon)try{i=w.navigator.sendBeacon(e.v.toString(),"")}catch{}!i&&w.Image&&(new Image().src=e.v,i=!0),i||(e.g=nr(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Yt(e)}tr(t)}function ie(t){t.g&&(He(t),t.g.cancel(),t.g=null)}function Xn(t){ie(t),t.u&&(w.clearTimeout(t.u),t.u=null),oe(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function se(t){if(!On(t.h)&&!t.s){t.s=!0;var e=t.Ga;At||on(),It||(At(),It=!0),ye.add(e,t),t.B=0}}function Oi(t,e){return Dn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=kt(S(t.Ga,t,e),Qn(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const g=new nt(this,this.j,t);let y=this.o;if(this.S&&(y?(y=h(y),f(y,this.S)):y=this.S),this.m!==null||this.O||(g.H=y,y=null),this.P)t:{for(var e=0,i=0;i<this.i.length;i++){e:{var o=this.i[i];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(e+=o,4096<e){e=i;break t}if(e===4096||i===this.i.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Jn(this,g,e),i=Z(this.I),R(i,"RID",t),R(i,"CVER",22),this.D&&R(i,"X-HTTP-Session-Id",this.D),Ht(this,i),y&&(this.O?e="headers="+encodeURIComponent(String(Fn(y)))+"&"+e:this.m&&je(i,this.m,y)),Me(this.h,g),this.Ua&&R(i,"TYPE","init"),this.P?(R(i,"$req",e),R(i,"SID","null"),g.T=!0,Re(g,i,null)):Re(g,i,e),this.G=2}}else this.G==3&&(t?Wn(this,t):this.i.length==0||On(this.h)||Wn(this))};function Wn(t,e){var i;e?i=e.l:i=t.U++;const o=Z(t.I);R(o,"SID",t.K),R(o,"RID",i),R(o,"AID",t.T),Ht(t,o),t.m&&t.o&&je(o,t.m,t.o),i=new nt(t,t.j,i,t.B+1),t.m===null&&(i.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Jn(t,i,1e3),i.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Me(t.h,i),Re(i,o,e)}function Ht(t,e){t.H&&J(t.H,function(i,o){R(e,o,i)}),t.l&&Nn({},function(i,o){R(e,o,i)})}function Jn(t,e,i){i=Math.min(t.i.length,i);var o=t.l?S(t.l.Na,t.l,t):null;t:{var g=t.i;let y=-1;for(;;){const E=["count="+i];y==-1?0<i?(y=g[0].g,E.push("ofs="+y)):y=0:E.push("ofs="+y);let D=!0;for(let j=0;j<i;j++){let _=g[j].g;const F=g[j].map;if(_-=y,0>_)y=Math.max(0,g[j].g-100),D=!1;else try{Ai(F,E,"req"+_+"_")}catch{o&&o(F)}}if(D){o=E.join("&");break t}}}return t=t.i.splice(0,i),e.D=t,o}function Kn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;At||on(),It||(At(),It=!0),ye.add(e,t),t.v=0}}function Le(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=kt(S(t.Fa,t),Qn(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,Yn(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=kt(S(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,z(10),ie(this),Yn(this))};function He(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function Yn(t){t.g=new nt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var e=Z(t.qa);R(e,"RID","rpc"),R(e,"SID",t.K),R(e,"AID",t.T),R(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&R(e,"TO",t.ja),R(e,"TYPE","xmlhttp"),Ht(t,e),t.m&&t.o&&je(e,t.m,t.o),t.L&&(t.g.I=t.L);var i=t.g;t=t.ia,i.L=1,i.v=te(Z(e)),i.m=null,i.P=!0,An(i,t)}n.Za=function(){this.C!=null&&(this.C=null,ie(this),Le(this),z(19))};function oe(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function Zn(t,e){var i=null;if(t.g==e){oe(t),He(t),t.g=null;var o=2}else if(xe(t.h,e))i=e.D,kn(t.h,e),o=1;else return;if(t.G!=0){if(e.o)if(o==1){i=e.m?e.m.length:0,e=Date.now()-e.F;var g=t.B;o=Wt(),V(o,new bn(o,i)),se(t)}else Kn(t);else if(g=e.s,g==3||g==0&&0<e.X||!(o==1&&Oi(t,e)||o==2&&Le(t)))switch(i&&0<i.length&&(e=t.h,e.i=e.i.concat(i)),g){case 1:ut(t,5);break;case 4:ut(t,10);break;case 3:ut(t,6);break;default:ut(t,2)}}}function Qn(t,e){let i=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(i*=2),i*e}function ut(t,e){if(t.j.info("Error code "+e),e==2){var i=S(t.fb,t),o=t.Xa;const g=!o;o=new lt(o||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Zt(o,"https"),te(o),g?Ei(o.toString(),i):Si(o.toString(),i)}else z(2);t.G=0,t.l&&t.l.sa(e),tr(t),Xn(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function tr(t){if(t.G=0,t.ka=[],t.l){const e=Rn(t.h);(e.length!=0||t.i.length!=0)&&(x(t.ka,e),x(t.ka,t.i),t.h.i.length=0,P(t.i),t.i.length=0),t.l.ra()}}function er(t,e,i){var o=i instanceof lt?Z(i):new lt(i);if(o.g!="")e&&(o.g=e+"."+o.g),Qt(o,o.s);else{var g=w.location;o=g.protocol,e=e?e+"."+g.hostname:g.hostname,g=+g.port;var y=new lt(null);o&&Zt(y,o),e&&(y.g=e),g&&Qt(y,g),i&&(y.l=i),o=y}return i=t.D,e=t.ya,i&&e&&R(o,i,e),R(o,"VER",t.la),Ht(t,o),o}function nr(t,e,i){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new M(new ee({eb:i})):new M(t.pa),e.Ha(t.J),e}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rr(){}n=rr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ae(){}ae.prototype.g=function(t,e){return new G(t,e)};function G(t,e){H.call(this),this.g=new Gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!U(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!U(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wt(this)}I(G,H),G.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},G.prototype.close=function(){Be(this.g)},G.prototype.o=function(t){var e=this.g;if(typeof t=="string"){var i={};i.__data__=t,t=i}else this.u&&(i={},i.__data__=Ie(t),t=i);e.i.push(new ci(e.Ya++,t)),e.G==3&&se(e)},G.prototype.N=function(){this.g.l=null,delete this.j,Be(this.g),delete this.g,G.aa.N.call(this)};function ir(t){_e.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}I(ir,_e);function sr(){Oe.call(this),this.status=1}I(sr,Oe);function wt(t){this.g=t}I(wt,rr),wt.prototype.ua=function(){V(this.g,"a")},wt.prototype.ta=function(t){V(this.g,new ir(t))},wt.prototype.sa=function(t){V(this.g,new sr)},wt.prototype.ra=function(){V(this.g,"b")},ae.prototype.createWebChannel=ae.prototype.g,G.prototype.send=G.prototype.o,G.prototype.open=G.prototype.m,G.prototype.close=G.prototype.close,po=function(){return new ae},fo=function(){return Wt()},co=at,uo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jt.NO_ERROR=0,Jt.TIMEOUT=8,Jt.HTTP_ERROR=6,lo=Jt,En.COMPLETE="complete",ho=En,mn.EventType=Ot,Ot.OPEN="a",Ot.CLOSE="b",Ot.ERROR="c",Ot.MESSAGE="d",H.prototype.listen=H.prototype.K,ao=mn,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha,oo=M}).apply(typeof le<"u"?le:typeof self<"u"?self:typeof window<"u"?window:{});var go="firebase",mo="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(go,mo,"app");const Or="@firebase/installations",tn="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=1e4,kr=`w:${tn}`,Rr="FIS_v2",yo="https://firebaseinstallations.googleapis.com/v1",vo=3600*1e3,wo="installations",bo="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dt=new Ye(wo,bo,Eo);function Nr(n){return n instanceof mt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr({projectId:n}){return`${yo}/projects/${n}/installations`}function xr(n){return{token:n.token,requestStatus:2,expiresIn:To(n.expiresIn),creationTime:Date.now()}}async function Mr(n,r){const a=(await r.json()).error;return dt.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function jr({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function So(n,{refreshToken:r}){const s=jr(n);return s.append("Authorization",Ao(r)),s}async function Br(n){const r=await n();return r.status>=500&&r.status<600?n():r}function To(n){return Number(n.replace("s","000"))}function Ao(n){return`${Rr} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io({appConfig:n,heartbeatServiceProvider:r},{fid:s}){const a=Pr(n),c=jr(n),v=r.getImmediate({optional:!0});if(v){const T=await v.getHeartbeatsHeader();T&&c.append("x-firebase-client",T)}const b={fid:s,authVersion:Rr,appId:n.appId,sdkVersion:kr},w={method:"POST",headers:c,body:JSON.stringify(b)},A=await Br(()=>fetch(a,w));if(A.ok){const T=await A.json();return{fid:T.fid||s,registrationStatus:2,refreshToken:T.refreshToken,authToken:xr(T.authToken)}}else throw await Mr("Create Installation",A)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return new Promise(r=>{setTimeout(r,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=/^[cdef][\w-]{21}$/,Je="";function Oo(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const s=Do(n);return _o.test(s)?s:Je}catch{return Je}}function Do(n){return Co(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map;function Fr(n,r){const s=ge(n);$r(s,r),ko(s,r)}function $r(n,r){const s=Hr.get(n);if(s)for(const a of s)a(r)}function ko(n,r){const s=Ro();s&&s.postMessage({key:n,fid:r}),No()}let ft=null;function Ro(){return!ft&&"BroadcastChannel"in self&&(ft=new BroadcastChannel("[Firebase] FID Change"),ft.onmessage=n=>{$r(n.data.key,n.data.fid)}),ft}function No(){Hr.size===0&&ft&&(ft.close(),ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="firebase-installations-database",xo=1,gt="firebase-installations-store";let Ve=null;function en(){return Ve||(Ve=br(Po,xo,{upgrade:(n,r)=>{switch(r){case 0:n.createObjectStore(gt)}}})),Ve}async function ce(n,r){const s=ge(n),c=(await en()).transaction(gt,"readwrite"),v=c.objectStore(gt),b=await v.get(s);return await v.put(r,s),await c.done,(!b||b.fid!==r.fid)&&Fr(n,r.fid),r}async function Ur(n){const r=ge(n),a=(await en()).transaction(gt,"readwrite");await a.objectStore(gt).delete(r),await a.done}async function me(n,r){const s=ge(n),c=(await en()).transaction(gt,"readwrite"),v=c.objectStore(gt),b=await v.get(s),w=r(b);return w===void 0?await v.delete(s):await v.put(w,s),await c.done,w&&(!b||b.fid!==w.fid)&&Fr(n,w.fid),w}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n){let r;const s=await me(n.appConfig,a=>{const c=Mo(a),v=jo(n,c);return r=v.registrationPromise,v.installationEntry});return s.fid===Je?{installationEntry:await r}:{installationEntry:s,registrationPromise:r}}function Mo(n){const r=n||{fid:Oo(),registrationStatus:0};return Vr(r)}function jo(n,r){if(r.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(dt.create("app-offline"));return{installationEntry:r,registrationPromise:c}}const s={fid:r.fid,registrationStatus:1,registrationTime:Date.now()},a=Bo(n,s);return{installationEntry:s,registrationPromise:a}}else return r.registrationStatus===1?{installationEntry:r,registrationPromise:Lo(n)}:{installationEntry:r}}async function Bo(n,r){try{const s=await Io(n,r);return ce(n.appConfig,s)}catch(s){throw Nr(s)&&s.customData.serverCode===409?await Ur(n.appConfig):await ce(n.appConfig,{fid:r.fid,registrationStatus:0}),s}}async function Lo(n){let r=await gr(n.appConfig);for(;r.registrationStatus===1;)await Lr(100),r=await gr(n.appConfig);if(r.registrationStatus===0){const{installationEntry:s,registrationPromise:a}=await nn(n);return a||s}return r}function gr(n){return me(n,r=>{if(!r)throw dt.create("installation-not-found");return Vr(r)})}function Vr(n){return Ho(n)?{fid:n.fid,registrationStatus:0}:n}function Ho(n){return n.registrationStatus===1&&n.registrationTime+Dr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo({appConfig:n,heartbeatServiceProvider:r},s){const a=$o(n,s),c=So(n,s),v=r.getImmediate({optional:!0});if(v){const T=await v.getHeartbeatsHeader();T&&c.append("x-firebase-client",T)}const b={installation:{sdkVersion:kr,appId:n.appId}},w={method:"POST",headers:c,body:JSON.stringify(b)},A=await Br(()=>fetch(a,w));if(A.ok){const T=await A.json();return xr(T)}else throw await Mr("Generate Auth Token",A)}function $o(n,{fid:r}){return`${Pr(n)}/${r}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(n,r=!1){let s;const a=await me(n.appConfig,v=>{if(!zr(v))throw dt.create("not-registered");const b=v.authToken;if(!r&&zo(b))return v;if(b.requestStatus===1)return s=Uo(n,r),v;{if(!navigator.onLine)throw dt.create("app-offline");const w=Go(v);return s=Vo(n,w),w}});return s?await s:a.authToken}async function Uo(n,r){let s=await mr(n.appConfig);for(;s.authToken.requestStatus===1;)await Lr(100),s=await mr(n.appConfig);const a=s.authToken;return a.requestStatus===0?rn(n,r):a}function mr(n){return me(n,r=>{if(!zr(r))throw dt.create("not-registered");const s=r.authToken;return Xo(s)?Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}):r})}async function Vo(n,r){try{const s=await Fo(n,r),a=Object.assign(Object.assign({},r),{authToken:s});return await ce(n.appConfig,a),s}catch(s){if(Nr(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Ur(n.appConfig);else{const a=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}});await ce(n.appConfig,a)}throw s}}function zr(n){return n!==void 0&&n.registrationStatus===2}function zo(n){return n.requestStatus===2&&!qo(n)}function qo(n){const r=Date.now();return r<n.creationTime||n.creationTime+n.expiresIn<r+vo}function Go(n){const r={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:r})}function Xo(n){return n.requestStatus===1&&n.requestTime+Dr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(n){const r=n,{installationEntry:s,registrationPromise:a}=await nn(r);return a?a.catch(console.error):rn(r).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(n,r=!1){const s=n;return await Ko(s),(await rn(s,r)).token}async function Ko(n){const{registrationPromise:r}=await nn(n);r&&await r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){if(!n||!n.options)throw ze("App Configuration");if(!n.name)throw ze("App Name");const r=["projectId","apiKey","appId"];for(const s of r)if(!n.options[s])throw ze(s);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ze(n){return dt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="installations",Zo="installations-internal",Qo=n=>{const r=n.getProvider("app").getImmediate(),s=Yo(r),a=Qe(r,"heartbeat");return{app:r,appConfig:s,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ta=n=>{const r=n.getProvider("app").getImmediate(),s=Qe(r,qr).getImmediate();return{getId:()=>Wo(s),getToken:c=>Jo(s,c)}};function ea(){Et(new pt(qr,Qo,"PUBLIC")),Et(new pt(Zo,ta,"PRIVATE"))}ea();ot(Or,tn);ot(Or,tn,"esm2017");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="type.googleapis.com/google.protobuf.Int64Value",ra="type.googleapis.com/google.protobuf.UInt64Value";function Gr(n,r){const s={};for(const a in n)n.hasOwnProperty(a)&&(s[a]=r(n[a]));return s}function fe(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(r=>fe(r));if(typeof n=="function"||typeof n=="object")return Gr(n,r=>fe(r));throw new Error("Data cannot be encoded in JSON: "+n)}function St(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case na:case ra:{const r=Number(n.value);if(isNaN(r))throw new Error("Data cannot be decoded from JSON: "+n);return r}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(r=>St(r)):typeof n=="function"||typeof n=="object"?Gr(n,r=>St(r)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends mt{constructor(r,s,a){super(`${sn}/${r}`,s||""),this.details=a,Object.setPrototypeOf(this,q.prototype)}}function ia(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function pe(n,r){let s=ia(n),a=s,c;try{const v=r&&r.error;if(v){const b=v.status;if(typeof b=="string"){if(!yr[b])return new q("internal","internal");s=yr[b],a=b}const w=v.message;typeof w=="string"&&(a=w),c=v.details,c!==void 0&&(c=St(c))}}catch{}return s==="ok"?null:new q(s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(r,s,a,c){this.app=r,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Vs(r)&&r.settings.appCheckToken&&(this.serverAppAppCheckToken=r.settings.appCheckToken),this.auth=s.getImmediate({optional:!0}),this.messaging=a.getImmediate({optional:!0}),this.auth||s.get().then(v=>this.auth=v,()=>{}),this.messaging||a.get().then(v=>this.messaging=v,()=>{}),this.appCheck||c==null||c.get().then(v=>this.appCheck=v,()=>{})}async getAuthToken(){if(this.auth)try{const r=await this.auth.getToken();return r==null?void 0:r.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(r){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const s=r?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return s.error?null:s.token}return null}async getContext(r){const s=await this.getAuthToken(),a=await this.getMessagingToken(),c=await this.getAppCheckToken(r);return{authToken:s,messagingToken:a,appCheckToken:c}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="us-central1",oa=/^data: (.*?)(?:\n|$)/;function aa(n){let r=null;return{promise:new Promise((s,a)=>{r=setTimeout(()=>{a(new q("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{r&&clearTimeout(r)}}}class ha{constructor(r,s,a,c,v=Ke,b=(...w)=>fetch(...w)){this.app=r,this.fetchImpl=b,this.emulatorOrigin=null,this.contextProvider=new sa(r,s,a,c),this.cancelAllRequests=new Promise(w=>{this.deleteService=()=>Promise.resolve(w())});try{const w=new URL(v);this.customDomain=w.origin+(w.pathname==="/"?"":w.pathname),this.region=Ke}catch{this.customDomain=null,this.region=v}}_delete(){return this.deleteService()}_url(r){const s=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${s}/${this.region}/${r}`:this.customDomain!==null?`${this.customDomain}/${r}`:`https://${this.region}-${s}.cloudfunctions.net/${r}`}}function la(n,r,s){const a=Ar(r);n.emulatorOrigin=`http${a?"s":""}://${r}:${s}`,a&&($i(n.emulatorOrigin),zi("Functions",!0))}function ua(n,r,s){const a=c=>fa(n,r,c,{});return a.stream=(c,v)=>da(n,r,c,v),a}async function ca(n,r,s,a){s["Content-Type"]="application/json";let c;try{c=await a(n,{method:"POST",body:JSON.stringify(r),headers:s})}catch{return{status:0,json:null}}let v=null;try{v=await c.json()}catch{}return{status:c.status,json:v}}async function Xr(n,r){const s={},a=await n.contextProvider.getContext(r.limitedUseAppCheckTokens);return a.authToken&&(s.Authorization="Bearer "+a.authToken),a.messagingToken&&(s["Firebase-Instance-ID-Token"]=a.messagingToken),a.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=a.appCheckToken),s}function fa(n,r,s,a){const c=n._url(r);return pa(n,c,s,a)}async function pa(n,r,s,a){s=fe(s);const c={data:s},v=await Xr(n,a),b=a.timeout||7e4,w=aa(b),A=await Promise.race([ca(r,c,v,n.fetchImpl),w.promise,n.cancelAllRequests]);if(w.cancel(),!A)throw new q("cancelled","Firebase Functions instance was deleted.");const T=pe(A.status,A.json);if(T)throw T;if(!A.json)throw new q("internal","Response is not valid JSON object.");let C=A.json.data;if(typeof C>"u"&&(C=A.json.result),typeof C>"u")throw new q("internal","Response is missing data field.");return{data:St(C)}}function da(n,r,s,a){const c=n._url(r);return ga(n,c,s,a||{})}async function ga(n,r,s,a){var c;s=fe(s);const v={data:s},b=await Xr(n,a);b["Content-Type"]="application/json",b.Accept="text/event-stream";let w;try{w=await n.fetchImpl(r,{method:"POST",body:JSON.stringify(v),headers:b,signal:a==null?void 0:a.signal})}catch(O){if(O instanceof Error&&O.name==="AbortError"){const P=new q("cancelled","Request was cancelled.");return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}const I=pe(0,null);return{data:Promise.reject(I),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(I)}}}}}}let A,T;const C=new Promise((O,I)=>{A=O,T=I});(c=a==null?void 0:a.signal)===null||c===void 0||c.addEventListener("abort",()=>{const O=new q("cancelled","Request was cancelled.");T(O)});const k=w.body.getReader(),S=ma(k,A,T,a==null?void 0:a.signal);return{stream:{[Symbol.asyncIterator](){const O=S.getReader();return{async next(){const{value:I,done:P}=await O.read();return{value:I,done:P}},async return(){return await O.cancel(),{done:!0,value:void 0}}}}},data:C}}function ma(n,r,s,a){const c=(b,w)=>{const A=b.match(oa);if(!A)return;const T=A[1];try{const C=JSON.parse(T);if("result"in C){r(St(C.result));return}if("message"in C){w.enqueue(St(C.message));return}if("error"in C){const k=pe(0,C);w.error(k),s(k);return}}catch(C){if(C instanceof q){w.error(C),s(C);return}}},v=new TextDecoder;return new ReadableStream({start(b){let w="";return A();async function A(){if(a!=null&&a.aborted){const T=new q("cancelled","Request was cancelled");return b.error(T),s(T),Promise.resolve()}try{const{value:T,done:C}=await n.read();if(C){w.trim()&&c(w.trim(),b),b.close();return}if(a!=null&&a.aborted){const S=new q("cancelled","Request was cancelled");b.error(S),s(S),await n.cancel();return}w+=v.decode(T,{stream:!0});const k=w.split(`
`);w=k.pop()||"";for(const S of k)S.trim()&&c(S.trim(),b);return A()}catch(T){const C=T instanceof q?T:pe(0,null);b.error(C),s(C)}}},cancel(){return n.cancel()}})}const vr="@firebase/functions",wr="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="auth-internal",va="app-check-internal",wa="messaging-internal";function ba(n){const r=(s,{instanceIdentifier:a})=>{const c=s.getProvider("app").getImmediate(),v=s.getProvider(ya),b=s.getProvider(wa),w=s.getProvider(va);return new ha(c,v,b,w,a)};Et(new pt(sn,r,"PUBLIC").setMultipleInstances(!0)),ot(vr,wr,n),ot(vr,wr,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n=Xs(),r=Ke){const a=Qe(Ze(n),sn).getImmediate({identifier:r}),c=Hi("functions");return c&&Ea(a,...c),a}function Ea(n,r,s){la(Ze(n),r,s)}function $a(n,r,s){return ua(Ze(n),r)}ba();export{ka as A,ho as B,pt as C,lo as D,Ye as E,mt as F,po as G,fo as H,io as I,co as J,uo as K,cs as L,so as M,Gi as N,Xi as O,Ba as P,Ra as Q,Ha as R,La as S,Gs as T,Fa as U,$a as V,ao as W,oo as X,Et as _,Oa as a,_a as b,Vs as c,Ze as d,ja as e,N as f,Ta as g,Ir as h,Ia as i,Pi as j,Ar as k,Qe as l,Li as m,Xs as n,qe as o,$i as p,Pa as q,ot as r,Da as s,Na as t,zi as u,xa as v,Ma as w,Ca as x,Hi as y,Aa as z};
