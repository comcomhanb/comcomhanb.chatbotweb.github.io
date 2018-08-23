$(document).ready(function(){

	$(".search_btn").click(function(){
		$("#search_box").stop().animate({top:'0'},{queue:false, duration:500, easing: 'easeOutQuart'});
		$("#search_box .input_search").focus();
	});

	$("#search_box .input_search").focusout(function(){
		$("#search_box").stop().animate({top:'-52px'},{queue:false, duration:500, easing: 'easeOutQuart'});
	});

	$(".btn_detail img").click(function(){
		$(this).next().attr('style', "display:block;");
	});		
		
	$(".btn_detail div").click(function(){
		$(this).attr('style', "display:none;");
	});		

	// 탭메뉴
	$(".select_layer").hide();
	$(".select_tab2 li:first").addClass("on").show();
	$(".select_layer:first").show();
	$(".tab_layer").hide();
	//$(".sub_tab2 li:first").addClass("on").show();
	$(".tab_layer:first").show();

	$(".select_tab2 li").click(function() {
		$(".select_tab2 li").removeClass("on");
		$(this).addClass("on");
		$(".select_layer").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;
	});

	/*
	$(".sub_tab2 li").click(function() {
		$(".sub_tab2 li").removeClass("on");
		$(this).addClass("on");
		$(".tab_layer").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;
	});
	*/

/*
	$(".notice_wrap .title").toggle(function(e){
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			$(this).find(".img").attr('style', " transform:rotate(90deg);");
			$(this).next().slideDown();
		},function(e){
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			$(this).find(".img").attr('style', " transform:rotate(0deg);");
			$(this).next().slideUp();
		});
*/
});


// 스크롤
$(document).scroll(function(){
	/*
	var num = $(this).scrollTop();
	var height = $("#btn_wrap").height();
	if( num < 100) {
		$("#btn_wrap").attr('style', "position:fixed; bottom:0; left:0; margin:0 0 -15px 0; width:100%; z-index:1000; background:#fff;");
	}else{
		$("#btn_wrap").attr('style', "position:relative; background:none;");
	}
	*/
});

function hideBtnBottom() {
	$("#btn_wrap").attr('style', "position:fixed; bottom:0; left:0; margin:0 0 0 0; width:100%; z-index:1000; background:#fff;");
}