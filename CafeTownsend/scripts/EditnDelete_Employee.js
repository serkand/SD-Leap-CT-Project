 "use strict"; 
var util = require ('util');
var MyConst = require ('../constants/TestConstants.js');

describe('Cafe Townsend: Edit/Delete Employee Tests', function() {

	var MyLoginPage = require ('../pages/LoginPage.js');
	var MyEmployeePage;
	var MyNewEmployeePage;
	var MyEditEmployeePage;
	
    beforeEach(function() {
		browser.get(MyConst.myLoginURL);
		
		//Login To CT App
		MyEmployeePage = MyLoginPage.LoginUser(MyConst.MyUserName,MyConst.MyPassword);
		
		// Expect to be on the Employees page for a successful login
		expect(browser.getCurrentUrl()).toContain('/employees');
		

    });

	it('should successfully edit a employee', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectFirstEmployee();
		MyEditEmployeePage=MyEmployeePage.clickEditButton
			
		
	});

	
	it('should successfully edit a specific employee', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectSpecificEmployee('SmartJoe SmartBlow');
			
		
	});
	
});

