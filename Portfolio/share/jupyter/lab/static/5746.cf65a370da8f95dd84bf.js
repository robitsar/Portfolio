"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[5746],{67476:function(e,r,t){var a=this&&this.__values||function(e){var r=typeof Symbol==="function"&&Symbol.iterator,t=r&&e[r],a=0;if(t)return t.call(e);if(e&&typeof e.length==="number")return{next:function(){if(e&&a>=e.length)e=void 0;return{value:e&&e[a++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:true});r.MathJax=r.combineWithMathJax=r.combineDefaults=r.combineConfig=r.isObject=void 0;var n=t(73132);function o(e){return typeof e==="object"&&e!==null}r.isObject=o;function i(e,r){var t,n;try{for(var s=a(Object.keys(r)),l=s.next();!l.done;l=s.next()){var f=l.value;if(f==="__esModule")continue;if(o(e[f])&&o(r[f])&&!(r[f]instanceof Promise)){i(e[f],r[f])}else if(r[f]!==null&&r[f]!==undefined){e[f]=r[f]}}}catch(c){t={error:c}}finally{try{if(l&&!l.done&&(n=s.return))n.call(s)}finally{if(t)throw t.error}}return e}r.combineConfig=i;function s(e,r,t){var n,i;if(!e[r]){e[r]={}}e=e[r];try{for(var l=a(Object.keys(t)),f=l.next();!f.done;f=l.next()){var c=f.value;if(o(e[c])&&o(t[c])){s(e,c,t[c])}else if(e[c]==null&&t[c]!=null){e[c]=t[c]}}}catch(u){n={error:u}}finally{try{if(f&&!f.done&&(i=l.return))i.call(l)}finally{if(n)throw n.error}}return e}r.combineDefaults=s;function l(e){return i(r.MathJax,e)}r.combineWithMathJax=l;if(typeof t.g.MathJax==="undefined"){t.g.MathJax={}}if(!t.g.MathJax.version){t.g.MathJax={version:n.VERSION,_:{},config:t.g.MathJax}}r.MathJax=t.g.MathJax},18457:function(e,r,t){var a="/";var n=this&&this.__values||function(e){var r=typeof Symbol==="function"&&Symbol.iterator,t=r&&e[r],a=0;if(t)return t.call(e);if(e&&typeof e.length==="number")return{next:function(){if(e&&a>=e.length)e=void 0;return{value:e&&e[a++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};var o,i;Object.defineProperty(r,"__esModule",{value:true});r.CONFIG=r.MathJax=r.Loader=r.PathFilters=r.PackageError=r.Package=void 0;var s=t(67476);var l=t(91777);var f=t(91777);Object.defineProperty(r,"Package",{enumerable:true,get:function(){return f.Package}});Object.defineProperty(r,"PackageError",{enumerable:true,get:function(){return f.PackageError}});var c=t(64905);r.PathFilters={source:function(e){if(r.CONFIG.source.hasOwnProperty(e.name)){e.name=r.CONFIG.source[e.name]}return true},normalize:function(e){var r=e.name;if(!r.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i)){e.name="[mathjax]/"+r.replace(/^\.\//,"")}if(e.addExtension&&!r.match(/\.[^\/]+$/)){e.name+=".js"}return true},prefix:function(e){var t;while(t=e.name.match(/^\[([^\]]*)\]/)){if(!r.CONFIG.paths.hasOwnProperty(t[1]))break;e.name=r.CONFIG.paths[t[1]]+e.name.substr(t[0].length)}return true}};var u;(function(e){var t=s.MathJax.version;e.versions=new Map;function o(){var e,r;var t=[];for(var a=0;a<arguments.length;a++){t[a]=arguments[a]}if(t.length===0){t=Array.from(l.Package.packages.keys())}var o=[];try{for(var i=n(t),s=i.next();!s.done;s=i.next()){var f=s.value;var c=l.Package.packages.get(f)||new l.Package(f,true);o.push(c.promise)}}catch(u){e={error:u}}finally{try{if(s&&!s.done&&(r=i.return))r.call(i)}finally{if(e)throw e.error}}return Promise.all(o)}e.ready=o;function i(){var t,a;var o=[];for(var i=0;i<arguments.length;i++){o[i]=arguments[i]}if(o.length===0){return Promise.resolve()}var s=[];var f=function(t){var a=l.Package.packages.get(t);if(!a){a=new l.Package(t);a.provides(r.CONFIG.provides[t])}a.checkNoLoad();s.push(a.promise.then((function(){if(!r.CONFIG.versionWarnings)return;if(a.isLoaded&&!e.versions.has(l.Package.resolvePath(t))){console.warn("No version information available for component ".concat(t))}})))};try{for(var c=n(o),u=c.next();!u.done;u=c.next()){var d=u.value;f(d)}}catch(h){t={error:h}}finally{try{if(u&&!u.done&&(a=c.return))a.call(c)}finally{if(t)throw t.error}}l.Package.loadAll();return Promise.all(s)}e.load=i;function f(){var e,t;var a=[];for(var o=0;o<arguments.length;o++){a[o]=arguments[o]}try{for(var i=n(a),s=i.next();!s.done;s=i.next()){var f=s.value;var c=l.Package.packages.get(f);if(!c){c=new l.Package(f,true);c.provides(r.CONFIG.provides[f])}c.loaded()}}catch(u){e={error:u}}finally{try{if(s&&!s.done&&(t=i.return))t.call(i)}finally{if(e)throw e.error}}}e.preLoad=f;function u(){if(typeof r.MathJax.startup!=="undefined"){r.MathJax.config.startup.ready()}}e.defaultReady=u;function d(){var e=a+"/../../es5";if(typeof document!=="undefined"){var r=document.currentScript||document.getElementById("MathJax-script");if(r){e=r.src.replace(/\/[^\/]*$/,"")}}return e}e.getRoot=d;function h(a,n,o){e.versions.set(l.Package.resolvePath(a),t);if(r.CONFIG.versionWarnings&&n!==t){console.warn("Component ".concat(a," uses ").concat(n," of MathJax; version in use is ").concat(t));return true}return false}e.checkVersion=h;e.pathFilters=new c.FunctionList;e.pathFilters.add(r.PathFilters.source,0);e.pathFilters.add(r.PathFilters.normalize,10);e.pathFilters.add(r.PathFilters.prefix,20)})(u=r.Loader||(r.Loader={}));r.MathJax=s.MathJax;if(typeof r.MathJax.loader==="undefined"){(0,s.combineDefaults)(r.MathJax.config,"loader",{paths:{mathjax:u.getRoot()},source:{},dependencies:{},provides:{},load:[],ready:u.defaultReady.bind(u),failed:function(e){return console.log("MathJax(".concat(e.package||"?","): ").concat(e.message))},require:null,pathFilters:[],versionWarnings:true});(0,s.combineWithMathJax)({loader:u});try{for(var d=n(r.MathJax.config.loader.pathFilters),h=d.next();!h.done;h=d.next()){var p=h.value;if(Array.isArray(p)){u.pathFilters.add(p[0],p[1])}else{u.pathFilters.add(p)}}}catch(v){o={error:v}}finally{try{if(h&&!h.done&&(i=d.return))i.call(d)}finally{if(o)throw o.error}}}r.CONFIG=r.MathJax.config.loader},91777:function(e,r,t){var a=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t))e[t]=r[t]};return e(r,t)};return function(r,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function a(){this.constructor=r}r.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}}();var n=this&&this.__values||function(e){var r=typeof Symbol==="function"&&Symbol.iterator,t=r&&e[r],a=0;if(t)return t.call(e);if(e&&typeof e.length==="number")return{next:function(){if(e&&a>=e.length)e=void 0;return{value:e&&e[a++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};var o=this&&this.__read||function(e,r){var t=typeof Symbol==="function"&&e[Symbol.iterator];if(!t)return e;var a=t.call(e),n,o=[],i;try{while((r===void 0||r-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(s){i={error:s}}finally{try{if(n&&!n.done&&(t=a["return"]))t.call(a)}finally{if(i)throw i.error}}return o};var i=this&&this.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var a=0,n=r.length,o;a<n;a++){if(o||!(a in r)){if(!o)o=Array.prototype.slice.call(r,0,a);o[a]=r[a]}}return e.concat(o||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:true});r.Package=r.PackageError=void 0;var s=t(18457);var l=function(e){a(r,e);function r(r,t){var a=e.call(this,r)||this;a.package=t;return a}return r}(Error);r.PackageError=l;var f=function(){function e(r,t){if(t===void 0){t=false}this.isLoaded=false;this.isLoading=false;this.hasFailed=false;this.dependents=[];this.dependencies=[];this.dependencyCount=0;this.provided=[];this.name=r;this.noLoad=t;e.packages.set(r,this);this.promise=this.makePromise(this.makeDependencies())}Object.defineProperty(e.prototype,"canLoad",{get:function(){return this.dependencyCount===0&&!this.noLoad&&!this.isLoading&&!this.hasFailed},enumerable:false,configurable:true});e.resolvePath=function(e,r){if(r===void 0){r=true}var t={name:e,original:e,addExtension:r};s.Loader.pathFilters.execute(t);return t.name};e.loadAll=function(){var e,r;try{for(var t=n(this.packages.values()),a=t.next();!a.done;a=t.next()){var o=a.value;if(o.canLoad){o.load()}}}catch(i){e={error:i}}finally{try{if(a&&!a.done&&(r=t.return))r.call(t)}finally{if(e)throw e.error}}};e.prototype.makeDependencies=function(){var r,t;var a=[];var l=e.packages;var f=this.noLoad;var c=this.name;var u=[];if(s.CONFIG.dependencies.hasOwnProperty(c)){u.push.apply(u,i([],o(s.CONFIG.dependencies[c]),false))}else if(c!=="core"){u.push("core")}try{for(var d=n(u),h=d.next();!h.done;h=d.next()){var p=h.value;var v=l.get(p)||new e(p,f);if(this.dependencies.indexOf(v)<0){v.addDependent(this,f);this.dependencies.push(v);if(!v.isLoaded){this.dependencyCount++;a.push(v.promise)}}}}catch(y){r={error:y}}finally{try{if(h&&!h.done&&(t=d.return))t.call(d)}finally{if(r)throw r.error}}return a};e.prototype.makePromise=function(e){var r=this;var t=new Promise((function(e,t){r.resolve=e;r.reject=t}));var a=s.CONFIG[this.name]||{};if(a.ready){t=t.then((function(e){return a.ready(r.name)}))}if(e.length){e.push(t);t=Promise.all(e).then((function(e){return e.join(", ")}))}if(a.failed){t.catch((function(e){return a.failed(new l(e,r.name))}))}return t};e.prototype.load=function(){if(!this.isLoaded&&!this.isLoading&&!this.noLoad){this.isLoading=true;var r=e.resolvePath(this.name);if(s.CONFIG.require){this.loadCustom(r)}else{this.loadScript(r)}}};e.prototype.loadCustom=function(e){var r=this;try{var t=s.CONFIG.require(e);if(t instanceof Promise){t.then((function(){return r.checkLoad()})).catch((function(t){return r.failed("Can't load \""+e+'"\n'+t.message.trim())}))}else{this.checkLoad()}}catch(a){this.failed(a.message)}};e.prototype.loadScript=function(e){var r=this;var t=document.createElement("script");t.src=e;t.charset="UTF-8";t.onload=function(e){return r.checkLoad()};t.onerror=function(t){return r.failed("Can't load \""+e+'"')};document.head.appendChild(t)};e.prototype.loaded=function(){var e,r,t,a;this.isLoaded=true;this.isLoading=false;try{for(var o=n(this.dependents),i=o.next();!i.done;i=o.next()){var s=i.value;s.requirementSatisfied()}}catch(u){e={error:u}}finally{try{if(i&&!i.done&&(r=o.return))r.call(o)}finally{if(e)throw e.error}}try{for(var l=n(this.provided),f=l.next();!f.done;f=l.next()){var c=f.value;c.loaded()}}catch(d){t={error:d}}finally{try{if(f&&!f.done&&(a=l.return))a.call(l)}finally{if(t)throw t.error}}this.resolve(this.name)};e.prototype.failed=function(e){this.hasFailed=true;this.isLoading=false;this.reject(new l(e,this.name))};e.prototype.checkLoad=function(){var e=this;var r=s.CONFIG[this.name]||{};var t=r.checkReady||function(){return Promise.resolve()};t().then((function(){return e.loaded()})).catch((function(r){return e.failed(r)}))};e.prototype.requirementSatisfied=function(){if(this.dependencyCount){this.dependencyCount--;if(this.canLoad){this.load()}}};e.prototype.provides=function(r){var t,a;if(r===void 0){r=[]}try{for(var o=n(r),i=o.next();!i.done;i=o.next()){var l=i.value;var f=e.packages.get(l);if(!f){if(!s.CONFIG.dependencies[l]){s.CONFIG.dependencies[l]=[]}s.CONFIG.dependencies[l].push(l);f=new e(l,true);f.isLoading=true}this.provided.push(f)}}catch(c){t={error:c}}finally{try{if(i&&!i.done&&(a=o.return))a.call(o)}finally{if(t)throw t.error}}};e.prototype.addDependent=function(e,r){this.dependents.push(e);if(!r){this.checkNoLoad()}};e.prototype.checkNoLoad=function(){var e,r;if(this.noLoad){this.noLoad=false;try{for(var t=n(this.dependencies),a=t.next();!a.done;a=t.next()){var o=a.value;o.checkNoLoad()}}catch(i){e={error:i}}finally{try{if(a&&!a.done&&(r=t.return))r.call(t)}finally{if(e)throw e.error}}}};e.packages=new Map;return e}();r.Package=f},5746:function(e,r,t){var a=this&&this.__values||function(e){var r=typeof Symbol==="function"&&Symbol.iterator,t=r&&e[r],a=0;if(t)return t.call(e);if(e&&typeof e.length==="number")return{next:function(){if(e&&a>=e.length)e=void 0;return{value:e&&e[a++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};var n=this&&this.__read||function(e,r){var t=typeof Symbol==="function"&&e[Symbol.iterator];if(!t)return e;var a=t.call(e),n,o=[],i;try{while((r===void 0||r-- >0)&&!(n=a.next()).done)o.push(n.value)}catch(s){i={error:s}}finally{try{if(n&&!n.done&&(t=a["return"]))t.call(a)}finally{if(i)throw i.error}}return o};var o=this&&this.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var a=0,n=r.length,o;a<n;a++){if(o||!(a in r)){if(!o)o=Array.prototype.slice.call(r,0,a);o[a]=r[a]}}return e.concat(o||Array.prototype.slice.call(r))};var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:true});r.RequireConfiguration=r.options=r.RequireMethods=r.RequireLoad=void 0;var s=t(23644);var l=t(92715);var f=i(t(48406));var c=t(67476);var u=t(91777);var d=t(18457);var h=t(90786);var p=t(36059);var v=c.MathJax.config;function y(e,r){var t;var a=e.parseOptions.options.require;var n=e.parseOptions.packageData.get("require").required;var o=r.substr(a.prefix.length);if(n.indexOf(o)<0){n.push(o);g(e,d.CONFIG.dependencies[r]);var i=s.ConfigurationHandler.get(o);if(i){var l=v[r]||{};if(i.options&&Object.keys(i.options).length===1&&i.options[o]){l=(t={},t[o]=l,t)}e.configuration.add(o,e,l);var f=e.parseOptions.packageData.get("require").configured;if(i.preprocessors.length&&!f.has(o)){f.set(o,true);h.mathjax.retryAfter(Promise.resolve())}}}}function g(e,r){var t,n;if(r===void 0){r=[]}var o=e.parseOptions.options.require.prefix;try{for(var i=a(r),s=i.next();!s.done;s=i.next()){var l=s.value;if(l.substr(0,o.length)===o){y(e,l)}}}catch(f){t={error:f}}finally{try{if(s&&!s.done&&(n=i.return))n.call(i)}finally{if(t)throw t.error}}}function m(e,r){var t=e.options.require;var a=t.allow;var n=(r.substr(0,1)==="["?"":t.prefix)+r;var o=a.hasOwnProperty(n)?a[n]:a.hasOwnProperty(r)?a[r]:t.defaultAllow;if(!o){throw new f.default("BadRequire",'Extension "%1" is not allowed to be loaded',n)}if(u.Package.packages.has(n)){y(e.configuration.packageData.get("require").jax,n)}else{h.mathjax.retryAfter(d.Loader.load(n))}}r.RequireLoad=m;function x(e,r){r.parseOptions.packageData.set("require",{jax:r,required:o([],n(r.options.packages),false),configured:new Map});var t=r.parseOptions.options.require;var a=t.prefix;if(a.match(/[^_a-zA-Z0-9]/)){throw Error("Illegal characters used in \\require prefix")}if(!d.CONFIG.paths[a]){d.CONFIG.paths[a]="[mathjax]/input/tex/extensions"}t.prefix="["+a+"]/"}r.RequireMethods={Require:function(e,r){var t=e.GetArgument(r);if(t.match(/[^_a-zA-Z0-9]/)||t===""){throw new f.default("BadPackageName","Argument for %1 is not a valid package name",r)}m(e,t)}};r.options={require:{allow:(0,p.expandable)({base:false,"all-packages":false,autoload:false,configmacros:false,tagformat:false,setoptions:false}),defaultAllow:true,prefix:"tex"}};new l.CommandMap("require",{require:"Require"},r.RequireMethods);r.RequireConfiguration=s.Configuration.create("require",{handler:{macro:["require"]},config:x,options:r.options})}}]);
//# sourceMappingURL=5746.cf65a370da8f95dd84bf.js.map?v=cf65a370da8f95dd84bf