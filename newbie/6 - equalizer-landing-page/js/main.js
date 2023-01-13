// All this code is due to lack of structure, in particulary, the footer element

const scrollbarWidth = window.innerWidth - document.querySelector('body').clientWidth;
let widthLargeLoad = 537 + scrollbarWidth; 
if (scrollbarWidth != 0 ) {
    if (window.matchMedia(' (width > 374px) and (width <= 442px) ').matches) {
        document.getElementById("footer_position").style.top = "24.375rem"; 
    } else if ( window.matchMedia( '( width > 442px ) and (width <= '+widthLargeLoad+'px)' ).matches ) {
        document.getElementById("footer_position").style.top = "22.625rem";
    } else if (window.matchMedia( '( width > '+widthLargeLoad+'px) and (width <= 767px)' ).matches) {
        document.getElementById("footer_position").style.top= "20.875rem";
    }
} else {
    if (window.matchMedia(' (width > 374px) and (width <= 442px) ').matches) {
        document.getElementById("footer_position").style.top = "24.375rem"; 
    } else if ( window.matchMedia( '( width > 442px ) and (width <= 537px)' ).matches ) {
        document.getElementById("footer_position").style.top = "22.625rem";
    } else if ( window.matchMedia( '( width > 537px ) and (width <= 761px)' ).matches ) {
        document.getElementById("footer_position").style.top= "20.875rem";
    } else if (window.matchMedia( '(width > 761px) and (width <= 767px)' ).matches) {
        document.getElementById("footer_position").style.top= "19.125rem";
    }
}
window.addEventListener("resize", function() { 
    const scrollbarWidth = window.innerWidth - document.querySelector('body').clientWidth;
    let widthLarge = 537 + scrollbarWidth; 
    if (scrollbarWidth != 0 ) {
        const screen = {
            small : null,
            medium: window.matchMedia('(width > 374px) and (width <= 442px)'),
            large : window.matchMedia( '( width > 442px ) and (width <= '+widthLarge+'px)' ),
            large2 : window.matchMedia( '( width > '+widthLarge+'px ) and (width <= 767px)' ),
            other: window.matchMedia('(width > 767px)')
         };
         function mqHandler() {
            const scrollbarWidth = window.innerWidth - document.querySelector('body').clientWidth;
            if ( scrollbarWidth == 0) {
                return;
            }
            let size = null;
            for (let [scr, mq] of Object.entries(screen)) {
              if (!mq || mq.matches){
                size = scr;
                if ( scr == "medium") {
                    document.getElementById("footer_position").style.top = "24.375rem"; 
                } else if ( scr == "large") {
                    document.getElementById("footer_position").style.top = "22.625rem";
                } else if ( scr == "large2") {
                    document.getElementById("footer_position").style.top= "20.875rem";
                }  else if ( scr == "extra") {
                    document.getElementById("footer_position").style.top= "19.125rem";
                } else if ( scr == "other") {
                    document.getElementById("footer_position").style.top= "unset";
                }
              }
            }
        } 
         for (let [scr, mq] of Object.entries(screen)) {
            if (mq) {
                if ( scrollbarWidth == 0  ) {
                    mq.removeEventListener("change", mqHandler);
                    break;
                } else {
                    mq.addEventListener('change', mqHandler);
                }
            }
        }
    } else {
        const screen = {
            small : null,
            medium: window.matchMedia('(width > 374px) and (width <= 442px)'),
            large : window.matchMedia( '( width > 442px ) and (width <= 537px)' ),
            large2 : window.matchMedia( '( width > 537px ) and (width <= 761px)' ),
            extra: window.matchMedia( '(width > 761px) and (width <= 767px)' ),
            other: window.matchMedia('(width > 767px)')
         };
         function mqHandler() {
            const scrollbarWidth = window.innerWidth - document.querySelector('body').clientWidth;
            if ( scrollbarWidth != 0) {
                return;
            }
            let size = null;
            for (let [scr, mq] of Object.entries(screen)) {
              if (!mq || mq.matches){
                size = scr;
                if ( scr == "medium") {
                    document.getElementById("footer_position").style.top = "24.375rem"; 
                } else if ( scr == "large") {
                    document.getElementById("footer_position").style.top = "22.625rem";
                } else if ( scr == "large2") {
                    document.getElementById("footer_position").style.top= "20.875rem";
                }  else if ( scr == "extra") {
                    document.getElementById("footer_position").style.top= "19.125rem";
                } else if ( scr == "other") {
                    document.getElementById("footer_position").style.top= "unset";
                }
              }
            }
        } 
         for (let [scr, mq] of Object.entries(screen)) {
            if (mq) {
                if ( scrollbarWidth != 0  ) {
                    mq.removeEventListener("change", mqHandler);
                    break;
                } else {
                    mq.addEventListener('change', mqHandler);
                }
            }
        }
    }
});
