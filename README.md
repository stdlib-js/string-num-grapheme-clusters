<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# numGraphemeClusters

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the number of [grapheme clusters][unicode-text-segmentation] in a string.



<section class="usage">

## Usage

```javascript
import numGraphemeClusters from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@esm/index.mjs';
```

#### numGraphemeClusters( str )

Returns the number of [grapheme clusters][unicode-text-segmentation] in a `string`.

```javascript
var out = numGraphemeClusters( 'last man standing' );
// returns 17

out = numGraphemeClusters( 'Hidden Treasures' );
// returns 16
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import numGraphemeClusters from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-num-grapheme-clusters@esm/index.mjs';

var str = numGraphemeClusters( 'last man standing' );
// returns 17

str = numGraphemeClusters( '六书/六書' );
// returns 5

str = numGraphemeClusters( 'अनुच्छेद' );
// returns 5

str = numGraphemeClusters( '🌷' );
// returns 1

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-next-grapheme-cluster-break`][@stdlib/string/next-grapheme-cluster-break]</span><span class="delimiter">: </span><span class="description">return the next extended grapheme cluster break in a string after a specified position.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-num-grapheme-clusters.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-num-grapheme-clusters

[test-image]: https://github.com/stdlib-js/string-num-grapheme-clusters/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-num-grapheme-clusters/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-num-grapheme-clusters?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-num-grapheme-clusters.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-num-grapheme-clusters/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-num-grapheme-clusters#cli
[cli-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/cli
[@stdlib/string-num-grapheme-clusters]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-num-grapheme-clusters/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-num-grapheme-clusters/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-num-grapheme-clusters/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-num-grapheme-clusters/main/LICENSE

[unicode-text-segmentation]: http://www.unicode.org/reports/tr29/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

[@stdlib/string/next-grapheme-cluster-break]: https://github.com/stdlib-js/string-next-grapheme-cluster-break/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
