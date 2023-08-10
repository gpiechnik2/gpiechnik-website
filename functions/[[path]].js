globalThis.process = {
	argv: [],
	env: {},
};
var Af=Object.create;var pt=Object.defineProperty;var Ff=Object.getOwnPropertyDescriptor;var Ef=Object.getOwnPropertyNames;var Tf=Object.getPrototypeOf,Pf=Object.prototype.hasOwnProperty;var l=(e,t)=>()=>(e&&(t=e(e=0)),t);var ue=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),u=(e,t)=>{for(var i in t)pt(e,i,{get:t[i],enumerable:!0})},Rf=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ef(t))!Pf.call(e,o)&&o!==i&&pt(e,o,{get:()=>t[o],enumerable:!(n=Ff(t,o))||n.enumerable});return e};var h=(e,t,i)=>(i=e!=null?Af(Tf(e)):{},Rf(t||!e||!e.__esModule?pt(i,"default",{value:e,enumerable:!0}):i,e));var ht=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};var D=(e,t,i)=>(ht(e,t,"read from private field"),i?i.call(e):t.get(e)),O=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},q=(e,t,i,n)=>(ht(e,t,"write to private field"),n?n.call(e,i):t.set(e,i),i);var H=(e,t,i)=>(ht(e,t,"access private method"),i);var b=ue(mt=>{"use strict";mt.parse=If;mt.serialize=_f;var jf=Object.prototype.toString,Ue=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function If(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var i={},n=t||{},o=n.decode||Lf,s=0;s<e.length;){var a=e.indexOf("=",s);if(a===-1)break;var c=e.indexOf(";",s);if(c===-1)c=e.length;else if(c<a){s=e.lastIndexOf(";",a-1)+1;continue}var d=e.slice(s,a).trim();if(i[d]===void 0){var p=e.slice(a+1,c).trim();p.charCodeAt(0)===34&&(p=p.slice(1,-1)),i[d]=$f(p,o)}s=c+1}return i}function _f(e,t,i){var n=i||{},o=n.encode||Bf;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!Ue.test(e))throw new TypeError("argument name is invalid");var s=o(t);if(s&&!Ue.test(s))throw new TypeError("argument val is invalid");var a=e+"="+s;if(n.maxAge!=null){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(c)}if(n.domain){if(!Ue.test(n.domain))throw new TypeError("option domain is invalid");a+="; Domain="+n.domain}if(n.path){if(!Ue.test(n.path))throw new TypeError("option path is invalid");a+="; Path="+n.path}if(n.expires){var d=n.expires;if(!Wf(d)||isNaN(d.valueOf()))throw new TypeError("option expires is invalid");a+="; Expires="+d.toUTCString()}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.priority){var p=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(p){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var r=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(r){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a}function Lf(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Bf(e){return encodeURIComponent(e)}function Wf(e){return jf.call(e)==="[object Date]"||e instanceof Date}function $f(e,t){try{return t(e)}catch{return e}}});function Ae(e){return e[0]==="/"?e:"/"+e}function ft(e){return e.replace(/(?<!:)\/\/+/g,"/")}function qe(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function Of(e){return e.startsWith("/")?e.substring(1):e}function Nf(e){return e.replace(/^\/|\/$/g,"")}function Mf(e){return typeof e=="string"||e instanceof String}function gt(...e){return e.filter(Mf).map((t,i)=>i===0?qe(t):i===e.length-1?Of(t):Nf(t)).join("/")}function yt(e){return e.replace(/\\/g,"/")}var v=l(()=>{});function W(e,t){let i=new RegExp(`\\x1b\\[${t}m`,"g"),n=`\x1B[${e}m`,o=`\x1B[${t}m`;return function(s){return!zf.enabled||s==null?s:n+(~(""+s).indexOf(o)?s.replace(i,o+n):s)+o}}var wt,li,di,ui,pi,zf,hi,Fe,mi,EE,TE,PE,RE,jE,IE,fi,_E,Dt,LE,BE,gi,WE,$E,OE,NE,ME,zE,GE,UE,qE,HE,VE,k=l(()=>{pi=!0;typeof process<"u"&&({FORCE_COLOR:wt,NODE_DISABLE_COLORS:li,NO_COLOR:di,TERM:ui}=process.env||{},pi=process.stdout&&process.stdout.isTTY);zf={enabled:!li&&di==null&&ui!=="dumb"&&(wt!=null&&wt!=="0"||pi)};hi=W(0,0),Fe=W(1,22),mi=W(2,22),EE=W(3,23),TE=W(4,24),PE=W(7,27),RE=W(8,28),jE=W(9,29),IE=W(30,39),fi=W(31,39),_E=W(32,39),Dt=W(33,39),LE=W(34,39),BE=W(35,39),gi=W(36,39),WE=W(37,39),$E=W(90,39),OE=W(90,39),NE=W(40,49),ME=W(41,49),zE=W(42,49),GE=W(43,49),UE=W(44,49),qE=W(45,49),HE=W(46,49),VE=W(47,49)});function Gf(e){for(var t=[],i=0;i<e.length;){var n=e[i];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:i,value:e[i++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:i++,value:e[i++]});continue}if(n==="{"){t.push({type:"OPEN",index:i,value:e[i++]});continue}if(n==="}"){t.push({type:"CLOSE",index:i,value:e[i++]});continue}if(n===":"){for(var o="",s=i+1;s<e.length;){var a=e.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){o+=e[s++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(i));t.push({type:"NAME",index:i,value:o}),i=s;continue}if(n==="("){var c=1,d="",s=i+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){d+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));d+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(i));if(!d)throw new TypeError("Missing pattern at ".concat(i));t.push({type:"PATTERN",index:i,value:d}),i=s;continue}t.push({type:"CHAR",index:i,value:e[i++]})}return t.push({type:"END",index:i,value:""}),t}function Uf(e,t){t===void 0&&(t={});for(var i=Gf(e),n=t.prefixes,o=n===void 0?"./":n,s="[^".concat(Hf(t.delimiter||"/#?"),"]+?"),a=[],c=0,d=0,p="",r=function(X){if(d<i.length&&i[d].type===X)return i[d++].value},y=function(X){var te=r(X);if(te!==void 0)return te;var Ge=i[d],T=Ge.type,L=Ge.index;throw new TypeError("Unexpected ".concat(T," at ").concat(L,", expected ").concat(X))},F=function(){for(var X="",te;te=r("CHAR")||r("ESCAPED_CHAR");)X+=te;return X};d<i.length;){var $=r("CHAR"),j=r("NAME"),B=r("PATTERN");if(j||B){var _=$||"";o.indexOf(_)===-1&&(p+=_,_=""),p&&(a.push(p),p=""),a.push({name:j||c++,prefix:_,suffix:"",pattern:B||s,modifier:r("MODIFIER")||""});continue}var z=$||r("ESCAPED_CHAR");if(z){p+=z;continue}p&&(a.push(p),p="");var G=r("OPEN");if(G){var _=F(),J=r("NAME")||"",R=r("PATTERN")||"",Q=F();y("CLOSE"),a.push({name:J||(R?c++:""),pattern:J&&!R?s:R,prefix:_,suffix:Q,modifier:r("MODIFIER")||""});continue}y("END")}return a}function yi(e,t){return qf(Uf(e,t),t)}function qf(e,t){t===void 0&&(t={});var i=Vf(t),n=t.encode,o=n===void 0?function(d){return d}:n,s=t.validate,a=s===void 0?!0:s,c=e.map(function(d){if(typeof d=="object")return new RegExp("^(?:".concat(d.pattern,")$"),i)});return function(d){for(var p="",r=0;r<e.length;r++){var y=e[r];if(typeof y=="string"){p+=y;continue}var F=d?d[y.name]:void 0,$=y.modifier==="?"||y.modifier==="*",j=y.modifier==="*"||y.modifier==="+";if(Array.isArray(F)){if(!j)throw new TypeError('Expected "'.concat(y.name,'" to not repeat, but got an array'));if(F.length===0){if($)continue;throw new TypeError('Expected "'.concat(y.name,'" to not be empty'))}for(var B=0;B<F.length;B++){var _=o(F[B],y);if(a&&!c[r].test(_))throw new TypeError('Expected all "'.concat(y.name,'" to match "').concat(y.pattern,'", but got "').concat(_,'"'));p+=y.prefix+_+y.suffix}continue}if(typeof F=="string"||typeof F=="number"){var _=o(String(F),y);if(a&&!c[r].test(_))throw new TypeError('Expected "'.concat(y.name,'" to match "').concat(y.pattern,'", but got "').concat(_,'"'));p+=y.prefix+_+y.suffix;continue}if(!$){var z=j?"an array":"a string";throw new TypeError('Expected "'.concat(y.name,'" to be ').concat(z))}}return p}}function Hf(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Vf(e){return e&&e.sensitive?"":"i"}var wi=l(()=>{});var bi=ue((YE,Di)=>{"use strict";function He(){this._types=Object.create(null),this._extensions=Object.create(null);for(let e=0;e<arguments.length;e++)this.define(arguments[e]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}He.prototype.define=function(e,t){for(let i in e){let n=e[i].map(function(o){return o.toLowerCase()});i=i.toLowerCase();for(let o=0;o<n.length;o++){let s=n[o];if(s[0]!=="*"){if(!t&&s in this._types)throw new Error('Attempt to change mapping for "'+s+'" extension from "'+this._types[s]+'" to "'+i+'". Pass `force=true` to allow this, otherwise remove "'+s+'" from the list of extensions for "'+i+'".');this._types[s]=i}}if(t||!this._extensions[i]){let o=n[0];this._extensions[i]=o[0]!=="*"?o:o.substr(1)}}};He.prototype.getType=function(e){e=String(e);let t=e.replace(/^.*[/\\]/,"").toLowerCase(),i=t.replace(/^.*\./,"").toLowerCase(),n=t.length<e.length;return(i.length<t.length-1||!n)&&this._types[i]||null};He.prototype.getExtension=function(e){return e=/^\s*([^;\s]*)/.test(e)&&RegExp.$1,e&&this._extensions[e.toLowerCase()]||null};Di.exports=He});var ki=ue((ZE,vi)=>{vi.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}});var Si=ue((XE,xi)=>{xi.exports={"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]}});var x=ue((QE,Ci)=>{"use strict";var Kf=bi();Ci.exports=new Kf(ki(),Si())});function bt({onlyFirst:e=!1}={}){let t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e?void 0:"g")}var Ai=l(()=>{});var n3,Fi=l(()=>{Ai();n3=bt()});var Ti=ue((o3,vt)=>{var oe={};typeof vt>"u"?window.eastasianwidth=oe:vt.exports=oe;oe.eastAsianWidth=function(e){var t=e.charCodeAt(0),i=e.length==2?e.charCodeAt(1):0,n=t;return 55296<=t&&t<=56319&&56320<=i&&i<=57343&&(t&=1023,i&=1023,n=t<<10|i,n+=65536),n==12288||65281<=n&&n<=65376||65504<=n&&n<=65510?"F":n==8361||65377<=n&&n<=65470||65474<=n&&n<=65479||65482<=n&&n<=65487||65490<=n&&n<=65495||65498<=n&&n<=65500||65512<=n&&n<=65518?"H":4352<=n&&n<=4447||4515<=n&&n<=4519||4602<=n&&n<=4607||9001<=n&&n<=9002||11904<=n&&n<=11929||11931<=n&&n<=12019||12032<=n&&n<=12245||12272<=n&&n<=12283||12289<=n&&n<=12350||12353<=n&&n<=12438||12441<=n&&n<=12543||12549<=n&&n<=12589||12593<=n&&n<=12686||12688<=n&&n<=12730||12736<=n&&n<=12771||12784<=n&&n<=12830||12832<=n&&n<=12871||12880<=n&&n<=13054||13056<=n&&n<=19903||19968<=n&&n<=42124||42128<=n&&n<=42182||43360<=n&&n<=43388||44032<=n&&n<=55203||55216<=n&&n<=55238||55243<=n&&n<=55291||63744<=n&&n<=64255||65040<=n&&n<=65049||65072<=n&&n<=65106||65108<=n&&n<=65126||65128<=n&&n<=65131||110592<=n&&n<=110593||127488<=n&&n<=127490||127504<=n&&n<=127546||127552<=n&&n<=127560||127568<=n&&n<=127569||131072<=n&&n<=194367||177984<=n&&n<=196605||196608<=n&&n<=262141?"W":32<=n&&n<=126||162<=n&&n<=163||165<=n&&n<=166||n==172||n==175||10214<=n&&n<=10221||10629<=n&&n<=10630?"Na":n==161||n==164||167<=n&&n<=168||n==170||173<=n&&n<=174||176<=n&&n<=180||182<=n&&n<=186||188<=n&&n<=191||n==198||n==208||215<=n&&n<=216||222<=n&&n<=225||n==230||232<=n&&n<=234||236<=n&&n<=237||n==240||242<=n&&n<=243||247<=n&&n<=250||n==252||n==254||n==257||n==273||n==275||n==283||294<=n&&n<=295||n==299||305<=n&&n<=307||n==312||319<=n&&n<=322||n==324||328<=n&&n<=331||n==333||338<=n&&n<=339||358<=n&&n<=359||n==363||n==462||n==464||n==466||n==468||n==470||n==472||n==474||n==476||n==593||n==609||n==708||n==711||713<=n&&n<=715||n==717||n==720||728<=n&&n<=731||n==733||n==735||768<=n&&n<=879||913<=n&&n<=929||931<=n&&n<=937||945<=n&&n<=961||963<=n&&n<=969||n==1025||1040<=n&&n<=1103||n==1105||n==8208||8211<=n&&n<=8214||8216<=n&&n<=8217||8220<=n&&n<=8221||8224<=n&&n<=8226||8228<=n&&n<=8231||n==8240||8242<=n&&n<=8243||n==8245||n==8251||n==8254||n==8308||n==8319||8321<=n&&n<=8324||n==8364||n==8451||n==8453||n==8457||n==8467||n==8470||8481<=n&&n<=8482||n==8486||n==8491||8531<=n&&n<=8532||8539<=n&&n<=8542||8544<=n&&n<=8555||8560<=n&&n<=8569||n==8585||8592<=n&&n<=8601||8632<=n&&n<=8633||n==8658||n==8660||n==8679||n==8704||8706<=n&&n<=8707||8711<=n&&n<=8712||n==8715||n==8719||n==8721||n==8725||n==8730||8733<=n&&n<=8736||n==8739||n==8741||8743<=n&&n<=8748||n==8750||8756<=n&&n<=8759||8764<=n&&n<=8765||n==8776||n==8780||n==8786||8800<=n&&n<=8801||8804<=n&&n<=8807||8810<=n&&n<=8811||8814<=n&&n<=8815||8834<=n&&n<=8835||8838<=n&&n<=8839||n==8853||n==8857||n==8869||n==8895||n==8978||9312<=n&&n<=9449||9451<=n&&n<=9547||9552<=n&&n<=9587||9600<=n&&n<=9615||9618<=n&&n<=9621||9632<=n&&n<=9633||9635<=n&&n<=9641||9650<=n&&n<=9651||9654<=n&&n<=9655||9660<=n&&n<=9661||9664<=n&&n<=9665||9670<=n&&n<=9672||n==9675||9678<=n&&n<=9681||9698<=n&&n<=9701||n==9711||9733<=n&&n<=9734||n==9737||9742<=n&&n<=9743||9748<=n&&n<=9749||n==9756||n==9758||n==9792||n==9794||9824<=n&&n<=9825||9827<=n&&n<=9829||9831<=n&&n<=9834||9836<=n&&n<=9837||n==9839||9886<=n&&n<=9887||9918<=n&&n<=9919||9924<=n&&n<=9933||9935<=n&&n<=9953||n==9955||9960<=n&&n<=9983||n==10045||n==10071||10102<=n&&n<=10111||11093<=n&&n<=11097||12872<=n&&n<=12879||57344<=n&&n<=63743||65024<=n&&n<=65039||n==65533||127232<=n&&n<=127242||127248<=n&&n<=127277||127280<=n&&n<=127337||127344<=n&&n<=127386||917760<=n&&n<=917999||983040<=n&&n<=1048573||1048576<=n&&n<=1114109?"A":"N"};oe.characterLength=function(e){var t=this.eastAsianWidth(e);return t=="F"||t=="W"||t=="A"?2:1};function Ei(e){return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}oe.length=function(e){for(var t=Ei(e),i=0,n=0;n<t.length;n++)i=i+this.characterLength(t[n]);return i};oe.slice=function(e,t,i){textLen=oe.length(e),t=t||0,i=i||1,t<0&&(t=textLen+t),i<0&&(i=textLen+i);for(var n="",o=0,s=Ei(e),a=0;a<s.length;a++){var c=s[a],d=oe.length(c);if(o>=t-(d==2?1:0))if(o+d<=i)n+=c;else break;o+=d}return n}});var Ri=ue((s3,Pi)=>{"use strict";Pi.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var Jf,Yf,S=l(()=>{Fi();Jf=h(Ti(),1),Yf=h(Ri(),1)});var Zf,Xf,Qf,eg,ji,C=l(()=>{({replace:Zf}=""),Xf=/[&<>'"]/g,Qf={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},eg=e=>Qf[e],ji=e=>Zf.call(e,Xf,eg)});function rg(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function cg(e,t){if(!t||t.line===void 0||t.column===void 0)return"";let i=rg(e).split(`
`).map(a=>a.replace(/\t/g,"  ")),n=[];for(let a=-2;a<=2;a++)i[t.line+a]&&n.push(t.line+a);let o=0;for(let a of n){let c=`> ${a}`;c.length>o&&(o=c.length)}let s="";for(let a of n){let c=a===t.line-1;s+=c?"> ":"  ",s+=`${a+1} | ${i[a]}
`,c&&(s+=`${Array.from({length:o}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return s}function lg(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function go(e,t,i){var n;let o=((n=t?.split("/").pop())==null?void 0:n.replace(".astro",""))??"",s=(...a)=>{if(!lg(a))throw new P({...Oi,message:Oi.message(o)});return e(...a)};return Object.defineProperty(s,"name",{value:o,writable:!1}),s.isAstroComponentFactory=!0,s.moduleId=t,s.propagation=i,s}function dg(e){return go(e.factory,e.moduleId,e.propagation)}function V(e,t,i){return typeof e=="function"?go(e,t,i):dg(e)}function ug(){return t=>{if(typeof t=="string")throw new P({...Mi,message:Mi.message(JSON.stringify(t))});let i=[...Object.values(t)];if(i.length===0)throw new P({...zi,message:zi.message(JSON.stringify(t))});return Promise.all(i.map(n=>n()))}}function K(e){return{site:e?new URL(e):void 0,generator:`Astro v${yo}`,glob:ug()}}function pg(e,t){if(e[t])return e[t];if(t==="delete"&&e.del)return e.del;if(e.all)return e.all}async function Ui(e,t,i){var n;let{request:o,params:s}=t,a=(n=o.method)==null?void 0:n.toLowerCase(),c=pg(e,a);if(!i&&i===!1&&a&&a!=="get"&&console.warn(`
${a} requests are not available when building a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` with an \`export const prerender = false\` to handle ${a} requests.`),!c||typeof c!="function")return new Response(null,{status:404,headers:{"X-Astro-Response":"Not-Found"}});c.length>1&&console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);let d=new Proxy(t,{get(p,r){return r in p?Reflect.get(p,r):r in s?(console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`),Reflect.get(s,r)):void 0}});return c.call(e,d,o)}function wo(e){let t={};return i(e),Object.keys(t).join(" ");function i(n){n&&typeof n.forEach=="function"?n.forEach(i):n===Object(n)?Object.keys(n).forEach(o=>{n[o]&&i(o)}):(n=n===!1||n==null?"":String(n).trim(),n&&n.split(/\s+/).forEach(o=>{t[o]=!0}))}}function Qt(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}async function*Lt(e){let t=e.getReader();try{for(;;){let{done:i,value:n}=await t.read();if(i)return;yield n}}finally{t.releaseLock()}}function hg(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function mg(e){return new Je(e)}function Do(e){return typeof e.getReader=="function"}async function*qi(e){if(Do(e))for await(let t of Lt(e))yield le(t);else for await(let t of e)yield le(t)}function*fg(e){for(let t of e)yield le(t)}function le(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return mg(e);if(e instanceof Response&&e.body){let t=e.body;return qi(t)}else{if(typeof e.then=="function")return Promise.resolve(e).then(t=>le(t));if(Symbol.iterator in e)return fg(e);if(Symbol.asyncIterator in e||Do(e))return qi(e)}}return I(e)}function Ft(e,t={},i=new WeakSet){if(i.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);i.add(e);let n=e.map(o=>vo(o,t,i));return i.delete(e),n}function bo(e,t={},i=new WeakSet){if(i.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);i.add(e);let n=Object.fromEntries(Object.entries(e).map(([o,s])=>[o,vo(s,t,i)]));return i.delete(e),n}function vo(e,t={},i=new WeakSet){switch(Object.prototype.toString.call(e)){case"[object Date]":return[Y.Date,e.toISOString()];case"[object RegExp]":return[Y.RegExp,e.source];case"[object Map]":return[Y.Map,Ft(Array.from(e),t,i)];case"[object Set]":return[Y.Set,Ft(Array.from(e),t,i)];case"[object BigInt]":return[Y.BigInt,e.toString()];case"[object URL]":return[Y.URL,e.toString()];case"[object Array]":return[Y.JSON,Ft(e,t,i)];case"[object Uint8Array]":return[Y.Uint8Array,Array.from(e)];case"[object Uint16Array]":return[Y.Uint16Array,Array.from(e)];case"[object Uint32Array]":return[Y.Uint32Array,Array.from(e)];default:return e!==null&&typeof e=="object"?[Y.Value,bo(e,t,i)]:e===void 0?[Y.Value]:[Y.Value,e]}}function ko(e,t){return JSON.stringify(bo(e,t))}function yg(e,t){let i={isPage:!1,hydration:null,props:{}};for(let[n,o]of Object.entries(e))if(n.startsWith("server:")&&n==="server:root"&&(i.isPage=!0),n.startsWith("client:"))switch(i.hydration||(i.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),n){case"client:component-path":{i.hydration.componentUrl=o;break}case"client:component-export":{i.hydration.componentExport.value=o;break}case"client:component-hydration":break;case"client:display-name":break;default:{if(i.hydration.directive=n.split(":")[1],i.hydration.value=o,!t.has(i.hydration.directive)){let s=Array.from(t.keys()).map(a=>`client:${a}`).join(", ");throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${s}`)}if(i.hydration.directive==="media"&&typeof i.hydration.value!="string")throw new P(tg);break}}else n==="class:list"?o&&(i.props[n.slice(0,-5)]=wo(o)):i.props[n]=o;for(let n of Object.getOwnPropertySymbols(e))i.props[n]=e[n];return i}async function wg(e,t){let{renderer:i,result:n,astroId:o,props:s,attrs:a}=e,{hydrate:c,componentUrl:d,componentExport:p}=t;if(!p.value)throw new Error(`Unable to resolve a valid export for "${t.displayName}"! Please open an issue at https://astro.build/issues!`);let r={children:"",props:{uid:o}};if(a)for(let[F,$]of Object.entries(a))r.props[F]=Te($);r.props["component-url"]=await n.resolve(decodeURI(d)),i.clientEntrypoint&&(r.props["component-export"]=p.value,r.props["renderer-url"]=await n.resolve(decodeURI(i.clientEntrypoint)),r.props.props=Te(ko(s,t))),r.props.ssr="",r.props.client=c;let y=await n.resolve("astro:scripts/before-hydration.js");return y.length&&(r.props["before-hydration-url"]=y),r.props.opts=Te(JSON.stringify({name:t.displayName,value:t.hydrateArgs||""})),gg.forEach(F=>{s[F]&&(r.props[F]=s[F])}),r}function Dg(e){let t=0;if(e.length===0)return t;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);t=(t<<5)-t+n,t=t&t}return t}function bg(e){let t,i="",n=Dg(e),o=n<0?"Z":"";for(n=Math.abs(n);n>=Et;)t=n%Et,n=Math.floor(n/Et),i=Bt[t]+i;return n>0&&(i=Bt[n]+i),o+i}function xo(e){return e==null?!1:e.isAstroComponentFactory===!0}function vg(e,t){let i=t.propagation||"none";return t.moduleId&&e.componentMetadata.has(t.moduleId)&&i==="none"&&(i=e.componentMetadata.get(t.moduleId).propagation),i==="in-tree"||i==="self"}function en(e){return typeof e=="object"&&!!e[So]}function kg(e,t){return{[So]:!0,head:e,content:t}}function Cg(e){return e._metadata.hasHydrationScript?!1:e._metadata.hasHydrationScript=!0}function Ag(e,t){return e._metadata.hasDirectives.has(t)?!1:(e._metadata.hasDirectives.add(t),!0)}function Hi(e,t){let n=e.clientDirectives.get(t);if(!n)throw new Error(`Unknown directive: ${t}`);return n}function Fg(e,t,i){switch(t){case"both":return`${Sg}<script>${Hi(e,i)};${xg}<\/script>`;case"directive":return`<script>${Hi(e,i)}<\/script>`}return""}function Ig(e){var t;let i="";for(let[n,o]of Object.entries(e))i+=`const ${jg(n)} = ${(t=JSON.stringify(o))==null?void 0:t.replace(/<\/script>/g,"\\x3C/script>")};
`;return I(i)}function Ki(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}function E(e,t,i=!0){if(e==null)return"";if(e===!1)return Tg.test(t)||Pg.test(t)?I(` ${t}="false"`):"";if(Rg.has(t))return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),"";if(t==="class:list"){let n=we(wo(e),i);return n===""?"":I(` ${t.slice(0,-5)}="${n}"`)}if(t==="style"&&!(e instanceof me)){if(Array.isArray(e)&&e.length===2)return I(` ${t}="${we(`${Vi(e[0])};${e[1]}`,i)}"`);if(typeof e=="object")return I(` ${t}="${we(Vi(e),i)}"`)}return t==="className"?I(` class="${we(e,i)}"`):e===!0&&(t.startsWith("data-")||Eg.test(t))?I(` ${t}`):I(` ${t}="${we(e,i)}"`)}function Wt(e,t=!0){let i="";for(let[n,o]of Object.entries(e))i+=E(o,n,t);return I(i)}function ae(e,{props:t,children:i=""},n=!0){let{lang:o,"data-astro-id":s,"define:vars":a,...c}=t;return a&&(e==="style"&&(delete c["is:global"],delete c["is:scoped"]),e==="script"&&(delete c.hoist,i=Ig(a)+`
`+i)),(i==null||i=="")&&tn.test(e)?`<${e}${Wt(c,n)} />`:`<${e}${Wt(c,n)}>${i}</${e}>`}function Ji(e){e._metadata.hasRenderedHead=!0;let t=Array.from(e.styles).filter(Pt).map(s=>s.props.rel==="stylesheet"?ae("link",s):ae("style",s));e.styles.clear();let i=Array.from(e.scripts).filter(Pt).map(s=>ae("script",s,!1)),o=Array.from(e.links).filter(Pt).map(s=>ae("link",s,!1)).join(`
`)+t.join(`
`)+i.join(`
`);if(e._metadata.extraHead.length>0)for(let s of e._metadata.extraHead)o+=s;return I(o)}function*Co(){yield{type:"head"}}function*ee(){yield{type:"maybe-head"}}function _g(e){return!!e[Ao]}function st(e,t,i){return!t&&i?st(e,i):{async render(n){await De(n,typeof t=="function"?t(e):t)}}}async function Se(e,t,i){let n="",o=null,s={write(c){c instanceof Response||(typeof c=="object"&&"type"in c&&typeof c.type=="string"?(o===null&&(o=[]),o.push(c)):n+=fe(e,c))}};return await st(e,t,i).render(s),I(new Ye(n,o))}async function Fo(e,t={}){let i=null,n={};return t&&await Promise.all(Object.entries(t).map(([o,s])=>Se(e,s).then(a=>{a.instructions&&(i===null&&(i=[]),i.push(...a.instructions)),n[o]=a}))),{slotInstructions:i,children:n}}function nn(e,t){if(typeof t.type=="string"){let i=t;switch(i.type){case"directive":{let{hydration:n}=i,o=n&&Cg(e),s=n&&Ag(e,n.directive),a=o?"both":s?"directive":null;if(a){let c=Fg(e,a,n.directive);return I(c)}else return""}case"head":return e._metadata.hasRenderedHead?"":Ji(e);case"maybe-head":return e._metadata.hasRenderedHead||e._metadata.headInTree?"":Ji(e);default:{if(t instanceof Response)return"";throw new Error(`Unknown chunk type: ${t.type}`)}}}else{if(_g(t)){let i="",n=t;if(n.instructions)for(let o of n.instructions)i+=nn(e,o);return i+=t.toString(),i}return t.toString()}}function fe(e,t){return ArrayBuffer.isView(t)?Lg.decode(t):nn(e,t)}function Bg(e,t){if(ArrayBuffer.isView(t))return t;{let i=nn(e,t);return Ze.encode(i.toString())}}function Wg(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}async function De(e,t){if(t=await t,t instanceof Ye)e.write(t);else if(hg(t))e.write(t);else if(Array.isArray(t))for(let i of t)await De(e,i);else if(typeof t=="function")await De(e,t());else if(typeof t=="string")e.write(I(Te(t)));else if(!(!t&&t!==0))if(Wg(t))await t.render(e);else if(jo(t))await t.render(e);else if(Ng(t))await t.render(e);else if(ArrayBuffer.isView(t))e.write(t);else if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))for await(let i of t)await De(e,i);else e.write(t)}function $g(e,t){if(e!=null)for(let i of Object.keys(e))i.startsWith("client:")&&console.warn(`You are attempting to render <${t} ${i} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function Og(e,t,i,n,o={}){$g(n,t);let s=new Ot(e,n,o,i);return vg(e,i)&&!e._metadata.propagators.has(i)&&e._metadata.propagators.set(i,s),s}function Ng(e){return typeof e=="object"&&!!e[To]}function jo(e){return typeof e=="object"&&!!e[Ro]}function w(e,...t){return new Nt(e,t)}async function Io(e,t,i,n,o=!1,s){let a=await _o(e,t,i,n,s);if(a instanceof Response)return a;let c="",d=!1,p={write(r){if(o&&!d&&(d=!0,!/<!doctype html/i.test(String(r)))){let y=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;c+=y}r instanceof Response||(c+=fe(e,r))}};return await a.render(p),c}async function Mg(e,t,i,n,o=!1,s){let a=await _o(e,t,i,n,s);if(a instanceof Response)return a;let c=!1;return o&&await zg(e),new ReadableStream({start(d){let p={write(r){if(o&&!c&&(c=!0,!/<!doctype html/i.test(String(r)))){let F=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;d.enqueue(Ze.encode(F))}if(r instanceof Response)throw new P({...Xt});let y=Bg(e,r);d.enqueue(y)}};(async()=>{try{await a.render(p),d.close()}catch(r){P.is(r)&&!r.loc&&r.setLocation({file:s?.component}),setTimeout(()=>d.error(r),0)}})()}})}async function _o(e,t,i,n,o){let s=await t(e,i,n);if(s instanceof Response)return s;if(!jo(s))throw new P({...Ii,message:Ii.message(o?.route,typeof s),location:{file:o?.component}});return en(s)?s.content:s}async function zg(e){let t=e._metadata.propagators.values();for(;;){let{value:i,done:n}=t.next();if(n)break;let o=await i.init(e);en(o)&&e._metadata.extraHead.push(o.head)}}function Gg(e){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(e)}async function Ug(e,t,i,n){let o=qg(t),s="";for(let a in i)s+=` ${a}="${we(await i[a])}"`;return I(`<${o}${s}>${await Se(e,n?.default)}</${o}>`)}function qg(e){let t=customElements.getName(e);return t||e.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}function Vg(e){switch(e?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue","@astrojs/svelte","@astrojs/lit"]}}function Kg(e){return e===m}function Jg(e){return e&&e["astro:html"]===!0}function Xg(e,t){let i=t?Zg:Yg;return e.replace(i,"")}async function Qg(e,t,i,n,o={}){var s,a,c;if(!i&&!n["client:only"])throw new Error(`Unable to render ${t} because it is ${i}!
Did you forget to import the component or is it possible there is a typo?`);let{renderers:d,clientDirectives:p}=e,r={astroStaticSlot:!0,displayName:t},{hydration:y,isPage:F,props:$}=yg(n,p),j="",B;y&&(r.hydrate=y.directive,r.hydrateArgs=y.value,r.componentExport=y.componentExport,r.componentUrl=y.componentUrl);let _=Vg(r.componentUrl),z=d.filter(T=>T.name!=="astro:jsx"),{children:G,slotInstructions:J}=await Fo(e,o),R;if(r.hydrate!=="only"){let T=!1;try{T=i&&i[$t]}catch{}if(T){let L=i[$t];R=d.find(({name:U})=>U===L)}if(!R){let L;for(let U of d)try{if(await U.ssr.check.call({result:e},i,$,G)){R=U;break}}catch(ut){L??(L=ut)}if(!R&&L)throw L}if(!R&&typeof HTMLElement=="function"&&Gg(i)){let L=await Ug(e,i,n,o);return{render(U){U.write(L)}}}}else{if(r.hydrateArgs){let T=r.hydrateArgs,L=Yi.has(T)?Yi.get(T):T;R=d.find(({name:U})=>U===`@astrojs/${L}`||U===L)}if(!R&&z.length===1&&(R=z[0]),!R){let T=(s=r.componentUrl)==null?void 0:s.split(".").pop();R=d.filter(({name:L})=>L===`@astrojs/${T}`||L===T)[0]}}if(R)r.hydrate==="only"?j=await Se(e,o?.fallback):{html:j,attrs:B}=await R.ssr.renderToStaticMarkup.call({result:e},i,$,G,r);else{if(r.hydrate==="only")throw new P({...St,message:St.message(r.displayName),hint:St.hint(_.map(T=>T.replace("@astrojs/","")).join("|"))});if(typeof i!="string"){let T=z.filter(U=>_.includes(U.name)),L=z.length>1;if(T.length===0)throw new P({...xt,message:xt.message(r.displayName,(a=r?.componentUrl)==null?void 0:a.split(".").pop(),L,z.length),hint:xt.hint(Ki(_.map(U=>"`"+U+"`")))});if(T.length===1)R=T[0],{html:j,attrs:B}=await R.ssr.renderToStaticMarkup.call({result:e},i,$,G,r);else throw new Error(`Unable to render ${r.displayName}!

This component likely uses ${Ki(_)},
but Astro encountered an error during server-side rendering.

Please ensure that ${r.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(R&&!R.clientEntrypoint&&R.name!=="@astrojs/lit"&&r.hydrate)throw new P({..._i,message:_i.message(t,r.hydrate,R.name)});if(!j&&typeof i=="string"){let T=ey(i),L=Object.values(G).join(""),U=w`<${T}${Wt($)}${I(L===""&&tn.test(T)?"/>":`>${L}</${T}>`)}`;j="";let ut={write(ci){ci instanceof Response||(j+=fe(e,ci))}};await U.render(ut)}if(!y)return{render(T){var L;if(J)for(let U of J)T.write(U);F||R?.name==="astro:jsx"?T.write(j):j&&j.length>0&&T.write(I(Xg(j,((L=R?.ssr)==null?void 0:L.supportsAstroStaticSlot)??!1)))}};let Q=bg(`<!--${r.componentExport.value}:${r.componentUrl}-->
${j}
${ko($,r)}`),X=await wg({renderer:R,result:e,astroId:Q,props:$,attrs:B},r),te=[];if(j){if(Object.keys(G).length>0)for(let T of Object.keys(G)){let L=(c=R?.ssr)!=null&&c.supportsAstroStaticSlot?r.hydrate?"astro-slot":"astro-static-slot":"astro-slot",U=T==="default"?`<${L}>`:`<${L} name="${T}">`;j.includes(U)||te.push(T)}}else te=Object.keys(G);let Ge=te.length>0?te.map(T=>`<template data-astro-template${T!=="default"?`="${T}"`:""}>${G[T]}</template>`).join(""):"";return X.children=`${j??""}${Ge}`,X.children&&(X.props["await-children"]=""),{render(T){if(J)for(let L of J)T.write(L);T.write({type:"directive",hydration:y}),T.write(I(ae("astro-island",X,!1)))}}}function ey(e){let t=/[&<>'"\s]+/g;return t.test(e)?e.trim().split(t)[0].trim():e}async function ty(e,t={}){let i=await Se(e,t?.default);return{render(n){i!=null&&n.write(i)}}}async function ny(e,t,i,n={}){let{slotInstructions:o,children:s}=await Fo(e,n),a=t({slots:s}),c=o?o.map(d=>fe(e,d)).join(""):"";return{render(d){d.write(I(c+a))}}}function iy(e,t,i,n,o={}){let s=Og(e,t,i,n,o),a=[],c={write:p=>a.push(p)},d=s.render(c);return{async render(p){for(let r of a)p.write(r);a.length=0,c.write=r=>p.write(r),await d}}}async function N(e,t,i,n,o={}){return Qt(i)&&(i=await i),Kg(i)?await ty(e,o):Jg(i)?await ny(e,i,n,o):xo(i)?iy(e,t,i,n,o):await Qg(e,t,i,n,o)}async function Mt(e,t,i,n,o={},s=!1,a){let c="",d=!1,p="";if(oy(i))for(let r of ee())p+=fe(e,r);try{let r={write(F){if(s&&!d&&(d=!0,!/<!doctype html/i.test(String(F)))){let $=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;c+=$+p}F instanceof Response||(c+=fe(e,F))}};await(await N(e,t,i,n,o)).render(r)}catch(r){throw P.is(r)&&!r.loc&&r.setLocation({file:a?.component}),r}return c}function oy(e){return!!e?.[Hg]}async function ce(e,t){switch(!0){case t instanceof me:return t.toString().trim()===""?"":t;case typeof t=="string":return I(Te(t));case typeof t=="function":return t;case(!t&&t!==0):return"";case Array.isArray(t):return I((await Promise.all(t.map(n=>ce(e,n)))).join(""))}let i;return t.props?t.props[re.symbol]?i=t.props[re.symbol]:i=new re(t):i=new re(t),Gt(e,t,i)}async function Gt(e,t,i){if(Re(t)){switch(!0){case!t.type:throw new Error(`Unable to render ${e.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);case t.type===Symbol.for("astro:fragment"):return ce(e,t.props.children);case t.type.isAstroComponentFactory:{let n={},o={};for(let[c,d]of Object.entries(t.props??{}))c==="children"||d&&typeof d=="object"&&d.$$slot?o[c==="children"?"default":c]=()=>ce(e,d):n[c]=d;let s=await Io(e,t.type,n,o);if(s instanceof Response)throw s;return I(s)}case(!t.type&&t.type!==0):return"";case(typeof t.type=="string"&&t.type!==Zi):return I(await sy(e,t.type,t.props??{}))}if(t.type){let n=function(r){if(Array.isArray(r))return r.map(y=>n(y));if(!Re(r)){a.default.push(r);return}if("slot"in r.props){a[r.props.slot]=[...a[r.props.slot]??[],r],delete r.props.slot;return}a.default.push(r)};if(typeof t.type=="function"&&t.type["astro:renderer"]&&i.increment(),typeof t.type=="function"&&t.props["server:root"]){let r=await t.type(t.props??{});return await ce(e,r)}if(typeof t.type=="function")if(i.haveNoTried()||i.isCompleted()){ry();try{let r=await t.type(t.props??{}),y;if(r?.[at])return y=await Gt(e,r,i),y;if(!r)return y=await Gt(e,r,i),y}catch(r){if(i.isCompleted())throw r;i.increment()}finally{cy()}}else i.increment();let{children:o=null,...s}=t.props??{},a={default:[]};n(o);for(let[r,y]of Object.entries(s))y.$$slot&&(a[r]=y,delete s[r]);let c=[],d={};for(let[r,y]of Object.entries(a))c.push(ce(e,y).then(F=>{F.toString().trim().length!==0&&(d[r]=()=>F)}));await Promise.all(c),s[re.symbol]=i;let p;return t.type===Zi&&t.props["client:only"]?p=await Mt(e,t.props["client:display-name"]??"",null,s,d):p=await Mt(e,typeof t.type=="function"?t.type.name:t.type,t.type,s,d),I(p)}}return I(`${t}`)}async function sy(e,t,{children:i,...n}){return I(`<${t}${f(n)}${I((i==null||i=="")&&tn.test(t)?"/>":`>${i==null?"":await ce(e,ay(t,i))}</${t}>`)}`)}function ay(e,t){return typeof t=="string"&&(e==="style"||e==="script")?I(t):t}function ry(){if(on++,!zt){zt=console.error;try{console.error=ly}catch{}}}function cy(){on--}function ly(e,...t){on>0&&typeof e=="string"&&e.includes("Warning: Invalid hook call.")&&e.includes("https://reactjs.org/link/invalid-hook-call")||zt(e,...t)}function dy(){var e,t,i;return Pe=(i=class extends Response{constructor(o,s){let a=o instanceof ReadableStream;super(a?null:o,s);O(this,e,void 0);O(this,t,void 0);q(this,e,a),q(this,t,o)}get body(){return D(this,t)}async text(){if(D(this,e)&&Ut){let o=new TextDecoder,s=D(this,t),a="";for await(let c of Lt(s))a+=o.decode(c);return a}return super.text()}async arrayBuffer(){if(D(this,e)&&Ut){let o=D(this,t),s=[],a=0;for await(let p of Lt(o))s.push(p),a+=p.length;let c=new Uint8Array(a),d=0;for(let p of s)c.set(p,d),d+=p.length;return c}return super.arrayBuffer()}clone(){return new Pe(D(this,t),{status:this.status,statusText:this.statusText,headers:this.headers})}},e=new WeakMap,t=new WeakMap,i),Pe}async function py(e,t,i,n,o,s){var a,c;if(!xo(t)){e._metadata.headInTree=((a=e.componentMetadata.get(t.moduleId))==null?void 0:a.containsHead)??!1;let F={...i??{},"server:root":!0},$=await Mt(e,t.name,t,F,null,!0,s),j=Ze.encode($);return new Response(j,{headers:new Headers([["Content-Type","text/html; charset=utf-8"],["Content-Length",j.byteLength.toString()]])})}e._metadata.headInTree=((c=e.componentMetadata.get(t.moduleId))==null?void 0:c.containsHead)??!1;let d;if(o?d=await Mg(e,t,i,n,!0,s):d=await Io(e,t,i,n,!0,s),d instanceof Response)return d;let p=e.response,r=new Headers(p.headers);return!o&&typeof d=="string"&&(d=Ze.encode(d),r.set("Content-Length",d.byteLength.toString())),uy(d,{...p,headers:r})}function hy({props:e,children:t}){return ae("script",{props:e,children:t})}function Xi(e,t){if(t.type==="external")return Array.from(e.styles).some(i=>i.props.href===t.src)?"":ae("link",{props:{rel:"stylesheet",href:t.src},children:""});if(t.type==="inline")return Array.from(e.styles).some(i=>i.children.includes(t.content))?"":ae("style",{props:{type:"text/css"},children:t.content})}function f(e={},t,{class:i}={}){let n="";i&&(typeof e.class<"u"?e.class+=` ${i}`:typeof e["class:list"]<"u"?e["class:list"]=[e["class:list"],i]:e.class=i);for(let[o,s]of Object.entries(e))n+=E(s,o,!0);return I(n)}function Re(e){return e&&typeof e=="object"&&e[at]}function my(e){if(typeof e.type=="string")return e;let t={};if(Re(e.props.children)){let i=e.props.children;if(!Re(i)||!("slot"in i.props))return;let n=eo(i.props.slot);t[n]=[i],t[n].$$slot=!0,delete i.props.slot,delete e.props.children}Array.isArray(e.props.children)&&(e.props.children=e.props.children.map(i=>{if(!Re(i)||!("slot"in i.props))return i;let n=eo(i.props.slot);return Array.isArray(t[n])?t[n].push(i):(t[n]=[i],t[n].$$slot=!0),delete i.props.slot,Qi}).filter(i=>i!==Qi)),Object.assign(e.props,t)}function Lo(e){return typeof e=="string"?I(e):Array.isArray(e)?e.map(t=>Lo(t)):e}function fy(e){if("set:html"in e.props||"set:text"in e.props){if("set:html"in e.props){let t=Lo(e.props["set:html"]);delete e.props["set:html"],Object.assign(e.props,{children:t});return}if("set:text"in e.props){let t=e.props["set:text"];delete e.props["set:text"],Object.assign(e.props,{children:t});return}}}function g(e,t){let i={[$t]:"astro:jsx",[at]:!0,type:e,props:t??{}};return fy(i),my(i),i}async function gy(e,t,{default:i=null,...n}={}){if(typeof e!="function")return!1;let o={};for(let[s,a]of Object.entries(n)){let c=Bo(s);o[c]=a}try{return(await e({...t,...o,children:i}))[at]}catch(s){let a=s;if(e[Symbol.for("mdx-component")])throw wy({message:a.message,title:a.name,hint:"This issue often occurs when your MDX component encounters runtime errors.",name:a.name,stack:a.stack})}return!1}async function yy(e,t={},{default:i=null,...n}={}){let o={};for(let[c,d]of Object.entries(n)){let p=Bo(c);o[p]=d}let{result:s}=this;return{html:await ce(s,g(e,{...t,...o,children:i}))}}function wy({message:e,name:t,stack:i,hint:n}){let o=new Error(e);return o.name=t,o.stack=i,o.hint=n,o}function sn(e,t){Reflect.set(e,Oo,t)}function vy(e){let t=Reflect.get(e,Oo);if(t!=null)return t}function*ky(e){let t=vy(e);if(!t)return[];for(let i of t.headers())yield i;return[]}function No(e,t,i,n){let o=e.level,s=e.dest,a={type:i,level:t,message:n};Qe[o]>Qe[t]||s.write(a)}function ge(e,t,i){return No(e,"warn",t,i)}function Sy(e,t,i){return No(e,"error",t,i)}function Cy(...e){"_astroGlobalDebug"in globalThis&&globalThis._astroGlobalDebug(...e)}function Ty(e){return e?.type==="redirect"}function Py(e,t){let i=e.redirectRoute,n=e.redirect;return typeof i<"u"?i?.generate(t)||i?.pathname||"/":typeof n=="string"?n:typeof n>"u"?"/":n.destination}function Ry(e,t="GET"){let i=e.redirectRoute;return typeof i?.redirect=="object"?i.redirect.status:t!=="GET"?308:301}async function Mo(e,t,i,n){let o=!1,s,c=t(i,async()=>(o=!0,s=n(),s));return await Promise.resolve(c).then(async d=>{if(jy(d)&&ge(e,"middleware",`Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${Fe("Response")} objects.`),o)if(typeof d<"u"){if(!(d instanceof Response))throw new P(At);return d}else{if(s)return s;throw new P(At)}else{if(typeof d>"u")throw new P(sg);if(d instanceof Response)return d;throw new P(At)}})}function jy(e){return!(e instanceof Response)&&typeof e=="object"&&typeof e.body=="string"}function zo({request:e,params:t,site:i,props:n,adapterName:o}){let s={cookies:new Xe(e),request:e,params:t,site:i?new URL(i):void 0,generator:`Astro v${yo}`,props:n,redirect(a,c){return new Response(null,{status:c||302,headers:{Location:a}})},url:new URL(e.url),get clientAddress(){if(!(io in e))throw o?new P({...Ke,message:Ke.message(o)}):new P(mo);return Reflect.get(e,io)}};return Object.defineProperty(s,"locals",{enumerable:!0,get(){return Reflect.get(e,oo)},set(a){if(typeof a!="object")throw new P(fo);Reflect.set(e,oo,a)}}),s}async function Iy(e,t,i,n){var o;let s=zo({request:i.request,params:i.params,props:i.props,site:t.site,adapterName:t.adapterName}),a;return n?a=await Mo(t.logging,n,s,async()=>await Ui(e,s,t.ssr)):a=await Ui(e,s,t.ssr),a instanceof Response?(sn(a,s.cookies),{type:"response",response:a}):(t.ssr&&!((o=i.route)!=null&&o.prerender)&&(a.hasOwnProperty("headers")&&ge(t.logging,"ssr","Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."),a.encoding&&ge(t.logging,"ssr","`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.")),{...a,type:"simple",cookies:s.cookies})}function Ly(e){var t;if(e&&((t=e.expressions)==null?void 0:t.length)===1)return e.expressions[0]}function By(e){let{markdown:t,params:i,request:n,resolve:o,locals:s}=e,a=new URL(n.url),c=new Headers;c.set("Content-Type","text/html");let d={status:e.status,statusText:"OK",headers:c};Object.defineProperty(d,"headers",{value:d.headers,enumerable:!0,writable:!1});let p=e.cookies,r={styles:e.styles??new Set,scripts:e.scripts??new Set,links:e.links??new Set,componentMetadata:e.componentMetadata??new Map,renderers:e.renderers,clientDirectives:e.clientDirectives,compressHTML:e.compressHTML,pathname:e.pathname,cookies:p,createAstro(y,F,$){let j=new Vt(r,$,e.logging),B={__proto__:y,get clientAddress(){if(!(so in n))throw e.adapterName?new P({...Ke,message:Ke.message(e.adapterName)}):new P(mo);return Reflect.get(n,so)},get cookies(){return p||(p=new Xe(n),r.cookies=p,p)},params:i,props:F,locals:s,request:n,url:a,redirect(_,z){if(n[_y])throw new P({...Xt});return new Response(null,{status:z||302,headers:{Location:_}})},response:d,slots:j};return Object.defineProperty(B,"__renderMarkdown",{enumerable:!1,writable:!1,value:async function(_,z){if(typeof Deno<"u")throw new Error("Markdown is not supported in Deno SSR");if(!jt){let J="@astrojs/";J+="markdown-remark",jt=(await import(J)).renderMarkdown}let{code:G}=await jt(_,{...t,...z??{}});return G}}),B},resolve:o,response:d,_metadata:{hasHydrationScript:!1,hasRenderedHead:!1,hasDirectives:new Set,headInTree:!1,extraHead:[],propagators:new Map}};return r}async function ao({mod:e,renderContext:t,env:i,cookies:n}){if(Ty(t.route))return new Response(null,{status:Ry(t.route,t.request.method),headers:{location:Py(t.route,t.params)}});let o=e.default;if(!o)throw new Error(`Expected an exported Astro component but received typeof ${typeof o}`);let s=By({adapterName:i.adapterName,links:t.links,styles:t.styles,logging:i.logging,markdown:i.markdown,params:t.params,pathname:t.pathname,componentMetadata:t.componentMetadata,resolve:i.resolve,renderers:i.renderers,clientDirectives:i.clientDirectives,compressHTML:i.compressHTML,request:t.request,site:i.site,scripts:t.scripts,ssr:i.ssr,status:t.status??200,cookies:n,locals:t.locals??{}});typeof e.components=="object"&&Object.assign(t.props,{components:e.components});let a=await py(s,o,t.props,null,i.streaming,t.route);return s.cookies&&sn(a,s.cookies),a}async function ro(e,t,i,n,o){let s=zo({request:t.request,params:t.params,props:t.props,site:i.site,adapterName:i.adapterName});switch(e){case"page":case"redirect":return o?await Mo(i.logging,o,s,()=>ao({mod:n,renderContext:t,env:i,cookies:s.cookies})):await ao({mod:n,renderContext:t,env:i,cookies:s.cookies});case"endpoint":return await Iy(n,i,t,o);default:throw new Error(`Couldn't find route of type [${e}]`)}}function Wy(e,t){return e instanceof Response&&(t==="page"||t==="redirect")}function Oy([e,t],i){if(!$y.includes(typeof t))throw new P({...Wi,message:Wi.message(e,t,typeof t),location:{file:i}})}function Ny(e,{ssr:t,route:i}){if((!t||i.prerender)&&!e.getStaticPaths)throw new P({...og,location:{file:i.component}})}function My(e,t,i){if(!Array.isArray(e))throw new P({...Bi,message:Bi.message(typeof e),location:{file:i.component}});e.forEach(n=>{if(n.params===void 0||n.params===null||n.params&&Object.keys(n.params).length===0)throw new P({...ig,location:{file:i.component}});if(typeof n.params!="object")throw new P({...Li,message:Li.message(typeof n.params),location:{file:i.component}});for(let[o,s]of Object.entries(n.params))typeof s>"u"||typeof s=="string"||typeof s=="number"||ge(t,"getStaticPaths",`invalid path param: ${o}. A string, number or undefined value was expected, but got \`${JSON.stringify(s)}\`.`),typeof s=="string"&&s===""&&ge(t,"getStaticPaths",`invalid path param: ${o}. \`undefined\` expected for an optional param, but got empty string.`)})}function zy(e){return i=>{let n={};return e.forEach((o,s)=>{o.startsWith("...")?n[o.slice(3)]=i[s+1]?decodeURIComponent(i[s+1]):void 0:n[o]=decodeURIComponent(i[s+1])}),n}}function Go(e,t){let i=Object.entries(e).reduce((n,o)=>{Oy(o,t.component);let[s,a]=o;return n[s]=a?.toString(),n},{});return JSON.stringify(t.generate(i))}function Gy(e){return function(i,n={}){let{pageSize:o,params:s,props:a}=n,c=o||10,d="page",p=s||{},r=a||{},y;if(e.params.includes(`...${d}`))y=!1;else if(e.params.includes(`${d}`))y=!0;else throw new P({...Ni,message:Ni.message(d)});let F=Math.max(1,Math.ceil(i.length/c));return[...Array(F).keys()].map(j=>{let B=j+1,_=c===1/0?0:(B-1)*c,z=Math.min(_+c,i.length),G={...p,[d]:y||B>1?String(B):void 0},J=It(e.generate({...G})),R=B===F?void 0:It(e.generate({...G,page:String(B+1)})),Q=B===1?void 0:It(e.generate({...G,page:!y&&B-1===1?void 0:String(B-1)}));return{params:G,props:{...r,page:{data:i.slice(_,z),start:_,end:z-1,size:c,total:i.length,currentPage:B,lastPage:F,url:{current:J,next:R,prev:Q}}}}})}}function It(e){return e===""?"/":e}async function Uy({mod:e,route:t,routeCache:i,isValidate:n,logging:o,ssr:s}){let a=i.get(t);if(a?.staticPaths)return a.staticPaths;if(Ny(e,{ssr:s,route:t}),s&&!t.prerender){let p=Object.assign([],{keyed:new Map});return i.set(t,{...a,staticPaths:p}),p}if(!e.getStaticPaths)throw new Error("Unexpected Error.");let c=[];c=await e.getStaticPaths({paginate:Gy(t),rss(){throw new P(ng)}}),Array.isArray(c)&&(c=c.flat()),n&&My(c,o,t);let d=c;d.keyed=new Map;for(let p of d){let r=Go(p.params,t);d.keyed.set(r,p)}return i.set(t,{...a,staticPaths:d}),d}function qy(e,t,i){let n=Go(t,i),o=e.keyed.get(n);if(o)return o;Cy("findPathItemByKey",`Unexpected cache miss looking for ${n}`)}async function Hy(e){let{logging:t,mod:i,route:n,routeCache:o,pathname:s,ssr:a}=e;if(!n||n.pathname)return[{},{}];let c=Vy(n,s)??{};Ky(n,i,c);let d=await Uy({mod:i,route:n,routeCache:o,isValidate:!0,logging:t,ssr:a}),p=qy(d,c,n);if(!p&&(!a||n.prerender))throw new P({...kt,message:kt.message(s),hint:kt.hint([n.component])});let r=p?.props?{...p.props}:{};return[c,r]}function Vy(e,t){if(e.params.length){let i=e.pattern.exec(decodeURIComponent(t));if(i)return zy(e.params)(i)}}function Ky(e,t,i){if(e.type==="endpoint"&&t.getStaticPaths){let n=e.segments[e.segments.length-1],o=Object.values(i),s=o[o.length-1];if(n.length===1&&n[0].dynamic&&s===void 0)throw new P({...Ct,message:Ct.message(e.route),hint:Ct.hint(e.component),location:{file:e.component}})}}async function lo(e){let t=e.request,i=e.pathname??new URL(t.url).pathname,[n,o]=await Hy({mod:e.mod,route:e.route,routeCache:e.env.routeCache,pathname:i,logging:e.env.logging,ssr:e.env.ssr}),s={...e,pathname:i,params:n,props:o};return Object.defineProperty(s,"locals",{enumerable:!0,get(){return Reflect.get(t,co)},set(a){if(typeof a!="object")throw new P(fo);Reflect.set(t,co,a)}}),s}function an(e,t,i){return i?gt(i,yt(e)):t?Ae(gt(t,yt(e))):e}function Jy(e,t,i){return e.type==="inline"?{props:{type:"text/css"},children:e.content}:{props:{rel:"stylesheet",href:an(e.src,t,i)},children:""}}function Yy(e,t,i){return new Set(e.map(n=>Jy(n,t,i)))}function Zy(e,t,i){return e.type==="external"?Xy(e.value,t,i):{props:{type:"module"},children:e.value}}function Xy(e,t,i){return{props:{type:"module",src:an(e,t,i)},children:""}}function uo(e,t){return t.routes.find(i=>i.pattern.test(decodeURI(e)))}function Qy(e,t){let i=e.map(s=>"/"+s.map(a=>a.spread?`:${a.content.slice(3)}(.*)?`:a.dynamic?`:${a.content}`:a.content.normalize().replace(/\?/g,"%3F").replace(/#/g,"%23").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("")).join(""),n="";return t==="always"&&e.length&&(n="/"),yi(i+n)}function Jt(e){return{route:e.route,type:e.type,pattern:new RegExp(e.pattern),params:e.params,component:e.component,generate:Qy(e.segments,e._meta.trailingSlash),pathname:e.pathname||void 0,segments:e.segments,prerender:e.prerender,redirect:e.redirect,redirectRoute:e.redirectRoute?Jt(e.redirectRoute):void 0}}function Uo(e){let t=[];for(let s of e.routes){t.push({...s,routeData:Jt(s.routeData)});let a=s;a.routeData=Jt(s.routeData)}let i=new Set(e.assets),n=new Map(e.componentMetadata),o=new Map(e.clientDirectives);return{...e,assets:i,componentMetadata:n,clientDirectives:o,routes:t}}function Me({globResult:e,contentDir:t}){let i={};for(let n in e){let s=n.replace(new RegExp(`^${t}`),"").split("/");if(s.length<=1)continue;let a=s[0];i[a]??(i[a]={}),i[a][n]=e[n]}return i}function Vo({contentCollectionToEntryMap:e,dataCollectionToEntryMap:t,getRenderEntryImport:i}){return async function(o,s){let a;if(o in e)a="content";else if(o in t)a="data";else throw new P({...Gi,message:Gi.message(o)});let c=Object.values(a==="content"?e[o]:t[o]),d=[];return _t.has(o)?d=_t.get(o):(d=await Promise.all(c.map(async p=>{let r=await p();return a==="content"?{id:r.id,slug:r.slug,body:r.body,collection:r.collection,data:r.data,async render(){return nw({collection:r.collection,id:r.id,renderEntryImport:await i(o,r.slug)})}}:{id:r.id,collection:r.collection,data:r.data}})),_t.set(o,d)),typeof s=="function"?d.filter(s):d}}async function nw({collection:e,id:t,renderEntryImport:i}){var n,o;let s=new P({...ag,message:`Unexpected error while rendering ${String(e)} \u2192 ${String(t)}.`});if(typeof i!="function")throw s;let a=await i();if(a==null||typeof a!="object")throw s;let{default:c}=a;if(iw(c)){let{collectedStyles:d,collectedLinks:p,collectedScripts:r,getMod:y}=c;if(typeof y!="function")throw s;let F=await y();if(F==null||typeof F!="object")throw s;return{Content:V({factory(j,B,_){let z="",G="",J="";Array.isArray(d)&&(z=d.map(Q=>Xi(j,{type:"inline",content:Q})).join("")),Array.isArray(p)&&(G=p.map(Q=>Xi(j,{type:"external",src:Ae(Q)})).join("")),Array.isArray(r)&&(J=r.map(Q=>hy(Q)).join(""));let R=B;return t.endsWith("mdx")&&(R={components:F.components??{},...B}),kg(le(z+G+J),w`${N(j,"Content",F.Content,R,_)}`)},propagation:"self"}),headings:((n=F.getHeadings)==null?void 0:n.call(F))??[],remarkPluginFrontmatter:F.frontmatter??{}}}else{if(a.Content&&typeof a.Content=="function")return{Content:a.Content,headings:((o=a.getHeadings)==null?void 0:o.call(a))??[],remarkPluginFrontmatter:a.frontmatter??{}};throw s}}function iw(e){return typeof e=="object"&&e!=null&&"__astroPropagation"in e}var Ie,ho,Ke,mo,kt,Ii,tg,xt,_i,St,Li,Bi,ng,ig,Wi,og,$i,Oi,Ni,Ct,Xt,sg,At,fo,Mi,zi,ag,Gi,P,yo,Te,Je,me,I,Y,gg,Bt,Et,So,xg,Sg,tn,Eg,Tg,Pg,Rg,jg,we,Tt,Vi,Pt,Ao,Ye,m,$t,Ze,Lg,Eo,To,Ot,Po,Ro,Nt,Hg,Yi,Yg,Zg,Zi,re,zt,on,Ut,Pe,uy,at,Qi,eo,Bo,Wo,Dy,to,by,je,be,ne,Z,_e,qt,Le,Ht,tt,$o,Xe,Oo,xy,Qe,no,Rt,Ay,Fy,Ey,io,oo,so,_y,Be,ie,We,Vt,jt,$y,Kt,co,ew,po,tw,se,M,pe,$e,nt,ve,ke,it,qo,Oe,Yt,he,Ee,xe,Ve,ot,Ho,Ne,Zt,et,_t,A=l(()=>{"use strict";Ie=h(b(),1);v();k();wi();ho=h(x(),1);S();C();Ke={name:"ClientAddressNotAvailable",title:"`Astro.clientAddress` is not available in current adapter.",message:e=>`\`Astro.clientAddress\` is not available in the \`${e}\` adapter. File an issue with the adapter to add support.`},mo={name:"StaticClientAddressNotAvailable",title:"`Astro.clientAddress` is not available in static mode.",message:"`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."},kt={name:"NoMatchingStaticPathFound",title:"No static path found for requested path.",message:e=>`A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e}\`.`,hint:e=>`Possible dynamic routes being matched: ${e.join(", ")}.`},Ii={name:"OnlyResponseCanBeReturned",title:"Invalid type returned by Astro page.",message:(e,t)=>`Route \`${e||""}\` returned a \`${t}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,hint:"See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."},tg={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},xt={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,t,i,n)=>`Unable to render \`${e}\`.

${n>0?`There ${i?"are":"is"} ${n} renderer${i?"s":""} configured in your \`astro.config.mjs\` file,
but ${i?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},_i={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,t,i)=>`\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${i}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},St={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},Li={name:"InvalidGetStaticPathParam",title:"Invalid value returned by a `getStaticPaths` path.",message:e=>`Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},Bi={name:"InvalidGetStaticPathsReturn",title:"Invalid value returned by getStaticPaths.",message:e=>`Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},ng={name:"GetStaticPathsRemovedRSSHelper",title:"getStaticPaths RSS helper is not available anymore.",message:"The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",hint:"See https://docs.astro.build/en/guides/rss/ for more information."},ig={name:"GetStaticPathsExpectedParams",title:"Missing params property on `getStaticPaths` route.",message:"Missing or empty required `params` property on `getStaticPaths` route.",hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},Wi={name:"GetStaticPathsInvalidRouteParam",title:"Invalid value for `getStaticPaths` route parameter.",message:(e,t,i)=>`Invalid getStaticPaths route parameter for \`${e}\`. Expected undefined, a string or a number, received \`${i}\` (\`${t}\`)`,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},og={name:"GetStaticPathsRequired",title:"`getStaticPaths()` function required for dynamic routes.",message:"`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",hint:'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.'},$i={name:"ReservedSlotName",title:"Invalid slot name.",message:e=>`Unable to create a slot named \`${e}\`. \`${e}\` is a reserved slot name. Please update the name of this slot.`},Oi={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},Ni={name:"PageNumberParamNotFound",title:"Page number param not found.",message:e=>`[paginate()] page number param \`${e}\` not found in your filepath.`,hint:"Rename your file to `[page].astro` or `[...page].astro`."},Ct={name:"PrerenderDynamicEndpointPathCollide",title:"Prerendered dynamic endpoint has path collision.",message:e=>`Could not render \`${e}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,hint:e=>`Rename \`${e}\` to \`${e.replace(/\.(js|ts)/,t=>".json"+t)}\``},Xt={name:"ResponseSentError",title:"Unable to set response.",message:"The response has already been sent to the browser and cannot be altered."},sg={name:"MiddlewareNoDataOrNextCalled",title:"The middleware didn't return a response or call `next`.",message:"The middleware needs to either return a `Response` object or call the `next` function."},At={name:"MiddlewareNotAResponse",title:"The middleware returned something that is not a `Response` object.",message:"Any data returned from middleware must be a valid `Response` object."},fo={name:"LocalsNotAnObject",title:"Value assigned to `locals` is not accepted.",message:"`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",hint:"If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."},Mi={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},zi={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`},ag={name:"UnknownContentCollectionError",title:"Unknown Content Collection Error."},Gi={name:"CollectionDoesNotExistError",title:"Collection does not exist",message:e=>`The collection **${e}** does not exist. Ensure a collection directory with this name exists.`,hint:"See https://docs.astro.build/en/guides/content-collections/ for more on creating collections."};P=class extends Error{constructor(t,...i){super(...i),this.type="AstroError";let{name:n,title:o,message:s,stack:a,location:c,hint:d,frame:p}=t;this.title=o,this.name=n,s&&(this.message=s),this.stack=a||this.stack,this.loc=c,this.hint=d,this.frame=p}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,i){this.frame=cg(t,i)}static is(t){return t.type==="AstroError"}};yo="2.10.5";Te=ji,Je=class extends Uint8Array{};Object.defineProperty(Je.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});me=class extends String{get[Symbol.toStringTag](){return"HTMLString"}},I=e=>e instanceof me?e:typeof e=="string"?new me(e):e;Y={Value:0,JSON:1,RegExp:2,Date:3,Map:4,Set:5,BigInt:6,URL:7,Uint8Array:8,Uint16Array:9,Uint32Array:10};gg=Object.freeze(["data-astro-transition-scope","data-astro-transition-persist"]);Bt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",Et=Bt.length;So=Symbol.for("astro.headAndContent");xg='(()=>{var d;{let p={0:t=>u(t),1:t=>l(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(l(t)),5:t=>new Set(l(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},h=t=>{let[e,n]=t;return e in p?p[e](n):void 0},l=t=>t.map(h),u=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,n])=>[e,h(n)]));customElements.get("astro-island")||customElements.define("astro-island",(d=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=async()=>{var i;if(!this.hydrator||!this.isConnected)return;let e=(i=this.parentElement)==null?void 0:i.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let n=this.querySelectorAll("astro-slot"),o={},a=this.querySelectorAll("template[data-astro-template]");for(let r of a){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(o[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of n){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(o[r.getAttribute("name")||"default"]=r.innerHTML)}let c;try{c=this.hasAttribute("props")?u(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",y=this.getAttribute("component-export");throw y&&(s+=` (export ${y})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}await this.hydrator(this)(this.Component,c,o,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((e,n)=>{n.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),n=this.getAttribute("client");if(Astro[n]===void 0){window.addEventListener(`astro:${n}`,()=>this.start(),{once:!0});return}Astro[n](async()=>{let o=this.getAttribute("renderer-url"),[a,{default:c}]=await Promise.all([import(this.getAttribute("component-url")),o?import(o):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(let r of i.split("."))this.Component=this.Component[r]}return this.hydrator=c,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},d.observedAttributes=["props"],d))}})();',Sg="<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";tn=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,Eg=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,Tg=/^(contenteditable|draggable|spellcheck|value)$/i,Pg=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,Rg=new Set(["set:html","set:text"]),jg=e=>e.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g,(t,i)=>/[^\w]|\s/.test(t)?"":i===0?t:t.toUpperCase()),we=(e,t=!0)=>t?String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):e,Tt=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Vi=e=>Object.entries(e).map(([t,i])=>t[0]!=="-"&&t[1]!=="-"?`${Tt(t)}:${i}`:Tt(t)!==t?`${Tt(t)}:var(${t});${t}:${i}`:`${t}:${i}`).join(";");Pt=(e,t,i)=>{let n=JSON.stringify(e.props),o=e.children;return t===i.findIndex(s=>JSON.stringify(s.props)===n&&s.children==o)};Ao=Symbol.for("astro:slot-string"),Ye=class extends me{constructor(t,i){super(t),this.instructions=i,this[Ao]=!0}};m=Symbol.for("astro:fragment"),$t=Symbol.for("astro:renderer"),Ze=new TextEncoder,Lg=new TextDecoder;To=Symbol.for("astro.componentInstance"),Ot=class{constructor(t,i,n,o){this[Eo]=!0,this.result=t,this.props=i,this.factory=o,this.slotValues={};for(let s in n){let a=n[s](t);this.slotValues[s]=()=>a}}async init(t){return this.returnValue!==void 0?this.returnValue:(this.returnValue=this.factory(t,this.props,this.slotValues),this.returnValue)}async render(t){this.returnValue===void 0&&await this.init(this.result);let i=this.returnValue;Qt(i)&&(i=await i),en(i)?await i.content.render(t):await De(t,i)}};Eo=To;Ro=Symbol.for("astro.renderTemplateResult"),Nt=class{constructor(t,i){this[Po]=!0,this.htmlParts=t,this.error=void 0,this.expressions=i.map(n=>Qt(n)?Promise.resolve(n).catch(o=>{if(!this.error)throw this.error=o,o}):n)}async render(t){for(let i=0;i<this.htmlParts.length;i++){let n=this.htmlParts[i],o=this.expressions[i];t.write(I(n)),(o||o===0)&&await De(t,o)}}};Po=Ro;Hg=Symbol.for("astro.needsHeadRendering"),Yi=new Map([["solid","solid-js"]]);Yg=/\<\/?astro-slot\b[^>]*>/g,Zg=/\<\/?astro-static-slot\b[^>]*>/g;Zi="astro-client-only",re=class{constructor(t){this.vnode=t,this.count=0}increment(){this.count++}haveNoTried(){return this.count===0}isCompleted(){return this.count>2}};re.symbol=Symbol("astro:jsx:skip");on=0;Ut=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]";uy=Ut?(e,t)=>typeof e=="string"||ArrayBuffer.isView(e)?new Response(e,t):typeof Pe>"u"?new(dy())(e,t):new Pe(e,t):(e,t)=>new Response(e,t);at="astro:jsx",Qi=Symbol("empty"),eo=e=>e;Bo=e=>e.trim().replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase());Wo={check:gy,renderToStaticMarkup:yy},Dy=new Date(0),to="deleted",by=Symbol.for("astro.responseSent"),je=class{constructor(t){this.value=t}json(){if(this.value===void 0)throw new Error("Cannot convert undefined to an object.");return JSON.parse(this.value)}number(){return Number(this.value)}boolean(){return this.value==="false"||this.value==="0"?!1:!!this.value}},Xe=class{constructor(t){O(this,_e);O(this,Le);O(this,tt);O(this,be,void 0);O(this,ne,void 0);O(this,Z,void 0);q(this,be,t),q(this,ne,null),q(this,Z,null)}delete(t,i){let n={expires:Dy};i?.domain&&(n.domain=i.domain),i?.path&&(n.path=i.path),H(this,Le,Ht).call(this).set(t,[to,(0,Ie.serialize)(t,to,n),!1])}get(t){var i;if((i=D(this,Z))!=null&&i.has(t)){let[s,,a]=D(this,Z).get(t);return a?new je(s):new je(void 0)}let o=H(this,_e,qt).call(this)[t];return new je(o)}has(t){var i;if((i=D(this,Z))!=null&&i.has(t)){let[,,o]=D(this,Z).get(t);return o}return!!H(this,_e,qt).call(this)[t]}set(t,i,n){let o;if(typeof i=="string")o=i;else{let a=i.toString();a===Object.prototype.toString.call(i)?o=JSON.stringify(i):o=a}let s={};if(n&&Object.assign(s,n),H(this,Le,Ht).call(this).set(t,[o,(0,Ie.serialize)(t,o,s),!0]),D(this,be)[by])throw new P({...Xt})}*headers(){if(D(this,Z)!=null)for(let[,t]of D(this,Z))yield t[1]}};be=new WeakMap,ne=new WeakMap,Z=new WeakMap,_e=new WeakSet,qt=function(){return D(this,ne)||H(this,tt,$o).call(this),D(this,ne)||q(this,ne,{}),D(this,ne)},Le=new WeakSet,Ht=function(){return D(this,Z)||q(this,Z,new Map),D(this,Z)},tt=new WeakSet,$o=function(){let t=D(this,be).headers.get("cookie");t&&q(this,ne,(0,Ie.parse)(t))};Oo=Symbol.for("astro.cookies");xy=new Intl.DateTimeFormat([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Qe={debug:20,info:30,warn:40,error:50,silent:90};if(typeof process<"u"){let e=process;"argv"in e&&Array.isArray(e.argv)&&(e.argv.includes("--verbose")||e.argv.includes("--silent"))}Rt=1,Ay={write(e){let t=console.error;Qe[e.level]<Qe.error&&(t=console.log);function i(){let s="",a=e.type;return a&&(s+=mi(xy.format(new Date)+" "),e.level==="info"?a=Fe(gi(`[${a}]`)):e.level==="warn"?a=Fe(Dt(`[${a}]`)):e.level==="error"&&(a=Fe(fi(`[${a}]`))),s+=`${a} `),hi(s)}let n=e.message;n===no?(Rt++,n=`${n} ${Dt(`(x${Rt})`)}`):(no=n,Rt=1);let o=i()+n;return t(o),!0}},Fy={default(){return new Response(null,{status:301})}},Ey={page:()=>Promise.resolve(Fy),onRequest:(e,t)=>t(),renderers:[]};io=Symbol.for("astro.clientAddress"),oo=Symbol.for("astro.locals");so=Symbol.for("astro.clientAddress"),_y=Symbol.for("astro.responseSent");Vt=class{constructor(t,i,n){O(this,Be,void 0);O(this,ie,void 0);O(this,We,void 0);if(q(this,Be,t),q(this,ie,i),q(this,We,n),i)for(let o of Object.keys(i)){if(this[o]!==void 0)throw new P({...$i,message:$i.message(o)});Object.defineProperty(this,o,{get(){return!0},enumerable:!0})}}has(t){return D(this,ie)?!!D(this,ie)[t]:!1}async render(t,i=[]){if(!D(this,ie)||!this.has(t))return;let n=D(this,Be);if(!Array.isArray(i))ge(D(this,We),"Astro.slots.render",`Expected second parameter to be an array, received a ${typeof i}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);else if(i.length>0){let a=D(this,ie)[t],c=typeof a=="function"?await a(n):await a,d=Ly(c);if(d)return await Se(n,async()=>typeof d=="function"?d(...i):d).then(r=>r!=null?String(r):r);if(typeof c=="function")return await ce(n,c(...i)).then(p=>p!=null?String(p):p)}let o=await Se(n,D(this,ie)[t]);return fe(n,o)}};Be=new WeakMap,ie=new WeakMap,We=new WeakMap;jt=null;$y=["string","number","undefined"];Kt=class{constructor(t,i="production"){this.cache={},this.logging=t,this.mode=i}clearAll(){this.cache={}}set(t,i){var n;this.mode==="production"&&((n=this.cache[t.component])!=null&&n.staticPaths)&&ge(this.logging,"routeCache",`Internal Warning: route cache overwritten. (${t.component})`),this.cache[t.component]=i}get(t){return this.cache[t.component]}};co=Symbol.for("astro.locals");ew=Symbol.for("astro.locals"),po=Symbol.for("astro.responseSent"),tw=new Set([404,500]),et=class{constructor(t,i=!0){O(this,it);O(this,Oe);O(this,he);O(this,xe);O(this,ot);O(this,Ne);O(this,se,void 0);O(this,M,void 0);O(this,pe,void 0);O(this,$e,void 0);O(this,nt,new TextEncoder);O(this,ve,{dest:Ay,level:"info"});O(this,ke,void 0);q(this,M,t),q(this,pe,{routes:t.routes.map(n=>n.routeData)}),q(this,$e,new Map(t.routes.map(n=>[n.routeData,n]))),q(this,ke,qe(D(this,M).base)),q(this,se,H(this,it,qo).call(this,i))}set setManifest(t){q(this,M,t)}set setManifestData(t){q(this,pe,t)}removeBase(t){return t.startsWith(D(this,M).base)?t.slice(D(this,ke).length+1):t}match(t,i={}){let n=new URL(t.url);if(D(this,M).assets.has(n.pathname))return;let o=Ae(this.removeBase(n.pathname)),s=uo(o,D(this,pe));if(!(!s||s.prerender))return s}async render(t,i,n){if(t.url!==ft(t.url)&&(t=new Request(ft(t.url),t)),i||(i=this.match(t)),!i)return H(this,he,Ee).call(this,t,{status:404});Reflect.set(t,ew,n??{});let o=H(this,ot,Ho).call(this,i.route),s=await H(this,Ne,Zt).call(this,i),a=await s.page(),c=new URL(t.url),d=await H(this,Oe,Yt).call(this,c,t,i,s,o),p;try{p=await ro(i.type,d,D(this,se),a,s.onRequest)}catch(r){return Sy(D(this,ve),"ssr",r.stack||r.message||String(r)),H(this,he,Ee).call(this,t,{status:500})}if(Wy(p,i.type))return tw.has(p.status)?H(this,he,Ee).call(this,t,{response:p,status:p.status}):(Reflect.set(p,po,!0),p);if(p.type==="response")return p.response.headers.get("X-Astro-Response")==="Not-Found"?H(this,he,Ee).call(this,t,{response:p.response,status:404}):p.response;{let r=new Headers,y=ho.default.getType(c.pathname);y?r.set("Content-Type",`${y};charset=utf-8`):r.set("Content-Type","text/plain;charset=utf-8");let F=p.encoding!=="binary"?D(this,nt).encode(p.body):p.body;r.set("Content-Length",F.byteLength.toString());let $=new Response(F,{status:200,headers:r});return sn($,p.cookies),$}}setCookieHeaders(t){return ky(t)}};se=new WeakMap,M=new WeakMap,pe=new WeakMap,$e=new WeakMap,nt=new WeakMap,ve=new WeakMap,ke=new WeakMap,it=new WeakSet,qo=function(t=!1){return{adapterName:D(this,M).adapterName,logging:D(this,ve),markdown:D(this,M).markdown,mode:"production",compressHTML:D(this,M).compressHTML,renderers:D(this,M).renderers,clientDirectives:D(this,M).clientDirectives,resolve:async i=>{if(!(i in D(this,M).entryModules))throw new Error(`Unable to resolve [${i}]`);let n=D(this,M).entryModules[i];switch(!0){case n.startsWith("data:"):case n.length===0:return n;default:return an(n,D(this,M).base,D(this,M).assetsPrefix)}},routeCache:new Kt(D(this,ve)),site:D(this,M).site,ssr:!0,streaming:t}},Oe=new WeakSet,Yt=async function(t,i,n,o,s=200){if(n.type==="endpoint"){let a="/"+this.removeBase(t.pathname),d=await o.page();return await lo({request:i,pathname:a,route:n,status:s,env:D(this,se),mod:d})}else{let a=Ae(this.removeBase(t.pathname)),c=D(this,$e).get(n),d=new Set,p=Yy(c.styles),r=new Set;for(let F of c.scripts)"stage"in F?F.stage==="head-inline"&&r.add({props:{},children:F.children}):r.add(Zy(F));let y=await o.page();return await lo({request:i,pathname:a,componentMetadata:D(this,M).componentMetadata,scripts:r,styles:p,links:d,route:n,status:s,mod:y,env:D(this,se)})}},he=new WeakSet,Ee=async function(t,{status:i,response:n}){let o=uo("/"+i,D(this,pe)),s=new URL(t.url);if(o){if(o.prerender&&!o.route.endsWith(`/${i}`)){let d=new URL(`${D(this,ke)}/${i}`,s),p=await fetch(d.toString());return H(this,xe,Ve).call(this,p,n)}let c=await H(this,Ne,Zt).call(this,o);try{let d=await H(this,Oe,Yt).call(this,s,t,o,c,i),p=await c.page(),r=await ro("page",d,D(this,se),p);return H(this,xe,Ve).call(this,r,n)}catch{}}let a=H(this,xe,Ve).call(this,new Response(null,{status:i}),n);return Reflect.set(a,po,!0),a},xe=new WeakSet,Ve=function(t,i){if(!i)return t;let{status:n,statusText:o,headers:s}=i;return new Response(t.body,{status:n===200?t.status:n,statusText:n===200?t.statusText:o,headers:new Headers(Array.from(s))})},ot=new WeakSet,Ho=function(t){return t=qe(t),t.endsWith("/404")?404:t.endsWith("/500")?500:200},Ne=new WeakSet,Zt=async function(t){if(t.type==="redirect")return Ey;if(D(this,M).pageMap){let i=D(this,M).pageMap.get(t.component);if(!i)throw new Error(`Unexpectedly unable to find a component instance for route ${t.route}`);return await i()}else{if(D(this,M).pageModule)return D(this,M).pageModule;throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.")}};_t=new Map});var D3,k3,de,ze=l(()=>{"use strict";A();D3=h(b(),1);v();k();k3=h(x(),1);S();C();de=[Object.assign({name:"astro:jsx",serverEntrypoint:"astro/jsx/server.js",jsxImportSource:"astro"},{ssr:Wo})]});var Ce,rt=l(()=>{"use strict";Ce=void 0});var Ko={};u(Ko,{_internal:()=>lw,body:()=>rw,collection:()=>sw,data:()=>cw,id:()=>ow,slug:()=>aw});var ow,sw,aw,rw,cw,lw,Jo=l(()=>{"use strict";ow="951-using-chatgpt-to-write-nuclei-exploits.md",sw="posts",aw="using-chatgpt-to-write-nuclei-exploits",rw=`
## Using ChatGPT to write nuclei exploits

In the ever-evolving realm of cybersecurity, AI-driven tools like ChatGPT are making waves. But how can they be harnessed effectively for penetration testing? This article delves into the intricate dance of crafting exploits using ChatGPT, with a special focus on the Nuclei tool.

\u{1F4CC} Inside this Exploration:

- AI in Cybersecurity: A brief overview of how AI, especially ChatGPT, is revolutionizing the cybersecurity landscape.
- Nuclei 101: Get acquainted with Nuclei, a powerful framework for crafting vulnerability templates in yaml format.
- Crafting Exploits with ChatGPT: A step-by-step guide on how to converse with ChatGPT to generate exploits. From simple XSS attacks to more advanced ones, discover the art of asking the right questions.
- Real-World Testing: Dive into practical examples, understand the nuances of creating exploits, and learn how to refine them for optimal results.
- The Power of Precision: Understand the importance of precise questioning and how it can make or break your exploit generation process with ChatGPT.
- Final Thoughts: Reflect on the potential of AI in penetration testing and the future of exploit generation.

Whether you're a seasoned cybersecurity professional or an enthusiast eager to explore the confluence of AI and penetration testing, this guide offers a comprehensive look into the potential of ChatGPT in the world of exploit creation. Dive in and discover how the right questions can unlock a world of possibilities! \u{1F6E1}\uFE0F\u{1F916}\u{1F510}

Link: https://medium.com/@gpiechnik/using-chatgpt-to-write-nuclei-exploits-9546e9ffa8ff
`,cw={title:"Using ChatGPT to write nuclei exploits",publishedAt:new Date(16898112e5),description:"\u{1F50D} Harnessing ChatGPT for Penetration Testing: A Deep Dive \u{1F50D}",isPublish:!0,isDraft:!1},lw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md",rawData:`
title: "Using ChatGPT to write nuclei exploits"
publishedAt: 2023-07-20
description: "\u{1F50D} Harnessing ChatGPT for Penetration Testing: A Deep Dive \u{1F50D}"
slug: "using-chatgpt-to-write-nuclei-exploits"
isPublish: true`}});var Yo={};u(Yo,{_internal:()=>fw,body:()=>hw,collection:()=>uw,data:()=>mw,id:()=>dw,slug:()=>pw});var dw,uw,pw,hw,mw,fw,Zo=l(()=>{"use strict";dw="952-nuclei-writing-exploit.md",uw="posts",pw="nuclei-writing-exploit",hw=`
## Nuclei unleashed - writing first exploit

In the intricate dance of penetration testing, the rhythm is set by the tools we use. But what if we could choreograph our own steps? Enter Nuclei, a framework that lets you craft custom templates for precise vulnerability scanning. Today, we'll dive deep into the world of these templates and see how they can elevate your pen-testing game.

\u{1F4CC} Inside this Exploration:

- Nuclei Unveiled: Discover the essence of Nuclei and its role in the vast landscape of penetration testing.
- Crafting Templates: A hands-on guide to creating your first custom template. From defining basic information to setting up requests and assertions, we've got you covered.
- Real-World Testing: Dive into a practical example as we test a Facebook page for potential vulnerabilities using a custom Nuclei template.
- Beyond the Basics: Learn how to validate, run, and interpret the results of your custom templates. Plus, find out how you can contribute to the Nuclei community by sharing your templates.

Whether you're a seasoned pen-tester or just dipping your toes into the world of cybersecurity, this guide offers a fresh perspective on vulnerability scanning. Join us as we unravel the potential of Nuclei templates and discover how they can be a game-changer in your penetration testing toolkit. \u{1F6E1}\uFE0F\u{1F5A5}\uFE0F\u{1F680}

Link: https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0
`,mw={title:"Nuclei unleashed - writing first exploit",publishedAt:new Date(168912e7),description:"\u{1F50D} Nuclei: The Power of Custom Templates in Penetration Testing \u{1F50D}",isPublish:!0,isDraft:!1},fw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md",rawData:`
title: "Nuclei unleashed - writing first exploit"
publishedAt: 2023-07-12
description: "\u{1F50D} Nuclei: The Power of Custom Templates in Penetration Testing \u{1F50D}"
slug: "nuclei-writing-exploit"
isPublish: true`}});var Xo={};u(Xo,{_internal:()=>vw,body:()=>Dw,collection:()=>yw,data:()=>bw,id:()=>gw,slug:()=>ww});var gw,yw,ww,Dw,bw,vw,Qo=l(()=>{"use strict";gw="953-standard-deviation-performance-tests.md",yw="posts",ww="standard-deviation-performance-tests",Dw=`
## Why standard deviation is important in performance tests

In the vast realm of performance testing, some metrics shine brighter than others. While average response times and percentiles often steal the limelight, there's an unsung hero lurking in the shadows: the standard deviation. Often overlooked, this metric can be the key to unlocking deeper insights into your application's performance. But what makes it so special?

\u{1F4CC} Inside this Exploration:

- Beyond the Basics: Dive into the world of standard deviation and discover why it's more than just a mathematical formula.
- The Real Impact: Understand how standard deviation can influence performance analysis and why it's crucial for testers.
- Crunching the Numbers: A step-by-step guide to calculating standard deviation, minus the jargon. Plus, a hands-on example to bring the concept to life.
- The Bigger Picture: Explore how standard deviation fits into the broader landscape of performance testing metrics and why it deserves a spot in your toolkit.

Whether you're a seasoned tester or just starting out, this article offers a fresh perspective on a classic metric. Dive in and discover how standard deviation can elevate your performance testing game, revealing insights that other metrics might miss. \u{1F4C8}\u{1F50D}\u{1F680}

Link: https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3
`,bw={title:"Why standard deviation is important in performance tests",publishedAt:new Date(16886016e5),description:"\u{1F4CA} Standard Deviation: The Unsung Hero of Performance Testing \u{1F4CA}",isPublish:!0,isDraft:!1},vw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md",rawData:`
title: "Why standard deviation is important in performance tests"
publishedAt: 2023-07-06
description: "\u{1F4CA} Standard Deviation: The Unsung Hero of Performance Testing \u{1F4CA}"
slug: "standard-deviation-performance-tests"
isPublish: true`}});var es={};u(es,{_internal:()=>Fw,body:()=>Cw,collection:()=>xw,data:()=>Aw,id:()=>kw,slug:()=>Sw});var kw,xw,Sw,Cw,Aw,Fw,ts=l(()=>{"use strict";kw="954-afrog-bug-bounty-pentesters.md",xw="posts",Sw="afrog-bug-bounty-pentesters",Cw=`
## Afrog explained

In the dynamic world of pentesting and bug hunting, efficiency is key. Automation not only speeds up the process but also ensures consistency and thoroughness. Enter Afrog, a tool that promises to streamline your pentesting workflow. But how does it fare in real-world scenarios?

\u{1F4CC} Inside this Exploration:

- Afrog Unleashed: Dive straight into the action, bypassing the basics and witnessing Afrog's capabilities firsthand.
- Features at a Glance: From user-defined PoCs to built-in vulnerability types, discover what makes Afrog stand out.
- Hands-on Testing: A real-world example of Afrog in action, targeting a vulnerable WordPress site.
- Reporting & Analysis: Uncover the insights Afrog provides post-scan, aiding in further exploitation and mitigation.
- Afrog vs. The World: How does Afrog compare to other popular tools like Nuclei? Get a comparative analysis.
- Community & Support: Gauge the strength and activity of the community backing Afrog, a crucial factor for any open-source tool.
- Final Thoughts: Is Afrog the next essential tool in every pentester's toolkit? Get a comprehensive verdict.

Whether you're a seasoned pentester or just starting out in the bug hunting realm, this article offers a deep dive into Afrog's potential and how it can elevate your testing game. Jump in and discover if Afrog is the leap forward you've been waiting for! \u{1F310}\u{1F50D}\u{1F4CA}

Link: https://medium.com/@gpiechnik/afrog-explained-for-bug-hunters-ed1497d5aaf5
`,Aw={title:"Afrog explained for bug bounty hunters",publishedAt:new Date(16885152e5),description:"\u{1F438} Afrog: The Pentester's New Best Friend? \u{1F438}",isPublish:!0,isDraft:!1},Fw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md",rawData:`
title: "Afrog explained for bug bounty hunters"
publishedAt: 2023-07-05
description: "\u{1F438} Afrog: The Pentester's New Best Friend? \u{1F438}"
slug: "afrog-bug-bounty-pentesters"
isPublish: true`}});var ns={};u(ns,{_internal:()=>Iw,body:()=>Rw,collection:()=>Tw,data:()=>jw,id:()=>Ew,slug:()=>Pw});var Ew,Tw,Pw,Rw,jw,Iw,is=l(()=>{"use strict";Ew="955-drill-performance-testing-tool.md",Tw="posts",Pw="drill-performance-testing-tool",Rw=`
## Drill - performance testing tool

In the vast ocean of performance testing tools, Drill emerges as a fresh wave. Crafted in the high-performance Rust language, it promises speed and optimization. But how does it fare in real-world scenarios, especially when pitted against its contemporaries? Let's embark on a journey to discover the depths of Drill!

\u{1F4CC} Inside this Exploration:

- Genesis of Drill: Understand the philosophy behind Drill's creation and its aspirations to bring simplicity and efficiency to test scenarios.
- Crafting Scenarios with Drill: A hands-on guide to writing test scenarios in the familiar yaml format, inspired by Ansible.
- Performance Showdown: Witness Drill's performance in action and see how it stacks up against other industry-leading tools.
- Running the Gauntlet: Dive into the nitty-gritty of executing test scenarios with Drill and interpreting the results.
- Challenges & Hurdles: Every tool has its quirks. Uncover the challenges faced during testing with Drill and potential solutions.
- Final Verdict: Is Drill the next big thing in performance testing or does it need more refinement? Get a comprehensive analysis.
- Resources & Further Reading: Dive deeper with curated resources and comparisons.

Whether you're a performance testing veteran or a newbie, this article offers a comprehensive look at Drill's capabilities, strengths, and areas of improvement. Dive in to decide if Drill is the right tool for your testing arsenal! \u{1F527}\u{1F30A}\u{1F4CA}

Link: https://medium.com/@gpiechnik/my-impressions-of-using-the-drill-performance-testing-tool-ee391b93efe2
`,jw={title:"My impressions of using the Drill performance testing tool",publishedAt:new Date(16884288e5),description:"\u{1F529} Drill Performance Testing: A Deep Dive \u{1F529}",isPublish:!0,isDraft:!1},Iw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md",rawData:`
title: "My impressions of using the Drill performance testing tool"
publishedAt: 2023-07-04
description: "\u{1F529} Drill Performance Testing: A Deep Dive \u{1F529}"
slug: "drill-performance-testing-tool"
isPublish: true`}});var os={};u(os,{_internal:()=>Ow,body:()=>Ww,collection:()=>Lw,data:()=>$w,id:()=>_w,slug:()=>Bw});var _w,Lw,Bw,Ww,$w,Ow,ss=l(()=>{"use strict";_w="956-aws-ec2-instances-basics.md",Lw="posts",Bw="aws-ec2-instances-basics",Ww=`
## AWS EC2 Instances basics

Performance testing on local hardware can be a bottleneck, especially when you're aiming for scalability and precision. Enter AWS EC2 - a robust cloud solution that can elevate your testing game. But how do you set up and harness this cloud powerhouse for your tests? Dive into this guide to find out!

\u{1F4CC} What's Inside:

- Kickstarting with AWS EC2: Navigate the AWS console like a pro, from registration to launching your very own EC2 instance.
- Instance Creation Demystified: Step-by-step instructions to set up your testing environment on AWS, tailored to your needs.
- Secure Your Connection: Understand the importance of key pairs and how to generate them for secure access.
- Seamless Connectivity: Whether you're an SSH aficionado or a Putty enthusiast, we've got you covered. Learn how to connect to your EC2 instance effortlessly.
- File Transfers Simplified: Need to transfer files to or from your EC2 instance? Discover the straightforward methods using both SCP and Putty.

Whether you're a seasoned tester or just starting out, this guide offers a comprehensive walkthrough to leverage AWS EC2 for performance testing. Say goodbye to local hardware limitations and hello to scalable, cloud-based testing! \u2601\uFE0F\u{1F527}\u{1F4C8}

Link: https://medium.com/@gpiechnik/aws-ec2-instances-basics-7f133204767a
`,$w={title:"AWS EC2 Instances basics",publishedAt:new Date(16880832e5),description:"\u{1F680} Unleashing the Power of AWS EC2 \u{1F680}",isPublish:!0,isDraft:!1},Ow={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md",rawData:`
title: "AWS EC2 Instances basics"
publishedAt: 2023-06-30
description: "\u{1F680} Unleashing the Power of AWS EC2 \u{1F680}"
slug: "aws-ec2-instances-basics"
isPublish: true`}});var as={};u(as,{_internal:()=>qw,body:()=>Gw,collection:()=>Mw,data:()=>Uw,id:()=>Nw,slug:()=>zw});var Nw,Mw,zw,Gw,Uw,qw,rs=l(()=>{"use strict";Nw="957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md",Mw="posts",zw="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2",Gw=`
## What is Apache Kafka and how to perform performance tests on it (Part 2)

In the realm of real-time data processing, event streaming stands tall. But how do we ensure that our event streaming platforms, like Apache Kafka, are performing at their peak? Dive into this comprehensive guide to understand and master performance testing on Apache Kafka.

\u{1F4CC} What's Inside:

- Setting Up Kafka Locally: Learn how to swiftly set up Apache Kafka on your local machine using Docker, and get insights into the key components bundled within.
- Performance Testing 101: Discover the intricacies of performance testing on Apache Kafka's Cluster and understand its thresholds.
- Harnessing xk6-kafka: Explore the power of xk6-kafka, an extension to the k6 tool, tailored for Kafka performance testing.
- Deep Dive into the Script: Get a detailed walkthrough of the testing script, from creating topics to sending messages and performing checks.
- Analyzing the Results: Unravel the metrics extracted from the tests and understand their significance
- Plus, visualize your results with a Grafana dashboard for a user-friendly analysis.

Whether you're a Kafka enthusiast, a developer, or someone keen on ensuring optimal performance for real-time data processing, this guide is your ticket to mastering performance testing on Apache Kafka. Gear up to optimize your Kafka deployments and ensure seamless data streaming! \u{1F4CA}\u{1F527}\u{1F50D}

Link: https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2-54177fc6631c
`,Uw={title:"What is Apache Kafka and how to perform performance tests on it (Part 2)",publishedAt:new Date(16879104e5),description:"\u{1F680} Mastering Performance Testing with Apache Kafka \u{1F680}",isPublish:!0,isDraft:!1},qw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md",rawData:`
title: "What is Apache Kafka and how to perform performance tests on it (Part 2)"
publishedAt: 2023-06-28
description: "\u{1F680} Mastering Performance Testing with Apache Kafka \u{1F680}"
slug: "what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2"
isPublish: true`}});var cs={};u(cs,{_internal:()=>Zw,body:()=>Jw,collection:()=>Vw,data:()=>Yw,id:()=>Hw,slug:()=>Kw});var Hw,Vw,Kw,Jw,Yw,Zw,ls=l(()=>{"use strict";Hw="958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md",Vw="posts",Kw="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one",Jw=`
## What is Apache Kafka and how to perform performance tests on it (Part 1)

In the digital age, real-time data processing is no longer a luxury but a necessity. Enter event streaming, a technique that's revolutionizing the way data is exchanged in real-time. But what's the magic behind it? Let's unravel the mysteries of Apache Kafka, the powerhouse of event streaming.

\u{1F4CC} Inside this Guide:

- Event Streaming 101: Understand the essence of event streaming and its significance in today's fast-paced IT landscape.
- Apache Kafka Unveiled: Dive into the world of Kafka and explore its robust architecture designed for high-speed data transfer.
- Producers, Consumers, and Kafka Cluster: Discover the key players in the Kafka ecosystem and their roles in ensuring seamless data flow.
- The Intricacies of Kafka Architecture: From Brokers to ZooKeeper, get a comprehensive understanding of how Kafka's components work in harmony.
- Topics & Partitions Explained: Delve into the heart of Kafka's data management system and learn how topics and partitions ensure efficient data distribution.
- A Closer Look at Producers & Consumers: Revisit the roles of producers and consumers, and understand the genius of consumer groups in optimizing data consumption.

Whether you're a developer, a data enthusiast, or someone curious about the world of event streaming, this guide offers a deep dive into Apache Kafka's world. Equip yourself with the knowledge to harness the power of real-time data processing. \u{1F680}\u{1F4CA}\u{1F50D}

Link: https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1-b4b71edb6286
`,Yw={title:"What is Apache Kafka and how to perform performance tests on it (Part 1)",publishedAt:new Date(16876512e5),description:"\u{1F525} Diving Deep into Event Streaming with Apache Kafka \u{1F525}",isPublish:!0,isDraft:!1},Zw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md",rawData:`
title: "What is Apache Kafka and how to perform performance tests on it (Part 1)"
publishedAt: 2023-06-25
description: "\u{1F525} Diving Deep into Event Streaming with Apache Kafka \u{1F525}"
slug: "what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one"
isPublish: true`}});var ds={};u(ds,{_internal:()=>iD,body:()=>tD,collection:()=>Qw,data:()=>nD,id:()=>Xw,slug:()=>eD});var Xw,Qw,eD,tD,nD,iD,us=l(()=>{"use strict";Xw="959-types-of-deployment.md",Qw="posts",eD="types-of-deployment",tD=`
## Types of deployment

In the dynamic world of IT, updating applications and introducing new features is the name of the game. But how do you ensure smooth transitions without disrupting user experience? Enter deployment strategies! Dive into this guide to explore three of the most popular deployment types that IT companies swear by.

\u{1F4CC} Inside this Guide:

- Rolling Deployment Demystified: Understand the step-by-step process of updating servers and why this strategy is a favorite for applications with minor updates.
- Canary Deployment Unveiled: Discover how this user-centric approach tests the waters with a select group before a full-scale launch.
- Blue/Green Deployment Explained: Dive into the world of dual environments and learn how traffic redirection ensures seamless transitions between versions.

Whether you're an IT professional, a budding developer, or a business owner looking to understand the best deployment strategy for your organization, this guide offers insights into the pros and cons of each method. Equip yourself with the knowledge to make informed decisions and ensure smooth application updates. \u{1F504}\u{1F310}\u{1F527}

Link: https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67
`,nD={title:"What are the types of deployment",publishedAt:new Date(16875648e5),description:"\u{1F680} Mastering Deployment Strategies: Rolling, Canary, and Blue/Green \u{1F680}",isPublish:!0,isDraft:!1},iD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md",rawData:`
title: "What are the types of deployment"
publishedAt: 2023-06-24
description: "\u{1F680} Mastering Deployment Strategies: Rolling, Canary, and Blue/Green \u{1F680}"
slug: "types-of-deployment"
isPublish: true`}});var ps={};u(ps,{_internal:()=>lD,body:()=>rD,collection:()=>sD,data:()=>cD,id:()=>oD,slug:()=>aD});var oD,sD,aD,rD,cD,lD,hs=l(()=>{"use strict";oD="960-availability-load-balancing-failover-session-persistence.md",sD="posts",aD="availability-load-balancing-failover-session-persistence",rD=`
## Availability, Load Balancing, Failover and Session Persistence

Navigating the world of performance testing or development often feels like wading through a sea of jargon. Terms like "availability," "load balancing," and "session persistence" get thrown around, but what do they really mean? And why should you care? Dive into this guide to decode these terms and more!

\u{1F4CC} Inside this Guide:

- Availability Unveiled: Discover what we truly mean when we talk about an application's availability and why it's not just about uptime percentages.
- Load Balancing Explained: Unravel the intricacies of load balancing, its importance, and its multifaceted nature.
- The Art of Failover: Learn about the system's ability to seamlessly switch to a backup during failures and the significance of failover testing.
- Session Persistence Decoded: Dive deep into the concept of session persistence and understand its role in enhancing user experience.

Whether you're a seasoned developer, a budding performance tester, or just someone looking to understand the tech world a bit better, this guide offers a clear and concise breakdown of some of the most commonly used (and often misunderstood) terms. Equip yourself with the knowledge to navigate tech discussions with confidence! \u{1F4BB}\u{1F310}\u{1F4D8}

Link: https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3
`,cD={title:"What are the concepts of availability, load balancing, failover and session persistence",publishedAt:new Date(16874784e5),description:"\u{1F50D} Demystifying Tech Jargon: From Availability to Session Persistence \u{1F50D}",isPublish:!0,isDraft:!1},lD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md",rawData:`
title: "What are the concepts of availability, load balancing, failover and session persistence"
publishedAt: 2023-06-23
description: "\u{1F50D} Demystifying Tech Jargon: From Availability to Session Persistence \u{1F50D}"
slug: "availability-load-balancing-failover-session-persistence"
isPublish: true`}});var ms={};u(ms,{_internal:()=>fD,body:()=>hD,collection:()=>uD,data:()=>mD,id:()=>dD,slug:()=>pD});var dD,uD,pD,hD,mD,fD,fs=l(()=>{"use strict";dD="961-mitmproxy-and-k6.md",uD="posts",pD="mitmproxy-and-k6",hD=`
## Mitmproxy and k6

In the vast world of proxies, mitmproxy stands tall. But what makes it so special? And how can it be leveraged for performance testing, especially with tools like k6? Dive into this comprehensive guide to unravel the magic of mitmproxy!

\u{1F4CC} Inside this Guide:

- Mitmproxy vs. The Rest: Understand what sets mitmproxy apart from its counterparts like Fiddler and Charlesproxy.
- Modes of Operation: Explore the three main modes - mitmproxy, mitmdump, and mitmweb, and learn when to use each.
- Why Mitmproxy for k6?: Discover the significance of capturing traffic for performance testing and how mitmproxy fits into the picture.
- Installation & Setup: Get started with mitmproxy in no time with our step-by-step installation guide.
- Capturing & Saving HTTP Flows: Dive deep into the process of capturing requests and responses and saving them for further analysis.
- From HAR to k6: Learn the art of converting HAR files into k6 scripts, and understand the challenges and solutions in the process.

Whether you're a performance tester, a developer, or just someone curious about network traffic, this guide offers a deep dive into the world of mitmproxy and its integration with k6. Get ready to harness the power of open-source for your testing needs! \u{1F4BB}\u{1F310}\u{1F4C8}

Link: https://medium.com/@gpiechnik/using-mitmproxy-with-k6-9326cd13ab28
`,mD={title:"Using mitmproxy with k6",publishedAt:new Date(1687392e6),description:"\u{1F50D} Mitmproxy: The Open-Source Powerhouse for Traffic Capture \u{1F50D}",isPublish:!0,isDraft:!1},fD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md",rawData:`
title: "Using mitmproxy with k6"
publishedAt: 2023-06-22
description: "\u{1F50D} Mitmproxy: The Open-Source Powerhouse for Traffic Capture \u{1F50D}"
slug: "mitmproxy-and-k6"
isPublish: true`}});var gs={};u(gs,{_internal:()=>vD,body:()=>DD,collection:()=>yD,data:()=>bD,id:()=>gD,slug:()=>wD});var gD,yD,wD,DD,bD,vD,ys=l(()=>{"use strict";gD="962-flaky-tests-jmeter.md",yD="posts",wD="flaky-tests-jmeter",DD=`
## Flaky tests in JMeter

Performance testing is a critical aspect of ensuring an application's robustness. But what happens when your tried-and-true test scripts start acting up? When they return errors sporadically, even when no changes have been made to the application? Welcome to the world of flaky tests!

\u{1F4CC} Inside this Guide:

- Understanding Flaky Tests: Dive deep into what flaky tests are and why they can be a tester's worst nightmare.
- Timeout Troubles: Discover how simple timeouts can be the root cause of many flaky tests and how to address them.
- Decoding Connection Resets: Unravel the mystery behind the dreaded Connection Reset error and learn how to fix it.
- Mimicking Real User Behavior: Understand the importance of simulating real user actions, like sleep intervals between steps, to ensure test accuracy.
- Embedded Resources & Static Files: Delve into the debate of whether to cover static files in tests and how to efficiently retrieve all embedded resources.
- The Power of Keep-Alive: Learn about the HTTP Keep-Alive header and its significance in performance testing.

Whether you're a seasoned performance tester or just starting out, this guide offers invaluable insights into stabilizing your test scripts. Say goodbye to unpredictable test results and hello to consistent, reliable performance testing! \u{1F4BB}\u{1F50D}\u{1F4CA}

Link: https://medium.com/@gpiechnik/flaky-tests-in-jmeter-9c62994cfbf5
`,bD={title:"Flaky tests in JMeter",publishedAt:new Date(16873056e5),description:"\u{1F50D} Stabilizing Performance Tests: Navigating the World of Flaky Tests \u{1F50D}",isPublish:!0,isDraft:!1},vD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md",rawData:`
title: "Flaky tests in JMeter"
publishedAt: 2023-06-21
description: "\u{1F50D} Stabilizing Performance Tests: Navigating the World of Flaky Tests \u{1F50D}"
slug: "flaky-tests-jmeter"
isPublish: true`}});var ws={};u(ws,{_internal:()=>FD,body:()=>CD,collection:()=>xD,data:()=>AD,id:()=>kD,slug:()=>SD});var kD,xD,SD,CD,AD,FD,Ds=l(()=>{"use strict";kD="963-debug-requests-k6.md",xD="posts",SD="debug-requests-k6",CD=`
## How to debug requests in k6?

Performance testing is crucial, but what happens when the results are riddled with errors? Using the k6 tool, while powerful, can sometimes leave you scratching your head when trying to decipher the results, especially when they're displayed in the console. With potentially hundreds of errors popping up during soak tests, analyzing them can become a daunting task. But fear not! We've got you covered.

\u{1F4CC} Inside this Guide:

- The Challenge: Understand the complexities of reporting errors using k6 and why it's essential to aggregate results.
- Aggregating Results: Dive into a simple mechanism to display errors in the output, ensuring you capture every detail.
- Redirecting Output: Learn how to efficiently redirect your error logs to a file, making analysis a breeze.
- Deciphering Errors: Break down the two types of errors you might encounter and understand their nuances.
- JQ to the Rescue: Harness the power of jq to filter, read, and analyze your error logs, ensuring you never miss an error again.

Whether you're a seasoned tester or just starting out with k6, this guide offers a step-by-step approach to efficient error reporting and analysis. Say goodbye to the days of sifting through console logs and hello to streamlined error reporting! \u{1F4BB}\u{1F50D}\u{1F4CA}

Link: https://medium.com/@gpiechnik/how-to-quickly-debug-requests-from-k6-test-scenarios-3ebf2e6733f5
`,AD={title:"How to debug requests in k6",publishedAt:new Date(16872192e5),description:"\u{1F50D} Decoding k6 Errors: A Comprehensive Guide to Efficient Error Reporting \u{1F50D}",isPublish:!0,isDraft:!1},FD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md",rawData:`
title: "How to debug requests in k6"
publishedAt: 2023-06-20
description: "\u{1F50D} Decoding k6 Errors: A Comprehensive Guide to Efficient Error Reporting \u{1F50D}"
slug: "debug-requests-k6"
isPublish: true`}});var bs={};u(bs,{_internal:()=>ID,body:()=>RD,collection:()=>TD,data:()=>jD,id:()=>ED,slug:()=>PD});var ED,TD,PD,RD,jD,ID,vs=l(()=>{"use strict";ED="964-what-are-memory-leaks.md",TD="posts",PD="what-are-memory-leaks",RD=`
## What are memory leaks?

In the vast landscape of performance testing, there's a silent menace lurking in the shadows, often going unnoticed until it's too late: Memory Leaks. These seemingly innocuous bugs can wreak havoc on your application's performance, leading to sluggish response times and, in extreme cases, system crashes.

\u{1F4CC} Inside this Guide:

- Memory Leaks Defined: Dive into the technical definition and understand the implications of memory leaks on your application.
- Garbage Collections Explained: Get a brief overview of this complex topic and understand its role in memory management.
- Real-Life Scenario: Witness the impact of memory leaks through a hands-on example using the Flask framework.
- K6 Scripting: Learn how to visualize memory leaks using a K6 script, a powerful performance testing tool.
- Profiler Insights: Discover how to monitor resource consumption using Python's memory-profiler module.

Whether you're a seasoned developer or just starting out, this guide offers a comprehensive look into the world of memory leaks. Equip yourself with the knowledge to detect, diagnose, and defend against these performance-draining bugs. So, gear up and embark on a journey to ensure your application runs smoothly and efficiently! \u{1F4BB}\u{1F41B}\u{1F6E0}\uFE0F

Link: https://medium.com/@gpiechnik/what-are-memory-leaks-8ab2904720e0
`,jD={title:"What are memory leaks?",publishedAt:new Date(16870464e5),description:"\u{1F50D} Memory Leaks: The Silent Killers of Application Performance \u{1F50D}",isPublish:!0,isDraft:!1},ID={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md",rawData:`
title: "What are memory leaks?"
publishedAt: 2023-06-18
description: "\u{1F50D} Memory Leaks: The Silent Killers of Application Performance \u{1F50D}"
slug: "what-are-memory-leaks"
isPublish: true`}});var ks={};u(ks,{_internal:()=>OD,body:()=>WD,collection:()=>LD,data:()=>$D,id:()=>_D,slug:()=>BD});var _D,LD,BD,WD,$D,OD,xs=l(()=>{"use strict";_D="965-what-is-browser-based-load-testing.md",LD="posts",BD="what-is-browser-based-load-testing",WD=`
## What is browser based load testing

In the vast universe of testing, we often hear about functional and non-functional tests. But have you ever stumbled upon a testing method that straddles the line between the two? Enter the world of browser-based load testing, a unique approach that focuses on the user's experience from the moment they land on a page.

\u{1F4CC} Inside this Guide:

- Understanding the Basics: Dive deep into the realm of browser-based load testing and discover its significance.
- Real-Life Scenarios: Visualize the impact of this testing method with practical examples.
- Key Metrics Unveiled: From 'First Paint' to 'First Input Delay', get acquainted with the metrics that matter.
- Harnessing Page Speed Insights: Learn about Google's tool for retrieving vital page metrics and its limitations.
- K6 & Playwright: Uncover the magic of integrating K6 with Playwright to measure and analyze browser metrics.
- Hands-on with Code: Step-by-step guide to set up, run, and analyze your tests using K6 and Playwright.
- Setting Benchmarks: Ensure your application's performance is up to the mark with K6's threshold functionality.

Whether you're a seasoned tester or just starting out, this guide offers a fresh perspective on evaluating an application's readiness from a user's viewpoint. So, gear up and embark on a journey to optimize user experience like never before! \u{1F5A5}\uFE0F\u{1F4CA}\u{1F50D}

Link: https://medium.com/@gpiechnik/what-is-browser-based-load-testing-9e834a0118ff
`,$D={title:"What is browser based load testing",publishedAt:new Date(168696e7),description:"\u{1F680} Browser-Based Load Testing: The Unsung Hero of Performance Metrics \u{1F680}",isPublish:!0,isDraft:!1},OD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md",rawData:`
title: "What is browser based load testing"
publishedAt: 2023-06-17
description: "\u{1F680} Browser-Based Load Testing: The Unsung Hero of Performance Metrics \u{1F680}"
slug: "what-is-browser-based-load-testing"
isPublish: true`}});var Ss={};u(Ss,{_internal:()=>qD,body:()=>GD,collection:()=>MD,data:()=>UD,id:()=>ND,slug:()=>zD});var ND,MD,zD,GD,UD,qD,Cs=l(()=>{"use strict";ND="966-read-summary-data-in-k6.md",MD="posts",zD="read-summary-data-in-k6",GD=`
## Reading summary data in k6

Drowning in a sea of JSON data? Need a lifeline to navigate through the dense forest of test results? Enter JQ, your trusty command-line JSON processor. With its lightweight design and flexible capabilities, JQ is the tool you never knew you needed... until now.

\u{1F4CC} What's Inside:

- Introduction to JQ: Understand the power and potential of this command-line JSON processor.
- Installation Guide: A step-by-step walkthrough to get JQ up and running.
- The Power of Tags: Dive deep into the world of k6 tests and discover how tagging can revolutionize your data analysis.
- Command Mastery: From checking tags to calculating average request times, master the JQ commands that will transform your testing game.
- Automation with Bash: Why do manually what can be automated? Introducing a bash script that will do the heavy lifting for you.
- Sample Usage: A hands-on guide to using the bash script for your k6 test results.

Whether you're a seasoned tester or a newbie, this guide will equip you with the tools and knowledge to sift through JSON data with ease, extract meaningful insights, and elevate your testing game. Dive in and let JQ illuminate your path through the intricate maze of JSON! \u{1F4CA}\u{1F527}\u{1F4C8}

Link: https://medium.com/@gpiechnik/how-to-quick-read-summary-data-in-k6-from-json-file-f9d09bccd9c2
`,UD={title:"How to quickly read summary data in k6 from json file",publishedAt:new Date(16868736e5),description:"\u{1F50D} JQ: The Ultimate JSON Processor for K6 Testers \u{1F50D}",isPublish:!0,isDraft:!1},qD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md",rawData:`
title: "How to quickly read summary data in k6 from json file"
publishedAt: 2023-06-16
description: "\u{1F50D} JQ: The Ultimate JSON Processor for K6 Testers \u{1F50D}"
slug: "read-summary-data-in-k6"
isPublish: true`}});var As={};u(As,{_internal:()=>ZD,body:()=>JD,collection:()=>VD,data:()=>YD,id:()=>HD,slug:()=>KD});var HD,VD,KD,JD,YD,ZD,Fs=l(()=>{"use strict";HD="967-fundamental-network-tools.md",VD="posts",KD="fundamental-network-tools",JD=`
## Fundamental network tools

In the vast realm of network testing, the tools you wield can make or break your efficiency. Whether you're a seasoned non-functional tester or just starting out, understanding the nuances of network tools is crucial. This guide is your one-stop-shop to the most commonly used tools, their functionalities, and how to harness their power effectively.

\u{1F4CC} Inside this Exploration:

- Ping: The basics of checking connectivity and ensuring that hosts are up and running.
- Telnet: Dive into the world of TCP protocol and understand how to check port connections.
- Traceroute/Tracert/Tracepath: Unravel the journey of a packet and diagnose network issues.
- Ipconfig: Discover the magic of managing IP configurations and DNS cache.
- Netstat: Get a comprehensive view of your network connections and the programs behind them.
- Nmap: Explore the multifaceted tool for port scanning and network services analysis.

Join us as we delve deep into each tool, providing hands-on examples, command breakdowns, and insights into their practical applications. Whether you're troubleshooting network issues or optimizing performance, this guide will equip you with the knowledge to navigate the network landscape confidently. \u{1F5A5}\uFE0F\u{1F527}\u{1F30D}

Link: https://medium.com/@gpiechnik/fundamental-network-tools-9bb6f3f54ef1
`,YD={title:"Fundamental network tools",publishedAt:new Date(16867872e5),description:"\u{1F310} Mastering Network Tools: A Non-Functional Tester's Guide \u{1F310}",isPublish:!0,isDraft:!1},ZD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md",rawData:`
title: "Fundamental network tools"
publishedAt: 2023-06-15
description: "\u{1F310} Mastering Network Tools: A Non-Functional Tester's Guide \u{1F310}"
slug: "fundamental-network-tools"
isPublish: true`}});var Es={};u(Es,{_internal:()=>ib,body:()=>tb,collection:()=>QD,data:()=>nb,id:()=>XD,slug:()=>eb});var XD,QD,eb,tb,nb,ib,Ts=l(()=>{"use strict";XD="968-crucial-update-for-k6-results-analysis.md",QD="posts",eb="crucial-update-for-k6-results-analysis",tb=`
## Crucial update for k6!

The world of performance testing is ever-evolving, and with the recent updates to the K6 framework, the game has changed significantly. Gone are the days of cumbersome .json analysis and tedious data filtering. Enter the new era of InfluxDB, Grafana, and the power of tags.

\u{1F4CC} Inside this Exploration:

- K6's Transformation: Dive deep into the recent updates of the K6 framework and understand how they revolutionize performance testing.
- InfluxDB & Grafana Integration: Discover the seamless integration of K6 with InfluxDB and Grafana, and how it enhances data collection and observability.
- Power of Tags: Unravel the significance of tags in K6 and how they pave the way for efficient data analysis and error detection.
- Real-world Script Analysis: Walk through a detailed K6 script, understand its components, and see how it interacts with InfluxDB and Grafana.
- Potential Challenges: While the new approach offers numerous benefits, it's essential to be aware of potential pitfalls and how to navigate them.

Join us on this enlightening journey as we delve into the intricacies of the updated K6 framework, its integration with powerful tools, and the transformative impact on performance testing. \u{1F4CA}\u{1F527}\u{1F680}

Link: https://medium.com/@gpiechnik/crucial-update-for-k6-results-analysis-81b1c120fa7
`,nb={title:"Crucial update for k6 results analysis",publishedAt:new Date(16866144e5),description:"\u{1F50D} K6 Framework Evolution: A New Era of Performance Testing \u{1F50D}",isPublish:!0,isDraft:!1},ib={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md",rawData:`
title: "Crucial update for k6 results analysis"
publishedAt: 2023-06-13
description: "\u{1F50D} K6 Framework Evolution: A New Era of Performance Testing \u{1F50D}"
slug: "crucial-update-for-k6-results-analysis"
isPublish: true`}});var Ps={};u(Ps,{_internal:()=>lb,body:()=>rb,collection:()=>sb,data:()=>cb,id:()=>ob,slug:()=>ab});var ob,sb,ab,rb,cb,lb,Rs=l(()=>{"use strict";ob="969-hacking-embedded-systems-routersploit.md",sb="posts",ab="hacking-embedded-systems-routersploit",rb=`
## Hacking embedded systems using the routersploit

In the vast realm of cybersecurity, the vulnerabilities lurking within our everyday devices often go unnoticed. From routers to cameras, these embedded systems can be a goldmine for attackers. Enter Routersploit - a framework designed to detect and exploit these hidden flaws. But what can it truly achieve?

\u{1F4CC} Inside this Exploration:

- Routersploit Demystified: Discover the core functionalities of this powerful tool and its five pivotal modules.
- Vulnerability Scanning: Dive into the most popular feature of Routersploit, and learn how to effectively scan devices for potential weak points.
- Passive Checks: Sometimes, a subtle approach is best. Understand how Routersploit can passively assess vulnerabilities without alerting the target.
- Bruteforce Attacks: Unearth the brute force capabilities of Routersploit, from HTTP to Telnet, and see how it can crack open defenses.
- Hands-on Examples: Walk through real-world scenarios, complete with code snippets and console outputs, to see Routersploit in action.

Join us on this enlightening journey as we delve into the intricacies of Routersploit, shedding light on its capabilities and showcasing its potential in the world of embedded system security. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F

Link: https://medium.com/@gpiechnik/hacking-embedded-systems-using-the-routersploit-tool-e72efda1f049
`,cb={title:"Hacking embedded systems using the routersploit tool",publishedAt:new Date(1686528e6),description:"\u{1F310} Routersploit Unveiled: A Deep Dive into Embedded System Vulnerabilities \u{1F310}",isPublish:!0,isDraft:!1},lb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md",rawData:`
title: "Hacking embedded systems using the routersploit tool"
publishedAt: 2023-06-12
description: "\u{1F310} Routersploit Unveiled: A Deep Dive into Embedded System Vulnerabilities \u{1F310}"
slug: "hacking-embedded-systems-routersploit"
isPublish: true`}});var js={};u(js,{_internal:()=>fb,body:()=>hb,collection:()=>ub,data:()=>mb,id:()=>db,slug:()=>pb});var db,ub,pb,hb,mb,fb,Is=l(()=>{"use strict";db="970-syn-flood-attack.md",ub="posts",pb="syn-flood-attack",hb=`
## SYN Flood Attack

In the ever-evolving world of cybersecurity, some threats remain timeless, adapting and morphing, but never truly disappearing. The SYN flood attack is one such classic. But what makes it so enduring? Let's delve into its mechanics and understand its potency.

\u{1F4CC} Inside this Exploration:

- The Basics of SYN Flood: A refresher on this age-old attack strategy and its relevance in today's digital landscape.
- TCP Protocol Unveiled: A step-by-step breakdown of the TCP communication process, laying the foundation for understanding the SYN flood attack.
- Crafting the Attack: Dive into the anatomy of a SYN flood script with a hands-on Python example. Discover how attackers can easily overload servers, causing them to become unresponsive.
- Defensive Measures: While this guide focuses on the attack, it's crucial to be armed with knowledge to defend against such threats.

Join us as we demystify the SYN flood attack, offering insights into its workings and highlighting the importance of staying vigilant in the face of timeless cyber threats. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F

Link: https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb
`,mb={title:"SYN Flood Attack",publishedAt:new Date(16864416e5),description:"\u{1F310} Unmasking the SYN Flood Attack: A Deep Dive into Timeless Cyber Threats \u{1F310}",isPublish:!0,isDraft:!1},fb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md",rawData:`
title: "SYN Flood Attack"
publishedAt: 2023-06-11
description: "\u{1F310} Unmasking the SYN Flood Attack: A Deep Dive into Timeless Cyber Threats \u{1F310}"
slug: "syn-flood-attack"
isPublish: true`}});var _s={};u(_s,{_internal:()=>vb,body:()=>Db,collection:()=>yb,data:()=>bb,id:()=>gb,slug:()=>wb});var gb,yb,wb,Db,bb,vb,Ls=l(()=>{"use strict";gb="971-dos-ddos-drddos-pod-attack.md",yb="posts",wb="dos-ddos-drddos-pod-attack",Db=`
## DoS, DDoS, DRDDos, PoD

Navigating the world of cyberattacks can be daunting, especially when terms like DoS, DDoS, and DRDoS start to blur. But fear not! This guide is here to demystify these terms and provide clarity.

\u{1F4CC} Inside this Guide:

- DoS (Denial of Service): Understand the basics of this attack that disrupts system operations and why it's not as straightforward as it seems.
- DDoS (Distributed Denial of Service): Discover how attackers evolved from DoS to DDoS, leveraging multiple computers for a more potent attack.
- DDoS Attack Methods: With countless DDoS attack varieties, we spotlight a few key methods, including insights from the MHDDoS repository.
- DRDoS & IP Spoofing: Dive into the world of Distributed Reflected Denial of Service and how attackers impersonate victims.
- Special Mention Attacks: From the cyclical 'hit-and-run DoS' to the connection-exhausting 'Slowloris', and the potentially devastating 'Ping of Death', get acquainted with these unique attack strategies.

Equip yourself with knowledge and stay one step ahead of potential cyber threats! \u{1F517}\u{1F50D}\u{1F310}

Link: https://medium.com/@gpiechnik/dos-vs-ddos-vs-drddos-vs-pod-attack-fe6b2b6a896e
`,bb={title:"DoS vs DDoS vs DRDDoS vs PoD attack",publishedAt:new Date(16862688e5),description:"\u{1F6E1}\uFE0F Decoding DoS, DDoS, DRDoS & More: A Comprehensive Guide for Beginners \u{1F6E1}\uFE0F",isPublish:!0,isDraft:!1},vb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md",rawData:`
title: "DoS vs DDoS vs DRDDoS vs PoD attack"
publishedAt: 2023-06-09
description: "\u{1F6E1}\uFE0F Decoding DoS, DDoS, DRDoS & More: A Comprehensive Guide for Beginners \u{1F6E1}\uFE0F"
slug: "dos-ddos-drddos-pod-attack"
isPublish: true`}});var Bs={};u(Bs,{_internal:()=>Fb,body:()=>Cb,collection:()=>xb,data:()=>Ab,id:()=>kb,slug:()=>Sb});var kb,xb,Sb,Cb,Ab,Fb,Ws=l(()=>{"use strict";kb="972-state-ssl-certificates.md",xb="posts",Sb="state-ssl-certificates",Cb=`
## State SSL certificates

Amidst the backdrop of sanctions and restricted web access, Russia's move to establish a state authority for issuing TLS certificates has raised eyebrows. But what does this mean for online security and the integrity of encrypted data?

\u{1F4CC} Inside this Guide:

- Man in the Middle (MitM) Attacks: A refresher on how these attacks intercept network traffic, potentially exposing sensitive data.
- The Mechanics of Certificate Issuance: Delve into the intricacies of public/private key generation and the potential risks when Certificate Authorities hold the reins.
- Trusted Sources & Browsers: Can major browsers trust Russia's state certificates? And what happens when users can manually add public keys?
- Lessons from Kazakhstan: A look back at Kazakhstan's attempt at a "national security certificate" and the subsequent global tech response.

Navigate the complex landscape of digital trust and understand the implications of state-controlled certificate authorities! \u{1F517}

Link: https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6
`,Ab={title:"State SSL certificates \u2014 what are the risks",publishedAt:new Date(16861824e5),description:"\u{1F512} Russia's State-Issued TLS Certificates: A Deep Dive into Digital Trust \u{1F512}",isPublish:!0,isDraft:!1},Fb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md",rawData:`
title: "State SSL certificates \u2014 what are the risks"
publishedAt: 2023-06-08
description: "\u{1F512} Russia's State-Issued TLS Certificates: A Deep Dive into Digital Trust \u{1F512}"
slug: "state-ssl-certificates"
isPublish: true`}});var $s={};u($s,{_internal:()=>Ib,body:()=>Rb,collection:()=>Tb,data:()=>jb,id:()=>Eb,slug:()=>Pb});var Eb,Tb,Pb,Rb,jb,Ib,Os=l(()=>{"use strict";Eb="973-what-are-polyglots.md",Tb="posts",Pb="what-are-polyglots",Rb=`
## What are polyglots?

Ever wondered about the intricacies of XSS vulnerabilities and the vast array of potential attack vectors? Dive into the world of polyglots, payloads that combine multiple scripts into one, and understand their power and limitations.

\u{1F4CC} Inside this Guide:

- Understanding Polyglots: Discover how these "universal" payloads work and why they might not always be effective against systems with WAF.
- Deep Dive Analysis: Break down a complex polyglot to understand its components and how it operates.
- SQLi Polyglots & Beyond: Explore how polyglots extend beyond Javascript, including SQL and even JPEG formats.
- Polyglot Innerht: A platform where enthusiasts share polyglots that can hold multiple contexts.

Stay informed and understand the nuances of these versatile payloads in the realm of cybersecurity! \u{1F517}

Link: https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977
`,jb={title:"What are polyglots and how to use them as a pentester",publishedAt:new Date(16860096e5),description:"\u{1F50D} Polyglots: The Universal Payloads in Cybersecurity \u{1F50D}",isPublish:!0,isDraft:!1},Ib={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md",rawData:`
title: "What are polyglots and how to use them as a pentester"
publishedAt: 2023-06-06
description: "\u{1F50D} Polyglots: The Universal Payloads in Cybersecurity \u{1F50D}"
slug: "what-are-polyglots"
isPublish: true`}});var Ns={};u(Ns,{_internal:()=>Ob,body:()=>Wb,collection:()=>Lb,data:()=>$b,id:()=>_b,slug:()=>Bb});var _b,Lb,Bb,Wb,$b,Ob,Ms=l(()=>{"use strict";_b="974-ldap-protocol-basics-and-the-ldap-injection-attack.md",Lb="posts",Bb="ldap-protocol-basics-and-the-ldap-injection-attack",Wb=`
## LDAP protocol basics and the LDAP Injection attack

Starting a career in security? You'll likely hear about LDAP. Let's dive into what it is and how to ensure its security.

\u{1F50D} Inside this Guide:

- LDAP Basics: Understand how Linux systems manage registered users and how LDAP aids in centralizing user account management.
- LDAP Injection: Discover how unfiltered user input can lead to unauthorized server commands, similar to SQL Injection.
- Real-world Examples:
- \u2022 Access Control Bypass: See how malformed input can trick LDAP servers.
- \u2022 Information Disclosure: Learn how OR queries can leak data.
- \u2022 Blind LDAP Injection: Grasp how attackers can guess data based on server responses.
- Defense Strategies: Equip yourself with methods to prevent LDAP Injection, from data filtering to using trusted frameworks.

Stay ahead of the curve and ensure your LDAP implementations are secure! \u{1F517}

Link: https://medium.com/@gpiechnik/ldap-protocol-basics-and-the-ldap-injection-attack-45cb003e063d
`,$b={title:"LDAP protocol basics and the LDAP Injection attack",publishedAt:new Date(16858368e5),description:"\u{1F512} Demystifying LDAP and Its Security Implications \u{1F512}",isPublish:!0,isDraft:!1},Ob={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md",rawData:`
title: "LDAP protocol basics and the LDAP Injection attack"
publishedAt: 2023-06-04
description: "\u{1F512} Demystifying LDAP and Its Security Implications \u{1F512}"
slug: "ldap-protocol-basics-and-the-ldap-injection-attack"
isPublish: true`}});var zs={};u(zs,{_internal:()=>qb,body:()=>Gb,collection:()=>Mb,data:()=>Ub,id:()=>Nb,slug:()=>zb});var Nb,Mb,zb,Gb,Ub,qb,Gs=l(()=>{"use strict";Nb="975-what-is-bind-shell-and-reverse-shell.md",Mb="posts",zb="what-is-bind-shell-and-reverse-shell",Gb=`
## Bind shell and Reverse shell

Ever wondered about the power of Unix commands? This guide delves into the capabilities of cat and netcat, two Unix tools with vast potential.

\u{1F50D} What's Inside?

- Netcat Basics: Uncover the fusion of net and cat and its ability to transfer and read files over ports.
- Bind Shell: Explore how an attacker's machine acts as a client, connecting to a victim's machine, which acts as a server, to execute remote commands.
-Reverse Shell: Discover the inverse of bind shell, where the victim's machine initiates the connection to the attacker's server.
- Practical Payloads: Dive into a hands-on example using a reverse shell payload to create a connection.

\u{1F4CC} Key Takeaways:

- Grasp the distinction between bind shell and reverse shell.
- Understand the role of the attacker and victim in each scenario.
- Gain insights into the practical application of these concepts.

Embark on a journey through the world of netcat and master the art of shells! \u{1F517}

Link: https://medium.com/@gpiechnik/what-is-bind-shell-and-reverse-shell-4653363ebd87
`,Ub={title:"What is bind shell and reverse shell",publishedAt:new Date(16857504e5),description:"\u{1F310} Diving into Netcat: Bind Shell vs. Reverse Shell \u{1F310}",isPublish:!0,isDraft:!1},qb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md",rawData:`
title: "What is bind shell and reverse shell"
publishedAt: 2023-06-03
description: "\u{1F310} Diving into Netcat: Bind Shell vs. Reverse Shell \u{1F310}"
slug: "what-is-bind-shell-and-reverse-shell"
isPublish: true`}});var Us={};u(Us,{_internal:()=>Zb,body:()=>Jb,collection:()=>Vb,data:()=>Yb,id:()=>Hb,slug:()=>Kb});var Hb,Vb,Kb,Jb,Yb,Zb,qs=l(()=>{"use strict";Hb="976-what-is-forward-proxy-and-reverse-proxy.md",Vb="posts",Kb="what-is-forward-proxy-and-reverse-proxy",Jb=`
## What is Forward Proxy and Reverse Proxy

Confused by 'forward proxy' and 'reverse proxy'? This guide breaks down these essential internet traffic components.

\u{1F50D} What's Inside?

- Proxy Basics: Discover the role of a proxy in directing internet traffic.
- Forward Proxy: Learn how it acts on behalf of users, directing their requests and anonymizing them.
- Reverse Proxy: Understand its role in load balancing and ensuring high application availability.

\u{1F4CC} Key Takeaways:

- Grasp the differences between forward and reverse proxies.
- Recognize the security and performance benefits of both proxy types.

Dive into the world of proxies with this concise guide and navigate internet traffic with ease! \u{1F517}

Link: https://medium.com/@gpiechnik/what-is-forward-proxy-and-reverse-proxy-265e554d7b4b
`,Yb={title:"What is Forward Proxy and Reverse Proxy",publishedAt:new Date(1685664e6),description:"\u{1F310} Decoding the World of Proxies: Forward vs. Reverse \u{1F310}",isPublish:!0,isDraft:!1},Zb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md",rawData:`
title: "What is Forward Proxy and Reverse Proxy"
publishedAt: 2023-06-02
description: "\u{1F310} Decoding the World of Proxies: Forward vs. Reverse \u{1F310}"
slug: "what-is-forward-proxy-and-reverse-proxy"
isPublish: true`}});var Hs={};u(Hs,{_internal:()=>iv,body:()=>tv,collection:()=>Qb,data:()=>nv,id:()=>Xb,slug:()=>ev});var Xb,Qb,ev,tv,nv,iv,Vs=l(()=>{"use strict";Xb="977-what-is-waf-and-ips.md",Qb="posts",ev="what-is-waf-and-ips",tv=`
## What is WAF and IPS?

Navigating the maze of network security can be daunting, especially with acronyms like IPS and WAF thrown around. But worry not! This comprehensive guide is here to shed light on these crucial security tools, ensuring you're well-equipped to protect your digital assets.

\u{1F50D} Inside this guide, you'll discover:

- WAF Unveiled: Dive into the workings of Web Application Firewalls, the gatekeepers of HTTP communication. Learn how they detect and thwart threats like XSS, SQL injections, and DDoS attacks.
- Types of WAF: From hardware-based to cloud-based solutions, understand the different flavors of WAFs and their unique advantages.
- NAXSI Deep Dive: Get hands-on with the configuration of NAXSI, the free WAF module for the Nginx web server. Decode configuration files and understand the significance of each setting.
- IPS Explained: Unravel the intricacies of Intrusion Prevention Systems, the vigilant guards against malicious traffic across various protocols. Discover how they inspect, analyze, and respond to threats in real-time.
- WAF vs. IPS: A side-by-side comparison of these security powerhouses. Understand their focus areas, methods, and the threats they counteract.

\u{1F4CC} Key Takeaways:

- Grasp the fundamental differences between WAF and IPS, ensuring you choose the right tool for your security needs.
- Gain practical insights into configuring and optimizing NAXSI for robust web application protection.
- Understand the broad spectrum of threats that IPS counters, from DoS attacks to exploits across various protocols.

Whether you're a budding security enthusiast or a seasoned professional, this guide offers a deep dive into the world of network security. With detailed explanations, practical examples, and expert insights, you'll be well on your way to fortifying your digital defenses.

\u{1F517} Step up your security game and ensure your network remains breach-proof! \u{1F517}

Link: https://medium.com/@gpiechnik/what-is-waf-and-ips-intrusion-prevention-system-web-application-firewall-3ea21467b334
`,nv={title:"What is WAF and IPS (Intrusion Prevention System & Web Application Firewall)",publishedAt:new Date(16854048e5),description:"\u{1F510} Demystifying Network Security: IPS vs. WAF \u{1F510}",isPublish:!0,isDraft:!1},iv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md",rawData:`
title: "What is WAF and IPS (Intrusion Prevention System & Web Application Firewall)"
publishedAt: 2023-05-30
description: "\u{1F510} Demystifying Network Security: IPS vs. WAF \u{1F510}"
slug: "what-is-waf-and-ips"
isPublish: true`}});var Ks={};u(Ks,{_internal:()=>lv,body:()=>rv,collection:()=>sv,data:()=>cv,id:()=>ov,slug:()=>av});var ov,sv,av,rv,cv,lv,Js=l(()=>{"use strict";ov="978-metasploit-explained.md",sv="posts",av="metasploit-explained",rv=`
## Metasploit

Dive deep into the world of ethical hacking with Metasploit, the renowned open-source penetration testing tool. Whether you're a cybersecurity enthusiast or a seasoned professional, this guide will walk you through the intricacies of Metasploit, ensuring you're equipped to tackle real-world security challenges.

\u{1F50D} Here's a sneak peek of what's inside:

- Metasploit Unveiled: Get acquainted with the Metasploit framework, its interface, and its vast capabilities.
- First Steps: Understand the initial launch, the captivating ASCII art, and the plethora of modules available at your fingertips.
- Navigating the Modules: Delve into exploits, payloads, encoders, and more. Learn how each module functions and when to use them.
- Hands-on Practice: Follow a step-by-step walkthrough as we target a vulnerable machine, exploit its weaknesses, and gain access.
- From Meterpreter to Shell: Transition smoothly between different shells and understand the power and flexibility they offer.
- Password Cracking & Beyond: Discover how to extract and crack password hashes, and the thrill of hunting for hidden flags.
- Cheatsheet: A quick reference guide to Metasploit commands, ensuring you're always ready for action.

\u{1F4CC} Key Takeaways:

- Grasp the importance of ethical hacking and the role of tools like Metasploit in strengthening cybersecurity.
- Understand the various modules within Metasploit and how they interplay to create a successful penetration test.
- Gain hands-on experience with real-world examples, ensuring you're ready to tackle live scenarios.

Whether you're just starting out in the world of ethical hacking or looking to refine your skills, this guide offers a comprehensive look into the power and potential of Metasploit. With detailed explanations, practical examples, and expert insights, you'll be well on your way to mastering the art of ethical hacking.

\u{1F517} Unlock the potential of Metasploit and step into the world of ethical hacking! \u{1F517}

Link: https://medium.com/@gpiechnik/metasploit-for-pentesters-explained-de7baa4c378d
`,cv={title:"Metasploit explained for pentesters",publishedAt:new Date(16853184e5),description:"\u{1F513} Metasploit Unleashed: A Comprehensive Guide to Ethical Hacking \u{1F513}",isPublish:!0,isDraft:!1},lv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md",rawData:`
title: "Metasploit explained for pentesters"
publishedAt: 2023-05-29
description: "\u{1F513} Metasploit Unleashed: A Comprehensive Guide to Ethical Hacking \u{1F513}"
slug: "metasploit-explained"
isPublish: true`}});var Ys={};u(Ys,{_internal:()=>fv,body:()=>hv,collection:()=>uv,data:()=>mv,id:()=>dv,slug:()=>pv});var dv,uv,pv,hv,mv,fv,Zs=l(()=>{"use strict";dv="979-content-security-policy-explained.md",uv="posts",pv="content-security-policy-explained",hv=`
## Content Security Policy Explained

In the ever-evolving landscape of cybersecurity, the Content Security Policy (CSP) stands as a formidable defense mechanism against web-based threats. But what exactly is CSP, and why should every pentester have it in their arsenal?

\u{1F50D} Here's what you'll uncover in this guide:

- CSP Unveiled: Get a comprehensive understanding of CSP, a security feature that dictates how resources on a web page can be loaded, offering a robust shield against various web-based attacks.
- Protection Mechanisms: Delve into the myriad ways CSP safeguards against malicious activities, from restricting inline scripts to blocking unsafe external sources.
- CSP Directives: Discover the heart of CSP - its directives. Learn how they guide browsers on resource loading, document properties, navigation, reporting settings, and more.
- CSP in Action: Walk through real-world examples of CSP configurations. Whether it's ensuring all resources are hosted on the same domain or encrypting all requests, see how CSP directives can be tailored to meet specific security needs.

\u{1F4CC} Key Takeaways:

- Understand the significance of structuring code to prevent malicious injections.
- Recognize the potential dangers of functions like eval and the importance of restricting them.
- Grasp the versatility of CSP directives and their pivotal role in enhancing web security.

Whether you're a seasoned pentester, a web developer, or someone passionate about web security, this guide offers a deep dive into the intricacies of CSP. With detailed explanations, practical examples, and expert insights, you'll be equipped to leverage CSP to its fullest potential, ensuring a safer web experience for all.

\u{1F517} Stay informed, stay secure, and let CSP be your web's guardian! \u{1F517}

Link: https://medium.com/@gpiechnik/content-security-policy-explained-ab076cde3e
`,mv={title:"Content Security Policy explained",publishedAt:new Date(1685232e6),description:"\u{1F6E1}\uFE0F Mastering Content Security Policy: A Deep Dive into Web Security \u{1F6E1}\uFE0F",isPublish:!0,isDraft:!1},fv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md",rawData:`
title: "Content Security Policy explained"
publishedAt: 2023-05-28
description: "\u{1F6E1}\uFE0F Mastering Content Security Policy: A Deep Dive into Web Security \u{1F6E1}\uFE0F"
slug: "content-security-policy-explained"
isPublish: true`}});var Xs={};u(Xs,{_internal:()=>vv,body:()=>Dv,collection:()=>yv,data:()=>bv,id:()=>gv,slug:()=>wv});var gv,yv,wv,Dv,bv,vv,Qs=l(()=>{"use strict";gv="980-the-harvester-and-h8mail-osint.md",yv="posts",wv="the-harvester-and-h8mail-osint",Dv=`
## OSINT with theHarvester and h8mail

In the vast realm of cybersecurity, information is power. But what if you could harness this power to uncover potential vulnerabilities associated with an email address? Today, we're diving deep into the world of email intelligence, where we'll explore how to gather emails and analyze them for known breaches.

\u{1F680} Here's what you'll uncover:

- theHarvester: Discover the power of this Python script designed for white intelligence. Learn how it can extract emails, usernames, subdomains, and more from public sources, giving you a comprehensive view of a domain's digital footprint.
- h8mail: Go beyond just gathering emails. With h8mail, you can check if an email has been compromised in past breaches. Using various APIs and local databases, this tool provides a detailed analysis of potential vulnerabilities associated with an email address.

\u{1F4CC} Hands-on Examples: Dive into real-world command-line examples, outputs, and interpretations. See how tools like theHarvester and h8mail can be used in tandem to provide a holistic view of email-related vulnerabilities.

\u{1F510} Ethical Considerations: While these tools offer powerful insights, it's crucial to use them responsibly. Always ensure you have the necessary permissions and are adhering to ethical practices.

Whether you're a cybersecurity professional, a digital investigator, or just curious about the world of email intelligence, this guide offers a comprehensive overview of tools and techniques to enhance your email analysis capabilities. With step-by-step instructions, expert insights, and practical examples, you'll be well-equipped to navigate the intricate world of email intelligence.

\u{1F517} Stay informed, stay ethical, and always prioritize the security and privacy of digital assets! \u{1F517}

Link: https://medium.com/@gpiechnik/search-for-sensitive-data-using-theharvester-and-h8mail-tools-d2a3772d2a32
`,bv={title:"Search for sensitive data using theHarvester and h8mail tools",publishedAt:new Date(16851456e5),description:"\u{1F50D} Email Intelligence: From Harvesting to Breach Analysis \u{1F50D}",isPublish:!0,isDraft:!1},vv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md",rawData:`
title: "Search for sensitive data using theHarvester and h8mail tools"
publishedAt: 2023-05-27
description: "\u{1F50D} Email Intelligence: From Harvesting to Breach Analysis \u{1F50D}"
slug: "the-harvester-and-h8mail-osint"
isPublish: true`}});var ea={};u(ea,{_internal:()=>Fv,body:()=>Cv,collection:()=>xv,data:()=>Av,id:()=>kv,slug:()=>Sv});var kv,xv,Sv,Cv,Av,Fv,ta=l(()=>{"use strict";kv="981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md",xv="posts",Sv="scanning-ports-and-finding-network-vulnerabilities-with-nmap",Cv=`
## Rogue access point attack

Ever heard of the saying, "Knowing is half the battle"? In the world of cybersecurity, this couldn't be truer. Reconnaissance is the foundation of any successful penetration test, and tools like nmap are the unsung heroes of this phase. But did you know that nmap is more than just a port scanner?

\u{1F680} In this exploration, you'll discover:

- Port Statuses Decoded: Dive into the intricacies of port statuses like 'open', 'closed', 'filtered', and more. Understand what each status means and how it impacts your recon process.
- Scanning Techniques Unveiled: From the commonly used TCP SYN scan to the lesser-known Maimon TCP Scan, get a comprehensive overview of the various scanning techniques nmap offers.
- Operating System Detection: Learn how nmap can give you insights into the potential operating system of a target, aiding in further exploitation.
- Vulnerability Scanning with NSE Scripts: Uncover the power of nmap's scripting engine and how it can be leveraged to identify vulnerabilities in a target system.

\u{1F4CC} Sample Commands & Outputs: Get hands-on with real-world examples, commands, and their outputs. See how different scans can yield varied results and how to interpret them.

\u{1F510} Safety First: While nmap is a powerful tool, it's essential to use it responsibly. Always ensure you have permission before scanning any network or system.

Whether you're a seasoned penetration tester, a cybersecurity enthusiast, or just curious about the world of ethical hacking, this guide offers a deep dive into one of the most versatile tools in a hacker's arsenal. With detailed explanations, real-world examples, and expert insights, you'll be equipped to use nmap to its fullest potential.

\u{1F517} Stay curious, keep learning, and always prioritize ethical practices in the ever-evolving world of cybersecurity! \u{1F517}

Link: https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda`,Av={title:"Scanning ports and finding network vulnerabilities using nmap",publishedAt:new Date(16850592e5),description:"\u{1F50D} Nmap Deep Dive: Beyond Basic Port Scanning \u{1F50D}",isPublish:!0,isDraft:!1},Fv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md",rawData:`
title: "Scanning ports and finding network vulnerabilities using nmap"
publishedAt: 2023-05-26
description: "\u{1F50D} Nmap Deep Dive: Beyond Basic Port Scanning \u{1F50D}"
slug: "scanning-ports-and-finding-network-vulnerabilities-with-nmap"
isPublish: true`}});var na={};u(na,{_internal:()=>Iv,body:()=>Rv,collection:()=>Tv,data:()=>jv,id:()=>Ev,slug:()=>Pv});var Ev,Tv,Pv,Rv,jv,Iv,ia=l(()=>{"use strict";Ev="982-scary-rogue-access-point-attack.md",Tv="posts",Pv="scary-rogue-access-point-attack",Rv=`
## Rogue access point attack

Imagine sipping on your favorite latte at a coffee shop, working on your next big project. You connect to the free Wi-Fi, thinking nothing of it. But lurking in the shadows is a threat most don't even realize exists: the rogue access point attack.

\u{1F50D} Dive into this exploration and discover:

- Wi-Fi 101: Understand the basics of routers and access points, and how they form the backbone of our daily internet connections.
- The Rogue Threat: Learn about rogue access points, unauthorized installations that can intercept your data and pose significant threats.
- Wifipumpkin3 in Action: Get a hands-on look at how tools like Wifipumpkin3 can be used to simulate these attacks, capturing sensitive user data.
- Behind the Scenes: Witness the step-by-step process of setting up a rogue access point, from changing SSID names to capturing login credentials.
- Protecting Yourself: Understand the risks of public Wi-Fi and the importance of being cautious about the networks you connect to.

Whether you're a cybersecurity enthusiast, a digital nomad, or just someone who enjoys a coffee shop workspace, this guide offers a deep dive into the hidden dangers of public Wi-Fi. With real-world demonstrations, technical breakdowns, and expert insights, you'll be equipped to navigate the digital world with heightened awareness and caution.

\u{1F510} Stay connected, but more importantly, stay safe in the vast world of the internet! \u{1F510}

Link: https://medium.com/@gpiechnik/scary-rogue-access-point-attack-b58da20d74a3
`,jv={title:"Scary Rogue Access Point attack",publishedAt:new Date(16849728e5),description:"\u{1F4E1} Rogue Access Points: The Silent Threat in Public Wi-Fi \u{1F4E1}",isPublish:!0,isDraft:!1},Iv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md",rawData:`
title: "Scary Rogue Access Point attack"
publishedAt: 2023-05-25
description: "\u{1F4E1} Rogue Access Points: The Silent Threat in Public Wi-Fi \u{1F4E1}"
slug: "scary-rogue-access-point-attack"
isPublish: true`}});var oa={};u(oa,{_internal:()=>Ov,body:()=>Wv,collection:()=>Lv,data:()=>$v,id:()=>_v,slug:()=>Bv});var _v,Lv,Bv,Wv,$v,Ov,sa=l(()=>{"use strict";_v="983-what-is-a-zero-day-exploit.md",Lv="posts",Bv="what-is-a-zero-day-exploit",Wv=`
## What is a 0 day?

Venture into the shadowy realm of zero-day vulnerabilities, a domain where threats emerge from the darkness, catching even the most vigilant off guard. These vulnerabilities, named for their fresh discovery, are a ticking time bomb in the world of cybersecurity.

\u{1F4CC} Inside this exploration, you'll discover:

- Decoding Zero-Days: Grasp the essence of 0-day vulnerabilities, understanding their origin and the imminent danger they pose.
- Spotlight on Recent Attacks: Delve into real-world examples, from the widely-used Zoom application to the intricate workings of Ubuntu systems. Witness firsthand the vulnerabilities that have shaken the digital world.
- Behind the Scenes: Dive deep into the code, unraveling the vulnerabilities that have been exploited. From SQL injections to remote code executions, get an up-close look at the mechanics of these threats.
- The Impact: Understand the ramifications of these vulnerabilities, from unauthorized access to potential data breaches. Realize the scale of the threat and the entities at risk.
- In-Depth Analysis: Access detailed sources, from technical write-ups to official CVE entries, ensuring you're equipped with comprehensive knowledge on the subject.

Whether you're a cybersecurity professional, a tech enthusiast, or someone keen on understanding the digital landscape's evolving threats, this guide offers a panoramic view of zero-day vulnerabilities. With real-world instances, technical breakdowns, and expert insights, you'll be well-prepared to navigate the treacherous waters of 0-day threats.

\u{1F310} Stay informed, stay vigilant, and fortify your defenses against the unseen dangers of the digital world! \u{1F310}

Link: https://medium.com/@gpiechnik/what-is-a-zero-day-0-day-exploit-real-life-examples-261c3145cc2a
`,$v={title:"What is a zero-day (0-day) exploit? Real-life examples",publishedAt:new Date(16848864e5),description:"\u{1F6A8} Zero-Day Alert: Unmasking the Silent Threats \u{1F6A8}",isPublish:!0,isDraft:!1},Ov={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md",rawData:`
title: "What is a zero-day (0-day) exploit? Real-life examples"
publishedAt: 2023-05-24
description: "\u{1F6A8} Zero-Day Alert: Unmasking the Silent Threats \u{1F6A8}"
slug: "what-is-a-zero-day-exploit"
isPublish: true`}});var aa={};u(aa,{_internal:()=>qv,body:()=>Gv,collection:()=>Mv,data:()=>Uv,id:()=>Nv,slug:()=>zv});var Nv,Mv,zv,Gv,Uv,qv,ra=l(()=>{"use strict";Nv="984-what-is-insecure-deserialization.md",Mv="posts",zv="what-is-insecure-deserialization",Gv=`
## Insecure deserialization

Embark on a journey into the intricate world of unsecured data deserialization, a lurking threat that has earned its place among the top ten most critical web application security risks. While the concept of serialization might seem benign, its misuse can open the doors to a myriad of cyber-attacks.

\u{1F4CC} Inside this guide, you'll uncover:

- Serialization Simplified: Decode the essence of serialization and its counterpart, deserialization. Understand how these processes play a pivotal role in data transmission and how they can be exploited.
- Real-World Risks: Dive into actual instances of unsafe deserialization. From WordPress plugins to Python libraries, witness how even the most unsuspecting code can be manipulated for malicious intent.
- CVE Chronicles: Explore detailed breakdowns of specific CVE entries, shedding light on the vulnerabilities in popular tools and libraries. Understand the mechanics of these threats and the potential damage they can inflict.
- Code Insights: Delve deep into vulnerable code snippets, dissecting their structure and pinpointing the exact lines that can be exploited. Equip yourself with the knowledge to identify and rectify such vulnerabilities in your own projects.

Whether you're a seasoned developer, a cybersecurity enthusiast, or someone keen on understanding the digital threats of today, this guide offers a comprehensive look into the world of unsecured data deserialization. With real-world examples, detailed explanations, and insights into the underlying code, you'll be well-equipped to navigate and fortify against these lurking dangers.

\u{1F310} Dive deep, master the intricacies of deserialization, and ensure your digital assets remain impervious to threats! \u{1F310}

Link: https://medium.com/@gpiechnik/what-is-insecure-deserialization-4183daa2fb28
`,Uv={title:"What is insecure deserialization",publishedAt:new Date(16848e8),description:"\u{1F510} Deserialization Dangers: Unraveling the Web of Vulnerabilities \u{1F510}",isPublish:!0,isDraft:!1},qv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md",rawData:`
title: "What is insecure deserialization"
publishedAt: 2023-05-23
description: "\u{1F510} Deserialization Dangers: Unraveling the Web of Vulnerabilities \u{1F510}"
slug: "what-is-insecure-deserialization"
isPublish: true`}});var ca={};u(ca,{_internal:()=>Zv,body:()=>Jv,collection:()=>Vv,data:()=>Yv,id:()=>Hv,slug:()=>Kv});var Hv,Vv,Kv,Jv,Yv,Zv,la=l(()=>{"use strict";Hv="985-what-are-cves-common-vulnerabilities-and-exposures.md",Vv="posts",Kv="what-are-cves-common-vulnerabilities-and-exposures",Jv=`
## What is CVE?

Step into the intricate world of CVE, the Common Vulnerabilities and Exposures dictionary, a pivotal resource for cybersecurity professionals and developers alike. As the digital realm expands, so does the need for a standardized system to identify and communicate vulnerabilities. Enter CVE, a beacon in the vast sea of system threats.

\u{1F4CC} Inside this guide, you'll discover:

- CVE 101: Grasp the essence of CVE, its vision, and its role as a crucial industry tool. While it may resemble a database, it's a comprehensive dictionary that categorizes system vulnerabilities and threats.
- Anatomy of a CVE: Dive deep into the structure of a CVE entry. From its unique ID to its detailed description, learn how each CVE provides a snapshot of a specific vulnerability.
- Real-World CVEs: Explore actual CVE entries, from vulnerabilities in popular libraries like go-unarr to issues in content management systems like bycms. Understand the diverse nature of threats, from Path Travelsal attacks to SQL Blind Injections.
- Beyond the Basics: Delve into the nuances of CVEs, like the asynchronous parameters in the ReaderResult class or the intricacies of the RUST language. Equip yourself with the knowledge to decipher even the most complex CVE entries.

Whether you're a cybersecurity veteran, a developer keen on fortifying your code, or a tech enthusiast eager to understand the landscape of system vulnerabilities, this guide offers a comprehensive look into the world of CVEs. Arm yourself with the insights to navigate the maze of system threats and ensure your digital assets remain secure.

\u{1F310} Dive deep, master the art of CVEs, and fortify your digital realm against lurking threats! \u{1F310}

Link: https://medium.com/@gpiechnik/what-are-and-how-to-read-cves-common-vulnerabilities-and-exposures-3aff972cb1bd
`,Yv={title:"What are and how to read CVEs (Common Vulnerabilities and Exposures)?",publishedAt:new Date(16847136e5),description:"\u{1F50D} CVE Uncovered: Navigating the Labyrinth of System Vulnerabilities \u{1F50D}",isPublish:!0,isDraft:!1},Zv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md",rawData:`
title: "What are and how to read CVEs (Common Vulnerabilities and Exposures)?"
publishedAt: 2023-05-22
description: "\u{1F50D} CVE Uncovered: Navigating the Labyrinth of System Vulnerabilities \u{1F50D}"
slug: "what-are-cves-common-vulnerabilities-and-exposures"
isPublish: true`}});var da={};u(da,{_internal:()=>ik,body:()=>tk,collection:()=>Qv,data:()=>nk,id:()=>Xv,slug:()=>ek});var Xv,Qv,ek,tk,nk,ik,ua=l(()=>{"use strict";Xv="986-security-risks-associated-with-using-git.md",Qv="posts",ek="security-risks-associated-with-using-git",tk=`
## Security risks associated with using the git

Embark on an enlightening exploration into the world of Git, the ubiquitous version control system that's become an integral part of every developer's toolkit. While Git's efficiency, transparency, and user-friendliness are undeniable, it's crucial to recognize the potential security pitfalls lurking beneath its surface.

\u{1F4CC} Inside this guide, you'll uncover:

- The .git Directory Dilemma: Discover the widespread vulnerability posed by exposed .git directories, with a staggering 390,000 sites at risk. Learn the importance of safeguarding commit histories and logs, and the critical step of adding .git to your .gitignore.
- The Perils of Exposed Data: Delve into the risky practice of embedding sensitive data directly in code. From API keys to encryption secrets, understand the magnitude of the threat and the tools available to detect such vulnerabilities.
- Commit Authenticity: Dive into the world of GPG keys and the significance of signed commits. Learn how to ensure the integrity of your code changes and protect against malicious commit impersonations.
- Misconfiguration Menace: Examine real-world cases of disastrous Git misconfigurations, like Samsung's leaked SmartThings app source code. Understand the dire consequences of such oversights and the importance of rigorous security checks.

Whether you're a seasoned developer, a budding programmer, or a cybersecurity enthusiast, this guide offers a comprehensive look into the security aspects of Git. Equip yourself with the knowledge to navigate Git's potential pitfalls and fortify your codebase against threats.

\u{1F310} Dive deep, master Git security, and ensure your projects remain uncompromised! \u{1F310}

Link: https://medium.com/@gpiechnik/security-risks-associated-with-using-the-git-version-control-system-4d2be37d401e
`,nk={title:"Security risks associated with using the git version control system",publishedAt:new Date(16846272e5),description:"\u{1F50D} Git Security Deep Dive: Unmasking the Hidden Threats \u{1F50D}",isPublish:!0,isDraft:!1},ik={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md",rawData:`
title: "Security risks associated with using the git version control system"
publishedAt: 2023-05-21
description: "\u{1F50D} Git Security Deep Dive: Unmasking the Hidden Threats \u{1F50D}"
slug: "security-risks-associated-with-using-git"
isPublish: true`}});var pa={};u(pa,{_internal:()=>lk,body:()=>rk,collection:()=>sk,data:()=>ck,id:()=>ok,slug:()=>ak});var ok,sk,ak,rk,ck,lk,ha=l(()=>{"use strict";ok="987-cross-site-request-forgery-attack.md",sk="posts",ak="cross-site-request-forgery-attack",rk=`
## Cross Site Request Forgery attack

Embark on a journey into the intricate world of Cross Site Request Forgery (CSRF) attacks, a subtle yet potent threat that often lurks unnoticed. This comprehensive guide sheds light on the nuances of CSRF, revealing how it cleverly forces users into unintended actions within web applications.

\u{1F50D} Inside this guide, you'll discover:

- The Essence of CSRF: Dive deep into the mechanics of CSRF attacks, understanding how they exploit trust and manipulate users into performing unintended actions.
- The Role of Same-Origin Policy: Grasp the foundational concept that underpins CSRF and its relationship with web security.
- Practical CSRF Scenarios: Explore real-world examples that demonstrate the stealth and potency of CSRF attacks, from exposing sensitive data to account takeovers.
- Token-Based Protection: Delve into the Synchronizer Token Pattern, a renowned method to shield against CSRF by generating unpredictable tokens.
- Live Application Analysis: Step into a hands-on demonstration of CSRF in action, complete with illustrative diagrams, sample codes, and a deep dive into the underlying logic.
- Vulnerability Detection: Familiarize yourself with cutting-edge tools like Bolt and XSRFProbe, designed to detect and thwart CSRF vulnerabilities.

Whether you're a cybersecurity enthusiast, web developer, or someone passionate about online safety, this guide offers a holistic view of CSRF, equipping you with the knowledge to identify, understand, and counteract this subtle web menace.

\u{1F310} Dive deep, unravel the mysteries of CSRF, and fortify your web defenses like never before! \u{1F310}

Link: https://medium.com/@gpiechnik/understanding-the-cross-site-request-forgery-csrf-attack-b1dc2374f83
`,ck={title:"Understanding the Cross Site Request Forgery (CSRF) attack",publishedAt:new Date(16845408e5),description:"\u{1F510} CSRF Attacks Unveiled: Navigating the Subtle Threats of Web Security \u{1F510}",isPublish:!0,isDraft:!1},lk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md",rawData:`
title: "Understanding the Cross Site Request Forgery (CSRF) attack"
publishedAt: 2023-05-20
description: "\u{1F510} CSRF Attacks Unveiled: Navigating the Subtle Threats of Web Security \u{1F510}"
slug: "cross-site-request-forgery-attack"
isPublish: true`}});var ma={};u(ma,{_internal:()=>fk,body:()=>hk,collection:()=>uk,data:()=>mk,id:()=>dk,slug:()=>pk});var dk,uk,pk,hk,mk,fk,fa=l(()=>{"use strict";dk="988-cross-origin-resource-sharing-cors-how-does-it-work.md",uk="posts",pk="cros-origin-resource-sharing-cors-how-does-it-work",hk=`
## Cross-Origin Resource Sharing (CORS)

Venture into the intricate realm of Cross-Origin Resource Sharing (CORS) and unravel the complexities of web security. This guide offers a deep dive into the foundational principles of CORS, ensuring you're well-equipped to handle cross-origin requests with confidence.

\u{1F50D} Inside this guide, you'll explore:

- The essence of Same-origin policy (SOP): Grasp the fundamental mechanism that governs script and document interactions based on their origin.
- Practical applications of CORS: Delve into real-world scenarios where strict data exchange rules need to be relaxed, from managing multiple environments to facilitating frontend development.
- Cross-Origin Resource Sharing explained: Understand the mechanics of CORS, from its introduction to its practical implementation, ensuring secure HTTP cross-origin requests.
- Simple vs. Non-straight queries: Dive into the nuances of different cross-site requests, complete with illustrative diagrams and sample codes.
- HTTP headers in CORS: Familiarize yourself with the essential request and response headers pivotal to CORS, along with their specifications.

Whether you're a web developer, security enthusiast, or just curious about web protocols, this guide offers a comprehensive overview of CORS, ensuring you have the knowledge to tackle cross-origin challenges head-on.

\u{1F30D} Dive in, explore the world of CORS, and elevate your web security understanding to new heights! \u{1F30D}

Link: https://medium.com/@gpiechnik/cross-origin-resource-sharing-cors-how-does-671c39f8af65
`,mk={title:"Cross-Origin Resource Sharing (CORS). How does it work?",publishedAt:new Date(16844544e5),description:"\u{1F310} Demystifying CORS: Navigating Cross-Origin Requests with Ease \u{1F310}",isPublish:!0,isDraft:!1},fk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md",rawData:`
title: "Cross-Origin Resource Sharing (CORS). How does it work?"
publishedAt: 2023-05-19
description: "\u{1F310} Demystifying CORS: Navigating Cross-Origin Requests with Ease \u{1F310}"
slug: "cros-origin-resource-sharing-cors-how-does-it-work"
isPublish: true`}});var ga={};u(ga,{_internal:()=>vk,body:()=>Dk,collection:()=>yk,data:()=>bk,id:()=>gk,slug:()=>wk});var gk,yk,wk,Dk,bk,vk,ya=l(()=>{"use strict";gk="989-linux-basics.md",yk="posts",wk="linux-basics",Dk=`
## Linux basics

Embark on a journey through the intricate world of Unix commands, an essential toolkit for anyone aspiring to excel in backend development, automation testing, or penetration testing. This comprehensive guide demystifies the foundational Linux commands, ensuring you're well-equipped to navigate the Linux environment with confidence.

\u{1F50D} Inside this guide, you'll discover:

- A primer on operators: Understand the special characters that enable you to execute consecutive commands seamlessly.
- A deep dive into file and folder operations: From basic tasks like navigating directories and reading file contents to advanced operations like copying and deleting directories.
- The art of handling and reading processes: Get acquainted with tools that offer insights into CPU and memory usage, active processes, and more.
- Miscellaneous commands: Learn about handy commands that provide insights into logged-in users, clear the terminal, and access the system manual.
- Real-world examples and use-cases that illustrate the practical applications of each command.
- Tips, tricks, and best practices to optimize your command-line experience and boost your productivity.

Whether you're a Linux newbie or a seasoned professional looking to brush up on the basics, this guide offers a holistic overview of Unix commands, ensuring you have the skills to tackle any challenge in the Linux ecosystem.

\u{1F469}\u200D\u{1F4BB} Dive in, explore the power of Unix commands, and elevate your Linux game to new heights! \u{1F468}\u200D\u{1F4BB}

Link: https://medium.com/@gpiechnik/linux-basics-fd71e6826a43
`,bk={title:"Linux basics",publishedAt:new Date(1684368e6),description:"\u{1F427} Mastering Unix Commands: Your Gateway to Linux Proficiency \u{1F427}",isPublish:!0,isDraft:!1},vk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md",rawData:`
title: "Linux basics"
publishedAt: 2023-05-18
description: "\u{1F427} Mastering Unix Commands: Your Gateway to Linux Proficiency \u{1F427}"
slug: "linux-basics"
isPublish: true`}});var wa={};u(wa,{_internal:()=>Fk,body:()=>Ck,collection:()=>xk,data:()=>Ak,id:()=>kk,slug:()=>Sk});var kk,xk,Sk,Ck,Ak,Fk,Da=l(()=>{"use strict";kk="990-what-is-path-travelsal-vulnerability.md",xk="posts",Sk="path-travelsal-vulnerability",Ck=`
## Path travelsal vulnerability

Dive deep into the world of path traversal vulnerabilities, a seemingly innocuous yet potent threat that can grant unauthorized access to confidential files and folders. By simply manipulating parameters, attackers can exploit these vulnerabilities to not only expose sensitive data but, in some cases, execute remote code.

\u{1F511} Inside this guide, you'll uncover:

- A straightforward breakdown of path traversal vulnerabilities and how they can be exploited using simple manipulations like \u201C../../\u201D.
- The various defense mechanisms, such as WAF, that websites deploy to guard against these vulnerabilities, and how they can sometimes be bypassed.
- A detailed look at sample payloads that can be used to exploit these vulnerabilities and their encoded representations.
- Real-world examples that highlight the persistence of path traversal vulnerabilities in both legacy and modern technologies.
- A deep dive into specific cases, from the dangers of improper validation in server-side rendered pages to the lethal combination of open redirect and path traversal vulnerabilities leading to SSRF.
- An exploration of the kramdown library's vulnerability, a popular Ruby library used by platforms like Github Pages and Jekyll, and how it was exploited for remote code execution.
- Tips and tools for automating the detection of these vulnerabilities, with a spotlight on the powerful dot2moon tool.

Whether you're a cybersecurity enthusiast, a web developer, or just curious about the hidden threats lurking in the digital realm, this guide offers a comprehensive exploration of path traversal vulnerabilities, equipping you with the knowledge to defend against them.

\u{1F449} Embark on this enlightening journey and arm yourself against one of the internet's silent yet dangerous threats! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-path-travelsal-vulnerability-c7f7851de861
`,Ak={title:"What is path travelsal vulnerability?",publishedAt:new Date(16842816e5),description:"\u{1F50D} Path Traversal Vulnerabilities: Unmasking Hidden Threats \u{1F50D}",isPublish:!0,isDraft:!1},Fk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md",rawData:`
title: "What is path travelsal vulnerability?"
publishedAt: 2023-05-17
description: "\u{1F50D} Path Traversal Vulnerabilities: Unmasking Hidden Threats \u{1F50D}"
slug: "path-travelsal-vulnerability"
isPublish: true`}});var ba={};u(ba,{_internal:()=>Ik,body:()=>Rk,collection:()=>Tk,data:()=>jk,id:()=>Ek,slug:()=>Pk});var Ek,Tk,Pk,Rk,jk,Ik,va=l(()=>{"use strict";Ek="991-what-is-the-TCP-IP-model.md",Tk="posts",Pk="what-is-tcp-ip-model",Rk=`
## What is the TCP IP Model?

Ever wondered how devices, regardless of their operating systems, seamlessly communicate over the internet? Dive deep into the world of TCP/IP, the protocol model that has been the cornerstone of internet communication since the 1970s.

\u{1F50D} Inside this guide, you'll discover:

- The historical evolution of the TCP/IP model and its significance in ensuring universal communication across devices.
- How the TCP/IP model intertwines with the theoretical ISO/OSI model, and why understanding both is crucial for navigating complex network documentation.
- A detailed breakdown of the data transmission process in TCP/IP, from the initial message encapsulation to the final data reception.
- An exploration of the four pivotal layers of the TCP/IP model: Application, Transport, Internet, and Network Access, and the protocols that operate within each.
- A deep dive into the intricacies of network sockets, the unique endpoints that facilitate data transmission between devices.
- A closer look at the TCP and UDP protocols, their differences, and their roles in ensuring data integrity and speed.
- Insights into the Internet layer's role in routing packets and the significance of IP addresses in this process.
- A glimpse into the Network Access layer, where data packets are prepared for their journey across the network.

Whether you're a network enthusiast, an IT professional, or just curious about the underlying mechanisms that power our online interactions, this guide offers a comprehensive exploration of the TCP/IP model, the unsung hero of the digital age.

\u{1F449} Embark on this enlightening journey and unravel the mysteries of the protocols that have been the foundation of the internet for decades! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-the-tcp-ip-model-6ddbf970be35
`,jk={title:"What is the TCP/IP model",publishedAt:new Date(16841952e5),description:"\u{1F310} TCP/IP Unraveled: The Backbone of the Internet \u{1F310}",isPublish:!0,isDraft:!1},Ik={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md",rawData:`
title: "What is the TCP/IP model"
publishedAt: 2023-05-16
description: "\u{1F310} TCP/IP Unraveled: The Backbone of the Internet \u{1F310}"
slug: "what-is-tcp-ip-model"
isPublish: true`}});var ka={};u(ka,{_internal:()=>Ok,body:()=>Wk,collection:()=>Lk,data:()=>$k,id:()=>_k,slug:()=>Bk});var _k,Lk,Bk,Wk,$k,Ok,xa=l(()=>{"use strict";_k="992-what-is-SSL-certificate.md",Lk="posts",Bk="what-is-ssl-certificate",Wk=`
## What is SSL Certificate

Ever clicked on a website and noticed the little padlock icon in your browser's address bar? That's the magic of SSL/TLS at work! Dive into the intricate world of SSL/TLS, the protocols that keep our online interactions safe and secure.

\u{1F50D} Inside this guide, you'll uncover:

- A nostalgic trip back to 1994, where it all began with Netscape's pioneering SSL protocol, and its evolution into the TLS we know today.
- The subtle distinction between the TLS protocol and SSL certificates, and why we still colloquially refer to them as "SSL certificates."
- A deep dive into the ISO/OSI model, revealing where the TLS protocol fits in and how it ensures the security of higher layers.
- A step-by-step breakdown of the SSL handshake process, illuminating how your computer and the server establish a secure connection.
- The different types of SSL certificates, from the basic Domain Validation (DV) to the rigorous Extended Validation (EV), and what sets them apart.
- Handy tools and commands to inspect and verify SSL certificates, ensuring you're always on a secure connection.
- A glimpse into the structure of certificates, demystifying the various components that make up these digital security guards.

Whether you're a cybersecurity enthusiast, a web developer, or just curious about how your online data stays protected, this guide offers a comprehensive look into SSL/TLS, the unsung heroes of internet security.

\u{1F449} Embark on this enlightening journey and discover the protocols that stand guard, ensuring our online world remains a safe space! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-ssl-certificate-1a18ba092023
`,$k={title:"What is SSL Certificate",publishedAt:new Date(16841088e5),description:"\u{1F512} SSL/TLS Unveiled: The Guardians of Online Security \u{1F512}",isPublish:!0,isDraft:!1},Ok={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md",rawData:`
title: "What is SSL Certificate"
publishedAt: 2023-05-15
description: "\u{1F512} SSL/TLS Unveiled: The Guardians of Online Security \u{1F512}"
slug: "what-is-ssl-certificate"
isPublish: true`}});var Sa={};u(Sa,{_internal:()=>qk,body:()=>Gk,collection:()=>Mk,data:()=>Uk,id:()=>Nk,slug:()=>zk});var Nk,Mk,zk,Gk,Uk,qk,Ca=l(()=>{"use strict";Nk="993-DNS-protocol-explained.md",Mk="posts",zk="dns-protocol-explained",Gk=`
## DNS Protocol explained

Ever wondered how typing a simple website name like "www.example.com" magically takes you to the desired webpage? Dive deep into the fascinating world of DNS (Domain Name System) and unravel the intricate processes that make our online experiences seamless!

\u{1F50D} Inside this guide, you'll discover:

- The pivotal role of DNS in converting user-friendly domain names into computer-friendly IP addresses.
- A behind-the-scenes look at how DNS requests are processed, from your browser to the vast databases of DNS.
- A step-by-step breakdown of DNS queries, from recursive to iterative, and how they help fetch the right IP addresses.
- An in-depth exploration of various DNS records, from the common A and AAAA records to the more specialized SRV and TXT records.
- Hands-on tools and commands, like dig, to query DNS servers and gain insights into the DNS infrastructure.
- Fun tidbits, like what "IN" in DNS records really means, and much more!

Whether you're a tech enthusiast, an IT professional, or just curious about the inner workings of the internet, this guide offers a comprehensive overview of DNS, its significance, and its intricate operations.

\u{1F449} Embark on this enlightening journey and decode the mysteries of DNS, the unsung hero that powers our online world! \u{1F448}

Link: https://medium.com/@gpiechnik/dns-protocol-explained-70f39a2a5a6e
`,Uk={title:"DNS Protocol explained",publishedAt:new Date(16840224e5),description:"\u{1F30D} DNS Demystified: Navigating the Backbone of the Internet \u{1F30D}",isPublish:!0,isDraft:!1},qk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md",rawData:`
title: "DNS Protocol explained"
publishedAt: 2023-05-14
description: "\u{1F30D} DNS Demystified: Navigating the Backbone of the Internet \u{1F30D}"
slug: "dns-protocol-explained"
isPublish: true`}});var Aa={};u(Aa,{_internal:()=>Zk,body:()=>Jk,collection:()=>Vk,data:()=>Yk,id:()=>Hk,slug:()=>Kk});var Hk,Vk,Kk,Jk,Yk,Zk,Fa=l(()=>{"use strict";Hk="994-Insecure-direct-object-reference-IDOR-vulnerability-types.md",Vk="posts",Kk="insecure-direct-object-reference-IDOR-vulnerability-types",Jk=`
## IDOR vulnerability types

Ever clicked on a web link and wondered what's happening behind the scenes? Dive into our comprehensive guide on IDOR (Insecure Direct Object References) and discover the hidden vulnerabilities that might be lurking in the shadows of web requests!

\u{1F50D} Inside, you'll uncover:

- The intricate world of HTTP requests and how manipulating parameters can potentially expose sensitive data.
- A step-by-step breakdown of IDOR, a vulnerability that can grant unauthorized access to proprietary data or even tamper with server files.
- Expert techniques to detect hidden parameters, from intercepting requests with tools like Burpsuite to leveraging powerful scripts like Arjun.
- A deep dive into the various types of IDOR vulnerabilities, each with its own potential risks and consequences.
- Real-world examples and case studies showcasing IDOR in action, from accessing sensitive user data to taking over another user's account.

Whether you're a cybersecurity enthusiast, a web developer, or just someone keen on understanding the intricacies of web vulnerabilities, this guide offers a holistic view of IDOR, its potential risks, and ways to safeguard against it.

\u{1F449} Embark on this enlightening journey and arm yourself with the knowledge to navigate the treacherous waters of web vulnerabilities! \u{1F448}

Link: https://medium.com/@gpiechnik/insecure-direct-object-reference-idor-vulnerability-types-f4b976bbd58b
`,Yk={title:"Insecure Direct Object Reference (IDOR) vulnerability types",publishedAt:new Date(1683936e6),description:"\u{1F310} IDOR Uncovered: Delving Deep into Insecure Direct Object References \u{1F310}",isPublish:!0,isDraft:!1},Zk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md",rawData:`
title: "Insecure Direct Object Reference (IDOR) vulnerability types"
publishedAt: 2023-05-13
description: "\u{1F310} IDOR Uncovered: Delving Deep into Insecure Direct Object References \u{1F310}"
slug: "insecure-direct-object-reference-IDOR-vulnerability-types"
isPublish: true`}});var Ea={};u(Ea,{_internal:()=>i0,body:()=>t0,collection:()=>Qk,data:()=>n0,id:()=>Xk,slug:()=>e0});var Xk,Qk,e0,t0,n0,i0,Ta=l(()=>{"use strict";Xk="995-what-is-jwt.md",Qk="posts",e0="what-is-jwt",t0=`
## What is JWT

Ever wondered about the backbone of modern authentication and authorization? Dive into our comprehensive guide on JWT (JSON Web Tokens) and unravel the complexities of this open standard that's revolutionizing the way data is exchanged!

\u{1F50D} Inside, you'll explore:

- A deep dive into the anatomy of JWT, breaking down its three core components: header, payload, and signature.
- A hands-on look at how JWTs are structured, from encrypted records to JSON objects, and how they ensure data integrity and authenticity.
- The significance of the JWT signature, the guardian of token authenticity, and the cryptographic algorithms that fortify it.
- Potential security pitfalls and vulnerabilities associated with JWT, from algorithm cracking to implementation challenges.
- Expert insights and resources, including an exhaustive eBook on JWT security and a deep dive into critical vulnerabilities in JWT libraries.

Whether you're a developer, a cybersecurity enthusiast, or just someone keen on understanding the nuances of web security, this guide offers a holistic view of JWT, its strengths, and its vulnerabilities.

\u{1F449} Embark on this journey now and master the world of JSON Web Tokens! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-jwt-json-web-token-202b7e5155af
`,n0={title:"What is JWT (Json Web Token)",publishedAt:new Date(16838496e5),description:"\u{1F510} JWT Demystified: Navigating the Intricacies of JSON Web Tokens \u{1F510}",isPublish:!0,isDraft:!1},i0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md",rawData:`
title: "What is JWT (Json Web Token)"
publishedAt: 2023-05-12
description: "\u{1F510} JWT Demystified: Navigating the Intricacies of JSON Web Tokens \u{1F510}"
slug: "what-is-jwt"
isPublish: true`}});var Pa={};u(Pa,{_internal:()=>l0,body:()=>r0,collection:()=>s0,data:()=>c0,id:()=>o0,slug:()=>a0});var o0,s0,a0,r0,c0,l0,Ra=l(()=>{"use strict";o0="996-x-frame-options-header-explained.md",s0="posts",a0="x-frame-options-header-explained",r0=`
## X-Frame-Options header explained

Ever pondered the significance of HTTP headers in ensuring web security? Delve into our enlightening guide on X-Frame-Options, a crucial yet often overlooked HTTP header, and its pivotal role in safeguarding users from malicious attacks!

\u{1F50D} Inside, you'll uncover:

- A concise breakdown of the X-Frame-Options header, its potential values, and the implications of its absence.
- A deep dive into the sinister world of click-jacking attacks, where users are duped into interacting with concealed elements, all due to a missing header.
- Real-world attack scenarios, from crafty email traps to covert scripts that exploit the vulnerabilities of embedded content.
- Expert insights from the cybersecurity community, including detailed accounts of how even seasoned users can fall prey to these sophisticated attacks.
- A treasure trove of resources and case studies, offering a comprehensive understanding of the risks and countermeasures associated with iframe vulnerabilities.

Whether you're a web developer, a cybersecurity enthusiast, or just someone keen on understanding the intricacies of web security, this guide offers a deep dive into the hidden dangers lurking in the shadows of embedded content.

\u{1F449} Dive in now and fortify your knowledge on the critical importance of X-Frame-Options! \u{1F448}

Link: https://medium.com/@gpiechnik/x-frame-options-header-explained-70775e3bdaac
`,c0={title:"X-Frame-Options Header Explained",publishedAt:new Date(16837632e5),description:"\u{1F6E1}\uFE0F X-Frame-Options Unveiled: Navigating the Perils of Embedded Content \u{1F6E1}\uFE0F",isPublish:!0,isDraft:!1},l0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md",rawData:`
title: "X-Frame-Options Header Explained"
publishedAt: 2023-05-11
description: "\u{1F6E1}\uFE0F X-Frame-Options Unveiled: Navigating the Perils of Embedded Content \u{1F6E1}\uFE0F"
slug: "x-frame-options-header-explained"
isPublish: true`}});var ja={};u(ja,{_internal:()=>f0,body:()=>h0,collection:()=>u0,data:()=>m0,id:()=>d0,slug:()=>p0});var d0,u0,p0,h0,m0,f0,Ia=l(()=>{"use strict";d0="997-network-devices-shodan.md",u0="posts",p0="network-devices-shodan",h0=`
## Checking network devices in Shodan search engine

Ever wondered how to uncover the hidden treasures of the Internet of Things (IoT)? Dive deep into the world of reconnaissance with our comprehensive guide on Shodan, the search engine for IoT!

\u{1F50D} Inside, you'll discover:

- The foundational difference between passive and active reconnaissance, and why it matters in the realm of IoT.
- An introduction to Shodan, the powerful search engine that reveals the secrets of networked devices, from servers to surveillance cameras.
- A sneak peek into sample search results and the kind of invaluable information you can extract.
- Expert tips on filtering results in Shodan, ensuring you pinpoint exactly what you're looking for.
- A treasure trove of additional resources: from a mesmerizing visual journey of random images set to retro tunes, to a handy command-line tool for Shodan enthusiasts.
- Recommendations for further reading and alternative platforms like Censys and ZoomEye, ensuring you're well-equipped in the world of IoT exploration.

Whether you're a cybersecurity professional, a tech enthusiast, or just someone curious about the vast landscape of connected devices, this guide is your gateway to the hidden corners of the internet.

\u{1F449} Dive in now and master the art of IoT reconnaissance with Shodan! \u{1F448}

Link: https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1`,m0={title:"Checking network devices in Shodan search engine",publishedAt:new Date(16836768e5),description:"\u{1F310} Shodan Uncovered: The Ultimate Guide to IoT Reconnaissance \u{1F310}",isPublish:!0,isDraft:!1},f0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md",rawData:`
title: "Checking network devices in Shodan search engine"
publishedAt: 2023-05-10
description: "\u{1F310} Shodan Uncovered: The Ultimate Guide to IoT Reconnaissance \u{1F310}"
slug: "network-devices-shodan"
isPublish: true`}});var _a={};u(_a,{_internal:()=>v0,body:()=>D0,collection:()=>y0,data:()=>b0,id:()=>g0,slug:()=>w0});var g0,y0,w0,D0,b0,v0,La=l(()=>{"use strict";g0="998-docker-explained-for-pentesters.md",y0="posts",w0="docker-explained-for-pentesters",D0=`
## Docker explained for pentesters

Ever wondered why Docker has become the talk of the town in the IT world? Or perhaps you've heard about containerization but aren't quite sure how it differs from traditional virtualization? Dive into our in-depth guide and get all your questions answered!

\u{1F50D} Inside, you'll uncover:

- The fundamental differences between containerization and virtualization, illustrated with a clear visual comparison.
- The pros and cons of both methods, and why Docker might be the game-changer you've been looking for.
- A deep dive into Docker's architecture and its unique approach to breaking down applications into containers.
- Real-world applications of Docker beyond just development and administration. Whether you're a pentester or an automation tester, discover how Docker can streamline your workflow.
- A step-by-step breakdown of Dockerfile, the backbone of Docker operations, complete with a hands-on example.
- Practical tips on building and running Docker images and containers, ensuring you're well-equipped to get started on your own projects.
- A quick tour of essential platforms like Docker Hub and Labs play with Docker, and a handy cheatsheet of Docker commands to keep by your side.

Whether you're a seasoned developer, an IT professional, or just someone curious about the world of containerization, this guide offers insights for all. Don't get left behind in the Docker revolution!

\u{1F449} Dive in now and embark on your Docker journey! \u{1F448}

Link: https://medium.com/@gpiechnik/docker-explained-for-pentester-6a90b5822040
`,b0={title:"Docker explained for pentesters",publishedAt:new Date(16835904e5),description:"\u{1F433} Docker Demystified: A Comprehensive Guide to Containerization \u{1F433}",isPublish:!0,isDraft:!1},v0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md",rawData:`
title: "Docker explained for pentesters"
publishedAt: 2023-05-09
description: "\u{1F433} Docker Demystified: A Comprehensive Guide to Containerization \u{1F433}"
slug: "docker-explained-for-pentesters"
isPublish: true`}});var Ba={};u(Ba,{_internal:()=>F0,body:()=>C0,collection:()=>x0,data:()=>A0,id:()=>k0,slug:()=>S0});var k0,x0,S0,C0,A0,F0,Wa=l(()=>{"use strict";k0="999-how-to-optimise-jmeter.md",x0="posts",S0="how-to-optimise-jmeter",C0=`
## How to optimise JMeter

Ever felt the weight of JMeter slowing down your performance testing? You're not alone. While JMeter has been a staple in the industry for years, it's no secret that it comes with its own set of challenges. But what if we told you there's a way to harness its power more efficiently?

Dive into my comprehensive guide where we unravel the intricacies of JMeter and JVM optimization. From the nuances of Virtual Threads to the prowess of Groovy, we've got you covered. Learn how to tweak your scripts for maximum efficiency, run tests from the console like a pro, and set up real-time result monitoring with InfluxDB + Grafana.

\u{1F50D} Inside, you'll discover:

- Step-by-step script modifications to minimize server RAM consumption.
- The ins and outs of JVM parameters and how they can make or break your tests.
- A breakdown of JMeter parameters for those who prefer the .jar approach.

Don't let JMeter's quirks hold you back. With our expert tips, you'll be on your way to smoother, more efficient performance testing. And if all else fails? We've got a backup plan for that too.

\u{1F449} Dive in now and revolutionize your JMeter testing experience! \u{1F448}

Link: https://medium.com/@gpiechnik/how-to-optimise-jmeter-for-performance-tests-b4b05de3ea15
`,A0={title:"How to optimise JMeter for performance tests",publishedAt:new Date(16835904e5),description:"\u{1F680} Unlock the Full Potential of JMeter: A Deep Dive into Optimization \u{1F680}",isPublish:!0,isDraft:!1},F0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md",rawData:`
title: "How to optimise JMeter for performance tests"
publishedAt: 2023-05-09
description: "\u{1F680} Unlock the Full Potential of JMeter: A Deep Dive into Optimization \u{1F680}"
slug: "how-to-optimise-jmeter"
isPublish: true`}});var Ga={};u(Ga,{Content:()=>za,compiledContent:()=>P0,default:()=>za,file:()=>Na,frontmatter:()=>Oa,getHeadings:()=>R0,images:()=>rn,rawContent:()=>T0,url:()=>Ma});function E0(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:rn[i].src,...rn[i].attributes}))}function T0(){return`
## Using ChatGPT to write nuclei exploits

In the ever-evolving realm of cybersecurity, AI-driven tools like ChatGPT are making waves. But how can they be harnessed effectively for penetration testing? This article delves into the intricate dance of crafting exploits using ChatGPT, with a special focus on the Nuclei tool.

\u{1F4CC} Inside this Exploration:

- AI in Cybersecurity: A brief overview of how AI, especially ChatGPT, is revolutionizing the cybersecurity landscape.
- Nuclei 101: Get acquainted with Nuclei, a powerful framework for crafting vulnerability templates in yaml format.
- Crafting Exploits with ChatGPT: A step-by-step guide on how to converse with ChatGPT to generate exploits. From simple XSS attacks to more advanced ones, discover the art of asking the right questions.
- Real-World Testing: Dive into practical examples, understand the nuances of creating exploits, and learn how to refine them for optimal results.
- The Power of Precision: Understand the importance of precise questioning and how it can make or break your exploit generation process with ChatGPT.
- Final Thoughts: Reflect on the potential of AI in penetration testing and the future of exploit generation.

Whether you're a seasoned cybersecurity professional or an enthusiast eager to explore the confluence of AI and penetration testing, this guide offers a comprehensive look into the potential of ChatGPT in the world of exploit creation. Dive in and discover how the right questions can unlock a world of possibilities! \u{1F6E1}\uFE0F\u{1F916}\u{1F510}

Link: https://medium.com/@gpiechnik/using-chatgpt-to-write-nuclei-exploits-9546e9ffa8ff
`}function P0(){return $a}function R0(){return[{depth:2,slug:"using-chatgpt-to-write-nuclei-exploits",text:"Using ChatGPT to write nuclei exploits"}]}async function za(){let{layout:e,...t}=Oa;return t.file=Na,t.url=Ma,g(m,{"set:html":$a})}var E3,R3,rn,$a,Oa,Na,Ma,Ua=l(()=>{"use strict";A();E3=h(b(),1);v();k();R3=h(x(),1);S();C();rn={};$a=E0(`<h2 id="using-chatgpt-to-write-nuclei-exploits">Using ChatGPT to write nuclei exploits</h2>
<p>In the ever-evolving realm of cybersecurity, AI-driven tools like ChatGPT are making waves. But how can they be harnessed effectively for penetration testing? This article delves into the intricate dance of crafting exploits using ChatGPT, with a special focus on the Nuclei tool.</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>AI in Cybersecurity: A brief overview of how AI, especially ChatGPT, is revolutionizing the cybersecurity landscape.</li>
<li>Nuclei 101: Get acquainted with Nuclei, a powerful framework for crafting vulnerability templates in yaml format.</li>
<li>Crafting Exploits with ChatGPT: A step-by-step guide on how to converse with ChatGPT to generate exploits. From simple XSS attacks to more advanced ones, discover the art of asking the right questions.</li>
<li>Real-World Testing: Dive into practical examples, understand the nuances of creating exploits, and learn how to refine them for optimal results.</li>
<li>The Power of Precision: Understand the importance of precise questioning and how it can make or break your exploit generation process with ChatGPT.</li>
<li>Final Thoughts: Reflect on the potential of AI in penetration testing and the future of exploit generation.</li>
</ul>
<p>Whether you\u2019re a seasoned cybersecurity professional or an enthusiast eager to explore the confluence of AI and penetration testing, this guide offers a comprehensive look into the potential of ChatGPT in the world of exploit creation. Dive in and discover how the right questions can unlock a world of possibilities! \u{1F6E1}\uFE0F\u{1F916}\u{1F510}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/using-chatgpt-to-write-nuclei-exploits-9546e9ffa8ff">https://medium.com/@gpiechnik/using-chatgpt-to-write-nuclei-exploits-9546e9ffa8ff</a></p>`),Oa={title:"Using ChatGPT to write nuclei exploits",publishedAt:"2023-07-20T00:00:00.000Z",description:"\u{1F50D} Harnessing ChatGPT for Penetration Testing: A Deep Dive \u{1F50D}",slug:"using-chatgpt-to-write-nuclei-exploits",isPublish:!0},Na="/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md",Ma=void 0;za[Symbol.for("astro.needsHeadRendering")]=!0});var qa={};u(qa,{default:()=>B0});async function j0(){return Promise.resolve().then(()=>(Ua(),Ga))}var I0,_0,L0,B0,Ha=l(()=>{"use strict";I0="@@ASTRO-LINKS@@",_0="@@ASTRO-STYLES@@",L0="@@ASTRO-SCRIPTS@@",B0={__astroPropagation:!0,getMod:j0,collectedLinks:I0,collectedStyles:_0,collectedScripts:L0}});var Xa={};u(Xa,{Content:()=>Za,compiledContent:()=>O0,default:()=>Za,file:()=>Ja,frontmatter:()=>Ka,getHeadings:()=>N0,images:()=>cn,rawContent:()=>$0,url:()=>Ya});function W0(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:cn[i].src,...cn[i].attributes}))}function $0(){return`
## Nuclei unleashed - writing first exploit

In the intricate dance of penetration testing, the rhythm is set by the tools we use. But what if we could choreograph our own steps? Enter Nuclei, a framework that lets you craft custom templates for precise vulnerability scanning. Today, we'll dive deep into the world of these templates and see how they can elevate your pen-testing game.

\u{1F4CC} Inside this Exploration:

- Nuclei Unveiled: Discover the essence of Nuclei and its role in the vast landscape of penetration testing.
- Crafting Templates: A hands-on guide to creating your first custom template. From defining basic information to setting up requests and assertions, we've got you covered.
- Real-World Testing: Dive into a practical example as we test a Facebook page for potential vulnerabilities using a custom Nuclei template.
- Beyond the Basics: Learn how to validate, run, and interpret the results of your custom templates. Plus, find out how you can contribute to the Nuclei community by sharing your templates.

Whether you're a seasoned pen-tester or just dipping your toes into the world of cybersecurity, this guide offers a fresh perspective on vulnerability scanning. Join us as we unravel the potential of Nuclei templates and discover how they can be a game-changer in your penetration testing toolkit. \u{1F6E1}\uFE0F\u{1F5A5}\uFE0F\u{1F680}

Link: https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0
`}function O0(){return Va}function N0(){return[{depth:2,slug:"nuclei-unleashed---writing-first-exploit",text:"Nuclei unleashed - writing first exploit"}]}async function Za(){let{layout:e,...t}=Ka;return t.file=Ja,t.url=Ya,g(m,{"set:html":Va})}var L3,$3,cn,Va,Ka,Ja,Ya,Qa=l(()=>{"use strict";A();L3=h(b(),1);v();k();$3=h(x(),1);S();C();cn={};Va=W0(`<h2 id="nuclei-unleashed---writing-first-exploit">Nuclei unleashed - writing first exploit</h2>
<p>In the intricate dance of penetration testing, the rhythm is set by the tools we use. But what if we could choreograph our own steps? Enter Nuclei, a framework that lets you craft custom templates for precise vulnerability scanning. Today, we\u2019ll dive deep into the world of these templates and see how they can elevate your pen-testing game.</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Nuclei Unveiled: Discover the essence of Nuclei and its role in the vast landscape of penetration testing.</li>
<li>Crafting Templates: A hands-on guide to creating your first custom template. From defining basic information to setting up requests and assertions, we\u2019ve got you covered.</li>
<li>Real-World Testing: Dive into a practical example as we test a Facebook page for potential vulnerabilities using a custom Nuclei template.</li>
<li>Beyond the Basics: Learn how to validate, run, and interpret the results of your custom templates. Plus, find out how you can contribute to the Nuclei community by sharing your templates.</li>
</ul>
<p>Whether you\u2019re a seasoned pen-tester or just dipping your toes into the world of cybersecurity, this guide offers a fresh perspective on vulnerability scanning. Join us as we unravel the potential of Nuclei templates and discover how they can be a game-changer in your penetration testing toolkit. \u{1F6E1}\uFE0F\u{1F5A5}\uFE0F\u{1F680}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0">https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0</a></p>`),Ka={title:"Nuclei unleashed - writing first exploit",publishedAt:"2023-07-12T00:00:00.000Z",description:"\u{1F50D} Nuclei: The Power of Custom Templates in Penetration Testing \u{1F50D}",slug:"nuclei-writing-exploit",isPublish:!0},Ja="/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md",Ya=void 0;Za[Symbol.for("astro.needsHeadRendering")]=!0});var er={};u(er,{default:()=>q0});async function M0(){return Promise.resolve().then(()=>(Qa(),Xa))}var z0,G0,U0,q0,tr=l(()=>{"use strict";z0="@@ASTRO-LINKS@@",G0="@@ASTRO-STYLES@@",U0="@@ASTRO-SCRIPTS@@",q0={__astroPropagation:!0,getMod:M0,collectedLinks:z0,collectedStyles:G0,collectedScripts:U0}});var rr={};u(rr,{Content:()=>ar,compiledContent:()=>K0,default:()=>ar,file:()=>or,frontmatter:()=>ir,getHeadings:()=>J0,images:()=>ln,rawContent:()=>V0,url:()=>sr});function H0(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:ln[i].src,...ln[i].attributes}))}function V0(){return`
## Why standard deviation is important in performance tests

In the vast realm of performance testing, some metrics shine brighter than others. While average response times and percentiles often steal the limelight, there's an unsung hero lurking in the shadows: the standard deviation. Often overlooked, this metric can be the key to unlocking deeper insights into your application's performance. But what makes it so special?

\u{1F4CC} Inside this Exploration:

- Beyond the Basics: Dive into the world of standard deviation and discover why it's more than just a mathematical formula.
- The Real Impact: Understand how standard deviation can influence performance analysis and why it's crucial for testers.
- Crunching the Numbers: A step-by-step guide to calculating standard deviation, minus the jargon. Plus, a hands-on example to bring the concept to life.
- The Bigger Picture: Explore how standard deviation fits into the broader landscape of performance testing metrics and why it deserves a spot in your toolkit.

Whether you're a seasoned tester or just starting out, this article offers a fresh perspective on a classic metric. Dive in and discover how standard deviation can elevate your performance testing game, revealing insights that other metrics might miss. \u{1F4C8}\u{1F50D}\u{1F680}

Link: https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3
`}function K0(){return nr}function J0(){return[{depth:2,slug:"why-standard-deviation-is-important-in-performance-tests",text:"Why standard deviation is important in performance tests"}]}async function ar(){let{layout:e,...t}=ir;return t.file=or,t.url=sr,g(m,{"set:html":nr})}var z3,q3,ln,nr,ir,or,sr,cr=l(()=>{"use strict";A();z3=h(b(),1);v();k();q3=h(x(),1);S();C();ln={};nr=H0(`<h2 id="why-standard-deviation-is-important-in-performance-tests">Why standard deviation is important in performance tests</h2>
<p>In the vast realm of performance testing, some metrics shine brighter than others. While average response times and percentiles often steal the limelight, there\u2019s an unsung hero lurking in the shadows: the standard deviation. Often overlooked, this metric can be the key to unlocking deeper insights into your application\u2019s performance. But what makes it so special?</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Beyond the Basics: Dive into the world of standard deviation and discover why it\u2019s more than just a mathematical formula.</li>
<li>The Real Impact: Understand how standard deviation can influence performance analysis and why it\u2019s crucial for testers.</li>
<li>Crunching the Numbers: A step-by-step guide to calculating standard deviation, minus the jargon. Plus, a hands-on example to bring the concept to life.</li>
<li>The Bigger Picture: Explore how standard deviation fits into the broader landscape of performance testing metrics and why it deserves a spot in your toolkit.</li>
</ul>
<p>Whether you\u2019re a seasoned tester or just starting out, this article offers a fresh perspective on a classic metric. Dive in and discover how standard deviation can elevate your performance testing game, revealing insights that other metrics might miss. \u{1F4C8}\u{1F50D}\u{1F680}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3">https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3</a></p>`),ir={title:"Why standard deviation is important in performance tests",publishedAt:"2023-07-06T00:00:00.000Z",description:"\u{1F4CA} Standard Deviation: The Unsung Hero of Performance Testing \u{1F4CA}",slug:"standard-deviation-performance-tests",isPublish:!0},or="/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md",sr=void 0;ar[Symbol.for("astro.needsHeadRendering")]=!0});var lr={};u(lr,{default:()=>ex});async function Y0(){return Promise.resolve().then(()=>(cr(),rr))}var Z0,X0,Q0,ex,dr=l(()=>{"use strict";Z0="@@ASTRO-LINKS@@",X0="@@ASTRO-STYLES@@",Q0="@@ASTRO-SCRIPTS@@",ex={__astroPropagation:!0,getMod:Y0,collectedLinks:Z0,collectedStyles:X0,collectedScripts:Q0}});var gr={};u(gr,{Content:()=>fr,compiledContent:()=>ix,default:()=>fr,file:()=>hr,frontmatter:()=>pr,getHeadings:()=>ox,images:()=>dn,rawContent:()=>nx,url:()=>mr});function tx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:dn[i].src,...dn[i].attributes}))}function nx(){return`
## Afrog explained

In the dynamic world of pentesting and bug hunting, efficiency is key. Automation not only speeds up the process but also ensures consistency and thoroughness. Enter Afrog, a tool that promises to streamline your pentesting workflow. But how does it fare in real-world scenarios?

\u{1F4CC} Inside this Exploration:

- Afrog Unleashed: Dive straight into the action, bypassing the basics and witnessing Afrog's capabilities firsthand.
- Features at a Glance: From user-defined PoCs to built-in vulnerability types, discover what makes Afrog stand out.
- Hands-on Testing: A real-world example of Afrog in action, targeting a vulnerable WordPress site.
- Reporting & Analysis: Uncover the insights Afrog provides post-scan, aiding in further exploitation and mitigation.
- Afrog vs. The World: How does Afrog compare to other popular tools like Nuclei? Get a comparative analysis.
- Community & Support: Gauge the strength and activity of the community backing Afrog, a crucial factor for any open-source tool.
- Final Thoughts: Is Afrog the next essential tool in every pentester's toolkit? Get a comprehensive verdict.

Whether you're a seasoned pentester or just starting out in the bug hunting realm, this article offers a deep dive into Afrog's potential and how it can elevate your testing game. Jump in and discover if Afrog is the leap forward you've been waiting for! \u{1F310}\u{1F50D}\u{1F4CA}

Link: https://medium.com/@gpiechnik/afrog-explained-for-bug-hunters-ed1497d5aaf5
`}function ix(){return ur}function ox(){return[{depth:2,slug:"afrog-explained",text:"Afrog explained"}]}async function fr(){let{layout:e,...t}=pr;return t.file=hr,t.url=mr,g(m,{"set:html":ur})}var J3,X3,dn,ur,pr,hr,mr,yr=l(()=>{"use strict";A();J3=h(b(),1);v();k();X3=h(x(),1);S();C();dn={};ur=tx(`<h2 id="afrog-explained">Afrog explained</h2>
<p>In the dynamic world of pentesting and bug hunting, efficiency is key. Automation not only speeds up the process but also ensures consistency and thoroughness. Enter Afrog, a tool that promises to streamline your pentesting workflow. But how does it fare in real-world scenarios?</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Afrog Unleashed: Dive straight into the action, bypassing the basics and witnessing Afrog\u2019s capabilities firsthand.</li>
<li>Features at a Glance: From user-defined PoCs to built-in vulnerability types, discover what makes Afrog stand out.</li>
<li>Hands-on Testing: A real-world example of Afrog in action, targeting a vulnerable WordPress site.</li>
<li>Reporting &#x26; Analysis: Uncover the insights Afrog provides post-scan, aiding in further exploitation and mitigation.</li>
<li>Afrog vs. The World: How does Afrog compare to other popular tools like Nuclei? Get a comparative analysis.</li>
<li>Community &#x26; Support: Gauge the strength and activity of the community backing Afrog, a crucial factor for any open-source tool.</li>
<li>Final Thoughts: Is Afrog the next essential tool in every pentester\u2019s toolkit? Get a comprehensive verdict.</li>
</ul>
<p>Whether you\u2019re a seasoned pentester or just starting out in the bug hunting realm, this article offers a deep dive into Afrog\u2019s potential and how it can elevate your testing game. Jump in and discover if Afrog is the leap forward you\u2019ve been waiting for! \u{1F310}\u{1F50D}\u{1F4CA}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/afrog-explained-for-bug-hunters-ed1497d5aaf5">https://medium.com/@gpiechnik/afrog-explained-for-bug-hunters-ed1497d5aaf5</a></p>`),pr={title:"Afrog explained for bug bounty hunters",publishedAt:"2023-07-05T00:00:00.000Z",description:"\u{1F438} Afrog: The Pentester's New Best Friend? \u{1F438}",slug:"afrog-bug-bounty-pentesters",isPublish:!0},hr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md",mr=void 0;fr[Symbol.for("astro.needsHeadRendering")]=!0});var wr={};u(wr,{default:()=>lx});async function sx(){return Promise.resolve().then(()=>(yr(),gr))}var ax,rx,cx,lx,Dr=l(()=>{"use strict";ax="@@ASTRO-LINKS@@",rx="@@ASTRO-STYLES@@",cx="@@ASTRO-SCRIPTS@@",lx={__astroPropagation:!0,getMod:sx,collectedLinks:ax,collectedStyles:rx,collectedScripts:cx}});var Cr={};u(Cr,{Content:()=>Sr,compiledContent:()=>px,default:()=>Sr,file:()=>kr,frontmatter:()=>vr,getHeadings:()=>hx,images:()=>un,rawContent:()=>ux,url:()=>xr});function dx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:un[i].src,...un[i].attributes}))}function ux(){return`
## Drill - performance testing tool

In the vast ocean of performance testing tools, Drill emerges as a fresh wave. Crafted in the high-performance Rust language, it promises speed and optimization. But how does it fare in real-world scenarios, especially when pitted against its contemporaries? Let's embark on a journey to discover the depths of Drill!

\u{1F4CC} Inside this Exploration:

- Genesis of Drill: Understand the philosophy behind Drill's creation and its aspirations to bring simplicity and efficiency to test scenarios.
- Crafting Scenarios with Drill: A hands-on guide to writing test scenarios in the familiar yaml format, inspired by Ansible.
- Performance Showdown: Witness Drill's performance in action and see how it stacks up against other industry-leading tools.
- Running the Gauntlet: Dive into the nitty-gritty of executing test scenarios with Drill and interpreting the results.
- Challenges & Hurdles: Every tool has its quirks. Uncover the challenges faced during testing with Drill and potential solutions.
- Final Verdict: Is Drill the next big thing in performance testing or does it need more refinement? Get a comprehensive analysis.
- Resources & Further Reading: Dive deeper with curated resources and comparisons.

Whether you're a performance testing veteran or a newbie, this article offers a comprehensive look at Drill's capabilities, strengths, and areas of improvement. Dive in to decide if Drill is the right tool for your testing arsenal! \u{1F527}\u{1F30A}\u{1F4CA}

Link: https://medium.com/@gpiechnik/my-impressions-of-using-the-drill-performance-testing-tool-ee391b93efe2
`}function px(){return br}function hx(){return[{depth:2,slug:"drill---performance-testing-tool",text:"Drill - performance testing tool"}]}async function Sr(){let{layout:e,...t}=vr;return t.file=kr,t.url=xr,g(m,{"set:html":br})}var n8,s8,un,br,vr,kr,xr,Ar=l(()=>{"use strict";A();n8=h(b(),1);v();k();s8=h(x(),1);S();C();un={};br=dx(`<h2 id="drill---performance-testing-tool">Drill - performance testing tool</h2>
<p>In the vast ocean of performance testing tools, Drill emerges as a fresh wave. Crafted in the high-performance Rust language, it promises speed and optimization. But how does it fare in real-world scenarios, especially when pitted against its contemporaries? Let\u2019s embark on a journey to discover the depths of Drill!</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Genesis of Drill: Understand the philosophy behind Drill\u2019s creation and its aspirations to bring simplicity and efficiency to test scenarios.</li>
<li>Crafting Scenarios with Drill: A hands-on guide to writing test scenarios in the familiar yaml format, inspired by Ansible.</li>
<li>Performance Showdown: Witness Drill\u2019s performance in action and see how it stacks up against other industry-leading tools.</li>
<li>Running the Gauntlet: Dive into the nitty-gritty of executing test scenarios with Drill and interpreting the results.</li>
<li>Challenges &#x26; Hurdles: Every tool has its quirks. Uncover the challenges faced during testing with Drill and potential solutions.</li>
<li>Final Verdict: Is Drill the next big thing in performance testing or does it need more refinement? Get a comprehensive analysis.</li>
<li>Resources &#x26; Further Reading: Dive deeper with curated resources and comparisons.</li>
</ul>
<p>Whether you\u2019re a performance testing veteran or a newbie, this article offers a comprehensive look at Drill\u2019s capabilities, strengths, and areas of improvement. Dive in to decide if Drill is the right tool for your testing arsenal! \u{1F527}\u{1F30A}\u{1F4CA}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/my-impressions-of-using-the-drill-performance-testing-tool-ee391b93efe2">https://medium.com/@gpiechnik/my-impressions-of-using-the-drill-performance-testing-tool-ee391b93efe2</a></p>`),vr={title:"My impressions of using the Drill performance testing tool",publishedAt:"2023-07-04T00:00:00.000Z",description:"\u{1F529} Drill Performance Testing: A Deep Dive \u{1F529}",slug:"drill-performance-testing-tool",isPublish:!0},kr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md",xr=void 0;Sr[Symbol.for("astro.needsHeadRendering")]=!0});var Fr={};u(Fr,{default:()=>wx});async function mx(){return Promise.resolve().then(()=>(Ar(),Cr))}var fx,gx,yx,wx,Er=l(()=>{"use strict";fx="@@ASTRO-LINKS@@",gx="@@ASTRO-STYLES@@",yx="@@ASTRO-SCRIPTS@@",wx={__astroPropagation:!0,getMod:mx,collectedLinks:fx,collectedStyles:gx,collectedScripts:yx}});var _r={};u(_r,{Content:()=>Ir,compiledContent:()=>vx,default:()=>Ir,file:()=>Rr,frontmatter:()=>Pr,getHeadings:()=>kx,images:()=>pn,rawContent:()=>bx,url:()=>jr});function Dx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:pn[i].src,...pn[i].attributes}))}function bx(){return`
## AWS EC2 Instances basics

Performance testing on local hardware can be a bottleneck, especially when you're aiming for scalability and precision. Enter AWS EC2 - a robust cloud solution that can elevate your testing game. But how do you set up and harness this cloud powerhouse for your tests? Dive into this guide to find out!

\u{1F4CC} What's Inside:

- Kickstarting with AWS EC2: Navigate the AWS console like a pro, from registration to launching your very own EC2 instance.
- Instance Creation Demystified: Step-by-step instructions to set up your testing environment on AWS, tailored to your needs.
- Secure Your Connection: Understand the importance of key pairs and how to generate them for secure access.
- Seamless Connectivity: Whether you're an SSH aficionado or a Putty enthusiast, we've got you covered. Learn how to connect to your EC2 instance effortlessly.
- File Transfers Simplified: Need to transfer files to or from your EC2 instance? Discover the straightforward methods using both SCP and Putty.

Whether you're a seasoned tester or just starting out, this guide offers a comprehensive walkthrough to leverage AWS EC2 for performance testing. Say goodbye to local hardware limitations and hello to scalable, cloud-based testing! \u2601\uFE0F\u{1F527}\u{1F4C8}

Link: https://medium.com/@gpiechnik/aws-ec2-instances-basics-7f133204767a
`}function vx(){return Tr}function kx(){return[{depth:2,slug:"aws-ec2-instances-basics",text:"AWS EC2 Instances basics"}]}async function Ir(){let{layout:e,...t}=Pr;return t.file=Rr,t.url=jr,g(m,{"set:html":Tr})}var l8,p8,pn,Tr,Pr,Rr,jr,Lr=l(()=>{"use strict";A();l8=h(b(),1);v();k();p8=h(x(),1);S();C();pn={};Tr=Dx(`<h2 id="aws-ec2-instances-basics">AWS EC2 Instances basics</h2>
<p>Performance testing on local hardware can be a bottleneck, especially when you\u2019re aiming for scalability and precision. Enter AWS EC2 - a robust cloud solution that can elevate your testing game. But how do you set up and harness this cloud powerhouse for your tests? Dive into this guide to find out!</p>
<p>\u{1F4CC} What\u2019s Inside:</p>
<ul>
<li>Kickstarting with AWS EC2: Navigate the AWS console like a pro, from registration to launching your very own EC2 instance.</li>
<li>Instance Creation Demystified: Step-by-step instructions to set up your testing environment on AWS, tailored to your needs.</li>
<li>Secure Your Connection: Understand the importance of key pairs and how to generate them for secure access.</li>
<li>Seamless Connectivity: Whether you\u2019re an SSH aficionado or a Putty enthusiast, we\u2019ve got you covered. Learn how to connect to your EC2 instance effortlessly.</li>
<li>File Transfers Simplified: Need to transfer files to or from your EC2 instance? Discover the straightforward methods using both SCP and Putty.</li>
</ul>
<p>Whether you\u2019re a seasoned tester or just starting out, this guide offers a comprehensive walkthrough to leverage AWS EC2 for performance testing. Say goodbye to local hardware limitations and hello to scalable, cloud-based testing! \u2601\uFE0F\u{1F527}\u{1F4C8}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/aws-ec2-instances-basics-7f133204767a">https://medium.com/@gpiechnik/aws-ec2-instances-basics-7f133204767a</a></p>`),Pr={title:"AWS EC2 Instances basics",publishedAt:"2023-06-30T00:00:00.000Z",description:"\u{1F680} Unleashing the Power of AWS EC2 \u{1F680}",slug:"aws-ec2-instances-basics",isPublish:!0},Rr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md",jr=void 0;Ir[Symbol.for("astro.needsHeadRendering")]=!0});var Br={};u(Br,{default:()=>Fx});async function xx(){return Promise.resolve().then(()=>(Lr(),_r))}var Sx,Cx,Ax,Fx,Wr=l(()=>{"use strict";Sx="@@ASTRO-LINKS@@",Cx="@@ASTRO-STYLES@@",Ax="@@ASTRO-SCRIPTS@@",Fx={__astroPropagation:!0,getMod:xx,collectedLinks:Sx,collectedStyles:Cx,collectedScripts:Ax}});var Gr={};u(Gr,{Content:()=>zr,compiledContent:()=>Px,default:()=>zr,file:()=>Nr,frontmatter:()=>Or,getHeadings:()=>Rx,images:()=>hn,rawContent:()=>Tx,url:()=>Mr});function Ex(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:hn[i].src,...hn[i].attributes}))}function Tx(){return`
## What is Apache Kafka and how to perform performance tests on it (Part 2)

In the realm of real-time data processing, event streaming stands tall. But how do we ensure that our event streaming platforms, like Apache Kafka, are performing at their peak? Dive into this comprehensive guide to understand and master performance testing on Apache Kafka.

\u{1F4CC} What's Inside:

- Setting Up Kafka Locally: Learn how to swiftly set up Apache Kafka on your local machine using Docker, and get insights into the key components bundled within.
- Performance Testing 101: Discover the intricacies of performance testing on Apache Kafka's Cluster and understand its thresholds.
- Harnessing xk6-kafka: Explore the power of xk6-kafka, an extension to the k6 tool, tailored for Kafka performance testing.
- Deep Dive into the Script: Get a detailed walkthrough of the testing script, from creating topics to sending messages and performing checks.
- Analyzing the Results: Unravel the metrics extracted from the tests and understand their significance
- Plus, visualize your results with a Grafana dashboard for a user-friendly analysis.

Whether you're a Kafka enthusiast, a developer, or someone keen on ensuring optimal performance for real-time data processing, this guide is your ticket to mastering performance testing on Apache Kafka. Gear up to optimize your Kafka deployments and ensure seamless data streaming! \u{1F4CA}\u{1F527}\u{1F50D}

Link: https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2-54177fc6631c
`}function Px(){return $r}function Rx(){return[{depth:2,slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2",text:"What is Apache Kafka and how to perform performance tests on it (Part 2)"}]}async function zr(){let{layout:e,...t}=Or;return t.file=Nr,t.url=Mr,g(m,{"set:html":$r})}var g8,D8,hn,$r,Or,Nr,Mr,Ur=l(()=>{"use strict";A();g8=h(b(),1);v();k();D8=h(x(),1);S();C();hn={};$r=Ex(`<h2 id="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2">What is Apache Kafka and how to perform performance tests on it (Part 2)</h2>
<p>In the realm of real-time data processing, event streaming stands tall. But how do we ensure that our event streaming platforms, like Apache Kafka, are performing at their peak? Dive into this comprehensive guide to understand and master performance testing on Apache Kafka.</p>
<p>\u{1F4CC} What\u2019s Inside:</p>
<ul>
<li>Setting Up Kafka Locally: Learn how to swiftly set up Apache Kafka on your local machine using Docker, and get insights into the key components bundled within.</li>
<li>Performance Testing 101: Discover the intricacies of performance testing on Apache Kafka\u2019s Cluster and understand its thresholds.</li>
<li>Harnessing xk6-kafka: Explore the power of xk6-kafka, an extension to the k6 tool, tailored for Kafka performance testing.</li>
<li>Deep Dive into the Script: Get a detailed walkthrough of the testing script, from creating topics to sending messages and performing checks.</li>
<li>Analyzing the Results: Unravel the metrics extracted from the tests and understand their significance</li>
<li>Plus, visualize your results with a Grafana dashboard for a user-friendly analysis.</li>
</ul>
<p>Whether you\u2019re a Kafka enthusiast, a developer, or someone keen on ensuring optimal performance for real-time data processing, this guide is your ticket to mastering performance testing on Apache Kafka. Gear up to optimize your Kafka deployments and ensure seamless data streaming! \u{1F4CA}\u{1F527}\u{1F50D}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2-54177fc6631c">https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2-54177fc6631c</a></p>`),Or={title:"What is Apache Kafka and how to perform performance tests on it (Part 2)",publishedAt:"2023-06-28T00:00:00.000Z",description:"\u{1F680} Mastering Performance Testing with Apache Kafka \u{1F680}",slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2",isPublish:!0},Nr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md",Mr=void 0;zr[Symbol.for("astro.needsHeadRendering")]=!0});var qr={};u(qr,{default:()=>Bx});async function jx(){return Promise.resolve().then(()=>(Ur(),Gr))}var Ix,_x,Lx,Bx,Hr=l(()=>{"use strict";Ix="@@ASTRO-LINKS@@",_x="@@ASTRO-STYLES@@",Lx="@@ASTRO-SCRIPTS@@",Bx={__astroPropagation:!0,getMod:jx,collectedLinks:Ix,collectedStyles:_x,collectedScripts:Lx}});var Xr={};u(Xr,{Content:()=>Zr,compiledContent:()=>Ox,default:()=>Zr,file:()=>Jr,frontmatter:()=>Kr,getHeadings:()=>Nx,images:()=>mn,rawContent:()=>$x,url:()=>Yr});function Wx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:mn[i].src,...mn[i].attributes}))}function $x(){return`
## What is Apache Kafka and how to perform performance tests on it (Part 1)

In the digital age, real-time data processing is no longer a luxury but a necessity. Enter event streaming, a technique that's revolutionizing the way data is exchanged in real-time. But what's the magic behind it? Let's unravel the mysteries of Apache Kafka, the powerhouse of event streaming.

\u{1F4CC} Inside this Guide:

- Event Streaming 101: Understand the essence of event streaming and its significance in today's fast-paced IT landscape.
- Apache Kafka Unveiled: Dive into the world of Kafka and explore its robust architecture designed for high-speed data transfer.
- Producers, Consumers, and Kafka Cluster: Discover the key players in the Kafka ecosystem and their roles in ensuring seamless data flow.
- The Intricacies of Kafka Architecture: From Brokers to ZooKeeper, get a comprehensive understanding of how Kafka's components work in harmony.
- Topics & Partitions Explained: Delve into the heart of Kafka's data management system and learn how topics and partitions ensure efficient data distribution.
- A Closer Look at Producers & Consumers: Revisit the roles of producers and consumers, and understand the genius of consumer groups in optimizing data consumption.

Whether you're a developer, a data enthusiast, or someone curious about the world of event streaming, this guide offers a deep dive into Apache Kafka's world. Equip yourself with the knowledge to harness the power of real-time data processing. \u{1F680}\u{1F4CA}\u{1F50D}

Link: https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1-b4b71edb6286
`}function Ox(){return Vr}function Nx(){return[{depth:2,slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1",text:"What is Apache Kafka and how to perform performance tests on it (Part 1)"}]}async function Zr(){let{layout:e,...t}=Kr;return t.file=Jr,t.url=Yr,g(m,{"set:html":Vr})}var x8,A8,mn,Vr,Kr,Jr,Yr,Qr=l(()=>{"use strict";A();x8=h(b(),1);v();k();A8=h(x(),1);S();C();mn={};Vr=Wx(`<h2 id="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1">What is Apache Kafka and how to perform performance tests on it (Part 1)</h2>
<p>In the digital age, real-time data processing is no longer a luxury but a necessity. Enter event streaming, a technique that\u2019s revolutionizing the way data is exchanged in real-time. But what\u2019s the magic behind it? Let\u2019s unravel the mysteries of Apache Kafka, the powerhouse of event streaming.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Event Streaming 101: Understand the essence of event streaming and its significance in today\u2019s fast-paced IT landscape.</li>
<li>Apache Kafka Unveiled: Dive into the world of Kafka and explore its robust architecture designed for high-speed data transfer.</li>
<li>Producers, Consumers, and Kafka Cluster: Discover the key players in the Kafka ecosystem and their roles in ensuring seamless data flow.</li>
<li>The Intricacies of Kafka Architecture: From Brokers to ZooKeeper, get a comprehensive understanding of how Kafka\u2019s components work in harmony.</li>
<li>Topics &#x26; Partitions Explained: Delve into the heart of Kafka\u2019s data management system and learn how topics and partitions ensure efficient data distribution.</li>
<li>A Closer Look at Producers &#x26; Consumers: Revisit the roles of producers and consumers, and understand the genius of consumer groups in optimizing data consumption.</li>
</ul>
<p>Whether you\u2019re a developer, a data enthusiast, or someone curious about the world of event streaming, this guide offers a deep dive into Apache Kafka\u2019s world. Equip yourself with the knowledge to harness the power of real-time data processing. \u{1F680}\u{1F4CA}\u{1F50D}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1-b4b71edb6286">https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1-b4b71edb6286</a></p>`),Kr={title:"What is Apache Kafka and how to perform performance tests on it (Part 1)",publishedAt:"2023-06-25T00:00:00.000Z",description:"\u{1F525} Diving Deep into Event Streaming with Apache Kafka \u{1F525}",slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one",isPublish:!0},Jr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md",Yr=void 0;Zr[Symbol.for("astro.needsHeadRendering")]=!0});var ec={};u(ec,{default:()=>qx});async function Mx(){return Promise.resolve().then(()=>(Qr(),Xr))}var zx,Gx,Ux,qx,tc=l(()=>{"use strict";zx="@@ASTRO-LINKS@@",Gx="@@ASTRO-STYLES@@",Ux="@@ASTRO-SCRIPTS@@",qx={__astroPropagation:!0,getMod:Mx,collectedLinks:zx,collectedStyles:Gx,collectedScripts:Ux}});var rc={};u(rc,{Content:()=>ac,compiledContent:()=>Kx,default:()=>ac,file:()=>oc,frontmatter:()=>ic,getHeadings:()=>Jx,images:()=>fn,rawContent:()=>Vx,url:()=>sc});function Hx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:fn[i].src,...fn[i].attributes}))}function Vx(){return`
## Types of deployment

In the dynamic world of IT, updating applications and introducing new features is the name of the game. But how do you ensure smooth transitions without disrupting user experience? Enter deployment strategies! Dive into this guide to explore three of the most popular deployment types that IT companies swear by.

\u{1F4CC} Inside this Guide:

- Rolling Deployment Demystified: Understand the step-by-step process of updating servers and why this strategy is a favorite for applications with minor updates.
- Canary Deployment Unveiled: Discover how this user-centric approach tests the waters with a select group before a full-scale launch.
- Blue/Green Deployment Explained: Dive into the world of dual environments and learn how traffic redirection ensures seamless transitions between versions.

Whether you're an IT professional, a budding developer, or a business owner looking to understand the best deployment strategy for your organization, this guide offers insights into the pros and cons of each method. Equip yourself with the knowledge to make informed decisions and ensure smooth application updates. \u{1F504}\u{1F310}\u{1F527}

Link: https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67
`}function Kx(){return nc}function Jx(){return[{depth:2,slug:"types-of-deployment",text:"Types of deployment"}]}async function ac(){let{layout:e,...t}=ic;return t.file=oc,t.url=sc,g(m,{"set:html":nc})}var P8,I8,fn,nc,ic,oc,sc,cc=l(()=>{"use strict";A();P8=h(b(),1);v();k();I8=h(x(),1);S();C();fn={};nc=Hx(`<h2 id="types-of-deployment">Types of deployment</h2>
<p>In the dynamic world of IT, updating applications and introducing new features is the name of the game. But how do you ensure smooth transitions without disrupting user experience? Enter deployment strategies! Dive into this guide to explore three of the most popular deployment types that IT companies swear by.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Rolling Deployment Demystified: Understand the step-by-step process of updating servers and why this strategy is a favorite for applications with minor updates.</li>
<li>Canary Deployment Unveiled: Discover how this user-centric approach tests the waters with a select group before a full-scale launch.</li>
<li>Blue/Green Deployment Explained: Dive into the world of dual environments and learn how traffic redirection ensures seamless transitions between versions.</li>
</ul>
<p>Whether you\u2019re an IT professional, a budding developer, or a business owner looking to understand the best deployment strategy for your organization, this guide offers insights into the pros and cons of each method. Equip yourself with the knowledge to make informed decisions and ensure smooth application updates. \u{1F504}\u{1F310}\u{1F527}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67">https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67</a></p>`),ic={title:"What are the types of deployment",publishedAt:"2023-06-24T00:00:00.000Z",description:"\u{1F680} Mastering Deployment Strategies: Rolling, Canary, and Blue/Green \u{1F680}",slug:"types-of-deployment",isPublish:!0},oc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md",sc=void 0;ac[Symbol.for("astro.needsHeadRendering")]=!0});var lc={};u(lc,{default:()=>e2});async function Yx(){return Promise.resolve().then(()=>(cc(),rc))}var Zx,Xx,Qx,e2,dc=l(()=>{"use strict";Zx="@@ASTRO-LINKS@@",Xx="@@ASTRO-STYLES@@",Qx="@@ASTRO-SCRIPTS@@",e2={__astroPropagation:!0,getMod:Yx,collectedLinks:Zx,collectedStyles:Xx,collectedScripts:Qx}});var gc={};u(gc,{Content:()=>fc,compiledContent:()=>i2,default:()=>fc,file:()=>hc,frontmatter:()=>pc,getHeadings:()=>o2,images:()=>gn,rawContent:()=>n2,url:()=>mc});function t2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:gn[i].src,...gn[i].attributes}))}function n2(){return`
## Availability, Load Balancing, Failover and Session Persistence

Navigating the world of performance testing or development often feels like wading through a sea of jargon. Terms like "availability," "load balancing," and "session persistence" get thrown around, but what do they really mean? And why should you care? Dive into this guide to decode these terms and more!

\u{1F4CC} Inside this Guide:

- Availability Unveiled: Discover what we truly mean when we talk about an application's availability and why it's not just about uptime percentages.
- Load Balancing Explained: Unravel the intricacies of load balancing, its importance, and its multifaceted nature.
- The Art of Failover: Learn about the system's ability to seamlessly switch to a backup during failures and the significance of failover testing.
- Session Persistence Decoded: Dive deep into the concept of session persistence and understand its role in enhancing user experience.

Whether you're a seasoned developer, a budding performance tester, or just someone looking to understand the tech world a bit better, this guide offers a clear and concise breakdown of some of the most commonly used (and often misunderstood) terms. Equip yourself with the knowledge to navigate tech discussions with confidence! \u{1F4BB}\u{1F310}\u{1F4D8}

Link: https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3
`}function i2(){return uc}function o2(){return[{depth:2,slug:"availability-load-balancing-failover-and-session-persistence",text:"Availability, Load Balancing, Failover and Session Persistence"}]}async function fc(){let{layout:e,...t}=pc;return t.file=hc,t.url=mc,g(m,{"set:html":uc})}var W8,N8,gn,uc,pc,hc,mc,yc=l(()=>{"use strict";A();W8=h(b(),1);v();k();N8=h(x(),1);S();C();gn={};uc=t2(`<h2 id="availability-load-balancing-failover-and-session-persistence">Availability, Load Balancing, Failover and Session Persistence</h2>
<p>Navigating the world of performance testing or development often feels like wading through a sea of jargon. Terms like \u201Cavailability,\u201D \u201Cload balancing,\u201D and \u201Csession persistence\u201D get thrown around, but what do they really mean? And why should you care? Dive into this guide to decode these terms and more!</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Availability Unveiled: Discover what we truly mean when we talk about an application\u2019s availability and why it\u2019s not just about uptime percentages.</li>
<li>Load Balancing Explained: Unravel the intricacies of load balancing, its importance, and its multifaceted nature.</li>
<li>The Art of Failover: Learn about the system\u2019s ability to seamlessly switch to a backup during failures and the significance of failover testing.</li>
<li>Session Persistence Decoded: Dive deep into the concept of session persistence and understand its role in enhancing user experience.</li>
</ul>
<p>Whether you\u2019re a seasoned developer, a budding performance tester, or just someone looking to understand the tech world a bit better, this guide offers a clear and concise breakdown of some of the most commonly used (and often misunderstood) terms. Equip yourself with the knowledge to navigate tech discussions with confidence! \u{1F4BB}\u{1F310}\u{1F4D8}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3">https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3</a></p>`),pc={title:"What are the concepts of availability, load balancing, failover and session persistence",publishedAt:"2023-06-23T00:00:00.000Z",description:"\u{1F50D} Demystifying Tech Jargon: From Availability to Session Persistence \u{1F50D}",slug:"availability-load-balancing-failover-session-persistence",isPublish:!0},hc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md",mc=void 0;fc[Symbol.for("astro.needsHeadRendering")]=!0});var wc={};u(wc,{default:()=>l2});async function s2(){return Promise.resolve().then(()=>(yc(),gc))}var a2,r2,c2,l2,Dc=l(()=>{"use strict";a2="@@ASTRO-LINKS@@",r2="@@ASTRO-STYLES@@",c2="@@ASTRO-SCRIPTS@@",l2={__astroPropagation:!0,getMod:s2,collectedLinks:a2,collectedStyles:r2,collectedScripts:c2}});var Cc={};u(Cc,{Content:()=>Sc,compiledContent:()=>p2,default:()=>Sc,file:()=>kc,frontmatter:()=>vc,getHeadings:()=>h2,images:()=>yn,rawContent:()=>u2,url:()=>xc});function d2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:yn[i].src,...yn[i].attributes}))}function u2(){return`
## Mitmproxy and k6

In the vast world of proxies, mitmproxy stands tall. But what makes it so special? And how can it be leveraged for performance testing, especially with tools like k6? Dive into this comprehensive guide to unravel the magic of mitmproxy!

\u{1F4CC} Inside this Guide:

- Mitmproxy vs. The Rest: Understand what sets mitmproxy apart from its counterparts like Fiddler and Charlesproxy.
- Modes of Operation: Explore the three main modes - mitmproxy, mitmdump, and mitmweb, and learn when to use each.
- Why Mitmproxy for k6?: Discover the significance of capturing traffic for performance testing and how mitmproxy fits into the picture.
- Installation & Setup: Get started with mitmproxy in no time with our step-by-step installation guide.
- Capturing & Saving HTTP Flows: Dive deep into the process of capturing requests and responses and saving them for further analysis.
- From HAR to k6: Learn the art of converting HAR files into k6 scripts, and understand the challenges and solutions in the process.

Whether you're a performance tester, a developer, or just someone curious about network traffic, this guide offers a deep dive into the world of mitmproxy and its integration with k6. Get ready to harness the power of open-source for your testing needs! \u{1F4BB}\u{1F310}\u{1F4C8}

Link: https://medium.com/@gpiechnik/using-mitmproxy-with-k6-9326cd13ab28
`}function p2(){return bc}function h2(){return[{depth:2,slug:"mitmproxy-and-k6",text:"Mitmproxy and k6"}]}async function Sc(){let{layout:e,...t}=vc;return t.file=kc,t.url=xc,g(m,{"set:html":bc})}var U8,V8,yn,bc,vc,kc,xc,Ac=l(()=>{"use strict";A();U8=h(b(),1);v();k();V8=h(x(),1);S();C();yn={};bc=d2(`<h2 id="mitmproxy-and-k6">Mitmproxy and k6</h2>
<p>In the vast world of proxies, mitmproxy stands tall. But what makes it so special? And how can it be leveraged for performance testing, especially with tools like k6? Dive into this comprehensive guide to unravel the magic of mitmproxy!</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Mitmproxy vs. The Rest: Understand what sets mitmproxy apart from its counterparts like Fiddler and Charlesproxy.</li>
<li>Modes of Operation: Explore the three main modes - mitmproxy, mitmdump, and mitmweb, and learn when to use each.</li>
<li>Why Mitmproxy for k6?: Discover the significance of capturing traffic for performance testing and how mitmproxy fits into the picture.</li>
<li>Installation &#x26; Setup: Get started with mitmproxy in no time with our step-by-step installation guide.</li>
<li>Capturing &#x26; Saving HTTP Flows: Dive deep into the process of capturing requests and responses and saving them for further analysis.</li>
<li>From HAR to k6: Learn the art of converting HAR files into k6 scripts, and understand the challenges and solutions in the process.</li>
</ul>
<p>Whether you\u2019re a performance tester, a developer, or just someone curious about network traffic, this guide offers a deep dive into the world of mitmproxy and its integration with k6. Get ready to harness the power of open-source for your testing needs! \u{1F4BB}\u{1F310}\u{1F4C8}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/using-mitmproxy-with-k6-9326cd13ab28">https://medium.com/@gpiechnik/using-mitmproxy-with-k6-9326cd13ab28</a></p>`),vc={title:"Using mitmproxy with k6",publishedAt:"2023-06-22T00:00:00.000Z",description:"\u{1F50D} Mitmproxy: The Open-Source Powerhouse for Traffic Capture \u{1F50D}",slug:"mitmproxy-and-k6",isPublish:!0},kc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md",xc=void 0;Sc[Symbol.for("astro.needsHeadRendering")]=!0});var Fc={};u(Fc,{default:()=>w2});async function m2(){return Promise.resolve().then(()=>(Ac(),Cc))}var f2,g2,y2,w2,Ec=l(()=>{"use strict";f2="@@ASTRO-LINKS@@",g2="@@ASTRO-STYLES@@",y2="@@ASTRO-SCRIPTS@@",w2={__astroPropagation:!0,getMod:m2,collectedLinks:f2,collectedStyles:g2,collectedScripts:y2}});var _c={};u(_c,{Content:()=>Ic,compiledContent:()=>v2,default:()=>Ic,file:()=>Rc,frontmatter:()=>Pc,getHeadings:()=>k2,images:()=>wn,rawContent:()=>b2,url:()=>jc});function D2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:wn[i].src,...wn[i].attributes}))}function b2(){return`
## Flaky tests in JMeter

Performance testing is a critical aspect of ensuring an application's robustness. But what happens when your tried-and-true test scripts start acting up? When they return errors sporadically, even when no changes have been made to the application? Welcome to the world of flaky tests!

\u{1F4CC} Inside this Guide:

- Understanding Flaky Tests: Dive deep into what flaky tests are and why they can be a tester's worst nightmare.
- Timeout Troubles: Discover how simple timeouts can be the root cause of many flaky tests and how to address them.
- Decoding Connection Resets: Unravel the mystery behind the dreaded Connection Reset error and learn how to fix it.
- Mimicking Real User Behavior: Understand the importance of simulating real user actions, like sleep intervals between steps, to ensure test accuracy.
- Embedded Resources & Static Files: Delve into the debate of whether to cover static files in tests and how to efficiently retrieve all embedded resources.
- The Power of Keep-Alive: Learn about the HTTP Keep-Alive header and its significance in performance testing.

Whether you're a seasoned performance tester or just starting out, this guide offers invaluable insights into stabilizing your test scripts. Say goodbye to unpredictable test results and hello to consistent, reliable performance testing! \u{1F4BB}\u{1F50D}\u{1F4CA}

Link: https://medium.com/@gpiechnik/flaky-tests-in-jmeter-9c62994cfbf5
`}function v2(){return Tc}function k2(){return[{depth:2,slug:"flaky-tests-in-jmeter",text:"Flaky tests in JMeter"}]}async function Ic(){let{layout:e,...t}=Pc;return t.file=Rc,t.url=jc,g(m,{"set:html":Tc})}var Z8,eT,wn,Tc,Pc,Rc,jc,Lc=l(()=>{"use strict";A();Z8=h(b(),1);v();k();eT=h(x(),1);S();C();wn={};Tc=D2(`<h2 id="flaky-tests-in-jmeter">Flaky tests in JMeter</h2>
<p>Performance testing is a critical aspect of ensuring an application\u2019s robustness. But what happens when your tried-and-true test scripts start acting up? When they return errors sporadically, even when no changes have been made to the application? Welcome to the world of flaky tests!</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Understanding Flaky Tests: Dive deep into what flaky tests are and why they can be a tester\u2019s worst nightmare.</li>
<li>Timeout Troubles: Discover how simple timeouts can be the root cause of many flaky tests and how to address them.</li>
<li>Decoding Connection Resets: Unravel the mystery behind the dreaded Connection Reset error and learn how to fix it.</li>
<li>Mimicking Real User Behavior: Understand the importance of simulating real user actions, like sleep intervals between steps, to ensure test accuracy.</li>
<li>Embedded Resources &#x26; Static Files: Delve into the debate of whether to cover static files in tests and how to efficiently retrieve all embedded resources.</li>
<li>The Power of Keep-Alive: Learn about the HTTP Keep-Alive header and its significance in performance testing.</li>
</ul>
<p>Whether you\u2019re a seasoned performance tester or just starting out, this guide offers invaluable insights into stabilizing your test scripts. Say goodbye to unpredictable test results and hello to consistent, reliable performance testing! \u{1F4BB}\u{1F50D}\u{1F4CA}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/flaky-tests-in-jmeter-9c62994cfbf5">https://medium.com/@gpiechnik/flaky-tests-in-jmeter-9c62994cfbf5</a></p>`),Pc={title:"Flaky tests in JMeter",publishedAt:"2023-06-21T00:00:00.000Z",description:"\u{1F50D} Stabilizing Performance Tests: Navigating the World of Flaky Tests \u{1F50D}",slug:"flaky-tests-jmeter",isPublish:!0},Rc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md",jc=void 0;Ic[Symbol.for("astro.needsHeadRendering")]=!0});var Bc={};u(Bc,{default:()=>F2});async function x2(){return Promise.resolve().then(()=>(Lc(),_c))}var S2,C2,A2,F2,Wc=l(()=>{"use strict";S2="@@ASTRO-LINKS@@",C2="@@ASTRO-STYLES@@",A2="@@ASTRO-SCRIPTS@@",F2={__astroPropagation:!0,getMod:x2,collectedLinks:S2,collectedStyles:C2,collectedScripts:A2}});var Gc={};u(Gc,{Content:()=>zc,compiledContent:()=>P2,default:()=>zc,file:()=>Nc,frontmatter:()=>Oc,getHeadings:()=>R2,images:()=>Dn,rawContent:()=>T2,url:()=>Mc});function E2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Dn[i].src,...Dn[i].attributes}))}function T2(){return`
## How to debug requests in k6?

Performance testing is crucial, but what happens when the results are riddled with errors? Using the k6 tool, while powerful, can sometimes leave you scratching your head when trying to decipher the results, especially when they're displayed in the console. With potentially hundreds of errors popping up during soak tests, analyzing them can become a daunting task. But fear not! We've got you covered.

\u{1F4CC} Inside this Guide:

- The Challenge: Understand the complexities of reporting errors using k6 and why it's essential to aggregate results.
- Aggregating Results: Dive into a simple mechanism to display errors in the output, ensuring you capture every detail.
- Redirecting Output: Learn how to efficiently redirect your error logs to a file, making analysis a breeze.
- Deciphering Errors: Break down the two types of errors you might encounter and understand their nuances.
- JQ to the Rescue: Harness the power of jq to filter, read, and analyze your error logs, ensuring you never miss an error again.

Whether you're a seasoned tester or just starting out with k6, this guide offers a step-by-step approach to efficient error reporting and analysis. Say goodbye to the days of sifting through console logs and hello to streamlined error reporting! \u{1F4BB}\u{1F50D}\u{1F4CA}

Link: https://medium.com/@gpiechnik/how-to-quickly-debug-requests-from-k6-test-scenarios-3ebf2e6733f5
`}function P2(){return $c}function R2(){return[{depth:2,slug:"how-to-debug-requests-in-k6",text:"How to debug requests in k6?"}]}async function zc(){let{layout:e,...t}=Oc;return t.file=Nc,t.url=Mc,g(m,{"set:html":$c})}var oT,rT,Dn,$c,Oc,Nc,Mc,Uc=l(()=>{"use strict";A();oT=h(b(),1);v();k();rT=h(x(),1);S();C();Dn={};$c=E2(`<h2 id="how-to-debug-requests-in-k6">How to debug requests in k6?</h2>
<p>Performance testing is crucial, but what happens when the results are riddled with errors? Using the k6 tool, while powerful, can sometimes leave you scratching your head when trying to decipher the results, especially when they\u2019re displayed in the console. With potentially hundreds of errors popping up during soak tests, analyzing them can become a daunting task. But fear not! We\u2019ve got you covered.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>The Challenge: Understand the complexities of reporting errors using k6 and why it\u2019s essential to aggregate results.</li>
<li>Aggregating Results: Dive into a simple mechanism to display errors in the output, ensuring you capture every detail.</li>
<li>Redirecting Output: Learn how to efficiently redirect your error logs to a file, making analysis a breeze.</li>
<li>Deciphering Errors: Break down the two types of errors you might encounter and understand their nuances.</li>
<li>JQ to the Rescue: Harness the power of jq to filter, read, and analyze your error logs, ensuring you never miss an error again.</li>
</ul>
<p>Whether you\u2019re a seasoned tester or just starting out with k6, this guide offers a step-by-step approach to efficient error reporting and analysis. Say goodbye to the days of sifting through console logs and hello to streamlined error reporting! \u{1F4BB}\u{1F50D}\u{1F4CA}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/how-to-quickly-debug-requests-from-k6-test-scenarios-3ebf2e6733f5">https://medium.com/@gpiechnik/how-to-quickly-debug-requests-from-k6-test-scenarios-3ebf2e6733f5</a></p>`),Oc={title:"How to debug requests in k6",publishedAt:"2023-06-20T00:00:00.000Z",description:"\u{1F50D} Decoding k6 Errors: A Comprehensive Guide to Efficient Error Reporting \u{1F50D}",slug:"debug-requests-k6",isPublish:!0},Nc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md",Mc=void 0;zc[Symbol.for("astro.needsHeadRendering")]=!0});var qc={};u(qc,{default:()=>B2});async function j2(){return Promise.resolve().then(()=>(Uc(),Gc))}var I2,_2,L2,B2,Hc=l(()=>{"use strict";I2="@@ASTRO-LINKS@@",_2="@@ASTRO-STYLES@@",L2="@@ASTRO-SCRIPTS@@",B2={__astroPropagation:!0,getMod:j2,collectedLinks:I2,collectedStyles:_2,collectedScripts:L2}});var Xc={};u(Xc,{Content:()=>Zc,compiledContent:()=>O2,default:()=>Zc,file:()=>Jc,frontmatter:()=>Kc,getHeadings:()=>N2,images:()=>bn,rawContent:()=>$2,url:()=>Yc});function W2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:bn[i].src,...bn[i].attributes}))}function $2(){return`
## What are memory leaks?

In the vast landscape of performance testing, there's a silent menace lurking in the shadows, often going unnoticed until it's too late: Memory Leaks. These seemingly innocuous bugs can wreak havoc on your application's performance, leading to sluggish response times and, in extreme cases, system crashes.

\u{1F4CC} Inside this Guide:

- Memory Leaks Defined: Dive into the technical definition and understand the implications of memory leaks on your application.
- Garbage Collections Explained: Get a brief overview of this complex topic and understand its role in memory management.
- Real-Life Scenario: Witness the impact of memory leaks through a hands-on example using the Flask framework.
- K6 Scripting: Learn how to visualize memory leaks using a K6 script, a powerful performance testing tool.
- Profiler Insights: Discover how to monitor resource consumption using Python's memory-profiler module.

Whether you're a seasoned developer or just starting out, this guide offers a comprehensive look into the world of memory leaks. Equip yourself with the knowledge to detect, diagnose, and defend against these performance-draining bugs. So, gear up and embark on a journey to ensure your application runs smoothly and efficiently! \u{1F4BB}\u{1F41B}\u{1F6E0}\uFE0F

Link: https://medium.com/@gpiechnik/what-are-memory-leaks-8ab2904720e0
`}function O2(){return Vc}function N2(){return[{depth:2,slug:"what-are-memory-leaks",text:"What are memory leaks?"}]}async function Zc(){let{layout:e,...t}=Kc;return t.file=Jc,t.url=Yc,g(m,{"set:html":Vc})}var uT,mT,bn,Vc,Kc,Jc,Yc,Qc=l(()=>{"use strict";A();uT=h(b(),1);v();k();mT=h(x(),1);S();C();bn={};Vc=W2(`<h2 id="what-are-memory-leaks">What are memory leaks?</h2>
<p>In the vast landscape of performance testing, there\u2019s a silent menace lurking in the shadows, often going unnoticed until it\u2019s too late: Memory Leaks. These seemingly innocuous bugs can wreak havoc on your application\u2019s performance, leading to sluggish response times and, in extreme cases, system crashes.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Memory Leaks Defined: Dive into the technical definition and understand the implications of memory leaks on your application.</li>
<li>Garbage Collections Explained: Get a brief overview of this complex topic and understand its role in memory management.</li>
<li>Real-Life Scenario: Witness the impact of memory leaks through a hands-on example using the Flask framework.</li>
<li>K6 Scripting: Learn how to visualize memory leaks using a K6 script, a powerful performance testing tool.</li>
<li>Profiler Insights: Discover how to monitor resource consumption using Python\u2019s memory-profiler module.</li>
</ul>
<p>Whether you\u2019re a seasoned developer or just starting out, this guide offers a comprehensive look into the world of memory leaks. Equip yourself with the knowledge to detect, diagnose, and defend against these performance-draining bugs. So, gear up and embark on a journey to ensure your application runs smoothly and efficiently! \u{1F4BB}\u{1F41B}\u{1F6E0}\uFE0F</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-memory-leaks-8ab2904720e0">https://medium.com/@gpiechnik/what-are-memory-leaks-8ab2904720e0</a></p>`),Kc={title:"What are memory leaks?",publishedAt:"2023-06-18T00:00:00.000Z",description:"\u{1F50D} Memory Leaks: The Silent Killers of Application Performance \u{1F50D}",slug:"what-are-memory-leaks",isPublish:!0},Jc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md",Yc=void 0;Zc[Symbol.for("astro.needsHeadRendering")]=!0});var el={};u(el,{default:()=>q2});async function M2(){return Promise.resolve().then(()=>(Qc(),Xc))}var z2,G2,U2,q2,tl=l(()=>{"use strict";z2="@@ASTRO-LINKS@@",G2="@@ASTRO-STYLES@@",U2="@@ASTRO-SCRIPTS@@",q2={__astroPropagation:!0,getMod:M2,collectedLinks:z2,collectedStyles:G2,collectedScripts:U2}});var rl={};u(rl,{Content:()=>al,compiledContent:()=>K2,default:()=>al,file:()=>ol,frontmatter:()=>il,getHeadings:()=>J2,images:()=>vn,rawContent:()=>V2,url:()=>sl});function H2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:vn[i].src,...vn[i].attributes}))}function V2(){return`
## What is browser based load testing

In the vast universe of testing, we often hear about functional and non-functional tests. But have you ever stumbled upon a testing method that straddles the line between the two? Enter the world of browser-based load testing, a unique approach that focuses on the user's experience from the moment they land on a page.

\u{1F4CC} Inside this Guide:

- Understanding the Basics: Dive deep into the realm of browser-based load testing and discover its significance.
- Real-Life Scenarios: Visualize the impact of this testing method with practical examples.
- Key Metrics Unveiled: From 'First Paint' to 'First Input Delay', get acquainted with the metrics that matter.
- Harnessing Page Speed Insights: Learn about Google's tool for retrieving vital page metrics and its limitations.
- K6 & Playwright: Uncover the magic of integrating K6 with Playwright to measure and analyze browser metrics.
- Hands-on with Code: Step-by-step guide to set up, run, and analyze your tests using K6 and Playwright.
- Setting Benchmarks: Ensure your application's performance is up to the mark with K6's threshold functionality.

Whether you're a seasoned tester or just starting out, this guide offers a fresh perspective on evaluating an application's readiness from a user's viewpoint. So, gear up and embark on a journey to optimize user experience like never before! \u{1F5A5}\uFE0F\u{1F4CA}\u{1F50D}

Link: https://medium.com/@gpiechnik/what-is-browser-based-load-testing-9e834a0118ff
`}function K2(){return nl}function J2(){return[{depth:2,slug:"what-is-browser-based-load-testing",text:"What is browser based load testing"}]}async function al(){let{layout:e,...t}=il;return t.file=ol,t.url=sl,g(m,{"set:html":nl})}var wT,vT,vn,nl,il,ol,sl,cl=l(()=>{"use strict";A();wT=h(b(),1);v();k();vT=h(x(),1);S();C();vn={};nl=H2(`<h2 id="what-is-browser-based-load-testing">What is browser based load testing</h2>
<p>In the vast universe of testing, we often hear about functional and non-functional tests. But have you ever stumbled upon a testing method that straddles the line between the two? Enter the world of browser-based load testing, a unique approach that focuses on the user\u2019s experience from the moment they land on a page.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Understanding the Basics: Dive deep into the realm of browser-based load testing and discover its significance.</li>
<li>Real-Life Scenarios: Visualize the impact of this testing method with practical examples.</li>
<li>Key Metrics Unveiled: From \u2018First Paint\u2019 to \u2018First Input Delay\u2019, get acquainted with the metrics that matter.</li>
<li>Harnessing Page Speed Insights: Learn about Google\u2019s tool for retrieving vital page metrics and its limitations.</li>
<li>K6 &#x26; Playwright: Uncover the magic of integrating K6 with Playwright to measure and analyze browser metrics.</li>
<li>Hands-on with Code: Step-by-step guide to set up, run, and analyze your tests using K6 and Playwright.</li>
<li>Setting Benchmarks: Ensure your application\u2019s performance is up to the mark with K6\u2019s threshold functionality.</li>
</ul>
<p>Whether you\u2019re a seasoned tester or just starting out, this guide offers a fresh perspective on evaluating an application\u2019s readiness from a user\u2019s viewpoint. So, gear up and embark on a journey to optimize user experience like never before! \u{1F5A5}\uFE0F\u{1F4CA}\u{1F50D}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-browser-based-load-testing-9e834a0118ff">https://medium.com/@gpiechnik/what-is-browser-based-load-testing-9e834a0118ff</a></p>`),il={title:"What is browser based load testing",publishedAt:"2023-06-17T00:00:00.000Z",description:"\u{1F680} Browser-Based Load Testing: The Unsung Hero of Performance Metrics \u{1F680}",slug:"what-is-browser-based-load-testing",isPublish:!0},ol="/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md",sl=void 0;al[Symbol.for("astro.needsHeadRendering")]=!0});var ll={};u(ll,{default:()=>eS});async function Y2(){return Promise.resolve().then(()=>(cl(),rl))}var Z2,X2,Q2,eS,dl=l(()=>{"use strict";Z2="@@ASTRO-LINKS@@",X2="@@ASTRO-STYLES@@",Q2="@@ASTRO-SCRIPTS@@",eS={__astroPropagation:!0,getMod:Y2,collectedLinks:Z2,collectedStyles:X2,collectedScripts:Q2}});var gl={};u(gl,{Content:()=>fl,compiledContent:()=>iS,default:()=>fl,file:()=>hl,frontmatter:()=>pl,getHeadings:()=>oS,images:()=>kn,rawContent:()=>nS,url:()=>ml});function tS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:kn[i].src,...kn[i].attributes}))}function nS(){return`
## Reading summary data in k6

Drowning in a sea of JSON data? Need a lifeline to navigate through the dense forest of test results? Enter JQ, your trusty command-line JSON processor. With its lightweight design and flexible capabilities, JQ is the tool you never knew you needed... until now.

\u{1F4CC} What's Inside:

- Introduction to JQ: Understand the power and potential of this command-line JSON processor.
- Installation Guide: A step-by-step walkthrough to get JQ up and running.
- The Power of Tags: Dive deep into the world of k6 tests and discover how tagging can revolutionize your data analysis.
- Command Mastery: From checking tags to calculating average request times, master the JQ commands that will transform your testing game.
- Automation with Bash: Why do manually what can be automated? Introducing a bash script that will do the heavy lifting for you.
- Sample Usage: A hands-on guide to using the bash script for your k6 test results.

Whether you're a seasoned tester or a newbie, this guide will equip you with the tools and knowledge to sift through JSON data with ease, extract meaningful insights, and elevate your testing game. Dive in and let JQ illuminate your path through the intricate maze of JSON! \u{1F4CA}\u{1F527}\u{1F4C8}

Link: https://medium.com/@gpiechnik/how-to-quick-read-summary-data-in-k6-from-json-file-f9d09bccd9c2
`}function iS(){return ul}function oS(){return[{depth:2,slug:"reading-summary-data-in-k6",text:"Reading summary data in k6"}]}async function fl(){let{layout:e,...t}=pl;return t.file=hl,t.url=ml,g(m,{"set:html":ul})}var CT,ET,kn,ul,pl,hl,ml,yl=l(()=>{"use strict";A();CT=h(b(),1);v();k();ET=h(x(),1);S();C();kn={};ul=tS(`<h2 id="reading-summary-data-in-k6">Reading summary data in k6</h2>
<p>Drowning in a sea of JSON data? Need a lifeline to navigate through the dense forest of test results? Enter JQ, your trusty command-line JSON processor. With its lightweight design and flexible capabilities, JQ is the tool you never knew you needed\u2026 until now.</p>
<p>\u{1F4CC} What\u2019s Inside:</p>
<ul>
<li>Introduction to JQ: Understand the power and potential of this command-line JSON processor.</li>
<li>Installation Guide: A step-by-step walkthrough to get JQ up and running.</li>
<li>The Power of Tags: Dive deep into the world of k6 tests and discover how tagging can revolutionize your data analysis.</li>
<li>Command Mastery: From checking tags to calculating average request times, master the JQ commands that will transform your testing game.</li>
<li>Automation with Bash: Why do manually what can be automated? Introducing a bash script that will do the heavy lifting for you.</li>
<li>Sample Usage: A hands-on guide to using the bash script for your k6 test results.</li>
</ul>
<p>Whether you\u2019re a seasoned tester or a newbie, this guide will equip you with the tools and knowledge to sift through JSON data with ease, extract meaningful insights, and elevate your testing game. Dive in and let JQ illuminate your path through the intricate maze of JSON! \u{1F4CA}\u{1F527}\u{1F4C8}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/how-to-quick-read-summary-data-in-k6-from-json-file-f9d09bccd9c2">https://medium.com/@gpiechnik/how-to-quick-read-summary-data-in-k6-from-json-file-f9d09bccd9c2</a></p>`),pl={title:"How to quickly read summary data in k6 from json file",publishedAt:"2023-06-16T00:00:00.000Z",description:"\u{1F50D} JQ: The Ultimate JSON Processor for K6 Testers \u{1F50D}",slug:"read-summary-data-in-k6",isPublish:!0},hl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md",ml=void 0;fl[Symbol.for("astro.needsHeadRendering")]=!0});var wl={};u(wl,{default:()=>lS});async function sS(){return Promise.resolve().then(()=>(yl(),gl))}var aS,rS,cS,lS,Dl=l(()=>{"use strict";aS="@@ASTRO-LINKS@@",rS="@@ASTRO-STYLES@@",cS="@@ASTRO-SCRIPTS@@",lS={__astroPropagation:!0,getMod:sS,collectedLinks:aS,collectedStyles:rS,collectedScripts:cS}});var Cl={};u(Cl,{Content:()=>Sl,compiledContent:()=>pS,default:()=>Sl,file:()=>kl,frontmatter:()=>vl,getHeadings:()=>hS,images:()=>xn,rawContent:()=>uS,url:()=>xl});function dS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:xn[i].src,...xn[i].attributes}))}function uS(){return`
## Fundamental network tools

In the vast realm of network testing, the tools you wield can make or break your efficiency. Whether you're a seasoned non-functional tester or just starting out, understanding the nuances of network tools is crucial. This guide is your one-stop-shop to the most commonly used tools, their functionalities, and how to harness their power effectively.

\u{1F4CC} Inside this Exploration:

- Ping: The basics of checking connectivity and ensuring that hosts are up and running.
- Telnet: Dive into the world of TCP protocol and understand how to check port connections.
- Traceroute/Tracert/Tracepath: Unravel the journey of a packet and diagnose network issues.
- Ipconfig: Discover the magic of managing IP configurations and DNS cache.
- Netstat: Get a comprehensive view of your network connections and the programs behind them.
- Nmap: Explore the multifaceted tool for port scanning and network services analysis.

Join us as we delve deep into each tool, providing hands-on examples, command breakdowns, and insights into their practical applications. Whether you're troubleshooting network issues or optimizing performance, this guide will equip you with the knowledge to navigate the network landscape confidently. \u{1F5A5}\uFE0F\u{1F527}\u{1F30D}

Link: https://medium.com/@gpiechnik/fundamental-network-tools-9bb6f3f54ef1
`}function pS(){return bl}function hS(){return[{depth:2,slug:"fundamental-network-tools",text:"Fundamental network tools"}]}async function Sl(){let{layout:e,...t}=vl;return t.file=kl,t.url=xl,g(m,{"set:html":bl})}var jT,LT,xn,bl,vl,kl,xl,Al=l(()=>{"use strict";A();jT=h(b(),1);v();k();LT=h(x(),1);S();C();xn={};bl=dS(`<h2 id="fundamental-network-tools">Fundamental network tools</h2>
<p>In the vast realm of network testing, the tools you wield can make or break your efficiency. Whether you\u2019re a seasoned non-functional tester or just starting out, understanding the nuances of network tools is crucial. This guide is your one-stop-shop to the most commonly used tools, their functionalities, and how to harness their power effectively.</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Ping: The basics of checking connectivity and ensuring that hosts are up and running.</li>
<li>Telnet: Dive into the world of TCP protocol and understand how to check port connections.</li>
<li>Traceroute/Tracert/Tracepath: Unravel the journey of a packet and diagnose network issues.</li>
<li>Ipconfig: Discover the magic of managing IP configurations and DNS cache.</li>
<li>Netstat: Get a comprehensive view of your network connections and the programs behind them.</li>
<li>Nmap: Explore the multifaceted tool for port scanning and network services analysis.</li>
</ul>
<p>Join us as we delve deep into each tool, providing hands-on examples, command breakdowns, and insights into their practical applications. Whether you\u2019re troubleshooting network issues or optimizing performance, this guide will equip you with the knowledge to navigate the network landscape confidently. \u{1F5A5}\uFE0F\u{1F527}\u{1F30D}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/fundamental-network-tools-9bb6f3f54ef1">https://medium.com/@gpiechnik/fundamental-network-tools-9bb6f3f54ef1</a></p>`),vl={title:"Fundamental network tools",publishedAt:"2023-06-15T00:00:00.000Z",description:"\u{1F310} Mastering Network Tools: A Non-Functional Tester's Guide \u{1F310}",slug:"fundamental-network-tools",isPublish:!0},kl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md",xl=void 0;Sl[Symbol.for("astro.needsHeadRendering")]=!0});var Fl={};u(Fl,{default:()=>wS});async function mS(){return Promise.resolve().then(()=>(Al(),Cl))}var fS,gS,yS,wS,El=l(()=>{"use strict";fS="@@ASTRO-LINKS@@",gS="@@ASTRO-STYLES@@",yS="@@ASTRO-SCRIPTS@@",wS={__astroPropagation:!0,getMod:mS,collectedLinks:fS,collectedStyles:gS,collectedScripts:yS}});var _l={};u(_l,{Content:()=>Il,compiledContent:()=>vS,default:()=>Il,file:()=>Rl,frontmatter:()=>Pl,getHeadings:()=>kS,images:()=>Sn,rawContent:()=>bS,url:()=>jl});function DS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Sn[i].src,...Sn[i].attributes}))}function bS(){return`
## Crucial update for k6!

The world of performance testing is ever-evolving, and with the recent updates to the K6 framework, the game has changed significantly. Gone are the days of cumbersome .json analysis and tedious data filtering. Enter the new era of InfluxDB, Grafana, and the power of tags.

\u{1F4CC} Inside this Exploration:

- K6's Transformation: Dive deep into the recent updates of the K6 framework and understand how they revolutionize performance testing.
- InfluxDB & Grafana Integration: Discover the seamless integration of K6 with InfluxDB and Grafana, and how it enhances data collection and observability.
- Power of Tags: Unravel the significance of tags in K6 and how they pave the way for efficient data analysis and error detection.
- Real-world Script Analysis: Walk through a detailed K6 script, understand its components, and see how it interacts with InfluxDB and Grafana.
- Potential Challenges: While the new approach offers numerous benefits, it's essential to be aware of potential pitfalls and how to navigate them.

Join us on this enlightening journey as we delve into the intricacies of the updated K6 framework, its integration with powerful tools, and the transformative impact on performance testing. \u{1F4CA}\u{1F527}\u{1F680}

Link: https://medium.com/@gpiechnik/crucial-update-for-k6-results-analysis-81b1c120fa7
`}function vS(){return Tl}function kS(){return[{depth:2,slug:"crucial-update-for-k6",text:"Crucial update for k6!"}]}async function Il(){let{layout:e,...t}=Pl;return t.file=Rl,t.url=jl,g(m,{"set:html":Tl})}var OT,zT,Sn,Tl,Pl,Rl,jl,Ll=l(()=>{"use strict";A();OT=h(b(),1);v();k();zT=h(x(),1);S();C();Sn={};Tl=DS(`<h2 id="crucial-update-for-k6">Crucial update for k6!</h2>
<p>The world of performance testing is ever-evolving, and with the recent updates to the K6 framework, the game has changed significantly. Gone are the days of cumbersome .json analysis and tedious data filtering. Enter the new era of InfluxDB, Grafana, and the power of tags.</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>K6\u2019s Transformation: Dive deep into the recent updates of the K6 framework and understand how they revolutionize performance testing.</li>
<li>InfluxDB &#x26; Grafana Integration: Discover the seamless integration of K6 with InfluxDB and Grafana, and how it enhances data collection and observability.</li>
<li>Power of Tags: Unravel the significance of tags in K6 and how they pave the way for efficient data analysis and error detection.</li>
<li>Real-world Script Analysis: Walk through a detailed K6 script, understand its components, and see how it interacts with InfluxDB and Grafana.</li>
<li>Potential Challenges: While the new approach offers numerous benefits, it\u2019s essential to be aware of potential pitfalls and how to navigate them.</li>
</ul>
<p>Join us on this enlightening journey as we delve into the intricacies of the updated K6 framework, its integration with powerful tools, and the transformative impact on performance testing. \u{1F4CA}\u{1F527}\u{1F680}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/crucial-update-for-k6-results-analysis-81b1c120fa7">https://medium.com/@gpiechnik/crucial-update-for-k6-results-analysis-81b1c120fa7</a></p>`),Pl={title:"Crucial update for k6 results analysis",publishedAt:"2023-06-13T00:00:00.000Z",description:"\u{1F50D} K6 Framework Evolution: A New Era of Performance Testing \u{1F50D}",slug:"crucial-update-for-k6-results-analysis",isPublish:!0},Rl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md",jl=void 0;Il[Symbol.for("astro.needsHeadRendering")]=!0});var Bl={};u(Bl,{default:()=>FS});async function xS(){return Promise.resolve().then(()=>(Ll(),_l))}var SS,CS,AS,FS,Wl=l(()=>{"use strict";SS="@@ASTRO-LINKS@@",CS="@@ASTRO-STYLES@@",AS="@@ASTRO-SCRIPTS@@",FS={__astroPropagation:!0,getMod:xS,collectedLinks:SS,collectedStyles:CS,collectedScripts:AS}});var Gl={};u(Gl,{Content:()=>zl,compiledContent:()=>PS,default:()=>zl,file:()=>Nl,frontmatter:()=>Ol,getHeadings:()=>RS,images:()=>Cn,rawContent:()=>TS,url:()=>Ml});function ES(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Cn[i].src,...Cn[i].attributes}))}function TS(){return`
## Hacking embedded systems using the routersploit

In the vast realm of cybersecurity, the vulnerabilities lurking within our everyday devices often go unnoticed. From routers to cameras, these embedded systems can be a goldmine for attackers. Enter Routersploit - a framework designed to detect and exploit these hidden flaws. But what can it truly achieve?

\u{1F4CC} Inside this Exploration:

- Routersploit Demystified: Discover the core functionalities of this powerful tool and its five pivotal modules.
- Vulnerability Scanning: Dive into the most popular feature of Routersploit, and learn how to effectively scan devices for potential weak points.
- Passive Checks: Sometimes, a subtle approach is best. Understand how Routersploit can passively assess vulnerabilities without alerting the target.
- Bruteforce Attacks: Unearth the brute force capabilities of Routersploit, from HTTP to Telnet, and see how it can crack open defenses.
- Hands-on Examples: Walk through real-world scenarios, complete with code snippets and console outputs, to see Routersploit in action.

Join us on this enlightening journey as we delve into the intricacies of Routersploit, shedding light on its capabilities and showcasing its potential in the world of embedded system security. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F

Link: https://medium.com/@gpiechnik/hacking-embedded-systems-using-the-routersploit-tool-e72efda1f049
`}function PS(){return $l}function RS(){return[{depth:2,slug:"hacking-embedded-systems-using-the-routersploit",text:"Hacking embedded systems using the routersploit"}]}async function zl(){let{layout:e,...t}=Ol;return t.file=Nl,t.url=Ml,g(m,{"set:html":$l})}var HT,JT,Cn,$l,Ol,Nl,Ml,Ul=l(()=>{"use strict";A();HT=h(b(),1);v();k();JT=h(x(),1);S();C();Cn={};$l=ES(`<h2 id="hacking-embedded-systems-using-the-routersploit">Hacking embedded systems using the routersploit</h2>
<p>In the vast realm of cybersecurity, the vulnerabilities lurking within our everyday devices often go unnoticed. From routers to cameras, these embedded systems can be a goldmine for attackers. Enter Routersploit - a framework designed to detect and exploit these hidden flaws. But what can it truly achieve?</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Routersploit Demystified: Discover the core functionalities of this powerful tool and its five pivotal modules.</li>
<li>Vulnerability Scanning: Dive into the most popular feature of Routersploit, and learn how to effectively scan devices for potential weak points.</li>
<li>Passive Checks: Sometimes, a subtle approach is best. Understand how Routersploit can passively assess vulnerabilities without alerting the target.</li>
<li>Bruteforce Attacks: Unearth the brute force capabilities of Routersploit, from HTTP to Telnet, and see how it can crack open defenses.</li>
<li>Hands-on Examples: Walk through real-world scenarios, complete with code snippets and console outputs, to see Routersploit in action.</li>
</ul>
<p>Join us on this enlightening journey as we delve into the intricacies of Routersploit, shedding light on its capabilities and showcasing its potential in the world of embedded system security. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F</p>
<p>Link: <a href="https://medium.com/@gpiechnik/hacking-embedded-systems-using-the-routersploit-tool-e72efda1f049">https://medium.com/@gpiechnik/hacking-embedded-systems-using-the-routersploit-tool-e72efda1f049</a></p>`),Ol={title:"Hacking embedded systems using the routersploit tool",publishedAt:"2023-06-12T00:00:00.000Z",description:"\u{1F310} Routersploit Unveiled: A Deep Dive into Embedded System Vulnerabilities \u{1F310}",slug:"hacking-embedded-systems-routersploit",isPublish:!0},Nl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md",Ml=void 0;zl[Symbol.for("astro.needsHeadRendering")]=!0});var ql={};u(ql,{default:()=>BS});async function jS(){return Promise.resolve().then(()=>(Ul(),Gl))}var IS,_S,LS,BS,Hl=l(()=>{"use strict";IS="@@ASTRO-LINKS@@",_S="@@ASTRO-STYLES@@",LS="@@ASTRO-SCRIPTS@@",BS={__astroPropagation:!0,getMod:jS,collectedLinks:IS,collectedStyles:_S,collectedScripts:LS}});var Xl={};u(Xl,{Content:()=>Zl,compiledContent:()=>OS,default:()=>Zl,file:()=>Jl,frontmatter:()=>Kl,getHeadings:()=>NS,images:()=>An,rawContent:()=>$S,url:()=>Yl});function WS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:An[i].src,...An[i].attributes}))}function $S(){return`
## SYN Flood Attack

In the ever-evolving world of cybersecurity, some threats remain timeless, adapting and morphing, but never truly disappearing. The SYN flood attack is one such classic. But what makes it so enduring? Let's delve into its mechanics and understand its potency.

\u{1F4CC} Inside this Exploration:

- The Basics of SYN Flood: A refresher on this age-old attack strategy and its relevance in today's digital landscape.
- TCP Protocol Unveiled: A step-by-step breakdown of the TCP communication process, laying the foundation for understanding the SYN flood attack.
- Crafting the Attack: Dive into the anatomy of a SYN flood script with a hands-on Python example. Discover how attackers can easily overload servers, causing them to become unresponsive.
- Defensive Measures: While this guide focuses on the attack, it's crucial to be armed with knowledge to defend against such threats.

Join us as we demystify the SYN flood attack, offering insights into its workings and highlighting the importance of staying vigilant in the face of timeless cyber threats. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F

Link: https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb
`}function OS(){return Vl}function NS(){return[{depth:2,slug:"syn-flood-attack",text:"SYN Flood Attack"}]}async function Zl(){let{layout:e,...t}=Kl;return t.file=Jl,t.url=Yl,g(m,{"set:html":Vl})}var QT,nP,An,Vl,Kl,Jl,Yl,Ql=l(()=>{"use strict";A();QT=h(b(),1);v();k();nP=h(x(),1);S();C();An={};Vl=WS(`<h2 id="syn-flood-attack">SYN Flood Attack</h2>
<p>In the ever-evolving world of cybersecurity, some threats remain timeless, adapting and morphing, but never truly disappearing. The SYN flood attack is one such classic. But what makes it so enduring? Let\u2019s delve into its mechanics and understand its potency.</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>The Basics of SYN Flood: A refresher on this age-old attack strategy and its relevance in today\u2019s digital landscape.</li>
<li>TCP Protocol Unveiled: A step-by-step breakdown of the TCP communication process, laying the foundation for understanding the SYN flood attack.</li>
<li>Crafting the Attack: Dive into the anatomy of a SYN flood script with a hands-on Python example. Discover how attackers can easily overload servers, causing them to become unresponsive.</li>
<li>Defensive Measures: While this guide focuses on the attack, it\u2019s crucial to be armed with knowledge to defend against such threats.</li>
</ul>
<p>Join us as we demystify the SYN flood attack, offering insights into its workings and highlighting the importance of staying vigilant in the face of timeless cyber threats. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F</p>
<p>Link: <a href="https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb">https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb</a></p>`),Kl={title:"SYN Flood Attack",publishedAt:"2023-06-11T00:00:00.000Z",description:"\u{1F310} Unmasking the SYN Flood Attack: A Deep Dive into Timeless Cyber Threats \u{1F310}",slug:"syn-flood-attack",isPublish:!0},Jl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md",Yl=void 0;Zl[Symbol.for("astro.needsHeadRendering")]=!0});var ed={};u(ed,{default:()=>qS});async function MS(){return Promise.resolve().then(()=>(Ql(),Xl))}var zS,GS,US,qS,td=l(()=>{"use strict";zS="@@ASTRO-LINKS@@",GS="@@ASTRO-STYLES@@",US="@@ASTRO-SCRIPTS@@",qS={__astroPropagation:!0,getMod:MS,collectedLinks:zS,collectedStyles:GS,collectedScripts:US}});var rd={};u(rd,{Content:()=>ad,compiledContent:()=>KS,default:()=>ad,file:()=>od,frontmatter:()=>id,getHeadings:()=>JS,images:()=>Fn,rawContent:()=>VS,url:()=>sd});function HS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Fn[i].src,...Fn[i].attributes}))}function VS(){return`
## DoS, DDoS, DRDDos, PoD

Navigating the world of cyberattacks can be daunting, especially when terms like DoS, DDoS, and DRDoS start to blur. But fear not! This guide is here to demystify these terms and provide clarity.

\u{1F4CC} Inside this Guide:

- DoS (Denial of Service): Understand the basics of this attack that disrupts system operations and why it's not as straightforward as it seems.
- DDoS (Distributed Denial of Service): Discover how attackers evolved from DoS to DDoS, leveraging multiple computers for a more potent attack.
- DDoS Attack Methods: With countless DDoS attack varieties, we spotlight a few key methods, including insights from the MHDDoS repository.
- DRDoS & IP Spoofing: Dive into the world of Distributed Reflected Denial of Service and how attackers impersonate victims.
- Special Mention Attacks: From the cyclical 'hit-and-run DoS' to the connection-exhausting 'Slowloris', and the potentially devastating 'Ping of Death', get acquainted with these unique attack strategies.

Equip yourself with knowledge and stay one step ahead of potential cyber threats! \u{1F517}\u{1F50D}\u{1F310}

Link: https://medium.com/@gpiechnik/dos-vs-ddos-vs-drddos-vs-pod-attack-fe6b2b6a896e
`}function KS(){return nd}function JS(){return[{depth:2,slug:"dos-ddos-drddos-pod",text:"DoS, DDoS, DRDDos, PoD"}]}async function ad(){let{layout:e,...t}=id;return t.file=od,t.url=sd,g(m,{"set:html":nd})}var aP,lP,Fn,nd,id,od,sd,cd=l(()=>{"use strict";A();aP=h(b(),1);v();k();lP=h(x(),1);S();C();Fn={};nd=HS(`<h2 id="dos-ddos-drddos-pod">DoS, DDoS, DRDDos, PoD</h2>
<p>Navigating the world of cyberattacks can be daunting, especially when terms like DoS, DDoS, and DRDoS start to blur. But fear not! This guide is here to demystify these terms and provide clarity.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>DoS (Denial of Service): Understand the basics of this attack that disrupts system operations and why it\u2019s not as straightforward as it seems.</li>
<li>DDoS (Distributed Denial of Service): Discover how attackers evolved from DoS to DDoS, leveraging multiple computers for a more potent attack.</li>
<li>DDoS Attack Methods: With countless DDoS attack varieties, we spotlight a few key methods, including insights from the MHDDoS repository.</li>
<li>DRDoS &#x26; IP Spoofing: Dive into the world of Distributed Reflected Denial of Service and how attackers impersonate victims.</li>
<li>Special Mention Attacks: From the cyclical \u2018hit-and-run DoS\u2019 to the connection-exhausting \u2018Slowloris\u2019, and the potentially devastating \u2018Ping of Death\u2019, get acquainted with these unique attack strategies.</li>
</ul>
<p>Equip yourself with knowledge and stay one step ahead of potential cyber threats! \u{1F517}\u{1F50D}\u{1F310}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/dos-vs-ddos-vs-drddos-vs-pod-attack-fe6b2b6a896e">https://medium.com/@gpiechnik/dos-vs-ddos-vs-drddos-vs-pod-attack-fe6b2b6a896e</a></p>`),id={title:"DoS vs DDoS vs DRDDoS vs PoD attack",publishedAt:"2023-06-09T00:00:00.000Z",description:"\u{1F6E1}\uFE0F Decoding DoS, DDoS, DRDoS & More: A Comprehensive Guide for Beginners \u{1F6E1}\uFE0F",slug:"dos-ddos-drddos-pod-attack",isPublish:!0},od="/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md",sd=void 0;ad[Symbol.for("astro.needsHeadRendering")]=!0});var ld={};u(ld,{default:()=>eC});async function YS(){return Promise.resolve().then(()=>(cd(),rd))}var ZS,XS,QS,eC,dd=l(()=>{"use strict";ZS="@@ASTRO-LINKS@@",XS="@@ASTRO-STYLES@@",QS="@@ASTRO-SCRIPTS@@",eC={__astroPropagation:!0,getMod:YS,collectedLinks:ZS,collectedStyles:XS,collectedScripts:QS}});var gd={};u(gd,{Content:()=>fd,compiledContent:()=>iC,default:()=>fd,file:()=>hd,frontmatter:()=>pd,getHeadings:()=>oC,images:()=>En,rawContent:()=>nC,url:()=>md});function tC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:En[i].src,...En[i].attributes}))}function nC(){return`
## State SSL certificates

Amidst the backdrop of sanctions and restricted web access, Russia's move to establish a state authority for issuing TLS certificates has raised eyebrows. But what does this mean for online security and the integrity of encrypted data?

\u{1F4CC} Inside this Guide:

- Man in the Middle (MitM) Attacks: A refresher on how these attacks intercept network traffic, potentially exposing sensitive data.
- The Mechanics of Certificate Issuance: Delve into the intricacies of public/private key generation and the potential risks when Certificate Authorities hold the reins.
- Trusted Sources & Browsers: Can major browsers trust Russia's state certificates? And what happens when users can manually add public keys?
- Lessons from Kazakhstan: A look back at Kazakhstan's attempt at a "national security certificate" and the subsequent global tech response.

Navigate the complex landscape of digital trust and understand the implications of state-controlled certificate authorities! \u{1F517}

Link: https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6
`}function iC(){return ud}function oC(){return[{depth:2,slug:"state-ssl-certificates",text:"State SSL certificates"}]}async function fd(){let{layout:e,...t}=pd;return t.file=hd,t.url=md,g(m,{"set:html":ud})}var hP,gP,En,ud,pd,hd,md,yd=l(()=>{"use strict";A();hP=h(b(),1);v();k();gP=h(x(),1);S();C();En={};ud=tC(`<h2 id="state-ssl-certificates">State SSL certificates</h2>
<p>Amidst the backdrop of sanctions and restricted web access, Russia\u2019s move to establish a state authority for issuing TLS certificates has raised eyebrows. But what does this mean for online security and the integrity of encrypted data?</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Man in the Middle (MitM) Attacks: A refresher on how these attacks intercept network traffic, potentially exposing sensitive data.</li>
<li>The Mechanics of Certificate Issuance: Delve into the intricacies of public/private key generation and the potential risks when Certificate Authorities hold the reins.</li>
<li>Trusted Sources &#x26; Browsers: Can major browsers trust Russia\u2019s state certificates? And what happens when users can manually add public keys?</li>
<li>Lessons from Kazakhstan: A look back at Kazakhstan\u2019s attempt at a \u201Cnational security certificate\u201D and the subsequent global tech response.</li>
</ul>
<p>Navigate the complex landscape of digital trust and understand the implications of state-controlled certificate authorities! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6">https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6</a></p>`),pd={title:"State SSL certificates \u2014 what are the risks",publishedAt:"2023-06-08T00:00:00.000Z",description:"\u{1F512} Russia's State-Issued TLS Certificates: A Deep Dive into Digital Trust \u{1F512}",slug:"state-ssl-certificates",isPublish:!0},hd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md",md=void 0;fd[Symbol.for("astro.needsHeadRendering")]=!0});var wd={};u(wd,{default:()=>lC});async function sC(){return Promise.resolve().then(()=>(yd(),gd))}var aC,rC,cC,lC,Dd=l(()=>{"use strict";aC="@@ASTRO-LINKS@@",rC="@@ASTRO-STYLES@@",cC="@@ASTRO-SCRIPTS@@",lC={__astroPropagation:!0,getMod:sC,collectedLinks:aC,collectedStyles:rC,collectedScripts:cC}});var Cd={};u(Cd,{Content:()=>Sd,compiledContent:()=>pC,default:()=>Sd,file:()=>kd,frontmatter:()=>vd,getHeadings:()=>hC,images:()=>Tn,rawContent:()=>uC,url:()=>xd});function dC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Tn[i].src,...Tn[i].attributes}))}function uC(){return`
## What are polyglots?

Ever wondered about the intricacies of XSS vulnerabilities and the vast array of potential attack vectors? Dive into the world of polyglots, payloads that combine multiple scripts into one, and understand their power and limitations.

\u{1F4CC} Inside this Guide:

- Understanding Polyglots: Discover how these "universal" payloads work and why they might not always be effective against systems with WAF.
- Deep Dive Analysis: Break down a complex polyglot to understand its components and how it operates.
- SQLi Polyglots & Beyond: Explore how polyglots extend beyond Javascript, including SQL and even JPEG formats.
- Polyglot Innerht: A platform where enthusiasts share polyglots that can hold multiple contexts.

Stay informed and understand the nuances of these versatile payloads in the realm of cybersecurity! \u{1F517}

Link: https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977
`}function pC(){return bd}function hC(){return[{depth:2,slug:"what-are-polyglots",text:"What are polyglots?"}]}async function Sd(){let{layout:e,...t}=vd;return t.file=kd,t.url=xd,g(m,{"set:html":bd})}var bP,xP,Tn,bd,vd,kd,xd,Ad=l(()=>{"use strict";A();bP=h(b(),1);v();k();xP=h(x(),1);S();C();Tn={};bd=dC(`<h2 id="what-are-polyglots">What are polyglots?</h2>
<p>Ever wondered about the intricacies of XSS vulnerabilities and the vast array of potential attack vectors? Dive into the world of polyglots, payloads that combine multiple scripts into one, and understand their power and limitations.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Understanding Polyglots: Discover how these \u201Cuniversal\u201D payloads work and why they might not always be effective against systems with WAF.</li>
<li>Deep Dive Analysis: Break down a complex polyglot to understand its components and how it operates.</li>
<li>SQLi Polyglots &#x26; Beyond: Explore how polyglots extend beyond Javascript, including SQL and even JPEG formats.</li>
<li>Polyglot Innerht: A platform where enthusiasts share polyglots that can hold multiple contexts.</li>
</ul>
<p>Stay informed and understand the nuances of these versatile payloads in the realm of cybersecurity! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977">https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977</a></p>`),vd={title:"What are polyglots and how to use them as a pentester",publishedAt:"2023-06-06T00:00:00.000Z",description:"\u{1F50D} Polyglots: The Universal Payloads in Cybersecurity \u{1F50D}",slug:"what-are-polyglots",isPublish:!0},kd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md",xd=void 0;Sd[Symbol.for("astro.needsHeadRendering")]=!0});var Fd={};u(Fd,{default:()=>wC});async function mC(){return Promise.resolve().then(()=>(Ad(),Cd))}var fC,gC,yC,wC,Ed=l(()=>{"use strict";fC="@@ASTRO-LINKS@@",gC="@@ASTRO-STYLES@@",yC="@@ASTRO-SCRIPTS@@",wC={__astroPropagation:!0,getMod:mC,collectedLinks:fC,collectedStyles:gC,collectedScripts:yC}});var _d={};u(_d,{Content:()=>Id,compiledContent:()=>vC,default:()=>Id,file:()=>Rd,frontmatter:()=>Pd,getHeadings:()=>kC,images:()=>Pn,rawContent:()=>bC,url:()=>jd});function DC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Pn[i].src,...Pn[i].attributes}))}function bC(){return`
## LDAP protocol basics and the LDAP Injection attack

Starting a career in security? You'll likely hear about LDAP. Let's dive into what it is and how to ensure its security.

\u{1F50D} Inside this Guide:

- LDAP Basics: Understand how Linux systems manage registered users and how LDAP aids in centralizing user account management.
- LDAP Injection: Discover how unfiltered user input can lead to unauthorized server commands, similar to SQL Injection.
- Real-world Examples:
- \u2022 Access Control Bypass: See how malformed input can trick LDAP servers.
- \u2022 Information Disclosure: Learn how OR queries can leak data.
- \u2022 Blind LDAP Injection: Grasp how attackers can guess data based on server responses.
- Defense Strategies: Equip yourself with methods to prevent LDAP Injection, from data filtering to using trusted frameworks.

Stay ahead of the curve and ensure your LDAP implementations are secure! \u{1F517}

Link: https://medium.com/@gpiechnik/ldap-protocol-basics-and-the-ldap-injection-attack-45cb003e063d
`}function vC(){return Td}function kC(){return[{depth:2,slug:"ldap-protocol-basics-and-the-ldap-injection-attack",text:"LDAP protocol basics and the LDAP Injection attack"}]}async function Id(){let{layout:e,...t}=Pd;return t.file=Rd,t.url=jd,g(m,{"set:html":Td})}var FP,PP,Pn,Td,Pd,Rd,jd,Ld=l(()=>{"use strict";A();FP=h(b(),1);v();k();PP=h(x(),1);S();C();Pn={};Td=DC(`<h2 id="ldap-protocol-basics-and-the-ldap-injection-attack">LDAP protocol basics and the LDAP Injection attack</h2>
<p>Starting a career in security? You\u2019ll likely hear about LDAP. Let\u2019s dive into what it is and how to ensure its security.</p>
<p>\u{1F50D} Inside this Guide:</p>
<ul>
<li>LDAP Basics: Understand how Linux systems manage registered users and how LDAP aids in centralizing user account management.</li>
<li>LDAP Injection: Discover how unfiltered user input can lead to unauthorized server commands, similar to SQL Injection.</li>
<li>Real-world Examples:</li>
<li>\u2022 Access Control Bypass: See how malformed input can trick LDAP servers.</li>
<li>\u2022 Information Disclosure: Learn how OR queries can leak data.</li>
<li>\u2022 Blind LDAP Injection: Grasp how attackers can guess data based on server responses.</li>
<li>Defense Strategies: Equip yourself with methods to prevent LDAP Injection, from data filtering to using trusted frameworks.</li>
</ul>
<p>Stay ahead of the curve and ensure your LDAP implementations are secure! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/ldap-protocol-basics-and-the-ldap-injection-attack-45cb003e063d">https://medium.com/@gpiechnik/ldap-protocol-basics-and-the-ldap-injection-attack-45cb003e063d</a></p>`),Pd={title:"LDAP protocol basics and the LDAP Injection attack",publishedAt:"2023-06-04T00:00:00.000Z",description:"\u{1F512} Demystifying LDAP and Its Security Implications \u{1F512}",slug:"ldap-protocol-basics-and-the-ldap-injection-attack",isPublish:!0},Rd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md",jd=void 0;Id[Symbol.for("astro.needsHeadRendering")]=!0});var Bd={};u(Bd,{default:()=>FC});async function xC(){return Promise.resolve().then(()=>(Ld(),_d))}var SC,CC,AC,FC,Wd=l(()=>{"use strict";SC="@@ASTRO-LINKS@@",CC="@@ASTRO-STYLES@@",AC="@@ASTRO-SCRIPTS@@",FC={__astroPropagation:!0,getMod:xC,collectedLinks:SC,collectedStyles:CC,collectedScripts:AC}});var Gd={};u(Gd,{Content:()=>zd,compiledContent:()=>PC,default:()=>zd,file:()=>Nd,frontmatter:()=>Od,getHeadings:()=>RC,images:()=>Rn,rawContent:()=>TC,url:()=>Md});function EC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Rn[i].src,...Rn[i].attributes}))}function TC(){return`
## Bind shell and Reverse shell

Ever wondered about the power of Unix commands? This guide delves into the capabilities of cat and netcat, two Unix tools with vast potential.

\u{1F50D} What's Inside?

- Netcat Basics: Uncover the fusion of net and cat and its ability to transfer and read files over ports.
- Bind Shell: Explore how an attacker's machine acts as a client, connecting to a victim's machine, which acts as a server, to execute remote commands.
-Reverse Shell: Discover the inverse of bind shell, where the victim's machine initiates the connection to the attacker's server.
- Practical Payloads: Dive into a hands-on example using a reverse shell payload to create a connection.

\u{1F4CC} Key Takeaways:

- Grasp the distinction between bind shell and reverse shell.
- Understand the role of the attacker and victim in each scenario.
- Gain insights into the practical application of these concepts.

Embark on a journey through the world of netcat and master the art of shells! \u{1F517}

Link: https://medium.com/@gpiechnik/what-is-bind-shell-and-reverse-shell-4653363ebd87
`}function PC(){return $d}function RC(){return[{depth:2,slug:"bind-shell-and-reverse-shell",text:"Bind shell and Reverse shell"}]}async function zd(){let{layout:e,...t}=Od;return t.file=Nd,t.url=Md,g(m,{"set:html":$d})}var _P,WP,Rn,$d,Od,Nd,Md,Ud=l(()=>{"use strict";A();_P=h(b(),1);v();k();WP=h(x(),1);S();C();Rn={};$d=EC(`<h2 id="bind-shell-and-reverse-shell">Bind shell and Reverse shell</h2>
<p>Ever wondered about the power of Unix commands? This guide delves into the capabilities of cat and netcat, two Unix tools with vast potential.</p>
<p>\u{1F50D} What\u2019s Inside?</p>
<ul>
<li>Netcat Basics: Uncover the fusion of net and cat and its ability to transfer and read files over ports.</li>
<li>Bind Shell: Explore how an attacker\u2019s machine acts as a client, connecting to a victim\u2019s machine, which acts as a server, to execute remote commands.
-Reverse Shell: Discover the inverse of bind shell, where the victim\u2019s machine initiates the connection to the attacker\u2019s server.</li>
<li>Practical Payloads: Dive into a hands-on example using a reverse shell payload to create a connection.</li>
</ul>
<p>\u{1F4CC} Key Takeaways:</p>
<ul>
<li>Grasp the distinction between bind shell and reverse shell.</li>
<li>Understand the role of the attacker and victim in each scenario.</li>
<li>Gain insights into the practical application of these concepts.</li>
</ul>
<p>Embark on a journey through the world of netcat and master the art of shells! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-bind-shell-and-reverse-shell-4653363ebd87">https://medium.com/@gpiechnik/what-is-bind-shell-and-reverse-shell-4653363ebd87</a></p>`),Od={title:"What is bind shell and reverse shell",publishedAt:"2023-06-03T00:00:00.000Z",description:"\u{1F310} Diving into Netcat: Bind Shell vs. Reverse Shell \u{1F310}",slug:"what-is-bind-shell-and-reverse-shell",isPublish:!0},Nd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md",Md=void 0;zd[Symbol.for("astro.needsHeadRendering")]=!0});var qd={};u(qd,{default:()=>BC});async function jC(){return Promise.resolve().then(()=>(Ud(),Gd))}var IC,_C,LC,BC,Hd=l(()=>{"use strict";IC="@@ASTRO-LINKS@@",_C="@@ASTRO-STYLES@@",LC="@@ASTRO-SCRIPTS@@",BC={__astroPropagation:!0,getMod:jC,collectedLinks:IC,collectedStyles:_C,collectedScripts:LC}});var Xd={};u(Xd,{Content:()=>Zd,compiledContent:()=>OC,default:()=>Zd,file:()=>Jd,frontmatter:()=>Kd,getHeadings:()=>NC,images:()=>jn,rawContent:()=>$C,url:()=>Yd});function WC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:jn[i].src,...jn[i].attributes}))}function $C(){return`
## What is Forward Proxy and Reverse Proxy

Confused by 'forward proxy' and 'reverse proxy'? This guide breaks down these essential internet traffic components.

\u{1F50D} What's Inside?

- Proxy Basics: Discover the role of a proxy in directing internet traffic.
- Forward Proxy: Learn how it acts on behalf of users, directing their requests and anonymizing them.
- Reverse Proxy: Understand its role in load balancing and ensuring high application availability.

\u{1F4CC} Key Takeaways:

- Grasp the differences between forward and reverse proxies.
- Recognize the security and performance benefits of both proxy types.

Dive into the world of proxies with this concise guide and navigate internet traffic with ease! \u{1F517}

Link: https://medium.com/@gpiechnik/what-is-forward-proxy-and-reverse-proxy-265e554d7b4b
`}function OC(){return Vd}function NC(){return[{depth:2,slug:"what-is-forward-proxy-and-reverse-proxy",text:"What is Forward Proxy and Reverse Proxy"}]}async function Zd(){let{layout:e,...t}=Kd;return t.file=Jd,t.url=Yd,g(m,{"set:html":Vd})}var MP,UP,jn,Vd,Kd,Jd,Yd,Qd=l(()=>{"use strict";A();MP=h(b(),1);v();k();UP=h(x(),1);S();C();jn={};Vd=WC(`<h2 id="what-is-forward-proxy-and-reverse-proxy">What is Forward Proxy and Reverse Proxy</h2>
<p>Confused by \u2018forward proxy\u2019 and \u2018reverse proxy\u2019? This guide breaks down these essential internet traffic components.</p>
<p>\u{1F50D} What\u2019s Inside?</p>
<ul>
<li>Proxy Basics: Discover the role of a proxy in directing internet traffic.</li>
<li>Forward Proxy: Learn how it acts on behalf of users, directing their requests and anonymizing them.</li>
<li>Reverse Proxy: Understand its role in load balancing and ensuring high application availability.</li>
</ul>
<p>\u{1F4CC} Key Takeaways:</p>
<ul>
<li>Grasp the differences between forward and reverse proxies.</li>
<li>Recognize the security and performance benefits of both proxy types.</li>
</ul>
<p>Dive into the world of proxies with this concise guide and navigate internet traffic with ease! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-forward-proxy-and-reverse-proxy-265e554d7b4b">https://medium.com/@gpiechnik/what-is-forward-proxy-and-reverse-proxy-265e554d7b4b</a></p>`),Kd={title:"What is Forward Proxy and Reverse Proxy",publishedAt:"2023-06-02T00:00:00.000Z",description:"\u{1F310} Decoding the World of Proxies: Forward vs. Reverse \u{1F310}",slug:"what-is-forward-proxy-and-reverse-proxy",isPublish:!0},Jd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md",Yd=void 0;Zd[Symbol.for("astro.needsHeadRendering")]=!0});var eu={};u(eu,{default:()=>qC});async function MC(){return Promise.resolve().then(()=>(Qd(),Xd))}var zC,GC,UC,qC,tu=l(()=>{"use strict";zC="@@ASTRO-LINKS@@",GC="@@ASTRO-STYLES@@",UC="@@ASTRO-SCRIPTS@@",qC={__astroPropagation:!0,getMod:MC,collectedLinks:zC,collectedStyles:GC,collectedScripts:UC}});var ru={};u(ru,{Content:()=>au,compiledContent:()=>KC,default:()=>au,file:()=>ou,frontmatter:()=>iu,getHeadings:()=>JC,images:()=>In,rawContent:()=>VC,url:()=>su});function HC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:In[i].src,...In[i].attributes}))}function VC(){return`
## What is WAF and IPS?

Navigating the maze of network security can be daunting, especially with acronyms like IPS and WAF thrown around. But worry not! This comprehensive guide is here to shed light on these crucial security tools, ensuring you're well-equipped to protect your digital assets.

\u{1F50D} Inside this guide, you'll discover:

- WAF Unveiled: Dive into the workings of Web Application Firewalls, the gatekeepers of HTTP communication. Learn how they detect and thwart threats like XSS, SQL injections, and DDoS attacks.
- Types of WAF: From hardware-based to cloud-based solutions, understand the different flavors of WAFs and their unique advantages.
- NAXSI Deep Dive: Get hands-on with the configuration of NAXSI, the free WAF module for the Nginx web server. Decode configuration files and understand the significance of each setting.
- IPS Explained: Unravel the intricacies of Intrusion Prevention Systems, the vigilant guards against malicious traffic across various protocols. Discover how they inspect, analyze, and respond to threats in real-time.
- WAF vs. IPS: A side-by-side comparison of these security powerhouses. Understand their focus areas, methods, and the threats they counteract.

\u{1F4CC} Key Takeaways:

- Grasp the fundamental differences between WAF and IPS, ensuring you choose the right tool for your security needs.
- Gain practical insights into configuring and optimizing NAXSI for robust web application protection.
- Understand the broad spectrum of threats that IPS counters, from DoS attacks to exploits across various protocols.

Whether you're a budding security enthusiast or a seasoned professional, this guide offers a deep dive into the world of network security. With detailed explanations, practical examples, and expert insights, you'll be well on your way to fortifying your digital defenses.

\u{1F517} Step up your security game and ensure your network remains breach-proof! \u{1F517}

Link: https://medium.com/@gpiechnik/what-is-waf-and-ips-intrusion-prevention-system-web-application-firewall-3ea21467b334
`}function KC(){return nu}function JC(){return[{depth:2,slug:"what-is-waf-and-ips",text:"What is WAF and IPS?"}]}async function au(){let{layout:e,...t}=iu;return t.file=ou,t.url=su,g(m,{"set:html":nu})}var KP,ZP,In,nu,iu,ou,su,cu=l(()=>{"use strict";A();KP=h(b(),1);v();k();ZP=h(x(),1);S();C();In={};nu=HC(`<h2 id="what-is-waf-and-ips">What is WAF and IPS?</h2>
<p>Navigating the maze of network security can be daunting, especially with acronyms like IPS and WAF thrown around. But worry not! This comprehensive guide is here to shed light on these crucial security tools, ensuring you\u2019re well-equipped to protect your digital assets.</p>
<p>\u{1F50D} Inside this guide, you\u2019ll discover:</p>
<ul>
<li>WAF Unveiled: Dive into the workings of Web Application Firewalls, the gatekeepers of HTTP communication. Learn how they detect and thwart threats like XSS, SQL injections, and DDoS attacks.</li>
<li>Types of WAF: From hardware-based to cloud-based solutions, understand the different flavors of WAFs and their unique advantages.</li>
<li>NAXSI Deep Dive: Get hands-on with the configuration of NAXSI, the free WAF module for the Nginx web server. Decode configuration files and understand the significance of each setting.</li>
<li>IPS Explained: Unravel the intricacies of Intrusion Prevention Systems, the vigilant guards against malicious traffic across various protocols. Discover how they inspect, analyze, and respond to threats in real-time.</li>
<li>WAF vs. IPS: A side-by-side comparison of these security powerhouses. Understand their focus areas, methods, and the threats they counteract.</li>
</ul>
<p>\u{1F4CC} Key Takeaways:</p>
<ul>
<li>Grasp the fundamental differences between WAF and IPS, ensuring you choose the right tool for your security needs.</li>
<li>Gain practical insights into configuring and optimizing NAXSI for robust web application protection.</li>
<li>Understand the broad spectrum of threats that IPS counters, from DoS attacks to exploits across various protocols.</li>
</ul>
<p>Whether you\u2019re a budding security enthusiast or a seasoned professional, this guide offers a deep dive into the world of network security. With detailed explanations, practical examples, and expert insights, you\u2019ll be well on your way to fortifying your digital defenses.</p>
<p>\u{1F517} Step up your security game and ensure your network remains breach-proof! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-waf-and-ips-intrusion-prevention-system-web-application-firewall-3ea21467b334">https://medium.com/@gpiechnik/what-is-waf-and-ips-intrusion-prevention-system-web-application-firewall-3ea21467b334</a></p>`),iu={title:"What is WAF and IPS (Intrusion Prevention System & Web Application Firewall)",publishedAt:"2023-05-30T00:00:00.000Z",description:"\u{1F510} Demystifying Network Security: IPS vs. WAF \u{1F510}",slug:"what-is-waf-and-ips",isPublish:!0},ou="/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md",su=void 0;au[Symbol.for("astro.needsHeadRendering")]=!0});var lu={};u(lu,{default:()=>eA});async function YC(){return Promise.resolve().then(()=>(cu(),ru))}var ZC,XC,QC,eA,du=l(()=>{"use strict";ZC="@@ASTRO-LINKS@@",XC="@@ASTRO-STYLES@@",QC="@@ASTRO-SCRIPTS@@",eA={__astroPropagation:!0,getMod:YC,collectedLinks:ZC,collectedStyles:XC,collectedScripts:QC}});var gu={};u(gu,{Content:()=>fu,compiledContent:()=>iA,default:()=>fu,file:()=>hu,frontmatter:()=>pu,getHeadings:()=>oA,images:()=>_n,rawContent:()=>nA,url:()=>mu});function tA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:_n[i].src,..._n[i].attributes}))}function nA(){return`
## Metasploit

Dive deep into the world of ethical hacking with Metasploit, the renowned open-source penetration testing tool. Whether you're a cybersecurity enthusiast or a seasoned professional, this guide will walk you through the intricacies of Metasploit, ensuring you're equipped to tackle real-world security challenges.

\u{1F50D} Here's a sneak peek of what's inside:

- Metasploit Unveiled: Get acquainted with the Metasploit framework, its interface, and its vast capabilities.
- First Steps: Understand the initial launch, the captivating ASCII art, and the plethora of modules available at your fingertips.
- Navigating the Modules: Delve into exploits, payloads, encoders, and more. Learn how each module functions and when to use them.
- Hands-on Practice: Follow a step-by-step walkthrough as we target a vulnerable machine, exploit its weaknesses, and gain access.
- From Meterpreter to Shell: Transition smoothly between different shells and understand the power and flexibility they offer.
- Password Cracking & Beyond: Discover how to extract and crack password hashes, and the thrill of hunting for hidden flags.
- Cheatsheet: A quick reference guide to Metasploit commands, ensuring you're always ready for action.

\u{1F4CC} Key Takeaways:

- Grasp the importance of ethical hacking and the role of tools like Metasploit in strengthening cybersecurity.
- Understand the various modules within Metasploit and how they interplay to create a successful penetration test.
- Gain hands-on experience with real-world examples, ensuring you're ready to tackle live scenarios.

Whether you're just starting out in the world of ethical hacking or looking to refine your skills, this guide offers a comprehensive look into the power and potential of Metasploit. With detailed explanations, practical examples, and expert insights, you'll be well on your way to mastering the art of ethical hacking.

\u{1F517} Unlock the potential of Metasploit and step into the world of ethical hacking! \u{1F517}

Link: https://medium.com/@gpiechnik/metasploit-for-pentesters-explained-de7baa4c378d
`}function iA(){return uu}function oA(){return[{depth:2,slug:"metasploit",text:"Metasploit"}]}async function fu(){let{layout:e,...t}=pu;return t.file=hu,t.url=mu,g(m,{"set:html":uu})}var t1,o1,_n,uu,pu,hu,mu,yu=l(()=>{"use strict";A();t1=h(b(),1);v();k();o1=h(x(),1);S();C();_n={};uu=tA(`<h2 id="metasploit">Metasploit</h2>
<p>Dive deep into the world of ethical hacking with Metasploit, the renowned open-source penetration testing tool. Whether you\u2019re a cybersecurity enthusiast or a seasoned professional, this guide will walk you through the intricacies of Metasploit, ensuring you\u2019re equipped to tackle real-world security challenges.</p>
<p>\u{1F50D} Here\u2019s a sneak peek of what\u2019s inside:</p>
<ul>
<li>Metasploit Unveiled: Get acquainted with the Metasploit framework, its interface, and its vast capabilities.</li>
<li>First Steps: Understand the initial launch, the captivating ASCII art, and the plethora of modules available at your fingertips.</li>
<li>Navigating the Modules: Delve into exploits, payloads, encoders, and more. Learn how each module functions and when to use them.</li>
<li>Hands-on Practice: Follow a step-by-step walkthrough as we target a vulnerable machine, exploit its weaknesses, and gain access.</li>
<li>From Meterpreter to Shell: Transition smoothly between different shells and understand the power and flexibility they offer.</li>
<li>Password Cracking &#x26; Beyond: Discover how to extract and crack password hashes, and the thrill of hunting for hidden flags.</li>
<li>Cheatsheet: A quick reference guide to Metasploit commands, ensuring you\u2019re always ready for action.</li>
</ul>
<p>\u{1F4CC} Key Takeaways:</p>
<ul>
<li>Grasp the importance of ethical hacking and the role of tools like Metasploit in strengthening cybersecurity.</li>
<li>Understand the various modules within Metasploit and how they interplay to create a successful penetration test.</li>
<li>Gain hands-on experience with real-world examples, ensuring you\u2019re ready to tackle live scenarios.</li>
</ul>
<p>Whether you\u2019re just starting out in the world of ethical hacking or looking to refine your skills, this guide offers a comprehensive look into the power and potential of Metasploit. With detailed explanations, practical examples, and expert insights, you\u2019ll be well on your way to mastering the art of ethical hacking.</p>
<p>\u{1F517} Unlock the potential of Metasploit and step into the world of ethical hacking! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/metasploit-for-pentesters-explained-de7baa4c378d">https://medium.com/@gpiechnik/metasploit-for-pentesters-explained-de7baa4c378d</a></p>`),pu={title:"Metasploit explained for pentesters",publishedAt:"2023-05-29T00:00:00.000Z",description:"\u{1F513} Metasploit Unleashed: A Comprehensive Guide to Ethical Hacking \u{1F513}",slug:"metasploit-explained",isPublish:!0},hu="/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md",mu=void 0;fu[Symbol.for("astro.needsHeadRendering")]=!0});var wu={};u(wu,{default:()=>lA});async function sA(){return Promise.resolve().then(()=>(yu(),gu))}var aA,rA,cA,lA,Du=l(()=>{"use strict";aA="@@ASTRO-LINKS@@",rA="@@ASTRO-STYLES@@",cA="@@ASTRO-SCRIPTS@@",lA={__astroPropagation:!0,getMod:sA,collectedLinks:aA,collectedStyles:rA,collectedScripts:cA}});var Cu={};u(Cu,{Content:()=>Su,compiledContent:()=>pA,default:()=>Su,file:()=>ku,frontmatter:()=>vu,getHeadings:()=>hA,images:()=>Ln,rawContent:()=>uA,url:()=>xu});function dA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Ln[i].src,...Ln[i].attributes}))}function uA(){return`
## Content Security Policy Explained

In the ever-evolving landscape of cybersecurity, the Content Security Policy (CSP) stands as a formidable defense mechanism against web-based threats. But what exactly is CSP, and why should every pentester have it in their arsenal?

\u{1F50D} Here's what you'll uncover in this guide:

- CSP Unveiled: Get a comprehensive understanding of CSP, a security feature that dictates how resources on a web page can be loaded, offering a robust shield against various web-based attacks.
- Protection Mechanisms: Delve into the myriad ways CSP safeguards against malicious activities, from restricting inline scripts to blocking unsafe external sources.
- CSP Directives: Discover the heart of CSP - its directives. Learn how they guide browsers on resource loading, document properties, navigation, reporting settings, and more.
- CSP in Action: Walk through real-world examples of CSP configurations. Whether it's ensuring all resources are hosted on the same domain or encrypting all requests, see how CSP directives can be tailored to meet specific security needs.

\u{1F4CC} Key Takeaways:

- Understand the significance of structuring code to prevent malicious injections.
- Recognize the potential dangers of functions like eval and the importance of restricting them.
- Grasp the versatility of CSP directives and their pivotal role in enhancing web security.

Whether you're a seasoned pentester, a web developer, or someone passionate about web security, this guide offers a deep dive into the intricacies of CSP. With detailed explanations, practical examples, and expert insights, you'll be equipped to leverage CSP to its fullest potential, ensuring a safer web experience for all.

\u{1F517} Stay informed, stay secure, and let CSP be your web's guardian! \u{1F517}

Link: https://medium.com/@gpiechnik/content-security-policy-explained-ab076cde3e
`}function pA(){return bu}function hA(){return[{depth:2,slug:"content-security-policy-explained",text:"Content Security Policy Explained"}]}async function Su(){let{layout:e,...t}=vu;return t.file=ku,t.url=xu,g(m,{"set:html":bu})}var c1,u1,Ln,bu,vu,ku,xu,Au=l(()=>{"use strict";A();c1=h(b(),1);v();k();u1=h(x(),1);S();C();Ln={};bu=dA(`<h2 id="content-security-policy-explained">Content Security Policy Explained</h2>
<p>In the ever-evolving landscape of cybersecurity, the Content Security Policy (CSP) stands as a formidable defense mechanism against web-based threats. But what exactly is CSP, and why should every pentester have it in their arsenal?</p>
<p>\u{1F50D} Here\u2019s what you\u2019ll uncover in this guide:</p>
<ul>
<li>CSP Unveiled: Get a comprehensive understanding of CSP, a security feature that dictates how resources on a web page can be loaded, offering a robust shield against various web-based attacks.</li>
<li>Protection Mechanisms: Delve into the myriad ways CSP safeguards against malicious activities, from restricting inline scripts to blocking unsafe external sources.</li>
<li>CSP Directives: Discover the heart of CSP - its directives. Learn how they guide browsers on resource loading, document properties, navigation, reporting settings, and more.</li>
<li>CSP in Action: Walk through real-world examples of CSP configurations. Whether it\u2019s ensuring all resources are hosted on the same domain or encrypting all requests, see how CSP directives can be tailored to meet specific security needs.</li>
</ul>
<p>\u{1F4CC} Key Takeaways:</p>
<ul>
<li>Understand the significance of structuring code to prevent malicious injections.</li>
<li>Recognize the potential dangers of functions like eval and the importance of restricting them.</li>
<li>Grasp the versatility of CSP directives and their pivotal role in enhancing web security.</li>
</ul>
<p>Whether you\u2019re a seasoned pentester, a web developer, or someone passionate about web security, this guide offers a deep dive into the intricacies of CSP. With detailed explanations, practical examples, and expert insights, you\u2019ll be equipped to leverage CSP to its fullest potential, ensuring a safer web experience for all.</p>
<p>\u{1F517} Stay informed, stay secure, and let CSP be your web\u2019s guardian! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/content-security-policy-explained-ab076cde3e">https://medium.com/@gpiechnik/content-security-policy-explained-ab076cde3e</a></p>`),vu={title:"Content Security Policy explained",publishedAt:"2023-05-28T00:00:00.000Z",description:"\u{1F6E1}\uFE0F Mastering Content Security Policy: A Deep Dive into Web Security \u{1F6E1}\uFE0F",slug:"content-security-policy-explained",isPublish:!0},ku="/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md",xu=void 0;Su[Symbol.for("astro.needsHeadRendering")]=!0});var Fu={};u(Fu,{default:()=>wA});async function mA(){return Promise.resolve().then(()=>(Au(),Cu))}var fA,gA,yA,wA,Eu=l(()=>{"use strict";fA="@@ASTRO-LINKS@@",gA="@@ASTRO-STYLES@@",yA="@@ASTRO-SCRIPTS@@",wA={__astroPropagation:!0,getMod:mA,collectedLinks:fA,collectedStyles:gA,collectedScripts:yA}});var _u={};u(_u,{Content:()=>Iu,compiledContent:()=>vA,default:()=>Iu,file:()=>Ru,frontmatter:()=>Pu,getHeadings:()=>kA,images:()=>Bn,rawContent:()=>bA,url:()=>ju});function DA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Bn[i].src,...Bn[i].attributes}))}function bA(){return`
## OSINT with theHarvester and h8mail

In the vast realm of cybersecurity, information is power. But what if you could harness this power to uncover potential vulnerabilities associated with an email address? Today, we're diving deep into the world of email intelligence, where we'll explore how to gather emails and analyze them for known breaches.

\u{1F680} Here's what you'll uncover:

- theHarvester: Discover the power of this Python script designed for white intelligence. Learn how it can extract emails, usernames, subdomains, and more from public sources, giving you a comprehensive view of a domain's digital footprint.
- h8mail: Go beyond just gathering emails. With h8mail, you can check if an email has been compromised in past breaches. Using various APIs and local databases, this tool provides a detailed analysis of potential vulnerabilities associated with an email address.

\u{1F4CC} Hands-on Examples: Dive into real-world command-line examples, outputs, and interpretations. See how tools like theHarvester and h8mail can be used in tandem to provide a holistic view of email-related vulnerabilities.

\u{1F510} Ethical Considerations: While these tools offer powerful insights, it's crucial to use them responsibly. Always ensure you have the necessary permissions and are adhering to ethical practices.

Whether you're a cybersecurity professional, a digital investigator, or just curious about the world of email intelligence, this guide offers a comprehensive overview of tools and techniques to enhance your email analysis capabilities. With step-by-step instructions, expert insights, and practical examples, you'll be well-equipped to navigate the intricate world of email intelligence.

\u{1F517} Stay informed, stay ethical, and always prioritize the security and privacy of digital assets! \u{1F517}

Link: https://medium.com/@gpiechnik/search-for-sensitive-data-using-theharvester-and-h8mail-tools-d2a3772d2a32
`}function vA(){return Tu}function kA(){return[{depth:2,slug:"osint-with-theharvester-and-h8mail",text:"OSINT with theHarvester and h8mail"}]}async function Iu(){let{layout:e,...t}=Pu;return t.file=Ru,t.url=ju,g(m,{"set:html":Tu})}var f1,w1,Bn,Tu,Pu,Ru,ju,Lu=l(()=>{"use strict";A();f1=h(b(),1);v();k();w1=h(x(),1);S();C();Bn={};Tu=DA(`<h2 id="osint-with-theharvester-and-h8mail">OSINT with theHarvester and h8mail</h2>
<p>In the vast realm of cybersecurity, information is power. But what if you could harness this power to uncover potential vulnerabilities associated with an email address? Today, we\u2019re diving deep into the world of email intelligence, where we\u2019ll explore how to gather emails and analyze them for known breaches.</p>
<p>\u{1F680} Here\u2019s what you\u2019ll uncover:</p>
<ul>
<li>theHarvester: Discover the power of this Python script designed for white intelligence. Learn how it can extract emails, usernames, subdomains, and more from public sources, giving you a comprehensive view of a domain\u2019s digital footprint.</li>
<li>h8mail: Go beyond just gathering emails. With h8mail, you can check if an email has been compromised in past breaches. Using various APIs and local databases, this tool provides a detailed analysis of potential vulnerabilities associated with an email address.</li>
</ul>
<p>\u{1F4CC} Hands-on Examples: Dive into real-world command-line examples, outputs, and interpretations. See how tools like theHarvester and h8mail can be used in tandem to provide a holistic view of email-related vulnerabilities.</p>
<p>\u{1F510} Ethical Considerations: While these tools offer powerful insights, it\u2019s crucial to use them responsibly. Always ensure you have the necessary permissions and are adhering to ethical practices.</p>
<p>Whether you\u2019re a cybersecurity professional, a digital investigator, or just curious about the world of email intelligence, this guide offers a comprehensive overview of tools and techniques to enhance your email analysis capabilities. With step-by-step instructions, expert insights, and practical examples, you\u2019ll be well-equipped to navigate the intricate world of email intelligence.</p>
<p>\u{1F517} Stay informed, stay ethical, and always prioritize the security and privacy of digital assets! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/search-for-sensitive-data-using-theharvester-and-h8mail-tools-d2a3772d2a32">https://medium.com/@gpiechnik/search-for-sensitive-data-using-theharvester-and-h8mail-tools-d2a3772d2a32</a></p>`),Pu={title:"Search for sensitive data using theHarvester and h8mail tools",publishedAt:"2023-05-27T00:00:00.000Z",description:"\u{1F50D} Email Intelligence: From Harvesting to Breach Analysis \u{1F50D}",slug:"the-harvester-and-h8mail-osint",isPublish:!0},Ru="/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md",ju=void 0;Iu[Symbol.for("astro.needsHeadRendering")]=!0});var Bu={};u(Bu,{default:()=>FA});async function xA(){return Promise.resolve().then(()=>(Lu(),_u))}var SA,CA,AA,FA,Wu=l(()=>{"use strict";SA="@@ASTRO-LINKS@@",CA="@@ASTRO-STYLES@@",AA="@@ASTRO-SCRIPTS@@",FA={__astroPropagation:!0,getMod:xA,collectedLinks:SA,collectedStyles:CA,collectedScripts:AA}});var Gu={};u(Gu,{Content:()=>zu,compiledContent:()=>PA,default:()=>zu,file:()=>Nu,frontmatter:()=>Ou,getHeadings:()=>RA,images:()=>Wn,rawContent:()=>TA,url:()=>Mu});function EA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Wn[i].src,...Wn[i].attributes}))}function TA(){return`
## Rogue access point attack

Ever heard of the saying, "Knowing is half the battle"? In the world of cybersecurity, this couldn't be truer. Reconnaissance is the foundation of any successful penetration test, and tools like nmap are the unsung heroes of this phase. But did you know that nmap is more than just a port scanner?

\u{1F680} In this exploration, you'll discover:

- Port Statuses Decoded: Dive into the intricacies of port statuses like 'open', 'closed', 'filtered', and more. Understand what each status means and how it impacts your recon process.
- Scanning Techniques Unveiled: From the commonly used TCP SYN scan to the lesser-known Maimon TCP Scan, get a comprehensive overview of the various scanning techniques nmap offers.
- Operating System Detection: Learn how nmap can give you insights into the potential operating system of a target, aiding in further exploitation.
- Vulnerability Scanning with NSE Scripts: Uncover the power of nmap's scripting engine and how it can be leveraged to identify vulnerabilities in a target system.

\u{1F4CC} Sample Commands & Outputs: Get hands-on with real-world examples, commands, and their outputs. See how different scans can yield varied results and how to interpret them.

\u{1F510} Safety First: While nmap is a powerful tool, it's essential to use it responsibly. Always ensure you have permission before scanning any network or system.

Whether you're a seasoned penetration tester, a cybersecurity enthusiast, or just curious about the world of ethical hacking, this guide offers a deep dive into one of the most versatile tools in a hacker's arsenal. With detailed explanations, real-world examples, and expert insights, you'll be equipped to use nmap to its fullest potential.

\u{1F517} Stay curious, keep learning, and always prioritize ethical practices in the ever-evolving world of cybersecurity! \u{1F517}

Link: https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda`}function PA(){return $u}function RA(){return[{depth:2,slug:"rogue-access-point-attack",text:"Rogue access point attack"}]}async function zu(){let{layout:e,...t}=Ou;return t.file=Nu,t.url=Mu,g(m,{"set:html":$u})}var k1,C1,Wn,$u,Ou,Nu,Mu,Uu=l(()=>{"use strict";A();k1=h(b(),1);v();k();C1=h(x(),1);S();C();Wn={};$u=EA(`<h2 id="rogue-access-point-attack">Rogue access point attack</h2>
<p>Ever heard of the saying, \u201CKnowing is half the battle\u201D? In the world of cybersecurity, this couldn\u2019t be truer. Reconnaissance is the foundation of any successful penetration test, and tools like nmap are the unsung heroes of this phase. But did you know that nmap is more than just a port scanner?</p>
<p>\u{1F680} In this exploration, you\u2019ll discover:</p>
<ul>
<li>Port Statuses Decoded: Dive into the intricacies of port statuses like \u2018open\u2019, \u2018closed\u2019, \u2018filtered\u2019, and more. Understand what each status means and how it impacts your recon process.</li>
<li>Scanning Techniques Unveiled: From the commonly used TCP SYN scan to the lesser-known Maimon TCP Scan, get a comprehensive overview of the various scanning techniques nmap offers.</li>
<li>Operating System Detection: Learn how nmap can give you insights into the potential operating system of a target, aiding in further exploitation.</li>
<li>Vulnerability Scanning with NSE Scripts: Uncover the power of nmap\u2019s scripting engine and how it can be leveraged to identify vulnerabilities in a target system.</li>
</ul>
<p>\u{1F4CC} Sample Commands &#x26; Outputs: Get hands-on with real-world examples, commands, and their outputs. See how different scans can yield varied results and how to interpret them.</p>
<p>\u{1F510} Safety First: While nmap is a powerful tool, it\u2019s essential to use it responsibly. Always ensure you have permission before scanning any network or system.</p>
<p>Whether you\u2019re a seasoned penetration tester, a cybersecurity enthusiast, or just curious about the world of ethical hacking, this guide offers a deep dive into one of the most versatile tools in a hacker\u2019s arsenal. With detailed explanations, real-world examples, and expert insights, you\u2019ll be equipped to use nmap to its fullest potential.</p>
<p>\u{1F517} Stay curious, keep learning, and always prioritize ethical practices in the ever-evolving world of cybersecurity! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda">https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda</a></p>`),Ou={title:"Scanning ports and finding network vulnerabilities using nmap",publishedAt:"2023-05-26T00:00:00.000Z",description:"\u{1F50D} Nmap Deep Dive: Beyond Basic Port Scanning \u{1F50D}",slug:"scanning-ports-and-finding-network-vulnerabilities-with-nmap",isPublish:!0},Nu="/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md",Mu=void 0;zu[Symbol.for("astro.needsHeadRendering")]=!0});var qu={};u(qu,{default:()=>BA});async function jA(){return Promise.resolve().then(()=>(Uu(),Gu))}var IA,_A,LA,BA,Hu=l(()=>{"use strict";IA="@@ASTRO-LINKS@@",_A="@@ASTRO-STYLES@@",LA="@@ASTRO-SCRIPTS@@",BA={__astroPropagation:!0,getMod:jA,collectedLinks:IA,collectedStyles:_A,collectedScripts:LA}});var Xu={};u(Xu,{Content:()=>Zu,compiledContent:()=>OA,default:()=>Zu,file:()=>Ju,frontmatter:()=>Ku,getHeadings:()=>NA,images:()=>$n,rawContent:()=>$A,url:()=>Yu});function WA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:$n[i].src,...$n[i].attributes}))}function $A(){return`
## Rogue access point attack

Imagine sipping on your favorite latte at a coffee shop, working on your next big project. You connect to the free Wi-Fi, thinking nothing of it. But lurking in the shadows is a threat most don't even realize exists: the rogue access point attack.

\u{1F50D} Dive into this exploration and discover:

- Wi-Fi 101: Understand the basics of routers and access points, and how they form the backbone of our daily internet connections.
- The Rogue Threat: Learn about rogue access points, unauthorized installations that can intercept your data and pose significant threats.
- Wifipumpkin3 in Action: Get a hands-on look at how tools like Wifipumpkin3 can be used to simulate these attacks, capturing sensitive user data.
- Behind the Scenes: Witness the step-by-step process of setting up a rogue access point, from changing SSID names to capturing login credentials.
- Protecting Yourself: Understand the risks of public Wi-Fi and the importance of being cautious about the networks you connect to.

Whether you're a cybersecurity enthusiast, a digital nomad, or just someone who enjoys a coffee shop workspace, this guide offers a deep dive into the hidden dangers of public Wi-Fi. With real-world demonstrations, technical breakdowns, and expert insights, you'll be equipped to navigate the digital world with heightened awareness and caution.

\u{1F510} Stay connected, but more importantly, stay safe in the vast world of the internet! \u{1F510}

Link: https://medium.com/@gpiechnik/scary-rogue-access-point-attack-b58da20d74a3
`}function OA(){return Vu}function NA(){return[{depth:2,slug:"rogue-access-point-attack",text:"Rogue access point attack"}]}async function Zu(){let{layout:e,...t}=Ku;return t.file=Ju,t.url=Yu,g(m,{"set:html":Vu})}var T1,j1,$n,Vu,Ku,Ju,Yu,Qu=l(()=>{"use strict";A();T1=h(b(),1);v();k();j1=h(x(),1);S();C();$n={};Vu=WA(`<h2 id="rogue-access-point-attack">Rogue access point attack</h2>
<p>Imagine sipping on your favorite latte at a coffee shop, working on your next big project. You connect to the free Wi-Fi, thinking nothing of it. But lurking in the shadows is a threat most don\u2019t even realize exists: the rogue access point attack.</p>
<p>\u{1F50D} Dive into this exploration and discover:</p>
<ul>
<li>Wi-Fi 101: Understand the basics of routers and access points, and how they form the backbone of our daily internet connections.</li>
<li>The Rogue Threat: Learn about rogue access points, unauthorized installations that can intercept your data and pose significant threats.</li>
<li>Wifipumpkin3 in Action: Get a hands-on look at how tools like Wifipumpkin3 can be used to simulate these attacks, capturing sensitive user data.</li>
<li>Behind the Scenes: Witness the step-by-step process of setting up a rogue access point, from changing SSID names to capturing login credentials.</li>
<li>Protecting Yourself: Understand the risks of public Wi-Fi and the importance of being cautious about the networks you connect to.</li>
</ul>
<p>Whether you\u2019re a cybersecurity enthusiast, a digital nomad, or just someone who enjoys a coffee shop workspace, this guide offers a deep dive into the hidden dangers of public Wi-Fi. With real-world demonstrations, technical breakdowns, and expert insights, you\u2019ll be equipped to navigate the digital world with heightened awareness and caution.</p>
<p>\u{1F510} Stay connected, but more importantly, stay safe in the vast world of the internet! \u{1F510}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/scary-rogue-access-point-attack-b58da20d74a3">https://medium.com/@gpiechnik/scary-rogue-access-point-attack-b58da20d74a3</a></p>`),Ku={title:"Scary Rogue Access Point attack",publishedAt:"2023-05-25T00:00:00.000Z",description:"\u{1F4E1} Rogue Access Points: The Silent Threat in Public Wi-Fi \u{1F4E1}",slug:"scary-rogue-access-point-attack",isPublish:!0},Ju="/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md",Yu=void 0;Zu[Symbol.for("astro.needsHeadRendering")]=!0});var ep={};u(ep,{default:()=>qA});async function MA(){return Promise.resolve().then(()=>(Qu(),Xu))}var zA,GA,UA,qA,tp=l(()=>{"use strict";zA="@@ASTRO-LINKS@@",GA="@@ASTRO-STYLES@@",UA="@@ASTRO-SCRIPTS@@",qA={__astroPropagation:!0,getMod:MA,collectedLinks:zA,collectedStyles:GA,collectedScripts:UA}});var rp={};u(rp,{Content:()=>ap,compiledContent:()=>KA,default:()=>ap,file:()=>op,frontmatter:()=>ip,getHeadings:()=>JA,images:()=>On,rawContent:()=>VA,url:()=>sp});function HA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:On[i].src,...On[i].attributes}))}function VA(){return`
## What is a 0 day?

Venture into the shadowy realm of zero-day vulnerabilities, a domain where threats emerge from the darkness, catching even the most vigilant off guard. These vulnerabilities, named for their fresh discovery, are a ticking time bomb in the world of cybersecurity.

\u{1F4CC} Inside this exploration, you'll discover:

- Decoding Zero-Days: Grasp the essence of 0-day vulnerabilities, understanding their origin and the imminent danger they pose.
- Spotlight on Recent Attacks: Delve into real-world examples, from the widely-used Zoom application to the intricate workings of Ubuntu systems. Witness firsthand the vulnerabilities that have shaken the digital world.
- Behind the Scenes: Dive deep into the code, unraveling the vulnerabilities that have been exploited. From SQL injections to remote code executions, get an up-close look at the mechanics of these threats.
- The Impact: Understand the ramifications of these vulnerabilities, from unauthorized access to potential data breaches. Realize the scale of the threat and the entities at risk.
- In-Depth Analysis: Access detailed sources, from technical write-ups to official CVE entries, ensuring you're equipped with comprehensive knowledge on the subject.

Whether you're a cybersecurity professional, a tech enthusiast, or someone keen on understanding the digital landscape's evolving threats, this guide offers a panoramic view of zero-day vulnerabilities. With real-world instances, technical breakdowns, and expert insights, you'll be well-prepared to navigate the treacherous waters of 0-day threats.

\u{1F310} Stay informed, stay vigilant, and fortify your defenses against the unseen dangers of the digital world! \u{1F310}

Link: https://medium.com/@gpiechnik/what-is-a-zero-day-0-day-exploit-real-life-examples-261c3145cc2a
`}function KA(){return np}function JA(){return[{depth:2,slug:"what-is-a-0-day",text:"What is a 0 day?"}]}async function ap(){let{layout:e,...t}=ip;return t.file=op,t.url=sp,g(m,{"set:html":np})}var B1,O1,On,np,ip,op,sp,cp=l(()=>{"use strict";A();B1=h(b(),1);v();k();O1=h(x(),1);S();C();On={};np=HA(`<h2 id="what-is-a-0-day">What is a 0 day?</h2>
<p>Venture into the shadowy realm of zero-day vulnerabilities, a domain where threats emerge from the darkness, catching even the most vigilant off guard. These vulnerabilities, named for their fresh discovery, are a ticking time bomb in the world of cybersecurity.</p>
<p>\u{1F4CC} Inside this exploration, you\u2019ll discover:</p>
<ul>
<li>Decoding Zero-Days: Grasp the essence of 0-day vulnerabilities, understanding their origin and the imminent danger they pose.</li>
<li>Spotlight on Recent Attacks: Delve into real-world examples, from the widely-used Zoom application to the intricate workings of Ubuntu systems. Witness firsthand the vulnerabilities that have shaken the digital world.</li>
<li>Behind the Scenes: Dive deep into the code, unraveling the vulnerabilities that have been exploited. From SQL injections to remote code executions, get an up-close look at the mechanics of these threats.</li>
<li>The Impact: Understand the ramifications of these vulnerabilities, from unauthorized access to potential data breaches. Realize the scale of the threat and the entities at risk.</li>
<li>In-Depth Analysis: Access detailed sources, from technical write-ups to official CVE entries, ensuring you\u2019re equipped with comprehensive knowledge on the subject.</li>
</ul>
<p>Whether you\u2019re a cybersecurity professional, a tech enthusiast, or someone keen on understanding the digital landscape\u2019s evolving threats, this guide offers a panoramic view of zero-day vulnerabilities. With real-world instances, technical breakdowns, and expert insights, you\u2019ll be well-prepared to navigate the treacherous waters of 0-day threats.</p>
<p>\u{1F310} Stay informed, stay vigilant, and fortify your defenses against the unseen dangers of the digital world! \u{1F310}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-a-zero-day-0-day-exploit-real-life-examples-261c3145cc2a">https://medium.com/@gpiechnik/what-is-a-zero-day-0-day-exploit-real-life-examples-261c3145cc2a</a></p>`),ip={title:"What is a zero-day (0-day) exploit? Real-life examples",publishedAt:"2023-05-24T00:00:00.000Z",description:"\u{1F6A8} Zero-Day Alert: Unmasking the Silent Threats \u{1F6A8}",slug:"what-is-a-zero-day-exploit",isPublish:!0},op="/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md",sp=void 0;ap[Symbol.for("astro.needsHeadRendering")]=!0});var lp={};u(lp,{default:()=>e9});async function YA(){return Promise.resolve().then(()=>(cp(),rp))}var ZA,XA,QA,e9,dp=l(()=>{"use strict";ZA="@@ASTRO-LINKS@@",XA="@@ASTRO-STYLES@@",QA="@@ASTRO-SCRIPTS@@",e9={__astroPropagation:!0,getMod:YA,collectedLinks:ZA,collectedStyles:XA,collectedScripts:QA}});var gp={};u(gp,{Content:()=>fp,compiledContent:()=>i9,default:()=>fp,file:()=>hp,frontmatter:()=>pp,getHeadings:()=>o9,images:()=>Nn,rawContent:()=>n9,url:()=>mp});function t9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Nn[i].src,...Nn[i].attributes}))}function n9(){return`
## Insecure deserialization

Embark on a journey into the intricate world of unsecured data deserialization, a lurking threat that has earned its place among the top ten most critical web application security risks. While the concept of serialization might seem benign, its misuse can open the doors to a myriad of cyber-attacks.

\u{1F4CC} Inside this guide, you'll uncover:

- Serialization Simplified: Decode the essence of serialization and its counterpart, deserialization. Understand how these processes play a pivotal role in data transmission and how they can be exploited.
- Real-World Risks: Dive into actual instances of unsafe deserialization. From WordPress plugins to Python libraries, witness how even the most unsuspecting code can be manipulated for malicious intent.
- CVE Chronicles: Explore detailed breakdowns of specific CVE entries, shedding light on the vulnerabilities in popular tools and libraries. Understand the mechanics of these threats and the potential damage they can inflict.
- Code Insights: Delve deep into vulnerable code snippets, dissecting their structure and pinpointing the exact lines that can be exploited. Equip yourself with the knowledge to identify and rectify such vulnerabilities in your own projects.

Whether you're a seasoned developer, a cybersecurity enthusiast, or someone keen on understanding the digital threats of today, this guide offers a comprehensive look into the world of unsecured data deserialization. With real-world examples, detailed explanations, and insights into the underlying code, you'll be well-equipped to navigate and fortify against these lurking dangers.

\u{1F310} Dive deep, master the intricacies of deserialization, and ensure your digital assets remain impervious to threats! \u{1F310}

Link: https://medium.com/@gpiechnik/what-is-insecure-deserialization-4183daa2fb28
`}function i9(){return up}function o9(){return[{depth:2,slug:"insecure-deserialization",text:"Insecure deserialization"}]}async function fp(){let{layout:e,...t}=pp;return t.file=hp,t.url=mp,g(m,{"set:html":up})}var G1,H1,Nn,up,pp,hp,mp,yp=l(()=>{"use strict";A();G1=h(b(),1);v();k();H1=h(x(),1);S();C();Nn={};up=t9(`<h2 id="insecure-deserialization">Insecure deserialization</h2>
<p>Embark on a journey into the intricate world of unsecured data deserialization, a lurking threat that has earned its place among the top ten most critical web application security risks. While the concept of serialization might seem benign, its misuse can open the doors to a myriad of cyber-attacks.</p>
<p>\u{1F4CC} Inside this guide, you\u2019ll uncover:</p>
<ul>
<li>Serialization Simplified: Decode the essence of serialization and its counterpart, deserialization. Understand how these processes play a pivotal role in data transmission and how they can be exploited.</li>
<li>Real-World Risks: Dive into actual instances of unsafe deserialization. From WordPress plugins to Python libraries, witness how even the most unsuspecting code can be manipulated for malicious intent.</li>
<li>CVE Chronicles: Explore detailed breakdowns of specific CVE entries, shedding light on the vulnerabilities in popular tools and libraries. Understand the mechanics of these threats and the potential damage they can inflict.</li>
<li>Code Insights: Delve deep into vulnerable code snippets, dissecting their structure and pinpointing the exact lines that can be exploited. Equip yourself with the knowledge to identify and rectify such vulnerabilities in your own projects.</li>
</ul>
<p>Whether you\u2019re a seasoned developer, a cybersecurity enthusiast, or someone keen on understanding the digital threats of today, this guide offers a comprehensive look into the world of unsecured data deserialization. With real-world examples, detailed explanations, and insights into the underlying code, you\u2019ll be well-equipped to navigate and fortify against these lurking dangers.</p>
<p>\u{1F310} Dive deep, master the intricacies of deserialization, and ensure your digital assets remain impervious to threats! \u{1F310}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-insecure-deserialization-4183daa2fb28">https://medium.com/@gpiechnik/what-is-insecure-deserialization-4183daa2fb28</a></p>`),pp={title:"What is insecure deserialization",publishedAt:"2023-05-23T00:00:00.000Z",description:"\u{1F510} Deserialization Dangers: Unraveling the Web of Vulnerabilities \u{1F510}",slug:"what-is-insecure-deserialization",isPublish:!0},hp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md",mp=void 0;fp[Symbol.for("astro.needsHeadRendering")]=!0});var wp={};u(wp,{default:()=>l9});async function s9(){return Promise.resolve().then(()=>(yp(),gp))}var a9,r9,c9,l9,Dp=l(()=>{"use strict";a9="@@ASTRO-LINKS@@",r9="@@ASTRO-STYLES@@",c9="@@ASTRO-SCRIPTS@@",l9={__astroPropagation:!0,getMod:s9,collectedLinks:a9,collectedStyles:r9,collectedScripts:c9}});var Cp={};u(Cp,{Content:()=>Sp,compiledContent:()=>p9,default:()=>Sp,file:()=>kp,frontmatter:()=>vp,getHeadings:()=>h9,images:()=>Mn,rawContent:()=>u9,url:()=>xp});function d9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Mn[i].src,...Mn[i].attributes}))}function u9(){return`
## What is CVE?

Step into the intricate world of CVE, the Common Vulnerabilities and Exposures dictionary, a pivotal resource for cybersecurity professionals and developers alike. As the digital realm expands, so does the need for a standardized system to identify and communicate vulnerabilities. Enter CVE, a beacon in the vast sea of system threats.

\u{1F4CC} Inside this guide, you'll discover:

- CVE 101: Grasp the essence of CVE, its vision, and its role as a crucial industry tool. While it may resemble a database, it's a comprehensive dictionary that categorizes system vulnerabilities and threats.
- Anatomy of a CVE: Dive deep into the structure of a CVE entry. From its unique ID to its detailed description, learn how each CVE provides a snapshot of a specific vulnerability.
- Real-World CVEs: Explore actual CVE entries, from vulnerabilities in popular libraries like go-unarr to issues in content management systems like bycms. Understand the diverse nature of threats, from Path Travelsal attacks to SQL Blind Injections.
- Beyond the Basics: Delve into the nuances of CVEs, like the asynchronous parameters in the ReaderResult class or the intricacies of the RUST language. Equip yourself with the knowledge to decipher even the most complex CVE entries.

Whether you're a cybersecurity veteran, a developer keen on fortifying your code, or a tech enthusiast eager to understand the landscape of system vulnerabilities, this guide offers a comprehensive look into the world of CVEs. Arm yourself with the insights to navigate the maze of system threats and ensure your digital assets remain secure.

\u{1F310} Dive deep, master the art of CVEs, and fortify your digital realm against lurking threats! \u{1F310}

Link: https://medium.com/@gpiechnik/what-are-and-how-to-read-cves-common-vulnerabilities-and-exposures-3aff972cb1bd
`}function p9(){return bp}function h9(){return[{depth:2,slug:"what-is-cve",text:"What is CVE?"}]}async function Sp(){let{layout:e,...t}=vp;return t.file=kp,t.url=xp,g(m,{"set:html":bp})}var Y1,Q1,Mn,bp,vp,kp,xp,Ap=l(()=>{"use strict";A();Y1=h(b(),1);v();k();Q1=h(x(),1);S();C();Mn={};bp=d9(`<h2 id="what-is-cve">What is CVE?</h2>
<p>Step into the intricate world of CVE, the Common Vulnerabilities and Exposures dictionary, a pivotal resource for cybersecurity professionals and developers alike. As the digital realm expands, so does the need for a standardized system to identify and communicate vulnerabilities. Enter CVE, a beacon in the vast sea of system threats.</p>
<p>\u{1F4CC} Inside this guide, you\u2019ll discover:</p>
<ul>
<li>CVE 101: Grasp the essence of CVE, its vision, and its role as a crucial industry tool. While it may resemble a database, it\u2019s a comprehensive dictionary that categorizes system vulnerabilities and threats.</li>
<li>Anatomy of a CVE: Dive deep into the structure of a CVE entry. From its unique ID to its detailed description, learn how each CVE provides a snapshot of a specific vulnerability.</li>
<li>Real-World CVEs: Explore actual CVE entries, from vulnerabilities in popular libraries like go-unarr to issues in content management systems like bycms. Understand the diverse nature of threats, from Path Travelsal attacks to SQL Blind Injections.</li>
<li>Beyond the Basics: Delve into the nuances of CVEs, like the asynchronous parameters in the ReaderResult class or the intricacies of the RUST language. Equip yourself with the knowledge to decipher even the most complex CVE entries.</li>
</ul>
<p>Whether you\u2019re a cybersecurity veteran, a developer keen on fortifying your code, or a tech enthusiast eager to understand the landscape of system vulnerabilities, this guide offers a comprehensive look into the world of CVEs. Arm yourself with the insights to navigate the maze of system threats and ensure your digital assets remain secure.</p>
<p>\u{1F310} Dive deep, master the art of CVEs, and fortify your digital realm against lurking threats! \u{1F310}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-and-how-to-read-cves-common-vulnerabilities-and-exposures-3aff972cb1bd">https://medium.com/@gpiechnik/what-are-and-how-to-read-cves-common-vulnerabilities-and-exposures-3aff972cb1bd</a></p>`),vp={title:"What are and how to read CVEs (Common Vulnerabilities and Exposures)?",publishedAt:"2023-05-22T00:00:00.000Z",description:"\u{1F50D} CVE Uncovered: Navigating the Labyrinth of System Vulnerabilities \u{1F50D}",slug:"what-are-cves-common-vulnerabilities-and-exposures",isPublish:!0},kp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md",xp=void 0;Sp[Symbol.for("astro.needsHeadRendering")]=!0});var Fp={};u(Fp,{default:()=>w9});async function m9(){return Promise.resolve().then(()=>(Ap(),Cp))}var f9,g9,y9,w9,Ep=l(()=>{"use strict";f9="@@ASTRO-LINKS@@",g9="@@ASTRO-STYLES@@",y9="@@ASTRO-SCRIPTS@@",w9={__astroPropagation:!0,getMod:m9,collectedLinks:f9,collectedStyles:g9,collectedScripts:y9}});var _p={};u(_p,{Content:()=>Ip,compiledContent:()=>v9,default:()=>Ip,file:()=>Rp,frontmatter:()=>Pp,getHeadings:()=>k9,images:()=>zn,rawContent:()=>b9,url:()=>jp});function D9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:zn[i].src,...zn[i].attributes}))}function b9(){return`
## Security risks associated with using the git

Embark on an enlightening exploration into the world of Git, the ubiquitous version control system that's become an integral part of every developer's toolkit. While Git's efficiency, transparency, and user-friendliness are undeniable, it's crucial to recognize the potential security pitfalls lurking beneath its surface.

\u{1F4CC} Inside this guide, you'll uncover:

- The .git Directory Dilemma: Discover the widespread vulnerability posed by exposed .git directories, with a staggering 390,000 sites at risk. Learn the importance of safeguarding commit histories and logs, and the critical step of adding .git to your .gitignore.
- The Perils of Exposed Data: Delve into the risky practice of embedding sensitive data directly in code. From API keys to encryption secrets, understand the magnitude of the threat and the tools available to detect such vulnerabilities.
- Commit Authenticity: Dive into the world of GPG keys and the significance of signed commits. Learn how to ensure the integrity of your code changes and protect against malicious commit impersonations.
- Misconfiguration Menace: Examine real-world cases of disastrous Git misconfigurations, like Samsung's leaked SmartThings app source code. Understand the dire consequences of such oversights and the importance of rigorous security checks.

Whether you're a seasoned developer, a budding programmer, or a cybersecurity enthusiast, this guide offers a comprehensive look into the security aspects of Git. Equip yourself with the knowledge to navigate Git's potential pitfalls and fortify your codebase against threats.

\u{1F310} Dive deep, master Git security, and ensure your projects remain uncompromised! \u{1F310}

Link: https://medium.com/@gpiechnik/security-risks-associated-with-using-the-git-version-control-system-4d2be37d401e
`}function v9(){return Tp}function k9(){return[{depth:2,slug:"security-risks-associated-with-using-the-git",text:"Security risks associated with using the git"}]}async function Ip(){let{layout:e,...t}=Pp;return t.file=Rp,t.url=jp,g(m,{"set:html":Tp})}var i7,a7,zn,Tp,Pp,Rp,jp,Lp=l(()=>{"use strict";A();i7=h(b(),1);v();k();a7=h(x(),1);S();C();zn={};Tp=D9(`<h2 id="security-risks-associated-with-using-the-git">Security risks associated with using the git</h2>
<p>Embark on an enlightening exploration into the world of Git, the ubiquitous version control system that\u2019s become an integral part of every developer\u2019s toolkit. While Git\u2019s efficiency, transparency, and user-friendliness are undeniable, it\u2019s crucial to recognize the potential security pitfalls lurking beneath its surface.</p>
<p>\u{1F4CC} Inside this guide, you\u2019ll uncover:</p>
<ul>
<li>The .git Directory Dilemma: Discover the widespread vulnerability posed by exposed .git directories, with a staggering 390,000 sites at risk. Learn the importance of safeguarding commit histories and logs, and the critical step of adding .git to your .gitignore.</li>
<li>The Perils of Exposed Data: Delve into the risky practice of embedding sensitive data directly in code. From API keys to encryption secrets, understand the magnitude of the threat and the tools available to detect such vulnerabilities.</li>
<li>Commit Authenticity: Dive into the world of GPG keys and the significance of signed commits. Learn how to ensure the integrity of your code changes and protect against malicious commit impersonations.</li>
<li>Misconfiguration Menace: Examine real-world cases of disastrous Git misconfigurations, like Samsung\u2019s leaked SmartThings app source code. Understand the dire consequences of such oversights and the importance of rigorous security checks.</li>
</ul>
<p>Whether you\u2019re a seasoned developer, a budding programmer, or a cybersecurity enthusiast, this guide offers a comprehensive look into the security aspects of Git. Equip yourself with the knowledge to navigate Git\u2019s potential pitfalls and fortify your codebase against threats.</p>
<p>\u{1F310} Dive deep, master Git security, and ensure your projects remain uncompromised! \u{1F310}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/security-risks-associated-with-using-the-git-version-control-system-4d2be37d401e">https://medium.com/@gpiechnik/security-risks-associated-with-using-the-git-version-control-system-4d2be37d401e</a></p>`),Pp={title:"Security risks associated with using the git version control system",publishedAt:"2023-05-21T00:00:00.000Z",description:"\u{1F50D} Git Security Deep Dive: Unmasking the Hidden Threats \u{1F50D}",slug:"security-risks-associated-with-using-git",isPublish:!0},Rp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md",jp=void 0;Ip[Symbol.for("astro.needsHeadRendering")]=!0});var Bp={};u(Bp,{default:()=>F9});async function x9(){return Promise.resolve().then(()=>(Lp(),_p))}var S9,C9,A9,F9,Wp=l(()=>{"use strict";S9="@@ASTRO-LINKS@@",C9="@@ASTRO-STYLES@@",A9="@@ASTRO-SCRIPTS@@",F9={__astroPropagation:!0,getMod:x9,collectedLinks:S9,collectedStyles:C9,collectedScripts:A9}});var Gp={};u(Gp,{Content:()=>zp,compiledContent:()=>P9,default:()=>zp,file:()=>Np,frontmatter:()=>Op,getHeadings:()=>R9,images:()=>Gn,rawContent:()=>T9,url:()=>Mp});function E9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Gn[i].src,...Gn[i].attributes}))}function T9(){return`
## Cross Site Request Forgery attack

Embark on a journey into the intricate world of Cross Site Request Forgery (CSRF) attacks, a subtle yet potent threat that often lurks unnoticed. This comprehensive guide sheds light on the nuances of CSRF, revealing how it cleverly forces users into unintended actions within web applications.

\u{1F50D} Inside this guide, you'll discover:

- The Essence of CSRF: Dive deep into the mechanics of CSRF attacks, understanding how they exploit trust and manipulate users into performing unintended actions.
- The Role of Same-Origin Policy: Grasp the foundational concept that underpins CSRF and its relationship with web security.
- Practical CSRF Scenarios: Explore real-world examples that demonstrate the stealth and potency of CSRF attacks, from exposing sensitive data to account takeovers.
- Token-Based Protection: Delve into the Synchronizer Token Pattern, a renowned method to shield against CSRF by generating unpredictable tokens.
- Live Application Analysis: Step into a hands-on demonstration of CSRF in action, complete with illustrative diagrams, sample codes, and a deep dive into the underlying logic.
- Vulnerability Detection: Familiarize yourself with cutting-edge tools like Bolt and XSRFProbe, designed to detect and thwart CSRF vulnerabilities.

Whether you're a cybersecurity enthusiast, web developer, or someone passionate about online safety, this guide offers a holistic view of CSRF, equipping you with the knowledge to identify, understand, and counteract this subtle web menace.

\u{1F310} Dive deep, unravel the mysteries of CSRF, and fortify your web defenses like never before! \u{1F310}

Link: https://medium.com/@gpiechnik/understanding-the-cross-site-request-forgery-csrf-attack-b1dc2374f83
`}function P9(){return $p}function R9(){return[{depth:2,slug:"cross-site-request-forgery-attack",text:"Cross Site Request Forgery attack"}]}async function zp(){let{layout:e,...t}=Op;return t.file=Np,t.url=Mp,g(m,{"set:html":$p})}var d7,h7,Gn,$p,Op,Np,Mp,Up=l(()=>{"use strict";A();d7=h(b(),1);v();k();h7=h(x(),1);S();C();Gn={};$p=E9(`<h2 id="cross-site-request-forgery-attack">Cross Site Request Forgery attack</h2>
<p>Embark on a journey into the intricate world of Cross Site Request Forgery (CSRF) attacks, a subtle yet potent threat that often lurks unnoticed. This comprehensive guide sheds light on the nuances of CSRF, revealing how it cleverly forces users into unintended actions within web applications.</p>
<p>\u{1F50D} Inside this guide, you\u2019ll discover:</p>
<ul>
<li>The Essence of CSRF: Dive deep into the mechanics of CSRF attacks, understanding how they exploit trust and manipulate users into performing unintended actions.</li>
<li>The Role of Same-Origin Policy: Grasp the foundational concept that underpins CSRF and its relationship with web security.</li>
<li>Practical CSRF Scenarios: Explore real-world examples that demonstrate the stealth and potency of CSRF attacks, from exposing sensitive data to account takeovers.</li>
<li>Token-Based Protection: Delve into the Synchronizer Token Pattern, a renowned method to shield against CSRF by generating unpredictable tokens.</li>
<li>Live Application Analysis: Step into a hands-on demonstration of CSRF in action, complete with illustrative diagrams, sample codes, and a deep dive into the underlying logic.</li>
<li>Vulnerability Detection: Familiarize yourself with cutting-edge tools like Bolt and XSRFProbe, designed to detect and thwart CSRF vulnerabilities.</li>
</ul>
<p>Whether you\u2019re a cybersecurity enthusiast, web developer, or someone passionate about online safety, this guide offers a holistic view of CSRF, equipping you with the knowledge to identify, understand, and counteract this subtle web menace.</p>
<p>\u{1F310} Dive deep, unravel the mysteries of CSRF, and fortify your web defenses like never before! \u{1F310}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/understanding-the-cross-site-request-forgery-csrf-attack-b1dc2374f83">https://medium.com/@gpiechnik/understanding-the-cross-site-request-forgery-csrf-attack-b1dc2374f83</a></p>`),Op={title:"Understanding the Cross Site Request Forgery (CSRF) attack",publishedAt:"2023-05-20T00:00:00.000Z",description:"\u{1F510} CSRF Attacks Unveiled: Navigating the Subtle Threats of Web Security \u{1F510}",slug:"cross-site-request-forgery-attack",isPublish:!0},Np="/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md",Mp=void 0;zp[Symbol.for("astro.needsHeadRendering")]=!0});var qp={};u(qp,{default:()=>B9});async function j9(){return Promise.resolve().then(()=>(Up(),Gp))}var I9,_9,L9,B9,Hp=l(()=>{"use strict";I9="@@ASTRO-LINKS@@",_9="@@ASTRO-STYLES@@",L9="@@ASTRO-SCRIPTS@@",B9={__astroPropagation:!0,getMod:j9,collectedLinks:I9,collectedStyles:_9,collectedScripts:L9}});var Xp={};u(Xp,{Content:()=>Zp,compiledContent:()=>O9,default:()=>Zp,file:()=>Jp,frontmatter:()=>Kp,getHeadings:()=>N9,images:()=>Un,rawContent:()=>$9,url:()=>Yp});function W9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Un[i].src,...Un[i].attributes}))}function $9(){return`
## Cross-Origin Resource Sharing (CORS)

Venture into the intricate realm of Cross-Origin Resource Sharing (CORS) and unravel the complexities of web security. This guide offers a deep dive into the foundational principles of CORS, ensuring you're well-equipped to handle cross-origin requests with confidence.

\u{1F50D} Inside this guide, you'll explore:

- The essence of Same-origin policy (SOP): Grasp the fundamental mechanism that governs script and document interactions based on their origin.
- Practical applications of CORS: Delve into real-world scenarios where strict data exchange rules need to be relaxed, from managing multiple environments to facilitating frontend development.
- Cross-Origin Resource Sharing explained: Understand the mechanics of CORS, from its introduction to its practical implementation, ensuring secure HTTP cross-origin requests.
- Simple vs. Non-straight queries: Dive into the nuances of different cross-site requests, complete with illustrative diagrams and sample codes.
- HTTP headers in CORS: Familiarize yourself with the essential request and response headers pivotal to CORS, along with their specifications.

Whether you're a web developer, security enthusiast, or just curious about web protocols, this guide offers a comprehensive overview of CORS, ensuring you have the knowledge to tackle cross-origin challenges head-on.

\u{1F30D} Dive in, explore the world of CORS, and elevate your web security understanding to new heights! \u{1F30D}

Link: https://medium.com/@gpiechnik/cross-origin-resource-sharing-cors-how-does-671c39f8af65
`}function O9(){return Vp}function N9(){return[{depth:2,slug:"cross-origin-resource-sharing-cors",text:"Cross-Origin Resource Sharing (CORS)"}]}async function Zp(){let{layout:e,...t}=Kp;return t.file=Jp,t.url=Yp,g(m,{"set:html":Vp})}var y7,b7,Un,Vp,Kp,Jp,Yp,Qp=l(()=>{"use strict";A();y7=h(b(),1);v();k();b7=h(x(),1);S();C();Un={};Vp=W9(`<h2 id="cross-origin-resource-sharing-cors">Cross-Origin Resource Sharing (CORS)</h2>
<p>Venture into the intricate realm of Cross-Origin Resource Sharing (CORS) and unravel the complexities of web security. This guide offers a deep dive into the foundational principles of CORS, ensuring you\u2019re well-equipped to handle cross-origin requests with confidence.</p>
<p>\u{1F50D} Inside this guide, you\u2019ll explore:</p>
<ul>
<li>The essence of Same-origin policy (SOP): Grasp the fundamental mechanism that governs script and document interactions based on their origin.</li>
<li>Practical applications of CORS: Delve into real-world scenarios where strict data exchange rules need to be relaxed, from managing multiple environments to facilitating frontend development.</li>
<li>Cross-Origin Resource Sharing explained: Understand the mechanics of CORS, from its introduction to its practical implementation, ensuring secure HTTP cross-origin requests.</li>
<li>Simple vs. Non-straight queries: Dive into the nuances of different cross-site requests, complete with illustrative diagrams and sample codes.</li>
<li>HTTP headers in CORS: Familiarize yourself with the essential request and response headers pivotal to CORS, along with their specifications.</li>
</ul>
<p>Whether you\u2019re a web developer, security enthusiast, or just curious about web protocols, this guide offers a comprehensive overview of CORS, ensuring you have the knowledge to tackle cross-origin challenges head-on.</p>
<p>\u{1F30D} Dive in, explore the world of CORS, and elevate your web security understanding to new heights! \u{1F30D}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/cross-origin-resource-sharing-cors-how-does-671c39f8af65">https://medium.com/@gpiechnik/cross-origin-resource-sharing-cors-how-does-671c39f8af65</a></p>`),Kp={title:"Cross-Origin Resource Sharing (CORS). How does it work?",publishedAt:"2023-05-19T00:00:00.000Z",description:"\u{1F310} Demystifying CORS: Navigating Cross-Origin Requests with Ease \u{1F310}",slug:"cros-origin-resource-sharing-cors-how-does-it-work",isPublish:!0},Jp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md",Yp=void 0;Zp[Symbol.for("astro.needsHeadRendering")]=!0});var eh={};u(eh,{default:()=>q9});async function M9(){return Promise.resolve().then(()=>(Qp(),Xp))}var z9,G9,U9,q9,th=l(()=>{"use strict";z9="@@ASTRO-LINKS@@",G9="@@ASTRO-STYLES@@",U9="@@ASTRO-SCRIPTS@@",q9={__astroPropagation:!0,getMod:M9,collectedLinks:z9,collectedStyles:G9,collectedScripts:U9}});var rh={};u(rh,{Content:()=>ah,compiledContent:()=>K9,default:()=>ah,file:()=>oh,frontmatter:()=>ih,getHeadings:()=>J9,images:()=>qn,rawContent:()=>V9,url:()=>sh});function H9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:qn[i].src,...qn[i].attributes}))}function V9(){return`
## Linux basics

Embark on a journey through the intricate world of Unix commands, an essential toolkit for anyone aspiring to excel in backend development, automation testing, or penetration testing. This comprehensive guide demystifies the foundational Linux commands, ensuring you're well-equipped to navigate the Linux environment with confidence.

\u{1F50D} Inside this guide, you'll discover:

- A primer on operators: Understand the special characters that enable you to execute consecutive commands seamlessly.
- A deep dive into file and folder operations: From basic tasks like navigating directories and reading file contents to advanced operations like copying and deleting directories.
- The art of handling and reading processes: Get acquainted with tools that offer insights into CPU and memory usage, active processes, and more.
- Miscellaneous commands: Learn about handy commands that provide insights into logged-in users, clear the terminal, and access the system manual.
- Real-world examples and use-cases that illustrate the practical applications of each command.
- Tips, tricks, and best practices to optimize your command-line experience and boost your productivity.

Whether you're a Linux newbie or a seasoned professional looking to brush up on the basics, this guide offers a holistic overview of Unix commands, ensuring you have the skills to tackle any challenge in the Linux ecosystem.

\u{1F469}\u200D\u{1F4BB} Dive in, explore the power of Unix commands, and elevate your Linux game to new heights! \u{1F468}\u200D\u{1F4BB}

Link: https://medium.com/@gpiechnik/linux-basics-fd71e6826a43
`}function K9(){return nh}function J9(){return[{depth:2,slug:"linux-basics",text:"Linux basics"}]}async function ah(){let{layout:e,...t}=ih;return t.file=oh,t.url=sh,g(m,{"set:html":nh})}var S7,F7,qn,nh,ih,oh,sh,ch=l(()=>{"use strict";A();S7=h(b(),1);v();k();F7=h(x(),1);S();C();qn={};nh=H9(`<h2 id="linux-basics">Linux basics</h2>
<p>Embark on a journey through the intricate world of Unix commands, an essential toolkit for anyone aspiring to excel in backend development, automation testing, or penetration testing. This comprehensive guide demystifies the foundational Linux commands, ensuring you\u2019re well-equipped to navigate the Linux environment with confidence.</p>
<p>\u{1F50D} Inside this guide, you\u2019ll discover:</p>
<ul>
<li>A primer on operators: Understand the special characters that enable you to execute consecutive commands seamlessly.</li>
<li>A deep dive into file and folder operations: From basic tasks like navigating directories and reading file contents to advanced operations like copying and deleting directories.</li>
<li>The art of handling and reading processes: Get acquainted with tools that offer insights into CPU and memory usage, active processes, and more.</li>
<li>Miscellaneous commands: Learn about handy commands that provide insights into logged-in users, clear the terminal, and access the system manual.</li>
<li>Real-world examples and use-cases that illustrate the practical applications of each command.</li>
<li>Tips, tricks, and best practices to optimize your command-line experience and boost your productivity.</li>
</ul>
<p>Whether you\u2019re a Linux newbie or a seasoned professional looking to brush up on the basics, this guide offers a holistic overview of Unix commands, ensuring you have the skills to tackle any challenge in the Linux ecosystem.</p>
<p>\u{1F469}\u200D\u{1F4BB} Dive in, explore the power of Unix commands, and elevate your Linux game to new heights! \u{1F468}\u200D\u{1F4BB}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/linux-basics-fd71e6826a43">https://medium.com/@gpiechnik/linux-basics-fd71e6826a43</a></p>`),ih={title:"Linux basics",publishedAt:"2023-05-18T00:00:00.000Z",description:"\u{1F427} Mastering Unix Commands: Your Gateway to Linux Proficiency \u{1F427}",slug:"linux-basics",isPublish:!0},oh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md",sh=void 0;ah[Symbol.for("astro.needsHeadRendering")]=!0});var lh={};u(lh,{default:()=>eF});async function Y9(){return Promise.resolve().then(()=>(ch(),rh))}var Z9,X9,Q9,eF,dh=l(()=>{"use strict";Z9="@@ASTRO-LINKS@@",X9="@@ASTRO-STYLES@@",Q9="@@ASTRO-SCRIPTS@@",eF={__astroPropagation:!0,getMod:Y9,collectedLinks:Z9,collectedStyles:X9,collectedScripts:Q9}});var gh={};u(gh,{Content:()=>fh,compiledContent:()=>iF,default:()=>fh,file:()=>hh,frontmatter:()=>ph,getHeadings:()=>oF,images:()=>Hn,rawContent:()=>nF,url:()=>mh});function tF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Hn[i].src,...Hn[i].attributes}))}function nF(){return`
## Path travelsal vulnerability

Dive deep into the world of path traversal vulnerabilities, a seemingly innocuous yet potent threat that can grant unauthorized access to confidential files and folders. By simply manipulating parameters, attackers can exploit these vulnerabilities to not only expose sensitive data but, in some cases, execute remote code.

\u{1F511} Inside this guide, you'll uncover:

- A straightforward breakdown of path traversal vulnerabilities and how they can be exploited using simple manipulations like \u201C../../\u201D.
- The various defense mechanisms, such as WAF, that websites deploy to guard against these vulnerabilities, and how they can sometimes be bypassed.
- A detailed look at sample payloads that can be used to exploit these vulnerabilities and their encoded representations.
- Real-world examples that highlight the persistence of path traversal vulnerabilities in both legacy and modern technologies.
- A deep dive into specific cases, from the dangers of improper validation in server-side rendered pages to the lethal combination of open redirect and path traversal vulnerabilities leading to SSRF.
- An exploration of the kramdown library's vulnerability, a popular Ruby library used by platforms like Github Pages and Jekyll, and how it was exploited for remote code execution.
- Tips and tools for automating the detection of these vulnerabilities, with a spotlight on the powerful dot2moon tool.

Whether you're a cybersecurity enthusiast, a web developer, or just curious about the hidden threats lurking in the digital realm, this guide offers a comprehensive exploration of path traversal vulnerabilities, equipping you with the knowledge to defend against them.

\u{1F449} Embark on this enlightening journey and arm yourself against one of the internet's silent yet dangerous threats! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-path-travelsal-vulnerability-c7f7851de861
`}function iF(){return uh}function oF(){return[{depth:2,slug:"path-travelsal-vulnerability",text:"Path travelsal vulnerability"}]}async function fh(){let{layout:e,...t}=ph;return t.file=hh,t.url=mh,g(m,{"set:html":uh})}var R7,_7,Hn,uh,ph,hh,mh,yh=l(()=>{"use strict";A();R7=h(b(),1);v();k();_7=h(x(),1);S();C();Hn={};uh=tF(`<h2 id="path-travelsal-vulnerability">Path travelsal vulnerability</h2>
<p>Dive deep into the world of path traversal vulnerabilities, a seemingly innocuous yet potent threat that can grant unauthorized access to confidential files and folders. By simply manipulating parameters, attackers can exploit these vulnerabilities to not only expose sensitive data but, in some cases, execute remote code.</p>
<p>\u{1F511} Inside this guide, you\u2019ll uncover:</p>
<ul>
<li>A straightforward breakdown of path traversal vulnerabilities and how they can be exploited using simple manipulations like \u201C../../\u201D.</li>
<li>The various defense mechanisms, such as WAF, that websites deploy to guard against these vulnerabilities, and how they can sometimes be bypassed.</li>
<li>A detailed look at sample payloads that can be used to exploit these vulnerabilities and their encoded representations.</li>
<li>Real-world examples that highlight the persistence of path traversal vulnerabilities in both legacy and modern technologies.</li>
<li>A deep dive into specific cases, from the dangers of improper validation in server-side rendered pages to the lethal combination of open redirect and path traversal vulnerabilities leading to SSRF.</li>
<li>An exploration of the kramdown library\u2019s vulnerability, a popular Ruby library used by platforms like Github Pages and Jekyll, and how it was exploited for remote code execution.</li>
<li>Tips and tools for automating the detection of these vulnerabilities, with a spotlight on the powerful dot2moon tool.</li>
</ul>
<p>Whether you\u2019re a cybersecurity enthusiast, a web developer, or just curious about the hidden threats lurking in the digital realm, this guide offers a comprehensive exploration of path traversal vulnerabilities, equipping you with the knowledge to defend against them.</p>
<p>\u{1F449} Embark on this enlightening journey and arm yourself against one of the internet\u2019s silent yet dangerous threats! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-path-travelsal-vulnerability-c7f7851de861">https://medium.com/@gpiechnik/what-is-path-travelsal-vulnerability-c7f7851de861</a></p>`),ph={title:"What is path travelsal vulnerability?",publishedAt:"2023-05-17T00:00:00.000Z",description:"\u{1F50D} Path Traversal Vulnerabilities: Unmasking Hidden Threats \u{1F50D}",slug:"path-travelsal-vulnerability",isPublish:!0},hh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md",mh=void 0;fh[Symbol.for("astro.needsHeadRendering")]=!0});var wh={};u(wh,{default:()=>lF});async function sF(){return Promise.resolve().then(()=>(yh(),gh))}var aF,rF,cF,lF,Dh=l(()=>{"use strict";aF="@@ASTRO-LINKS@@",rF="@@ASTRO-STYLES@@",cF="@@ASTRO-SCRIPTS@@",lF={__astroPropagation:!0,getMod:sF,collectedLinks:aF,collectedStyles:rF,collectedScripts:cF}});var Ch={};u(Ch,{Content:()=>Sh,compiledContent:()=>pF,default:()=>Sh,file:()=>kh,frontmatter:()=>vh,getHeadings:()=>hF,images:()=>Vn,rawContent:()=>uF,url:()=>xh});function dF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Vn[i].src,...Vn[i].attributes}))}function uF(){return`
## What is the TCP IP Model?

Ever wondered how devices, regardless of their operating systems, seamlessly communicate over the internet? Dive deep into the world of TCP/IP, the protocol model that has been the cornerstone of internet communication since the 1970s.

\u{1F50D} Inside this guide, you'll discover:

- The historical evolution of the TCP/IP model and its significance in ensuring universal communication across devices.
- How the TCP/IP model intertwines with the theoretical ISO/OSI model, and why understanding both is crucial for navigating complex network documentation.
- A detailed breakdown of the data transmission process in TCP/IP, from the initial message encapsulation to the final data reception.
- An exploration of the four pivotal layers of the TCP/IP model: Application, Transport, Internet, and Network Access, and the protocols that operate within each.
- A deep dive into the intricacies of network sockets, the unique endpoints that facilitate data transmission between devices.
- A closer look at the TCP and UDP protocols, their differences, and their roles in ensuring data integrity and speed.
- Insights into the Internet layer's role in routing packets and the significance of IP addresses in this process.
- A glimpse into the Network Access layer, where data packets are prepared for their journey across the network.

Whether you're a network enthusiast, an IT professional, or just curious about the underlying mechanisms that power our online interactions, this guide offers a comprehensive exploration of the TCP/IP model, the unsung hero of the digital age.

\u{1F449} Embark on this enlightening journey and unravel the mysteries of the protocols that have been the foundation of the internet for decades! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-the-tcp-ip-model-6ddbf970be35
`}function pF(){return bh}function hF(){return[{depth:2,slug:"what-is-the-tcp-ip-model",text:"What is the TCP IP Model?"}]}async function Sh(){let{layout:e,...t}=vh;return t.file=kh,t.url=xh,g(m,{"set:html":bh})}var $7,M7,Vn,bh,vh,kh,xh,Ah=l(()=>{"use strict";A();$7=h(b(),1);v();k();M7=h(x(),1);S();C();Vn={};bh=dF(`<h2 id="what-is-the-tcp-ip-model">What is the TCP IP Model?</h2>
<p>Ever wondered how devices, regardless of their operating systems, seamlessly communicate over the internet? Dive deep into the world of TCP/IP, the protocol model that has been the cornerstone of internet communication since the 1970s.</p>
<p>\u{1F50D} Inside this guide, you\u2019ll discover:</p>
<ul>
<li>The historical evolution of the TCP/IP model and its significance in ensuring universal communication across devices.</li>
<li>How the TCP/IP model intertwines with the theoretical ISO/OSI model, and why understanding both is crucial for navigating complex network documentation.</li>
<li>A detailed breakdown of the data transmission process in TCP/IP, from the initial message encapsulation to the final data reception.</li>
<li>An exploration of the four pivotal layers of the TCP/IP model: Application, Transport, Internet, and Network Access, and the protocols that operate within each.</li>
<li>A deep dive into the intricacies of network sockets, the unique endpoints that facilitate data transmission between devices.</li>
<li>A closer look at the TCP and UDP protocols, their differences, and their roles in ensuring data integrity and speed.</li>
<li>Insights into the Internet layer\u2019s role in routing packets and the significance of IP addresses in this process.</li>
<li>A glimpse into the Network Access layer, where data packets are prepared for their journey across the network.</li>
</ul>
<p>Whether you\u2019re a network enthusiast, an IT professional, or just curious about the underlying mechanisms that power our online interactions, this guide offers a comprehensive exploration of the TCP/IP model, the unsung hero of the digital age.</p>
<p>\u{1F449} Embark on this enlightening journey and unravel the mysteries of the protocols that have been the foundation of the internet for decades! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-the-tcp-ip-model-6ddbf970be35">https://medium.com/@gpiechnik/what-is-the-tcp-ip-model-6ddbf970be35</a></p>`),vh={title:"What is the TCP/IP model",publishedAt:"2023-05-16T00:00:00.000Z",description:"\u{1F310} TCP/IP Unraveled: The Backbone of the Internet \u{1F310}",slug:"what-is-tcp-ip-model",isPublish:!0},kh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md",xh=void 0;Sh[Symbol.for("astro.needsHeadRendering")]=!0});var Fh={};u(Fh,{default:()=>wF});async function mF(){return Promise.resolve().then(()=>(Ah(),Ch))}var fF,gF,yF,wF,Eh=l(()=>{"use strict";fF="@@ASTRO-LINKS@@",gF="@@ASTRO-STYLES@@",yF="@@ASTRO-SCRIPTS@@",wF={__astroPropagation:!0,getMod:mF,collectedLinks:fF,collectedStyles:gF,collectedScripts:yF}});var _h={};u(_h,{Content:()=>Ih,compiledContent:()=>vF,default:()=>Ih,file:()=>Rh,frontmatter:()=>Ph,getHeadings:()=>kF,images:()=>Kn,rawContent:()=>bF,url:()=>jh});function DF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Kn[i].src,...Kn[i].attributes}))}function bF(){return`
## What is SSL Certificate

Ever clicked on a website and noticed the little padlock icon in your browser's address bar? That's the magic of SSL/TLS at work! Dive into the intricate world of SSL/TLS, the protocols that keep our online interactions safe and secure.

\u{1F50D} Inside this guide, you'll uncover:

- A nostalgic trip back to 1994, where it all began with Netscape's pioneering SSL protocol, and its evolution into the TLS we know today.
- The subtle distinction between the TLS protocol and SSL certificates, and why we still colloquially refer to them as "SSL certificates."
- A deep dive into the ISO/OSI model, revealing where the TLS protocol fits in and how it ensures the security of higher layers.
- A step-by-step breakdown of the SSL handshake process, illuminating how your computer and the server establish a secure connection.
- The different types of SSL certificates, from the basic Domain Validation (DV) to the rigorous Extended Validation (EV), and what sets them apart.
- Handy tools and commands to inspect and verify SSL certificates, ensuring you're always on a secure connection.
- A glimpse into the structure of certificates, demystifying the various components that make up these digital security guards.

Whether you're a cybersecurity enthusiast, a web developer, or just curious about how your online data stays protected, this guide offers a comprehensive look into SSL/TLS, the unsung heroes of internet security.

\u{1F449} Embark on this enlightening journey and discover the protocols that stand guard, ensuring our online world remains a safe space! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-ssl-certificate-1a18ba092023
`}function vF(){return Th}function kF(){return[{depth:2,slug:"what-is-ssl-certificate",text:"What is SSL Certificate"}]}async function Ih(){let{layout:e,...t}=Ph;return t.file=Rh,t.url=jh,g(m,{"set:html":Th})}var q7,K7,Kn,Th,Ph,Rh,jh,Lh=l(()=>{"use strict";A();q7=h(b(),1);v();k();K7=h(x(),1);S();C();Kn={};Th=DF(`<h2 id="what-is-ssl-certificate">What is SSL Certificate</h2>
<p>Ever clicked on a website and noticed the little padlock icon in your browser\u2019s address bar? That\u2019s the magic of SSL/TLS at work! Dive into the intricate world of SSL/TLS, the protocols that keep our online interactions safe and secure.</p>
<p>\u{1F50D} Inside this guide, you\u2019ll uncover:</p>
<ul>
<li>A nostalgic trip back to 1994, where it all began with Netscape\u2019s pioneering SSL protocol, and its evolution into the TLS we know today.</li>
<li>The subtle distinction between the TLS protocol and SSL certificates, and why we still colloquially refer to them as \u201CSSL certificates.\u201D</li>
<li>A deep dive into the ISO/OSI model, revealing where the TLS protocol fits in and how it ensures the security of higher layers.</li>
<li>A step-by-step breakdown of the SSL handshake process, illuminating how your computer and the server establish a secure connection.</li>
<li>The different types of SSL certificates, from the basic Domain Validation (DV) to the rigorous Extended Validation (EV), and what sets them apart.</li>
<li>Handy tools and commands to inspect and verify SSL certificates, ensuring you\u2019re always on a secure connection.</li>
<li>A glimpse into the structure of certificates, demystifying the various components that make up these digital security guards.</li>
</ul>
<p>Whether you\u2019re a cybersecurity enthusiast, a web developer, or just curious about how your online data stays protected, this guide offers a comprehensive look into SSL/TLS, the unsung heroes of internet security.</p>
<p>\u{1F449} Embark on this enlightening journey and discover the protocols that stand guard, ensuring our online world remains a safe space! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-ssl-certificate-1a18ba092023">https://medium.com/@gpiechnik/what-is-ssl-certificate-1a18ba092023</a></p>`),Ph={title:"What is SSL Certificate",publishedAt:"2023-05-15T00:00:00.000Z",description:"\u{1F512} SSL/TLS Unveiled: The Guardians of Online Security \u{1F512}",slug:"what-is-ssl-certificate",isPublish:!0},Rh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md",jh=void 0;Ih[Symbol.for("astro.needsHeadRendering")]=!0});var Bh={};u(Bh,{default:()=>FF});async function xF(){return Promise.resolve().then(()=>(Lh(),_h))}var SF,CF,AF,FF,Wh=l(()=>{"use strict";SF="@@ASTRO-LINKS@@",CF="@@ASTRO-STYLES@@",AF="@@ASTRO-SCRIPTS@@",FF={__astroPropagation:!0,getMod:xF,collectedLinks:SF,collectedStyles:CF,collectedScripts:AF}});var Gh={};u(Gh,{Content:()=>zh,compiledContent:()=>PF,default:()=>zh,file:()=>Nh,frontmatter:()=>Oh,getHeadings:()=>RF,images:()=>Jn,rawContent:()=>TF,url:()=>Mh});function EF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Jn[i].src,...Jn[i].attributes}))}function TF(){return`
## DNS Protocol explained

Ever wondered how typing a simple website name like "www.example.com" magically takes you to the desired webpage? Dive deep into the fascinating world of DNS (Domain Name System) and unravel the intricate processes that make our online experiences seamless!

\u{1F50D} Inside this guide, you'll discover:

- The pivotal role of DNS in converting user-friendly domain names into computer-friendly IP addresses.
- A behind-the-scenes look at how DNS requests are processed, from your browser to the vast databases of DNS.
- A step-by-step breakdown of DNS queries, from recursive to iterative, and how they help fetch the right IP addresses.
- An in-depth exploration of various DNS records, from the common A and AAAA records to the more specialized SRV and TXT records.
- Hands-on tools and commands, like dig, to query DNS servers and gain insights into the DNS infrastructure.
- Fun tidbits, like what "IN" in DNS records really means, and much more!

Whether you're a tech enthusiast, an IT professional, or just curious about the inner workings of the internet, this guide offers a comprehensive overview of DNS, its significance, and its intricate operations.

\u{1F449} Embark on this enlightening journey and decode the mysteries of DNS, the unsung hero that powers our online world! \u{1F448}

Link: https://medium.com/@gpiechnik/dns-protocol-explained-70f39a2a5a6e
`}function PF(){return $h}function RF(){return[{depth:2,slug:"dns-protocol-explained",text:"DNS Protocol explained"}]}async function zh(){let{layout:e,...t}=Oh;return t.file=Nh,t.url=Mh,g(m,{"set:html":$h})}var X7,tR,Jn,$h,Oh,Nh,Mh,Uh=l(()=>{"use strict";A();X7=h(b(),1);v();k();tR=h(x(),1);S();C();Jn={};$h=EF(`<h2 id="dns-protocol-explained">DNS Protocol explained</h2>
<p>Ever wondered how typing a simple website name like \u201D<a href="http://www.example.com">www.example.com</a>\u201D magically takes you to the desired webpage? Dive deep into the fascinating world of DNS (Domain Name System) and unravel the intricate processes that make our online experiences seamless!</p>
<p>\u{1F50D} Inside this guide, you\u2019ll discover:</p>
<ul>
<li>The pivotal role of DNS in converting user-friendly domain names into computer-friendly IP addresses.</li>
<li>A behind-the-scenes look at how DNS requests are processed, from your browser to the vast databases of DNS.</li>
<li>A step-by-step breakdown of DNS queries, from recursive to iterative, and how they help fetch the right IP addresses.</li>
<li>An in-depth exploration of various DNS records, from the common A and AAAA records to the more specialized SRV and TXT records.</li>
<li>Hands-on tools and commands, like dig, to query DNS servers and gain insights into the DNS infrastructure.</li>
<li>Fun tidbits, like what \u201CIN\u201D in DNS records really means, and much more!</li>
</ul>
<p>Whether you\u2019re a tech enthusiast, an IT professional, or just curious about the inner workings of the internet, this guide offers a comprehensive overview of DNS, its significance, and its intricate operations.</p>
<p>\u{1F449} Embark on this enlightening journey and decode the mysteries of DNS, the unsung hero that powers our online world! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/dns-protocol-explained-70f39a2a5a6e">https://medium.com/@gpiechnik/dns-protocol-explained-70f39a2a5a6e</a></p>`),Oh={title:"DNS Protocol explained",publishedAt:"2023-05-14T00:00:00.000Z",description:"\u{1F30D} DNS Demystified: Navigating the Backbone of the Internet \u{1F30D}",slug:"dns-protocol-explained",isPublish:!0},Nh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md",Mh=void 0;zh[Symbol.for("astro.needsHeadRendering")]=!0});var qh={};u(qh,{default:()=>BF});async function jF(){return Promise.resolve().then(()=>(Uh(),Gh))}var IF,_F,LF,BF,Hh=l(()=>{"use strict";IF="@@ASTRO-LINKS@@",_F="@@ASTRO-STYLES@@",LF="@@ASTRO-SCRIPTS@@",BF={__astroPropagation:!0,getMod:jF,collectedLinks:IF,collectedStyles:_F,collectedScripts:LF}});var Xh={};u(Xh,{Content:()=>Zh,compiledContent:()=>OF,default:()=>Zh,file:()=>Jh,frontmatter:()=>Kh,getHeadings:()=>NF,images:()=>Yn,rawContent:()=>$F,url:()=>Yh});function WF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Yn[i].src,...Yn[i].attributes}))}function $F(){return`
## IDOR vulnerability types

Ever clicked on a web link and wondered what's happening behind the scenes? Dive into our comprehensive guide on IDOR (Insecure Direct Object References) and discover the hidden vulnerabilities that might be lurking in the shadows of web requests!

\u{1F50D} Inside, you'll uncover:

- The intricate world of HTTP requests and how manipulating parameters can potentially expose sensitive data.
- A step-by-step breakdown of IDOR, a vulnerability that can grant unauthorized access to proprietary data or even tamper with server files.
- Expert techniques to detect hidden parameters, from intercepting requests with tools like Burpsuite to leveraging powerful scripts like Arjun.
- A deep dive into the various types of IDOR vulnerabilities, each with its own potential risks and consequences.
- Real-world examples and case studies showcasing IDOR in action, from accessing sensitive user data to taking over another user's account.

Whether you're a cybersecurity enthusiast, a web developer, or just someone keen on understanding the intricacies of web vulnerabilities, this guide offers a holistic view of IDOR, its potential risks, and ways to safeguard against it.

\u{1F449} Embark on this enlightening journey and arm yourself with the knowledge to navigate the treacherous waters of web vulnerabilities! \u{1F448}

Link: https://medium.com/@gpiechnik/insecure-direct-object-reference-idor-vulnerability-types-f4b976bbd58b
`}function OF(){return Vh}function NF(){return[{depth:2,slug:"idor-vulnerability-types",text:"IDOR vulnerability types"}]}async function Zh(){let{layout:e,...t}=Kh;return t.file=Jh,t.url=Yh,g(m,{"set:html":Vh})}var sR,cR,Yn,Vh,Kh,Jh,Yh,Qh=l(()=>{"use strict";A();sR=h(b(),1);v();k();cR=h(x(),1);S();C();Yn={};Vh=WF(`<h2 id="idor-vulnerability-types">IDOR vulnerability types</h2>
<p>Ever clicked on a web link and wondered what\u2019s happening behind the scenes? Dive into our comprehensive guide on IDOR (Insecure Direct Object References) and discover the hidden vulnerabilities that might be lurking in the shadows of web requests!</p>
<p>\u{1F50D} Inside, you\u2019ll uncover:</p>
<ul>
<li>The intricate world of HTTP requests and how manipulating parameters can potentially expose sensitive data.</li>
<li>A step-by-step breakdown of IDOR, a vulnerability that can grant unauthorized access to proprietary data or even tamper with server files.</li>
<li>Expert techniques to detect hidden parameters, from intercepting requests with tools like Burpsuite to leveraging powerful scripts like Arjun.</li>
<li>A deep dive into the various types of IDOR vulnerabilities, each with its own potential risks and consequences.</li>
<li>Real-world examples and case studies showcasing IDOR in action, from accessing sensitive user data to taking over another user\u2019s account.</li>
</ul>
<p>Whether you\u2019re a cybersecurity enthusiast, a web developer, or just someone keen on understanding the intricacies of web vulnerabilities, this guide offers a holistic view of IDOR, its potential risks, and ways to safeguard against it.</p>
<p>\u{1F449} Embark on this enlightening journey and arm yourself with the knowledge to navigate the treacherous waters of web vulnerabilities! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/insecure-direct-object-reference-idor-vulnerability-types-f4b976bbd58b">https://medium.com/@gpiechnik/insecure-direct-object-reference-idor-vulnerability-types-f4b976bbd58b</a></p>`),Kh={title:"Insecure Direct Object Reference (IDOR) vulnerability types",publishedAt:"2023-05-13T00:00:00.000Z",description:"\u{1F310} IDOR Uncovered: Delving Deep into Insecure Direct Object References \u{1F310}",slug:"insecure-direct-object-reference-IDOR-vulnerability-types",isPublish:!0},Jh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md",Yh=void 0;Zh[Symbol.for("astro.needsHeadRendering")]=!0});var em={};u(em,{default:()=>qF});async function MF(){return Promise.resolve().then(()=>(Qh(),Xh))}var zF,GF,UF,qF,tm=l(()=>{"use strict";zF="@@ASTRO-LINKS@@",GF="@@ASTRO-STYLES@@",UF="@@ASTRO-SCRIPTS@@",qF={__astroPropagation:!0,getMod:MF,collectedLinks:zF,collectedStyles:GF,collectedScripts:UF}});var rm={};u(rm,{Content:()=>am,compiledContent:()=>KF,default:()=>am,file:()=>om,frontmatter:()=>im,getHeadings:()=>JF,images:()=>Zn,rawContent:()=>VF,url:()=>sm});function HF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Zn[i].src,...Zn[i].attributes}))}function VF(){return`
## What is JWT

Ever wondered about the backbone of modern authentication and authorization? Dive into our comprehensive guide on JWT (JSON Web Tokens) and unravel the complexities of this open standard that's revolutionizing the way data is exchanged!

\u{1F50D} Inside, you'll explore:

- A deep dive into the anatomy of JWT, breaking down its three core components: header, payload, and signature.
- A hands-on look at how JWTs are structured, from encrypted records to JSON objects, and how they ensure data integrity and authenticity.
- The significance of the JWT signature, the guardian of token authenticity, and the cryptographic algorithms that fortify it.
- Potential security pitfalls and vulnerabilities associated with JWT, from algorithm cracking to implementation challenges.
- Expert insights and resources, including an exhaustive eBook on JWT security and a deep dive into critical vulnerabilities in JWT libraries.

Whether you're a developer, a cybersecurity enthusiast, or just someone keen on understanding the nuances of web security, this guide offers a holistic view of JWT, its strengths, and its vulnerabilities.

\u{1F449} Embark on this journey now and master the world of JSON Web Tokens! \u{1F448}

Link: https://medium.com/@gpiechnik/what-is-jwt-json-web-token-202b7e5155af
`}function KF(){return nm}function JF(){return[{depth:2,slug:"what-is-jwt",text:"What is JWT"}]}async function am(){let{layout:e,...t}=im;return t.file=om,t.url=sm,g(m,{"set:html":nm})}var pR,fR,Zn,nm,im,om,sm,cm=l(()=>{"use strict";A();pR=h(b(),1);v();k();fR=h(x(),1);S();C();Zn={};nm=HF(`<h2 id="what-is-jwt">What is JWT</h2>
<p>Ever wondered about the backbone of modern authentication and authorization? Dive into our comprehensive guide on JWT (JSON Web Tokens) and unravel the complexities of this open standard that\u2019s revolutionizing the way data is exchanged!</p>
<p>\u{1F50D} Inside, you\u2019ll explore:</p>
<ul>
<li>A deep dive into the anatomy of JWT, breaking down its three core components: header, payload, and signature.</li>
<li>A hands-on look at how JWTs are structured, from encrypted records to JSON objects, and how they ensure data integrity and authenticity.</li>
<li>The significance of the JWT signature, the guardian of token authenticity, and the cryptographic algorithms that fortify it.</li>
<li>Potential security pitfalls and vulnerabilities associated with JWT, from algorithm cracking to implementation challenges.</li>
<li>Expert insights and resources, including an exhaustive eBook on JWT security and a deep dive into critical vulnerabilities in JWT libraries.</li>
</ul>
<p>Whether you\u2019re a developer, a cybersecurity enthusiast, or just someone keen on understanding the nuances of web security, this guide offers a holistic view of JWT, its strengths, and its vulnerabilities.</p>
<p>\u{1F449} Embark on this journey now and master the world of JSON Web Tokens! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-jwt-json-web-token-202b7e5155af">https://medium.com/@gpiechnik/what-is-jwt-json-web-token-202b7e5155af</a></p>`),im={title:"What is JWT (Json Web Token)",publishedAt:"2023-05-12T00:00:00.000Z",description:"\u{1F510} JWT Demystified: Navigating the Intricacies of JSON Web Tokens \u{1F510}",slug:"what-is-jwt",isPublish:!0},om="/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md",sm=void 0;am[Symbol.for("astro.needsHeadRendering")]=!0});var lm={};u(lm,{default:()=>e6});async function YF(){return Promise.resolve().then(()=>(cm(),rm))}var ZF,XF,QF,e6,dm=l(()=>{"use strict";ZF="@@ASTRO-LINKS@@",XF="@@ASTRO-STYLES@@",QF="@@ASTRO-SCRIPTS@@",e6={__astroPropagation:!0,getMod:YF,collectedLinks:ZF,collectedStyles:XF,collectedScripts:QF}});var gm={};u(gm,{Content:()=>fm,compiledContent:()=>i6,default:()=>fm,file:()=>hm,frontmatter:()=>pm,getHeadings:()=>o6,images:()=>Xn,rawContent:()=>n6,url:()=>mm});function t6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Xn[i].src,...Xn[i].attributes}))}function n6(){return`
## X-Frame-Options header explained

Ever pondered the significance of HTTP headers in ensuring web security? Delve into our enlightening guide on X-Frame-Options, a crucial yet often overlooked HTTP header, and its pivotal role in safeguarding users from malicious attacks!

\u{1F50D} Inside, you'll uncover:

- A concise breakdown of the X-Frame-Options header, its potential values, and the implications of its absence.
- A deep dive into the sinister world of click-jacking attacks, where users are duped into interacting with concealed elements, all due to a missing header.
- Real-world attack scenarios, from crafty email traps to covert scripts that exploit the vulnerabilities of embedded content.
- Expert insights from the cybersecurity community, including detailed accounts of how even seasoned users can fall prey to these sophisticated attacks.
- A treasure trove of resources and case studies, offering a comprehensive understanding of the risks and countermeasures associated with iframe vulnerabilities.

Whether you're a web developer, a cybersecurity enthusiast, or just someone keen on understanding the intricacies of web security, this guide offers a deep dive into the hidden dangers lurking in the shadows of embedded content.

\u{1F449} Dive in now and fortify your knowledge on the critical importance of X-Frame-Options! \u{1F448}

Link: https://medium.com/@gpiechnik/x-frame-options-header-explained-70775e3bdaac
`}function i6(){return um}function o6(){return[{depth:2,slug:"x-frame-options-header-explained",text:"X-Frame-Options header explained"}]}async function fm(){let{layout:e,...t}=pm;return t.file=hm,t.url=mm,g(m,{"set:html":um})}var DR,kR,Xn,um,pm,hm,mm,ym=l(()=>{"use strict";A();DR=h(b(),1);v();k();kR=h(x(),1);S();C();Xn={};um=t6(`<h2 id="x-frame-options-header-explained">X-Frame-Options header explained</h2>
<p>Ever pondered the significance of HTTP headers in ensuring web security? Delve into our enlightening guide on X-Frame-Options, a crucial yet often overlooked HTTP header, and its pivotal role in safeguarding users from malicious attacks!</p>
<p>\u{1F50D} Inside, you\u2019ll uncover:</p>
<ul>
<li>A concise breakdown of the X-Frame-Options header, its potential values, and the implications of its absence.</li>
<li>A deep dive into the sinister world of click-jacking attacks, where users are duped into interacting with concealed elements, all due to a missing header.</li>
<li>Real-world attack scenarios, from crafty email traps to covert scripts that exploit the vulnerabilities of embedded content.</li>
<li>Expert insights from the cybersecurity community, including detailed accounts of how even seasoned users can fall prey to these sophisticated attacks.</li>
<li>A treasure trove of resources and case studies, offering a comprehensive understanding of the risks and countermeasures associated with iframe vulnerabilities.</li>
</ul>
<p>Whether you\u2019re a web developer, a cybersecurity enthusiast, or just someone keen on understanding the intricacies of web security, this guide offers a deep dive into the hidden dangers lurking in the shadows of embedded content.</p>
<p>\u{1F449} Dive in now and fortify your knowledge on the critical importance of X-Frame-Options! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/x-frame-options-header-explained-70775e3bdaac">https://medium.com/@gpiechnik/x-frame-options-header-explained-70775e3bdaac</a></p>`),pm={title:"X-Frame-Options Header Explained",publishedAt:"2023-05-11T00:00:00.000Z",description:"\u{1F6E1}\uFE0F X-Frame-Options Unveiled: Navigating the Perils of Embedded Content \u{1F6E1}\uFE0F",slug:"x-frame-options-header-explained",isPublish:!0},hm="/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md",mm=void 0;fm[Symbol.for("astro.needsHeadRendering")]=!0});var wm={};u(wm,{default:()=>l6});async function s6(){return Promise.resolve().then(()=>(ym(),gm))}var a6,r6,c6,l6,Dm=l(()=>{"use strict";a6="@@ASTRO-LINKS@@",r6="@@ASTRO-STYLES@@",c6="@@ASTRO-SCRIPTS@@",l6={__astroPropagation:!0,getMod:s6,collectedLinks:a6,collectedStyles:r6,collectedScripts:c6}});var Cm={};u(Cm,{Content:()=>Sm,compiledContent:()=>p6,default:()=>Sm,file:()=>km,frontmatter:()=>vm,getHeadings:()=>h6,images:()=>Qn,rawContent:()=>u6,url:()=>xm});function d6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Qn[i].src,...Qn[i].attributes}))}function u6(){return`
## Checking network devices in Shodan search engine

Ever wondered how to uncover the hidden treasures of the Internet of Things (IoT)? Dive deep into the world of reconnaissance with our comprehensive guide on Shodan, the search engine for IoT!

\u{1F50D} Inside, you'll discover:

- The foundational difference between passive and active reconnaissance, and why it matters in the realm of IoT.
- An introduction to Shodan, the powerful search engine that reveals the secrets of networked devices, from servers to surveillance cameras.
- A sneak peek into sample search results and the kind of invaluable information you can extract.
- Expert tips on filtering results in Shodan, ensuring you pinpoint exactly what you're looking for.
- A treasure trove of additional resources: from a mesmerizing visual journey of random images set to retro tunes, to a handy command-line tool for Shodan enthusiasts.
- Recommendations for further reading and alternative platforms like Censys and ZoomEye, ensuring you're well-equipped in the world of IoT exploration.

Whether you're a cybersecurity professional, a tech enthusiast, or just someone curious about the vast landscape of connected devices, this guide is your gateway to the hidden corners of the internet.

\u{1F449} Dive in now and master the art of IoT reconnaissance with Shodan! \u{1F448}

Link: https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1`}function p6(){return bm}function h6(){return[{depth:2,slug:"checking-network-devices-in-shodan-search-engine",text:"Checking network devices in Shodan search engine"}]}async function Sm(){let{layout:e,...t}=vm;return t.file=km,t.url=xm,g(m,{"set:html":bm})}var AR,TR,Qn,bm,vm,km,xm,Am=l(()=>{"use strict";A();AR=h(b(),1);v();k();TR=h(x(),1);S();C();Qn={};bm=d6(`<h2 id="checking-network-devices-in-shodan-search-engine">Checking network devices in Shodan search engine</h2>
<p>Ever wondered how to uncover the hidden treasures of the Internet of Things (IoT)? Dive deep into the world of reconnaissance with our comprehensive guide on Shodan, the search engine for IoT!</p>
<p>\u{1F50D} Inside, you\u2019ll discover:</p>
<ul>
<li>The foundational difference between passive and active reconnaissance, and why it matters in the realm of IoT.</li>
<li>An introduction to Shodan, the powerful search engine that reveals the secrets of networked devices, from servers to surveillance cameras.</li>
<li>A sneak peek into sample search results and the kind of invaluable information you can extract.</li>
<li>Expert tips on filtering results in Shodan, ensuring you pinpoint exactly what you\u2019re looking for.</li>
<li>A treasure trove of additional resources: from a mesmerizing visual journey of random images set to retro tunes, to a handy command-line tool for Shodan enthusiasts.</li>
<li>Recommendations for further reading and alternative platforms like Censys and ZoomEye, ensuring you\u2019re well-equipped in the world of IoT exploration.</li>
</ul>
<p>Whether you\u2019re a cybersecurity professional, a tech enthusiast, or just someone curious about the vast landscape of connected devices, this guide is your gateway to the hidden corners of the internet.</p>
<p>\u{1F449} Dive in now and master the art of IoT reconnaissance with Shodan! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1">https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1</a></p>`),vm={title:"Checking network devices in Shodan search engine",publishedAt:"2023-05-10T00:00:00.000Z",description:"\u{1F310} Shodan Uncovered: The Ultimate Guide to IoT Reconnaissance \u{1F310}",slug:"network-devices-shodan",isPublish:!0},km="/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md",xm=void 0;Sm[Symbol.for("astro.needsHeadRendering")]=!0});var Fm={};u(Fm,{default:()=>w6});async function m6(){return Promise.resolve().then(()=>(Am(),Cm))}var f6,g6,y6,w6,Em=l(()=>{"use strict";f6="@@ASTRO-LINKS@@",g6="@@ASTRO-STYLES@@",y6="@@ASTRO-SCRIPTS@@",w6={__astroPropagation:!0,getMod:m6,collectedLinks:f6,collectedStyles:g6,collectedScripts:y6}});var _m={};u(_m,{Content:()=>Im,compiledContent:()=>v6,default:()=>Im,file:()=>Rm,frontmatter:()=>Pm,getHeadings:()=>k6,images:()=>ei,rawContent:()=>b6,url:()=>jm});function D6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:ei[i].src,...ei[i].attributes}))}function b6(){return`
## Docker explained for pentesters

Ever wondered why Docker has become the talk of the town in the IT world? Or perhaps you've heard about containerization but aren't quite sure how it differs from traditional virtualization? Dive into our in-depth guide and get all your questions answered!

\u{1F50D} Inside, you'll uncover:

- The fundamental differences between containerization and virtualization, illustrated with a clear visual comparison.
- The pros and cons of both methods, and why Docker might be the game-changer you've been looking for.
- A deep dive into Docker's architecture and its unique approach to breaking down applications into containers.
- Real-world applications of Docker beyond just development and administration. Whether you're a pentester or an automation tester, discover how Docker can streamline your workflow.
- A step-by-step breakdown of Dockerfile, the backbone of Docker operations, complete with a hands-on example.
- Practical tips on building and running Docker images and containers, ensuring you're well-equipped to get started on your own projects.
- A quick tour of essential platforms like Docker Hub and Labs play with Docker, and a handy cheatsheet of Docker commands to keep by your side.

Whether you're a seasoned developer, an IT professional, or just someone curious about the world of containerization, this guide offers insights for all. Don't get left behind in the Docker revolution!

\u{1F449} Dive in now and embark on your Docker journey! \u{1F448}

Link: https://medium.com/@gpiechnik/docker-explained-for-pentester-6a90b5822040
`}function v6(){return Tm}function k6(){return[{depth:2,slug:"docker-explained-for-pentesters",text:"Docker explained for pentesters"}]}async function Im(){let{layout:e,...t}=Pm;return t.file=Rm,t.url=jm,g(m,{"set:html":Tm})}var IR,BR,ei,Tm,Pm,Rm,jm,Lm=l(()=>{"use strict";A();IR=h(b(),1);v();k();BR=h(x(),1);S();C();ei={};Tm=D6(`<h2 id="docker-explained-for-pentesters">Docker explained for pentesters</h2>
<p>Ever wondered why Docker has become the talk of the town in the IT world? Or perhaps you\u2019ve heard about containerization but aren\u2019t quite sure how it differs from traditional virtualization? Dive into our in-depth guide and get all your questions answered!</p>
<p>\u{1F50D} Inside, you\u2019ll uncover:</p>
<ul>
<li>The fundamental differences between containerization and virtualization, illustrated with a clear visual comparison.</li>
<li>The pros and cons of both methods, and why Docker might be the game-changer you\u2019ve been looking for.</li>
<li>A deep dive into Docker\u2019s architecture and its unique approach to breaking down applications into containers.</li>
<li>Real-world applications of Docker beyond just development and administration. Whether you\u2019re a pentester or an automation tester, discover how Docker can streamline your workflow.</li>
<li>A step-by-step breakdown of Dockerfile, the backbone of Docker operations, complete with a hands-on example.</li>
<li>Practical tips on building and running Docker images and containers, ensuring you\u2019re well-equipped to get started on your own projects.</li>
<li>A quick tour of essential platforms like Docker Hub and Labs play with Docker, and a handy cheatsheet of Docker commands to keep by your side.</li>
</ul>
<p>Whether you\u2019re a seasoned developer, an IT professional, or just someone curious about the world of containerization, this guide offers insights for all. Don\u2019t get left behind in the Docker revolution!</p>
<p>\u{1F449} Dive in now and embark on your Docker journey! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/docker-explained-for-pentester-6a90b5822040">https://medium.com/@gpiechnik/docker-explained-for-pentester-6a90b5822040</a></p>`),Pm={title:"Docker explained for pentesters",publishedAt:"2023-05-09T00:00:00.000Z",description:"\u{1F433} Docker Demystified: A Comprehensive Guide to Containerization \u{1F433}",slug:"docker-explained-for-pentesters",isPublish:!0},Rm="/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md",jm=void 0;Im[Symbol.for("astro.needsHeadRendering")]=!0});var Bm={};u(Bm,{default:()=>F6});async function x6(){return Promise.resolve().then(()=>(Lm(),_m))}var S6,C6,A6,F6,Wm=l(()=>{"use strict";S6="@@ASTRO-LINKS@@",C6="@@ASTRO-STYLES@@",A6="@@ASTRO-SCRIPTS@@",F6={__astroPropagation:!0,getMod:x6,collectedLinks:S6,collectedStyles:C6,collectedScripts:A6}});var Gm={};u(Gm,{Content:()=>zm,compiledContent:()=>P6,default:()=>zm,file:()=>Nm,frontmatter:()=>Om,getHeadings:()=>R6,images:()=>ti,rawContent:()=>T6,url:()=>Mm});function E6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:ti[i].src,...ti[i].attributes}))}function T6(){return`
## How to optimise JMeter

Ever felt the weight of JMeter slowing down your performance testing? You're not alone. While JMeter has been a staple in the industry for years, it's no secret that it comes with its own set of challenges. But what if we told you there's a way to harness its power more efficiently?

Dive into my comprehensive guide where we unravel the intricacies of JMeter and JVM optimization. From the nuances of Virtual Threads to the prowess of Groovy, we've got you covered. Learn how to tweak your scripts for maximum efficiency, run tests from the console like a pro, and set up real-time result monitoring with InfluxDB + Grafana.

\u{1F50D} Inside, you'll discover:

- Step-by-step script modifications to minimize server RAM consumption.
- The ins and outs of JVM parameters and how they can make or break your tests.
- A breakdown of JMeter parameters for those who prefer the .jar approach.

Don't let JMeter's quirks hold you back. With our expert tips, you'll be on your way to smoother, more efficient performance testing. And if all else fails? We've got a backup plan for that too.

\u{1F449} Dive in now and revolutionize your JMeter testing experience! \u{1F448}

Link: https://medium.com/@gpiechnik/how-to-optimise-jmeter-for-performance-tests-b4b05de3ea15
`}function P6(){return $m}function R6(){return[{depth:2,slug:"how-to-optimise-jmeter",text:"How to optimise JMeter"}]}async function zm(){let{layout:e,...t}=Om;return t.file=Nm,t.url=Mm,g(m,{"set:html":$m})}var NR,GR,ti,$m,Om,Nm,Mm,Um=l(()=>{"use strict";A();NR=h(b(),1);v();k();GR=h(x(),1);S();C();ti={};$m=E6(`<h2 id="how-to-optimise-jmeter">How to optimise JMeter</h2>
<p>Ever felt the weight of JMeter slowing down your performance testing? You\u2019re not alone. While JMeter has been a staple in the industry for years, it\u2019s no secret that it comes with its own set of challenges. But what if we told you there\u2019s a way to harness its power more efficiently?</p>
<p>Dive into my comprehensive guide where we unravel the intricacies of JMeter and JVM optimization. From the nuances of Virtual Threads to the prowess of Groovy, we\u2019ve got you covered. Learn how to tweak your scripts for maximum efficiency, run tests from the console like a pro, and set up real-time result monitoring with InfluxDB + Grafana.</p>
<p>\u{1F50D} Inside, you\u2019ll discover:</p>
<ul>
<li>Step-by-step script modifications to minimize server RAM consumption.</li>
<li>The ins and outs of JVM parameters and how they can make or break your tests.</li>
<li>A breakdown of JMeter parameters for those who prefer the .jar approach.</li>
</ul>
<p>Don\u2019t let JMeter\u2019s quirks hold you back. With our expert tips, you\u2019ll be on your way to smoother, more efficient performance testing. And if all else fails? We\u2019ve got a backup plan for that too.</p>
<p>\u{1F449} Dive in now and revolutionize your JMeter testing experience! \u{1F448}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/how-to-optimise-jmeter-for-performance-tests-b4b05de3ea15">https://medium.com/@gpiechnik/how-to-optimise-jmeter-for-performance-tests-b4b05de3ea15</a></p>`),Om={title:"How to optimise JMeter for performance tests",publishedAt:"2023-05-09T00:00:00.000Z",description:"\u{1F680} Unlock the Full Potential of JMeter: A Deep Dive into Optimization \u{1F680}",slug:"how-to-optimise-jmeter",isPublish:!0},Nm="/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md",Mm=void 0;zm[Symbol.for("astro.needsHeadRendering")]=!0});var qm={};u(qm,{default:()=>B6});async function j6(){return Promise.resolve().then(()=>(Um(),Gm))}var I6,_6,L6,B6,Hm=l(()=>{"use strict";I6="@@ASTRO-LINKS@@",_6="@@ASTRO-STYLES@@",L6="@@ASTRO-SCRIPTS@@",B6={__astroPropagation:!0,getMod:j6,collectedLinks:I6,collectedStyles:_6,collectedScripts:L6}});var pf={};u(pf,{$:()=>si,f:()=>rf,g:()=>Ym,i:()=>pE});function O6(e){return async(t,i)=>{let n=Jm[t]?.entries[i];if(n)return e[t][n]}}function z6(e){return/\w+\/$/.test(e)?e.slice(0,-1):e}function rf(e){return new Intl.DateTimeFormat("en-GB").format(e)}function rE(e){return e.replace(/\*{1,2}(.*?)\*{1,2}/g,`<strong class="font-normal ${q6[ii.colors.primary]}">$1</strong>`)}var dt,Vm,W6,Km,$6,Jm,N6,M6,Ym,G6,Zm,U6,q6,H6,ni,ii,V6,Xm,K6,Qm,J6,ef,Y6,tf,Z6,nf,X6,of,Q6,sf,eE,tE,af,nE,si,iE,lt,ye,oE,oi,sE,cf,aE,lf,ct,cE,df,lE,uf,dE,uE,pE,hf=l(()=>{"use strict";A();dt="/src/content/",Vm=Object.assign({"/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md":()=>Promise.resolve().then(()=>(Jo(),Ko)),"/src/content/posts/952-nuclei-writing-exploit.md":()=>Promise.resolve().then(()=>(Zo(),Yo)),"/src/content/posts/953-standard-deviation-performance-tests.md":()=>Promise.resolve().then(()=>(Qo(),Xo)),"/src/content/posts/954-afrog-bug-bounty-pentesters.md":()=>Promise.resolve().then(()=>(ts(),es)),"/src/content/posts/955-drill-performance-testing-tool.md":()=>Promise.resolve().then(()=>(is(),ns)),"/src/content/posts/956-aws-ec2-instances-basics.md":()=>Promise.resolve().then(()=>(ss(),os)),"/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md":()=>Promise.resolve().then(()=>(rs(),as)),"/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md":()=>Promise.resolve().then(()=>(ls(),cs)),"/src/content/posts/959-types-of-deployment.md":()=>Promise.resolve().then(()=>(us(),ds)),"/src/content/posts/960-availability-load-balancing-failover-session-persistence.md":()=>Promise.resolve().then(()=>(hs(),ps)),"/src/content/posts/961-mitmproxy-and-k6.md":()=>Promise.resolve().then(()=>(fs(),ms)),"/src/content/posts/962-flaky-tests-jmeter.md":()=>Promise.resolve().then(()=>(ys(),gs)),"/src/content/posts/963-debug-requests-k6.md":()=>Promise.resolve().then(()=>(Ds(),ws)),"/src/content/posts/964-what-are-memory-leaks.md":()=>Promise.resolve().then(()=>(vs(),bs)),"/src/content/posts/965-what-is-browser-based-load-testing.md":()=>Promise.resolve().then(()=>(xs(),ks)),"/src/content/posts/966-read-summary-data-in-k6.md":()=>Promise.resolve().then(()=>(Cs(),Ss)),"/src/content/posts/967-fundamental-network-tools.md":()=>Promise.resolve().then(()=>(Fs(),As)),"/src/content/posts/968-crucial-update-for-k6-results-analysis.md":()=>Promise.resolve().then(()=>(Ts(),Es)),"/src/content/posts/969-hacking-embedded-systems-routersploit.md":()=>Promise.resolve().then(()=>(Rs(),Ps)),"/src/content/posts/970-syn-flood-attack.md":()=>Promise.resolve().then(()=>(Is(),js)),"/src/content/posts/971-dos-ddos-drddos-pod-attack.md":()=>Promise.resolve().then(()=>(Ls(),_s)),"/src/content/posts/972-state-ssl-certificates.md":()=>Promise.resolve().then(()=>(Ws(),Bs)),"/src/content/posts/973-what-are-polyglots.md":()=>Promise.resolve().then(()=>(Os(),$s)),"/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md":()=>Promise.resolve().then(()=>(Ms(),Ns)),"/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md":()=>Promise.resolve().then(()=>(Gs(),zs)),"/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md":()=>Promise.resolve().then(()=>(qs(),Us)),"/src/content/posts/977-what-is-waf-and-ips.md":()=>Promise.resolve().then(()=>(Vs(),Hs)),"/src/content/posts/978-metasploit-explained.md":()=>Promise.resolve().then(()=>(Js(),Ks)),"/src/content/posts/979-content-security-policy-explained.md":()=>Promise.resolve().then(()=>(Zs(),Ys)),"/src/content/posts/980-the-harvester-and-h8mail-osint.md":()=>Promise.resolve().then(()=>(Qs(),Xs)),"/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md":()=>Promise.resolve().then(()=>(ta(),ea)),"/src/content/posts/982-scary-rogue-access-point-attack.md":()=>Promise.resolve().then(()=>(ia(),na)),"/src/content/posts/983-what-is-a-zero-day-exploit.md":()=>Promise.resolve().then(()=>(sa(),oa)),"/src/content/posts/984-what-is-insecure-deserialization.md":()=>Promise.resolve().then(()=>(ra(),aa)),"/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md":()=>Promise.resolve().then(()=>(la(),ca)),"/src/content/posts/986-security-risks-associated-with-using-git.md":()=>Promise.resolve().then(()=>(ua(),da)),"/src/content/posts/987-cross-site-request-forgery-attack.md":()=>Promise.resolve().then(()=>(ha(),pa)),"/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md":()=>Promise.resolve().then(()=>(fa(),ma)),"/src/content/posts/989-linux-basics.md":()=>Promise.resolve().then(()=>(ya(),ga)),"/src/content/posts/990-what-is-path-travelsal-vulnerability.md":()=>Promise.resolve().then(()=>(Da(),wa)),"/src/content/posts/991-what-is-the-TCP-IP-model.md":()=>Promise.resolve().then(()=>(va(),ba)),"/src/content/posts/992-what-is-SSL-certificate.md":()=>Promise.resolve().then(()=>(xa(),ka)),"/src/content/posts/993-DNS-protocol-explained.md":()=>Promise.resolve().then(()=>(Ca(),Sa)),"/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md":()=>Promise.resolve().then(()=>(Fa(),Aa)),"/src/content/posts/995-what-is-jwt.md":()=>Promise.resolve().then(()=>(Ta(),Ea)),"/src/content/posts/996-x-frame-options-header-explained.md":()=>Promise.resolve().then(()=>(Ra(),Pa)),"/src/content/posts/997-network-devices-shodan.md":()=>Promise.resolve().then(()=>(Ia(),ja)),"/src/content/posts/998-docker-explained-for-pentesters.md":()=>Promise.resolve().then(()=>(La(),_a)),"/src/content/posts/999-how-to-optimise-jmeter.md":()=>Promise.resolve().then(()=>(Wa(),Ba))}),W6=Me({globResult:Vm,contentDir:dt}),Km=Object.assign({}),$6=Me({globResult:Km,contentDir:dt});Me({globResult:{...Vm,...Km},contentDir:dt});Jm={};Jm={posts:{type:"content",entries:{"using-chatgpt-to-write-nuclei-exploits":"/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md","nuclei-writing-exploit":"/src/content/posts/952-nuclei-writing-exploit.md","standard-deviation-performance-tests":"/src/content/posts/953-standard-deviation-performance-tests.md","afrog-bug-bounty-pentesters":"/src/content/posts/954-afrog-bug-bounty-pentesters.md","drill-performance-testing-tool":"/src/content/posts/955-drill-performance-testing-tool.md","aws-ec2-instances-basics":"/src/content/posts/956-aws-ec2-instances-basics.md","what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2":"/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md","what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one":"/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md","types-of-deployment":"/src/content/posts/959-types-of-deployment.md","availability-load-balancing-failover-session-persistence":"/src/content/posts/960-availability-load-balancing-failover-session-persistence.md","mitmproxy-and-k6":"/src/content/posts/961-mitmproxy-and-k6.md","flaky-tests-jmeter":"/src/content/posts/962-flaky-tests-jmeter.md","debug-requests-k6":"/src/content/posts/963-debug-requests-k6.md","what-are-memory-leaks":"/src/content/posts/964-what-are-memory-leaks.md","what-is-browser-based-load-testing":"/src/content/posts/965-what-is-browser-based-load-testing.md","read-summary-data-in-k6":"/src/content/posts/966-read-summary-data-in-k6.md","fundamental-network-tools":"/src/content/posts/967-fundamental-network-tools.md","crucial-update-for-k6-results-analysis":"/src/content/posts/968-crucial-update-for-k6-results-analysis.md","hacking-embedded-systems-routersploit":"/src/content/posts/969-hacking-embedded-systems-routersploit.md","syn-flood-attack":"/src/content/posts/970-syn-flood-attack.md","dos-ddos-drddos-pod-attack":"/src/content/posts/971-dos-ddos-drddos-pod-attack.md","state-ssl-certificates":"/src/content/posts/972-state-ssl-certificates.md","what-are-polyglots":"/src/content/posts/973-what-are-polyglots.md","what-is-bind-shell-and-reverse-shell":"/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md","what-is-waf-and-ips":"/src/content/posts/977-what-is-waf-and-ips.md","what-is-forward-proxy-and-reverse-proxy":"/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md","ldap-protocol-basics-and-the-ldap-injection-attack":"/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md","metasploit-explained":"/src/content/posts/978-metasploit-explained.md","content-security-policy-explained":"/src/content/posts/979-content-security-policy-explained.md","the-harvester-and-h8mail-osint":"/src/content/posts/980-the-harvester-and-h8mail-osint.md","scanning-ports-and-finding-network-vulnerabilities-with-nmap":"/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md","what-is-a-zero-day-exploit":"/src/content/posts/983-what-is-a-zero-day-exploit.md","what-are-cves-common-vulnerabilities-and-exposures":"/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md","security-risks-associated-with-using-git":"/src/content/posts/986-security-risks-associated-with-using-git.md","cross-site-request-forgery-attack":"/src/content/posts/987-cross-site-request-forgery-attack.md","what-is-insecure-deserialization":"/src/content/posts/984-what-is-insecure-deserialization.md","scary-rogue-access-point-attack":"/src/content/posts/982-scary-rogue-access-point-attack.md","cros-origin-resource-sharing-cors-how-does-it-work":"/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md","linux-basics":"/src/content/posts/989-linux-basics.md","path-travelsal-vulnerability":"/src/content/posts/990-what-is-path-travelsal-vulnerability.md","what-is-tcp-ip-model":"/src/content/posts/991-what-is-the-TCP-IP-model.md","what-is-ssl-certificate":"/src/content/posts/992-what-is-SSL-certificate.md","dns-protocol-explained":"/src/content/posts/993-DNS-protocol-explained.md","insecure-direct-object-reference-IDOR-vulnerability-types":"/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md","what-is-jwt":"/src/content/posts/995-what-is-jwt.md","x-frame-options-header-explained":"/src/content/posts/996-x-frame-options-header-explained.md","docker-explained-for-pentesters":"/src/content/posts/998-docker-explained-for-pentesters.md","network-devices-shodan":"/src/content/posts/997-network-devices-shodan.md","how-to-optimise-jmeter":"/src/content/posts/999-how-to-optimise-jmeter.md"}}};N6=Object.assign({"/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md":()=>Promise.resolve().then(()=>(Ha(),qa)),"/src/content/posts/952-nuclei-writing-exploit.md":()=>Promise.resolve().then(()=>(tr(),er)),"/src/content/posts/953-standard-deviation-performance-tests.md":()=>Promise.resolve().then(()=>(dr(),lr)),"/src/content/posts/954-afrog-bug-bounty-pentesters.md":()=>Promise.resolve().then(()=>(Dr(),wr)),"/src/content/posts/955-drill-performance-testing-tool.md":()=>Promise.resolve().then(()=>(Er(),Fr)),"/src/content/posts/956-aws-ec2-instances-basics.md":()=>Promise.resolve().then(()=>(Wr(),Br)),"/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md":()=>Promise.resolve().then(()=>(Hr(),qr)),"/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md":()=>Promise.resolve().then(()=>(tc(),ec)),"/src/content/posts/959-types-of-deployment.md":()=>Promise.resolve().then(()=>(dc(),lc)),"/src/content/posts/960-availability-load-balancing-failover-session-persistence.md":()=>Promise.resolve().then(()=>(Dc(),wc)),"/src/content/posts/961-mitmproxy-and-k6.md":()=>Promise.resolve().then(()=>(Ec(),Fc)),"/src/content/posts/962-flaky-tests-jmeter.md":()=>Promise.resolve().then(()=>(Wc(),Bc)),"/src/content/posts/963-debug-requests-k6.md":()=>Promise.resolve().then(()=>(Hc(),qc)),"/src/content/posts/964-what-are-memory-leaks.md":()=>Promise.resolve().then(()=>(tl(),el)),"/src/content/posts/965-what-is-browser-based-load-testing.md":()=>Promise.resolve().then(()=>(dl(),ll)),"/src/content/posts/966-read-summary-data-in-k6.md":()=>Promise.resolve().then(()=>(Dl(),wl)),"/src/content/posts/967-fundamental-network-tools.md":()=>Promise.resolve().then(()=>(El(),Fl)),"/src/content/posts/968-crucial-update-for-k6-results-analysis.md":()=>Promise.resolve().then(()=>(Wl(),Bl)),"/src/content/posts/969-hacking-embedded-systems-routersploit.md":()=>Promise.resolve().then(()=>(Hl(),ql)),"/src/content/posts/970-syn-flood-attack.md":()=>Promise.resolve().then(()=>(td(),ed)),"/src/content/posts/971-dos-ddos-drddos-pod-attack.md":()=>Promise.resolve().then(()=>(dd(),ld)),"/src/content/posts/972-state-ssl-certificates.md":()=>Promise.resolve().then(()=>(Dd(),wd)),"/src/content/posts/973-what-are-polyglots.md":()=>Promise.resolve().then(()=>(Ed(),Fd)),"/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md":()=>Promise.resolve().then(()=>(Wd(),Bd)),"/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md":()=>Promise.resolve().then(()=>(Hd(),qd)),"/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md":()=>Promise.resolve().then(()=>(tu(),eu)),"/src/content/posts/977-what-is-waf-and-ips.md":()=>Promise.resolve().then(()=>(du(),lu)),"/src/content/posts/978-metasploit-explained.md":()=>Promise.resolve().then(()=>(Du(),wu)),"/src/content/posts/979-content-security-policy-explained.md":()=>Promise.resolve().then(()=>(Eu(),Fu)),"/src/content/posts/980-the-harvester-and-h8mail-osint.md":()=>Promise.resolve().then(()=>(Wu(),Bu)),"/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md":()=>Promise.resolve().then(()=>(Hu(),qu)),"/src/content/posts/982-scary-rogue-access-point-attack.md":()=>Promise.resolve().then(()=>(tp(),ep)),"/src/content/posts/983-what-is-a-zero-day-exploit.md":()=>Promise.resolve().then(()=>(dp(),lp)),"/src/content/posts/984-what-is-insecure-deserialization.md":()=>Promise.resolve().then(()=>(Dp(),wp)),"/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md":()=>Promise.resolve().then(()=>(Ep(),Fp)),"/src/content/posts/986-security-risks-associated-with-using-git.md":()=>Promise.resolve().then(()=>(Wp(),Bp)),"/src/content/posts/987-cross-site-request-forgery-attack.md":()=>Promise.resolve().then(()=>(Hp(),qp)),"/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md":()=>Promise.resolve().then(()=>(th(),eh)),"/src/content/posts/989-linux-basics.md":()=>Promise.resolve().then(()=>(dh(),lh)),"/src/content/posts/990-what-is-path-travelsal-vulnerability.md":()=>Promise.resolve().then(()=>(Dh(),wh)),"/src/content/posts/991-what-is-the-TCP-IP-model.md":()=>Promise.resolve().then(()=>(Eh(),Fh)),"/src/content/posts/992-what-is-SSL-certificate.md":()=>Promise.resolve().then(()=>(Wh(),Bh)),"/src/content/posts/993-DNS-protocol-explained.md":()=>Promise.resolve().then(()=>(Hh(),qh)),"/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md":()=>Promise.resolve().then(()=>(tm(),em)),"/src/content/posts/995-what-is-jwt.md":()=>Promise.resolve().then(()=>(dm(),lm)),"/src/content/posts/996-x-frame-options-header-explained.md":()=>Promise.resolve().then(()=>(Dm(),wm)),"/src/content/posts/997-network-devices-shodan.md":()=>Promise.resolve().then(()=>(Em(),Fm)),"/src/content/posts/998-docker-explained-for-pentesters.md":()=>Promise.resolve().then(()=>(Wm(),Bm)),"/src/content/posts/999-how-to-optimise-jmeter.md":()=>Promise.resolve().then(()=>(Hm(),qm))}),M6=Me({globResult:N6,contentDir:dt}),Ym=Vo({contentCollectionToEntryMap:W6,dataCollectionToEntryMap:$6,getRenderEntryImport:O6(M6)});G6=K("https://gpiechnik.com/"),Zm=V(async(e,t,i)=>{let n=e.createAstro(G6,t,i);n.self=Zm;let o=z6(n.url.pathname);return w`${ee()}<header class="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
  <!-- <a href={\`mailto:\${presentation.mail}\`} class="hover:text-neutral-100"
    >{presentation.mail}</a
  > -->

  <nav role="navigation">
    <ul role="list" class="flex flex-row gap-2">
      <li>
        <a href="/"${E({["hover:text-neutral-100"]:!0,["text-neutral-100"]:o==="/"},"class:list")}>Home</a>
      </li>
      <li>/</li>
      <li>
        <a href="/posts"${E({["hover:text-neutral-100"]:!0,["text-neutral-100"]:o==="/posts"},"class:list")}>Posts</a>
      </li>
    </ul>
  </nav>
</header>`},"/home/figaro/Desktop/gpiechnik-website/src/components/Header.astro",void 0),U6={orange:"bg-orange-500",violet:"bg-violet-500",red:"bg-red-500",amber:"bg-amber-500",yellow:"bg-yellow-500",lime:"bg-lime-500",green:"bg-green-500",emerald:"bg-emerald-500",teal:"bg-violet-500",cyan:"bg-cyan-500",blue:"bg-blue-500",indigo:"bg-indigo-500",purple:"bg-purple-500",fushia:"bg-fushia-500",pink:"bg-pink-500",rose:"bg-rose-500"},q6={orange:"text-orange-500",violet:"text-violet-500",red:"text-red-500",amber:"text-amber-500",yellow:"text-yellow-500",lime:"text-lime-500",green:"text-green-500",emerald:"text-emerald-500",teal:"text-violet-500",cyan:"text-cyan-500",blue:"text-blue-500",indigo:"text-indigo-500",purple:"text-purple-500",fushia:"text-fushia-500",pink:"text-pink-500",rose:"text-rose-500"},H6=K("https://gpiechnik.com/"),ni=V(async(e,t,i)=>{let n=e.createAstro(H6,t,i);n.self=ni;let{position:o,color:s}=n.props;return w`${ee()}<div${E({[`fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full ${U6[s]} blur-[150px] md:blur-[350px] opacity-50`]:!0,["left-0 top-0"]:o==="top",["right-0 bottom-0"]:o==="bottom"},"class:list")}>
</div>`},"/home/figaro/Desktop/gpiechnik-website/src/components/shared/BlurCircle.astro",void 0),ii={colors:{primary:"violet",blur:{top:"violet",bottom:"violet"}}},V6=K("https://gpiechnik.com/"),Xm=V(async(e,t,i)=>{let n=e.createAstro(V6,t,i);n.self=Xm;let{publishedTime:o,modifiedTime:s,expirationTime:a,authors:c,section:d,tags:p}=n.props.openGraph.article;return w`${o?w`<meta property="article:published_time"${E(o,"content")}>`:null}
${s?w`<meta property="article:modified_time"${E(s,"content")}>`:null}
${a?w`<meta property="article:expiration_time"${E(a,"content")}>`:null}
${c?c.map(r=>w`<meta property="article:author"${E(r,"content")}>`):null}
${d?w`<meta property="article:section"${E(d,"content")}>`:null}
${p?p.map(r=>w`<meta property="article:tag"${E(r,"content")}>`):null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro",void 0),K6=K("https://gpiechnik.com/"),Qm=V(async(e,t,i)=>{let n=e.createAstro(K6,t,i);n.self=Qm;let{openGraph:o}=n.props;return w`<meta property="og:title"${E(o.basic.title,"content")}>
<meta property="og:type"${E(o.basic.type,"content")}>
<meta property="og:image"${E(o.basic.image,"content")}>
<meta property="og:url"${E(o.basic.url||n.url.href,"content")}>`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro",void 0),J6=K("https://gpiechnik.com/"),ef=V(async(e,t,i)=>{let n=e.createAstro(J6,t,i);n.self=ef;let{image:o}=n.props.openGraph.basic,{secureUrl:s,type:a,width:c,height:d,alt:p}=n.props.openGraph.image;return w`<meta property="og:image:url"${E(o,"content")}>
${s?w`<meta property="og:image:secure_url"${E(s,"content")}>`:null}
${a?w`<meta property="og:image:type"${E(a,"content")}>`:null}
${c?w`<meta property="og:image:width"${E(c,"content")}>`:null}
${d!==null?w`<meta property="og:image:height"${E(d,"content")}>`:null}
${p!==null?w`<meta property="og:image:alt"${E(p,"content")}>`:null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphImageTags.astro",void 0),Y6=K("https://gpiechnik.com/"),tf=V(async(e,t,i)=>{let n=e.createAstro(Y6,t,i);n.self=tf;let{optional:o}=n.props.openGraph;return w`${o.audio?w`<meta property="og:audio"${E(o.audio,"content")}>`:null}
${o.description?w`<meta property="og:description"${E(o.description,"content")}>`:null}
${o.determiner?w`<meta property="og:determiner"${E(o.determiner,"content")}>`:null}
${o.locale?w`<meta property="og:locale"${E(o.locale,"content")}>`:null}
${o.localeAlternate?.map(s=>w`<meta property="og:locale:alternate"${E(s,"content")}>`)}
${o.siteName?w`<meta property="og:site_name"${E(o.siteName,"content")}>`:null}
${o.video?w`<meta property="og:video"${E(o.video,"content")}>`:null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro",void 0),Z6=K("https://gpiechnik.com/"),nf=V(async(e,t,i)=>{let n=e.createAstro(Z6,t,i);n.self=nf;let{props:o}=n;return w`${o.extend.link?.map(s=>w`<link${f(s)}>`)}
${o.extend.meta?.map(({content:s,httpEquiv:a,name:c,property:d})=>w`<meta${E(s,"content")}${E(a,"http-equiv")}${E(c,"name")}${E(d,"property")}>`)}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/ExtendedTags.astro",void 0),X6=K("https://gpiechnik.com/"),of=V(async(e,t,i)=>{let n=e.createAstro(X6,t,i);n.self=of;let{card:o,site:s,title:a,creator:c,description:d,image:p,imageAlt:r}=n.props.twitter;return w`${o?w`<meta name="twitter:card"${E(o,"content")}>`:null}
${s?w`<meta name="twitter:site"${E(s,"content")}>`:null}
${a?w`<meta name="twitter:title"${E(a,"content")}>`:null}
${p?w`<meta name="twitter:image"${E(p,"content")}>`:null}
${r?w`<meta name="twitter:image:alt"${E(r,"content")}>`:null}
${d?w`<meta name="twitter:description"${E(d,"content")}>`:null}
${c?w`<meta name="twitter:creator"${E(c,"content")}>`:null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/TwitterTags.astro",void 0),Q6=K("https://gpiechnik.com/"),sf=V(async(e,t,i)=>{let n=e.createAstro(Q6,t,i);n.self=sf,n.props.surpressWarnings=!0;function o(a){if(a.openGraph&&(!a.openGraph.basic||a.openGraph.basic.title==null||a.openGraph.basic.type==null||a.openGraph.basic.image==null))throw new Error("If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!");a.title&&a.openGraph?.basic.title&&a.title==a.openGraph.basic.title&&!a.surpressWarnings&&console.warn("WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."),a.openGraph?.basic?.image&&!a.openGraph?.image?.alt&&!a.surpressWarnings&&console.warn("WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'")}o(n.props);let s="";return n.props.title?(s=n.props.title,n.props.titleTemplate&&(s=n.props.titleTemplate.replace(/%s/g,s))):n.props.titleDefault&&(s=n.props.titleDefault),w`${s?w`<title>${le(s)}</title>`:null}

${n.props.charset?w`<meta${E(n.props.charset,"charset")}>`:null}

<link rel="canonical"${E(n.props.canonical||n.url.href,"href")}>

${n.props.description?w`<meta name="description"${E(n.props.description,"content")}>`:null}

<meta name="robots"${E(`${n.props.noindex?"noindex":"index"}, ${n.props.nofollow?"nofollow":"follow"}`,"content")}>

${n.props.openGraph&&w`${N(e,"OpenGraphBasicTags",Qm,{...n.props})}`}
${n.props.openGraph?.optional&&w`${N(e,"OpenGraphOptionalTags",tf,{...n.props})}`}
${n.props.openGraph?.image&&w`${N(e,"OpenGraphImageTags",ef,{...n.props})}`}
${n.props.openGraph?.article&&w`${N(e,"OpenGraphArticleTags",Xm,{...n.props})}`}
${n.props.twitter&&w`${N(e,"TwitterTags",of,{...n.props})}`}
${n.props.extend&&w`${N(e,"ExtendedTags",nf,{...n.props})}`}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/SEO.astro",void 0),eE="https://gpiechnik.com/",tE=K("https://gpiechnik.com/"),af=V(async(e,t,i)=>{let n=e.createAstro(tE,t,i);n.self=af;let{title:o,description:s,noindex:a,og:c}=n.props,d="Grzegorz Piechnik - Performance Engineer Testing",p="Grzegorz Piechnik Performance Engineer blog",r=eE,y={title:c?.title||d,type:c?.type||"website",image:c?.image||"/grzegorz-piechnik-logo.png",alt:c?.alt||"grzegorz piechnik performance testing engineer image",url:r,description:c?.description||p};return w`<head>
  ${N(e,"SEO",sf,{charset:"UTF-8",title:o||d,description:s||p,noindex:a||!1,openGraph:{basic:{title:y.title,type:y.type,image:y.image},image:{alt:y.alt}},extend:{link:[{rel:"icon",href:"/favicon.svg"},{rel:"sitemap",href:"/sitemap-index.xml"}],meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"generator",content:n.generator},{name:"twitter:image",content:y.image},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:y.title},{name:"twitter:description",content:y.description}]}})}
${Co()}</head>`},"/home/figaro/Desktop/gpiechnik-website/src/components/seo/SEOTags.astro",void 0),nE=K("https://gpiechnik.com/"),si=V(async(e,t,i)=>{let n=e.createAstro(nE,t,i);n.self=si;let{title:o}=n.props;return w`<html lang="en">
  ${N(e,"SEOTags",af,{title:o})}

  ${ee()}<body class="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16">
    ${N(e,"Header",Zm,{})}
    ${N(e,"BlurCircle",ni,{position:"top",color:ii.colors.blur.top})}
    ${N(e,"BlurCircle",ni,{position:"bottom",color:ii.colors.blur.bottom})}
    ${st(e,i.default)}
    
  </body>
</html>`},"/home/figaro/Desktop/gpiechnik-website/src/layouts/Layout.astro",void 0),iE=K("https://gpiechnik.com/"),lt=V(async(e,t,i)=>{let n=e.createAstro(iE,t,i);n.self=lt;let{label:o,isUnderline:s,...a}=n.props;return w`${ee()}<a${E(a.href,"href")}${E({["hover:text-neutral-100 cursor-pointer"]:!0,["underline decoration-dashed underline-offset-8"]:s},"class:list")}${f(a)} rel="noreferrer" target="_blank">
  ${o}
  <span class="sr-only">${o} link</span>
</a>`},"/home/figaro/Desktop/gpiechnik-website/src/components/shared/Link.astro",void 0),ye={mail:"grzegorz.piechnik99@gmail.com",title:"Hi, I\u2019m Grzegorz Piechnik \u{1F44B}",profile:"/grzegorz-piechnik-photo.webp",description:"Hi, I am a *Performance Engineer* with years of experience in application testing and a *k6 Champion*. I help companies improve the performance of their applications, *educate*, create content on *youtube*, write on my *blog* and *create opensource* tools. After hours, I am involved in cybersecurity.",socials:[{label:"Linkedin",link:"https://www.linkedin.com/in/grpiechnik/"},{label:"Github",link:"https://github.com/gpiechnik2"},{label:"Youtube",link:"https://github.com/gpiechnik2"},{label:"Medium",link:"https://medium.com/@gpiechnik"}]},oE=K("https://gpiechnik.com/"),oi=V(async(e,t,i)=>{let n=e.createAstro(oE,t,i);return n.self=oi,w`${ee()}<ul role="list" class="flex flex-row gap-2">
  ${ye.socials.map((o,s)=>w`${N(e,"Fragment",m,{},{default:a=>w`
        <li>
          ${N(a,"Link",lt,{href:o.link,label:o.label})}
        </li>

        ${ye.socials.length-1!==s&&w`<li>/</li>`}`})}`)}
</ul>`},"/home/figaro/Desktop/gpiechnik-website/src/components/SocialLinks.astro",void 0);sE=K("https://gpiechnik.com/"),cf=V(async(e,t,i)=>{let n=e.createAstro(sE,t,i);n.self=cf;let{title:o,publishedAt:s,description:a,slug:c}=n.props;return w`${ee()}<a class="group flex max-w-sm cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400"${E(`/posts/${c}`,"href")}>
  <div class="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
    <p class="text-neutral-100">${o}</p>
    <div class="flex flex-row items-center gap-4">
      <p>${rf(s)}</p>

      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-300 group-hover:translate-x-1">
        <path d="M5.25 12.75L12.75 5.25" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M5.25 5.25H12.75V12.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
  </div>

  <p class="truncate">
    ${a}
  </p>
</a>`},"/home/figaro/Desktop/gpiechnik-website/src/components/PostCard.astro",void 0),aE=K("https://gpiechnik.com/"),lf=V(async(e,t,i)=>{let n=e.createAstro(aE,t,i);n.self=lf;let{title:o,techs:s,link:a,isComingSoon:c}=n.props,d=p=>p.toString().replaceAll(","," \u2022 ");return w`${N(e,"Fragment",m,{},{default:p=>w`${c&&w`${ee()}<div class="t group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 md:flex-row md:items-center">
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <p class="text-neutral-100">${o}</p>
          <p>${d(s)}</p>
        </div>

        <p class="w-fit rounded-md bg-neutral-900 px-4 py-1">Soon</p>
      </div>`}${!c&&w`<a class="group flex w-full cursor-pointer flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 md:flex-row md:items-center"${E(a,"href")} target="_blank" rel="noreferrer">
        <div class="flex flex-col gap-4 md:flex-row md:items-center">
          <p class="text-neutral-100">${o}</p>
          <p>${d(s)}</p>
        </div>

        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-300 group-hover:translate-x-1">
          <path d="M5.25 12.75L12.75 5.25" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M5.25 5.25H12.75V12.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>`}`})}`},"/home/figaro/Desktop/gpiechnik-website/src/components/ProjectCard.astro",void 0);ct=[{title:"xk6-httpagg",techs:["k6","xk6","Go","Javascript","HTML"],link:"https://github.com/gpiechnik2/xk6-httpagg"},{title:"xk6-anomaly",techs:["k6","xk6","Go","Javascript","AI (Artificial Intelligence)","Machine Learning"],link:"https://github.com/gpiechnik2/xk6-anomaly"},{title:"xk6-smtp",techs:["k6","xk6","Go","Javascript","SMTP"],link:"https://github.com/gpiechnik2/xk6-smtp"},{title:"k6-boilerplate",techs:["k6","Javascript","Docker","Docker-compose","Grafana","InfluxDB"],link:"https://github.com/gpiechnik2/k6-boilerplate"},{title:"k6-errors-reporter",techs:["k6","Javascript","Webpack"],link:"https://github.com/gpiechnik2/k6-errors-reporter"}],cE=K("https://gpiechnik.com/"),df=V(async(e,t,i)=>{let n=e.createAstro(cE,t,i);return n.self=df,w`${ee()}<form class="input-with-button astro-NBVFNXGH" action="https://app.gumroad.com/follow_from_embed_form" method="post" style="--accent:var(--accent);--contrast-accent:var(--contrast-accent)" id="gumroad-follow-form-embed">
  <input type="hidden" name="seller_id" value="5165585759941" class="astro-NBVFNXGH"><input id="gumroad-follow-form-embed-input" type="email" placeholder="Your email address" name="email" value="" class="astro-NBVFNXGH"><button id="gumroad-follow-form-embed-button" class="primary astro-NBVFNXGH" type="submit">Follow</button>
</form>`},"/home/figaro/Desktop/gpiechnik-website/src/components/NewsletterForm.astro",void 0),lE=K("https://gpiechnik.com/"),uf=V(async(e,t,i)=>{let n=e.createAstro(lE,t,i);n.self=uf;let o=(await Ym("posts")).sort(function(a,c){return c.data.publishedAt.getTime()-a.data.publishedAt.getTime()}),s=[];return w`${N(e,"Layout",si,{},{default:a=>w`
  ${ee()}<main class="flex flex-col gap-20">
    <article class="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
      ${w`<img${E(ye.profile,"src")} class="w-1/4 self-center rounded-full" alt="Grzegorz Piechnik Performance Tester Photo">`}

      <div class="flex flex-col gap-8">
        <h1 class="text-3xl text-neutral-100">
          ${ye.title}
        </h1>

        <h2 class="w-auto max-w-[60ch] leading-6">${le(rE(ye.description))}</h2>

        ${N(a,"SocialLinks",oi,{})}
      </div>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">Latest Posts</h3>
        ${N(a,"Link",lt,{href:"/posts",label:"See all posts",isUnderline:!0,target:"_self"})}
      </header>
      ${o.length===0&&w`<p>Soon, stay connected 👀...</p>`}

      <section class="flex flex-col gap-4 md:flex-row md:flex-wrap">
        ${o.length!==0&&o.slice(0,6).map(c=>w`${N(a,"PostCard",cf,{publishedAt:c.data.publishedAt,title:c.data.title,description:c.data.description,slug:c.slug})}`)}
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">Newsletter</h3>
      </header>

      <!-- <section class="gap-4 md:flex-row md:flex-wrap"> -->
        ${N(a,"NewsletterForm",df,{})}
      <!-- </section> -->
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">Courses</h3>
      </header>
      ${s.length===0&&w`<p>Soon, stay connected 👀...</p>`}

      <!-- <section class="flex flex-col gap-4 md:flex-row md:flex-wrap">
        {
          courses.length !== 0 &&
          courses
              .slice(0, 2)
              .map((post) => (
                <PostCard
                  publishedAt={post.data.publishedAt}
                  title={post.data.title}
                  description={post.data.description}
                  slug={post.slug}
                />
              ))
        }
      </section> -->
    </article>


    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">
          Selected Projects (${ct.length})
        </h3>
      </header>
      ${ct.length===0&&w`<p>Oops, I must work^^^^^</p>`}

      <section class="flex flex-col gap-4">
        ${ct.length!==0&&ct.map(c=>w`${N(a,"ProjectCard",lf,{...c})}`)}
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">Get in touch</h3>
      </header>
      <p>
        Email me at ${N(a,"Link",lt,{href:`mailto:${ye.mail}`,label:ye.mail})} or follow me via my social links.
      </p>

      ${N(a,"SocialLinks",oi,{})}
    </article>
  </main>
`})}`},"/home/figaro/Desktop/gpiechnik-website/src/pages/index.astro",void 0),dE="/home/figaro/Desktop/gpiechnik-website/src/pages/index.astro",uE="",pE=Object.freeze(Object.defineProperty({__proto__:null,default:uf,file:dE,url:uE},Symbol.toStringTag,{value:"Module"}))});var mf={};u(mf,{onRequest:()=>Ce,page:()=>hE,renderers:()=>de});var KR,ZR,hE,ff=l(()=>{"use strict";ze();rt();A();KR=h(b(),1);v();k();ZR=h(x(),1);S();C();hE=()=>Promise.resolve().then(()=>(hf(),pf)).then(e=>e.i)});var ai={};u(ai,{_:()=>mE,i:()=>fE});var gf,mE,fE,ri=l(()=>{"use strict";gf=()=>{},mE=gf,fE=gf});var yf={};u(yf,{onRequest:()=>Ce,page:()=>gE,renderers:()=>de});var ij,aj,gE,wf=l(()=>{"use strict";ze();rt();A();ij=h(b(),1);v();k();aj=h(x(),1);S();C();gE=()=>Promise.resolve().then(()=>(ri(),ai)).then(e=>e.i)});var Df={};u(Df,{onRequest:()=>Ce,page:()=>yE,renderers:()=>de});var pj,fj,yE,bf=l(()=>{"use strict";ze();rt();A();pj=h(b(),1);v();k();fj=h(x(),1);S();C();yE=()=>Promise.resolve().then(()=>(ri(),ai)).then(e=>e._)});A();ze();var kj=h(x(),1),xj=h(b(),1);k();v();S();C();var wE=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]";function DE(){return new Proxy({},{get:(e,t)=>{console.warn(`Unable to access \`import.meta\0.env.${t.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`)}})}wE||(process.env=DE());function xf(e){let t=new et(e);return{onRequest:async({request:n,next:o,...s})=>{process.env=s.env;let{pathname:a}=new URL(n.url);if(e.assets.has(a))return s.env.ASSETS.fetch(n);let c=t.match(n,{matchNotFound:!0});if(c){Reflect.set(n,Symbol.for("astro.clientAddress"),n.headers.get("cf-connecting-ip")),Reflect.set(n,Symbol.for("runtime"),{...s,waitUntil:p=>{s.waitUntil(p)},name:"cloudflare",next:o,caches,cf:n.cf});let d=await t.render(n,c);if(t.setCookieHeaders)for(let p of t.setCookieHeaders(d))d.headers.append("Set-Cookie",p);return d}return new Response(null,{status:404,statusText:"Not found"})},manifest:e}}var vf=Object.freeze(Object.defineProperty({__proto__:null,createExports:xf},Symbol.toStringTag,{value:"Module"})),bE=()=>Promise.resolve().then(()=>(ff(),mf)),vE=()=>Promise.resolve().then(()=>(wf(),yf)),kE=()=>Promise.resolve().then(()=>(bf(),Df)),xE=new Map([["src/pages/index.astro",bE],["src/pages/posts/index.astro",vE],["src/pages/posts/[slug].astro",kE]]),Sf=Object.assign(Uo({adapterName:"@astrojs/cloudflare",routes:[{file:"posts/index.html",links:[],scripts:[],styles:[],routeData:{route:"/posts",type:"page",pattern:"^\\/posts\\/?$",segments:[[{content:"posts",dynamic:!1,spread:!1}]],params:[],component:"src/pages/posts/index.astro",pathname:"/posts",prerender:!0,_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[],styles:[{type:"external",src:"/_astro/index.f01952c0.css"},{type:"external",src:"/_astro/index.1dad9f9a.css"}],routeData:{route:"/",type:"page",pattern:"^\\/$",segments:[],params:[],component:"src/pages/index.astro",pathname:"/",prerender:!1,_meta:{trailingSlash:"ignore"}}}],site:"https://gpiechnik.com/",base:"/",compressHTML:!1,markdown:{drafts:!1,syntaxHighlight:"shiki",shikiConfig:{langs:[],theme:"nord",wrap:!1},remarkPlugins:[],rehypePlugins:[],remarkRehype:{},gfm:!0,smartypants:!0},componentMetadata:[["\0astro:content",{propagation:"in-tree",containsHead:!1}],["/home/figaro/Desktop/gpiechnik-website/src/pages/index.astro",{propagation:"in-tree",containsHead:!0}],["\0@astro-page:src/pages/index@_@astro",{propagation:"in-tree",containsHead:!1}],["\0@astrojs-ssr-virtual-entry",{propagation:"in-tree",containsHead:!1}],["/home/figaro/Desktop/gpiechnik-website/src/pages/posts/[slug].astro",{propagation:"in-tree",containsHead:!0}],["\0@astro-page:src/pages/posts/[slug]@_@astro",{propagation:"in-tree",containsHead:!1}],["/home/figaro/Desktop/gpiechnik-website/src/pages/posts/index.astro",{propagation:"in-tree",containsHead:!0}],["\0@astro-page:src/pages/posts/index@_@astro",{propagation:"in-tree",containsHead:!1}]],renderers:[],clientDirectives:[["idle",'(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'],["load",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'],["media",'(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'],["only",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'],["visible",'(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();']],entryModules:{"\0@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\0@astro-renderers":"renderers.mjs","\0empty-middleware":"_empty-middleware.mjs","\0@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.44b11995.mjs","\0@astro-page:src/pages/posts/index@_@astro":"chunks/index@_@astro.1676b392.mjs","\0@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug_@_@astro.6befacb8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md?astroContentCollectionEntry=true":"chunks/951-using-chatgpt-to-write-nuclei-exploits.77381fe6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md?astroContentCollectionEntry=true":"chunks/952-nuclei-writing-exploit.f639c43d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md?astroContentCollectionEntry=true":"chunks/953-standard-deviation-performance-tests.8b2085cf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md?astroContentCollectionEntry=true":"chunks/954-afrog-bug-bounty-pentesters.d4348420.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md?astroContentCollectionEntry=true":"chunks/955-drill-performance-testing-tool.8d1e48f8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md?astroContentCollectionEntry=true":"chunks/956-aws-ec2-instances-basics.b0399f02.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md?astroContentCollectionEntry=true":"chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.c83a9136.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md?astroContentCollectionEntry=true":"chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.2d92719a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md?astroContentCollectionEntry=true":"chunks/959-types-of-deployment.afe644a7.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md?astroContentCollectionEntry=true":"chunks/960-availability-load-balancing-failover-session-persistence.f9ac44e6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md?astroContentCollectionEntry=true":"chunks/961-mitmproxy-and-k6.e7b78dbb.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md?astroContentCollectionEntry=true":"chunks/962-flaky-tests-jmeter.7af23621.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md?astroContentCollectionEntry=true":"chunks/963-debug-requests-k6.ca4e2430.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md?astroContentCollectionEntry=true":"chunks/964-what-are-memory-leaks.9a2c6c69.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md?astroContentCollectionEntry=true":"chunks/965-what-is-browser-based-load-testing.a0b9b531.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md?astroContentCollectionEntry=true":"chunks/966-read-summary-data-in-k6.61d2b2a0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md?astroContentCollectionEntry=true":"chunks/967-fundamental-network-tools.8532f372.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md?astroContentCollectionEntry=true":"chunks/968-crucial-update-for-k6-results-analysis.e76d79a0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md?astroContentCollectionEntry=true":"chunks/969-hacking-embedded-systems-routersploit.baff2c11.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md?astroContentCollectionEntry=true":"chunks/970-syn-flood-attack.b320ce16.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md?astroContentCollectionEntry=true":"chunks/971-dos-ddos-drddos-pod-attack.b220daad.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md?astroContentCollectionEntry=true":"chunks/972-state-ssl-certificates.f702c8f6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md?astroContentCollectionEntry=true":"chunks/973-what-are-polyglots.36116abd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md?astroContentCollectionEntry=true":"chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.36819701.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md?astroContentCollectionEntry=true":"chunks/975-what-is-bind-shell-and-reverse-shell.611dec20.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md?astroContentCollectionEntry=true":"chunks/976-what-is-forward-proxy-and-reverse-proxy.6a90cdf9.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md?astroContentCollectionEntry=true":"chunks/977-what-is-waf-and-ips.e2e17325.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md?astroContentCollectionEntry=true":"chunks/978-metasploit-explained.49f8dc55.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md?astroContentCollectionEntry=true":"chunks/979-content-security-policy-explained.f3940b93.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md?astroContentCollectionEntry=true":"chunks/980-the-harvester-and-h8mail-osint.fe8e1b6d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md?astroContentCollectionEntry=true":"chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.458b7f0d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md?astroContentCollectionEntry=true":"chunks/982-scary-rogue-access-point-attack.b7e35e34.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md?astroContentCollectionEntry=true":"chunks/983-what-is-a-zero-day-exploit.04b019c6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md?astroContentCollectionEntry=true":"chunks/984-what-is-insecure-deserialization.dc27b6a4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md?astroContentCollectionEntry=true":"chunks/985-what-are-cves-common-vulnerabilities-and-exposures.0208864b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md?astroContentCollectionEntry=true":"chunks/986-security-risks-associated-with-using-git.e0418071.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md?astroContentCollectionEntry=true":"chunks/987-cross-site-request-forgery-attack.f488c465.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md?astroContentCollectionEntry=true":"chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.5b4c5045.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md?astroContentCollectionEntry=true":"chunks/989-linux-basics.919808ec.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md?astroContentCollectionEntry=true":"chunks/990-what-is-path-travelsal-vulnerability.5830edab.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md?astroContentCollectionEntry=true":"chunks/991-what-is-the-TCP-IP-model.58df72ee.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md?astroContentCollectionEntry=true":"chunks/992-what-is-SSL-certificate.0b14ac5f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md?astroContentCollectionEntry=true":"chunks/993-DNS-protocol-explained.7a889950.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md?astroContentCollectionEntry=true":"chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.d20edb49.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md?astroContentCollectionEntry=true":"chunks/995-what-is-jwt.67e80f15.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md?astroContentCollectionEntry=true":"chunks/996-x-frame-options-header-explained.4edc7716.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md?astroContentCollectionEntry=true":"chunks/997-network-devices-shodan.d54fe931.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md?astroContentCollectionEntry=true":"chunks/998-docker-explained-for-pentesters.5cce8d77.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md?astroContentCollectionEntry=true":"chunks/999-how-to-optimise-jmeter.dc9bcec3.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md?astroPropagatedAssets":"chunks/951-using-chatgpt-to-write-nuclei-exploits.c052c4a9.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md?astroPropagatedAssets":"chunks/952-nuclei-writing-exploit.71b7445e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md?astroPropagatedAssets":"chunks/953-standard-deviation-performance-tests.675e84cd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md?astroPropagatedAssets":"chunks/954-afrog-bug-bounty-pentesters.0ae40c0e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md?astroPropagatedAssets":"chunks/955-drill-performance-testing-tool.2cd4fc6f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md?astroPropagatedAssets":"chunks/956-aws-ec2-instances-basics.3c241e51.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md?astroPropagatedAssets":"chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.02bbaeed.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md?astroPropagatedAssets":"chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.7847fd74.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md?astroPropagatedAssets":"chunks/959-types-of-deployment.12d60ed8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md?astroPropagatedAssets":"chunks/960-availability-load-balancing-failover-session-persistence.7dd1a1ab.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md?astroPropagatedAssets":"chunks/961-mitmproxy-and-k6.25bfe479.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md?astroPropagatedAssets":"chunks/962-flaky-tests-jmeter.2c59298a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md?astroPropagatedAssets":"chunks/963-debug-requests-k6.4054392d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md?astroPropagatedAssets":"chunks/964-what-are-memory-leaks.64ed5bb1.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md?astroPropagatedAssets":"chunks/965-what-is-browser-based-load-testing.a32eef49.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md?astroPropagatedAssets":"chunks/966-read-summary-data-in-k6.dec9367e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md?astroPropagatedAssets":"chunks/967-fundamental-network-tools.36d65531.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md?astroPropagatedAssets":"chunks/968-crucial-update-for-k6-results-analysis.ba09085a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md?astroPropagatedAssets":"chunks/969-hacking-embedded-systems-routersploit.ca246b39.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md?astroPropagatedAssets":"chunks/970-syn-flood-attack.62841e99.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md?astroPropagatedAssets":"chunks/971-dos-ddos-drddos-pod-attack.5dd6a019.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md?astroPropagatedAssets":"chunks/972-state-ssl-certificates.0e4476bb.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md?astroPropagatedAssets":"chunks/973-what-are-polyglots.e9f2a14a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md?astroPropagatedAssets":"chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.fa5777ad.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md?astroPropagatedAssets":"chunks/975-what-is-bind-shell-and-reverse-shell.bc5f759b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md?astroPropagatedAssets":"chunks/976-what-is-forward-proxy-and-reverse-proxy.fd3a2112.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md?astroPropagatedAssets":"chunks/977-what-is-waf-and-ips.852988a0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md?astroPropagatedAssets":"chunks/978-metasploit-explained.9c1ff8ca.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md?astroPropagatedAssets":"chunks/979-content-security-policy-explained.a1a307aa.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md?astroPropagatedAssets":"chunks/980-the-harvester-and-h8mail-osint.51d56880.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md?astroPropagatedAssets":"chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.967d3314.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md?astroPropagatedAssets":"chunks/982-scary-rogue-access-point-attack.bf3e8e2e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md?astroPropagatedAssets":"chunks/983-what-is-a-zero-day-exploit.d8991f02.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md?astroPropagatedAssets":"chunks/984-what-is-insecure-deserialization.416f83ca.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md?astroPropagatedAssets":"chunks/985-what-are-cves-common-vulnerabilities-and-exposures.635c4d4e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md?astroPropagatedAssets":"chunks/986-security-risks-associated-with-using-git.5e6a5bc8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md?astroPropagatedAssets":"chunks/987-cross-site-request-forgery-attack.562efb13.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md?astroPropagatedAssets":"chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.1939228e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md?astroPropagatedAssets":"chunks/989-linux-basics.23585ce2.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md?astroPropagatedAssets":"chunks/990-what-is-path-travelsal-vulnerability.03b774cc.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md?astroPropagatedAssets":"chunks/991-what-is-the-TCP-IP-model.92ddef4f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md?astroPropagatedAssets":"chunks/992-what-is-SSL-certificate.b223d99b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md?astroPropagatedAssets":"chunks/993-DNS-protocol-explained.2cc93786.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md?astroPropagatedAssets":"chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.144b8a1c.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md?astroPropagatedAssets":"chunks/995-what-is-jwt.c26479c1.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md?astroPropagatedAssets":"chunks/996-x-frame-options-header-explained.fb9576fc.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md?astroPropagatedAssets":"chunks/997-network-devices-shodan.90e8f0f0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md?astroPropagatedAssets":"chunks/998-docker-explained-for-pentesters.49280982.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md?astroPropagatedAssets":"chunks/999-how-to-optimise-jmeter.34f7c89f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md":"chunks/951-using-chatgpt-to-write-nuclei-exploits.c1841228.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md":"chunks/952-nuclei-writing-exploit.a55ff0af.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md":"chunks/953-standard-deviation-performance-tests.5d57dda8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md":"chunks/954-afrog-bug-bounty-pentesters.a91fa90e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md":"chunks/955-drill-performance-testing-tool.3d5958bf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md":"chunks/956-aws-ec2-instances-basics.a0bb727d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md":"chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.80c67b86.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md":"chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.9c43eef6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md":"chunks/959-types-of-deployment.30cbfc60.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md":"chunks/960-availability-load-balancing-failover-session-persistence.fa268a42.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md":"chunks/961-mitmproxy-and-k6.ee8a0789.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md":"chunks/962-flaky-tests-jmeter.88e882b1.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md":"chunks/963-debug-requests-k6.c8494e7c.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md":"chunks/964-what-are-memory-leaks.945adf30.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md":"chunks/965-what-is-browser-based-load-testing.e2de5280.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md":"chunks/966-read-summary-data-in-k6.b06f768e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md":"chunks/967-fundamental-network-tools.2759baaf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md":"chunks/968-crucial-update-for-k6-results-analysis.4a5f6313.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md":"chunks/969-hacking-embedded-systems-routersploit.671c8dbf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md":"chunks/970-syn-flood-attack.867ef3ca.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md":"chunks/971-dos-ddos-drddos-pod-attack.53e3b0dd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md":"chunks/972-state-ssl-certificates.8f9a17cd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md":"chunks/973-what-are-polyglots.907ad3d5.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md":"chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.f08b0a0f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md":"chunks/975-what-is-bind-shell-and-reverse-shell.d146b1a2.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md":"chunks/976-what-is-forward-proxy-and-reverse-proxy.21db6b44.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md":"chunks/977-what-is-waf-and-ips.d44d8917.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md":"chunks/978-metasploit-explained.1e155bc7.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md":"chunks/979-content-security-policy-explained.42676699.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md":"chunks/980-the-harvester-and-h8mail-osint.1fc095a4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md":"chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.d154c1f2.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md":"chunks/982-scary-rogue-access-point-attack.29ad346b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md":"chunks/983-what-is-a-zero-day-exploit.b15cadb3.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md":"chunks/984-what-is-insecure-deserialization.989b65eb.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md":"chunks/985-what-are-cves-common-vulnerabilities-and-exposures.e68c3615.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md":"chunks/986-security-risks-associated-with-using-git.10dfef03.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md":"chunks/987-cross-site-request-forgery-attack.1ccfa12d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md":"chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.e6d1dd4b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md":"chunks/989-linux-basics.9d1d9632.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md":"chunks/990-what-is-path-travelsal-vulnerability.2cc955e0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md":"chunks/991-what-is-the-TCP-IP-model.1660a48b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md":"chunks/992-what-is-SSL-certificate.49f3b5d0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md":"chunks/993-DNS-protocol-explained.e96b03b4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md":"chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.4abb1a90.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md":"chunks/995-what-is-jwt.5a7e0b00.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md":"chunks/996-x-frame-options-header-explained.58096ee7.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md":"chunks/997-network-devices-shodan.c3dbd0ea.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md":"chunks/998-docker-explained-for-pentesters.d13214a4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md":"chunks/999-how-to-optimise-jmeter.703d1c05.mjs","astro:scripts/before-hydration.js":""},assets:["/_astro/open-sans-cyrillic-ext-400-normal.bbbef4da.woff2","/_astro/open-sans-cyrillic-400-normal.624b7132.woff2","/_astro/open-sans-greek-400-normal.7bd5dafc.woff2","/_astro/open-sans-hebrew-400-normal.100ac33d.woff2","/_astro/open-sans-latin-ext-400-normal.140ef34d.woff2","/_astro/open-sans-vietnamese-400-normal.62829378.woff2","/_astro/open-sans-latin-400-normal.b34551ae.woff2","/_astro/open-sans-cyrillic-ext-400-normal.bb75dc3e.woff","/_astro/open-sans-cyrillic-400-normal.051a6129.woff","/_astro/open-sans-greek-400-normal.2745841d.woff","/_astro/open-sans-hebrew-400-normal.fee21563.woff","/_astro/open-sans-vietnamese-400-normal.e8b16384.woff","/_astro/open-sans-latin-ext-400-normal.81bc88c3.woff","/_astro/open-sans-latin-400-normal.8030191f.woff","/_astro/index.1dad9f9a.css","/_astro/index.f01952c0.css","/favicon.svg","/grzegorz-piechnik-logo.png","/grzegorz-piechnik-photo.webp","/profile.webp","/$server_build/_empty-middleware.mjs","/$server_build/renderers.mjs","/$server_build/_astro/index.1dad9f9a.css","/$server_build/_astro/index.f01952c0.css","/$server_build/_astro/open-sans-cyrillic-400-normal.051a6129.woff","/$server_build/_astro/open-sans-cyrillic-400-normal.624b7132.woff2","/$server_build/_astro/open-sans-cyrillic-ext-400-normal.bb75dc3e.woff","/$server_build/_astro/open-sans-cyrillic-ext-400-normal.bbbef4da.woff2","/$server_build/_astro/open-sans-greek-400-normal.2745841d.woff","/$server_build/_astro/open-sans-greek-400-normal.7bd5dafc.woff2","/$server_build/_astro/open-sans-hebrew-400-normal.100ac33d.woff2","/$server_build/_astro/open-sans-hebrew-400-normal.fee21563.woff","/$server_build/_astro/open-sans-latin-400-normal.8030191f.woff","/$server_build/_astro/open-sans-latin-400-normal.b34551ae.woff2","/$server_build/_astro/open-sans-latin-ext-400-normal.140ef34d.woff2","/$server_build/_astro/open-sans-latin-ext-400-normal.81bc88c3.woff","/$server_build/_astro/open-sans-vietnamese-400-normal.62829378.woff2","/$server_build/_astro/open-sans-vietnamese-400-normal.e8b16384.woff","/$server_build/chunks/951-using-chatgpt-to-write-nuclei-exploits.77381fe6.mjs","/$server_build/chunks/951-using-chatgpt-to-write-nuclei-exploits.c052c4a9.mjs","/$server_build/chunks/951-using-chatgpt-to-write-nuclei-exploits.c1841228.mjs","/$server_build/chunks/952-nuclei-writing-exploit.71b7445e.mjs","/$server_build/chunks/952-nuclei-writing-exploit.a55ff0af.mjs","/$server_build/chunks/952-nuclei-writing-exploit.f639c43d.mjs","/$server_build/chunks/953-standard-deviation-performance-tests.5d57dda8.mjs","/$server_build/chunks/953-standard-deviation-performance-tests.675e84cd.mjs","/$server_build/chunks/953-standard-deviation-performance-tests.8b2085cf.mjs","/$server_build/chunks/954-afrog-bug-bounty-pentesters.0ae40c0e.mjs","/$server_build/chunks/954-afrog-bug-bounty-pentesters.a91fa90e.mjs","/$server_build/chunks/954-afrog-bug-bounty-pentesters.d4348420.mjs","/$server_build/chunks/955-drill-performance-testing-tool.2cd4fc6f.mjs","/$server_build/chunks/955-drill-performance-testing-tool.3d5958bf.mjs","/$server_build/chunks/955-drill-performance-testing-tool.8d1e48f8.mjs","/$server_build/chunks/956-aws-ec2-instances-basics.3c241e51.mjs","/$server_build/chunks/956-aws-ec2-instances-basics.a0bb727d.mjs","/$server_build/chunks/956-aws-ec2-instances-basics.b0399f02.mjs","/$server_build/chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.02bbaeed.mjs","/$server_build/chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.80c67b86.mjs","/$server_build/chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.c83a9136.mjs","/$server_build/chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.2d92719a.mjs","/$server_build/chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.7847fd74.mjs","/$server_build/chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.9c43eef6.mjs","/$server_build/chunks/959-types-of-deployment.12d60ed8.mjs","/$server_build/chunks/959-types-of-deployment.30cbfc60.mjs","/$server_build/chunks/959-types-of-deployment.afe644a7.mjs","/$server_build/chunks/960-availability-load-balancing-failover-session-persistence.7dd1a1ab.mjs","/$server_build/chunks/960-availability-load-balancing-failover-session-persistence.f9ac44e6.mjs","/$server_build/chunks/960-availability-load-balancing-failover-session-persistence.fa268a42.mjs","/$server_build/chunks/961-mitmproxy-and-k6.25bfe479.mjs","/$server_build/chunks/961-mitmproxy-and-k6.e7b78dbb.mjs","/$server_build/chunks/961-mitmproxy-and-k6.ee8a0789.mjs","/$server_build/chunks/962-flaky-tests-jmeter.2c59298a.mjs","/$server_build/chunks/962-flaky-tests-jmeter.7af23621.mjs","/$server_build/chunks/962-flaky-tests-jmeter.88e882b1.mjs","/$server_build/chunks/963-debug-requests-k6.4054392d.mjs","/$server_build/chunks/963-debug-requests-k6.c8494e7c.mjs","/$server_build/chunks/963-debug-requests-k6.ca4e2430.mjs","/$server_build/chunks/964-what-are-memory-leaks.64ed5bb1.mjs","/$server_build/chunks/964-what-are-memory-leaks.945adf30.mjs","/$server_build/chunks/964-what-are-memory-leaks.9a2c6c69.mjs","/$server_build/chunks/965-what-is-browser-based-load-testing.a0b9b531.mjs","/$server_build/chunks/965-what-is-browser-based-load-testing.a32eef49.mjs","/$server_build/chunks/965-what-is-browser-based-load-testing.e2de5280.mjs","/$server_build/chunks/966-read-summary-data-in-k6.61d2b2a0.mjs","/$server_build/chunks/966-read-summary-data-in-k6.b06f768e.mjs","/$server_build/chunks/966-read-summary-data-in-k6.dec9367e.mjs","/$server_build/chunks/967-fundamental-network-tools.2759baaf.mjs","/$server_build/chunks/967-fundamental-network-tools.36d65531.mjs","/$server_build/chunks/967-fundamental-network-tools.8532f372.mjs","/$server_build/chunks/968-crucial-update-for-k6-results-analysis.4a5f6313.mjs","/$server_build/chunks/968-crucial-update-for-k6-results-analysis.ba09085a.mjs","/$server_build/chunks/968-crucial-update-for-k6-results-analysis.e76d79a0.mjs","/$server_build/chunks/969-hacking-embedded-systems-routersploit.671c8dbf.mjs","/$server_build/chunks/969-hacking-embedded-systems-routersploit.baff2c11.mjs","/$server_build/chunks/969-hacking-embedded-systems-routersploit.ca246b39.mjs","/$server_build/chunks/970-syn-flood-attack.62841e99.mjs","/$server_build/chunks/970-syn-flood-attack.867ef3ca.mjs","/$server_build/chunks/970-syn-flood-attack.b320ce16.mjs","/$server_build/chunks/971-dos-ddos-drddos-pod-attack.53e3b0dd.mjs","/$server_build/chunks/971-dos-ddos-drddos-pod-attack.5dd6a019.mjs","/$server_build/chunks/971-dos-ddos-drddos-pod-attack.b220daad.mjs","/$server_build/chunks/972-state-ssl-certificates.0e4476bb.mjs","/$server_build/chunks/972-state-ssl-certificates.8f9a17cd.mjs","/$server_build/chunks/972-state-ssl-certificates.f702c8f6.mjs","/$server_build/chunks/973-what-are-polyglots.36116abd.mjs","/$server_build/chunks/973-what-are-polyglots.907ad3d5.mjs","/$server_build/chunks/973-what-are-polyglots.e9f2a14a.mjs","/$server_build/chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.36819701.mjs","/$server_build/chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.f08b0a0f.mjs","/$server_build/chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.fa5777ad.mjs","/$server_build/chunks/975-what-is-bind-shell-and-reverse-shell.611dec20.mjs","/$server_build/chunks/975-what-is-bind-shell-and-reverse-shell.bc5f759b.mjs","/$server_build/chunks/975-what-is-bind-shell-and-reverse-shell.d146b1a2.mjs","/$server_build/chunks/976-what-is-forward-proxy-and-reverse-proxy.21db6b44.mjs","/$server_build/chunks/976-what-is-forward-proxy-and-reverse-proxy.6a90cdf9.mjs","/$server_build/chunks/976-what-is-forward-proxy-and-reverse-proxy.fd3a2112.mjs","/$server_build/chunks/977-what-is-waf-and-ips.852988a0.mjs","/$server_build/chunks/977-what-is-waf-and-ips.d44d8917.mjs","/$server_build/chunks/977-what-is-waf-and-ips.e2e17325.mjs","/$server_build/chunks/978-metasploit-explained.1e155bc7.mjs","/$server_build/chunks/978-metasploit-explained.49f8dc55.mjs","/$server_build/chunks/978-metasploit-explained.9c1ff8ca.mjs","/$server_build/chunks/979-content-security-policy-explained.42676699.mjs","/$server_build/chunks/979-content-security-policy-explained.a1a307aa.mjs","/$server_build/chunks/979-content-security-policy-explained.f3940b93.mjs","/$server_build/chunks/980-the-harvester-and-h8mail-osint.1fc095a4.mjs","/$server_build/chunks/980-the-harvester-and-h8mail-osint.51d56880.mjs","/$server_build/chunks/980-the-harvester-and-h8mail-osint.fe8e1b6d.mjs","/$server_build/chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.458b7f0d.mjs","/$server_build/chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.967d3314.mjs","/$server_build/chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.d154c1f2.mjs","/$server_build/chunks/982-scary-rogue-access-point-attack.29ad346b.mjs","/$server_build/chunks/982-scary-rogue-access-point-attack.b7e35e34.mjs","/$server_build/chunks/982-scary-rogue-access-point-attack.bf3e8e2e.mjs","/$server_build/chunks/983-what-is-a-zero-day-exploit.04b019c6.mjs","/$server_build/chunks/983-what-is-a-zero-day-exploit.b15cadb3.mjs","/$server_build/chunks/983-what-is-a-zero-day-exploit.d8991f02.mjs","/$server_build/chunks/984-what-is-insecure-deserialization.416f83ca.mjs","/$server_build/chunks/984-what-is-insecure-deserialization.989b65eb.mjs","/$server_build/chunks/984-what-is-insecure-deserialization.dc27b6a4.mjs","/$server_build/chunks/985-what-are-cves-common-vulnerabilities-and-exposures.0208864b.mjs","/$server_build/chunks/985-what-are-cves-common-vulnerabilities-and-exposures.635c4d4e.mjs","/$server_build/chunks/985-what-are-cves-common-vulnerabilities-and-exposures.e68c3615.mjs","/$server_build/chunks/986-security-risks-associated-with-using-git.10dfef03.mjs","/$server_build/chunks/986-security-risks-associated-with-using-git.5e6a5bc8.mjs","/$server_build/chunks/986-security-risks-associated-with-using-git.e0418071.mjs","/$server_build/chunks/987-cross-site-request-forgery-attack.1ccfa12d.mjs","/$server_build/chunks/987-cross-site-request-forgery-attack.562efb13.mjs","/$server_build/chunks/987-cross-site-request-forgery-attack.f488c465.mjs","/$server_build/chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.1939228e.mjs","/$server_build/chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.5b4c5045.mjs","/$server_build/chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.e6d1dd4b.mjs","/$server_build/chunks/989-linux-basics.23585ce2.mjs","/$server_build/chunks/989-linux-basics.919808ec.mjs","/$server_build/chunks/989-linux-basics.9d1d9632.mjs","/$server_build/chunks/990-what-is-path-travelsal-vulnerability.03b774cc.mjs","/$server_build/chunks/990-what-is-path-travelsal-vulnerability.2cc955e0.mjs","/$server_build/chunks/990-what-is-path-travelsal-vulnerability.5830edab.mjs","/$server_build/chunks/991-what-is-the-TCP-IP-model.1660a48b.mjs","/$server_build/chunks/991-what-is-the-TCP-IP-model.58df72ee.mjs","/$server_build/chunks/991-what-is-the-TCP-IP-model.92ddef4f.mjs","/$server_build/chunks/992-what-is-SSL-certificate.0b14ac5f.mjs","/$server_build/chunks/992-what-is-SSL-certificate.49f3b5d0.mjs","/$server_build/chunks/992-what-is-SSL-certificate.b223d99b.mjs","/$server_build/chunks/993-DNS-protocol-explained.2cc93786.mjs","/$server_build/chunks/993-DNS-protocol-explained.7a889950.mjs","/$server_build/chunks/993-DNS-protocol-explained.e96b03b4.mjs","/$server_build/chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.144b8a1c.mjs","/$server_build/chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.4abb1a90.mjs","/$server_build/chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.d20edb49.mjs","/$server_build/chunks/995-what-is-jwt.5a7e0b00.mjs","/$server_build/chunks/995-what-is-jwt.67e80f15.mjs","/$server_build/chunks/995-what-is-jwt.c26479c1.mjs","/$server_build/chunks/996-x-frame-options-header-explained.4edc7716.mjs","/$server_build/chunks/996-x-frame-options-header-explained.58096ee7.mjs","/$server_build/chunks/996-x-frame-options-header-explained.fb9576fc.mjs","/$server_build/chunks/997-network-devices-shodan.90e8f0f0.mjs","/$server_build/chunks/997-network-devices-shodan.c3dbd0ea.mjs","/$server_build/chunks/997-network-devices-shodan.d54fe931.mjs","/$server_build/chunks/998-docker-explained-for-pentesters.49280982.mjs","/$server_build/chunks/998-docker-explained-for-pentesters.5cce8d77.mjs","/$server_build/chunks/998-docker-explained-for-pentesters.d13214a4.mjs","/$server_build/chunks/999-how-to-optimise-jmeter.34f7c89f.mjs","/$server_build/chunks/999-how-to-optimise-jmeter.703d1c05.mjs","/$server_build/chunks/999-how-to-optimise-jmeter.dc9bcec3.mjs","/$server_build/chunks/_slug_@_@astro.6befacb8.mjs","/$server_build/chunks/astro.edb5039d.mjs","/$server_build/chunks/index@_@astro.1676b392.mjs","/$server_build/chunks/index@_@astro.44b11995.mjs","/$server_build/chunks/prerender.84dad2d7.mjs","/$server_build/chunks/pages/index.astro.5167fb42.mjs","/posts/index.html"]}),{pageMap:xE,renderers:de}),SE=void 0,Cf=xf(Sf),Ej=Cf.onRequest,Tj=Cf.manifest,kf="start";kf in vf&&vf[kf](Sf,SE);export{Tj as manifest,Ej as onRequest,xE as pageMap};
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
