var NavHidden = false;
var DelayedToc = "";

function printHMcontent()
{ 
  var a = document.getElementById("hmcontent");
  var b = a.contentWindow;        
  b.focus();
  b.print();
}

function ShowHideNav() {
var a = $("div#hmnavbox");
var b = parseInt(a.css("width"));
if (NavHidden==true){
	a.show();
	$("div#hmcontentbox").css("left","".concat((b+15).toString(),"px"));
	$("div#navhandle").css("left","".concat((b+8).toString(),"px"));
	$("img#navshowhide").attr({alt:"Hide Table of Contents",title:"Hide Table of Contents",src:"nav_close.png"})
	NavHidden = false;
} else {
	a.hide();
	$("div#hmcontentbox").css("left","10px");
	$("div#navhandle").css("left","10px");
	$("img#navshowhide").attr({alt:"Show Table of Contents",title:"Show Table of Contents",src:"nav_open.png"})
	NavHidden = true;
}}

function ResetNavHandle() {
var a = parseInt($("div#hmnavbox").css("width"));
if (NavHidden==false) {
	$("div#navhandle").css("left","".concat((a+7).toString(),"px"));
}}

  /* copy to modify drag with ResetNavHandle() */ 
     function hmCreateVSplitter(leftdiv, rightdiv) {
	var splitWidth = ($(rightdiv).offset().left - ($(leftdiv).offset().left+$(leftdiv).outerWidth()));
	$('body').append('<div id="hmsplitter" style="border:none;margin:0;padding:0;position:absolute;cursor:col-resize;background-color:transparent;overflow:hidden;'+'height:'+$(leftdiv).outerHeight()+'px;top:'+$(leftdiv).offset().top+'px;left:'+($(leftdiv).offset().left+$(leftdiv).outerWidth())+'px;width:'+splitWidth+'px">&nbsp;</div>');
	var oldX;
	var	navWidth;
	var	minWidth;
	var	oldLeft;
	var	oldWidth;
	var oldSplitL;
	var split = $('#hmsplitter');

	$(window).resize(function() {  /* resize splitter when window changes */
	  split.css({'height': $(leftdiv).outerHeight()+'px', 'left': ($(leftdiv).offset().left+$(leftdiv).outerWidth())+'px'}); 
	}); 

	split.bind('mousedown', startDrag); 
	
	function startDrag(e) {
		oldX = (!document.all) ? e.clientX : event.clientX;
		navWidth = parseInt($(leftdiv).css('width'),10);
		minWidth = parseInt($(leftdiv).css('min-width'));
		oldLeft	 = $(rightdiv).offset().left;
		oldWidth = $(rightdiv).outerWidth();
		oldSplitL = split.offset().left;
		
		var bg = $('<div id="hmcurtain" style="border:none;padding:0;margin:0;position:absolute;cursor:col-resize;width:100%;height:100%;background-color:transparent"></div>').appendTo('body');
		bg.bind('mousemove', performDrag); 
		bg.bind('mouseup', endDrag);
		split.bind('mousemove', performDrag); 
		split.bind('mouseup', endDrag);
		
		function endDrag() {
		  bg.unbind('mousemove').unbind('mouseup').remove();
		  split.unbind('mousemove').unbind('mouseup');
		  /*mod*/
		  ResetNavHandle();
		  /*endmod*/
		}
	}
	
	function performDrag(e) {
		//deselect:
		if (window.getSelection) window.getSelection().removeAllRanges();
		else if (document.selection) document.selection.empty();

		var moveX = (!document.all) ? e.clientX - oldX : event.clientX - oldX;
		var newNavW = navWidth + moveX < minWidth ? minWidth : navWidth + moveX;
		$(leftdiv).css('width', (newNavW) + 'px');
		//split.css('left', ($(leftdiv).offset().left+newNavW) + 'px');
		split.css('left', (oldSplitL + newNavW - navWidth) + 'px');

		$(rightdiv).css('left', (oldLeft + newNavW - navWidth) + 'px');
		if (!hmSupportsAbspos()) $(rightdiv).css('width', (oldWidth - newNavW + navWidth) + 'px');
		/*mod*/
		ResetNavHandle(); 
		/*endmod*/
	}
}
