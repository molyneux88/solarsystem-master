import { deviceCheckHTCDevice } from './HTC.js';
import { deviceCheckGoogleDevice } from './Google.js';
import { deviceCheckHonorDevice } from './Honor.js';
import { deviceCheckHuaweiDevice } from './Huawei.js';
import { deviceCheckLGDevice } from './LG.js';
import { deviceCheckMotoDevice } from './Motorola.js';
import { deviceCheckNokiaDevice } from './Nokia.js';
import { deviceCheckXperiaDevice } from './Xperia.js';
import { deviceCheckSamsungDevice } from './Samsung.js';
import { deviceCheckXiaomiTabletDevice } from './Xiaomi.js';
import { deviceCheckLenovoTabletDevice } from './Lenovo.js';
import { deviceCheckAmazonDevice } from './Amazon.js';

export function androidDeviceFinder() {
    var dpi;
    
    if (navigator.userAgent != sessionStorage.getItem('storedUserAgent')){

        if(navigator.userAgent.indexOf("HTC")!==-1){
            console.log("HTC");
            dpi = deviceCheckHTCDevice();
        }
        else if(navigator.userAgent.indexOf("Pixel")!==-1){
            console.log("Pixel");
            dpi = deviceCheckGoogleDevice();
        }
        else if(navigator.userAgent.indexOf("HONOR")!==-1){
            console.log("Honor");
            dpi = deviceCheckHonorDevice();
        }
        else if(navigator.userAgent.indexOf("HUAWEI")!==-1){
            console.log("Huawei");
            dpi = deviceCheckHuaweiDevice();
        }
        else if(navigator.userAgent.indexOf(" LG-")!==-1){
            console.log("LG");
            dpi = deviceCheckLGDevice();
        }
        else if(navigator.userAgent.indexOf(" LM-")!==-1){
            console.log("LG");
            dpi = deviceCheckLGDevice();
        }
        else if(navigator.userAgent.toUpperCase().indexOf(" MOTO ")!==-1){
            console.log("Motorola");
            dpi = deviceCheckMotoDevice();
        }
        else if(navigator.userAgent.indexOf("Nokia")!==-1){
            console.log("Nokia");
            dpi = deviceCheckNokiaDevice();
        }
        else if(navigator.userAgent.indexOf("Xperia")!==-1){
            console.log("Xperia");
            dpi = deviceCheckXperiaDevice();
        }
        else if(navigator.userAgent.indexOf(" SM-")!==-1){
            console.log("Samsung");
            dpi = deviceCheckSamsungDevice();
        }
        else if(navigator.userAgent.indexOf(" GT-")!==-1){
            console.log("Samsung");
            dpi = deviceCheckSamsungDevice();
        }
        else if(navigator.userAgent.indexOf("MI PAD")!==-1){
            console.log("Xaiomi Tablet");
            dpi = deviceCheckXiaomiTabletDevice();
        }
        else if(navigator.userAgent.indexOf("Lenovo ")!==-1){
            console.log("Lenovo Tablet");
            dpi = deviceCheckLenovoTabletDevice();
        }
        else if(navigator.userAgent.indexOf(" KF")!==-1){
            console.log("Amazon");
            dpi = deviceCheckAmazonDevice();
        }
        else{
            console.log("Device Not found. Agent String: " + navigator.userAgent);
            dpi = "390";
        }
        
        // Save data to sessionStorage
        sessionStorage.setItem('dpi', dpi);
        sessionStorage.setItem('storedUserAgent', navigator.userAgent);
    }
}
