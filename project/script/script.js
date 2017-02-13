

$('#icon-menu').click(function(){
	$('#menu-left').css('left','0');
	$('#chanboba').css('width','100%');
	$('#menu-left').css('transition','all 0.3s linear');
})

$('#chanboba').click(function(){
	$('#menu-left').css('left','-250px');
	$('#chanboba').css('width','0');
})

$('#full-right').click(function(){
	$('.right-conten').toggleClass('full-width')

})
$('.full-menu').click(function(){
	$('.right-conten').toggleClass('full-width')
})
$(function(){
	$.fn.limit = function($n){
		this.each(function(){
			var allText   = $(this).html();
			var tLength   = $(this).html().length;
			var startText = allText.slice(0,$n);
			if(tLength >= $n){
				$(this).html(startText+'...');
			}else {
				$(this).html(startText);
			};
		});

		return this;
	}
	$('.list p').limit(120);
});
var Cau_hoi0 = {
	cau_hoi:"HTML là viết tắt của cụm từ nào?",
	dap_an1: "[1] Hyper Text Markup Language",
	dap_an2: "[2] Home Tool Markup Language",
	dap_an3: "[3] Holistic Technical Method Library",
	dap_an4: "[4] Hyper Tool Markup Language",
	ket_qua: "[1] Hyper Text Markup Language",
}
var Cau_hoi1 = {
	cau_hoi:"Ký tự nào luôn có mặt trong thẻ đóng của element?",
	dap_an1: "[1] /",
	dap_an2: "[2] &#43;",
	dap_an3: "[3] -",
	dap_an4: "[4] *",
	ket_qua: "[1] /",
}
var Cau_hoi2 = {
	cau_hoi:"Một thẻ trong HTML được bao bọc bởi cặp ký tự nào?",
	dap_an1: "[1] < và >",
	dap_an2: "[2] ? và !",
	dap_an3: "[3] ( và )",
	dap_an4: "[4] <? và ?>",
	ket_qua: "[1] < và >",
}
var Cau_hoi3 = {
	cau_hoi:"Làm thế nào để comment trong CSS?",
	dap_an1: "[1] // Đây là comment trong CSS",
	dap_an2: "[2] // Đây là comment trong CSS //",
	dap_an3: "[3] /* Đây là comment trong CSS */",
	dap_an4: "[4] -- Đây là comment trong CSS",
	ket_qua: "[3] /* Đây là comment trong CSS */",
}
var Cau_hoi4 = {
	cau_hoi:"Đâu là cú pháp đúng trong CSS?",
	dap_an1: "[1] {p:color=red;}",
	dap_an2: "[2] {p;color:red;}",
	dap_an3: "[3] p{color: red;}",
	dap_an4: "[4] p:color=red;",
	ket_qua: "[3] p{color: red;}",
}

var arr = [Cau_hoi0,Cau_hoi1,Cau_hoi2,Cau_hoi3, Cau_hoi4];
var so_cau_hoi = 1 ;
var max_CH = 0;
var diem = 0;
var a;
var hien_thi = 0;
var c;
var html;
var z ;
$('.dap_an').click(function(){
	c = $(this).html();
	if (arr[max_CH].ket_qua == c.trim()) {
		diem++;	
		z = '<i class="fa fa-check fa-4x"></i>'
	}
	else {
		z = '<i class="fa fa-close fa-4x"></i>'
	}
	return diem, hien_thi,z;
})
$('.dap_an').click(function(){

})
$('#kiem_tra').click(function(){
	$('#ket_qua').html(z);
	$('#kiem_tra').css('display','none');
	$('#tiep_tuc').css('display','block');

})
$('#tiep_tuc').click(function(){
	$('.checkbox1').prop('checked', false);
	$('#thong_bao').css('display','none')
	$('.quiz-menu').css('display', 'block')
	$('#ket_qua').html('')
	$('#kiem_tra').css('display','block');
	$('#tiep_tuc').css('display','none');
	max_CH++;
	hien_thi +=20;
	c = '';
	$('.progress-bar-info').css('width',hien_thi + '%');
	if (so_cau_hoi < arr.length) {

		html = '';
		$('#cau-hoi').html(arr[so_cau_hoi].cau_hoi);
		$('#tra_loi1').html(arr[so_cau_hoi].dap_an1);
		$('#tra_loi2').html(arr[so_cau_hoi].dap_an2);
		$('#tra_loi3').html(arr[so_cau_hoi].dap_an3);
		$('#tra_loi4').html(arr[so_cau_hoi].dap_an4);
		so_cau_hoi++;
	}

	if(max_CH == 5){
		if (diem >= 3) {
			html = 'Bạn đã hoàn thành khóa học'
			so_cau_hoi = 0;
			max_CH = 0;
			$('.quiz-menu').html('Bạn đã hoàn thành bài học')
			$('#luyen_tap_quiz').html('Hoàn thành bài học')
			$('#kiem_tra').css('display','none');
			$('#tiep_tuc').css('display','none');
		}
		else {
			so_cau_hoi = 0;
			max_CH = 0;
			$('#thong_bao').css('display','block')
			$('#kiem_tra').css('display','none');
			$('#tiep_tuc').css('display','block');
			$('#tiep_tuc').html('Làm lại')
			$('.quiz-menu').css('display', 'none')
			hien_thi = 0;
		}
	}
})
$('#cauhoi-rs').click(function(){
	so_cau_hoi = 0;
	$('#cau-hoi').html(arr[so_cau_hoi].cau_hoi);
	$('#tra_loi1').html(arr[so_cau_hoi].dap_an1);
	$('#tra_loi2').html(arr[so_cau_hoi].dap_an2);
	$('#tra_loi3').html(arr[so_cau_hoi].dap_an3);
	$('#tra_loi4').html(arr[so_cau_hoi].dap_an4);
	so_cau_hoi++;
	max_CH = 0;
	hien_thi=20;
	$('.progress-bar-info').css('width',hien_thi + '%');
})
$('#chinh-sua').click(function(){
	$('.ThongTin').removeAttr('readonly');
})
$('#luu-thongtin').click(function(){
	$('.ThongTin').attr('readonly','readonly')
})
$('#search-mobile-2').click(function(){
	$('.search_mobile-0').css('display','block')
})
$('#close-search-mobile').click(function(){
	$('.search_mobile-0').css('display','none')
})

