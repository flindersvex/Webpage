(()=>{var Oe=()=>{};var ke=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},St=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Re={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,d=s>>2,g=(s&3)<<4|a>>4,h=(a&15)<<2|l>>6,M=l&63;c||(M=64,o||(h=64)),r.push(n[d],n[g],n[h],n[M])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ke(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):St(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;let l=i<e.length?n[e.charAt(i)]:64;++i;let g=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||g==null)throw new G;let h=s<<2|a>>4;if(r.push(h),l!==64){let M=a<<4&240|l>>2;if(r.push(M),g!==64){let At=l<<6&192|g;r.push(At)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},G=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Dt=function(e){let t=ke(e);return Re.encodeByteArray(t,!0)},K=function(e){return Dt(e).replace(/\./g,"")},Be=function(e){try{return Re.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Tt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Ot=()=>Tt().__FIREBASE_DEFAULTS__,xt=()=>{if(typeof process>"u"||typeof process.env>"u")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&Be(e[1]);return t&&JSON.parse(t)},Rt=()=>{try{return Oe()||Ot()||xt()||kt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}};var J=()=>Rt()?.config;var P=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}};function Me(){let e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function N(){try{return typeof indexedDB=="object"}catch{return!1}}function L(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}function Pe(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}var Bt="FirebaseError",b=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Bt,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}},I=class{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){let r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Mt(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new b(i,a,r)}};function Mt(e,t){return e.replace(Pt,(n,r)=>{let i=t[r];return i!=null?String(i):`<${r}?>`})}var Pt=/\{\$([^}]+)}/g;function T(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let s=e[i],o=t[i];if(xe(s)&&xe(o)){if(!T(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function xe(e){return e!==null&&typeof e=="object"}var Nt=1e3,Lt=2,$t=14400*1e3,Ft=.5;function Y(e,t=Nt,n=Lt){let r=t*Math.pow(n,e),i=Math.round(Ft*r*(Math.random()-.5)*2);return Math.min($t,r+i)}function $(e){return e&&e._delegate?e._delegate:e}var p=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var C="[DEFAULT]";var Z=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){let r=new P;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){let n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jt(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){let r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ht(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Ht(e){return e===C?void 0:e}function jt(e){return e.instantiationMode==="EAGER"}var F=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let n=new Z(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}};var zt=[],f;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(f||(f={}));var Ut={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},Vt=f.INFO,Wt={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},qt=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=Wt[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},O=class{constructor(t){this.name=t,this._logLevel=Vt,this._logHandler=qt,this._userLogHandler=null,zt.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ut[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}};var Gt=(e,t)=>t.some(n=>e instanceof n),Ne,Le;function Kt(){return Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jt(){return Le||(Le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var $e=new WeakMap,Q=new WeakMap,Fe=new WeakMap,X=new WeakMap,te=new WeakMap;function Yt(e){let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(w(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$e.set(n,e)}).catch(()=>{}),te.set(t,e),t}function Zt(e){if(Q.has(e))return;let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Q.set(e,t)}var ee={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Q.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function He(e){ee=e(ee)}function Xt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){let r=e.call(H(this),t,...n);return Fe.set(r,t.sort?t.sort():[t]),w(r)}:Jt().includes(e)?function(...t){return e.apply(H(this),t),w($e.get(this))}:function(...t){return w(e.apply(H(this),t))}}function Qt(e){return typeof e=="function"?Xt(e):(e instanceof IDBTransaction&&Zt(e),Gt(e,Kt())?new Proxy(e,ee):e)}function w(e){if(e instanceof IDBRequest)return Yt(e);if(X.has(e))return X.get(e);let t=Qt(e);return t!==e&&(X.set(e,t),te.set(t,e)),t}var H=e=>te.get(e);function j(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,t),a=w(o);return r&&o.addEventListener("upgradeneeded",c=>{r(w(o.result),c.oldVersion,c.newVersion,w(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}var en=["get","getKey","getAll","getAllKeys","count"],tn=["put","add","delete","clear"],ne=new Map;function je(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ne.get(t))return ne.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=tn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||en.includes(n)))return;let s=async function(o,...a){let c=this.transaction(o,i?"readwrite":"readonly"),l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return ne.set(t,s),s}He(e=>({...e,get:(t,n,r)=>je(t,n)||e.get(t,n,r),has:(t,n)=>!!je(t,n)||e.has(t,n)}));var ie=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nn(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function nn(e){return e.getComponent()?.type==="VERSION"}var se="@firebase/app",ze="0.14.8";var _=new O("@firebase/app"),rn="@firebase/app-compat",sn="@firebase/analytics-compat",on="@firebase/analytics",an="@firebase/app-check-compat",cn="@firebase/app-check",ln="@firebase/auth",fn="@firebase/auth-compat",un="@firebase/database",dn="@firebase/data-connect",hn="@firebase/database-compat",pn="@firebase/functions",mn="@firebase/functions-compat",gn="@firebase/installations",bn="@firebase/installations-compat",yn="@firebase/messaging",wn="@firebase/messaging-compat",In="@firebase/performance",_n="@firebase/performance-compat",En="@firebase/remote-config",vn="@firebase/remote-config-compat",Cn="@firebase/storage",An="@firebase/storage-compat",Sn="@firebase/firestore",Dn="@firebase/ai",Tn="@firebase/firestore-compat",On="firebase";var oe="[DEFAULT]",xn={[se]:"fire-core",[rn]:"fire-core-compat",[on]:"fire-analytics",[sn]:"fire-analytics-compat",[cn]:"fire-app-check",[an]:"fire-app-check-compat",[ln]:"fire-auth",[fn]:"fire-auth-compat",[un]:"fire-rtdb",[dn]:"fire-data-connect",[hn]:"fire-rtdb-compat",[pn]:"fire-fn",[mn]:"fire-fn-compat",[gn]:"fire-iid",[bn]:"fire-iid-compat",[yn]:"fire-fcm",[wn]:"fire-fcm-compat",[In]:"fire-perf",[_n]:"fire-perf-compat",[En]:"fire-rc",[vn]:"fire-rc-compat",[Cn]:"fire-gcs",[An]:"fire-gcs-compat",[Sn]:"fire-fst",[Tn]:"fire-fst-compat",[Dn]:"fire-vertex","fire-js":"fire-js",[On]:"fire-js-all"};var z=new Map,kn=new Map,ae=new Map;function Ue(e,t){try{e.container.addComponent(t)}catch(n){_.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function E(e){let t=e.name;if(ae.has(t))return _.debug(`There were multiple attempts to register component ${t}.`),!1;ae.set(t,e);for(let n of z.values())Ue(n,e);for(let n of kn.values())Ue(n,e);return!0}function x(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}var Rn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},v=new I("app","Firebase",Rn);var ce=class{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new p("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}};function ue(e,t={}){let n=e;typeof t!="object"&&(t={name:t});let r={name:oe,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw v.create("bad-app-name",{appName:String(i)});if(n||(n=J()),!n)throw v.create("no-options");let s=z.get(i);if(s){if(T(n,s.options)&&T(r,s.config))return s;throw v.create("duplicate-app",{appName:i})}let o=new F(i);for(let c of ae.values())o.addComponent(c);let a=new ce(n,r,o);return z.set(i,a),a}function de(e=oe){let t=z.get(e);if(!t&&e===oe&&J())return ue();if(!t)throw v.create("no-app",{appName:e});return t}function y(e,t,n){let r=xn[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_.warn(o.join(" "));return}E(new p(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}var Bn="firebase-heartbeat-database",Mn=1,R="firebase-heartbeat-store",re=null;function Ge(){return re||(re=j(Bn,Mn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(R)}catch(n){console.warn(n)}}}}).catch(e=>{throw v.create("idb-open",{originalErrorMessage:e.message})})),re}async function Pn(e){try{let n=(await Ge()).transaction(R),r=await n.objectStore(R).get(Ke(e));return await n.done,r}catch(t){if(t instanceof b)_.warn(t.message);else{let n=v.create("idb-get",{originalErrorMessage:t?.message});_.warn(n.message)}}}async function Ve(e,t){try{let r=(await Ge()).transaction(R,"readwrite");await r.objectStore(R).put(t,Ke(e)),await r.done}catch(n){if(n instanceof b)_.warn(n.message);else{let r=v.create("idb-set",{originalErrorMessage:n?.message});_.warn(r.message)}}}function Ke(e){return`${e.name}!${e.options.appId}`}var Nn=1024,Ln=30,le=class{constructor(t){this.container=t,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new fe(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=We();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Ln){let i=Fn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){_.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=We(),{heartbeatsToSend:n,unsentEntries:r}=$n(this._heartbeatsCache.heartbeats),i=K(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return _.warn(t),""}}};function We(){return new Date().toISOString().substring(0,10)}function $n(e,t=Nn){let n=[],r=e.slice();for(let i of e){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qe(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var fe=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N()?L().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await Pn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return Ve(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return Ve(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}};function qe(e){return K(JSON.stringify({version:2,heartbeats:e})).length}function Fn(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function Hn(e){E(new p("platform-logger",t=>new ie(t),"PRIVATE")),E(new p("heartbeat",t=>new le(t),"PRIVATE")),y(se,ze,e),y(se,ze,"esm2020"),y("fire-js","")}Hn("");var jn="firebase",zn="12.9.0";y(jn,zn,"app");var Ze="@firebase/installations",ge="0.6.19";var Xe=1e4,Qe=`w:${ge}`,et="FIS_v2",Un="https://firebaseinstallations.googleapis.com/v1",Vn=3600*1e3,Wn="installations",qn="Installations";var Gn={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},S=new I(Wn,qn,Gn);function tt(e){return e instanceof b&&e.code.includes("request-failed")}function nt({projectId:e}){return`${Un}/projects/${e}/installations`}function rt(e){return{token:e.token,requestStatus:2,expiresIn:Jn(e.expiresIn),creationTime:Date.now()}}async function it(e,t){let r=(await t.json()).error;return S.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function st({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Kn(e,{refreshToken:t}){let n=st(e);return n.append("Authorization",Yn(t)),n}async function ot(e){let t=await e();return t.status>=500&&t.status<600?e():t}function Jn(e){return Number(e.replace("s","000"))}function Yn(e){return`${et} ${e}`}async function Zn({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=nt(e),i=st(e),s=t.getImmediate({optional:!0});if(s){let l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}let o={fid:n,authVersion:et,appId:e.appId,sdkVersion:Qe},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ot(()=>fetch(r,a));if(c.ok){let l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:rt(l.authToken)}}else throw await it("Create Installation",c)}function at(e){return new Promise(t=>{setTimeout(t,e)})}function Xn(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}var Qn=/^[cdef][\w-]{21}$/,me="";function er(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let n=tr(e);return Qn.test(n)?n:me}catch{return me}}function tr(e){return Xn(e).substr(0,22)}function V(e){return`${e.appName}!${e.appId}`}var ct=new Map;function lt(e,t){let n=V(e);ft(n,t),nr(n,t)}function ft(e,t){let n=ct.get(e);if(n)for(let r of n)r(t)}function nr(e,t){let n=rr();n&&n.postMessage({key:e,fid:t}),ir()}var A=null;function rr(){return!A&&"BroadcastChannel"in self&&(A=new BroadcastChannel("[Firebase] FID Change"),A.onmessage=e=>{ft(e.data.key,e.data.fid)}),A}function ir(){ct.size===0&&A&&(A.close(),A=null)}var sr="firebase-installations-database",or=1,D="firebase-installations-store",he=null;function be(){return he||(he=j(sr,or,{upgrade:(e,t)=>{t===0&&e.createObjectStore(D)}})),he}async function U(e,t){let n=V(e),i=(await be()).transaction(D,"readwrite"),s=i.objectStore(D),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&lt(e,t.fid),t}async function ut(e){let t=V(e),r=(await be()).transaction(D,"readwrite");await r.objectStore(D).delete(t),await r.done}async function W(e,t){let n=V(e),i=(await be()).transaction(D,"readwrite"),s=i.objectStore(D),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&lt(e,a.fid),a}async function ye(e){let t,n=await W(e.appConfig,r=>{let i=ar(r),s=cr(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===me?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ar(e){let t=e||{fid:er(),registrationStatus:0};return dt(t)}function cr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject(S.create("app-offline"));return{installationEntry:t,registrationPromise:i}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=lr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fr(e)}:{installationEntry:t}}async function lr(e,t){try{let n=await Zn(e,t);return U(e.appConfig,n)}catch(n){throw tt(n)&&n.customData.serverCode===409?await ut(e.appConfig):await U(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fr(e){let t=await Je(e.appConfig);for(;t.registrationStatus===1;)await at(100),t=await Je(e.appConfig);if(t.registrationStatus===0){let{installationEntry:n,registrationPromise:r}=await ye(e);return r||n}return t}function Je(e){return W(e,t=>{if(!t)throw S.create("installation-not-found");return dt(t)})}function dt(e){return ur(e)?{fid:e.fid,registrationStatus:0}:e}function ur(e){return e.registrationStatus===1&&e.registrationTime+Xe<Date.now()}async function dr({appConfig:e,heartbeatServiceProvider:t},n){let r=hr(e,n),i=Kn(e,n),s=t.getImmediate({optional:!0});if(s){let l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}let o={installation:{sdkVersion:Qe,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ot(()=>fetch(r,a));if(c.ok){let l=await c.json();return rt(l)}else throw await it("Generate Auth Token",c)}function hr(e,{fid:t}){return`${nt(e)}/${t}/authTokens:generate`}async function we(e,t=!1){let n,r=await W(e.appConfig,s=>{if(!ht(s))throw S.create("not-registered");let o=s.authToken;if(!t&&gr(o))return s;if(o.requestStatus===1)return n=pr(e,t),s;{if(!navigator.onLine)throw S.create("app-offline");let a=yr(s);return n=mr(e,a),a}});return n?await n:r.authToken}async function pr(e,t){let n=await Ye(e.appConfig);for(;n.authToken.requestStatus===1;)await at(100),n=await Ye(e.appConfig);let r=n.authToken;return r.requestStatus===0?we(e,t):r}function Ye(e){return W(e,t=>{if(!ht(t))throw S.create("not-registered");let n=t.authToken;return wr(n)?{...t,authToken:{requestStatus:0}}:t})}async function mr(e,t){try{let n=await dr(e,t),r={...t,authToken:n};return await U(e.appConfig,r),n}catch(n){if(tt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ut(e.appConfig);else{let r={...t,authToken:{requestStatus:0}};await U(e.appConfig,r)}throw n}}function ht(e){return e!==void 0&&e.registrationStatus===2}function gr(e){return e.requestStatus===2&&!br(e)}function br(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Vn}function yr(e){let t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function wr(e){return e.requestStatus===1&&e.requestTime+Xe<Date.now()}async function Ir(e){let t=e,{installationEntry:n,registrationPromise:r}=await ye(t);return r?r.catch(console.error):we(t).catch(console.error),n.fid}async function _r(e,t=!1){let n=e;return await Er(n),(await we(n,t)).token}async function Er(e){let{registrationPromise:t}=await ye(e);t&&await t}function vr(e){if(!e||!e.options)throw pe("App Configuration");if(!e.name)throw pe("App Name");let t=["projectId","apiKey","appId"];for(let n of t)if(!e.options[n])throw pe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pe(e){return S.create("missing-app-config-values",{valueName:e})}var pt="installations",Cr="installations-internal",Ar=e=>{let t=e.getProvider("app").getImmediate(),n=vr(t),r=x(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sr=e=>{let t=e.getProvider("app").getImmediate(),n=x(t,pt).getImmediate();return{getId:()=>Ir(n),getToken:i=>_r(n,i)}};function Dr(){E(new p(pt,Ar,"PUBLIC")),E(new p(Cr,Sr,"PRIVATE"))}Dr();y(Ze,ge);y(Ze,ge,"esm2020");var q="analytics",Tr="firebase_id",Or="origin",xr=60*1e3,kr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Se="https://www.googletagmanager.com/gtag/js";var u=new O("@firebase/analytics");var Rr={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},m=new I("analytics","Analytics",Rr);function Br(e){if(!e.startsWith(Se)){let t=m.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function _t(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Mr(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Pr(e,t){let n=Mr("firebase-js-sdk-policy",{createScriptURL:Br}),r=document.createElement("script"),i=`${Se}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Nr(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Lr(e,t,n,r,i,s){let o=r[i];try{if(o)await t[o];else{let c=(await _t(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){u.error(a)}e("config",i,s)}async function $r(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);let a=await _t(n);for(let c of o){let l=a.find(g=>g.measurementId===c),d=l&&t[l.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){u.error(s)}}function Fr(e,t,n,r){async function i(s,...o){try{if(s==="event"){let[a,c]=o;await $r(e,t,n,a,c)}else if(s==="config"){let[a,c]=o;await Lr(e,t,n,r,a,c)}else if(s==="consent"){let[a,c]=o;e("consent",a,c)}else if(s==="get"){let[a,c,l]=o;e("get",a,c,l)}else if(s==="set"){let[a]=o;e("set",a)}else e(s,...o)}catch(a){u.error(a)}}return i}function Hr(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Fr(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function jr(e){let t=window.document.getElementsByTagName("script");for(let n of Object.values(t))if(n.src&&n.src.includes(Se)&&n.src.includes(e))return n;return null}var zr=30,Ur=1e3,_e=class{constructor(t={},n=Ur){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}},Et=new _e;function Vr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Wr(e){let{appId:t,apiKey:n}=e,r={method:"GET",headers:Vr(n)},i=kr.replace("{app-id}",t),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{let a=await s.json();a.error?.message&&(o=a.error.message)}catch{}throw m.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function qr(e,t=Et,n){let{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw m.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw m.create("no-api-key")}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ee;return setTimeout(async()=>{a.abort()},n!==void 0?n:xr),vt({appId:r,apiKey:i,measurementId:s},o,a,t)}async function vt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Et){let{appId:s,measurementId:o}=e;try{await Gr(r,t)}catch(a){if(o)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:s,measurementId:o};throw a}try{let a=await Wr(e);return i.deleteThrottleMetadata(s),a}catch(a){let c=a;if(!Kr(c)){if(i.deleteThrottleMetadata(s),o)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:o};throw a}let l=Number(c?.customData?.httpStatus)===503?Y(n,i.intervalMillis,zr):Y(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,d),u.debug(`Calling attemptFetch again in ${l} millis`),vt(e,d,r,i)}}function Gr(e,t){return new Promise((n,r)=>{let i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(m.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Kr(e){if(!(e instanceof b)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}var Ee=class{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}};var ve;async function Jr(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{let s=await t,o={...r,send_to:s};e("event",n,o)}}async function Yr(e,t,n,r){if(r&&r.global){let i={};for(let s of Object.keys(n))i[`user_properties.${s}`]=n[s];return e("set",i),Promise.resolve()}else{let i=await t;e("config",i,{update:!0,user_properties:n})}}var Ce;function Zr(e){Ce=e}function Xr(e){ve=e}async function Qr(){if(N())try{await L()}catch(e){return u.warn(m.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return u.warn(m.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ei(e,t,n,r,i,s,o){let a=qr(e);a.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>u.error(h)),t.push(a);let c=Qr().then(h=>{if(h)return r.getId()}),[l,d]=await Promise.all([a,c]);jr(s)||Pr(s,l.measurementId),Ce&&(i("consent","default",Ce),Zr(void 0)),i("js",new Date);let g=o?.config??{};return g[Or]="firebase",g.update=!0,d!=null&&(g[Tr]=d),i("config",l.measurementId,g),ve&&(i("set",ve),Xr(void 0)),l.measurementId}var Ae=class{constructor(t){this.app=t}_delete(){return delete k[this.app.options.appId],Promise.resolve()}},k={},mt=[],gt={},Ie="dataLayer",ti="gtag",bt,De,yt=!1;function ni(){let e=[];if(Me()&&e.push("This is a browser extension environment."),Pe()||e.push("Cookies are not available."),e.length>0){let t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=m.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function ri(e,t,n){ni();let r=e.options.appId;if(!r)throw m.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw m.create("no-api-key");if(k[r]!=null)throw m.create("already-exists",{id:r});if(!yt){Nr(Ie);let{wrappedGtag:s,gtagCore:o}=Hr(k,mt,gt,Ie,ti);De=s,bt=o,yt=!0}return k[r]=ei(e,mt,gt,t,bt,Ie,n),new Ae(e)}function Ct(e=de()){e=$(e);let t=x(e,q);return t.isInitialized()?t.getImmediate():ii(e)}function ii(e,t={}){let n=x(e,q);if(n.isInitialized()){let i=n.getImmediate();if(T(t,n.getOptions()))return i;throw m.create("already-initialized")}return n.initialize({options:t})}function si(e,t,n){e=$(e),Yr(De,k[e.app.options.appId],t,n).catch(r=>u.error(r))}function B(e,t,n,r){e=$(e),Jr(De,k[e.app.options.appId],t,n,r).catch(i=>u.error(i))}var wt="@firebase/analytics",It="0.10.19";function oi(){E(new p(q,(t,{options:n})=>{let r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return ri(r,i,n)},"PUBLIC")),E(new p("analytics-internal",e,"PRIVATE")),y(wt,It),y(wt,It,"esm2020");function e(t){try{let n=t.getProvider(q).getImmediate();return{logEvent:(r,i,s)=>B(n,r,i,s),setUserProperties:(r,i)=>si(n,r,i)}}catch(n){throw m.create("interop-component-reg-failed",{reason:n})}}}oi();console.log("I exist!");var ai={apiKey:"AIzaSyA1YlB6ub5GVSBr0uh3CkQ5cv4qC2MsSWY",authDomain:"www.flindersvex.com",projectId:"fvt-website",storageBucket:"fvt-website.firebasestorage.app",messagingSenderId:"914827557069",appId:"1:914827557069:web:e35ccc4e77ee105d989184",measurementId:"G-T1HG2XD614"},ci=ue(ai),Te=Ct(ci);document.addEventListener("DOMContentLoaded",()=>{B(Te,"site_visited"),console.log("Added event listener 1!");try{document.getElementById("joining-rubric-button").addEventListener("click",()=>{B(Te,"rubric-visited"),console.log("Event 2 fired!")})}catch(e){console.error("Error appending event to Rubric button: "+e)}try{document.getElementById("joining-discord-button").addEventListener("click",()=>{B(Te,"discord-visited"),console.log("Event 3 fired!")})}catch(e){console.error("Error appending event to Discord button: "+e)}});})();
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/logger/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
  (**
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
   *)

@firebase/util/dist/index.esm.js:
  (**
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
   *)
  (**
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
   *)

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
  (**
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
   *)

@firebase/util/dist/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/analytics/dist/esm/index.esm.js:
  (**
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
   *)
  (**
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
   *)

@firebase/component/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
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
   *)
  (**
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
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
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
   *)
  (**
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
   *)

firebase/app/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/analytics/dist/esm/index.esm.js:
  (**
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
   *)
  (**
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
   *)
*/
//# sourceMappingURL=out.js.map
