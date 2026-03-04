(()=>{var Oe=()=>{};var ke=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Dt=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Re={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,d=s>>2,g=(s&3)<<4|a>>4,h=(a&15)<<2|l>>6,M=l&63;c||(M=64,o||(h=64)),r.push(n[d],n[g],n[h],n[M])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ke(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Dt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;let l=i<e.length?n[e.charAt(i)]:64;++i;let g=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||g==null)throw new K;let h=s<<2|a>>4;if(r.push(h),l!==64){let M=a<<4&240|l>>2;if(r.push(M),g!==64){let St=l<<6&192|g;r.push(St)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},K=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Tt=function(e){let t=ke(e);return Re.encodeByteArray(t,!0)},J=function(e){return Tt(e).replace(/\./g,"")},Be=function(e){try{return Re.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Ot(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var xt=()=>Ot().__FIREBASE_DEFAULTS__,kt=()=>{if(typeof process>"u"||typeof process.env>"u")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Rt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&Be(e[1]);return t&&JSON.parse(t)},Bt=()=>{try{return Oe()||xt()||kt()||Rt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}};var Y=()=>Bt()?.config;var P=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}};function Me(){let e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function N(){try{return typeof indexedDB=="object"}catch{return!1}}function L(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}function Pe(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}var Mt="FirebaseError",y=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Mt,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}},_=class{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){let r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Pt(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new y(i,a,r)}};function Pt(e,t){return e.replace(Nt,(n,r)=>{let i=t[r];return i!=null?String(i):`<${r}?>`})}var Nt=/\{\$([^}]+)}/g;function O(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let s=e[i],o=t[i];if(xe(s)&&xe(o)){if(!O(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function xe(e){return e!==null&&typeof e=="object"}var Lt=1e3,$t=2,Ft=14400*1e3,Ht=.5;function Z(e,t=Lt,n=$t){let r=t*Math.pow(n,e),i=Math.round(Ht*r*(Math.random()-.5)*2);return Math.min(Ft,r+i)}function $(e){return e&&e._delegate?e._delegate:e}var p=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var A="[DEFAULT]";var X=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){let r=new P;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){let n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zt(t))try{this.getOrInitializeService({instanceIdentifier:A})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=A){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=A){return this.instances.has(t)}getOptions(t=A){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){let r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=A){return this.component?this.component.multipleInstances?t:A:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function jt(e){return e===A?void 0:e}function zt(e){return e.instantiationMode==="EAGER"}var F=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let n=new X(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}};var Ut=[],f;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(f||(f={}));var Vt={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},Wt=f.INFO,qt={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},Gt=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=qt[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},x=class{constructor(t){this.name=t,this._logLevel=Wt,this._logHandler=Gt,this._userLogHandler=null,Ut.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}};var Kt=(e,t)=>t.some(n=>e instanceof n),Ne,Le;function Jt(){return Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yt(){return Le||(Le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var $e=new WeakMap,ee=new WeakMap,Fe=new WeakMap,Q=new WeakMap,ne=new WeakMap;function Zt(e){let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(I(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$e.set(n,e)}).catch(()=>{}),ne.set(t,e),t}function Xt(e){if(ee.has(e))return;let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ee.set(e,t)}var te={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ee.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function He(e){te=e(te)}function Qt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){let r=e.call(H(this),t,...n);return Fe.set(r,t.sort?t.sort():[t]),I(r)}:Yt().includes(e)?function(...t){return e.apply(H(this),t),I($e.get(this))}:function(...t){return I(e.apply(H(this),t))}}function en(e){return typeof e=="function"?Qt(e):(e instanceof IDBTransaction&&Xt(e),Kt(e,Jt())?new Proxy(e,te):e)}function I(e){if(e instanceof IDBRequest)return Zt(e);if(Q.has(e))return Q.get(e);let t=en(e);return t!==e&&(Q.set(e,t),ne.set(t,e)),t}var H=e=>ne.get(e);function j(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",c=>{r(I(o.result),c.oldVersion,c.newVersion,I(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}var tn=["get","getKey","getAll","getAllKeys","count"],nn=["put","add","delete","clear"],re=new Map;function je(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(re.get(t))return re.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=nn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tn.includes(n)))return;let s=async function(o,...a){let c=this.transaction(o,i?"readwrite":"readonly"),l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return re.set(t,s),s}He(e=>({...e,get:(t,n,r)=>je(t,n)||e.get(t,n,r),has:(t,n)=>!!je(t,n)||e.has(t,n)}));var se=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rn(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function rn(e){return e.getComponent()?.type==="VERSION"}var oe="@firebase/app",ze="0.14.8";var E=new x("@firebase/app"),sn="@firebase/app-compat",on="@firebase/analytics-compat",an="@firebase/analytics",cn="@firebase/app-check-compat",ln="@firebase/app-check",fn="@firebase/auth",un="@firebase/auth-compat",dn="@firebase/database",hn="@firebase/data-connect",pn="@firebase/database-compat",mn="@firebase/functions",gn="@firebase/functions-compat",bn="@firebase/installations",yn="@firebase/installations-compat",wn="@firebase/messaging",In="@firebase/messaging-compat",_n="@firebase/performance",En="@firebase/performance-compat",vn="@firebase/remote-config",Cn="@firebase/remote-config-compat",An="@firebase/storage",Sn="@firebase/storage-compat",Dn="@firebase/firestore",Tn="@firebase/ai",On="@firebase/firestore-compat",xn="firebase";var ae="[DEFAULT]",kn={[oe]:"fire-core",[sn]:"fire-core-compat",[an]:"fire-analytics",[on]:"fire-analytics-compat",[ln]:"fire-app-check",[cn]:"fire-app-check-compat",[fn]:"fire-auth",[un]:"fire-auth-compat",[dn]:"fire-rtdb",[hn]:"fire-data-connect",[pn]:"fire-rtdb-compat",[mn]:"fire-fn",[gn]:"fire-fn-compat",[bn]:"fire-iid",[yn]:"fire-iid-compat",[wn]:"fire-fcm",[In]:"fire-fcm-compat",[_n]:"fire-perf",[En]:"fire-perf-compat",[vn]:"fire-rc",[Cn]:"fire-rc-compat",[An]:"fire-gcs",[Sn]:"fire-gcs-compat",[Dn]:"fire-fst",[On]:"fire-fst-compat",[Tn]:"fire-vertex","fire-js":"fire-js",[xn]:"fire-js-all"};var z=new Map,Rn=new Map,ce=new Map;function Ue(e,t){try{e.container.addComponent(t)}catch(n){E.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){let t=e.name;if(ce.has(t))return E.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(let n of z.values())Ue(n,e);for(let n of Rn.values())Ue(n,e);return!0}function k(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}var Bn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},C=new _("app","Firebase",Bn);var le=class{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new p("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}};function de(e,t={}){let n=e;typeof t!="object"&&(t={name:t});let r={name:ae,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw C.create("bad-app-name",{appName:String(i)});if(n||(n=Y()),!n)throw C.create("no-options");let s=z.get(i);if(s){if(O(n,s.options)&&O(r,s.config))return s;throw C.create("duplicate-app",{appName:i})}let o=new F(i);for(let c of ce.values())o.addComponent(c);let a=new le(n,r,o);return z.set(i,a),a}function he(e=ae){let t=z.get(e);if(!t&&e===ae&&Y())return de();if(!t)throw C.create("no-app",{appName:e});return t}function w(e,t,n){let r=kn[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),E.warn(o.join(" "));return}v(new p(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}var Mn="firebase-heartbeat-database",Pn=1,B="firebase-heartbeat-store",ie=null;function Ge(){return ie||(ie=j(Mn,Pn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(B)}catch(n){console.warn(n)}}}}).catch(e=>{throw C.create("idb-open",{originalErrorMessage:e.message})})),ie}async function Nn(e){try{let n=(await Ge()).transaction(B),r=await n.objectStore(B).get(Ke(e));return await n.done,r}catch(t){if(t instanceof y)E.warn(t.message);else{let n=C.create("idb-get",{originalErrorMessage:t?.message});E.warn(n.message)}}}async function Ve(e,t){try{let r=(await Ge()).transaction(B,"readwrite");await r.objectStore(B).put(t,Ke(e)),await r.done}catch(n){if(n instanceof y)E.warn(n.message);else{let r=C.create("idb-set",{originalErrorMessage:n?.message});E.warn(r.message)}}}function Ke(e){return`${e.name}!${e.options.appId}`}var Ln=1024,$n=30,fe=class{constructor(t){this.container=t,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new ue(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=We();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>$n){let i=Hn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){E.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=We(),{heartbeatsToSend:n,unsentEntries:r}=Fn(this._heartbeatsCache.heartbeats),i=J(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return E.warn(t),""}}};function We(){return new Date().toISOString().substring(0,10)}function Fn(e,t=Ln){let n=[],r=e.slice();for(let i of e){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qe(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var ue=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N()?L().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await Nn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return Ve(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return Ve(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}};function qe(e){return J(JSON.stringify({version:2,heartbeats:e})).length}function Hn(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function jn(e){v(new p("platform-logger",t=>new se(t),"PRIVATE")),v(new p("heartbeat",t=>new fe(t),"PRIVATE")),w(oe,ze,e),w(oe,ze,"esm2020"),w("fire-js","")}jn("");var zn="firebase",Un="12.9.0";w(zn,Un,"app");var Ze="@firebase/installations",be="0.6.19";var Xe=1e4,Qe=`w:${be}`,et="FIS_v2",Vn="https://firebaseinstallations.googleapis.com/v1",Wn=3600*1e3,qn="installations",Gn="Installations";var Kn={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},D=new _(qn,Gn,Kn);function tt(e){return e instanceof y&&e.code.includes("request-failed")}function nt({projectId:e}){return`${Vn}/projects/${e}/installations`}function rt(e){return{token:e.token,requestStatus:2,expiresIn:Yn(e.expiresIn),creationTime:Date.now()}}async function it(e,t){let r=(await t.json()).error;return D.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function st({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Jn(e,{refreshToken:t}){let n=st(e);return n.append("Authorization",Zn(t)),n}async function ot(e){let t=await e();return t.status>=500&&t.status<600?e():t}function Yn(e){return Number(e.replace("s","000"))}function Zn(e){return`${et} ${e}`}async function Xn({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=nt(e),i=st(e),s=t.getImmediate({optional:!0});if(s){let l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}let o={fid:n,authVersion:et,appId:e.appId,sdkVersion:Qe},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ot(()=>fetch(r,a));if(c.ok){let l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:rt(l.authToken)}}else throw await it("Create Installation",c)}function at(e){return new Promise(t=>{setTimeout(t,e)})}function Qn(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}var er=/^[cdef][\w-]{21}$/,ge="";function tr(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let n=nr(e);return er.test(n)?n:ge}catch{return ge}}function nr(e){return Qn(e).substr(0,22)}function V(e){return`${e.appName}!${e.appId}`}var ct=new Map;function lt(e,t){let n=V(e);ft(n,t),rr(n,t)}function ft(e,t){let n=ct.get(e);if(n)for(let r of n)r(t)}function rr(e,t){let n=ir();n&&n.postMessage({key:e,fid:t}),sr()}var S=null;function ir(){return!S&&"BroadcastChannel"in self&&(S=new BroadcastChannel("[Firebase] FID Change"),S.onmessage=e=>{ft(e.data.key,e.data.fid)}),S}function sr(){ct.size===0&&S&&(S.close(),S=null)}var or="firebase-installations-database",ar=1,T="firebase-installations-store",pe=null;function ye(){return pe||(pe=j(or,ar,{upgrade:(e,t)=>{t===0&&e.createObjectStore(T)}})),pe}async function U(e,t){let n=V(e),i=(await ye()).transaction(T,"readwrite"),s=i.objectStore(T),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&lt(e,t.fid),t}async function ut(e){let t=V(e),r=(await ye()).transaction(T,"readwrite");await r.objectStore(T).delete(t),await r.done}async function W(e,t){let n=V(e),i=(await ye()).transaction(T,"readwrite"),s=i.objectStore(T),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&lt(e,a.fid),a}async function we(e){let t,n=await W(e.appConfig,r=>{let i=cr(r),s=lr(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===ge?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cr(e){let t=e||{fid:tr(),registrationStatus:0};return dt(t)}function lr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject(D.create("app-offline"));return{installationEntry:t,registrationPromise:i}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=fr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ur(e)}:{installationEntry:t}}async function fr(e,t){try{let n=await Xn(e,t);return U(e.appConfig,n)}catch(n){throw tt(n)&&n.customData.serverCode===409?await ut(e.appConfig):await U(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ur(e){let t=await Je(e.appConfig);for(;t.registrationStatus===1;)await at(100),t=await Je(e.appConfig);if(t.registrationStatus===0){let{installationEntry:n,registrationPromise:r}=await we(e);return r||n}return t}function Je(e){return W(e,t=>{if(!t)throw D.create("installation-not-found");return dt(t)})}function dt(e){return dr(e)?{fid:e.fid,registrationStatus:0}:e}function dr(e){return e.registrationStatus===1&&e.registrationTime+Xe<Date.now()}async function hr({appConfig:e,heartbeatServiceProvider:t},n){let r=pr(e,n),i=Jn(e,n),s=t.getImmediate({optional:!0});if(s){let l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}let o={installation:{sdkVersion:Qe,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ot(()=>fetch(r,a));if(c.ok){let l=await c.json();return rt(l)}else throw await it("Generate Auth Token",c)}function pr(e,{fid:t}){return`${nt(e)}/${t}/authTokens:generate`}async function Ie(e,t=!1){let n,r=await W(e.appConfig,s=>{if(!ht(s))throw D.create("not-registered");let o=s.authToken;if(!t&&br(o))return s;if(o.requestStatus===1)return n=mr(e,t),s;{if(!navigator.onLine)throw D.create("app-offline");let a=wr(s);return n=gr(e,a),a}});return n?await n:r.authToken}async function mr(e,t){let n=await Ye(e.appConfig);for(;n.authToken.requestStatus===1;)await at(100),n=await Ye(e.appConfig);let r=n.authToken;return r.requestStatus===0?Ie(e,t):r}function Ye(e){return W(e,t=>{if(!ht(t))throw D.create("not-registered");let n=t.authToken;return Ir(n)?{...t,authToken:{requestStatus:0}}:t})}async function gr(e,t){try{let n=await hr(e,t),r={...t,authToken:n};return await U(e.appConfig,r),n}catch(n){if(tt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ut(e.appConfig);else{let r={...t,authToken:{requestStatus:0}};await U(e.appConfig,r)}throw n}}function ht(e){return e!==void 0&&e.registrationStatus===2}function br(e){return e.requestStatus===2&&!yr(e)}function yr(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Wn}function wr(e){let t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Ir(e){return e.requestStatus===1&&e.requestTime+Xe<Date.now()}async function _r(e){let t=e,{installationEntry:n,registrationPromise:r}=await we(t);return r?r.catch(console.error):Ie(t).catch(console.error),n.fid}async function Er(e,t=!1){let n=e;return await vr(n),(await Ie(n,t)).token}async function vr(e){let{registrationPromise:t}=await we(e);t&&await t}function Cr(e){if(!e||!e.options)throw me("App Configuration");if(!e.name)throw me("App Name");let t=["projectId","apiKey","appId"];for(let n of t)if(!e.options[n])throw me(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function me(e){return D.create("missing-app-config-values",{valueName:e})}var pt="installations",Ar="installations-internal",Sr=e=>{let t=e.getProvider("app").getImmediate(),n=Cr(t),r=k(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Dr=e=>{let t=e.getProvider("app").getImmediate(),n=k(t,pt).getImmediate();return{getId:()=>_r(n),getToken:i=>Er(n,i)}};function Tr(){v(new p(pt,Sr,"PUBLIC")),v(new p(Ar,Dr,"PRIVATE"))}Tr();w(Ze,be);w(Ze,be,"esm2020");var q="analytics",Or="firebase_id",xr="origin",kr=60*1e3,Rr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",De="https://www.googletagmanager.com/gtag/js";var u=new x("@firebase/analytics");var Br={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},m=new _("analytics","Analytics",Br);function Mr(e){if(!e.startsWith(De)){let t=m.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function _t(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Pr(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Nr(e,t){let n=Pr("firebase-js-sdk-policy",{createScriptURL:Mr}),r=document.createElement("script"),i=`${De}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Lr(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function $r(e,t,n,r,i,s){let o=r[i];try{if(o)await t[o];else{let c=(await _t(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){u.error(a)}e("config",i,s)}async function Fr(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);let a=await _t(n);for(let c of o){let l=a.find(g=>g.measurementId===c),d=l&&t[l.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){u.error(s)}}function Hr(e,t,n,r){async function i(s,...o){try{if(s==="event"){let[a,c]=o;await Fr(e,t,n,a,c)}else if(s==="config"){let[a,c]=o;await $r(e,t,n,r,a,c)}else if(s==="consent"){let[a,c]=o;e("consent",a,c)}else if(s==="get"){let[a,c,l]=o;e("get",a,c,l)}else if(s==="set"){let[a]=o;e("set",a)}else e(s,...o)}catch(a){u.error(a)}}return i}function jr(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Hr(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function zr(e){let t=window.document.getElementsByTagName("script");for(let n of Object.values(t))if(n.src&&n.src.includes(De)&&n.src.includes(e))return n;return null}var Ur=30,Vr=1e3,Ee=class{constructor(t={},n=Vr){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}},Et=new Ee;function Wr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function qr(e){let{appId:t,apiKey:n}=e,r={method:"GET",headers:Wr(n)},i=Rr.replace("{app-id}",t),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{let a=await s.json();a.error?.message&&(o=a.error.message)}catch{}throw m.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Gr(e,t=Et,n){let{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw m.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw m.create("no-api-key")}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ve;return setTimeout(async()=>{a.abort()},n!==void 0?n:kr),vt({appId:r,apiKey:i,measurementId:s},o,a,t)}async function vt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Et){let{appId:s,measurementId:o}=e;try{await Kr(r,t)}catch(a){if(o)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:s,measurementId:o};throw a}try{let a=await qr(e);return i.deleteThrottleMetadata(s),a}catch(a){let c=a;if(!Jr(c)){if(i.deleteThrottleMetadata(s),o)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:o};throw a}let l=Number(c?.customData?.httpStatus)===503?Z(n,i.intervalMillis,Ur):Z(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,d),u.debug(`Calling attemptFetch again in ${l} millis`),vt(e,d,r,i)}}function Kr(e,t){return new Promise((n,r)=>{let i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(m.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Jr(e){if(!(e instanceof y)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}var ve=class{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}};var Ce;async function Yr(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{let s=await t,o={...r,send_to:s};e("event",n,o)}}async function Zr(e,t,n,r){if(r&&r.global){let i={};for(let s of Object.keys(n))i[`user_properties.${s}`]=n[s];return e("set",i),Promise.resolve()}else{let i=await t;e("config",i,{update:!0,user_properties:n})}}var Ae;function Xr(e){Ae=e}function Qr(e){Ce=e}async function ei(){if(N())try{await L()}catch(e){return u.warn(m.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return u.warn(m.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ti(e,t,n,r,i,s,o){let a=Gr(e);a.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>u.error(h)),t.push(a);let c=ei().then(h=>{if(h)return r.getId()}),[l,d]=await Promise.all([a,c]);zr(s)||Nr(s,l.measurementId),Ae&&(i("consent","default",Ae),Xr(void 0)),i("js",new Date);let g=o?.config??{};return g[xr]="firebase",g.update=!0,d!=null&&(g[Or]=d),i("config",l.measurementId,g),Ce&&(i("set",Ce),Qr(void 0)),l.measurementId}var Se=class{constructor(t){this.app=t}_delete(){return delete R[this.app.options.appId],Promise.resolve()}},R={},mt=[],gt={},_e="dataLayer",ni="gtag",bt,Te,yt=!1;function ri(){let e=[];if(Me()&&e.push("This is a browser extension environment."),Pe()||e.push("Cookies are not available."),e.length>0){let t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=m.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function ii(e,t,n){ri();let r=e.options.appId;if(!r)throw m.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw m.create("no-api-key");if(R[r]!=null)throw m.create("already-exists",{id:r});if(!yt){Lr(_e);let{wrappedGtag:s,gtagCore:o}=jr(R,mt,gt,_e,ni);Te=s,bt=o,yt=!0}return R[r]=ti(e,mt,gt,t,bt,_e,n),new Se(e)}function Ct(e=he()){e=$(e);let t=k(e,q);return t.isInitialized()?t.getImmediate():si(e)}function si(e,t={}){let n=k(e,q);if(n.isInitialized()){let i=n.getImmediate();if(O(t,n.getOptions()))return i;throw m.create("already-initialized")}return n.initialize({options:t})}function oi(e,t,n){e=$(e),Zr(Te,R[e.app.options.appId],t,n).catch(r=>u.error(r))}function G(e,t,n,r){e=$(e),Yr(Te,R[e.app.options.appId],t,n,r).catch(i=>u.error(i))}var wt="@firebase/analytics",It="0.10.19";function ai(){v(new p(q,(t,{options:n})=>{let r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return ii(r,i,n)},"PUBLIC")),v(new p("analytics-internal",e,"PRIVATE")),w(wt,It),w(wt,It,"esm2020");function e(t){try{let n=t.getProvider(q).getImmediate();return{logEvent:(r,i,s)=>G(n,r,i,s),setUserProperties:(r,i)=>oi(n,r,i)}}catch(n){throw m.create("interop-component-reg-failed",{reason:n})}}}ai();console.log("I exist!");var ci={apiKey:"AIzaSyA1YlB6ub5GVSBr0uh3CkQ5cv4qC2MsSWY",authDomain:"www.flindersvex.com",projectId:"fvt-website",storageBucket:"fvt-website.firebasestorage.app",messagingSenderId:"914827557069",appId:"1:914827557069:web:e35ccc4e77ee105d989184",measurementId:"G-T1HG2XD614"},li=de(ci),At=Ct(li);function b(e,t){try{document.querySelectorAll(`[${e}]`).forEach(n=>{n.addEventListener("click",()=>{G(At,t)})})}catch(n){console.error(`Error appending event ${t} to selector ${e}: `+n)}}document.addEventListener("DOMContentLoaded",()=>{G(At,"site_visited"),b("data-ga-rubric","rubric-visited"),b("data-ga-discord","discord-visited"),b("data-ga-introtovex","intro-to-vex-visited"),b("data-ga-mapDownload","map-downloaded"),b("data-ga-nviLink","nvi-visited"),b("data-ga-dattaLink","datta-visited"),b("data-ga-onshapeLink","onshape-visited"),b("data-ga-robotevents","robotevents-visited"),b("data-ga-mailto","mailto-clicked"),b("data-ga-github","github-visited"),b("data-ga-instagram","instagram-visited"),b("data-ga-flashgordon","flashgordon-visited")});})();
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
