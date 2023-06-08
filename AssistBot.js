/*!
 * Vue.js v2.0.5
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Er.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return Pr.call(e)===Rr}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){return e==t||!(!l(e)||!l(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!Fr.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){Qr.target&&Xr.push(Qr.target),Qr.target=e}function w(){Qr.target=Xr.pop()}function C(){ei.length=0,ti={},ni=ri=!1}function x(){for(ri=!0,ei.sort(function(e,t){return e.id-t.id}),ii=0;ii<ei.length;ii++){var e=ei[ii],t=e.id;ti[t]=null,e.run()}Zr&&Br.devtools&&Zr.emit("flush"),C()}function k(e){var t=e.id;if(null==ti[t]){if(ti[t]=!0,ri){for(var n=ei.length-1;n>=0&&ei[n].id>e.id;)n--;ei.splice(Math.max(n,ii)+1,0,e)}else ei.push(e);ni||(ni=!0,Gr(x))}}function A(e){si.clear(),O(e,si)}function O(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)O(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)O(e[r[n]],t)}}function T(e,t){e.__proto__=t}function S(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function E(e){if(l(e)){var t;return i(e,"__ob__")&&e.__ob__ instanceof di?t=e.__ob__:fi.shouldConvert&&!Br._isServer&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new di(e)),t}}function j(e,t,n,r){var i=new Qr,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=E(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return Qr.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&D(t)),t},set:function(t){var r=a?a.call(e):n;t!==r&&(s?s.call(e,t):n=t,c=E(t),i.notify())}})}}function L(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(j(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function N(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function D(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&D(t)}function M(e){e._watchers=[],P(e),R(e),I(e),F(e),H(e)}function P(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;fi.shouldConvert=i;for(var o=function(i){var o=r[i];j(e,o,De(o,t,n,e))},a=0;a<r.length;a++)o(a);fi.shouldConvert=!0}}function R(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||V(e,n[o]);E(t),t.__ob__&&t.__ob__.vmCount++}function I(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];"function"==typeof r?(pi.get=B(r,e),pi.set=p):(pi.get=r.get?r.cache!==!1?B(r.get,e):s(r.get,e):p,pi.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,pi)}}function B(e,t){var n=new ai(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),Qr.target&&n.depend(),n.value}}function F(e){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e)}function H(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)U(e,n,r[i]);else U(e,n,r)}}function U(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function z(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=L,e.prototype.$delete=N,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new ai(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function V(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}function J(e){var t=new vi(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function q(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=J(e[n]);return t}function K(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var o=e[t];o?e[t]=function(){o.apply(this,arguments),n.apply(this,arguments)}:e[t]=n}}function W(e,t,n,r,i){var o,a,s,c,u,l;for(o in e)if(a=e[o],s=t[o],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var f=0;f<s.length;f++)s[f]=a[f];e[o]=s}else s.fn=a,e[o]=s}else l="!"===o.charAt(0),u=l?o.slice(1):o,Array.isArray(a)?n(u,a.invoker=Z(a),l):(a.invoker||(c=a,a=e[o]={},a.fn=c,a.invoker=G(a)),n(u,a.invoker,l));else;for(o in t)e[o]||(u="!"===o.charAt(0)?o.slice(1):o,r(u,t[o].invoker))}function Z(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function G(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments)}}function Y(e,t,n){if(o(e))return[Q(e)];if(Array.isArray(e)){for(var r=[],i=0,a=e.length;i<a;i++){var s=e[i],c=r[r.length-1];Array.isArray(s)?r.push.apply(r,Y(s,t,(n||"")+"_"+i)):o(s)?c&&c.text?c.text+=String(s):""!==s&&r.push(Q(s)):s instanceof vi&&(s.text&&c&&c.text?c.text+=s.text:(t&&X(s,t),s.tag&&null==s.key&&null!=n&&(s.key="__vlist"+n+"_"+i+"__"),r.push(s)))}return r}}function Q(e){return new vi(void 0,void 0,void 0,String(e))}function X(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children))for(var n=0,r=e.children.length;n<r;n++)X(e.children[n],t)}function ee(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function te(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ne(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=hi),re(n,"beforeMount"),n._watcher=new ai(n,function(){n._update(n._render(),t)},p),t=!1,null==n.$vnode&&(n._isMounted=!0,re(n,"mounted")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&re(n,"beforeUpdate");var r=n.$el,i=mi;mi=n;var o=n._vnode;n._vnode=e,o?n.$el=n.__patch__(o,e):n.$el=n.__patch__(n.$el,e,t),mi=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&re(n,"updated")},e.prototype._updateFromParent=function(e,t,n,r){var i=this,o=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$options._renderChildren=r,e&&i.$options.props){fi.shouldConvert=!1;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var c=a[s];i[c]=De(c,i.$options.props,e,i)}fi.shouldConvert=!0,i.$options.propsData=e}if(t){var u=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,u)}o&&(i.$slots=be(r,i._renderContext),i.$forceUpdate())},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){re(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,re(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function re(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit("hook:"+t)}function ie(e,t,n,r,i){if(e&&(l(e)&&(e=Ae.extend(e)),"function"==typeof e)){if(ke(e),!e.cid)if(e.resolved)e=e.resolved;else if(e=fe(e,function(){n.$forceUpdate()}),!e)return;t=t||{};var o=de(t,e);if(e.options.functional)return oe(e,o,t,n,r);var a=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),ve(t);var s=e.options.name||i,c=new vi("vue-component-"+e.cid+(s?"-"+s:""),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:o,listeners:a,tag:i,children:r});return c}}function oe(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var c in a)o[c]=De(c,a,t);var u=e.options.render.call(null,s(me,{_self:Object.create(r)}),{props:o,data:n,parent:r,children:Y(i),slots:function(){return be(i,r)}});return u instanceof vi&&(u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function ae(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function se(e,t){if(!e.child||e.child._isDestroyed){var n=e.child=ae(e,mi);n.$mount(t?e.elm:void 0,t)}}function ce(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children)}function ue(e){e.child._isMounted||(e.child._isMounted=!0,re(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,re(e.child,"activated"))}function le(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,re(e.child,"deactivated")):e.child.$destroy())}function fe(e,t){if(!e.requested){e.requested=!0;var n=e.pendingCallbacks=[t],r=!0,i=function(t){if(l(t)&&(t=Ae.extend(t)),e.resolved=t,!r)for(var i=0,o=n.length;i<o;i++)n[i](t)},o=function(e){},a=e(i,o);return a&&"function"==typeof a.then&&!e.resolved&&a.then(i,o),r=!1,e.resolved}e.pendingCallbacks.push(t)}function de(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Mr(s);pe(r,o,s,c,!0)||pe(r,i,s,c)||pe(r,a,s,c)}return r}}function pe(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function ve(e){e.hook||(e.hook={});for(var t=0;t<yi.length;t++){var n=yi[t],r=e.hook[n],i=gi[n];e.hook[n]=r?he(i,r):i}}function he(e,t){return function(n,r){e(n,r),t(n,r)}}function me(e,t,n){return t&&(Array.isArray(t)||"object"!=typeof t)&&(n=t,t=void 0),ge(this._self,e,t,n)}function ge(e,t,n,r){if(!n||!n.__ob__){if(!t)return hi();if("string"==typeof t){var i,o=Br.getTagNamespace(t);if(Br.isReservedTag(t))return new vi(t,n,Y(r,o),void 0,void 0,o,e);if(i=Ne(e.$options,"components",t))return ie(i,n,e,r,t);var a="foreignObject"===t?"xhtml":o;return new vi(t,n,Y(r,a),void 0,void 0,o,e)}return ie(t,n,e,r)}}function ye(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=be(e.$options._renderChildren,e._renderContext),e.$createElement=s(me,e),e.$options.el&&e.$mount(e.$options.el)}function _e(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&i(e[r],t+"_"+r,n);else i(e,t,n)}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}n.prototype.$nextTick=function(e){Gr(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=q(e.$slots[o]);r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){if(Br.errorHandler)Br.errorHandler.call(null,t,e);else{if(Br._isServer)throw t;console.error(t)}a=e._vnode}return a instanceof vi||(a=hi()),a.parent=i,a},n.prototype._h=me,n.prototype._s=e,n.prototype._n=t,n.prototype._e=hi,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?q(n):J(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,"__static__"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,"__once__"+t+(n?"_"+n:""),!0),e};var o=function(e){return e};n.prototype._f=function(e){return Ne(this.$options,"filters",e,!0)||o},n.prototype._l=function(e,t){var n,r,i,o,a;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n},n.prototype._t=function(e,t){var n=this.$slots[e];return n||t},n.prototype._b=function(e,t,n){if(t)if(l(t)){Array.isArray(t)&&(t=d(t));for(var r in t)if("class"===r||"style"===r)e[r]=t[r];else{var i=n||Br.mustUseProp(r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});i[r]=t[r]}}else;return e},n.prototype._k=function(e){return Br.keyCodes[e]}}function be(e,t){var n={};if(!e)return n;for(var r,i,o=Y(e)||[],a=[],s=0,c=o.length;s<c;s++)if(i=o[s],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var u=n[r]||(n[r]=[]);"template"===i.tag?u.push.apply(u,i.children):u.push(i)}else a.push(i);return a.length&&(1!==a.length||" "!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function $e(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=s(e.$on,e),r=s(e.$off,e);e._updateListeners=function(t,i){W(t,i||{},n,r,e)},t&&e._updateListeners(t)}function we(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function Ce(e){e.prototype._init=function(e){var t=this;t._uid=_i++,t._isVue=!0,e&&e._isComponent?xe(t,e):t.$options=Le(ke(t.constructor),e||{},t),t._renderProxy=t,t._self=t,te(t),$e(t),re(t,"beforeCreate"),M(t),re(t,"created"),ye(t)}}function xe(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function ke(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,t=e.options=Le(n,i),t.name&&(t.components[t.name]=e))}return t}function Ae(e){this._init(e)}function Oe(e,t){var n,r,o;for(n in t)r=e[n],o=t[n],i(e,n)?l(r)&&l(o)&&Oe(r,o):L(e,n,o);return e}function Te(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function Se(e,t){var n=Object.create(e||null);return t?u(n,t):n}function Ee(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=Lr(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Lr(a),o[i]=f(r)?r:{type:r};e.props=o}}function je(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function Le(e,t,n){function r(r){var i=wi[r]||Ci;l[r]=i(e[r],t[r],n,r)}Ee(t),je(t);var o=t.extends;if(o&&(e="function"==typeof o?Le(e,o.options,n):Le(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof Ae&&(c=c.options),e=Le(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function Ne(e,t,n,r){if("string"==typeof n){var i=e[t],o=i[n]||i[Lr(n)]||i[Nr(Lr(n))];return o}}function De(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(Re(o.type)&&(a&&!i(o,"default")?s=!1:""!==s&&s!==Mr(e)||(s=!0)),void 0===s){s=Me(r,o,e);var c=fi.shouldConvert;fi.shouldConvert=!0,E(s),fi.shouldConvert=c}return s}function Me(e,t,n){if(i(t,"default")){var r=t.default;return l(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:"function"==typeof r&&t.type!==Function?r.call(e):r}}function Pe(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function Re(e){if(!Array.isArray(e))return"Boolean"===Pe(e);for(var t=0,n=e.length;t<n;t++)if("Boolean"===Pe(e[t]))return!0;return!1}function Ie(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function Be(e){e.mixin=function(t){e.options=Le(e.options,t)}}function Fe(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=0===n.cid;if(r&&e._Ctor)return e._Ctor;var i=e.name||n.options.name,o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Le(n.options,e),o.super=n,o.extend=n.extend,Br._assetTypes.forEach(function(e){o[e]=n[e]}),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=e,r&&(e._Ctor=o),o}}function He(e){Br._assetTypes.forEach(function(t){e[t]=function(n,r){return r?("component"===t&&f(r)&&(r.name=r.name||n,r=e.extend(r)),"directive"===t&&"function"==typeof r&&(r={bind:r,update:r}),this.options[t+"s"][n]=r,r):this.options[t+"s"][n]}})}function Ue(e){var t={};t.get=function(){return Br},Object.defineProperty(e,"config",t),e.util=xi,e.set=L,e.delete=N,e.nextTick=Gr,e.options=Object.create(null),Br._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),u(e.options.components,Ai),Ie(e),Be(e),Fe(e),He(e)}function ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Ve(r.data,t));for(;n=n.parent;)n.data&&(t=Ve(t,n.data));return Je(t)}function Ve(e,t){return{staticClass:qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Je(e){var t=e.class,n=e.staticClass;return n||t?qe(n,Ke(t)):""}function qe(e,t){return e?t?e+" "+t:e:t||""}function Ke(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=Ke(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function We(e){return Fi(e)?"svg":"math"===e?"math":void 0}function Ze(e){if(!Ur)return!0;if(Ui(e))return!1;if(e=e.toLowerCase(),null!=zi[e])return zi[e];var t=document.createElement(e);return e.indexOf("-")>-1?zi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:zi[e]=/HTMLUnknownElement/.test(t.toString())}function Ge(e){if("string"==typeof e){if(e=document.querySelector(e),!e)return document.createElement("div")}return e}function Ye(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple","multiple"),n)}function Qe(e,t){return document.createElementNS(Mi[e],t)}function Xe(e){return document.createTextNode(e)}function et(e){return document.createComment(e)}function tt(e,t,n){e.insertBefore(t,n)}function nt(e,t){e.removeChild(t)}function rt(e,t){e.appendChild(t)}function it(e){return e.parentNode}function ot(e){return e.nextSibling}function at(e){return e.tagName}function st(e,t){e.textContent=t}function ct(e){return e.childNodes}function ut(e,t,n){e.setAttribute(t,n)}function lt(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.child||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].push(o):a[n]=[o]:a[n]=o}}function ft(e){return null==e}function dt(e){return null!=e}function pt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function vt(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,dt(i)&&(o[i]=r);return o}function ht(e){function t(e){return new vi(C.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0===--n.listeners&&r(e)}return n.listeners=t,n}function r(e){var t=C.parentNode(e);t&&C.removeChild(t,e)}function i(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,dt(i)&&(dt(r=i.hook)&&dt(r=r.init)&&r(e),dt(r=e.child)))return u(e,t),e.elm;var o=e.children,s=e.tag;return dt(s)?(e.elm=e.ns?C.createElementNS(e.ns,s):C.createElement(s,e),l(e),a(e,o,t),dt(i)&&c(e,t)):e.isComment?e.elm=C.createComment(e.text):e.elm=C.createTextNode(e.text),e.elm}function a(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)C.appendChild(e.elm,i(t[r],n,!0));else o(e.text)&&C.appendChild(e.elm,C.createTextNode(e.text))}function s(e){for(;e.child;)e=e.child._vnode;return dt(e.tag)}function c(e,t){for(var n=0;n<$.create.length;++n)$.create[n](qi,e);_=e.data.hook,dt(_)&&(_.create&&_.create(qi,e),_.insert&&t.push(e))}function u(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,s(e)?(c(e,t),l(e)):(lt(e),t.push(e))}function l(e){var t;dt(t=e.context)&&dt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,""),dt(t=mi)&&t!==e.context&&dt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,"")}function f(e,t,n,r,o,a){for(;r<=o;++r)C.insertBefore(e,i(n[r],a),t)}function d(e){var t,n,r=e.data;if(dt(r))for(dt(t=r.hook)&&dt(t=t.destroy)&&t(e),t=0;t<$.destroy.length;++t)$.destroy[t](e);if(dt(t=e.children))for(n=0;n<e.children.length;++n)d(e.children[n])}function p(e,t,n,r){for(;n<=r;++n){var i=t[n];dt(i)&&(dt(i.tag)?(v(i),d(i)):C.removeChild(e,i.elm))}}function v(e,t){if(t||dt(e.data)){var i=$.remove.length+1;for(t?t.listeners+=i:t=n(e.elm,i),dt(_=e.child)&&dt(_=_._vnode)&&dt(_.data)&&v(_,t),_=0;_<$.remove.length;++_)$.remove[_](e,t);dt(_=e.data.hook)&&dt(_=_.remove)?_(e,t):t()}else r(e.elm)}function h(e,t,n,r,o){for(var a,s,c,u,l=0,d=0,v=t.length-1,h=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],$=!o;l<=v&&d<=y;)ft(h)?h=t[++l]:ft(g)?g=t[--v]:pt(h,_)?(m(h,_,r),h=t[++l],_=n[++d]):pt(g,b)?(m(g,b,r),g=t[--v],b=n[--y]):pt(h,b)?(m(h,b,r),$&&C.insertBefore(e,h.elm,C.nextSibling(g.elm)),h=t[++l],b=n[--y]):pt(g,_)?(m(g,_,r),$&&C.insertBefore(e,g.elm,h.elm),g=t[--v],_=n[++d]):(ft(a)&&(a=vt(t,l,v)),s=dt(_.key)?a[_.key]:null,ft(s)?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(c=t[s],c.tag!==_.tag?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(m(c,_,r),t[s]=void 0,$&&C.insertBefore(e,_.elm,h.elm),_=n[++d])));l>v?(u=ft(n[y+1])?null:n[y+1].elm,f(e,u,n,d,y,r)):d>y&&p(e,t,l,v)}function m(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return void(t.elm=e.elm);var i,o=t.data,a=dt(o);a&&dt(i=o.hook)&&dt(i=i.prepatch)&&i(e,t);var c=t.elm=e.elm,u=e.children,l=t.children;if(a&&s(t)){for(i=0;i<$.update.length;++i)$.update[i](e,t);dt(i=o.hook)&&dt(i=i.update)&&i(e,t)}ft(t.text)?dt(u)&&dt(l)?u!==l&&h(c,u,l,n,r):dt(l)?(dt(e.text)&&C.setTextContent(c,""),f(c,null,l,0,l.length-1,n)):dt(u)?p(c,u,0,u.length-1):dt(e.text)&&C.setTextContent(c,""):e.text!==t.text&&C.setTextContent(c,t.text),a&&dt(i=o.hook)&&dt(i=i.postpatch)&&i(e,t)}}function g(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function y(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(dt(i)&&(dt(_=i.hook)&&dt(_=_.init)&&_(t,!0),dt(_=t.child)))return u(t,n),!0;if(dt(r)){if(dt(o)){var s=C.childNodes(e);if(s.length){var l=!0;if(s.length!==o.length)l=!1;else for(var f=0;f<o.length;f++)if(!y(s[f],o[f],n)){l=!1;break}if(!l)return!1}else a(t,o,n)}dt(i)&&c(t,n)}return!0}var _,b,$={},w=e.modules,C=e.nodeOps;for(_=0;_<Ki.length;++_)for($[Ki[_]]=[],b=0;b<w.length;++b)void 0!==w[b][Ki[_]]&&$[Ki[_]].push(w[b][Ki[_]]);return function(e,n,r,o){if(!n)return void(e&&d(e));var a,c,u=!1,l=[];if(e){var f=dt(e.nodeType);if(!f&&pt(e,n))m(e,n,l,o);else{if(f){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&y(e,n,l))return g(n,l,!0),e;e=t(e)}if(a=e.elm,c=C.parentNode(a),i(n,l),n.parent&&(n.parent.elm=n.elm,s(n)))for(var v=0;v<$.create.length;++v)$.create[v](qi,n.parent);null!==c?(C.insertBefore(c,n.elm,C.nextSibling(a)),p(c,[e],0,0)):dt(e.tag)&&d(e)}}else u=!0,i(n,l);return g(n,l,u),n.elm}}function mt(e,t){if(e.data.directives||t.data.directives){var n,r,i,o=e===qi,a=gt(e.data.directives,e.context),s=gt(t.data.directives,t.context),c=[],u=[];for(n in s)r=a[n],i=s[n],r?(i.oldValue=r.value,_t(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(_t(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var l=function(){c.forEach(function(n){_t(n,"inserted",t,e)})};o?K(t.data.hook||(t.data.hook={}),"insert",l,"dir-insert"):l()}if(u.length&&K(t.data.hook||(t.data.hook={}),"postpatch",function(){u.forEach(function(n){_t(n,"componentUpdated",t,e)})},"dir-postpatch"),!o)for(n in a)s[n]||_t(a[n],"unbind",e)}}function gt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=Zi),n[yt(i)]=i,i.def=Ne(t.$options,"directives",i.name,!0);return n}function yt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function _t(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r)}function bt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=u({},s));for(n in s)r=s[n],i=a[n],i!==r&&$t(o,n,r);for(n in a)null==s[n]&&(Li(n)?o.removeAttributeNS(ji,Ni(n)):Si(n)||o.removeAttribute(n))}}function $t(e,t,n){Ei(t)?Di(n)?e.removeAttribute(t):e.setAttribute(t,t):Si(t)?e.setAttribute(t,Di(n)||"false"===n?"false":"true"):Li(t)?Di(n)?e.removeAttributeNS(ji,Ni(t)):e.setAttributeNS(ji,t,n):Di(n)?e.removeAttribute(t):e.setAttribute(t,n)}function wt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=ze(t),a=n._transitionClasses;a&&(o=qe(o,Ke(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function Ct(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{},i=t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r)}),o=t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n)});W(n,r,i,o,t.context)}}function xt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if("textContent"!==n&&"innerHTML"!==n||!t.children||(t.children.length=0),r=a[n],"value"===n){i._value=r;var s=null==r?"":String(r);i.value===s||i.composing||(i.value=s)}else i[n]=r}}function kt(e,t){if(e.data&&e.data.style||t.data.style){var n,r,i=t.elm,o=e.data.style||{},a=t.data.style||{};if("string"==typeof a)return void(i.style.cssText=a);var s=a.__ob__;Array.isArray(a)&&(a=t.data.style=d(a)),s&&(a=t.data.style=u({},a));for(r in o)null==a[r]&&no(i,r,"");for(r in a)n=a[r],n!==o[r]&&no(i,r,null==n?"":n)}}function At(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Ot(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+e.getAttribute("class")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Tt(e){vo(function(){vo(e)})}function St(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),At(e,t)}function Et(e,t){e._transitionClasses&&r(e._transitionClasses,t),Ot(e,t)}function jt(e,t,n){var r=Lt(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===so?lo:po,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Lt(e,t){var n,r=window.getComputedStyle(e),i=r[uo+"Delay"].split(", "),o=r[uo+"Duration"].split(", "),a=Nt(i,o),s=r[fo+"Delay"].split(", "),c=r[fo+"Duration"].split(", "),u=Nt(s,c),l=0,f=0;t===so?a>0&&(n=so,l=a,f=o.length):t===co?u>0&&(n=co,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?so:co:null,f=n?n===so?o.length:c.length:0);var d=n===so&&ho.test(r[uo+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:d}}function Nt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Dt(t)+Dt(e[n])}))}function Dt(e){return 1e3*Number(e.slice(0,-1))}function Mt(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Rt(e.data.transition);if(n&&!t._enterCb&&1===t.nodeType){var r=n.css,i=n.type,o=n.enterClass,a=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,u=n.beforeEnter,l=n.enter,f=n.afterEnter,d=n.enterCancelled,p=n.beforeAppear,v=n.appear,h=n.afterAppear,m=n.appearCancelled,g=mi.$vnode,y=g&&g.parent?g.parent.context:mi,_=!y._isMounted||!e.isRootInsert;if(!_||v||""===v){var b=_?s:o,$=_?c:a,w=_?p||u:u,C=_&&"function"==typeof v?v:l,x=_?h||f:f,k=_?m||d:d,A=r!==!1&&!Jr,O=C&&(C._length||C.length)>1,T=t._enterCb=It(function(){A&&Et(t,$),T.cancelled?(A&&Et(t,b),k&&k(t)):x&&x(t),t._enterCb=null});e.data.show||K(e.data.hook||(e.data.hook={}),"insert",function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),C&&C(t,T)},"transition-insert"),w&&w(t),A&&(St(t,b),St(t,$),Tt(function(){Et(t,b),T.cancelled||O||jt(t,i,T)})),e.data.show&&C&&C(t,T),A||O||T()}}}function Pt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),u&&u(r),v&&(St(r,s),St(r,c),Tt(function(){Et(r,s),m.cancelled||h||jt(r,a,m)})),l&&l(r,m),v||h||m())}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Rt(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var o=i.css,a=i.type,s=i.leaveClass,c=i.leaveActiveClass,u=i.beforeLeave,l=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=o!==!1&&!Jr,h=l&&(l._length||l.length)>1,m=r._leaveCb=It(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Et(r,c),m.cancelled?(v&&Et(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null});p?p(n):n()}}function Rt(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,mo(e.name||"v")),u(t,e),t}return"string"==typeof e?mo(e):void 0}}function It(e){var t=!1;return function(){t||(t=!0,e())}}function Bt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,Ht(a))>-1,a.selected!==o&&(a.selected=o);else if(h(Ht(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Ft(e,t){for(var n=0,r=t.length;n<r;n++)if(h(Ht(t[n]),e))return!1;return!0}function Ht(e){return"_value"in e?e._value:e.value}function Ut(e){e.target.composing=!0}function zt(e){e.target.composing=!1,Vt(e.target,"input")}function Vt(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Jt(e){return!e.child||e.data&&e.data.transition?e:Jt(e.child._vnode)}function qt(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?qt(ee(t.children)):e}function Kt(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Lr(o)]=i[o].fn;return t}function Wt(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function Zt(e){for(;e=e.parent;)if(e.data.transition)return!0}function Gt(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Yt(e){e.data.newPos=e.elm.getBoundingClientRect()}function Qt(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function Xt(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function en(e){return Eo.innerHTML=e,Eo.textContent}function tn(e,t){return t&&(e=e.replace(ba,"\n")),e.replace(ya,"<").replace(_a,">").replace($a,"&").replace(wa,'"')}function nn(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(Ro);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(Io))&&(o=e.match(Do));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;u&&("p"===s&&Bi(n)&&o("",s),Ii(n)&&s===n&&o("",n));for(var i=l(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),d=0;d<a;d++){var p=e.attrs[d];zo&&p[0].indexOf('""')===-1&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:tn(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r,i){var o;if(null==r&&(r=f),null==i&&(i=f),n){var a=n.toLowerCase();for(o=c.length-1;o>=0&&c[o].tag.toLowerCase()!==a;o--);}else o=0;if(o>=0){for(var u=c.length-1;u>=o;u--)t.end&&t.end(c[u].tag,r,i);c.length=o,s=o&&c[o-1].tag}else"br"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i))}for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Ir,f=0;e;){if(a=e,s&&ma(s,t.sfc,c)){var d=s.toLowerCase(),p=ga[d]||(ga[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,o("</"+d+">",d,f-v,f)}else{var m=e.indexOf("<");if(0===m){if(Ho.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(Uo.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(Fo);if(_){n(_[0].length);continue}var b=e.match(Bo);if(b){var $=f;n(b[0].length),o(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var C=void 0,x=void 0,k=void 0;if(m>0){for(x=e.slice(m);!(Bo.test(x)||Ro.test(x)||Ho.test(x)||Uo.test(x)||(k=x.indexOf("<",1),k<0));)m+=k,x=e.slice(m);C=e.substring(0,m),n(m)}m<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===a&&t.chars){t.chars(e);break}}o()}function rn(e){function t(){(a||(a=[])).push(e.slice(d,i).trim()),d=i+1}var n,r,i,o,a,s=!1,c=!1,u=0,l=0,f=0,d=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!s);else if(c)34===n&&92!==r&&(c=!c);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||u||l||f)switch(n){case 34:c=!0;break;case 39:s=!0;break;case 40:f++;break;case 41:f--;break;case 91:l++;break;case 93:l--;break;case 123:u++;break;case 125:u--}else void 0===o?(d=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==d&&t(),a)for(i=0;i<a.length;i++)o=on(o,a[i]);return o}function on(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function an(e,t){var n=t?ka(t):Ca;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=rn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function sn(e){console.error("[Vue parser]: "+e)}function cn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function un(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function ln(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function fn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function dn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function pn(e,t,n){var r=vn(e,":"+t)||vn(e,"v-bind:"+t);if(null!=r)return r;if(n!==!1){var i=vn(e,t);if(null!=i)return JSON.stringify(i)}}function vn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function hn(e,t){Vo=t.warn||sn,Jo=t.getTagNamespace||Ir,qo=t.mustUseProp||Ir,Ko=t.isPreTag||Ir,Wo=cn(t.modules,"preTransformNode"),Zo=cn(t.modules,"transformNode"),Go=cn(t.modules,"postTransformNode"),Yo=t.delimiters;var n,r,i=[],o=t.preserveWhitespace!==!1,a=!1,s=!1;return nn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,o,c){function u(e){}var l=r&&r.ns||Jo(e);t.isIE&&"svg"===l&&(o=Ln(o));var f={type:1,tag:e,attrsList:o,attrsMap:Sn(o,t.isIE),parent:r,children:[]};l&&(f.ns=l),jn(f)&&(f.forbidden=!0);for(var d=0;d<Wo.length;d++)Wo[d](f,t);if(a||(mn(f),f.pre&&(a=!0)),Ko(f.tag)&&(s=!0),a)gn(f);else{bn(f),$n(f),Cn(f),yn(f),f.plain=!f.key&&!o.length,_n(f),xn(f),kn(f);for(var p=0;p<Zo.length;p++)Zo[p](f,t);An(f)}n?i.length||n.if&&f.else&&(u(f),n.elseBlock=f):(n=f,u(n)),r&&!f.forbidden&&(f.else?wn(f,r):(r.children.push(f),f.parent=r)),c||(r=f,i.push(f));for(var v=0;v<Go.length;v++)Go[v](f,t)},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(a=!1),Ko(e.tag)&&(s=!1)},chars:function(e){if(r&&(e=s||e.trim()?Da(e):o&&r.children.length?" ":"")){var t;!a&&" "!==e&&(t=an(e,Yo))?r.children.push({type:2,expression:t,text:e}):(e=e.replace(Na,""),r.children.push({type:3,text:e}))}}}),n}function mn(e){null!=vn(e,"v-pre")&&(e.pre=!0)}function gn(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function yn(e){var t=pn(e,"key");t&&(e.key=t)}function _n(e){var t=pn(e,"ref");t&&(e.ref=t,e.refInFor=On(e))}function bn(e){var t;if(t=vn(e,"v-for")){var n=t.match(Oa);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ta);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function $n(e){var t=vn(e,"v-if");t&&(e.if=t),null!=vn(e,"v-else")&&(e.else=!0)}function wn(e,t){var n=En(t.children);n&&n.if&&(n.elseBlock=e)}function Cn(e){var t=vn(e,"v-once");null!=t&&(e.once=!0)}function xn(e){if("slot"===e.tag)e.slotName=pn(e,"name");else{var t=pn(e,"slot");t&&(e.slotTarget=t)}}function kn(e){var t;(t=pn(e,"is"))&&(e.component=t),null!=vn(e,"inline-template")&&(e.inlineTemplate=!0)}function An(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Aa.test(r))if(e.hasBindings=!0,s=Tn(r),s&&(r=r.replace(La,"")),Sa.test(r))r=r.replace(Sa,""),s&&s.prop&&(c=!0,r=Lr(r),"innerHtml"===r&&(r="innerHTML")),c||qo(r)?un(e,r,o):ln(e,r,o);else if(Ea.test(r))r=r.replace(Ea,""),dn(e,r,o,s);else{r=r.replace(Aa,"");var l=r.match(ja);l&&(a=l[1])&&(r=r.slice(0,-(a.length+1))),fn(e,r,i,o,a,s)}else ln(e,r,JSON.stringify(o))}function On(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Tn(e){var t=e.match(La);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Sn(e,t){for(var n={},r=0,i=e.length;r<i;r++)n[e[r].name]=e[r].value;return n}function En(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function jn(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Ln(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ma.test(r.name)||(r.name=r.name.replace(Pa,""),t.push(r))}return t}function Nn(e,t){e&&(Qo=Ra(t.staticKeys||""),Xo=t.isReservedTag||function(){return!1},Mn(e),Pn(e,!1))}function Dn(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Mn(e){if(e.static=Rn(e),1===e.type)for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Mn(r),r.static||(e.static=!1)}}function Pn(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static)return void(e.staticRoot=!0);if(e.children)for(var n=0,r=e.children.length;n<r;n++)Pn(e.children[n],t||!!e.for)}}function Rn(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Sr(e.tag)||!Xo(e.tag)||In(e)||!Object.keys(e).every(Qo))))}function In(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function Bn(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+Fn(e[r])+",";return n.slice(0,-1)+"}"}function Fn(e){if(e){if(Array.isArray(e))return"["+e.map(Fn).join(",")+"]";if(e.modifiers){var t="",n=[];for(var r in e.modifiers)Fa[r]?t+=Fa[r]:n.push(r);n.length&&(t=Hn(n)+t);var i=Ia.test(e.value)?e.value+"($event)":e.value;return"function($event){"+t+i+"}"}return Ia.test(e.value)?e.value:"function($event){"+e.value+"}"}return"function(){}"}function Hn(e){var t=1===e.length?Un(e[0]):Array.prototype.concat.apply([],e.map(Un));return Array.isArray(t)?"if("+t.map(function(e){return"$event.keyCode!=="+e}).join("&&")+")return;":"if($event.keyCode!=="+t+")return;"}function Un(e){return parseInt(e,10)||Ba[e]||"_k("+JSON.stringify(e)+")"}function zn(e,t){e.wrapData=function(e){return"_b("+e+","+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Vn(e,t){var n=ia,r=ia=[],i=oa;oa=0,aa=t,ea=t.warn||sn,ta=cn(t.modules,"transformCode"),na=cn(t.modules,"genData"),ra=t.directives||{};var o=e?Jn(e):'_h("div")';return ia=n,oa=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Jn(e){if(e.staticRoot&&!e.staticProcessed)return qn(e);if(e.once&&!e.onceProcessed)return Kn(e);if(e.for&&!e.forProcessed)return Gn(e);if(e.if&&!e.ifProcessed)return Wn(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return nr(e);var t;if(e.component)t=rr(e.component,e);else{var n=e.plain?void 0:Yn(e),r=e.inlineTemplate?null:Xn(e);t="_h('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<ta.length;i++)t=ta[i](e,t);return t}return Xn(e)||"void 0"}function qn(e){return e.staticProcessed=!0,ia.push("with(this){return "+Jn(e)+"}"),"_m("+(ia.length-1)+(e.staticInFor?",true":"")+")"}function Kn(e){if(e.onceProcessed=!0,e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Jn(e)+","+oa++ +(t?","+t:"")+")":Jn(e)}return qn(e)}function Wn(e){var t=e.if;return e.ifProcessed=!0,"("+t+")?"+Jn(e)+":"+Zn(e)}function Zn(e){return e.elseBlock?Jn(e.elseBlock):"_e()"}function Gn(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Jn(e)+"})"}function Yn(e){var t="{",n=Qn(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.component&&(t+='tag:"'+e.tag+'",'),e.slotTarget&&(t+="slot:"+e.slotTarget+",");for(var r=0;r<na.length;r++)t+=na[r](e);if(e.attrs&&(t+="attrs:{"+ir(e.attrs)+"},"),e.props&&(t+="domProps:{"+ir(e.props)+"},"),e.events&&(t+=Bn(e.events)+","),e.nativeEvents&&(t+=Bn(e.nativeEvents,!0)+","),e.inlineTemplate){var i=e.children[0];if(1===i.type){var o=Vn(i,aa);t+="inlineTemplate:{render:function(){"+o.render+"},staticRenderFns:["+o.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function Qn(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=ra[i.name]||Ha[i.name];c&&(o=!!c(e,i,ea)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function Xn(e){if(e.children.length)return"["+e.children.map(er).join(",")+"]"}function er(e){return 1===e.type?Jn(e):tr(e)}function tr(e){return 2===e.type?e.expression:JSON.stringify(e.text)}function nr(e){var t=e.slotName||'"default"',n=Xn(e);return"_t("+t+(n?","+n:"")+")"}function rr(e,t){var n=t.inlineTemplate?null:Xn(t);return"_h("+e+","+Yn(t)+(n?","+n:"")+")"}function ir(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+r.value+","}return t.slice(0,-1)}function or(e,t){var n=hn(e.trim(),t);Nn(n,t);var r=Vn(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function ar(e,t){var n=(t.warn||sn,vn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=pn(e,"class",!1);r&&(e.classBinding=r)}function sr(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function cr(e){var t=pn(e,"style",!1);t&&(e.styleBinding=t)}function ur(e){return e.styleBinding?"style:("+e.styleBinding+"),":""}function lr(e){if(ca=e,sa=ca.length,la=fa=da=0,e.indexOf("[")<0)return{exp:e,idx:null};for(;!dr();)ua=fr(),pr(ua)?hr(ua):91===ua&&vr(ua);return{exp:e.substring(0,fa),idx:e.substring(fa+1,da)}}function fr(){return ca.charCodeAt(++la)}function dr(){return la>=sa}function pr(e){return 34===e||39===e}function vr(e){var t=1;for(fa=la;!dr();)if(e=fr(),pr(e))hr(e);else if(91===e&&t++,93===e&&t--,0===t){da=la;break}}function hr(e){for(var t=e;!dr()&&(e=fr(),e!==t););}function mr(e,t,n){pa=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;return"select"===o?br(e,r,i):"input"===o&&"checkbox"===a?gr(e,r,i):"input"===o&&"radio"===a?yr(e,r,i):_r(e,r,i),!0}function gr(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null",o=pn(e,"true-value")||"true",a=pn(e,"false-value")||"false";un(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1:_q("+t+","+o+")"),dn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function yr(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null";i=r?"_n("+i+")":i,un(e,"checked","_q("+t+","+i+")"),dn(e,"change",$r(t,i),null,!0)}function _r(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=o||Vr&&"range"===r?"change":"input",u=!o&&"range"!==r,l="input"===e.tag||"textarea"===e.tag,f=l?"$event.target.value"+(s?".trim()":""):"$event";f=a||"number"===r?"_n("+f+")":f;var d=$r(t,f);l&&u&&(d="if($event.target.composing)return;"+d),un(e,"value",l?"_s("+t+")":"("+t+")"),dn(e,c,d,null,!0)}function br(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})"+(null==e.attrsMap.multiple?"[0]":""),o=$r(t,i);dn(e,"change",o,null,!0)}function $r(e,t){var n=lr(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function wr(e,t){t.value&&un(e,"textContent","_s("+t.value+")")}function Cr(e,t){t.value&&un(e,"innerHTML","_s("+t.value+")")}function xr(e,t){return t=t?u(u({},Ka),t):Ka,or(e,t)}function kr(e,t,n){var r=(t&&t.warn||$i,t&&t.delimiters?String(t.delimiters)+e:e);if(qa[r])return qa[r];var i={},o=xr(e,t);i.render=Ar(o.render);var a=o.staticRenderFns.length;i.staticRenderFns=new Array(a);for(var s=0;s<a;s++)i.staticRenderFns[s]=Ar(o.staticRenderFns[s]);return qa[r]=i}function Ar(e){try{return new Function(e)}catch(e){return p}}function Or(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Tr,Sr=n("slot,component",!0),Er=Object.prototype.hasOwnProperty,jr=/-(\w)/g,Lr=a(function(e){return e.replace(jr,function(e,t){return t?t.toUpperCase():""})}),Nr=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Dr=/([^-])([A-Z])/g,Mr=a(function(e){return e.replace(Dr,"$1-$2").replace(Dr,"$1-$2").toLowerCase()}),Pr=Object.prototype.toString,Rr="[object Object]",Ir=function(){return!1},Br={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Ir,isUnknownElement:Ir,getTagNamespace:p,mustUseProp:Ir,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100,_isServer:!1},Fr=/[^\w.$]/,Hr="__proto__"in{},Ur="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),zr=Ur&&window.navigator.userAgent.toLowerCase(),Vr=zr&&/msie|trident/.test(zr),Jr=zr&&zr.indexOf("msie 9.0")>0,qr=zr&&zr.indexOf("edge/")>0,Kr=zr&&zr.indexOf("android")>0,Wr=zr&&/iphone|ipad|ipod|ios/.test(zr),Zr=Ur&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Gr=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve();t=function(){i.then(e),Wr&&setTimeout(p)}}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var o=1,a=new MutationObserver(e),s=document.createTextNode(String(o));a.observe(s,{characterData:!0}),t=function(){o=(o+1)%2,s.data=String(o)}}return function(e,i){var o=i?function(){e.call(i)}:e;n.push(o),r||(r=!0,t())}}();Tr="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return void 0!==this.set[e]},e.prototype.add=function(e){this.set[e]=1},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Yr=0,Qr=function(){this.id=Yr++,this.subs=[]};Qr.prototype.addSub=function(e){this.subs.push(e)},Qr.prototype.removeSub=function(e){r(this.subs,e)},Qr.prototype.depend=function(){Qr.target&&Qr.target.addDep(this)},Qr.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},Qr.target=null;var Xr=[],ei=[],ti={},ni=!1,ri=!1,ii=0,oi=0,ai=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++oi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Tr,this.newDepIds=new Tr,"function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};ai.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&A(e),w(),this.cleanupDeps(),e},ai.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ai.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},ai.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():k(this)},ai.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(!Br.errorHandler)throw e;Br.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,e,t)}}},ai.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ai.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},ai.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var si=new Tr,ci=Array.prototype,ui=Object.create(ci);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ci[e];y(ui,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var li=Object.getOwnPropertyNames(ui),fi={shouldConvert:!0,isSettingProps:!1},di=function(e){if(this.value=e,this.dep=new Qr,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){var t=Hr?T:S;t(e,ui,li),this.observeArray(e)}else this.walk(e)};di.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)j(e,t[n],e[t[n]])},di.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)E(e[t])};var pi={enumerable:!0,configurable:!0,get:p,set:p},vi=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=o,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},hi=function(){var e=new vi;return e.text="",e.isComment=!0,e},mi=null,gi={init:se,prepatch:ce,insert:ue,destroy:le},yi=Object.keys(gi),_i=0;Ce(Ae),z(Ae),we(Ae),ne(Ae),_e(Ae);var bi,$i=p,wi=Br.optionMergeStrategies;wi.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?Oe(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return Oe(t.call(this),e.call(this))}:t:e},Br._lifecycleHooks.forEach(function(e){wi[e]=Te}),Br._assetTypes.forEach(function(e){wi[e+"s"]=Se}),wi.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},wi.props=wi.methods=wi.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var Ci=function(e,t){return void 0===t?e:t},xi=Object.freeze({defineReactive:j,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Sr,remove:r,hasOwn:i,isPrimitive:o,cached:a,camelize:Lr,capitalize:Nr,hyphenate:Mr,bind:s,toArray:c,extend:u,isObject:l,isPlainObject:f,toObject:d,noop:p,no:Ir,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:Hr,inBrowser:Ur,UA:zr,isIE:Vr,isIE9:Jr,isEdge:qr,isAndroid:Kr,isIOS:Wr,devtools:Zr,nextTick:Gr,get _Set(){return Tr},mergeOptions:Le,resolveAsset:Ne,warn:$i,formatComponentName:bi,validateProp:De}),ki={name:"keep-alive",abstract:!0,created:function(){this.cache=Object.create(null)},render:function(){var e=ee(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=null==e.key?t.Ctor.cid+"::"+t.tag:e.key;this.cache[n]?e.child=this.cache[n].child:this.cache[n]=e,e.data.keepAlive=!0}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];re(n.child,"deactivated"),n.child.$destroy()}}},Ai={KeepAlive:ki};Ue(Ae),Object.defineProperty(Ae.prototype,"$isServer",{get:function(){return Br._isServer}}),Ae.version="2.0.5";var Oi,Ti=n("value,selected,checked,muted"),Si=n("contenteditable,draggable,spellcheck"),Ei=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ji="http://www.w3.org/1999/xlink",Li=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ni=function(e){return Li(e)?e.slice(6,e.length):""},Di=function(e){return null==e||e===!1},Mi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtm"},Pi=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Ri=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),Ii=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),Bi=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),Fi=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Hi=function(e){return"pre"===e},Ui=function(e){return Pi(e)||Fi(e)},zi=Object.create(null),Vi=Object.freeze({createElement:Ye,createElementNS:Qe,createTextNode:Xe,createComment:et,insertBefore:tt,removeChild:nt,appendChild:rt,parentNode:it,nextSibling:ot,tagName:at,setTextContent:st,childNodes:ct,setAttribute:ut}),Ji={create:function(e,t){lt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(lt(e,!0),lt(t))},destroy:function(e){lt(e,!0)}},qi=new vi("",{},[]),Ki=["create","update","remove","destroy"],Wi={create:mt,update:mt,destroy:function(e){mt(e,qi)}},Zi=Object.create(null),Gi=[Ji,Wi],Yi={create:bt,update:bt},Qi={create:wt,update:wt},Xi={create:Ct,update:Ct},eo={create:xt,update:xt},to=/^--/,no=function(e,t,n){to.test(t)?e.style.setProperty(t,n):e.style[io(t)]=n},ro=["Webkit","Moz","ms"],io=a(function(e){if(Oi=Oi||document.createElement("div"),e=Lr(e),"filter"!==e&&e in Oi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ro.length;n++){var r=ro[n]+t;if(r in Oi.style)return r}}),oo={create:kt,update:kt},ao=Ur&&!Jr,so="transition",co="animation",uo="transition",lo="transitionend",fo="animation",po="animationend";ao&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(uo="WebkitTransition",lo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(fo="WebkitAnimation",po="webkitAnimationEnd"));var vo=Ur&&window.requestAnimationFrame||setTimeout,ho=/\b(transform|all)(,|$)/,mo=a(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",appearActiveClass:e+"-enter-active"}}),go=Ur?{create:function(e,t){t.data.show||Mt(t)},remove:function(e,t){e.data.show?t():Pt(e,t)}}:{},yo=[Yi,Qi,Xi,eo,oo,go],_o=yo.concat(Gi),bo=ht({nodeOps:Vi,modules:_o});Jr&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Vt(e,"input")});var $o={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Bt(e,t,n.context)};r(),(Vr||qr)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type||t.modifiers.lazy||(Kr||(e.addEventListener("compositionstart",Ut),e.addEventListener("compositionend",zt)),Jr&&(e.vmodel=!0))},componentUpdated:function(e,t,n){if("select"===n.tag){Bt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return Ft(t,e.options)}):t.value!==t.oldValue&&Ft(t.value,e.options);r&&Vt(e,"change")}}},wo={bind:function(e,t,n){var r=t.value;n=Jt(n);var i=n.data&&n.data.transition;r&&i&&!Jr&&Mt(n);var o="none"===e.style.display?"":e.style.display;e.style.display=r?o:"none",e.__vOriginalDisplay=o},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=Jt(n);var o=n.data&&n.data.transition;o&&!Jr?r?(Mt(n),e.style.display=e.__vOriginalDisplay):Pt(n,function(){e.style.display="none"}):e.style.display=r?e.__vOriginalDisplay:"none"}}},Co={model:$o,show:wo},xo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String},ko={name:"transition",props:xo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(Zt(this.$vnode))return i;var o=qt(i);if(!o)return i;if(this._leaving)return Wt(e,i);var a=o.key=null==o.key||o.isStatic?"__v"+(o.tag+this._uid)+"__":o.key,s=(o.data||(o.data={})).transition=Kt(this),c=this._vnode,l=qt(c);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),l&&l.data&&l.key!==a){var f=l.data.transition=u({},s);if("out-in"===r)return this._leaving=!0,K(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()},a),Wt(e,i);if("in-out"===r){var d,p=function(){d()};K(s,"afterEnter",p,a),K(s,"enterCancelled",p,a),K(f,"delayLeave",function(e){d=e},a)}}return i}}},Ao=u({tag:String,moveClass:String},xo);delete Ao.mode;var Oo={props:Ao,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Kt(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||this.name+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(Gt),e.forEach(Yt),e.forEach(Qt);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;St(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(lo,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(lo,e),n._moveCb=null,Et(n,t))})}})}},methods:{hasMove:function(e,t){if(!ao)return!1;if(null!=this._hasMove)return this._hasMove;St(e,t);var n=Lt(e);return Et(e,t),this._hasMove=n.hasTransform}}},To={Transition:ko,TransitionGroup:Oo};Ae.config.isUnknownElement=Ze,Ae.config.isReservedTag=Ui,Ae.config.getTagNamespace=We,Ae.config.mustUseProp=Ti,u(Ae.options.directives,Co),u(Ae.options.components,To),Ae.prototype.__patch__=Br._isServer?p:bo,Ae.prototype.$mount=function(e,t){return e=e&&!Br._isServer?Ge(e):void 0,this._mount(e,t)},setTimeout(function(){Br.devtools&&Zr&&Zr.emit("init",Ae)},0);var So=!!Ur&&Xt("\n","&#10;"),Eo=document.createElement("div"),jo=/([^\s"'<>\/=]+)/,Lo=/(?:=)/,No=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Do=new RegExp("^\\s*"+jo.source+"(?:\\s*("+Lo.source+")\\s*(?:"+No.join("|")+"))?"),Mo="[a-zA-Z_][\\w\\-\\.]*",Po="((?:"+Mo+"\\:)?"+Mo+")",Ro=new RegExp("^<"+Po),Io=/^\s*(\/?)>/,Bo=new RegExp("^<\\/"+Po+"[^>]*>"),Fo=/^<!DOCTYPE [^>]+>/i,Ho=/^<!--/,Uo=/^<!\[/,zo=!1;"x".replace(/x(.)?/g,function(e,t){zo=""===t});var Vo,Jo,qo,Ko,Wo,Zo,Go,Yo,Qo,Xo,ea,ta,na,ra,ia,oa,aa,sa,ca,ua,la,fa,da,pa,va=n("script,style",!0),ha=function(e){return"lang"===e.name&&"html"!==e.value},ma=function(e,t,n){return!!va(e)||!(!t||"template"!==e||1!==n.length||!n[0].attrs.some(ha))},ga={},ya=/&lt;/g,_a=/&gt;/g,ba=/&#10;/g,$a=/&amp;/g,wa=/&quot;/g,Ca=/\{\{((?:.|\n)+?)\}\}/g,xa=/[-.*+?^${}()|[\]\/\\]/g,ka=a(function(e){var t=e[0].replace(xa,"\\$&"),n=e[1].replace(xa,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Aa=/^v-|^@|^:/,Oa=/(.*?)\s+(?:in|of)\s+(.*)/,Ta=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/,Sa=/^:|^v-bind:/,Ea=/^@|^v-on:/,ja=/:(.*)$/,La=/\.[^.]+/g,Na=/\u2028|\u2029/g,Da=a(en),Ma=/^xmlns:NS\d+/,Pa=/^NS\d+:/,Ra=a(Dn),Ia=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Ba={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Fa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;"},Ha={bind:zn,cloak:p},Ua=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),{staticKeys:["staticClass"],transformNode:ar,genData:sr}),za={transformNode:cr,genData:ur},Va=[Ua,za],Ja={model:mr,text:wr,html:Cr},qa=Object.create(null),Ka={isIE:Vr,expectHTML:!0,modules:Va,staticKeys:v(Va),directives:Ja,isReservedTag:Ui,isUnaryTag:Ri,mustUseProp:Ti,getTagNamespace:We,isPreTag:Hi},Wa=a(function(e){var t=Ge(e);return t&&t.innerHTML}),Za=Ae.prototype.$mount;return Ae.prototype.$mount=function(e,t){if(e=e&&Ge(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Wa(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Or(e));if(r){var i=kr(r,{warn:$i,shouldDecodeNewlines:So,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Za.call(this,e,t)},Ae.compile=kr,Ae});

/*
 * botui 0.3.8
 * A JS library to build the UI for your bot
 * https://botui.org
 *
 * Copyright 2019, Moin Uddin
 * Released under the MIT license.
*/

