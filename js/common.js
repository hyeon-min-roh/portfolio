$(document).ready(function(){

    // toggle box
    $(".toggle-box .toggle-box__top").on("click", function(){       
        if($(this).hasClass("off")){
            $(this).removeClass("off");
        }
        else{
            $(this).addClass("off");
        }
    });

    //scroll event
    scrollEventBox();
    $(window).scroll(function(){
        scrollEventBox();
    });

    
    //onepage
    let winHeight = window.innerHeight;
    $("#content .main").height(winHeight);
});

// scroll event box
function scrollEventBox(){
    var window_scroll_top=$(window).scrollTop();
    var window_height=$(window).height();
    
    $(".scroll-event-box").each(function(){
        
        var box_offset=$(this).offset();
        var box_top=box_offset.top;
        
       
        if(window_scroll_top<=box_top&&window_scroll_top+window_height>=box_top){$(this).addClass("active");}
        else $(this).removeClass("active"); // if u want to have event just once. change to comments.
    });
}

/*******************
 * EmailJS
 ****/
(function(){
    emailjs.init('user_bYmRwIsYr00m4mQRTOPms');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('gmail', 'template_D27Dr1Dc', this);
    });
}