 "use strict"; 
var util = require ('util');
var MyConst = require ('../constants/TestConstants.js');

describe('Cafe Townsend Logout Tests', function() {

	var MyLoginPage = require ('../pages/LoginPage.js');
	var MyEmployeePage;
	
    beforeEach(function() {
		browser.get(MyConst.myLoginURL);
		
		//Login To CT App
		MyEmployeePage = MyLoginPage.LoginUser(MyConst.MyUserName,MyConst.MyPassword);
		
		// Expect to be on the Employees page for a successful login
		expect(browser.getCurrentUrl()).toContain('/employees');
		
    });
	
	it('should logout succesfully', function() {
		
		//Click on logout Button
		MyLoginPage = MyEmployeePage.clickLogoutButton();
		
		// Expect to be on the login page
		expect(browser.getCurrentUrl()).toContain('/login');
		
		// Username field should be empty
		expect(MyLoginPage.getUserName()).toBe('');
		
		// Password field should be empty
		// This assertion fails due to bug in app where on logout the password remains populated
		expect(MyLoginPage.getPassword()).toBe('');  

	});		

});
