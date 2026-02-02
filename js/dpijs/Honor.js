export function deviceCheckHonorDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("NTN-AN20")!==-1){ dpi = 391;} //Honor X20
    else if(navigator.userAgent.indexOf("RNA-AN00")!==-1){ dpi = 439;} //Honor 50 Pro
    else if(navigator.userAgent.indexOf("NTH-AN00")!==-1){ dpi = 392;} //Honor 50
    else if(navigator.userAgent.indexOf("JSN-L")!==-1){ dpi = 397;} //Honor 8X
    else if(navigator.userAgent.indexOf("CHL-AN00")!==-1){ dpi = 399;} //Honor X20 SE
    else if(navigator.userAgent.indexOf("HRY-LX1")!==-1){ dpi = 415;} //Honor 10 Lite
    else if(navigator.userAgent.indexOf("HRY-LX1MEB")!==-1){ dpi = 415;} //Honor 10 Lite
    else if(navigator.userAgent.indexOf("HRY-LX2")!==-1){ dpi = 415;} //Honor 10 Lite
    else if(navigator.userAgent.indexOf("HRY-AL00a")!==-1){ dpi = 415;} //Honor 10 Lite
    else if(navigator.userAgent.indexOf("HRY-AL00")!==-1){ dpi = 415;} //Honor 10 Lite
    else if(navigator.userAgent.indexOf("HRY-TL00")!==-1){ dpi = 415;} //Honor 10 Lite
    else if(navigator.userAgent.indexOf("STK-LX1")!==-1){ dpi = 391;} //Honor 9X
    else if(navigator.userAgent.indexOf("LLD-AL00")!==-1){ dpi = 428;} //Honor 9 Lite
    else if(navigator.userAgent.indexOf("LLD-AL10")!==-1){ dpi = 428;} //Honor 9 Lite
    else if(navigator.userAgent.indexOf("LLD-TL10")!==-1){ dpi = 428;} //Honor 9 Lite
    else if(navigator.userAgent.indexOf("LLD-L31")!==-1){ dpi = 428;} //Honor 9 Lite
    else if(navigator.userAgent.indexOf("LLD-L21")!==-1){ dpi = 428;} //Honor 9 Lite
    else if(navigator.userAgent.indexOf("LLD-L11")!==-1){ dpi = 428;} //Honor 9 Lite
    else if(navigator.userAgent.indexOf("COL-AL10")!==-1){ dpi = 432;} //Honor 10
    else if(navigator.userAgent.indexOf("COL-L29")!==-1){ dpi = 432;} //Honor 10
    else if(navigator.userAgent.indexOf("COL-L19")!==-1){ dpi = 432;} //Honor 10
    else if(navigator.userAgent.indexOf("COL-TL10")!==-1){ dpi = 432;} //Honor 10
    else if(navigator.userAgent.indexOf("CHL-AL00")!==-1){ dpi = 399;} //Honor Play 5T Pro
    else if(navigator.userAgent.indexOf("JLH-AN00")!==-1){ dpi = 387;} //Honor 50 SE
    else if(navigator.userAgent.indexOf("DNN-LX9")!==-1){ dpi = 395;} //Honor 10X Lite
    else if(navigator.userAgent.indexOf("COR-L29")!==-1){ dpi = 409;} //Honor Play
    else if(navigator.userAgent.indexOf("COR-L09")!==-1){ dpi = 409;} //Honor Play
    else if(navigator.userAgent.indexOf("COR-AL00")!==-1){ dpi = 409;} //Honor Play
    else if(navigator.userAgent.indexOf("COR-AL10")!==-1){ dpi = 409;} //Honor Play
    else if(navigator.userAgent.indexOf("COR-TL10")!==-1){ dpi = 409;} //Honor Play
    else if(navigator.userAgent.indexOf("YAL-L21")!==-1){ dpi = 412;} //Honor 20
    else if(navigator.userAgent.indexOf("YAL-AL00")!==-1){ dpi = 412;} //Honor 20
    else if(navigator.userAgent.indexOf("YAL-TL00")!==-1){ dpi = 412;} //Honor 20
    else if(navigator.userAgent.indexOf("KKG-AN00")!==-1){ dpi = 356;} //Honor X10 Max 5G
    else if(navigator.userAgent.indexOf("BMH-AN10")!==-1){ dpi = 403;} //Honor 30
    else if(navigator.userAgent.indexOf("BND-AL10")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-TL10")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-L21")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-L22")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-L24")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-L31")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-L2")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-L34")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("BND-AL00")!==-1){ dpi = 407;} //Honor 7X
    else if(navigator.userAgent.indexOf("YAL-AL10")!==-1){ dpi = 412;} //Honor 20 Pro
    else if(navigator.userAgent.indexOf("YAL-L41")!==-1){ dpi = 412;} //Honor 20 Pro
    else if(navigator.userAgent.indexOf("HRY-LX1T")!==-1){ dpi = 415;} //Honor 20 lite
    else if(navigator.userAgent.indexOf("HLK-AL10")!==-1){ dpi = 391;} //Honor 9X Pro
    else if(navigator.userAgent.indexOf("HLK-TL10")!==-1){ dpi = 391;} //Honor 9X Pro
    else if(navigator.userAgent.indexOf("HLK-L41")!==-1){ dpi = 391;} //Honor 9X Pro
    else if(navigator.userAgent.indexOf("HLK-L42")!==-1){ dpi = 391;} //Honor 9X Pro
    else if(navigator.userAgent.indexOf("YOK-AN10")!==-1){ dpi = 440;} //Honor V40 5G
    else if(navigator.userAgent.indexOf("PCT-AL10")!==-1){ dpi = 398;} //Honor View 20
    else if(navigator.userAgent.indexOf("PCT-TL10")!==-1){ dpi = 398;} //Honor View 20
    else if(navigator.userAgent.indexOf("PCT-L29")!==-1){ dpi = 398;} //Honor View 20
    else if(navigator.userAgent.indexOf("DUA-TL00")!==-1){ dpi = 295;} //Honor 7S
    else if(navigator.userAgent.indexOf("DUA-L22")!==-1){ dpi = 295;} //Honor 7S
    else if(navigator.userAgent.indexOf("DUA-L12")!==-1){ dpi = 295;} //Honor 7S
    else if(navigator.userAgent.indexOf("DUA-AL00")!==-1){ dpi = 295;} //Honor 7S
    else if(navigator.userAgent.indexOf("DUA-LX3")!==-1){ dpi = 295;} //Honor 7S
    else if(navigator.userAgent.indexOf("STF-AL00")!==-1){ dpi = 428;} //Honor 9
    else if(navigator.userAgent.indexOf("STF-AL10")!==-1){ dpi = 428;} //Honor 9
    else if(navigator.userAgent.indexOf("STF-AL10")!==-1){ dpi = 428;} //Honor 9
    else if(navigator.userAgent.indexOf("STF-TL10")!==-1){ dpi = 428;} //Honor 9
    else if(navigator.userAgent.indexOf("STF-L09")!==-1){ dpi = 428;} //Honor 9
    else if(navigator.userAgent.indexOf("STF-L09S")!==-1){ dpi = 428;} //Honor 9
    else if(navigator.userAgent.indexOf("JSN-L21")!==-1){ dpi = 397;} //Honor 9X Lite
    else if(navigator.userAgent.indexOf("JSN-L22")!==-1){ dpi = 397;} //Honor 9X Lite
    else if(navigator.userAgent.indexOf("JSN-L23")!==-1){ dpi = 397;} //Honor 9X Lite
    else if(navigator.userAgent.indexOf("LSA-AN00")!==-1){ dpi = 395;} //Honor 60
    else if(navigator.userAgent.indexOf("TNA-AN00")!==-1){ dpi = 429;} //Honor 60 Pro
    else if(navigator.userAgent.indexOf("ELZ-AN20")!==-1){ dpi = 456;} //Honor Magic3 Pro+
    else if(navigator.userAgent.indexOf("KKG-AN70")!==-1){ dpi = 356;} //Honor X30 Max
    else if(navigator.userAgent.indexOf("TFY-AN00")!==-1){ dpi = 391;} //Honor X30i
    else if(navigator.userAgent.indexOf("ELZ-AN10")!==-1){ dpi = 456;} //Honor Magic3 Pro
    else if(navigator.userAgent.indexOf("ELZ-AN00")!==-1){ dpi = 456;} //Honor Magic3
    else if(navigator.userAgent.indexOf("JLH-AN00")!==-1){ dpi = 387;} //Honor 50 SE
    else if(navigator.userAgent.indexOf("NEW-AN90")!==-1){ dpi = 391;} //Honor Play5 Youth
    else if(navigator.userAgent.indexOf("YOK-AN10")!==-1){ dpi = 440;} //Honor V40 5G
    else if(navigator.userAgent.indexOf("ALA-AN70")!==-1){ dpi = 392;} //Honor V40 Lite
    else if(navigator.userAgent.indexOf("KOZ-AL00")!==-1){ dpi = 269;} //Honor Play 20
    else if(navigator.userAgent.indexOf("NZA-AL00")!==-1){ dpi = 266;} //Honor Play 5T Youth
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 402;
    }
    console.log(dpi);
    return dpi
}
