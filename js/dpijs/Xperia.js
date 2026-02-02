export function deviceCheckXperiaDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("Xperia 1 III")!==-1){ dpi = 643;}
    else if(navigator.userAgent.indexOf("Xperia 10 III Lite")!==-1){ dpi = 457;}
    else if(navigator.userAgent.indexOf("Xperia 10 III")!==-1){ dpi = 457;}
    else if(navigator.userAgent.indexOf("Xperia XZ3")!==-1){ dpi = 537;}
    else if(navigator.userAgent.indexOf("Xperia 1 II")!==-1){ dpi = 643;}
    else if(navigator.userAgent.indexOf("Xperia Pro")!==-1){ dpi = 643;}
    else if(navigator.userAgent.indexOf("Xperia 5 II")!==-1){ dpi = 449;}
    else if(navigator.userAgent.indexOf("Xperia 1")!==-1){ dpi = 643;}
    else if(navigator.userAgent.indexOf("Xperia XZ2")!==-1){ dpi = 424;}
    else if(navigator.userAgent.indexOf("Xperia 10 II")!==-1){ dpi = 457;}
    else if(navigator.userAgent.indexOf("Xperia 5")!==-1){ dpi = 449;}    
    else if(navigator.userAgent.indexOf("Xperia XZ1 Compact")!==-1){ dpi = 319;}
    else if(navigator.userAgent.indexOf("Xperia XZ1")!==-1){ dpi = 424;}
    else if(navigator.userAgent.indexOf("Xperia XZ2 Premium")!==-1){ dpi = 765;}
    else if(navigator.userAgent.indexOf("Xperia XZ Premium")!==-1){ dpi = 807;}
    else if(navigator.userAgent.indexOf("Xperia R1 Plus")!==-1){ dpi = 282;}
    else if(navigator.userAgent.indexOf("Xperia XZ2 Compact")!==-1){ dpi = 483;}
    else if(navigator.userAgent.indexOf("Xperia XA1 Plus")!==-1){ dpi = 401;}
    else if(navigator.userAgent.indexOf("Xperia L4")!==-1){ dpi = 295;}    
    else if(navigator.userAgent.indexOf("Xperia 10 Plus")!==-1){ dpi = 422;}
    else if(navigator.userAgent.indexOf("Xperia XA1 Ultra")!==-1){ dpi = 367;}
    else if(navigator.userAgent.indexOf("Xperia XZs")!==-1){ dpi = 424;}
    else if(navigator.userAgent.indexOf("Xperia XA2 Ultra")!==-1){ dpi = 367;}    
    else if(navigator.userAgent.indexOf("Xperia XA2 Plus")!==-1){ dpi = 402;}    
    else if(navigator.userAgent.indexOf("Xperia L3")!==-1){ dpi = 282;}
    else if(navigator.userAgent.indexOf("Xperia L1")!==-1){ dpi = 267;}
    else if(navigator.userAgent.indexOf("Xperia XA1")!==-1){ dpi = 294;}
    else if(navigator.userAgent.indexOf("Xperia L2")!==-1){ dpi = 267;}
    else if(navigator.userAgent.indexOf("Xperia XA2")!==-1){ dpi = 424;}
    else if(navigator.userAgent.indexOf("Xperia 10")!==-1){ dpi = 457;}
    else if(navigator.userAgent.indexOf("Xperia Z2 Tablet LTE")!==-1){ dpi = 224;} //Sony Xperia Z2 Tablet LTE
    else if(navigator.userAgent.indexOf("Xperia Z4 Tablet")!==-1){ dpi = 299;} //Sony Xperia Z4 Tablet LTE
    else if(navigator.userAgent.indexOf("Xperia Tablet Z LTE")!==-1){ dpi = 224;} //Sony Xperia Tablet Z LTE
    else if(navigator.userAgent.indexOf("Xperia Z2 Tablet WiFi")!==-1){ dpi = 224;} //Sony Xperia Z2 Tablet Wi-Fi
    else if(navigator.userAgent.indexOf("Xperia Z3 Tablet Compact")!==-1){ dpi = 283;} //Sony Xperia Z3 Tablet Compact
    else if(navigator.userAgent.indexOf("Xperia Tablet Z Wi-Fi")!==-1){ dpi = 224;} //Sony Xperia Tablet Z Wi-Fi
    else if(navigator.userAgent.indexOf("Xperia Z4 Tablet WiFi")!==-1){ dpi = 299;} //Sony Xperia Z4 Tablet WiFi
    else if(navigator.userAgent.indexOf("Tablet S")!==-1){ dpi = 161;} //Sony Xperia Tablet S    
    else if(navigator.userAgent.indexOf("Tablet P")!==-1){ dpi = 206;} //Sony Tablet P 3G
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 451;
    }
      console.log(dpi);
      return dpi
    }
    