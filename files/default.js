function subPagePopup(code, v1, v2, v3, v4, v5) {
	if(!code) return;
	if(!v1) v1 = "";
	if(!v2) v2 = "";
	if(!v3) v3 = "";
	if(!v4) v4 = "";
	if(!v5) v5 = "";

	location.href = "subpopup:" + code + ":" + v1 + ":" + v2 + ":" + v3 + ":" + v4 + ":" + v5;
}
function subPagePopup_callback(data) {
	alert(data);
}

function linkMap(code, v1, v2, v3, v4, v5) {
	if(!code) return;
	if(!v1) v1 = "";
	if(!v2) v2 = "";
	if(!v3) v3 = "";
	if(!v4) v4 = "";
	if(!v5) v5 = "";

	if(loginMenu != null && loginMenu.length > 0) {
		for(var i = 0; i < loginMenu.length; i ++) {
			if(loginMenu[i] == code) {
				// 로그인 처리
				alertToast("로그인이 필요합니다.");
				setTimeout("location.href = 'login:';", 200);
				return;
			}
		}
	}

	location.href = code + ":" + v1 + ":" + v2 + ":" + v3 + ":" + v4 + ":" + v5;
}

function CheckEmail(strText) {
	if (strText.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+.[a-zA-Z.]+$/)) {
		return true;
	} else {
		return false;
	}
}

function pageBack() {
	location.href = "back:";
}

function pageReload() {
	location.href = "reload:";
}

function alertToast(msg) {
	location.href = "alert:" + encodeURIComponent(msg);
}
function alertCloseToast(msg) {
	location.href = "alertclose:" + encodeURIComponent(msg);
}

function repair_showImage(filename, r_no, filePos) {
	if(filename == "") return;
	location.href = "imageshow:" + r_no + ":" + filePos;
}


function showImageGallery(filenames) {
	location.href = "imagegallery:" + filenames;
}

function showMap(address) {
	location.href = "http://maps.google.com/maps?f=q&q=" + address + "&hl=ko";
}


function calMonthMoneyCash(money, month, rate) {
	nowMoney = money;
	principal = nowMoney;
	dur1 = month;

	divprin = (principal * rate * 0.01 / 12) * Math.pow((1 + rate * 0.01 / 12), dur1) / (Math.pow((1 + rate * 0.01 / 12), dur1) - 1);

	return divprin;
}


function kakaotalkLink(text, url) {
	var param = 'sendurl?msg=' + encodeURIComponent(text);
		param += '&url=' + url;
		param += '&type=link';
		param += '&apiver=2.0.1';
		param += '&appver=2.0';
		param += '&appid=com.bakcha';
		param += '&appname=' + encodeURIComponent('박차');
	 
	if(navigator.userAgent.match(/android/i))
	{
		setTimeout(function(){
			location.href = 'intent://' + param + '#Intent;package=com.kakao.talk;end;';
		}, 100);
	}
	else if(navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i))
	{
		setTimeout(function(){
			location.href = 'itms-apps://itunes.apple.com/app/id362057947?mt=8';
		}, 200);
		setTimeout(function(){
			location.href = 'kakaolink://' + param;
		}, 100);
	}
}



// [s] 이미지 업로드 팝업
function popupImageUpload(gName) {
	popWin("/common/popup/imageUpload.html?gName=" + gName, "popup_imageUpload", 400, 300, 'no', 'no');
}
function popupImageUploadDel(gName) {
	$("#PIImageFrame_" + gName).attr("src", "");
	$("#PIImageName_" + gName).val("");
	$("#PIImageNameOld_" + gName).val("");
}
function _popupImageUpload(gName, filename) {
	$("#PIImageFrame_" + gName).attr("src", "/data/__swftemp/" + filename);
	$("#PIImageName_" + gName).val(filename);
}
// [e] 이미지 업로드 팝업


