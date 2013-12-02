$(document).ready(function(){
$(".topDesign").on({
	mouseenter: function(){
		$("#moopic").show();
	},
	mouseleave: function(){
		$("#moopic").hide();
	}
	});
$("#sun").animate({backgroundColor:"#FF8B61"}, 15000);
$(".topDesign").animate({backgroundColor:"#60D4FF"}, 15000);
});