// code thử 



document.getElementById('editor-html').style.fontSize='14px';
var editor = ace.edit("editor-html"); 
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
editor.setShowPrintMargin(false);
editor.setOptions({
	enableBasicAutocompletion: true,
	enableSnippets: true,
	enableLiveAutocompletion: true,
	enableEmmet: true
});

(function () {
	var modelist = ace.require("ace/ext/modelist");
	var filePath = "blahblah/weee/some.html";
	var mode = modelist.getModeForPath(filePath).mode;
	editor.session.setMode(mode);
}());


document.getElementById('editor-css').style.fontSize='14px';
var css1 = ace.edit("editor-css");
css1.setTheme("ace/theme/monokai");
css1.getSession().setMode("ace/mode/css");
css1.setShowPrintMargin(false);
css1.setOptions({
	enableBasicAutocompletion: true,
	enableSnippets: true,
	enableLiveAutocompletion: true,
	enableEmmet: true
});
(function () {
	var modelist = ace.require("ace/ext/modelist");
	var filePath = "blahblah/weee/some.css";
	var mode = modelist.getModeForPath(filePath).mode;
	css1.session.setMode(mode);
}());

document.getElementById('editor-js').style.fontSize='14px';
var js1 = ace.edit("editor-js");
js1.setTheme("ace/theme/monokai");
js1.getSession().setMode("ace/mode/javascript");
js1.setShowPrintMargin(false);
js1.setOptions({
	enableBasicAutocompletion: true,
	enableSnippets: true,
	enableLiveAutocompletion: true,
	enableEmmet: true
});
(function () {
	var modelist = ace.require("ace/ext/modelist");
	var filePath = "blahblah/weee/some.js";
	var mode = modelist.getModeForPath(filePath).mode;
	js1.session.setMode(mode);
}());


// function fetchHtml() {
// 	var html = editor.getValue();
// 	return html;
// }
// function fetchCss() {
// 	var css = css1.getValue();
// 	return css;
// }
// function fetchJs() {
// 	var js = js1.getValue();
// 	return js;
// }
var html;
$('#innerbox').on("click", function() {
	var target = $('#live_update')[0].contentWindow.document;
	target.open();
	target.close();

	var html = editor.getValue();
	var css = css1.getValue();
	var js = js1.getValue();

	$('body', target).append(html);
	$('head', target).append('<style>' + css + '</style>');
	$('head', target).append('<script>' + js + '</script>');
})
 // Tool box
 jQuery(document).ready(function($) {    
  //selector đến menu cần làm việc
  var TopFixMenu = $(".tool-box");
  // dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
  $(window).scroll(function(){
    // Nếu cuộn được hơn 150px rồi
    if($(this).scrollTop()>450){
      // Tiến hành show menu ra    
      TopFixMenu.show();
  }else{
      // Ngược lại, nhỏ hơn 150px thì hide menu đi.
      TopFixMenu.hide();
  }}
  )
})
 



