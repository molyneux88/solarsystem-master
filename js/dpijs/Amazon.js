export function deviceCheckAmazonDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("KFMUWI")!==-1){ dpi = 170;} //Amazon Fire 7
    else if(navigator.userAgent.indexOf("KFONWI")!==-1){ dpi = 189;} //Amazon Fire HD 8 (2020)
    else if(navigator.userAgent.indexOf("KFMAWI")!==-1){ dpi = 224;} //Amazon Fire HD 10 (2019)
    else if(navigator.userAgent.indexOf("KFONWI")!==-1){ dpi = 189;} //Amazon Fire HD 8 Plus (2020)
    else if(navigator.userAgent.indexOf("KFDOWI")!==-1){ dpi = 224;} //Amazon Fire HD 8 (2017)
    else if(navigator.userAgent.indexOf("KFSUWI")!==-1){ dpi = 189;} //Amazon Fire HD 10 (2017)
    else if(navigator.userAgent.indexOf("KFMEWI")!==-1){ dpi = 189;} //Amazon Fire HD 8
    else if(navigator.userAgent.indexOf("Kindle Fire")!==-1){ dpi = 170;} //Amazon Kindle Fire
    else if(navigator.userAgent.indexOf("KFASWI")!==-1){ dpi = 216;} //Amazon Fire HD 7
    else if(navigator.userAgent.indexOf("KFAUWI")!==-1){ dpi = 323;} //Amazon Fire 7 (2017)
    else if(navigator.userAgent.indexOf("KFTHWI")!==-1){ dpi = 170;} //Amazon Kindle Fire HDX
    else if(navigator.userAgent.indexOf("KFJWI")!==-1){ dpi = 254;} //Amazon Kindle Fire HD 8.9
    else if(navigator.userAgent.indexOf("KFARWI")!==-1){ dpi = 252;} //Amazon Fire HD 6
    else if(navigator.userAgent.indexOf("KFTT")!==-1){ dpi = 216;} //Amazon Kindle Fire HD
    else if(navigator.userAgent.indexOf("KFTBWI")!==-1){ dpi = 149;} //Amazon Fire HD 10
    else if(navigator.userAgent.indexOf("KFAPWI")!==-1){ dpi = 339;} //Amazon Kindle Fire HDX 8.9
    else if(navigator.userAgent.indexOf("KFSOWI")!==-1){ dpi = 316;} //Amazon Kindle Fire HD (2013)
    else if(navigator.userAgent.indexOf("KFSAWI")!==-1){ dpi = 339;} //Amazon Fire HDX 8.9 (2014)
    else if(navigator.userAgent.indexOf("KFJWI")!==-1){ dpi = 254;} //Amazon Kindle Fire HD 8.9 LTE
    else if(navigator.userAgent.indexOf("T76N2B")!==-1){ dpi = 224;} //Amazon Fire HD 10 (2021)
    else if(navigator.userAgent.indexOf("T76N2P")!==-1){ dpi = 224;} //Amazon Fire HD 10 Plus (2021)
    else {
        console.log("Device Not found. Agent String: " + dave);
        dpi = 290;
    }
    console.log(dpi);
    return dpi
}
