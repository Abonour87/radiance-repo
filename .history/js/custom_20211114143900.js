$(function(){
	$(".loader_bg").delay("2000").fadeToggle("1000")
})
// $(function(){
	$(".all-simple .simple span i").click(function(){
		$(this).toggleClass("fa-plus fa-minus").parent().next().slideToggle("hidden");
		// $(this).toggleClass("fa-plus fa-minus");
	})
// })
$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	  margin: 10,
	  nav: false,
	  dots: true,
	  loop: true,
	  autoplay:true,
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 2
		},
		1000: {
		  items: 3
		}
	  }
	})
  })