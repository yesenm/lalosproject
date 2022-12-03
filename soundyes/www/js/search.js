document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
	var url;
	url = "https://home.trebel.io/es/inicio";
	
	showHelp(url);

	function showHelp(url) {

		var target = "_blank";

		var options = "location=yes, hidden=yes";

		inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

		inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

		inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

		inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

        inAppBrowserRef.addEventListener('exit', loadExit);

	}

    function loadExit() {
        inAppBrowserRef.close();
        window.location.href = "main.html";
    }

	function loadStartCallBack() {
	
		$('#status-message').text("plaese wait ...");
	
	}

	function loadStopCallBack() {
	
		if (inAppBrowserRef != undefined) {
			
			// inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;}" });
		
			$('#status-message').text("");
		
			inAppBrowserRef.show();
		
		}

	}

	function loadErrorCallBack(params) {
		
		$('#status-message').text("");
		
		var scriptErrorMesssage =
		   "alert('problem in loading');"
		
		inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
		
		inAppBrowserRef.close();
		
		inAppBrowserRef = undefined;
		
	}

	function executeScriptCallBack(params) {
		
		if (params[0] == null) {
			$('#status-message').text("problem in loading");
		}
		
	}

}