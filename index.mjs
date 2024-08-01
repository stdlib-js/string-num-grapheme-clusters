// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e){var i,n,m;if(!r(e))throw new TypeError(s("1Ov3B",e));for(i=0,m=t(e,n=0);-1!==m;)i+=1,m=t(e,n=m);return n<e.length&&(i+=1),i}export{e as default};
//# sourceMappingURL=index.mjs.map
