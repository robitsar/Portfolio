"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[1945],{11945:(e,t,n)=>{n.r(t);n.d(t,{crystal:()=>Z});function r(e,t){return new RegExp((t?"":"^")+"(?:"+e.join("|")+")"+(t?"$":"\\b"))}function a(e,t,n){n.tokenize.push(e);return e(t,n)}var u=/^(?:[-+/%|&^]|\*\*?|[<>]{2})/;var i=/^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/;var f=/^(?:\[\][?=]?)/;var s=/^(?:\.(?:\.{2})?|->|[?:])/;var c=/^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;var o=/^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;var l=r(["abstract","alias","as","asm","begin","break","case","class","def","do","else","elsif","end","ensure","enum","extend","for","fun","if","include","instance_sizeof","lib","macro","module","next","of","out","pointerof","private","protected","rescue","return","require","select","sizeof","struct","super","then","type","typeof","uninitialized","union","unless","until","when","while","with","yield","__DIR__","__END_LINE__","__FILE__","__LINE__"]);var m=r(["true","false","nil","self"]);var p=["def","fun","macro","class","module","struct","lib","enum","union","do","for"];var h=r(p);var k=["if","unless","case","while","until","begin","then"];var d=r(k);var F=["end","else","elsif","rescue","ensure"];var _=r(F);var v=["\\)","\\}","\\]"];var z=new RegExp("^(?:"+v.join("|")+")$");var b={def:S,fun:S,macro:I,class:A,module:A,struct:A,lib:A,enum:A,union:A};var g={"[":"]","{":"}","(":")","<":">"};function w(e,t){if(e.eatSpace()){return null}if(t.lastToken!="\\"&&e.match("{%",false)){return a(x("%","%"),e,t)}if(t.lastToken!="\\"&&e.match("{{",false)){return a(x("{","}"),e,t)}if(e.peek()=="#"){e.skipToEnd();return"comment"}var n;if(e.match(c)){e.eat(/[?!]/);n=e.current();if(e.eat(":")){return"atom"}else if(t.lastToken=="."){return"property"}else if(l.test(n)){if(h.test(n)){if(!(n=="fun"&&t.blocks.indexOf("lib")>=0)&&!(n=="def"&&t.lastToken=="abstract")){t.blocks.push(n);t.currentIndent+=1}}else if((t.lastStyle=="operator"||!t.lastStyle)&&d.test(n)){t.blocks.push(n);t.currentIndent+=1}else if(n=="end"){t.blocks.pop();t.currentIndent-=1}if(b.hasOwnProperty(n)){t.tokenize.push(b[n])}return"keyword"}else if(m.test(n)){return"atom"}return"variable"}if(e.eat("@")){if(e.peek()=="["){return a(y("[","]","meta"),e,t)}e.eat("@");e.match(c)||e.match(o);return"propertyName"}if(e.match(o)){return"tag"}if(e.eat(":")){if(e.eat('"')){return a(E('"',"atom",false),e,t)}else if(e.match(c)||e.match(o)||e.match(u)||e.match(i)||e.match(f)){return"atom"}e.eat(":");return"operator"}if(e.eat('"')){return a(E('"',"string",true),e,t)}if(e.peek()=="%"){var r="string";var p=true;var k;if(e.match("%r")){r="string.special";k=e.next()}else if(e.match("%w")){p=false;k=e.next()}else if(e.match("%q")){p=false;k=e.next()}else{if(k=e.match(/^%([^\w\s=])/)){k=k[1]}else if(e.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/)){return"meta"}else if(e.eat("%")){return"operator"}}if(g.hasOwnProperty(k)){k=g[k]}return a(E(k,r,p),e,t)}if(n=e.match(/^<<-('?)([A-Z]\w*)\1/)){return a(T(n[2],!n[1]),e,t)}if(e.eat("'")){e.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/);e.eat("'");return"atom"}if(e.eat("0")){if(e.eat("x")){e.match(/^[0-9a-fA-F_]+/)}else if(e.eat("o")){e.match(/^[0-7_]+/)}else if(e.eat("b")){e.match(/^[01_]+/)}return"number"}if(e.eat(/^\d/)){e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/);return"number"}if(e.match(u)){e.eat("=");return"operator"}if(e.match(i)||e.match(s)){return"operator"}if(n=e.match(/[({[]/,false)){n=n[0];return a(y(n,g[n],null),e,t)}if(e.eat("\\")){e.next();return"meta"}e.next();return null}function y(e,t,n,r){return function(a,u){if(!r&&a.match(e)){u.tokenize[u.tokenize.length-1]=y(e,t,n,true);u.currentIndent+=1;return n}var i=w(a,u);if(a.current()===t){u.tokenize.pop();u.currentIndent-=1;i=n}return i}}function x(e,t,n){return function(r,a){if(!n&&r.match("{"+e)){a.currentIndent+=1;a.tokenize[a.tokenize.length-1]=x(e,t,true);return"meta"}if(r.match(t+"}")){a.currentIndent-=1;a.tokenize.pop();return"meta"}return w(r,a)}}function I(e,t){if(e.eatSpace()){return null}var n;if(n=e.match(c)){if(n=="def"){return"keyword"}e.eat(/[?!]/)}t.tokenize.pop();return"def"}function S(e,t){if(e.eatSpace()){return null}if(e.match(c)){e.eat(/[!?]/)}else{e.match(u)||e.match(i)||e.match(f)}t.tokenize.pop();return"def"}function A(e,t){if(e.eatSpace()){return null}e.match(o);t.tokenize.pop();return"def"}function E(e,t,n){return function(r,a){var u=false;while(r.peek()){if(!u){if(r.match("{%",false)){a.tokenize.push(x("%","%"));return t}if(r.match("{{",false)){a.tokenize.push(x("{","}"));return t}if(n&&r.match("#{",false)){a.tokenize.push(y("#{","}","meta"));return t}var i=r.next();if(i==e){a.tokenize.pop();return t}u=n&&i=="\\"}else{r.next();u=false}}return t}}function T(e,t){return function(n,r){if(n.sol()){n.eatSpace();if(n.match(e)){r.tokenize.pop();return"string"}}var a=false;while(n.peek()){if(!a){if(n.match("{%",false)){r.tokenize.push(x("%","%"));return"string"}if(n.match("{{",false)){r.tokenize.push(x("{","}"));return"string"}if(t&&n.match("#{",false)){r.tokenize.push(y("#{","}","meta"));return"string"}a=t&&n.next()=="\\"}else{n.next();a=false}}return"string"}}const Z={name:"crystal",startState:function(){return{tokenize:[w],currentIndent:0,lastToken:null,lastStyle:null,blocks:[]}},token:function(e,t){var n=t.tokenize[t.tokenize.length-1](e,t);var r=e.current();if(n&&n!="comment"){t.lastToken=r;t.lastStyle=n}return n},indent:function(e,t,n){t=t.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g,"");if(_.test(t)||z.test(t)){return n.unit*(e.currentIndent-1)}return n.unit*e.currentIndent},languageData:{indentOnInput:r(v.concat(F),true),commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=1945.dd876fc4110972ab9979.js.map?v=dd876fc4110972ab9979