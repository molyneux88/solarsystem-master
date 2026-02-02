export function deviceCheckNokiaDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("Nokia XR20")!==-1){ dpi = 395;}
    else if(navigator.userAgent.indexOf("Nokia G20")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia 5.4")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia X20")!==-1){ dpi = 395;}
    else if(navigator.userAgent.indexOf("Nokia 3.4")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia 8.3 5G")!==-1){ dpi = 386;}
    else if(navigator.userAgent.indexOf("Nokia G10")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia X10")!==-1){ dpi = 395;}
    else if(navigator.userAgent.indexOf("Nokia 1.4")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia 2.4")!==-1){ dpi = 270;}
    else if(navigator.userAgent.indexOf("Nokia C20 Plus")!==-1){ dpi = 270;}
    else if(navigator.userAgent.indexOf("Nokia 6.1 Plus")!==-1){ dpi = 432;}
    else if(navigator.userAgent.indexOf("Nokia 7.2")!==-1){ dpi = 400;}
    else if(navigator.userAgent.indexOf("Nokia 5.3")!==-1){ dpi = 268;}
    else if(navigator.userAgent.indexOf("Nokia C20")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia 6.1)")!==-1){ dpi = 403;}
    else if(navigator.userAgent.indexOf("Nokia C1")!==-1){ dpi = 197;}
    else if(navigator.userAgent.indexOf("Nokia 8 V 5G UW")!==-1){ dpi = 386;}
    else if(navigator.userAgent.indexOf("Nokia 7 plus")!==-1){ dpi = 403;}
    else if(navigator.userAgent.indexOf("Nokia 2.3")!==-1){ dpi = 271;}
    else if(navigator.userAgent.indexOf("Nokia 9 PureView")!==-1){ dpi = 538;}
    else if(navigator.userAgent.indexOf("Nokia 6.2")!==-1){ dpi = 400;}
    else if(navigator.userAgent.indexOf("Nokia 8")!==-1){ dpi = 554;}
    else if(navigator.userAgent.indexOf("Nokia 2.2")!==-1){ dpi = 295;}
    else if(navigator.userAgent.indexOf("Nokia C10")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia 7.1")!==-1){ dpi = 432;}
    else if(navigator.userAgent.indexOf("Nokia C2")!==-1){ dpi = 282;}
    else if(navigator.userAgent.indexOf("Nokia 5")!==-1){ dpi = 282;}
    else if(navigator.userAgent.indexOf("Nokia C01 Plus")!==-1){ dpi = 295;}
    else if(navigator.userAgent.indexOf("Nokia 5.1 Plus")!==-1){ dpi = 287;}
    else if(navigator.userAgent.indexOf("Nokia C3")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia 8.1")!==-1){ dpi = 408;}
    else if(navigator.userAgent.indexOf("Nokia 1.3")!==-1){ dpi = 295;}
    else if(navigator.userAgent.indexOf("Nokia 3.2")!==-1){ dpi = 269;}
    else if(navigator.userAgent.indexOf("Nokia 3)")!==-1){ dpi = 294;}
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 332;
    }
      console.log(dpi);
      return dpi
    }