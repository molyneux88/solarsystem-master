export function deviceCheckMotoDevice() {
    var dpi;
  
    if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (60)")!==-1){ dpi = 495;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (100)")!==-1){ dpi = 409;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (30)")!==-1){ dpi = 269;}
    else if((navigator.userAgent.toUpperCase()).indexOf("XT535")!==-1){ dpi = 270;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (40)")!==-1){ dpi = 395;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (20)")!==-1){ dpi = 270;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (9)PLUS")!==-1){ dpi = 386;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G STYLUS")!==-1){ dpi = 387;}
    else if((navigator.userAgent.toUpperCase()).indexOf("-EDGE S")!==-1){ dpi = 409;}
    else if((navigator.userAgent.toUpperCase()).indexOf("-EDGE PLUS")!==-1){ dpi = 385;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (50)")!==-1){ dpi = 269;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (9)POWER")!==-1){ dpi = 263;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G 5G")!==-1){ dpi = 393;}
    else if((navigator.userAgent.toUpperCase()).indexOf("ONE 5G")!==-1){ dpi = 393;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G (10)")!==-1){ dpi = 269;}
    else if((navigator.userAgent.toUpperCase()).indexOf("-EDGE")!==-1){ dpi = 385;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTORAZR")!==-1){ dpi = 373;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G POWER (2021)")!==-1){ dpi = 270;}
    else if((navigator.userAgent.toUpperCase()).indexOf("MOTO G POWER")!==-1){ dpi = 399;}
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 349;
    }
    console.log(dpi);
    return dpi
}