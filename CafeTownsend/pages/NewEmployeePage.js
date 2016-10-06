var CTNewEmployeePage = function() {
	
	var EC = protractor.ExpectedConditions;
	//Page Elements
	var btCancel = element(by.buttonText('Cancel'));
	var inFirstName = element(by.model('selectedEmployee.firstName'));
	var inLastName = element(by.model('selectedEmployee.lastName'));
	var inStartDate = element(by.model('selectedEmployee.startDate'));
	var inEmail = element(by.model('selectedEmployee.email'));	
	var btAdd = element(by.buttonText('Add'));

	this.clickCanceleButton = function(){
		btCancel.click();
	};
	
	this.SetFirstName = function(_firstname){
		inFirstName.sendKeys(_firstname);
	};

	this.SetLastName = function(_lastname){
		inLastName.sendKeys(_lastname);
	};

	this.SetStartDate = function(_startdate){
		inStartDate.sendKeys(_startdate);
	};

	this.SetEmail = function(_email){
		inEmail.sendKeys(_email);
	};	
	
	this.clickAddButton = function(){
		btAdd.click();
	};
	
	this.CreateNewEmployee = function(fName,lName,sDate,eMail,AddDisabled){
		//Enter the field values
		this.SetFirstName(fName);
		this.SetLastName(lName);
		this.SetStartDate(sDate);
		this.SetEmail(eMail);
		//Check if the add button is in desired state
		expect(btAdd.getAttribute('ng-disabled')).toBe(AddDisabled);
		//Click the Add button
		this.clickAddButton();
	};

};

module.exports = new CTNewEmployeePage();