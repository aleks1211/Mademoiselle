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
    
    
})
