function device(){

	var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
	 
	if (varUA.match('android') != null) { 
	    //안드로이드 일때 처리
	 	return "android";
	} else if (varUA.indexOf("iphone")>-1||varUA.indexOf("ipad")>-1||varUA.indexOf("ipod")>-1) { 
	    //IOS 일때 처리
	 	return "ios";
	} else if (varUA.indexOf("chrome")>-1||varUA.indexOf("firefox")>-1) { 
	    //web
	    return "web";
	} 
	else {
		//아이폰, 안드로이드 외 처리
	 	return "none";
	}
}