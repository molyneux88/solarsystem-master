export function deviceCheckXiaomiTabletDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("MI PAD 5 PRO")!==-1){ dpi = 274;} //Xiaomi Pad 5 Pro
    else if(navigator.userAgent.indexOf("MI PAD 5")!==-1){ dpi = 274;} //Xiaomi Pad 5
    else if(navigator.userAgent.indexOf("MI PAD 4")!==-1){ dpi = 283;} //Xiaomi Mi Pad 4
    else if(navigator.userAgent.indexOf("MI PAD 4 PLUS")!==-1){ dpi = 224;} //Xiaomi Mi Pad 4 Plus
    else if(navigator.userAgent.indexOf("MI PAD 2")!==-1){ dpi = 326;} //Xiaomi Mi Pad 2
    else if(navigator.userAgent.indexOf("MI PAD 7.9")!==-1){ dpi = 326;} //Xiaomi Mi Pad 7.9
    else if(navigator.userAgent.indexOf("MI PAD 3")!==-1){ dpi = 326;} //Xiaomi Mi Pad 3
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 290;
    }
    console.log(dpi);
    return dpi
}