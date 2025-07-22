import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  // ES Module build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      resolve({ extensions, preferBuiltins: false }),
      commonjs(),
      json(),
      babel({
        extensions,
        babelHelpers: 'runtime',
        include: ['src/**/*'],
        presets: [
          ['@babel/preset-env', { targets: { node: '12' } }],
          '@babel/preset-typescript'
        ],
        plugins: [
          ['@babel/plugin-transform-runtime', { useESModules: true }]
        ]
      })
    ],
    external: [
      'crypto-js',
      'jsencrypt',
      'uuid',
      '@babel/runtime'
    ]
  },
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      resolve({ extensions, preferBuiltins: false }),
      commonjs(),
      json(),
      babel({
        extensions,
        babelHelpers: 'runtime',
        include: ['src/**/*'],
        presets: [
          ['@babel/preset-env', { targets: { node: '12' } }],
          '@babel/preset-typescript'
        ],
        plugins: [
          ['@babel/plugin-transform-runtime', { useESModules: false }]
        ]
      })
    ],
    external: [
      'crypto-js',
      'jsencrypt',
      'uuid',
      '@babel/runtime'
    ]
  },
  // Minified UMD build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'ATMDeviceAPI',
      sourcemap: true
    },
    plugins: [
      resolve({ extensions, preferBuiltins: false, browser: true }),
      commonjs(),
      json(),
      babel({
        extensions,
        babelHelpers: 'bundled',
        include: ['src/**/*'],
        presets: [
          ['@babel/preset-env', { targets: { browsers: ['defaults'] } }],
          '@babel/preset-typescript'
        ]
      }),
      terser()
    ]
  }
];
