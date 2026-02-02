import { appleDeviceFinder } from './appleDeviceFinder.js';
import { androidDeviceFinder } from './androidDeviceFinder.js';

var iPhonePlatform = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);

if(iPhonePlatform){
    appleDeviceFinder();
}
else
{
    androidDeviceFinder();
}

/*if(sessionStorage.getItem("dpi")=="none"){
    console.log("none")
    var e = document.getElementById("planetImageDisplayPC");
    e.style.display = 'block';
    e = document.getElementById("planetImageDisplayTablet");
    e.style.display = 'none';
}*/
