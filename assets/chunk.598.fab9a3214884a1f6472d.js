/*! For license information please see chunk.598.fab9a3214884a1f6472d.js.LICENSE.txt */
"use strict";(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[598],{969:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){var e=t._promiseCallbacks
return e||(e=t._promiseCallbacks={}),e}n.r(e),n.d(e,{EventTarget:function(){return i},Promise:function(){return C},all:function(){return L},allSettled:function(){return U},asap:function(){return rt},async:function(){return _t},cast:function(){return wt},configure:function(){return u},defer:function(){return V},denodeify:function(){return I},filter:function(){return tt},hash:function(){return K},hashSettled:function(){return $},map:function(){return X},off:function(){return Et},on:function(){return gt},race:function(){return B},reject:function(){return J},resolve:function(){return H},rethrow:function(){return z}})
var i={mixin:function(t){return t.on=this.on,t.off=this.off,t.trigger=this.trigger,t._promiseCallbacks=void 0,t},on:function(t,e){if("function"!=typeof e)throw new TypeError("Callback must be a function")
var n=o(this),r=n[t]
r||(r=n[t]=[]),-1===r.indexOf(e)&&r.push(e)},off:function(t,e){var n=o(this)
if(e){var r=n[t],i=r.indexOf(e);-1!==i&&r.splice(i,1)}else n[t]=[]},trigger:function(t,e,n){var r=o(this)[t]
if(r)for(var i=0;i<r.length;i++)(0,r[i])(e,n)}},a={instrument:!1}
function u(t,e){if(2!==arguments.length)return a[t]
a[t]=e}i.mixin(a)
var c=[]
function s(t,e,n){1===c.push({name:t,payload:{key:e._guidKey,id:e._id,eventName:t,detail:e._result,childId:n&&n._id,label:e._label,timeStamp:Date.now(),error:a["instrument-with-stack"]?new Error(e._label):null}})&&setTimeout((function(){for(var t=0;t<c.length;t++){var e=c[t],n=e.payload
n.guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),a.trigger(e.name,e.payload)}c.length=0}),50)}function l(t,e){if(t&&"object"===r(t)&&t.constructor===this)return t
var n=new this(f,e)
return g(n,t),n}function f(){}var p=void 0,h=1,d=2,v={error:null}
function b(t){try{return t.then}catch(t){return v.error=t,v}}var y=void 0
function m(){try{var t=y
return y=null,t.apply(this,arguments)}catch(t){return v.error=t,v}}function w(t){return y=t,m}function _(t,e,n){if(e.constructor===t.constructor&&n===k&&t.constructor.resolve===l)!function(t,e){e._state===h?O(t,e._result):e._state===d?(e._onError=null,T(t,e._result)):S(e,void 0,(function(n){e===n?O(t,n):g(t,n)}),(function(e){return T(t,e)}))}(t,e)
else if(n===v){var r=v.error
v.error=null,T(t,r)}else"function"==typeof n?function(t,e,n){a.async((function(t){var r=!1,o=w(n).call(e,(function(n){r||(r=!0,e===n?O(t,n):g(t,n))}),(function(e){r||(r=!0,T(t,e))}),"Settle: "+(t._label||" unknown promise"))
if(!r&&o===v){r=!0
var i=v.error
v.error=null,T(t,i)}}),t)}(t,e,n):O(t,e)}function g(t,e){var n,o
t===e?O(t,e):(o=r(n=e),null===n||"object"!==o&&"function"!==o?O(t,e):_(t,e,b(e)))}function E(t){t._onError&&t._onError(t._result),A(t)}function O(t,e){t._state===p&&(t._result=e,t._state=h,0===t._subscribers.length?a.instrument&&s("fulfilled",t):a.async(A,t))}function T(t,e){t._state===p&&(t._state=d,t._result=e,a.async(E,t))}function S(t,e,n,r){var o=t._subscribers,i=o.length
t._onError=null,o[i]=e,o[i+h]=n,o[i+d]=r,0===i&&t._state&&a.async(A,t)}function A(t){var e=t._subscribers,n=t._state
if(a.instrument&&s(n===h?"fulfilled":"rejected",t),0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?j(n,r,o,i):o(i)
t._subscribers.length=0}}function j(t,e,n,r){var o,i="function"==typeof n
if(o=i?w(n)(r):r,e._state!==p);else if(o===e)T(e,new TypeError("A promises callback cannot return that same promise."))
else if(o===v){var a=v.error
v.error=null,T(e,a)}else i?g(e,o):t===h?O(e,o):t===d&&T(e,o)}function k(t,e,n){var r=this,o=r._state
if(o===h&&!t||o===d&&!e)return a.instrument&&s("chained",r,r),r
r._onError=null
var i=new r.constructor(f,n),u=r._result
if(a.instrument&&s("chained",r,i),o===p)S(r,i,t,e)
else{var c=o===h?t:e
a.async((function(){return j(o,i,c,u)}))}return i}var N=function(){function t(t,e,n,r){this._instanceConstructor=t,this.promise=new t(f,r),this._abortOnReject=n,this._isUsingOwnPromise=t===C,this._isUsingOwnResolve=t.resolve===l,this._init.apply(this,arguments)}return t.prototype._init=function(t,e){var n=e.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(e)},t.prototype._enumerate=function(t){for(var e=this.length,n=this.promise,r=0;n._state===p&&r<e;r++)this._eachEntry(t[r],r,!0)
this._checkFullfillment()},t.prototype._checkFullfillment=function(){if(0===this._remaining){var t=this._result
O(this.promise,t),this._result=null}},t.prototype._settleMaybeThenable=function(t,e,n){var r=this._instanceConstructor
if(this._isUsingOwnResolve){var o=b(t)
if(o===k&&t._state!==p)t._onError=null,this._settledAt(t._state,e,t._result,n)
else if("function"!=typeof o)this._settledAt(h,e,t,n)
else if(this._isUsingOwnPromise){var i=new r(f)
_(i,t,o),this._willSettleAt(i,e,n)}else this._willSettleAt(new r((function(e){return e(t)})),e,n)}else this._willSettleAt(r.resolve(t),e,n)},t.prototype._eachEntry=function(t,e,n){null!==t&&"object"===r(t)?this._settleMaybeThenable(t,e,n):this._setResultAt(h,e,t,n)},t.prototype._settledAt=function(t,e,n,r){var o=this.promise
o._state===p&&(this._abortOnReject&&t===d?T(o,n):(this._setResultAt(t,e,n,r),this._checkFullfillment()))},t.prototype._setResultAt=function(t,e,n,r){this._remaining--,this._result[e]=n},t.prototype._willSettleAt=function(t,e,n){var r=this
S(t,void 0,(function(t){return r._settledAt(h,e,t,n)}),(function(t){return r._settledAt(d,e,t,n)}))},t}()
function R(t,e,n){this._remaining--,this._result[e]=t===h?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var F="rsvp_"+Date.now()+"-",P=0,C=function(){function t(e,n){this._id=P++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],a.instrument&&s("created",this),f!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){var n=!1
try{e((function(e){n||(n=!0,g(t,e))}),(function(e){n||(n=!0,T(t,e))}))}catch(e){T(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype._onError=function(t){var e=this
a.after((function(){e._onError&&a.trigger("error",t,e._label)}))},t.prototype.catch=function(t,e){return this.then(void 0,t,e)},t.prototype.finally=function(t,e){var n=this,r=n.constructor
return"function"==typeof t?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}()
function D(t,e){return{then:function(n,r){return t.call(e,n,r)}}}function I(t,e){var n=function(){for(var n=arguments.length,r=new Array(n+1),o=!1,i=0;i<n;++i){var a=arguments[i]
if(!o){if((o=G(a))===v){var u=v.error
v.error=null
var c=new C(f)
return T(c,u),c}o&&!0!==o&&(a=D(o,a))}r[i]=a}var s=new C(f)
return r[n]=function(t,n){t?T(s,t):void 0===e?g(s,n):!0===e?g(s,function(t){for(var e=t.length,n=new Array(e-1),r=1;r<e;r++)n[r-1]=t[r]
return n}(arguments)):Array.isArray(e)?g(s,function(t,e){for(var n={},r=t.length,o=new Array(r),i=0;i<r;i++)o[i]=t[i]
for(var a=0;a<e.length;a++)n[e[a]]=o[a+1]
return n}(arguments,e)):g(s,n)},o?function(t,e,n,r){return C.all(e).then((function(e){return x(t,e,n,r)}))}(s,r,t,this):x(s,r,t,this)}
return n.__proto__=t,n}function x(t,e,n,r){if(w(n).apply(r,e)===v){var o=v.error
v.error=null,T(t,o)}return t}function G(t){return null!==t&&"object"===r(t)&&(t.constructor===C||b(t))}function L(t,e){return C.all(t,e)}C.cast=l,C.all=function(t,e){return Array.isArray(t)?new N(this,t,!0,e).promise:this.reject(new TypeError("Promise.all must be called with an array"),e)},C.race=function(t,e){var n=new this(f,e)
if(!Array.isArray(t))return T(n,new TypeError("Promise.race must be called with an array")),n
for(var r=0;n._state===p&&r<t.length;r++)S(this.resolve(t[r]),void 0,(function(t){return g(n,t)}),(function(t){return T(n,t)}))
return n},C.resolve=l,C.reject=function(t,e){var n=new this(f,e)
return T(n,t),n},C.prototype._guidKey=F,C.prototype.then=k
var M=function(t){function e(e,n,o){return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==r(e)&&"function"!=typeof e?t:e}(this,t.call(this,e,n,!1,o))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(N)
function U(t,e){return Array.isArray(t)?new M(C,t,e).promise:C.reject(new TypeError("Promise.allSettled must be called with an array"),e)}function B(t,e){return C.race(t,e)}M.prototype._setResultAt=R
var q=function(t){function e(e,n){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3]
return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==r(e)&&"function"!=typeof e?t:e}(this,t.call(this,e,n,o,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._init=function(t,e){this._result={},this._enumerate(e)},e.prototype._enumerate=function(t){var e=Object.keys(t),n=e.length,r=this.promise
this._remaining=n
for(var o=void 0,i=void 0,a=0;r._state===p&&a<n;a++)i=t[o=e[a]],this._eachEntry(i,o,!0)
this._checkFullfillment()},e}(N)
function K(t,e){return C.resolve(t,e).then((function(t){if(null===t||"object"!==r(t))throw new TypeError("Promise.hash must be called with an object")
return new q(C,t,e).promise}))}var Y=function(t){function e(e,n,o){return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==r(e)&&"function"!=typeof e?t:e}(this,t.call(this,e,n,!1,o))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(q)
function $(t,e){return C.resolve(t,e).then((function(t){if(null===t||"object"!==r(t))throw new TypeError("hashSettled must be called with an object")
return new Y(C,t,!1,e).promise}))}function z(t){throw setTimeout((function(){throw t})),t}function V(t){var e={resolve:void 0,reject:void 0}
return e.promise=new C((function(t,n){e.resolve=t,e.reject=n}),t),e}Y.prototype._setResultAt=R
var W=function(t){function e(e,n,o,i){return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==r(e)&&"function"!=typeof e?t:e}(this,t.call(this,e,n,!0,i,o))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._init=function(t,e,n,r,o){var i=e.length||0
this.length=i,this._remaining=i,this._result=new Array(i),this._mapFn=o,this._enumerate(e)},e.prototype._setResultAt=function(t,e,n,r){if(r){var o=w(this._mapFn)(n,e)
o===v?this._settledAt(d,e,o.error,!1):this._eachEntry(o,e,!1)}else this._remaining--,this._result[e]=n},e}(N)
function X(t,e,n){return"function"!=typeof e?C.reject(new TypeError("map expects a function as a second argument"),n):C.resolve(t,n).then((function(t){if(!Array.isArray(t))throw new TypeError("map must be called with an array")
return new W(C,t,e,n).promise}))}function H(t,e){return C.resolve(t,e)}function J(t,e){return C.reject(t,e)}var Q={},Z=function(t){function e(){return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!==r(e)&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e))
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var t=this._result.filter((function(t){return t!==Q}))
O(this.promise,t),this._result=null}},e.prototype._setResultAt=function(t,e,n,r){if(r){this._result[e]=n
var o=w(this._mapFn)(n,e)
o===v?this._settledAt(d,e,o.error,!1):this._eachEntry(o,e,!1)}else this._remaining--,n||(this._result[e]=Q)},e}(W)
function tt(t,e,n){return"function"!=typeof e?C.reject(new TypeError("filter expects function as a second argument"),n):C.resolve(t,n).then((function(t){if(!Array.isArray(t))throw new TypeError("filter must be called with an array")
return new Z(C,t,e,n).promise}))}var et=0,nt=void 0
function rt(t,e){lt[et]=t,lt[et+1]=e,2===(et+=2)&&mt()}var ot="undefined"!=typeof window?window:void 0,it=ot||{},at=it.MutationObserver||it.WebKitMutationObserver,ut="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),ct="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function st(){return function(){return setTimeout(ft,1)}}var lt=new Array(1e3)
function ft(){for(var t=0;t<et;t+=2)(0,lt[t])(lt[t+1]),lt[t]=void 0,lt[t+1]=void 0
et=0}var pt,ht,dt,vt,bt,yt,mt=void 0
ut?(bt=process.nextTick,yt=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(yt)&&"0"===yt[1]&&"10"===yt[2]&&(bt=setImmediate),mt=function(){return bt(ft)}):at?(ht=0,dt=new at(ft),vt=document.createTextNode(""),dt.observe(vt,{characterData:!0}),mt=function(){return vt.data=ht=++ht%2}):ct?((pt=new MessageChannel).port1.onmessage=ft,mt=function(){return pt.port2.postMessage(0)}):mt=void 0===ot?function(){try{var t=Function("return this")().require("vertx")
return void 0!==(nt=t.runOnLoop||t.runOnContext)?function(){nt(ft)}:st()}catch(t){return st()}}():st(),a.async=rt,a.after=function(t){return setTimeout(t,0)}
var wt=H,_t=function(t,e){return a.async(t,e)}
function gt(){a.on.apply(a,arguments)}function Et(){a.off.apply(a,arguments)}if("undefined"!=typeof window&&"object"===r(window.__PROMISE_INSTRUMENTATION__)){var Ot=window.__PROMISE_INSTRUMENTATION__
for(var Tt in u("instrument",!0),Ot)Ot.hasOwnProperty(Tt)&&gt(Tt,Ot[Tt])}var St={asap:rt,cast:wt,Promise:C,EventTarget:i,all:L,allSettled:U,race:B,hash:K,hashSettled:$,rethrow:z,defer:V,denodeify:I,configure:u,on:gt,off:Et,resolve:H,reject:J,map:X,async:_t,filter:tt}
e.default=St},564:function(t,e,n){n.r(e),n.d(e,{createFocusTrap:function(){return F}})
var r=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),i="undefined"==typeof Element,a=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!i&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},c=function(t,e,n){var r=Array.prototype.slice.apply(t.querySelectorAll(o))
return e&&a.call(t,o)&&r.unshift(t),r.filter(n)},s=function t(e,n,r){for(var i=[],u=Array.from(e);u.length;){var c=u.shift()
if("SLOT"===c.tagName){var s=c.assignedElements(),l=t(s.length?s:c.children,!0,r)
r.flatten?i.push.apply(i,l):i.push({scope:c,candidates:l})}else{a.call(c,o)&&r.filter(c)&&(n||!e.includes(c))&&i.push(c)
var f=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),p=!r.shadowRootFilter||r.shadowRootFilter(c)
if(f&&p){var h=t(!0===f?c.children:f.children,!0,r)
r.flatten?i.push.apply(i,h):i.push({scope:c,candidates:h})}else u.unshift.apply(u,c.children)}}return i},l=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},f=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},p=function(t){return"INPUT"===t.tagName},h=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height
return 0===n&&0===r},d=function(t,e){return!(e.disabled||function(t){return p(t)&&"hidden"===t.type}(e)||function(t,e){var n=e.displayCheck,r=e.getShadowRoot
if("hidden"===getComputedStyle(t).visibility)return!0
var o=a.call(t,"details>summary:first-of-type")?t.parentElement:t
if(a.call(o,"details:not([open]) *"))return!0
var i=u(t).host,c=(null==i?void 0:i.ownerDocument.contains(i))||t.ownerDocument.contains(t)
if(n&&"full"!==n){if("non-zero-area"===n)return h(t)}else{if("function"==typeof r){for(var s=t;t;){var l=t.parentElement,f=u(t)
if(l&&!l.shadowRoot&&!0===r(l))return h(t)
t=t.assignedSlot?t.assignedSlot:l||f===t.ownerDocument?l:f.host}t=s}if(c)return!t.getClientRects().length}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n)
if("LEGEND"===r.tagName)return!!a.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1}(e))},v=function(t,e){return!(function(t){return function(t){return p(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0
var e,n=t.form||u(t),r=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name))
else try{e=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form)
return!o||o===t}(t)}(e)||l(e)<0||!d(t,e))},b=function(t){var e=parseInt(t.getAttribute("tabindex"),10)
return!!(isNaN(e)||e>=0)},y=function t(e){var n=[],r=[]
return e.forEach((function(e,o){var i=!!e.scope,a=i?e.scope:e,u=l(a,i),c=i?t(e.candidates):a
0===u?i?n.push.apply(n,c):n.push(a):r.push({documentOrder:o,tabIndex:u,item:e,isScope:i,content:c})})),r.sort(f).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},m=function(t,e){var n
return n=(e=e||{}).getShadowRoot?s([t],e.includeContainer,{filter:v.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:b}):c(t,e.includeContainer,v.bind(null,e)),y(n)},w=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==a.call(t,o)&&v(e,t)},_=r.concat("iframe").join(","),g=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==a.call(t,_)&&d(e,t)}
function E(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?E(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S,A=(S=[],{activateTrap:function(t){if(S.length>0){var e=S[S.length-1]
e!==t&&e.pause()}var n=S.indexOf(t);-1===n||S.splice(n,1),S.push(t)},deactivateTrap:function(t){var e=S.indexOf(t);-1!==e&&S.splice(e,1),S.length>0&&S[S.length-1].unpause()}}),j=function(t){return setTimeout(t,0)},k=function(t,e){var n=-1
return t.every((function(t,r){return!e(t)||(n=r,!1)})),n},N=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
return"function"==typeof t?t.apply(void 0,n):t},R=function(t){return t.target.shadowRoot&&"function"==typeof t.composedPath?t.composedPath()[0]:t.target},F=function(t,e){var n,r=(null==e?void 0:e.document)||document,o=O({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},e),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=function(t,e,n){return t&&void 0!==t[e]?t[e]:o[n||e]},u=function(t){return i.containerGroups.findIndex((function(e){var n=e.container,r=e.tabbableNodes
return n.contains(t)||r.find((function(e){return e===t}))}))},l=function(t){var e=o[t]
if("function"==typeof e){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a]
e=e.apply(void 0,i)}if(!0===e&&(e=void 0),!e){if(void 0===e||!1===e)return e
throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var u=e
if("string"==typeof e&&!(u=r.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"))
return u},f=function(){var t=l("initialFocus")
if(!1===t)return!1
if(void 0===t)if(u(r.activeElement)>=0)t=r.activeElement
else{var e=i.tabbableGroups[0]
t=e&&e.firstTabbableNode||l("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element")
return t},p=function(){if(i.containerGroups=i.containers.map((function(t){var e,n,r=m(t,o.tabbableOptions),i=(e=t,(n=(n=o.tabbableOptions)||{}).getShadowRoot?s([e],n.includeContainer,{filter:d.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):c(e,n.includeContainer,d.bind(null,n)))
return{container:t,tabbableNodes:r,focusableNodes:i,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=i.findIndex((function(e){return e===t}))
if(!(n<0))return e?i.slice(n+1).find((function(t){return w(t,o.tabbableOptions)})):i.slice(0,n).reverse().find((function(t){return w(t,o.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(t){return t.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},h=function t(e){!1!==e&&e!==r.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=e,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(e)&&e.select()):t(f()))},v=function(t){var e=l("setReturnFocus",t)
return e||!1!==e&&t},b=function(t){var e=R(t)
u(e)>=0||(N(o.clickOutsideDeactivates,t)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!g(e,o.tabbableOptions)}):N(o.allowOutsideClick,t)||t.preventDefault())},y=function(t){var e=R(t),n=u(e)>=0
n||e instanceof Document?n&&(i.mostRecentlyFocusedNode=e):(t.stopImmediatePropagation(),h(i.mostRecentlyFocusedNode||f()))},_=function(t){if(function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&!1!==N(o.escapeDeactivates,t))return t.preventDefault(),void n.deactivate();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){var e=R(t)
p()
var n=null
if(i.tabbableGroups.length>0){var r=u(e),a=r>=0?i.containerGroups[r]:void 0
if(r<0)n=t.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode
else if(t.shiftKey){var c=k(i.tabbableGroups,(function(t){var n=t.firstTabbableNode
return e===n}))
if(c<0&&(a.container===e||g(e,o.tabbableOptions)&&!w(e,o.tabbableOptions)&&!a.nextTabbableNode(e,!1))&&(c=r),c>=0){var s=0===c?i.tabbableGroups.length-1:c-1
n=i.tabbableGroups[s].lastTabbableNode}}else{var f=k(i.tabbableGroups,(function(t){var n=t.lastTabbableNode
return e===n}))
if(f<0&&(a.container===e||g(e,o.tabbableOptions)&&!w(e,o.tabbableOptions)&&!a.nextTabbableNode(e))&&(f=r),f>=0){var d=f===i.tabbableGroups.length-1?0:f+1
n=i.tabbableGroups[d].firstTabbableNode}}}else n=l("fallbackFocus")
n&&(t.preventDefault(),h(n))}(t)},E=function(t){var e=R(t)
u(e)>=0||N(o.clickOutsideDeactivates,t)||N(o.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())},T=function(){if(i.active)return A.activateTrap(n),i.delayInitialFocusTimer=o.delayInitialFocus?j((function(){h(f())})):h(f()),r.addEventListener("focusin",y,!0),r.addEventListener("mousedown",b,{capture:!0,passive:!1}),r.addEventListener("touchstart",b,{capture:!0,passive:!1}),r.addEventListener("click",E,{capture:!0,passive:!1}),r.addEventListener("keydown",_,{capture:!0,passive:!1}),n},S=function(){if(i.active)return r.removeEventListener("focusin",y,!0),r.removeEventListener("mousedown",b,!0),r.removeEventListener("touchstart",b,!0),r.removeEventListener("click",E,!0),r.removeEventListener("keydown",_,!0),n}
return(n={get active(){return i.active},get paused(){return i.paused},activate:function(t){if(i.active)return this
var e=a(t,"onActivate"),n=a(t,"onPostActivate"),o=a(t,"checkCanFocusTrap")
o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,e&&e()
var u=function(){o&&p(),T(),n&&n()}
return o?(o(i.containers.concat()).then(u,u),this):(u(),this)},deactivate:function(t){if(!i.active)return this
var e=O({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},t)
clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,S(),i.active=!1,i.paused=!1,A.deactivateTrap(n)
var r=a(e,"onDeactivate"),u=a(e,"onPostDeactivate"),c=a(e,"checkCanReturnFocus"),s=a(e,"returnFocus","returnFocusOnDeactivate")
r&&r()
var l=function(){j((function(){s&&h(v(i.nodeFocusedBeforeActivation)),u&&u()}))}
return s&&c?(c(v(i.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,S()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,p(),T(),this):this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean)
return i.containers=e.map((function(t){return"string"==typeof t?r.querySelector(t):t})),i.active&&p(),this}}).updateContainerElements(t),n}}}])
