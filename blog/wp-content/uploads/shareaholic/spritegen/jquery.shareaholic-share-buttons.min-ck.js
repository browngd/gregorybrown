/*
 Copyright (c) Shareaholic Inc (www.shareaholic.com).  All rights reserved.
*/"undefined"==typeof SHR4P&&(SHR4P={});"undefined"==typeof SHR4P.TB&&(SHR4P.TB={});SHR4P.TB.base_url="undefined"!=typeof SHR4P.debug_enabled?"//www.spreadaholic.com/":"//www.shareaholic.com/";SHR4P.TB.shr_link=SHR4P.TB.base_url+"api/share/";SHR4P.TB.shr_css=SHR4P.TB.base_url+"media/css/shareaholic-share-button.css";SHR4P.TB.shr_twitter_image=SHR4P.TB.base_url+"media/images/styles/tb/twitter.png";SHR4P.TB.shr_image_arrow_up=SHR4P.TB.base_url+"media/images/styles/tb/arrow_up.png";SHR4P.TB.shr_image_arrow_down=SHR4P.TB.base_url+"media/images/styles/tb/arrow_down.png";SHR4P.TB.shr_apiKey="e3c665c2eb6785741cea4515633f1d86b";SHR4P.TB.shr_twitter_template="${title} - ${short_link} via @Shareaholic";"undefined"!=typeof SHRSB_Globals&&"undefined"!=typeof SHRSB_Globals.src&&(SHR4P.TB.shr_css=SHRSB_Globals.src+"/shareaholic-share-button.css",SHR4P.TB.shr_image=SHRSB_Globals.src+"/shareaholic-publishers-mini.png",SHR4P.TB.shr_image_arrow_up=SHRSB_Globals.src+"/arrow_up.png",SHR4P.TB.shr_image_arrow_down=SHRSB_Globals.src+"/arrow_down.png");"undefined"!=typeof SHRTB_Settings&&"undefined"!=typeof SHRTB_Settings.apikey&&(SHR4P.TB.shr_apiKey=SHRTB_Settings.apikey);"undefined"!=typeof SHRTB_Settings&&"undefined"!=typeof SHRTB_Settings.shr_twitter_template&&(SHR4P.TB.shr_twitter_template=SHRTB_Settings.shr_twitter_template);"undefined"!=typeof SHRSB_Globals&&"undefined"!=typeof SHRSB_Globals.twitter_template&&(SHR4P.TB.shr_twitter_template=SHRSB_Globals.twitter_template);SHR4P.debug=function(e){SHR4P.debug_enabled&&(typeof console!="undefined"&&console?console.log(e):alert(e))};SHR4P.TB.ready=!1;SHR4P.TB.init=!1;var SHR4P_init=function(){SHR4P.debug("SHR4P_init called");if(SHR4P.TB.init)SHR4P.debug("SHR4P_init returning because already loaded");else{SHR4P.TB.init=!0;SHR4P.TB.jQuery=typeof sb_dont_noConflict!="undefined"&&sb_dont_noConflict?jQuery:jQuery.noConflict(!0);var e=SHR4P.TB.jQuery;SHR4P.TB.renderShareButtons=function(){SHR4P.debug("SHR4P.TB.renderShareButtons called");if(typeof SHRTB_Settings=="undefined"||!SHRTB_Settings)window.SHRTB_Settings={};e(".shr-toolbox").each(function(){var t=e(this),n=t.attr("data-shr_form_factor")||t.attr("shr_form_factor");t.addClass(n+"-head");t.attr("data-shr_link")||t.attr("shr_link");t.attr("data-shr_title")||t.attr("shr_title");t.attr("data-shr_short_link")||t.attr("shr_short_link");t.children("#shareaholic-services").wrapInner("<ul></ul>");SHR4P.debug("SHR4P.TB.layoutFormFactor called");if(typeof n!="undefined"&&!!n&&typeof t!="undefined"&&!!t&&n=="shareaholic-top-bar"&&!r){var r=!0,n=SHRTB_Settings.topBarBgColor,i=SHRTB_Settings.topBarBorderColor,r=!1,s=e("document").height()/4||120,o=!1;e("<style type='text/css'>#shareToolBar,#showHideToolBar,#shareToolBarAddv,#shareToolBarHeader{background-color: "+(n||"#343434")+" !important;} .shareToolBarShowButton{ background-image: url("+SHR4P.TB.shr_image_arrow_down+") !important;}.shareToolBarHideButton{background-image: url("+SHR4P.TB.shr_image_arrow_up+") !important;}#shareaholic-bar{border-bottom-color:"+(i||"#343434")+"} </style>").appendTo("head");var r=e("<div id='shareToolBarHeader'></div>"),u=e("<div id='shareToolBarContainer'></div>"),n=e("<div id='shareToolBarFooter'></div>"),i=e("<div id='shareaholic-bar' class='shareToolBarShadow' style='display:none'></div>"),f=e("<div id='shareToolBar'></div>");t.wrap(f);f=t.parents("#shareToolBar");f.wrap(u);u=f.parents("#shareToolBarContainer");u.wrap(i);i=u.parents("#shareaholic-bar");r.prependTo(i);n.appendTo(i);t=t.parents("#shareaholic-bar");SHR4P.debug(t);e('<div id="showHideToolBar" title="Click to hide"><div class="shareToolBarButton shareToolBarHideButton"></div></div>').appendTo(u);e('<div id="shareToolBarAddv"></div>').appendTo(u);var l=e("#shareaholic-bar"),c=e("#showHideToolBar");c.click(function(){o=!o;e("#showHideToolBar > div").toggleClass("shareToolBarShowButton shareToolBarHideButton");if(o){c.hide();e("#shareaholic-bar").css("border-bottom-width","0px").removeClass("shareToolBarShadow")}else c.css("margin-left","-100%");e("#shareToolBar, #shareToolBarAddv").slideToggle("slow",function(){if(!o){e("#shareaholic-bar").css("border-bottom-width","1px").addClass("shareToolBarShadow");e("#shareToolBarHeader").animate({height:"+=5"},{duration:100}).animate({height:"-=5"},{duration:100});c.attr("title","Click to hide")}var t=e("#showHideToolBar").css("margin-left");if(o&&t!="0px"){c.css("margin-left","0");c.fadeIn("slow");c.attr("title","Click to display")}})});e(window).scroll(function(){var t=e(window).scrollTop(),n=l.css("display")=="none";SHR4P.debug("ScrollTop "+t+" ScrollOffset: "+s);if(t>s)n&&e("#shareaholic-bar,#shareToolBar, #shareToolBarAddv").slideDown("slow",function(){e("#shareToolBarHeader").animate({height:"+=5"},{duration:100}).animate({height:"-=5"},{duration:100});e("#shareaholic-bar").css("border-bottom-width","1px").addClass("shareToolBarShadow");c.fadeIn("slow");c.attr("title","Click to hide")});else if(!o){c.hide();e("#shareaholic-bar").css("border-bottom-width","0px").removeClass("shareToolBarShadow");e("#shareaholic-bar,#shareToolBar, #shareToolBarAddv, #showHideToolBar").slideUp("slow")}})}})};SHR4P.TB.ready=!0;typeof SHR4P.TB.onready!="undefined"&&SHR4P.TB.onready()}};SHR4P.TB.load=function(){setTimeout("SHR4P.dough()",0);var e=document.createElement("link");e.rel="stylesheet";e.type="text/css";e.href=SHR4P.TB.shr_css;document.getElementsByTagName("head")[0].appendChild(e);if(typeof jQuery!="undefined"&&jQuery){e=jQuery().jquery;if(SHRSB_Globals.minJQueryVersion<=e){window.sb_dont_noConflict=!0;SHR4P_init();return}}SHR4P.debug("loading jquery");e=document.getElementsByTagName("head")[0];if(typeof e!="undefined"){var t=document.createElement("script");t.src=SHR4P.debug_enabled?"//ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.js":"//ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js";t.type="text/javascript";e.appendChild(t);t.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){SHR4P.debug("jQuery loaded with onreadystatechange, init'ing");SHR4P_init()}};t.onload=SHR4P_init}};SHR4P.TB.onready=function(){/(loaded|complete)/.test(document.readyState)?SHR4P.TB.readyHandler():SHR4P.TB.jQuery(document).ready(function(){SHR4P.TB.readyHandler()})};SHR4P.TB.readyHandler=function(){SHR4P.TB.renderLikeButtons();SHR4P.TB.renderShareButtons()};SHR4P.TB.utils={showServiceLet:function(e,t){if(typeof t!="undefined"&&t){if(typeof SHR_config=="undefined"||!SHR_config)window.SHR_config={};window.__shr_service=t;window.__shr_log="true";window.__shr_center=!0;SHR_config.shortener=e.shortener?e.shortener:"google";SHR_config.shortener_key=e.shortener_key?e.shortener_key:"";SHR_config.apikey=e.apikey?e.apikey:SHR4P.TB.shr_apiKey;SHR_config.twitter_template=e.twitter_template?e.twitter_template:"${title} - ${short_link}";SHR_config.link=e.link?e.link:document.location.href;SHR_config.title=e.title?e.title:e.link?"":document.title;SHR_config.short_link=e.short_link?e.short_link:"";if(window.SHR&&window.SHR.Servicelet)SHR.Servicelet.show();else{var n=document,r=n.createElement("script");r.setAttribute("language","javascript");r.id="shr-servicelet";r.setAttribute("src",(e.share_src?e.share_src:"http://www.shareaholic.com")+"/media/js/servicelet.min.js");n.body.appendChild(r)}}},isMobileBrowser:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},getFbShrCnt:function(e,t){if(typeof SHRSB_Globals!="undefined"&&SHRSB_Globals.perfoption=="1"){e="http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&format=json&urls="+encodeURIComponent(e);SHR4P.TB.jQuery.getJSON(e+"&callback=?",function(e){var n=0;if(e.length>0){n=e[0].total_count;n!=0&&n>1e3&&(n=Math.floor(n/1e3)+"K")}t({count:n})})}},getTwitShrCnt:function(e,t){if(typeof SHRSB_Globals!="undefined"&&SHRSB_Globals.perfoption=="1"){e="https://cdn.api.twitter.com/1/urls/count.json?url="+encodeURIComponent(e);SHR4P.TB.jQuery.getJSON(e+"&callback=?",function(e){e=e.count;e!=0&&e>1e3&&(e=Math.floor(e/1e3)+"K");t({count:e})})}}};SHR4P.TB.renderLikeButtons=function(){SHR4P.TB.jQuery(".shareaholic-fblike,.shareaholic-fbsend",".shareaholic-like-buttonset").length>0&&setTimeout("SHR4P.TB.fbUtil.addFBConnect()",0);SHR4P.TB.jQuery(".shareaholic-googleplusone",".shareaholic-like-buttonset").length>0&&setTimeout("SHR4P.TB.googPlusOneUtil.addGoogScript()",0);SHR4P.TB.jQuery(".shareaholic-tweetbutton",".shareaholic-like-buttonset").length>0&&setTimeout("SHR4P.TB.twitterUtil.addTwitterScript()",0)};SHR4P.TB.googPlusOneUtil={addGoogScript:function(){if(SHR4P.TB.jQuery("#googplusonescript").length==0){var e=document.createElement("script");e.async=!0;e.src="https://apis.google.com/js/plusone.js";e.id="googplusonescript";e.text='{"parsetags": "explicit"}';document.getElementsByTagName("head")[0].appendChild(e);e.onreadystatechange=function(){(this.readyState=="complete"||this.readyState=="loaded")&&SHR4P.TB.googPlusOneUtil.renderPlusOnes()};e.onload=SHR4P.TB.googPlusOneUtil.renderPlusOnes}},renderPlusOnes:function(){SHR4P.TB.jQuery(".shareaholic-googleplusone",".shareaholic-like-buttonset").each(function(){var e=SHR4P.TB.jQuery(this);if((e.attr("data-shr_status")||false)!="1"){var t=e.attr("data-shr_href")||e.attr("shr_href"),n=e.attr("data-shr_title")||e.attr("shr_title"),r=e.attr("data-shr_size")||e.attr("shr_size"),i=e.attr("data-shr_count")||e.attr("shr_count"),s=e.attr("data-shr_annotation"),o=e.attr("data-shr_width"),u=e.attr("data-shr_expandto"),a=e.attr("data-shr_onstartinteraction"),f=e.attr("data-shr_onendinteraction");if(typeof i=="undefined"||!i)i="true";if(typeof t!="undefined"&&!!t||typeof n!="undefined"&&!!n){if(typeof t=="undefined"||!t)t=encodeURIComponent(document.location.href);if(typeof n=="undefined"||!n)n=""}else{t=encodeURIComponent(document.location.href);n=document.title}if(typeof r=="undefined"||!r)r="standard";if(typeof s=="undefined"||!s){s="bubble";s=typeof i!="undefined"&&i&&i!=="false"?"bubble":"none"}if(typeof o=="undefined"||!o)o="450px";if(typeof u=="undefined"||!u)u="";if(typeof a=="undefined"||!a)a="";if(typeof f=="undefined"||!f)f="";i="";r=="medium"&&(i="padding-top:1px !important;");e.attr("data-shr_status","1");i=SHR4P.TB.jQuery("<div style='float:left; "+i+" margin:0px 0px 0px 10px !important;'/>").get(0);e.replaceWith(i);SHR4P.TB.jQuery(i).append("<div/>");i=SHR4P.TB.jQuery(i).find(":first-child").get(0);gapi.plusone.render(i,{size:r,annotation:s,width:o,expandto:u,onstartinteraction:a,onendinteraction:f,href:decodeURIComponent(t),callback:function(e){SHR4P.TB.googPlusOneUtil.trackPlusOneClick(e,n)}})}})},trackPlusOneClick:function(e,t){e.state=="on"&&SHR4P.TB.jQuery("<img/>").attr({src:"http://www.shareaholic.com/api/share/?v=1&apikey="+SHR4P.TB.shr_apiKey+"&apitype=3&service=304&link="+encodeURIComponent(e.href)+(t!==""?"&title="+t:""),width:"1",height:"1"}).appendTo("body")}};SHR4P.TB.twitterUtil={addTwitterScript:function(){SHR4P.TB.twitterUtil.renderShareaholicTweetButton()},renderShareaholicTweetButton:function(){SHR4P.TB.jQuery(".shareaholic-tweetbutton",".shareaholic-like-buttonset").each(function(){var e=SHR4P.TB.jQuery,t=e(this);if((t.attr("data-shr_status")||false)!="1"){var n=t.attr("data-shr_href")||t.attr("shr_href"),r=t.attr("data-shr_title")||t.attr("shr_title"),i=t.attr("data-shr_size")||t.attr("shr_size"),s=t.attr("data-shr_count")||t.attr("shr_count"),o=t.attr("data-shr_lang"),u="shr-7",a="shr-generic",f=!0,l=!0;SHR4P.debug(t);if(typeof s=="undefined"||!s)s="none";if(typeof n!="undefined"&&!!n||typeof r!="undefined"&&!!r){if(typeof n=="undefined"||!n)n=encodeURIComponent(document.location.href);if(typeof r=="undefined"||!r)r=""}else{n=encodeURIComponent(document.location.href);r=document.title}if(typeof i=="undefined"||!i)i="standard";var c="";i=="medium"&&(c="padding-top:1px !important;");if(typeof o=="undefined"||!o)o="en";switch(s){case"horizontal":l=f=!0;break;case"vertical":f=!0;l=!1;break;case"none":l=f=!1}if(f){u+="-count";a+="-count"}if(f&&l){u+="-compact";a+="-compact"}if(f&&typeof SHRSB_Globals!="undefined"&&SHRSB_Globals.perfoption=="1"){var h=this;if(l){this.style.marginRight="0px";i=document.createElement("div");h=document.createElement("div");s=this.parentNode;s.appendChild(h);h.className="shr_compact_div";i.className="shr_compact_tick";i.appendChild(document.createElement("s"));i.appendChild(document.createElement("i"));s.insertBefore(i,h)}i=function(e){h.innerHTML=e.count};f&&SHR4P.TB.utils.getTwitShrCnt(decodeURIComponent(n),i)}var p={title:r,link:n,short_link:n,shortener:SHRSB_Globals.shortener?SHRSB_Globals.shortener:"google",shortener_key:SHRSB_Globals.shortener_key?SHRSB_Globals.shortener_key:"",v:1,apitype:1,apikey:SHR4P.TB.shr_apiKey,twitter_template:SHR4P.TB.shr_twitter_template?SHR4P.TB.shr_twitter_template:"${title} - ${short_link}",service:7};[SHR4P.TB.shr_link,e.param(p)].join("?");e(this).before(e('<style type="text/css"> div.shareaholic a{background-image:url('+(SHR4P.TB.shr_image||SHR4P.TB.shr_twitter_image)+") !important;}.shr-generic-count{height:53px;width:57px;font-weight:bold;font-size:14px;padding-top:7px;text-align:center;background:transparent no-repeat scroll;background-position:0px -80px;color:black;cursor:pointer;text-decoration:none;display:block;}.shr-generic-count-compact,.shr-generic{height:23px;width:63px;font-weight:bold;font-size:14px;padding-top:7px;text-align:center;background:transparent no-repeat scroll;background-position:0px -50px;color:black;cursor:pointer;text-decoration:none;display:block;} "+(SHR4P.TB.shr_image?".shr-7-count{background-position:-57px -80px;}.shr-7-count-compact,.shr-7{height:14px;width:55px;background-position:-228px -79px;}.shr-7-count-compact:hover,.shr-7:hover{height:14px;width:55px;background-position:-228px -100px;}.shr-7-count-compact:active,.shr-7:active{height:14px;width:55px;background-position:-228px -121px;}":".shr-7-count{background-position:-57px -80px;}.shr-7-count-compact,.shr-7{height:14px;width:55px;background-position:0px 0px;}.shr-7-count-compact:hover,.shr-7:hover{height:14px;width:55px;background-position:0px -21px;}.shr-7-count-compact:active,.shr-7:active{height:14px;width:55px;background-position:0px -41px;}")+"</style>"));t.wrap('<div class="shr-7 shareaholic" style="float:left; '+c+' margin:0px 0px 0px 10px !important;"></div>');t.parent().removeClass("shr-7");t.addClass(a);t.addClass(u);SHR4P.debug(t);SHR4P.TB.utils.isMobileBrowser()||t.click(function(e){SHR4P.TB.utils.showServiceLet(p,"twitter");e.preventDefault()});t.attr("data-shr_status","1")}})},trackTweetButtonClick:function(e){e.type="tweet";SHR4P.TB.jQuery("<img/>").attr({src:"http://www.shareaholic.com/api/share/?v=1&apikey="+SHR4P.TB.shr_apiKey+"&apitype=3&service=7&link="+encodeURIComponent(e.target.baseURI)+(e.target.title!==""?"&title="+e.target.title:""),width:"1",height:"1"}).appendTo("body")}};SHR4P.dough=SHR4P.dough||function(e,t){return function(){if(typeof SHRSB_Globals!="undefined"&&SHRSB_Globals.perfoption=="1"){var n;if(!(n=e.SHR_Load_Dough)){n=t.createElement("script");n.type="text/javascript";n.async=!0;n.src=("https:"==document.location.protocol?"https://":"http://")+"dtym7iokkjlif.cloudfront.net/dough/1.0/shareaholic-analytics.js";var r=t.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r);n=!0}e.SHR_Load_Dough=n}}}(window,document);SHR4P.TB.fbUtil={fbConnectAdd:0,renderFBWidgetCalled:!1,likeButtonsToRender:[],hasFB:function(){return typeof window.FB=="object"&&FB.Event&&typeof FB.Event.subscribe=="function"},addLikeButton:function(e,t){if(SHR4P.TB.fbUtil.hasFBNameSpace()){var n=SHR4P.TB.jQuery('<fb:like href="'+t+'"layout="button_count" show_faces="true" width="60" font=""></fb:like>').appendTo(e);typeof window.FB!="undefined"&&FB.XFBML&&FB.XFBML.parse?FB.XFBML.parse(n.get(0)):SHR4P.TB.fbUtil.likeButtonsToRender.push(n.get(0))}else SHR4P.TB.jQuery('<iframe src="http://www.facebook.com/plugins/like.php?app_id=207766518608&amp;href='+t+'&amp;send=false&amp;layout=button_count&amp;width=90&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;" allowTransparency="true"></iframe>').appendTo(e)},renderFBWidgets:function(){if(!SHR4P.TB.fbUtil.renderFBWidgetCalled){setTimeout("SHR4P.TB.fbUtil.renderFBLikeButtons()",0);setTimeout("SHR4P.TB.fbUtil.renderFBSendButtons()",0);for(var e=0;e<SHR4P.TB.fbUtil.likeButtonsToRender.length;++e)typeof window.FB!="undefined"&&FB.XFBML&&FB.XFBML.parse&&FB.XFBML.parse(SHR4P.TB.fbUtil.likeButtonsToRender[e]);SHR4P.TB.fbUtil.renderFBWidgetCalled=!0}},renderFBSendButtons:function(){SHR4P.TB.jQuery(".shareaholic-fbsend",".shareaholic-like-buttonset").each(function(){if(SHR4P.TB.fbUtil.hasFBNameSpace()){var e=SHR4P.TB.jQuery(this),t=e.attr("data-shr_href");if(typeof t=="undefined"||!t)t=encodeURIComponent(document.location.href);var n=SHR4P.TB.jQuery("<div style='float:left;padding-top:0px !important; margin:0px 5px !important;'/>").get(0);e.replaceWith(n);e=SHR4P.TB.jQuery('<fb:send href="'+t+'" width="60" font=""></fb:send>').appendTo(n);typeof window.FB!="undefined"&&FB.XFBML&&FB.XFBML.parse&&FB.XFBML.parse(e.get(0))}})},renderFBLikeButtons:function(){SHR4P.TB.jQuery(".shareaholic-fblike",".shareaholic-like-buttonset").each(function(){var e=SHR4P.TB.jQuery(this),t=decodeURIComponent(e.attr("data-shr_href"));if(typeof t=="undefined"||!t)t=document.location.href;var n=e.attr("data-shr_layout");if(typeof n=="undefined"||!n)n="button_count";var r=e.attr("data-shr_showfaces");if(typeof r=="undefined"||!r)r="true";var i=e.attr("data-shr_send");if(typeof i=="undefined"||!i)i="false";var s=e.attr("data-shr_action");if(typeof s=="undefined"||!s||s.toLowerCase()!="recommend"&&s.toLowerCase()!="like")s="like";var o=SHR4P.TB.jQuery("<div style='float:left;padding-top:0px !important; margin:0px 5px !important;'/>").get(0);e.replaceWith(o);if(SHR4P.TB.fbUtil.hasFBNameSpace()){t=SHR4P.TB.jQuery('<fb:like action="'+s+'" send = "'+i+'" href="'+t+'"layout="'+n+'" show_faces="'+r+'" width="60" font=""></fb:like>').appendTo(o);typeof window.FB!="undefined"&&FB.XFBML&&FB.XFBML.parse&&FB.XFBML.parse(t.get(0))}else{e="30";i="60";switch(n){case"button_count":i="90";e="21";break;case"box_count":i="60";e="90";break;default:i="60";e="80"}SHR4P.TB.jQuery('<iframe src="http://www.facebook.com/plugins/like.php?app_id=207766518608&amp;href='+t+"&amp;send=false&amp;layout="+n+"&amp;width="+i+"&amp;show_faces="+r+"&amp;action="+s+"&amp;colorscheme=light&amp;font&amp;height="+e+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'+i+"px; height:"+e+'px;" allowTransparency="true"></iframe>').appendTo(o)}})},addFBConnect:function(){SHR4P.TB.fbUtil.addFBNameSpace();if(!SHR4P.TB.fbUtil.fbConnectAdd){SHR4P.TB.jQuery('<div id="fb-root"></div>').appendTo("body");window.fbAsyncInit=function(){FB.init({appId:"207766518608",status:!0,cookie:!0,xfbml:!0});SHR4P.TB.fbUtil.tryAddFBSubscription()};SHR4P.TB.fbUtil.renderFBWidgetHandlerAttached=!0;var e=document.createElement("script");e.async=!0;e.src=document.location.protocol+"//connect.facebook.net/en_US/all.js";e.onload=SHR4P.TB.fbUtil.renderFBWidgets;e.onreadystatechange=function(){(this.readyState=="complete"||this.readyState=="loaded")&&SHR4P.TB.fbUtil.renderFBWidgets()};document.getElementById("fb-root").appendChild(e);SHR4P.TB.fbUtil.fbConnectAdd=1}},tryAddFBSubscription:function(){SHR4P.TB.fbUtil.hasFB()&&FB.XFBML&&FB.XFBML.parse?SHR4P.TB.fbUtil.addFBSubscription():setTimeout(SHR4P.TB.fbUtil.tryAddFBSubscription,500)},addFBSubscription:function(){FB.Event.subscribe("edge.create",function(e){SHR4P.TB.jQuery("<img/>").attr({src:"http://www.shareaholic.com/api/share/?v=1&apikey="+SHR4P.TB.shr_apiKey+"&apitype=3&service=303&link="+encodeURIComponent(e),width:"1",height:"1"}).appendTo("body")});FB.Event.subscribe("message.send",function(e){SHR4P.TB.jQuery("<img/>").attr({src:"http://www.shareaholic.com/api/share/?v=1&apikey="+SHR4P.TB.shr_apiKey+"&apitype=3&service=305&link="+encodeURIComponent(e),width:"1",height:"1"}).appendTo("body")})},addFBNameSpace:function(){var e=SHR4P.TB.jQuery(SHR4P.TB.jQuery("html").get(0));if(typeof e.attr("xmlns:fb")=="undefined"&&(!SHR4P.TB.jQuery.browser.msie||SHR4P.TB.jQuery.browser.version>="9.0")){e.attr("xmlns:fb","http://www.facebook.com/2008/fbml");e.attr("xmlns:og","http://opengraphprotocol.org/schema/")}},hasFBNameSpace:function(){return typeof SHR4P.TB.jQuery(SHR4P.TB.jQuery("html").get(0)).attr("xmlns:fb")!="undefined"}};SHR4P.TB.load();