function keyboardMover(obj, length, id) {
	if(obj.value.length != length) return;
	var tObj = null;
	if($("#" + id)) tObj = $("#" + id);
	//if($("[name=" + id + "]")) tObj = $("[name=" + id + "]");
	tObj.focus();
}


var _saveMNo = 0;
var _eventFirstFlag = false;
function sizeCarDetail() {
	// 스크롤 될 때 리사이즈 될 때 처리
	if(_saveMNo == 0) return;

	//var top = getPageScroll(true);
	//$("#div_showCarDetail").css("top", top + "px");

	var width = 790; // 기본 높이값
	var height = 700; // 기본 높이값

	// 화면크기 체크
	if($('body').height() - height < 0) height = $('body').height() - 100;
	var top = ($('body').height() - height) / 2;
	var left = ($('body').width() - width) / 2;

	var obj = $("#div_showCarDetail");
	obj.css("width", "100%");
	obj.css("height", "100%");
	obj.find(".sCloseBtn").css("top", (top - 30) + "px");
	obj.find(".sCloseBtn").css("left", left + "px");
	//obj.find(".showCarData").animate({'top': top + 'px','opacity':'1'},300); //홀수
	obj.find(".showCarData").css("top", top + "px");
	obj.find(".showCarData").css("left", left + "px");
}
function showCarDetail(m_no) {
	if(_saveMNo == m_no) {
		hideCarDetail();
		return;
	}
	if(!_eventFirstFlag) {
		$(window).resize(function() {
			sizeCarDetail();
		});
		//$(document).scroll(function() {
		//	sizeCarDetail();
		//});
		_eventFirstFlag = true;
	}

	_saveMNo = m_no;

	var obj = $("#div_showCarDetail");
	if(!obj.attr("id")) {
		$("body").append("<div id='div_showCarDetail'><div class='bgBlank' onclick='hideCarDetail();'>&nbsp;</div><div class='sCloseBtn'><img src='/image/sub/btn_carViewClose.png' onclick='hideCarDetail();' /></div><div class='showCarData'></div></div>");
		obj = $("#div_showCarDetail");
	}

	var width = 790; // 기본 높이값
	var height = 700; // 기본 높이값

	// 화면크기 체크
	if($(window).height() - height < 0) height = $(window).height() - 100;
	var top = ($(window).height() - height) / 2;
	var left = ($(window).width() - width) / 2;

	//alert($(window).height() + " / " + left);

	obj.find(".sCloseBtn").css("top", (top - 30) + "px");
	obj.find(".sCloseBtn").css("left", left + "px");
	obj.find(".showCarData").animate({'top': top + 'px','opacity':'1'},300); //홀수
	//obj.find(".showCarData").css("top", top + "px");
	obj.find(".showCarData").css("left", left + "px");
	obj.find(".showCarData").html("<iframe src='/car/carViewFrame.html?m_no=" + m_no + "' width='" + width + "' height='" + height + "' frameborder='0' scrolling='yes'></iframe>");
	obj.show();
}
function hideCarDetail() {
	_saveMNo = 0;
	var obj = $("#div_showCarDetail");
	obj.find(".showCarData").css("top", "0px");
	obj.hide();
}


function makeSubject(txt) {
	var f = document.form;
	if(txt == "") f.subject.value = "";
	else f.subject.value = txt + " 상담을 요청합니다.";
}

function flash_print(url, width, height) {
	document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' ");
	document.write("codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0' ");
	document.write("width='" + width + "' height='" + height + "'>");
	document.write("  <param name='movie' value='" + url + "'>");
	document.write("  <param name='quality' value='high'>");
	document.write("  <param name='wmode' value='transparent'>");
	document.write("  <param name='menu' value='false'>");
	document.write("  <embed src='" + url + "' quality='high' ");
	document.write("    pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash'  ");
	document.write("    type='application/x-shockwave-flash' ");
	document.write("    width='" + width + "' height='" + height + "'>");
	document.write("  </embed>");
	document.write("</object>");
}
function media_print(url, width, height, autostart) {
	var width_print = (width) ? "width='" + width + "'": "";
	var height_print = (height) ? "height='" + height + "'": "";
	if(!autostart) autostart = '0';
	document.write("<embed src='" + url + "' wmode='transparent'");
	document.write("    "+ width_print + " " + height_print + "");
	document.write("    autostart='" + autostart + "'>");
	document.write("</embed>");
}


