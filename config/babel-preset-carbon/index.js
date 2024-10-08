/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = () => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: ['extends browserslist-config-carbon'],
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      'dev-expression',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-export-namespace-from',
      '@babel/plugin-transform-react-constant-elements',
    ],
  };
};
