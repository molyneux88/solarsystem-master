export function deviceCheckLenovoTabletDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("Lenovo A3500-FL")!==-1){ dpi = 240;} //Lenovo Tab P12 Pro
    else if(navigator.userAgent.indexOf("Lenovo ZA910001CN")!==-1){ dpi = 263;} //Lenovo Pad Pro
    else if(navigator.userAgent.indexOf("Lenovo TB-X306XA")!==-1){ dpi = 149;} //Lenovo Tab M10 HD Gen 2
    else if(navigator.userAgent.indexOf("Lenovo TB-J606F")!==-1){ dpi = 212;} //Lenovo Tab P11 5G
    else if(navigator.userAgent.indexOf("Lenovo TB-J706F")!==-1){ dpi = 263;} //Lenovo Tab P11 Pro
    else if(navigator.userAgent.indexOf("Lenovo TB-X606F")!==-1){ dpi = 220;} //Lenovo M10 Plus
    else if(navigator.userAgent.indexOf("Lenovo TB-8505")!==-1){ dpi = 189;} //Lenovo Tab M8 (HD)
    else if(navigator.userAgent.indexOf("Lenovo TB-J606")!==-1){ dpi = 212;} //Lenovo Tab P11 Plus
    else if(navigator.userAgent.indexOf("Lenovo TB-7305F")!==-1){ dpi = 170;} //Lenovo Tab M7
    else if(navigator.userAgent.indexOf("Lenovo TB-8705F")!==-1){ dpi = 189;} //Lenovo Tab M8 (3rd Gen)
    else if(navigator.userAgent.indexOf("Lenovo TB-X605F")!==-1){ dpi = 224;} //Lenovo M10 FHD REL
    else if(navigator.userAgent.indexOf("Lenovo YT-X705F")!==-1){ dpi = 224;} //Lenovo Yoga Smart Tab
    else if(navigator.userAgent.indexOf("Lenovo TB3-710F")!==-1){ dpi = 170;} //Lenovo Tab3 7
     
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 211;
    }
    console.log(dpi);
    return dpi
}