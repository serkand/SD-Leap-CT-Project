// An example configuration file.
exports.config = {

	// Directly Connect to Browser (will ignore seleniumAddress)
	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
	'browserName': 'chrome'
	},

	// Multi Capabilities to test across browsers
	//multiCapabilities: [{
	//  browserName: 'firefox'
	//}, {
	//  browserName: 'chrome'
	//}],

	// Framework to use. Jasmine is recommended.
	framework: 'jasmine',

	// Selenium Server address
	seleniumAddress: 'http://localhost:4444/wd/hub',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	//specs: ['../scripts/Login_CafeTownsend.js', '../scripts/Create_Employee.js'],
	//specs: ['../scripts/Create_Employee.js'],
	specs: ['../scripts/EditnDelete_Employee.js'],

	// Override the timeout for webdriver to 30 seconds.
	allScriptsTimeout: 30000,

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
	defaultTimeoutInterval: 480000
	}
};
