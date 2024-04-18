let e,t,r;var n,i,s,o,a,l,h,u,c,d,f,p,g,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},y={},v=y={};function w(){throw Error("setTimeout has not been defined")}function b(){throw Error("clearTimeout has not been defined")}function E(e){if(eH===setTimeout)return setTimeout(e,0);if((eH===w||!eH)&&setTimeout)return eH=setTimeout,setTimeout(e,0);try{return eH(e,0)}catch(t){try{return eH.call(null,e,0)}catch(t){return eH.call(this,e,0)}}}!function(){try{eH="function"==typeof setTimeout?setTimeout:w}catch(e){eH=w}try{eQ="function"==typeof clearTimeout?clearTimeout:b}catch(e){eQ=b}}();var _=[],T=!1,I=-1;function S(){T&&eW&&(T=!1,eW.length?_=eW.concat(_):I=-1,_.length&&C())}function C(){if(!T){var e=E(S);T=!0;for(var t=_.length;t;){for(eW=_,_=[];++I<t;)eW&&eW[I].run();I=-1,t=_.length}eW=null,T=!1,function(e){if(eQ===clearTimeout)return clearTimeout(e);if((eQ===b||!eQ)&&clearTimeout)return eQ=clearTimeout,clearTimeout(e);try{eQ(e)}catch(t){try{return eQ.call(null,e)}catch(t){return eQ.call(this,e)}}}(e)}}function A(e,t){this.fun=e,this.array=t}function D(){}v.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];_.push(new A(e,t)),1!==_.length||T||E(C)},A.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=D,v.addListener=D,v.once=D,v.off=D,v.removeListener=D,v.removeAllListeners=D,v.emit=D,v.prependListener=D,v.prependOnceListener=D,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0};/**
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
 */const N=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},k=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},L={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=i>>2,u=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(c=64)),n.push(r[h],r[u],r[c],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(N(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):k(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new R;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x=function(e){let t=N(e);return L.encodeByteArray(t,!0)},O=function(e){return x(e).replace(/\./g,"")},M=function(e){try{return L.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},P=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==m)return m;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,V=()=>{if(void 0===y||void 0===y.env)return;let e=void 0;if(e)return JSON.parse(e)},U=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&M(e[1]);return t&&JSON.parse(t)},F=()=>{try{return P()||V()||U()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},B=e=>{var t,r;return null===(r=null===(t=F())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},j=e=>{let t=B(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},q=()=>{var e;return null===(e=F())||void 0===e?void 0:e.config};/**
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
 */class ${constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
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
 */function z(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function K(){try{return"object"==typeof indexedDB}catch(e){return!1}}class G extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(Q,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new G(n,o,r)}}const Q=/\{\$([^}]+)}/g;function W(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(Y(r)&&Y(s)){if(!W(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function Y(e){return null!==e&&"object"==typeof e}/**
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
 */function X(e){return e&&e._delegate?e._delegate:e}class J{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Z="[DEFAULT]";/**
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
 */class ee{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new $;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:Z})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=Z){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Z){return this.instances.has(e)}getOptions(e=Z){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===Z?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=Z){return this.component?this.component.multipleInstances?e:Z:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class et{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ee(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const er=[];(eG=eY||(eY={}))[eG.DEBUG=0]="DEBUG",eG[eG.VERBOSE=1]="VERBOSE",eG[eG.INFO=2]="INFO",eG[eG.WARN=3]="WARN",eG[eG.ERROR=4]="ERROR",eG[eG.SILENT=5]="SILENT";const en={debug:eY.DEBUG,verbose:eY.VERBOSE,info:eY.INFO,warn:eY.WARN,error:eY.ERROR,silent:eY.SILENT},ei=eY.INFO,es={[eY.DEBUG]:"log",[eY.VERBOSE]:"log",[eY.INFO]:"info",[eY.WARN]:"warn",[eY.ERROR]:"error"},eo=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=es[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ea{constructor(e){this.name=e,this._logLevel=ei,this._logHandler=eo,this._userLogHandler=null,er.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in eY))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?en[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,eY.DEBUG,...e),this._logHandler(this,eY.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,eY.VERBOSE,...e),this._logHandler(this,eY.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,eY.INFO,...e),this._logHandler(this,eY.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,eY.WARN,...e),this._logHandler(this,eY.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,eY.ERROR,...e),this._logHandler(this,eY.ERROR,...e)}}const el=(e,t)=>t.some(t=>e instanceof t),eh=new WeakMap,eu=new WeakMap,ec=new WeakMap,ed=new WeakMap,ef=new WeakMap;let ep={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return eu.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ec.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return eg(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eg(r){var n;if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eg(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eh.set(t,e)}).catch(()=>{}),ef.set(t,e),t}(r);if(ed.has(r))return ed.get(r);let i="function"==typeof(n=r)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(em(this),e),eg(eh.get(this))}:function(...e){return eg(n.apply(em(this),e))}:function(e,...t){let r=n.call(em(this),e,...t);return ec.set(r,e.sort?e.sort():[e]),eg(r)}:(n instanceof IDBTransaction&&function(e){if(eu.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eu.set(e,t)}(n),el(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,ep):n;return i!==r&&(ed.set(r,i),ef.set(i,r)),i}const em=e=>ef.get(e),ey=["get","getKey","getAll","getAllKeys","count"],ev=["put","add","delete","clear"],ew=new Map;function eb(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ew.get(t))return ew.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=ev.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||ey.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return ew.set(t,s),s}ep={...r=ep,get:(e,t,n)=>eb(e,t)||r.get(e,t,n),has:(e,t)=>!!eb(e,t)||r.has(e,t)};/**
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
 */class eE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const e_="@firebase/app",eT="0.10.1",eI=new ea("@firebase/app"),eS="[DEFAULT]",eC={[e_]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eA=new Map,eD=new Map,eN=new Map;function ek(e,t){try{e.container.addComponent(t)}catch(r){eI.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function eL(e){let t=e.name;if(eN.has(t))return eI.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(eN.set(t,e),eA.values()))ek(r,e);for(let t of eD.values())ek(t,e);return!0}const eR=new H("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class ex{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new J("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eR.create("app-deleted",{appName:this._name})}}function eO(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:eS,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw eR.create("bad-app-name",{appName:String(i)});if(r||(r=q()),!r)throw eR.create("no-options");let s=eA.get(i);if(s){if(W(r,s.options)&&W(n,s.config))return s;throw eR.create("duplicate-app",{appName:i})}let o=new et(i);for(let e of eN.values())o.addComponent(e);let a=new ex(r,n,o);return eA.set(i,a),a}function eM(e,t,r){var n;let i=null!==(n=eC[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eI.warn(e.join(" "));return}eL(new J(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const eP="firebase-heartbeat-store";let eV=null;function eU(){return eV||(eV=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=eg(o);return n&&o.addEventListener("upgradeneeded",e=>{n(eg(o.result),e.oldVersion,e.newVersion,eg(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eP)}catch(e){console.warn(e)}}}).catch(e=>{throw eR.create("idb-open",{originalErrorMessage:e.message})})),eV}async function eF(e){try{let t=(await eU()).transaction(eP),r=await t.objectStore(eP).get(ej(e));return await t.done,r}catch(e){if(e instanceof G)eI.warn(e.message);else{let t=eR.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eI.warn(t.message)}}}async function eB(e,t){try{let r=(await eU()).transaction(eP,"readwrite"),n=r.objectStore(eP);await n.put(t,ej(e)),await r.done}catch(e){if(e instanceof G)eI.warn(e.message);else{let t=eR.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eI.warn(t.message)}}}function ej(e){return`${e.name}!${e.options.appId}`}class eq{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ez(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=e$();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=e$(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),eK(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),eK(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=O(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function e$(){return new Date().toISOString().substring(0,10)}class ez{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!K()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await eF(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function eK(e){return O(JSON.stringify({version:2,heartbeats:e})).length}eL(new J("platform-logger",e=>new eE(e),"PRIVATE")),eL(new J("heartbeat",e=>new eq(e),"PRIVATE")),eM(e_,eT,""),eM(e_,eT,"esm2017"),eM("fire-js",""),eM("firebase","10.11.0","app");var eG,eH,eQ,eW,eY,eX,eJ={},eZ=eZ||{},e0=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==m?m:"undefined"!=typeof self?self:{})||self;function e1(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function e2(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function e4(e,t,r){return e.call.apply(e.bind,arguments)}function e9(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function e6(e,t,r){return(e6=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e4:e9).apply(null,arguments)}function e5(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function e3(e,t){function r(){}r.prototype=t.prototype,e.$=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.ac=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function e8(){this.s=this.s,this.o=this.o}e8.prototype.s=!1,e8.prototype.sa=function(){this.s||(this.s=!0,this.N())},e8.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e7=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function te(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function tt(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(e1(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function tr(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tr.prototype.h=function(){this.defaultPrevented=!0};var tn=function(){if(!e0.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};e0.addEventListener("test",e,t),e0.removeEventListener("test",e,t)}catch(e){}return e}();function ti(e){return/^[\s\xa0]*$/.test(e)}function ts(){var e=e0.navigator;return e&&(e=e.userAgent)?e:""}function to(e){return -1!=ts().indexOf(e)}function ta(e){return ta[" "](e),e}ta[" "]=function(){};var tl=to("Opera"),th=to("Trident")||to("MSIE"),tu=to("Edge"),tc=tu||th,td=to("Gecko")&&!(-1!=ts().toLowerCase().indexOf("webkit")&&!to("Edge"))&&!(to("Trident")||to("MSIE"))&&!to("Edge"),tf=-1!=ts().toLowerCase().indexOf("webkit")&&!to("Edge");function tp(){var e=e0.document;return e?e.documentMode:void 0}e:{var tg,tm="",ty=(tg=ts(),td?/rv:([^\);]+)(\)|;)/.exec(tg):tu?/Edge\/([\d\.]+)/.exec(tg):th?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(tg):tf?/WebKit\/(\S+)/.exec(tg):tl?/(?:Version)[ \/]?(\S+)/.exec(tg):void 0);if(ty&&(tm=ty?ty[1]:""),th){var tv=tp();if(null!=tv&&tv>parseFloat(tm)){s=String(tv);break e}}s=tm}var tw=e0.document&&th&&(tp()||parseInt(s,10))||void 0;function tb(e,t){if(tr.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(td){e:{try{ta(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tE[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tb.$.h.call(this)}}e3(tb,tr);var tE={2:"touch",3:"pen",4:"mouse"};tb.prototype.h=function(){tb.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var t_="closure_listenable_"+(1e6*Math.random()|0),tT=0;function tI(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.la=i,this.key=++tT,this.fa=this.ia=!1}function tS(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tC(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function tA(e){let t={};for(let r in e)t[r]=e[r];return t}const tD="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tN(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<tD.length;t++)r=tD[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function tk(e){this.src=e,this.g={},this.h=0}function tL(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=e7(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(tS(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function tR(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!r==s.capture&&s.la==n)return i}return -1}tk.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=tR(e,t,n,i);return -1<o?(t=e[o],r||(t.ia=!1)):((t=new tI(t,this.src,s,!!n,i)).ia=r,e.push(t)),t};var tx="closure_lm_"+(1e6*Math.random()|0),tO={};function tM(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=e2(i)?!!i.capture:!!i,a=tF(e);if(a||(e[tx]=a=new tk(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return tU.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)tn||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(tV(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function tP(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[t_])tL(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(tV(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=tF(t))?(tL(r,e),0==r.h&&(r.src=null,t[tx]=null)):tS(e)}}}function tV(e){return e in tO?tO[e]:tO[e]="on"+e}function tU(e,t){if(e.fa)e=!0;else{t=new tb(t,this);var r=e.listener,n=e.la||e.src;e.ia&&tP(e),e=r.call(n,t)}return e}function tF(e){return(e=e[tx])instanceof tk?e:null}var tB="__closure_events_fn_"+(1e9*Math.random()>>>0);function tj(e){return"function"==typeof e?e:(e[tB]||(e[tB]=function(t){return e.handleEvent(t)}),e[tB])}function tq(){e8.call(this),this.i=new tk(this),this.S=this,this.J=null}function t$(e,t){var r,n=e.J;if(n)for(r=[];n;n=n.J)r.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new tr(t,e);else if(t instanceof tr)t.target=t.target||e;else{var i=t;tN(t=new tr(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=tz(o,n,!0,t)&&i}if(i=tz(o=t.g=e,n,!0,t)&&i,i=tz(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=tz(o=t.g=r[s],n,!1,t)&&i}function tz(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==r){var a=o.listener,l=o.la||o.src;o.ia&&tL(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}e3(tq,e8),tq.prototype[t_]=!0,tq.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=e2(i)?!!i.capture:!!i,n=tj(n),t&&t[t_])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=tR(o=t.g[r],n,i,s))&&(tS(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=tF(t))&&(r=t.g[r.toString()],t=-1,r&&(t=tR(r,n,i,s)),(n=-1<t?r[t]:null)&&tP(n))}(this,e,t,r,n)},tq.prototype.N=function(){if(tq.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)tS(r[n]);delete t.g[e],t.h--}}this.J=null},tq.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},tq.prototype.P=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var tK=e0.JSON.stringify,tG=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tH,e=>e.reset());class tH{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let tQ,tW=!1,tY=new class{constructor(){this.h=this.g=null}add(e,t){let r=tG.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},tX=()=>{let e=e0.Promise.resolve(void 0);tQ=()=>{e.then(tJ)}};var tJ=()=>{let e;for(var t;e=null,tY.g&&(e=tY.g,tY.g=tY.g.next,tY.g||(tY.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){e0.setTimeout(()=>{throw e},0)}(e)}tG.j(t),100>tG.h&&(tG.h++,t.next=tG.g,tG.g=t)}tW=!1};function tZ(e,t){tq.call(this),this.h=e||1,this.g=t||e0,this.j=e6(this.qb,this),this.l=Date.now()}function t0(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function t1(e,t,r){if("function"==typeof e)r&&(e=e6(e,r));else if(e&&"function"==typeof e.handleEvent)e=e6(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:e0.setTimeout(e,t||0)}e3(tZ,tq),(eX=tZ.prototype).ga=!1,eX.T=null,eX.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),t$(this,"tick"),this.ga&&(t0(this),this.start()))}},eX.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eX.N=function(){tZ.$.N.call(this),t0(this),delete this.g};class t2 extends e8{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=t1(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(e0.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function t4(e){e8.call(this),this.h=e,this.g={}}e3(t4,e8);var t9=[];function t6(e,t,r,n){Array.isArray(r)||(r&&(t9[0]=r.toString()),r=t9);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=tj(n),t&&t[t_]?t.P(r,n,e2(i)?!!i.capture:!!i,s):tM(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=tj(n),t&&t[t_]?t.O(r,n,e2(i)?!!i.capture:!!i,s):tM(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function t5(e){tC(e.g,function(e,t){this.g.hasOwnProperty(t)&&tP(e)},e),e.g={}}function t3(){this.g=!0}function t8(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return tK(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}t4.prototype.N=function(){t4.$.N.call(this),t5(this)},t4.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},t3.prototype.Ea=function(){this.g=!1},t3.prototype.info=function(){};var t7={},re=null;function rt(){return re=re||new tq}function rr(e){tr.call(this,t7.Ta,e)}function rn(e){let t=rt();t$(t,new rr(t))}function ri(e,t){tr.call(this,t7.STAT_EVENT,e),this.stat=t}function rs(e){let t=rt();t$(t,new ri(t,e))}function ro(e,t){tr.call(this,t7.Ua,e),this.size=t}function ra(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return e0.setTimeout(function(){e()},t)}t7.Ta="serverreachability",e3(rr,tr),t7.STAT_EVENT="statevent",e3(ri,tr),t7.Ua="timingevent",e3(ro,tr);var rl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ru(){}function rc(e){return e.h||(e.h=e.i())}function rd(){}ru.prototype.h=null;var rf={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rp(){tr.call(this,"d")}function rg(){tr.call(this,"c")}function rm(){}function ry(e,t,r,n){this.l=e,this.j=t,this.m=r,this.W=n||1,this.U=new t4(this),this.P=rw,e=tc?125:void 0,this.V=new tZ(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rv}function rv(){this.i=null,this.g="",this.h=!1}e3(rp,tr),e3(rg,tr),e3(rm,ru),rm.prototype.g=function(){return new XMLHttpRequest},rm.prototype.i=function(){return{}},a=new rm;var rw=45e3,rb={},rE={};function r_(e,t,r){e.L=1,e.A=rB(rM(t)),e.u=r,e.S=!0,rT(e,null)}function rT(e,t){e.G=Date.now(),rC(e),e.B=rM(e.A);var r=e.B,n=e.W;Array.isArray(n)||(n=[String(n)]),rZ(r.i,"t",n),e.o=0,r=e.l.J,e.h=new rv,e.g=nq(e.l,r?t:null,!e.u),0<e.O&&(e.M=new t2(e6(e.Pa,e,e.g),e.O)),t6(e.U,e.g,"readystatechange",e.nb),t=e.I?tA(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),rn(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.j,e.v,e.B,e.m,e.W,e.u)}function rI(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function rS(e,t,r){let n=!0,i;for(;!e.J&&e.o<r.length;)if((i=function(e,t){var r=e.o,n=t.indexOf("\n",r);return -1==n?rE:isNaN(r=Number(t.substring(r,n)))?rb:(n+=1)+r>t.length?rE:(t=t.slice(n,n+r),e.o=n+r,t)}(e,r))==rE){4==t&&(e.s=4,rs(14),n=!1),t8(e.j,e.m,null,"[Incomplete Response]");break}else if(i==rb){e.s=4,rs(15),t8(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else t8(e.j,e.m,i,null),rL(e,i);rI(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=r.length||e.h.h||(e.s=1,rs(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+r.length),nO(t),t.M=!0,rs(11))):(t8(e.j,e.m,r,"[Invalid Chunked Response]"),rk(e),rN(e))}function rC(e){e.Y=Date.now()+e.P,rA(e,e.P)}function rA(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=ra(e6(e.lb,e),t)}function rD(e){e.C&&(e0.clearTimeout(e.C),e.C=null)}function rN(e){0==e.l.H||e.J||nV(e.l,e)}function rk(e){rD(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,t0(e.V),t5(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function rL(e,t){try{var r=e.l;if(0!=r.H&&(r.g==e||r5(r.i,e))){if(!e.K&&r5(r.i,e)&&3==r.H){try{var n=r.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.G+3e3<e.G)nP(r),nC(r);else break e}nx(r),rs(18)}}else r.Fa=i[1],0<r.Fa-r.V&&37500>i[2]&&r.G&&0==r.A&&!r.v&&(r.v=ra(e6(r.ib,r),6e3));if(1>=r6(r.i)&&r.oa){try{r.oa()}catch(e){}r.oa=void 0}}else nF(r,11)}else if((e.K||r.g==e)&&nP(r),!ti(t))for(i=r.Ja.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.V=a[0],a=a[1],2==r.H){if("c"==a[0]){r.K=a[1],r.pa=a[2];let t=a[3];null!=t&&(r.ra=t,r.l.info("VER="+r.ra));let i=a[4];null!=i&&(r.Ga=i,r.l.info("SVER="+r.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.l.info("backChannelRequestTimeoutMs_="+n)),n=r;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(r3(s,s.h),s.h=null))}if(n.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,rF(n.I,n.F,e))}}if(r.H=3,r.h&&r.h.Ba(),r.ca&&(r.S=Date.now()-e.G,r.l.info("Handshake RTT: "+r.S+"ms")),(n=r).wa=nj(n,n.J?n.pa:null,n.Y),e.K){r8(n.i,e);var o=n.L;o&&e.setTimeout(o),e.C&&(rD(e),rC(e)),n.g=e}else nR(n);0<r.j.length&&nD(r)}else"stop"!=a[0]&&"close"!=a[0]||nF(r,7)}else 3==r.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?nF(r,7):nS(r):"noop"!=a[0]&&r.h&&r.h.Aa(a),r.A=0)}}rn(4)}catch(e){}}function rR(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(e1(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(e1(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(e1(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(eX=ry.prototype).setTimeout=function(e){this.P=e},eX.nb=function(e){e=e.target;let t=this.M;t&&3==nw(e)?t.l():this.Pa(e)},eX.Pa=function(e){try{if(e==this.g)e:{let u=nw(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||tc||this.g&&(this.h.h||this.g.ja()||nb(this.g)))){this.J||4!=u||7==t||(8==t||0>=c?rn(3):rn(2)),rD(this);var r=this.g.da();this.ca=r;t:if(rI(this)){var n=nb(this.g);e="";var i=n.length,s=4==nw(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rk(this),rN(this);var o="";break t}this.h.i=new e0.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.j,this.v,this.B,this.m,this.W,u,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ti(a)){var h=a;break t}}h=null}if(r=h)t8(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rL(this,r);else{this.i=!1,this.s=3,rs(12),rk(this),rN(this);break e}}this.S?(rS(this,u,o),tc&&this.i&&3==u&&(t6(this.U,this.V,"tick",this.mb),this.V.start())):(t8(this.j,this.m,o,null),rL(this,o)),4==u&&rk(this),this.i&&!this.J&&(4==u?nV(this.l,this):(this.i=!1,rC(this)))}else(function(e){let t={};e=(e.g&&2<=nw(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(ti(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<o.indexOf("Unknown SID")?(this.s=3,rs(12)):(this.s=0,rs(13)),rk(this),rN(this)}}}catch(e){}finally{}},eX.mb=function(){if(this.g){var e=nw(this.g),t=this.g.ja();this.o<t.length&&(rD(this),rS(this,e,t),this.i&&4!=e&&rC(this))}},eX.cancel=function(){this.J=!0,rk(this)},eX.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(rn(),rs(17)),rk(this),this.s=2,rN(this)):rA(this,this.Y-e)};var rx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rO(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof rO){this.h=e.h,rP(this,e.j),this.s=e.s,this.g=e.g,rV(this,e.m),this.l=e.l;var t=e.i,r=new rW;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),rU(this,r),this.o=e.o}else e&&(t=String(e).match(rx))?(this.h=!1,rP(this,t[1]||"",!0),this.s=rj(t[2]||""),this.g=rj(t[3]||"",!0),rV(this,t[4]),this.l=rj(t[5]||"",!0),rU(this,t[6]||"",!0),this.o=rj(t[7]||"")):(this.h=!1,this.i=new rW(null,this.h))}function rM(e){return new rO(e)}function rP(e,t,r){e.j=r?rj(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rV(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rU(e,t,r){var n,i;t instanceof rW?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(rY(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(rX(this,t),rZ(this,r,e))},n)),n.j=i):(r||(t=rq(t,rH)),e.i=new rW(t,e.h))}function rF(e,t,r){e.i.set(t,r)}function rB(e){return rF(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rj(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rq(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,r$),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function r$(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rO.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rq(t,rz,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(rq(t,rz,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(rq(r,"/"==r.charAt(0)?rG:rK,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",rq(r,rQ)),e.join("")};var rz=/[#\/\?@]/g,rK=/[#\?:]/g,rG=/[#\?]/g,rH=/[#\?@]/g,rQ=/#/g;function rW(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rY(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function rX(e,t){rY(e),t=r0(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rJ(e,t){return rY(e),t=r0(e,t),e.g.has(t)}function rZ(e,t,r){rX(e,t),0<r.length&&(e.i=null,e.g.set(r0(e,t),te(r)),e.h+=r.length)}function r0(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(eX=rW.prototype).add=function(e,t){rY(this),this.i=null,e=r0(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},eX.forEach=function(e,t){rY(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},eX.ta=function(){rY(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},eX.Z=function(e){rY(this);let t=[];if("string"==typeof e)rJ(this,e)&&(t=t.concat(this.g.get(r0(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},eX.set=function(e,t){return rY(this),this.i=null,rJ(this,e=r0(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},eX.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},eX.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")};var r1=class{constructor(e,t){this.g=e,this.map=t}};function r2(e){this.l=e||r4,e=e0.PerformanceNavigationTiming?0<(e=e0.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(e0.g&&e0.g.Ka&&e0.g.Ka()&&e0.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r4=10;function r9(e){return!!e.h||!!e.g&&e.g.size>=e.j}function r6(e){return e.h?1:e.g?e.g.size:0}function r5(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function r3(e,t){e.g?e.g.add(t):e.h=t}function r8(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function r7(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.F);return t}return te(e.i)}r2.prototype.cancel=function(){if(this.i=r7(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var ne=class{stringify(e){return e0.JSON.stringify(e,void 0)}parse(e){return e0.JSON.parse(e,void 0)}};function nt(){this.g=new ne}function nr(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function nn(e){this.l=e.ec||null,this.j=e.ob||!1}function ni(e,t){tq.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ns,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}e3(nn,ru),nn.prototype.g=function(){return new ni(this.l,this.j)},nn.prototype.i=(n={},function(){return n}),e3(ni,tq);var ns=0;function no(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function na(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nl(e)}function nl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(eX=ni.prototype).open=function(e,t){if(this.readyState!=ns)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nl(this)},eX.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||e0).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},eX.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,na(this)),this.readyState=ns},eX.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nl(this)),this.g&&(this.readyState=3,nl(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==e0.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;no(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},eX.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?na(this):nl(this),3==this.readyState&&no(this)}},eX.Za=function(e){this.g&&(this.response=this.responseText=e,na(this))},eX.Ya=function(e){this.g&&(this.response=e,na(this))},eX.ka=function(){this.g&&na(this)},eX.setRequestHeader=function(e,t){this.v.append(e,t)},eX.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},eX.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(ni.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var nh=e0.JSON.parse;function nu(e){tq.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nc,this.L=this.M=!1}e3(nu,tq);var nc="",nd=/^https?$/i,nf=["POST","PUT"];function np(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ng(e),ny(e)}function ng(e){e.F||(e.F=!0,t$(e,"complete"),t$(e,"error"))}function nm(e){if(e.h&&void 0!==eZ&&(!e.C[1]||4!=nw(e)||2!=e.da())){if(e.v&&4==nw(e))t1(e.La,0,e);else if(t$(e,"readystatechange"),4==nw(e)){e.h=!1;try{let o=e.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===o){var i=String(e.I).match(rx)[1]||null;!i&&e0.self&&e0.self.location&&(i=e0.self.location.protocol.slice(0,-1)),r=!nd.test(i?i.toLowerCase():"")}t=r}if(t)t$(e,"complete"),t$(e,"success");else{e.m=6;try{var s=2<nw(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",ng(e)}}finally{ny(e)}}}}function ny(e,t){if(e.g){nv(e);let r=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||t$(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function nv(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(e0.clearTimeout(e.A),e.A=null)}function nw(e){return e.g?e.g.readyState:0}function nb(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case nc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function nE(e){let t="";return tC(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function n_(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=nE(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):rF(e,t,r))}function nT(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function nI(e){this.Ga=0,this.j=[],this.l=new t3,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nT("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nT("baseRetryDelayMs",5e3,e),this.hb=nT("retryDelaySeedMs",1e4,e),this.eb=nT("forwardChannelMaxRetries",2,e),this.xa=nT("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new r2(e&&e.concurrentRequestLimit),this.Ja=new nt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function nS(e){if(nA(e),3==e.H){var t=e.W++,r=rM(e.I);if(rF(r,"SID",e.K),rF(r,"RID",t),rF(r,"TYPE","terminate"),nk(e,r),(t=new ry(e,e.l,t)).L=2,t.A=rB(rM(r)),r=!1,e0.navigator&&e0.navigator.sendBeacon)try{r=e0.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!r&&e0.Image&&((new Image).src=t.A,r=!0),r||(t.g=nq(t.l,null),t.g.ha(t.A)),t.G=Date.now(),rC(t)}nB(e)}function nC(e){e.g&&(nO(e),e.g.cancel(),e.g=null)}function nA(e){nC(e),e.u&&(e0.clearTimeout(e.u),e.u=null),nP(e),e.i.cancel(),e.m&&("number"==typeof e.m&&e0.clearTimeout(e.m),e.m=null)}function nD(e){if(!r9(e.i)&&!e.m){e.m=!0;var t=e.Na;tQ||tX(),tW||(tQ(),tW=!0),tY.add(t,e),e.C=0}}function nN(e,t){var r;r=t?t.m:e.W++;let n=rM(e.I);rF(n,"SID",e.K),rF(n,"RID",r),rF(n,"AID",e.V),nk(e,n),e.o&&e.s&&n_(n,e.o,e.s),r=new ry(e,e.l,r,e.C+1),null===e.o&&(r.I=e.s),t&&(e.j=t.F.concat(e.j)),t=nL(e,r,1e3),r.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),r3(e.i,r),r_(r,n,t)}function nk(e,t){e.na&&tC(e.na,function(e,r){rF(t,r,e)}),e.h&&rR({},function(e,r){rF(t,r,e)})}function nL(e,t,r){r=Math.min(e.j.length,r);var n=e.h?e6(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{rR(e,function(e,r){let i=e;e2(e)&&(i=tK(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,r),t.F=e,n}function nR(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;tQ||tX(),tW||(tQ(),tW=!0),tY.add(t,e),e.A=0}}function nx(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=ra(e6(e.Ma,e),nU(e,e.A)),e.A++,!0)}function nO(e){null!=e.B&&(e0.clearTimeout(e.B),e.B=null)}function nM(e){e.g=new ry(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=rM(e.wa);rF(t,"RID","rpc"),rF(t,"SID",e.K),rF(t,"AID",e.V),rF(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&rF(t,"TO",e.qa),rF(t,"TYPE","xmlhttp"),nk(e,t),e.o&&e.s&&n_(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var r=e.g;e=e.pa,r.L=1,r.A=rB(rM(t)),r.u=null,r.S=!0,rT(r,e)}function nP(e){null!=e.v&&(e0.clearTimeout(e.v),e.v=null)}function nV(e,t){var r=null;if(e.g==t){nP(e),nO(e),e.g=null;var n=2}else{if(!r5(e.i,t))return;r=t.F,r8(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){r=t.u?t.u.length:0,t=Date.now()-t.G;var i,s=e.C;t$(n=rt(),new ro(n,r)),nD(e)}else nR(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==n&&(i=t,!(r6(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=ra(e6(e.Na,e,i),nU(e,e.C)),e.C++,!0)))||2==n&&nx(e)))switch(r&&0<r.length&&((t=e.i).i=t.i.concat(r)),s){case 1:nF(e,5);break;case 4:nF(e,10);break;case 3:nF(e,6);break;default:nF(e,2)}}}function nU(e,t){let r=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(r*=2),r*t}function nF(e,t){if(e.l.info("Error code "+t),2==t){var r=null;e.h&&(r=null);var n=e6(e.pb,e);r||(r=new rO("//www.google.com/images/cleardot.gif"),e0.location&&"http"==e0.location.protocol||rP(r,"https"),rB(r)),function(e,t){let r=new t3;if(e0.Image){let n=new Image;n.onload=e5(nr,r,n,"TestLoadImage: loaded",!0,t),n.onerror=e5(nr,r,n,"TestLoadImage: error",!1,t),n.onabort=e5(nr,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=e5(nr,r,n,"TestLoadImage: timeout",!1,t),e0.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else rs(2);e.H=0,e.h&&e.h.za(t),nB(e),nA(e)}function nB(e){if(e.H=0,e.ma=[],e.h){let t=r7(e.i);(0!=t.length||0!=e.j.length)&&(tt(e.ma,t),tt(e.ma,e.j),e.i.i.length=0,te(e.j),e.j.length=0),e.h.ya()}}function nj(e,t,r){var n=r instanceof rO?rM(r):new rO(r);if(""!=n.g)t&&(n.g=t+"."+n.g),rV(n,n.m);else{var i=e0.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new rO(null);n&&rP(s,n),t&&(s.g=t),i&&rV(s,i),r&&(s.l=r),n=s}return r=e.F,t=e.Da,r&&t&&rF(n,r,t),rF(n,"VER",e.ra),nk(e,n),n}function nq(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new nu(e.Ha&&!e.va?new nn({ob:r}):e.va)).Oa(e.J),t}function n$(){}function nz(){if(th&&!(10<=Number(tw)))throw Error("Environmental error: no available transport.")}function nK(e,t){tq.call(this),this.g=new nI(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ti(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ti(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nQ(this)}function nG(e){rp.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nH(){rg.call(this),this.status=1}function nQ(e){this.g=e}function nW(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nY(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+3614090360&4294967295;o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[1]+3905402710&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[2]+606105819&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[4]+4118548399&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[5]+1200080426&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[6]+2821735955&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[8]+1770035416&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[9]+2336552879&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[10]+4294925233&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[12]+1804603682&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[13]+4254626195&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[14]+2792965006&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[12]+2368359562&4294967295,o=t+((r=i+(o<<20&4294967295|o>>>12))^i^s)+n[5]+4294588738&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[8]+2272392833&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[11]+1839030562&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[1]+2763975236&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[4]+1272893353&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[7]+4139469664&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[13]+681279174&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[0]+3936430074&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[3]+3572445317&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[9]+3654602809&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[12]+3873151461&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[15]+530742520&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(o<<23&4294967295|o>>>9),o=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function nX(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(eX=nu.prototype).Oa=function(e){this.M=e},eX.ha=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?rc(this.u):rc(a),this.g.onreadystatechange=e6(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){np(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)r.set(i,n[i]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,o]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),i=e0.FormData&&e instanceof e0.FormData,!(0<=e7(nf,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;nv(this),0<this.B&&((this.L=(s=this.g,th&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=e6(this.ua,this)):this.A=t1(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){np(this,e)}},eX.ua=function(){void 0!==eZ&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,t$(this,"timeout"),this.abort(8))},eX.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,t$(this,"complete"),t$(this,"abort"),ny(this))},eX.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ny(this,!0)),nu.$.N.call(this)},eX.La=function(){this.s||(this.G||this.v||this.l?nm(this):this.kb())},eX.kb=function(){nm(this)},eX.isActive=function(){return!!this.g},eX.da=function(){try{return 2<nw(this)?this.g.status:-1}catch(e){return -1}},eX.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},eX.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),nh(t)}},eX.Ia=function(){return this.m},eX.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eX=nI.prototype).ra=8,eX.H=1,eX.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new ry(this,this.l,e),s=this.s;if(this.U&&(s?tN(s=tA(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,r=0;r<this.j.length;r++){t:{var n=this.j[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.j.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=nL(this,i,t),rF(r=rM(this.I),"RID",e),rF(r,"CVER",22),this.F&&rF(r,"X-HTTP-Session-Id",this.F),nk(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(nE(s)))+"&"+t:this.o&&n_(r,this.o,s)),r3(this.i,i),this.bb&&rF(r,"TYPE","init"),this.P?(rF(r,"$req",t),rF(r,"SID","null"),i.aa=!0,r_(i,r,null)):r_(i,r,t),this.H=2}}else 3==this.H&&(e?nN(this,e):0==this.j.length||r9(this.i)||nN(this))}},eX.Ma=function(){if(this.u=null,nM(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ra(e6(this.jb,this),e)}},eX.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rs(10),nC(this),nM(this))},eX.ib=function(){null!=this.v&&(this.v=null,nC(this),nx(this),rs(19))},eX.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rs(2)):(this.l.info("Failed to ping google.com"),rs(1))},eX.isActive=function(){return!!this.h&&this.h.isActive(this)},(eX=n$.prototype).Ba=function(){},eX.Aa=function(){},eX.za=function(){},eX.ya=function(){},eX.isActive=function(){return!0},eX.Va=function(){},nz.prototype.g=function(e,t){return new nK(e,t)},e3(nK,tq),nK.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,r=this.h||void 0;rs(0),e.Y=t,e.na=r||{},e.G=e.aa,e.I=nj(e,null,e.Y),nD(e)},nK.prototype.close=function(){nS(this.g)},nK.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=tK(e),e=r);t.j.push(new r1(t.fb++,e)),3==t.H&&nD(t)},nK.prototype.N=function(){this.g.h=null,delete this.j,nS(this.g),delete this.g,nK.$.N.call(this)},e3(nG,rp),e3(nH,rg),e3(nQ,n$),nQ.prototype.Ba=function(){t$(this.g,"a")},nQ.prototype.Aa=function(e){t$(this.g,new nG(e))},nQ.prototype.za=function(e){t$(this.g,new nH)},nQ.prototype.ya=function(){t$(this.g,"b")},e3(nW,function(){this.blockSize=-1}),nW.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},nW.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=r;)nY(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[i++]=e.charCodeAt(s++),i==this.blockSize){nY(this,n),i=0;break}}else for(;s<t;)if(n[i++]=e[s++],i==this.blockSize){nY(this,n),i=0;break}}this.h=i,this.i+=t},nW.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.j(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var nJ={};function nZ(e){var t;return -128<=e&&128>e?(t=function(e){return new nX([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(nJ,e)?nJ[e]:nJ[e]=t(e)):new nX([0|e],0>e?-1:0)}function n0(e){if(isNaN(e)||!isFinite(e))return n2;if(0>e)return n3(n0(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=n1;return new nX(t,0)}var n1=4294967296,n2=nZ(0),n4=nZ(1),n9=nZ(16777216);function n6(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function n5(e){return -1==e.h}function n3(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new nX(r,~e.h).add(n4)}function n8(e,t){return e.add(n3(t))}function n7(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ie(e,t){this.g=e,this.h=t}function it(e,t){if(n6(t))throw Error("division by zero");if(n6(e))return new ie(n2,n2);if(n5(e))return t=it(n3(e),t),new ie(n3(t.g),n3(t.h));if(n5(t))return t=it(e,n3(t)),new ie(n3(t.g),t.h);if(30<e.g.length){if(n5(e)||n5(t))throw Error("slowDivide_ only works with positive integers.");for(var r=n4,n=t;0>=n.X(e);)r=ir(r),n=ir(n);var i=ii(r,1),s=ii(n,1);for(n=ii(n,2),r=ii(r,2);!n6(n);){var o=s.add(n);0>=o.X(e)&&(i=i.add(r),s=o),n=ii(n,1),r=ii(r,1)}return t=n8(e,i.R(t)),new ie(i,t)}for(i=n2;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=n0(r)).R(t);n5(o)||0<o.X(e);)r-=n,o=(s=n0(r)).R(t);n6(s)&&(s=n4),i=i.add(s),e=n8(e,o)}return new ie(i,e)}function ir(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.D(n)<<1|e.D(n-1)>>>31;return new nX(r,e.h)}function ii(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,i=[],s=0;s<n;s++)i[s]=0<t?e.D(s+r)>>>t|e.D(s+r+1)<<32-t:e.D(s+r);return new nX(i,e.h)}(eX=nX.prototype).ea=function(){if(n5(this))return-n3(this).ea();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.D(r);e+=(0<=n?n:n1+n)*t,t*=n1}return e},eX.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(n6(this))return"0";if(n5(this))return"-"+n3(this).toString(e);for(var t=n0(Math.pow(e,6)),r=this,n="";;){var i=it(r,t).g,s=((0<(r=n8(r,i.R(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(n6(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},eX.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},eX.X=function(e){return n5(e=n8(this,e))?-1:n6(e)?0:1},eX.abs=function(){return n5(this)?n3(this):this},eX.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,i=0;i<=t;i++){var s=n+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=o>>>16,s&=65535,o&=65535,r[i]=o<<16|s}return new nX(r,-2147483648&r[r.length-1]?-1:0)},eX.R=function(e){if(n6(this)||n6(e))return n2;if(n5(this))return n5(e)?n3(this).R(n3(e)):n3(n3(this).R(e));if(n5(e))return n3(this.R(n3(e)));if(0>this.X(n9)&&0>e.X(n9))return n0(this.ea()*e.ea());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var s=this.D(n)>>>16,o=65535&this.D(n),a=e.D(i)>>>16,l=65535&e.D(i);r[2*n+2*i]+=o*l,n7(r,2*n+2*i),r[2*n+2*i+1]+=s*l,n7(r,2*n+2*i+1),r[2*n+2*i+1]+=o*a,n7(r,2*n+2*i+1),r[2*n+2*i+2]+=s*a,n7(r,2*n+2*i+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new nX(r,0)},eX.gb=function(e){return it(this,e).h},eX.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)&e.D(n);return new nX(r,this.h&e.h)},eX.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)|e.D(n);return new nX(r,this.h|e.h)},eX.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)^e.D(n);return new nX(r,this.h^e.h)},nz.prototype.createWebChannel=nz.prototype.g,nK.prototype.send=nK.prototype.u,nK.prototype.open=nK.prototype.m,nK.prototype.close=nK.prototype.close,rl.NO_ERROR=0,rl.TIMEOUT=8,rl.HTTP_ERROR=6,rh.COMPLETE="complete",rd.EventType=rf,rf.OPEN="a",rf.CLOSE="b",rf.ERROR="c",rf.MESSAGE="d",tq.prototype.listen=tq.prototype.O,nu.prototype.listenOnce=nu.prototype.P,nu.prototype.getLastError=nu.prototype.Sa,nu.prototype.getLastErrorCode=nu.prototype.Ia,nu.prototype.getStatus=nu.prototype.da,nu.prototype.getResponseJson=nu.prototype.Wa,nu.prototype.getResponseText=nu.prototype.ja,nu.prototype.send=nu.prototype.ha,nu.prototype.setWithCredentials=nu.prototype.Oa,nW.prototype.digest=nW.prototype.l,nW.prototype.reset=nW.prototype.reset,nW.prototype.update=nW.prototype.j,nX.prototype.add=nX.prototype.add,nX.prototype.multiply=nX.prototype.R,nX.prototype.modulo=nX.prototype.gb,nX.prototype.compare=nX.prototype.X,nX.prototype.toNumber=nX.prototype.ea,nX.prototype.toString=nX.prototype.toString,nX.prototype.getBits=nX.prototype.D,nX.fromNumber=n0,nX.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return n3(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=n0(Math.pow(r,8)),i=n2,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),r);8>o?(o=n0(Math.pow(r,o)),i=i.R(o).add(n0(a))):i=(i=i.R(n)).add(n0(a))}return i};var is=eJ.createWebChannelTransport=function(){return new nz},io=eJ.getStatEventTarget=function(){return rt()},ia=eJ.ErrorCode=rl,il=eJ.EventType=rh,ih=eJ.Event=t7,iu=eJ.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};eJ.FetchXmlHttpFactory=nn;var ic=eJ.WebChannel=rd,id=eJ.XhrIo=nu,ip=eJ.Md5=nW,ig=eJ.Integer=nX;l=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],o=new iv((i+s)*3/4-s),a=0,l=s>0?i-4:i;for(r=0;r<l;r+=4)t=iy[e.charCodeAt(r)]<<18|iy[e.charCodeAt(r+1)]<<12|iy[e.charCodeAt(r+2)]<<6|iy[e.charCodeAt(r+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=iy[e.charCodeAt(r)]<<2|iy[e.charCodeAt(r+1)]>>4,o[a++]=255&t),1===s&&(t=iy[e.charCodeAt(r)]<<10|iy[e.charCodeAt(r+1)]<<4|iy[e.charCodeAt(r+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},h=function(e){for(var t,r=e.length,n=r%3,i=[],s=0,o=r-n;s<o;s+=16383)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)i.push(im[(n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+im[n>>12&63]+im[n>>6&63]+im[63&n]);return i.join("")}(e,s,s+16383>o?o:s+16383));return 1===n?i.push(im[(t=e[r-1])>>2]+im[t<<4&63]+"=="):2===n&&i.push(im[(t=(e[r-2]<<8)+e[r-1])>>10]+im[t>>4&63]+im[t<<2&63]+"="),i.join("")};for(var im=[],iy=[],iv="undefined"!=typeof Uint8Array?Uint8Array:Array,iw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ib=0,iE=iw.length;ib<iE;++ib)im[ib]=iw[ib],iy[iw.charCodeAt(ib)]=ib;iy["-".charCodeAt(0)]=62,iy["_".charCodeAt(0)]=63,u=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,h=l>>1,u=-7,c=r?i-1:0,d=r?-1:1,f=e[t+c];for(c+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+c],c+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+c],c+=d,u-=8);if(0===s)s=1-h;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),s-=h}return(f?-1:1)*o*Math.pow(2,s-n)},c=function(e,t,r,n,i,s){var o,a,l,h=8*s-i-1,u=(1<<h)-1,c=u>>1,d=23===i?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=d/l:t+=d*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=u?(a=0,o=u):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,h+=i;h>0;e[r+f]=255&o,f+=p,o/=256,h-=8);e[r+f-p]|=128*g};var i_="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function iT(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,iI.prototype),t}function iI(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return iA(e)}return iS(e,t,r)}function iS(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!iI.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|iL(e,t),n=iT(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(iG(e,Uint8Array)){var t=new Uint8Array(e);return iN(t.buffer,t.byteOffset,t.byteLength)}return iD(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(iG(e,ArrayBuffer)||e&&iG(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(iG(e,SharedArrayBuffer)||e&&iG(e.buffer,SharedArrayBuffer)))return iN(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return iI.from(n,t,r);var i=function(e){if(iI.isBuffer(e)){var t,r=0|ik(e.length),n=iT(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?iT(0):iD(e):"Buffer"===e.type&&Array.isArray(e.data)?iD(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return iI.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function iC(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function iA(e){return iC(e),iT(e<0?0:0|ik(e))}function iD(e){for(var t=e.length<0?0:0|ik(e.length),r=iT(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function iN(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),iI.prototype),n}function ik(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function iL(e,t){if(iI.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||iG(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return i$(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return iz(e).length;default:if(i)return n?-1:i$(e).length;t=(""+t).toLowerCase(),i=!0}}function iR(e,t,r){var n,i,s=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=t;s<r;++s)i+=iH[e[s]];return i}(this,t,r);case"utf8":case"utf-8":return iP(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?h(this):h(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length-1;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function ix(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function iO(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=iI.from(t,n)),iI.isBuffer(t))return 0===t.length?-1:iM(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):iM(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function iM(e,t,r,n,i){var s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function h(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var u=-1;for(s=r;s<a;s++)if(h(e,s)===h(t,-1===u?0:s-u)){if(-1===u&&(u=s),s-u+1===l)return u*o}else -1!==u&&(s-=s-u),u=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){for(var c=!0,d=0;d<l;d++)if(h(e,s+d)!==h(t,d)){c=!1;break}if(c)return s}return -1}function iP(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,o,a,l,h=e[i],u=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=r)switch(c){case 1:h<128&&(u=h);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&h)<<6|63&s)>127&&(u=l);break;case 3:s=e[i+1],o=e[i+2],(192&s)==128&&(192&o)==128&&(l=(15&h)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],(192&s)==128&&(192&o)==128&&(192&a)==128&&(l=(15&h)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,c=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=c}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function iV(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function iU(e,t,r,n,i,s){if(!iI.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function iF(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function iB(e,t,r,n,i){return t=+t,r>>>=0,i||iF(e,t,r,4,34028234663852886e22,-34028234663852886e22),c(e,t,r,n,23,4),r+4}function ij(e,t,r,n,i){return t=+t,r>>>=0,i||iF(e,t,r,8,17976931348623157e292,-17976931348623157e292),c(e,t,r,n,52,8),r+8}iI.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),iI.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(iI.prototype,"parent",{enumerable:!0,get:function(){if(iI.isBuffer(this))return this.buffer}}),Object.defineProperty(iI.prototype,"offset",{enumerable:!0,get:function(){if(iI.isBuffer(this))return this.byteOffset}}),iI.poolSize=8192,iI.from=function(e,t,r){return iS(e,t,r)},Object.setPrototypeOf(iI.prototype,Uint8Array.prototype),Object.setPrototypeOf(iI,Uint8Array),iI.alloc=function(e,t,r){return(iC(e),e<=0)?iT(e):void 0!==t?"string"==typeof r?iT(e).fill(t,r):iT(e).fill(t):iT(e)},iI.allocUnsafe=function(e){return iA(e)},iI.allocUnsafeSlow=function(e){return iA(e)},iI.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==iI.prototype},iI.compare=function(e,t){if(iG(e,Uint8Array)&&(e=iI.from(e,e.offset,e.byteLength)),iG(t,Uint8Array)&&(t=iI.from(t,t.offset,t.byteLength)),!iI.isBuffer(e)||!iI.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},iI.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},iI.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return iI.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=iI.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var s=e[r];if(iG(s,Uint8Array))i+s.length>n.length?iI.from(s).copy(n,i):Uint8Array.prototype.set.call(n,s,i);else if(iI.isBuffer(s))s.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=s.length}return n},iI.byteLength=iL,iI.prototype._isBuffer=!0,iI.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ix(this,t,t+1);return this},iI.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ix(this,t,t+3),ix(this,t+1,t+2);return this},iI.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ix(this,t,t+7),ix(this,t+1,t+6),ix(this,t+2,t+5),ix(this,t+3,t+4);return this},iI.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?iP(this,0,e):iR.apply(this,arguments)},iI.prototype.toLocaleString=iI.prototype.toString,iI.prototype.equals=function(e){if(!iI.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===iI.compare(this,e)},iI.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},i_&&(iI.prototype[i_]=iI.prototype.inspect),iI.prototype.compare=function(e,t,r,n,i){if(iG(e,Uint8Array)&&(e=iI.from(e,e.offset,e.byteLength)),!iI.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var s=i-n,o=r-t,a=Math.min(s,o),l=this.slice(n,i),h=e.slice(t,r),u=0;u<a;++u)if(l[u]!==h[u]){s=l[u],o=h[u];break}return s<o?-1:o<s?1:0},iI.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},iI.prototype.indexOf=function(e,t,r){return iO(this,e,t,r,!0)},iI.prototype.lastIndexOf=function(e,t,r){return iO(this,e,t,r,!1)},iI.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,o,a,l,h,u,c,d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var f=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var s=t.length;n>s/2&&(n=s/2);for(var o=0;o<n;++o){var a=parseInt(t.substr(2*o,2),16);if(a!=a)break;e[r+o]=a}return o}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,iK(i$(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,iK(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,h=r,iK(iz(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=r,iK(function(e,t){for(var r,n,i=[],s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,c);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},iI.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},iI.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,iI.prototype),n},iI.prototype.readUintLE=iI.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||iV(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},iI.prototype.readUintBE=iI.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||iV(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},iI.prototype.readUint8=iI.prototype.readUInt8=function(e,t){return e>>>=0,t||iV(e,1,this.length),this[e]},iI.prototype.readUint16LE=iI.prototype.readUInt16LE=function(e,t){return e>>>=0,t||iV(e,2,this.length),this[e]|this[e+1]<<8},iI.prototype.readUint16BE=iI.prototype.readUInt16BE=function(e,t){return e>>>=0,t||iV(e,2,this.length),this[e]<<8|this[e+1]},iI.prototype.readUint32LE=iI.prototype.readUInt32LE=function(e,t){return e>>>=0,t||iV(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},iI.prototype.readUint32BE=iI.prototype.readUInt32BE=function(e,t){return e>>>=0,t||iV(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},iI.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||iV(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},iI.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||iV(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},iI.prototype.readInt8=function(e,t){return(e>>>=0,t||iV(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},iI.prototype.readInt16LE=function(e,t){e>>>=0,t||iV(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},iI.prototype.readInt16BE=function(e,t){e>>>=0,t||iV(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},iI.prototype.readInt32LE=function(e,t){return e>>>=0,t||iV(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},iI.prototype.readInt32BE=function(e,t){return e>>>=0,t||iV(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},iI.prototype.readFloatLE=function(e,t){return e>>>=0,t||iV(e,4,this.length),u(this,e,!0,23,4)},iI.prototype.readFloatBE=function(e,t){return e>>>=0,t||iV(e,4,this.length),u(this,e,!1,23,4)},iI.prototype.readDoubleLE=function(e,t){return e>>>=0,t||iV(e,8,this.length),u(this,e,!0,52,8)},iI.prototype.readDoubleBE=function(e,t){return e>>>=0,t||iV(e,8,this.length),u(this,e,!1,52,8)},iI.prototype.writeUintLE=iI.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;iU(this,e,t,r,i,0)}var s=1,o=0;for(this[t]=255&e;++o<r&&(s*=256);)this[t+o]=e/s&255;return t+r},iI.prototype.writeUintBE=iI.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;iU(this,e,t,r,i,0)}var s=r-1,o=1;for(this[t+s]=255&e;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+r},iI.prototype.writeUint8=iI.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,1,255,0),this[t]=255&e,t+1},iI.prototype.writeUint16LE=iI.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},iI.prototype.writeUint16BE=iI.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},iI.prototype.writeUint32LE=iI.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},iI.prototype.writeUint32BE=iI.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},iI.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);iU(this,e,t,r,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<r&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},iI.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);iU(this,e,t,r,i-1,-i)}var s=r-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},iI.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},iI.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},iI.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},iI.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},iI.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||iU(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},iI.prototype.writeFloatLE=function(e,t,r){return iB(this,e,t,!0,r)},iI.prototype.writeFloatBE=function(e,t,r){return iB(this,e,t,!1,r)},iI.prototype.writeDoubleLE=function(e,t,r){return ij(this,e,t,!0,r)},iI.prototype.writeDoubleBE=function(e,t,r){return ij(this,e,t,!1,r)},iI.prototype.copy=function(e,t,r,n){if(!iI.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},iI.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!iI.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===n&&s<128||"latin1"===n)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var o=iI.isBuffer(e)?e:iI.from(e,n),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%a]}return this};var iq=/[^+/0-9A-Za-z-_]/g;function i$(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function iz(e){return l(function(e){if((e=(e=e.split("=")[0]).trim().replace(iq,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function iK(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function iG(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var iH=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();const iQ="@firebase/firestore";/**
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
 */class iW{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}iW.UNAUTHENTICATED=new iW(null),iW.GOOGLE_CREDENTIALS=new iW("google-credentials-uid"),iW.FIRST_PARTY=new iW("first-party-uid"),iW.MOCK_USER=new iW("mock-user");/**
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
 */let iY="10.11.0";/**
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
 */const iX=new ea("@firebase/firestore");function iJ(){return iX.logLevel}function iZ(e,...t){if(iX.logLevel<=eY.DEBUG){let r=t.map(i2);iX.debug(`Firestore (${iY}): ${e}`,...r)}}function i0(e,...t){if(iX.logLevel<=eY.ERROR){let r=t.map(i2);iX.error(`Firestore (${iY}): ${e}`,...r)}}function i1(e,...t){if(iX.logLevel<=eY.WARN){let r=t.map(i2);iX.warn(`Firestore (${iY}): ${e}`,...r)}}function i2(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function i4(e="Unexpected state"){let t=`FIRESTORE (${iY}) INTERNAL ASSERTION FAILED: `+e;throw i0(t),Error(t)}/**
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
 */const i9={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class i6 extends G{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class i5{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class i3{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class i8{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(iW.UNAUTHENTICATED))}shutdown(){}}class i7{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class se{constructor(e){this.t=e,this.currentUser=iW.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new i5;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new i5,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{iZ("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(iZ("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new i5)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(iZ("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||i4(),new i3(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||i4(),new iW(e)}}class st{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=iW.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sr{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new st(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(iW.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sn{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class si{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&iZ("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,iZ("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{iZ("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):iZ("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||i4(),this.R=e.token,new sn(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class ss{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(0);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function so(e,t){return e<t?-1:e>t?1:0}function sa(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
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
 */class sl{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new i6(i9.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new i6(i9.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return sl.fromMillis(Date.now())}static fromDate(e){return sl.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new sl(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?so(this.nanoseconds,e.nanoseconds):so(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class sh{constructor(e){this.timestamp=e}static fromTimestamp(e){return new sh(e)}static min(){return new sh(new sl(0,0))}static max(){return new sh(new sl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class su{constructor(e,t,r){void 0===t?t=0:t>e.length&&i4(),void 0===r?r=e.length-t:r>e.length-t&&i4(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===su.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof su?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class sc extends su{construct(e,t,r){return new sc(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new i6(i9.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new sc(t)}static emptyPath(){return new sc([])}}const sd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sf extends su{construct(e,t,r){return new sf(e,t,r)}static isValidIdentifier(e){return sd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sf.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new sf(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new i6(i9.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new i6(i9.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new i6(i9.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new i6(i9.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sf(t)}static emptyPath(){return new sf([])}}/**
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
 */class sp{constructor(e){this.path=e}static fromPath(e){return new sp(sc.fromString(e))}static fromName(e){return new sp(sc.fromString(e).popFirst(5))}static empty(){return new sp(sc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===sc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return sc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new sp(new sc(e.slice()))}}class sg{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new sg(sh.min(),sp.empty(),-1)}static max(){return new sg(sh.max(),sp.empty(),-1)}}class sm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function sy(e){if(e.code!==i9.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;iZ("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class sv{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&i4(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new sv((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof sv?t:sv.resolve(t)}catch(e){return sv.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):sv.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):sv.reject(t)}static resolve(e){return new sv((t,r)=>{t(e)})}static reject(e){return new sv((t,r)=>{r(e)})}static waitFor(e){return new sv((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=sv.resolve(!1);for(let r of e)t=t.next(e=>e?sv.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new sv((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new sv((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}/**
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
 */class sw{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new i5,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new s_(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let r=sA(t.target.error);this.V.reject(new s_(e,r))}}static open(e,t,r,n){try{return new sw(t,e.transaction(n,r))}catch(e){throw new s_(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(iZ("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new sI(this.transaction.objectStore(e))}}class sb{constructor(e,t,r){this.name=e,this.version=t,this.p=r,12.2===sb.S(z())&&i0("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return iZ("SimpleDb","Removing database:",e),sS(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!K())return!1;if(sb.C())return!0;let e=z(),t=sb.S(e),r=sb.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<r&&r<4.5)}static C(){var e;return void 0!==y&&"YES"===(null===(e=y.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(iZ("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{let n=indexedDB.open(this.name,this.version);n.onsuccess=e=>{t(e.target.result)},n.onblocked=()=>{r(new s_(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=t=>{let n=t.target.error;"VersionError"===n.name?r(new i6(i9.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===n.name?r(new i6(i9.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+n)):r(new s_(e,n))},n.onupgradeneeded=e=>{iZ("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,n.transaction,e.oldVersion,this.version).next(()=>{iZ("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,n){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=sw.open(this.db,e,i?"readonly":"readwrite",r),s=n(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),sv.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(iZ("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class sE{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return sS(this.k.delete())}}class s_ extends i6{constructor(e,t){super(i9.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function sT(e){return"IndexedDbTransactionError"===e.name}class sI{constructor(e){this.store=e}put(e,t){let r;return void 0!==t?(iZ("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(iZ("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),sS(r)}add(e){return iZ("SimpleDb","ADD",this.store.name,e,e),sS(this.store.add(e))}get(e){return sS(this.store.get(e)).next(t=>(void 0===t&&(t=null),iZ("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return iZ("SimpleDb","DELETE",this.store.name,e),sS(this.store.delete(e))}count(){return iZ("SimpleDb","COUNT",this.store.name),sS(this.store.count())}W(e,t){let r=this.options(e,t),n=r.index?this.store.index(r.index):this.store;if("function"==typeof n.getAll){let e=n.getAll(r.range);return new sv((t,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(r),t=[];return this.G(e,(e,r)=>{t.push(r)}).next(()=>t)}}j(e,t){let r=this.store.getAll(e,null===t?void 0:t);return new sv((e,t)=>{r.onerror=e=>{t(e.target.error)},r.onsuccess=t=>{e(t.target.result)}})}H(e,t){iZ("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,t);r.J=!1;let n=this.cursor(r);return this.G(n,(e,t,r)=>r.delete())}Y(e,t){let r;t?r=e:(r={},t=e);let n=this.cursor(r);return this.G(n,t)}Z(e){let t=this.cursor({});return new sv((r,n)=>{t.onerror=e=>{n(sA(e.target.error))},t.onsuccess=t=>{let n=t.target.result;n?e(n.primaryKey,n.value).next(e=>{e?n.continue():r()}):r()}})}G(e,t){let r=[];return new sv((n,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void n();let s=new sE(i),o=t(i.primaryKey,i.value,s);if(o instanceof sv){let e=o.catch(e=>(s.done(),sv.reject(e)));r.push(e)}s.isDone?n():null===s.$?i.continue():i.continue(s.$)}}).next(()=>sv.waitFor(r))}options(e,t){let r;return void 0!==e&&("string"==typeof e?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function sS(e){return new sv((t,r)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{r(sA(e.target.error))}})}let sC=!1;function sA(e){let t=sb.S(z());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new i6("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sC||(sC=!0,setTimeout(()=>{throw e},0)),e}}return e}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sD{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function sN(e){return 0===e&&1/e==-1/0}/**
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
 */function sk(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function sL(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function sR(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}sD._e=-1;/**
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
 */class sx{constructor(e,t){this.comparator=e,this.root=t||sM.EMPTY}insert(e,t){return new sx(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,sM.BLACK,null,null))}remove(e){return new sx(this.comparator,this.root.remove(e,this.comparator).copy(null,null,sM.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sO(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sO(this.root,e,this.comparator,!1)}getReverseIterator(){return new sO(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sO(this.root,e,this.comparator,!0)}}class sO{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class sM{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:sM.RED,this.left=null!=n?n:sM.EMPTY,this.right=null!=i?i:sM.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new sM(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return sM.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return sM.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,sM.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,sM.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw i4();let e=this.left.check();if(e!==this.right.check())throw i4();return e+(this.isRed()?0:1)}}sM.EMPTY=null,sM.RED=!0,sM.BLACK=!1,sM.EMPTY=new class{constructor(){this.size=0}get key(){throw i4()}get value(){throw i4()}get color(){throw i4()}get left(){throw i4()}get right(){throw i4()}copy(e,t,r,n,i){return this}insert(e,t,r){return new sM(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class sP{constructor(e){this.comparator=e,this.data=new sx(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sV(this.data.getIterator())}getIteratorFrom(e){return new sV(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof sP)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new sP(this.comparator);return t.data=e,t}}class sV{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sU{constructor(e){this.fields=e,e.sort(sf.comparator)}static empty(){return new sU([])}unionWith(e){let t=new sP(sf.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new sU(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sa(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class sF extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class sB{constructor(e){this.binaryString=e}static fromBase64String(e){return new sB(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new sF("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new sB(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return so(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sB.EMPTY_BYTE_STRING=new sB("");const sj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sq(e){if(e||i4(),"string"==typeof e){let t=0,r=sj.exec(e);if(r||i4(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:s$(e.seconds),nanos:s$(e.nanos)}}function s$(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function sz(e){return"string"==typeof e?sB.fromBase64String(e):sB.fromUint8Array(e)}/**
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
 */function sK(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function sG(e){let t=e.mapValue.fields.__previous_value__;return sK(t)?sG(t):t}function sH(e){let t=sq(e.mapValue.fields.__local_write_time__.timestampValue);return new sl(t.seconds,t.nanos)}/**
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
 */class sQ{constructor(e,t,r,n,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class sW{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sW("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sW&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sY={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sX(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sK(e)?4:oe(e)?9007199254740991:10:i4()}function sJ(e,t){if(e===t)return!0;let r=sX(e);if(r!==sX(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return sH(e).isEqual(sH(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=sq(e.timestampValue),n=sq(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return sz(e.bytesValue).isEqual(sz(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return s$(e.geoPointValue.latitude)===s$(t.geoPointValue.latitude)&&s$(e.geoPointValue.longitude)===s$(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return s$(e.integerValue)===s$(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=s$(e.doubleValue),n=s$(t.doubleValue);return r===n?sN(r)===sN(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return sa(e.arrayValue.values||[],t.arrayValue.values||[],sJ);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(sk(r)!==sk(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!sJ(r[e],n[e])))return!1;return!0}(e,t);default:return i4()}}function sZ(e,t){return void 0!==(e.values||[]).find(e=>sJ(e,t))}function s0(e,t){if(e===t)return 0;let r=sX(e),n=sX(t);if(r!==n)return so(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return so(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=s$(e.integerValue||e.doubleValue),n=s$(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return s1(e.timestampValue,t.timestampValue);case 4:return s1(sH(e),sH(t));case 5:return so(e.stringValue,t.stringValue);case 6:return function(e,t){let r=sz(e),n=sz(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=so(r[e],n[e]);if(0!==t)return t}return so(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=so(s$(e.latitude),s$(t.latitude));return 0!==r?r:so(s$(e.longitude),s$(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=s0(r[e],n[e]);if(t)return t}return so(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===sY.mapValue&&t===sY.mapValue)return 0;if(e===sY.mapValue)return 1;if(t===sY.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=so(n[e],s[e]);if(0!==t)return t;let o=s0(r[n[e]],i[s[e]]);if(0!==o)return o}return so(n.length,s.length)}(e.mapValue,t.mapValue);default:throw i4()}}function s1(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return so(e,t);let r=sq(e),n=sq(t),i=so(r.seconds,n.seconds);return 0!==i?i:so(r.nanos,n.nanos)}function s2(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=sq(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?sz(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,sp.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=s2(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${s2(e.fields[i])}`;return r+"}"}(e.mapValue):i4()}function s4(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function s9(e){return!!e&&"integerValue"in e}function s6(e){return!!e&&"arrayValue"in e}function s5(e){return!!e&&"nullValue"in e}function s3(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function s8(e){return!!e&&"mapValue"in e}function s7(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return sL(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=s7(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=s7(e.arrayValue.values[r]);return t}return Object.assign({},e)}function oe(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!s8(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=s7(t)}setAll(e){let t=sf.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=s7(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());s8(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sJ(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];s8(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(sL(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new ot(s7(this.value))}}/**
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
 */class or{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new or(e,0,sh.min(),sh.min(),sh.min(),ot.empty(),0)}static newFoundDocument(e,t,r,n){return new or(e,1,t,sh.min(),r,n,0)}static newNoDocument(e,t){return new or(e,2,t,sh.min(),sh.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new or(e,3,t,sh.min(),sh.min(),ot.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(sh.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=sh.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof or&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new or(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class on{constructor(e,t){this.position=e,this.inclusive=t}}function oi(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?sp.comparator(sp.fromName(o.referenceValue),r.key):s0(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function os(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!sJ(e.position[r],t.position[r]))return!1;return!0}/**
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
 */class oo{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class oa{}class ol extends oa{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new od(e,t,r):"array-contains"===t?new om(e,r):"in"===t?new oy(e,r):"not-in"===t?new ov(e,r):"array-contains-any"===t?new ow(e,r):new ol(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new of(e,r):new op(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(s0(t,this.value)):null!==t&&sX(this.value)===sX(t)&&this.matchesComparison(s0(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return i4()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oh extends oa{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new oh(e,t)}matches(e){return ou(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ou(e){return"and"===e.op}function oc(e){for(let t of e.filters)if(t instanceof oh)return!1;return!0}class od extends ol{constructor(e,t,r){super(e,t,r),this.key=sp.fromName(r.referenceValue)}matches(e){let t=sp.comparator(e.key,this.key);return this.matchesComparison(t)}}class of extends ol{constructor(e,t){super(e,"in",t),this.keys=og("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class op extends ol{constructor(e,t){super(e,"not-in",t),this.keys=og("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function og(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>sp.fromName(e.referenceValue))}class om extends ol{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return s6(t)&&sZ(t.arrayValue,this.value)}}class oy extends ol{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&sZ(this.value.arrayValue,t)}}class ov extends ol{constructor(e,t){super(e,"not-in",t)}matches(e){if(sZ(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!sZ(this.value.arrayValue,t)}}class ow extends ol{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!s6(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>sZ(this.value.arrayValue,e))}}/**
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
 */class ob{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function oE(e,t=null,r=[],n=[],i=null,s=null,o=null){return new ob(e,t,r,n,i,s,o)}function o_(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ol)return t.field.canonicalString()+t.op.toString()+s2(t.value);if(oc(t)&&ou(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>s2(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>s2(e)).join(",")),e.ce=t}return e.ce}function oT(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof ol?r instanceof ol&&t.op===r.op&&t.field.isEqual(r.field)&&sJ(t.value,r.value):t instanceof oh?r instanceof oh&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void i4()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!os(e.startAt,t.startAt)&&os(e.endAt,t.endAt)}function oI(e){return sp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */class oS{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function oC(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function oA(e){return null!==e.collectionGroup}function oD(e){if(null===e.le){let t;e.le=[];let r=new Set;for(let t of e.explicitOrderBy)e.le.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new sP(sf.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.le.push(new oo(t,n))}),r.has(sf.keyField().canonicalString())||e.le.push(new oo(sf.keyField(),n))}return e.le}function oN(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return oE(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new oo(e.field,t)});let r=e.endAt?new on(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new on(e.startAt.position,e.startAt.inclusive):null;return oE(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,oD(e))),e.he}function ok(e,t){let r=e.filters.concat([t]);return new oS(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function oL(e,t,r){return new oS(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function oR(e,t){return oT(oN(e),oN(t))&&e.limitType===t.limitType}function ox(e){return`${o_(oN(e))}|lt:${e.limitType}`}function oO(e){var t;let r;return`Query(target=${r=(t=oN(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ol?`${t.field.canonicalString()} ${t.op} ${s2(t.value)}`:t instanceof oh?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>s2(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>s2(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function oM(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):sp.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of oD(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=oi(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,oD(e),t))&&(!e.endAt||!!function(e,t,r){let n=oi(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,oD(e),t))}function oP(e){return(t,r)=>{let n=!1;for(let i of oD(e)){let e=function(e,t,r){let n=e.field.isKeyField()?sp.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?s0(n,i):i4()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return i4()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
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
 */class oV{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){sL(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return sR(this.inner)}size(){return this.innerSize}}/**
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
 */const oU=new sx(sp.comparator),oF=new sx(sp.comparator);function oB(...e){let t=oF;for(let r of e)t=t.insert(r.key,r);return t}function oj(){return new oV(e=>e.toString(),(e,t)=>e.isEqual(t))}new sx(sp.comparator);const oq=new sP(sp.comparator);function o$(...e){let t=oq;for(let r of e)t=t.add(r);return t}const oz=new sP(so);/**
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
 */function oK(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sN(t)?"-0":t}}function oG(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class oH{constructor(){this._=void 0}}class oQ extends oH{}class oW extends oH{constructor(e){super(),this.elements=e}}function oY(e,t){let r=o1(t);for(let t of e.elements)r.some(e=>sJ(e,t))||r.push(t);return{arrayValue:{values:r}}}class oX extends oH{constructor(e){super(),this.elements=e}}function oJ(e,t){let r=o1(t);for(let t of e.elements)r=r.filter(e=>!sJ(e,t));return{arrayValue:{values:r}}}class oZ extends oH{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function o0(e){return s$(e.integerValue||e.doubleValue)}function o1(e){return s6(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class o2{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new o2}static exists(e){return new o2(void 0,e)}static updateTime(e){return new o2(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function o4(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class o9{}function o6(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new an(e.key,o2.none()):new o8(e.key,e.data,o2.none());{let r=e.data,n=ot.empty(),i=new sP(sf.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new o7(e.key,n,new sU(i.toArray()),o2.none())}}function o5(e,t,r,n){return e instanceof o8?function(e,t,r,n){if(!o4(e.precondition,t))return r;let i=e.value.clone(),s=ar(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof o7?function(e,t,r,n){if(!o4(e.precondition,t))return r;let i=ar(e.fieldTransforms,n,t),s=t.data;return(s.setAll(ae(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):o4(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function o3(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&sa(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof oW&&n instanceof oW||r instanceof oX&&n instanceof oX?sa(r.elements,n.elements,sJ):r instanceof oZ&&n instanceof oZ?sJ(r.Ie,n.Ie):r instanceof oQ&&n instanceof oQ)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class o8 extends o9{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class o7 extends o9{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ae(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function at(e,t,r){var n;let i=new Map;e.length===r.length||i4();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof oW?oY(a,l):a instanceof oX?oJ(a,l):n))}return i}function ar(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof oQ?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&sK(t)&&(t=sG(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof oW?oY(e,s):e instanceof oX?oJ(e,s):function(e,t){var r,n;let i=(r=e,n=t,r instanceof oZ?s9(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),s=o0(i)+o0(e.Ie);return s9(i)&&s9(e.Ie)?oG(s):oK(e.serializer,s)}(e,s))}return n}class an extends o9{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ai{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof o8?function(e,t,r){let n=e.value.clone(),i=at(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof o7?function(e,t,r){if(!o4(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=at(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(ae(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=o5(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=o5(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=oj();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=o6(s,o=t.has(n.key)?null:o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(sh.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),o$())}isEqual(e){return this.batchId===e.batchId&&sa(this.mutations,e.mutations,(e,t)=>o3(e,t))&&sa(this.baseMutations,e.baseMutations,(e,t)=>o3(e,t))}}/**
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
 */class as{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ao{constructor(e,t){this.count=e,this.unchangedNames=t}}function aa(e){if(void 0===e)return i0("GRPC error has no .code"),i9.UNKNOWN;switch(e){case d.OK:return i9.OK;case d.CANCELLED:return i9.CANCELLED;case d.UNKNOWN:return i9.UNKNOWN;case d.DEADLINE_EXCEEDED:return i9.DEADLINE_EXCEEDED;case d.RESOURCE_EXHAUSTED:return i9.RESOURCE_EXHAUSTED;case d.INTERNAL:return i9.INTERNAL;case d.UNAVAILABLE:return i9.UNAVAILABLE;case d.UNAUTHENTICATED:return i9.UNAUTHENTICATED;case d.INVALID_ARGUMENT:return i9.INVALID_ARGUMENT;case d.NOT_FOUND:return i9.NOT_FOUND;case d.ALREADY_EXISTS:return i9.ALREADY_EXISTS;case d.PERMISSION_DENIED:return i9.PERMISSION_DENIED;case d.FAILED_PRECONDITION:return i9.FAILED_PRECONDITION;case d.ABORTED:return i9.ABORTED;case d.OUT_OF_RANGE:return i9.OUT_OF_RANGE;case d.UNIMPLEMENTED:return i9.UNIMPLEMENTED;case d.DATA_LOSS:return i9.DATA_LOSS;default:return i4()}}(f=d||(d={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const al=new ig([4294967295,4294967295],0);function ah(e){let t=(new TextEncoder).encode(e),r=new ip;return r.update(t),new Uint8Array(r.digest())}function au(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ig([r,n],0),new ig([i,s],0)]}class ac{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ad(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new ad(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new ad(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=ig.fromNumber(this.Te)}de(e,t,r){let n=e.add(t.multiply(ig.fromNumber(r)));return 1===n.compare(al)&&(n=new ig([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,r]=au(ah(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);if(!this.Ae(n))return!1}return!0}static create(e,t,r){let n=new ac(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Te)return;let[t,r]=au(ah(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);this.Re(n)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class ad extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class af{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,ap.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new af(sh.min(),n,new sx(so),oU,o$())}}class ap{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ap(r,t,o$(),o$(),o$())}}/**
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
 */class ag{constructor(e,t,r,n){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=n}}class am{constructor(e,t){this.targetId=e,this.fe=t}}class ay{constructor(e,t,r=sB.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class av{constructor(){this.ge=0,this.pe=aE(),this.ye=sB.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=o$(),t=o$(),r=o$();return this.pe.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:i4()}}),new ap(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=aE()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||i4()}Le(){this.Se=!0,this.we=!0}}class aw{constructor(e){this.Be=e,this.ke=new Map,this.qe=oU,this.Qe=ab(),this.Ke=new sx(so)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:i4()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,r=e.fe.count,n=this.Ye(t);if(n){let i=n.target;if(oI(i)){if(0===r){let e=new sp(i.path);this.We(t,e,or.newNoDocument(e,sh.min()))}else 1===r||i4()}else{let n=this.Ze(t);if(n!==r){let r=this.Xe(e),i=r?this.et(r,e,n):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,r;let n=e.fe.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=sz(i).toUint8Array()}catch(e){if(e instanceof sF)return i1("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new ac(t,s,o)}catch(e){return i1(e instanceof ad?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Te?null:r}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Be.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.We(t,r,null),n++)}),n}it(e){let t=new Map;this.ke.forEach((r,n)=>{let i=this.Ye(n);if(i){if(r.current&&oI(i.target)){let t=new sp(i.target.path);null!==this.qe.get(t)||this.st(n,t)||this.We(n,t,or.newNoDocument(t,e))}r.De&&(t.set(n,r.ve()),r.Fe())}});let r=o$();this.Qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.qe.forEach((t,r)=>r.setReadTime(e));let n=new af(e,t,this.Ke,this.qe,r);return this.qe=oU,this.Qe=ab(),this.Ke=new sx(so),n}Ue(e,t){if(!this.je(e))return;let r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let n=this.ze(e);this.st(e,t)?n.Me(t,1):n.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new av,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new sP(so),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||iZ("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new av),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function ab(){return new sx(sp.comparator)}function aE(){return new sx(sp.comparator)}const a_={asc:"ASCENDING",desc:"DESCENDING"},aT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aI={and:"AND",or:"OR"};class aS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function aC(e,t){return e.useProto3Json||null==t?t:{value:t}}function aA(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function aD(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function aN(e){return e||i4(),sh.fromTimestamp(function(e){let t=sq(e);return new sl(t.seconds,t.nanos)}(e))}function ak(e,t){return aL(e,t).canonicalString()}function aL(e,t){let r=new sc(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function aR(e){let t=sc.fromString(e);return aF(t)||i4(),t}function ax(e,t){let r=aR(t);if(r.get(1)!==e.databaseId.projectId)throw new i6(i9.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new i6(i9.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new sp(aP(r))}function aO(e,t){return ak(e.databaseId,t)}function aM(e){return new sc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function aP(e){return e.length>4&&"documents"===e.get(4)||i4(),e.popFirst(5)}function aV(e){return{fieldPath:e.canonicalString()}}function aU(e){return sf.fromServerFormat(e.fieldPath)}function aF(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class aB{constructor(e,t,r,n,i=sh.min(),s=sh.min(),o=sB.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new aB(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new aB(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new aB(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new aB(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aj{constructor(e){this.ct=e}}/**
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
 */class aq{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(s$(e.integerValue));else if("doubleValue"in e){let r=s$(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),sN(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(t,20),"string"==typeof r&&(r=sq(r)),t.At(`${r.seconds||""}`),t.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(sz(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?oe(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):i4()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let r=e.fields||{};for(let e of(this.Et(t,55),Object.keys(r)))this.Rt(e,t),this.It(r[e],t)}wt(e,t){let r=e.values||[];for(let e of(this.Et(t,50),r))this.It(e,t)}gt(e,t){this.Et(t,37),sp.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}aq.bt=new aq;/**
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
 */class a${constructor(){this._n=new az}addToCollectionParentIndex(e,t){return this._n.add(t),sv.resolve()}getCollectionParents(e,t){return sv.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return sv.resolve()}deleteFieldIndex(e,t){return sv.resolve()}deleteAllFieldIndexes(e){return sv.resolve()}createTargetIndexes(e,t){return sv.resolve()}getDocumentsMatchingTarget(e,t){return sv.resolve(null)}getIndexType(e,t){return sv.resolve(0)}getFieldIndexes(e,t){return sv.resolve([])}getNextCollectionGroupToUpdate(e){return sv.resolve(null)}getMinOffset(e,t){return sv.resolve(sg.min())}getMinOffsetFromCollectionGroup(e,t){return sv.resolve(sg.min())}updateCollectionGroup(e,t,r){return sv.resolve()}updateIndexEntries(e,t){return sv.resolve()}}class az{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new sP(sc.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new sP(sc.comparator)).toArray()}}new Uint8Array(0);class aK{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new aK(e,aK.DEFAULT_COLLECTION_PERCENTILE,aK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */aK.DEFAULT_COLLECTION_PERCENTILE=10,aK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,aK.DEFAULT=new aK(41943040,aK.DEFAULT_COLLECTION_PERCENTILE,aK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),aK.DISABLED=new aK(-1,0,0);/**
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
 */class aG{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new aG(0)}static Ln(){return new aG(-1)}}/**
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
 */class aH{constructor(){this.changes=new oV(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,or.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?sv.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class aQ{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class aW{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&o5(r.mutation,e,sU.empty(),sl.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,o$()).next(()=>t))}getLocalViewOfDocuments(e,t,r=o$()){let n=oj();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=oB();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=oj();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,o$()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=oU,s=oj(),o=oj();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof o7)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),o5(o.mutation,t,o.mutation.getFieldMask(),sl.now())):s.set(t.key,sU.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new aQ(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=oj(),n=new sx((e,t)=>e-t),i=o$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||sU.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||o$()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,h=oj();l.forEach(e=>{if(!i.has(e)){let n=o6(t.get(e),r.get(e));null!==n&&h.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,h))}return sv.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return sp.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):oA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):sv.resolve(oj()),o=-1,a=i;return s.next(t=>sv.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?sv.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,o$())).next(e=>{let t;return{batchId:o,changes:(t=oF,e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new sp(t)).next(e=>{let t=oB();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=oB();return this.indexManager.getCollectionParents(e,i).next(o=>sv.forEach(o,o=>{let a=new oS(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,or.newInvalidDocument(n)))});let r=oB();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&o5(s.mutation,n,sU.empty(),sl.now()),oM(t,n)&&(r=r.insert(e,n))}),r})}}/**
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
 */class aY{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return sv.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:aN(t.createTime)}),sv.resolve()}getNamedQuery(e,t){return sv.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=aR(e);return 4===t.length?sc.emptyPath():aP(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||i4();let e=i.from[0];e.allDescendants?o=e.collectionId:n=n.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=aU(e.unaryFilter.field);return ol.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=aU(e.unaryFilter.field);return ol.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=aU(e.unaryFilter.field);return ol.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=aU(e.unaryFilter.field);return ol.create(i,"!=",{nullValue:"NULL_VALUE"});default:return i4()}}(t):void 0!==t.fieldFilter?ol.create(aU(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return i4()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?oh.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return i4()}}(t.compositeFilter.op)):i4()}(e);return r instanceof oh&&oc(t=r)&&ou(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new oo(aU(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new on(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new on(e.values||[],t)}(i.endAt)),new oS(n,o,l,a,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?oL(t,t.limit,"L"):t}(t.bundledQuery),readTime:aN(t.readTime)}),sv.resolve()}}/**
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
 */class aX{constructor(){this.overlays=new sx(sp.comparator),this.hr=new Map}getOverlay(e,t){return sv.resolve(this.overlays.get(t))}getOverlays(e,t){let r=oj();return sv.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.ht(e,t,n)}),sv.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.hr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(r)),sv.resolve()}getOverlaysForCollection(e,t,r){let n=oj(),i=t.length+1,s=new sp(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return sv.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new sx((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=oj(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=oj(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return sv.resolve(o)}ht(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.hr.get(n.largestBatchId).delete(r.key);this.hr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new as(t,r));let i=this.hr.get(t);void 0===i&&(i=o$(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
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
 */class aJ{constructor(){this.Pr=new sP(aZ.Ir),this.Tr=new sP(aZ.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let r=new aZ(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new aZ(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new sp(new sc([])),r=new aZ(t,e),n=new aZ(t,e+1),i=[];return this.Tr.forEachInRange([r,n],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new sp(new sc([])),r=new aZ(t,e),n=new aZ(t,e+1),i=o$();return this.Tr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new aZ(e,0),r=this.Pr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class aZ{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return sp.comparator(e.key,t.key)||so(e.pr,t.pr)}static Er(e,t){return so(e.pr,t.pr)||sp.comparator(e.key,t.key)}}/**
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
 */class a0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new sP(aZ.Ir)}checkEmpty(e){return sv.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new ai(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.wr=this.wr.add(new aZ(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return sv.resolve(s)}lookupMutationBatch(e,t){return sv.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.br(t+1),n=r<0?0:r;return sv.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return sv.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return sv.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new aZ(t,0),n=new aZ(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,n],e=>{let t=this.Sr(e.pr);i.push(t)}),sv.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new sP(so);return t.forEach(e=>{let t=new aZ(e,0),n=new aZ(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,n],e=>{r=r.add(e.pr)})}),sv.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;sp.isDocumentKey(i)||(i=i.child(""));let s=new aZ(new sp(i),0),o=new sP(so);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.pr)),!0)},s),sv.resolve(this.Dr(o))}Dr(e){let t=[];return e.forEach(e=>{let r=this.Sr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||i4(),this.mutationQueue.shift();let r=this.wr;return sv.forEach(t.mutations,n=>{let i=new aZ(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){let r=new aZ(t,0),n=this.wr.firstAfterOrEqual(r);return sv.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,sv.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class a1{constructor(e){this.vr=e,this.docs=new sx(sp.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return sv.resolve(r?r.document.mutableCopy():or.newInvalidDocument(t))}getEntries(e,t){let r=oU;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():or.newInvalidDocument(e))}),sv.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=oU,s=t.path,o=new sp(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=sp.comparator(e.documentKey,t.documentKey))?r:so(e.largestBatchId,t.largestBatchId)}(new sg(o.readTime,o.key,-1),r)||(n.has(o.key)||oM(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return sv.resolve(i)}getAllFromCollectionGroup(e,t,r,n){i4()}Fr(e,t){return sv.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new a2(this)}getSize(e){return sv.resolve(this.size)}}class a2 extends aH{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.ar.addEntry(e,n)):this.ar.removeEntry(r)}),sv.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class a4{constructor(e){this.persistence=e,this.Mr=new oV(e=>o_(e),oT),this.lastRemoteSnapshotVersion=sh.min(),this.highestTargetId=0,this.Or=0,this.Nr=new aJ,this.targetCount=0,this.Lr=aG.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,r)=>t(r)),sv.resolve()}getLastRemoteSnapshotVersion(e){return sv.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return sv.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),sv.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),sv.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new aG(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,sv.resolve()}updateTargetData(e,t){return this.qn(t),sv.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,sv.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Mr.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),sv.waitFor(i).next(()=>n)}getTargetCount(e){return sv.resolve(this.targetCount)}getTargetData(e,t){let r=this.Mr.get(t)||null;return sv.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),sv.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),sv.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),sv.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Nr.gr(t);return sv.resolve(r)}containsKey(e,t){return sv.resolve(this.Nr.containsKey(t))}}/**
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
 */class a9{constructor(e,t){this.Br={},this.overlays={},this.kr=new sD(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new a4(this),this.indexManager=new a$,this.remoteDocumentCache=new a1(e=>this.referenceDelegate.Kr(e)),this.serializer=new aj(t),this.$r=new aY(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aX,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new a0(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){iZ("MemoryPersistence","Starting transaction:",e);let n=new a6(this.kr.next());return this.referenceDelegate.Ur(),r(n).next(e=>this.referenceDelegate.Wr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Gr(e,t){return sv.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class a6 extends sm{constructor(e){super(),this.currentSequenceNumber=e}}class a5{constructor(e){this.persistence=e,this.zr=new aJ,this.jr=null}static Hr(e){return new a5(e)}get Jr(){if(this.jr)return this.jr;throw i4()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),sv.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),sv.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),sv.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return sv.forEach(this.Jr,r=>{let n=sp.fromPath(r);return this.Yr(e,n).next(e=>{e||t.removeEntry(n,sh.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return sv.or([()=>sv.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class a3{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=n}static Ki(e,t){let r=o$(),n=o$();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new a3(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class a8{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class a7{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=!function(){var e;let t=null===(e=F())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(m.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:sb.v(z())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Hi(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new a8;return this.Ji(e,t,r).next(n=>{if(i.result=n,this.Ui)return this.Yi(e,t,r,n.size)})}).next(()=>i.result)}Yi(e,t,r,n){return r.documentReadCount<this.Wi?(iJ()<=eY.DEBUG&&iZ("QueryEngine","SDK will not create cache indexes for query:",oO(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),sv.resolve()):(iJ()<=eY.DEBUG&&iZ("QueryEngine","Query:",oO(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Gi*n?(iJ()<=eY.DEBUG&&iZ("QueryEngine","The SDK decides to create cache indexes for query:",oO(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,oN(t))):sv.resolve())}ji(e,t){if(oC(t))return sv.resolve(null);let r=oN(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=oN(t=oL(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=o$(...n);return this.zi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Zi(t,n);return this.Xi(t,s,i,r.readTime)?this.ji(e,oL(t,null,"F")):this.es(e,s,t,r)}))})))}Hi(e,t,r,n){return oC(t)||n.isEqual(sh.min())?sv.resolve(null):this.zi.getDocuments(e,r).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,r,n)?sv.resolve(null):(iJ()<=eY.DEBUG&&iZ("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oO(t)),this.es(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new sg(sh.fromTimestamp(1e9===n?new sl(r+1,0):new sl(r,n)),sp.empty(),-1)}(n,0)).next(e=>e))})}Zi(e,t){let r=new sP(oP(e));return t.forEach((t,n)=>{oM(e,n)&&(r=r.add(n))}),r}Xi(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Ji(e,t,r){return iJ()<=eY.DEBUG&&iZ("QueryEngine","Using full collection scan to execute query:",oO(t)),this.zi.getDocumentsMatchingQuery(e,t,sg.min(),r)}es(e,t,r,n){return this.zi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class le{constructor(e,t,r,n){this.persistence=e,this.ts=t,this.serializer=n,this.ns=new sx(so),this.rs=new oV(e=>o_(e),oT),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aW(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function lt(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=o$();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}))})})}function lr(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function ln(e,t,r){let n=e.ns.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!sT(e))throw e;iZ("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(n.target)}function li(e,t,r){let n=sh.min(),i=o$();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.rs.get(r);return void 0!==n?sv.resolve(e.ns.get(n)):e.Qr.getTargetData(t,r)})(e,s,oN(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,r?n:sh.min(),r?i:o$())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(n)||sh.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(n,s),{documents:r,hs:i}}))}class ls{constructor(){this.activeTargetIds=oz}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class lo{constructor(){this.no=new ls,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ls,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class la{io(e){}shutdown(){}}/**
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
 */class ll{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(iZ("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(iZ("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let lh=null;function lu(){return null===lh?lh=268435456+Math.round(2147483648*Math.random()):lh++,"0x"+lh.toString(16)}/**
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
 */const lc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ld{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const lf="WebChannelConnection";class lp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${r}/databases/${n}`,this.yo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get wo(){return!1}So(e,t,r,n,i){let s=lu(),o=this.bo(e,t.toUriEncodedString());iZ("RestConnection",`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,n,i),this.Co(e,o,a,r).then(t=>(iZ("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw i1("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}vo(e,t,r,n,i,s){return this.So(e,t,r,n,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+iY}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}bo(e,t){let r=lc[e];return`${this.fo}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,r,n){let i=lu();return new Promise((s,o)=>{let a=new id;a.setWithCredentials(!0),a.listenOnce(il.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ia.NO_ERROR:let t=a.getResponseJson();iZ(lf,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case ia.TIMEOUT:iZ(lf,`RPC '${e}' ${i} timed out`),o(new i6(i9.DEADLINE_EXCEEDED,"Request time out"));break;case ia.HTTP_ERROR:let r=a.getStatus();if(iZ(lf,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(i9).indexOf(t)>=0?t:i9.UNKNOWN}(t.status);o(new i6(e,t.message))}else o(new i6(i9.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new i6(i9.UNAVAILABLE,"Connection failed."));break;default:i4()}}finally{iZ(lf,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);iZ(lf,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}Fo(e,t,r){let n=lu(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=is(),o=io(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;let h=i.join("");iZ(lf,`Creating RPC '${e}' stream ${n}: ${h}`,a);let u=s.createWebChannel(h,a),c=!1,f=!1,p=new ld({lo:t=>{f?iZ(lf,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(c||(iZ(lf,`Opening RPC '${e}' stream ${n} transport.`),u.open(),c=!0),iZ(lf,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},ho:()=>u.close()}),g=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(u,ic.EventType.OPEN,()=>{f||iZ(lf,`RPC '${e}' stream ${n} transport opened.`)}),g(u,ic.EventType.CLOSE,()=>{f||(f=!0,iZ(lf,`RPC '${e}' stream ${n} transport closed`),p.Vo())}),g(u,ic.EventType.ERROR,t=>{f||(f=!0,i1(lf,`RPC '${e}' stream ${n} transport errored:`,t),p.Vo(new i6(i9.UNAVAILABLE,"The operation could not be completed")))}),g(u,ic.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||i4();let s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){iZ(lf,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=d[e];if(void 0!==t)return aa(t)}(t),i=s.message;void 0===r&&(r=i9.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.Vo(new i6(r,i)),u.close()}else iZ(lf,`RPC '${e}' stream ${n} received:`,i),p.mo(i)}}),g(o,ih.STAT_EVENT,t=>{t.stat===iu.PROXY?iZ(lf,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===iu.NOPROXY&&iZ(lf,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function lg(){return"undefined"!=typeof document?document:null}/**
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
 */function lm(e){return new aS(e,!0)}/**
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
 */class ly{constructor(e,t,r=1e3,n=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=r,this.xo=n,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),n=Math.max(0,t-r);n>0&&iZ("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class lv{constructor(e,t,r,n,i,s,o,a){this.oi=e,this.$o=r,this.Uo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new ly(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===i9.RESOURCE_EXHAUSTED?(i0(t.toString()),i0("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===i9.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Wo===t&&this.o_(e,r)},t=>{e(()=>{let e=new i6(i9.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let r=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{r(()=>this.__(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return iZ("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(iZ("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lw extends lv{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:i4(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||i4(),sB.fromBase64String(i||"")):(void 0===i||i instanceof iI||i instanceof Uint8Array||i4(),sB.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new ay(s,o,a,l&&new i6(void 0===l.code?i9.UNKNOWN:aa(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=ax(e,n.document.name),s=aN(n.document.updateTime),o=n.document.createTime?aN(n.document.createTime):sh.min(),a=new ot({mapValue:{fields:n.document.fields}}),l=or.newFoundDocument(i,s,o,a);r=new ag(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=ax(e,n.document),s=n.readTime?aN(n.readTime):sh.min(),o=or.newNoDocument(i,s);r=new ag([],n.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=ax(e,n.document);r=new ag([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return i4();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new ao(n,i);r=new am(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return sh.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?sh.min():t.readTime?aN(t.readTime):sh.min()}(e);return this.listener.u_(t,r)}c_(e){let t={};t.database=aM(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=oI(n)?{documents:{documents:[aO(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=aO(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof ol?function(e){if("=="===e.op){if(s3(e.value))return{unaryFilter:{field:aV(e.field),op:"IS_NAN"}};if(s5(e.value))return{unaryFilter:{field:aV(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(s3(e.value))return{unaryFilter:{field:aV(e.field),op:"IS_NOT_NAN"}};if(s5(e.value))return{unaryFilter:{field:aV(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:aV(e.field),op:aT[e.op],value:e.value}}}(t):t instanceof oh?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:aI[t.op],filters:r}}}(t):i4()}(oh.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:aV(e.field),direction:a_[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=aC(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ut:s,parent:i}}(e,n).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=aD(e,t.resumeToken);let n=aC(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(sh.min())>0){r.readTime=aA(e,t.snapshotVersion.toTimestamp());let n=aC(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return i4()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.t_(t)}l_(e){let t={};t.database=aM(this.serializer),t.removeTarget=e,this.t_(t)}}/**
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
 */class lb extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.A_=!1}R_(){if(this.A_)throw new i6(i9.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,aL(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===i9.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new i6(i9.UNKNOWN,e.toString())})}vo(e,t,r,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,aL(t,r),n,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===i9.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new i6(i9.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class lE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(i0(t),this.g_=!1):iZ("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class l_{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(e=>{r.enqueueAndForget(async()=>{lL(this)&&(iZ("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await lI(e),e.x_.set("Unknown"),e.v_.delete(4),await lT(e)}(this))})}),this.x_=new lE(r,n)}}async function lT(e){if(lL(e))for(let t of e.F_)await t(!0)}async function lI(e){for(let t of e.F_)await t(!1)}function lS(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),lk(e)?lN(e):lU(e).Jo()&&lA(e,t))}function lC(e,t){let r=lU(e);e.C_.delete(t),r.Jo()&&lD(e,t),0===e.C_.size&&(r.Jo()?r.Xo():lL(e)&&e.x_.set("Unknown"))}function lA(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(sh.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}lU(e).c_(t)}function lD(e,t){e.O_.Oe(t),lU(e).l_(t)}function lN(e){e.O_=new aw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),lU(e).start(),e.x_.p_()}function lk(e){return lL(e)&&!lU(e).Ho()&&e.C_.size>0}function lL(e){return 0===e.v_.size}async function lR(e){e.C_.forEach((t,r)=>{lA(e,t)})}async function lx(e,t){e.O_=void 0,lk(e)?(e.x_.S_(t),lN(e)):e.x_.set("Unknown")}async function lO(e,t,r){if(e.x_.set("Online"),t instanceof ay&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.C_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.C_.delete(n),e.O_.removeTarget(n))}(e,t)}catch(r){iZ("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await lM(e,r)}else if(t instanceof ag?e.O_.$e(t):t instanceof am?e.O_.Je(t):e.O_.Ge(t),!r.isEqual(sh.min()))try{let t=await lr(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.O_.it(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.C_.get(n);i&&e.C_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.C_.get(t);if(!n)return;e.C_.set(t,n.withResumeToken(sB.EMPTY_BYTE_STRING,n.snapshotVersion)),lD(e,t);let i=new aB(n.target,t,r,n.sequenceNumber);lA(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){iZ("RemoteStore","Failed to raise snapshot:",t),await lM(e,t)}}async function lM(e,t,r){if(!sT(t))throw t;e.v_.add(1),await lI(e),e.x_.set("Offline"),r||(r=()=>lr(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{iZ("RemoteStore","Retrying IndexedDB access"),await r(),e.v_.delete(1),await lT(e)})}async function lP(e,t){e.asyncQueue.verifyOperationInProgress(),iZ("RemoteStore","RemoteStore received new credentials");let r=lL(e);e.v_.add(3),await lI(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await lT(e)}async function lV(e,t){t?(e.v_.delete(2),await lT(e)):t||(e.v_.add(2),await lI(e),e.x_.set("Unknown"))}function lU(e){var t,r,n;return e.N_||(e.N_=(t=e.datastore,r=e.asyncQueue,n={Po:lR.bind(null,e),To:lx.bind(null,e),u_:lO.bind(null,e)},t.R_(),new lw(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.F_.push(async t=>{t?(e.N_.Zo(),lk(e)?lN(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}/**
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
 */class lF{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new i5,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new lF(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new i6(i9.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lB(e,t){if(i0("AsyncQueue",`${t}: ${e}`),sT(e))return new i6(i9.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class lj{constructor(e){this.comparator=e?(t,r)=>e(t,r)||sp.comparator(t.key,r.key):(e,t)=>sp.comparator(e.key,t.key),this.keyedMap=oB(),this.sortedSet=new sx(this.comparator)}static emptySet(e){return new lj(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lj)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new lj;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class lq{constructor(){this.B_=new sx(sp.comparator)}track(e){let t=e.doc.key,r=this.B_.get(t);r?0!==e.type&&3===r.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==r.type?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.B_=this.B_.remove(t):1===e.type&&2===r.type?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):i4():this.B_=this.B_.insert(t,e)}k_(){let e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class l${constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new l$(e,t,lj.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oR(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
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
 */class lz{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class lK{constructor(){this.queries=new oV(e=>ox(e),oR),this.onlineState="Unknown",this.W_=new Set}}async function lG(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.K_()&&t.U_()&&(r=2):(i=new lz,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await e.onListen(n,!0);break;case 1:i.q_=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=lB(r,`Initialization of query '${oO(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.Q_.push(t),t.G_(e.onlineState),i.q_&&t.z_(i.q_)&&lY(e)}async function lH(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.Q_.indexOf(t);e>=0&&(i.Q_.splice(e,1),0===i.Q_.length?n=t.U_()?0:1:!i.K_()&&t.U_()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function lQ(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.Q_)e.z_(n)&&(r=!0);i.q_=n}}r&&lY(e)}function lW(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.Q_)e.onError(r);e.queries.delete(t)}function lY(e){e.W_.forEach(e=>{e.next()})}(g=p||(p={})).j_="default",g.Cache="cache";class lX{constructor(e,t,r){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new l$(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){return!(e.fromCache&&this.U_())||(!this.options.ta||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Z_(e){if(e.docChanges.length>0)return!0;let t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ea(e){e=l$.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==p.Cache}}/**
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
 */class lJ{constructor(e){this.key=e}}class lZ{constructor(e){this.key=e}}class l0{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=o$(),this.mutatedKeys=o$(),this.ha=oP(e),this.Pa=new lj(this.ha)}get Ia(){return this.ua}Ta(e,t){let r=t?t.Ea:new lq,n=t?t.Pa:this.Pa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let h=n.get(e),u=oM(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(r.track({type:3,doc:u}),f=!0):this.da(h,u)||(r.track({type:2,doc:u}),f=!0,(a&&this.ha(u,a)>0||l&&0>this.ha(u,l))&&(o=!0)):!h&&u?(r.track({type:0,doc:u}),f=!0):h&&!u&&(r.track({type:1,doc:h}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{Pa:s,Ea:r,Xi:o,mutatedKeys:i}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;let s=e.Ea.k_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return i4()}};return r(e)-r(t)})(e.type,t.type)||this.ha(e.doc,t.doc)),this.Aa(r),n=null!=n&&n;let o=t&&!n?this.Ra():[],a=0===this.la.size&&this.current&&!n?1:0,l=a!==this.ca;return(this.ca=a,0!==s.length||l)?{snapshot:new l$(this.query,e.Pa,i,s,e.mutatedKeys,0===a,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:o}:{Va:o}}G_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new lq,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=e.current)}Ra(){if(!this.current)return[];let e=this.la;this.la=o$(),this.Pa.forEach(e=>{this.ma(e.key)&&(this.la=this.la.add(e.key))});let t=[];return e.forEach(e=>{this.la.has(e)||t.push(new lZ(e))}),this.la.forEach(r=>{e.has(r)||t.push(new lJ(r))}),t}fa(e){this.ua=e.hs,this.la=o$();let t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return l$.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,0===this.ca,this.hasCachedResults)}}class l1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class l2{constructor(e){this.key=e,this.pa=!1}}class l4{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ya={},this.wa=new oV(e=>ox(e),oR),this.Sa=new Map,this.ba=new Set,this.Da=new sx(sp.comparator),this.Ca=new Map,this.va=new aJ,this.Fa={},this.Ma=new Map,this.xa=aG.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return!0===this.Oa}}async function l9(e,t,r=!0){let n;let i=hu(e),s=i.wa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.ga()):n=await l5(i,t,r,!0),n}async function l6(e,t){let r=hu(e);await l5(r,t,!0,!1)}async function l5(e,t,r,n){var i,s;let o;let a=await (i=e.localStore,s=oN(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Qr.getTargetData(e,s).next(r=>r?(t=r,sv.resolve(t)):i.Qr.allocateTargetId(e).next(r=>(t=new aB(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.ns=i.ns.insert(e.targetId,e),i.rs.set(s,e.targetId)),e})),l=a.targetId,h=r?e.sharedClientState.addLocalQueryTarget(l):"not-current";return n&&(o=await l3(e,t,l,"current"===h,a.resumeToken)),e.isPrimaryClient&&r&&lS(e.remoteStore,a),o}async function l3(e,t,r,n,i){e.Na=(t,r,n)=>(async function(e,t,r,n){let i=t.view.Ta(r);i.Xi&&(i=await li(e.localStore,t.query,!1).then(({documents:e})=>t.view.Ta(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return hs(e,t.targetId,a.Va),a.snapshot})(e,t,r,n);let s=await li(e.localStore,t,!0),o=new l0(t,s.hs),a=o.Ta(s.documents),l=ap.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),h=o.applyChanges(a,e.isPrimaryClient,l);hs(e,r,h.Va);let u=new l1(t,r,o);return e.wa.set(t,u),e.Sa.has(r)?e.Sa.get(r).push(t):e.Sa.set(r,[t]),h.snapshot}async function l8(e,t,r){let n=e.wa.get(t),i=e.Sa.get(n.targetId);if(i.length>1)return e.Sa.set(n.targetId,i.filter(e=>!oR(e,t))),void e.wa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await ln(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&lC(e.remoteStore,n.targetId),hn(e,n.targetId)}).catch(sy)):(hn(e,n.targetId),await ln(e.localStore,n.targetId,!0))}async function l7(e,t){let r=e.wa.get(t),n=e.Sa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),lC(e.remoteStore,r.targetId))}async function he(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e.os.newChangeBuffer({trackRemovals:!0});n=e.ns;let h=[];t.targetChanges.forEach((s,o)=>{var a;let l=n.get(o);if(!l)return;h.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,o)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(sB.EMPTY_BYTE_STRING,sh.min()).withLastLimboFreeSnapshotVersion(sh.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),n=n.insert(o,u),a=u,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Qr.updateTargetData(i,u))});let u=oU,c=o$();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),h.push((s=t.documentUpdates,o=o$(),a=o$(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=oU;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(r)),n.isNoDocument()&&n.version.isEqual(sh.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):iZ("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{cs:t,ls:a}})).next(e=>{u=e.cs,c=e.ls})),!r.isEqual(sh.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));h.push(t)}return sv.waitFor(h).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(t=>(e.ns=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Ca.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||i4(),t.addedDocuments.size>0?n.pa=!0:t.modifiedDocuments.size>0?n.pa||i4():t.removedDocuments.size>0&&(n.pa||i4(),n.pa=!1))}),await ha(e,r,t)}catch(e){await sy(e)}}function ht(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.wa.forEach((e,r)=>{let n=r.view.G_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.Q_)e.G_(t)&&(r=!0)}),r&&lY(n),i.length&&e.ya.u_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function hr(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Ca.get(t),i=n&&n.key;if(i){let r=new sx(sp.comparator);r=r.insert(i,or.newNoDocument(i,sh.min()));let n=o$().add(i),s=new af(sh.min(),new Map,new sx(so),r,n);await he(e,s),e.Da=e.Da.remove(i),e.Ca.delete(t),ho(e)}else await ln(e.localStore,t,!1).then(()=>hn(e,t,r)).catch(sy)}function hn(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Sa.get(t)))e.wa.delete(n),r&&e.ya.La(n,r);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(t=>{e.va.containsKey(t)||hi(e,t)})}function hi(e,t){e.ba.delete(t.path.canonicalString());let r=e.Da.get(t);null!==r&&(lC(e.remoteStore,r),e.Da=e.Da.remove(t),e.Ca.delete(r),ho(e))}function hs(e,t,r){for(let n of r)n instanceof lJ?(e.va.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Da.get(r)||e.ba.has(n)||(iZ("SyncEngine","New document in limbo: "+r),e.ba.add(n),ho(e))}(e,n)):n instanceof lZ?(iZ("SyncEngine","Document no longer in limbo: "+n.key),e.va.removeReference(n.key,t),e.va.containsKey(n.key)||hi(e,n.key)):i4()}function ho(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){let t=e.ba.values().next().value;e.ba.delete(t);let r=new sp(sc.fromString(t)),n=e.xa.next();e.Ca.set(n,new l2(r)),e.Da=e.Da.insert(r,n),lS(e.remoteStore,new aB(oN(new oS(r.path)),n,"TargetPurposeLimboResolution",sD._e))}}async function ha(e,t,r){let n=[],i=[],s=[];e.wa.isEmpty()||(e.wa.forEach((o,a)=>{s.push(e.Na(a,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=a3.Ki(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.ya.u_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>sv.forEach(t,t=>sv.forEach(t.qi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>sv.forEach(t.Qi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!sT(e))throw e;iZ("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.ns.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.ns=e.ns.insert(t,i)}}}(e.localStore,i))}async function hl(e,t){var r;if(!e.currentUser.isEqual(t)){iZ("SyncEngine","User change. New user:",t.toKey());let n=await lt(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Ma.forEach(e=>{e.forEach(e=>{e.reject(new i6(i9.CANCELLED,r))})}),e.Ma.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ha(e,n.us)}}function hh(e,t){let r=e.Ca.get(t);if(r&&r.pa)return o$().add(r.key);{let r=o$(),n=e.Sa.get(t);if(!n)return r;for(let t of n){let n=e.wa.get(t);r=r.unionWith(n.view.Ia)}return r}}function hu(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=he.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hr.bind(null,e),e.ya.u_=lQ.bind(null,e.eventManager),e.ya.La=lW.bind(null,e.eventManager),e}class hc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new le(t,new a7,e.initialUser,this.serializer)}createPersistence(e){return new a9(a5.Hr,this.serializer)}createSharedClientState(e){return new lo}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ht(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=hl.bind(null,this.syncEngine),await lV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lK}createDatastore(e){let t=lm(e.databaseInfo.databaseId),r=new lp(e.databaseInfo);return new lb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new l_(t,this.datastore,e.asyncQueue,e=>ht(this.syncEngine,e,0),ll.D()?new ll:new la)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new l4(e,t,r,n,i,s);return o&&(a.Oa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){iZ("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await lI(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
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
 *//**
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
 */class hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):i0("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class hp{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=iW.UNAUTHENTICATED,this.clientId=ss.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{iZ("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(iZ("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new i6(i9.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new i5;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=lB(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function hg(e,t){e.asyncQueue.verifyOperationInProgress(),iZ("FirestoreClient","Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await lt(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function hm(e,t){e.asyncQueue.verifyOperationInProgress();let r=await hy(e);iZ("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>lP(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>lP(t.remoteStore,r)),e._onlineComponents=t}async function hy(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){iZ("FirestoreClient","Using user provided OfflineComponentProvider");try{await hg(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===i9.FAILED_PRECONDITION||t.code===i9.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;i1("Error using user provided cache. Falling back to memory cache: "+t),await hg(e,new hc)}}else iZ("FirestoreClient","Using default OfflineComponentProvider"),await hg(e,new hc)}return e._offlineComponents}async function hv(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(iZ("FirestoreClient","Using user provided OnlineComponentProvider"),await hm(e,e._uninitializedComponentsProvider._online)):(iZ("FirestoreClient","Using default OnlineComponentProvider"),await hm(e,new hd))),e._onlineComponents}async function hw(e){let t=await hv(e),r=t.eventManager;return r.onListen=l9.bind(null,t.syncEngine),r.onUnlisten=l8.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=l6.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=l7.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hb(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const hE=new Map;function h_(e){if(sp.isDocumentKey(e))throw new i6(i9.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function hT(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":i4()}function hI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new i6(i9.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=hT(e);throw new i6(i9.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
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
 */class hS{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new i6(i9.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new i6(i9.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new i6(i9.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hb(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new i6(i9.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new i6(i9.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new i6(i9.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hC{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new i6(i9.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new i6(i9.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hS(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new i8;switch(e.type){case"firstParty":return new sr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new i6(i9.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=hE.get(e);t&&(iZ("ComponentProvider","Removing Datastore"),hE.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class hA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hA(this.firestore,e,this._query)}}class hD{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hN(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hD(this.firestore,e,this._key)}}class hN extends hA{constructor(e,t,r){super(e,t,new oS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new hD(this.firestore,null,new sp(e))}withConverter(e){return new hN(this.firestore,e,this._path)}}/**
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
 */class hk{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new ly(this,"async_queue_retry"),this.cu=()=>{let e=lg();e&&iZ("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=lg();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;let t=lg();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});let t=new i5;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(0!==this.ru.length){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!sT(e))throw e;iZ("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){let t=this.nu.then(()=>(this._u=!0,e().catch(e=>{let t;throw this.ou=e,this._u=!1,i0("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this._u=!1,e))));return this.nu=t,t}enqueueAfterDelay(e,t,r){this.lu(),this.uu.indexOf(e)>-1&&(t=0);let n=lF.createAndSchedule(this,e,t,r,e=>this.Iu(e));return this.su.push(n),n}lu(){this.ou&&i4()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(let t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{for(let t of(this.su.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.su))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){let t=this.su.indexOf(e);this.su.splice(t,1)}}class hL extends hC{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new hk,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hR(this),this._firestoreClient.terminate()}}function hR(e){var t,r,n,i;let s=e._freezeSettings(),o=(i=e._databaseId,new sQ(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hb(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new hp(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class hx{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hx(sB.fromBase64String(e))}catch(e){throw new i6(i9.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hx(sB.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hO{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new i6(i9.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sf(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hM{constructor(e){this._methodName=e}}/**
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
 */class hP{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new i6(i9.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new i6(i9.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return so(this._lat,e._lat)||so(this._long,e._long)}}/**
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
 */const hV=/^__.*__$/;function hU(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw i4()}}class hF{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new hF(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.mu({path:r,gu:!1});return n.pu(e),n}yu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.mu({path:r,gu:!1});return n.Ru(),n}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return h$(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(0===e.length)throw this.Su("Document fields must not be empty");if(hU(this.Vu)&&hV.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class hB{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||lm(e)}Cu(e,t,r,n=!1){return new hF({Vu:e,methodName:t,Du:r,path:sf.emptyPath(),gu:!1,bu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hj(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof sl||e instanceof hP||e instanceof hx||e instanceof hD||e instanceof hM)}const hq=RegExp("[~\\*/\\[\\]]");function h$(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new i6(i9.INVALID_ARGUMENT,a+e+l)}/**
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
 */class hz{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hD(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new hK(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(hG("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class hK extends hz{data(){return super.data()}}function hG(e,t){return"string"==typeof t?function(e,t,r){if(t.search(hq)>=0)throw h$(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,void 0);try{return new hO(...t.split("."))._internalPath}catch(r){throw h$(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,void 0)}}(e,t):t instanceof hO?t._internalPath:t._delegate._internalPath}class hH{}class hQ extends hH{}class hW extends hQ{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new hW(e,t,r)}_apply(e){let t=this._parse(e);return h1(e._query,t),new hA(e.firestore,e.converter,ok(e._query,t))}_parse(e){let t=function(e){let t=e._freezeSettings(),r=lm(e._databaseId);return new hB(e._databaseId,!!t.ignoreUndefinedProperties,r)}(e.firestore);return function(e,t,r,n,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new i6(i9.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){h0(o,s);let t=[];for(let r of o)t.push(hZ(n,e,r));a={arrayValue:{values:t}}}else a=hZ(n,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||h0(o,s),a=function(e,t,r,n=!1){return function e(t,r){if(hj(t=X(t)))return function(e,t,r){if(!hj(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=hT(r);throw"an object"===n?t.Su(e+" a custom object"):t.Su(e+" "+n)}}("Unsupported field value:",r,t),function(t,r){let n={};return sR(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):sL(t,(t,i)=>{let s=e(i,r.fu(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}(t,r);if(t instanceof hM)return function(e,t){if(!hU(t.Vu))throw t.Su(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Su(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(t,r),null;if(void 0===t&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),t instanceof Array){if(r.settings.gu&&4!==r.Vu)throw r.Su("Nested arrays are not supported");return function(t,r){let n=[],i=0;for(let s of t){let t=e(s,r.wu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,r)}return function(e,t){if(null===(e=X(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!sN(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?oG(n):oK(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=sl.fromDate(e);return{timestampValue:aA(t.serializer,r)}}if(e instanceof sl){let r=new sl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:aA(t.serializer,r)}}if(e instanceof hP)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hx)return{bytesValue:aD(t.serializer,e._byteString)};if(e instanceof hD){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Su(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ak(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Su(`Unsupported field value: ${hT(e)}`)}(t,r)}(r,e.Cu(n?4:3,t))}(r,t,o,"in"===s||"not-in"===s);return ol.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class hY extends hH{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hY(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:oh.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())h1(r,e),r=ok(r,e)}(e._query,t),new hA(e.firestore,e.converter,ok(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class hX extends hQ{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new hX(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new i6(i9.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new i6(i9.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oo(t,r)}(e._query,this._field,this._direction);return new hA(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new oS(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class hJ extends hQ{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new hJ(e,t,r)}_apply(e){return new hA(e.firestore,e.converter,oL(e._query,this._limit,this._limitType))}}function hZ(e,t,r){if("string"==typeof(r=X(r))){if(""===r)throw new i6(i9.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oA(t)&&-1!==r.indexOf("/"))throw new i6(i9.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(sc.fromString(r));if(!sp.isDocumentKey(n))throw new i6(i9.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return s4(e,new sp(n))}if(r instanceof hD)return s4(e,r._key);throw new i6(i9.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hT(r)}.`)}function h0(e,t){if(!Array.isArray(e)||0===e.length)throw new i6(i9.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function h1(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new i6(i9.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new i6(i9.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class h2{convertValue(e,t="none"){switch(sX(e)){case 0:return null;case 1:return e.booleanValue;case 2:return s$(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sz(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw i4()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return sL(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new hP(s$(e.latitude),s$(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=sG(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(sH(e));default:return null}}convertTimestamp(e){let t=sq(e);return new sl(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=sc.fromString(e);aF(r)||i4();let n=new sW(r.get(1),r.get(3)),i=new sp(r.popFirst(5));return n.isEqual(t)||i0(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class h4{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h9 extends hz{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new h6(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(hG("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class h6 extends h9{data(e={}){return super.data(e)}}class h5{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new h4(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new h6(this._firestore,this._userDataWriter,r.key,r,new h4(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new i6(i9.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new h6(e._firestore,e._userDataWriter,r.doc.key,r.doc,new h4(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new h6(e._firestore,e._userDataWriter,t.doc.key,t.doc,new h4(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return i4()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class h3 extends h2{constructor(e){super(),this.firestore=e}convertBytes(e){return new hx(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new hD(this.firestore,null,t)}}new WeakMap,function(e=!0){iY="10.11.0",eL(new J("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new hL(new se(t.getProvider("auth-internal")),new si(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new i6(i9.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sW(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),eM(iQ,"4.6.0",void 0),eM(iQ,"4.6.0","esm2017")}();const h8=[],h7={bag:h8,updateBag:function(e){this.bag=e,console.log(e)},add:function(e){this.bag.push(e)},get:function(e){return this.bag}},ue={items:h8,update:function(e){this.items=e},getItems:function(){return this.items}},ut=(i=".bag__item-wrapper",{nodeBag:document.querySelector(i),renderBag:function(e){let t="";t+=` <li>${e}</li>`,this.nodeBag.innerHTML=t}}),ur=function(e){let t=document.querySelector(e);return{node:t,renderItems:function(e){e.forEach(e=>{this.addItem(e)})},addItem:function(e){let r=document.createElement("li"),n=document.createElement("a"),i=document.createElement("img"),s=document.createElement("div"),o=document.createElement("a"),a=document.createElement("h2"),l=document.createElement("p"),h=document.createElement("div"),u=document.createElement("p"),c=document.createElement("button");r.classList.add("item__card"),r.dataset.productId=e.id,n.classList.add("image__wrapper"),n.href="./itemCard.html?id=${item.id}",i.classList.add("item-image"),i.src=e.image,s.classList.add("item__content"),a.classList.add("item-model"),a.innerText=e.model,l.classList.add("item-series"),l.innerText=e.series,h.classList.add("price-wrapper"),u.classList.add("item-price"),u.innerText=e.price,c.classList.add("add-bag"),n.append(i),o.append(s),s.append(a,l),h.append(u,c),r.append(n,s),t.append(r)}}}(".js-output","$"),un={key:"bag",pullBag:function(){let e=localStorage.getItem(this.key);return e?JSON.parse(e):[]},pushBag:function(e){let t=JSON.stringify(e);localStorage.setItem(this.key,t)}},ui={key:"items",db:function(e,t){let r=(function(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=eS){let t=eA.get(e);if(!t&&e===eS&&q())return eO();if(!t)throw eR.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!r._initialized){let e=j("firestore");e&&function(e,t,r,n={}){var i;let s=(e=hI(e,hC))._getSettings(),o=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&i1("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=iW.MOCK_USER;else{t=/**
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[O(JSON.stringify({alg:"none",type:"JWT"})),O(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new i6(i9.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new iW(s)}e._authCredentials=new i7(new i3(t,r))}}(r,...e)}return r}(eO({apiKey:"AIzaSyDjy5thQwhCO9qDdjehZ-IUT5KR75zmWRo",authDomain:"ecommerce-app-65411.firebaseapp.com",projectId:"ecommerce-app-65411",storageBucket:"ecommerce-app-65411.appspot.com",messagingSenderId:"612979040841",appId:"1:612979040841:web:3e8a0047a9dca8e03bd598",measurementId:"G-RK5P0291EP"})),pull:async function(){var e,t;let r=function(e,t,...r){let n=[];for(let i of(t instanceof hH&&n.push(t),function(e){let t=e.filter(e=>e instanceof hY).length,r=e.filter(e=>e instanceof hW).length;if(t>1||t>0&&r>0)throw new i6(i9.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}(function(e,t,...r){if(e=X(e),/**
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
 */function(e,t,r){if(!r)throw new i6(i9.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof hC){let n=sc.fromString(t,...r);return h_(n),new hN(e,null,n)}{if(!(e instanceof hD||e instanceof hN))throw new i6(i9.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(sc.fromString(t,...r));return h_(n),new hN(e.firestore,null,n)}}(this.db,this.key),function(e,t="asc"){let r=hG("orderBy",e);return hX._create(r,t)}("price"),(e=0,t=0,hJ._create("limit",8,"F"))),n=await function(e){e=hI(e,hA);let t=hI(e.firestore,hL),r=(t._firestoreClient||hR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),n=new h3(t);return(/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new i6(i9.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new i5;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new lX(r,new hf({next:r=>{t.enqueueAndForget(()=>lH(e,s)),r.fromCache&&"server"===n.source?i.reject(new i6(i9.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,ta:!0});return lG(e,s)})(await hw(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new h5(t,n,e,r)))}(r),i=[];return n.forEach(e=>{i.push({model:e.data().model,series:e.data().series,image:e.data().image,description:e.data().description,price:e.data().price,rating:e.data().rating,descriptionShort:e.data().descriptionShort,id:e.id}),console.log(`${e.id} => ${e.data().image}`)}),i}};(document.querySelector(".js-output").addEventListener("click",function(e){let t=e.target.closest(".add-bag");if(!t)return;let r=t.closest(".item__card").dataset.productId,n=un.pullBag();console.log(n),n.includes(r)||(h7.add(r),un.pushBag(n),ut.renderBag(h7.get()),console.log(r))}),console.log(document.querySelector(".bag__item-wrapper")),{init(){let e=un.pullBag();e&&h7.updateBag(e),ut.renderBag(h7.get()),ui.pull().then(e=>{console.log(e),ue.update(e),ur.renderItems(ue.getItems())})}}).init();