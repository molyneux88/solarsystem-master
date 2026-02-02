$(".venusPictureHolderMob").click(function() {
    console.log("Venusclicked");
    
    $(".planetImageHolder").find("img").fadeTo(0, 1);
         if($(".VenusImage").hasClass("enlarged")){
            $(".VenusImage").removeClass("enlarged");
            $(".imagePositionerMob").stop().animate({width: '25vw', height:'25vw'}, 2000 );
            $(".VenusImage").stop().animate({width: '25vw', height:'25vw'}, 2000,
            function(){
                $(this).parent().removeClass('ontop');
            }); /*so it gets put on bottom AFTER the shrink animation is finished*/
        }
        else{
            //var initialWidth =  1 * (100 / document.documentElement.clientWidth);
            //console.log(calc(25*xinitialWidth));
            $(".VenusImage").addClass("enlarged")
            var dppx = window.devicePixelRatio ||
            (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
            1;
            var sizeInCm = (sessionStorage.getItem("dpi")/dppx)*0.511811;
            $(this).parent().addClass('ontop');
            $(".VenusImage").stop().animate({width: sizeInCm, height:sizeInCm}, 2000 );
            $(".imagePositionerMob").stop().animate({height:sizeInCm}, 2000 );
         }
 
 });

 $(".venusPictureHolder").click(function() {
    console.log("Venusclicked");
    
    $(".planetImageHolder").find("img").fadeTo(0, 1);
         if($(".VenusImage").hasClass("enlarged")){
            
            $(".imagePositioner").stop().animate({width: '10vw', height:'20vh'}, 2000 );
            $(".VenusImage").stop().animate({width: '150px', height:'150px'}, 2000,
            function(){
                $(this).parent().removeClass('ontop');
            }); /*so it gets put on bottom AFTER the shrink animation is finished*/
           
            setTimeout(function(){ $(".VenusImage").removeClass("enlarged");},2100);

        }
        else{
            $(".VenusImage").addClass("enlarged")
            var dppx = window.devicePixelRatio ||
            (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
            1;
            var sizeInCm = (sessionStorage.getItem("dpi")/dppx)*0.511811;
            $(this).parent().addClass('ontop');
            $(".VenusImage").stop().animate({width: sizeInCm, height:sizeInCm}, 2000 );
            $(".imagePositioner").stop().animate({height:sizeInCm}, 2000 );
         }
 
 });