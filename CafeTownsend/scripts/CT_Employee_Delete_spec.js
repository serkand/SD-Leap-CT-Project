 "use strict"; 
var util = require ('util');
var MyConst = require ('../constants/TestConstants.js');

describe('Cafe Townsend: Edit Employee:', function() {

	var MyLoginPage = require ('../pages/LoginPage.js');
	var MyEmployeePage;
	var MyEditEmployeePage;
	var fname = 'SmartJoe-Del';
	var lname = 'SmartBlow-Del';
	var startdate = '2016-10-01'
	var email = 'joe-del1.blow-del1@gmail.com';
	
    beforeEach(function() {
		browser.get(MyConst.myLoginURL);
		
		//Login To CT App
		MyEmployeePage = MyLoginPage.LoginUser(MyConst.MyUserName,MyConst.MyPassword);
		
		// Expect to be on the Employees page for a successful login
		expect(browser.getCurrentUrl()).toContain('/employees');
		
    });

	// Tests delete the first employee in the list
	it('should successfully delete employee(first one in list)', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectFirstEmployee();

		MyEmployeePage.DeleteSelectedEmployee();
				
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');
		
	});

	// Tests delete on the last employee in the list.
	it('should successfully delete employee(last one in list)', function() {
		
		// Find Employee (last occurrence)
		MyEmployeePage.SelectLastEmployee();

		MyEmployeePage.DeleteSelectedEmployee();
				
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');
		
	});
	
	// Select a specific employee and delete it. Takes a while to run when employee list is large.
	it('should successfully delete a specific employee', function() {
		var sfname = 'Del-Specific';
		var slname = 'Del-Employee';
		
		// Create New Specific Employee
		var MyNewEmployeePage = MyEmployeePage.clickCreateButton();
		MyNewEmployeePage.CreateNewEmployee(sfname,slname,startdate,email,'false');
		
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');
		
		// Find the newly added specific Employee (first occurrence of the Employee name)
		MyEmployeePage.SelectSpecificEmployee(sfname+' '+slname);
		
		MyEmployeePage.DeleteSelectedEmployee();
				
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');
	
	});

});

