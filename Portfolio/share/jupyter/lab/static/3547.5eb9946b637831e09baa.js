"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[3547],{43547:(e,t,n)=>{n.r(t);n.d(t,{blockComment:()=>y,blockUncomment:()=>k,copyLineDown:()=>zt,copyLineUp:()=>Ht,cursorCharBackward:()=>fe,cursorCharForward:()=>ue,cursorCharLeft:()=>ae,cursorCharRight:()=>ce,cursorDocEnd:()=>yt,cursorDocStart:()=>gt,cursorGroupBackward:()=>ge,cursorGroupForward:()=>pe,cursorGroupLeft:()=>he,cursorGroupRight:()=>me,cursorLineBoundaryBackward:()=>Re,cursorLineBoundaryForward:()=>Ie,cursorLineBoundaryLeft:()=>Ve,cursorLineBoundaryRight:()=>Ue,cursorLineDown:()=>xe,cursorLineEnd:()=>Ge,cursorLineStart:()=>Ne,cursorLineUp:()=>De,cursorMatchingBracket:()=>Fe,cursorPageDown:()=>Oe,cursorPageUp:()=>be,cursorSubwordBackward:()=>ve,cursorSubwordForward:()=>we,cursorSyntaxLeft:()=>Ce,cursorSyntaxRight:()=>Be,defaultKeymap:()=>rn,deleteCharBackward:()=>xt,deleteCharForward:()=>Lt,deleteGroupBackward:()=>bt,deleteGroupForward:()=>Ot,deleteLine:()=>jt,deleteToLineEnd:()=>Tt,deleteToLineStart:()=>It,deleteTrailingWhitespace:()=>Rt,emacsStyleKeymap:()=>tn,history:()=>T,historyField:()=>I,historyKeymap:()=>te,indentLess:()=>Zt,indentMore:()=>Yt,indentSelection:()=>Xt,indentWithTab:()=>on,insertBlankLine:()=>Kt,insertNewline:()=>_t,insertNewlineAndIndent:()=>qt,insertTab:()=>en,invertedEffects:()=>L,isolateHistory:()=>x,lineComment:()=>m,lineUncomment:()=>p,moveLineDown:()=>Ft,moveLineUp:()=>Jt,redo:()=>U,redoDepth:()=>P,redoSelection:()=>G,selectAll:()=>vt,selectCharBackward:()=>qe,selectCharForward:()=>$e,selectCharLeft:()=>je,selectCharRight:()=>_e,selectDocEnd:()=>wt,selectDocStart:()=>kt,selectGroupBackward:()=>Ye,selectGroupForward:()=>Xe,selectGroupLeft:()=>We,selectGroupRight:()=>Qe,selectLine:()=>St,selectLineBoundaryBackward:()=>ft,selectLineBoundaryForward:()=>ut,selectLineBoundaryLeft:()=>dt,selectLineBoundaryRight:()=>ht,selectLineDown:()=>st,selectLineEnd:()=>pt,selectLineStart:()=>mt,selectLineUp:()=>lt,selectMatchingBracket:()=>Pe,selectPageDown:()=>ct,selectPageUp:()=>at,selectParentSyntax:()=>At,selectSubwordBackward:()=>tt,selectSubwordForward:()=>et,selectSyntaxLeft:()=>nt,selectSyntaxRight:()=>rt,simplifySelection:()=>Ct,splitLine:()=>Vt,standardKeymap:()=>nn,toggleBlockComment:()=>g,toggleBlockCommentByLine:()=>w,toggleComment:()=>f,toggleLineComment:()=>h,transposeChars:()=>Ut,undo:()=>V,undoDepth:()=>F,undoSelection:()=>N});var r=n(37496);var o=n.n(r);var l=n(66143);var s=n.n(l);var i=n(24104);var a=n.n(i);var c=n(73265);var u=n.n(c);const f=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=v(e.state,n.from);return r.line?h(e):r.block?w(e):false};function d(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return false;let o=e(t,n);if(!o)return false;r(n.update(o));return true}}const h=d(E,0);const m=d(E,1);const p=d(E,2);const g=d(B,0);const y=d(B,1);const k=d(B,2);const w=d(((e,t)=>B(e,t,C(t))),0);function v(e,t){let n=e.languageDataAt("commentTokens",t);return n.length?n[0]:{}}const S=50;function A(e,{open:t,close:n},r,o){let l=e.sliceDoc(r-S,r);let s=e.sliceDoc(o,o+S);let i=/\s*$/.exec(l)[0].length,a=/^\s*/.exec(s)[0].length;let c=l.length-i;if(l.slice(c-t.length,c)==t&&s.slice(a,a+n.length)==n){return{open:{pos:r-i,margin:i&&1},close:{pos:o+a,margin:a&&1}}}let u,f;if(o-r<=2*S){u=f=e.sliceDoc(r,o)}else{u=e.sliceDoc(r,r+S);f=e.sliceDoc(o-S,o)}let d=/^\s*/.exec(u)[0].length,h=/\s*$/.exec(f)[0].length;let m=f.length-h-n.length;if(u.slice(d,d+t.length)==t&&f.slice(m,m+n.length)==n){return{open:{pos:r+d+t.length,margin:/\s/.test(u.charAt(d+t.length))?1:0},close:{pos:o-h-n.length,margin:/\s/.test(f.charAt(m-1))?1:0}}}return null}function C(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from);let o=n.to<=r.to?r:e.doc.lineAt(n.to);let l=t.length-1;if(l>=0&&t[l].to>r.from)t[l].to=o.to;else t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:o.to})}return t}function B(e,t,n=t.selection.ranges){let r=n.map((e=>v(t,e.from).block));if(!r.every((e=>e)))return null;let o=n.map(((e,n)=>A(t,r[n],e.from,e.to)));if(e!=2&&!o.every((e=>e))){return{changes:t.changes(n.map(((e,t)=>{if(o[t])return[];return[{from:e.from,insert:r[t].open+" "},{from:e.to,insert:" "+r[t].close}]})))}}else if(e!=1&&o.some((e=>e))){let e=[];for(let t=0,n;t<o.length;t++)if(n=o[t]){let o=r[t],{open:l,close:s}=n;e.push({from:l.pos-o.open.length,to:l.pos+l.margin},{from:s.pos-s.margin,to:s.pos+o.close.length})}return{changes:e}}return null}function E(e,t,n=t.selection.ranges){let r=[];let o=-1;for(let{from:l,to:s}of n){let e=r.length,n=1e9;let i=v(t,l).line;if(!i)continue;for(let a=l;a<=s;){let e=t.doc.lineAt(a);if(e.from>o&&(l==s||s>e.from)){o=e.from;let t=/^\s*/.exec(e.text)[0].length;let l=t==e.length;let s=e.text.slice(t,t+i.length)==i?t:-1;if(t<e.text.length&&t<n)n=t;r.push({line:e,comment:s,token:i,indent:t,empty:l,single:false})}a=e.to+1}if(n<1e9)for(let t=e;t<r.length;t++)if(r[t].indent<r[t].line.text.length)r[t].indent=n;if(r.length==e+1)r[e].single=true}if(e!=2&&r.some((e=>e.comment<0&&(!e.empty||e.single)))){let e=[];for(let{line:t,token:o,indent:l,empty:s,single:i}of r)if(i||!s)e.push({from:t.from+l,insert:o+" "});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}else if(e!=1&&r.some((e=>e.comment>=0))){let e=[];for(let{line:t,comment:n,token:o}of r)if(n>=0){let r=t.from+n,l=r+o.length;if(t.text[l-t.from]==" ")l++;e.push({from:r,to:l})}return{changes:e}}return null}const D=r.Annotation.define();const x=r.Annotation.define();const L=r.Facet.define();const M=r.Facet.define({combine(e){return(0,r.combineConfig)(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}});function b(e){let t=0;e.iterChangedRanges(((e,n)=>t=n));return t}const O=r.StateField.define({create(){return ee.empty},update(e,t){let n=t.state.facet(M);let o=t.annotation(D);if(o){let l=t.docChanged?r.EditorSelection.single(b(t.changes)):undefined;let s=H.fromTransaction(t,l),i=o.side;let a=i==0?e.undone:e.done;if(s)a=z(a,a.length,n.minDepth,s);else a=W(a,t.startState.selection);return new ee(i==0?o.rest:a,i==0?a:o.rest)}let l=t.annotation(x);if(l=="full"||l=="before")e=e.isolate();if(t.annotation(r.Transaction.addToHistory)===false)return!t.changes.empty?e.addMapping(t.changes.desc):e;let s=H.fromTransaction(t);let i=t.annotation(r.Transaction.time),a=t.annotation(r.Transaction.userEvent);if(s)e=e.addChanges(s,i,a,n,t);else if(t.selection)e=e.addSelection(t.startState.selection,i,a,n.newGroupDelay);if(l=="full"||l=="after")e=e.isolate();return e},toJSON(e){return{done:e.done.map((e=>e.toJSON())),undone:e.undone.map((e=>e.toJSON()))}},fromJSON(e){return new ee(e.done.map(H.fromJSON),e.undone.map(H.fromJSON))}});function T(e={}){return[O,M.of(e),l.EditorView.domEventHandlers({beforeinput(e,t){let n=e.inputType=="historyUndo"?V:e.inputType=="historyRedo"?U:null;if(!n)return false;e.preventDefault();return n(t)}})]}const I=O;function R(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return false;let o=n.field(O,false);if(!o)return false;let l=o.pop(e,n,t);if(!l)return false;r(l);return true}}const V=R(0,false);const U=R(1,false);const N=R(0,true);const G=R(1,true);function J(e){return function(t){let n=t.field(O,false);if(!n)return 0;let r=e==0?n.done:n.undone;return r.length-(r.length&&!r[0].changes?1:0)}}const F=J(0);const P=J(1);class H{constructor(e,t,n,r,o){this.changes=e;this.effects=t;this.mapped=n;this.startSelection=r;this.selectionsAfter=o}setSelAfter(e){return new H(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,n;return{changes:(e=this.changes)===null||e===void 0?void 0:e.toJSON(),mapped:(t=this.mapped)===null||t===void 0?void 0:t.toJSON(),startSelection:(n=this.startSelection)===null||n===void 0?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map((e=>e.toJSON()))}}static fromJSON(e){return new H(e.changes&&r.ChangeSet.fromJSON(e.changes),[],e.mapped&&r.ChangeDesc.fromJSON(e.mapped),e.startSelection&&r.EditorSelection.fromJSON(e.startSelection),e.selectionsAfter.map(r.EditorSelection.fromJSON))}static fromTransaction(e,t){let n=q;for(let r of e.startState.facet(L)){let t=r(e);if(t.length)n=n.concat(t)}if(!n.length&&e.changes.empty)return null;return new H(e.changes.invert(e.startState.doc),n,undefined,t||e.startState.selection,q)}static selection(e){return new H(undefined,q,undefined,undefined,e)}}function z(e,t,n,r){let o=t+1>n+20?t-n-1:0;let l=e.slice(o,t);l.push(r);return l}function j(e,t){let n=[],r=false;e.iterChangedRanges(((e,t)=>n.push(e,t)));t.iterChangedRanges(((e,t,o,l)=>{for(let s=0;s<n.length;){let e=n[s++],t=n[s++];if(l>=e&&o<=t)r=true}}));return r}function _(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter(((e,n)=>e.empty!=t.ranges[n].empty)).length===0}function $(e,t){return!e.length?t:!t.length?e:e.concat(t)}const q=[];const K=200;function W(e,t){if(!e.length){return[H.selection([t])]}else{let n=e[e.length-1];let r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-K));if(r.length&&r[r.length-1].eq(t))return e;r.push(t);return z(e,e.length-1,1e9,n.setSelAfter(r))}}function Q(e){let t=e[e.length-1];let n=e.slice();n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1));return n}function X(e,t){if(!e.length)return e;let n=e.length,r=q;while(n){let o=Y(e[n-1],t,r);if(o.changes&&!o.changes.empty||o.effects.length){let t=e.slice(0,n);t[n-1]=o;return t}else{t=o.mapped;n--;r=o.selectionsAfter}}return r.length?[H.selection(r)]:q}function Y(e,t,n){let o=$(e.selectionsAfter.length?e.selectionsAfter.map((e=>e.map(t))):q,n);if(!e.changes)return H.selection(o);let l=e.changes.map(t),s=t.mapDesc(e.changes,true);let i=e.mapped?e.mapped.composeDesc(s):s;return new H(l,r.StateEffect.mapEffects(e.effects,t),i,e.startSelection.map(s),o)}const Z=/^(input\.type|delete)($|\.)/;class ee{constructor(e,t,n=0,r=undefined){this.done=e;this.undone=t;this.prevTime=n;this.prevUserEvent=r}isolate(){return this.prevTime?new ee(this.done,this.undone):this}addChanges(e,t,n,r,o){let l=this.done,s=l[l.length-1];if(s&&s.changes&&!s.changes.empty&&e.changes&&(!n||Z.test(n))&&(!s.selectionsAfter.length&&t-this.prevTime<r.newGroupDelay&&r.joinToEvent(o,j(s.changes,e.changes))||n=="input.type.compose")){l=z(l,l.length-1,r.minDepth,new H(e.changes.compose(s.changes),$(e.effects,s.effects),s.mapped,s.startSelection,q))}else{l=z(l,l.length,r.minDepth,e)}return new ee(l,q,t,n)}addSelection(e,t,n,r){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:q;if(o.length>0&&t-this.prevTime<r&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&_(o[o.length-1],e))return this;return new ee(W(this.done,e),this.undone,t,n)}addMapping(e){return new ee(X(this.done,e),X(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=e==0?this.done:this.undone;if(r.length==0)return null;let o=r[r.length-1];if(n&&o.selectionsAfter.length){return t.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:D.of({side:e,rest:Q(r)}),userEvent:e==0?"select.undo":"select.redo",scrollIntoView:true})}else if(!o.changes){return null}else{let n=r.length==1?q:r.slice(0,r.length-1);if(o.mapped)n=X(n,o.mapped);return t.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:D.of({side:e,rest:n}),filter:false,userEvent:e==0?"undo":"redo",scrollIntoView:true})}}}ee.empty=new ee(q,q);const te=[{key:"Mod-z",run:V,preventDefault:true},{key:"Mod-y",mac:"Mod-Shift-z",run:U,preventDefault:true},{linux:"Ctrl-Shift-z",run:U,preventDefault:true},{key:"Mod-u",run:N,preventDefault:true},{key:"Alt-u",mac:"Mod-Shift-u",run:G,preventDefault:true}];function ne(e,t){return r.EditorSelection.create(e.ranges.map(t),e.mainIndex)}function re(e,t){return e.update({selection:t,scrollIntoView:true,userEvent:"select"})}function oe({state:e,dispatch:t},n){let r=ne(e.selection,n);if(r.eq(e.selection))return false;t(re(e,r));return true}function le(e,t){return r.EditorSelection.cursor(t?e.to:e.from)}function se(e,t){return oe(e,(n=>n.empty?e.moveByChar(n,t):le(n,t)))}function ie(e){return e.textDirectionAt(e.state.selection.main.head)==l.Direction.LTR}const ae=e=>se(e,!ie(e));const ce=e=>se(e,ie(e));const ue=e=>se(e,true);const fe=e=>se(e,false);function de(e,t){return oe(e,(n=>n.empty?e.moveByGroup(n,t):le(n,t)))}const he=e=>de(e,!ie(e));const me=e=>de(e,ie(e));const pe=e=>de(e,true);const ge=e=>de(e,false);function ye(e,t,n){let o=e.state.charCategorizer(t.from);return e.moveByChar(t,n,(l=>{let s=r.CharCategory.Space,i=t.from;let a=false,c=false,u=false;let f=t=>{if(a)return false;i+=n?t.length:-t.length;let l=o(t),f;if(s==r.CharCategory.Space)s=l;if(s!=l)return false;if(s==r.CharCategory.Word){if(t.toLowerCase()==t){if(!n&&c)return false;u=true}else if(u){if(n)return false;a=true}else{if(c&&n&&o(f=e.state.sliceDoc(i,i+1))==r.CharCategory.Word&&f.toLowerCase()==f)return false;c=true}}return true};f(l);return f}))}function ke(e,t){return oe(e,(n=>n.empty?ye(e,n,t):le(n,t)))}const we=e=>ke(e,true);const ve=e=>ke(e,false);function Se(e,t,n){if(t.type.prop(n))return true;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function Ae(e,t,n){let o=(0,i.syntaxTree)(e).resolveInner(t.head);let l=n?c.NodeProp.closedBy:c.NodeProp.openedBy;for(let r=t.head;;){let t=n?o.childAfter(r):o.childBefore(r);if(!t)break;if(Se(e,t,l))o=t;else r=n?t.to:t.from}let s=o.type.prop(l),a,u;if(s&&(a=n?(0,i.matchBrackets)(e,o.from,1):(0,i.matchBrackets)(e,o.to,-1))&&a.matched)u=n?a.end.to:a.end.from;else u=n?o.to:o.from;return r.EditorSelection.cursor(u,n?-1:1)}const Ce=e=>oe(e,(t=>Ae(e.state,t,!ie(e))));const Be=e=>oe(e,(t=>Ae(e.state,t,ie(e))));function Ee(e,t){return oe(e,(n=>{if(!n.empty)return le(n,t);let r=e.moveVertically(n,t);return r.head!=n.head?r:e.moveToLineBoundary(n,t)}))}const De=e=>Ee(e,false);const xe=e=>Ee(e,true);function Le(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2;let n=0,r=0,o;if(t){for(let t of e.state.facet(l.EditorView.scrollMargins)){let o=t(e);if(o===null||o===void 0?void 0:o.top)n=Math.max(o===null||o===void 0?void 0:o.top,n);if(o===null||o===void 0?void 0:o.bottom)r=Math.max(o===null||o===void 0?void 0:o.bottom,r)}o=e.scrollDOM.clientHeight-n-r}else{o=(e.dom.ownerDocument.defaultView||window).innerHeight}return{marginTop:n,marginBottom:r,selfScroll:t,height:Math.max(e.defaultLineHeight,o-5)}}function Me(e,t){let n=Le(e);let{state:r}=e,o=ne(r.selection,(r=>r.empty?e.moveVertically(r,t,n.height):le(r,t)));if(o.eq(r.selection))return false;let s;if(n.selfScroll){let t=e.coordsAtPos(r.selection.main.head);let i=e.scrollDOM.getBoundingClientRect();let a=i.top+n.marginTop,c=i.bottom-n.marginBottom;if(t&&t.top>a&&t.bottom<c)s=l.EditorView.scrollIntoView(o.main.head,{y:"start",yMargin:t.top-a})}e.dispatch(re(r,o),{effects:s});return true}const be=e=>Me(e,false);const Oe=e=>Me(e,true);function Te(e,t,n){let o=e.lineBlockAt(t.head),l=e.moveToLineBoundary(t,n);if(l.head==t.head&&l.head!=(n?o.to:o.from))l=e.moveToLineBoundary(t,n,false);if(!n&&l.head==o.from&&o.length){let n=/^\s*/.exec(e.state.sliceDoc(o.from,Math.min(o.from+100,o.to)))[0].length;if(n&&t.head!=o.from+n)l=r.EditorSelection.cursor(o.from+n)}return l}const Ie=e=>oe(e,(t=>Te(e,t,true)));const Re=e=>oe(e,(t=>Te(e,t,false)));const Ve=e=>oe(e,(t=>Te(e,t,!ie(e))));const Ue=e=>oe(e,(t=>Te(e,t,ie(e))));const Ne=e=>oe(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from,1)));const Ge=e=>oe(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to,-1)));function Je(e,t,n){let o=false,l=ne(e.selection,(t=>{let l=(0,i.matchBrackets)(e,t.head,-1)||(0,i.matchBrackets)(e,t.head,1)||t.head>0&&(0,i.matchBrackets)(e,t.head-1,1)||t.head<e.doc.length&&(0,i.matchBrackets)(e,t.head+1,-1);if(!l||!l.end)return t;o=true;let s=l.start.from==t.head?l.end.to:l.end.from;return n?r.EditorSelection.range(t.anchor,s):r.EditorSelection.cursor(s)}));if(!o)return false;t(re(e,l));return true}const Fe=({state:e,dispatch:t})=>Je(e,t,false);const Pe=({state:e,dispatch:t})=>Je(e,t,true);function He(e,t){let n=ne(e.state.selection,(e=>{let n=t(e);return r.EditorSelection.range(e.anchor,n.head,n.goalColumn,n.bidiLevel||undefined)}));if(n.eq(e.state.selection))return false;e.dispatch(re(e.state,n));return true}function ze(e,t){return He(e,(n=>e.moveByChar(n,t)))}const je=e=>ze(e,!ie(e));const _e=e=>ze(e,ie(e));const $e=e=>ze(e,true);const qe=e=>ze(e,false);function Ke(e,t){return He(e,(n=>e.moveByGroup(n,t)))}const We=e=>Ke(e,!ie(e));const Qe=e=>Ke(e,ie(e));const Xe=e=>Ke(e,true);const Ye=e=>Ke(e,false);function Ze(e,t){return He(e,(n=>ye(e,n,t)))}const et=e=>Ze(e,true);const tt=e=>Ze(e,false);const nt=e=>He(e,(t=>Ae(e.state,t,!ie(e))));const rt=e=>He(e,(t=>Ae(e.state,t,ie(e))));function ot(e,t){return He(e,(n=>e.moveVertically(n,t)))}const lt=e=>ot(e,false);const st=e=>ot(e,true);function it(e,t){return He(e,(n=>e.moveVertically(n,t,Le(e).height)))}const at=e=>it(e,false);const ct=e=>it(e,true);const ut=e=>He(e,(t=>Te(e,t,true)));const ft=e=>He(e,(t=>Te(e,t,false)));const dt=e=>He(e,(t=>Te(e,t,!ie(e))));const ht=e=>He(e,(t=>Te(e,t,ie(e))));const mt=e=>He(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from)));const pt=e=>He(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to)));const gt=({state:e,dispatch:t})=>{t(re(e,{anchor:0}));return true};const yt=({state:e,dispatch:t})=>{t(re(e,{anchor:e.doc.length}));return true};const kt=({state:e,dispatch:t})=>{t(re(e,{anchor:e.selection.main.anchor,head:0}));return true};const wt=({state:e,dispatch:t})=>{t(re(e,{anchor:e.selection.main.anchor,head:e.doc.length}));return true};const vt=({state:e,dispatch:t})=>{t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:"select"}));return true};const St=({state:e,dispatch:t})=>{let n=Nt(e).map((({from:t,to:n})=>r.EditorSelection.range(t,Math.min(n+1,e.doc.length))));t(e.update({selection:r.EditorSelection.create(n),userEvent:"select"}));return true};const At=({state:e,dispatch:t})=>{let n=ne(e.selection,(t=>{var n;let o=(0,i.syntaxTree)(e).resolveInner(t.head,1);while(!(o.from<t.from&&o.to>=t.to||o.to>t.to&&o.from<=t.from||!((n=o.parent)===null||n===void 0?void 0:n.parent)))o=o.parent;return r.EditorSelection.range(o.to,o.from)}));t(re(e,n));return true};const Ct=({state:e,dispatch:t})=>{let n=e.selection,o=null;if(n.ranges.length>1)o=r.EditorSelection.create([n.main]);else if(!n.main.empty)o=r.EditorSelection.create([r.EditorSelection.cursor(n.main.head)]);if(!o)return false;t(re(e,o));return true};function Bt(e,t){if(e.state.readOnly)return false;let n="delete.selection",{state:o}=e;let s=o.changeByRange((o=>{let{from:l,to:s}=o;if(l==s){let r=t(l);if(r<l){n="delete.backward";r=Et(e,r,false)}else if(r>l){n="delete.forward";r=Et(e,r,true)}l=Math.min(l,r);s=Math.max(s,r)}else{l=Et(e,l,false);s=Et(e,s,true)}return l==s?{range:o}:{changes:{from:l,to:s},range:r.EditorSelection.cursor(l)}}));if(s.changes.empty)return false;e.dispatch(o.update(s,{scrollIntoView:true,userEvent:n,effects:n=="delete.selection"?l.EditorView.announce.of(o.phrase("Selection deleted")):undefined}));return true}function Et(e,t,n){if(e instanceof l.EditorView)for(let r of e.state.facet(l.EditorView.atomicRanges).map((t=>t(e))))r.between(t,t,((e,r)=>{if(e<t&&r>t)t=n?r:e}));return t}const Dt=(e,t)=>Bt(e,(n=>{let{state:o}=e,l=o.doc.lineAt(n),s,a;if(!t&&n>l.from&&n<l.from+200&&!/[^ \t]/.test(s=l.text.slice(0,n-l.from))){if(s[s.length-1]=="\t")return n-1;let e=(0,r.countColumn)(s,o.tabSize),t=e%(0,i.getIndentUnit)(o)||(0,i.getIndentUnit)(o);for(let r=0;r<t&&s[s.length-1-r]==" ";r++)n--;a=n}else{a=(0,r.findClusterBreak)(l.text,n-l.from,t,t)+l.from;if(a==n&&l.number!=(t?o.doc.lines:1))a+=t?1:-1}return a}));const xt=e=>Dt(e,false);const Lt=e=>Dt(e,true);const Mt=(e,t)=>Bt(e,(n=>{let o=n,{state:l}=e,s=l.doc.lineAt(o);let i=l.charCategorizer(o);for(let e=null;;){if(o==(t?s.to:s.from)){if(o==n&&s.number!=(t?l.doc.lines:1))o+=t?1:-1;break}let a=(0,r.findClusterBreak)(s.text,o-s.from,t)+s.from;let c=s.text.slice(Math.min(o,a)-s.from,Math.max(o,a)-s.from);let u=i(c);if(e!=null&&u!=e)break;if(c!=" "||o!=n)e=u;o=a}return o}));const bt=e=>Mt(e,false);const Ot=e=>Mt(e,true);const Tt=e=>Bt(e,(t=>{let n=e.lineBlockAt(t).to;return t<n?n:Math.min(e.state.doc.length,t+1)}));const It=e=>Bt(e,(t=>{let n=e.lineBlockAt(t).from;return t>n?n:Math.max(0,t-1)}));const Rt=({state:e,dispatch:t})=>{if(e.readOnly)return false;let n=[];for(let r=0,o="",l=e.doc.iter();;){l.next();if(l.lineBreak||l.done){let e=o.search(/\s+$/);if(e>-1)n.push({from:r-(o.length-e),to:r});if(l.done)break;o=""}else{o=l.value}r+=l.value.length}if(!n.length)return false;t(e.update({changes:n,userEvent:"delete"}));return true};const Vt=({state:e,dispatch:t})=>{if(e.readOnly)return false;let n=e.changeByRange((e=>({changes:{from:e.from,to:e.to,insert:r.Text.of(["",""])},range:r.EditorSelection.cursor(e.from)})));t(e.update(n,{scrollIntoView:true,userEvent:"input"}));return true};const Ut=({state:e,dispatch:t})=>{if(e.readOnly)return false;let n=e.changeByRange((t=>{if(!t.empty||t.from==0||t.from==e.doc.length)return{range:t};let n=t.from,o=e.doc.lineAt(n);let l=n==o.from?n-1:(0,r.findClusterBreak)(o.text,n-o.from,false)+o.from;let s=n==o.to?n+1:(0,r.findClusterBreak)(o.text,n-o.from,true)+o.from;return{changes:{from:l,to:s,insert:e.doc.slice(n,s).append(e.doc.slice(l,n))},range:r.EditorSelection.cursor(s)}}));if(n.changes.empty)return false;t(e.update(n,{scrollIntoView:true,userEvent:"move.character"}));return true};function Nt(e){let t=[],n=-1;for(let r of e.selection.ranges){let o=e.doc.lineAt(r.from),l=e.doc.lineAt(r.to);if(!r.empty&&r.to==l.from)l=e.doc.lineAt(r.to-1);if(n>=o.number){let e=t[t.length-1];e.to=l.to;e.ranges.push(r)}else{t.push({from:o.from,to:l.to,ranges:[r]})}n=l.number+1}return t}function Gt(e,t,n){if(e.readOnly)return false;let o=[],l=[];for(let s of Nt(e)){if(n?s.to==e.doc.length:s.from==0)continue;let t=e.doc.lineAt(n?s.to+1:s.from-1);let i=t.length+1;if(n){o.push({from:s.to,to:t.to},{from:s.from,insert:t.text+e.lineBreak});for(let t of s.ranges)l.push(r.EditorSelection.range(Math.min(e.doc.length,t.anchor+i),Math.min(e.doc.length,t.head+i)))}else{o.push({from:t.from,to:s.from},{from:s.to,insert:e.lineBreak+t.text});for(let e of s.ranges)l.push(r.EditorSelection.range(e.anchor-i,e.head-i))}}if(!o.length)return false;t(e.update({changes:o,scrollIntoView:true,selection:r.EditorSelection.create(l,e.selection.mainIndex),userEvent:"move.line"}));return true}const Jt=({state:e,dispatch:t})=>Gt(e,t,false);const Ft=({state:e,dispatch:t})=>Gt(e,t,true);function Pt(e,t,n){if(e.readOnly)return false;let r=[];for(let o of Nt(e)){if(n)r.push({from:o.from,insert:e.doc.slice(o.from,o.to)+e.lineBreak});else r.push({from:o.to,insert:e.lineBreak+e.doc.slice(o.from,o.to)})}t(e.update({changes:r,scrollIntoView:true,userEvent:"input.copyline"}));return true}const Ht=({state:e,dispatch:t})=>Pt(e,t,false);const zt=({state:e,dispatch:t})=>Pt(e,t,true);const jt=e=>{if(e.state.readOnly)return false;let{state:t}=e,n=t.changes(Nt(t).map((({from:e,to:n})=>{if(e>0)e--;else if(n<t.doc.length)n++;return{from:e,to:n}})));let r=ne(t.selection,(t=>e.moveVertically(t,true))).map(n);e.dispatch({changes:n,selection:r,scrollIntoView:true,userEvent:"delete.line"});return true};const _t=({state:e,dispatch:t})=>{t(e.update(e.replaceSelection(e.lineBreak),{scrollIntoView:true,userEvent:"input"}));return true};function $t(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n=(0,i.syntaxTree)(e).resolveInner(t);let r=n.childBefore(t),o=n.childAfter(t),l;if(r&&o&&r.to<=t&&o.from>=t&&(l=r.type.prop(c.NodeProp.closedBy))&&l.indexOf(o.name)>-1&&e.doc.lineAt(r.to).from==e.doc.lineAt(o.from).from)return{from:r.to,to:o.from};return null}const qt=Wt(false);const Kt=Wt(true);function Wt(e){return({state:t,dispatch:n})=>{if(t.readOnly)return false;let o=t.changeByRange((n=>{let{from:o,to:l}=n,s=t.doc.lineAt(o);let a=!e&&o==l&&$t(t,o);if(e)o=l=(l<=s.to?s:t.doc.lineAt(l)).to;let c=new i.IndentContext(t,{simulateBreak:o,simulateDoubleBreak:!!a});let u=(0,i.getIndentation)(c,o);if(u==null)u=/^\s*/.exec(t.doc.lineAt(o).text)[0].length;while(l<s.to&&/\s/.test(s.text[l-s.from]))l++;if(a)({from:o,to:l}=a);else if(o>s.from&&o<s.from+100&&!/\S/.test(s.text.slice(0,o)))o=s.from;let f=["",(0,i.indentString)(t,u)];if(a)f.push((0,i.indentString)(t,c.lineIndent(s.from,-1)));return{changes:{from:o,to:l,insert:r.Text.of(f)},range:r.EditorSelection.cursor(o+1+f[1].length)}}));n(t.update(o,{scrollIntoView:true,userEvent:"input"}));return true}}function Qt(e,t){let n=-1;return e.changeByRange((o=>{let l=[];for(let r=o.from;r<=o.to;){let s=e.doc.lineAt(r);if(s.number>n&&(o.empty||o.to>s.from)){t(s,l,o);n=s.number}r=s.to+1}let s=e.changes(l);return{changes:l,range:r.EditorSelection.range(s.mapPos(o.anchor,1),s.mapPos(o.head,1))}}))}const Xt=({state:e,dispatch:t})=>{if(e.readOnly)return false;let n=Object.create(null);let r=new i.IndentContext(e,{overrideIndentation:e=>{let t=n[e];return t==null?-1:t}});let o=Qt(e,((t,o,l)=>{let s=(0,i.getIndentation)(r,t.from);if(s==null)return;if(!/\S/.test(t.text))s=0;let a=/^\s*/.exec(t.text)[0];let c=(0,i.indentString)(e,s);if(a!=c||l.from<t.from+a.length){n[t.from]=s;o.push({from:t.from,to:t.from+a.length,insert:c})}}));if(!o.changes.empty)t(e.update(o,{userEvent:"indent"}));return true};const Yt=({state:e,dispatch:t})=>{if(e.readOnly)return false;t(e.update(Qt(e,((t,n)=>{n.push({from:t.from,insert:e.facet(i.indentUnit)})})),{userEvent:"input.indent"}));return true};const Zt=({state:e,dispatch:t})=>{if(e.readOnly)return false;t(e.update(Qt(e,((t,n)=>{let o=/^\s*/.exec(t.text)[0];if(!o)return;let l=(0,r.countColumn)(o,e.tabSize),s=0;let a=(0,i.indentString)(e,Math.max(0,l-(0,i.getIndentUnit)(e)));while(s<o.length&&s<a.length&&o.charCodeAt(s)==a.charCodeAt(s))s++;n.push({from:t.from+s,to:t.from+o.length,insert:a.slice(s)})})),{userEvent:"delete.dedent"}));return true};const en=({state:e,dispatch:t})=>{if(e.selection.ranges.some((e=>!e.empty)))return Yt({state:e,dispatch:t});t(e.update(e.replaceSelection("\t"),{scrollIntoView:true,userEvent:"input"}));return true};const tn=[{key:"Ctrl-b",run:ae,shift:je,preventDefault:true},{key:"Ctrl-f",run:ce,shift:_e},{key:"Ctrl-p",run:De,shift:lt},{key:"Ctrl-n",run:xe,shift:st},{key:"Ctrl-a",run:Ne,shift:mt},{key:"Ctrl-e",run:Ge,shift:pt},{key:"Ctrl-d",run:Lt},{key:"Ctrl-h",run:xt},{key:"Ctrl-k",run:Tt},{key:"Ctrl-Alt-h",run:bt},{key:"Ctrl-o",run:Vt},{key:"Ctrl-t",run:Ut},{key:"Ctrl-v",run:Oe}];const nn=[{key:"ArrowLeft",run:ae,shift:je,preventDefault:true},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:he,shift:We,preventDefault:true},{mac:"Cmd-ArrowLeft",run:Ve,shift:dt,preventDefault:true},{key:"ArrowRight",run:ce,shift:_e,preventDefault:true},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:me,shift:Qe,preventDefault:true},{mac:"Cmd-ArrowRight",run:Ue,shift:ht,preventDefault:true},{key:"ArrowUp",run:De,shift:lt,preventDefault:true},{mac:"Cmd-ArrowUp",run:gt,shift:kt},{mac:"Ctrl-ArrowUp",run:be,shift:at},{key:"ArrowDown",run:xe,shift:st,preventDefault:true},{mac:"Cmd-ArrowDown",run:yt,shift:wt},{mac:"Ctrl-ArrowDown",run:Oe,shift:ct},{key:"PageUp",run:be,shift:at},{key:"PageDown",run:Oe,shift:ct},{key:"Home",run:Re,shift:ft,preventDefault:true},{key:"Mod-Home",run:gt,shift:kt},{key:"End",run:Ie,shift:ut,preventDefault:true},{key:"Mod-End",run:yt,shift:wt},{key:"Enter",run:qt},{key:"Mod-a",run:vt},{key:"Backspace",run:xt,shift:xt},{key:"Delete",run:Lt},{key:"Mod-Backspace",mac:"Alt-Backspace",run:bt},{key:"Mod-Delete",mac:"Alt-Delete",run:Ot},{mac:"Mod-Backspace",run:It},{mac:"Mod-Delete",run:Tt}].concat(tn.map((e=>({mac:e.key,run:e.run,shift:e.shift}))));const rn=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:Ce,shift:nt},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:Be,shift:rt},{key:"Alt-ArrowUp",run:Jt},{key:"Shift-Alt-ArrowUp",run:Ht},{key:"Alt-ArrowDown",run:Ft},{key:"Shift-Alt-ArrowDown",run:zt},{key:"Escape",run:Ct},{key:"Mod-Enter",run:Kt},{key:"Alt-l",mac:"Ctrl-l",run:St},{key:"Mod-i",run:At,preventDefault:true},{key:"Mod-[",run:Zt},{key:"Mod-]",run:Yt},{key:"Mod-Alt-\\",run:Xt},{key:"Shift-Mod-k",run:jt},{key:"Shift-Mod-\\",run:Fe},{key:"Mod-/",run:f},{key:"Alt-A",run:g}].concat(nn);const on={key:"Tab",run:Yt,shift:Zt}}}]);
//# sourceMappingURL=3547.5eb9946b637831e09baa.js.map?v=5eb9946b637831e09baa