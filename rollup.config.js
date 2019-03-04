import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
// import 'jquery';

export default {
    input: __dirname + '/lib/html-online.user.js',
    output: {
        file: __dirname + '/scratch/compiled/html-online.user.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        // banner: '(function() {\n  \'use strict\';',
        // footer: '})();',
        name: 'plugin',
        sourcemap: true,
        globals: {
            jquery: '$',
            // window: 'window',
        }
    },
    external: ['jquery', '$'],
    // external: ['$'],
    plugins: [
        resolve(), // tells Rollup how to find date-fns in node_modules
        // production && uglify() // minify, but only in production
        commonJS({ // converts date-fns to ES modules
            sourceMap: false,
            include: 'node_modules/**',
            // exclude: ['node_modules/jquery/**'],  // Default: undefined
            // ignoreGlobal: true,
        })
    ]
    // sourceMap: 'inline',
};