function FlashMainbody(Ftrans,wid,hei) {
	mainbody = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='"+ wid +"' height='"+ hei +"'>";
	mainbody += "<param name='movie' value='"+ Ftrans +"'>";
	mainbody += "<param name='quality' value='high'>";
	mainbody += "<param name='menu' value='false'>";
	mainbody += "<embed src='"+ Ftrans +"' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+ wid +"' height='"+ hei +"'></embed>"
	mainbody += "</object>";

	//document.body.innerHTML = mainbody;
	document.write(mainbody);
	return;
}

function getPageScroll(direct) {
	var yScroll;
	if (self.pageYOffset) {
		yScroll = (direct) ? self.pageYOffset : self.pageXOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){     // Explorer 6 Strict
		yScroll = (direct) ? document.documentElement.scrollTop : document.documentElement.scrollLeft;
	} else if (document.body) {// all other Explorers
		yScroll = (direct) ? document.body.scrollTop : document.body.scrollLeft;
	}
	return yScroll;
}
function MemoView(num, flag) {
	var obj = document.getElementById("memoDiv_" + num);
	if(flag == 1) {
		obj.style.top = (event.clientY + getPageScroll(true) - document.body.clientTop + 5) + "px";
		obj.style.left = (event.clientX + getPageScroll(false) - document.body.clientLeft + 5) + "px";
		obj.style.display = 'block';
	} else {
		obj.style.display = 'none';
	}
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function ImageError(obj, sizeX, sizeY) {
	if(obj.media == "break") {
		obj.src = "/images/nophoto/nophoto_120x90.gif";
		return;
	}
	obj.alt = "no image";
	obj.src = "/images/nophoto/nophoto_" + sizeX + "x" + sizeY + ".gif";
	obj.media = "break";
}
function SetComma(numstr)
{
    numstr = String(numstr);
    var re0 = /^(-?\d+)(\d{3})($|\..*$)/;
    if (re0.test(numstr))
        return numstr.replace(re0,
            function(str,p1,p2,p3) {
                return SetComma(p1) + ',' + p2 + p3;
            }
        );
    else
        return numstr;
}
// 문자를 숫자로 정리한다.
function DelComma(numstr) {
    numstr = String(numstr);
    if (numstr == '') return '0';
    else if (numstr == '-') return '0';
    else if (numstr == '0-') return '-0';
    numstr = numstr.replace(/[^\d\.-]/g,'');
    numstr = String(numstr.match(/^-?\d*\.?\d*/));
    numstr = numstr.replace(/^(-?)(\d*)(.*)/,
        function(str,p1,p2,p3) {
            p2 = (p2>0) ? String(p2.match(/[1-9]\d*$/)) : '0';
        //    p2 = (p2>0) ? String(parseInt(p2,10)) : '0';
            return p1 + p2 + p3;
        }
    );
    return numstr;
}

function select_que_all() {
	var i, n;
	var l = document.getElementsByName('chk[]');

	if(document.getElementById("toggle_checked_status").checked) n = 1 ;
	else n = 2 ;

	for (i = 0; i < l.length; i++) {
		if (n == 1) l[i].checked = true;
		if (n == 2) l[i].checked = false;
	}
}
function chk_check() {
	var i;
	var l = document.getElementsByName('chk[]');
	var que = '';

	for (i = 0; i < l.length; i++) {
		if (l[i].checked == true && l[i].disabled == false) {
			que += l[i].value + ';';
		}
	}
	return que;
}
function chk_value2check(no) {
	var i;
	var l = document.getElementsByName('chk[]');
	var que = '';

	for (i = 0; i < l.length; i++) {
		if (l[i].value == no) {
			return l[i].value2;
		}
	}
	return false;
}


function dealerConsultPopup(dealerId, m_no) {
	if(!m_no) m_no = "";
	popWin("/car/dealerSMS.html?id=" + dealerId + "&m_no=" + m_no, "dealerConsultPopup", 650, 660, "no", "no");
}


function ProductViewReal(num)
{
	window.open("/products/detail.html?no=" + num, "productPop", "");
}

function ProductView(num)
{
	window.open("/products/big_view.html?no=" + num, "productPop", "width=800,height=640");
}

function AddInquiry(num) {
	location.href = "/products/inquiryProc.html?mode=add&pNo=" + num;
}

// 해당 큰 이미지를 새창으로 띄우고 프린트 명령어
function ImagePrint(fileName) {
	if(fileName) {
		var srcimg = new Image();
		srcimg.src = fileName;

		window.open('/common/imgpop.html?filename='+fileName,'imgpopup','width=' + srcimg.width + ',height=' + srcimg.height + ',toolbar=no,menubar=no,scrollbars=no,status=no,resizable=no');
	} else {
		alert("파일이 없습니다.");
	}
}

function popWin(url, name, w, h, res, scr) {
	var wd = window.open(url, name, "top=0,left=0,width="+w+",height="+h+",resizable="+res+",scrollbars="+scr);
	wd.focus();
}

function open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';
  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}

