 "use strict"; 
var util = require ('util');
var MyConst = require ('../constants/TestConstants.js');

describe('Cafe Townsend Login Tests', function() {

	var MyLoginPage = require ('../pages/LoginPage.js');
	
    beforeEach(function() {
		browser.get(MyConst.myLoginURL);
    });
	
	it('should login succesfully', function() {

		MyLoginPage.LoginUser(MyConst.MyUserName,MyConst.MyPassword);
		// Expect to be on the Employees page for a successful login
		expect(browser.getCurrentUrl()).toContain('/employees');
	});

	it('should fail to login with empty username and password', function() {

		MyLoginPage.LoginUser('','');
		// Expect to remain on login page
		expect(browser.getCurrentUrl()).toContain('/login');
	});

	it('should fail to login with empty username(only)', function() {

		MyLoginPage.LoginUser('',MyConst.MyPassword);
		// Expect to remain on login page
		expect(browser.getCurrentUrl()).toContain('/login');
	});

	it('should fail to login with empty password(only)', function() {
		MyLoginPage.LoginUser(MyConst.MyUserName,'');
		// Expect to remain on login page
		expect(browser.getCurrentUrl()).toContain('/login');
	});

	it('should fail to login with partial username and password', function() {

		//Set a partial value for username and password
		var partialUserName = MyConst.MyUserName.substring(0, MyConst.MyUserName.length-1);
		var partialPassword = MyConst.MyPassword.substring(0, MyConst.MyPassword.length-1);
		
		MyLoginPage.LoginUser(partialUserName,partialPassword);
		// Expect to remain on login page
		expect(browser.getCurrentUrl()).toContain('/login');
		// Expect to Error Message
		expect(MyLoginPage.GetErrorMessage()).toEqual(MyConst.MyErrorString)
	});	
	
	it('should fail to login with incorrect case in username and password', function() {
		//lower case username
		var caseUserName = MyConst.MyUserName.toLowerCase(MyConst.MyUserName);
		//upper case pwd
		var casePassword = MyConst.MyPassword.toUpperCase(MyConst.MyPassword);
		
		MyLoginPage.LoginUser(caseUserName,casePassword);
		// Expect to remain on login page
		expect(browser.getCurrentUrl()).toContain('/login');
		// Expect to Error Message
		expect(MyLoginPage.GetErrorMessage()).toEqual(MyConst.MyErrorString)

	});		

});
