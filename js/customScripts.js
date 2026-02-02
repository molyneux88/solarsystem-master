//Tablet Custom scripts
//Last planet icon tapping change
$(document).ready(function(){

    $('#lastPlanet').click(function(){
        $('#lastToggle').slideToggle(1000);
        if($('#lastIconMinus').css('display') == 'none')
        {
            $("#lastIconPlus").css("display", "none");
            $("#lastIconMinus").css("display", "inline-block");
        }
        else
        {
            $("#lastIconMinus").css("display", "none");
            $("#lastIconPlus").css("display", "inline-block");
        }
      });
});

//Next planet icon tapping change
$(document).ready(function(){
    $('#nextPlanet').click(function(){
        $('#nextToggle').slideToggle(1000);
        if($('#nextIconMinus').css('display') == 'none')
        {
            $("#nextIconPlus").css("display", "none");
            $("#nextIconMinus").css("display", "inline-block");
        }
        else
        {
            $("#nextIconMinus").css("display", "none");
            $("#nextIconPlus").css("display", "inline-block");
        }
      });
});

//Mobile Custom scripts
//Planet Image icon tapping change
$(document).ready(function(){
    $('#ph').click(function(){
        //enlarge image script goes in here
        if($('#planetImageIconMinus').css('display') == 'none')
        {
            $("#planetImageIconPlus").css("display", "none");
            $("#planetImageIconMinus").css("display", "inline-block");
        }
        else
        {
            $("#planetImageIconMinus").css("display", "none");
            $("#planetImageIconPlus").css("display", "inline-block");
        }
      });
});

$(document).ready(function(){
    $('#pho').click(function(){
        //enlarge image script goes in here
        if($('#planetImageIconMinusMob').css('display') == 'none')
        {
            $("#planetImageIconPlusMob").css("display", "none");
            $("#planetImageIconMinusMob").css("display", "inline-block");
        }
        else
        {
            $("#planetImageIconMinusMob").css("display", "none");
            $("#planetImageIconPlusMob").css("display", "inline-block");
        }
      });
});
