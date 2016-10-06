require ('./EmployeeDetailPage.js');

var CTEmployeePage = function() {
	
	//Page Elements
	var btCreate = element(by.id('bAdd'));
	var btEdit = element(by.id('bEdit'));
	var btDelete = element(by.id('bDelete'));
	//var lsEmpItems = element.all(by.repeater('employee in employees'));

	this.clickCreateButton = function(){
		btCreate.click();
		return require('./EmployeeDetailPage.js');
	};
	
	this.clickEditButton = function(){
		btEdit.click();
	};
	
	this.clickDeleteButton = function(){
		btDelete.click();
	};

	
	this.SelectFirstEmployee = function(){
		
		element.all(by.repeater('employee in employees')).first().click();
		
		browser.sleep(1000);
		
	};
	
	this.SelectlastEmployee = function(){
		
		element.all(by.repeater('employee in employees')).last().click();
		
		browser.sleep(1000);
		
	};
	this.SelectSpecificEmployee = function(_EmpName){
		
		//element.all(by.repeater('employee in employees')).count().then(function(count){
		//	console.log(count);
		//});
		
		element.all(by.repeater('employee in employees')).filter(function(elem,index){
			return elem.getText().then(function(text) {
				//console.log('->'+text+'<-');
				return text.trim() === _EmpName.trim();
			});
		}).first().click();	

		browser.sleep(1000);
		
	};

};

module.exports = new CTEmployeePage();