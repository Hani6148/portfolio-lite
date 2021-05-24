//calculating the height of the viewport 
vh = window.innerHeight



$(document).on("scroll", (function () {
   //calculating scroll position on scroll event 
  //making style changes to the link corresponding to the page section according to the scroll position 
    pos = document.documentElement.scrollTop
    if (pos === 0) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link1").css("writing-mode", "horizontal-tb");
        $("#link1").css("font-size", "1.5rem");
        $("#link1").css("background", "linear-gradient(0deg,rgb(30 164 194 / 72%) 50%, transparent 50%)");
    }

    else if (pos >= vh && pos <= vh + 2) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link2").css("writing-mode", "horizontal-tb");
        $("#link2").css("font-size", "1.5rem");
        $("#link2").css("background", "linear-gradient(0deg,rgb(5 24 50 / 33%) 50%, transparent 50%)");
    }

    else if (pos >= vh * 2 && pos <= vh * 2 + 2) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link3").css("writing-mode", "horizontal-tb");
        $("#link3").css("font-size", "1.5rem");
        $("#link3").css("background", "linear-gradient(0deg,#b0bdcb 50%, transparent 50%)");
    }
    else if (pos >= vh * 3 && pos <= vh * 3 + 2) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link4").css("writing-mode", "horizontal-tb");
        $("#link4").css("font-size", "1.5rem");
        $("#link4").css("background", "linear-gradient(0deg,rgb(243 233 216 / 70%) 50%, transparent 50%)");
    }

    //bring the .back section forward if the scroll position is bigger than the height of the viewport + 1 
    if ((pos > vh*2+1)) {
        $(".back").css("z-index", "5");
       
    }
    else {
         $(".back").css("z-index", "1");
         
            }

}))
 



