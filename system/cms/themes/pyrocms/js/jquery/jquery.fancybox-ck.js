/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 *
 * Version: 1.3.1 (05/03/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */(function(e){var t,n,r,i,s,o,u,a,f,l=0,c={},h=[],p=0,d={},v=[],m=null,g=new Image,y=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,b=/[^\.]\.(swf)\s*$/i,w,E=1,S,x,T=!1,N=20,C=e.extend(e("<div/>")[0],{prop:0}),k=0,L=!e.support.opacity&&!window.XMLHttpRequest,A=function(){n.hide();g.onerror=g.onload=null;m&&m.abort();t.empty()},O=function(){e.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>',{scrolling:"no",padding:20,transitionIn:"none",transitionOut:"none"})},M=function(){return[e(window).width(),e(window).height(),e(document).scrollLeft(),e(document).scrollTop()]},_=function(){var e=M(),t={},n=d.margin,r=d.autoScale,i=(N+n)*2,s=(N+n)*2,o=d.padding*2,u;if(d.width.toString().indexOf("%")>-1){t.width=e[0]*parseFloat(d.width)/100-N*2;r=!1}else t.width=d.width+o;if(d.height.toString().indexOf("%")>-1){t.height=e[1]*parseFloat(d.height)/100-N*2;r=!1}else t.height=d.height+o;if(r&&(t.width>e[0]-i||t.height>e[1]-s))if(c.type=="image"||c.type=="swf"){i+=o;s+=o;u=Math.min(Math.min(e[0]-i,d.width)/d.width,Math.min(e[1]-s,d.height)/d.height);t.width=Math.round(u*(t.width-o))+o;t.height=Math.round(u*(t.height-o))+o}else{t.width=Math.min(t.width,e[0]-i);t.height=Math.min(t.height,e[1]-s)}t.top=e[3]+(e[1]-(t.height+N*2))*.5;t.left=e[2]+(e[0]-(t.width+N*2))*.5;if(d.autoScale===!1){t.top=Math.max(e[3]+n,t.top);t.left=Math.max(e[2]+n,t.left)}return t},D=function(e){if(e&&e.length)switch(d.titlePosition){case"inside":return e;case"over":return'<span id="fancybox-title-over">'+e+"</span>";default:return'<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">'+e+'</span><span id="fancybox-title-right"></span></span>'}return!1},P=function(){var t=d.title,n=x.width-d.padding*2,r="fancybox-title-"+d.titlePosition;e("#fancybox-title").remove();k=0;if(d.titleShow===!1)return;t=e.isFunction(d.titleFormat)?d.titleFormat(t,v,p,d):D(t);if(!t||t==="")return;e('<div id="fancybox-title" class="'+r+'" />').css({width:n,paddingLeft:d.padding,paddingRight:d.padding}).html(t).appendTo("body");switch(d.titlePosition){case"inside":k=e("#fancybox-title").outerHeight(!0)-d.padding;x.height+=k;break;case"over":e("#fancybox-title").css("bottom",d.padding);break;default:e("#fancybox-title").css("bottom",e("#fancybox-title").outerHeight(!0)*-1)}e("#fancybox-title").appendTo(s).hide()},H=function(){e(document).unbind("keydown.fb").bind("keydown.fb",function(t){if(t.keyCode==27&&d.enableEscapeButton){t.preventDefault();e.fancybox.close()}else if(t.keyCode==37){t.preventDefault();e.fancybox.prev()}else if(t.keyCode==39){t.preventDefault();e.fancybox.next()}});if(e.fn.mousewheel){i.unbind("mousewheel.fb");v.length>1&&i.bind("mousewheel.fb",function(t,n){t.preventDefault();if(T||n===0)return;n>0?e.fancybox.prev():e.fancybox.next()})}if(!d.showNavArrows)return;(d.cyclic&&v.length>1||p!==0)&&a.show();(d.cyclic&&v.length>1||p!=v.length-1)&&f.show()},B=function(){var e,t;if(v.length-1>p){e=v[p+1].href;if(typeof e!="undefined"&&e.match(y)){t=new Image;t.src=e}}if(p>0){e=v[p-1].href;if(typeof e!="undefined"&&e.match(y)){t=new Image;t.src=e}}},j=function(){o.css("overflow",d.scrolling=="auto"?d.type=="image"||d.type=="iframe"||d.type=="swf"?"hidden":"auto":d.scrolling=="yes"?"auto":"visible");if(!e.support.opacity){o.get(0).style.removeAttribute("filter");i.get(0).style.removeAttribute("filter")}e("#fancybox-title").show();d.hideOnContentClick&&o.one("click",e.fancybox.close);d.hideOnOverlayClick&&r.one("click",e.fancybox.close);d.showCloseButton&&u.show();H();e(window).bind("resize.fb",e.fancybox.center);d.centerOnScroll?e(window).bind("scroll.fb",e.fancybox.center):e(window).unbind("scroll.fb");e.isFunction(d.onComplete)&&d.onComplete(v,p,d);T=!1;B()},F=function(e){var t=Math.round(S.width+(x.width-S.width)*e),n=Math.round(S.height+(x.height-S.height)*e),r=Math.round(S.top+(x.top-S.top)*e),s=Math.round(S.left+(x.left-S.left)*e);i.css({width:t+"px",height:n+"px",top:r+"px",left:s+"px"});t=Math.max(t-d.padding*2,0);n=Math.max(n-(d.padding*2+k*e),0);o.css({width:t+"px",height:n+"px"});typeof x.opacity!="undefined"&&i.css("opacity",e<.5?.5:e)},I=function(e){var t=e.offset();t.top+=parseFloat(e.css("paddingTop"))||0;t.left+=parseFloat(e.css("paddingLeft"))||0;t.top+=parseFloat(e.css("border-top-width"))||0;t.left+=parseFloat(e.css("border-left-width"))||0;t.width=e.width();t.height=e.height();return t},q=function(){var t=c.orig?e(c.orig):!1,n={},r,i;if(t&&t.length){r=I(t);n={width:r.width+d.padding*2,height:r.height+d.padding*2,top:r.top-d.padding-N,left:r.left-d.padding-N}}else{i=M();n={width:1,height:1,top:i[3]+i[1]*.5,left:i[2]+i[0]*.5}}return n},R=function(){n.hide();if(i.is(":visible")&&e.isFunction(d.onCleanup)&&d.onCleanup(v,p,d)===!1){e.event.trigger("fancybox-cancel");T=!1;return}v=h;p=l;d=c;o.get(0).scrollTop=0;o.get(0).scrollLeft=0;if(d.overlayShow){L&&e("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});r.css({"background-color":d.overlayColor,opacity:d.overlayOpacity}).unbind().show()}x=_();P();if(i.is(":visible")){e(u.add(a).add(f)).hide();var s=i.position(),m;S={top:s.top,left:s.left,width:i.width(),height:i.height()};m=S.width==x.width&&S.height==x.height;o.fadeOut(d.changeFade,function(){var n=function(){o.html(t.contents()).fadeIn(d.changeFade,j)};e.event.trigger("fancybox-change");o.empty().css("overflow","hidden");if(m){o.css({top:d.padding,left:d.padding,width:Math.max(x.width-d.padding*2,1),height:Math.max(x.height-d.padding*2-k,1)});n()}else{o.css({top:d.padding,left:d.padding,width:Math.max(S.width-d.padding*2,1),height:Math.max(S.height-d.padding*2,1)});C.prop=0;e(C).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:F,complete:n})}});return}i.css("opacity",1);if(d.transitionIn=="elastic"){S=q();o.css({top:d.padding,left:d.padding,width:Math.max(S.width-d.padding*2,1),height:Math.max(S.height-d.padding*2,1)}).html(t.contents());i.css(S).show();d.opacity&&(x.opacity=0);C.prop=0;e(C).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:F,complete:j})}else{o.css({top:d.padding,left:d.padding,width:Math.max(x.width-d.padding*2,1),height:Math.max(x.height-d.padding*2-k,1)}).html(t.contents());i.css(x).fadeIn(d.transitionIn=="none"?0:d.speedIn,j)}},U=function(){t.width(c.width);t.height(c.height);c.width=="auto"&&(c.width=t.width());c.height=="auto"&&(c.height=t.height());R()},z=function(){T=!0;c.width=g.width;c.height=g.height;e("<img />").attr({id:"fancybox-img",src:g.src,alt:c.title}).appendTo(t);R()},W=function(){A();var n=h[l],r,i,s,u,a,f,p;c=e.extend({},e.fn.fancybox.defaults,typeof e(n).data("fancybox")=="undefined"?c:e(n).data("fancybox"));s=n.title||e(n).title||c.title||"";n.nodeName&&!c.orig&&(c.orig=e(n).children("img:first").length?e(n).children("img:first"):e(n));s===""&&c.orig&&(s=c.orig.attr("alt"));n.nodeName&&/^(?:javascript|#)/i.test(n.href)?r=c.href||null:r=c.href||n.href||null;if(c.type){i=c.type;r||(r=c.content)}else if(c.content)i="html";else if(r)if(r.match(y))i="image";else if(r.match(b))i="swf";else if(e(n).hasClass("iframe"))i="iframe";else if(r.match(/#/)){n=r.substr(r.indexOf("#"));i=e(n).length>0?"inline":"ajax"}else i="ajax";else i="inline";c.type=i;c.href=r;c.title=s;if(c.autoDimensions&&c.type!=="iframe"&&c.type!=="swf"){c.width="auto";c.height="auto"}if(c.modal){c.overlayShow=!0;c.hideOnOverlayClick=!1;c.hideOnContentClick=!1;c.enableEscapeButton=!1;c.showCloseButton=!1}if(e.isFunction(c.onStart)&&c.onStart(h,l,c)===!1){T=!1;return}t.css("padding",N+c.padding+c.margin);e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){e(this).replaceWith(o.children())});switch(i){case"html":t.html(c.content);U();break;case"inline":e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(n)).bind("fancybox-cleanup",function(){e(this).replaceWith(o.children())}).bind("fancybox-cancel",function(){e(this).replaceWith(t.children())});e(n).appendTo(t);U();break;case"image":T=!1;e.fancybox.showActivity();g=new Image;g.onerror=function(){O()};g.onload=function(){g.onerror=null;g.onload=null;z()};g.src=r;break;case"swf":u='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+c.width+'" height="'+c.height+'"><param name="movie" value="'+r+'"></param>';a="";e.each(c.swf,function(e,t){u+='<param name="'+e+'" value="'+t+'"></param>';a+=" "+e+'="'+t+'"'});u+='<embed src="'+r+'" type="application/x-shockwave-flash" width="'+c.width+'" height="'+c.height+'"'+a+"></embed></object>";t.html(u);U();break;case"ajax":f=r.split("#",2);p=c.ajax.data||{};if(f.length>1){r=f[0];typeof p=="string"?p+="&selector="+f[1]:p.selector=f[1]}T=!1;e.fancybox.showActivity();m=e.ajax(e.extend(c.ajax,{url:r,data:p,error:O,success:function(e,n,r){if(m.status==200){t.html(e);U()}}}));break;case"iframe":e('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" scrolling="'+c.scrolling+'" src="'+c.href+'"></iframe>').appendTo(t);R()}},X=function(){if(!n.is(":visible")){clearInterval(w);return}e("div",n).css("top",E*-40+"px");E=(E+1)%12},V=function(){if(e("#fancybox-wrap").length)return;e("body").append(t=e('<div id="fancybox-tmp"></div>'),n=e('<div id="fancybox-loading"><div></div></div>'),r=e('<div id="fancybox-overlay"></div>'),i=e('<div id="fancybox-wrap"></div>'));if(!e.support.opacity){i.addClass("fancybox-ie");n.addClass("fancybox-ie")}s=e('<div id="fancybox-outer"></div>').append('<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>').appendTo(i);s.append(o=e('<div id="fancybox-inner"></div>'),u=e('<a id="fancybox-close"></a>'),a=e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),f=e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));u.click(e.fancybox.close);n.click(e.fancybox.cancel);a.click(function(t){t.preventDefault();e.fancybox.prev()});f.click(function(t){t.preventDefault();e.fancybox.next()});if(L){r.get(0).style.setExpression("height","document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");n.get(0).style.setExpression("top","(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");s.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>')}};e.fn.fancybox=function(t){e(this).data("fancybox",e.extend({},t,e.metadata?e(this).metadata():{})).unbind("click.fb").bind("click.fb",function(t){t.preventDefault();if(T)return;T=!0;e(this).blur();h=[];l=0;var n=e(this).attr("rel")||"";if(!n||n==""||n==="nofollow")h.push(this);else{h=e("a[rel="+n+"], area[rel="+n+"]");l=h.index(this)}W();return!1});return this};e.fancybox=function(t){if(T)return;T=!0;var n=typeof arguments[1]!="undefined"?arguments[1]:{};h=[];l=n.index||0;if(e.isArray(t)){for(var r=0,i=t.length;r<i;r++)typeof t[r]=="object"?e(t[r]).data("fancybox",e.extend({},n,t[r])):t[r]=e({}).data("fancybox",e.extend({content:t[r]},n));h=jQuery.merge(h,t)}else{typeof t=="object"?e(t).data("fancybox",e.extend({},n,t)):t=e({}).data("fancybox",e.extend({content:t},n));h.push(t)}if(l>h.length||l<0)l=0;W()};e.fancybox.showActivity=function(){clearInterval(w);n.show();w=setInterval(X,66)};e.fancybox.hideActivity=function(){n.hide()};e.fancybox.next=function(){return e.fancybox.pos(p+1)};e.fancybox.prev=function(){return e.fancybox.pos(p-1)};e.fancybox.pos=function(e){if(T)return;e=parseInt(e,10);if(e>-1&&v.length>e){l=e;W()}if(d.cyclic&&v.length>1&&e<0){l=v.length-1;W()}if(d.cyclic&&v.length>1&&e>=v.length){l=0;W()}return};e.fancybox.cancel=function(){if(T)return;T=!0;e.event.trigger("fancybox-cancel");A();c&&e.isFunction(c.onCancel)&&c.onCancel(h,l,c);T=!1};e.fancybox.close=function(){function t(){r.fadeOut("fast");i.hide();e.event.trigger("fancybox-cleanup");o.empty();e.isFunction(d.onClosed)&&d.onClosed(v,p,d);v=c=[];p=l=0;d=c={};T=!1}if(T||i.is(":hidden"))return;T=!0;if(d&&e.isFunction(d.onCleanup)&&d.onCleanup(v,p,d)===!1){T=!1;return}A();e(u.add(a).add(f)).hide();e("#fancybox-title").remove();i.add(o).add(r).unbind();e(window).unbind("resize.fb scroll.fb");e(document).unbind("keydown.fb");o.css("overflow","hidden");if(d.transitionOut=="elastic"){S=q();var n=i.position();x={top:n.top,left:n.left,width:i.width(),height:i.height()};d.opacity&&(x.opacity=1);C.prop=1;e(C).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:F,complete:t})}else i.fadeOut(d.transitionOut=="none"?0:d.speedOut,t)};e.fancybox.resize=function(){var t,n;if(T||i.is(":hidden"))return;T=!0;t=o.wrapInner("<div style='overflow:auto'></div>").children();n=t.height();i.css({height:n+d.padding*2+k});o.css({height:n});t.replaceWith(t.children());e.fancybox.center()};e.fancybox.center=function(){T=!0;var e=M(),t=d.margin,n={};n.top=e[3]+(e[1]-(i.height()-k+N*2))*.5;n.left=e[2]+(e[0]-(i.width()+N*2))*.5;n.top=Math.max(e[3]+t,n.top);n.left=Math.max(e[2]+t,n.left);i.css(n);T=!1};e.fn.fancybox.defaults={padding:10,margin:20,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.3,overlayColor:"#666",titleShow:!0,titlePosition:"outside",titleFormat:null,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,onStart:null,onCancel:null,onComplete:null,onCleanup:null,onClosed:null};e(document).ready(function(){V()})})(jQuery);