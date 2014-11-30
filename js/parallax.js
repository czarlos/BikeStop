$(document).ready(function() {
		
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });

 	$(".gallery").click(function(event){

            var elementID = "#"+event.target.id+"-paragraph";

            $(elementID).slideToggle("slow");

        });

    /* Animate transitions */

	$('body div').hide();

	$('body, div').each(function(i) {
		$(this).delay((i++) * 250).fadeTo(800, 1);
	});

    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

