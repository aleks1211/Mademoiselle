$(document).ready(function(){
    
   //team-slider
   if($('.team-members-slider').length > 0){
         $(".team-members-slider").owlCarousel({
             responsive:{
                 0:{
                   items:1,
                   margin:0
                 }
             }
         });
   }
   
   //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();
    

     //form validator
    if ($('.contact-form').length > 0) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    reguired: true
                },
                email: {
                    reguired: true,
                    email: true
                },
                message: {
                    reguired: true
                }
            },
            messages: {
                name: {
                    reguired: 'The Name* field is required'
                },
                email: {
                    reguired: 'The Name* field is required',
                    email: 'Please provide a valid email address'
                },
                message: {
                    reguired: 'The Message* field is required'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest('.form-group').find('.error-msg'));
            }

        });
    }
});
