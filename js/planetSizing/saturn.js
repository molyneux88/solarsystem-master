$(".saturnPictureHolderMob").click(function() {
    console.log("Saturnclicked");
    
    $(".planetImageHolder").find("img").fadeTo(0, 1);
         if($(".SaturnImage").hasClass("enlarged")){
            $(".SaturnImage").removeClass("enlarged");
            $(".imagePositionerMob").stop().animate({width: '31vw', height:'17.7129vw'}, 2000 );
            $(".SaturnImage").stop().animate({width:'31vw', height:'17.7129vw'}, 2000,
            function(){
                $(this).parent().removeClass('ontop');
            }); /*so it gets put on bottom AFTER the shrink animation is finished*/
        }
        else{
            //var initialWidth =  1 * (100 / document.documentElement.clientWidth);
            //console.log(calc(25*xinitialWidth));
            $(".SaturnImage").addClass("enlarged")
            var dppx = window.devicePixelRatio ||
            (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
            1;
            var sizeInCm = ((sessionStorage.getItem("dpi")/dppx)*4.9370079)/0.74453125;
            var heightSizeInCm = sizeInCm/0.571383722;
            $(this).parent().addClass('ontop');
            $(".SaturnImage").stop().animate({width: heightSizeInCm, height:sizeInCm}, 2000 );
            $(".imagePositionerMob").stop().animate({height:sizeInCm}, 2000 );
         }
 
 });

 $(".saturnPictureHolder").click(function() {
    console.log("Saturnclicked");
    
    $(".planetImageHolder").find("img").fadeTo(0, 1);
         if($(".SaturnImage").hasClass("enlarged")){
            
            $(".imagePositioner").stop().animate({width: '10vw', height:'20vh'}, 2000 );
            $(".SaturnImage").stop().animate({width:'200px', height:'114.28px'}, 2000,
            function(){
                $(this).parent().removeClass('ontop');
            }); /*so it gets put on bottom AFTER the shrink animation is finished*/
           
            setTimeout(function(){ $(".SaturnImage").removeClass("enlarged");},2100);

        }
        else{
            $(".SaturnImage").addClass("enlarged")
            var dppx = window.devicePixelRatio ||
            (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
            1;
            var sizeInCm = ((sessionStorage.getItem("dpi")/dppx)*4.9370079)/0.74453125;
            var heightSizeInCm = sizeInCm/0.571383722;
            $(this).parent().addClass('ontop');
            $(".SaturnImage").stop().animate({width: heightSizeInCm, height:sizeInCm}, 2000 );
            $(".imagePositionerMob").stop().animate({height:sizeInCm}, 2000 );
        }
 
 });