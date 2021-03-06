$(document).ready(function(){
    // AOS
    AOS.init();

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

    /*******************
     * Email modal
     ****/
    $(".contact_btn").on("click", function(){        
        $(".pf_contact").removeClass("nonactive");
        $(".pf_contact").addClass("active");
    });

    $(".pf_contact .contact-top button").on("click", function(){

        $(".pf_contact").addClass("nonactive");
        
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

        // check data
        let mail_name = $("[name='to_name']").val();
        let mail_addr = $("[name='from_name']").val();
        let mail_cont = $("[name='message_html']").val();
        if( mail_name == "" ){
            alert("발신자를 입력해주세요 :)");
            $("[name='to_name']").focus();
            return;
        }
        if( mail_addr == "" ){
            alert("발신메일 주소를 입력해주세요 :)");
            $("[name='from_name']").focus();
            return;
        }
        if( mail_cont == "" ){
            alert("보내실 내용을 입력해주세요 :)");
            $("[name='message_html']").focus();
            return;
        }
        emailjs.sendForm('gmail', 'template_D27Dr1Dc', this);
        alert("메일이 전송되었습니다 XD");
    });
}