globalThis.process = {
	argv: [],
	env: {},
};
var Cf=Object.create;var pt=Object.defineProperty;var Af=Object.getOwnPropertyDescriptor;var Ff=Object.getOwnPropertyNames;var Ef=Object.getPrototypeOf,Tf=Object.prototype.hasOwnProperty;var l=(e,t)=>()=>(e&&(t=e(e=0)),t);var ue=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),u=(e,t)=>{for(var i in t)pt(e,i,{get:t[i],enumerable:!0})},Pf=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ff(t))!Tf.call(e,o)&&o!==i&&pt(e,o,{get:()=>t[o],enumerable:!(n=Af(t,o))||n.enumerable});return e};var h=(e,t,i)=>(i=e!=null?Cf(Ef(e)):{},Pf(t||!e||!e.__esModule?pt(i,"default",{value:e,enumerable:!0}):i,e));var ht=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};var D=(e,t,i)=>(ht(e,t,"read from private field"),i?i.call(e):t.get(e)),$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},q=(e,t,i,n)=>(ht(e,t,"write to private field"),n?n.call(e,i):t.set(e,i),i);var H=(e,t,i)=>(ht(e,t,"access private method"),i);var b=ue(mt=>{"use strict";mt.parse=jf;mt.serialize=If;var Rf=Object.prototype.toString,Ue=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function jf(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var i={},n=t||{},o=n.decode||Lf,s=0;s<e.length;){var a=e.indexOf("=",s);if(a===-1)break;var c=e.indexOf(";",s);if(c===-1)c=e.length;else if(c<a){s=e.lastIndexOf(";",a-1)+1;continue}var d=e.slice(s,a).trim();if(i[d]===void 0){var p=e.slice(a+1,c).trim();p.charCodeAt(0)===34&&(p=p.slice(1,-1)),i[d]=Wf(p,o)}s=c+1}return i}function If(e,t,i){var n=i||{},o=n.encode||_f;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!Ue.test(e))throw new TypeError("argument name is invalid");var s=o(t);if(s&&!Ue.test(s))throw new TypeError("argument val is invalid");var a=e+"="+s;if(n.maxAge!=null){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(c)}if(n.domain){if(!Ue.test(n.domain))throw new TypeError("option domain is invalid");a+="; Domain="+n.domain}if(n.path){if(!Ue.test(n.path))throw new TypeError("option path is invalid");a+="; Path="+n.path}if(n.expires){var d=n.expires;if(!Bf(d)||isNaN(d.valueOf()))throw new TypeError("option expires is invalid");a+="; Expires="+d.toUTCString()}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.priority){var p=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(p){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var r=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(r){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a}function Lf(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function _f(e){return encodeURIComponent(e)}function Bf(e){return Rf.call(e)==="[object Date]"||e instanceof Date}function Wf(e,t){try{return t(e)}catch{return e}}});function Ae(e){return e[0]==="/"?e:"/"+e}function ft(e){return e.replace(/(?<!:)\/\/+/g,"/")}function qe(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function Of(e){return e.startsWith("/")?e.substring(1):e}function $f(e){return e.replace(/^\/|\/$/g,"")}function Nf(e){return typeof e=="string"||e instanceof String}function gt(...e){return e.filter(Nf).map((t,i)=>i===0?qe(t):i===e.length-1?Of(t):$f(t)).join("/")}function yt(e){return e.replace(/\\/g,"/")}var v=l(()=>{});function W(e,t){let i=new RegExp(`\\x1b\\[${t}m`,"g"),n=`\x1B[${e}m`,o=`\x1B[${t}m`;return function(s){return!Mf.enabled||s==null?s:n+(~(""+s).indexOf(o)?s.replace(i,o+n):s)+o}}var wt,li,di,ui,pi,Mf,hi,Fe,mi,AE,FE,EE,TE,PE,RE,fi,jE,Dt,IE,LE,gi,_E,BE,WE,OE,$E,NE,ME,zE,GE,UE,qE,k=l(()=>{pi=!0;typeof process<"u"&&({FORCE_COLOR:wt,NODE_DISABLE_COLORS:li,NO_COLOR:di,TERM:ui}=process.env||{},pi=process.stdout&&process.stdout.isTTY);Mf={enabled:!li&&di==null&&ui!=="dumb"&&(wt!=null&&wt!=="0"||pi)};hi=W(0,0),Fe=W(1,22),mi=W(2,22),AE=W(3,23),FE=W(4,24),EE=W(7,27),TE=W(8,28),PE=W(9,29),RE=W(30,39),fi=W(31,39),jE=W(32,39),Dt=W(33,39),IE=W(34,39),LE=W(35,39),gi=W(36,39),_E=W(37,39),BE=W(90,39),WE=W(90,39),OE=W(40,49),$E=W(41,49),NE=W(42,49),ME=W(43,49),zE=W(44,49),GE=W(45,49),UE=W(46,49),qE=W(47,49)});function zf(e){for(var t=[],i=0;i<e.length;){var n=e[i];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:i,value:e[i++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:i++,value:e[i++]});continue}if(n==="{"){t.push({type:"OPEN",index:i,value:e[i++]});continue}if(n==="}"){t.push({type:"CLOSE",index:i,value:e[i++]});continue}if(n===":"){for(var o="",s=i+1;s<e.length;){var a=e.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){o+=e[s++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(i));t.push({type:"NAME",index:i,value:o}),i=s;continue}if(n==="("){var c=1,d="",s=i+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){d+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));d+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(i));if(!d)throw new TypeError("Missing pattern at ".concat(i));t.push({type:"PATTERN",index:i,value:d}),i=s;continue}t.push({type:"CHAR",index:i,value:e[i++]})}return t.push({type:"END",index:i,value:""}),t}function Gf(e,t){t===void 0&&(t={});for(var i=zf(e),n=t.prefixes,o=n===void 0?"./":n,s="[^".concat(qf(t.delimiter||"/#?"),"]+?"),a=[],c=0,d=0,p="",r=function(X){if(d<i.length&&i[d].type===X)return i[d++].value},y=function(X){var ee=r(X);if(ee!==void 0)return ee;var Ge=i[d],T=Ge.type,_=Ge.index;throw new TypeError("Unexpected ".concat(T," at ").concat(_,", expected ").concat(X))},F=function(){for(var X="",ee;ee=r("CHAR")||r("ESCAPED_CHAR");)X+=ee;return X};d<i.length;){var O=r("CHAR"),j=r("NAME"),B=r("PATTERN");if(j||B){var L=O||"";o.indexOf(L)===-1&&(p+=L,L=""),p&&(a.push(p),p=""),a.push({name:j||c++,prefix:L,suffix:"",pattern:B||s,modifier:r("MODIFIER")||""});continue}var z=O||r("ESCAPED_CHAR");if(z){p+=z;continue}p&&(a.push(p),p="");var G=r("OPEN");if(G){var L=F(),J=r("NAME")||"",R=r("PATTERN")||"",Q=F();y("CLOSE"),a.push({name:J||(R?c++:""),pattern:J&&!R?s:R,prefix:L,suffix:Q,modifier:r("MODIFIER")||""});continue}y("END")}return a}function yi(e,t){return Uf(Gf(e,t),t)}function Uf(e,t){t===void 0&&(t={});var i=Hf(t),n=t.encode,o=n===void 0?function(d){return d}:n,s=t.validate,a=s===void 0?!0:s,c=e.map(function(d){if(typeof d=="object")return new RegExp("^(?:".concat(d.pattern,")$"),i)});return function(d){for(var p="",r=0;r<e.length;r++){var y=e[r];if(typeof y=="string"){p+=y;continue}var F=d?d[y.name]:void 0,O=y.modifier==="?"||y.modifier==="*",j=y.modifier==="*"||y.modifier==="+";if(Array.isArray(F)){if(!j)throw new TypeError('Expected "'.concat(y.name,'" to not repeat, but got an array'));if(F.length===0){if(O)continue;throw new TypeError('Expected "'.concat(y.name,'" to not be empty'))}for(var B=0;B<F.length;B++){var L=o(F[B],y);if(a&&!c[r].test(L))throw new TypeError('Expected all "'.concat(y.name,'" to match "').concat(y.pattern,'", but got "').concat(L,'"'));p+=y.prefix+L+y.suffix}continue}if(typeof F=="string"||typeof F=="number"){var L=o(String(F),y);if(a&&!c[r].test(L))throw new TypeError('Expected "'.concat(y.name,'" to match "').concat(y.pattern,'", but got "').concat(L,'"'));p+=y.prefix+L+y.suffix;continue}if(!O){var z=j?"an array":"a string";throw new TypeError('Expected "'.concat(y.name,'" to be ').concat(z))}}return p}}function qf(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Hf(e){return e&&e.sensitive?"":"i"}var wi=l(()=>{});var bi=ue((VE,Di)=>{"use strict";function He(){this._types=Object.create(null),this._extensions=Object.create(null);for(let e=0;e<arguments.length;e++)this.define(arguments[e]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}He.prototype.define=function(e,t){for(let i in e){let n=e[i].map(function(o){return o.toLowerCase()});i=i.toLowerCase();for(let o=0;o<n.length;o++){let s=n[o];if(s[0]!=="*"){if(!t&&s in this._types)throw new Error('Attempt to change mapping for "'+s+'" extension from "'+this._types[s]+'" to "'+i+'". Pass `force=true` to allow this, otherwise remove "'+s+'" from the list of extensions for "'+i+'".');this._types[s]=i}}if(t||!this._extensions[i]){let o=n[0];this._extensions[i]=o[0]!=="*"?o:o.substr(1)}}};He.prototype.getType=function(e){e=String(e);let t=e.replace(/^.*[/\\]/,"").toLowerCase(),i=t.replace(/^.*\./,"").toLowerCase(),n=t.length<e.length;return(i.length<t.length-1||!n)&&this._types[i]||null};He.prototype.getExtension=function(e){return e=/^\s*([^;\s]*)/.test(e)&&RegExp.$1,e&&this._extensions[e.toLowerCase()]||null};Di.exports=He});var ki=ue((JE,vi)=>{vi.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}});var Si=ue((YE,xi)=>{xi.exports={"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]}});var x=ue((ZE,Ci)=>{"use strict";var Kf=bi();Ci.exports=new Kf(ki(),Si())});function bt({onlyFirst:e=!1}={}){let t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e?void 0:"g")}var Ai=l(()=>{});var e3,Fi=l(()=>{Ai();e3=bt()});var Ti=ue((n3,vt)=>{var oe={};typeof vt>"u"?window.eastasianwidth=oe:vt.exports=oe;oe.eastAsianWidth=function(e){var t=e.charCodeAt(0),i=e.length==2?e.charCodeAt(1):0,n=t;return 55296<=t&&t<=56319&&56320<=i&&i<=57343&&(t&=1023,i&=1023,n=t<<10|i,n+=65536),n==12288||65281<=n&&n<=65376||65504<=n&&n<=65510?"F":n==8361||65377<=n&&n<=65470||65474<=n&&n<=65479||65482<=n&&n<=65487||65490<=n&&n<=65495||65498<=n&&n<=65500||65512<=n&&n<=65518?"H":4352<=n&&n<=4447||4515<=n&&n<=4519||4602<=n&&n<=4607||9001<=n&&n<=9002||11904<=n&&n<=11929||11931<=n&&n<=12019||12032<=n&&n<=12245||12272<=n&&n<=12283||12289<=n&&n<=12350||12353<=n&&n<=12438||12441<=n&&n<=12543||12549<=n&&n<=12589||12593<=n&&n<=12686||12688<=n&&n<=12730||12736<=n&&n<=12771||12784<=n&&n<=12830||12832<=n&&n<=12871||12880<=n&&n<=13054||13056<=n&&n<=19903||19968<=n&&n<=42124||42128<=n&&n<=42182||43360<=n&&n<=43388||44032<=n&&n<=55203||55216<=n&&n<=55238||55243<=n&&n<=55291||63744<=n&&n<=64255||65040<=n&&n<=65049||65072<=n&&n<=65106||65108<=n&&n<=65126||65128<=n&&n<=65131||110592<=n&&n<=110593||127488<=n&&n<=127490||127504<=n&&n<=127546||127552<=n&&n<=127560||127568<=n&&n<=127569||131072<=n&&n<=194367||177984<=n&&n<=196605||196608<=n&&n<=262141?"W":32<=n&&n<=126||162<=n&&n<=163||165<=n&&n<=166||n==172||n==175||10214<=n&&n<=10221||10629<=n&&n<=10630?"Na":n==161||n==164||167<=n&&n<=168||n==170||173<=n&&n<=174||176<=n&&n<=180||182<=n&&n<=186||188<=n&&n<=191||n==198||n==208||215<=n&&n<=216||222<=n&&n<=225||n==230||232<=n&&n<=234||236<=n&&n<=237||n==240||242<=n&&n<=243||247<=n&&n<=250||n==252||n==254||n==257||n==273||n==275||n==283||294<=n&&n<=295||n==299||305<=n&&n<=307||n==312||319<=n&&n<=322||n==324||328<=n&&n<=331||n==333||338<=n&&n<=339||358<=n&&n<=359||n==363||n==462||n==464||n==466||n==468||n==470||n==472||n==474||n==476||n==593||n==609||n==708||n==711||713<=n&&n<=715||n==717||n==720||728<=n&&n<=731||n==733||n==735||768<=n&&n<=879||913<=n&&n<=929||931<=n&&n<=937||945<=n&&n<=961||963<=n&&n<=969||n==1025||1040<=n&&n<=1103||n==1105||n==8208||8211<=n&&n<=8214||8216<=n&&n<=8217||8220<=n&&n<=8221||8224<=n&&n<=8226||8228<=n&&n<=8231||n==8240||8242<=n&&n<=8243||n==8245||n==8251||n==8254||n==8308||n==8319||8321<=n&&n<=8324||n==8364||n==8451||n==8453||n==8457||n==8467||n==8470||8481<=n&&n<=8482||n==8486||n==8491||8531<=n&&n<=8532||8539<=n&&n<=8542||8544<=n&&n<=8555||8560<=n&&n<=8569||n==8585||8592<=n&&n<=8601||8632<=n&&n<=8633||n==8658||n==8660||n==8679||n==8704||8706<=n&&n<=8707||8711<=n&&n<=8712||n==8715||n==8719||n==8721||n==8725||n==8730||8733<=n&&n<=8736||n==8739||n==8741||8743<=n&&n<=8748||n==8750||8756<=n&&n<=8759||8764<=n&&n<=8765||n==8776||n==8780||n==8786||8800<=n&&n<=8801||8804<=n&&n<=8807||8810<=n&&n<=8811||8814<=n&&n<=8815||8834<=n&&n<=8835||8838<=n&&n<=8839||n==8853||n==8857||n==8869||n==8895||n==8978||9312<=n&&n<=9449||9451<=n&&n<=9547||9552<=n&&n<=9587||9600<=n&&n<=9615||9618<=n&&n<=9621||9632<=n&&n<=9633||9635<=n&&n<=9641||9650<=n&&n<=9651||9654<=n&&n<=9655||9660<=n&&n<=9661||9664<=n&&n<=9665||9670<=n&&n<=9672||n==9675||9678<=n&&n<=9681||9698<=n&&n<=9701||n==9711||9733<=n&&n<=9734||n==9737||9742<=n&&n<=9743||9748<=n&&n<=9749||n==9756||n==9758||n==9792||n==9794||9824<=n&&n<=9825||9827<=n&&n<=9829||9831<=n&&n<=9834||9836<=n&&n<=9837||n==9839||9886<=n&&n<=9887||9918<=n&&n<=9919||9924<=n&&n<=9933||9935<=n&&n<=9953||n==9955||9960<=n&&n<=9983||n==10045||n==10071||10102<=n&&n<=10111||11093<=n&&n<=11097||12872<=n&&n<=12879||57344<=n&&n<=63743||65024<=n&&n<=65039||n==65533||127232<=n&&n<=127242||127248<=n&&n<=127277||127280<=n&&n<=127337||127344<=n&&n<=127386||917760<=n&&n<=917999||983040<=n&&n<=1048573||1048576<=n&&n<=1114109?"A":"N"};oe.characterLength=function(e){var t=this.eastAsianWidth(e);return t=="F"||t=="W"||t=="A"?2:1};function Ei(e){return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}oe.length=function(e){for(var t=Ei(e),i=0,n=0;n<t.length;n++)i=i+this.characterLength(t[n]);return i};oe.slice=function(e,t,i){textLen=oe.length(e),t=t||0,i=i||1,t<0&&(t=textLen+t),i<0&&(i=textLen+i);for(var n="",o=0,s=Ei(e),a=0;a<s.length;a++){var c=s[a],d=oe.length(c);if(o>=t-(d==2?1:0))if(o+d<=i)n+=c;else break;o+=d}return n}});var Ri=ue((i3,Pi)=>{"use strict";Pi.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var Vf,Jf,S=l(()=>{Fi();Vf=h(Ti(),1),Jf=h(Ri(),1)});var Yf,Zf,Xf,Qf,ji,C=l(()=>{({replace:Yf}=""),Zf=/[&<>'"]/g,Xf={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Qf=e=>Xf[e],ji=e=>Yf.call(e,Zf,Qf)});function ag(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function rg(e,t){if(!t||t.line===void 0||t.column===void 0)return"";let i=ag(e).split(`
`).map(a=>a.replace(/\t/g,"  ")),n=[];for(let a=-2;a<=2;a++)i[t.line+a]&&n.push(t.line+a);let o=0;for(let a of n){let c=`> ${a}`;c.length>o&&(o=c.length)}let s="";for(let a of n){let c=a===t.line-1;s+=c?"> ":"  ",s+=`${a+1} | ${i[a]}
`,c&&(s+=`${Array.from({length:o}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return s}function cg(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function go(e,t,i){var n;let o=((n=t?.split("/").pop())==null?void 0:n.replace(".astro",""))??"",s=(...a)=>{if(!cg(a))throw new P({...$i,message:$i.message(o)});return e(...a)};return Object.defineProperty(s,"name",{value:o,writable:!1}),s.isAstroComponentFactory=!0,s.moduleId=t,s.propagation=i,s}function lg(e){return go(e.factory,e.moduleId,e.propagation)}function K(e,t,i){return typeof e=="function"?go(e,t,i):lg(e)}function dg(){return t=>{if(typeof t=="string")throw new P({...Mi,message:Mi.message(JSON.stringify(t))});let i=[...Object.values(t)];if(i.length===0)throw new P({...zi,message:zi.message(JSON.stringify(t))});return Promise.all(i.map(n=>n()))}}function V(e){return{site:e?new URL(e):void 0,generator:`Astro v${yo}`,glob:dg()}}function ug(e,t){if(e[t])return e[t];if(t==="delete"&&e.del)return e.del;if(e.all)return e.all}async function Ui(e,t,i){var n;let{request:o,params:s}=t,a=(n=o.method)==null?void 0:n.toLowerCase(),c=ug(e,a);if(!i&&i===!1&&a&&a!=="get"&&console.warn(`
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

Update your code to remove this warning.`),Reflect.get(s,r)):void 0}});return c.call(e,d,o)}function wo(e){let t={};return i(e),Object.keys(t).join(" ");function i(n){n&&typeof n.forEach=="function"?n.forEach(i):n===Object(n)?Object.keys(n).forEach(o=>{n[o]&&i(o)}):(n=n===!1||n==null?"":String(n).trim(),n&&n.split(/\s+/).forEach(o=>{t[o]=!0}))}}function Qt(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}async function*_t(e){let t=e.getReader();try{for(;;){let{done:i,value:n}=await t.read();if(i)return;yield n}}finally{t.releaseLock()}}function pg(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function hg(e){return new Je(e)}function Do(e){return typeof e.getReader=="function"}async function*qi(e){if(Do(e))for await(let t of _t(e))yield le(t);else for await(let t of e)yield le(t)}function*mg(e){for(let t of e)yield le(t)}function le(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return hg(e);if(e instanceof Response&&e.body){let t=e.body;return qi(t)}else{if(typeof e.then=="function")return Promise.resolve(e).then(t=>le(t));if(Symbol.iterator in e)return mg(e);if(Symbol.asyncIterator in e||Do(e))return qi(e)}}return I(e)}function Ft(e,t={},i=new WeakSet){if(i.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);i.add(e);let n=e.map(o=>vo(o,t,i));return i.delete(e),n}function bo(e,t={},i=new WeakSet){if(i.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);i.add(e);let n=Object.fromEntries(Object.entries(e).map(([o,s])=>[o,vo(s,t,i)]));return i.delete(e),n}function vo(e,t={},i=new WeakSet){switch(Object.prototype.toString.call(e)){case"[object Date]":return[Y.Date,e.toISOString()];case"[object RegExp]":return[Y.RegExp,e.source];case"[object Map]":return[Y.Map,Ft(Array.from(e),t,i)];case"[object Set]":return[Y.Set,Ft(Array.from(e),t,i)];case"[object BigInt]":return[Y.BigInt,e.toString()];case"[object URL]":return[Y.URL,e.toString()];case"[object Array]":return[Y.JSON,Ft(e,t,i)];case"[object Uint8Array]":return[Y.Uint8Array,Array.from(e)];case"[object Uint16Array]":return[Y.Uint16Array,Array.from(e)];case"[object Uint32Array]":return[Y.Uint32Array,Array.from(e)];default:return e!==null&&typeof e=="object"?[Y.Value,bo(e,t,i)]:e===void 0?[Y.Value]:[Y.Value,e]}}function ko(e,t){return JSON.stringify(bo(e,t))}function gg(e,t){let i={isPage:!1,hydration:null,props:{}};for(let[n,o]of Object.entries(e))if(n.startsWith("server:")&&n==="server:root"&&(i.isPage=!0),n.startsWith("client:"))switch(i.hydration||(i.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),n){case"client:component-path":{i.hydration.componentUrl=o;break}case"client:component-export":{i.hydration.componentExport.value=o;break}case"client:component-hydration":break;case"client:display-name":break;default:{if(i.hydration.directive=n.split(":")[1],i.hydration.value=o,!t.has(i.hydration.directive)){let s=Array.from(t.keys()).map(a=>`client:${a}`).join(", ");throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${s}`)}if(i.hydration.directive==="media"&&typeof i.hydration.value!="string")throw new P(eg);break}}else n==="class:list"?o&&(i.props[n.slice(0,-5)]=wo(o)):i.props[n]=o;for(let n of Object.getOwnPropertySymbols(e))i.props[n]=e[n];return i}async function yg(e,t){let{renderer:i,result:n,astroId:o,props:s,attrs:a}=e,{hydrate:c,componentUrl:d,componentExport:p}=t;if(!p.value)throw new Error(`Unable to resolve a valid export for "${t.displayName}"! Please open an issue at https://astro.build/issues!`);let r={children:"",props:{uid:o}};if(a)for(let[F,O]of Object.entries(a))r.props[F]=Te(O);r.props["component-url"]=await n.resolve(decodeURI(d)),i.clientEntrypoint&&(r.props["component-export"]=p.value,r.props["renderer-url"]=await n.resolve(decodeURI(i.clientEntrypoint)),r.props.props=Te(ko(s,t))),r.props.ssr="",r.props.client=c;let y=await n.resolve("astro:scripts/before-hydration.js");return y.length&&(r.props["before-hydration-url"]=y),r.props.opts=Te(JSON.stringify({name:t.displayName,value:t.hydrateArgs||""})),fg.forEach(F=>{s[F]&&(r.props[F]=s[F])}),r}function wg(e){let t=0;if(e.length===0)return t;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);t=(t<<5)-t+n,t=t&t}return t}function Dg(e){let t,i="",n=wg(e),o=n<0?"Z":"";for(n=Math.abs(n);n>=Et;)t=n%Et,n=Math.floor(n/Et),i=Bt[t]+i;return n>0&&(i=Bt[n]+i),o+i}function xo(e){return e==null?!1:e.isAstroComponentFactory===!0}function bg(e,t){let i=t.propagation||"none";return t.moduleId&&e.componentMetadata.has(t.moduleId)&&i==="none"&&(i=e.componentMetadata.get(t.moduleId).propagation),i==="in-tree"||i==="self"}function en(e){return typeof e=="object"&&!!e[So]}function vg(e,t){return{[So]:!0,head:e,content:t}}function Sg(e){return e._metadata.hasHydrationScript?!1:e._metadata.hasHydrationScript=!0}function Cg(e,t){return e._metadata.hasDirectives.has(t)?!1:(e._metadata.hasDirectives.add(t),!0)}function Hi(e,t){let n=e.clientDirectives.get(t);if(!n)throw new Error(`Unknown directive: ${t}`);return n}function Ag(e,t,i){switch(t){case"both":return`${xg}<script>${Hi(e,i)};${kg}<\/script>`;case"directive":return`<script>${Hi(e,i)}<\/script>`}return""}function jg(e){var t;let i="";for(let[n,o]of Object.entries(e))i+=`const ${Rg(n)} = ${(t=JSON.stringify(o))==null?void 0:t.replace(/<\/script>/g,"\\x3C/script>")};
`;return I(i)}function Vi(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}function E(e,t,i=!0){if(e==null)return"";if(e===!1)return Eg.test(t)||Tg.test(t)?I(` ${t}="false"`):"";if(Pg.has(t))return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),"";if(t==="class:list"){let n=we(wo(e),i);return n===""?"":I(` ${t.slice(0,-5)}="${n}"`)}if(t==="style"&&!(e instanceof me)){if(Array.isArray(e)&&e.length===2)return I(` ${t}="${we(`${Ki(e[0])};${e[1]}`,i)}"`);if(typeof e=="object")return I(` ${t}="${we(Ki(e),i)}"`)}return t==="className"?I(` class="${we(e,i)}"`):e===!0&&(t.startsWith("data-")||Fg.test(t))?I(` ${t}`):I(` ${t}="${we(e,i)}"`)}function Wt(e,t=!0){let i="";for(let[n,o]of Object.entries(e))i+=E(o,n,t);return I(i)}function ae(e,{props:t,children:i=""},n=!0){let{lang:o,"data-astro-id":s,"define:vars":a,...c}=t;return a&&(e==="style"&&(delete c["is:global"],delete c["is:scoped"]),e==="script"&&(delete c.hoist,i=jg(a)+`
`+i)),(i==null||i=="")&&tn.test(e)?`<${e}${Wt(c,n)} />`:`<${e}${Wt(c,n)}>${i}</${e}>`}function Ji(e){e._metadata.hasRenderedHead=!0;let t=Array.from(e.styles).filter(Pt).map(s=>s.props.rel==="stylesheet"?ae("link",s):ae("style",s));e.styles.clear();let i=Array.from(e.scripts).filter(Pt).map(s=>ae("script",s,!1)),o=Array.from(e.links).filter(Pt).map(s=>ae("link",s,!1)).join(`
`)+t.join(`
`)+i.join(`
`);if(e._metadata.extraHead.length>0)for(let s of e._metadata.extraHead)o+=s;return I(o)}function*Co(){yield{type:"head"}}function*te(){yield{type:"maybe-head"}}function Ig(e){return!!e[Ao]}function st(e,t,i){return!t&&i?st(e,i):{async render(n){await De(n,typeof t=="function"?t(e):t)}}}async function Se(e,t,i){let n="",o=null,s={write(c){c instanceof Response||(typeof c=="object"&&"type"in c&&typeof c.type=="string"?(o===null&&(o=[]),o.push(c)):n+=fe(e,c))}};return await st(e,t,i).render(s),I(new Ye(n,o))}async function Fo(e,t={}){let i=null,n={};return t&&await Promise.all(Object.entries(t).map(([o,s])=>Se(e,s).then(a=>{a.instructions&&(i===null&&(i=[]),i.push(...a.instructions)),n[o]=a}))),{slotInstructions:i,children:n}}function nn(e,t){if(typeof t.type=="string"){let i=t;switch(i.type){case"directive":{let{hydration:n}=i,o=n&&Sg(e),s=n&&Cg(e,n.directive),a=o?"both":s?"directive":null;if(a){let c=Ag(e,a,n.directive);return I(c)}else return""}case"head":return e._metadata.hasRenderedHead?"":Ji(e);case"maybe-head":return e._metadata.hasRenderedHead||e._metadata.headInTree?"":Ji(e);default:{if(t instanceof Response)return"";throw new Error(`Unknown chunk type: ${t.type}`)}}}else{if(Ig(t)){let i="",n=t;if(n.instructions)for(let o of n.instructions)i+=nn(e,o);return i+=t.toString(),i}return t.toString()}}function fe(e,t){return ArrayBuffer.isView(t)?Lg.decode(t):nn(e,t)}function _g(e,t){if(ArrayBuffer.isView(t))return t;{let i=nn(e,t);return Ze.encode(i.toString())}}function Bg(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}async function De(e,t){if(t=await t,t instanceof Ye)e.write(t);else if(pg(t))e.write(t);else if(Array.isArray(t))for(let i of t)await De(e,i);else if(typeof t=="function")await De(e,t());else if(typeof t=="string")e.write(I(Te(t)));else if(!(!t&&t!==0))if(Bg(t))await t.render(e);else if(jo(t))await t.render(e);else if($g(t))await t.render(e);else if(ArrayBuffer.isView(t))e.write(t);else if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))for await(let i of t)await De(e,i);else e.write(t)}function Wg(e,t){if(e!=null)for(let i of Object.keys(e))i.startsWith("client:")&&console.warn(`You are attempting to render <${t} ${i} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function Og(e,t,i,n,o={}){Wg(n,t);let s=new $t(e,n,o,i);return bg(e,i)&&!e._metadata.propagators.has(i)&&e._metadata.propagators.set(i,s),s}function $g(e){return typeof e=="object"&&!!e[To]}function jo(e){return typeof e=="object"&&!!e[Ro]}function w(e,...t){return new Nt(e,t)}async function Io(e,t,i,n,o=!1,s){let a=await Lo(e,t,i,n,s);if(a instanceof Response)return a;let c="",d=!1,p={write(r){if(o&&!d&&(d=!0,!/<!doctype html/i.test(String(r)))){let y=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;c+=y}r instanceof Response||(c+=fe(e,r))}};return await a.render(p),c}async function Ng(e,t,i,n,o=!1,s){let a=await Lo(e,t,i,n,s);if(a instanceof Response)return a;let c=!1;return o&&await Mg(e),new ReadableStream({start(d){let p={write(r){if(o&&!c&&(c=!0,!/<!doctype html/i.test(String(r)))){let F=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;d.enqueue(Ze.encode(F))}if(r instanceof Response)throw new P({...Xt});let y=_g(e,r);d.enqueue(y)}};(async()=>{try{await a.render(p),d.close()}catch(r){P.is(r)&&!r.loc&&r.setLocation({file:s?.component}),setTimeout(()=>d.error(r),0)}})()}})}async function Lo(e,t,i,n,o){let s=await t(e,i,n);if(s instanceof Response)return s;if(!jo(s))throw new P({...Ii,message:Ii.message(o?.route,typeof s),location:{file:o?.component}});return en(s)?s.content:s}async function Mg(e){let t=e._metadata.propagators.values();for(;;){let{value:i,done:n}=t.next();if(n)break;let o=await i.init(e);en(o)&&e._metadata.extraHead.push(o.head)}}function zg(e){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(e)}async function Gg(e,t,i,n){let o=Ug(t),s="";for(let a in i)s+=` ${a}="${we(await i[a])}"`;return I(`<${o}${s}>${await Se(e,n?.default)}</${o}>`)}function Ug(e){let t=customElements.getName(e);return t||e.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}function Hg(e){switch(e?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue","@astrojs/svelte","@astrojs/lit"]}}function Kg(e){return e===m}function Vg(e){return e&&e["astro:html"]===!0}function Zg(e,t){let i=t?Yg:Jg;return e.replace(i,"")}async function Xg(e,t,i,n,o={}){var s,a,c;if(!i&&!n["client:only"])throw new Error(`Unable to render ${t} because it is ${i}!
Did you forget to import the component or is it possible there is a typo?`);let{renderers:d,clientDirectives:p}=e,r={astroStaticSlot:!0,displayName:t},{hydration:y,isPage:F,props:O}=gg(n,p),j="",B;y&&(r.hydrate=y.directive,r.hydrateArgs=y.value,r.componentExport=y.componentExport,r.componentUrl=y.componentUrl);let L=Hg(r.componentUrl),z=d.filter(T=>T.name!=="astro:jsx"),{children:G,slotInstructions:J}=await Fo(e,o),R;if(r.hydrate!=="only"){let T=!1;try{T=i&&i[Ot]}catch{}if(T){let _=i[Ot];R=d.find(({name:U})=>U===_)}if(!R){let _;for(let U of d)try{if(await U.ssr.check.call({result:e},i,O,G)){R=U;break}}catch(ut){_??(_=ut)}if(!R&&_)throw _}if(!R&&typeof HTMLElement=="function"&&zg(i)){let _=await Gg(e,i,n,o);return{render(U){U.write(_)}}}}else{if(r.hydrateArgs){let T=r.hydrateArgs,_=Yi.has(T)?Yi.get(T):T;R=d.find(({name:U})=>U===`@astrojs/${_}`||U===_)}if(!R&&z.length===1&&(R=z[0]),!R){let T=(s=r.componentUrl)==null?void 0:s.split(".").pop();R=d.filter(({name:_})=>_===`@astrojs/${T}`||_===T)[0]}}if(R)r.hydrate==="only"?j=await Se(e,o?.fallback):{html:j,attrs:B}=await R.ssr.renderToStaticMarkup.call({result:e},i,O,G,r);else{if(r.hydrate==="only")throw new P({...St,message:St.message(r.displayName),hint:St.hint(L.map(T=>T.replace("@astrojs/","")).join("|"))});if(typeof i!="string"){let T=z.filter(U=>L.includes(U.name)),_=z.length>1;if(T.length===0)throw new P({...xt,message:xt.message(r.displayName,(a=r?.componentUrl)==null?void 0:a.split(".").pop(),_,z.length),hint:xt.hint(Vi(L.map(U=>"`"+U+"`")))});if(T.length===1)R=T[0],{html:j,attrs:B}=await R.ssr.renderToStaticMarkup.call({result:e},i,O,G,r);else throw new Error(`Unable to render ${r.displayName}!

This component likely uses ${Vi(L)},
but Astro encountered an error during server-side rendering.

Please ensure that ${r.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(R&&!R.clientEntrypoint&&R.name!=="@astrojs/lit"&&r.hydrate)throw new P({...Li,message:Li.message(t,r.hydrate,R.name)});if(!j&&typeof i=="string"){let T=Qg(i),_=Object.values(G).join(""),U=w`<${T}${Wt(O)}${I(_===""&&tn.test(T)?"/>":`>${_}</${T}>`)}`;j="";let ut={write(ci){ci instanceof Response||(j+=fe(e,ci))}};await U.render(ut)}if(!y)return{render(T){var _;if(J)for(let U of J)T.write(U);F||R?.name==="astro:jsx"?T.write(j):j&&j.length>0&&T.write(I(Zg(j,((_=R?.ssr)==null?void 0:_.supportsAstroStaticSlot)??!1)))}};let Q=Dg(`<!--${r.componentExport.value}:${r.componentUrl}-->
${j}
${ko(O,r)}`),X=await yg({renderer:R,result:e,astroId:Q,props:O,attrs:B},r),ee=[];if(j){if(Object.keys(G).length>0)for(let T of Object.keys(G)){let _=(c=R?.ssr)!=null&&c.supportsAstroStaticSlot?r.hydrate?"astro-slot":"astro-static-slot":"astro-slot",U=T==="default"?`<${_}>`:`<${_} name="${T}">`;j.includes(U)||ee.push(T)}}else ee=Object.keys(G);let Ge=ee.length>0?ee.map(T=>`<template data-astro-template${T!=="default"?`="${T}"`:""}>${G[T]}</template>`).join(""):"";return X.children=`${j??""}${Ge}`,X.children&&(X.props["await-children"]=""),{render(T){if(J)for(let _ of J)T.write(_);T.write({type:"directive",hydration:y}),T.write(I(ae("astro-island",X,!1)))}}}function Qg(e){let t=/[&<>'"\s]+/g;return t.test(e)?e.trim().split(t)[0].trim():e}async function ey(e,t={}){let i=await Se(e,t?.default);return{render(n){i!=null&&n.write(i)}}}async function ty(e,t,i,n={}){let{slotInstructions:o,children:s}=await Fo(e,n),a=t({slots:s}),c=o?o.map(d=>fe(e,d)).join(""):"";return{render(d){d.write(I(c+a))}}}function ny(e,t,i,n,o={}){let s=Og(e,t,i,n,o),a=[],c={write:p=>a.push(p)},d=s.render(c);return{async render(p){for(let r of a)p.write(r);a.length=0,c.write=r=>p.write(r),await d}}}async function N(e,t,i,n,o={}){return Qt(i)&&(i=await i),Kg(i)?await ey(e,o):Vg(i)?await ty(e,i,n,o):xo(i)?ny(e,t,i,n,o):await Xg(e,t,i,n,o)}async function Mt(e,t,i,n,o={},s=!1,a){let c="",d=!1,p="";if(iy(i))for(let r of te())p+=fe(e,r);try{let r={write(F){if(s&&!d&&(d=!0,!/<!doctype html/i.test(String(F)))){let O=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;c+=O+p}F instanceof Response||(c+=fe(e,F))}};await(await N(e,t,i,n,o)).render(r)}catch(r){throw P.is(r)&&!r.loc&&r.setLocation({file:a?.component}),r}return c}function iy(e){return!!e?.[qg]}async function ce(e,t){switch(!0){case t instanceof me:return t.toString().trim()===""?"":t;case typeof t=="string":return I(Te(t));case typeof t=="function":return t;case(!t&&t!==0):return"";case Array.isArray(t):return I((await Promise.all(t.map(n=>ce(e,n)))).join(""))}let i;return t.props?t.props[re.symbol]?i=t.props[re.symbol]:i=new re(t):i=new re(t),Gt(e,t,i)}async function Gt(e,t,i){if(Re(t)){switch(!0){case!t.type:throw new Error(`Unable to render ${e.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);case t.type===Symbol.for("astro:fragment"):return ce(e,t.props.children);case t.type.isAstroComponentFactory:{let n={},o={};for(let[c,d]of Object.entries(t.props??{}))c==="children"||d&&typeof d=="object"&&d.$$slot?o[c==="children"?"default":c]=()=>ce(e,d):n[c]=d;let s=await Io(e,t.type,n,o);if(s instanceof Response)throw s;return I(s)}case(!t.type&&t.type!==0):return"";case(typeof t.type=="string"&&t.type!==Zi):return I(await oy(e,t.type,t.props??{}))}if(t.type){let n=function(r){if(Array.isArray(r))return r.map(y=>n(y));if(!Re(r)){a.default.push(r);return}if("slot"in r.props){a[r.props.slot]=[...a[r.props.slot]??[],r],delete r.props.slot;return}a.default.push(r)};if(typeof t.type=="function"&&t.type["astro:renderer"]&&i.increment(),typeof t.type=="function"&&t.props["server:root"]){let r=await t.type(t.props??{});return await ce(e,r)}if(typeof t.type=="function")if(i.haveNoTried()||i.isCompleted()){ay();try{let r=await t.type(t.props??{}),y;if(r?.[at])return y=await Gt(e,r,i),y;if(!r)return y=await Gt(e,r,i),y}catch(r){if(i.isCompleted())throw r;i.increment()}finally{ry()}}else i.increment();let{children:o=null,...s}=t.props??{},a={default:[]};n(o);for(let[r,y]of Object.entries(s))y.$$slot&&(a[r]=y,delete s[r]);let c=[],d={};for(let[r,y]of Object.entries(a))c.push(ce(e,y).then(F=>{F.toString().trim().length!==0&&(d[r]=()=>F)}));await Promise.all(c),s[re.symbol]=i;let p;return t.type===Zi&&t.props["client:only"]?p=await Mt(e,t.props["client:display-name"]??"",null,s,d):p=await Mt(e,typeof t.type=="function"?t.type.name:t.type,t.type,s,d),I(p)}}return I(`${t}`)}async function oy(e,t,{children:i,...n}){return I(`<${t}${f(n)}${I((i==null||i=="")&&tn.test(t)?"/>":`>${i==null?"":await ce(e,sy(t,i))}</${t}>`)}`)}function sy(e,t){return typeof t=="string"&&(e==="style"||e==="script")?I(t):t}function ay(){if(on++,!zt){zt=console.error;try{console.error=cy}catch{}}}function ry(){on--}function cy(e,...t){on>0&&typeof e=="string"&&e.includes("Warning: Invalid hook call.")&&e.includes("https://reactjs.org/link/invalid-hook-call")||zt(e,...t)}function ly(){var e,t,i;return Pe=(i=class extends Response{constructor(o,s){let a=o instanceof ReadableStream;super(a?null:o,s);$(this,e,void 0);$(this,t,void 0);q(this,e,a),q(this,t,o)}get body(){return D(this,t)}async text(){if(D(this,e)&&Ut){let o=new TextDecoder,s=D(this,t),a="";for await(let c of _t(s))a+=o.decode(c);return a}return super.text()}async arrayBuffer(){if(D(this,e)&&Ut){let o=D(this,t),s=[],a=0;for await(let p of _t(o))s.push(p),a+=p.length;let c=new Uint8Array(a),d=0;for(let p of s)c.set(p,d),d+=p.length;return c}return super.arrayBuffer()}clone(){return new Pe(D(this,t),{status:this.status,statusText:this.statusText,headers:this.headers})}},e=new WeakMap,t=new WeakMap,i),Pe}async function uy(e,t,i,n,o,s){var a,c;if(!xo(t)){e._metadata.headInTree=((a=e.componentMetadata.get(t.moduleId))==null?void 0:a.containsHead)??!1;let F={...i??{},"server:root":!0},O=await Mt(e,t.name,t,F,null,!0,s),j=Ze.encode(O);return new Response(j,{headers:new Headers([["Content-Type","text/html; charset=utf-8"],["Content-Length",j.byteLength.toString()]])})}e._metadata.headInTree=((c=e.componentMetadata.get(t.moduleId))==null?void 0:c.containsHead)??!1;let d;if(o?d=await Ng(e,t,i,n,!0,s):d=await Io(e,t,i,n,!0,s),d instanceof Response)return d;let p=e.response,r=new Headers(p.headers);return!o&&typeof d=="string"&&(d=Ze.encode(d),r.set("Content-Length",d.byteLength.toString())),dy(d,{...p,headers:r})}function py({props:e,children:t}){return ae("script",{props:e,children:t})}function Xi(e,t){if(t.type==="external")return Array.from(e.styles).some(i=>i.props.href===t.src)?"":ae("link",{props:{rel:"stylesheet",href:t.src},children:""});if(t.type==="inline")return Array.from(e.styles).some(i=>i.children.includes(t.content))?"":ae("style",{props:{type:"text/css"},children:t.content})}function f(e={},t,{class:i}={}){let n="";i&&(typeof e.class<"u"?e.class+=` ${i}`:typeof e["class:list"]<"u"?e["class:list"]=[e["class:list"],i]:e.class=i);for(let[o,s]of Object.entries(e))n+=E(s,o,!0);return I(n)}function Re(e){return e&&typeof e=="object"&&e[at]}function hy(e){if(typeof e.type=="string")return e;let t={};if(Re(e.props.children)){let i=e.props.children;if(!Re(i)||!("slot"in i.props))return;let n=eo(i.props.slot);t[n]=[i],t[n].$$slot=!0,delete i.props.slot,delete e.props.children}Array.isArray(e.props.children)&&(e.props.children=e.props.children.map(i=>{if(!Re(i)||!("slot"in i.props))return i;let n=eo(i.props.slot);return Array.isArray(t[n])?t[n].push(i):(t[n]=[i],t[n].$$slot=!0),delete i.props.slot,Qi}).filter(i=>i!==Qi)),Object.assign(e.props,t)}function _o(e){return typeof e=="string"?I(e):Array.isArray(e)?e.map(t=>_o(t)):e}function my(e){if("set:html"in e.props||"set:text"in e.props){if("set:html"in e.props){let t=_o(e.props["set:html"]);delete e.props["set:html"],Object.assign(e.props,{children:t});return}if("set:text"in e.props){let t=e.props["set:text"];delete e.props["set:text"],Object.assign(e.props,{children:t});return}}}function g(e,t){let i={[Ot]:"astro:jsx",[at]:!0,type:e,props:t??{}};return my(i),hy(i),i}async function fy(e,t,{default:i=null,...n}={}){if(typeof e!="function")return!1;let o={};for(let[s,a]of Object.entries(n)){let c=Bo(s);o[c]=a}try{return(await e({...t,...o,children:i}))[at]}catch(s){let a=s;if(e[Symbol.for("mdx-component")])throw yy({message:a.message,title:a.name,hint:"This issue often occurs when your MDX component encounters runtime errors.",name:a.name,stack:a.stack})}return!1}async function gy(e,t={},{default:i=null,...n}={}){let o={};for(let[c,d]of Object.entries(n)){let p=Bo(c);o[p]=d}let{result:s}=this;return{html:await ce(s,g(e,{...t,...o,children:i}))}}function yy({message:e,name:t,stack:i,hint:n}){let o=new Error(e);return o.name=t,o.stack=i,o.hint=n,o}function sn(e,t){Reflect.set(e,$o,t)}function by(e){let t=Reflect.get(e,$o);if(t!=null)return t}function*vy(e){let t=by(e);if(!t)return[];for(let i of t.headers())yield i;return[]}function No(e,t,i,n){let o=e.level,s=e.dest,a={type:i,level:t,message:n};Qe[o]>Qe[t]||s.write(a)}function ge(e,t,i){return No(e,"warn",t,i)}function xy(e,t,i){return No(e,"error",t,i)}function Sy(...e){"_astroGlobalDebug"in globalThis&&globalThis._astroGlobalDebug(...e)}function Ey(e){return e?.type==="redirect"}function Ty(e,t){let i=e.redirectRoute,n=e.redirect;return typeof i<"u"?i?.generate(t)||i?.pathname||"/":typeof n=="string"?n:typeof n>"u"?"/":n.destination}function Py(e,t="GET"){let i=e.redirectRoute;return typeof i?.redirect=="object"?i.redirect.status:t!=="GET"?308:301}async function Mo(e,t,i,n){let o=!1,s,c=t(i,async()=>(o=!0,s=n(),s));return await Promise.resolve(c).then(async d=>{if(Ry(d)&&ge(e,"middleware",`Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${Fe("Response")} objects.`),o)if(typeof d<"u"){if(!(d instanceof Response))throw new P(At);return d}else{if(s)return s;throw new P(At)}else{if(typeof d>"u")throw new P(og);if(d instanceof Response)return d;throw new P(At)}})}function Ry(e){return!(e instanceof Response)&&typeof e=="object"&&typeof e.body=="string"}function zo({request:e,params:t,site:i,props:n,adapterName:o}){let s={cookies:new Xe(e),request:e,params:t,site:i?new URL(i):void 0,generator:`Astro v${yo}`,props:n,redirect(a,c){return new Response(null,{status:c||302,headers:{Location:a}})},url:new URL(e.url),get clientAddress(){if(!(io in e))throw o?new P({...Ve,message:Ve.message(o)}):new P(mo);return Reflect.get(e,io)}};return Object.defineProperty(s,"locals",{enumerable:!0,get(){return Reflect.get(e,oo)},set(a){if(typeof a!="object")throw new P(fo);Reflect.set(e,oo,a)}}),s}async function jy(e,t,i,n){var o;let s=zo({request:i.request,params:i.params,props:i.props,site:t.site,adapterName:t.adapterName}),a;return n?a=await Mo(t.logging,n,s,async()=>await Ui(e,s,t.ssr)):a=await Ui(e,s,t.ssr),a instanceof Response?(sn(a,s.cookies),{type:"response",response:a}):(t.ssr&&!((o=i.route)!=null&&o.prerender)&&(a.hasOwnProperty("headers")&&ge(t.logging,"ssr","Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."),a.encoding&&ge(t.logging,"ssr","`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.")),{...a,type:"simple",cookies:s.cookies})}function Ly(e){var t;if(e&&((t=e.expressions)==null?void 0:t.length)===1)return e.expressions[0]}function _y(e){let{markdown:t,params:i,request:n,resolve:o,locals:s}=e,a=new URL(n.url),c=new Headers;c.set("Content-Type","text/html");let d={status:e.status,statusText:"OK",headers:c};Object.defineProperty(d,"headers",{value:d.headers,enumerable:!0,writable:!1});let p=e.cookies,r={styles:e.styles??new Set,scripts:e.scripts??new Set,links:e.links??new Set,componentMetadata:e.componentMetadata??new Map,renderers:e.renderers,clientDirectives:e.clientDirectives,compressHTML:e.compressHTML,pathname:e.pathname,cookies:p,createAstro(y,F,O){let j=new Kt(r,O,e.logging),B={__proto__:y,get clientAddress(){if(!(so in n))throw e.adapterName?new P({...Ve,message:Ve.message(e.adapterName)}):new P(mo);return Reflect.get(n,so)},get cookies(){return p||(p=new Xe(n),r.cookies=p,p)},params:i,props:F,locals:s,request:n,url:a,redirect(L,z){if(n[Iy])throw new P({...Xt});return new Response(null,{status:z||302,headers:{Location:L}})},response:d,slots:j};return Object.defineProperty(B,"__renderMarkdown",{enumerable:!1,writable:!1,value:async function(L,z){if(typeof Deno<"u")throw new Error("Markdown is not supported in Deno SSR");if(!jt){let J="@astrojs/";J+="markdown-remark",jt=(await import(J)).renderMarkdown}let{code:G}=await jt(L,{...t,...z??{}});return G}}),B},resolve:o,response:d,_metadata:{hasHydrationScript:!1,hasRenderedHead:!1,hasDirectives:new Set,headInTree:!1,extraHead:[],propagators:new Map}};return r}async function ao({mod:e,renderContext:t,env:i,cookies:n}){if(Ey(t.route))return new Response(null,{status:Py(t.route,t.request.method),headers:{location:Ty(t.route,t.params)}});let o=e.default;if(!o)throw new Error(`Expected an exported Astro component but received typeof ${typeof o}`);let s=_y({adapterName:i.adapterName,links:t.links,styles:t.styles,logging:i.logging,markdown:i.markdown,params:t.params,pathname:t.pathname,componentMetadata:t.componentMetadata,resolve:i.resolve,renderers:i.renderers,clientDirectives:i.clientDirectives,compressHTML:i.compressHTML,request:t.request,site:i.site,scripts:t.scripts,ssr:i.ssr,status:t.status??200,cookies:n,locals:t.locals??{}});typeof e.components=="object"&&Object.assign(t.props,{components:e.components});let a=await uy(s,o,t.props,null,i.streaming,t.route);return s.cookies&&sn(a,s.cookies),a}async function ro(e,t,i,n,o){let s=zo({request:t.request,params:t.params,props:t.props,site:i.site,adapterName:i.adapterName});switch(e){case"page":case"redirect":return o?await Mo(i.logging,o,s,()=>ao({mod:n,renderContext:t,env:i,cookies:s.cookies})):await ao({mod:n,renderContext:t,env:i,cookies:s.cookies});case"endpoint":return await jy(n,i,t,o);default:throw new Error(`Couldn't find route of type [${e}]`)}}function By(e,t){return e instanceof Response&&(t==="page"||t==="redirect")}function Oy([e,t],i){if(!Wy.includes(typeof t))throw new P({...Wi,message:Wi.message(e,t,typeof t),location:{file:i}})}function $y(e,{ssr:t,route:i}){if((!t||i.prerender)&&!e.getStaticPaths)throw new P({...ig,location:{file:i.component}})}function Ny(e,t,i){if(!Array.isArray(e))throw new P({...Bi,message:Bi.message(typeof e),location:{file:i.component}});e.forEach(n=>{if(n.params===void 0||n.params===null||n.params&&Object.keys(n.params).length===0)throw new P({...ng,location:{file:i.component}});if(typeof n.params!="object")throw new P({..._i,message:_i.message(typeof n.params),location:{file:i.component}});for(let[o,s]of Object.entries(n.params))typeof s>"u"||typeof s=="string"||typeof s=="number"||ge(t,"getStaticPaths",`invalid path param: ${o}. A string, number or undefined value was expected, but got \`${JSON.stringify(s)}\`.`),typeof s=="string"&&s===""&&ge(t,"getStaticPaths",`invalid path param: ${o}. \`undefined\` expected for an optional param, but got empty string.`)})}function My(e){return i=>{let n={};return e.forEach((o,s)=>{o.startsWith("...")?n[o.slice(3)]=i[s+1]?decodeURIComponent(i[s+1]):void 0:n[o]=decodeURIComponent(i[s+1])}),n}}function Go(e,t){let i=Object.entries(e).reduce((n,o)=>{Oy(o,t.component);let[s,a]=o;return n[s]=a?.toString(),n},{});return JSON.stringify(t.generate(i))}function zy(e){return function(i,n={}){let{pageSize:o,params:s,props:a}=n,c=o||10,d="page",p=s||{},r=a||{},y;if(e.params.includes(`...${d}`))y=!1;else if(e.params.includes(`${d}`))y=!0;else throw new P({...Ni,message:Ni.message(d)});let F=Math.max(1,Math.ceil(i.length/c));return[...Array(F).keys()].map(j=>{let B=j+1,L=c===1/0?0:(B-1)*c,z=Math.min(L+c,i.length),G={...p,[d]:y||B>1?String(B):void 0},J=It(e.generate({...G})),R=B===F?void 0:It(e.generate({...G,page:String(B+1)})),Q=B===1?void 0:It(e.generate({...G,page:!y&&B-1===1?void 0:String(B-1)}));return{params:G,props:{...r,page:{data:i.slice(L,z),start:L,end:z-1,size:c,total:i.length,currentPage:B,lastPage:F,url:{current:J,next:R,prev:Q}}}}})}}function It(e){return e===""?"/":e}async function Gy({mod:e,route:t,routeCache:i,isValidate:n,logging:o,ssr:s}){let a=i.get(t);if(a?.staticPaths)return a.staticPaths;if($y(e,{ssr:s,route:t}),s&&!t.prerender){let p=Object.assign([],{keyed:new Map});return i.set(t,{...a,staticPaths:p}),p}if(!e.getStaticPaths)throw new Error("Unexpected Error.");let c=[];c=await e.getStaticPaths({paginate:zy(t),rss(){throw new P(tg)}}),Array.isArray(c)&&(c=c.flat()),n&&Ny(c,o,t);let d=c;d.keyed=new Map;for(let p of d){let r=Go(p.params,t);d.keyed.set(r,p)}return i.set(t,{...a,staticPaths:d}),d}function Uy(e,t,i){let n=Go(t,i),o=e.keyed.get(n);if(o)return o;Sy("findPathItemByKey",`Unexpected cache miss looking for ${n}`)}async function qy(e){let{logging:t,mod:i,route:n,routeCache:o,pathname:s,ssr:a}=e;if(!n||n.pathname)return[{},{}];let c=Hy(n,s)??{};Ky(n,i,c);let d=await Gy({mod:i,route:n,routeCache:o,isValidate:!0,logging:t,ssr:a}),p=Uy(d,c,n);if(!p&&(!a||n.prerender))throw new P({...kt,message:kt.message(s),hint:kt.hint([n.component])});let r=p?.props?{...p.props}:{};return[c,r]}function Hy(e,t){if(e.params.length){let i=e.pattern.exec(decodeURIComponent(t));if(i)return My(e.params)(i)}}function Ky(e,t,i){if(e.type==="endpoint"&&t.getStaticPaths){let n=e.segments[e.segments.length-1],o=Object.values(i),s=o[o.length-1];if(n.length===1&&n[0].dynamic&&s===void 0)throw new P({...Ct,message:Ct.message(e.route),hint:Ct.hint(e.component),location:{file:e.component}})}}async function lo(e){let t=e.request,i=e.pathname??new URL(t.url).pathname,[n,o]=await qy({mod:e.mod,route:e.route,routeCache:e.env.routeCache,pathname:i,logging:e.env.logging,ssr:e.env.ssr}),s={...e,pathname:i,params:n,props:o};return Object.defineProperty(s,"locals",{enumerable:!0,get(){return Reflect.get(t,co)},set(a){if(typeof a!="object")throw new P(fo);Reflect.set(t,co,a)}}),s}function an(e,t,i){return i?gt(i,yt(e)):t?Ae(gt(t,yt(e))):e}function Vy(e,t,i){return e.type==="inline"?{props:{type:"text/css"},children:e.content}:{props:{rel:"stylesheet",href:an(e.src,t,i)},children:""}}function Jy(e,t,i){return new Set(e.map(n=>Vy(n,t,i)))}function Yy(e,t,i){return e.type==="external"?Zy(e.value,t,i):{props:{type:"module"},children:e.value}}function Zy(e,t,i){return{props:{type:"module",src:an(e,t,i)},children:""}}function uo(e,t){return t.routes.find(i=>i.pattern.test(decodeURI(e)))}function Xy(e,t){let i=e.map(s=>"/"+s.map(a=>a.spread?`:${a.content.slice(3)}(.*)?`:a.dynamic?`:${a.content}`:a.content.normalize().replace(/\?/g,"%3F").replace(/#/g,"%23").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("")).join(""),n="";return t==="always"&&e.length&&(n="/"),yi(i+n)}function Jt(e){return{route:e.route,type:e.type,pattern:new RegExp(e.pattern),params:e.params,component:e.component,generate:Xy(e.segments,e._meta.trailingSlash),pathname:e.pathname||void 0,segments:e.segments,prerender:e.prerender,redirect:e.redirect,redirectRoute:e.redirectRoute?Jt(e.redirectRoute):void 0}}function Uo(e){let t=[];for(let s of e.routes){t.push({...s,routeData:Jt(s.routeData)});let a=s;a.routeData=Jt(s.routeData)}let i=new Set(e.assets),n=new Map(e.componentMetadata),o=new Map(e.clientDirectives);return{...e,assets:i,componentMetadata:n,clientDirectives:o,routes:t}}function Me({globResult:e,contentDir:t}){let i={};for(let n in e){let s=n.replace(new RegExp(`^${t}`),"").split("/");if(s.length<=1)continue;let a=s[0];i[a]??(i[a]={}),i[a][n]=e[n]}return i}function Ko({contentCollectionToEntryMap:e,dataCollectionToEntryMap:t,getRenderEntryImport:i}){return async function(o,s){let a;if(o in e)a="content";else if(o in t)a="data";else throw new P({...Gi,message:Gi.message(o)});let c=Object.values(a==="content"?e[o]:t[o]),d=[];return Lt.has(o)?d=Lt.get(o):(d=await Promise.all(c.map(async p=>{let r=await p();return a==="content"?{id:r.id,slug:r.slug,body:r.body,collection:r.collection,data:r.data,async render(){return tw({collection:r.collection,id:r.id,renderEntryImport:await i(o,r.slug)})}}:{id:r.id,collection:r.collection,data:r.data}})),Lt.set(o,d)),typeof s=="function"?d.filter(s):d}}async function tw({collection:e,id:t,renderEntryImport:i}){var n,o;let s=new P({...sg,message:`Unexpected error while rendering ${String(e)} \u2192 ${String(t)}.`});if(typeof i!="function")throw s;let a=await i();if(a==null||typeof a!="object")throw s;let{default:c}=a;if(nw(c)){let{collectedStyles:d,collectedLinks:p,collectedScripts:r,getMod:y}=c;if(typeof y!="function")throw s;let F=await y();if(F==null||typeof F!="object")throw s;return{Content:K({factory(j,B,L){let z="",G="",J="";Array.isArray(d)&&(z=d.map(Q=>Xi(j,{type:"inline",content:Q})).join("")),Array.isArray(p)&&(G=p.map(Q=>Xi(j,{type:"external",src:Ae(Q)})).join("")),Array.isArray(r)&&(J=r.map(Q=>py(Q)).join(""));let R=B;return t.endsWith("mdx")&&(R={components:F.components??{},...B}),vg(le(z+G+J),w`${N(j,"Content",F.Content,R,L)}`)},propagation:"self"}),headings:((n=F.getHeadings)==null?void 0:n.call(F))??[],remarkPluginFrontmatter:F.frontmatter??{}}}else{if(a.Content&&typeof a.Content=="function")return{Content:a.Content,headings:((o=a.getHeadings)==null?void 0:o.call(a))??[],remarkPluginFrontmatter:a.frontmatter??{}};throw s}}function nw(e){return typeof e=="object"&&e!=null&&"__astroPropagation"in e}var Ie,ho,Ve,mo,kt,Ii,eg,xt,Li,St,_i,Bi,tg,ng,Wi,ig,Oi,$i,Ni,Ct,Xt,og,At,fo,Mi,zi,sg,Gi,P,yo,Te,Je,me,I,Y,fg,Bt,Et,So,kg,xg,tn,Fg,Eg,Tg,Pg,Rg,we,Tt,Ki,Pt,Ao,Ye,m,Ot,Ze,Lg,Eo,To,$t,Po,Ro,Nt,qg,Yi,Jg,Yg,Zi,re,zt,on,Ut,Pe,dy,at,Qi,eo,Bo,Wo,wy,to,Dy,je,be,ne,Z,Le,qt,_e,Ht,tt,Oo,Xe,$o,ky,Qe,no,Rt,Cy,Ay,Fy,io,oo,so,Iy,Be,ie,We,Kt,jt,Wy,Vt,co,Qy,po,ew,se,M,pe,Oe,nt,ve,ke,it,qo,$e,Yt,he,Ee,xe,Ke,ot,Ho,Ne,Zt,et,Lt,A=l(()=>{"use strict";Ie=h(b(),1);v();k();wi();ho=h(x(),1);S();C();Ve={name:"ClientAddressNotAvailable",title:"`Astro.clientAddress` is not available in current adapter.",message:e=>`\`Astro.clientAddress\` is not available in the \`${e}\` adapter. File an issue with the adapter to add support.`},mo={name:"StaticClientAddressNotAvailable",title:"`Astro.clientAddress` is not available in static mode.",message:"`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."},kt={name:"NoMatchingStaticPathFound",title:"No static path found for requested path.",message:e=>`A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e}\`.`,hint:e=>`Possible dynamic routes being matched: ${e.join(", ")}.`},Ii={name:"OnlyResponseCanBeReturned",title:"Invalid type returned by Astro page.",message:(e,t)=>`Route \`${e||""}\` returned a \`${t}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,hint:"See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."},eg={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},xt={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,t,i,n)=>`Unable to render \`${e}\`.

${n>0?`There ${i?"are":"is"} ${n} renderer${i?"s":""} configured in your \`astro.config.mjs\` file,
but ${i?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},Li={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,t,i)=>`\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${i}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},St={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},_i={name:"InvalidGetStaticPathParam",title:"Invalid value returned by a `getStaticPaths` path.",message:e=>`Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},Bi={name:"InvalidGetStaticPathsReturn",title:"Invalid value returned by getStaticPaths.",message:e=>`Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},tg={name:"GetStaticPathsRemovedRSSHelper",title:"getStaticPaths RSS helper is not available anymore.",message:"The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",hint:"See https://docs.astro.build/en/guides/rss/ for more information."},ng={name:"GetStaticPathsExpectedParams",title:"Missing params property on `getStaticPaths` route.",message:"Missing or empty required `params` property on `getStaticPaths` route.",hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},Wi={name:"GetStaticPathsInvalidRouteParam",title:"Invalid value for `getStaticPaths` route parameter.",message:(e,t,i)=>`Invalid getStaticPaths route parameter for \`${e}\`. Expected undefined, a string or a number, received \`${i}\` (\`${t}\`)`,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},ig={name:"GetStaticPathsRequired",title:"`getStaticPaths()` function required for dynamic routes.",message:"`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",hint:'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.'},Oi={name:"ReservedSlotName",title:"Invalid slot name.",message:e=>`Unable to create a slot named \`${e}\`. \`${e}\` is a reserved slot name. Please update the name of this slot.`},$i={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},Ni={name:"PageNumberParamNotFound",title:"Page number param not found.",message:e=>`[paginate()] page number param \`${e}\` not found in your filepath.`,hint:"Rename your file to `[page].astro` or `[...page].astro`."},Ct={name:"PrerenderDynamicEndpointPathCollide",title:"Prerendered dynamic endpoint has path collision.",message:e=>`Could not render \`${e}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,hint:e=>`Rename \`${e}\` to \`${e.replace(/\.(js|ts)/,t=>".json"+t)}\``},Xt={name:"ResponseSentError",title:"Unable to set response.",message:"The response has already been sent to the browser and cannot be altered."},og={name:"MiddlewareNoDataOrNextCalled",title:"The middleware didn't return a response or call `next`.",message:"The middleware needs to either return a `Response` object or call the `next` function."},At={name:"MiddlewareNotAResponse",title:"The middleware returned something that is not a `Response` object.",message:"Any data returned from middleware must be a valid `Response` object."},fo={name:"LocalsNotAnObject",title:"Value assigned to `locals` is not accepted.",message:"`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",hint:"If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."},Mi={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},zi={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`},sg={name:"UnknownContentCollectionError",title:"Unknown Content Collection Error."},Gi={name:"CollectionDoesNotExistError",title:"Collection does not exist",message:e=>`The collection **${e}** does not exist. Ensure a collection directory with this name exists.`,hint:"See https://docs.astro.build/en/guides/content-collections/ for more on creating collections."};P=class extends Error{constructor(t,...i){super(...i),this.type="AstroError";let{name:n,title:o,message:s,stack:a,location:c,hint:d,frame:p}=t;this.title=o,this.name=n,s&&(this.message=s),this.stack=a||this.stack,this.loc=c,this.hint=d,this.frame=p}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,i){this.frame=rg(t,i)}static is(t){return t.type==="AstroError"}};yo="2.10.5";Te=ji,Je=class extends Uint8Array{};Object.defineProperty(Je.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});me=class extends String{get[Symbol.toStringTag](){return"HTMLString"}},I=e=>e instanceof me?e:typeof e=="string"?new me(e):e;Y={Value:0,JSON:1,RegExp:2,Date:3,Map:4,Set:5,BigInt:6,URL:7,Uint8Array:8,Uint16Array:9,Uint32Array:10};fg=Object.freeze(["data-astro-transition-scope","data-astro-transition-persist"]);Bt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",Et=Bt.length;So=Symbol.for("astro.headAndContent");kg='(()=>{var d;{let p={0:t=>u(t),1:t=>l(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(l(t)),5:t=>new Set(l(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},h=t=>{let[e,n]=t;return e in p?p[e](n):void 0},l=t=>t.map(h),u=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,n])=>[e,h(n)]));customElements.get("astro-island")||customElements.define("astro-island",(d=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=async()=>{var i;if(!this.hydrator||!this.isConnected)return;let e=(i=this.parentElement)==null?void 0:i.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let n=this.querySelectorAll("astro-slot"),o={},a=this.querySelectorAll("template[data-astro-template]");for(let r of a){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(o[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of n){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(o[r.getAttribute("name")||"default"]=r.innerHTML)}let c;try{c=this.hasAttribute("props")?u(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",y=this.getAttribute("component-export");throw y&&(s+=` (export ${y})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}await this.hydrator(this)(this.Component,c,o,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((e,n)=>{n.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),n=this.getAttribute("client");if(Astro[n]===void 0){window.addEventListener(`astro:${n}`,()=>this.start(),{once:!0});return}Astro[n](async()=>{let o=this.getAttribute("renderer-url"),[a,{default:c}]=await Promise.all([import(this.getAttribute("component-url")),o?import(o):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(let r of i.split("."))this.Component=this.Component[r]}return this.hydrator=c,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},d.observedAttributes=["props"],d))}})();',xg="<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";tn=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,Fg=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,Eg=/^(contenteditable|draggable|spellcheck|value)$/i,Tg=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,Pg=new Set(["set:html","set:text"]),Rg=e=>e.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g,(t,i)=>/[^\w]|\s/.test(t)?"":i===0?t:t.toUpperCase()),we=(e,t=!0)=>t?String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):e,Tt=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Ki=e=>Object.entries(e).map(([t,i])=>t[0]!=="-"&&t[1]!=="-"?`${Tt(t)}:${i}`:Tt(t)!==t?`${Tt(t)}:var(${t});${t}:${i}`:`${t}:${i}`).join(";");Pt=(e,t,i)=>{let n=JSON.stringify(e.props),o=e.children;return t===i.findIndex(s=>JSON.stringify(s.props)===n&&s.children==o)};Ao=Symbol.for("astro:slot-string"),Ye=class extends me{constructor(t,i){super(t),this.instructions=i,this[Ao]=!0}};m=Symbol.for("astro:fragment"),Ot=Symbol.for("astro:renderer"),Ze=new TextEncoder,Lg=new TextDecoder;To=Symbol.for("astro.componentInstance"),$t=class{constructor(t,i,n,o){this[Eo]=!0,this.result=t,this.props=i,this.factory=o,this.slotValues={};for(let s in n){let a=n[s](t);this.slotValues[s]=()=>a}}async init(t){return this.returnValue!==void 0?this.returnValue:(this.returnValue=this.factory(t,this.props,this.slotValues),this.returnValue)}async render(t){this.returnValue===void 0&&await this.init(this.result);let i=this.returnValue;Qt(i)&&(i=await i),en(i)?await i.content.render(t):await De(t,i)}};Eo=To;Ro=Symbol.for("astro.renderTemplateResult"),Nt=class{constructor(t,i){this[Po]=!0,this.htmlParts=t,this.error=void 0,this.expressions=i.map(n=>Qt(n)?Promise.resolve(n).catch(o=>{if(!this.error)throw this.error=o,o}):n)}async render(t){for(let i=0;i<this.htmlParts.length;i++){let n=this.htmlParts[i],o=this.expressions[i];t.write(I(n)),(o||o===0)&&await De(t,o)}}};Po=Ro;qg=Symbol.for("astro.needsHeadRendering"),Yi=new Map([["solid","solid-js"]]);Jg=/\<\/?astro-slot\b[^>]*>/g,Yg=/\<\/?astro-static-slot\b[^>]*>/g;Zi="astro-client-only",re=class{constructor(t){this.vnode=t,this.count=0}increment(){this.count++}haveNoTried(){return this.count===0}isCompleted(){return this.count>2}};re.symbol=Symbol("astro:jsx:skip");on=0;Ut=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]";dy=Ut?(e,t)=>typeof e=="string"||ArrayBuffer.isView(e)?new Response(e,t):typeof Pe>"u"?new(ly())(e,t):new Pe(e,t):(e,t)=>new Response(e,t);at="astro:jsx",Qi=Symbol("empty"),eo=e=>e;Bo=e=>e.trim().replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase());Wo={check:fy,renderToStaticMarkup:gy},wy=new Date(0),to="deleted",Dy=Symbol.for("astro.responseSent"),je=class{constructor(t){this.value=t}json(){if(this.value===void 0)throw new Error("Cannot convert undefined to an object.");return JSON.parse(this.value)}number(){return Number(this.value)}boolean(){return this.value==="false"||this.value==="0"?!1:!!this.value}},Xe=class{constructor(t){$(this,Le);$(this,_e);$(this,tt);$(this,be,void 0);$(this,ne,void 0);$(this,Z,void 0);q(this,be,t),q(this,ne,null),q(this,Z,null)}delete(t,i){let n={expires:wy};i?.domain&&(n.domain=i.domain),i?.path&&(n.path=i.path),H(this,_e,Ht).call(this).set(t,[to,(0,Ie.serialize)(t,to,n),!1])}get(t){var i;if((i=D(this,Z))!=null&&i.has(t)){let[s,,a]=D(this,Z).get(t);return a?new je(s):new je(void 0)}let o=H(this,Le,qt).call(this)[t];return new je(o)}has(t){var i;if((i=D(this,Z))!=null&&i.has(t)){let[,,o]=D(this,Z).get(t);return o}return!!H(this,Le,qt).call(this)[t]}set(t,i,n){let o;if(typeof i=="string")o=i;else{let a=i.toString();a===Object.prototype.toString.call(i)?o=JSON.stringify(i):o=a}let s={};if(n&&Object.assign(s,n),H(this,_e,Ht).call(this).set(t,[o,(0,Ie.serialize)(t,o,s),!0]),D(this,be)[Dy])throw new P({...Xt})}*headers(){if(D(this,Z)!=null)for(let[,t]of D(this,Z))yield t[1]}};be=new WeakMap,ne=new WeakMap,Z=new WeakMap,Le=new WeakSet,qt=function(){return D(this,ne)||H(this,tt,Oo).call(this),D(this,ne)||q(this,ne,{}),D(this,ne)},_e=new WeakSet,Ht=function(){return D(this,Z)||q(this,Z,new Map),D(this,Z)},tt=new WeakSet,Oo=function(){let t=D(this,be).headers.get("cookie");t&&q(this,ne,(0,Ie.parse)(t))};$o=Symbol.for("astro.cookies");ky=new Intl.DateTimeFormat([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Qe={debug:20,info:30,warn:40,error:50,silent:90};if(typeof process<"u"){let e=process;"argv"in e&&Array.isArray(e.argv)&&(e.argv.includes("--verbose")||e.argv.includes("--silent"))}Rt=1,Cy={write(e){let t=console.error;Qe[e.level]<Qe.error&&(t=console.log);function i(){let s="",a=e.type;return a&&(s+=mi(ky.format(new Date)+" "),e.level==="info"?a=Fe(gi(`[${a}]`)):e.level==="warn"?a=Fe(Dt(`[${a}]`)):e.level==="error"&&(a=Fe(fi(`[${a}]`))),s+=`${a} `),hi(s)}let n=e.message;n===no?(Rt++,n=`${n} ${Dt(`(x${Rt})`)}`):(no=n,Rt=1);let o=i()+n;return t(o),!0}},Ay={default(){return new Response(null,{status:301})}},Fy={page:()=>Promise.resolve(Ay),onRequest:(e,t)=>t(),renderers:[]};io=Symbol.for("astro.clientAddress"),oo=Symbol.for("astro.locals");so=Symbol.for("astro.clientAddress"),Iy=Symbol.for("astro.responseSent");Kt=class{constructor(t,i,n){$(this,Be,void 0);$(this,ie,void 0);$(this,We,void 0);if(q(this,Be,t),q(this,ie,i),q(this,We,n),i)for(let o of Object.keys(i)){if(this[o]!==void 0)throw new P({...Oi,message:Oi.message(o)});Object.defineProperty(this,o,{get(){return!0},enumerable:!0})}}has(t){return D(this,ie)?!!D(this,ie)[t]:!1}async render(t,i=[]){if(!D(this,ie)||!this.has(t))return;let n=D(this,Be);if(!Array.isArray(i))ge(D(this,We),"Astro.slots.render",`Expected second parameter to be an array, received a ${typeof i}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);else if(i.length>0){let a=D(this,ie)[t],c=typeof a=="function"?await a(n):await a,d=Ly(c);if(d)return await Se(n,async()=>typeof d=="function"?d(...i):d).then(r=>r!=null?String(r):r);if(typeof c=="function")return await ce(n,c(...i)).then(p=>p!=null?String(p):p)}let o=await Se(n,D(this,ie)[t]);return fe(n,o)}};Be=new WeakMap,ie=new WeakMap,We=new WeakMap;jt=null;Wy=["string","number","undefined"];Vt=class{constructor(t,i="production"){this.cache={},this.logging=t,this.mode=i}clearAll(){this.cache={}}set(t,i){var n;this.mode==="production"&&((n=this.cache[t.component])!=null&&n.staticPaths)&&ge(this.logging,"routeCache",`Internal Warning: route cache overwritten. (${t.component})`),this.cache[t.component]=i}get(t){return this.cache[t.component]}};co=Symbol.for("astro.locals");Qy=Symbol.for("astro.locals"),po=Symbol.for("astro.responseSent"),ew=new Set([404,500]),et=class{constructor(t,i=!0){$(this,it);$(this,$e);$(this,he);$(this,xe);$(this,ot);$(this,Ne);$(this,se,void 0);$(this,M,void 0);$(this,pe,void 0);$(this,Oe,void 0);$(this,nt,new TextEncoder);$(this,ve,{dest:Cy,level:"info"});$(this,ke,void 0);q(this,M,t),q(this,pe,{routes:t.routes.map(n=>n.routeData)}),q(this,Oe,new Map(t.routes.map(n=>[n.routeData,n]))),q(this,ke,qe(D(this,M).base)),q(this,se,H(this,it,qo).call(this,i))}set setManifest(t){q(this,M,t)}set setManifestData(t){q(this,pe,t)}removeBase(t){return t.startsWith(D(this,M).base)?t.slice(D(this,ke).length+1):t}match(t,i={}){let n=new URL(t.url);if(D(this,M).assets.has(n.pathname))return;let o=Ae(this.removeBase(n.pathname)),s=uo(o,D(this,pe));if(!(!s||s.prerender))return s}async render(t,i,n){if(t.url!==ft(t.url)&&(t=new Request(ft(t.url),t)),i||(i=this.match(t)),!i)return H(this,he,Ee).call(this,t,{status:404});Reflect.set(t,Qy,n??{});let o=H(this,ot,Ho).call(this,i.route),s=await H(this,Ne,Zt).call(this,i),a=await s.page(),c=new URL(t.url),d=await H(this,$e,Yt).call(this,c,t,i,s,o),p;try{p=await ro(i.type,d,D(this,se),a,s.onRequest)}catch(r){return xy(D(this,ve),"ssr",r.stack||r.message||String(r)),H(this,he,Ee).call(this,t,{status:500})}if(By(p,i.type))return ew.has(p.status)?H(this,he,Ee).call(this,t,{response:p,status:p.status}):(Reflect.set(p,po,!0),p);if(p.type==="response")return p.response.headers.get("X-Astro-Response")==="Not-Found"?H(this,he,Ee).call(this,t,{response:p.response,status:404}):p.response;{let r=new Headers,y=ho.default.getType(c.pathname);y?r.set("Content-Type",`${y};charset=utf-8`):r.set("Content-Type","text/plain;charset=utf-8");let F=p.encoding!=="binary"?D(this,nt).encode(p.body):p.body;r.set("Content-Length",F.byteLength.toString());let O=new Response(F,{status:200,headers:r});return sn(O,p.cookies),O}}setCookieHeaders(t){return vy(t)}};se=new WeakMap,M=new WeakMap,pe=new WeakMap,Oe=new WeakMap,nt=new WeakMap,ve=new WeakMap,ke=new WeakMap,it=new WeakSet,qo=function(t=!1){return{adapterName:D(this,M).adapterName,logging:D(this,ve),markdown:D(this,M).markdown,mode:"production",compressHTML:D(this,M).compressHTML,renderers:D(this,M).renderers,clientDirectives:D(this,M).clientDirectives,resolve:async i=>{if(!(i in D(this,M).entryModules))throw new Error(`Unable to resolve [${i}]`);let n=D(this,M).entryModules[i];switch(!0){case n.startsWith("data:"):case n.length===0:return n;default:return an(n,D(this,M).base,D(this,M).assetsPrefix)}},routeCache:new Vt(D(this,ve)),site:D(this,M).site,ssr:!0,streaming:t}},$e=new WeakSet,Yt=async function(t,i,n,o,s=200){if(n.type==="endpoint"){let a="/"+this.removeBase(t.pathname),d=await o.page();return await lo({request:i,pathname:a,route:n,status:s,env:D(this,se),mod:d})}else{let a=Ae(this.removeBase(t.pathname)),c=D(this,Oe).get(n),d=new Set,p=Jy(c.styles),r=new Set;for(let F of c.scripts)"stage"in F?F.stage==="head-inline"&&r.add({props:{},children:F.children}):r.add(Yy(F));let y=await o.page();return await lo({request:i,pathname:a,componentMetadata:D(this,M).componentMetadata,scripts:r,styles:p,links:d,route:n,status:s,mod:y,env:D(this,se)})}},he=new WeakSet,Ee=async function(t,{status:i,response:n}){let o=uo("/"+i,D(this,pe)),s=new URL(t.url);if(o){if(o.prerender&&!o.route.endsWith(`/${i}`)){let d=new URL(`${D(this,ke)}/${i}`,s),p=await fetch(d.toString());return H(this,xe,Ke).call(this,p,n)}let c=await H(this,Ne,Zt).call(this,o);try{let d=await H(this,$e,Yt).call(this,s,t,o,c,i),p=await c.page(),r=await ro("page",d,D(this,se),p);return H(this,xe,Ke).call(this,r,n)}catch{}}let a=H(this,xe,Ke).call(this,new Response(null,{status:i}),n);return Reflect.set(a,po,!0),a},xe=new WeakSet,Ke=function(t,i){if(!i)return t;let{status:n,statusText:o,headers:s}=i;return new Response(t.body,{status:n===200?t.status:n,statusText:n===200?t.statusText:o,headers:new Headers(Array.from(s))})},ot=new WeakSet,Ho=function(t){return t=qe(t),t.endsWith("/404")?404:t.endsWith("/500")?500:200},Ne=new WeakSet,Zt=async function(t){if(t.type==="redirect")return Fy;if(D(this,M).pageMap){let i=D(this,M).pageMap.get(t.component);if(!i)throw new Error(`Unexpectedly unable to find a component instance for route ${t.route}`);return await i()}else{if(D(this,M).pageModule)return D(this,M).pageModule;throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.")}};Lt=new Map});var y3,b3,de,ze=l(()=>{"use strict";A();y3=h(b(),1);v();k();b3=h(x(),1);S();C();de=[Object.assign({name:"astro:jsx",serverEntrypoint:"astro/jsx/server.js",jsxImportSource:"astro"},{ssr:Wo})]});var Ce,rt=l(()=>{"use strict";Ce=void 0});var Vo={};u(Vo,{_internal:()=>cw,body:()=>aw,collection:()=>ow,data:()=>rw,id:()=>iw,slug:()=>sw});var iw,ow,sw,aw,rw,cw,Jo=l(()=>{"use strict";iw="951-using-chatgpt-to-write-nuclei-exploits.md",ow="posts",sw="using-chatgpt-to-write-nuclei-exploits",aw=`
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
`,rw={title:"Using ChatGPT to write nuclei exploits",publishedAt:new Date(16898112e5),description:"\u{1F50D} Harnessing ChatGPT for Penetration Testing: A Deep Dive \u{1F50D}",isPublish:!0,isDraft:!1},cw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md",rawData:`
title: "Using ChatGPT to write nuclei exploits"
publishedAt: 2023-07-20
description: "\u{1F50D} Harnessing ChatGPT for Penetration Testing: A Deep Dive \u{1F50D}"
slug: "using-chatgpt-to-write-nuclei-exploits"
isPublish: true`}});var Yo={};u(Yo,{_internal:()=>mw,body:()=>pw,collection:()=>dw,data:()=>hw,id:()=>lw,slug:()=>uw});var lw,dw,uw,pw,hw,mw,Zo=l(()=>{"use strict";lw="952-nuclei-writing-exploit.md",dw="posts",uw="nuclei-writing-exploit",pw=`
## Nuclei unleashed - writing first exploit

In the intricate dance of penetration testing, the rhythm is set by the tools we use. But what if we could choreograph our own steps? Enter Nuclei, a framework that lets you craft custom templates for precise vulnerability scanning. Today, we'll dive deep into the world of these templates and see how they can elevate your pen-testing game.

\u{1F4CC} Inside this Exploration:

- Nuclei Unveiled: Discover the essence of Nuclei and its role in the vast landscape of penetration testing.
- Crafting Templates: A hands-on guide to creating your first custom template. From defining basic information to setting up requests and assertions, we've got you covered.
- Real-World Testing: Dive into a practical example as we test a Facebook page for potential vulnerabilities using a custom Nuclei template.
- Beyond the Basics: Learn how to validate, run, and interpret the results of your custom templates. Plus, find out how you can contribute to the Nuclei community by sharing your templates.

Whether you're a seasoned pen-tester or just dipping your toes into the world of cybersecurity, this guide offers a fresh perspective on vulnerability scanning. Join us as we unravel the potential of Nuclei templates and discover how they can be a game-changer in your penetration testing toolkit. \u{1F6E1}\uFE0F\u{1F5A5}\uFE0F\u{1F680}

Link: https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0
`,hw={title:"Nuclei unleashed - writing first exploit",publishedAt:new Date(168912e7),description:"\u{1F50D} Nuclei: The Power of Custom Templates in Penetration Testing \u{1F50D}",isPublish:!0,isDraft:!1},mw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md",rawData:`
title: "Nuclei unleashed - writing first exploit"
publishedAt: 2023-07-12
description: "\u{1F50D} Nuclei: The Power of Custom Templates in Penetration Testing \u{1F50D}"
slug: "nuclei-writing-exploit"
isPublish: true`}});var Xo={};u(Xo,{_internal:()=>bw,body:()=>ww,collection:()=>gw,data:()=>Dw,id:()=>fw,slug:()=>yw});var fw,gw,yw,ww,Dw,bw,Qo=l(()=>{"use strict";fw="953-standard-deviation-performance-tests.md",gw="posts",yw="standard-deviation-performance-tests",ww=`
## Why standard deviation is important in performance tests

In the vast realm of performance testing, some metrics shine brighter than others. While average response times and percentiles often steal the limelight, there's an unsung hero lurking in the shadows: the standard deviation. Often overlooked, this metric can be the key to unlocking deeper insights into your application's performance. But what makes it so special?

\u{1F4CC} Inside this Exploration:

- Beyond the Basics: Dive into the world of standard deviation and discover why it's more than just a mathematical formula.
- The Real Impact: Understand how standard deviation can influence performance analysis and why it's crucial for testers.
- Crunching the Numbers: A step-by-step guide to calculating standard deviation, minus the jargon. Plus, a hands-on example to bring the concept to life.
- The Bigger Picture: Explore how standard deviation fits into the broader landscape of performance testing metrics and why it deserves a spot in your toolkit.

Whether you're a seasoned tester or just starting out, this article offers a fresh perspective on a classic metric. Dive in and discover how standard deviation can elevate your performance testing game, revealing insights that other metrics might miss. \u{1F4C8}\u{1F50D}\u{1F680}

Link: https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3
`,Dw={title:"Why standard deviation is important in performance tests",publishedAt:new Date(16886016e5),description:"\u{1F4CA} Standard Deviation: The Unsung Hero of Performance Testing \u{1F4CA}",isPublish:!0,isDraft:!1},bw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md",rawData:`
title: "Why standard deviation is important in performance tests"
publishedAt: 2023-07-06
description: "\u{1F4CA} Standard Deviation: The Unsung Hero of Performance Testing \u{1F4CA}"
slug: "standard-deviation-performance-tests"
isPublish: true`}});var es={};u(es,{_internal:()=>Aw,body:()=>Sw,collection:()=>kw,data:()=>Cw,id:()=>vw,slug:()=>xw});var vw,kw,xw,Sw,Cw,Aw,ts=l(()=>{"use strict";vw="954-afrog-bug-bounty-pentesters.md",kw="posts",xw="afrog-bug-bounty-pentesters",Sw=`
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
`,Cw={title:"Afrog explained for bug bounty hunters",publishedAt:new Date(16885152e5),description:"\u{1F438} Afrog: The Pentester's New Best Friend? \u{1F438}",isPublish:!0,isDraft:!1},Aw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md",rawData:`
title: "Afrog explained for bug bounty hunters"
publishedAt: 2023-07-05
description: "\u{1F438} Afrog: The Pentester's New Best Friend? \u{1F438}"
slug: "afrog-bug-bounty-pentesters"
isPublish: true`}});var ns={};u(ns,{_internal:()=>jw,body:()=>Pw,collection:()=>Ew,data:()=>Rw,id:()=>Fw,slug:()=>Tw});var Fw,Ew,Tw,Pw,Rw,jw,is=l(()=>{"use strict";Fw="955-drill-performance-testing-tool.md",Ew="posts",Tw="drill-performance-testing-tool",Pw=`
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
`,Rw={title:"My impressions of using the Drill performance testing tool",publishedAt:new Date(16884288e5),description:"\u{1F529} Drill Performance Testing: A Deep Dive \u{1F529}",isPublish:!0,isDraft:!1},jw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md",rawData:`
title: "My impressions of using the Drill performance testing tool"
publishedAt: 2023-07-04
description: "\u{1F529} Drill Performance Testing: A Deep Dive \u{1F529}"
slug: "drill-performance-testing-tool"
isPublish: true`}});var os={};u(os,{_internal:()=>Ow,body:()=>Bw,collection:()=>Lw,data:()=>Ww,id:()=>Iw,slug:()=>_w});var Iw,Lw,_w,Bw,Ww,Ow,ss=l(()=>{"use strict";Iw="956-aws-ec2-instances-basics.md",Lw="posts",_w="aws-ec2-instances-basics",Bw=`
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
`,Ww={title:"AWS EC2 Instances basics",publishedAt:new Date(16880832e5),description:"\u{1F680} Unleashing the Power of AWS EC2 \u{1F680}",isPublish:!0,isDraft:!1},Ow={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md",rawData:`
title: "AWS EC2 Instances basics"
publishedAt: 2023-06-30
description: "\u{1F680} Unleashing the Power of AWS EC2 \u{1F680}"
slug: "aws-ec2-instances-basics"
isPublish: true`}});var as={};u(as,{_internal:()=>Uw,body:()=>zw,collection:()=>Nw,data:()=>Gw,id:()=>$w,slug:()=>Mw});var $w,Nw,Mw,zw,Gw,Uw,rs=l(()=>{"use strict";$w="957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md",Nw="posts",Mw="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2",zw=`
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
`,Gw={title:"What is Apache Kafka and how to perform performance tests on it (Part 2)",publishedAt:new Date(16879104e5),description:"\u{1F680} Mastering Performance Testing with Apache Kafka \u{1F680}",isPublish:!0,isDraft:!1},Uw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md",rawData:`
title: "What is Apache Kafka and how to perform performance tests on it (Part 2)"
publishedAt: 2023-06-28
description: "\u{1F680} Mastering Performance Testing with Apache Kafka \u{1F680}"
slug: "what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2"
isPublish: true`}});var cs={};u(cs,{_internal:()=>Yw,body:()=>Vw,collection:()=>Hw,data:()=>Jw,id:()=>qw,slug:()=>Kw});var qw,Hw,Kw,Vw,Jw,Yw,ls=l(()=>{"use strict";qw="958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md",Hw="posts",Kw="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one",Vw=`
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
`,Jw={title:"What is Apache Kafka and how to perform performance tests on it (Part 1)",publishedAt:new Date(16876512e5),description:"\u{1F525} Diving Deep into Event Streaming with Apache Kafka \u{1F525}",isPublish:!0,isDraft:!1},Yw={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md",rawData:`
title: "What is Apache Kafka and how to perform performance tests on it (Part 1)"
publishedAt: 2023-06-25
description: "\u{1F525} Diving Deep into Event Streaming with Apache Kafka \u{1F525}"
slug: "what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one"
isPublish: true`}});var ds={};u(ds,{_internal:()=>nD,body:()=>eD,collection:()=>Xw,data:()=>tD,id:()=>Zw,slug:()=>Qw});var Zw,Xw,Qw,eD,tD,nD,us=l(()=>{"use strict";Zw="959-types-of-deployment.md",Xw="posts",Qw="types-of-deployment",eD=`
## Types of deployment

In the dynamic world of IT, updating applications and introducing new features is the name of the game. But how do you ensure smooth transitions without disrupting user experience? Enter deployment strategies! Dive into this guide to explore three of the most popular deployment types that IT companies swear by.

\u{1F4CC} Inside this Guide:

- Rolling Deployment Demystified: Understand the step-by-step process of updating servers and why this strategy is a favorite for applications with minor updates.
- Canary Deployment Unveiled: Discover how this user-centric approach tests the waters with a select group before a full-scale launch.
- Blue/Green Deployment Explained: Dive into the world of dual environments and learn how traffic redirection ensures seamless transitions between versions.

Whether you're an IT professional, a budding developer, or a business owner looking to understand the best deployment strategy for your organization, this guide offers insights into the pros and cons of each method. Equip yourself with the knowledge to make informed decisions and ensure smooth application updates. \u{1F504}\u{1F310}\u{1F527}

Link: https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67
`,tD={title:"What are the types of deployment",publishedAt:new Date(16875648e5),description:"\u{1F680} Mastering Deployment Strategies: Rolling, Canary, and Blue/Green \u{1F680}",isPublish:!0,isDraft:!1},nD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md",rawData:`
title: "What are the types of deployment"
publishedAt: 2023-06-24
description: "\u{1F680} Mastering Deployment Strategies: Rolling, Canary, and Blue/Green \u{1F680}"
slug: "types-of-deployment"
isPublish: true`}});var ps={};u(ps,{_internal:()=>cD,body:()=>aD,collection:()=>oD,data:()=>rD,id:()=>iD,slug:()=>sD});var iD,oD,sD,aD,rD,cD,hs=l(()=>{"use strict";iD="960-availability-load-balancing-failover-session-persistence.md",oD="posts",sD="availability-load-balancing-failover-session-persistence",aD=`
## Availability, Load Balancing, Failover and Session Persistence

Navigating the world of performance testing or development often feels like wading through a sea of jargon. Terms like "availability," "load balancing," and "session persistence" get thrown around, but what do they really mean? And why should you care? Dive into this guide to decode these terms and more!

\u{1F4CC} Inside this Guide:

- Availability Unveiled: Discover what we truly mean when we talk about an application's availability and why it's not just about uptime percentages.
- Load Balancing Explained: Unravel the intricacies of load balancing, its importance, and its multifaceted nature.
- The Art of Failover: Learn about the system's ability to seamlessly switch to a backup during failures and the significance of failover testing.
- Session Persistence Decoded: Dive deep into the concept of session persistence and understand its role in enhancing user experience.

Whether you're a seasoned developer, a budding performance tester, or just someone looking to understand the tech world a bit better, this guide offers a clear and concise breakdown of some of the most commonly used (and often misunderstood) terms. Equip yourself with the knowledge to navigate tech discussions with confidence! \u{1F4BB}\u{1F310}\u{1F4D8}

Link: https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3
`,rD={title:"What are the concepts of availability, load balancing, failover and session persistence",publishedAt:new Date(16874784e5),description:"\u{1F50D} Demystifying Tech Jargon: From Availability to Session Persistence \u{1F50D}",isPublish:!0,isDraft:!1},cD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md",rawData:`
title: "What are the concepts of availability, load balancing, failover and session persistence"
publishedAt: 2023-06-23
description: "\u{1F50D} Demystifying Tech Jargon: From Availability to Session Persistence \u{1F50D}"
slug: "availability-load-balancing-failover-session-persistence"
isPublish: true`}});var ms={};u(ms,{_internal:()=>mD,body:()=>pD,collection:()=>dD,data:()=>hD,id:()=>lD,slug:()=>uD});var lD,dD,uD,pD,hD,mD,fs=l(()=>{"use strict";lD="961-mitmproxy-and-k6.md",dD="posts",uD="mitmproxy-and-k6",pD=`
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
`,hD={title:"Using mitmproxy with k6",publishedAt:new Date(1687392e6),description:"\u{1F50D} Mitmproxy: The Open-Source Powerhouse for Traffic Capture \u{1F50D}",isPublish:!0,isDraft:!1},mD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md",rawData:`
title: "Using mitmproxy with k6"
publishedAt: 2023-06-22
description: "\u{1F50D} Mitmproxy: The Open-Source Powerhouse for Traffic Capture \u{1F50D}"
slug: "mitmproxy-and-k6"
isPublish: true`}});var gs={};u(gs,{_internal:()=>bD,body:()=>wD,collection:()=>gD,data:()=>DD,id:()=>fD,slug:()=>yD});var fD,gD,yD,wD,DD,bD,ys=l(()=>{"use strict";fD="962-flaky-tests-jmeter.md",gD="posts",yD="flaky-tests-jmeter",wD=`
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
`,DD={title:"Flaky tests in JMeter",publishedAt:new Date(16873056e5),description:"\u{1F50D} Stabilizing Performance Tests: Navigating the World of Flaky Tests \u{1F50D}",isPublish:!0,isDraft:!1},bD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md",rawData:`
title: "Flaky tests in JMeter"
publishedAt: 2023-06-21
description: "\u{1F50D} Stabilizing Performance Tests: Navigating the World of Flaky Tests \u{1F50D}"
slug: "flaky-tests-jmeter"
isPublish: true`}});var ws={};u(ws,{_internal:()=>AD,body:()=>SD,collection:()=>kD,data:()=>CD,id:()=>vD,slug:()=>xD});var vD,kD,xD,SD,CD,AD,Ds=l(()=>{"use strict";vD="963-debug-requests-k6.md",kD="posts",xD="debug-requests-k6",SD=`
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
`,CD={title:"How to debug requests in k6",publishedAt:new Date(16872192e5),description:"\u{1F50D} Decoding k6 Errors: A Comprehensive Guide to Efficient Error Reporting \u{1F50D}",isPublish:!0,isDraft:!1},AD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md",rawData:`
title: "How to debug requests in k6"
publishedAt: 2023-06-20
description: "\u{1F50D} Decoding k6 Errors: A Comprehensive Guide to Efficient Error Reporting \u{1F50D}"
slug: "debug-requests-k6"
isPublish: true`}});var bs={};u(bs,{_internal:()=>jD,body:()=>PD,collection:()=>ED,data:()=>RD,id:()=>FD,slug:()=>TD});var FD,ED,TD,PD,RD,jD,vs=l(()=>{"use strict";FD="964-what-are-memory-leaks.md",ED="posts",TD="what-are-memory-leaks",PD=`
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
`,RD={title:"What are memory leaks?",publishedAt:new Date(16870464e5),description:"\u{1F50D} Memory Leaks: The Silent Killers of Application Performance \u{1F50D}",isPublish:!0,isDraft:!1},jD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md",rawData:`
title: "What are memory leaks?"
publishedAt: 2023-06-18
description: "\u{1F50D} Memory Leaks: The Silent Killers of Application Performance \u{1F50D}"
slug: "what-are-memory-leaks"
isPublish: true`}});var ks={};u(ks,{_internal:()=>OD,body:()=>BD,collection:()=>LD,data:()=>WD,id:()=>ID,slug:()=>_D});var ID,LD,_D,BD,WD,OD,xs=l(()=>{"use strict";ID="965-what-is-browser-based-load-testing.md",LD="posts",_D="what-is-browser-based-load-testing",BD=`
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
`,WD={title:"What is browser based load testing",publishedAt:new Date(168696e7),description:"\u{1F680} Browser-Based Load Testing: The Unsung Hero of Performance Metrics \u{1F680}",isPublish:!0,isDraft:!1},OD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md",rawData:`
title: "What is browser based load testing"
publishedAt: 2023-06-17
description: "\u{1F680} Browser-Based Load Testing: The Unsung Hero of Performance Metrics \u{1F680}"
slug: "what-is-browser-based-load-testing"
isPublish: true`}});var Ss={};u(Ss,{_internal:()=>UD,body:()=>zD,collection:()=>ND,data:()=>GD,id:()=>$D,slug:()=>MD});var $D,ND,MD,zD,GD,UD,Cs=l(()=>{"use strict";$D="966-read-summary-data-in-k6.md",ND="posts",MD="read-summary-data-in-k6",zD=`
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
`,GD={title:"How to quickly read summary data in k6 from json file",publishedAt:new Date(16868736e5),description:"\u{1F50D} JQ: The Ultimate JSON Processor for K6 Testers \u{1F50D}",isPublish:!0,isDraft:!1},UD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md",rawData:`
title: "How to quickly read summary data in k6 from json file"
publishedAt: 2023-06-16
description: "\u{1F50D} JQ: The Ultimate JSON Processor for K6 Testers \u{1F50D}"
slug: "read-summary-data-in-k6"
isPublish: true`}});var As={};u(As,{_internal:()=>YD,body:()=>VD,collection:()=>HD,data:()=>JD,id:()=>qD,slug:()=>KD});var qD,HD,KD,VD,JD,YD,Fs=l(()=>{"use strict";qD="967-fundamental-network-tools.md",HD="posts",KD="fundamental-network-tools",VD=`
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
`,JD={title:"Fundamental network tools",publishedAt:new Date(16867872e5),description:"\u{1F310} Mastering Network Tools: A Non-Functional Tester's Guide \u{1F310}",isPublish:!0,isDraft:!1},YD={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md",rawData:`
title: "Fundamental network tools"
publishedAt: 2023-06-15
description: "\u{1F310} Mastering Network Tools: A Non-Functional Tester's Guide \u{1F310}"
slug: "fundamental-network-tools"
isPublish: true`}});var Es={};u(Es,{_internal:()=>nb,body:()=>eb,collection:()=>XD,data:()=>tb,id:()=>ZD,slug:()=>QD});var ZD,XD,QD,eb,tb,nb,Ts=l(()=>{"use strict";ZD="968-crucial-update-for-k6-results-analysis.md",XD="posts",QD="crucial-update-for-k6-results-analysis",eb=`
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
`,tb={title:"Crucial update for k6 results analysis",publishedAt:new Date(16866144e5),description:"\u{1F50D} K6 Framework Evolution: A New Era of Performance Testing \u{1F50D}",isPublish:!0,isDraft:!1},nb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md",rawData:`
title: "Crucial update for k6 results analysis"
publishedAt: 2023-06-13
description: "\u{1F50D} K6 Framework Evolution: A New Era of Performance Testing \u{1F50D}"
slug: "crucial-update-for-k6-results-analysis"
isPublish: true`}});var Ps={};u(Ps,{_internal:()=>cb,body:()=>ab,collection:()=>ob,data:()=>rb,id:()=>ib,slug:()=>sb});var ib,ob,sb,ab,rb,cb,Rs=l(()=>{"use strict";ib="969-hacking-embedded-systems-routersploit.md",ob="posts",sb="hacking-embedded-systems-routersploit",ab=`
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
`,rb={title:"Hacking embedded systems using the routersploit tool",publishedAt:new Date(1686528e6),description:"\u{1F310} Routersploit Unveiled: A Deep Dive into Embedded System Vulnerabilities \u{1F310}",isPublish:!0,isDraft:!1},cb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md",rawData:`
title: "Hacking embedded systems using the routersploit tool"
publishedAt: 2023-06-12
description: "\u{1F310} Routersploit Unveiled: A Deep Dive into Embedded System Vulnerabilities \u{1F310}"
slug: "hacking-embedded-systems-routersploit"
isPublish: true`}});var js={};u(js,{_internal:()=>mb,body:()=>pb,collection:()=>db,data:()=>hb,id:()=>lb,slug:()=>ub});var lb,db,ub,pb,hb,mb,Is=l(()=>{"use strict";lb="970-syn-flood-attack.md",db="posts",ub="syn-flood-attack",pb=`
## SYN Flood Attack

In the ever-evolving world of cybersecurity, some threats remain timeless, adapting and morphing, but never truly disappearing. The SYN flood attack is one such classic. But what makes it so enduring? Let's delve into its mechanics and understand its potency.

\u{1F4CC} Inside this Exploration:

- The Basics of SYN Flood: A refresher on this age-old attack strategy and its relevance in today's digital landscape.
- TCP Protocol Unveiled: A step-by-step breakdown of the TCP communication process, laying the foundation for understanding the SYN flood attack.
- Crafting the Attack: Dive into the anatomy of a SYN flood script with a hands-on Python example. Discover how attackers can easily overload servers, causing them to become unresponsive.
- Defensive Measures: While this guide focuses on the attack, it's crucial to be armed with knowledge to defend against such threats.

Join us as we demystify the SYN flood attack, offering insights into its workings and highlighting the importance of staying vigilant in the face of timeless cyber threats. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F

Link: https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb
`,hb={title:"SYN Flood Attack",publishedAt:new Date(16864416e5),description:"\u{1F310} Unmasking the SYN Flood Attack: A Deep Dive into Timeless Cyber Threats \u{1F310}",isPublish:!0,isDraft:!1},mb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md",rawData:`
title: "SYN Flood Attack"
publishedAt: 2023-06-11
description: "\u{1F310} Unmasking the SYN Flood Attack: A Deep Dive into Timeless Cyber Threats \u{1F310}"
slug: "syn-flood-attack"
isPublish: true`}});var Ls={};u(Ls,{_internal:()=>bb,body:()=>wb,collection:()=>gb,data:()=>Db,id:()=>fb,slug:()=>yb});var fb,gb,yb,wb,Db,bb,_s=l(()=>{"use strict";fb="971-dos-ddos-drddos-pod-attack.md",gb="posts",yb="dos-ddos-drddos-pod-attack",wb=`
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
`,Db={title:"DoS vs DDoS vs DRDDoS vs PoD attack",publishedAt:new Date(16862688e5),description:"\u{1F6E1}\uFE0F Decoding DoS, DDoS, DRDoS & More: A Comprehensive Guide for Beginners \u{1F6E1}\uFE0F",isPublish:!0,isDraft:!1},bb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md",rawData:`
title: "DoS vs DDoS vs DRDDoS vs PoD attack"
publishedAt: 2023-06-09
description: "\u{1F6E1}\uFE0F Decoding DoS, DDoS, DRDoS & More: A Comprehensive Guide for Beginners \u{1F6E1}\uFE0F"
slug: "dos-ddos-drddos-pod-attack"
isPublish: true`}});var Bs={};u(Bs,{_internal:()=>Ab,body:()=>Sb,collection:()=>kb,data:()=>Cb,id:()=>vb,slug:()=>xb});var vb,kb,xb,Sb,Cb,Ab,Ws=l(()=>{"use strict";vb="972-state-ssl-certificates.md",kb="posts",xb="state-ssl-certificates",Sb=`
## State SSL certificates

Amidst the backdrop of sanctions and restricted web access, Russia's move to establish a state authority for issuing TLS certificates has raised eyebrows. But what does this mean for online security and the integrity of encrypted data?

\u{1F4CC} Inside this Guide:

- Man in the Middle (MitM) Attacks: A refresher on how these attacks intercept network traffic, potentially exposing sensitive data.
- The Mechanics of Certificate Issuance: Delve into the intricacies of public/private key generation and the potential risks when Certificate Authorities hold the reins.
- Trusted Sources & Browsers: Can major browsers trust Russia's state certificates? And what happens when users can manually add public keys?
- Lessons from Kazakhstan: A look back at Kazakhstan's attempt at a "national security certificate" and the subsequent global tech response.

Navigate the complex landscape of digital trust and understand the implications of state-controlled certificate authorities! \u{1F517}

Link: https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6
`,Cb={title:"State SSL certificates \u2014 what are the risks",publishedAt:new Date(16861824e5),description:"\u{1F512} Russia's State-Issued TLS Certificates: A Deep Dive into Digital Trust \u{1F512}",isPublish:!0,isDraft:!1},Ab={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md",rawData:`
title: "State SSL certificates \u2014 what are the risks"
publishedAt: 2023-06-08
description: "\u{1F512} Russia's State-Issued TLS Certificates: A Deep Dive into Digital Trust \u{1F512}"
slug: "state-ssl-certificates"
isPublish: true`}});var Os={};u(Os,{_internal:()=>jb,body:()=>Pb,collection:()=>Eb,data:()=>Rb,id:()=>Fb,slug:()=>Tb});var Fb,Eb,Tb,Pb,Rb,jb,$s=l(()=>{"use strict";Fb="973-what-are-polyglots.md",Eb="posts",Tb="what-are-polyglots",Pb=`
## What are polyglots?

Ever wondered about the intricacies of XSS vulnerabilities and the vast array of potential attack vectors? Dive into the world of polyglots, payloads that combine multiple scripts into one, and understand their power and limitations.

\u{1F4CC} Inside this Guide:

- Understanding Polyglots: Discover how these "universal" payloads work and why they might not always be effective against systems with WAF.
- Deep Dive Analysis: Break down a complex polyglot to understand its components and how it operates.
- SQLi Polyglots & Beyond: Explore how polyglots extend beyond Javascript, including SQL and even JPEG formats.
- Polyglot Innerht: A platform where enthusiasts share polyglots that can hold multiple contexts.

Stay informed and understand the nuances of these versatile payloads in the realm of cybersecurity! \u{1F517}

Link: https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977
`,Rb={title:"What are polyglots and how to use them as a pentester",publishedAt:new Date(16860096e5),description:"\u{1F50D} Polyglots: The Universal Payloads in Cybersecurity \u{1F50D}",isPublish:!0,isDraft:!1},jb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md",rawData:`
title: "What are polyglots and how to use them as a pentester"
publishedAt: 2023-06-06
description: "\u{1F50D} Polyglots: The Universal Payloads in Cybersecurity \u{1F50D}"
slug: "what-are-polyglots"
isPublish: true`}});var Ns={};u(Ns,{_internal:()=>Ob,body:()=>Bb,collection:()=>Lb,data:()=>Wb,id:()=>Ib,slug:()=>_b});var Ib,Lb,_b,Bb,Wb,Ob,Ms=l(()=>{"use strict";Ib="974-ldap-protocol-basics-and-the-ldap-injection-attack.md",Lb="posts",_b="ldap-protocol-basics-and-the-ldap-injection-attack",Bb=`
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
`,Wb={title:"LDAP protocol basics and the LDAP Injection attack",publishedAt:new Date(16858368e5),description:"\u{1F512} Demystifying LDAP and Its Security Implications \u{1F512}",isPublish:!0,isDraft:!1},Ob={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md",rawData:`
title: "LDAP protocol basics and the LDAP Injection attack"
publishedAt: 2023-06-04
description: "\u{1F512} Demystifying LDAP and Its Security Implications \u{1F512}"
slug: "ldap-protocol-basics-and-the-ldap-injection-attack"
isPublish: true`}});var zs={};u(zs,{_internal:()=>Ub,body:()=>zb,collection:()=>Nb,data:()=>Gb,id:()=>$b,slug:()=>Mb});var $b,Nb,Mb,zb,Gb,Ub,Gs=l(()=>{"use strict";$b="975-what-is-bind-shell-and-reverse-shell.md",Nb="posts",Mb="what-is-bind-shell-and-reverse-shell",zb=`
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
`,Gb={title:"What is bind shell and reverse shell",publishedAt:new Date(16857504e5),description:"\u{1F310} Diving into Netcat: Bind Shell vs. Reverse Shell \u{1F310}",isPublish:!0,isDraft:!1},Ub={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md",rawData:`
title: "What is bind shell and reverse shell"
publishedAt: 2023-06-03
description: "\u{1F310} Diving into Netcat: Bind Shell vs. Reverse Shell \u{1F310}"
slug: "what-is-bind-shell-and-reverse-shell"
isPublish: true`}});var Us={};u(Us,{_internal:()=>Yb,body:()=>Vb,collection:()=>Hb,data:()=>Jb,id:()=>qb,slug:()=>Kb});var qb,Hb,Kb,Vb,Jb,Yb,qs=l(()=>{"use strict";qb="976-what-is-forward-proxy-and-reverse-proxy.md",Hb="posts",Kb="what-is-forward-proxy-and-reverse-proxy",Vb=`
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
`,Jb={title:"What is Forward Proxy and Reverse Proxy",publishedAt:new Date(1685664e6),description:"\u{1F310} Decoding the World of Proxies: Forward vs. Reverse \u{1F310}",isPublish:!0,isDraft:!1},Yb={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md",rawData:`
title: "What is Forward Proxy and Reverse Proxy"
publishedAt: 2023-06-02
description: "\u{1F310} Decoding the World of Proxies: Forward vs. Reverse \u{1F310}"
slug: "what-is-forward-proxy-and-reverse-proxy"
isPublish: true`}});var Hs={};u(Hs,{_internal:()=>nv,body:()=>ev,collection:()=>Xb,data:()=>tv,id:()=>Zb,slug:()=>Qb});var Zb,Xb,Qb,ev,tv,nv,Ks=l(()=>{"use strict";Zb="977-what-is-waf-and-ips.md",Xb="posts",Qb="what-is-waf-and-ips",ev=`
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
`,tv={title:"What is WAF and IPS (Intrusion Prevention System & Web Application Firewall)",publishedAt:new Date(16854048e5),description:"\u{1F510} Demystifying Network Security: IPS vs. WAF \u{1F510}",isPublish:!0,isDraft:!1},nv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md",rawData:`
title: "What is WAF and IPS (Intrusion Prevention System & Web Application Firewall)"
publishedAt: 2023-05-30
description: "\u{1F510} Demystifying Network Security: IPS vs. WAF \u{1F510}"
slug: "what-is-waf-and-ips"
isPublish: true`}});var Vs={};u(Vs,{_internal:()=>cv,body:()=>av,collection:()=>ov,data:()=>rv,id:()=>iv,slug:()=>sv});var iv,ov,sv,av,rv,cv,Js=l(()=>{"use strict";iv="978-metasploit-explained.md",ov="posts",sv="metasploit-explained",av=`
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
`,rv={title:"Metasploit explained for pentesters",publishedAt:new Date(16853184e5),description:"\u{1F513} Metasploit Unleashed: A Comprehensive Guide to Ethical Hacking \u{1F513}",isPublish:!0,isDraft:!1},cv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md",rawData:`
title: "Metasploit explained for pentesters"
publishedAt: 2023-05-29
description: "\u{1F513} Metasploit Unleashed: A Comprehensive Guide to Ethical Hacking \u{1F513}"
slug: "metasploit-explained"
isPublish: true`}});var Ys={};u(Ys,{_internal:()=>mv,body:()=>pv,collection:()=>dv,data:()=>hv,id:()=>lv,slug:()=>uv});var lv,dv,uv,pv,hv,mv,Zs=l(()=>{"use strict";lv="979-content-security-policy-explained.md",dv="posts",uv="content-security-policy-explained",pv=`
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
`,hv={title:"Content Security Policy explained",publishedAt:new Date(1685232e6),description:"\u{1F6E1}\uFE0F Mastering Content Security Policy: A Deep Dive into Web Security \u{1F6E1}\uFE0F",isPublish:!0,isDraft:!1},mv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md",rawData:`
title: "Content Security Policy explained"
publishedAt: 2023-05-28
description: "\u{1F6E1}\uFE0F Mastering Content Security Policy: A Deep Dive into Web Security \u{1F6E1}\uFE0F"
slug: "content-security-policy-explained"
isPublish: true`}});var Xs={};u(Xs,{_internal:()=>bv,body:()=>wv,collection:()=>gv,data:()=>Dv,id:()=>fv,slug:()=>yv});var fv,gv,yv,wv,Dv,bv,Qs=l(()=>{"use strict";fv="980-the-harvester-and-h8mail-osint.md",gv="posts",yv="the-harvester-and-h8mail-osint",wv=`
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
`,Dv={title:"Search for sensitive data using theHarvester and h8mail tools",publishedAt:new Date(16851456e5),description:"\u{1F50D} Email Intelligence: From Harvesting to Breach Analysis \u{1F50D}",isPublish:!0,isDraft:!1},bv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md",rawData:`
title: "Search for sensitive data using theHarvester and h8mail tools"
publishedAt: 2023-05-27
description: "\u{1F50D} Email Intelligence: From Harvesting to Breach Analysis \u{1F50D}"
slug: "the-harvester-and-h8mail-osint"
isPublish: true`}});var ea={};u(ea,{_internal:()=>Av,body:()=>Sv,collection:()=>kv,data:()=>Cv,id:()=>vv,slug:()=>xv});var vv,kv,xv,Sv,Cv,Av,ta=l(()=>{"use strict";vv="981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md",kv="posts",xv="scanning-ports-and-finding-network-vulnerabilities-with-nmap",Sv=`
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

Link: https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda`,Cv={title:"Scanning ports and finding network vulnerabilities using nmap",publishedAt:new Date(16850592e5),description:"\u{1F50D} Nmap Deep Dive: Beyond Basic Port Scanning \u{1F50D}",isPublish:!0,isDraft:!1},Av={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md",rawData:`
title: "Scanning ports and finding network vulnerabilities using nmap"
publishedAt: 2023-05-26
description: "\u{1F50D} Nmap Deep Dive: Beyond Basic Port Scanning \u{1F50D}"
slug: "scanning-ports-and-finding-network-vulnerabilities-with-nmap"
isPublish: true`}});var na={};u(na,{_internal:()=>jv,body:()=>Pv,collection:()=>Ev,data:()=>Rv,id:()=>Fv,slug:()=>Tv});var Fv,Ev,Tv,Pv,Rv,jv,ia=l(()=>{"use strict";Fv="982-scary-rogue-access-point-attack.md",Ev="posts",Tv="scary-rogue-access-point-attack",Pv=`
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
`,Rv={title:"Scary Rogue Access Point attack",publishedAt:new Date(16849728e5),description:"\u{1F4E1} Rogue Access Points: The Silent Threat in Public Wi-Fi \u{1F4E1}",isPublish:!0,isDraft:!1},jv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md",rawData:`
title: "Scary Rogue Access Point attack"
publishedAt: 2023-05-25
description: "\u{1F4E1} Rogue Access Points: The Silent Threat in Public Wi-Fi \u{1F4E1}"
slug: "scary-rogue-access-point-attack"
isPublish: true`}});var oa={};u(oa,{_internal:()=>Ov,body:()=>Bv,collection:()=>Lv,data:()=>Wv,id:()=>Iv,slug:()=>_v});var Iv,Lv,_v,Bv,Wv,Ov,sa=l(()=>{"use strict";Iv="983-what-is-a-zero-day-exploit.md",Lv="posts",_v="what-is-a-zero-day-exploit",Bv=`
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
`,Wv={title:"What is a zero-day (0-day) exploit? Real-life examples",publishedAt:new Date(16848864e5),description:"\u{1F6A8} Zero-Day Alert: Unmasking the Silent Threats \u{1F6A8}",isPublish:!0,isDraft:!1},Ov={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md",rawData:`
title: "What is a zero-day (0-day) exploit? Real-life examples"
publishedAt: 2023-05-24
description: "\u{1F6A8} Zero-Day Alert: Unmasking the Silent Threats \u{1F6A8}"
slug: "what-is-a-zero-day-exploit"
isPublish: true`}});var aa={};u(aa,{_internal:()=>Uv,body:()=>zv,collection:()=>Nv,data:()=>Gv,id:()=>$v,slug:()=>Mv});var $v,Nv,Mv,zv,Gv,Uv,ra=l(()=>{"use strict";$v="984-what-is-insecure-deserialization.md",Nv="posts",Mv="what-is-insecure-deserialization",zv=`
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
`,Gv={title:"What is insecure deserialization",publishedAt:new Date(16848e8),description:"\u{1F510} Deserialization Dangers: Unraveling the Web of Vulnerabilities \u{1F510}",isPublish:!0,isDraft:!1},Uv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md",rawData:`
title: "What is insecure deserialization"
publishedAt: 2023-05-23
description: "\u{1F510} Deserialization Dangers: Unraveling the Web of Vulnerabilities \u{1F510}"
slug: "what-is-insecure-deserialization"
isPublish: true`}});var ca={};u(ca,{_internal:()=>Yv,body:()=>Vv,collection:()=>Hv,data:()=>Jv,id:()=>qv,slug:()=>Kv});var qv,Hv,Kv,Vv,Jv,Yv,la=l(()=>{"use strict";qv="985-what-are-cves-common-vulnerabilities-and-exposures.md",Hv="posts",Kv="what-are-cves-common-vulnerabilities-and-exposures",Vv=`
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
`,Jv={title:"What are and how to read CVEs (Common Vulnerabilities and Exposures)?",publishedAt:new Date(16847136e5),description:"\u{1F50D} CVE Uncovered: Navigating the Labyrinth of System Vulnerabilities \u{1F50D}",isPublish:!0,isDraft:!1},Yv={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md",rawData:`
title: "What are and how to read CVEs (Common Vulnerabilities and Exposures)?"
publishedAt: 2023-05-22
description: "\u{1F50D} CVE Uncovered: Navigating the Labyrinth of System Vulnerabilities \u{1F50D}"
slug: "what-are-cves-common-vulnerabilities-and-exposures"
isPublish: true`}});var da={};u(da,{_internal:()=>nk,body:()=>ek,collection:()=>Xv,data:()=>tk,id:()=>Zv,slug:()=>Qv});var Zv,Xv,Qv,ek,tk,nk,ua=l(()=>{"use strict";Zv="986-security-risks-associated-with-using-git.md",Xv="posts",Qv="security-risks-associated-with-using-git",ek=`
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
`,tk={title:"Security risks associated with using the git version control system",publishedAt:new Date(16846272e5),description:"\u{1F50D} Git Security Deep Dive: Unmasking the Hidden Threats \u{1F50D}",isPublish:!0,isDraft:!1},nk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md",rawData:`
title: "Security risks associated with using the git version control system"
publishedAt: 2023-05-21
description: "\u{1F50D} Git Security Deep Dive: Unmasking the Hidden Threats \u{1F50D}"
slug: "security-risks-associated-with-using-git"
isPublish: true`}});var pa={};u(pa,{_internal:()=>ck,body:()=>ak,collection:()=>ok,data:()=>rk,id:()=>ik,slug:()=>sk});var ik,ok,sk,ak,rk,ck,ha=l(()=>{"use strict";ik="987-cross-site-request-forgery-attack.md",ok="posts",sk="cross-site-request-forgery-attack",ak=`
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
`,rk={title:"Understanding the Cross Site Request Forgery (CSRF) attack",publishedAt:new Date(16845408e5),description:"\u{1F510} CSRF Attacks Unveiled: Navigating the Subtle Threats of Web Security \u{1F510}",isPublish:!0,isDraft:!1},ck={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md",rawData:`
title: "Understanding the Cross Site Request Forgery (CSRF) attack"
publishedAt: 2023-05-20
description: "\u{1F510} CSRF Attacks Unveiled: Navigating the Subtle Threats of Web Security \u{1F510}"
slug: "cross-site-request-forgery-attack"
isPublish: true`}});var ma={};u(ma,{_internal:()=>mk,body:()=>pk,collection:()=>dk,data:()=>hk,id:()=>lk,slug:()=>uk});var lk,dk,uk,pk,hk,mk,fa=l(()=>{"use strict";lk="988-cross-origin-resource-sharing-cors-how-does-it-work.md",dk="posts",uk="cros-origin-resource-sharing-cors-how-does-it-work",pk=`
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
`,hk={title:"Cross-Origin Resource Sharing (CORS). How does it work?",publishedAt:new Date(16844544e5),description:"\u{1F310} Demystifying CORS: Navigating Cross-Origin Requests with Ease \u{1F310}",isPublish:!0,isDraft:!1},mk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md",rawData:`
title: "Cross-Origin Resource Sharing (CORS). How does it work?"
publishedAt: 2023-05-19
description: "\u{1F310} Demystifying CORS: Navigating Cross-Origin Requests with Ease \u{1F310}"
slug: "cros-origin-resource-sharing-cors-how-does-it-work"
isPublish: true`}});var ga={};u(ga,{_internal:()=>bk,body:()=>wk,collection:()=>gk,data:()=>Dk,id:()=>fk,slug:()=>yk});var fk,gk,yk,wk,Dk,bk,ya=l(()=>{"use strict";fk="989-linux-basics.md",gk="posts",yk="linux-basics",wk=`
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
`,Dk={title:"Linux basics",publishedAt:new Date(1684368e6),description:"\u{1F427} Mastering Unix Commands: Your Gateway to Linux Proficiency \u{1F427}",isPublish:!0,isDraft:!1},bk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md",rawData:`
title: "Linux basics"
publishedAt: 2023-05-18
description: "\u{1F427} Mastering Unix Commands: Your Gateway to Linux Proficiency \u{1F427}"
slug: "linux-basics"
isPublish: true`}});var wa={};u(wa,{_internal:()=>Ak,body:()=>Sk,collection:()=>kk,data:()=>Ck,id:()=>vk,slug:()=>xk});var vk,kk,xk,Sk,Ck,Ak,Da=l(()=>{"use strict";vk="990-what-is-path-travelsal-vulnerability.md",kk="posts",xk="path-travelsal-vulnerability",Sk=`
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
`,Ck={title:"What is path travelsal vulnerability?",publishedAt:new Date(16842816e5),description:"\u{1F50D} Path Traversal Vulnerabilities: Unmasking Hidden Threats \u{1F50D}",isPublish:!0,isDraft:!1},Ak={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md",rawData:`
title: "What is path travelsal vulnerability?"
publishedAt: 2023-05-17
description: "\u{1F50D} Path Traversal Vulnerabilities: Unmasking Hidden Threats \u{1F50D}"
slug: "path-travelsal-vulnerability"
isPublish: true`}});var ba={};u(ba,{_internal:()=>jk,body:()=>Pk,collection:()=>Ek,data:()=>Rk,id:()=>Fk,slug:()=>Tk});var Fk,Ek,Tk,Pk,Rk,jk,va=l(()=>{"use strict";Fk="991-what-is-the-TCP-IP-model.md",Ek="posts",Tk="what-is-tcp-ip-model",Pk=`
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
`,Rk={title:"What is the TCP/IP model",publishedAt:new Date(16841952e5),description:"\u{1F310} TCP/IP Unraveled: The Backbone of the Internet \u{1F310}",isPublish:!0,isDraft:!1},jk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md",rawData:`
title: "What is the TCP/IP model"
publishedAt: 2023-05-16
description: "\u{1F310} TCP/IP Unraveled: The Backbone of the Internet \u{1F310}"
slug: "what-is-tcp-ip-model"
isPublish: true`}});var ka={};u(ka,{_internal:()=>Ok,body:()=>Bk,collection:()=>Lk,data:()=>Wk,id:()=>Ik,slug:()=>_k});var Ik,Lk,_k,Bk,Wk,Ok,xa=l(()=>{"use strict";Ik="992-what-is-SSL-certificate.md",Lk="posts",_k="what-is-ssl-certificate",Bk=`
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
`,Wk={title:"What is SSL Certificate",publishedAt:new Date(16841088e5),description:"\u{1F512} SSL/TLS Unveiled: The Guardians of Online Security \u{1F512}",isPublish:!0,isDraft:!1},Ok={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md",rawData:`
title: "What is SSL Certificate"
publishedAt: 2023-05-15
description: "\u{1F512} SSL/TLS Unveiled: The Guardians of Online Security \u{1F512}"
slug: "what-is-ssl-certificate"
isPublish: true`}});var Sa={};u(Sa,{_internal:()=>Uk,body:()=>zk,collection:()=>Nk,data:()=>Gk,id:()=>$k,slug:()=>Mk});var $k,Nk,Mk,zk,Gk,Uk,Ca=l(()=>{"use strict";$k="993-DNS-protocol-explained.md",Nk="posts",Mk="dns-protocol-explained",zk=`
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
`,Gk={title:"DNS Protocol explained",publishedAt:new Date(16840224e5),description:"\u{1F30D} DNS Demystified: Navigating the Backbone of the Internet \u{1F30D}",isPublish:!0,isDraft:!1},Uk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md",rawData:`
title: "DNS Protocol explained"
publishedAt: 2023-05-14
description: "\u{1F30D} DNS Demystified: Navigating the Backbone of the Internet \u{1F30D}"
slug: "dns-protocol-explained"
isPublish: true`}});var Aa={};u(Aa,{_internal:()=>Yk,body:()=>Vk,collection:()=>Hk,data:()=>Jk,id:()=>qk,slug:()=>Kk});var qk,Hk,Kk,Vk,Jk,Yk,Fa=l(()=>{"use strict";qk="994-Insecure-direct-object-reference-IDOR-vulnerability-types.md",Hk="posts",Kk="insecure-direct-object-reference-IDOR-vulnerability-types",Vk=`
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
`,Jk={title:"Insecure Direct Object Reference (IDOR) vulnerability types",publishedAt:new Date(1683936e6),description:"\u{1F310} IDOR Uncovered: Delving Deep into Insecure Direct Object References \u{1F310}",isPublish:!0,isDraft:!1},Yk={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md",rawData:`
title: "Insecure Direct Object Reference (IDOR) vulnerability types"
publishedAt: 2023-05-13
description: "\u{1F310} IDOR Uncovered: Delving Deep into Insecure Direct Object References \u{1F310}"
slug: "insecure-direct-object-reference-IDOR-vulnerability-types"
isPublish: true`}});var Ea={};u(Ea,{_internal:()=>n0,body:()=>e0,collection:()=>Xk,data:()=>t0,id:()=>Zk,slug:()=>Qk});var Zk,Xk,Qk,e0,t0,n0,Ta=l(()=>{"use strict";Zk="995-what-is-jwt.md",Xk="posts",Qk="what-is-jwt",e0=`
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
`,t0={title:"What is JWT (Json Web Token)",publishedAt:new Date(16838496e5),description:"\u{1F510} JWT Demystified: Navigating the Intricacies of JSON Web Tokens \u{1F510}",isPublish:!0,isDraft:!1},n0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md",rawData:`
title: "What is JWT (Json Web Token)"
publishedAt: 2023-05-12
description: "\u{1F510} JWT Demystified: Navigating the Intricacies of JSON Web Tokens \u{1F510}"
slug: "what-is-jwt"
isPublish: true`}});var Pa={};u(Pa,{_internal:()=>c0,body:()=>a0,collection:()=>o0,data:()=>r0,id:()=>i0,slug:()=>s0});var i0,o0,s0,a0,r0,c0,Ra=l(()=>{"use strict";i0="996-x-frame-options-header-explained.md",o0="posts",s0="x-frame-options-header-explained",a0=`
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
`,r0={title:"X-Frame-Options Header Explained",publishedAt:new Date(16837632e5),description:"\u{1F6E1}\uFE0F X-Frame-Options Unveiled: Navigating the Perils of Embedded Content \u{1F6E1}\uFE0F",isPublish:!0,isDraft:!1},c0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md",rawData:`
title: "X-Frame-Options Header Explained"
publishedAt: 2023-05-11
description: "\u{1F6E1}\uFE0F X-Frame-Options Unveiled: Navigating the Perils of Embedded Content \u{1F6E1}\uFE0F"
slug: "x-frame-options-header-explained"
isPublish: true`}});var ja={};u(ja,{_internal:()=>m0,body:()=>p0,collection:()=>d0,data:()=>h0,id:()=>l0,slug:()=>u0});var l0,d0,u0,p0,h0,m0,Ia=l(()=>{"use strict";l0="997-network-devices-shodan.md",d0="posts",u0="network-devices-shodan",p0=`
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

Link: https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1`,h0={title:"Checking network devices in Shodan search engine",publishedAt:new Date(16836768e5),description:"\u{1F310} Shodan Uncovered: The Ultimate Guide to IoT Reconnaissance \u{1F310}",isPublish:!0,isDraft:!1},m0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md",rawData:`
title: "Checking network devices in Shodan search engine"
publishedAt: 2023-05-10
description: "\u{1F310} Shodan Uncovered: The Ultimate Guide to IoT Reconnaissance \u{1F310}"
slug: "network-devices-shodan"
isPublish: true`}});var La={};u(La,{_internal:()=>b0,body:()=>w0,collection:()=>g0,data:()=>D0,id:()=>f0,slug:()=>y0});var f0,g0,y0,w0,D0,b0,_a=l(()=>{"use strict";f0="998-docker-explained-for-pentesters.md",g0="posts",y0="docker-explained-for-pentesters",w0=`
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
`,D0={title:"Docker explained for pentesters",publishedAt:new Date(16835904e5),description:"\u{1F433} Docker Demystified: A Comprehensive Guide to Containerization \u{1F433}",isPublish:!0,isDraft:!1},b0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md",rawData:`
title: "Docker explained for pentesters"
publishedAt: 2023-05-09
description: "\u{1F433} Docker Demystified: A Comprehensive Guide to Containerization \u{1F433}"
slug: "docker-explained-for-pentesters"
isPublish: true`}});var Ba={};u(Ba,{_internal:()=>A0,body:()=>S0,collection:()=>k0,data:()=>C0,id:()=>v0,slug:()=>x0});var v0,k0,x0,S0,C0,A0,Wa=l(()=>{"use strict";v0="999-how-to-optimise-jmeter.md",k0="posts",x0="how-to-optimise-jmeter",S0=`
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
`,C0={title:"How to optimise JMeter for performance tests",publishedAt:new Date(16835904e5),description:"\u{1F680} Unlock the Full Potential of JMeter: A Deep Dive into Optimization \u{1F680}",isPublish:!0,isDraft:!1},A0={type:"content",filePath:"/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md",rawData:`
title: "How to optimise JMeter for performance tests"
publishedAt: 2023-05-09
description: "\u{1F680} Unlock the Full Potential of JMeter: A Deep Dive into Optimization \u{1F680}"
slug: "how-to-optimise-jmeter"
isPublish: true`}});var Ga={};u(Ga,{Content:()=>za,compiledContent:()=>T0,default:()=>za,file:()=>Na,frontmatter:()=>$a,getHeadings:()=>P0,images:()=>rn,rawContent:()=>E0,url:()=>Ma});function F0(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:rn[i].src,...rn[i].attributes}))}function E0(){return`
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
`}function T0(){return Oa}function P0(){return[{depth:2,slug:"using-chatgpt-to-write-nuclei-exploits",text:"Using ChatGPT to write nuclei exploits"}]}async function za(){let{layout:e,...t}=$a;return t.file=Na,t.url=Ma,g(m,{"set:html":Oa})}var A3,T3,rn,Oa,$a,Na,Ma,Ua=l(()=>{"use strict";A();A3=h(b(),1);v();k();T3=h(x(),1);S();C();rn={};Oa=F0(`<h2 id="using-chatgpt-to-write-nuclei-exploits">Using ChatGPT to write nuclei exploits</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/using-chatgpt-to-write-nuclei-exploits-9546e9ffa8ff">https://medium.com/@gpiechnik/using-chatgpt-to-write-nuclei-exploits-9546e9ffa8ff</a></p>`),$a={title:"Using ChatGPT to write nuclei exploits",publishedAt:"2023-07-20T00:00:00.000Z",description:"\u{1F50D} Harnessing ChatGPT for Penetration Testing: A Deep Dive \u{1F50D}",slug:"using-chatgpt-to-write-nuclei-exploits",isPublish:!0},Na="/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md",Ma=void 0;za[Symbol.for("astro.needsHeadRendering")]=!0});var qa={};u(qa,{default:()=>_0});async function R0(){return Promise.resolve().then(()=>(Ua(),Ga))}var j0,I0,L0,_0,Ha=l(()=>{"use strict";j0="@@ASTRO-LINKS@@",I0="@@ASTRO-STYLES@@",L0="@@ASTRO-SCRIPTS@@",_0={__astroPropagation:!0,getMod:R0,collectedLinks:j0,collectedStyles:I0,collectedScripts:L0}});var Xa={};u(Xa,{Content:()=>Za,compiledContent:()=>O0,default:()=>Za,file:()=>Ja,frontmatter:()=>Va,getHeadings:()=>$0,images:()=>cn,rawContent:()=>W0,url:()=>Ya});function B0(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:cn[i].src,...cn[i].attributes}))}function W0(){return`
## Nuclei unleashed - writing first exploit

In the intricate dance of penetration testing, the rhythm is set by the tools we use. But what if we could choreograph our own steps? Enter Nuclei, a framework that lets you craft custom templates for precise vulnerability scanning. Today, we'll dive deep into the world of these templates and see how they can elevate your pen-testing game.

\u{1F4CC} Inside this Exploration:

- Nuclei Unveiled: Discover the essence of Nuclei and its role in the vast landscape of penetration testing.
- Crafting Templates: A hands-on guide to creating your first custom template. From defining basic information to setting up requests and assertions, we've got you covered.
- Real-World Testing: Dive into a practical example as we test a Facebook page for potential vulnerabilities using a custom Nuclei template.
- Beyond the Basics: Learn how to validate, run, and interpret the results of your custom templates. Plus, find out how you can contribute to the Nuclei community by sharing your templates.

Whether you're a seasoned pen-tester or just dipping your toes into the world of cybersecurity, this guide offers a fresh perspective on vulnerability scanning. Join us as we unravel the potential of Nuclei templates and discover how they can be a game-changer in your penetration testing toolkit. \u{1F6E1}\uFE0F\u{1F5A5}\uFE0F\u{1F680}

Link: https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0
`}function O0(){return Ka}function $0(){return[{depth:2,slug:"nuclei-unleashed---writing-first-exploit",text:"Nuclei unleashed - writing first exploit"}]}async function Za(){let{layout:e,...t}=Va;return t.file=Ja,t.url=Ya,g(m,{"set:html":Ka})}var I3,B3,cn,Ka,Va,Ja,Ya,Qa=l(()=>{"use strict";A();I3=h(b(),1);v();k();B3=h(x(),1);S();C();cn={};Ka=B0(`<h2 id="nuclei-unleashed---writing-first-exploit">Nuclei unleashed - writing first exploit</h2>
<p>In the intricate dance of penetration testing, the rhythm is set by the tools we use. But what if we could choreograph our own steps? Enter Nuclei, a framework that lets you craft custom templates for precise vulnerability scanning. Today, we\u2019ll dive deep into the world of these templates and see how they can elevate your pen-testing game.</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Nuclei Unveiled: Discover the essence of Nuclei and its role in the vast landscape of penetration testing.</li>
<li>Crafting Templates: A hands-on guide to creating your first custom template. From defining basic information to setting up requests and assertions, we\u2019ve got you covered.</li>
<li>Real-World Testing: Dive into a practical example as we test a Facebook page for potential vulnerabilities using a custom Nuclei template.</li>
<li>Beyond the Basics: Learn how to validate, run, and interpret the results of your custom templates. Plus, find out how you can contribute to the Nuclei community by sharing your templates.</li>
</ul>
<p>Whether you\u2019re a seasoned pen-tester or just dipping your toes into the world of cybersecurity, this guide offers a fresh perspective on vulnerability scanning. Join us as we unravel the potential of Nuclei templates and discover how they can be a game-changer in your penetration testing toolkit. \u{1F6E1}\uFE0F\u{1F5A5}\uFE0F\u{1F680}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0">https://medium.com/@gpiechnik/nuclei-unleashed-writing-first-exploit-6a8dbd6b80b0</a></p>`),Va={title:"Nuclei unleashed - writing first exploit",publishedAt:"2023-07-12T00:00:00.000Z",description:"\u{1F50D} Nuclei: The Power of Custom Templates in Penetration Testing \u{1F50D}",slug:"nuclei-writing-exploit",isPublish:!0},Ja="/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md",Ya=void 0;Za[Symbol.for("astro.needsHeadRendering")]=!0});var er={};u(er,{default:()=>U0});async function N0(){return Promise.resolve().then(()=>(Qa(),Xa))}var M0,z0,G0,U0,tr=l(()=>{"use strict";M0="@@ASTRO-LINKS@@",z0="@@ASTRO-STYLES@@",G0="@@ASTRO-SCRIPTS@@",U0={__astroPropagation:!0,getMod:N0,collectedLinks:M0,collectedStyles:z0,collectedScripts:G0}});var rr={};u(rr,{Content:()=>ar,compiledContent:()=>K0,default:()=>ar,file:()=>or,frontmatter:()=>ir,getHeadings:()=>V0,images:()=>ln,rawContent:()=>H0,url:()=>sr});function q0(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:ln[i].src,...ln[i].attributes}))}function H0(){return`
## Why standard deviation is important in performance tests

In the vast realm of performance testing, some metrics shine brighter than others. While average response times and percentiles often steal the limelight, there's an unsung hero lurking in the shadows: the standard deviation. Often overlooked, this metric can be the key to unlocking deeper insights into your application's performance. But what makes it so special?

\u{1F4CC} Inside this Exploration:

- Beyond the Basics: Dive into the world of standard deviation and discover why it's more than just a mathematical formula.
- The Real Impact: Understand how standard deviation can influence performance analysis and why it's crucial for testers.
- Crunching the Numbers: A step-by-step guide to calculating standard deviation, minus the jargon. Plus, a hands-on example to bring the concept to life.
- The Bigger Picture: Explore how standard deviation fits into the broader landscape of performance testing metrics and why it deserves a spot in your toolkit.

Whether you're a seasoned tester or just starting out, this article offers a fresh perspective on a classic metric. Dive in and discover how standard deviation can elevate your performance testing game, revealing insights that other metrics might miss. \u{1F4C8}\u{1F50D}\u{1F680}

Link: https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3
`}function K0(){return nr}function V0(){return[{depth:2,slug:"why-standard-deviation-is-important-in-performance-tests",text:"Why standard deviation is important in performance tests"}]}async function ar(){let{layout:e,...t}=ir;return t.file=or,t.url=sr,g(m,{"set:html":nr})}var N3,G3,ln,nr,ir,or,sr,cr=l(()=>{"use strict";A();N3=h(b(),1);v();k();G3=h(x(),1);S();C();ln={};nr=q0(`<h2 id="why-standard-deviation-is-important-in-performance-tests">Why standard deviation is important in performance tests</h2>
<p>In the vast realm of performance testing, some metrics shine brighter than others. While average response times and percentiles often steal the limelight, there\u2019s an unsung hero lurking in the shadows: the standard deviation. Often overlooked, this metric can be the key to unlocking deeper insights into your application\u2019s performance. But what makes it so special?</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>Beyond the Basics: Dive into the world of standard deviation and discover why it\u2019s more than just a mathematical formula.</li>
<li>The Real Impact: Understand how standard deviation can influence performance analysis and why it\u2019s crucial for testers.</li>
<li>Crunching the Numbers: A step-by-step guide to calculating standard deviation, minus the jargon. Plus, a hands-on example to bring the concept to life.</li>
<li>The Bigger Picture: Explore how standard deviation fits into the broader landscape of performance testing metrics and why it deserves a spot in your toolkit.</li>
</ul>
<p>Whether you\u2019re a seasoned tester or just starting out, this article offers a fresh perspective on a classic metric. Dive in and discover how standard deviation can elevate your performance testing game, revealing insights that other metrics might miss. \u{1F4C8}\u{1F50D}\u{1F680}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3">https://medium.com/@gpiechnik/why-standard-deviation-is-important-in-performance-tests-a32e6b77f7a3</a></p>`),ir={title:"Why standard deviation is important in performance tests",publishedAt:"2023-07-06T00:00:00.000Z",description:"\u{1F4CA} Standard Deviation: The Unsung Hero of Performance Testing \u{1F4CA}",slug:"standard-deviation-performance-tests",isPublish:!0},or="/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md",sr=void 0;ar[Symbol.for("astro.needsHeadRendering")]=!0});var lr={};u(lr,{default:()=>Q0});async function J0(){return Promise.resolve().then(()=>(cr(),rr))}var Y0,Z0,X0,Q0,dr=l(()=>{"use strict";Y0="@@ASTRO-LINKS@@",Z0="@@ASTRO-STYLES@@",X0="@@ASTRO-SCRIPTS@@",Q0={__astroPropagation:!0,getMod:J0,collectedLinks:Y0,collectedStyles:Z0,collectedScripts:X0}});var gr={};u(gr,{Content:()=>fr,compiledContent:()=>nx,default:()=>fr,file:()=>hr,frontmatter:()=>pr,getHeadings:()=>ix,images:()=>dn,rawContent:()=>tx,url:()=>mr});function ex(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:dn[i].src,...dn[i].attributes}))}function tx(){return`
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
`}function nx(){return ur}function ix(){return[{depth:2,slug:"afrog-explained",text:"Afrog explained"}]}async function fr(){let{layout:e,...t}=pr;return t.file=hr,t.url=mr,g(m,{"set:html":ur})}var K3,Y3,dn,ur,pr,hr,mr,yr=l(()=>{"use strict";A();K3=h(b(),1);v();k();Y3=h(x(),1);S();C();dn={};ur=ex(`<h2 id="afrog-explained">Afrog explained</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/afrog-explained-for-bug-hunters-ed1497d5aaf5">https://medium.com/@gpiechnik/afrog-explained-for-bug-hunters-ed1497d5aaf5</a></p>`),pr={title:"Afrog explained for bug bounty hunters",publishedAt:"2023-07-05T00:00:00.000Z",description:"\u{1F438} Afrog: The Pentester's New Best Friend? \u{1F438}",slug:"afrog-bug-bounty-pentesters",isPublish:!0},hr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md",mr=void 0;fr[Symbol.for("astro.needsHeadRendering")]=!0});var wr={};u(wr,{default:()=>cx});async function ox(){return Promise.resolve().then(()=>(yr(),gr))}var sx,ax,rx,cx,Dr=l(()=>{"use strict";sx="@@ASTRO-LINKS@@",ax="@@ASTRO-STYLES@@",rx="@@ASTRO-SCRIPTS@@",cx={__astroPropagation:!0,getMod:ox,collectedLinks:sx,collectedStyles:ax,collectedScripts:rx}});var Cr={};u(Cr,{Content:()=>Sr,compiledContent:()=>ux,default:()=>Sr,file:()=>kr,frontmatter:()=>vr,getHeadings:()=>px,images:()=>un,rawContent:()=>dx,url:()=>xr});function lx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:un[i].src,...un[i].attributes}))}function dx(){return`
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
`}function ux(){return br}function px(){return[{depth:2,slug:"drill---performance-testing-tool",text:"Drill - performance testing tool"}]}async function Sr(){let{layout:e,...t}=vr;return t.file=kr,t.url=xr,g(m,{"set:html":br})}var e8,i8,un,br,vr,kr,xr,Ar=l(()=>{"use strict";A();e8=h(b(),1);v();k();i8=h(x(),1);S();C();un={};br=lx(`<h2 id="drill---performance-testing-tool">Drill - performance testing tool</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/my-impressions-of-using-the-drill-performance-testing-tool-ee391b93efe2">https://medium.com/@gpiechnik/my-impressions-of-using-the-drill-performance-testing-tool-ee391b93efe2</a></p>`),vr={title:"My impressions of using the Drill performance testing tool",publishedAt:"2023-07-04T00:00:00.000Z",description:"\u{1F529} Drill Performance Testing: A Deep Dive \u{1F529}",slug:"drill-performance-testing-tool",isPublish:!0},kr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md",xr=void 0;Sr[Symbol.for("astro.needsHeadRendering")]=!0});var Fr={};u(Fr,{default:()=>yx});async function hx(){return Promise.resolve().then(()=>(Ar(),Cr))}var mx,fx,gx,yx,Er=l(()=>{"use strict";mx="@@ASTRO-LINKS@@",fx="@@ASTRO-STYLES@@",gx="@@ASTRO-SCRIPTS@@",yx={__astroPropagation:!0,getMod:hx,collectedLinks:mx,collectedStyles:fx,collectedScripts:gx}});var Lr={};u(Lr,{Content:()=>Ir,compiledContent:()=>bx,default:()=>Ir,file:()=>Rr,frontmatter:()=>Pr,getHeadings:()=>vx,images:()=>pn,rawContent:()=>Dx,url:()=>jr});function wx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:pn[i].src,...pn[i].attributes}))}function Dx(){return`
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
`}function bx(){return Tr}function vx(){return[{depth:2,slug:"aws-ec2-instances-basics",text:"AWS EC2 Instances basics"}]}async function Ir(){let{layout:e,...t}=Pr;return t.file=Rr,t.url=jr,g(m,{"set:html":Tr})}var r8,d8,pn,Tr,Pr,Rr,jr,_r=l(()=>{"use strict";A();r8=h(b(),1);v();k();d8=h(x(),1);S();C();pn={};Tr=wx(`<h2 id="aws-ec2-instances-basics">AWS EC2 Instances basics</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/aws-ec2-instances-basics-7f133204767a">https://medium.com/@gpiechnik/aws-ec2-instances-basics-7f133204767a</a></p>`),Pr={title:"AWS EC2 Instances basics",publishedAt:"2023-06-30T00:00:00.000Z",description:"\u{1F680} Unleashing the Power of AWS EC2 \u{1F680}",slug:"aws-ec2-instances-basics",isPublish:!0},Rr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md",jr=void 0;Ir[Symbol.for("astro.needsHeadRendering")]=!0});var Br={};u(Br,{default:()=>Ax});async function kx(){return Promise.resolve().then(()=>(_r(),Lr))}var xx,Sx,Cx,Ax,Wr=l(()=>{"use strict";xx="@@ASTRO-LINKS@@",Sx="@@ASTRO-STYLES@@",Cx="@@ASTRO-SCRIPTS@@",Ax={__astroPropagation:!0,getMod:kx,collectedLinks:xx,collectedStyles:Sx,collectedScripts:Cx}});var Gr={};u(Gr,{Content:()=>zr,compiledContent:()=>Tx,default:()=>zr,file:()=>Nr,frontmatter:()=>$r,getHeadings:()=>Px,images:()=>hn,rawContent:()=>Ex,url:()=>Mr});function Fx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:hn[i].src,...hn[i].attributes}))}function Ex(){return`
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
`}function Tx(){return Or}function Px(){return[{depth:2,slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2",text:"What is Apache Kafka and how to perform performance tests on it (Part 2)"}]}async function zr(){let{layout:e,...t}=$r;return t.file=Nr,t.url=Mr,g(m,{"set:html":Or})}var m8,y8,hn,Or,$r,Nr,Mr,Ur=l(()=>{"use strict";A();m8=h(b(),1);v();k();y8=h(x(),1);S();C();hn={};Or=Fx(`<h2 id="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2">What is Apache Kafka and how to perform performance tests on it (Part 2)</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2-54177fc6631c">https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-2-54177fc6631c</a></p>`),$r={title:"What is Apache Kafka and how to perform performance tests on it (Part 2)",publishedAt:"2023-06-28T00:00:00.000Z",description:"\u{1F680} Mastering Performance Testing with Apache Kafka \u{1F680}",slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2",isPublish:!0},Nr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md",Mr=void 0;zr[Symbol.for("astro.needsHeadRendering")]=!0});var qr={};u(qr,{default:()=>_x});async function Rx(){return Promise.resolve().then(()=>(Ur(),Gr))}var jx,Ix,Lx,_x,Hr=l(()=>{"use strict";jx="@@ASTRO-LINKS@@",Ix="@@ASTRO-STYLES@@",Lx="@@ASTRO-SCRIPTS@@",_x={__astroPropagation:!0,getMod:Rx,collectedLinks:jx,collectedStyles:Ix,collectedScripts:Lx}});var Xr={};u(Xr,{Content:()=>Zr,compiledContent:()=>Ox,default:()=>Zr,file:()=>Jr,frontmatter:()=>Vr,getHeadings:()=>$x,images:()=>mn,rawContent:()=>Wx,url:()=>Yr});function Bx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:mn[i].src,...mn[i].attributes}))}function Wx(){return`
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
`}function Ox(){return Kr}function $x(){return[{depth:2,slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1",text:"What is Apache Kafka and how to perform performance tests on it (Part 1)"}]}async function Zr(){let{layout:e,...t}=Vr;return t.file=Jr,t.url=Yr,g(m,{"set:html":Kr})}var v8,S8,mn,Kr,Vr,Jr,Yr,Qr=l(()=>{"use strict";A();v8=h(b(),1);v();k();S8=h(x(),1);S();C();mn={};Kr=Bx(`<h2 id="what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1">What is Apache Kafka and how to perform performance tests on it (Part 1)</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1-b4b71edb6286">https://medium.com/@gpiechnik/what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-part-1-b4b71edb6286</a></p>`),Vr={title:"What is Apache Kafka and how to perform performance tests on it (Part 1)",publishedAt:"2023-06-25T00:00:00.000Z",description:"\u{1F525} Diving Deep into Event Streaming with Apache Kafka \u{1F525}",slug:"what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one",isPublish:!0},Jr="/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md",Yr=void 0;Zr[Symbol.for("astro.needsHeadRendering")]=!0});var ec={};u(ec,{default:()=>Ux});async function Nx(){return Promise.resolve().then(()=>(Qr(),Xr))}var Mx,zx,Gx,Ux,tc=l(()=>{"use strict";Mx="@@ASTRO-LINKS@@",zx="@@ASTRO-STYLES@@",Gx="@@ASTRO-SCRIPTS@@",Ux={__astroPropagation:!0,getMod:Nx,collectedLinks:Mx,collectedStyles:zx,collectedScripts:Gx}});var rc={};u(rc,{Content:()=>ac,compiledContent:()=>Kx,default:()=>ac,file:()=>oc,frontmatter:()=>ic,getHeadings:()=>Vx,images:()=>fn,rawContent:()=>Hx,url:()=>sc});function qx(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:fn[i].src,...fn[i].attributes}))}function Hx(){return`
## Types of deployment

In the dynamic world of IT, updating applications and introducing new features is the name of the game. But how do you ensure smooth transitions without disrupting user experience? Enter deployment strategies! Dive into this guide to explore three of the most popular deployment types that IT companies swear by.

\u{1F4CC} Inside this Guide:

- Rolling Deployment Demystified: Understand the step-by-step process of updating servers and why this strategy is a favorite for applications with minor updates.
- Canary Deployment Unveiled: Discover how this user-centric approach tests the waters with a select group before a full-scale launch.
- Blue/Green Deployment Explained: Dive into the world of dual environments and learn how traffic redirection ensures seamless transitions between versions.

Whether you're an IT professional, a budding developer, or a business owner looking to understand the best deployment strategy for your organization, this guide offers insights into the pros and cons of each method. Equip yourself with the knowledge to make informed decisions and ensure smooth application updates. \u{1F504}\u{1F310}\u{1F527}

Link: https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67
`}function Kx(){return nc}function Vx(){return[{depth:2,slug:"types-of-deployment",text:"Types of deployment"}]}async function ac(){let{layout:e,...t}=ic;return t.file=oc,t.url=sc,g(m,{"set:html":nc})}var E8,R8,fn,nc,ic,oc,sc,cc=l(()=>{"use strict";A();E8=h(b(),1);v();k();R8=h(x(),1);S();C();fn={};nc=qx(`<h2 id="types-of-deployment">Types of deployment</h2>
<p>In the dynamic world of IT, updating applications and introducing new features is the name of the game. But how do you ensure smooth transitions without disrupting user experience? Enter deployment strategies! Dive into this guide to explore three of the most popular deployment types that IT companies swear by.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Rolling Deployment Demystified: Understand the step-by-step process of updating servers and why this strategy is a favorite for applications with minor updates.</li>
<li>Canary Deployment Unveiled: Discover how this user-centric approach tests the waters with a select group before a full-scale launch.</li>
<li>Blue/Green Deployment Explained: Dive into the world of dual environments and learn how traffic redirection ensures seamless transitions between versions.</li>
</ul>
<p>Whether you\u2019re an IT professional, a budding developer, or a business owner looking to understand the best deployment strategy for your organization, this guide offers insights into the pros and cons of each method. Equip yourself with the knowledge to make informed decisions and ensure smooth application updates. \u{1F504}\u{1F310}\u{1F527}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67">https://medium.com/@gpiechnik/what-are-the-types-of-deployment-785da8259e67</a></p>`),ic={title:"What are the types of deployment",publishedAt:"2023-06-24T00:00:00.000Z",description:"\u{1F680} Mastering Deployment Strategies: Rolling, Canary, and Blue/Green \u{1F680}",slug:"types-of-deployment",isPublish:!0},oc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md",sc=void 0;ac[Symbol.for("astro.needsHeadRendering")]=!0});var lc={};u(lc,{default:()=>Qx});async function Jx(){return Promise.resolve().then(()=>(cc(),rc))}var Yx,Zx,Xx,Qx,dc=l(()=>{"use strict";Yx="@@ASTRO-LINKS@@",Zx="@@ASTRO-STYLES@@",Xx="@@ASTRO-SCRIPTS@@",Qx={__astroPropagation:!0,getMod:Jx,collectedLinks:Yx,collectedStyles:Zx,collectedScripts:Xx}});var gc={};u(gc,{Content:()=>fc,compiledContent:()=>n2,default:()=>fc,file:()=>hc,frontmatter:()=>pc,getHeadings:()=>i2,images:()=>gn,rawContent:()=>t2,url:()=>mc});function e2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:gn[i].src,...gn[i].attributes}))}function t2(){return`
## Availability, Load Balancing, Failover and Session Persistence

Navigating the world of performance testing or development often feels like wading through a sea of jargon. Terms like "availability," "load balancing," and "session persistence" get thrown around, but what do they really mean? And why should you care? Dive into this guide to decode these terms and more!

\u{1F4CC} Inside this Guide:

- Availability Unveiled: Discover what we truly mean when we talk about an application's availability and why it's not just about uptime percentages.
- Load Balancing Explained: Unravel the intricacies of load balancing, its importance, and its multifaceted nature.
- The Art of Failover: Learn about the system's ability to seamlessly switch to a backup during failures and the significance of failover testing.
- Session Persistence Decoded: Dive deep into the concept of session persistence and understand its role in enhancing user experience.

Whether you're a seasoned developer, a budding performance tester, or just someone looking to understand the tech world a bit better, this guide offers a clear and concise breakdown of some of the most commonly used (and often misunderstood) terms. Equip yourself with the knowledge to navigate tech discussions with confidence! \u{1F4BB}\u{1F310}\u{1F4D8}

Link: https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3
`}function n2(){return uc}function i2(){return[{depth:2,slug:"availability-load-balancing-failover-and-session-persistence",text:"Availability, Load Balancing, Failover and Session Persistence"}]}async function fc(){let{layout:e,...t}=pc;return t.file=hc,t.url=mc,g(m,{"set:html":uc})}var _8,O8,gn,uc,pc,hc,mc,yc=l(()=>{"use strict";A();_8=h(b(),1);v();k();O8=h(x(),1);S();C();gn={};uc=e2(`<h2 id="availability-load-balancing-failover-and-session-persistence">Availability, Load Balancing, Failover and Session Persistence</h2>
<p>Navigating the world of performance testing or development often feels like wading through a sea of jargon. Terms like \u201Cavailability,\u201D \u201Cload balancing,\u201D and \u201Csession persistence\u201D get thrown around, but what do they really mean? And why should you care? Dive into this guide to decode these terms and more!</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Availability Unveiled: Discover what we truly mean when we talk about an application\u2019s availability and why it\u2019s not just about uptime percentages.</li>
<li>Load Balancing Explained: Unravel the intricacies of load balancing, its importance, and its multifaceted nature.</li>
<li>The Art of Failover: Learn about the system\u2019s ability to seamlessly switch to a backup during failures and the significance of failover testing.</li>
<li>Session Persistence Decoded: Dive deep into the concept of session persistence and understand its role in enhancing user experience.</li>
</ul>
<p>Whether you\u2019re a seasoned developer, a budding performance tester, or just someone looking to understand the tech world a bit better, this guide offers a clear and concise breakdown of some of the most commonly used (and often misunderstood) terms. Equip yourself with the knowledge to navigate tech discussions with confidence! \u{1F4BB}\u{1F310}\u{1F4D8}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3">https://medium.com/@gpiechnik/what-are-the-concepts-of-availability-load-balancing-failover-and-session-persistence-122814a619c3</a></p>`),pc={title:"What are the concepts of availability, load balancing, failover and session persistence",publishedAt:"2023-06-23T00:00:00.000Z",description:"\u{1F50D} Demystifying Tech Jargon: From Availability to Session Persistence \u{1F50D}",slug:"availability-load-balancing-failover-session-persistence",isPublish:!0},hc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md",mc=void 0;fc[Symbol.for("astro.needsHeadRendering")]=!0});var wc={};u(wc,{default:()=>c2});async function o2(){return Promise.resolve().then(()=>(yc(),gc))}var s2,a2,r2,c2,Dc=l(()=>{"use strict";s2="@@ASTRO-LINKS@@",a2="@@ASTRO-STYLES@@",r2="@@ASTRO-SCRIPTS@@",c2={__astroPropagation:!0,getMod:o2,collectedLinks:s2,collectedStyles:a2,collectedScripts:r2}});var Cc={};u(Cc,{Content:()=>Sc,compiledContent:()=>u2,default:()=>Sc,file:()=>kc,frontmatter:()=>vc,getHeadings:()=>p2,images:()=>yn,rawContent:()=>d2,url:()=>xc});function l2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:yn[i].src,...yn[i].attributes}))}function d2(){return`
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
`}function u2(){return bc}function p2(){return[{depth:2,slug:"mitmproxy-and-k6",text:"Mitmproxy and k6"}]}async function Sc(){let{layout:e,...t}=vc;return t.file=kc,t.url=xc,g(m,{"set:html":bc})}var z8,q8,yn,bc,vc,kc,xc,Ac=l(()=>{"use strict";A();z8=h(b(),1);v();k();q8=h(x(),1);S();C();yn={};bc=l2(`<h2 id="mitmproxy-and-k6">Mitmproxy and k6</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/using-mitmproxy-with-k6-9326cd13ab28">https://medium.com/@gpiechnik/using-mitmproxy-with-k6-9326cd13ab28</a></p>`),vc={title:"Using mitmproxy with k6",publishedAt:"2023-06-22T00:00:00.000Z",description:"\u{1F50D} Mitmproxy: The Open-Source Powerhouse for Traffic Capture \u{1F50D}",slug:"mitmproxy-and-k6",isPublish:!0},kc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md",xc=void 0;Sc[Symbol.for("astro.needsHeadRendering")]=!0});var Fc={};u(Fc,{default:()=>y2});async function h2(){return Promise.resolve().then(()=>(Ac(),Cc))}var m2,f2,g2,y2,Ec=l(()=>{"use strict";m2="@@ASTRO-LINKS@@",f2="@@ASTRO-STYLES@@",g2="@@ASTRO-SCRIPTS@@",y2={__astroPropagation:!0,getMod:h2,collectedLinks:m2,collectedStyles:f2,collectedScripts:g2}});var Lc={};u(Lc,{Content:()=>Ic,compiledContent:()=>b2,default:()=>Ic,file:()=>Rc,frontmatter:()=>Pc,getHeadings:()=>v2,images:()=>wn,rawContent:()=>D2,url:()=>jc});function w2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:wn[i].src,...wn[i].attributes}))}function D2(){return`
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
`}function b2(){return Tc}function v2(){return[{depth:2,slug:"flaky-tests-in-jmeter",text:"Flaky tests in JMeter"}]}async function Ic(){let{layout:e,...t}=Pc;return t.file=Rc,t.url=jc,g(m,{"set:html":Tc})}var J8,X8,wn,Tc,Pc,Rc,jc,_c=l(()=>{"use strict";A();J8=h(b(),1);v();k();X8=h(x(),1);S();C();wn={};Tc=w2(`<h2 id="flaky-tests-in-jmeter">Flaky tests in JMeter</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/flaky-tests-in-jmeter-9c62994cfbf5">https://medium.com/@gpiechnik/flaky-tests-in-jmeter-9c62994cfbf5</a></p>`),Pc={title:"Flaky tests in JMeter",publishedAt:"2023-06-21T00:00:00.000Z",description:"\u{1F50D} Stabilizing Performance Tests: Navigating the World of Flaky Tests \u{1F50D}",slug:"flaky-tests-jmeter",isPublish:!0},Rc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md",jc=void 0;Ic[Symbol.for("astro.needsHeadRendering")]=!0});var Bc={};u(Bc,{default:()=>A2});async function k2(){return Promise.resolve().then(()=>(_c(),Lc))}var x2,S2,C2,A2,Wc=l(()=>{"use strict";x2="@@ASTRO-LINKS@@",S2="@@ASTRO-STYLES@@",C2="@@ASTRO-SCRIPTS@@",A2={__astroPropagation:!0,getMod:k2,collectedLinks:x2,collectedStyles:S2,collectedScripts:C2}});var Gc={};u(Gc,{Content:()=>zc,compiledContent:()=>T2,default:()=>zc,file:()=>Nc,frontmatter:()=>$c,getHeadings:()=>P2,images:()=>Dn,rawContent:()=>E2,url:()=>Mc});function F2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Dn[i].src,...Dn[i].attributes}))}function E2(){return`
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
`}function T2(){return Oc}function P2(){return[{depth:2,slug:"how-to-debug-requests-in-k6",text:"How to debug requests in k6?"}]}async function zc(){let{layout:e,...t}=$c;return t.file=Nc,t.url=Mc,g(m,{"set:html":Oc})}var nT,sT,Dn,Oc,$c,Nc,Mc,Uc=l(()=>{"use strict";A();nT=h(b(),1);v();k();sT=h(x(),1);S();C();Dn={};Oc=F2(`<h2 id="how-to-debug-requests-in-k6">How to debug requests in k6?</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/how-to-quickly-debug-requests-from-k6-test-scenarios-3ebf2e6733f5">https://medium.com/@gpiechnik/how-to-quickly-debug-requests-from-k6-test-scenarios-3ebf2e6733f5</a></p>`),$c={title:"How to debug requests in k6",publishedAt:"2023-06-20T00:00:00.000Z",description:"\u{1F50D} Decoding k6 Errors: A Comprehensive Guide to Efficient Error Reporting \u{1F50D}",slug:"debug-requests-k6",isPublish:!0},Nc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md",Mc=void 0;zc[Symbol.for("astro.needsHeadRendering")]=!0});var qc={};u(qc,{default:()=>_2});async function R2(){return Promise.resolve().then(()=>(Uc(),Gc))}var j2,I2,L2,_2,Hc=l(()=>{"use strict";j2="@@ASTRO-LINKS@@",I2="@@ASTRO-STYLES@@",L2="@@ASTRO-SCRIPTS@@",_2={__astroPropagation:!0,getMod:R2,collectedLinks:j2,collectedStyles:I2,collectedScripts:L2}});var Xc={};u(Xc,{Content:()=>Zc,compiledContent:()=>O2,default:()=>Zc,file:()=>Jc,frontmatter:()=>Vc,getHeadings:()=>$2,images:()=>bn,rawContent:()=>W2,url:()=>Yc});function B2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:bn[i].src,...bn[i].attributes}))}function W2(){return`
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
`}function O2(){return Kc}function $2(){return[{depth:2,slug:"what-are-memory-leaks",text:"What are memory leaks?"}]}async function Zc(){let{layout:e,...t}=Vc;return t.file=Jc,t.url=Yc,g(m,{"set:html":Kc})}var lT,pT,bn,Kc,Vc,Jc,Yc,Qc=l(()=>{"use strict";A();lT=h(b(),1);v();k();pT=h(x(),1);S();C();bn={};Kc=B2(`<h2 id="what-are-memory-leaks">What are memory leaks?</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-memory-leaks-8ab2904720e0">https://medium.com/@gpiechnik/what-are-memory-leaks-8ab2904720e0</a></p>`),Vc={title:"What are memory leaks?",publishedAt:"2023-06-18T00:00:00.000Z",description:"\u{1F50D} Memory Leaks: The Silent Killers of Application Performance \u{1F50D}",slug:"what-are-memory-leaks",isPublish:!0},Jc="/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md",Yc=void 0;Zc[Symbol.for("astro.needsHeadRendering")]=!0});var el={};u(el,{default:()=>U2});async function N2(){return Promise.resolve().then(()=>(Qc(),Xc))}var M2,z2,G2,U2,tl=l(()=>{"use strict";M2="@@ASTRO-LINKS@@",z2="@@ASTRO-STYLES@@",G2="@@ASTRO-SCRIPTS@@",U2={__astroPropagation:!0,getMod:N2,collectedLinks:M2,collectedStyles:z2,collectedScripts:G2}});var rl={};u(rl,{Content:()=>al,compiledContent:()=>K2,default:()=>al,file:()=>ol,frontmatter:()=>il,getHeadings:()=>V2,images:()=>vn,rawContent:()=>H2,url:()=>sl});function q2(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:vn[i].src,...vn[i].attributes}))}function H2(){return`
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
`}function K2(){return nl}function V2(){return[{depth:2,slug:"what-is-browser-based-load-testing",text:"What is browser based load testing"}]}async function al(){let{layout:e,...t}=il;return t.file=ol,t.url=sl,g(m,{"set:html":nl})}var gT,DT,vn,nl,il,ol,sl,cl=l(()=>{"use strict";A();gT=h(b(),1);v();k();DT=h(x(),1);S();C();vn={};nl=q2(`<h2 id="what-is-browser-based-load-testing">What is browser based load testing</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-browser-based-load-testing-9e834a0118ff">https://medium.com/@gpiechnik/what-is-browser-based-load-testing-9e834a0118ff</a></p>`),il={title:"What is browser based load testing",publishedAt:"2023-06-17T00:00:00.000Z",description:"\u{1F680} Browser-Based Load Testing: The Unsung Hero of Performance Metrics \u{1F680}",slug:"what-is-browser-based-load-testing",isPublish:!0},ol="/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md",sl=void 0;al[Symbol.for("astro.needsHeadRendering")]=!0});var ll={};u(ll,{default:()=>Q2});async function J2(){return Promise.resolve().then(()=>(cl(),rl))}var Y2,Z2,X2,Q2,dl=l(()=>{"use strict";Y2="@@ASTRO-LINKS@@",Z2="@@ASTRO-STYLES@@",X2="@@ASTRO-SCRIPTS@@",Q2={__astroPropagation:!0,getMod:J2,collectedLinks:Y2,collectedStyles:Z2,collectedScripts:X2}});var gl={};u(gl,{Content:()=>fl,compiledContent:()=>nS,default:()=>fl,file:()=>hl,frontmatter:()=>pl,getHeadings:()=>iS,images:()=>kn,rawContent:()=>tS,url:()=>ml});function eS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:kn[i].src,...kn[i].attributes}))}function tS(){return`
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
`}function nS(){return ul}function iS(){return[{depth:2,slug:"reading-summary-data-in-k6",text:"Reading summary data in k6"}]}async function fl(){let{layout:e,...t}=pl;return t.file=hl,t.url=ml,g(m,{"set:html":ul})}var xT,AT,kn,ul,pl,hl,ml,yl=l(()=>{"use strict";A();xT=h(b(),1);v();k();AT=h(x(),1);S();C();kn={};ul=eS(`<h2 id="reading-summary-data-in-k6">Reading summary data in k6</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/how-to-quick-read-summary-data-in-k6-from-json-file-f9d09bccd9c2">https://medium.com/@gpiechnik/how-to-quick-read-summary-data-in-k6-from-json-file-f9d09bccd9c2</a></p>`),pl={title:"How to quickly read summary data in k6 from json file",publishedAt:"2023-06-16T00:00:00.000Z",description:"\u{1F50D} JQ: The Ultimate JSON Processor for K6 Testers \u{1F50D}",slug:"read-summary-data-in-k6",isPublish:!0},hl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md",ml=void 0;fl[Symbol.for("astro.needsHeadRendering")]=!0});var wl={};u(wl,{default:()=>cS});async function oS(){return Promise.resolve().then(()=>(yl(),gl))}var sS,aS,rS,cS,Dl=l(()=>{"use strict";sS="@@ASTRO-LINKS@@",aS="@@ASTRO-STYLES@@",rS="@@ASTRO-SCRIPTS@@",cS={__astroPropagation:!0,getMod:oS,collectedLinks:sS,collectedStyles:aS,collectedScripts:rS}});var Cl={};u(Cl,{Content:()=>Sl,compiledContent:()=>uS,default:()=>Sl,file:()=>kl,frontmatter:()=>vl,getHeadings:()=>pS,images:()=>xn,rawContent:()=>dS,url:()=>xl});function lS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:xn[i].src,...xn[i].attributes}))}function dS(){return`
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
`}function uS(){return bl}function pS(){return[{depth:2,slug:"fundamental-network-tools",text:"Fundamental network tools"}]}async function Sl(){let{layout:e,...t}=vl;return t.file=kl,t.url=xl,g(m,{"set:html":bl})}var PT,IT,xn,bl,vl,kl,xl,Al=l(()=>{"use strict";A();PT=h(b(),1);v();k();IT=h(x(),1);S();C();xn={};bl=lS(`<h2 id="fundamental-network-tools">Fundamental network tools</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/fundamental-network-tools-9bb6f3f54ef1">https://medium.com/@gpiechnik/fundamental-network-tools-9bb6f3f54ef1</a></p>`),vl={title:"Fundamental network tools",publishedAt:"2023-06-15T00:00:00.000Z",description:"\u{1F310} Mastering Network Tools: A Non-Functional Tester's Guide \u{1F310}",slug:"fundamental-network-tools",isPublish:!0},kl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md",xl=void 0;Sl[Symbol.for("astro.needsHeadRendering")]=!0});var Fl={};u(Fl,{default:()=>yS});async function hS(){return Promise.resolve().then(()=>(Al(),Cl))}var mS,fS,gS,yS,El=l(()=>{"use strict";mS="@@ASTRO-LINKS@@",fS="@@ASTRO-STYLES@@",gS="@@ASTRO-SCRIPTS@@",yS={__astroPropagation:!0,getMod:hS,collectedLinks:mS,collectedStyles:fS,collectedScripts:gS}});var Ll={};u(Ll,{Content:()=>Il,compiledContent:()=>bS,default:()=>Il,file:()=>Rl,frontmatter:()=>Pl,getHeadings:()=>vS,images:()=>Sn,rawContent:()=>DS,url:()=>jl});function wS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Sn[i].src,...Sn[i].attributes}))}function DS(){return`
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
`}function bS(){return Tl}function vS(){return[{depth:2,slug:"crucial-update-for-k6",text:"Crucial update for k6!"}]}async function Il(){let{layout:e,...t}=Pl;return t.file=Rl,t.url=jl,g(m,{"set:html":Tl})}var WT,NT,Sn,Tl,Pl,Rl,jl,_l=l(()=>{"use strict";A();WT=h(b(),1);v();k();NT=h(x(),1);S();C();Sn={};Tl=wS(`<h2 id="crucial-update-for-k6">Crucial update for k6!</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/crucial-update-for-k6-results-analysis-81b1c120fa7">https://medium.com/@gpiechnik/crucial-update-for-k6-results-analysis-81b1c120fa7</a></p>`),Pl={title:"Crucial update for k6 results analysis",publishedAt:"2023-06-13T00:00:00.000Z",description:"\u{1F50D} K6 Framework Evolution: A New Era of Performance Testing \u{1F50D}",slug:"crucial-update-for-k6-results-analysis",isPublish:!0},Rl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md",jl=void 0;Il[Symbol.for("astro.needsHeadRendering")]=!0});var Bl={};u(Bl,{default:()=>AS});async function kS(){return Promise.resolve().then(()=>(_l(),Ll))}var xS,SS,CS,AS,Wl=l(()=>{"use strict";xS="@@ASTRO-LINKS@@",SS="@@ASTRO-STYLES@@",CS="@@ASTRO-SCRIPTS@@",AS={__astroPropagation:!0,getMod:kS,collectedLinks:xS,collectedStyles:SS,collectedScripts:CS}});var Gl={};u(Gl,{Content:()=>zl,compiledContent:()=>TS,default:()=>zl,file:()=>Nl,frontmatter:()=>$l,getHeadings:()=>PS,images:()=>Cn,rawContent:()=>ES,url:()=>Ml});function FS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Cn[i].src,...Cn[i].attributes}))}function ES(){return`
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
`}function TS(){return Ol}function PS(){return[{depth:2,slug:"hacking-embedded-systems-using-the-routersploit",text:"Hacking embedded systems using the routersploit"}]}async function zl(){let{layout:e,...t}=$l;return t.file=Nl,t.url=Ml,g(m,{"set:html":Ol})}var UT,KT,Cn,Ol,$l,Nl,Ml,Ul=l(()=>{"use strict";A();UT=h(b(),1);v();k();KT=h(x(),1);S();C();Cn={};Ol=FS(`<h2 id="hacking-embedded-systems-using-the-routersploit">Hacking embedded systems using the routersploit</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/hacking-embedded-systems-using-the-routersploit-tool-e72efda1f049">https://medium.com/@gpiechnik/hacking-embedded-systems-using-the-routersploit-tool-e72efda1f049</a></p>`),$l={title:"Hacking embedded systems using the routersploit tool",publishedAt:"2023-06-12T00:00:00.000Z",description:"\u{1F310} Routersploit Unveiled: A Deep Dive into Embedded System Vulnerabilities \u{1F310}",slug:"hacking-embedded-systems-routersploit",isPublish:!0},Nl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md",Ml=void 0;zl[Symbol.for("astro.needsHeadRendering")]=!0});var ql={};u(ql,{default:()=>_S});async function RS(){return Promise.resolve().then(()=>(Ul(),Gl))}var jS,IS,LS,_S,Hl=l(()=>{"use strict";jS="@@ASTRO-LINKS@@",IS="@@ASTRO-STYLES@@",LS="@@ASTRO-SCRIPTS@@",_S={__astroPropagation:!0,getMod:RS,collectedLinks:jS,collectedStyles:IS,collectedScripts:LS}});var Xl={};u(Xl,{Content:()=>Zl,compiledContent:()=>OS,default:()=>Zl,file:()=>Jl,frontmatter:()=>Vl,getHeadings:()=>$S,images:()=>An,rawContent:()=>WS,url:()=>Yl});function BS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:An[i].src,...An[i].attributes}))}function WS(){return`
## SYN Flood Attack

In the ever-evolving world of cybersecurity, some threats remain timeless, adapting and morphing, but never truly disappearing. The SYN flood attack is one such classic. But what makes it so enduring? Let's delve into its mechanics and understand its potency.

\u{1F4CC} Inside this Exploration:

- The Basics of SYN Flood: A refresher on this age-old attack strategy and its relevance in today's digital landscape.
- TCP Protocol Unveiled: A step-by-step breakdown of the TCP communication process, laying the foundation for understanding the SYN flood attack.
- Crafting the Attack: Dive into the anatomy of a SYN flood script with a hands-on Python example. Discover how attackers can easily overload servers, causing them to become unresponsive.
- Defensive Measures: While this guide focuses on the attack, it's crucial to be armed with knowledge to defend against such threats.

Join us as we demystify the SYN flood attack, offering insights into its workings and highlighting the importance of staying vigilant in the face of timeless cyber threats. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F

Link: https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb
`}function OS(){return Kl}function $S(){return[{depth:2,slug:"syn-flood-attack",text:"SYN Flood Attack"}]}async function Zl(){let{layout:e,...t}=Vl;return t.file=Jl,t.url=Yl,g(m,{"set:html":Kl})}var ZT,eP,An,Kl,Vl,Jl,Yl,Ql=l(()=>{"use strict";A();ZT=h(b(),1);v();k();eP=h(x(),1);S();C();An={};Kl=BS(`<h2 id="syn-flood-attack">SYN Flood Attack</h2>
<p>In the ever-evolving world of cybersecurity, some threats remain timeless, adapting and morphing, but never truly disappearing. The SYN flood attack is one such classic. But what makes it so enduring? Let\u2019s delve into its mechanics and understand its potency.</p>
<p>\u{1F4CC} Inside this Exploration:</p>
<ul>
<li>The Basics of SYN Flood: A refresher on this age-old attack strategy and its relevance in today\u2019s digital landscape.</li>
<li>TCP Protocol Unveiled: A step-by-step breakdown of the TCP communication process, laying the foundation for understanding the SYN flood attack.</li>
<li>Crafting the Attack: Dive into the anatomy of a SYN flood script with a hands-on Python example. Discover how attackers can easily overload servers, causing them to become unresponsive.</li>
<li>Defensive Measures: While this guide focuses on the attack, it\u2019s crucial to be armed with knowledge to defend against such threats.</li>
</ul>
<p>Join us as we demystify the SYN flood attack, offering insights into its workings and highlighting the importance of staying vigilant in the face of timeless cyber threats. \u{1F50D}\u{1F517}\u{1F6E1}\uFE0F</p>
<p>Link: <a href="https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb">https://medium.com/@gpiechnik/syn-flood-attack-2f4fcc6c65eb</a></p>`),Vl={title:"SYN Flood Attack",publishedAt:"2023-06-11T00:00:00.000Z",description:"\u{1F310} Unmasking the SYN Flood Attack: A Deep Dive into Timeless Cyber Threats \u{1F310}",slug:"syn-flood-attack",isPublish:!0},Jl="/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md",Yl=void 0;Zl[Symbol.for("astro.needsHeadRendering")]=!0});var ed={};u(ed,{default:()=>US});async function NS(){return Promise.resolve().then(()=>(Ql(),Xl))}var MS,zS,GS,US,td=l(()=>{"use strict";MS="@@ASTRO-LINKS@@",zS="@@ASTRO-STYLES@@",GS="@@ASTRO-SCRIPTS@@",US={__astroPropagation:!0,getMod:NS,collectedLinks:MS,collectedStyles:zS,collectedScripts:GS}});var rd={};u(rd,{Content:()=>ad,compiledContent:()=>KS,default:()=>ad,file:()=>od,frontmatter:()=>id,getHeadings:()=>VS,images:()=>Fn,rawContent:()=>HS,url:()=>sd});function qS(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Fn[i].src,...Fn[i].attributes}))}function HS(){return`
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
`}function KS(){return nd}function VS(){return[{depth:2,slug:"dos-ddos-drddos-pod",text:"DoS, DDoS, DRDDos, PoD"}]}async function ad(){let{layout:e,...t}=id;return t.file=od,t.url=sd,g(m,{"set:html":nd})}var oP,rP,Fn,nd,id,od,sd,cd=l(()=>{"use strict";A();oP=h(b(),1);v();k();rP=h(x(),1);S();C();Fn={};nd=qS(`<h2 id="dos-ddos-drddos-pod">DoS, DDoS, DRDDos, PoD</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/dos-vs-ddos-vs-drddos-vs-pod-attack-fe6b2b6a896e">https://medium.com/@gpiechnik/dos-vs-ddos-vs-drddos-vs-pod-attack-fe6b2b6a896e</a></p>`),id={title:"DoS vs DDoS vs DRDDoS vs PoD attack",publishedAt:"2023-06-09T00:00:00.000Z",description:"\u{1F6E1}\uFE0F Decoding DoS, DDoS, DRDoS & More: A Comprehensive Guide for Beginners \u{1F6E1}\uFE0F",slug:"dos-ddos-drddos-pod-attack",isPublish:!0},od="/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md",sd=void 0;ad[Symbol.for("astro.needsHeadRendering")]=!0});var ld={};u(ld,{default:()=>QS});async function JS(){return Promise.resolve().then(()=>(cd(),rd))}var YS,ZS,XS,QS,dd=l(()=>{"use strict";YS="@@ASTRO-LINKS@@",ZS="@@ASTRO-STYLES@@",XS="@@ASTRO-SCRIPTS@@",QS={__astroPropagation:!0,getMod:JS,collectedLinks:YS,collectedStyles:ZS,collectedScripts:XS}});var gd={};u(gd,{Content:()=>fd,compiledContent:()=>nC,default:()=>fd,file:()=>hd,frontmatter:()=>pd,getHeadings:()=>iC,images:()=>En,rawContent:()=>tC,url:()=>md});function eC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:En[i].src,...En[i].attributes}))}function tC(){return`
## State SSL certificates

Amidst the backdrop of sanctions and restricted web access, Russia's move to establish a state authority for issuing TLS certificates has raised eyebrows. But what does this mean for online security and the integrity of encrypted data?

\u{1F4CC} Inside this Guide:

- Man in the Middle (MitM) Attacks: A refresher on how these attacks intercept network traffic, potentially exposing sensitive data.
- The Mechanics of Certificate Issuance: Delve into the intricacies of public/private key generation and the potential risks when Certificate Authorities hold the reins.
- Trusted Sources & Browsers: Can major browsers trust Russia's state certificates? And what happens when users can manually add public keys?
- Lessons from Kazakhstan: A look back at Kazakhstan's attempt at a "national security certificate" and the subsequent global tech response.

Navigate the complex landscape of digital trust and understand the implications of state-controlled certificate authorities! \u{1F517}

Link: https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6
`}function nC(){return ud}function iC(){return[{depth:2,slug:"state-ssl-certificates",text:"State SSL certificates"}]}async function fd(){let{layout:e,...t}=pd;return t.file=hd,t.url=md,g(m,{"set:html":ud})}var uP,mP,En,ud,pd,hd,md,yd=l(()=>{"use strict";A();uP=h(b(),1);v();k();mP=h(x(),1);S();C();En={};ud=eC(`<h2 id="state-ssl-certificates">State SSL certificates</h2>
<p>Amidst the backdrop of sanctions and restricted web access, Russia\u2019s move to establish a state authority for issuing TLS certificates has raised eyebrows. But what does this mean for online security and the integrity of encrypted data?</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Man in the Middle (MitM) Attacks: A refresher on how these attacks intercept network traffic, potentially exposing sensitive data.</li>
<li>The Mechanics of Certificate Issuance: Delve into the intricacies of public/private key generation and the potential risks when Certificate Authorities hold the reins.</li>
<li>Trusted Sources &#x26; Browsers: Can major browsers trust Russia\u2019s state certificates? And what happens when users can manually add public keys?</li>
<li>Lessons from Kazakhstan: A look back at Kazakhstan\u2019s attempt at a \u201Cnational security certificate\u201D and the subsequent global tech response.</li>
</ul>
<p>Navigate the complex landscape of digital trust and understand the implications of state-controlled certificate authorities! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6">https://medium.com/@gpiechnik/state-ssl-certificates-what-are-the-risks-7da2213a6ad6</a></p>`),pd={title:"State SSL certificates \u2014 what are the risks",publishedAt:"2023-06-08T00:00:00.000Z",description:"\u{1F512} Russia's State-Issued TLS Certificates: A Deep Dive into Digital Trust \u{1F512}",slug:"state-ssl-certificates",isPublish:!0},hd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md",md=void 0;fd[Symbol.for("astro.needsHeadRendering")]=!0});var wd={};u(wd,{default:()=>cC});async function oC(){return Promise.resolve().then(()=>(yd(),gd))}var sC,aC,rC,cC,Dd=l(()=>{"use strict";sC="@@ASTRO-LINKS@@",aC="@@ASTRO-STYLES@@",rC="@@ASTRO-SCRIPTS@@",cC={__astroPropagation:!0,getMod:oC,collectedLinks:sC,collectedStyles:aC,collectedScripts:rC}});var Cd={};u(Cd,{Content:()=>Sd,compiledContent:()=>uC,default:()=>Sd,file:()=>kd,frontmatter:()=>vd,getHeadings:()=>pC,images:()=>Tn,rawContent:()=>dC,url:()=>xd});function lC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Tn[i].src,...Tn[i].attributes}))}function dC(){return`
## What are polyglots?

Ever wondered about the intricacies of XSS vulnerabilities and the vast array of potential attack vectors? Dive into the world of polyglots, payloads that combine multiple scripts into one, and understand their power and limitations.

\u{1F4CC} Inside this Guide:

- Understanding Polyglots: Discover how these "universal" payloads work and why they might not always be effective against systems with WAF.
- Deep Dive Analysis: Break down a complex polyglot to understand its components and how it operates.
- SQLi Polyglots & Beyond: Explore how polyglots extend beyond Javascript, including SQL and even JPEG formats.
- Polyglot Innerht: A platform where enthusiasts share polyglots that can hold multiple contexts.

Stay informed and understand the nuances of these versatile payloads in the realm of cybersecurity! \u{1F517}

Link: https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977
`}function uC(){return bd}function pC(){return[{depth:2,slug:"what-are-polyglots",text:"What are polyglots?"}]}async function Sd(){let{layout:e,...t}=vd;return t.file=kd,t.url=xd,g(m,{"set:html":bd})}var wP,vP,Tn,bd,vd,kd,xd,Ad=l(()=>{"use strict";A();wP=h(b(),1);v();k();vP=h(x(),1);S();C();Tn={};bd=lC(`<h2 id="what-are-polyglots">What are polyglots?</h2>
<p>Ever wondered about the intricacies of XSS vulnerabilities and the vast array of potential attack vectors? Dive into the world of polyglots, payloads that combine multiple scripts into one, and understand their power and limitations.</p>
<p>\u{1F4CC} Inside this Guide:</p>
<ul>
<li>Understanding Polyglots: Discover how these \u201Cuniversal\u201D payloads work and why they might not always be effective against systems with WAF.</li>
<li>Deep Dive Analysis: Break down a complex polyglot to understand its components and how it operates.</li>
<li>SQLi Polyglots &#x26; Beyond: Explore how polyglots extend beyond Javascript, including SQL and even JPEG formats.</li>
<li>Polyglot Innerht: A platform where enthusiasts share polyglots that can hold multiple contexts.</li>
</ul>
<p>Stay informed and understand the nuances of these versatile payloads in the realm of cybersecurity! \u{1F517}</p>
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977">https://medium.com/@gpiechnik/what-are-polyglots-and-how-to-use-them-as-a-pentester-57ff5a58b977</a></p>`),vd={title:"What are polyglots and how to use them as a pentester",publishedAt:"2023-06-06T00:00:00.000Z",description:"\u{1F50D} Polyglots: The Universal Payloads in Cybersecurity \u{1F50D}",slug:"what-are-polyglots",isPublish:!0},kd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md",xd=void 0;Sd[Symbol.for("astro.needsHeadRendering")]=!0});var Fd={};u(Fd,{default:()=>yC});async function hC(){return Promise.resolve().then(()=>(Ad(),Cd))}var mC,fC,gC,yC,Ed=l(()=>{"use strict";mC="@@ASTRO-LINKS@@",fC="@@ASTRO-STYLES@@",gC="@@ASTRO-SCRIPTS@@",yC={__astroPropagation:!0,getMod:hC,collectedLinks:mC,collectedStyles:fC,collectedScripts:gC}});var Ld={};u(Ld,{Content:()=>Id,compiledContent:()=>bC,default:()=>Id,file:()=>Rd,frontmatter:()=>Pd,getHeadings:()=>vC,images:()=>Pn,rawContent:()=>DC,url:()=>jd});function wC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Pn[i].src,...Pn[i].attributes}))}function DC(){return`
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
`}function bC(){return Td}function vC(){return[{depth:2,slug:"ldap-protocol-basics-and-the-ldap-injection-attack",text:"LDAP protocol basics and the LDAP Injection attack"}]}async function Id(){let{layout:e,...t}=Pd;return t.file=Rd,t.url=jd,g(m,{"set:html":Td})}var CP,EP,Pn,Td,Pd,Rd,jd,_d=l(()=>{"use strict";A();CP=h(b(),1);v();k();EP=h(x(),1);S();C();Pn={};Td=wC(`<h2 id="ldap-protocol-basics-and-the-ldap-injection-attack">LDAP protocol basics and the LDAP Injection attack</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/ldap-protocol-basics-and-the-ldap-injection-attack-45cb003e063d">https://medium.com/@gpiechnik/ldap-protocol-basics-and-the-ldap-injection-attack-45cb003e063d</a></p>`),Pd={title:"LDAP protocol basics and the LDAP Injection attack",publishedAt:"2023-06-04T00:00:00.000Z",description:"\u{1F512} Demystifying LDAP and Its Security Implications \u{1F512}",slug:"ldap-protocol-basics-and-the-ldap-injection-attack",isPublish:!0},Rd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md",jd=void 0;Id[Symbol.for("astro.needsHeadRendering")]=!0});var Bd={};u(Bd,{default:()=>AC});async function kC(){return Promise.resolve().then(()=>(_d(),Ld))}var xC,SC,CC,AC,Wd=l(()=>{"use strict";xC="@@ASTRO-LINKS@@",SC="@@ASTRO-STYLES@@",CC="@@ASTRO-SCRIPTS@@",AC={__astroPropagation:!0,getMod:kC,collectedLinks:xC,collectedStyles:SC,collectedScripts:CC}});var Gd={};u(Gd,{Content:()=>zd,compiledContent:()=>TC,default:()=>zd,file:()=>Nd,frontmatter:()=>$d,getHeadings:()=>PC,images:()=>Rn,rawContent:()=>EC,url:()=>Md});function FC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Rn[i].src,...Rn[i].attributes}))}function EC(){return`
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
`}function TC(){return Od}function PC(){return[{depth:2,slug:"bind-shell-and-reverse-shell",text:"Bind shell and Reverse shell"}]}async function zd(){let{layout:e,...t}=$d;return t.file=Nd,t.url=Md,g(m,{"set:html":Od})}var jP,_P,Rn,Od,$d,Nd,Md,Ud=l(()=>{"use strict";A();jP=h(b(),1);v();k();_P=h(x(),1);S();C();Rn={};Od=FC(`<h2 id="bind-shell-and-reverse-shell">Bind shell and Reverse shell</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-bind-shell-and-reverse-shell-4653363ebd87">https://medium.com/@gpiechnik/what-is-bind-shell-and-reverse-shell-4653363ebd87</a></p>`),$d={title:"What is bind shell and reverse shell",publishedAt:"2023-06-03T00:00:00.000Z",description:"\u{1F310} Diving into Netcat: Bind Shell vs. Reverse Shell \u{1F310}",slug:"what-is-bind-shell-and-reverse-shell",isPublish:!0},Nd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md",Md=void 0;zd[Symbol.for("astro.needsHeadRendering")]=!0});var qd={};u(qd,{default:()=>_C});async function RC(){return Promise.resolve().then(()=>(Ud(),Gd))}var jC,IC,LC,_C,Hd=l(()=>{"use strict";jC="@@ASTRO-LINKS@@",IC="@@ASTRO-STYLES@@",LC="@@ASTRO-SCRIPTS@@",_C={__astroPropagation:!0,getMod:RC,collectedLinks:jC,collectedStyles:IC,collectedScripts:LC}});var Xd={};u(Xd,{Content:()=>Zd,compiledContent:()=>OC,default:()=>Zd,file:()=>Jd,frontmatter:()=>Vd,getHeadings:()=>$C,images:()=>jn,rawContent:()=>WC,url:()=>Yd});function BC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:jn[i].src,...jn[i].attributes}))}function WC(){return`
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
`}function OC(){return Kd}function $C(){return[{depth:2,slug:"what-is-forward-proxy-and-reverse-proxy",text:"What is Forward Proxy and Reverse Proxy"}]}async function Zd(){let{layout:e,...t}=Vd;return t.file=Jd,t.url=Yd,g(m,{"set:html":Kd})}var $P,zP,jn,Kd,Vd,Jd,Yd,Qd=l(()=>{"use strict";A();$P=h(b(),1);v();k();zP=h(x(),1);S();C();jn={};Kd=BC(`<h2 id="what-is-forward-proxy-and-reverse-proxy">What is Forward Proxy and Reverse Proxy</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-forward-proxy-and-reverse-proxy-265e554d7b4b">https://medium.com/@gpiechnik/what-is-forward-proxy-and-reverse-proxy-265e554d7b4b</a></p>`),Vd={title:"What is Forward Proxy and Reverse Proxy",publishedAt:"2023-06-02T00:00:00.000Z",description:"\u{1F310} Decoding the World of Proxies: Forward vs. Reverse \u{1F310}",slug:"what-is-forward-proxy-and-reverse-proxy",isPublish:!0},Jd="/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md",Yd=void 0;Zd[Symbol.for("astro.needsHeadRendering")]=!0});var eu={};u(eu,{default:()=>UC});async function NC(){return Promise.resolve().then(()=>(Qd(),Xd))}var MC,zC,GC,UC,tu=l(()=>{"use strict";MC="@@ASTRO-LINKS@@",zC="@@ASTRO-STYLES@@",GC="@@ASTRO-SCRIPTS@@",UC={__astroPropagation:!0,getMod:NC,collectedLinks:MC,collectedStyles:zC,collectedScripts:GC}});var ru={};u(ru,{Content:()=>au,compiledContent:()=>KC,default:()=>au,file:()=>ou,frontmatter:()=>iu,getHeadings:()=>VC,images:()=>In,rawContent:()=>HC,url:()=>su});function qC(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:In[i].src,...In[i].attributes}))}function HC(){return`
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
`}function KC(){return nu}function VC(){return[{depth:2,slug:"what-is-waf-and-ips",text:"What is WAF and IPS?"}]}async function au(){let{layout:e,...t}=iu;return t.file=ou,t.url=su,g(m,{"set:html":nu})}var HP,JP,In,nu,iu,ou,su,cu=l(()=>{"use strict";A();HP=h(b(),1);v();k();JP=h(x(),1);S();C();In={};nu=qC(`<h2 id="what-is-waf-and-ips">What is WAF and IPS?</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-waf-and-ips-intrusion-prevention-system-web-application-firewall-3ea21467b334">https://medium.com/@gpiechnik/what-is-waf-and-ips-intrusion-prevention-system-web-application-firewall-3ea21467b334</a></p>`),iu={title:"What is WAF and IPS (Intrusion Prevention System & Web Application Firewall)",publishedAt:"2023-05-30T00:00:00.000Z",description:"\u{1F510} Demystifying Network Security: IPS vs. WAF \u{1F510}",slug:"what-is-waf-and-ips",isPublish:!0},ou="/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md",su=void 0;au[Symbol.for("astro.needsHeadRendering")]=!0});var lu={};u(lu,{default:()=>QC});async function JC(){return Promise.resolve().then(()=>(cu(),ru))}var YC,ZC,XC,QC,du=l(()=>{"use strict";YC="@@ASTRO-LINKS@@",ZC="@@ASTRO-STYLES@@",XC="@@ASTRO-SCRIPTS@@",QC={__astroPropagation:!0,getMod:JC,collectedLinks:YC,collectedStyles:ZC,collectedScripts:XC}});var gu={};u(gu,{Content:()=>fu,compiledContent:()=>nA,default:()=>fu,file:()=>hu,frontmatter:()=>pu,getHeadings:()=>iA,images:()=>Ln,rawContent:()=>tA,url:()=>mu});function eA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Ln[i].src,...Ln[i].attributes}))}function tA(){return`
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
`}function nA(){return uu}function iA(){return[{depth:2,slug:"metasploit",text:"Metasploit"}]}async function fu(){let{layout:e,...t}=pu;return t.file=hu,t.url=mu,g(m,{"set:html":uu})}var QP,n1,Ln,uu,pu,hu,mu,yu=l(()=>{"use strict";A();QP=h(b(),1);v();k();n1=h(x(),1);S();C();Ln={};uu=eA(`<h2 id="metasploit">Metasploit</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/metasploit-for-pentesters-explained-de7baa4c378d">https://medium.com/@gpiechnik/metasploit-for-pentesters-explained-de7baa4c378d</a></p>`),pu={title:"Metasploit explained for pentesters",publishedAt:"2023-05-29T00:00:00.000Z",description:"\u{1F513} Metasploit Unleashed: A Comprehensive Guide to Ethical Hacking \u{1F513}",slug:"metasploit-explained",isPublish:!0},hu="/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md",mu=void 0;fu[Symbol.for("astro.needsHeadRendering")]=!0});var wu={};u(wu,{default:()=>cA});async function oA(){return Promise.resolve().then(()=>(yu(),gu))}var sA,aA,rA,cA,Du=l(()=>{"use strict";sA="@@ASTRO-LINKS@@",aA="@@ASTRO-STYLES@@",rA="@@ASTRO-SCRIPTS@@",cA={__astroPropagation:!0,getMod:oA,collectedLinks:sA,collectedStyles:aA,collectedScripts:rA}});var Cu={};u(Cu,{Content:()=>Su,compiledContent:()=>uA,default:()=>Su,file:()=>ku,frontmatter:()=>vu,getHeadings:()=>pA,images:()=>_n,rawContent:()=>dA,url:()=>xu});function lA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:_n[i].src,..._n[i].attributes}))}function dA(){return`
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
`}function uA(){return bu}function pA(){return[{depth:2,slug:"content-security-policy-explained",text:"Content Security Policy Explained"}]}async function Su(){let{layout:e,...t}=vu;return t.file=ku,t.url=xu,g(m,{"set:html":bu})}var a1,l1,_n,bu,vu,ku,xu,Au=l(()=>{"use strict";A();a1=h(b(),1);v();k();l1=h(x(),1);S();C();_n={};bu=lA(`<h2 id="content-security-policy-explained">Content Security Policy Explained</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/content-security-policy-explained-ab076cde3e">https://medium.com/@gpiechnik/content-security-policy-explained-ab076cde3e</a></p>`),vu={title:"Content Security Policy explained",publishedAt:"2023-05-28T00:00:00.000Z",description:"\u{1F6E1}\uFE0F Mastering Content Security Policy: A Deep Dive into Web Security \u{1F6E1}\uFE0F",slug:"content-security-policy-explained",isPublish:!0},ku="/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md",xu=void 0;Su[Symbol.for("astro.needsHeadRendering")]=!0});var Fu={};u(Fu,{default:()=>yA});async function hA(){return Promise.resolve().then(()=>(Au(),Cu))}var mA,fA,gA,yA,Eu=l(()=>{"use strict";mA="@@ASTRO-LINKS@@",fA="@@ASTRO-STYLES@@",gA="@@ASTRO-SCRIPTS@@",yA={__astroPropagation:!0,getMod:hA,collectedLinks:mA,collectedStyles:fA,collectedScripts:gA}});var Lu={};u(Lu,{Content:()=>Iu,compiledContent:()=>bA,default:()=>Iu,file:()=>Ru,frontmatter:()=>Pu,getHeadings:()=>vA,images:()=>Bn,rawContent:()=>DA,url:()=>ju});function wA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Bn[i].src,...Bn[i].attributes}))}function DA(){return`
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
`}function bA(){return Tu}function vA(){return[{depth:2,slug:"osint-with-theharvester-and-h8mail",text:"OSINT with theHarvester and h8mail"}]}async function Iu(){let{layout:e,...t}=Pu;return t.file=Ru,t.url=ju,g(m,{"set:html":Tu})}var h1,g1,Bn,Tu,Pu,Ru,ju,_u=l(()=>{"use strict";A();h1=h(b(),1);v();k();g1=h(x(),1);S();C();Bn={};Tu=wA(`<h2 id="osint-with-theharvester-and-h8mail">OSINT with theHarvester and h8mail</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/search-for-sensitive-data-using-theharvester-and-h8mail-tools-d2a3772d2a32">https://medium.com/@gpiechnik/search-for-sensitive-data-using-theharvester-and-h8mail-tools-d2a3772d2a32</a></p>`),Pu={title:"Search for sensitive data using theHarvester and h8mail tools",publishedAt:"2023-05-27T00:00:00.000Z",description:"\u{1F50D} Email Intelligence: From Harvesting to Breach Analysis \u{1F50D}",slug:"the-harvester-and-h8mail-osint",isPublish:!0},Ru="/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md",ju=void 0;Iu[Symbol.for("astro.needsHeadRendering")]=!0});var Bu={};u(Bu,{default:()=>AA});async function kA(){return Promise.resolve().then(()=>(_u(),Lu))}var xA,SA,CA,AA,Wu=l(()=>{"use strict";xA="@@ASTRO-LINKS@@",SA="@@ASTRO-STYLES@@",CA="@@ASTRO-SCRIPTS@@",AA={__astroPropagation:!0,getMod:kA,collectedLinks:xA,collectedStyles:SA,collectedScripts:CA}});var Gu={};u(Gu,{Content:()=>zu,compiledContent:()=>TA,default:()=>zu,file:()=>Nu,frontmatter:()=>$u,getHeadings:()=>PA,images:()=>Wn,rawContent:()=>EA,url:()=>Mu});function FA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Wn[i].src,...Wn[i].attributes}))}function EA(){return`
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

Link: https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda`}function TA(){return Ou}function PA(){return[{depth:2,slug:"rogue-access-point-attack",text:"Rogue access point attack"}]}async function zu(){let{layout:e,...t}=$u;return t.file=Nu,t.url=Mu,g(m,{"set:html":Ou})}var b1,x1,Wn,Ou,$u,Nu,Mu,Uu=l(()=>{"use strict";A();b1=h(b(),1);v();k();x1=h(x(),1);S();C();Wn={};Ou=FA(`<h2 id="rogue-access-point-attack">Rogue access point attack</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda">https://medium.com/@gpiechnik/scanning-ports-and-finding-network-vulnerabilities-using-nmap-5f06ee49bdda</a></p>`),$u={title:"Scanning ports and finding network vulnerabilities using nmap",publishedAt:"2023-05-26T00:00:00.000Z",description:"\u{1F50D} Nmap Deep Dive: Beyond Basic Port Scanning \u{1F50D}",slug:"scanning-ports-and-finding-network-vulnerabilities-with-nmap",isPublish:!0},Nu="/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md",Mu=void 0;zu[Symbol.for("astro.needsHeadRendering")]=!0});var qu={};u(qu,{default:()=>_A});async function RA(){return Promise.resolve().then(()=>(Uu(),Gu))}var jA,IA,LA,_A,Hu=l(()=>{"use strict";jA="@@ASTRO-LINKS@@",IA="@@ASTRO-STYLES@@",LA="@@ASTRO-SCRIPTS@@",_A={__astroPropagation:!0,getMod:RA,collectedLinks:jA,collectedStyles:IA,collectedScripts:LA}});var Xu={};u(Xu,{Content:()=>Zu,compiledContent:()=>OA,default:()=>Zu,file:()=>Ju,frontmatter:()=>Vu,getHeadings:()=>$A,images:()=>On,rawContent:()=>WA,url:()=>Yu});function BA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:On[i].src,...On[i].attributes}))}function WA(){return`
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
`}function OA(){return Ku}function $A(){return[{depth:2,slug:"rogue-access-point-attack",text:"Rogue access point attack"}]}async function Zu(){let{layout:e,...t}=Vu;return t.file=Ju,t.url=Yu,g(m,{"set:html":Ku})}var F1,P1,On,Ku,Vu,Ju,Yu,Qu=l(()=>{"use strict";A();F1=h(b(),1);v();k();P1=h(x(),1);S();C();On={};Ku=BA(`<h2 id="rogue-access-point-attack">Rogue access point attack</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/scary-rogue-access-point-attack-b58da20d74a3">https://medium.com/@gpiechnik/scary-rogue-access-point-attack-b58da20d74a3</a></p>`),Vu={title:"Scary Rogue Access Point attack",publishedAt:"2023-05-25T00:00:00.000Z",description:"\u{1F4E1} Rogue Access Points: The Silent Threat in Public Wi-Fi \u{1F4E1}",slug:"scary-rogue-access-point-attack",isPublish:!0},Ju="/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md",Yu=void 0;Zu[Symbol.for("astro.needsHeadRendering")]=!0});var ep={};u(ep,{default:()=>UA});async function NA(){return Promise.resolve().then(()=>(Qu(),Xu))}var MA,zA,GA,UA,tp=l(()=>{"use strict";MA="@@ASTRO-LINKS@@",zA="@@ASTRO-STYLES@@",GA="@@ASTRO-SCRIPTS@@",UA={__astroPropagation:!0,getMod:NA,collectedLinks:MA,collectedStyles:zA,collectedScripts:GA}});var rp={};u(rp,{Content:()=>ap,compiledContent:()=>KA,default:()=>ap,file:()=>op,frontmatter:()=>ip,getHeadings:()=>VA,images:()=>$n,rawContent:()=>HA,url:()=>sp});function qA(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:$n[i].src,...$n[i].attributes}))}function HA(){return`
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
`}function KA(){return np}function VA(){return[{depth:2,slug:"what-is-a-0-day",text:"What is a 0 day?"}]}async function ap(){let{layout:e,...t}=ip;return t.file=op,t.url=sp,g(m,{"set:html":np})}var L1,W1,$n,np,ip,op,sp,cp=l(()=>{"use strict";A();L1=h(b(),1);v();k();W1=h(x(),1);S();C();$n={};np=qA(`<h2 id="what-is-a-0-day">What is a 0 day?</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-a-zero-day-0-day-exploit-real-life-examples-261c3145cc2a">https://medium.com/@gpiechnik/what-is-a-zero-day-0-day-exploit-real-life-examples-261c3145cc2a</a></p>`),ip={title:"What is a zero-day (0-day) exploit? Real-life examples",publishedAt:"2023-05-24T00:00:00.000Z",description:"\u{1F6A8} Zero-Day Alert: Unmasking the Silent Threats \u{1F6A8}",slug:"what-is-a-zero-day-exploit",isPublish:!0},op="/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md",sp=void 0;ap[Symbol.for("astro.needsHeadRendering")]=!0});var lp={};u(lp,{default:()=>QA});async function JA(){return Promise.resolve().then(()=>(cp(),rp))}var YA,ZA,XA,QA,dp=l(()=>{"use strict";YA="@@ASTRO-LINKS@@",ZA="@@ASTRO-STYLES@@",XA="@@ASTRO-SCRIPTS@@",QA={__astroPropagation:!0,getMod:JA,collectedLinks:YA,collectedStyles:ZA,collectedScripts:XA}});var gp={};u(gp,{Content:()=>fp,compiledContent:()=>n9,default:()=>fp,file:()=>hp,frontmatter:()=>pp,getHeadings:()=>i9,images:()=>Nn,rawContent:()=>t9,url:()=>mp});function e9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Nn[i].src,...Nn[i].attributes}))}function t9(){return`
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
`}function n9(){return up}function i9(){return[{depth:2,slug:"insecure-deserialization",text:"Insecure deserialization"}]}async function fp(){let{layout:e,...t}=pp;return t.file=hp,t.url=mp,g(m,{"set:html":up})}var M1,U1,Nn,up,pp,hp,mp,yp=l(()=>{"use strict";A();M1=h(b(),1);v();k();U1=h(x(),1);S();C();Nn={};up=e9(`<h2 id="insecure-deserialization">Insecure deserialization</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-insecure-deserialization-4183daa2fb28">https://medium.com/@gpiechnik/what-is-insecure-deserialization-4183daa2fb28</a></p>`),pp={title:"What is insecure deserialization",publishedAt:"2023-05-23T00:00:00.000Z",description:"\u{1F510} Deserialization Dangers: Unraveling the Web of Vulnerabilities \u{1F510}",slug:"what-is-insecure-deserialization",isPublish:!0},hp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md",mp=void 0;fp[Symbol.for("astro.needsHeadRendering")]=!0});var wp={};u(wp,{default:()=>c9});async function o9(){return Promise.resolve().then(()=>(yp(),gp))}var s9,a9,r9,c9,Dp=l(()=>{"use strict";s9="@@ASTRO-LINKS@@",a9="@@ASTRO-STYLES@@",r9="@@ASTRO-SCRIPTS@@",c9={__astroPropagation:!0,getMod:o9,collectedLinks:s9,collectedStyles:a9,collectedScripts:r9}});var Cp={};u(Cp,{Content:()=>Sp,compiledContent:()=>u9,default:()=>Sp,file:()=>kp,frontmatter:()=>vp,getHeadings:()=>p9,images:()=>Mn,rawContent:()=>d9,url:()=>xp});function l9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Mn[i].src,...Mn[i].attributes}))}function d9(){return`
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
`}function u9(){return bp}function p9(){return[{depth:2,slug:"what-is-cve",text:"What is CVE?"}]}async function Sp(){let{layout:e,...t}=vp;return t.file=kp,t.url=xp,g(m,{"set:html":bp})}var V1,Z1,Mn,bp,vp,kp,xp,Ap=l(()=>{"use strict";A();V1=h(b(),1);v();k();Z1=h(x(),1);S();C();Mn={};bp=l9(`<h2 id="what-is-cve">What is CVE?</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-are-and-how-to-read-cves-common-vulnerabilities-and-exposures-3aff972cb1bd">https://medium.com/@gpiechnik/what-are-and-how-to-read-cves-common-vulnerabilities-and-exposures-3aff972cb1bd</a></p>`),vp={title:"What are and how to read CVEs (Common Vulnerabilities and Exposures)?",publishedAt:"2023-05-22T00:00:00.000Z",description:"\u{1F50D} CVE Uncovered: Navigating the Labyrinth of System Vulnerabilities \u{1F50D}",slug:"what-are-cves-common-vulnerabilities-and-exposures",isPublish:!0},kp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md",xp=void 0;Sp[Symbol.for("astro.needsHeadRendering")]=!0});var Fp={};u(Fp,{default:()=>y9});async function h9(){return Promise.resolve().then(()=>(Ap(),Cp))}var m9,f9,g9,y9,Ep=l(()=>{"use strict";m9="@@ASTRO-LINKS@@",f9="@@ASTRO-STYLES@@",g9="@@ASTRO-SCRIPTS@@",y9={__astroPropagation:!0,getMod:h9,collectedLinks:m9,collectedStyles:f9,collectedScripts:g9}});var Lp={};u(Lp,{Content:()=>Ip,compiledContent:()=>b9,default:()=>Ip,file:()=>Rp,frontmatter:()=>Pp,getHeadings:()=>v9,images:()=>zn,rawContent:()=>D9,url:()=>jp});function w9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:zn[i].src,...zn[i].attributes}))}function D9(){return`
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
`}function b9(){return Tp}function v9(){return[{depth:2,slug:"security-risks-associated-with-using-the-git",text:"Security risks associated with using the git"}]}async function Ip(){let{layout:e,...t}=Pp;return t.file=Rp,t.url=jp,g(m,{"set:html":Tp})}var t7,o7,zn,Tp,Pp,Rp,jp,_p=l(()=>{"use strict";A();t7=h(b(),1);v();k();o7=h(x(),1);S();C();zn={};Tp=w9(`<h2 id="security-risks-associated-with-using-the-git">Security risks associated with using the git</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/security-risks-associated-with-using-the-git-version-control-system-4d2be37d401e">https://medium.com/@gpiechnik/security-risks-associated-with-using-the-git-version-control-system-4d2be37d401e</a></p>`),Pp={title:"Security risks associated with using the git version control system",publishedAt:"2023-05-21T00:00:00.000Z",description:"\u{1F50D} Git Security Deep Dive: Unmasking the Hidden Threats \u{1F50D}",slug:"security-risks-associated-with-using-git",isPublish:!0},Rp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md",jp=void 0;Ip[Symbol.for("astro.needsHeadRendering")]=!0});var Bp={};u(Bp,{default:()=>A9});async function k9(){return Promise.resolve().then(()=>(_p(),Lp))}var x9,S9,C9,A9,Wp=l(()=>{"use strict";x9="@@ASTRO-LINKS@@",S9="@@ASTRO-STYLES@@",C9="@@ASTRO-SCRIPTS@@",A9={__astroPropagation:!0,getMod:k9,collectedLinks:x9,collectedStyles:S9,collectedScripts:C9}});var Gp={};u(Gp,{Content:()=>zp,compiledContent:()=>T9,default:()=>zp,file:()=>Np,frontmatter:()=>$p,getHeadings:()=>P9,images:()=>Gn,rawContent:()=>E9,url:()=>Mp});function F9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Gn[i].src,...Gn[i].attributes}))}function E9(){return`
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
`}function T9(){return Op}function P9(){return[{depth:2,slug:"cross-site-request-forgery-attack",text:"Cross Site Request Forgery attack"}]}async function zp(){let{layout:e,...t}=$p;return t.file=Np,t.url=Mp,g(m,{"set:html":Op})}var c7,u7,Gn,Op,$p,Np,Mp,Up=l(()=>{"use strict";A();c7=h(b(),1);v();k();u7=h(x(),1);S();C();Gn={};Op=F9(`<h2 id="cross-site-request-forgery-attack">Cross Site Request Forgery attack</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/understanding-the-cross-site-request-forgery-csrf-attack-b1dc2374f83">https://medium.com/@gpiechnik/understanding-the-cross-site-request-forgery-csrf-attack-b1dc2374f83</a></p>`),$p={title:"Understanding the Cross Site Request Forgery (CSRF) attack",publishedAt:"2023-05-20T00:00:00.000Z",description:"\u{1F510} CSRF Attacks Unveiled: Navigating the Subtle Threats of Web Security \u{1F510}",slug:"cross-site-request-forgery-attack",isPublish:!0},Np="/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md",Mp=void 0;zp[Symbol.for("astro.needsHeadRendering")]=!0});var qp={};u(qp,{default:()=>_9});async function R9(){return Promise.resolve().then(()=>(Up(),Gp))}var j9,I9,L9,_9,Hp=l(()=>{"use strict";j9="@@ASTRO-LINKS@@",I9="@@ASTRO-STYLES@@",L9="@@ASTRO-SCRIPTS@@",_9={__astroPropagation:!0,getMod:R9,collectedLinks:j9,collectedStyles:I9,collectedScripts:L9}});var Xp={};u(Xp,{Content:()=>Zp,compiledContent:()=>O9,default:()=>Zp,file:()=>Jp,frontmatter:()=>Vp,getHeadings:()=>$9,images:()=>Un,rawContent:()=>W9,url:()=>Yp});function B9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Un[i].src,...Un[i].attributes}))}function W9(){return`
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
`}function O9(){return Kp}function $9(){return[{depth:2,slug:"cross-origin-resource-sharing-cors",text:"Cross-Origin Resource Sharing (CORS)"}]}async function Zp(){let{layout:e,...t}=Vp;return t.file=Jp,t.url=Yp,g(m,{"set:html":Kp})}var f7,w7,Un,Kp,Vp,Jp,Yp,Qp=l(()=>{"use strict";A();f7=h(b(),1);v();k();w7=h(x(),1);S();C();Un={};Kp=B9(`<h2 id="cross-origin-resource-sharing-cors">Cross-Origin Resource Sharing (CORS)</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/cross-origin-resource-sharing-cors-how-does-671c39f8af65">https://medium.com/@gpiechnik/cross-origin-resource-sharing-cors-how-does-671c39f8af65</a></p>`),Vp={title:"Cross-Origin Resource Sharing (CORS). How does it work?",publishedAt:"2023-05-19T00:00:00.000Z",description:"\u{1F310} Demystifying CORS: Navigating Cross-Origin Requests with Ease \u{1F310}",slug:"cros-origin-resource-sharing-cors-how-does-it-work",isPublish:!0},Jp="/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md",Yp=void 0;Zp[Symbol.for("astro.needsHeadRendering")]=!0});var eh={};u(eh,{default:()=>U9});async function N9(){return Promise.resolve().then(()=>(Qp(),Xp))}var M9,z9,G9,U9,th=l(()=>{"use strict";M9="@@ASTRO-LINKS@@",z9="@@ASTRO-STYLES@@",G9="@@ASTRO-SCRIPTS@@",U9={__astroPropagation:!0,getMod:N9,collectedLinks:M9,collectedStyles:z9,collectedScripts:G9}});var rh={};u(rh,{Content:()=>ah,compiledContent:()=>K9,default:()=>ah,file:()=>oh,frontmatter:()=>ih,getHeadings:()=>V9,images:()=>qn,rawContent:()=>H9,url:()=>sh});function q9(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:qn[i].src,...qn[i].attributes}))}function H9(){return`
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
`}function K9(){return nh}function V9(){return[{depth:2,slug:"linux-basics",text:"Linux basics"}]}async function ah(){let{layout:e,...t}=ih;return t.file=oh,t.url=sh,g(m,{"set:html":nh})}var k7,C7,qn,nh,ih,oh,sh,ch=l(()=>{"use strict";A();k7=h(b(),1);v();k();C7=h(x(),1);S();C();qn={};nh=q9(`<h2 id="linux-basics">Linux basics</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/linux-basics-fd71e6826a43">https://medium.com/@gpiechnik/linux-basics-fd71e6826a43</a></p>`),ih={title:"Linux basics",publishedAt:"2023-05-18T00:00:00.000Z",description:"\u{1F427} Mastering Unix Commands: Your Gateway to Linux Proficiency \u{1F427}",slug:"linux-basics",isPublish:!0},oh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md",sh=void 0;ah[Symbol.for("astro.needsHeadRendering")]=!0});var lh={};u(lh,{default:()=>Q9});async function J9(){return Promise.resolve().then(()=>(ch(),rh))}var Y9,Z9,X9,Q9,dh=l(()=>{"use strict";Y9="@@ASTRO-LINKS@@",Z9="@@ASTRO-STYLES@@",X9="@@ASTRO-SCRIPTS@@",Q9={__astroPropagation:!0,getMod:J9,collectedLinks:Y9,collectedStyles:Z9,collectedScripts:X9}});var gh={};u(gh,{Content:()=>fh,compiledContent:()=>nF,default:()=>fh,file:()=>hh,frontmatter:()=>ph,getHeadings:()=>iF,images:()=>Hn,rawContent:()=>tF,url:()=>mh});function eF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Hn[i].src,...Hn[i].attributes}))}function tF(){return`
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
`}function nF(){return uh}function iF(){return[{depth:2,slug:"path-travelsal-vulnerability",text:"Path travelsal vulnerability"}]}async function fh(){let{layout:e,...t}=ph;return t.file=hh,t.url=mh,g(m,{"set:html":uh})}var T7,j7,Hn,uh,ph,hh,mh,yh=l(()=>{"use strict";A();T7=h(b(),1);v();k();j7=h(x(),1);S();C();Hn={};uh=eF(`<h2 id="path-travelsal-vulnerability">Path travelsal vulnerability</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-path-travelsal-vulnerability-c7f7851de861">https://medium.com/@gpiechnik/what-is-path-travelsal-vulnerability-c7f7851de861</a></p>`),ph={title:"What is path travelsal vulnerability?",publishedAt:"2023-05-17T00:00:00.000Z",description:"\u{1F50D} Path Traversal Vulnerabilities: Unmasking Hidden Threats \u{1F50D}",slug:"path-travelsal-vulnerability",isPublish:!0},hh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md",mh=void 0;fh[Symbol.for("astro.needsHeadRendering")]=!0});var wh={};u(wh,{default:()=>cF});async function oF(){return Promise.resolve().then(()=>(yh(),gh))}var sF,aF,rF,cF,Dh=l(()=>{"use strict";sF="@@ASTRO-LINKS@@",aF="@@ASTRO-STYLES@@",rF="@@ASTRO-SCRIPTS@@",cF={__astroPropagation:!0,getMod:oF,collectedLinks:sF,collectedStyles:aF,collectedScripts:rF}});var Ch={};u(Ch,{Content:()=>Sh,compiledContent:()=>uF,default:()=>Sh,file:()=>kh,frontmatter:()=>vh,getHeadings:()=>pF,images:()=>Kn,rawContent:()=>dF,url:()=>xh});function lF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Kn[i].src,...Kn[i].attributes}))}function dF(){return`
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
`}function uF(){return bh}function pF(){return[{depth:2,slug:"what-is-the-tcp-ip-model",text:"What is the TCP IP Model?"}]}async function Sh(){let{layout:e,...t}=vh;return t.file=kh,t.url=xh,g(m,{"set:html":bh})}var B7,$7,Kn,bh,vh,kh,xh,Ah=l(()=>{"use strict";A();B7=h(b(),1);v();k();$7=h(x(),1);S();C();Kn={};bh=lF(`<h2 id="what-is-the-tcp-ip-model">What is the TCP IP Model?</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-the-tcp-ip-model-6ddbf970be35">https://medium.com/@gpiechnik/what-is-the-tcp-ip-model-6ddbf970be35</a></p>`),vh={title:"What is the TCP/IP model",publishedAt:"2023-05-16T00:00:00.000Z",description:"\u{1F310} TCP/IP Unraveled: The Backbone of the Internet \u{1F310}",slug:"what-is-tcp-ip-model",isPublish:!0},kh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md",xh=void 0;Sh[Symbol.for("astro.needsHeadRendering")]=!0});var Fh={};u(Fh,{default:()=>yF});async function hF(){return Promise.resolve().then(()=>(Ah(),Ch))}var mF,fF,gF,yF,Eh=l(()=>{"use strict";mF="@@ASTRO-LINKS@@",fF="@@ASTRO-STYLES@@",gF="@@ASTRO-SCRIPTS@@",yF={__astroPropagation:!0,getMod:hF,collectedLinks:mF,collectedStyles:fF,collectedScripts:gF}});var Lh={};u(Lh,{Content:()=>Ih,compiledContent:()=>bF,default:()=>Ih,file:()=>Rh,frontmatter:()=>Ph,getHeadings:()=>vF,images:()=>Vn,rawContent:()=>DF,url:()=>jh});function wF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Vn[i].src,...Vn[i].attributes}))}function DF(){return`
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
`}function bF(){return Th}function vF(){return[{depth:2,slug:"what-is-ssl-certificate",text:"What is SSL Certificate"}]}async function Ih(){let{layout:e,...t}=Ph;return t.file=Rh,t.url=jh,g(m,{"set:html":Th})}var G7,H7,Vn,Th,Ph,Rh,jh,_h=l(()=>{"use strict";A();G7=h(b(),1);v();k();H7=h(x(),1);S();C();Vn={};Th=wF(`<h2 id="what-is-ssl-certificate">What is SSL Certificate</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-ssl-certificate-1a18ba092023">https://medium.com/@gpiechnik/what-is-ssl-certificate-1a18ba092023</a></p>`),Ph={title:"What is SSL Certificate",publishedAt:"2023-05-15T00:00:00.000Z",description:"\u{1F512} SSL/TLS Unveiled: The Guardians of Online Security \u{1F512}",slug:"what-is-ssl-certificate",isPublish:!0},Rh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md",jh=void 0;Ih[Symbol.for("astro.needsHeadRendering")]=!0});var Bh={};u(Bh,{default:()=>AF});async function kF(){return Promise.resolve().then(()=>(_h(),Lh))}var xF,SF,CF,AF,Wh=l(()=>{"use strict";xF="@@ASTRO-LINKS@@",SF="@@ASTRO-STYLES@@",CF="@@ASTRO-SCRIPTS@@",AF={__astroPropagation:!0,getMod:kF,collectedLinks:xF,collectedStyles:SF,collectedScripts:CF}});var Gh={};u(Gh,{Content:()=>zh,compiledContent:()=>TF,default:()=>zh,file:()=>Nh,frontmatter:()=>$h,getHeadings:()=>PF,images:()=>Jn,rawContent:()=>EF,url:()=>Mh});function FF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Jn[i].src,...Jn[i].attributes}))}function EF(){return`
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
`}function TF(){return Oh}function PF(){return[{depth:2,slug:"dns-protocol-explained",text:"DNS Protocol explained"}]}async function zh(){let{layout:e,...t}=$h;return t.file=Nh,t.url=Mh,g(m,{"set:html":Oh})}var Y7,Q7,Jn,Oh,$h,Nh,Mh,Uh=l(()=>{"use strict";A();Y7=h(b(),1);v();k();Q7=h(x(),1);S();C();Jn={};Oh=FF(`<h2 id="dns-protocol-explained">DNS Protocol explained</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/dns-protocol-explained-70f39a2a5a6e">https://medium.com/@gpiechnik/dns-protocol-explained-70f39a2a5a6e</a></p>`),$h={title:"DNS Protocol explained",publishedAt:"2023-05-14T00:00:00.000Z",description:"\u{1F30D} DNS Demystified: Navigating the Backbone of the Internet \u{1F30D}",slug:"dns-protocol-explained",isPublish:!0},Nh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md",Mh=void 0;zh[Symbol.for("astro.needsHeadRendering")]=!0});var qh={};u(qh,{default:()=>_F});async function RF(){return Promise.resolve().then(()=>(Uh(),Gh))}var jF,IF,LF,_F,Hh=l(()=>{"use strict";jF="@@ASTRO-LINKS@@",IF="@@ASTRO-STYLES@@",LF="@@ASTRO-SCRIPTS@@",_F={__astroPropagation:!0,getMod:RF,collectedLinks:jF,collectedStyles:IF,collectedScripts:LF}});var Xh={};u(Xh,{Content:()=>Zh,compiledContent:()=>OF,default:()=>Zh,file:()=>Jh,frontmatter:()=>Vh,getHeadings:()=>$F,images:()=>Yn,rawContent:()=>WF,url:()=>Yh});function BF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Yn[i].src,...Yn[i].attributes}))}function WF(){return`
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
`}function OF(){return Kh}function $F(){return[{depth:2,slug:"idor-vulnerability-types",text:"IDOR vulnerability types"}]}async function Zh(){let{layout:e,...t}=Vh;return t.file=Jh,t.url=Yh,g(m,{"set:html":Kh})}var iR,aR,Yn,Kh,Vh,Jh,Yh,Qh=l(()=>{"use strict";A();iR=h(b(),1);v();k();aR=h(x(),1);S();C();Yn={};Kh=BF(`<h2 id="idor-vulnerability-types">IDOR vulnerability types</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/insecure-direct-object-reference-idor-vulnerability-types-f4b976bbd58b">https://medium.com/@gpiechnik/insecure-direct-object-reference-idor-vulnerability-types-f4b976bbd58b</a></p>`),Vh={title:"Insecure Direct Object Reference (IDOR) vulnerability types",publishedAt:"2023-05-13T00:00:00.000Z",description:"\u{1F310} IDOR Uncovered: Delving Deep into Insecure Direct Object References \u{1F310}",slug:"insecure-direct-object-reference-IDOR-vulnerability-types",isPublish:!0},Jh="/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md",Yh=void 0;Zh[Symbol.for("astro.needsHeadRendering")]=!0});var em={};u(em,{default:()=>UF});async function NF(){return Promise.resolve().then(()=>(Qh(),Xh))}var MF,zF,GF,UF,tm=l(()=>{"use strict";MF="@@ASTRO-LINKS@@",zF="@@ASTRO-STYLES@@",GF="@@ASTRO-SCRIPTS@@",UF={__astroPropagation:!0,getMod:NF,collectedLinks:MF,collectedStyles:zF,collectedScripts:GF}});var rm={};u(rm,{Content:()=>am,compiledContent:()=>KF,default:()=>am,file:()=>om,frontmatter:()=>im,getHeadings:()=>VF,images:()=>Zn,rawContent:()=>HF,url:()=>sm});function qF(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Zn[i].src,...Zn[i].attributes}))}function HF(){return`
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
`}function KF(){return nm}function VF(){return[{depth:2,slug:"what-is-jwt",text:"What is JWT"}]}async function am(){let{layout:e,...t}=im;return t.file=om,t.url=sm,g(m,{"set:html":nm})}var dR,hR,Zn,nm,im,om,sm,cm=l(()=>{"use strict";A();dR=h(b(),1);v();k();hR=h(x(),1);S();C();Zn={};nm=qF(`<h2 id="what-is-jwt">What is JWT</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/what-is-jwt-json-web-token-202b7e5155af">https://medium.com/@gpiechnik/what-is-jwt-json-web-token-202b7e5155af</a></p>`),im={title:"What is JWT (Json Web Token)",publishedAt:"2023-05-12T00:00:00.000Z",description:"\u{1F510} JWT Demystified: Navigating the Intricacies of JSON Web Tokens \u{1F510}",slug:"what-is-jwt",isPublish:!0},om="/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md",sm=void 0;am[Symbol.for("astro.needsHeadRendering")]=!0});var lm={};u(lm,{default:()=>QF});async function JF(){return Promise.resolve().then(()=>(cm(),rm))}var YF,ZF,XF,QF,dm=l(()=>{"use strict";YF="@@ASTRO-LINKS@@",ZF="@@ASTRO-STYLES@@",XF="@@ASTRO-SCRIPTS@@",QF={__astroPropagation:!0,getMod:JF,collectedLinks:YF,collectedStyles:ZF,collectedScripts:XF}});var gm={};u(gm,{Content:()=>fm,compiledContent:()=>n6,default:()=>fm,file:()=>hm,frontmatter:()=>pm,getHeadings:()=>i6,images:()=>Xn,rawContent:()=>t6,url:()=>mm});function e6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Xn[i].src,...Xn[i].attributes}))}function t6(){return`
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
`}function n6(){return um}function i6(){return[{depth:2,slug:"x-frame-options-header-explained",text:"X-Frame-Options header explained"}]}async function fm(){let{layout:e,...t}=pm;return t.file=hm,t.url=mm,g(m,{"set:html":um})}var yR,bR,Xn,um,pm,hm,mm,ym=l(()=>{"use strict";A();yR=h(b(),1);v();k();bR=h(x(),1);S();C();Xn={};um=e6(`<h2 id="x-frame-options-header-explained">X-Frame-Options header explained</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/x-frame-options-header-explained-70775e3bdaac">https://medium.com/@gpiechnik/x-frame-options-header-explained-70775e3bdaac</a></p>`),pm={title:"X-Frame-Options Header Explained",publishedAt:"2023-05-11T00:00:00.000Z",description:"\u{1F6E1}\uFE0F X-Frame-Options Unveiled: Navigating the Perils of Embedded Content \u{1F6E1}\uFE0F",slug:"x-frame-options-header-explained",isPublish:!0},hm="/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md",mm=void 0;fm[Symbol.for("astro.needsHeadRendering")]=!0});var wm={};u(wm,{default:()=>c6});async function o6(){return Promise.resolve().then(()=>(ym(),gm))}var s6,a6,r6,c6,Dm=l(()=>{"use strict";s6="@@ASTRO-LINKS@@",a6="@@ASTRO-STYLES@@",r6="@@ASTRO-SCRIPTS@@",c6={__astroPropagation:!0,getMod:o6,collectedLinks:s6,collectedStyles:a6,collectedScripts:r6}});var Cm={};u(Cm,{Content:()=>Sm,compiledContent:()=>u6,default:()=>Sm,file:()=>km,frontmatter:()=>vm,getHeadings:()=>p6,images:()=>Qn,rawContent:()=>d6,url:()=>xm});function l6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:Qn[i].src,...Qn[i].attributes}))}function d6(){return`
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

Link: https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1`}function u6(){return bm}function p6(){return[{depth:2,slug:"checking-network-devices-in-shodan-search-engine",text:"Checking network devices in Shodan search engine"}]}async function Sm(){let{layout:e,...t}=vm;return t.file=km,t.url=xm,g(m,{"set:html":bm})}var SR,FR,Qn,bm,vm,km,xm,Am=l(()=>{"use strict";A();SR=h(b(),1);v();k();FR=h(x(),1);S();C();Qn={};bm=l6(`<h2 id="checking-network-devices-in-shodan-search-engine">Checking network devices in Shodan search engine</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1">https://medium.com/@gpiechnik/checking-network-devices-in-shodan-search-engine-793018a742f1</a></p>`),vm={title:"Checking network devices in Shodan search engine",publishedAt:"2023-05-10T00:00:00.000Z",description:"\u{1F310} Shodan Uncovered: The Ultimate Guide to IoT Reconnaissance \u{1F310}",slug:"network-devices-shodan",isPublish:!0},km="/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md",xm=void 0;Sm[Symbol.for("astro.needsHeadRendering")]=!0});var Fm={};u(Fm,{default:()=>y6});async function h6(){return Promise.resolve().then(()=>(Am(),Cm))}var m6,f6,g6,y6,Em=l(()=>{"use strict";m6="@@ASTRO-LINKS@@",f6="@@ASTRO-STYLES@@",g6="@@ASTRO-SCRIPTS@@",y6={__astroPropagation:!0,getMod:h6,collectedLinks:m6,collectedStyles:f6,collectedScripts:g6}});var Lm={};u(Lm,{Content:()=>Im,compiledContent:()=>b6,default:()=>Im,file:()=>Rm,frontmatter:()=>Pm,getHeadings:()=>v6,images:()=>ei,rawContent:()=>D6,url:()=>jm});function w6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:ei[i].src,...ei[i].attributes}))}function D6(){return`
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
`}function b6(){return Tm}function v6(){return[{depth:2,slug:"docker-explained-for-pentesters",text:"Docker explained for pentesters"}]}async function Im(){let{layout:e,...t}=Pm;return t.file=Rm,t.url=jm,g(m,{"set:html":Tm})}var RR,LR,ei,Tm,Pm,Rm,jm,_m=l(()=>{"use strict";A();RR=h(b(),1);v();k();LR=h(x(),1);S();C();ei={};Tm=w6(`<h2 id="docker-explained-for-pentesters">Docker explained for pentesters</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/docker-explained-for-pentester-6a90b5822040">https://medium.com/@gpiechnik/docker-explained-for-pentester-6a90b5822040</a></p>`),Pm={title:"Docker explained for pentesters",publishedAt:"2023-05-09T00:00:00.000Z",description:"\u{1F433} Docker Demystified: A Comprehensive Guide to Containerization \u{1F433}",slug:"docker-explained-for-pentesters",isPublish:!0},Rm="/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md",jm=void 0;Im[Symbol.for("astro.needsHeadRendering")]=!0});var Bm={};u(Bm,{default:()=>A6});async function k6(){return Promise.resolve().then(()=>(_m(),Lm))}var x6,S6,C6,A6,Wm=l(()=>{"use strict";x6="@@ASTRO-LINKS@@",S6="@@ASTRO-STYLES@@",C6="@@ASTRO-SCRIPTS@@",A6={__astroPropagation:!0,getMod:k6,collectedLinks:x6,collectedStyles:S6,collectedScripts:C6}});var Gm={};u(Gm,{Content:()=>zm,compiledContent:()=>T6,default:()=>zm,file:()=>Nm,frontmatter:()=>$m,getHeadings:()=>P6,images:()=>ti,rawContent:()=>E6,url:()=>Mm});function F6(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,i)=>f({src:ti[i].src,...ti[i].attributes}))}function E6(){return`
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
`}function T6(){return Om}function P6(){return[{depth:2,slug:"how-to-optimise-jmeter",text:"How to optimise JMeter"}]}async function zm(){let{layout:e,...t}=$m;return t.file=Nm,t.url=Mm,g(m,{"set:html":Om})}var OR,MR,ti,Om,$m,Nm,Mm,Um=l(()=>{"use strict";A();OR=h(b(),1);v();k();MR=h(x(),1);S();C();ti={};Om=F6(`<h2 id="how-to-optimise-jmeter">How to optimise JMeter</h2>
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
<p>Link: <a href="https://medium.com/@gpiechnik/how-to-optimise-jmeter-for-performance-tests-b4b05de3ea15">https://medium.com/@gpiechnik/how-to-optimise-jmeter-for-performance-tests-b4b05de3ea15</a></p>`),$m={title:"How to optimise JMeter for performance tests",publishedAt:"2023-05-09T00:00:00.000Z",description:"\u{1F680} Unlock the Full Potential of JMeter: A Deep Dive into Optimization \u{1F680}",slug:"how-to-optimise-jmeter",isPublish:!0},Nm="/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md",Mm=void 0;zm[Symbol.for("astro.needsHeadRendering")]=!0});var qm={};u(qm,{default:()=>_6});async function R6(){return Promise.resolve().then(()=>(Um(),Gm))}var j6,I6,L6,_6,Hm=l(()=>{"use strict";j6="@@ASTRO-LINKS@@",I6="@@ASTRO-STYLES@@",L6="@@ASTRO-SCRIPTS@@",_6={__astroPropagation:!0,getMod:R6,collectedLinks:j6,collectedStyles:I6,collectedScripts:L6}});var uf={};u(uf,{$:()=>si,f:()=>rf,g:()=>Ym,i:()=>dE});function O6(e){return async(t,i)=>{let n=Jm[t]?.entries[i];if(n)return e[t][n]}}function M6(e){return/\w+\/$/.test(e)?e.slice(0,-1):e}function rf(e){return new Intl.DateTimeFormat("en-GB").format(e)}function aE(e){return e.replace(/\*{1,2}(.*?)\*{1,2}/g,`<strong class="font-normal ${U6[ii.colors.primary]}">$1</strong>`)}var dt,Km,B6,Vm,W6,Jm,$6,N6,Ym,z6,Zm,G6,U6,q6,ni,ii,H6,Xm,K6,Qm,V6,ef,J6,tf,Y6,nf,Z6,of,X6,sf,Q6,eE,af,tE,si,nE,lt,ye,iE,oi,oE,cf,sE,lf,ct,rE,df,cE,lE,dE,pf=l(()=>{"use strict";A();dt="/src/content/",Km=Object.assign({"/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md":()=>Promise.resolve().then(()=>(Jo(),Vo)),"/src/content/posts/952-nuclei-writing-exploit.md":()=>Promise.resolve().then(()=>(Zo(),Yo)),"/src/content/posts/953-standard-deviation-performance-tests.md":()=>Promise.resolve().then(()=>(Qo(),Xo)),"/src/content/posts/954-afrog-bug-bounty-pentesters.md":()=>Promise.resolve().then(()=>(ts(),es)),"/src/content/posts/955-drill-performance-testing-tool.md":()=>Promise.resolve().then(()=>(is(),ns)),"/src/content/posts/956-aws-ec2-instances-basics.md":()=>Promise.resolve().then(()=>(ss(),os)),"/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md":()=>Promise.resolve().then(()=>(rs(),as)),"/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md":()=>Promise.resolve().then(()=>(ls(),cs)),"/src/content/posts/959-types-of-deployment.md":()=>Promise.resolve().then(()=>(us(),ds)),"/src/content/posts/960-availability-load-balancing-failover-session-persistence.md":()=>Promise.resolve().then(()=>(hs(),ps)),"/src/content/posts/961-mitmproxy-and-k6.md":()=>Promise.resolve().then(()=>(fs(),ms)),"/src/content/posts/962-flaky-tests-jmeter.md":()=>Promise.resolve().then(()=>(ys(),gs)),"/src/content/posts/963-debug-requests-k6.md":()=>Promise.resolve().then(()=>(Ds(),ws)),"/src/content/posts/964-what-are-memory-leaks.md":()=>Promise.resolve().then(()=>(vs(),bs)),"/src/content/posts/965-what-is-browser-based-load-testing.md":()=>Promise.resolve().then(()=>(xs(),ks)),"/src/content/posts/966-read-summary-data-in-k6.md":()=>Promise.resolve().then(()=>(Cs(),Ss)),"/src/content/posts/967-fundamental-network-tools.md":()=>Promise.resolve().then(()=>(Fs(),As)),"/src/content/posts/968-crucial-update-for-k6-results-analysis.md":()=>Promise.resolve().then(()=>(Ts(),Es)),"/src/content/posts/969-hacking-embedded-systems-routersploit.md":()=>Promise.resolve().then(()=>(Rs(),Ps)),"/src/content/posts/970-syn-flood-attack.md":()=>Promise.resolve().then(()=>(Is(),js)),"/src/content/posts/971-dos-ddos-drddos-pod-attack.md":()=>Promise.resolve().then(()=>(_s(),Ls)),"/src/content/posts/972-state-ssl-certificates.md":()=>Promise.resolve().then(()=>(Ws(),Bs)),"/src/content/posts/973-what-are-polyglots.md":()=>Promise.resolve().then(()=>($s(),Os)),"/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md":()=>Promise.resolve().then(()=>(Ms(),Ns)),"/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md":()=>Promise.resolve().then(()=>(Gs(),zs)),"/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md":()=>Promise.resolve().then(()=>(qs(),Us)),"/src/content/posts/977-what-is-waf-and-ips.md":()=>Promise.resolve().then(()=>(Ks(),Hs)),"/src/content/posts/978-metasploit-explained.md":()=>Promise.resolve().then(()=>(Js(),Vs)),"/src/content/posts/979-content-security-policy-explained.md":()=>Promise.resolve().then(()=>(Zs(),Ys)),"/src/content/posts/980-the-harvester-and-h8mail-osint.md":()=>Promise.resolve().then(()=>(Qs(),Xs)),"/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md":()=>Promise.resolve().then(()=>(ta(),ea)),"/src/content/posts/982-scary-rogue-access-point-attack.md":()=>Promise.resolve().then(()=>(ia(),na)),"/src/content/posts/983-what-is-a-zero-day-exploit.md":()=>Promise.resolve().then(()=>(sa(),oa)),"/src/content/posts/984-what-is-insecure-deserialization.md":()=>Promise.resolve().then(()=>(ra(),aa)),"/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md":()=>Promise.resolve().then(()=>(la(),ca)),"/src/content/posts/986-security-risks-associated-with-using-git.md":()=>Promise.resolve().then(()=>(ua(),da)),"/src/content/posts/987-cross-site-request-forgery-attack.md":()=>Promise.resolve().then(()=>(ha(),pa)),"/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md":()=>Promise.resolve().then(()=>(fa(),ma)),"/src/content/posts/989-linux-basics.md":()=>Promise.resolve().then(()=>(ya(),ga)),"/src/content/posts/990-what-is-path-travelsal-vulnerability.md":()=>Promise.resolve().then(()=>(Da(),wa)),"/src/content/posts/991-what-is-the-TCP-IP-model.md":()=>Promise.resolve().then(()=>(va(),ba)),"/src/content/posts/992-what-is-SSL-certificate.md":()=>Promise.resolve().then(()=>(xa(),ka)),"/src/content/posts/993-DNS-protocol-explained.md":()=>Promise.resolve().then(()=>(Ca(),Sa)),"/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md":()=>Promise.resolve().then(()=>(Fa(),Aa)),"/src/content/posts/995-what-is-jwt.md":()=>Promise.resolve().then(()=>(Ta(),Ea)),"/src/content/posts/996-x-frame-options-header-explained.md":()=>Promise.resolve().then(()=>(Ra(),Pa)),"/src/content/posts/997-network-devices-shodan.md":()=>Promise.resolve().then(()=>(Ia(),ja)),"/src/content/posts/998-docker-explained-for-pentesters.md":()=>Promise.resolve().then(()=>(_a(),La)),"/src/content/posts/999-how-to-optimise-jmeter.md":()=>Promise.resolve().then(()=>(Wa(),Ba))}),B6=Me({globResult:Km,contentDir:dt}),Vm=Object.assign({}),W6=Me({globResult:Vm,contentDir:dt});Me({globResult:{...Km,...Vm},contentDir:dt});Jm={};Jm={posts:{type:"content",entries:{"using-chatgpt-to-write-nuclei-exploits":"/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md","nuclei-writing-exploit":"/src/content/posts/952-nuclei-writing-exploit.md","standard-deviation-performance-tests":"/src/content/posts/953-standard-deviation-performance-tests.md","drill-performance-testing-tool":"/src/content/posts/955-drill-performance-testing-tool.md","afrog-bug-bounty-pentesters":"/src/content/posts/954-afrog-bug-bounty-pentesters.md","aws-ec2-instances-basics":"/src/content/posts/956-aws-ec2-instances-basics.md","what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-2":"/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md","what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one":"/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md","availability-load-balancing-failover-session-persistence":"/src/content/posts/960-availability-load-balancing-failover-session-persistence.md","types-of-deployment":"/src/content/posts/959-types-of-deployment.md","mitmproxy-and-k6":"/src/content/posts/961-mitmproxy-and-k6.md","flaky-tests-jmeter":"/src/content/posts/962-flaky-tests-jmeter.md","debug-requests-k6":"/src/content/posts/963-debug-requests-k6.md","what-are-memory-leaks":"/src/content/posts/964-what-are-memory-leaks.md","what-is-browser-based-load-testing":"/src/content/posts/965-what-is-browser-based-load-testing.md","read-summary-data-in-k6":"/src/content/posts/966-read-summary-data-in-k6.md","fundamental-network-tools":"/src/content/posts/967-fundamental-network-tools.md","hacking-embedded-systems-routersploit":"/src/content/posts/969-hacking-embedded-systems-routersploit.md","crucial-update-for-k6-results-analysis":"/src/content/posts/968-crucial-update-for-k6-results-analysis.md","syn-flood-attack":"/src/content/posts/970-syn-flood-attack.md","dos-ddos-drddos-pod-attack":"/src/content/posts/971-dos-ddos-drddos-pod-attack.md","state-ssl-certificates":"/src/content/posts/972-state-ssl-certificates.md","ldap-protocol-basics-and-the-ldap-injection-attack":"/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md","what-are-polyglots":"/src/content/posts/973-what-are-polyglots.md","what-is-bind-shell-and-reverse-shell":"/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md","what-is-forward-proxy-and-reverse-proxy":"/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md","what-is-waf-and-ips":"/src/content/posts/977-what-is-waf-and-ips.md","metasploit-explained":"/src/content/posts/978-metasploit-explained.md","content-security-policy-explained":"/src/content/posts/979-content-security-policy-explained.md","the-harvester-and-h8mail-osint":"/src/content/posts/980-the-harvester-and-h8mail-osint.md","scanning-ports-and-finding-network-vulnerabilities-with-nmap":"/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md","what-is-a-zero-day-exploit":"/src/content/posts/983-what-is-a-zero-day-exploit.md","scary-rogue-access-point-attack":"/src/content/posts/982-scary-rogue-access-point-attack.md","what-is-insecure-deserialization":"/src/content/posts/984-what-is-insecure-deserialization.md","what-are-cves-common-vulnerabilities-and-exposures":"/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md","security-risks-associated-with-using-git":"/src/content/posts/986-security-risks-associated-with-using-git.md","cross-site-request-forgery-attack":"/src/content/posts/987-cross-site-request-forgery-attack.md","linux-basics":"/src/content/posts/989-linux-basics.md","cros-origin-resource-sharing-cors-how-does-it-work":"/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md","path-travelsal-vulnerability":"/src/content/posts/990-what-is-path-travelsal-vulnerability.md","what-is-tcp-ip-model":"/src/content/posts/991-what-is-the-TCP-IP-model.md","what-is-ssl-certificate":"/src/content/posts/992-what-is-SSL-certificate.md","dns-protocol-explained":"/src/content/posts/993-DNS-protocol-explained.md","insecure-direct-object-reference-IDOR-vulnerability-types":"/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md","what-is-jwt":"/src/content/posts/995-what-is-jwt.md","x-frame-options-header-explained":"/src/content/posts/996-x-frame-options-header-explained.md","network-devices-shodan":"/src/content/posts/997-network-devices-shodan.md","docker-explained-for-pentesters":"/src/content/posts/998-docker-explained-for-pentesters.md","how-to-optimise-jmeter":"/src/content/posts/999-how-to-optimise-jmeter.md"}}};$6=Object.assign({"/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md":()=>Promise.resolve().then(()=>(Ha(),qa)),"/src/content/posts/952-nuclei-writing-exploit.md":()=>Promise.resolve().then(()=>(tr(),er)),"/src/content/posts/953-standard-deviation-performance-tests.md":()=>Promise.resolve().then(()=>(dr(),lr)),"/src/content/posts/954-afrog-bug-bounty-pentesters.md":()=>Promise.resolve().then(()=>(Dr(),wr)),"/src/content/posts/955-drill-performance-testing-tool.md":()=>Promise.resolve().then(()=>(Er(),Fr)),"/src/content/posts/956-aws-ec2-instances-basics.md":()=>Promise.resolve().then(()=>(Wr(),Br)),"/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md":()=>Promise.resolve().then(()=>(Hr(),qr)),"/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md":()=>Promise.resolve().then(()=>(tc(),ec)),"/src/content/posts/959-types-of-deployment.md":()=>Promise.resolve().then(()=>(dc(),lc)),"/src/content/posts/960-availability-load-balancing-failover-session-persistence.md":()=>Promise.resolve().then(()=>(Dc(),wc)),"/src/content/posts/961-mitmproxy-and-k6.md":()=>Promise.resolve().then(()=>(Ec(),Fc)),"/src/content/posts/962-flaky-tests-jmeter.md":()=>Promise.resolve().then(()=>(Wc(),Bc)),"/src/content/posts/963-debug-requests-k6.md":()=>Promise.resolve().then(()=>(Hc(),qc)),"/src/content/posts/964-what-are-memory-leaks.md":()=>Promise.resolve().then(()=>(tl(),el)),"/src/content/posts/965-what-is-browser-based-load-testing.md":()=>Promise.resolve().then(()=>(dl(),ll)),"/src/content/posts/966-read-summary-data-in-k6.md":()=>Promise.resolve().then(()=>(Dl(),wl)),"/src/content/posts/967-fundamental-network-tools.md":()=>Promise.resolve().then(()=>(El(),Fl)),"/src/content/posts/968-crucial-update-for-k6-results-analysis.md":()=>Promise.resolve().then(()=>(Wl(),Bl)),"/src/content/posts/969-hacking-embedded-systems-routersploit.md":()=>Promise.resolve().then(()=>(Hl(),ql)),"/src/content/posts/970-syn-flood-attack.md":()=>Promise.resolve().then(()=>(td(),ed)),"/src/content/posts/971-dos-ddos-drddos-pod-attack.md":()=>Promise.resolve().then(()=>(dd(),ld)),"/src/content/posts/972-state-ssl-certificates.md":()=>Promise.resolve().then(()=>(Dd(),wd)),"/src/content/posts/973-what-are-polyglots.md":()=>Promise.resolve().then(()=>(Ed(),Fd)),"/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md":()=>Promise.resolve().then(()=>(Wd(),Bd)),"/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md":()=>Promise.resolve().then(()=>(Hd(),qd)),"/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md":()=>Promise.resolve().then(()=>(tu(),eu)),"/src/content/posts/977-what-is-waf-and-ips.md":()=>Promise.resolve().then(()=>(du(),lu)),"/src/content/posts/978-metasploit-explained.md":()=>Promise.resolve().then(()=>(Du(),wu)),"/src/content/posts/979-content-security-policy-explained.md":()=>Promise.resolve().then(()=>(Eu(),Fu)),"/src/content/posts/980-the-harvester-and-h8mail-osint.md":()=>Promise.resolve().then(()=>(Wu(),Bu)),"/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md":()=>Promise.resolve().then(()=>(Hu(),qu)),"/src/content/posts/982-scary-rogue-access-point-attack.md":()=>Promise.resolve().then(()=>(tp(),ep)),"/src/content/posts/983-what-is-a-zero-day-exploit.md":()=>Promise.resolve().then(()=>(dp(),lp)),"/src/content/posts/984-what-is-insecure-deserialization.md":()=>Promise.resolve().then(()=>(Dp(),wp)),"/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md":()=>Promise.resolve().then(()=>(Ep(),Fp)),"/src/content/posts/986-security-risks-associated-with-using-git.md":()=>Promise.resolve().then(()=>(Wp(),Bp)),"/src/content/posts/987-cross-site-request-forgery-attack.md":()=>Promise.resolve().then(()=>(Hp(),qp)),"/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md":()=>Promise.resolve().then(()=>(th(),eh)),"/src/content/posts/989-linux-basics.md":()=>Promise.resolve().then(()=>(dh(),lh)),"/src/content/posts/990-what-is-path-travelsal-vulnerability.md":()=>Promise.resolve().then(()=>(Dh(),wh)),"/src/content/posts/991-what-is-the-TCP-IP-model.md":()=>Promise.resolve().then(()=>(Eh(),Fh)),"/src/content/posts/992-what-is-SSL-certificate.md":()=>Promise.resolve().then(()=>(Wh(),Bh)),"/src/content/posts/993-DNS-protocol-explained.md":()=>Promise.resolve().then(()=>(Hh(),qh)),"/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md":()=>Promise.resolve().then(()=>(tm(),em)),"/src/content/posts/995-what-is-jwt.md":()=>Promise.resolve().then(()=>(dm(),lm)),"/src/content/posts/996-x-frame-options-header-explained.md":()=>Promise.resolve().then(()=>(Dm(),wm)),"/src/content/posts/997-network-devices-shodan.md":()=>Promise.resolve().then(()=>(Em(),Fm)),"/src/content/posts/998-docker-explained-for-pentesters.md":()=>Promise.resolve().then(()=>(Wm(),Bm)),"/src/content/posts/999-how-to-optimise-jmeter.md":()=>Promise.resolve().then(()=>(Hm(),qm))}),N6=Me({globResult:$6,contentDir:dt}),Ym=Ko({contentCollectionToEntryMap:B6,dataCollectionToEntryMap:W6,getRenderEntryImport:O6(N6)});z6=V("https://gpiechnik.com/"),Zm=K(async(e,t,i)=>{let n=e.createAstro(z6,t,i);n.self=Zm;let o=M6(n.url.pathname);return w`${te()}<header class="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
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
</header>`},"/home/figaro/Desktop/gpiechnik-website/src/components/Header.astro",void 0),G6={orange:"bg-orange-500",violet:"bg-violet-500",red:"bg-red-500",amber:"bg-amber-500",yellow:"bg-yellow-500",lime:"bg-lime-500",green:"bg-green-500",emerald:"bg-emerald-500",teal:"bg-violet-500",cyan:"bg-cyan-500",blue:"bg-blue-500",indigo:"bg-indigo-500",purple:"bg-purple-500",fushia:"bg-fushia-500",pink:"bg-pink-500",rose:"bg-rose-500"},U6={orange:"text-orange-500",violet:"text-violet-500",red:"text-red-500",amber:"text-amber-500",yellow:"text-yellow-500",lime:"text-lime-500",green:"text-green-500",emerald:"text-emerald-500",teal:"text-violet-500",cyan:"text-cyan-500",blue:"text-blue-500",indigo:"text-indigo-500",purple:"text-purple-500",fushia:"text-fushia-500",pink:"text-pink-500",rose:"text-rose-500"},q6=V("https://gpiechnik.com/"),ni=K(async(e,t,i)=>{let n=e.createAstro(q6,t,i);n.self=ni;let{position:o,color:s}=n.props;return w`${te()}<div${E({[`fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full ${G6[s]} blur-[150px] md:blur-[350px] opacity-50`]:!0,["left-0 top-0"]:o==="top",["right-0 bottom-0"]:o==="bottom"},"class:list")}>
</div>`},"/home/figaro/Desktop/gpiechnik-website/src/components/shared/BlurCircle.astro",void 0),ii={colors:{primary:"violet",blur:{top:"violet",bottom:"violet"}}},H6=V("https://gpiechnik.com/"),Xm=K(async(e,t,i)=>{let n=e.createAstro(H6,t,i);n.self=Xm;let{publishedTime:o,modifiedTime:s,expirationTime:a,authors:c,section:d,tags:p}=n.props.openGraph.article;return w`${o?w`<meta property="article:published_time"${E(o,"content")}>`:null}
${s?w`<meta property="article:modified_time"${E(s,"content")}>`:null}
${a?w`<meta property="article:expiration_time"${E(a,"content")}>`:null}
${c?c.map(r=>w`<meta property="article:author"${E(r,"content")}>`):null}
${d?w`<meta property="article:section"${E(d,"content")}>`:null}
${p?p.map(r=>w`<meta property="article:tag"${E(r,"content")}>`):null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro",void 0),K6=V("https://gpiechnik.com/"),Qm=K(async(e,t,i)=>{let n=e.createAstro(K6,t,i);n.self=Qm;let{openGraph:o}=n.props;return w`<meta property="og:title"${E(o.basic.title,"content")}>
<meta property="og:type"${E(o.basic.type,"content")}>
<meta property="og:image"${E(o.basic.image,"content")}>
<meta property="og:url"${E(o.basic.url||n.url.href,"content")}>`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro",void 0),V6=V("https://gpiechnik.com/"),ef=K(async(e,t,i)=>{let n=e.createAstro(V6,t,i);n.self=ef;let{image:o}=n.props.openGraph.basic,{secureUrl:s,type:a,width:c,height:d,alt:p}=n.props.openGraph.image;return w`<meta property="og:image:url"${E(o,"content")}>
${s?w`<meta property="og:image:secure_url"${E(s,"content")}>`:null}
${a?w`<meta property="og:image:type"${E(a,"content")}>`:null}
${c?w`<meta property="og:image:width"${E(c,"content")}>`:null}
${d!==null?w`<meta property="og:image:height"${E(d,"content")}>`:null}
${p!==null?w`<meta property="og:image:alt"${E(p,"content")}>`:null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphImageTags.astro",void 0),J6=V("https://gpiechnik.com/"),tf=K(async(e,t,i)=>{let n=e.createAstro(J6,t,i);n.self=tf;let{optional:o}=n.props.openGraph;return w`${o.audio?w`<meta property="og:audio"${E(o.audio,"content")}>`:null}
${o.description?w`<meta property="og:description"${E(o.description,"content")}>`:null}
${o.determiner?w`<meta property="og:determiner"${E(o.determiner,"content")}>`:null}
${o.locale?w`<meta property="og:locale"${E(o.locale,"content")}>`:null}
${o.localeAlternate?.map(s=>w`<meta property="og:locale:alternate"${E(s,"content")}>`)}
${o.siteName?w`<meta property="og:site_name"${E(o.siteName,"content")}>`:null}
${o.video?w`<meta property="og:video"${E(o.video,"content")}>`:null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro",void 0),Y6=V("https://gpiechnik.com/"),nf=K(async(e,t,i)=>{let n=e.createAstro(Y6,t,i);n.self=nf;let{props:o}=n;return w`${o.extend.link?.map(s=>w`<link${f(s)}>`)}
${o.extend.meta?.map(({content:s,httpEquiv:a,name:c,property:d})=>w`<meta${E(s,"content")}${E(a,"http-equiv")}${E(c,"name")}${E(d,"property")}>`)}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/ExtendedTags.astro",void 0),Z6=V("https://gpiechnik.com/"),of=K(async(e,t,i)=>{let n=e.createAstro(Z6,t,i);n.self=of;let{card:o,site:s,title:a,creator:c,description:d,image:p,imageAlt:r}=n.props.twitter;return w`${o?w`<meta name="twitter:card"${E(o,"content")}>`:null}
${s?w`<meta name="twitter:site"${E(s,"content")}>`:null}
${a?w`<meta name="twitter:title"${E(a,"content")}>`:null}
${p?w`<meta name="twitter:image"${E(p,"content")}>`:null}
${r?w`<meta name="twitter:image:alt"${E(r,"content")}>`:null}
${d?w`<meta name="twitter:description"${E(d,"content")}>`:null}
${c?w`<meta name="twitter:creator"${E(c,"content")}>`:null}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/components/TwitterTags.astro",void 0),X6=V("https://gpiechnik.com/"),sf=K(async(e,t,i)=>{let n=e.createAstro(X6,t,i);n.self=sf,n.props.surpressWarnings=!0;function o(a){if(a.openGraph&&(!a.openGraph.basic||a.openGraph.basic.title==null||a.openGraph.basic.type==null||a.openGraph.basic.image==null))throw new Error("If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!");a.title&&a.openGraph?.basic.title&&a.title==a.openGraph.basic.title&&!a.surpressWarnings&&console.warn("WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."),a.openGraph?.basic?.image&&!a.openGraph?.image?.alt&&!a.surpressWarnings&&console.warn("WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'")}o(n.props);let s="";return n.props.title?(s=n.props.title,n.props.titleTemplate&&(s=n.props.titleTemplate.replace(/%s/g,s))):n.props.titleDefault&&(s=n.props.titleDefault),w`${s?w`<title>${le(s)}</title>`:null}

${n.props.charset?w`<meta${E(n.props.charset,"charset")}>`:null}

<link rel="canonical"${E(n.props.canonical||n.url.href,"href")}>

${n.props.description?w`<meta name="description"${E(n.props.description,"content")}>`:null}

<meta name="robots"${E(`${n.props.noindex?"noindex":"index"}, ${n.props.nofollow?"nofollow":"follow"}`,"content")}>

${n.props.openGraph&&w`${N(e,"OpenGraphBasicTags",Qm,{...n.props})}`}
${n.props.openGraph?.optional&&w`${N(e,"OpenGraphOptionalTags",tf,{...n.props})}`}
${n.props.openGraph?.image&&w`${N(e,"OpenGraphImageTags",ef,{...n.props})}`}
${n.props.openGraph?.article&&w`${N(e,"OpenGraphArticleTags",Xm,{...n.props})}`}
${n.props.twitter&&w`${N(e,"TwitterTags",of,{...n.props})}`}
${n.props.extend&&w`${N(e,"ExtendedTags",nf,{...n.props})}`}`},"/home/figaro/Desktop/gpiechnik-website/node_modules/astro-seo/src/SEO.astro",void 0),Q6="https://gpiechnik.com/",eE=V("https://gpiechnik.com/"),af=K(async(e,t,i)=>{let n=e.createAstro(eE,t,i);n.self=af;let{title:o,description:s,noindex:a,og:c}=n.props,d="Grzegorz Piechnik - Performance Engineer Testing",p="Grzegorz Piechnik Performance Engineer blog",r=Q6,y={title:c?.title||d,type:c?.type||"website",image:c?.image||"/grzegorz-piechnik-logo.png",alt:c?.alt||"grzegorz piechnik performance testing engineer image",url:r,description:c?.description||p};return w`<head>
  ${N(e,"SEO",sf,{charset:"UTF-8",title:o||d,description:s||p,noindex:a||!1,openGraph:{basic:{title:y.title,type:y.type,image:y.image},image:{alt:y.alt}},extend:{link:[{rel:"icon",href:"/favicon.svg"},{rel:"sitemap",href:"/sitemap-index.xml"}],meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"generator",content:n.generator},{name:"twitter:image",content:y.image},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:y.title},{name:"twitter:description",content:y.description}]}})}
${Co()}</head>`},"/home/figaro/Desktop/gpiechnik-website/src/components/seo/SEOTags.astro",void 0),tE=V("https://gpiechnik.com/"),si=K(async(e,t,i)=>{let n=e.createAstro(tE,t,i);n.self=si;let{title:o}=n.props;return w`<html lang="en">
  ${N(e,"SEOTags",af,{title:o})}

  ${te()}<body class="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16">
    ${N(e,"Header",Zm,{})}
    ${N(e,"BlurCircle",ni,{position:"top",color:ii.colors.blur.top})}
    ${N(e,"BlurCircle",ni,{position:"bottom",color:ii.colors.blur.bottom})}
    ${st(e,i.default)}
    
  </body>
</html>`},"/home/figaro/Desktop/gpiechnik-website/src/layouts/Layout.astro",void 0),nE=V("https://gpiechnik.com/"),lt=K(async(e,t,i)=>{let n=e.createAstro(nE,t,i);n.self=lt;let{label:o,isUnderline:s,...a}=n.props;return w`${te()}<a${E(a.href,"href")}${E({["hover:text-neutral-100 cursor-pointer"]:!0,["underline decoration-dashed underline-offset-8"]:s},"class:list")}${f(a)} rel="noreferrer" target="_blank">
  ${o}
  <span class="sr-only">${o} link</span>
</a>`},"/home/figaro/Desktop/gpiechnik-website/src/components/shared/Link.astro",void 0),ye={mail:"grzegorz.piechnik99@gmail.com",title:"Hi, I\u2019m Grzegorz Piechnik \u{1F44B}",profile:"/grzegorz-piechnik-photo.webp",description:"Hi, I am a *Performance Engineer* with years of experience in application testing and a *k6 Champion*. I help companies improve the performance of their applications, *educate*, create content on *youtube*, write on my *blog* and *create opensource* tools. After hours, I am involved in cybersecurity.",socials:[{label:"Linkedin",link:"https://www.linkedin.com/in/grpiechnik/"},{label:"Github",link:"https://github.com/gpiechnik2"},{label:"Youtube",link:"https://github.com/gpiechnik2"},{label:"Medium",link:"https://medium.com/@gpiechnik"}]},iE=V("https://gpiechnik.com/"),oi=K(async(e,t,i)=>{let n=e.createAstro(iE,t,i);return n.self=oi,w`${te()}<ul role="list" class="flex flex-row gap-2">
  ${ye.socials.map((o,s)=>w`${N(e,"Fragment",m,{},{default:a=>w`
        <li>
          ${N(a,"Link",lt,{href:o.link,label:o.label})}
        </li>

        ${ye.socials.length-1!==s&&w`<li>/</li>`}`})}`)}
</ul>`},"/home/figaro/Desktop/gpiechnik-website/src/components/SocialLinks.astro",void 0);oE=V("https://gpiechnik.com/"),cf=K(async(e,t,i)=>{let n=e.createAstro(oE,t,i);n.self=cf;let{title:o,publishedAt:s,description:a,slug:c}=n.props;return w`${te()}<a class="group flex max-w-sm cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400"${E(`/posts/${c}`,"href")}>
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
</a>`},"/home/figaro/Desktop/gpiechnik-website/src/components/PostCard.astro",void 0),sE=V("https://gpiechnik.com/"),lf=K(async(e,t,i)=>{let n=e.createAstro(sE,t,i);n.self=lf;let{title:o,techs:s,link:a,isComingSoon:c}=n.props,d=p=>p.toString().replaceAll(","," \u2022 ");return w`${N(e,"Fragment",m,{},{default:p=>w`${c&&w`${te()}<div class="t group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 md:flex-row md:items-center">
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
      </a>`}`})}`},"/home/figaro/Desktop/gpiechnik-website/src/components/ProjectCard.astro",void 0);ct=[{title:"xk6-httpagg",techs:["k6","xk6","Go","Javascript","HTML"],link:"https://github.com/gpiechnik2/xk6-httpagg"},{title:"xk6-anomaly",techs:["k6","xk6","Go","Javascript","AI (Artificial Intelligence)","Machine Learning"],link:"https://github.com/gpiechnik2/xk6-anomaly"},{title:"xk6-smtp",techs:["k6","xk6","Go","Javascript","SMTP"],link:"https://github.com/gpiechnik2/xk6-smtp"},{title:"k6-boilerplate",techs:["k6","Javascript","Docker","Docker-compose","Grafana","InfluxDB"],link:"https://github.com/gpiechnik2/k6-boilerplate"},{title:"k6-errors-reporter",techs:["k6","Javascript","Webpack"],link:"https://github.com/gpiechnik2/k6-errors-reporter"}],rE=V("https://gpiechnik.com/"),df=K(async(e,t,i)=>{let n=e.createAstro(rE,t,i);n.self=df;let o=(await Ym("posts")).sort(function(a,c){return c.data.publishedAt.getTime()-a.data.publishedAt.getTime()}),s=[];return w`${N(e,"Layout",si,{},{default:a=>w`
  ${te()}<main class="flex flex-col gap-20">
    <article class="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
      ${w`<img${E(ye.profile,"src")} class="w-1/4 self-center rounded-full" alt="Grzegorz Piechnik Performance Tester Photo">`}

      <div class="flex flex-col gap-8">
        <h1 class="text-3xl text-neutral-100">
          ${ye.title}
        </h1>

        <h2 class="w-auto max-w-[60ch] leading-6">${le(aE(ye.description))}</h2>

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

    <!-- <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">Newsletter</h3>
      </header>
        <NewsletterForm/>
    </article> -->

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
`})}`},"/home/figaro/Desktop/gpiechnik-website/src/pages/index.astro",void 0),cE="/home/figaro/Desktop/gpiechnik-website/src/pages/index.astro",lE="",dE=Object.freeze(Object.defineProperty({__proto__:null,default:df,file:cE,url:lE},Symbol.toStringTag,{value:"Module"}))});var hf={};u(hf,{onRequest:()=>Ce,page:()=>uE,renderers:()=>de});var HR,JR,uE,mf=l(()=>{"use strict";ze();rt();A();HR=h(b(),1);v();k();JR=h(x(),1);S();C();uE=()=>Promise.resolve().then(()=>(pf(),uf)).then(e=>e.i)});var ai={};u(ai,{_:()=>pE,i:()=>hE});var ff,pE,hE,ri=l(()=>{"use strict";ff=()=>{},pE=ff,hE=ff});var gf={};u(gf,{onRequest:()=>Ce,page:()=>mE,renderers:()=>de});var tj,oj,mE,yf=l(()=>{"use strict";ze();rt();A();tj=h(b(),1);v();k();oj=h(x(),1);S();C();mE=()=>Promise.resolve().then(()=>(ri(),ai)).then(e=>e.i)});var wf={};u(wf,{onRequest:()=>Ce,page:()=>fE,renderers:()=>de});var dj,hj,fE,Df=l(()=>{"use strict";ze();rt();A();dj=h(b(),1);v();k();hj=h(x(),1);S();C();fE=()=>Promise.resolve().then(()=>(ri(),ai)).then(e=>e._)});A();ze();var bj=h(x(),1),vj=h(b(),1);k();v();S();C();var gE=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]";function yE(){return new Proxy({},{get:(e,t)=>{console.warn(`Unable to access \`import.meta\0.env.${t.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`)}})}gE||(process.env=yE());function kf(e){let t=new et(e);return{onRequest:async({request:n,next:o,...s})=>{process.env=s.env;let{pathname:a}=new URL(n.url);if(e.assets.has(a))return s.env.ASSETS.fetch(n);let c=t.match(n,{matchNotFound:!0});if(c){Reflect.set(n,Symbol.for("astro.clientAddress"),n.headers.get("cf-connecting-ip")),Reflect.set(n,Symbol.for("runtime"),{...s,waitUntil:p=>{s.waitUntil(p)},name:"cloudflare",next:o,caches,cf:n.cf});let d=await t.render(n,c);if(t.setCookieHeaders)for(let p of t.setCookieHeaders(d))d.headers.append("Set-Cookie",p);return d}return new Response(null,{status:404,statusText:"Not found"})},manifest:e}}var bf=Object.freeze(Object.defineProperty({__proto__:null,createExports:kf},Symbol.toStringTag,{value:"Module"})),wE=()=>Promise.resolve().then(()=>(mf(),hf)),DE=()=>Promise.resolve().then(()=>(yf(),gf)),bE=()=>Promise.resolve().then(()=>(Df(),wf)),vE=new Map([["src/pages/index.astro",wE],["src/pages/posts/index.astro",DE],["src/pages/posts/[slug].astro",bE]]),xf=Object.assign(Uo({adapterName:"@astrojs/cloudflare",routes:[{file:"posts/index.html",links:[],scripts:[],styles:[],routeData:{route:"/posts",type:"page",pattern:"^\\/posts\\/?$",segments:[[{content:"posts",dynamic:!1,spread:!1}]],params:[],component:"src/pages/posts/index.astro",pathname:"/posts",prerender:!0,_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[],styles:[{type:"external",src:"/_astro/index.f01952c0.css"}],routeData:{route:"/",type:"page",pattern:"^\\/$",segments:[],params:[],component:"src/pages/index.astro",pathname:"/",prerender:!1,_meta:{trailingSlash:"ignore"}}}],site:"https://gpiechnik.com/",base:"/",compressHTML:!1,markdown:{drafts:!1,syntaxHighlight:"shiki",shikiConfig:{langs:[],theme:"nord",wrap:!1},remarkPlugins:[],rehypePlugins:[],remarkRehype:{},gfm:!0,smartypants:!0},componentMetadata:[["\0astro:content",{propagation:"in-tree",containsHead:!1}],["/home/figaro/Desktop/gpiechnik-website/src/pages/index.astro",{propagation:"in-tree",containsHead:!0}],["\0@astro-page:src/pages/index@_@astro",{propagation:"in-tree",containsHead:!1}],["\0@astrojs-ssr-virtual-entry",{propagation:"in-tree",containsHead:!1}],["/home/figaro/Desktop/gpiechnik-website/src/pages/posts/[slug].astro",{propagation:"in-tree",containsHead:!0}],["\0@astro-page:src/pages/posts/[slug]@_@astro",{propagation:"in-tree",containsHead:!1}],["/home/figaro/Desktop/gpiechnik-website/src/pages/posts/index.astro",{propagation:"in-tree",containsHead:!0}],["\0@astro-page:src/pages/posts/index@_@astro",{propagation:"in-tree",containsHead:!1}]],renderers:[],clientDirectives:[["idle",'(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'],["load",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'],["media",'(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'],["only",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'],["visible",'(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();']],entryModules:{"\0@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\0@astro-renderers":"renderers.mjs","\0empty-middleware":"_empty-middleware.mjs","\0@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.933dc431.mjs","\0@astro-page:src/pages/posts/index@_@astro":"chunks/index@_@astro.b2c57fd3.mjs","\0@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug_@_@astro.f6fe98b4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md?astroContentCollectionEntry=true":"chunks/951-using-chatgpt-to-write-nuclei-exploits.77381fe6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md?astroContentCollectionEntry=true":"chunks/952-nuclei-writing-exploit.f639c43d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md?astroContentCollectionEntry=true":"chunks/953-standard-deviation-performance-tests.8b2085cf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md?astroContentCollectionEntry=true":"chunks/954-afrog-bug-bounty-pentesters.d4348420.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md?astroContentCollectionEntry=true":"chunks/955-drill-performance-testing-tool.8d1e48f8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md?astroContentCollectionEntry=true":"chunks/956-aws-ec2-instances-basics.b0399f02.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md?astroContentCollectionEntry=true":"chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.c83a9136.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md?astroContentCollectionEntry=true":"chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.2d92719a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md?astroContentCollectionEntry=true":"chunks/959-types-of-deployment.afe644a7.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md?astroContentCollectionEntry=true":"chunks/960-availability-load-balancing-failover-session-persistence.f9ac44e6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md?astroContentCollectionEntry=true":"chunks/961-mitmproxy-and-k6.e7b78dbb.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md?astroContentCollectionEntry=true":"chunks/962-flaky-tests-jmeter.7af23621.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md?astroContentCollectionEntry=true":"chunks/963-debug-requests-k6.ca4e2430.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md?astroContentCollectionEntry=true":"chunks/964-what-are-memory-leaks.9a2c6c69.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md?astroContentCollectionEntry=true":"chunks/965-what-is-browser-based-load-testing.a0b9b531.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md?astroContentCollectionEntry=true":"chunks/966-read-summary-data-in-k6.61d2b2a0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md?astroContentCollectionEntry=true":"chunks/967-fundamental-network-tools.8532f372.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md?astroContentCollectionEntry=true":"chunks/968-crucial-update-for-k6-results-analysis.e76d79a0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md?astroContentCollectionEntry=true":"chunks/969-hacking-embedded-systems-routersploit.baff2c11.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md?astroContentCollectionEntry=true":"chunks/970-syn-flood-attack.b320ce16.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md?astroContentCollectionEntry=true":"chunks/971-dos-ddos-drddos-pod-attack.b220daad.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md?astroContentCollectionEntry=true":"chunks/972-state-ssl-certificates.f702c8f6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md?astroContentCollectionEntry=true":"chunks/973-what-are-polyglots.36116abd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md?astroContentCollectionEntry=true":"chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.36819701.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md?astroContentCollectionEntry=true":"chunks/975-what-is-bind-shell-and-reverse-shell.611dec20.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md?astroContentCollectionEntry=true":"chunks/976-what-is-forward-proxy-and-reverse-proxy.6a90cdf9.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md?astroContentCollectionEntry=true":"chunks/977-what-is-waf-and-ips.e2e17325.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md?astroContentCollectionEntry=true":"chunks/978-metasploit-explained.49f8dc55.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md?astroContentCollectionEntry=true":"chunks/979-content-security-policy-explained.f3940b93.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md?astroContentCollectionEntry=true":"chunks/980-the-harvester-and-h8mail-osint.fe8e1b6d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md?astroContentCollectionEntry=true":"chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.458b7f0d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md?astroContentCollectionEntry=true":"chunks/982-scary-rogue-access-point-attack.b7e35e34.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md?astroContentCollectionEntry=true":"chunks/983-what-is-a-zero-day-exploit.04b019c6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md?astroContentCollectionEntry=true":"chunks/984-what-is-insecure-deserialization.dc27b6a4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md?astroContentCollectionEntry=true":"chunks/985-what-are-cves-common-vulnerabilities-and-exposures.0208864b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md?astroContentCollectionEntry=true":"chunks/986-security-risks-associated-with-using-git.e0418071.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md?astroContentCollectionEntry=true":"chunks/987-cross-site-request-forgery-attack.f488c465.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md?astroContentCollectionEntry=true":"chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.5b4c5045.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md?astroContentCollectionEntry=true":"chunks/989-linux-basics.919808ec.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md?astroContentCollectionEntry=true":"chunks/990-what-is-path-travelsal-vulnerability.5830edab.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md?astroContentCollectionEntry=true":"chunks/991-what-is-the-TCP-IP-model.58df72ee.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md?astroContentCollectionEntry=true":"chunks/992-what-is-SSL-certificate.0b14ac5f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md?astroContentCollectionEntry=true":"chunks/993-DNS-protocol-explained.7a889950.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md?astroContentCollectionEntry=true":"chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.d20edb49.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md?astroContentCollectionEntry=true":"chunks/995-what-is-jwt.67e80f15.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md?astroContentCollectionEntry=true":"chunks/996-x-frame-options-header-explained.4edc7716.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md?astroContentCollectionEntry=true":"chunks/997-network-devices-shodan.d54fe931.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md?astroContentCollectionEntry=true":"chunks/998-docker-explained-for-pentesters.5cce8d77.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md?astroContentCollectionEntry=true":"chunks/999-how-to-optimise-jmeter.dc9bcec3.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md?astroPropagatedAssets":"chunks/951-using-chatgpt-to-write-nuclei-exploits.c052c4a9.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md?astroPropagatedAssets":"chunks/952-nuclei-writing-exploit.71b7445e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md?astroPropagatedAssets":"chunks/953-standard-deviation-performance-tests.675e84cd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md?astroPropagatedAssets":"chunks/954-afrog-bug-bounty-pentesters.0ae40c0e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md?astroPropagatedAssets":"chunks/955-drill-performance-testing-tool.2cd4fc6f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md?astroPropagatedAssets":"chunks/956-aws-ec2-instances-basics.3c241e51.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md?astroPropagatedAssets":"chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.02bbaeed.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md?astroPropagatedAssets":"chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.7847fd74.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md?astroPropagatedAssets":"chunks/959-types-of-deployment.12d60ed8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md?astroPropagatedAssets":"chunks/960-availability-load-balancing-failover-session-persistence.7dd1a1ab.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md?astroPropagatedAssets":"chunks/961-mitmproxy-and-k6.25bfe479.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md?astroPropagatedAssets":"chunks/962-flaky-tests-jmeter.2c59298a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md?astroPropagatedAssets":"chunks/963-debug-requests-k6.4054392d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md?astroPropagatedAssets":"chunks/964-what-are-memory-leaks.64ed5bb1.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md?astroPropagatedAssets":"chunks/965-what-is-browser-based-load-testing.a32eef49.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md?astroPropagatedAssets":"chunks/966-read-summary-data-in-k6.dec9367e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md?astroPropagatedAssets":"chunks/967-fundamental-network-tools.36d65531.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md?astroPropagatedAssets":"chunks/968-crucial-update-for-k6-results-analysis.ba09085a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md?astroPropagatedAssets":"chunks/969-hacking-embedded-systems-routersploit.ca246b39.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md?astroPropagatedAssets":"chunks/970-syn-flood-attack.62841e99.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md?astroPropagatedAssets":"chunks/971-dos-ddos-drddos-pod-attack.5dd6a019.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md?astroPropagatedAssets":"chunks/972-state-ssl-certificates.0e4476bb.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md?astroPropagatedAssets":"chunks/973-what-are-polyglots.e9f2a14a.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md?astroPropagatedAssets":"chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.fa5777ad.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md?astroPropagatedAssets":"chunks/975-what-is-bind-shell-and-reverse-shell.bc5f759b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md?astroPropagatedAssets":"chunks/976-what-is-forward-proxy-and-reverse-proxy.fd3a2112.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md?astroPropagatedAssets":"chunks/977-what-is-waf-and-ips.852988a0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md?astroPropagatedAssets":"chunks/978-metasploit-explained.9c1ff8ca.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md?astroPropagatedAssets":"chunks/979-content-security-policy-explained.a1a307aa.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md?astroPropagatedAssets":"chunks/980-the-harvester-and-h8mail-osint.51d56880.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md?astroPropagatedAssets":"chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.967d3314.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md?astroPropagatedAssets":"chunks/982-scary-rogue-access-point-attack.bf3e8e2e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md?astroPropagatedAssets":"chunks/983-what-is-a-zero-day-exploit.d8991f02.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md?astroPropagatedAssets":"chunks/984-what-is-insecure-deserialization.416f83ca.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md?astroPropagatedAssets":"chunks/985-what-are-cves-common-vulnerabilities-and-exposures.635c4d4e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md?astroPropagatedAssets":"chunks/986-security-risks-associated-with-using-git.5e6a5bc8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md?astroPropagatedAssets":"chunks/987-cross-site-request-forgery-attack.562efb13.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md?astroPropagatedAssets":"chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.1939228e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md?astroPropagatedAssets":"chunks/989-linux-basics.23585ce2.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md?astroPropagatedAssets":"chunks/990-what-is-path-travelsal-vulnerability.03b774cc.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md?astroPropagatedAssets":"chunks/991-what-is-the-TCP-IP-model.92ddef4f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md?astroPropagatedAssets":"chunks/992-what-is-SSL-certificate.b223d99b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md?astroPropagatedAssets":"chunks/993-DNS-protocol-explained.2cc93786.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md?astroPropagatedAssets":"chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.144b8a1c.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md?astroPropagatedAssets":"chunks/995-what-is-jwt.c26479c1.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md?astroPropagatedAssets":"chunks/996-x-frame-options-header-explained.fb9576fc.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md?astroPropagatedAssets":"chunks/997-network-devices-shodan.90e8f0f0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md?astroPropagatedAssets":"chunks/998-docker-explained-for-pentesters.49280982.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md?astroPropagatedAssets":"chunks/999-how-to-optimise-jmeter.34f7c89f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/951-using-chatgpt-to-write-nuclei-exploits.md":"chunks/951-using-chatgpt-to-write-nuclei-exploits.c1841228.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/952-nuclei-writing-exploit.md":"chunks/952-nuclei-writing-exploit.a55ff0af.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/953-standard-deviation-performance-tests.md":"chunks/953-standard-deviation-performance-tests.5d57dda8.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/954-afrog-bug-bounty-pentesters.md":"chunks/954-afrog-bug-bounty-pentesters.a91fa90e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/955-drill-performance-testing-tool.md":"chunks/955-drill-performance-testing-tool.3d5958bf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/956-aws-ec2-instances-basics.md":"chunks/956-aws-ec2-instances-basics.a0bb727d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.md":"chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.80c67b86.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.md":"chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.9c43eef6.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/959-types-of-deployment.md":"chunks/959-types-of-deployment.30cbfc60.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/960-availability-load-balancing-failover-session-persistence.md":"chunks/960-availability-load-balancing-failover-session-persistence.fa268a42.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/961-mitmproxy-and-k6.md":"chunks/961-mitmproxy-and-k6.ee8a0789.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/962-flaky-tests-jmeter.md":"chunks/962-flaky-tests-jmeter.88e882b1.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/963-debug-requests-k6.md":"chunks/963-debug-requests-k6.c8494e7c.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/964-what-are-memory-leaks.md":"chunks/964-what-are-memory-leaks.945adf30.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/965-what-is-browser-based-load-testing.md":"chunks/965-what-is-browser-based-load-testing.e2de5280.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/966-read-summary-data-in-k6.md":"chunks/966-read-summary-data-in-k6.b06f768e.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/967-fundamental-network-tools.md":"chunks/967-fundamental-network-tools.2759baaf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/968-crucial-update-for-k6-results-analysis.md":"chunks/968-crucial-update-for-k6-results-analysis.4a5f6313.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/969-hacking-embedded-systems-routersploit.md":"chunks/969-hacking-embedded-systems-routersploit.671c8dbf.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/970-syn-flood-attack.md":"chunks/970-syn-flood-attack.867ef3ca.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/971-dos-ddos-drddos-pod-attack.md":"chunks/971-dos-ddos-drddos-pod-attack.53e3b0dd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/972-state-ssl-certificates.md":"chunks/972-state-ssl-certificates.8f9a17cd.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/973-what-are-polyglots.md":"chunks/973-what-are-polyglots.907ad3d5.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/974-ldap-protocol-basics-and-the-ldap-injection-attack.md":"chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.f08b0a0f.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/975-what-is-bind-shell-and-reverse-shell.md":"chunks/975-what-is-bind-shell-and-reverse-shell.d146b1a2.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/976-what-is-forward-proxy-and-reverse-proxy.md":"chunks/976-what-is-forward-proxy-and-reverse-proxy.21db6b44.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/977-what-is-waf-and-ips.md":"chunks/977-what-is-waf-and-ips.d44d8917.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/978-metasploit-explained.md":"chunks/978-metasploit-explained.1e155bc7.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/979-content-security-policy-explained.md":"chunks/979-content-security-policy-explained.42676699.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/980-the-harvester-and-h8mail-osint.md":"chunks/980-the-harvester-and-h8mail-osint.1fc095a4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.md":"chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.d154c1f2.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/982-scary-rogue-access-point-attack.md":"chunks/982-scary-rogue-access-point-attack.29ad346b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/983-what-is-a-zero-day-exploit.md":"chunks/983-what-is-a-zero-day-exploit.b15cadb3.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/984-what-is-insecure-deserialization.md":"chunks/984-what-is-insecure-deserialization.989b65eb.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/985-what-are-cves-common-vulnerabilities-and-exposures.md":"chunks/985-what-are-cves-common-vulnerabilities-and-exposures.e68c3615.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/986-security-risks-associated-with-using-git.md":"chunks/986-security-risks-associated-with-using-git.10dfef03.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/987-cross-site-request-forgery-attack.md":"chunks/987-cross-site-request-forgery-attack.1ccfa12d.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/988-cross-origin-resource-sharing-cors-how-does-it-work.md":"chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.e6d1dd4b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/989-linux-basics.md":"chunks/989-linux-basics.9d1d9632.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/990-what-is-path-travelsal-vulnerability.md":"chunks/990-what-is-path-travelsal-vulnerability.2cc955e0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/991-what-is-the-TCP-IP-model.md":"chunks/991-what-is-the-TCP-IP-model.1660a48b.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/992-what-is-SSL-certificate.md":"chunks/992-what-is-SSL-certificate.49f3b5d0.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/993-DNS-protocol-explained.md":"chunks/993-DNS-protocol-explained.e96b03b4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/994-Insecure-direct-object-reference-IDOR-vulnerability-types.md":"chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.4abb1a90.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/995-what-is-jwt.md":"chunks/995-what-is-jwt.5a7e0b00.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/996-x-frame-options-header-explained.md":"chunks/996-x-frame-options-header-explained.58096ee7.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/997-network-devices-shodan.md":"chunks/997-network-devices-shodan.c3dbd0ea.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/998-docker-explained-for-pentesters.md":"chunks/998-docker-explained-for-pentesters.d13214a4.mjs","/home/figaro/Desktop/gpiechnik-website/src/content/posts/999-how-to-optimise-jmeter.md":"chunks/999-how-to-optimise-jmeter.703d1c05.mjs","astro:scripts/before-hydration.js":""},assets:["/_astro/open-sans-cyrillic-400-normal.624b7132.woff2","/_astro/open-sans-greek-400-normal.7bd5dafc.woff2","/_astro/open-sans-hebrew-400-normal.100ac33d.woff2","/_astro/open-sans-vietnamese-400-normal.62829378.woff2","/_astro/open-sans-latin-ext-400-normal.140ef34d.woff2","/_astro/open-sans-cyrillic-ext-400-normal.bbbef4da.woff2","/_astro/open-sans-latin-400-normal.b34551ae.woff2","/_astro/open-sans-cyrillic-400-normal.051a6129.woff","/_astro/open-sans-greek-400-normal.2745841d.woff","/_astro/open-sans-hebrew-400-normal.fee21563.woff","/_astro/open-sans-vietnamese-400-normal.e8b16384.woff","/_astro/open-sans-latin-ext-400-normal.81bc88c3.woff","/_astro/open-sans-cyrillic-ext-400-normal.bb75dc3e.woff","/_astro/open-sans-latin-400-normal.8030191f.woff","/_astro/index.f01952c0.css","/favicon.svg","/grzegorz-piechnik-logo.png","/grzegorz-piechnik-photo.webp","/profile.webp","/$server_build/_empty-middleware.mjs","/$server_build/renderers.mjs","/$server_build/_astro/index.f01952c0.css","/$server_build/_astro/open-sans-cyrillic-400-normal.051a6129.woff","/$server_build/_astro/open-sans-cyrillic-400-normal.624b7132.woff2","/$server_build/_astro/open-sans-cyrillic-ext-400-normal.bb75dc3e.woff","/$server_build/_astro/open-sans-cyrillic-ext-400-normal.bbbef4da.woff2","/$server_build/_astro/open-sans-greek-400-normal.2745841d.woff","/$server_build/_astro/open-sans-greek-400-normal.7bd5dafc.woff2","/$server_build/_astro/open-sans-hebrew-400-normal.100ac33d.woff2","/$server_build/_astro/open-sans-hebrew-400-normal.fee21563.woff","/$server_build/_astro/open-sans-latin-400-normal.8030191f.woff","/$server_build/_astro/open-sans-latin-400-normal.b34551ae.woff2","/$server_build/_astro/open-sans-latin-ext-400-normal.140ef34d.woff2","/$server_build/_astro/open-sans-latin-ext-400-normal.81bc88c3.woff","/$server_build/_astro/open-sans-vietnamese-400-normal.62829378.woff2","/$server_build/_astro/open-sans-vietnamese-400-normal.e8b16384.woff","/$server_build/chunks/951-using-chatgpt-to-write-nuclei-exploits.77381fe6.mjs","/$server_build/chunks/951-using-chatgpt-to-write-nuclei-exploits.c052c4a9.mjs","/$server_build/chunks/951-using-chatgpt-to-write-nuclei-exploits.c1841228.mjs","/$server_build/chunks/952-nuclei-writing-exploit.71b7445e.mjs","/$server_build/chunks/952-nuclei-writing-exploit.a55ff0af.mjs","/$server_build/chunks/952-nuclei-writing-exploit.f639c43d.mjs","/$server_build/chunks/953-standard-deviation-performance-tests.5d57dda8.mjs","/$server_build/chunks/953-standard-deviation-performance-tests.675e84cd.mjs","/$server_build/chunks/953-standard-deviation-performance-tests.8b2085cf.mjs","/$server_build/chunks/954-afrog-bug-bounty-pentesters.0ae40c0e.mjs","/$server_build/chunks/954-afrog-bug-bounty-pentesters.a91fa90e.mjs","/$server_build/chunks/954-afrog-bug-bounty-pentesters.d4348420.mjs","/$server_build/chunks/955-drill-performance-testing-tool.2cd4fc6f.mjs","/$server_build/chunks/955-drill-performance-testing-tool.3d5958bf.mjs","/$server_build/chunks/955-drill-performance-testing-tool.8d1e48f8.mjs","/$server_build/chunks/956-aws-ec2-instances-basics.3c241e51.mjs","/$server_build/chunks/956-aws-ec2-instances-basics.a0bb727d.mjs","/$server_build/chunks/956-aws-ec2-instances-basics.b0399f02.mjs","/$server_build/chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.02bbaeed.mjs","/$server_build/chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.80c67b86.mjs","/$server_build/chunks/957-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-two.c83a9136.mjs","/$server_build/chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.2d92719a.mjs","/$server_build/chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.7847fd74.mjs","/$server_build/chunks/958-what-is-apache-kafka-and-how-to-perform-performance-tests-on-it-one.9c43eef6.mjs","/$server_build/chunks/959-types-of-deployment.12d60ed8.mjs","/$server_build/chunks/959-types-of-deployment.30cbfc60.mjs","/$server_build/chunks/959-types-of-deployment.afe644a7.mjs","/$server_build/chunks/960-availability-load-balancing-failover-session-persistence.7dd1a1ab.mjs","/$server_build/chunks/960-availability-load-balancing-failover-session-persistence.f9ac44e6.mjs","/$server_build/chunks/960-availability-load-balancing-failover-session-persistence.fa268a42.mjs","/$server_build/chunks/961-mitmproxy-and-k6.25bfe479.mjs","/$server_build/chunks/961-mitmproxy-and-k6.e7b78dbb.mjs","/$server_build/chunks/961-mitmproxy-and-k6.ee8a0789.mjs","/$server_build/chunks/962-flaky-tests-jmeter.2c59298a.mjs","/$server_build/chunks/962-flaky-tests-jmeter.7af23621.mjs","/$server_build/chunks/962-flaky-tests-jmeter.88e882b1.mjs","/$server_build/chunks/963-debug-requests-k6.4054392d.mjs","/$server_build/chunks/963-debug-requests-k6.c8494e7c.mjs","/$server_build/chunks/963-debug-requests-k6.ca4e2430.mjs","/$server_build/chunks/964-what-are-memory-leaks.64ed5bb1.mjs","/$server_build/chunks/964-what-are-memory-leaks.945adf30.mjs","/$server_build/chunks/964-what-are-memory-leaks.9a2c6c69.mjs","/$server_build/chunks/965-what-is-browser-based-load-testing.a0b9b531.mjs","/$server_build/chunks/965-what-is-browser-based-load-testing.a32eef49.mjs","/$server_build/chunks/965-what-is-browser-based-load-testing.e2de5280.mjs","/$server_build/chunks/966-read-summary-data-in-k6.61d2b2a0.mjs","/$server_build/chunks/966-read-summary-data-in-k6.b06f768e.mjs","/$server_build/chunks/966-read-summary-data-in-k6.dec9367e.mjs","/$server_build/chunks/967-fundamental-network-tools.2759baaf.mjs","/$server_build/chunks/967-fundamental-network-tools.36d65531.mjs","/$server_build/chunks/967-fundamental-network-tools.8532f372.mjs","/$server_build/chunks/968-crucial-update-for-k6-results-analysis.4a5f6313.mjs","/$server_build/chunks/968-crucial-update-for-k6-results-analysis.ba09085a.mjs","/$server_build/chunks/968-crucial-update-for-k6-results-analysis.e76d79a0.mjs","/$server_build/chunks/969-hacking-embedded-systems-routersploit.671c8dbf.mjs","/$server_build/chunks/969-hacking-embedded-systems-routersploit.baff2c11.mjs","/$server_build/chunks/969-hacking-embedded-systems-routersploit.ca246b39.mjs","/$server_build/chunks/970-syn-flood-attack.62841e99.mjs","/$server_build/chunks/970-syn-flood-attack.867ef3ca.mjs","/$server_build/chunks/970-syn-flood-attack.b320ce16.mjs","/$server_build/chunks/971-dos-ddos-drddos-pod-attack.53e3b0dd.mjs","/$server_build/chunks/971-dos-ddos-drddos-pod-attack.5dd6a019.mjs","/$server_build/chunks/971-dos-ddos-drddos-pod-attack.b220daad.mjs","/$server_build/chunks/972-state-ssl-certificates.0e4476bb.mjs","/$server_build/chunks/972-state-ssl-certificates.8f9a17cd.mjs","/$server_build/chunks/972-state-ssl-certificates.f702c8f6.mjs","/$server_build/chunks/973-what-are-polyglots.36116abd.mjs","/$server_build/chunks/973-what-are-polyglots.907ad3d5.mjs","/$server_build/chunks/973-what-are-polyglots.e9f2a14a.mjs","/$server_build/chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.36819701.mjs","/$server_build/chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.f08b0a0f.mjs","/$server_build/chunks/974-ldap-protocol-basics-and-the-ldap-injection-attack.fa5777ad.mjs","/$server_build/chunks/975-what-is-bind-shell-and-reverse-shell.611dec20.mjs","/$server_build/chunks/975-what-is-bind-shell-and-reverse-shell.bc5f759b.mjs","/$server_build/chunks/975-what-is-bind-shell-and-reverse-shell.d146b1a2.mjs","/$server_build/chunks/976-what-is-forward-proxy-and-reverse-proxy.21db6b44.mjs","/$server_build/chunks/976-what-is-forward-proxy-and-reverse-proxy.6a90cdf9.mjs","/$server_build/chunks/976-what-is-forward-proxy-and-reverse-proxy.fd3a2112.mjs","/$server_build/chunks/977-what-is-waf-and-ips.852988a0.mjs","/$server_build/chunks/977-what-is-waf-and-ips.d44d8917.mjs","/$server_build/chunks/977-what-is-waf-and-ips.e2e17325.mjs","/$server_build/chunks/978-metasploit-explained.1e155bc7.mjs","/$server_build/chunks/978-metasploit-explained.49f8dc55.mjs","/$server_build/chunks/978-metasploit-explained.9c1ff8ca.mjs","/$server_build/chunks/979-content-security-policy-explained.42676699.mjs","/$server_build/chunks/979-content-security-policy-explained.a1a307aa.mjs","/$server_build/chunks/979-content-security-policy-explained.f3940b93.mjs","/$server_build/chunks/980-the-harvester-and-h8mail-osint.1fc095a4.mjs","/$server_build/chunks/980-the-harvester-and-h8mail-osint.51d56880.mjs","/$server_build/chunks/980-the-harvester-and-h8mail-osint.fe8e1b6d.mjs","/$server_build/chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.458b7f0d.mjs","/$server_build/chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.967d3314.mjs","/$server_build/chunks/981-scanning-ports-and-finding-network-vulnerabilities-with-nmap.d154c1f2.mjs","/$server_build/chunks/982-scary-rogue-access-point-attack.29ad346b.mjs","/$server_build/chunks/982-scary-rogue-access-point-attack.b7e35e34.mjs","/$server_build/chunks/982-scary-rogue-access-point-attack.bf3e8e2e.mjs","/$server_build/chunks/983-what-is-a-zero-day-exploit.04b019c6.mjs","/$server_build/chunks/983-what-is-a-zero-day-exploit.b15cadb3.mjs","/$server_build/chunks/983-what-is-a-zero-day-exploit.d8991f02.mjs","/$server_build/chunks/984-what-is-insecure-deserialization.416f83ca.mjs","/$server_build/chunks/984-what-is-insecure-deserialization.989b65eb.mjs","/$server_build/chunks/984-what-is-insecure-deserialization.dc27b6a4.mjs","/$server_build/chunks/985-what-are-cves-common-vulnerabilities-and-exposures.0208864b.mjs","/$server_build/chunks/985-what-are-cves-common-vulnerabilities-and-exposures.635c4d4e.mjs","/$server_build/chunks/985-what-are-cves-common-vulnerabilities-and-exposures.e68c3615.mjs","/$server_build/chunks/986-security-risks-associated-with-using-git.10dfef03.mjs","/$server_build/chunks/986-security-risks-associated-with-using-git.5e6a5bc8.mjs","/$server_build/chunks/986-security-risks-associated-with-using-git.e0418071.mjs","/$server_build/chunks/987-cross-site-request-forgery-attack.1ccfa12d.mjs","/$server_build/chunks/987-cross-site-request-forgery-attack.562efb13.mjs","/$server_build/chunks/987-cross-site-request-forgery-attack.f488c465.mjs","/$server_build/chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.1939228e.mjs","/$server_build/chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.5b4c5045.mjs","/$server_build/chunks/988-cross-origin-resource-sharing-cors-how-does-it-work.e6d1dd4b.mjs","/$server_build/chunks/989-linux-basics.23585ce2.mjs","/$server_build/chunks/989-linux-basics.919808ec.mjs","/$server_build/chunks/989-linux-basics.9d1d9632.mjs","/$server_build/chunks/990-what-is-path-travelsal-vulnerability.03b774cc.mjs","/$server_build/chunks/990-what-is-path-travelsal-vulnerability.2cc955e0.mjs","/$server_build/chunks/990-what-is-path-travelsal-vulnerability.5830edab.mjs","/$server_build/chunks/991-what-is-the-TCP-IP-model.1660a48b.mjs","/$server_build/chunks/991-what-is-the-TCP-IP-model.58df72ee.mjs","/$server_build/chunks/991-what-is-the-TCP-IP-model.92ddef4f.mjs","/$server_build/chunks/992-what-is-SSL-certificate.0b14ac5f.mjs","/$server_build/chunks/992-what-is-SSL-certificate.49f3b5d0.mjs","/$server_build/chunks/992-what-is-SSL-certificate.b223d99b.mjs","/$server_build/chunks/993-DNS-protocol-explained.2cc93786.mjs","/$server_build/chunks/993-DNS-protocol-explained.7a889950.mjs","/$server_build/chunks/993-DNS-protocol-explained.e96b03b4.mjs","/$server_build/chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.144b8a1c.mjs","/$server_build/chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.4abb1a90.mjs","/$server_build/chunks/994-Insecure-direct-object-reference-IDOR-vulnerability-types.d20edb49.mjs","/$server_build/chunks/995-what-is-jwt.5a7e0b00.mjs","/$server_build/chunks/995-what-is-jwt.67e80f15.mjs","/$server_build/chunks/995-what-is-jwt.c26479c1.mjs","/$server_build/chunks/996-x-frame-options-header-explained.4edc7716.mjs","/$server_build/chunks/996-x-frame-options-header-explained.58096ee7.mjs","/$server_build/chunks/996-x-frame-options-header-explained.fb9576fc.mjs","/$server_build/chunks/997-network-devices-shodan.90e8f0f0.mjs","/$server_build/chunks/997-network-devices-shodan.c3dbd0ea.mjs","/$server_build/chunks/997-network-devices-shodan.d54fe931.mjs","/$server_build/chunks/998-docker-explained-for-pentesters.49280982.mjs","/$server_build/chunks/998-docker-explained-for-pentesters.5cce8d77.mjs","/$server_build/chunks/998-docker-explained-for-pentesters.d13214a4.mjs","/$server_build/chunks/999-how-to-optimise-jmeter.34f7c89f.mjs","/$server_build/chunks/999-how-to-optimise-jmeter.703d1c05.mjs","/$server_build/chunks/999-how-to-optimise-jmeter.dc9bcec3.mjs","/$server_build/chunks/_slug_@_@astro.f6fe98b4.mjs","/$server_build/chunks/astro.edb5039d.mjs","/$server_build/chunks/index@_@astro.933dc431.mjs","/$server_build/chunks/index@_@astro.b2c57fd3.mjs","/$server_build/chunks/prerender.aed9bd03.mjs","/$server_build/chunks/pages/index.astro.b4c5e3cb.mjs","/posts/index.html"]}),{pageMap:vE,renderers:de}),kE=void 0,Sf=kf(xf),Aj=Sf.onRequest,Fj=Sf.manifest,vf="start";vf in bf&&bf[vf](xf,kE);export{Fj as manifest,Aj as onRequest,vE as pageMap};
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
