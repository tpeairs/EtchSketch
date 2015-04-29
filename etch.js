$(document).ready(function(){
	for (var i = 0; i < 16; i++){
		$(".container").append('<div></div>');
	}
	for (var i = 0; i < 16; i++){
		$('.container').children('div').append('<div></div>');
	}
	$('.container > div > div').hover(function(){
		$(this).css("background-color","red");
	});

});

var sizer = 16;
function newGrid() {
	var numb = prompt("What size do you want the new grid?");
	var newheight = $('.container > div > div').height();
	var newwidth = $('.container > div > div').width();
	$('.container:not(first-child)').empty();
	for (var i = 0; i < numb; i++){
		$('.container').append('<div></div>');
	}
	for (var i = 0; i < numb; i++){
		$('.container').children('div').append('<div></div>');
	}
	$('.container > div > div').hover(function(){
		$(this).css("background-color","red");
	});
	var newHeight = (newheight * sizer)/numb;
	var newWidth = (newwidth * sizer)/numb;
	sizer = numb;
	$('.container > div > div').height(newHeight).width(newWidth);
}
