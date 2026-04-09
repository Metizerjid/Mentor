import{L as B,_ as A,C as E,r as _,E as K,d as y,b as O,N as S,O as x,P as C,F as W,Q as L,l as k,n as Y,o as q}from"./firebase-core-pfi8a7uV.js";/**
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
 */const I="analytics",N="firebase_id",H="origin",V=60*1e3,Q="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",T="https://www.googletagmanager.com/gtag/js";/**
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
 */const l=new B("@firebase/analytics");/**
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
 */const J={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},u=new K("analytics","Analytics",J);/**
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
 */function X(e){if(!e.startsWith(T)){const t=u.create("invalid-gtag-resource",{gtagURL:e});return l.warn(t.message),""}return e}function z(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Z(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ee(e,t){const n=Z("firebase-js-sdk-policy",{createScriptURL:X}),a=document.createElement("script"),i=`${T}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function te(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ne(e,t,n,a,i,s){const r=a[i];try{if(r)await t[r];else{const c=(await z(n)).find(d=>d.measurementId===i);c&&await t[c.appId]}}catch(o){l.error(o)}e("config",i,s)}async function ie(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const o=await z(n);for(const c of r){const d=o.find(h=>h.measurementId===c),f=d&&t[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){l.error(s)}}function ae(e,t,n,a){async function i(s,...r){try{if(s==="event"){const[o,c]=r;await ie(e,t,n,o,c)}else if(s==="config"){const[o,c]=r;await ne(e,t,n,a,o,c)}else if(s==="consent"){const[o,c]=r;e("consent",o,c)}else if(s==="get"){const[o,c,d]=r;e("get",o,c,d)}else if(s==="set"){const[o]=r;e("set",o)}else e(s,...r)}catch(o){l.error(o)}}return i}function se(e,t,n,a,i){let s=function(...r){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ae(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function re(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(T)&&n.src.includes(e))return n;return null}/**
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
 */const oe=30,ce=1e3;class le{constructor(t={},n=ce){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const U=new le;function de(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ue(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:de(a)},s=Q.replace("{app-id}",n),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let o="";try{const c=await r.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw u.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function fe(e,t=U,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw u.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw u.create("no-api-key")}const r=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new he;return setTimeout(async()=>{o.abort()},V),G({appId:a,apiKey:i,measurementId:s},r,o,t)}async function G(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=U){var s;const{appId:r,measurementId:o}=e;try{await pe(a,t)}catch(c){if(o)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:r,measurementId:o};throw c}try{const c=await ue(e);return i.deleteThrottleMetadata(r),c}catch(c){const d=c;if(!me(d)){if(i.deleteThrottleMetadata(r),o)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:r,measurementId:o};throw c}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?C(n,i.intervalMillis,oe):C(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(r,h),l.debug(`Calling attemptFetch again in ${f} millis`),G(e,h,a,i)}}function pe(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(u.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function me(e){if(!(e instanceof W)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class he{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ge(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,r=Object.assign(Object.assign({},a),{send_to:s});e("event",n,r)}}async function ye(e,t,n,a){{const i=await t;e("config",i,{update:!0,user_id:n})}}async function we(e,t,n,a){{const i=await t;e("config",i,{update:!0,user_properties:n})}}async function Ie(e,t){const n=await e;window[`ga-disable-${n}`]=!t}let b;function j(e){b=e}/**
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
 */async function ve(){if(S())try{await x()}catch(e){return l.warn(u.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return l.warn(u.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function be(e,t,n,a,i,s,r){var o;const c=fe(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>l.error(p)),t.push(c);const d=ve().then(p=>{if(p)return a.getId()}),[f,h]=await Promise.all([c,d]);re(s)||ee(s,f.measurementId),b&&(i("consent","default",b),j(void 0)),i("js",new Date);const w=(o=r==null?void 0:r.config)!==null&&o!==void 0?o:{};return w[H]="firebase",w.update=!0,h!=null&&(w[N]=h),i("config",f.measurementId,w),f.measurementId}/**
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
 */class Te{constructor(t){this.app=t}_delete(){return delete m[this.app.options.appId],Promise.resolve()}}let m={},D=[];const M={};let v="dataLayer",Ae="gtag",F,g,R=!1;function Ee(){const e=[];if(O()&&e.push("This is a browser extension environment."),L()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=u.create("invalid-analytics-context",{errorInfo:t});l.warn(n.message)}}function _e(e,t,n){Ee();const a=e.options.appId;if(!a)throw u.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw u.create("no-api-key");if(m[a]!=null)throw u.create("already-exists",{id:a});if(!R){te(v);const{wrappedGtag:s,gtagCore:r}=se(m,D,M,v,Ae);g=s,F=r,R=!0}return m[a]=be(e,D,M,t,F,v,n),new Te(e)}function Re(e=Y()){e=y(e);const t=k(e,I);return t.isInitialized()?t.getImmediate():Ce(e)}function Ce(e,t={}){const n=k(e,I);if(n.isInitialized()){const i=n.getImmediate();if(q(t,n.getOptions()))return i;throw u.create("already-initialized")}return n.initialize({options:t})}async function Pe(){if(O()||!L()||!S())return!1;try{return await x()}catch{return!1}}function $e(e,t,n){e=y(e),ye(g,m[e.app.options.appId],t).catch(a=>l.error(a))}function Oe(e,t,n){e=y(e),we(g,m[e.app.options.appId],t).catch(a=>l.error(a))}function Se(e,t){e=y(e),Ie(m[e.app.options.appId],t).catch(n=>l.error(n))}function De(e,t,n,a){e=y(e),ge(g,m[e.app.options.appId],t,n,a).catch(i=>l.error(i))}function xe(e){g?g("consent","update",e):j(e)}const P="@firebase/analytics",$="0.10.17";function Me(){A(new E(I,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return _e(a,i,n)},"PUBLIC")),A(new E("analytics-internal",e,"PRIVATE")),_(P,$),_(P,$,"esm2017");function e(t){try{const n=t.getProvider(I).getImmediate();return{logEvent:(a,i,s)=>De(n,a,i,s)}}catch(n){throw u.create("interop-component-reg-failed",{reason:n})}}}Me();export{$e as a,Oe as b,Se as c,Re as g,Pe as i,De as l,xe as s};
