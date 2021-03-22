$(document).ready(function () {
// 상단팝업

   
     $('.pop a').click(function(){
     $('.top').hide();   
                });
        
                 



// 몸통영역

       
            $('.main_list').slick({            
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed:2000,
                dots: true,
                prevArrow:$(".main_left"),
                nextArrow:$(".main_right")
            });
     


//  신상품

                   $('.newjs ol').slick({            
                    slidesToShow: 4,        
                    slidesToSilde: 1,
                     prevArrow:$(".newjs_bt_l"),
                     nextArrow:$(".newjs_bt_r")
                     });
           

// 베스트

     
                $(".best ul li").click(function(){
                    $(".best ul li").removeClass("on");
                    $(this).addClass("on");
                    var tabs=$(this).data("tab");
                    $(".best_ol").hide();
                    $("#"+tabs).show(100);

                    
                });
                 
      


// 네일케어 툴

     
               $('.tools ol').slick({            
                slidesToShow: 4,        
                slidesToSilde: 1,
                 prevArrow:$(".tools_bt_l"),
                 nextArrow:$(".tools_bt_r")
                 });
         


});