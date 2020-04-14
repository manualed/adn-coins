// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
 
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
     './src/specs/coins.spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    // 'chromeOptions': {
    //   args:[
    //     "--headless"
    //   ]
    // }
  },
  directConnect: false,
  baseUrl: 'https://localhost:4200/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 40000,
    print: function() {
      console.log('testing...');
    }
  },
  onPrepare() {
    //browser.driver.manage().window().maximize();
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};