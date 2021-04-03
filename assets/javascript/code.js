console.log("window height: " + window.innerHeight)
vh = window.innerHeight

// $(".menu-link").on("click",function(e){
//     console.log("#"+this.id)
//     $(".menu-link").css("writing-mode","vertical-rl");
//     $(".menu-link").css("font-size","1rem");
//     

//     $("#"+this.id).css("writing-mode","horizontal-tb");
//     $("#"+this.id).css("font-size","1.5rem");
//     $("
// })
$(document).on("scroll", (function () {

    pos = document.documentElement.scrollTop
    console.log("position: " + pos)
    console.log("window height: " + vh)
    if (pos >= vh && pos <= vh + 2) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link2").css("writing-mode", "horizontal-tb");
        $("#link2").css("font-size", "1.5rem");
        $("#link2").css("background", "linear-gradient(0deg,rgb(5 24 50 / 33%) 50%, transparent 50%)");
    }
    if (pos === 0) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link1").css("writing-mode", "horizontal-tb");
        $("#link1").css("font-size", "1.5rem");
        $("#link1").css("background", "linear-gradient(0deg,rgb(30 164 194 / 72%) 50%, transparent 50%)");
    }
    if (pos >= vh * 2 && pos <= vh * 2 + 2) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link3").css("writing-mode", "horizontal-tb");
        $("#link3").css("font-size", "1.5rem");
        $("#link3").css("background", "linear-gradient(0deg,#b0bdcb 50%, transparent 50%)");
    }
    if (pos >= vh * 3 && pos <= vh * 3 + 2) {
        $(".menu-link").css("writing-mode", "vertical-rl");
        $(".menu-link").css("font-size", "1rem");
        $(".menu-link").css("background", "white");
        $("#link4").css("writing-mode", "horizontal-tb");
        $("#link4").css("font-size", "1.5rem");
        $("#link4").css("background", "linear-gradient(0deg,rgb(243 233 216 / 70%) 50%, transparent 50%)");
    }
    if ((pos > vh*2+1)) {
        $(".back").css("z-index", "5");
       
    }
    else {
         $(".back").css("z-index", "1");
         
            }

}))




