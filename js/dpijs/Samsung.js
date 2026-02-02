export function deviceCheckSamsungDevice() {
    var dpi;
  
    if(navigator.userAgent.indexOf("SM-A528")!==-1){ dpi = 405;} //Samsung Galaxy A52s 5G
    else if(navigator.userAgent.indexOf("SM-F958N")!==-1){ dpi =367;} //Samsung Galaxy Z Fold Special
    else if(navigator.userAgent.indexOf("SM-A165")!==-1){ dpi =385;} //Samsung Galaxy A16
    else if(navigator.userAgent.indexOf("SM-A166")!==-1){ dpi =385;} //Samsung Galaxy A16 5G
    else if(navigator.userAgent.indexOf("SM-S721")!==-1){ dpi =385;} //Samsung Galaxy S24 FE
    else if(navigator.userAgent.indexOf("SM-X92")!==-1){ dpi =239;} //Samsung Galaxy Tab S10 Ultra
    else if(navigator.userAgent.indexOf("SM-X82")!==-1){ dpi =266;} //Samsung Galaxy Tab S10+
    else if(navigator.userAgent.indexOf("SM-M558B")!==-1){ dpi =393;} //Samsung Galaxy M55s
    else if(navigator.userAgent.indexOf("SM-E055F")!==-1){ dpi =262;} //Samsung Galaxy F05
    else if(navigator.userAgent.indexOf("M-M055F")!==-1){ dpi =262;} //Samsung Galaxy M05
    else if(navigator.userAgent.indexOf("SM-A065")!==-1){ dpi =262;} //Samsung Galaxy A06
    else if(navigator.userAgent.indexOf("SM-E145F")!==-1){ dpi =393;} //Samsung Galaxy F14 4G
    else if(navigator.userAgent.indexOf("SM-F956")!==-1){ dpi =410;} //Samsung Galaxy Z Fold6
    else if(navigator.userAgent.indexOf("SM-F741")!==-1){ dpi =306;} //Samsung Galaxy Z Flip6
    else if(navigator.userAgent.indexOf("SM-M356B")!==-1){ dpi =390;} //Samsung Galaxy M35
    else if(navigator.userAgent.indexOf("SM-E556B")!==-1){ dpi =393;} //Samsung Galaxy F55
    else if(navigator.userAgent.indexOf("SM-C5560")!==-1){ dpi =393;} //Samsung Galaxy C55
    else if(navigator.userAgent.indexOf("SM-M556B")!==-1){ dpi =393;} //Samsung Galaxy M55
    else if(navigator.userAgent.indexOf("SM-P62")!==-1){ dpi =224;} //Samsung Galaxy Tab S6 Lite (2024)
    else if(navigator.userAgent.indexOf("SM-A556")!==-1){ dpi =390;} //Samsung Galaxy A55
    else if(navigator.userAgent.indexOf("SM-A356")!==-1){ dpi =390;} //Samsung Galaxy A35
    else if(navigator.userAgent.indexOf("SM-M156")!==-1){ dpi =396;} //Samsung Galaxy M15
    else if(navigator.userAgent.indexOf("SM-M145F")!==-1){ dpi =394;} //Samsung Galaxy M14 4G
    else if(navigator.userAgent.indexOf("SM-E156B")!==-1){ dpi =390;} //Samsung Galaxy F15
    else if(navigator.userAgent.indexOf("SM-S928")!==-1){ dpi =505;} //Samsung Galaxy S24 Ultra
    else if(navigator.userAgent.indexOf("SM-S926")!==-1){ dpi =513;} //Samsung Galaxy S24+
    else if(navigator.userAgent.indexOf("SM-S921")!==-1){ dpi =416;} //Samsung Galaxy S24
    else if(navigator.userAgent.indexOf("SM-G556")!==-1){ dpi =400;} //Samsung Galaxy XCover7
    else if(navigator.userAgent.indexOf("SM-X306B")!==-1){ dpi =283;} //Samsung Galaxy Tab Active5
    else if(navigator.userAgent.indexOf("SM-A256")!==-1){ dpi =396;} //Samsung Galaxy A25
    else if(navigator.userAgent.indexOf("SM-A156")!==-1){ dpi =396;} //Samsung Galaxy A15 5G
    else if(navigator.userAgent.indexOf("SM-A155")!==-1){ dpi =396;} //Samsung Galaxy A15
    else if(navigator.userAgent.indexOf("SM-X11")!==-1){ dpi =179;} //Samsung Galaxy Tab A9
    else if(navigator.userAgent.indexOf("SM-S711")!==-1){ dpi =403;} //Samsung Galaxy S23 FE
    else if(navigator.userAgent.indexOf("SM-X61")!==-1){ dpi =243;} //Samsung Galaxy Tab S9 FE
    else if(navigator.userAgent.indexOf("SM-X51")!==-1){ dpi =249;} //Samsung Galaxy Tab S9 FE
    else if(navigator.userAgent.indexOf("SM-A057")!==-1){ dpi =393;} //Samsung Galaxy A05s
    else if(navigator.userAgent.indexOf("SM-A055")!==-1){ dpi =262;} //Samsung Galaxy A05
    else if(navigator.userAgent.indexOf("SM-E346B")!==-1){ dpi =396;} //Samsung Galaxy F34
    else if(navigator.userAgent.indexOf("SM-F946")!==-1){ dpi =373;} //Samsung Galaxy Z Fold5
    else if(navigator.userAgent.indexOf("SM-X91")!==-1){ dpi =239;} //Samsung Galaxy Tab S9 Ultra
    else if(navigator.userAgent.indexOf("SM-X81")!==-1){ dpi =266;} //Samsung Galaxy Tab S9+
    else if(navigator.userAgent.indexOf("SM-X71")!==-1){ dpi =274;} //Samsung Galaxy Tab S9
    else if(navigator.userAgent.indexOf("SM-M346")!==-1){ dpi =396;} //Samsung Galaxy M34 5G
    else if(navigator.userAgent.indexOf("SM-E546B")!==-1){ dpi =393;} //Samsung Galaxy F54
    else if(navigator.userAgent.indexOf("SM-A245")!==-1){ dpi =396;} //Samsung Galaxy A24 4G
    else if(navigator.userAgent.indexOf("SM-E146B")!==-1){ dpi =400;} //Samsung Galaxy F14
    else if(navigator.userAgent.indexOf("SM-M546B")!==-1){ dpi =393;} //Samsung Galaxy M54
    else if(navigator.userAgent.indexOf("SM-A546")!==-1){ dpi =403;} //Samsung Galaxy A54
    else if(navigator.userAgent.indexOf("SM-A346")!==-1){ dpi =390;} //Samsung Galaxy A34
    else if(navigator.userAgent.indexOf("SM-M146")!==-1){ dpi =400;} //Samsung Galaxy M14
    else if(navigator.userAgent.indexOf("SM-S918")!==-1){ dpi =500;} //Samsung Galaxy S23 Ultra
    else if(navigator.userAgent.indexOf("SM-S916")!==-1){ dpi =393;} //Samsung Galaxy S23+
    else if(navigator.userAgent.indexOf("SM-S911")!==-1){ dpi =425;} //Samsung Galaxy S23
    else if(navigator.userAgent.indexOf("SM-A145")!==-1){ dpi =400;} //Samsung Galaxy A14
    else if(navigator.userAgent.indexOf("SM-A146")!==-1){ dpi =400;} //Samsung Galaxy A14 5G
    else if(navigator.userAgent.indexOf("SM-E045F")!==-1){ dpi =270;} //Samsung Galaxy F04
    else if(navigator.userAgent.indexOf("SM-M045F")!==-1){ dpi =270;} //Samsung Galaxy M04
    else if(navigator.userAgent.indexOf("SM-T509")!==-1){ dpi =224;} //Samsung Galaxy Tab A7 10.4
    else if(navigator.userAgent.indexOf("SM-A042")!==-1){ dpi =270;} //Samsung Galaxy A04e
    else if(navigator.userAgent.indexOf("SM-T636")!==-1){ dpi =224;} //Samsung Galaxy Tab Active4 Pro
    else if(navigator.userAgent.indexOf("SM-A047")!==-1){ dpi =270;} //Samsung Galaxy A04s
    else if(navigator.userAgent.indexOf("SM-A045")!==-1){ dpi =270;} //Samsung Galaxy A04
    else if(navigator.userAgent.indexOf("SM-F936")!==-1){ dpi =373;} //Samsung Galaxy Z Fold4
    else if(navigator.userAgent.indexOf("SM-F721")!==-1){ dpi =426;} //Samsung Galaxy Z Flip4
    else if(navigator.userAgent.indexOf("SM-A236")!==-1){ dpi =400;} //Samsung Galaxy A23 5G
    else if(navigator.userAgent.indexOf("SM-M136")!==-1){ dpi =270;} //Samsung Galaxy M13 5G
    else if(navigator.userAgent.indexOf("SM-A137F")!==-1){ dpi =400;} //Samsung Galaxy A13
    else if(navigator.userAgent.indexOf("SM-G736")!==-1){ dpi =400;} //Samsung Galaxy XCover6 Pro
    else if(navigator.userAgent.indexOf("SM-E135F")!==-1){ dpi =400;} //Samsung Galaxy F13
    else if(navigator.userAgent.indexOf("SM-M135F")!==-1){ dpi =400;} //Samsung Galaxy M13
    else if(navigator.userAgent.indexOf("SM-P61")!==-1){ dpi =224;} //Samsung Galaxy Tab S6 Lite
    else if(navigator.userAgent.indexOf("SM-M536B")!==-1){ dpi =394;} //Samsung Galaxy M53
    else if(navigator.userAgent.indexOf("SM-G781NK")!==-1){ dpi =405;} //Samsung Galaxy S20 FE 2022
    else if(navigator.userAgent.indexOf("SM-A736B")!==-1){ dpi =393;} //Samsung Galaxy A73 5G
    else if(navigator.userAgent.indexOf("SM-A536")!==-1){ dpi =405;} //Samsung Galaxy A53 5G
    else if(navigator.userAgent.indexOf("SM-A336")!==-1){ dpi =411;} //Samsung Galaxy A33 5G
    else if(navigator.userAgent.indexOf("SM-E236")!==-1){ dpi =400;} //Samsung Galaxy F23
    else if(navigator.userAgent.indexOf("SM-M336")!==-1){ dpi =400;} //Samsung Galaxy M33
    else if(navigator.userAgent.indexOf("SM-M236")!==-1){ dpi =400;} //Samsung Galaxy M23
    else if(navigator.userAgent.indexOf("SM-A235")!==-1){ dpi =400;} //Samsung Galaxy A23
    else if(navigator.userAgent.indexOf("SM-A135")!==-1){ dpi =400;} //Samsung Galaxy A13
    else if(navigator.userAgent.indexOf("SM-S908")!==-1){ dpi =500;} //Samsung Galaxy S22 Ultra 5G
    else if(navigator.userAgent.indexOf("SM-S906")!==-1){ dpi =393;} //Samsung Galaxy S22+ 5G
    else if(navigator.userAgent.indexOf("SM-S901")!==-1){ dpi =425;} //Samsung Galaxy S22 5G
    else if(navigator.userAgent.indexOf("SM-X90")!==-1){ dpi =240;} //Samsung Galaxy Tab S8 Ultra
    else if(navigator.userAgent.indexOf("SM-X80")!==-1){ dpi =266;} //Samsung Galaxy Tab S8+
    else if(navigator.userAgent.indexOf("SM-X70")!==-1){ dpi =274;} //Samsung Galaxy Tab S8
    else if(navigator.userAgent.indexOf("SM-G990")!==-1){ dpi =403;} //Samsung Galaxy S21 FE 5G
    else if(navigator.userAgent.indexOf("SM-X20")!==-1){ dpi =216;} //Samsung Galaxy Tab A8 10.5
    else if(navigator.userAgent.indexOf("SM-A136")!==-1){ dpi =270;} //Samsung Galaxy A13 5G
    else if(navigator.userAgent.indexOf("SM-A035")!==-1){ dpi =270;} //Samsung Galaxy A03
    else if(navigator.userAgent.indexOf("SM-A032")!==-1){ dpi =270;} //Samsung Galaxy A03 Core
    else if(navigator.userAgent.indexOf("SM-E426B")!==-1){ dpi =400;} //Samsung Galaxy F42 5G
    else if(navigator.userAgent.indexOf("SM-M526B")!==-1){ dpi =393;} //Samsung Galaxy M52 5G
    else if(navigator.userAgent.indexOf("SM-M225FV")!==-1){ dpi =274;} //Samsung Galaxy M22
    else if(navigator.userAgent.indexOf("SM-M326B")!==-1){ dpi =270;} //Samsung Galaxy M32 5G
    else if(navigator.userAgent.indexOf("SM-G998")!==-1){ dpi = 515;} //Samsung Galaxy S21 Ultra 5G
    else if(navigator.userAgent.indexOf("SM-A525")!==-1){ dpi = 407;} //Samsung Galaxy A52
    else if(navigator.userAgent.indexOf("SM-A325")!==-1){ dpi = 411;} //Samsung Galaxy A32
    else if(navigator.userAgent.indexOf("SM-F926")!==-1){ dpi = 374;} //Samsung Galaxy Z Fold3 5G
    else if(navigator.userAgent.indexOf("SM-F711")!==-1){ dpi = 426;} //Samsung Galaxy Z Flip3 5G
    else if(navigator.userAgent.indexOf("SM-G991")!==-1){ dpi = 421;} //Samsung Galaxy S21 5G
    else if(navigator.userAgent.indexOf("SM-A725")!==-1){ dpi = 394;} //Samsung Galaxy A72
    else if(navigator.userAgent.indexOf("SM-A225")!==-1){ dpi = 274;} //Samsung Galaxy A22
    else if(navigator.userAgent.indexOf("SM-A326")!==-1){ dpi = 270;} //Samsung Galaxy A32 5G
    else if(navigator.userAgent.indexOf("SM-A526")!==-1){ dpi = 407;} //Samsung Galaxy A52 5G
    else if(navigator.userAgent.indexOf("SM-A226")!==-1){ dpi = 399;} //Samsung Galaxy A22 5G
    else if(navigator.userAgent.indexOf("SM-A035")!==-1){ dpi = 270;} //Samsung Galaxy A03s
    else if(navigator.userAgent.indexOf("SM-G996")!==-1){ dpi = 394;} //Samsung Galaxy S21+ 5G
    else if(navigator.userAgent.indexOf("SM-M325")!==-1){ dpi = 411;} //Samsung Galaxy M32
    else if(navigator.userAgent.indexOf("SM-A022")!==-1){ dpi = 270;} //Samsung Galaxy A02
    else if(navigator.userAgent.indexOf("SM-M127")!==-1){ dpi = 270;} //Samsung Galaxy M12
    else if(navigator.userAgent.indexOf("SM-M215")!==-1){ dpi = 403;} //Samsung Galaxy M21 2021
    else if(navigator.userAgent.indexOf("SM-E625")!==-1){ dpi = 393;} //Samsung Galaxy F62
    else if(navigator.userAgent.indexOf("SM-E225")!==-1){ dpi = 274;} //Samsung Galaxy F22
    else if(navigator.userAgent.indexOf("SM-M625")!==-1){ dpi = 393;} //Samsung Galaxy M62
    else if(navigator.userAgent.indexOf("SM-A127")!==-1){ dpi = 270;} //Samsung Galaxy A12 Nacho
    else if(navigator.userAgent.indexOf("SM-M426")!==-1){ dpi = 266;} //Samsung Galaxy M42 5G
    else if(navigator.userAgent.indexOf("SM-M025")!==-1){ dpi = 270;} //Samsung Galaxy M02s
    else if(navigator.userAgent.indexOf("SM-E526")!==-1){ dpi = 400;} //Samsung Galaxy F52 5G
    else if(navigator.userAgent.indexOf("SM-A826")!==-1){ dpi = 524;} //Samsung Galaxy Quantum 2
    else if(navigator.userAgent.indexOf("SM-M022")!==-1){ dpi = 270;} //Samsung Galaxy M02
    else if(navigator.userAgent.indexOf("SM-G525")!==-1){ dpi = 311;} //Samsung Galaxy Xcover 5
    else if(navigator.userAgent.indexOf("SM-F127")!==-1){ dpi = 270;} //Samsung Galaxy F12
    else if(navigator.userAgent.indexOf("SM-M326")!==-1){ dpi = 270;} //Samsung Galaxy M32 5G
    else if(navigator.userAgent.indexOf("SM-E025")!==-1){ dpi = 270;} //Samsung Galaxy F02s
    else if(navigator.userAgent.indexOf("SM-A125")!==-1){ dpi = 270;} //Samsung Galaxy A12
    else if(navigator.userAgent.indexOf("SM-G781")!==-1){ dpi = 407;} //Samsung Galaxy S20 FE 5G
    else if(navigator.userAgent.indexOf("SM-A217")!==-1){ dpi = 270;} //Samsung Galaxy A21s
    else if(navigator.userAgent.indexOf("SM-N986")!==-1){ dpi = 496;} //Samsung Galaxy Note20 Ultra 5G
    else if(navigator.userAgent.indexOf("SM-A025")!==-1){ dpi = 270;} //Samsung Galaxy A02s
    else if(navigator.userAgent.indexOf("SM-G780")!==-1){ dpi = 407;} //Samsung Galaxy S20 FE
    else if(navigator.userAgent.indexOf("SM-G980")!==-1){ dpi = 563;} //Samsung Galaxy S20
    else if(navigator.userAgent.indexOf("SM-M515")!==-1){ dpi = 393;} //Samsung Galaxy M51
    else if(navigator.userAgent.indexOf("SM-A115")!==-1){ dpi = 268;} //Samsung Galaxy A11
    else if(navigator.userAgent.indexOf("SM-G988")!==-1){ dpi = 511;} //Samsung Galaxy S20 Ultra 5G
    else if(navigator.userAgent.indexOf("SM-M315")!==-1){ dpi = 403;} //Samsung Galaxy M31
    else if(navigator.userAgent.indexOf("SM-A315")!==-1){ dpi = 411;} //Samsung Galaxy A31
    else if(navigator.userAgent.indexOf("SM-A215")!==-1){ dpi = 270;} //Samsung Galaxy A21
    else if(navigator.userAgent.indexOf("SM-N980")!==-1){ dpi = 393;} //Samsung Galaxy Note20
    else if(navigator.userAgent.indexOf("SM-G985")!==-1){ dpi = 525;} //Samsung Galaxy S20+
    else if(navigator.userAgent.indexOf("SM-M115")!==-1){ dpi = 268;} //Samsung Galaxy M11
    else if(navigator.userAgent.indexOf("SM-A426")!==-1){ dpi = 266;} //Samsung Galaxy A42 5G
    else if(navigator.userAgent.indexOf("SM-M317")!==-1){ dpi = 405;} //Samsung Galaxy M31s
    else if(navigator.userAgent.indexOf("SM-M215")!==-1){ dpi = 403;} //Samsung Galaxy M21
    else if(navigator.userAgent.indexOf("SM-N985")!==-1){ dpi = 496;} //Samsung Galaxy Note20 Ultra
    else if(navigator.userAgent.indexOf("SM-A013")!==-1){ dpi = 311;} //Samsung Galaxy A01 Core
    else if(navigator.userAgent.indexOf("SM-N770")!==-1){ dpi = 394;} //Samsung Galaxy Note10 Lite
    else if(navigator.userAgent.indexOf("SM-F916")!==-1){ dpi = 373;} //Samsung Galaxy Z Fold2 5G
    else if(navigator.userAgent.indexOf("SM-G981")!==-1){ dpi = 563;} //Samsung Galaxy S20 5G
    else if(navigator.userAgent.indexOf("SM-F700")!==-1){ dpi = 425;} //Samsung Galaxy Z Flip
    else if(navigator.userAgent.indexOf("SM-A415")!==-1){ dpi = 431;} //Samsung Galaxy A41
    else if(navigator.userAgent.indexOf("SM-G988")!==-1){ dpi = 511;} //Samsung Galaxy S20 Ultra
    else if(navigator.userAgent.indexOf("SM-A516")!==-1){ dpi = 405;} //Samsung Galaxy A51 5G
    else if(navigator.userAgent.indexOf("SM-G986")!==-1){ dpi = 525;} //Samsung Galaxy S20+ 5G
    else if(navigator.userAgent.indexOf("SM-G770")!==-1){ dpi = 394;} //Samsung Galaxy S10 Lite
    else if(navigator.userAgent.indexOf("SM-N981")!==-1){ dpi = 393;} //Samsung Galaxy Note20 5G
    else if(navigator.userAgent.indexOf("SM-A716")!==-1){ dpi = 393;} //Samsung Galaxy A71 5G
    else if(navigator.userAgent.indexOf("SM-F415")!==-1){ dpi = 403;} //Samsung Galaxy F41
    else if(navigator.userAgent.indexOf("SM-F707")!==-1){ dpi = 425;} //Samsung Galaxy Z Flip 5G
    else if(navigator.userAgent.indexOf("SM-M015")!==-1){ dpi = 294;} //Samsung Galaxy M01
    else if(navigator.userAgent.indexOf("SM-G715")!==-1){ dpi = 409;} //Samsung Galaxy Xcover Pro
    else if(navigator.userAgent.indexOf("SM-M013")!==-1){ dpi = 311;} //Samsung Galaxy M01 Core
    else if(navigator.userAgent.indexOf("SM-F415")!==-1){ dpi = 403;} //Samsung Galaxy M21s
    else if(navigator.userAgent.indexOf("SM-M315")!==-1){ dpi = 403;} //Samsung Galaxy M31 Prime
    else if(navigator.userAgent.indexOf("SM-M017")!==-1){ dpi = 271;} //Samsung Galaxy M01s
    else if(navigator.userAgent.indexOf("SM-A516V")!==-1){ dpi = 405;} //Samsung Galaxy A51 5G UW
    else if(navigator.userAgent.indexOf("SM-J260")!==-1){ dpi = 220;} //Samsung Galaxy J2 Core (2020)
    else if(navigator.userAgent.indexOf("SM-G981V")!==-1){ dpi = 566;} //Samsung Galaxy S20 5G UW
    else if(navigator.userAgent.indexOf("SM-A716")!==-1){ dpi = 393;} //Samsung Galaxy A Quantum
    else if(navigator.userAgent.indexOf("SM-A515")!==-1){ dpi = 405;} //Samsung Galaxy A51
    else if(navigator.userAgent.indexOf("SM-G973")!==-1){ dpi = 550;} //Samsung Galaxy S10
    else if(navigator.userAgent.indexOf("SM-G975")!==-1){ dpi = 522;} //Samsung Galaxy S10+
    else if(navigator.userAgent.indexOf("SM-A715")!==-1){ dpi = 393;} //Samsung Galaxy A71
    else if(navigator.userAgent.indexOf("SM-N975")!==-1){ dpi = 498;} //Samsung Galaxy Note10+
    else if(navigator.userAgent.indexOf("SM-A505")!==-1){ dpi = 403;} //Samsung Galaxy A50
    else if(navigator.userAgent.indexOf("SM-G970")!==-1){ dpi = 438;} //Samsung Galaxy S10e
    else if(navigator.userAgent.indexOf("SM-N970")!==-1){ dpi = 401;} //Samsung Galaxy Note10
    else if(navigator.userAgent.indexOf("SM-A205")!==-1){ dpi = 268;} //Samsung Galaxy A20
    else if(navigator.userAgent.indexOf("SM-A705")!==-1){ dpi = 393;} //Samsung Galaxy A70
    else if(navigator.userAgent.indexOf("SM-A105")!==-1){ dpi = 271;} //Samsung Galaxy A10
    else if(navigator.userAgent.indexOf("SM-A107")!==-1){ dpi = 271;} //Samsung Galaxy A10s
    else if(navigator.userAgent.indexOf("SM-A305")!==-1){ dpi = 403;} //Samsung Galaxy A30
    else if(navigator.userAgent.indexOf("SM-G977")!==-1){ dpi = 502;} //Samsung Galaxy S10 5G
    else if(navigator.userAgent.indexOf("SM-A207")!==-1){ dpi = 264;} //Samsung Galaxy A20s
    else if(navigator.userAgent.indexOf("SM-A015")!==-1){ dpi = 294;} //Samsung Galaxy A01
    else if(navigator.userAgent.indexOf("SM-A307")!==-1){ dpi = 268;} //Samsung Galaxy A30s
    else if(navigator.userAgent.indexOf("SM-A507")!==-1){ dpi = 403;} //Samsung Galaxy A50s
    else if(navigator.userAgent.indexOf("SM-A405")!==-1){ dpi = 437;} //Samsung Galaxy A40
    else if(navigator.userAgent.indexOf("SM-A805")!==-1){ dpi = 393;} //Samsung Galaxy A80
    else if(navigator.userAgent.indexOf("SM-M205")!==-1){ dpi = 409;} //Samsung Galaxy M20
    else if(navigator.userAgent.indexOf("SM-N976")!==-1){ dpi = 498;} //Samsung Galaxy Note10+ 
    else if(navigator.userAgent.indexOf("SM-A202")!==-1){ dpi = 296;} //Samsung Galaxy A20e
    else if(navigator.userAgent.indexOf("SM-A260")!==-1){ dpi = 220;} //Samsung Galaxy A2 Core
    else if(navigator.userAgent.indexOf("SM-A102")!==-1){ dpi = 295;} //Samsung Galaxy A10e
    else if(navigator.userAgent.indexOf("SM-M307")!==-1){ dpi = 403;} //Samsung Galaxy M30s
    else if(navigator.userAgent.indexOf("SM-A908")!==-1){ dpi = 393;} //Samsung Galaxy A90 5G
    else if(navigator.userAgent.indexOf("SM-F900")!==-1){ dpi = 362;} //Samsung Galaxy Fold
    else if(navigator.userAgent.indexOf("SM-M305")!==-1){ dpi = 403;} //Samsung Galaxy M30
    else if(navigator.userAgent.indexOf("SM-M105")!==-1){ dpi = 270;} //Samsung Galaxy M10
    else if(navigator.userAgent.indexOf("SM-N971")!==-1){ dpi = 401;} //Samsung Galaxy Note10 5G
    else if(navigator.userAgent.indexOf("SM-A707")!==-1){ dpi = 393;} //Samsung Galaxy A70s
    else if(navigator.userAgent.indexOf("SM-M405")!==-1){ dpi = 409;} //Samsung Galaxy M40
    else if(navigator.userAgent.indexOf("SM-A606")!==-1){ dpi = 409;} //Samsung Galaxy A60
    else if(navigator.userAgent.indexOf("SM-F907")!==-1){ dpi = 362;} //Samsung Galaxy Fold 5G
    else if(navigator.userAgent.indexOf("SM-G398")!==-1){ dpi = 294;} //Samsung Galaxy Xcover 4s
    else if(navigator.userAgent.indexOf("SM-M107")!==-1){ dpi = 268;} //Samsung Galaxy M10s
    else if(navigator.userAgent.indexOf("SM-G889")!==-1){ dpi = 576;} //Samsung Galaxy Xcover FieldPro
    else if(navigator.userAgent.indexOf("SM-G960")!==-1){ dpi = 570;} //Samsung Galaxy S9
    else if(navigator.userAgent.indexOf("SM-N960")!==-1){ dpi = 516;} //Samsung Galaxy Note9
    else if(navigator.userAgent.indexOf("SM-G965")!==-1){ dpi = 529;} //Samsung Galaxy S9+
    else if(navigator.userAgent.indexOf("SM-A750")!==-1){ dpi = 411;} //Samsung Galaxy A7 (2018)
    else if(navigator.userAgent.indexOf("SM-J600")!==-1){ dpi = 293;} //Samsung Galaxy J6
    else if(navigator.userAgent.indexOf("SM-J610")!==-1){ dpi = 274;} //Samsung Galaxy J6+
    else if(navigator.userAgent.indexOf("SM-J415")!==-1){ dpi = 274;} //Samsung Galaxy J4+
    else if(navigator.userAgent.indexOf("SM-A920")!==-1){ dpi = 393;} //Samsung Galaxy A9 (2018)
    else if(navigator.userAgent.indexOf("SM-A600")!==-1){ dpi = 294;} //Samsung Galaxy A6 (2018)
    else if(navigator.userAgent.indexOf("SM-J810")!==-1){ dpi = 274;} //Samsung Galaxy J8
    else if(navigator.userAgent.indexOf("SM-A605")!==-1){ dpi = 411;} //Samsung Galaxy A6+ (2018)
    else if(navigator.userAgent.indexOf("SM-J400")!==-1){ dpi = 267;} //Samsung Galaxy J4
    else if(navigator.userAgent.indexOf("SM-J250")!==-1){ dpi = 220;} //Samsung Galaxy J2 Pro (2018)
    else if(navigator.userAgent.indexOf("SM-J260")!==-1){ dpi = 220;} //Samsung Galaxy J2 Core
    else if(navigator.userAgent.indexOf("SM-G611")!==-1){ dpi = 401;} //Samsung Galaxy J7 Prime 2
    else if(navigator.userAgent.indexOf("SM-J410")!==-1){ dpi = 274;} //Samsung Galaxy J4 Core
    else if(navigator.userAgent.indexOf("SM-J737")!==-1){ dpi = 267;} //Samsung Galaxy J7 (2018)
    else if(navigator.userAgent.indexOf("SM-J337")!==-1){ dpi = 294;} //Samsung Galaxy J3 (2018)
    else if(navigator.userAgent.indexOf("SM-G885")!==-1){ dpi = 392;} //Samsung Galaxy A8 Star (A9 Star)
    else if(navigator.userAgent.indexOf("SM-J720")!==-1){ dpi = 267;} //Samsung Galaxy J7 Duo
    else if(navigator.userAgent.indexOf("SM-G887")!==-1){ dpi = 403;} //Samsung Galaxy A8s
    else if(navigator.userAgent.indexOf("SM-G6200")!==-1){ dpi = 402;} //Samsung Galaxy A6s
    else if(navigator.userAgent.indexOf("SM-G8750")!==-1){ dpi = 426;} //Samsung Galaxy S Light Luxury
    else if(navigator.userAgent.indexOf("SM-N950")!==-1){ dpi = 521;} //Samsung Galaxy Note8
    else if(navigator.userAgent.indexOf("SM-G955")!==-1){ dpi = 529;} //Samsung Galaxy S8+
    else if(navigator.userAgent.indexOf("SM-J730")!==-1){ dpi = 401;} //Samsung Galaxy J7 Pro
    else if(navigator.userAgent.indexOf("SM-A530")!==-1){ dpi = 441;} //Samsung Galaxy A8 (2018)
    else if(navigator.userAgent.indexOf("SM-J530")!==-1){ dpi = 282;} //Samsung Galaxy J5 (2017)
    else if(navigator.userAgent.indexOf("SM-A730")!==-1){ dpi = 411;} //Samsung Galaxy A8+ (2018)
    else if(navigator.userAgent.indexOf("SM-J730")!==-1){ dpi = 401;} //Samsung Galaxy J7 (2017)
    else if(navigator.userAgent.indexOf("SM-J701")!==-1){ dpi = 267;} //Samsung Galaxy J7 Nxt
    else if(navigator.userAgent.indexOf("SM-G615")!==-1){ dpi = 386;} //Samsung Galaxy J7 Max
    else if(navigator.userAgent.indexOf("SM-N935")!==-1){ dpi = 515;} //Samsung Galaxy Note FE
    else if(navigator.userAgent.indexOf("SM-G892")!==-1){ dpi = 568;} //Samsung Galaxy S8 Active
    else if(navigator.userAgent.indexOf("SM-G390")!==-1){ dpi = 294;} //Samsung Galaxy Xcover 4
    else if(navigator.userAgent.indexOf("SM-C710")!==-1){ dpi = 401;} //Samsung Galaxy C7 (2017)
    else if(navigator.userAgent.indexOf("SM-T500")!==-1){ dpi = 224;} //Samsung Galaxy Tab A7 10.4 (2020)
    else if(navigator.userAgent.indexOf("SM-T505")!==-1){ dpi = 224;} //Samsung Galaxy Tab A7 10.4 (2020)
    else if(navigator.userAgent.indexOf("SM-T225")!==-1){ dpi = 179;} //Samsung Galaxy Tab A7 Lite
    else if(navigator.userAgent.indexOf("SM-T220")!==-1){ dpi = 179;} //Samsung Galaxy Tab A7 Lite
    else if(navigator.userAgent.indexOf("SM-T730")!==-1){ dpi = 243;} //Samsung Galaxy Tab S7 FE
    else if(navigator.userAgent.indexOf("SM-T736B")!==-1){ dpi = 243;} //Samsung Galaxy Tab S7 FE
    else if(navigator.userAgent.indexOf("SM-T870")!==-1){ dpi = 274;} //Samsung Galaxy Tab S7
    else if(navigator.userAgent.indexOf("SM-T875")!==-1){ dpi = 274;} //Samsung Galaxy Tab S7
    else if(navigator.userAgent.indexOf("SM-T876B")!==-1){ dpi = 274;} //Samsung Galaxy Tab S7
    else if(navigator.userAgent.indexOf("SM-P610N")!==-1){ dpi = 224;} //Samsung Galaxy Tab S6 Lite
    else if(navigator.userAgent.indexOf("SM-P615")!==-1){ dpi = 224;} //Samsung Galaxy Tab S6 Lite
    else if(navigator.userAgent.indexOf("SM-P610")!==-1){ dpi = 224;} //Samsung Galaxy Tab S6 Lite
    else if(navigator.userAgent.indexOf("SM-T970")!==-1){ dpi = 226;} //Samsung Galaxy Tab S7+
    else if(navigator.userAgent.indexOf("SM-T976B")!==-1){ dpi = 226;} //Samsung Galaxy Tab S7+
    else if(navigator.userAgent.indexOf("SM-T290")!==-1){ dpi = 189;} //Samsung Galaxy Tab A 8.0 (2019)
    else if(navigator.userAgent.indexOf("SM-T295")!==-1){ dpi = 189;} //Samsung Galaxy Tab A 8.0 (2019)
    else if(navigator.userAgent.indexOf("SM-T515")!==-1){ dpi = 224;} //Samsung Galaxy Tab A 10.1 (2019)
    else if(navigator.userAgent.indexOf("SM-T510")!==-1){ dpi = 224;} //Samsung Galaxy Tab A 10.1 (2019)
    else if(navigator.userAgent.indexOf("SM-T860")!==-1){ dpi = 287;} //Samsung Galaxy Tab S6
    else if(navigator.userAgent.indexOf("SM-T865")!==-1){ dpi = 287;} //Samsung Galaxy Tab S6
    else if(navigator.userAgent.indexOf("SM-T580")!==-1){ dpi = 224;} //Samsung Galaxy Tab A 10.1 (2016)
    else if(navigator.userAgent.indexOf("SM-T585")!==-1){ dpi = 224;} //Samsung Galaxy Tab A 10.1 (2016)
    else if(navigator.userAgent.indexOf("SM-P580")!==-1){ dpi = 224;} //Samsung Galaxy Tab A 10.1 (2016)
    else if(navigator.userAgent.indexOf("SM-P585")!==-1){ dpi = 224;} //Samsung Galaxy Tab A 10.1 (2016)
    else if(navigator.userAgent.indexOf("SM-P585Y")!==-1){ dpi = 224;} //Samsung Galaxy Tab A 10.1 (2016)
    else if(navigator.userAgent.indexOf("SM-T280")!==-1){ dpi = 216;} //Samsung Galaxy Tab A 7.0 (2016)
    else if(navigator.userAgent.indexOf("SM-T285")!==-1){ dpi = 216;} //Samsung Galaxy Tab A 7.0 (2016)
    else if(navigator.userAgent.indexOf("SM-T560")!==-1){ dpi = 157;} //Samsung Galaxy Tab E 9.6
    else if(navigator.userAgent.indexOf("SM-T561")!==-1){ dpi = 157;} //Samsung Galaxy Tab E 9.6
    else if(navigator.userAgent.indexOf("SM-T560NU")!==-1){ dpi = 157;} //Samsung Galaxy Tab E 9.6
    else if(navigator.userAgent.indexOf("SM-T725")!==-1){ dpi = 288;} //Samsung Galaxy Tab S5e
    else if(navigator.userAgent.indexOf("SM-T720")!==-1){ dpi = 288;} //Samsung Galaxy Tab S5e
    else if(navigator.userAgent.indexOf("SM-T810")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("SM-T815")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("SM-T813N")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("SM-T819N")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("SM-T819")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("SM-T813")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("SM-T815Y")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("SM-T819Y")!==-1){ dpi = 264;} //Samsung Galaxy Tab S2 9.7
    else if(navigator.userAgent.indexOf("GT-P3200")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 7.0
    else if(navigator.userAgent.indexOf("SM-T211")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 7.0
    else if(navigator.userAgent.indexOf("SM-T215")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 7.0
    else if(navigator.userAgent.indexOf("SM-T230")!==-1){ dpi = 216;} //Samsung Galaxy Tab 4 7.0
    else if(navigator.userAgent.indexOf("SM-T235")!==-1){ dpi = 216;} //Samsung Galaxy Tab 4 7.0
    else if(navigator.userAgent.indexOf("SM-T230NU")!==-1){ dpi = 216;} //Samsung Galaxy Tab 4 7.0
    else if(navigator.userAgent.indexOf("SM-T715")!==-1){ dpi = 320;} //Samsung Galaxy Tab S2 8.0
    else if(navigator.userAgent.indexOf("SM-T710")!==-1){ dpi = 320;} //Samsung Galaxy Tab S2 8.0
    else if(navigator.userAgent.indexOf("SM-T719N")!==-1){ dpi = 320;} //Samsung Galaxy Tab S2 8.0
    else if(navigator.userAgent.indexOf("SM-T719")!==-1){ dpi = 320;} //Samsung Galaxy Tab S2 8.0
    else if(navigator.userAgent.indexOf("SM-T715Y")!==-1){ dpi = 320;} //Samsung Galaxy Tab S2 8.0
    else if(navigator.userAgent.indexOf("SM-T719Y")!==-1){ dpi = 320;} //Samsung Galaxy Tab S2 8.0
    else if(navigator.userAgent.indexOf("SM-T713")!==-1){ dpi = 320;} //Samsung Galaxy Tab S2 8.0
    else if(navigator.userAgent.indexOf("GT-P5100")!==-1){ dpi = 149;} //Samsung Galaxy Tab 2 10.1 P5100
    else if(navigator.userAgent.indexOf("SM-T307U")!==-1){ dpi = 270;} //Samsung Galaxy Tab A 8.4 (2020)
    else if(navigator.userAgent.indexOf("SM-T830")!==-1){ dpi = 287;} //Samsung Galaxy Tab S4 10.5
    else if(navigator.userAgent.indexOf("SM-T835")!==-1){ dpi = 287;} //Samsung Galaxy Tab S4 10.5
    else if(navigator.userAgent.indexOf("GT-N8000")!==-1){ dpi = 149;} //Samsung Galaxy Note 10.1 N8000
    else if(navigator.userAgent.indexOf("GT-P3105")!==-1){ dpi = 170;} //Samsung Galaxy Tab 2 7.0 P3100
    else if(navigator.userAgent.indexOf("GT-P3100")!==-1){ dpi = 170;} //Samsung Galaxy Tab 2 7.0 P3100
    else if(navigator.userAgent.indexOf("GT-P3105")!==-1){ dpi = 170;} //Samsung Galaxy Tab 2 7.0 P3100
    else if(navigator.userAgent.indexOf("SM-T116")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 V
    else if(navigator.userAgent.indexOf("SM-T116BU")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 V
    else if(navigator.userAgent.indexOf("SM-T116NQ")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 V
    else if(navigator.userAgent.indexOf("SM-T116NU")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 V
    else if(navigator.userAgent.indexOf("SM-T116NY")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 V
    else if(navigator.userAgent.indexOf("SM-P205")!==-1){ dpi = 283;} //Samsung Galaxy Tab A 8.0 &amp; S Pen (2019)
    else if(navigator.userAgent.indexOf("SM-P200")!==-1){ dpi = 283;} //Samsung Galaxy Tab A 8.0 &amp; S Pen (2019)
    else if(navigator.userAgent.indexOf("SM-T575")!==-1){ dpi = 283;} //Samsung Galaxy Tab Active3
    else if(navigator.userAgent.indexOf("SM-T820")!==-1){ dpi = 264;} //Samsung Galaxy Tab S3 9.7
    else if(navigator.userAgent.indexOf("SM-T825")!==-1){ dpi = 264;} //Samsung Galaxy Tab S3 9.7
    else if(navigator.userAgent.indexOf("SM-T825Y")!==-1){ dpi = 264;} //Samsung Galaxy Tab S3 9.7
    else if(navigator.userAgent.indexOf("SM-P600")!==-1){ dpi = 299;} //Samsung Galaxy Note 10.1 (2014)
    else if(navigator.userAgent.indexOf("SM-P601")!==-1){ dpi = 299;} //Samsung Galaxy Note 10.1 (2014)
    else if(navigator.userAgent.indexOf("SM-P605")!==-1){ dpi = 299;} //Samsung Galaxy Note 10.1 (2014)
    else if(navigator.userAgent.indexOf("SM-T555")!==-1){ dpi = 132;} //Samsung Galaxy Tab A 9.7
    else if(navigator.userAgent.indexOf("SM-T550")!==-1){ dpi = 132;} //Samsung Galaxy Tab A 9.7
    else if(navigator.userAgent.indexOf("SM-P555")!==-1){ dpi = 132;} //Samsung Galaxy Tab A 9.7
    else if(navigator.userAgent.indexOf("SM-P550")!==-1){ dpi = 132;} //Samsung Galaxy Tab A 9.7
    else if(navigator.userAgent.indexOf("SM-T530")!==-1){ dpi = 149;} //Samsung Galaxy Tab 4 10.1
    else if(navigator.userAgent.indexOf("SM-T805")!==-1){ dpi = 288;} //Samsung Galaxy Tab S 10.5 LTE
    else if(navigator.userAgent.indexOf("SM-T705")!==-1){ dpi = 359;} //Samsung Galaxy Tab S 8.4 LTE
    else if(navigator.userAgent.indexOf("SM-T590")!==-1){ dpi = 216;} //Samsung Galaxy Tab A 10.5
    else if(navigator.userAgent.indexOf("SM-T595")!==-1){ dpi = 216;} //Samsung Galaxy Tab A 10.5
    else if(navigator.userAgent.indexOf("SM-T350")!==-1){ dpi = 160;} //Samsung Galaxy Tab A 8.0 (2015)
    else if(navigator.userAgent.indexOf("SM-T355")!==-1){ dpi = 160;} //Samsung Galaxy Tab A 8.0 (2015)
    else if(navigator.userAgent.indexOf("SM-T800")!==-1){ dpi = 288;} //Samsung Galaxy Tab S 10.5
    else if(navigator.userAgent.indexOf("GT-N5100")!==-1){ dpi = 189;} //Samsung Galaxy Note 8.0
    else if(navigator.userAgent.indexOf("GT-N5120")!==-1){ dpi = 189;} //Samsung Galaxy Note 8.0
    else if(navigator.userAgent.indexOf("SM-T380")!==-1){ dpi = 189;} //Samsung Galaxy Tab A 8.0 (2017)
    else if(navigator.userAgent.indexOf("SM-T385")!==-1){ dpi = 189;} //Samsung Galaxy Tab A 8.0 (2017)
    else if(navigator.userAgent.indexOf("SM-T110")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 Lite 7.0
    else if(navigator.userAgent.indexOf("SM-T377W")!==-1){ dpi = 189;} //Samsung Galaxy Tab E 8.0
    else if(navigator.userAgent.indexOf("SM-T377")!==-1){ dpi = 189;} //Samsung Galaxy Tab E 8.0
    else if(navigator.userAgent.indexOf("SM-T375")!==-1){ dpi = 189;} //Samsung Galaxy Tab E 8.0
    else if(navigator.userAgent.indexOf("SM-T377P")!==-1){ dpi = 189;} //Samsung Galaxy Tab E 8.0
    else if(navigator.userAgent.indexOf("SM-T377R")!==-1){ dpi = 189;} //Samsung Galaxy Tab E 8.0
    else if(navigator.userAgent.indexOf("SM-T377A")!==-1){ dpi = 189;} //Samsung Galaxy Tab E 8.0
    else if(navigator.userAgent.indexOf("SM-T866N")!==-1){ dpi = 287;} //Samsung Galaxy Tab S6 5G
    else if(navigator.userAgent.indexOf("SM-T311")!==-1){ dpi = 189;} //Samsung Galaxy Tab 3 8.0
    else if(navigator.userAgent.indexOf("SM-T310")!==-1){ dpi = 189;} //Samsung Galaxy Tab 3 8.0
    else if(navigator.userAgent.indexOf("SM-T315")!==-1){ dpi = 189;} //Samsung Galaxy Tab 3 8.0
    else if(navigator.userAgent.indexOf("SM-T700")!==-1){ dpi = 359;} //Samsung Galaxy Tab S 8.4
    else if(navigator.userAgent.indexOf("GT-P5220")!==-1){ dpi = 149;} //Samsung Galaxy Tab 3 10.1 P5220
    else if(navigator.userAgent.indexOf("SM-T231")!==-1){ dpi = 216;} //Samsung Galaxy Tab 4 7.0 3G
    else if(navigator.userAgent.indexOf("GT-P1000")!==-1){ dpi = 170;} //Samsung P1000 Galaxy Tab
    else if(navigator.userAgent.indexOf("GT-P7500")!==-1){ dpi = 149;} //Samsung P7500 Galaxy Tab 10.1 3G
    else if(navigator.userAgent.indexOf("SM-T387")!==-1){ dpi = 189;} //Samsung Galaxy Tab A 8.0 (2018)
    else if(navigator.userAgent.indexOf("GT-P7510")!==-1){ dpi = 149;} //Samsung Galaxy Tab 10.1 P7510
    else if(navigator.userAgent.indexOf("SM-T540")!==-1){ dpi = 224;} //Samsung Galaxy Tab Active Pro
    else if(navigator.userAgent.indexOf("SM-T547")!==-1){ dpi = 224;} //Samsung Galaxy Tab Active Pro
    else if(navigator.userAgent.indexOf("GT-P5210")!==-1){ dpi = 149;} //Samsung Galaxy Tab 3 10.1 P5210
    else if(navigator.userAgent.indexOf("SM-T520")!==-1){ dpi = 299;} //Samsung Galaxy Tab Pro 10.1
    else if(navigator.userAgent.indexOf("GT-P5200")!==-1){ dpi = 149;} //Samsung Galaxy Tab 3 10.1 P5200
    else if(navigator.userAgent.indexOf("GT-P5110")!==-1){ dpi = 149;} //Samsung Galaxy Tab 2 10.1 P5110
    else if(navigator.userAgent.indexOf("SM-T395")!==-1){ dpi = 189;} //Samsung Galaxy Tab Active 2
    else if(navigator.userAgent.indexOf("GT-P3110")!==-1){ dpi = 170;} //Samsung Galaxy Tab 2 7.0 P3110
    else if(navigator.userAgent.indexOf("GT-N8010")!==-1){ dpi = 149;} //Samsung Galaxy Note 10.1 N8010
    else if(navigator.userAgent.indexOf("GT-P6200")!==-1){ dpi = 170;} //Samsung P6200 Galaxy Tab 7.0 Plus
    else if(navigator.userAgent.indexOf("SM-T285YD")!==-1){ dpi = 216;} //Samsung Galaxy Tab J
    else if(navigator.userAgent.indexOf("SM-P905")!==-1){ dpi = 247;} //Samsung Galaxy Note Pro 12.2 LTE
    else if(navigator.userAgent.indexOf("SM-T320")!==-1){ dpi = 359;} //Samsung Galaxy Tab Pro 8.4
    else if(navigator.userAgent.indexOf("GT-P3210")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 7.0 WiFi
    else if(navigator.userAgent.indexOf("SM-T210")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 7.0 WiFi
    else if(navigator.userAgent.indexOf("SM-T535")!==-1){ dpi = 149;} //Samsung Galaxy Tab 4 10.1 LTE
    else if(navigator.userAgent.indexOf("SM-T927A")!==-1){ dpi = 127;} //Samsung Galaxy View2
    else if(navigator.userAgent.indexOf("SM-T920")!==-1){ dpi = 127;} //Samsung Galaxy View2
    else if(navigator.userAgent.indexOf("GT-P8110")!==-1){ dpi = 299;} //Samsung Google Nexus 10 P8110 Android
    else if(navigator.userAgent.indexOf("SM-T330")!==-1){ dpi = 189;} //Samsung Galaxy Tab 4 8.0
    else if(navigator.userAgent.indexOf("SM-P355")!==-1){ dpi = 160;} //Samsung Galaxy Tab A 8.0 &amp; S Pen (2015)
    else if(navigator.userAgent.indexOf("SM-T670")!==-1){ dpi = 120;} //Samsung Galaxy View
    else if(navigator.userAgent.indexOf("SM-T810")!==-1){ dpi = 120;} //Samsung Galaxy View
    else if(navigator.userAgent.indexOf("SM-T677A")!==-1){ dpi = 120;} //Samsung Galaxy View
    else if(navigator.userAgent.indexOf("SM-T677")!==-1){ dpi = 120;} //Samsung Galaxy View
    else if(navigator.userAgent.indexOf("SM-T677Y")!==-1){ dpi = 120;} //Samsung Galaxy View
    else if(navigator.userAgent.indexOf("GT-P7300")!==-1){ dpi = 170;} //Samsung Galaxy Tab 8.9 P7300
    else if(navigator.userAgent.indexOf("SM-T113")!==-1){ dpi = 170;} //Samsung Galaxy Tab 3 Lite 7.0 VE

    else {
        console.log("Device Not found. Agent String: " + navigator.userAgent);
        dpi = 378;
    }
      console.log(dpi);
      return dpi
    }