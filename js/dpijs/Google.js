export function deviceCheckGoogleDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("Pixel 5")!==-1){ dpi = 432;}
    else if(navigator.userAgent.indexOf("Pixel 4a)")!==-1){ dpi = 443;}
    else if(navigator.userAgent.indexOf("Pixel 4a (5G)")!==-1){ dpi = 413;}
    else if(navigator.userAgent.indexOf("Pixel 3)")!==-1){ dpi = 443;}
    else if(navigator.userAgent.indexOf("Pixel 4)")!==-1){ dpi = 444;}
    else if(navigator.userAgent.indexOf("Pixel 4 XL")!==-1){ dpi = 537;}
    else if(navigator.userAgent.indexOf("Pixel 3 XL")!==-1){ dpi = 523;}
    else if(navigator.userAgent.indexOf("Pixel 2 XL")!==-1){ dpi = 538;}
    else if(navigator.userAgent.indexOf("Pixel 3a)")!==-1){ dpi = 441;}
    else if(navigator.userAgent.indexOf("Pixel 2)")!==-1){ dpi = 441;}
    else if(navigator.userAgent.indexOf("Pixel 3a XL")!==-1){ dpi = 402;}
    else if(navigator.userAgent.indexOf("Google Pixel C")!==-1){ dpi = 308;} //Google Pixel C
    else if(navigator.userAgent.indexOf("Pixel 6 Pro")!==-1){ dpi = 512;}
    else if(navigator.userAgent.indexOf("Pixel 6)")!==-1){ dpi = 411;}
    else if(navigator.userAgent.indexOf("Pixel 6a")!==-1){ dpi = 424;}
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 460;
    }
    console.log(dpi);
    return dpi
}