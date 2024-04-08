$(document).ready(function(){

    //Mobile menu toggle
    $(".mIcon_btn").click(function(){
        let toogleIcon = $(".mIcon_btn .fa-solid");
        let menus = $(".menus");
        if (toogleIcon.hasClass("fa-bars")) {
          toogleIcon.removeClass("fa-bars");
          toogleIcon.addClass("fa-xmark");
          menus.css({display: "block"});
        }
        else{
            toogleIcon.removeClass("fa-xmark");
            toogleIcon.addClass("fa-bars");
            menus.css({ display: "none" });
        }
    });

    //Live streaming menu toggle
    $(".mobile_bars").click(function () {
      let toogleIcon = $(".mobile_bars .fa-solid");
      let menus = $(".live_header_inner");
      if (toogleIcon.hasClass("fa-bars")) {
        toogleIcon.removeClass("fa-bars");
        toogleIcon.addClass("fa-xmark");
        menus.css({ display: "block" });
      } else {
        toogleIcon.removeClass("fa-xmark");
        toogleIcon.addClass("fa-bars");
        menus.css({ display: "none" });
      }
    });

    //Active class itaration 
    $(".menu_link").click(function (event) {
      event.preventDefault();
      $(".menu_link").removeClass("active");
      $(this).addClass("active");
    });
    
})