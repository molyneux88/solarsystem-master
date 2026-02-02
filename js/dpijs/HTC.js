export function deviceCheckHTCDevice() {
  var dpi;

  if(navigator.userAgent.indexOf("HTC Wildfire E3")!==-1){ dpi = 264;}
  else if(navigator.userAgent.indexOf("HTC Desire 728")!==-1){ dpi = 267;}
  else if(navigator.userAgent.indexOf("HTC Desire 12+")!==-1){ dpi = 268;}
  else if(navigator.userAgent.indexOf("HTC Desire 20+")!==-1){ dpi = 270;}
  else if(navigator.userAgent.indexOf("HTC Desire 19+")!==-1){ dpi = 271;}
  else if(navigator.userAgent.indexOf("HTC Desire 19s")!==-1){ dpi = 271;}
  else if(navigator.userAgent.indexOf("HTC Wildfire X")!==-1){ dpi = 271;}
  else if(navigator.userAgent.indexOf("HTC Wildfire E2")!==-1){ dpi = 276;}
  else if(navigator.userAgent.indexOf("HTC Desire 12s")!==-1){ dpi = 282;}
  else if(navigator.userAgent.indexOf("HTC Exodus 1s")!==-1){ dpi = 282;}
  else if(navigator.userAgent.indexOf("HTC Wildfire E1)")!==-1){ dpi = 282;}
  else if(navigator.userAgent.indexOf("HTC Wildfire E1)")!==-1){ dpi = 282;}
  else if(navigator.userAgent.indexOf("HTC Desire 12")!==-1){ dpi = 293;}
  else if(navigator.userAgent.indexOf("HTC Desire 10 Compact")!==-1){ dpi = 294;}
  else if(navigator.userAgent.indexOf("HTC Wildfire E")!==-1){ dpi = 295;}    
  else if(navigator.userAgent.indexOf("HTC Desire 21 pro")!==-1){ dpi = 393;}
  else if(navigator.userAgent.indexOf("HTC Desire 20 Pro")!==-1){ dpi = 396;}
  else if(navigator.userAgent.indexOf("HTC U11 EYEs")!==-1){ dpi = 402;}
  else if(navigator.userAgent.indexOf("HTC U12 life")!==-1){ dpi = 402;}
  else if(navigator.userAgent.indexOf("HTC U19e")!==-1){ dpi = 402;}
  else if(navigator.userAgent.indexOf("HTC U11 Life")!==-1){ dpi = 424;}
  else if(navigator.userAgent.indexOf("HTC U Play")!==-1){ dpi = 428;}
  else if(navigator.userAgent.indexOf("HTC U Ultra")!==-1){ dpi = 513;}
  else if(navigator.userAgent.indexOf("HTC U11 B")!==-1){ dpi = 534;}
  else if(navigator.userAgent.indexOf("HTC Exodus 1")!==-1){ dpi = 537;}
  else if(navigator.userAgent.indexOf("HTC U11+")!==-1){ dpi = 537;}
  else if(navigator.userAgent.indexOf("HTC U12+")!==-1){ dpi = 537;}
  else if(navigator.userAgent.indexOf("Moto G (5)")!==-1){ dpi = 441;}
  else if(navigator.userAgent.indexOf("HTC Desire 21")!==-1){ dpi = 393;}
  else {
    console.log("Device Not found. Agent String: " + navigator.userAgent);
    dpi = 359;
  }
    console.log(dpi);
    return dpi
  }