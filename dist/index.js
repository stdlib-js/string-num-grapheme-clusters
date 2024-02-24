"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(h,u){
var v=require('@stdlib/assert-is-string/dist').isPrimitive,t=require('@stdlib/string-next-grapheme-cluster-break/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e){var r,i,a;if(!v(e))throw new TypeError(o('1Ov3B',e));for(r=0,i=0,a=t(e,i);a!==-1;)r+=1,i=a,a=t(e,i);return i<e.length&&(r+=1),r}u.exports=m
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
