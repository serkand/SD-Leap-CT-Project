 "use strict"; 
var util = require ('util');
var MyConst = require ('../constants/TestConstants.js');

describe('Cafe Townsend: Create New Employee Tests', function() {

	var MyLoginPage = require ('../pages/LoginPage.js');
	var MyEmployeePage;
	var MyNewEmployeePage;
	var fname = 'SmartJoe';
	var lname = 'SmartBlow';
	var startdate = '2016-10-01'
	var email = 'joe.blow@gmail.com';
	
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
		MyNewEmployeePage.CreateNewEmployee(fname,lname,startdate,email,'false')
		
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');		
		
		MyEmployeePage.CheckIfEmployeeExists(fname+' '+lname);
	});
	//Non-happy path, checking mandatory fields
	it('should fail to create a employee: missing firstname', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee('',lname,startdate,email,'true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');		

	});
	
	it('should fail to create a employee: missing lastname', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee(fname,'',startdate,email,'true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');		

	});
	
	it('should fail to create a employee: missing startdate', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee(fname,lname,'',email,'true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');		

	});
	
	it('should fail to create a employee: missing email', function() {

		// Create New Employee
		MyNewEmployeePage.CreateNewEmployee(fname,lname,startdate,'','true')

		// Expect to Still be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');	

	});
});

