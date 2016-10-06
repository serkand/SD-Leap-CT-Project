require ('./EmployeePage.js');

var CTLoginPage = function() {
	
	//Page Elements
	var inUserName = element(by.model('user.name'));
	var inPassword = element(by.model('user.password'));
	var btLogin = element(by.buttonText('Login'));
	var fmLoginForm = element(by.id('login-form'));
	var txErrorMessage = element(by.css('[class="error-message ng-binding"]'));
	
	this.setUserName = function(_username){
		inUserName.sendKeys(_username);
	};
	
	this.setPassword = function(_password){
		inPassword.sendKeys(_password);
	};
	
	this.getUserName = function(){
		return inUserName.getText();
	};
	
	this.getPassword = function(){
		//return inPassword.getText();
		return inPassword.getAttribute('value');
	};
	
	this.clickLoginButton = function(){
		btLogin.click();
	};
	
	this.GetErrorMessage = function(){
	
		return txErrorMessage.getText();	
	};
	
	this.LoginUser = function(_username,_password){
		this.setUserName(_username);
		this.setPassword(_password);
		this.clickLoginButton();
		
		return require('./EmployeePage.js');
	};

};

module.exports = new CTLoginPage();