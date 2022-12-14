// import dotenv from 'dotenv';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js';
export default {
  input: './src/HelloWorld.js',
  output: {
    file: outputFile,
    format: 'cjs',
    external: (id) => /^react|styled-jsx/.test(id),
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
};
