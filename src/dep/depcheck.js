var path = require('path');
var depcheck = require('depcheck');
// node src/dep/depcheck.js
// https://www.npmjs.com/package/depcheck
// https://libraries.io/github/defconcepts/depcheck
var options = {
    ignoreBinPackage: false, // ignore the packages with bin entry
    ignoreDirs: [ // folder with these names will be ignored
        'lib',
        'dist',
        'scratch',
        'src/dep'
    ],
    ignoreMatches: [ // ignore dependencies that matches these globs
        'grunt-*',
        'resolve'
    ],
    parsers: { // the target parsers
        '*.js': depcheck.parser.es6,
        '*.jsx': depcheck.parser.jsx
    },
    detectors: [ // the target detectors
        depcheck.detector.requireCallExpression,
        depcheck.detector.importDeclaration
    ],
    specials: [ // the target special parsers
        depcheck.special.tslint,
        depcheck.special.grunt
    ]
};

depcheck('../../', options, function (unused) {
    console.log(unused.dependencies); // an array containing the unused dependencies
   // console.log(unused.devDependencies); // an array containing the unused devDependencies
    // console.log(unused.invalidFiles); // files that cannot access or parse
    // console.log(unused.invalidDirs); // directories that cannot access
});