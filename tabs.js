$(document).ready(function(){
		$('ul li').click(function(){
			var tab_id = $(this).attr('data-tab');
			$('ul.tabs  li').removeClass('current');
			$('.tab-content').removeClass('current');
			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});
	});