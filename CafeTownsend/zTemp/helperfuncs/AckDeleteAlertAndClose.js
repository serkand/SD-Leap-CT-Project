var AckDeleteAlertAndClose = function(myelement) {
    return myelement.click().then(function (alertText) {
        //Wait for alert to pop up
        browser.wait(function () {
            return browser.switchTo().alert().then(
                function () {return true;},
                function () {return false;}
            );
        }, 3000); // Wait timeout

        // Test alert is what you expect
        var popupAlert = browser.switchTo().alert();
        alertText = popupAlert.getText();
        //expect(alertText).toMatch('Are you sure you want to delete this?');
		console.log(alertText);
        // Close alert
        popupAlert.dismiss();
    });
};
module.exports = new AckDeleteAlertAndClose ();