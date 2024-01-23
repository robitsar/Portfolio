"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[942],{60942:(e,t,n)=>{n.r(t);n.d(t,{c:()=>D,ceylon:()=>V,clike:()=>s,cpp:()=>z,csharp:()=>M,dart:()=>H,java:()=>L,kotlin:()=>O,nesC:()=>A,objectiveC:()=>U,objectiveCpp:()=>$,scala:()=>P,shader:()=>j,squirrel:()=>B});function r(e,t,n,r,a,i){this.indented=e;this.column=t;this.type=n;this.info=r;this.align=a;this.prev=i}function a(e,t,n,a){var i=e.indented;if(e.context&&e.context.type=="statement"&&n!="statement")i=e.context.indented;return e.context=new r(i,t,n,a,null,e.context)}function i(e){var t=e.context.type;if(t==")"||t=="]"||t=="}")e.indented=e.context.indented;return e.context=e.context.prev}function o(e,t,n){if(t.prevToken=="variable"||t.prevToken=="type")return true;if(/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0,n)))return true;if(t.typeAtEndOfLine&&e.column()==e.indentation())return true}function l(e){for(;;){if(!e||e.type=="top")return true;if(e.type=="}"&&e.prev.info!="namespace")return false;e=e.prev}}function s(e){var t=e.statementIndentUnit,n=e.dontAlignCalls,s=e.keywords||{},c=e.types||{},f=e.builtin||{},d=e.blockKeywords||{},p=e.defKeywords||{},m=e.atoms||{},h=e.hooks||{},y=e.multiLineStrings,g=e.indentStatements!==false,k=e.indentSwitch!==false,b=e.namespaceSeparator,w=e.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,v=e.numberStart||/[\d\.]/,_=e.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,x=e.isOperatorChar||/[+\-*&%=<>!?|\/]/,S=e.isIdentifierChar||/[\w\$_\xa1-\uffff]/,T=e.isReservedIdentifier||false;var N,C;function I(e,t){var n=e.next();if(h[n]){var r=h[n](e,t);if(r!==false)return r}if(n=='"'||n=="'"){t.tokenize=D(n);return t.tokenize(e,t)}if(v.test(n)){e.backUp(1);if(e.match(_))return"number";e.next()}if(w.test(n)){N=n;return null}if(n=="/"){if(e.eat("*")){t.tokenize=z;return z(e,t)}if(e.eat("/")){e.skipToEnd();return"comment"}}if(x.test(n)){while(!e.match(/^\/[\/*]/,false)&&e.eat(x)){}return"operator"}e.eatWhile(S);if(b)while(e.match(b))e.eatWhile(S);var a=e.current();if(u(s,a)){if(u(d,a))N="newstatement";if(u(p,a))C=true;return"keyword"}if(u(c,a))return"type";if(u(f,a)||T&&T(a)){if(u(d,a))N="newstatement";return"builtin"}if(u(m,a))return"atom";return"variable"}function D(e){return function(t,n){var r=false,a,i=false;while((a=t.next())!=null){if(a==e&&!r){i=true;break}r=!r&&a=="\\"}if(i||!(r||y))n.tokenize=null;return"string"}}function z(e,t){var n=false,r;while(r=e.next()){if(r=="/"&&n){t.tokenize=null;break}n=r=="*"}return"comment"}function L(t,n){if(e.typeFirstDefinitions&&t.eol()&&l(n.context))n.typeAtEndOfLine=o(t,n,t.pos)}return{name:e.name,startState:function(e){return{tokenize:null,context:new r(-e,0,"top",null,false),indented:0,startOfLine:true,prevToken:null}},token:function(t,n){var r=n.context;if(t.sol()){if(r.align==null)r.align=false;n.indented=t.indentation();n.startOfLine=true}if(t.eatSpace()){L(t,n);return null}N=C=null;var s=(n.tokenize||I)(t,n);if(s=="comment"||s=="meta")return s;if(r.align==null)r.align=true;if(N==";"||N==":"||N==","&&t.match(/^\s*(?:\/\/.*)?$/,false))while(n.context.type=="statement")i(n);else if(N=="{")a(n,t.column(),"}");else if(N=="[")a(n,t.column(),"]");else if(N=="(")a(n,t.column(),")");else if(N=="}"){while(r.type=="statement")r=i(n);if(r.type=="}")r=i(n);while(r.type=="statement")r=i(n)}else if(N==r.type)i(n);else if(g&&((r.type=="}"||r.type=="top")&&N!=";"||r.type=="statement"&&N=="newstatement")){a(n,t.column(),"statement",t.current())}if(s=="variable"&&(n.prevToken=="def"||e.typeFirstDefinitions&&o(t,n,t.start)&&l(n.context)&&t.match(/^\s*\(/,false)))s="def";if(h.token){var c=h.token(t,n,s);if(c!==undefined)s=c}if(s=="def"&&e.styleDefs===false)s="variable";n.startOfLine=false;n.prevToken=C?"def":s||N;L(t,n);return s},indent:function(r,a,i){if(r.tokenize!=I&&r.tokenize!=null||r.typeAtEndOfLine)return null;var o=r.context,l=a&&a.charAt(0);var s=l==o.type;if(o.type=="statement"&&l=="}")o=o.prev;if(e.dontIndentStatements)while(o.type=="statement"&&e.dontIndentStatements.test(o.info))o=o.prev;if(h.indent){var c=h.indent(r,o,a,i.unit);if(typeof c=="number")return c}var u=o.prev&&o.prev.info=="switch";if(e.allmanIndentation&&/[{(]/.test(l)){while(o.type!="top"&&o.type!="}")o=o.prev;return o.indented}if(o.type=="statement")return o.indented+(l=="{"?0:t||i.unit);if(o.align&&(!n||o.type!=")"))return o.column+(s?0:1);if(o.type==")"&&!s)return o.indented+(t||i.unit);return o.indented+(s?0:i.unit)+(!s&&u&&!/^(?:case|default)\b/.test(a)?i.unit:0)},languageData:{indentOnInput:k?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},autocomplete:Object.keys(s).concat(Object.keys(c)).concat(Object.keys(f)).concat(Object.keys(m)),...e.languageData}}}function c(e){var t={},n=e.split(" ");for(var r=0;r<n.length;++r)t[n[r]]=true;return t}function u(e,t){if(typeof e==="function"){return e(t)}else{return e.propertyIsEnumerable(t)}}var f="auto if break case register continue return default do sizeof "+"static else struct switch extern typedef union for goto while enum const "+"volatile inline restrict asm fortran";var d="alignas alignof and and_eq audit axiom bitand bitor catch "+"class compl concept constexpr const_cast decltype delete dynamic_cast "+"explicit export final friend import module mutable namespace new noexcept "+"not not_eq operator or or_eq override private protected public "+"reinterpret_cast requires static_assert static_cast template this "+"thread_local throw try typeid typename using virtual xor xor_eq";var p="bycopy byref in inout oneway out self super atomic nonatomic retain copy "+"readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd "+"@interface @implementation @end @protocol @encode @property @synthesize @dynamic @class "+"@public @package @private @protected @required @optional @try @catch @finally @import "+"@selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available";var m="FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION "+" NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER "+"NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION "+"NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT";var h=c("int long char short double float unsigned signed "+"void bool");var y=c("SEL instancetype id Class Protocol BOOL");function g(e){return u(h,e)||/.+_t$/.test(e)}function k(e){return g(e)||u(y,e)}var b="case do else for if switch while struct enum union";var w="struct enum union";function v(e,t){if(!t.startOfLine)return false;for(var n,r=null;n=e.peek();){if(n=="\\"&&e.match(/^.$/)){r=v;break}else if(n=="/"&&e.match(/^\/[\/\*]/,false)){break}e.next()}t.tokenize=r;return"meta"}function _(e,t){if(t.prevToken=="type")return"type";return false}function x(e){if(!e||e.length<2)return false;if(e[0]!="_")return false;return e[1]=="_"||e[1]!==e[1].toLowerCase()}function S(e){e.eatWhile(/[\w\.']/);return"number"}function T(e,t){e.backUp(1);if(e.match(/^(?:R|u8R|uR|UR|LR)/)){var n=e.match(/^"([^\s\\()]{0,16})\(/);if(!n){return false}t.cpp11RawStringDelim=n[1];t.tokenize=I;return I(e,t)}if(e.match(/^(?:u8|u|U|L)/)){if(e.match(/^["']/,false)){return"string"}return false}e.next();return false}function N(e){var t=/(\w+)::~?(\w+)$/.exec(e);return t&&t[1]==t[2]}function C(e,t){var n;while((n=e.next())!=null){if(n=='"'&&!e.eat('"')){t.tokenize=null;break}}return"string"}function I(e,t){var n=t.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&");var r=e.match(new RegExp(".*?\\)"+n+'"'));if(r)t.tokenize=null;else e.skipToEnd();return"string"}const D=s({name:"c",keywords:c(f),types:g,blockKeywords:c(b),defKeywords:c(w),typeFirstDefinitions:true,atoms:c("NULL true false"),isReservedIdentifier:x,hooks:{"#":v,"*":_}});const z=s({name:"cpp",keywords:c(f+" "+d),types:g,blockKeywords:c(b+" class try catch"),defKeywords:c(w+" class namespace"),typeFirstDefinitions:true,atoms:c("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:x,hooks:{"#":v,"*":_,u:T,U:T,L:T,R:T,0:S,1:S,2:S,3:S,4:S,5:S,6:S,7:S,8:S,9:S,token:function(e,t,n){if(n=="variable"&&e.peek()=="("&&(t.prevToken==";"||t.prevToken==null||t.prevToken=="}")&&N(e.current()))return"def"}},namespaceSeparator:"::"});const L=s({name:"java",keywords:c("abstract assert break case catch class const continue default "+"do else enum extends final finally for goto if implements import "+"instanceof interface native new package private protected public "+"return static strictfp super switch synchronized this throw throws transient "+"try volatile while @interface"),types:c("var byte short int long float double boolean char void Boolean Byte Character Double Float "+"Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:c("catch class do else finally for if switch try while"),defKeywords:c("class interface enum @interface"),typeFirstDefinitions:true,atoms:c("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(e){if(e.match("interface",false))return false;e.eatWhile(/[\w\$_]/);return"meta"},'"':function(e,t){if(!e.match(/""$/))return false;t.tokenize=E;return t.tokenize(e,t)}}});const M=s({name:"csharp",keywords:c("abstract as async await base break case catch checked class const continue"+" default delegate do else enum event explicit extern finally fixed for"+" foreach goto if implicit in interface internal is lock namespace new"+" operator out override params private protected public readonly ref return sealed"+" sizeof stackalloc static struct switch this throw try typeof unchecked"+" unsafe using virtual void volatile while add alias ascending descending dynamic from get"+" global group into join let orderby partial remove select set value var yield"),types:c("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func"+" Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32"+" UInt64 bool byte char decimal double short int long object"+" sbyte float string ushort uint ulong"),blockKeywords:c("catch class do else finally for foreach if struct switch try while"),defKeywords:c("class interface namespace struct var"),typeFirstDefinitions:true,atoms:c("true false null"),hooks:{"@":function(e,t){if(e.eat('"')){t.tokenize=C;return C(e,t)}e.eatWhile(/[\w\$_]/);return"meta"}}});function E(e,t){var n=false;while(!e.eol()){if(!n&&e.match('"""')){t.tokenize=null;break}n=e.next()=="\\"&&!n}return"string"}function F(e){return function(t,n){var r;while(r=t.next()){if(r=="*"&&t.eat("/")){if(e==1){n.tokenize=null;break}else{n.tokenize=F(e-1);return n.tokenize(t,n)}}else if(r=="/"&&t.eat("*")){n.tokenize=F(e+1);return n.tokenize(t,n)}}return"comment"}}const P=s({name:"scala",keywords:c("abstract case catch class def do else extends final finally for forSome if "+"implicit import lazy match new null object override package private protected return "+"sealed super this throw trait try type val var while with yield _ "+"assert assume require print println printf readLine readBoolean readByte readShort "+"readChar readInt readLong readFloat readDouble"),types:c("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either "+"Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable "+"Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering "+"Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder "+"StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector "+"Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable "+"Compiler Double Exception Float Integer Long Math Number Object Package Pair Process "+"Runtime Runnable SecurityManager Short StackTraceElement StrictMath String "+"StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:true,blockKeywords:c("catch class enum do else finally for forSome if match switch try while"),defKeywords:c("class enum def object package trait type val var"),atoms:c("true false null"),indentStatements:false,indentSwitch:false,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(e){e.eatWhile(/[\w\$_]/);return"meta"},'"':function(e,t){if(!e.match('""'))return false;t.tokenize=E;return t.tokenize(e,t)},"'":function(e){if(e.match(/^(\\[^'\s]+|[^\\'])'/))return"character";e.eatWhile(/[\w\$_\xa1-\uffff]/);return"atom"},"=":function(e,t){var n=t.context;if(n.type=="}"&&n.align&&e.eat(">")){t.context=new r(n.indented,n.column,n.type,n.info,null,n.prev);return"operator"}else{return false}},"/":function(e,t){if(!e.eat("*"))return false;t.tokenize=F(1);return t.tokenize(e,t)}},languageData:{closeBrackets:{brackets:["(","[","{","'",'"','"""']}}});function R(e){return function(t,n){var r=false,a,i=false;while(!t.eol()){if(!e&&!r&&t.match('"')){i=true;break}if(e&&t.match('"""')){i=true;break}a=t.next();if(!r&&a=="$"&&t.match("{"))t.skipTo("}");r=!r&&a=="\\"&&!e}if(i||!e)n.tokenize=null;return"string"}}const O=s({name:"kotlin",keywords:c("package as typealias class interface this super val operator "+"var fun for is in This throw return annotation "+"break continue object if else while do try when !in !is as? "+"file import where by get set abstract enum open inner override private public internal "+"protected catch finally out final vararg reified dynamic companion constructor init "+"sealed field property receiver param sparam lateinit data inline noinline tailrec "+"external annotation crossinline const operator infix suspend actual expect setparam"),types:c("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable "+"Compiler Double Exception Float Integer Long Math Number Object Package Pair Process "+"Runtime Runnable SecurityManager Short StackTraceElement StrictMath String "+"StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray "+"ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy "+"LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:false,indentStatements:false,multiLineStrings:true,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:c("catch class do else finally for if where try while enum"),defKeywords:c("class val var object interface fun"),atoms:c("true false null this"),hooks:{"@":function(e){e.eatWhile(/[\w\$_]/);return"meta"},"*":function(e,t){return t.prevToken=="."?"variable":"operator"},'"':function(e,t){t.tokenize=R(e.match('""'));return t.tokenize(e,t)},"/":function(e,t){if(!e.eat("*"))return false;t.tokenize=F(1);return t.tokenize(e,t)},indent:function(e,t,n,r){var a=n&&n.charAt(0);if((e.prevToken=="}"||e.prevToken==")")&&n=="")return e.indented;if(e.prevToken=="operator"&&n!="}"&&e.context.type!="}"||e.prevToken=="variable"&&a=="."||(e.prevToken=="}"||e.prevToken==")")&&a==".")return r*2+t.indented;if(t.align&&t.type=="}")return t.indented+(e.context.type==(n||"").charAt(0)?0:r)}},languageData:{closeBrackets:{brackets:["(","[","{","'",'"','"""']}}});const j=s({name:"shader",keywords:c("sampler1D sampler2D sampler3D samplerCube "+"sampler1DShadow sampler2DShadow "+"const attribute uniform varying "+"break continue discard return "+"for while do if else struct "+"in out inout"),types:c("float int bool void "+"vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 "+"mat2 mat3 mat4"),blockKeywords:c("for while do if else struct"),builtin:c("radians degrees sin cos tan asin acos atan "+"pow exp log exp2 sqrt inversesqrt "+"abs sign floor ceil fract mod min max clamp mix step smoothstep "+"length distance dot cross normalize ftransform faceforward "+"reflect refract matrixCompMult "+"lessThan lessThanEqual greaterThan greaterThanEqual "+"equal notEqual any all not "+"texture1D texture1DProj texture1DLod texture1DProjLod "+"texture2D texture2DProj texture2DLod texture2DProjLod "+"texture3D texture3DProj texture3DLod texture3DProjLod "+"textureCube textureCubeLod "+"shadow1D shadow2D shadow1DProj shadow2DProj "+"shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod "+"dFdx dFdy fwidth "+"noise1 noise2 noise3 noise4"),atoms:c("true false "+"gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex "+"gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 "+"gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 "+"gl_FogCoord gl_PointCoord "+"gl_Position gl_PointSize gl_ClipVertex "+"gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor "+"gl_TexCoord gl_FogFragCoord "+"gl_FragCoord gl_FrontFacing "+"gl_FragData gl_FragDepth "+"gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix "+"gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse "+"gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse "+"gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose "+"gl_ProjectionMatrixInverseTranspose "+"gl_ModelViewProjectionMatrixInverseTranspose "+"gl_TextureMatrixInverseTranspose "+"gl_NormalScale gl_DepthRange gl_ClipPlane "+"gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel "+"gl_FrontLightModelProduct gl_BackLightModelProduct "+"gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ "+"gl_FogParameters "+"gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords "+"gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats "+"gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits "+"gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits "+"gl_MaxDrawBuffers"),indentSwitch:false,hooks:{"#":v}});const A=s({name:"nesc",keywords:c(f+" as atomic async call command component components configuration event generic "+"implementation includes interface module new norace nx_struct nx_union post provides "+"signal task uses abstract extends"),types:g,blockKeywords:c(b),atoms:c("null true false"),hooks:{"#":v}});const U=s({name:"objectivec",keywords:c(f+" "+p),types:k,builtin:c(m),blockKeywords:c(b+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:c(w+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:true,atoms:c("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:x,hooks:{"#":v,"*":_}});const $=s({name:"objectivecpp",keywords:c(f+" "+p+" "+d),types:k,builtin:c(m),blockKeywords:c(b+" @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),defKeywords:c(w+" @interface @implementation @protocol @class class namespace"),dontIndentStatements:/^@.*$|^template$/,typeFirstDefinitions:true,atoms:c("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:x,hooks:{"#":v,"*":_,u:T,U:T,L:T,R:T,0:S,1:S,2:S,3:S,4:S,5:S,6:S,7:S,8:S,9:S,token:function(e,t,n){if(n=="variable"&&e.peek()=="("&&(t.prevToken==";"||t.prevToken==null||t.prevToken=="}")&&N(e.current()))return"def"}},namespaceSeparator:"::"});const B=s({name:"squirrel",keywords:c("base break clone continue const default delete enum extends function in class"+" foreach local resume return this throw typeof yield constructor instanceof static"),types:g,blockKeywords:c("case catch class else for foreach if switch try while"),defKeywords:c("function local class"),typeFirstDefinitions:true,atoms:c("true false null"),hooks:{"#":v}});var K=null;function q(e){return function(t,n){var r=false,a,i=false;while(!t.eol()){if(!r&&t.match('"')&&(e=="single"||t.match('""'))){i=true;break}if(!r&&t.match("``")){K=q(e);i=true;break}a=t.next();r=e=="single"&&!r&&a=="\\"}if(i)n.tokenize=null;return"string"}}const V=s({name:"ceylon",keywords:c("abstracts alias assembly assert assign break case catch class continue dynamic else"+" exists extends finally for function given if import in interface is let module new"+" nonempty object of out outer package return satisfies super switch then this throw"+" try value void while"),types:function(e){var t=e.charAt(0);return t===t.toUpperCase()&&t!==t.toLowerCase()},blockKeywords:c("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:c("class dynamic function interface module object package value"),builtin:c("abstract actual aliased annotation by default deprecated doc final formal late license"+" native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:true,typeFirstDefinitions:true,atoms:c("true false null larger smaller equal empty finished"),indentSwitch:false,styleDefs:false,hooks:{"@":function(e){e.eatWhile(/[\w\$_]/);return"meta"},'"':function(e,t){t.tokenize=q(e.match('""')?"triple":"single");return t.tokenize(e,t)},"`":function(e,t){if(!K||!e.match("`"))return false;t.tokenize=K;K=null;return t.tokenize(e,t)},"'":function(e){e.eatWhile(/[\w\$_\xa1-\uffff]/);return"atom"},token:function(e,t,n){if((n=="variable"||n=="type")&&t.prevToken=="."){return"variableName.special"}}},languageData:{closeBrackets:{brackets:["(","[","{","'",'"','"""']}}});function W(e){(e.interpolationStack||(e.interpolationStack=[])).push(e.tokenize)}function G(e){return(e.interpolationStack||(e.interpolationStack=[])).pop()}function Z(e){return e.interpolationStack?e.interpolationStack.length:0}function Q(e,t,n,r){var a=false;if(t.eat(e)){if(t.eat(e))a=true;else return"string"}function i(t,n){var i=false;while(!t.eol()){if(!r&&!i&&t.peek()=="$"){W(n);n.tokenize=X;return"string"}var o=t.next();if(o==e&&!i&&(!a||t.match(e+e))){n.tokenize=null;break}i=!r&&!i&&o=="\\"}return"string"}n.tokenize=i;return i(t,n)}function X(e,t){e.eat("$");if(e.eat("{")){t.tokenize=null}else{t.tokenize=Y}return null}function Y(e,t){e.eatWhile(/[\w_]/);t.tokenize=G(t);return"variable"}const H=s({name:"dart",keywords:c("this super static final const abstract class extends external factory "+"implements mixin get native set typedef with enum throw rethrow "+"assert break case continue default in return new deferred async await covariant "+"try catch finally do else for if switch while import library export "+"part of show hide is as extension on yield late required"),blockKeywords:c("try catch finally do else for if switch while"),builtin:c("void bool num int double dynamic var String Null Never"),atoms:c("true false null"),hooks:{"@":function(e){e.eatWhile(/[\w\$_\.]/);return"meta"},"'":function(e,t){return Q("'",e,t,false)},'"':function(e,t){return Q('"',e,t,false)},r:function(e,t){var n=e.peek();if(n=="'"||n=='"'){return Q(e.next(),e,t,true)}return false},"}":function(e,t){if(Z(t)>0){t.tokenize=G(t);return null}return false},"/":function(e,t){if(!e.eat("*"))return false;t.tokenize=F(1);return t.tokenize(e,t)},token:function(e,t,n){if(n=="variable"){var r=RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$","g");if(r.test(e.current())){return"type"}}}}})}}]);
//# sourceMappingURL=942.a09138c8d73a8526f131.js.map?v=a09138c8d73a8526f131