// 해당 큰 이미지를 새창으로 띄우고 프린트 명령어
function ImagePrintSize(fileName, x, y) {
	if(fileName) {
		var srcimg = new Image();
		srcimg.src = fileName;

		var aaa = window.open('/common/imgpop.html?filename='+fileName,'imgpopup','width=' + x + ',height=' + y + ',toolbar=no,menubar=no,scrollbars=no,status=no,resizable=no');
		aaa.focus();
	} else {
		alert("파일이 없습니다.");
	}
}

function GoExHome(str) {
	if(str != "") {
		window.open(str,"","");
	}
}

function GoExLink(str, str2) {
	if(str != "" && str2 != "") {
		window.open(str + str2,"","");
	} else {
		alert("링크가 올바르지 않아 직접 검색하셔야 합니다.");
	}
}
function autoGetCookie(name) { 
  var Found = false 
  var start, end 
  var i = 0 

  while(i <= document.cookie.length) { 
    start = i 
    end = start + name.length 

    if(document.cookie.substring(start, end) == name) { 
      Found = true 
      break 
    } 
    i++ 
  } 

  if(Found == true) { 
    start = end + 1 
    end = document.cookie.indexOf(";", start) 
      if(end < start) 
        end = document.cookie.length 
    return document.cookie.substring(start, end) 
  } 
  return "" 
} 

