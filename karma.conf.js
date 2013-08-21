module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['dart-unittest'],

    // list of files / patterns to load in the browser
    // all tests must be 'included', but all other libraries must be 'served' and
    // optionally 'watched' only.
    files: [
      'test/list_of_expressions',
      'test/*.dart',
      'test/directives/*.dart',
      'test/tools/*_spec.dart',
      {pattern: '**/*.dart', watched: true, included: false, served: true},
      'packages/browser/dart.js',
      'packages/browser/interop.js'
    ],

    autoWatch: false,

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    plugins: [
      'karma-dart',
      'karma-chrome-launcher',
      'karma-script-launcher',
      'karma-junit-reporter',
      '../../../karma-parser-generator'
    ],

    preprocessors: {
      'test/parser_spec.dart': ['parser-generator']
    },

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
