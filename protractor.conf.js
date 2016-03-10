var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    print: function () {}
  },
  specs: ['test/*-spec.js'],
  onPrepare: function () {
    require('babel-core/register');
    jasmine.getEnv().addReporter(new SpecReporter());
  },
  capabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  }
};