function objflash(FURL, wid, hei,fmode, falign) {
document.write("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+wid+"' height='"+hei+"'>");
document.write("<param name='movie' value='"+FURL+"'>");
document.write("<param name='quality' value='high'>");
document.write("<param name='wmode' value='"+fmode+"'>");
document.write("<param name='salign' value='"+falign+"'>");
document.write("<embed src='"+FURL+"' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+wid+"' height='"+hei+"'></embed>");
document.write("</object>");
}

function setPng24(obj)
{
    obj.width = obj.height = 1;
    obj.className = obj.className.replace(/\bpng24\b/i,'');
    obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
    obj.src = '';
    return '';
}



// Text 찾기
function searchQuick(obj, tObjStr) {
	var txt = obj.value;
	var tObj = document.getElementsByName(tObjStr)[0];
	if(txt == "") {
		tObj[0].selected = true;
		return;
	}
	for(var i = 1; i < tObj.length; i ++) {
		if(tObj[i].text.indexOf(txt) != -1) {
			tObj[i].selected = true;
			return;
		}
	}
	tObj[0].selected = true;
}

// Text 찾기
function searchQuickAdv(obj, tObjStr) {
	var pos = -1;
	var optText = null;
	var optValue = null;
	var txt = obj.value;
	var tObj = document.getElementsByName(tObjStr)[0];
	if(txt == "") {
		tObj[0].selected = true;
		return;
	}
	for(var i = 1; i < tObj.length; i ++) {
		if(tObj[i].text.indexOf(txt) != -1) {
			if(pos == -1) {
				// 초기방식 : 맞는 필드를 바로 선택
				//tObj[i].selected = true;
				//pos = i;
				// 수정방식 : 맞는 텍스트를 1번Opt 위치에 놓고 선택
				pos = 1;
				optText = tObj[i].text;
				optValue = tObj[i].value;
				tObj[i].text = tObj[pos].text;
				tObj[i].value = tObj[pos].value;
				tObj[pos].text = optText;
				tObj[pos].value = optValue;
				tObj[pos].selected = true;
			} else {
				pos ++;
				//alert(tObj[i].text);
				optText = tObj[i].text;
				optValue = tObj[i].value;
				tObj[i].text = tObj[pos].text;
				tObj[i].value = tObj[pos].value;
				tObj[pos].text = optText;
				tObj[pos].value = optValue;
			}
		}
	}
	if(pos == -1) tObj[0].selected = true;
}

function popupPartnerInput() {
	popWin("/service/popPartnerWrite.html", "popPartnerWrite", 650, 750, "no", "no");
}

function popPrintCoupon(no) {
	popWin('/service/couponPrint.html?no=' + no, 'popCouponPrint', 550, 600, 'no', 'no');
}

function popupOptionDictionary(no) {
	popWin("/car/carViewOptionDictionary.html?no=" + no, "optionDictionaryView", 670, 700, "no", "yes");
}

function GoTwitter(title,url) {
	Window_obj = window.open("http://twitter.com/home?status=" + encodeURIComponent(title) + " " + encodeURIComponent(url), "GoTwitter", "");
	Window_obj.focus();
}
function GoFacebook(title,url) {
	Window_obj = window.open("http://www.facebook.com/sharer.php?u=" + url + "&t=" + encodeURIComponent(title),"GoFacebook","");
	Window_obj.focus();
}
function GoMe2day(title,url) {
	title = "\""+title+"\":"+url;
	href="http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(title) + "&new_post[tags]=" + encodeURIComponent(title);
	Window_obj = window.open(href,"GoMe2day","");
	Window_obj.focus();
}

function BorderAnimate(id, direct, size, normal, over) {
	var obj = document.getElementById(id);
	if(direct == "on") {
		obj.style.borderColor = over;
		if(size > 1) {
			obj.style.borderWidth = size + 'px';
//			GoBorderAnimate(id, size, 1);
//			for(var i = 1; i <= size; i ++) {
//				obj.style.margin = (size - i) + 'px';
//				obj.style.borderWidth = i + 'px';
//			}
		}
	} else {
		obj.style.borderColor = normal;
	}
}

function GoBorderAnimate(id, size, i) {
	var obj = document.getElementById(id);
	if(i <= size) {
		obj.style.margin = (size - i) + 'px';
		obj.style.borderWidth = i + 'px';
		i ++;
		setTimeout ("GoBorderAnimate('" + id + "', " + size + ", " + i + ")", 10);
	}
}




function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}


function allview(){
	alllayer.style.display='';
}
function allhide(){
	alllayer.style.display='none';
}



function guidePopup() {
	var pop = window.open('/guide.php', '매매가이드', 'top=100px, left=100px, height=640px, width=710px');
	pop.focus();
}

function hitViewPopup(no) {
	var pop = window.open('/mypage/hitView.html?m_no=' + no, 'hitView', 'top=0px, left=0px, height=450px, width=420px');
	pop.focus();
}

function na_open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';
  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}

