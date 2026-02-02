export function appleDeviceFinder() {
    var dpi;
    var dppx = window.devicePixelRatio ||
    (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
    1;

    if (navigator.userAgent != sessionStorage.getItem('storedUserAgent')){
        var w = screen.width * dppx;
        var h = screen.height * dppx;
        
        if(w=="768" && h=="1024"){
        console.log("I am a iPad mini!");
        dpi=163;
        }
        else if(w=="1320" && h=="2868"){
                    console.log("I am a iPhone 16 Pro Max!");
                    dpi=460;
                    }
            else if(w=="1206" && h=="2622"){
                    console.log("I am a iPhone 16 Pro!");
                    dpi=460;
                    }
            else if(w=="1290" && h=="2796"){
                    console.log("I am a iPhone 16 Plus!");
                    dpi=460;
                    }
            else if(w=="1179" && h=="2556"){
                    console.log("I am a iPhone 16!");
                    dpi=460;
                    }
            else if(w=="1290" && h=="2796"){
                    console.log("I am a iPhone 15 Pro Max!");
                    dpi=460;
                    }
            else if(w=="1179" && h=="2556"){
                    console.log("I am a iPhone 15 Pro!");
                    dpi=460;
                    }
            else if(w=="1290" && h=="2796"){
                    console.log("I am a iPhone 15 Plus!");
                    dpi=460;
                    }
            else if(w=="1179" && h=="2556"){
                    console.log("I am a iPhone 15!");
                    dpi=460;
                    }
            else if(w=="410" && h=="502"){
                    console.log("I am a Apple Watch Ultra 2!");
                    dpi=338;
                    }
            else if(w=="396" && h=="484"){
                    console.log("I am a Apple Watch Series 9 Large!");
                    dpi=326;
                    }
            else if(w=="352" && h=="430"){
                    console.log("I am a Apple Watch Series 9 Small!");
                    dpi=326;
                    }
            else if(w=="2048" && h=="2732"){
                    console.log("I am a iPad Pro (6th gen 12.9)!");
                    dpi=264;
                    }
            else if(w=="1668" && h=="2388"){
                    console.log("I am a iPad Pro (6th gen 11)!");
                    dpi=264;
                    }
            else if(w=="1640" && h=="2360"){
                    console.log("I am a iPad 10th gen!");
                    dpi=264;
                    }
            else if(w=="1284" && h=="2778"){
                    console.log("I am a iPhone 14 Plus!");
                    dpi=458;
                    }
            else if(w=="410" && h=="502"){
                    console.log("I am a Apple Watch Ultra!");
                    dpi=338;
                    }
            else if(w=="1290" && h=="2796"){
                    console.log("I am a iPhone 14 Pro Max!");
                    dpi=460;
                    }
            else if(w=="1179" && h=="2556"){
                    console.log("I am a iPhone 14 Pro!");
                    dpi=460;
                    }
            else if(w=="1170" && h=="2532"){
                    console.log("I am a iPhone 14!");
                    dpi=460;
                    }
            else if(w=="396" && h=="484"){
                    console.log("I am a Apple Watch Series 8 Large!");
                    dpi=326;
                    }
            else if(w=="352" && h=="430"){
                    console.log("I am a Apple Watch Series 8 Small!");
                    dpi=326;
                    }
            else if(w=="368" && h=="448"){
                    console.log("I am a Apple Watch SE (2nd) Large!");
                    dpi=326;
                    }
            else if(w=="324" && h=="394"){
                    console.log("I am a Apple Watch SE (2nd) Small!");
                    dpi=326;
                    }
            else if(w=="750" && h=="1334"){
                    console.log("I am a iPhone SE 3rd gen!");
                    dpi=326;
                    }
            else if(w=="1640" && h=="2360"){
                    console.log("I am a iPad Air (5th gen)!");
                    dpi=264;
                    }
            else if(w=="396" && h=="484"){
                    console.log("I am a Apple Watch Series 7 Large!");
                    dpi=326;
                    }
            else if(w=="352" && h=="430"){
                    console.log("I am a Apple Watch Series 7 Small!");
                    dpi=326;
                    }
            else if(w=="1488" && h=="2266"){
                    console.log("I am a iPad Mini (6th gen)!");
                    dpi=326;
                    }
            else if(w=="1170" && h=="2532"){
                    console.log("I am a iPhone 13!");
                    dpi=460;
                    }
            else if(w=="1080" && h=="2340"){
                    console.log("I am a iPhone 13 mini!");
                    dpi=476;
                    }
            else if(w=="1284" && h=="2778"){
                    console.log("I am a iPhone 13 Pro Max!");
                    dpi=458;
                    }
            else if(w=="1170" && h=="2532"){
                    console.log("I am a iPhone 13 Pro!");
                    dpi=460;
                    }
            else if(w=="1620" && h=="2160"){
                    console.log("I am a iPad 9th gen!");
                    dpi=264;
                    }
            else if(w=="2048" && h=="2732"){
                    console.log("I am a iPad Pro (5th gen 12.9)!");
                    dpi=264;
                    }
            else if(w=="1668" && h=="2388"){
                    console.log("I am a iPad Pro (5th gen 11)!");
                    dpi=264;
                    }
            else if(w=="1640" && h=="2360"){
                    console.log("I am a iPad Air (4th gen)!");
                    dpi=264;
                    }
            else if(w=="1170" && h=="2532"){
                    console.log("I am a iPhone 12!");
                    dpi=460;
                    }
            else if(w=="1080" && h=="2340"){
                    console.log("I am a iPhone 12 mini!");
                    dpi=476;
                    }
            else if(w=="1284" && h=="2778"){
                    console.log("I am a iPhone 12 Pro Max!");
                    dpi=458;
                    }
            else if(w=="1170" && h=="2532"){
                    console.log("I am a iPhone 12 Pro!");
                    dpi=460;
                    }
            else if(w=="1620" && h=="2160"){
                    console.log("I am a iPad 8th gen!");
                    dpi=264;
                    }
            else if(w=="368" && h=="448"){
                    console.log("I am a Apple Watch Series 6 Large!");
                    dpi=326;
                    }
            else if(w=="324" && h=="394"){
                    console.log("I am a Apple Watch Series 6 Small!");
                    dpi=326;
                    }
            else if(w=="368" && h=="448"){
                    console.log("I am a Apple Watch SE (1st) Large!");
                    dpi=326;
                    }
            else if(w=="324" && h=="394"){
                    console.log("I am a Apple Watch SE (1st) Small!");
                    dpi=326;
                    }
            else if(w=="750" && h=="1334"){
                    console.log("I am a iPhone SE 2nd gen!");
                    dpi=326;
                    }
            else if(w=="2048" && h=="2732"){
                    console.log("I am a iPad Pro (4th gen 12.9)!");
                    dpi=264;
                    }
            else if(w=="1668" && h=="2388"){
                    console.log("I am a iPad Pro (4th gen 11)!");
                    dpi=264;
                    }
            else if(w=="1620" && h=="2160"){
                    console.log("I am a iPad 7th gen!");
                    dpi=264;
                    }
            else if(w=="1242" && h=="2688"){
                    console.log("I am a iPhone 11 Pro Max!");
                    dpi=458;
                    }
            else if(w=="1125" && h=="2436"){
                    console.log("I am a iPhone 11 Pro!");
                    dpi=458;
                    }
            else if(w=="828" && h=="1792"){
                    console.log("I am a iPhone 11!");
                    dpi=326;
                    }
            else if(w=="368" && h=="448"){
                    console.log("I am a Apple Watch Series 5 Large!");
                    dpi=326;
                    }
            else if(w=="324" && h=="394"){
                    console.log("I am a Apple Watch Series 5 Small!");
                    dpi=326;
                    }
            else if(w=="640" && h=="1136"){
                    console.log("I am a iPod touch 7th gen!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad Mini (5th gen)!");
                    dpi=326;
                    }
            else if(w=="1668" && h=="2224"){
                    console.log("I am a iPad Air (3rd gen)!");
                    dpi=264;
                    }
            else if(w=="2048" && h=="2732"){
                    console.log("I am a iPad Pro (3rd gen 12.9)!");
                    dpi=264;
                    }
            else if(w=="1668" && h=="2388"){
                    console.log("I am a iPad Pro (3rd gen 11)!");
                    dpi=264;
                    }
            else if(w=="828" && h=="1792"){
                    console.log("I am a iPhone XR!");
                    dpi=326;
                    }
            else if(w=="1242" && h=="2688"){
                    console.log("I am a iPhone XS Max!");
                    dpi=458;
                    }
            else if(w=="1125" && h=="2436"){
                    console.log("I am a iPhone XS!");
                    dpi=458;
                    }
            else if(w=="368" && h=="448"){
                    console.log("I am a Apple Watch Series 4 Large!");
                    dpi=326;
                    }
            else if(w=="324" && h=="394"){
                    console.log("I am a Apple Watch Series 4 Small!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad 6th gen!");
                    dpi=264;
                    }
            else if(w=="1125" && h=="2436"){
                    console.log("I am a iPhone X!");
                    dpi=458;
                    }
            else if(w=="1080" && h=="1920"){
                    console.log("I am a iPhone 8 Plus!");
                    dpi=401;
                    }
            else if(w=="750" && h=="1334"){
                    console.log("I am a iPhone 8!");
                    dpi=326;
                    }
            else if(w=="312" && h=="390"){
                    console.log("I am a Apple Watch Series 3 Large!");
                    dpi=326;
                    }
            else if(w=="312" && h=="340"){
                    console.log("I am a Apple Watch Series 3 Small!");
                    dpi=326;
                    }
            else if(w=="2048" && h=="2732"){
                    console.log("I am a iPad Pro (2nd gen 12.9)!");
                    dpi=264;
                    }
            else if(w=="1668" && h=="2224"){
                    console.log("I am a iPad Pro (2nd gen 10.5)!");
                    dpi=264;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad 5th gen!");
                    dpi=264;
                    }
            else if(w=="1080" && h=="1920"){
                    console.log("I am a iPhone 7 Plus!");
                    dpi=401;
                    }
            else if(w=="750" && h=="1334"){
                    console.log("I am a iPhone 7!");
                    dpi=326;
                    }
            else if(w=="312" && h=="390"){
                    console.log("I am a Apple Watch Series 2 Large!");
                    dpi=326;
                    }
            else if(w=="312" && h=="340"){
                    console.log("I am a Apple Watch Series 2 Small!");
                    dpi=326;
                    }
            else if(w=="312" && h=="390"){
                    console.log("I am a Apple Watch Series 1 Large!");
                    dpi=326;
                    }
            else if(w=="312" && h=="340"){
                    console.log("I am a Apple Watch Series 1 Small!");
                    dpi=326;
                    }
            else if(w=="640" && h=="1136"){
                    console.log("I am a iPhone SE 1st gen!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad Pro (1st gen 9.7”)!");
                    dpi=264;
                    }
            else if(w=="2048" && h=="2732"){
                    console.log("I am a iPad Pro (1st gen 12.9)!");
                    dpi=264;
                    }
            else if(w=="1080" && h=="1920"){
                    console.log("I am a iPhone 6s Plus!");
                    dpi=401;
                    }
            else if(w=="750" && h=="1334"){
                    console.log("I am a iPhone 6s!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad mini 4!");
                    dpi=326;
                    }
            else if(w=="640" && h=="1136"){
                    console.log("I am a iPod touch 6th gen!");
                    dpi=326;
                    }
            else if(w=="312" && h=="390"){
                    console.log("I am a Apple Watch 1st (Series 0) Large!");
                    dpi=326;
                    }
            else if(w=="312" && h=="340"){
                    console.log("I am a Apple Watch 1st (Series 0) Small!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad Air 2!");
                    dpi=264;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad mini 3!");
                    dpi=326;
                    }
            else if(w=="1080" && h=="1920"){
                    console.log("I am a iPhone 6 Plus!");
                    dpi=401;
                    }
            else if(w=="750" && h=="1334"){
                    console.log("I am a iPhone 6!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad mini 2!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad Air!");
                    dpi=264;
                    }
            else if(w=="640" && h=="1136"){
                    console.log("I am a iPhone 5C!");
                    dpi=326;
                    }
            else if(w=="640" && h=="1136"){
                    console.log("I am a iPhone 5S!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad 4th gen!");
                    dpi=264;
                    }
            else if(w=="768" && h=="1024"){
                    console.log("I am a iPad mini!");
                    dpi=163;
                    }
            else if(w=="640" && h=="1136"){
                    console.log("I am a iPod touch 5th gen!");
                    dpi=326;
                    }
            else if(w=="640" && h=="1136"){
                    console.log("I am a iPhone 5!");
                    dpi=326;
                    }
            else if(w=="1536" && h=="2048"){
                    console.log("I am a iPad 3rd gen!");
                    dpi=264;
                    }
            else if(w=="640" && h=="960"){
                    console.log("I am a iPhone 4S!");
                    dpi=326;
                    }
            else if(w=="768" && h=="1024"){
                    console.log("I am a iPad 2!");
                    dpi=132;
                    }
            else if(w=="640" && h=="960"){
                    console.log("I am a iPod touch 4th gen!");
                    dpi=326;
                    }
            else if(w=="640" && h=="960"){
                    console.log("I am a iPhone 4!");
                    dpi=326;
                    }
            else if(w=="768" && h=="1024"){
                    console.log("I am a iPad 1st gen!");
                    dpi=132;
                    }
            else if(w=="320" && h=="480"){
                    console.log("I am a iPod touch 3rd gen!");
                    dpi=163;
                    }
            else if(w=="320" && h=="480"){
                    console.log("I am a iPhone 3GS!");
                    dpi=163;
                    }
            else if(w=="320" && h=="480"){
                    console.log("I am a iPod touch 2nd gen!");
                    dpi=163;
                    }
            else if(w=="320" && h=="480"){
                    console.log("I am a iPhone 3G!");
                    dpi=163;
                    }
            else if(w=="320" && h=="480"){
                    console.log("I am a iPod touch 1st gen!");
                    dpi=163;
                    }
            else if(w=="320" && h=="480"){
                    console.log("I am a iPhone 1st gen!");
                    dpi=163;
                    }
            

        else {console.log("Not a saved Apple mobile device"); dpi =96;}

        // Save data to sessionStorage
        sessionStorage.setItem('dpi', dpi);
        sessionStorage.setItem('storedUserAgent', navigator.userAgent);
    }
}