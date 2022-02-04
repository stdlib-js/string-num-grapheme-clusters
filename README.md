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

# numGraphemeClusters

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the number of [grapheme clusters][unicode-text-segmentation] in a string.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-num-grapheme-clusters
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var numGraphemeClusters = require( '@stdlib/string-num-grapheme-clusters' );
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

```javascript
var numGraphemeClusters = require( '@stdlib/string-num-grapheme-clusters' );

var str = numGraphemeClusters( 'last man standing' );
// returns 17

str = numGraphemeClusters( '六书/六書' );
// returns 5

str = numGraphemeClusters( 'अनुच्छेद' );
// returns 5

str = numGraphemeClusters( '🌷' );
// returns 1
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-num-grapheme-clusters
```

</section>

<section class="usage">

### Usage

```text
Usage: num-grapheme-clusters [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -l,    --lines               Analyze individual lines.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ num-grapheme-clusters beep
4
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep\nboop🌷' | num-grapheme-clusters
10
```

```bash
$ echo -n 'beep\nboop🌷' | num-grapheme-clusters -l
4
5
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/next-grapheme-cluster-break`][@stdlib/string/next-grapheme-cluster-break]</span><span class="delimiter">: </span><span class="description">return the next extended grapheme cluster break in a string after a specified position.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-num-grapheme-clusters.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-num-grapheme-clusters

[test-image]: https://github.com/stdlib-js/string-num-grapheme-clusters/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-num-grapheme-clusters/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-num-grapheme-clusters?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-num-grapheme-clusters.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-num-grapheme-clusters/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/deno
[umd-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/umd
[esm-url]: https://github.com/stdlib-js/string-num-grapheme-clusters/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-num-grapheme-clusters/main/LICENSE

[unicode-text-segmentation]: http://www.unicode.org/reports/tr29/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

[@stdlib/string/next-grapheme-cluster-break]: https://github.com/stdlib-js/string-next-grapheme-cluster-break

<!-- </related-links> -->

</section>

<!-- /.links -->