function ktswf_sp(src) {

	hstr = "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" width=\"100%\" height=\"100%\" id=\"main\" align=\"left\"><param name=\"allowScriptAccess\" value=\"sameDomain\" /><param name=\"movie\" value=\""+src+"\" /><param name=\"quality\" value=\"high\" /><param name=\"scale\" value=\"noscale\" /><param name=\"salign\" value=\"lt\" /><param name=\"wmode\" value=\"transparent\" /><param name=\"bgcolor\" value=\"#ffffff\" /><embed src=\""+src+"\" quality=\"high\" scale=\"noscale\" salign=\"lt\" wmode=\"transparent\" bgcolor=\"#ffffff\" width=\"100%\" height=\"100%\" name=\"main\" align=\"left\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" /></object>";
	document.write(hstr);
}


function na_preload_img()
{ 
  var img_list = na_preload_img.arguments;
  if (document.preloadlist == null) 
    document.preloadlist = new Array();
  var top = document.preloadlist.length;
  for (var i=0; i < img_list.length; i++) {
    document.preloadlist[top+i]     = new Image;
    document.preloadlist[top+i].src = img_list[i+1];
  } 
}

function na_change_img_src(name, nsdoc, rpath, preload)
{ 
  var img = eval((navigator.appName.indexOf('Netscape', 0) != -1) ? nsdoc+'.'+name : 'document.all.'+name);
  if (name == '')
    return;
  if (img) {
    img.altsrc = img.src;
    img.src    = rpath;
  } 
}



function sise(pst)
{
		if(pst == 0)
		{
				board01.style.display = '';
				board02.style.display = 'none';
			}
		else if(pst == 1)
		{
				board01.style.display = 'none';
				board02.style.display = '';
		}
}

function setPng24(obj) {
obj.width=obj.height=1;
obj.className=obj.className.replace(/\bpng24\b/i,'');
obj.style.filter =
"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
obj.src=''; 
return '';
}






function initMoving(target, position, topLimit, btmLimit) {
	if (!target)
		return false;

	var obj = target;
	obj.initTop = position;
	obj.topLimit = topLimit;
	obj.bottomLimit = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - btmLimit - obj.offsetHeight;

	obj.style.position = "absolute";
	obj.top = obj.initTop;
	// obj.left = obj.initLeft;

	if (typeof(window.pageYOffset) == "number") {	//WebKit
		obj.getTop = function() {
			return window.pageYOffset;
		}
	} else if (typeof(document.documentElement.scrollTop) == "number") {
		obj.getTop = function() {
			return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
		}
	} else {
		obj.getTop = function() {
			return 0;
		}
	}

	if (self.innerHeight) {	//WebKit
		obj.getHeight = function() {
			return self.innerHeight;
		}
	} else if(document.documentElement.clientHeight) {
		obj.getHeight = function() {
			return document.documentElement.clientHeight;
		}
	} else {
		obj.getHeight = function() {
			return 500;
		}
	}

	obj.move = setInterval(function() {
		if (obj.initTop > 0) {
			pos = obj.getTop() + obj.initTop;
		} else {
			pos = obj.getTop() + obj.getHeight() + obj.initTop;
			//pos = obj.getTop() + obj.getHeight() / 2 - 15;
		}

		if (pos > obj.bottomLimit)
			pos = obj.bottomLimit;
		if (pos < obj.topLimit)
			pos = obj.topLimit;

		interval = obj.top - pos;
		obj.top = obj.top - interval / 3;
		obj.style.top = obj.top + "px";
	}, 50)
}
function _errorFunc() {
	alert("네트워크 상태가 원할하지 않습니다. 잠시 뒤 다시 검색하세요.");
}
