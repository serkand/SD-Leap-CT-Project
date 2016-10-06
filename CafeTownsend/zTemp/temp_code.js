	var btAdd = element(by.css('button.main-button[]')); // more than 1 element found
	var btAdd = element(by.css('div.formFooter')).element(by.cssContainingText('.main-button', 'Add'));
		
		
		//Check and wait until button is clickable or timeout
		var isClickable = EC.elementToBeClickable(btAdd);
		browser.wait(isClickable, 5000);
		// Validate if button is enabled
		expect(btAdd.getAttribute('ng-disabled')).toBe('false');
		
	this.clickAddButton = function(){
		//var isClickable = EC.elementToBeClickable(btAdd);
		//browser.wait(isClickable, 5000);
		//expect(btAdd.getAttribute('ng-disabled')).toBe('false');
		//browser.executeScript("arguments[0].scrollIntoView();", btAdd.getWebElement());
		//console.log('in clickaddbuttonfunction')
		btAdd.click();
		//browser.actions().mouseMove(btAdd).click().perform();
		//browser.actions().click(btAdd).perform();
		//browser.actions().doubleClick(btAdd).perform();
	};
	
	this.CreateNewEmployee = function(fName,lName,sDate,eMail){

		
		this.SetFirstName(fName);
		this.SetLastName(lName);
		this.SetStartDate(sDate);
		this.SetEmail(eMail);
		//element(by.css('div.formFooter')).getText().then(function(text){
		//	console.log('formFooter->'+text)
		//});
		//btAdd.getAttribute('ng-disabled').then(function(text){
		//	console.log('btAdd->'+text)
		//});
		//browser.sleep(5000);
		//btAdd.click();
		this.clickAddButton();
		//browser.sleep(10000);
	};
	
	
			//Login To CT App
		var MyEmployeePage = MyLoginPage.LoginUser(MyConst.MyUserName,MyConst.MyPassword);

		// Expect to be on the Employees page for a successful login
		expect(browser.getCurrentUrl()).toContain('/employees');

		//Navigate to Create New Employee page
		var MyNewEmployeePage = MyEmployeePage.clickCreateButton();

		// Expect to be on the New Employees page
		expect(browser.getCurrentUrl()).toContain('/employees/new');
		
		lsEmpItems.filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text === 'SmartJoe SmartBlow';
			});
		}).first().click();
		
		
		element.all(by.repeater('employee in employees')).filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text === 'SmartJoe SmartBlow';
			});
		}).first().click();
		
		
	var myItem = function (matcher, index, myItemText) {
		return element.all(by.repeater(matcher)).get(index).getText().then(function (item_txt) {
			if (myItemText === item_txt){
				return console.log('matched item[' + index + '] = ' + item_txt)
			}
			//return console.log('item[' + index + '] = ' + item_txt);
		});
	};
	
	
	this.SelectEmployeev2 = function(){
		
		element.all(by.repeater('employee in employees')).count().then(function(NoOFItems){
			for(var i = 0; i < NoOFItems; i++)
				myItem('employee in employees', i);			
		});
		
	

		//browser.sleep(5000);
		
	};		