(function (root, factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.BotUI = factory(root));
    });
  } else {
    root.BotUI = factory(root);
  }
}(typeof window !== 'undefined' ? window : this, function (root, undefined) {
  "use strict";

  var BotUI = (function (id, opts) {

    opts = opts || {};

    if(!id) {
      throw Error('BotUI: Container id is required as first argument.');
    }

    if(!document.getElementById(id)) {
      throw Error('BotUI: Element with id #' + id + ' does not exist.');
    }

    if(!root.Vue && !opts.vue) {
      throw Error('BotUI: Vue is required but not found.');
    }

    var _botApp, // current vue instance.
    _options = {
      debug: false,
      fontawesome: false,
      searchselect: false
    },
    _container, // the outermost Element. Needed to scroll to bottom, for now.
    _interface = {}, // methods returned by a BotUI() instance.
    _actionResolve,
    _markDownRegex = {
      icon: /!\(([^\)]+)\)/igm, // !(icon)
      image: /!\[(.*?)\]\((.*?)\)/igm, // ![aleternate text](src)
      link: /\[([^\[]+)\]\(([^\)]+)\)(\^?)/igm // [text](link) ^ can be added at end to set the target as 'blank'
    },
    _fontAwesome = 'https://use.fontawesome.com/ea731dcb6f.js',
    _esPromisePollyfill = 'https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js', // mostly for IE
    _searchselect =  "https://unpkg.com/vue-select@2.4.0/dist/vue-select.js";

    root.Vue = root.Vue || opts.vue;

    // merge opts passed to constructor with _options
    for (var prop in _options) {
      if (opts.hasOwnProperty(prop)) {
        _options[prop] = opts[prop];
      }
    }

    if(!root.Promise && typeof Promise === "undefined" && !opts.promise) {
      loadScript(_esPromisePollyfill);
    }

    function _linkReplacer(match, $1, $2, $3) {
      var _target = $3 ? 'blank' : ''; // check if '^' sign is present with link syntax
      return "<a class='botui-message-content-link' target='" + _target + "' href='" + $2 +"'>" + $1 + "</a>";
    }

    function _parseMarkDown(text) {
      return text
                 .replace(_markDownRegex.image, "<img class='botui-message-content-image' src='$2' alt='$1' />")
                 .replace(_markDownRegex.icon, "<i class='botui-icon botui-message-content-icon fa fa-$1'></i>")
                 .replace(_markDownRegex.link, _linkReplacer);
    }

    function loadScript(src, cb) {
      var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src;

          if(cb) {
            script.onload = cb;
          }

      document.body.appendChild(script);
    }


    function onlyText(a) {
    var div = document.createElement("div");
    div.innerHTML = a;
    return div.textContent || div.innerText || "";
    }

    function _handleAction(text) {
      if(_instance.action.addMessage) {
        _interface.message.human({
          delay: 100,
          content: onlyText(text)
        });
      }
      _instance.action.show = !_instance.action.autoHide;
    }

    var _botuiComponent = {
      template: '<div class=\"botui botui-container\" v-botui-container><div class=\"botui-messages-container\"><div v-for=\"msg in messages\" class=\"botui-message\" :class=\"msg.cssClass\" v-botui-scroll><transition name=\"slide-fade\"><div v-if=\"msg.visible\"><div v-if=\"msg.photo && !msg.loading\" :class=\"[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]\"> <span :src=\"msg.photo\" :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div><div :class=\"[{human: msg.human, \'botui-message-content\': true}, msg.type]\"><span v-if=\"msg.type == \'text\'\" v-text=\"msg.content\" v-botui-markdown></span><span v-if=\"msg.type == \'html\'\" v-html=\"msg.content\"></span> <iframe v-if=\"msg.type == \'embed\'\" :src=\"msg.content\" frameborder=\"0\" allowfullscreen></iframe></div></div></transition><div v-if=\"msg.photo && msg.loading && !msg.human\" :class=\"[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]\"> <span :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div><div v-if=\"msg.loading\" class=\"botui-message-content loading\"><i class=\"dot\"></i><i class=\"dot\"></i><i class=\"dot\"></i></div></div></div><div class=\"botui-actions-container\"><transition name=\"slide-fade\"><div v-if=\"action.show\" v-botui-scroll><form v-if=\"action.type == \'text\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <div style="display: table-cell; width: 100%;padding-right:25px;"><input type=\"text\" maxlength=\"255\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\" action.text.value\" :class=\"action.text.cssClass\" required v-focus/></div> <div style="display: table-cell; width: 100%;"><button type=\"submit\" :class="\'botui-actions-buttons-button-send\'"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Send\'}}</span></button></div></form><form v-if=\"action.type == \'select\'\" class=\"botui-actions-select\" @submit.prevent=\"handle_action_select()\" :class=\"action.cssClass\"><i v-if=\"action.select.icon\" class=\"botui-icon botui-action-select-icon fa\" :class=\"\'fa-\' + action.select.icon\"></i><v-select v-if=\"action.select.searchselect && !action.select.multipleselect\" v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select><v-select v-else-if=\"action.select.searchselect && action.select.multipleselect\" multiple v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select> <select v-else v-model=\"action.select.value\" class=\"botui-actions-text-select\" :placeholder=\"action.select.placeholder\" :size=\"action.select.size\" :class=\"action.select.cssClass\" required v-focus><option v-for=\"option in action.select.options\" :class=\"action.select.optionClass\" v-bind:value=\"option.value\" :disabled=\"(option.value == \'\')?true:false\" :selected=\"(action.select.value == option.value)?\'selected\':\'\'\"> {{ option.text }}</option></select> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.select.button, \'botui-actions-select-submit\': !action.select.button}\"><i v-if=\"action.select.button && action.select.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.select.button.icon\"></i> <span>{{(action.select.button && action.select.button.label) || \'Ok\'}}</span></button></form><div v-if=\"action.type == \'button\'\" class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\"><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div><form v-if=\"action.type == \'buttontext\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" maxlength=\"255\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\"action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class="\'botui-actions-buttons-button-send\'"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Send\'}}</span></button><div class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\" autofocus><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div></form></div></transition></div></div>', // replaced by HTML template during build. see Gulpfile.js
      data: function () {
        return {
          action: {
            text: {
              size: 30,
              placeholder: 'Write here ..'
            },
            button: {},
            show: false,
            type: 'text',
            autoHide: true,
            addMessage: true
          },
          messages: []
        };
      },
      computed: {
        isMobile: function () {
          return root.innerWidth && root.innerWidth <= 768;
        }
      },
    	methods: {
    		handle_action_button: function (button) {
          for (var i = 0; i < this.action.button.buttons.length; i++) {
            if(this.action.button.buttons[i].value == button.value && typeof(this.action.button.buttons[i].event) == 'function') {
              this.action.button.buttons[i].event(button);
              if (this.action.button.buttons[i].actionStop) return false;
              break;
            }
          }

          _handleAction(button.text);

          var defaultActionObj = {
            type: 'button',
            text: button.text,
            value: button.value
          };

          for (var eachProperty in button) {
            if (button.hasOwnProperty(eachProperty)) {
              if (eachProperty !== 'type' && eachProperty !== 'text' && eachProperty !== 'value') {
                defaultActionObj[eachProperty] = button[eachProperty];
              }
            }
          }

          _actionResolve(defaultActionObj);
    		},
    		handle_action_text: function () {
    			if(!this.action.text.value) return;
          _handleAction(this.action.text.value);
    			_actionResolve({
            type: 'text',
            value: onlyText(this.action.text.value)
          });
    			this.action.text.value = '';
    		},
        handle_action_select: function () {
          if(this.action.select.searchselect && !this.action.select.multipleselect) {
            if(!this.action.select.value.value) return;
            _handleAction(this.action.select.value[this.action.select.label]);
            _actionResolve({
              type: 'text',
              value: this.action.select.value.value,
              text: this.action.select.value.text,
              obj: this.action.select.value
            });
          }
          if(this.action.select.searchselect && this.action.select.multipleselect) {
            if(!this.action.select.value) return;
            var values = new Array();
            var labels = new Array();
            for (var i = 0; i < this.action.select.value.length; i++) {
              values.push(this.action.select.value[i].value);
              labels.push(this.action.select.value[i][this.action.select.label]);
            }
            _handleAction(labels.join(', '));
            _actionResolve({
              type: 'text',
              value: values.join(', '),
              text: labels.join(', '),
              obj: this.action.select.value
            });
          }
          else {
            if(!this.action.select.value) return;
            for (var i = 0; i < this.action.select.options.length; i++) { // Find select title
              if (this.action.select.options[i].value == this.action.select.value) {
                _handleAction(this.action.select.options[i].text);
                _actionResolve({
                  type: 'text',
                  value: this.action.select.value,
                  text: this.action.select.options[i].text
                });
              }
            }
          }
        }
    	}
    };

    root.Vue.directive('botui-markdown', function (el, binding) {
      if(binding.value == 'false') return; // v-botui-markdown="false"
      el.innerHTML = _parseMarkDown(el.textContent);
      _container.scrollTop = _container.scrollHeight;
    });

    root.Vue.directive('botui-scroll', {
      inserted: function (el) {
        _container.scrollTop = _container.scrollHeight;
      }
    });

    root.Vue.directive('focus', {
      inserted: function (el) {
        el.focus();
        _container.scrollTop = _container.scrollHeight;
      }
    });

    root.Vue.directive('botui-container', {
      inserted: function (el) {
        _container = el;
      }
    });

    _botApp = new root.Vue({
      components: {
        'bot-ui': _botuiComponent
      }
    }).$mount('#' + id);

    var _instance = _botApp.$children[0]; // to access the component's data

    function _addMessage(_msg) {

      if(!_msg.loading && !_msg.content) {
        throw Error('BotUI: "content" is required in a non-loading message object.');
      }

      _msg.type = _msg.type || 'text';
      _msg.visible = (_msg.delay || _msg.loading) ? false : true;
      var _index = _instance.messages.push(_msg) - 1;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if(_msg.delay) {
            _msg.visible = true;

            if(_msg.loading) {
              _msg.loading = false;
            }
          }

          resolve(_index);
        }, _msg.delay || 0);

        setTimeout(function() {
        _container.scrollTop = _container.scrollHeight;

        }, _msg.delay + 50 || 50);
      });
    }

    function _checkOpts(_opts) {
      if(typeof _opts === 'string') {
        _opts = {
          content: _opts
        };
      }
      return _opts || {};
    }

    _interface.message =  {
      add: function (addOpts) {
        return _addMessage( _checkOpts(addOpts) );
      },
      bot: function (addOpts) {
        addOpts = _checkOpts(addOpts);
        return _addMessage(addOpts);
      },
      human: function (addOpts) {
        addOpts = _checkOpts(addOpts);
        addOpts.human = true;
        return _addMessage(addOpts);
      },
      get: function (index) {
        return Promise.resolve(_instance.messages[index]);
      },
      remove: function (index) {
        _instance.messages.splice(index, 1);
        return Promise.resolve();
      },
      update: function (index, msg) { // only content can be updated, not the message type.
        var _msg = _instance.messages[index];
        _msg.content = msg.content;
        _msg.visible = !msg.loading;
        _msg.loading = !!msg.loading;
        return Promise.resolve(msg.content);
      },
      removeAll: function () {
        _instance.messages.splice(0, _instance.messages.length);
        return Promise.resolve();
      }
    };

    function mergeAtoB(objA, objB) {
      for (var prop in objA) {
        if (!objB.hasOwnProperty(prop)) {
          objB[prop] = objA[prop];
        }
      }
    }

    function _checkAction(_opts) {
      if(!_opts.action && !_opts.actionButton  && !_opts.actionText) {
        throw Error('BotUI: "action" property is required.');
      }
    }

    function _showActions(_opts) {

      _checkAction(_opts);

      mergeAtoB({
        type: 'text',
        cssClass: '',
        autoHide: true,
        addMessage: false
      }, _opts);

      _instance.action.type = _opts.type;
      _instance.action.cssClass = _opts.cssClass;
      _instance.action.autoHide = _opts.autoHide;
      _instance.action.addMessage = _opts.addMessage;

      return new Promise(function(resolve, reject) {
        _actionResolve = resolve; // resolved when action is performed, i.e: button clicked, text submitted, etc.
        setTimeout(function () {
          _instance.action.show = true;

        }, _opts.delay || 0);
      });
    };

    _interface.action = {
      show: _showActions,
      hide: function () {
        _instance.action.show = false;
        return Promise.resolve();
      },
      text: function (_opts) {
        _checkAction(_opts);
        _instance.action.text = _opts.action;
        return _showActions(_opts);
      },
      button: function (_opts) {
        _checkAction(_opts);
        _opts.type = 'button';
        _instance.action.button.buttons = _opts.action;
        return _showActions(_opts);
      },
      select: function (_opts) {
        _checkAction(_opts);
        _opts.type = 'select';
        _opts.action.label = _opts.action.label || 'text';
        _opts.action.value = _opts.action.value || '';
        _opts.action.searchselect = typeof _opts.action.searchselect !== 'undefined' ? _opts.action.searchselect : _options.searchselect;
        _opts.action.multipleselect = _opts.action.multipleselect || false;
        if (_opts.action.searchselect && typeof(_opts.action.value) == 'string') {
          if (!_opts.action.multipleselect) {
            for (var i = 0; i < _opts.action.options.length; i++) { // Find object
              if (_opts.action.options[i].value == _opts.action.value) {
                _opts.action.value = _opts.action.options[i]
              }
            }
          }
          else {
            var vals = _opts.action.value.split(',');
            _opts.action.value = new Array();
            for (var i = 0; i < _opts.action.options.length; i++) { // Find object
              for (var j = 0; j < vals.length; j++) { // Search values
                if (_opts.action.options[i].value == vals[j]) {
                  _opts.action.value.push(_opts.action.options[i]);
                }
              }
            }
          }
        }
        if (!_opts.action.searchselect) { _opts.action.options.unshift({value:'',text : _opts.action.placeholder}); }
        _instance.action.button = _opts.action.button;
        _instance.action.select = _opts.action;
        return _showActions(_opts);
      },
      buttontext: function (_opts) {
        _checkAction(_opts);
        _opts.type = 'buttontext';
        _instance.action.button.buttons = _opts.actionButton;
        _instance.action.text = _opts.actionText;
        return _showActions(_opts);
      }
    };

    if(_options.fontawesome) {
      loadScript(_fontAwesome);
    }

    if(_options.searchselect) {
      loadScript(_searchselect, function() {
        Vue.component('v-select', VueSelect.VueSelect);
      });
    }

    if(_options.debug) {
      _interface._botApp = _botApp; // current Vue instance
    }

    return _interface;
  });

  return BotUI;

}));
