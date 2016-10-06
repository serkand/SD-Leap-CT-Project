 "use strict"; 
var util = require ('util');
var MyConst = require ('../constants/TestConstants.js');

describe('Cafe Townsend: Edit Employee:', function() {

	var MyLoginPage = require ('../pages/LoginPage.js');
	var MyEmployeePage;
	var MyEditEmployeePage;
	var fname = 'SmartJoe-Upd1';
	var lname = 'SmartBlow-Upd1';
	var startdate = '2016-10-01'
	var email = 'joe-upd1.blow-upd1@gmail.com';
	
    beforeEach(function() {
		browser.get(MyConst.myLoginURL);
		
		//Login To CT App
		MyEmployeePage = MyLoginPage.LoginUser(MyConst.MyUserName,MyConst.MyPassword);
		
		// Expect to be on the Employees page for a successful login
		expect(browser.getCurrentUrl()).toContain('/employees');
		
    });

	// Tests update on the first employee in the list
	it('should successfully edit all employee details(first one in list)', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectFirstEmployee();
		
		// Hit the edit button
		MyEditEmployeePage=MyEmployeePage.clickEditButton();

		// Check on the Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);
		
		// Update the details.
		MyEditEmployeePage.UpdateAllEmployeeDetails(fname,lname,startdate,email,'false')
			
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');
		
		// Check modified employee exists
		MyEmployeePage.CheckIfEmployeeExists(fname+' '+lname);
		
	});

	// Tests update on the last employee in the list.
	it('should successfully edit all employee details(last one in list)', function() {
		
		// Find Employee (last occurrence)
		MyEmployeePage.SelectLastEmployee();
		
		// Hit the edit button
		MyEditEmployeePage=MyEmployeePage.clickEditButton();
		
		// Check on the Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);	
		
		// Update the details.
		MyEditEmployeePage.UpdateAllEmployeeDetails(fname,lname,startdate,email,'false')
			
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');

		// Check modified employee exists
		MyEmployeePage.CheckIfEmployeeExists(fname+' '+lname);
		
	});
	
	// Select a specific employee and edit it. Takes a while to run when employee list is large.
	it('should successfully edit a specific employee', function() {
		var sfname = 'Specific';
		var slname = 'Employee';
		
		// Create New Specific Employee
		var MyNewEmployeePage = MyEmployeePage.clickCreateButton();
		MyNewEmployeePage.CreateNewEmployee(sfname,slname,startdate,email,'false');
		
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');
		
		// Find the newly added specific Employee (first occurrence of the Employee name)
		MyEmployeePage.SelectSpecificEmployee(sfname+' '+slname);
		
		// Hit the edit button
		MyEditEmployeePage=MyEmployeePage.clickEditButton();

		// Check on the Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);	
		
		// Update the details.
		MyEditEmployeePage.UpdateAllEmployeeDetails(fname,lname,startdate,email,'false')
			
		// Returns to Employee Page
		expect(browser.getCurrentUrl()).toContain('/employees');

		// Check modified employee exists
		MyEmployeePage.CheckIfEmployeeExists(fname+' '+lname);
	
	});
	
	// Tests missing mandatory fields on update
	it('should fail to edit employee details - missing first name', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectFirstEmployee();
		
		// Hit the edit button
		MyEditEmployeePage=MyEmployeePage.clickEditButton();
		
		// Check on the Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);	
		
		// Update the details.
		MyEditEmployeePage.UpdateAllEmployeeDetails('',lname,startdate,email,'true')
			
		// Check that it stays on Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);
		
	});	
	
	// Tests missing mandatory fields on update
	it('should fail to edit employee details - missing last name', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectFirstEmployee();
		
		// Hit the edit button
		MyEditEmployeePage=MyEmployeePage.clickEditButton();
		
		// Check on the Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);	
		
		// Update the details.
		MyEditEmployeePage.UpdateAllEmployeeDetails(fname,'',startdate,email,'true')
			
		// Check that it stays on Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);
		
	});	

	// Tests missing mandatory fields on update
	it('should fail to edit employee details - missing start date', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectFirstEmployee();
		
		// Hit the edit button
		MyEditEmployeePage=MyEmployeePage.clickEditButton();
		
		// Check on the Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);	
		
		// Update the details.
		MyEditEmployeePage.UpdateAllEmployeeDetails(fname,lname,'',email,'true')
			
		// Check that it stays on Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);
		
	});	

	// Tests missing mandatory fields on update
	it('should fail to edit employee details - missing email', function() {
		
		// Find Employee (first occurrence)
		MyEmployeePage.SelectFirstEmployee();
		
		// Hit the edit button
		MyEditEmployeePage=MyEmployeePage.clickEditButton();
		
		// Check on the Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);	
		
		// Update the details.
		MyEditEmployeePage.UpdateAllEmployeeDetails(fname,lname,startdate,'','true')
			
		// Check that it stays on Edit Employee Page
		expect(browser.getCurrentUrl()).toMatch(/employees\/\d+\/edit/);
		
	});	
});

