$(document).ready(function(){
    const rocketButton = document.querySelector(".rocketBtn");
    rocketButton.addEventListener("click", (e) => {
        
        document.querySelectorAll("span").forEach((element) => {
            //element.style.removeProperty('display');
            element.classList.add("expanded");
        });
            
        setTimeout(function(){$('#one').css("z-index","100");},90);
        setTimeout(function(){$("#one").addClass("boTextDesignExpanded");},100);

        setTimeout(function(){$('#two').css("z-index","100");},1010);
        setTimeout(function(){$("#two").addClass("boTextDesignExpanded");},1020);

        setTimeout(function(){$('#three').css("z-index","100");},2010);
        setTimeout(function(){$("#three").addClass("boTextDesignExpanded");},2020);

        setTimeout(function(){$('#four').css("z-index","100");},3010);
        setTimeout(function(){$("#four").addClass("bobTextDesignExpanded");},3020);

        setTimeout(function(){$('#one').css("z-index","-100");},990);
        setTimeout(function(){$('#two').css("z-index","-100");},1990);
        setTimeout(function(){$('#three').css("z-index","-100");},2990);
        setTimeout(function(){$('#four').css("opacity","0");},4000);
        setTimeout(function(){$('#four').css("z-index","-100");},4000);
        setTimeout(function(){$('.expanded').css("opacity","0");},1000);
        setTimeout(function(){$('.expanded').css("z-index","-10");},5000);

        // Timings for the rocket flames
        let i=0
        do {
            setTimeout(function(){$("#rocketTwo").css("width", "210px");},i);
            i=i+400
            setTimeout(function(){$("#rocketTwo").css("width", "200px");},i);
            i=i+400
        }
        while (i<17500)

        setTimeout(function(){$(".satelliteOne").css("opacity", "1");},23000);
        setTimeout(function(){$(".satelliteTwo").css("opacity", "1");},23000);

        setTimeout(function(){$(".cloudOne").css("bottom", "-60%");},11000);
        setTimeout(function(){$(".cloudTwo").css("bottom", "-60%");},11000);
        setTimeout(function(){$(".cloudThree").css("bottom", "-60%");},11000);
        setTimeout(function(){$(".cloudFour").css("bottom", "-60%");},11000);
        setTimeout(function(){$(".cloudFive").css("bottom", "-60%");},11000);
        setTimeout(function(){$(".cloudSix").css("bottom", "-60%");},11000);

        // Timings for the rocket moving up screen. each one takes 8s
        setTimeout(function(){$("#rocketOne").css("bottom", "50%");},3000);
        setTimeout(function(){$("#rocketTwo").css("bottom", "50%");},3000);
        setTimeout(function(){$("#rocketTwo").css("opacity", "1");},3500);
        setTimeout(function(){$("#rocketOne").css("bottom", "125%");},18000);
        setTimeout(function(){$("#rocketTwo").css("bottom", "125%");},18000);

        // Timings for the gradient images
        setTimeout(function(){$("#bgone").css("top","100%");},3050);
        setTimeout(function(){$("#bgtwo").css("top","0");},3040);
        setTimeout(function(){$("#bgtwo").css("top","100%");},7000);
        setTimeout(function(){$("#bgthree").css("top","0");},6990);
        setTimeout(function(){$("#bgthree").css("top","100%");},11000);
        setTimeout(function(){$("#bgfour").css("top","0");},10990);
        setTimeout(function(){$("#bgfour").css("top","100%");},15000);
        setTimeout(function(){$("#bgfive").css("top","0");},14990);
        setTimeout(function(){$("#bgfive").css("top","100%");},19000);
        setTimeout(function(){$("#bgsix").css("top","0");},18000);
        setTimeout(function(){$("#bgfive").css("opacity","0.5");},18000);
        setTimeout(function(){$("#sun").css("top","-75px");},23000);

        setTimeout(function(){$(".arrivedText").css("opacity","1");},26000);
        setTimeout(function(){$(".arrivedText").css("z-index","150");},26000);

        // Timings for removing the button
        setTimeout(function(){$("#rocketButton").css("display","none");},3000);

        // Timings for removing the launchpad
        setTimeout(function(){$("#launchpad").css("bottom","-400px");},8000);
        setTimeout(function(){$("#smoke").css("bottom","-400px");},8000);
        setTimeout(function(){$("#ground").css("bottom","-600px");},8000);
        setTimeout(function(){$(".skipBtnDiv").css("z-index","10");},9000);
        setTimeout(function(){$(".skipBtnDiv").css("z-index","-100");},26000);
        setTimeout(function(){$("#smoke").css("opacity","1");},3000);
        
    });
});

