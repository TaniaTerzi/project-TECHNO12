!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,c,"next",e)}function c(e){n(o,a,i,s,c,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),o=new T(r||[]);return i._invoke=function(e,t,n){var r=l;return function(a,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw i;return O()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=_(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(e,t,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(e,n,o),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==n&&r.call(x,i)&&(b=x);var k=y.prototype=g.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(a,i,o,s){var c=f(e[a],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(l).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function _(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=f(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:O}}function O(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new E(u(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},I(k),c(k,s,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),D(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;D(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r.default(i,n.prototype),i}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),c=a("hKHmD"),u=a("8nrFW"),f=a("2TvXO"),l=(i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),a("1t1Wn")),p=(u=a("8nrFW"),f=a("2TvXO"),a("ds8z5")),h=(o=a("8MBJY"),s=a("a2hTj"),a("eYQtU")),d=(l=a("1t1Wn"),u=a("8nrFW"),{});Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return w(e)};var v=b(a("ge8co")),g=b(a("cZGw3")),m=b(a("fVNic")),y=b(a("gD1JV"));function b(e){return e&&e.__esModule?e:{default:e}}function w(e){var t="function"==typeof Map?new Map:void 0;return w=function(e){if(null===e||!g.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return v.default(e,arguments,m.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y.default(n,e)},w(e)}var x,k,I,E=a("2MbLg"),_=x={};function S(){throw new Error("setTimeout has not been defined")}function D(){throw new Error("clearTimeout has not been defined")}function T(e){if(k===setTimeout)return setTimeout(e,0);if((k===S||!k)&&setTimeout)return k=setTimeout,setTimeout(e,0);try{return k(e,0)}catch(t){try{return k.call(null,e,0)}catch(t){return k.call(this,e,0)}}}!function(){try{k="function"==typeof setTimeout?setTimeout:S}catch(e){k=S}try{I="function"==typeof clearTimeout?clearTimeout:D}catch(e){I=D}}();var C,O=[],A=!1,L=-1;function j(){A&&C&&(A=!1,C.length?O=C.concat(O):L=-1,O.length&&M())}function M(){if(!A){var e=T(j);A=!0;for(var t=O.length;t;){for(C=O,O=[];++L<t;)C&&C[L].run();L=-1,t=O.length}C=null,A=!1,function(e){if(I===clearTimeout)return clearTimeout(e);if((I===D||!I)&&clearTimeout)return I=clearTimeout,clearTimeout(e);try{I(e)}catch(t){try{return I.call(null,e)}catch(t){return I.call(this,e)}}}(e)}}function P(e,t){this.fun=e,this.array=t}function B(){}_.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];O.push(new P(e,t)),1!==O.length||A||T(M)},P.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={},_.on=B,_.addListener=B,_.once=B,_.off=B,_.removeListener=B,_.removeAllListeners=B,_.emit=B,_.prependListener=B,_.prependOnceListener=B,_.listeners=function(e){return[]},_.binding=function(e){throw new Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(e){throw new Error("process.chdir is not supported")},_.umask=function(){return 0};
/**
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
 */
var N=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},F={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,c=a+2<e.length,u=c?e[a+2]:0,f=i>>2,l=(3&i)<<4|s>>4,p=(15&s)<<2|u>>6,h=63&u;c||(h=64,o||(p=64)),r.push(n[f],n[l],n[p],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(N(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],c=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&c)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],a=0;a<e.length;){var i=n[e.charAt(a++)],o=a<e.length?n[e.charAt(a)]:0,s=++a<e.length?n[e.charAt(a)]:64,c=++a<e.length?n[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==c)throw new R;var u=i<<2|o>>4;if(r.push(u),64!==s){var f=o<<4&240|s>>2;if(r.push(f),64!==c){var l=s<<6&192|c;r.push(l)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},R=function(t){"use strict";e(h)(r,t);var n=e(E)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(d)(Error)),H=function(e){return function(e){var t=N(e);return F.encodeByteArray(t,!0)}(e).replace(/\./g,"")},V=function(e){try{return F.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
var z=function(){
/**
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
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},W=function(){try{return z()||function(){if(void 0!==x&&void 0!==x.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&V(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},U=function(){var e;return null===(e=W())||void 0===e?void 0:e.config},q=function(){"use strict";function t(){var n=this;e(o)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(s)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();function $(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function G(){try{return"object"==typeof indexedDB}catch(e){return!1}}function K(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=function(){a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=function(){n=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function J(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
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
 */var X=function(t){"use strict";e(h)(r,t);var n=e(E)(r);function r(t,a,i){var s;return e(o)(this,r),(s=n.call(this,a)).code=t,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(e(p)(s),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(p)(s),Y.prototype.create),s}return r}(e(d)(Error)),Y=function(){"use strict";function t(n,r,a){e(o)(this,t),this.service=n,this.serviceName=r,this.errors=a}return e(s)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Z(o,a):"Error",c="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),u=new X(i,c,a);return u}}]),t}();function Z(e,t){return e.replace(Q,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Q=/\{\$([^}]+)}/g;
/**
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
 */function ee(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,c=n[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var u=s.value;if(!r.includes(u))return!1;var f=e[u],l=t[u];if(te(f)&&te(l)){if(!ee(f,l))return!1}else if(f!==l)return!1}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}var p=!0,h=!1,d=void 0;try{for(var v,g=r[Symbol.iterator]();!(p=(v=g.next()).done);p=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){h=!0,d=e}finally{try{p||null==g.return||g.return()}finally{if(h)throw d}}return!0}function te(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
var ne=144e5;function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),a=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(ne,r+a)}
/**
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
 */
/**
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
 */
function ae(e){return e&&e._delegate?e._delegate:e}var ie=function(){"use strict";function t(n,r,a){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),oe="[DEFAULT]",se=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new q;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch(e){}var n=!0,r=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=e(l)(i.value,2),c=s[0],u=s[1],f=this.normalizeInstanceIdentifier(c);try{var p=this.getOrInitializeService({instanceIdentifier:f});u.resolve(p)}catch(e){}}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(f).mark((function n(){var r;return e(f).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(u)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(u)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:r}),o=!0,s=!1,c=void 0;try{for(var u,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var p=e(l)(u.value,2),h=p[0],d=p[1],v=this.normalizeInstanceIdentifier(h);a===v&&d.resolve(i)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return i}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);var i=this.instances.get(r);return i&&e(i,r),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var c=o.value;try{c(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,a=void 0===r?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===oe?void 0:t),options:a}),this.instances.set(n,i),this.instancesOptions.set(n,a),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe;return this.component?this.component.multipleInstances?e:oe:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
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
 */var ce,ue,fe=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new se(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),le=(o=a("8MBJY"),s=a("a2hTj"),c=a("hKHmD"),u=a("8nrFW"),[]);(ue=ce||(ce={}))[ue.DEBUG=0]="DEBUG",ue[ue.VERBOSE=1]="VERBOSE",ue[ue.INFO=2]="INFO",ue[ue.WARN=3]="WARN",ue[ue.ERROR=4]="ERROR",ue[ue.SILENT=5]="SILENT";var pe,he={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},de=ce.INFO,ve=(pe={},e(c)(pe,ce.DEBUG,"log"),e(c)(pe,ce.VERBOSE,"log"),e(c)(pe,ce.INFO,"info"),e(c)(pe,ce.WARN,"warn"),e(c)(pe,ce.ERROR,"error"),pe),ge=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),c=ve[n];if(!c)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[c].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(u)(a)))}},me=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this._logLevel=de,this._logHandler=ge,this._userLogHandler=null,le.push(this)}return e(s)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ce))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?he[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.DEBUG].concat(e(u)(n))),this._logHandler.apply(this,[this,ce.DEBUG].concat(e(u)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.VERBOSE].concat(e(u)(n))),this._logHandler.apply(this,[this,ce.VERBOSE].concat(e(u)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.INFO].concat(e(u)(n))),this._logHandler.apply(this,[this,ce.INFO].concat(e(u)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.WARN].concat(e(u)(n))),this._logHandler.apply(this,[this,ce.WARN].concat(e(u)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.ERROR].concat(e(u)(n))),this._logHandler.apply(this,[this,ce.ERROR].concat(e(u)(n)))}}]),t}();i=a("bpxeT");var ye={};Object.defineProperty(ye,"__esModule",{value:!0}),ye.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){we.default(e,t,n[t])}))}return e};var be,we=(be=a("hKHmD"))&&be.__esModule?be:{default:be};var xe,ke;u=a("8nrFW"),f=a("2TvXO"),u=a("8nrFW");var Ie=new WeakMap,Ee=new WeakMap,_e=new WeakMap,Se=new WeakMap,De=new WeakMap;var Te={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ee.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ae(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ce(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ke||(ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Le(this),n),Ae(Ie.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ae(t.apply(Le(this),n))}:function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[Le(this),n].concat(e(u)(a)));return _e.set(s,n.sort?n.sort():[n]),Ae(s)}}function Oe(e){return"function"==typeof e?Ce(e):(e instanceof IDBTransaction&&function(e){if(!Ee.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),r()},i=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));Ee.set(e,t)}}(e),t=e,(xe||(xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Te):e);var t}function Ae(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(Ae(t.result)),r()},i=function(){n(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&Ie.set(e,t)})).catch((function(){})),De.set(n,t),n;var t,n;if(Se.has(e))return Se.get(e);var r=Oe(e);return r!==e&&(Se.set(e,r),De.set(r,e)),r}var Le=function(e){return De.get(e)};function je(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,a=n.upgrade,i=n.blocking,o=n.terminated,s=indexedDB.open(e,t),c=Ae(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(Ae(s.result),e.oldVersion,e.newVersion,Ae(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),c.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(e){return i(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),c}var Me=["get","getKey","getAll","getAllKeys","count"],Pe=["put","add","delete","clear"],Be=new Map;function Ne(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Be.get(n))return Be.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=Pe.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||Me.includes(r))){var s,c=(s=e(i)(e(f).mark((function t(n){var i,s,c,l,p,h,d=arguments;return e(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=d.length,s=new Array(i>1?i-1:0),c=1;c<i;c++)s[c-1]=d[c];return p=this.transaction(n,o?"readwrite":"readonly"),h=p.store,a&&(h=h.index(s.shift())),t.next=7,Promise.all([(l=h)[r].apply(l,e(u)(s)),o&&p.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return Be.set(n,c),c}}}Te=function(t){return e(ye)({},t,{get:function(e,n,r){return Ne(e,n)||t.get(e,n,r)},has:function(e,n){return!!Ne(e,n)||t.has(e,n)}})}(Te);
/**
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
 */
var Fe=function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Re,He,Ve="@firebase/app",ze="0.9.9",We=new me("@firebase/app"),Ue="[DEFAULT]",qe=(Re={},e(c)(Re,Ve,"fire-core"),e(c)(Re,"@firebase/app-compat","fire-core-compat"),e(c)(Re,"@firebase/analytics","fire-analytics"),e(c)(Re,"@firebase/analytics-compat","fire-analytics-compat"),e(c)(Re,"@firebase/app-check","fire-app-check"),e(c)(Re,"@firebase/app-check-compat","fire-app-check-compat"),e(c)(Re,"@firebase/auth","fire-auth"),e(c)(Re,"@firebase/auth-compat","fire-auth-compat"),e(c)(Re,"@firebase/database","fire-rtdb"),e(c)(Re,"@firebase/database-compat","fire-rtdb-compat"),e(c)(Re,"@firebase/functions","fire-fn"),e(c)(Re,"@firebase/functions-compat","fire-fn-compat"),e(c)(Re,"@firebase/installations","fire-iid"),e(c)(Re,"@firebase/installations-compat","fire-iid-compat"),e(c)(Re,"@firebase/messaging","fire-fcm"),e(c)(Re,"@firebase/messaging-compat","fire-fcm-compat"),e(c)(Re,"@firebase/performance","fire-perf"),e(c)(Re,"@firebase/performance-compat","fire-perf-compat"),e(c)(Re,"@firebase/remote-config","fire-rc"),e(c)(Re,"@firebase/remote-config-compat","fire-rc-compat"),e(c)(Re,"@firebase/storage","fire-gcs"),e(c)(Re,"@firebase/storage-compat","fire-gcs-compat"),e(c)(Re,"@firebase/firestore","fire-fst"),e(c)(Re,"@firebase/firestore-compat","fire-fst-compat"),e(c)(Re,"fire-js","fire-js"),e(c)(Re,"firebase","fire-js-all"),Re),$e=new Map,Ge=new Map;function Ke(e,t){try{e.container.addComponent(t)}catch(n){We.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Je(e){var t=e.name;if(Ge.has(t))return We.debug("There were multiple attempts to register component ".concat(t,".")),!1;Ge.set(t,e);var n=!0,r=!1,a=void 0;try{for(var i,o=$e.values()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){Ke(i.value,e)}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return!0}function Xe(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
var Ye=(He={},e(c)(He,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(c)(He,"bad-app-name","Illegal App name: '{$appName}"),e(c)(He,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(c)(He,"app-deleted","Firebase App named '{$appName}' already deleted"),e(c)(He,"no-options","Need to provide options, when not being deployed to hosting via source."),e(c)(He,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(c)(He,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(c)(He,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(c)(He,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(c)(He,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(c)(He,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),He),Ze=new Y("app","Firebase",Ye),Qe=function(){"use strict";function t(n,r,a){var i=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new ie("app",(function(){return i}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}]),t}();function et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var a=Object.assign({name:Ue,automaticDataCollectionEnabled:!1},t),i=a.name;if("string"!=typeof i||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(n||(n=U()),!n)throw Ze.create("no-options");var o=$e.get(i);if(o){if(ee(n,o.options)&&ee(a,o.config))return o;throw Ze.create("duplicate-app",{appName:i})}var s=new fe(i),c=!0,u=!1,f=void 0;try{for(var l,p=Ge.values()[Symbol.iterator]();!(c=(l=p.next()).done);c=!0){var h=l.value;s.addComponent(h)}}catch(e){u=!0,f=e}finally{try{c||null==p.return||p.return()}finally{if(u)throw f}}var d=new Qe(n,a,s);return $e.set(i,d),d}function tt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=$e.get(e);if(!t&&e===Ue)return et();if(!t)throw Ze.create("no-app",{appName:e});return t}function nt(e,t,n){var r,a=null!==(r=qe[e])&&void 0!==r?r:e;n&&(a+="-".concat(n));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void We.warn(s.join(" "))}Je(new ie("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
/**
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
 */
var rt="firebase-heartbeat-store",at=null;function it(){return at||(at=je("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(rt)}}).catch((function(e){throw Ze.create("idb-open",{originalErrorMessage:e.message})}))),at}function ot(e){return st.apply(this,arguments)}function st(){return(st=e(i)(e(f).mark((function t(n){var r,a;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,it();case 3:return r=e.sent,e.abrupt("return",r.transaction(rt).objectStore(rt).get(ft(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof X?We.warn(e.t0.message):(a=Ze.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),We.warn(a.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ct(e,t){return ut.apply(this,arguments)}function ut(){return(ut=e(i)(e(f).mark((function t(n,r){var a,i,o,s;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,it();case 3:return a=e.sent,i=a.transaction(rt,"readwrite"),o=i.objectStore(rt),e.next=8,o.put(r,ft(n));case 8:return e.abrupt("return",i.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof X?We.warn(e.t0.message):(s=Ze.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),We.warn(s.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function ft(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
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
 */var lt=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new vt(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(f).mark((function n(){var r,a,i;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),a=r.getPlatformInfoString(),i=pt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(f).mark((function n(){var r,a,i,o,s;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=pt(),a=ht(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,o=a.unsentEntries,s=H(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function pt(){return(new Date).toISOString().substring(0,10)}function ht(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,c=function(e,a){var i=a.value,o=n.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),gt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:i.agent,dates:[i.date]}),gt(n)>t)return n.pop(),"break";r=r.slice(1)},u=e[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var f=c(u,s);if("break"===f)break}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var dt,vt=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(f).mark((function t(){return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",K().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(f).mark((function n(){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,ot(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(i)(e(f).mark((function r(){var a,i;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return i=e.sent,e.abrupt("return",ct(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(i)(e(f).mark((function r(){var a,i;return e(f).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return i=r.sent,r.abrupt("return",ct(n.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e(u)(i.heartbeats).concat(e(u)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function gt(e){return H(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */dt="",Je(new ie("platform-logger",(function(e){return new Fe(e)}),"PRIVATE")),Je(new ie("heartbeat",(function(e){return new lt(e)}),"PRIVATE")),nt(Ve,ze,dt),nt(Ve,ze,"esm2017"),nt("fire-js","");
/**
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
 */
nt("firebase","9.21.0","app");var mt,yt;i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),c=a("hKHmD"),l=a("1t1Wn"),u=a("8nrFW"),f=a("2TvXO"),i=a("bpxeT"),c=a("hKHmD"),u=a("8nrFW"),f=a("2TvXO"),i=a("bpxeT"),u=a("8nrFW"),f=a("2TvXO"),u=a("8nrFW");var bt=new WeakMap,wt=new WeakMap,xt=new WeakMap,kt=new WeakMap,It=new WeakMap;var Et={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return wt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||xt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _t(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(yt||(yt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Tt(this),n),Dt(bt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Dt(t.apply(Tt(this),n))}:function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[Tt(this),n].concat(e(u)(a)));return xt.set(s,n.sort?n.sort():[n]),Dt(s)}}function St(e){return"function"==typeof e?_t(e):(e instanceof IDBTransaction&&function(e){if(!wt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),r()},i=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));wt.set(e,t)}}(e),t=e,(mt||(mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Et):e);var t}function Dt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(Dt(t.result)),r()},i=function(){n(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&bt.set(e,t)})).catch((function(){})),It.set(n,t),n;var t,n;if(kt.has(e))return kt.get(e);var r=St(e);return r!==e&&(kt.set(e,r),It.set(r,e)),r}var Tt=function(e){return It.get(e)};function Ct(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,a=n.upgrade,i=n.blocking,o=n.terminated,s=indexedDB.open(e,t),c=Dt(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(Dt(s.result),e.oldVersion,e.newVersion,Dt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),c.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),c}var Ot=["get","getKey","getAll","getAllKeys","count"],At=["put","add","delete","clear"],Lt=new Map;function jt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Lt.get(n))return Lt.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=At.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||Ot.includes(r))){var s,c=(s=e(i)(e(f).mark((function t(n){var i,s,c,l,p,h,d=arguments;return e(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=d.length,s=new Array(i>1?i-1:0),c=1;c<i;c++)s[c-1]=d[c];return p=this.transaction(n,o?"readwrite":"readonly"),h=p.store,a&&(h=h.index(s.shift())),t.next=7,Promise.all([(l=h)[r].apply(l,e(u)(s)),o&&p.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return Lt.set(n,c),c}}}!function(e){Et=e(Et)}((function(t){return e(ye)({},t,{get:function(e,n,r){return jt(e,n)||t.get(e,n,r)},has:function(e,n){return!!jt(e,n)||t.has(e,n)}})}));var Mt,Pt="@firebase/installations",Bt="0.6.4",Nt=1e4,Ft="w:".concat(Bt),Rt="FIS_v2",Ht=36e5,Vt=(Mt={},e(c)(Mt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(c)(Mt,"not-registered","Firebase Installation is not registered."),e(c)(Mt,"installation-not-found","Firebase Installation not found."),e(c)(Mt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(c)(Mt,"app-offline","Could not process request. Application offline."),e(c)(Mt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Mt),zt=new Y("installations","Installations",Vt);function Wt(e){return e instanceof X&&e.code.includes("request-failed")}
/**
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
 */function Ut(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function qt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function $t(e,t){return Gt.apply(this,arguments)}function Gt(){return(Gt=e(i)(e(f).mark((function t(n,r){var a,i;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return a=e.sent,i=a.error,e.abrupt("return",zt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Kt(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Jt(e,t){var n=t.refreshToken,r=Kt(e);return r.append("Authorization",function(e){return"".concat(Rt," ").concat(e)}(n)),r}function Xt(e){return Yt.apply(this,arguments)}function Yt(){return(Yt=e(i)(e(f).mark((function t(n){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Zt(e,t){return Qt.apply(this,arguments)}function Qt(){return(Qt=
/**
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
 */
e(i)(e(f).mark((function t(n,r){var a,i,o,s,c,u,l,p,h,d,v,g;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,o=r.fid,s=Ut(a),c=Kt(a),!(u=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(l=e.sent)&&c.append("x-firebase-client",l);case 9:return p={fid:o,authVersion:Rt,appId:a.appId,sdkVersion:Ft},h={method:"POST",headers:c,body:JSON.stringify(p)},e.next=13,Xt((function(){return fetch(s,h)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return v=e.sent,g={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:qt(v.authToken)},e.abrupt("return",g);case 22:return e.next=24,$t("Create Installation",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */function en(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
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
 */
/**
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
 */
var tn=/^[cdef][\w-]{21}$/;function nn(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(u)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
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
 */(t);return tn.test(n)?n:""}catch(e){return""}}function rn(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
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
 */var an=new Map;function on(e,t){var n=rn(e);sn(n,t),function(e,t){var n=un();n&&n.postMessage({key:e,fid:t});fn()}(n,t)}function sn(e,t){var n=an.get(e);if(n){var r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}}}var cn=null;function un(){return!cn&&"BroadcastChannel"in self&&((cn=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){sn(e.data.key,e.data.fid)}),cn}function fn(){0===an.size&&cn&&(cn.close(),cn=null)}
/**
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
 */var ln="firebase-installations-store",pn=null;function hn(){return pn||(pn=Ct("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ln)}})),pn}function dn(e,t){return vn.apply(this,arguments)}function vn(){return(vn=e(i)(e(f).mark((function t(n,r){var a,i,o,s,c;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=rn(n),e.next=3,hn();case 3:return i=e.sent,o=i.transaction(ln,"readwrite"),s=o.objectStore(ln),e.next=8,s.get(a);case 8:return c=e.sent,e.next=11,s.put(r,a);case 11:return e.next=13,o.done;case 13:return c&&c.fid===r.fid||on(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gn(e){return mn.apply(this,arguments)}function mn(){return(mn=e(i)(e(f).mark((function t(n){var r,a,i;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=rn(n),e.next=3,hn();case 3:return a=e.sent,i=a.transaction(ln,"readwrite"),e.next=7,i.objectStore(ln).delete(r);case 7:return e.next=9,i.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function yn(e,t){return bn.apply(this,arguments)}function bn(){return(bn=e(i)(e(f).mark((function t(n,r){var a,i,o,s,c,u;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=rn(n),e.next=3,hn();case 3:return i=e.sent,o=i.transaction(ln,"readwrite"),s=o.objectStore(ln),e.next=8,s.get(a);case 8:if(c=e.sent,void 0!==(u=r(c))){e.next=15;break}return e.next=13,s.delete(a);case 13:e.next=17;break;case 15:return e.next=17,s.put(u,a);case 17:return e.next=19,o.done;case 19:return!u||c&&c.fid===u.fid||on(n,u.fid),e.abrupt("return",u);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wn(e){return xn.apply(this,arguments)}function xn(){return(xn=
/**
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
 */
e(i)(e(f).mark((function t(n){var r,a;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,yn(n.appConfig,(function(e){var t=kn(e),a=In(n,t);return r=a.registrationPromise,a.installationEntry}));case 3:if(""!==(a=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:a,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kn(e){return Tn(e||{fid:nn(),registrationStatus:0})}function In(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(zt.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return En.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:_n(e)}:{installationEntry:t}}function En(){return(En=e(i)(e(f).mark((function t(n,r){var a;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Zt(n,r);case 3:return a=e.sent,e.abrupt("return",dn(n.appConfig,a));case 7:if(e.prev=7,e.t0=e.catch(0),!Wt(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,gn(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,dn(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function _n(e){return Sn.apply(this,arguments)}function Sn(){return(Sn=e(i)(e(f).mark((function t(n){var r,a,i,o;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Dn(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,en(100);case 6:return e.next=8,Dn(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,wn(n);case 14:if(a=e.sent,i=a.installationEntry,!(o=a.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",i);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dn(e){return yn(e,(function(e){if(!e)throw zt.create("installation-not-found");return Tn(e)}))}function Tn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Nt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Cn(e,t){return On.apply(this,arguments)}function On(){return(On=
/**
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
 */
e(i)(e(f).mark((function t(n,r){var a,i,o,s,c,u,l,p,h,d,v;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.appConfig,i=n.heartbeatServiceProvider,o=An(a,r),s=Jt(a,r),!(c=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(u=e.sent)&&s.append("x-firebase-client",u);case 9:return l={installation:{sdkVersion:Ft,appId:a.appId}},p={method:"POST",headers:s,body:JSON.stringify(l)},e.next=13,Xt((function(){return fetch(o,p)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return d=e.sent,v=qt(d),e.abrupt("return",v);case 22:return e.next=24,$t("Generate Auth Token",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function An(e,t){var n=t.fid;return"".concat(Ut(e),"/").concat(n,"/authTokens:generate")}function Ln(e){return jn.apply(this,arguments)}function jn(){return jn=
/**
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
 */
e(i)(e(f).mark((function t(n){var r,a,i,o,s=arguments;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,yn(n.appConfig,(function(e){if(!Rn(e))throw zt.create("not-registered");var t=e.authToken;if(!r&&Hn(t))return e;if(1===t.requestStatus)return a=Mn(n,r),e;if(!navigator.onLine)throw zt.create("app-offline");var i=Vn(e);return a=Nn(n,i),i}));case 4:if(i=e.sent,!a){e.next=11;break}return e.next=8,a;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=i.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),jn.apply(this,arguments)}function Mn(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=e(i)(e(f).mark((function t(n,r){var a,i;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Bn(n.appConfig);case 2:a=e.sent;case 3:if(1!==a.authToken.requestStatus){e.next=11;break}return e.next=6,en(100);case 6:return e.next=8,Bn(n.appConfig);case 8:a=e.sent,e.next=3;break;case 11:if(0!==(i=a.authToken).requestStatus){e.next=16;break}return e.abrupt("return",Ln(n,r));case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bn(e){return yn(e,(function(e){if(!Rn(e))throw zt.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+Nt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Nn(e,t){return Fn.apply(this,arguments)}function Fn(){return(Fn=e(i)(e(f).mark((function t(n,r){var a,i,o;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Cn(n,r);case 3:return a=e.sent,i=Object.assign(Object.assign({},r),{authToken:a}),e.next=7,dn(n.appConfig,i);case 7:return e.abrupt("return",a);case 10:if(e.prev=10,e.t0=e.catch(0),!Wt(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,gn(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,dn(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function Rn(e){return void 0!==e&&2===e.registrationStatus}function Hn(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ht}(e)}function Vn(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function zn(){return(zn=
/**
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
 */
e(i)(e(f).mark((function t(n){var r,a,i,o;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,wn(r);case 3:return a=e.sent,i=a.installationEntry,(o=a.registrationPromise)?o.catch(console.error):Ln(r).catch(console.error),e.abrupt("return",i.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wn(){return Wn=
/**
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
 */
e(i)(e(f).mark((function t(n){var r,a,i,o=arguments;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],a=n,e.next=4,Un(a);case 4:return e.next=6,Ln(a,r);case 6:return i=e.sent,e.abrupt("return",i.token);case 8:case"end":return e.stop()}}),t)}))),Wn.apply(this,arguments)}function Un(e){return qn.apply(this,arguments)}function qn(){return(qn=e(i)(e(f).mark((function t(n){var r;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wn(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $n(e){return zt.create("missing-app-config-values",{valueName:e})}
/**
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
 */var Gn="installations",Kn=function(e){var t=Xe(e.getProvider("app").getImmediate(),Gn).getImmediate(),n={getId:function(){return function(e){return zn.apply(this,arguments)}(t)},getToken:function(e){return function(e){return Wn.apply(this,arguments)}(t,e)}};return n};Je(new ie(Gn,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
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
 */
function(e){if(!e||!e.options)throw $n("App Configuration");if(!e.name)throw $n("App Name");var t=!0,n=!1,r=void 0;try{for(var a,i=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;if(!e.options[o])throw $n(o)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Xe(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),Je(new ie("installations-internal",Kn,"PRIVATE")),nt(Pt,Bt),nt(Pt,Bt,"esm2017");
/**
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
 */
var Jn,Xn="analytics",Yn=6e4,Zn="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qn="https://www.googletagmanager.com/gtag/js",er=new me("@firebase/analytics"),tr=(Jn={},e(c)(Jn,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(c)(Jn,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(c)(Jn,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(c)(Jn,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(c)(Jn,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(c)(Jn,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(c)(Jn,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(c)(Jn,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(c)(Jn,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(c)(Jn,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),e(c)(Jn,"no-client-id",'The "client_id" field is empty.'),e(c)(Jn,"invalid-gtag-resource","Trusted Types detected an invalid gtag resource: {$gtagURL}."),Jn),nr=new Y("analytics","Analytics",tr);
/**
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
 */
function rr(e){if(!e.startsWith(Qn)){var t=nr.create("invalid-gtag-resource",{gtagURL:e});return er.warn(t.message),""}return e}function ar(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function ir(e,t){var n=function(e,t){var n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:rr}),r=document.createElement("script"),a="".concat(Qn,"?l=").concat(e,"&id=").concat(t);r.src=n?null==n?void 0:n.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function or(e,t,n,r,a,i){return sr.apply(this,arguments)}function sr(){return(sr=e(i)(e(f).mark((function t(n,r,a,i,o,s){var c,u,l;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=i[o],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,ar(a);case 9:if(u=e.sent,!(l=u.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[l.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),er.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function cr(e,t,n,r,a){return ur.apply(this,arguments)}function ur(){return(ur=e(i)(e(f).mark((function t(n,r,a,i,o){var s,c,u,l,p,h,d,v,g,m,y;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return c=o.send_to,Array.isArray(c)||(c=[c]),e.next=7,ar(a);case 7:u=e.sent,l=!0,p=!1,h=void 0,e.prev=9,d=c[Symbol.iterator]();case 11:if(l=(v=d.next()).done){e.next=24;break}if(g=v.value,m=u.find((function(e){return e.measurementId===g})),!(y=m&&r[m.appId])){e.next=19;break}s.push(y),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:l=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),p=!0,h=e.t0;case 30:e.prev=30,e.prev=31,l||null==d.return||d.return();case 33:if(e.prev=33,!p){e.next=36;break}throw h;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",i,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),er.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function fr(t,n,r,a,o){var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[a].push(arguments)};return window[o]&&"function"==typeof window[o]&&(s=window[o]),window[o]=function(t,n,r,a){function o(){return o=e(i)(e(f).mark((function i(o){var s,c,p,h,d,v,g,m,y,b,w,x,k,I,E,_,S,D=arguments;return e(f).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:for(s=D.length,c=new Array(s>1?s-1:0),p=1;p<s;p++)c[p-1]=D[p];if(i.prev=1,"event"!==o){i.next=8;break}return h=e(l)(c,2),d=h[0],v=h[1],i.next=6,cr(t,n,r,d,v);case 6:i.next=15;break;case 8:if("config"!==o){i.next=14;break}return g=e(l)(c,2),m=g[0],y=g[1],i.next=12,or(t,n,r,a,m,y);case 12:i.next=15;break;case 14:"consent"===o?(b=e(l)(c,1),w=b[0],t("consent","update",w)):"get"===o?(x=e(l)(c,3),k=x[0],I=x[1],E=x[2],t("get",k,I,E)):"set"===o?(_=e(l)(c,1),S=_[0],t("set",S)):t.apply(void 0,[o].concat(e(u)(c)));case 15:i.next=20;break;case 17:i.prev=17,i.t0=i.catch(1),er.error(i.t0);case 20:case"end":return i.stop()}}),i,null,[[1,17]])}))),o.apply(this,arguments)}return function(e){return o.apply(this,arguments)}}(s,t,n,r),{gtagCore:s,wrappedGtag:window[o]}}function lr(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,a=void 0;try{for(var i,o=Object.values(t)[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;if(s.src&&s.src.includes(Qn)&&s.src.includes(e))return s}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return null}
/**
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
 */var pr=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(o)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(s)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),hr=new pr;function dr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function vr(e){return gr.apply(this,arguments)}function gr(){return(gr=e(i)(e(f).mark((function t(n){var r,a,i,o,s,c,u,l;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.appId,i=n.apiKey,o={method:"GET",headers:dr(i)},s=Zn.replace("{app-id}",a),e.next=6,fetch(s,o);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return u="",e.prev=9,e.next=12,c.json();case 12:l=e.sent,(null===(r=l.error)||void 0===r?void 0:r.message)&&(u=l.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw nr.create("config-fetch-failed",{httpStatus:c.status,responseMessage:u});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function mr(e){return yr.apply(this,arguments)}function yr(){return yr=e(i)(e(f).mark((function t(n){var r,a,o,s,c,u,l,p,h=arguments;return e(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:hr,a=h.length>2?h[2]:void 0,o=n.options,s=o.appId,c=o.apiKey,u=o.measurementId,s){t.next=4;break}throw nr.create("no-app-id");case 4:if(c){t.next=8;break}if(!u){t.next=7;break}return t.abrupt("return",{measurementId:u,appId:s});case 7:throw nr.create("no-api-key");case 8:return l=r.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new _r,setTimeout(e(i)(e(f).mark((function t(){return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==a?a:Yn),t.abrupt("return",br({appId:s,apiKey:c,measurementId:u},l,p,r));case 12:case"end":return t.stop()}}),t)}))),yr.apply(this,arguments)}function br(e,t,n){return wr.apply(this,arguments)}function wr(){return wr=e(i)(e(f).mark((function t(n,r,a){var i,o,s,c,u,l,p,h,d,v,g=arguments;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.throttleEndTimeMillis,o=r.backoffCount,s=g.length>3&&void 0!==g[3]?g[3]:hr,u=n.appId,l=n.measurementId,e.prev=3,e.next=6,xr(a,i);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!l){e.next=13;break}return er.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:u,measurementId:l});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,vr(n);case 17:return p=e.sent,s.deleteThrottleMetadata(u),e.abrupt("return",p);case 22:if(e.prev=22,e.t1=e.catch(14),kr(h=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(u),!l){e.next=32;break}return er.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==h?void 0:h.message,"]")),e.abrupt("return",{appId:u,measurementId:l});case 32:throw e.t1;case 33:return d=503===Number(null===(c=null==h?void 0:h.customData)||void 0===c?void 0:c.httpStatus)?re(o,s.intervalMillis,30):re(o,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+d,backoffCount:o+1},s.setThrottleMetadata(u,v),er.debug("Calling attemptFetch again in ".concat(d," millis")),e.abrupt("return",br(n,v,a,s));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),wr.apply(this,arguments)}function xr(e,t){return new Promise((function(n,r){var a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener((function(){clearTimeout(i),r(nr.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function kr(e){if(!(e instanceof X&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var Ir,Er,_r=function(){"use strict";function t(){e(o)(this,t),this.listeners=[]}return e(s)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
/**
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
 */function Sr(){return(Sr=e(i)(e(f).mark((function t(n,r,a,i,o){var s,c;return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",a,i),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,c=Object.assign(Object.assign({},i),{send_to:s}),n("event",a,c);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dr(e){Er=e}function Tr(e){Ir=e}function Cr(){return Or.apply(this,arguments)}function Or(){return(Or=
/**
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
 */
e(i)(e(f).mark((function t(){return e(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G()){e.next=5;break}return er.warn(nr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,K();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),er.warn(nr.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function Ar(){return(Ar=e(i)(e(f).mark((function t(n,r,a,i,o,s,c){var u,p,h,d,v,g,m;return e(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(p=mr(n)).then((function(e){a[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&er.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return er.error(e)})),r.push(p),h=Cr().then((function(e){return e?i.getId():void 0})),t.t0=e(l),t.next=8,Promise.all([p,h]);case 8:return t.t1=t.sent,d=(0,t.t0)(t.t1,2),v=d[0],g=d[1],lr(s)||ir(s,v.measurementId),Er&&(o("consent","default",Er),Dr(void 0)),o("js",new Date),(m=null!==(u=null==c?void 0:c.config)&&void 0!==u?u:{}).origin="firebase",m.update=!0,null!=g&&(m.firebase_id=g),o("config",v.measurementId,m),Ir&&(o("set",Ir),Tr(void 0)),t.abrupt("return",v.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var Lr,jr,Mr=function(){"use strict";function t(n){e(o)(this,t),this.app=n}return e(s)(t,[{key:"_delete",value:function(){return delete Pr[this.app.options.appId],Promise.resolve()}}]),t}(),Pr={},Br=[],Nr={},Fr="dataLayer",Rr="gtag",Hr=!1;function Vr(e,t,n){!function(){var e=[];if($()&&e.push("This is a browser extension environment."),J()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=nr.create("invalid-analytics-context",{errorInfo:t});er.warn(n.message)}}();var r,a,i=e.options.appId;if(!i)throw nr.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw nr.create("no-api-key");er.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Pr[i])throw nr.create("already-exists",{id:i});if(!Hr){r=Fr,a=[],Array.isArray(window[r])?a=window[r]:window[r]=a;var o=fr(Pr,Br,Nr,Fr,Rr),s=o.wrappedGtag,c=o.gtagCore;jr=s,Lr=c,Hr=!0}return Pr[i]=function(e,t,n,r,a,i,o){return Ar.apply(this,arguments)}(e,Br,Nr,t,Lr,Fr,n),new Mr(e)}function zr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xe(e,Xn);if(n.isInitialized()){var r=n.getImmediate();if(ee(t,n.getOptions()))return r;throw nr.create("already-initialized")}var a=n.initialize({options:t});return a}function Wr(e,t,n,r){e=ae(e),function(e,t,n,r,a){return Sr.apply(this,arguments)}(jr,Pr[e.app.options.appId],t,n,r).catch((function(e){return er.error(e)}))}var Ur="@firebase/analytics",qr="0.10.0";Je(new ie(Xn,(function(e,t){var n=t.options;return Vr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),Je(new ie("analytics-internal",(function(e){try{var t=e.getProvider(Xn).getImmediate();return{logEvent:function(e,n,r){return Wr(t,e,n,r)}}}catch(e){throw nr.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),nt(Ur,qr),nt(Ur,qr,"esm2017");document.querySelector(".title-text .login");var $r=document.querySelector("form.login"),Gr=document.querySelector("label.login"),Kr=document.querySelector("label.signup"),Jr=document.querySelector("form .signup-link a");Kr.onclick=function(){$r.style.marginLeft="-50%"},Gr.onclick=function(){$r.style.marginLeft="0%"},Jr.onclick=function(){return Kr.click(),!1};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt(),t=Xe(e=ae(e),Xn);t.isInitialized()?t.getImmediate():zr(e)}(et({apiKey:"AIzaSyDGzmoR0NXZi-78KRaSzsXdTYxIM2vehx8",authDomain:"bookshelveshere.firebaseapp.com",projectId:"bookshelveshere",storageBucket:"bookshelveshere.appspot.com",messagingSenderId:"62726498466",appId:"1:62726498466:web:840fa857146f9fb8f60ffb",measurementId:"G-CJ91XDP7BR"}));var Xr=document.getElementById("myWrapper");window.onclick=function(e){e.target==Xr&&(Xr.style.display="none")}}();
//# sourceMappingURL=index.8ea2276a.js.map
