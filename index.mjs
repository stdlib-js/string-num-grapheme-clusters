// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){var i,n,d;if(!t(e))throw new TypeError(s("invalid argument. Must provide a string. Value: `%s`.",e));for(i=0,d=r(e,n=0);-1!==d;)i+=1,d=r(e,n=d);return n<e.length&&(i+=1),i}export{e as default};
//# sourceMappingURL=index.mjs.map
