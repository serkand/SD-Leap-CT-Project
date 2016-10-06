var CTEmployeeDetailPage = function() {
	
	var EC = protractor.ExpectedConditions;
	//Page Elements
	var btCancel = element(by.buttonText('Cancel'));
	var inFirstName = element(by.model('selectedEmployee.firstName'));
	var inLastName = element(by.model('selectedEmployee.lastName'));
	var inStartDate = element(by.model('selectedEmployee.startDate'));
	var inEmail = element(by.model('selectedEmployee.email'));	
	var btAdd = element(by.buttonText('Add'));
	var btUpdate = element(by.buttonText('Update'));
	var btDelete = element(by.buttonText('Delete'));	

	this.clickCanceleButton = function(){
		btCancel.click();
	};
	
	this.SetFirstName = function(_firstname,_clearvalue){
		if (_clearvalue === 'true'){
			inFirstName.clear();
		}
		inFirstName.sendKeys(_firstname);
	};

	this.SetLastName = function(_lastname,_clearvalue){
		if (_clearvalue === 'true'){
			inLastName.clear();
		}
		inLastName.sendKeys(_lastname);
	};

	this.SetStartDate = function(_startdate,_clearvalue){
		if (_clearvalue === 'true'){
			inStartDate.clear();
		}
		inStartDate.sendKeys(_startdate);
	};

	this.SetEmail = function(_email,_clearvalue){
		if (_clearvalue === 'true'){
			inEmail.clear();
		}
		inEmail.sendKeys(_email);
	};	
	
	this.clickAddButton = function(){
		btAdd.click();
	};

	this.clickUpdateButton = function(){
		btUpdate.click();
	};

	this.clickDeleteButton = function(){
		btDelete.click();
	};

	this.EnterAllFieldValues = function(fName,lName,sDate,eMail,clearvalue){
		//Enter the Employee field values
		this.SetFirstName(fName,clearvalue);
		this.SetLastName(lName,clearvalue);
		this.SetStartDate(sDate,clearvalue);
		this.SetEmail(eMail,clearvalue);		
	};
	
	this.CreateNewEmployee = function(fName,lName,sDate,eMail,AddDisabled){
		// setup
		var _clearvalue = 'false';
		
		//Enter the values
		this.EnterAllFieldValues(fName,lName,sDate,eMail,_clearvalue);
		
		//Check if the add button is in desired state
		expect(btAdd.getAttribute('ng-disabled')).toBe(AddDisabled);
		
		//Click the Add button
		this.clickAddButton();
	};

	this.UpdateAllEmployeeDetails = function(fName,lName,sDate,eMail,UpdateDisabled){
		// setup
		var _clearvalue = 'true';
		
		//Clear the existing values and enter the new values
		this.EnterAllFieldValues(fName,lName,sDate,eMail,_clearvalue);
		
		//Check if the Update button is in desired state
		expect(btAdd.getAttribute('ng-disabled')).toBe(UpdateDisabled);
		
		//Click the Update button
		this.clickUpdateButton();
	};	
};

module.exports = new CTEmployeeDetailPage();