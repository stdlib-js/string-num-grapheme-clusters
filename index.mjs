// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=r.isPrimitive,i=t,n=s;var m=function(r){var t,s,m;if(!e(r))throw new TypeError(n("0hJ3N",r));for(t=0,m=i(r,s=0);-1!==m;)t+=1,m=i(r,s=m);return s<r.length&&(t+=1),t};export{m as default};
//# sourceMappingURL=index.mjs.map
