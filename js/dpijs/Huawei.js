export function deviceCheckHuaweiDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("ANG-L02B")!==-1){ dpi = 392;} //Huawei nova 8 
    else if(navigator.userAgent.indexOf("ANG-L21B")!==-1){ dpi = 392;} //Huawei nova 8 
    else if(navigator.userAgent.indexOf("ANG-L22B")!==-1){ dpi = 392;} //Huawei nova 8 
    else if(navigator.userAgent.indexOf("VOG-L29")!==-1){ dpi = 298;} //Huawei P30 Pro 
    else if(navigator.userAgent.indexOf("VOG-L09")!==-1){ dpi = 298;} //Huawei P30 Pro 
    else if(navigator.userAgent.indexOf("VOG-L04")!==-1){ dpi = 298;} //Huawei P30 Pro 
    else if(navigator.userAgent.indexOf("VOG-AL00")!==-1){ dpi = 298;} //Huawei P30 Pro 
    else if(navigator.userAgent.indexOf("VOG-AL10")!==-1){ dpi = 298;} //Huawei P30 Pro 
    else if(navigator.userAgent.indexOf("VOG-TL00")!==-1){ dpi = 298;} //Huawei P30 Pro 
    else if(navigator.userAgent.indexOf("ELS-N04")!==-1){ dpi = 441;} //Huawei P40 Pro 
    else if(navigator.userAgent.indexOf("ELS-NX9")!==-1){ dpi = 441;} //Huawei P40 Pro 
    else if(navigator.userAgent.indexOf("Huawei nova 8i")!==-1){ dpi = 391;} //Huawei nova 8i 
    else if(navigator.userAgent.indexOf("JNY-L21A")!==-1){ dpi = 398;} //Huawei P40 lite 
    else if(navigator.userAgent.indexOf("JNY-L01A")!==-1){ dpi = 398;} //Huawei P40 lite 
    else if(navigator.userAgent.indexOf("JNY-L21B")!==-1){ dpi = 398;} //Huawei P40 lite 
    else if(navigator.userAgent.indexOf("JNY-L22A")!==-1){ dpi = 398;} //Huawei P40 lite 
    else if(navigator.userAgent.indexOf("JNY-L02A")!==-1){ dpi = 398;} //Huawei P40 lite 
    else if(navigator.userAgent.indexOf("JNY-L22B")!==-1){ dpi = 398;} //Huawei P40 lite 
    else if(navigator.userAgent.indexOf("JNY-LX1")!==-1){ dpi = 398;} //Huawei P40 lite 
    else if(navigator.userAgent.indexOf("MAR-L01A")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-L21A")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-LX1A")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-LX1M")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-LX2")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-L21MEA")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-L22A")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-L22B")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("MAR-LX3A")!==-1){ dpi = 415;} //Huawei P30 lite 
    else if(navigator.userAgent.indexOf("NOH-NX9")!==-1){ dpi = 456;} //Huawei Mate 40 Pro 
    else if(navigator.userAgent.indexOf("NOH-AN00")!==-1){ dpi = 456;} //Huawei Mate 40 Pro 
    else if(navigator.userAgent.indexOf("JNY-LX2")!==-1){ dpi = 398;} //Huawei nova 7i 
    else if(navigator.userAgent.indexOf("ELE-L29")!==-1){ dpi = 422;} //Huawei P30 
    else if(navigator.userAgent.indexOf("ELE-L09")!==-1){ dpi = 422;} //Huawei P30 
    else if(navigator.userAgent.indexOf("ELE-AL00")!==-1){ dpi = 422;} //Huawei P30 
    else if(navigator.userAgent.indexOf("ELE-TL00")!==-1){ dpi = 422;} //Huawei P30 
    else if(navigator.userAgent.indexOf("ELE-L04")!==-1){ dpi = 422;} //Huawei P30 
    else if(navigator.userAgent.indexOf("ANG-AN00")!==-1){ dpi = 392;} //Huawei nova 8 5G 
    else if(navigator.userAgent.indexOf("LYA-L09")!==-1){ dpi = 538;} //Huawei Mate 20 Pro 
    else if(navigator.userAgent.indexOf("LYA-L29")!==-1){ dpi = 538;} //Huawei Mate 20 Pro 
    else if(navigator.userAgent.indexOf("LYA-AL00")!==-1){ dpi = 538;} //Huawei Mate 20 Pro 
    else if(navigator.userAgent.indexOf("LYA-AL10")!==-1){ dpi = 538;} //Huawei Mate 20 Pro 
    else if(navigator.userAgent.indexOf("LYA-TL00")!==-1){ dpi = 538;} //Huawei Mate 20 Pro 
    else if(navigator.userAgent.indexOf("LYA-L0C")!==-1){ dpi = 538;} //Huawei Mate 20 Pro 
    else if(navigator.userAgent.indexOf("YAL-L21")!==-1){ dpi = 412;} //Huawei nova 5T 
    else if(navigator.userAgent.indexOf("YAL-L61")!==-1){ dpi = 412;} //Huawei nova 5T 
    else if(navigator.userAgent.indexOf("YAL-L71")!==-1){ dpi = 412;} //Huawei nova 5T 
    else if(navigator.userAgent.indexOf("YAL-L61D")!==-1){ dpi = 412;} //Huawei nova 5T 
    else if(navigator.userAgent.indexOf("PPA-LX2")!==-1){ dpi = 395;} //Huawei P smart 2021 
    else if(navigator.userAgent.indexOf("CLT-L29C")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-L29")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-L09C")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-L09")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-AL00")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-AL01")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-TL01")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-AL00L")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("CLT-L04")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("HW-01K")!==-1){ dpi = 408;} //Huawei P20 Pro 
    else if(navigator.userAgent.indexOf("Huawei Y7a")!==-1){ dpi = 395;} //Huawei Y7a 
    else if(navigator.userAgent.indexOf("NE-TL00")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-LX1")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-LX2")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-LX3")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-LX2J")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-AL00")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-L23")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-L22")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-L21")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("HWV32")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("ANE-TL00")!==-1){ dpi = 432;} //Huawei P20 lite 
    else if(navigator.userAgent.indexOf("JKM-LX1")!==-1){ dpi = 396;} //Huawei Y9 (2019) Android 
    else if(navigator.userAgent.indexOf("JKM-LX2")!==-1){ dpi = 396;} //Huawei Y9 (2019) Android 
    else if(navigator.userAgent.indexOf("JKM-LX3")!==-1){ dpi = 396;} //Huawei Y9 (2019) Android 
    else if(navigator.userAgent.indexOf("JKM-AL00")!==-1){ dpi = 396;} //Huawei Y9 (2019) Android 
    else if(navigator.userAgent.indexOf("JKM-TL00")!==-1){ dpi = 396;} //Huawei Y9 (2019) Android 
    else if(navigator.userAgent.indexOf("JKM-AL00a")!==-1){ dpi = 396;} //Huawei Y9 (2019) Android 
    else if(navigator.userAgent.indexOf("JKM-AL00b")!==-1){ dpi = 396;} //Huawei Y9 (2019) Android 
    else if(navigator.userAgent.indexOf("ANA-AN00")!==-1){ dpi = 422;} //Huawei P40 
    else if(navigator.userAgent.indexOf("ANA-TN00")!==-1){ dpi = 422;} //Huawei P40 
    else if(navigator.userAgent.indexOf("ANA-NX9")!==-1){ dpi = 422;} //Huawei P40 
    else if(navigator.userAgent.indexOf("ANA-LX4")!==-1){ dpi = 422;} //Huawei P40 
    else if(navigator.userAgent.indexOf("STK-L21")!==-1){ dpi = 391;} //Huawei Y9 Prime (2019) 
    else if(navigator.userAgent.indexOf("STK-L22")!==-1){ dpi = 391;} //Huawei Y9 Prime (2019) 
    else if(navigator.userAgent.indexOf("INE-LX1")!==-1){ dpi = 409;} //Huawei nova 3i 
    else if(navigator.userAgent.indexOf("INE-LX1r")!==-1){ dpi = 409;} //Huawei nova 3i 
    else if(navigator.userAgent.indexOf("Sydney 6353")!==-1){ dpi = 409;} //Huawei nova 3i 
    else if(navigator.userAgent.indexOf("INE-LX2r")!==-1){ dpi = 409;} //Huawei nova 3i 
    else if(navigator.userAgent.indexOf("INE-AL00")!==-1){ dpi = 409;} //Huawei nova 3i 
    else if(navigator.userAgent.indexOf("INE-TL00")!==-1){ dpi = 409;} //Huawei nova 3i 
    else if(navigator.userAgent.indexOf("MED-LX9")!==-1){ dpi = 278;} //Huawei Y6p 
    else if(navigator.userAgent.indexOf("MED-LX9N")!==-1){ dpi = 278;} //Huawei Y6p 
    else if(navigator.userAgent.indexOf("BRQ-AN00")!==-1){ dpi = 439;} //Huawei nova 8 Pro 5G 
    else if(navigator.userAgent.indexOf("JEF-AN00")!==-1){ dpi = 403;} //Huawei nova 7 5G 
    else if(navigator.userAgent.indexOf("JEF-NX9")!==-1){ dpi = 403;} //Huawei nova 7 5G 
    else if(navigator.userAgent.indexOf("JEF-AN20")!==-1){ dpi = 403;} //Huawei nova 7 5G 
    else if(navigator.userAgent.indexOf("EML-L29C")!==-1){ dpi = 429;} //Huawei P20 
    else if(navigator.userAgent.indexOf("EML-L09C")!==-1){ dpi = 429;} //Huawei P20 
    else if(navigator.userAgent.indexOf("EML-L29")!==-1){ dpi = 429;} //Huawei P20 
    else if(navigator.userAgent.indexOf("EML-L09")!==-1){ dpi = 429;} //Huawei P20 
    else if(navigator.userAgent.indexOf("EML-AL00")!==-1){ dpi = 429;} //Huawei P20 
    else if(navigator.userAgent.indexOf("EML-TL00")!==-1){ dpi = 429;} //Huawei P20 
    else if(navigator.userAgent.indexOf("BLA-L29")!==-1){ dpi = 402;} //Huawei Mate 10 Pro 
    else if(navigator.userAgent.indexOf("BLA-L09")!==-1){ dpi = 402;} //Huawei Mate 10 Pro 
    else if(navigator.userAgent.indexOf("BLA-AL00")!==-1){ dpi = 402;} //Huawei Mate 10 Pro 
    else if(navigator.userAgent.indexOf("BLA-A09")!==-1){ dpi = 402;} //Huawei Mate 10 Pro 
    else if(navigator.userAgent.indexOf("FRL-22")!==-1){ dpi = 397;} //Huawei Y9a 
    else if(navigator.userAgent.indexOf("FRL-23")!==-1){ dpi = 397;} //Huawei Y9a 
    else if(navigator.userAgent.indexOf("FRL-L22")!==-1){ dpi = 397;} //Huawei Y9a 
    else if(navigator.userAgent.indexOf("LIO-L09")!==-1){ dpi = 409;} //Huawei Mate 30 Pro 
    else if(navigator.userAgent.indexOf("LIO-L29")!==-1){ dpi = 409;} //Huawei Mate 30 Pro 
    else if(navigator.userAgent.indexOf("LIO-AL00")!==-1){ dpi = 409;} //Huawei Mate 30 Pro 
    else if(navigator.userAgent.indexOf("LIO-TL00")!==-1){ dpi = 409;} //Huawei Mate 30 Pro 
    else if(navigator.userAgent.indexOf("MRD-LX1F")!==-1){ dpi = 282;} //Huawei Y6 (2019) 
    else if(navigator.userAgent.indexOf("MRD-LX1")!==-1){ dpi = 282;} //Huawei Y6 (2019) 
    else if(navigator.userAgent.indexOf("MRD-LX3")!==-1){ dpi = 282;} //Huawei Y6 (2019) 
    else if(navigator.userAgent.indexOf("MRD-LX1N")!==-1){ dpi = 282;} //Huawei Y6 (2019) 
    else if(navigator.userAgent.indexOf("DUB-LX1")!==-1){ dpi = 269;} //Huawei Y7 (2019) 
    else if(navigator.userAgent.indexOf("DUB-LX3")!==-1){ dpi = 269;} //Huawei Y7 (2019) 
    else if(navigator.userAgent.indexOf("CHL-AL60")!==-1){ dpi = 399;} //Huawei nova 8 SE Youth 
    else if(navigator.userAgent.indexOf("STK-LX3")!==-1){ dpi = 391;} //Huawei Y9s 
    else if(navigator.userAgent.indexOf("ART-L28")!==-1){ dpi = 269;} //Huawei Y7p 
    else if(navigator.userAgent.indexOf("ART-L29")!==-1){ dpi = 269;} //Huawei Y7p 
    else if(navigator.userAgent.indexOf("FIG-LX1")!==-1){ dpi = 427;} //Huawei P smart 
    else if(navigator.userAgent.indexOf("FIG-LA1")!==-1){ dpi = 427;} //Huawei P smart 
    else if(navigator.userAgent.indexOf("FIG-LX2")!==-1){ dpi = 427;} //Huawei P smart 
    else if(navigator.userAgent.indexOf("FIG-LX3")!==-1){ dpi = 427;} //Huawei P smart 
    else if(navigator.userAgent.indexOf("FIG-TL10")!==-1){ dpi = 427;} //Huawei P smart 
    else if(navigator.userAgent.indexOf("FIG-AL10")!==-1){ dpi = 427;} //Huawei P smart 
    else if(navigator.userAgent.indexOf("POT-LX1")!==-1){ dpi = 415;} //Huawei P smart 2019 
    else if(navigator.userAgent.indexOf("POT-LX1AF")!==-1){ dpi = 415;} //Huawei P smart 2019 
    else if(navigator.userAgent.indexOf("POT-LX2J")!==-1){ dpi = 415;} //Huawei P smart 2019 
    else if(navigator.userAgent.indexOf("POT-LX1RUA")!==-1){ dpi = 415;} //Huawei P smart 2019 
    else if(navigator.userAgent.indexOf("POT-LX3")!==-1){ dpi = 415;} //Huawei P smart 2019 
    else if(navigator.userAgent.indexOf("POT-LX1A")!==-1){ dpi = 415;} //Huawei P smart 2019 
    else if(navigator.userAgent.indexOf("AMN-LX9")!==-1){ dpi = 295;} //Huawei Y5
    else if(navigator.userAgent.indexOf("AMN-LX1")!==-1){ dpi = 295;} //Huawei Y5
    else if(navigator.userAgent.indexOf("AMN-LX2")!==-1){ dpi = 295;} //Huawei Y5
    else if(navigator.userAgent.indexOf("AMN-LX3")!==-1){ dpi = 295;} //Huawei Y5
    else if(navigator.userAgent.indexOf("RNE-L21")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("RNE-L22")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("RNE-L01")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("RNE-L02")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("RNE-L11")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("RNE-L23")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("RNE-L03")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("RNE-AL00")!==-1){ dpi = 409;} //Huawei Mate 10 Lite 
    else if(navigator.userAgent.indexOf("WAS-LX1")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("WAS-LX2")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("WAS-LX3")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("WAS-LX1A")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("WAS-LX2J")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("WAS-L03T")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("WAS-AL00")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("WAS-TL10")!==-1){ dpi = 424;} //Huawei P10 Lite 
    else if(navigator.userAgent.indexOf("TET-AN00")!==-1){ dpi = 413;} //Huawei Mate X2 
    else if(navigator.userAgent.indexOf("HMA-L29")!==-1){ dpi = 381;} //Huawei Mate 20
    else if(navigator.userAgent.indexOf("HMA-L09")!==-1){ dpi = 381;} //Huawei Mate 20
    else if(navigator.userAgent.indexOf("HMA-LX9")!==-1){ dpi = 381;} //Huawei Mate 20
    else if(navigator.userAgent.indexOf("HMA-AL00")!==-1){ dpi = 381;} //Huawei Mate 20
    else if(navigator.userAgent.indexOf("HMA-TL00")!==-1){ dpi = 381;} //Huawei Mate 20
    else if(navigator.userAgent.indexOf("VTR-L29")!==-1){ dpi = 432;} //Huawei P10 
    else if(navigator.userAgent.indexOf("VTR-AL00")!==-1){ dpi = 432;} //Huawei P10 
    else if(navigator.userAgent.indexOf("VTR-TL00")!==-1){ dpi = 432;} //Huawei P10 
    else if(navigator.userAgent.indexOf("VTR-L09")!==-1){ dpi = 432;} //Huawei P10 
    else if(navigator.userAgent.indexOf("SNE-AL00")!==-1){ dpi = 409;} //Huawei Mate 20 lite 
    else if(navigator.userAgent.indexOf("SNE-LX1")!==-1){ dpi = 409;} //Huawei Mate 20 lite 
    else if(navigator.userAgent.indexOf("SNE-LX2")!==-1){ dpi = 409;} //Huawei Mate 20 lite 
    else if(navigator.userAgent.indexOf("SNE-LX3")!==-1){ dpi = 409;} //Huawei Mate 20 lite 
    else if(navigator.userAgent.indexOf("INE-LX2")!==-1){ dpi = 409;} //Huawei Mate 20 lite 
    else if(navigator.userAgent.indexOf("ELS-N39")!==-1){ dpi = 441;} //Huawei P40 Pro+ 
    else if(navigator.userAgent.indexOf("ELS-AN10")!==-1){ dpi = 441;} //Huawei P40 Pro+ 
    else if(navigator.userAgent.indexOf("OCE-AN10")!==-1){ dpi = 402;} //Huawei Mate 40 
    else if(navigator.userAgent.indexOf("AQM-LX1")!==-1){ dpi = 418;} //Huawei Y8p 
    else if(navigator.userAgent.indexOf("NOP-AN00")!==-1){ dpi = 456;} //Huawei Mate 40 Pro+ 
    else if(navigator.userAgent.indexOf("ANA-AL00")!==-1){ dpi = 424;} //Huawei P40 4G 
    else if(navigator.userAgent.indexOf("NAM-AL00")!==-1){ dpi = 392;} //Huawei nova 9
    else if(navigator.userAgent.indexOf("NAM-LX9")!==-1){ dpi = 392;} //Huawei nova 9
    else if(navigator.userAgent.indexOf("JAD-AL50")!==-1){ dpi = 450;} //Huawei P50 Pro
    else if(navigator.userAgent.indexOf("RTE-AL00")!==-1){ dpi = 439;} //Huawei nova 9 Pro
    else if(navigator.userAgent.indexOf("NEN-L22")!==-1){ dpi = 391;} //Huawei nova 8i
    else if(navigator.userAgent.indexOf("NOH-AL00")!==-1){ dpi = 456;} //Huawei Mate 40 Pro 4G
    else if(navigator.userAgent.indexOf("TET-AN00")!==-1){ dpi = 413;} //Huawei Mate X2
    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 415;
    }
    console.log(dpi);
    return dpi
}