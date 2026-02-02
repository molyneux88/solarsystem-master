$(".plutoPictureHolderMob").click(function() {
    console.log("Plutoclicked");
    
    $(".planetImageHolder").find("img").fadeTo(0, 1);
         if($(".PlutoImage").hasClass("enlarged")){
            $(".PlutoImage").removeClass("enlarged");
            $(".imagePositionerMob").stop().animate({width: '25vw', height:'25vw'}, 2000 );
            $(".PlutoImage").stop().animate({width: '25vw', height:'25vw'}, 2000,
            function(){
                $(this).parent().removeClass('ontop');
            }); /*so it gets put on bottom AFTER the shrink animation is finished*/
        }
        else{
            //var initialWidth =  1 * (100 / document.documentElement.clientWidth);
            //console.log(calc(25*xinitialWidth));
            $(".PlutoImage").addClass("enlarged")
            var dppx = window.devicePixelRatio ||
            (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
            1;
            var sizeInCm = (sessionStorage.getItem("dpi")/dppx)*0.0944882;
            $(this).parent().addClass('ontop');
            $(".PlutoImage").stop().animate({width: sizeInCm, height:sizeInCm}, 2000 );
            $(".imagePositionerMob").stop().animate({height:sizeInCm}, 2000 );
         }
 
 });

 $(".plutoPictureHolder").click(function() {
    console.log("Plutoclicked");
    
    $(".planetImageHolder").find("img").fadeTo(0, 1);
         if($(".PlutoImage").hasClass("enlarged")){
            
            $(".imagePositioner").stop().animate({width: '10vw', height:'20vh'}, 2000 );
            $(".PlutoImage").stop().animate({width: '150px', height:'150px'}, 2000,
            function(){
                $(this).parent().removeClass('ontop');
            }); /*so it gets put on bottom AFTER the shrink animation is finished*/
           
            setTimeout(function(){ $(".PlutoImage").removeClass("enlarged");},2100);

        }
        else{
            $(".PlutoImage").addClass("enlarged")
            var dppx = window.devicePixelRatio ||
            (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
            1;
            var sizeInCm = (sessionStorage.getItem("dpi")/dppx)*0.0944882;
            $(this).parent().addClass('ontop');
            $(".PlutoImage").stop().animate({width: sizeInCm, height:sizeInCm}, 2000 );
            $(".imagePositioner").stop().animate({height:sizeInCm}, 2000 );
         }
 
 });