/*-------------------------------------------------

	- Proyect: DJ Candelas
	- Date: Nov 2019
	- Author: Bryan Rodríguez

-------------------------------------------------*/

$(".js--first-scroll").click(function() {
  $("html, body").animate(
    { scrollTop: $(".js--section-about").offset().top },
    800
  );
});
