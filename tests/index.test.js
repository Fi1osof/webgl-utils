import expect from 'expect'
import * as m3 from 'src/index'

const functions = [
  'createAugmentedTypedArray',
  'createAttribsFromArrays',
  'createBuffersFromArrays',
  'createBufferInfoFromArrays',
  'createAttributeSetters',
  'createProgram',
  'createProgramFromScripts',
  'createProgramFromSources',
  'createProgramInfo',
  'createUniformSetters',
  'createVAOAndSetAttributes',
  'createVAOFromBufferInfo',
  'drawBufferInfo',
  'drawObjectList',
  'glEnumToString',
  'getExtensionWithKnownPrefixes',
  'resizeCanvasToDisplaySize',
  'setAttributes',
  'setBuffersAndAttributes',
  'setUniforms',
];

describe('Check all required functions', () => {

  functions.map(name => {
    it(`Check function ${name} exist`, () => {
      expect(!!m3[name]).toBe(true);
    })
  });

})
