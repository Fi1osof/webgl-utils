# webgl-utils.js

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Origin from https://webglfundamentals.org/

## Install

### npm

```
npm install webgl-utils.js
```

### yarn

```
yarn add webgl-utils.js
```

## How to use
```
// Quick example
import * as webglUtils from 'webgl-utils.js';

// ...

// setup GLSL program
var program = webglUtils.createProgramFromScripts(gl, ["vertex-shader-2d", "fragment-shader-2d"]);
```

OR
```
// Quick example
import { createProgramFromScripts } from 'webgl-utils.js';

// ...

// setup GLSL program
var program = createProgramFromScripts(gl, ["vertex-shader-2d", "fragment-shader-2d"]);
```

## Methods
```
✔ createAugmentedTypedArray
✔ createAttribsFromArrays
✔ createBuffersFromArrays
✔ createBufferInfoFromArrays
✔ createAttributeSetters
✔ createProgram
✔ createProgramFromScripts
✔ createProgramFromSources
✔ createProgramInfo
✔ createUniformSetters
✔ createVAOAndSetAttributes
✔ createVAOFromBufferInfo
✔ drawBufferInfo
✔ drawObjectList
✔ glEnumToString
✔ getExtensionWithKnownPrefixes
✔ loadShader
✔ resizeCanvasToDisplaySize
✔ setAttributes
✔ setBuffersAndAttributes
✔ setUniforms
```


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
