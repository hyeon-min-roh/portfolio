$(document).ready(function(){

    //move on top event
    $(".btn-move__top").on("click",function(){      
        $("html, body").scrollTop(0);
    });

    //total menu event
    $("#menu").on("click",function(){      
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $("#sitemap").removeClass("active");
        }
        else{
            $(this).addClass("active");
            $("#sitemap").addClass("active");
        }
    });
});