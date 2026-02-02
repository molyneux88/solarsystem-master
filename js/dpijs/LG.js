export function deviceCheckLGDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("LM-G900")!==-1){ dpi = 395;} //LG Velvet 5G
    else if(navigator.userAgent.indexOf("LM-K610")!==-1){ dpi = 280;} //LG W41 Pro
    else if(navigator.userAgent.indexOf("LM-V500")!==-1){ dpi = 538;} //LG V50 ThinQ 5G
    else if(navigator.userAgent.indexOf("LM-V600")!==-1){ dpi = 395;} //LG V60 ThinQ 5G
    else if(navigator.userAgent.indexOf("LM-G820")!==-1){ dpi = 564;} //LG G8 ThinQ
    else if(navigator.userAgent.indexOf("LM-F100")!==-1){ dpi = 395;} //LG Wing 5G
    else if(navigator.userAgent.indexOf("LM-G710")!==-1){ dpi = 564;} //LG G7 ThinQ
    else if(navigator.userAgent.indexOf("LG-H930")!==-1){ dpi = 537;} //LG V30
    else if(navigator.userAgent.indexOf("LG-H931")!==-1){ dpi = 537;} //LG V30
    else if(navigator.userAgent.indexOf("LG-H932")!==-1){ dpi = 537;} //LG V30
    else if(navigator.userAgent.indexOf("LG-H933")!==-1){ dpi = 537;} //LG V30
    else if(navigator.userAgent.indexOf("LM-G850")!==-1){ dpi = 403;} //LG G8X ThinQ
    else if(navigator.userAgent.indexOf("LM-V405")!==-1){ dpi = 537;} //LG V40 ThinQ
    else if(navigator.userAgent.indexOf("LM-G910")!==-1){ dpi = 395;} //LG Velvet
    else if(navigator.userAgent.indexOf("LM-K920")!==-1){ dpi = 393;} //LG K92 5G
    else if(navigator.userAgent.indexOf("LM-Q730")!==-1){ dpi = 395;} //LG Stylo 6
    else if(navigator.userAgent.indexOf("LM-V510")!==-1){ dpi = 403;} //LG V50S ThinQ 5G
    else if(navigator.userAgent.indexOf("LM-K200")!==-1){ dpi = 271;} //LG K22
    else if(navigator.userAgent.indexOf("LM-K420")!==-1){ dpi = 266;} //LG K42
    else if(navigator.userAgent.indexOf("LM-G810")!==-1){ dpi = 401;} //LG G8S ThinQ
    else if(navigator.userAgent.indexOf("LM-G900")!==-1){ dpi = 395;} //LG Velvet 5G UW
    else if(navigator.userAgent.indexOf("LM-K510")!==-1){ dpi = 282;} //LG K51S
    else if(navigator.userAgent.indexOf("LM-K410")!==-1){ dpi = 268;} //LG K41S
    else if(navigator.userAgent.indexOf("LM-V600")!==-1){ dpi = 395;} //LG V60 ThinQ 5G UW
    else if(navigator.userAgent.indexOf("LM-K520")!==-1){ dpi = 266;} //LG K52
    else if(navigator.userAgent.indexOf("LM-Q630")!==-1){ dpi = 394;} //LG K61
    else if(navigator.userAgent.indexOf("LM-V350")!==-1){ dpi = 538;} //LG V35 ThinQ
    else if(navigator.userAgent.indexOf("LM-Q720")!==-1){ dpi = 390;} //LG Stylo 5
    else if(navigator.userAgent.indexOf("LM-M700")!==-1){ dpi = 442;} //LG Q6
    else if(navigator.userAgent.indexOf("LM-M703")!==-1){ dpi = 442;} //LG Q6
    else if(navigator.userAgent.indexOf("LM-Q730")!==-1){ dpi = 395;} //LG K71
    else if(navigator.userAgent.indexOf("LM-K315")!==-1){ dpi = 269;} //LG W31+
    else if(navigator.userAgent.indexOf("LM-Q610")!==-1){ dpi = 442;} //LG Q7
    else if(navigator.userAgent.indexOf("LM-K300")!==-1){ dpi = 295;} //LG K31
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 410;
    }
    console.log(dpi);
    return dpi
}