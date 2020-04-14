const fs = require('fs');
const chromeFile = 'node_modules/selenium-webdriver/chrome.js';
fs.readFile(chromeFile, 'utf8', function (err, data) {
  if (err)
    throw err;

  const result = data.replace(/new http.HttpClient\(url\)/g,
    "new http.HttpClient(url, new (require('http').Agent)({ keepAlive: true }))");
  console.log(`Patching ${chromeFile}`);
  fs.writeFileSync(chromeFile, result, 'utf8');
});
