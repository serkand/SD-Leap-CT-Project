require ('./EmployeeDetailPage.js');
require ('./LoginPage.js');

var CTEmployeePage = function() {
	
	//Page Elements
	var btCreate = element(by.id('bAdd'));
	var btEdit = element(by.id('bEdit'));
	var btDelete = element(by.id('bDelete'));
	//var btLogout = element(by.buttonText('Logout'));
	var btLogout = element(by.css('[ng-click="logout()"]'));
	
	var lsEmployeeItems = element.all(by.repeater('employee in employees'));

	this.clickCreateButton = function(){
		btCreate.click();
		return require('./EmployeeDetailPage.js');
	};
	
	this.clickEditButton = function(){
		btEdit.click();
		return require('./EmployeeDetailPage.js');
	};
	
	this.clickDeleteButton = function(){
		btDelete.click();
	};
	
	this.clickLogoutButton = function(){
		btLogout.click();
		return require ('./LoginPage.js');
	};
	
	this.SelectFirstEmployee = function(){
		//element.all(by.repeater('employee in employees')).first().click();
		lsEmployeeItems.first().click();
	};
	
	this.SelectLastEmployee = function(){
		//element.all(by.repeater('employee in employees')).last().click();
		lsEmployeeItems.last().click();
	};
	
	this.SelectSpecificEmployee = function(_EmpName){
		//element.all(by.repeater('employee in employees')).filter(function(item,index){
		lsEmployeeItems.filter(function(item,index){
			return item.getText().then(function(text) {
				//console.log('->'+text+'<-');
				return text.trim() === _EmpName.trim();
			});
		}).first().click();
	};

	this.CheckIfEmployeeExists = function(_EmpName){
		
		expect(lsEmployeeItems.filter(function(item,index){
			return item.getText().then(function(text) {
				return text.trim() === (_EmpName); 
			});
		}).first().isPresent()).toBe(true);	
	};
	
	this.DeleteSelectedEmployee = function(){
			
		btDelete.click().then(function (alertText) {
			//Wait for alert to pop up
			browser.wait(function () {
				return browser.switchTo().alert().then(function (alert) {
					if (alert){
						alert.getText().then(function(alertText){
							//console.log(alertText)
							expect(alertText).toContain('Are you sure you want to delete');
						});
						return true;
					}else {
						return false;
					};
				});
			}, 3000); // Wait timeout
			
			//grab the alert object
			var popupAlert = browser.switchTo().alert();
			
			// Press ok on alert
			popupAlert.accept();
		});		
		
		
	};
};

module.exports = new CTEmployeePage();