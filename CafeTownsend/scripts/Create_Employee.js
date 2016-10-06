 "use strict"; 
var util = require ('util');
var MyConst = require ('../constants/TestConstants.js');

describe('Cafe Townsend: Create New Employee Tests', function() {

	var MyLoginPage = require ('../pages/LoginPage.js');
	var MyEmployeePage;
	var MyNewEmployeePage;
	
    beforeEach(function() {
		browser.get(MyConst.myLoginURL);
		
		//Login To CT App
		MyEmployeePage = MyLoginPage.LoginUser(MyConst.MyUserName,MyConst.MyPassword);
		
		// Expect to be on the Employees page for a successful login
		expect(browser.getCurrentUrl()).toContain('/employees');
		
		//Click on Create Button
		MyNewEmployeePage = MyEmployeePage.clickCreateButton();
		
		// Expect to be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');
    });
	// Happy path
	it('should create a employee', function() {
		
		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee('SmartJoe','SmartBlow','2016-10-01','joe.blow@gmail.com','false')
		
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');		
		
	});
	//Non-happy path, checking mandatory fields
	it('should fail to create a employee: missing firstname', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee('','SmartBlow','2016-10-01','joe.blow@gmail.com','true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');		

	});
	
	it('should fail to create a employee: missing lastname', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee('SmartJoe','','2016-10-01','joe.blow@gmail.com','true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');		

	});
	
	it('should fail to create a employee: missing startdate', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee('SmartJoe','SmartBlow','','joe.blow@gmail.com','true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');		

	});
	
	it('should fail to create a employee: missing email', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee('SmartJoe','SmartBlow','2016-10-01','','true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');		

	});
});

