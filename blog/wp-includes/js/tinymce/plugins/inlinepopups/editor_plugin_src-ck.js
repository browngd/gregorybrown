/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */(function(){var e=tinymce.DOM,t=tinymce.dom.Element,n=tinymce.dom.Event,r=tinymce.each,i=tinymce.is;tinymce.create("tinymce.plugins.InlinePopups",{init:function(t,n){t.onBeforeRenderUI.add(function(){t.windowManager=new tinymce.InlineWindowManager(t);e.loadCSS(n+"/skins/"+(t.settings.inlinepopups_skin||"clearlooks2")+"/window.css")})},getInfo:function(){return{longname:"InlinePopups",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/inlinepopups",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.create("tinymce.InlineWindowManager:tinymce.WindowManager",{InlineWindowManager:function(e){var t=this;t.parent(e);t.zIndex=3e5;t.count=0;t.windows={}},open:function(r,i){var s=this,o,u="",a=s.editor,f=0,l=0,c,h,p,d,v,m,g,y;r=r||{};i=i||{};if(!r.inline)return s.parent(r,i);y=s._frontWindow();y&&e.get(y.id+"_ifr")&&(y.focussedElement=e.get(y.id+"_ifr").contentWindow.document.activeElement);r.type||(s.bookmark=a.selection.getBookmark(1));o=e.uniqueId();c=e.getViewPort();r.width=parseInt(r.width||320);r.height=parseInt(r.height||240)+(tinymce.isIE?8:0);r.min_width=parseInt(r.min_width||150);r.min_height=parseInt(r.min_height||100);r.max_width=parseInt(r.max_width||2e3);r.max_height=parseInt(r.max_height||2e3);r.left=r.left||Math.round(Math.max(c.x,c.x+c.w/2-r.width/2));r.top=r.top||Math.round(Math.max(c.y,c.y+c.h/2-r.height/2));r.movable=r.resizable=!0;i.mce_width=r.width;i.mce_height=r.height;i.mce_inline=!0;i.mce_window_id=o;i.mce_auto_focus=r.auto_focus;s.features=r;s.params=i;s.onOpen.dispatch(s,r,i);if(r.type){u+=" mceModal";r.type&&(u+=" mce"+r.type.substring(0,1).toUpperCase()+r.type.substring(1));r.resizable=!1}r.statusbar&&(u+=" mceStatusbar");r.resizable&&(u+=" mceResizable");r.minimizable&&(u+=" mceMinimizable");r.maximizable&&(u+=" mceMaximizable");r.movable&&(u+=" mceMovable");s._addAll(e.doc.body,["div",{id:o,role:"dialog","aria-labelledby":r.type?o+"_content":o+"_title","class":(a.settings.inlinepopups_skin||"clearlooks2")+(tinymce.isIE&&window.getSelection?" ie9":""),style:"width:100px;height:100px"},["div",{id:o+"_wrapper","class":"mceWrapper"+u},["div",{id:o+"_top","class":"mceTop"},["div",{"class":"mceLeft"}],["div",{"class":"mceCenter"}],["div",{"class":"mceRight"}],["span",{id:o+"_title"},r.title||""]],["div",{id:o+"_middle","class":"mceMiddle"},["div",{id:o+"_left","class":"mceLeft",tabindex:"0"}],["span",{id:o+"_content"}],["div",{id:o+"_right","class":"mceRight",tabindex:"0"}]],["div",{id:o+"_bottom","class":"mceBottom"},["div",{"class":"mceLeft"}],["div",{"class":"mceCenter"}],["div",{"class":"mceRight"}],["span",{id:o+"_status"},"Content"]],["a",{"class":"mceMove",tabindex:"-1",href:"javascript:;"}],["a",{"class":"mceMin",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceMax",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceMed",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceClose",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{id:o+"_resize_n","class":"mceResize mceResizeN",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_s","class":"mceResize mceResizeS",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_w","class":"mceResize mceResizeW",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_e","class":"mceResize mceResizeE",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_nw","class":"mceResize mceResizeNW",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_ne","class":"mceResize mceResizeNE",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_sw","class":"mceResize mceResizeSW",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_se","class":"mceResize mceResizeSE",tabindex:"-1",href:"javascript:;"}]]]);e.setStyles(o,{top:-1e4,left:-1e4});tinymce.isGecko&&e.setStyle(o,"overflow","auto");if(!r.type){f+=e.get(o+"_left").clientWidth;f+=e.get(o+"_right").clientWidth;l+=e.get(o+"_top").clientHeight;l+=e.get(o+"_bottom").clientHeight}e.setStyles(o,{top:r.top,left:r.left,width:r.width+f,height:r.height+l});g=r.url||r.file;if(g){tinymce.relaxedDomain&&(g+=(g.indexOf("?")==-1?"?":"&")+"mce_rdomain="+tinymce.relaxedDomain);g=tinymce._addVer(g)}if(!r.type){e.add(o+"_content","iframe",{id:o+"_ifr",src:'javascript:""',frameBorder:0,style:"border:0;width:10px;height:10px"});e.setStyles(o+"_ifr",{width:r.width,height:r.height});e.setAttrib(o+"_ifr","src",g)}else{e.add(o+"_wrapper","a",{id:o+"_ok","class":"mceButton mceOk",href:"javascript:;",onmousedown:"return false;"},"Ok");r.type=="confirm"&&e.add(o+"_wrapper","a",{"class":"mceButton mceCancel",href:"javascript:;",onmousedown:"return false;"},"Cancel");e.add(o+"_middle","div",{"class":"mceIcon"});e.setHTML(o+"_content",r.content.replace("\n","<br />"));n.add(o,"keyup",function(e){var t=27;if(e.keyCode===t){r.button_func(!1);return n.cancel(e)}});n.add(o,"keydown",function(t){var r,i=9;if(t.keyCode===i){r=e.select("a.mceCancel",o+"_wrapper")[0];r&&r!==t.target?r.focus():e.get(o+"_ok").focus();return n.cancel(t)}})}p=n.add(o,"mousedown",function(t){var r=t.target,i,u;i=s.windows[o];s.focus(o);if(r.nodeName=="A"||r.nodeName=="a"){if(r.className=="mceClose"){s.close(null,o);return n.cancel(t)}if(r.className=="mceMax"){i.oldPos=i.element.getXY();i.oldSize=i.element.getSize();u=e.getViewPort();u.w-=2;u.h-=2;i.element.moveTo(u.x,u.y);i.element.resizeTo(u.w,u.h);e.setStyles(o+"_ifr",{width:u.w-i.deltaWidth,height:u.h-i.deltaHeight});e.addClass(o+"_wrapper","mceMaximized")}else if(r.className=="mceMed"){i.element.moveTo(i.oldPos.x,i.oldPos.y);i.element.resizeTo(i.oldSize.w,i.oldSize.h);i.iframeElement.resizeTo(i.oldSize.w-i.deltaWidth,i.oldSize.h-i.deltaHeight);e.removeClass(o+"_wrapper","mceMaximized")}else{if(r.className=="mceMove")return s._startDrag(o,t,r.className);if(e.hasClass(r,"mceResize"))return s._startDrag(o,t,r.className.substring(13))}}});d=n.add(o,"click",function(e){var t=e.target;s.focus(o);if(t.nodeName=="A"||t.nodeName=="a")switch(t.className){case"mceClose":s.close(null,o);return n.cancel(e);case"mceButton mceOk":case"mceButton mceCancel":r.button_func(t.className=="mceButton mceOk");return n.cancel(e)}});n.add([o+"_left",o+"_right"],"focus",function(t){var n=e.get(o+"_ifr");if(n){var r=n.contentWindow.document.body,i=e.select(":input:enabled,*[tabindex=0]",r);t.target.id===o+"_left"?i[i.length-1].focus():i[0].focus()}else e.get(o+"_ok").focus()});m=s.windows[o]={id:o,mousedown_func:p,click_func:d,element:new t(o,{blocker:1,container:a.getContainer()}),iframeElement:new t(o+"_ifr"),features:r,deltaWidth:f,deltaHeight:l};m.iframeElement.on("focus",function(){s.focus(o)});if(s.count==0&&s.editor.getParam("dialog_type","modal")=="modal"){e.add(e.doc.body,"div",{id:"mceModalBlocker","class":(s.editor.settings.inlinepopups_skin||"clearlooks2")+"_modalBlocker",style:{zIndex:s.zIndex-1}});e.show("mceModalBlocker");e.setAttrib(e.doc.body,"aria-hidden","true")}else e.setStyle("mceModalBlocker","z-index",s.zIndex-1);(tinymce.isIE6||/Firefox\/2\./.test(navigator.userAgent)||tinymce.isIE&&!e.boxModel)&&e.setStyles("mceModalBlocker",{position:"absolute",left:c.x,top:c.y,width:c.w-2,height:c.h-2});e.setAttrib(o,"aria-hidden","false");s.focus(o);s._fixIELayout(o,1);e.get(o+"_ok")&&e.get(o+"_ok").focus();s.count++;return m},focus:function(t){var n=this,r;if(r=n.windows[t]){r.zIndex=this.zIndex++;r.element.setStyle("zIndex",r.zIndex);r.element.update();t+="_wrapper";e.removeClass(n.lastId,"mceFocus");e.addClass(t,"mceFocus");n.lastId=t;r.focussedElement?r.focussedElement.focus():e.get(t+"_ok")?e.get(r.id+"_ok").focus():e.get(r.id+"_ifr")&&e.get(r.id+"_ifr").focus()}},_addAll:function(e,t){var n,r,s=this,o=tinymce.DOM;if(i(t,"string"))e.appendChild(o.doc.createTextNode(t));else if(t.length){e=e.appendChild(o.create(t[0],t[1]));for(n=2;n<t.length;n++)s._addAll(e,t[n])}},_startDrag:function(r,i,s){function k(){if(l)return;o._fixIELayout(r,0);e.add(f.body,"div",{id:"mceEventBlocker","class":"mceEventBlocker "+(o.editor.settings.inlinepopups_skin||"clearlooks2"),style:{zIndex:o.zIndex+1}});(tinymce.isIE6||tinymce.isIE&&!e.boxModel)&&e.setStyles("mceEventBlocker",{position:"absolute",left:y.x,top:y.y,width:y.w-2,height:y.h-2});l=new t("mceEventBlocker");l.update();d=h.getXY();v=h.getSize();b=g.x+d.x-y.x;w=g.y+d.y-y.y;e.add(l.get(),"div",{id:"mcePlaceHolder","class":"mcePlaceHolder",style:{left:b,top:w,width:v.w,height:v.h}});m=new t("mcePlaceHolder")}var o=this,u,a,f=e.doc,l,c=o.windows[r],h=c.element,p=h.getXY(),d,v,m,g,y,b,w,E,S,x,T,N,C;g={x:0,y:0};y=e.getViewPort();y.w-=2;y.h-=2;E=i.screenX;S=i.screenY;x=T=N=C=0;u=n.add(f,"mouseup",function(t){n.remove(f,"mouseup",u);n.remove(f,"mousemove",a);l&&l.remove();h.moveBy(x,T);h.resizeBy(N,C);v=h.getSize();e.setStyles(r+"_ifr",{width:v.w-c.deltaWidth,height:v.h-c.deltaHeight});o._fixIELayout(r,1);return n.cancel(t)});s!="Move"&&k();a=n.add(f,"mousemove",function(e){var t,r,i;k();t=e.screenX-E;r=e.screenY-S;switch(s){case"ResizeW":x=t;N=0-t;break;case"ResizeE":N=t;break;case"ResizeN":case"ResizeNW":case"ResizeNE":if(s=="ResizeNW"){x=t;N=0-t}else s=="ResizeNE"&&(N=t);T=r;C=0-r;break;case"ResizeS":case"ResizeSW":case"ResizeSE":if(s=="ResizeSW"){x=t;N=0-t}else s=="ResizeSE"&&(N=t);C=r;break;case"mceMove":x=t;T=r}if(N<(i=c.features.min_width-v.w)){x!==0&&(x+=N-i);N=i}if(C<(i=c.features.min_height-v.h)){T!==0&&(T+=C-i);C=i}N=Math.min(N,c.features.max_width-v.w);C=Math.min(C,c.features.max_height-v.h);x=Math.max(x,y.x-(b+y.x));T=Math.max(T,y.y-(w+y.y));x=Math.min(x,y.w+y.x-(b+v.w+y.x));T=Math.min(T,y.h+y.y-(w+v.h+y.y));if(x+T!==0){b+x<0&&(x=0);w+T<0&&(T=0);m.moveTo(b+x,w+T)}N+C!==0&&m.resizeTo(v.w+N,v.h+C);return n.cancel(e)});return n.cancel(i)},resizeBy:function(e,t,n){var r=this.windows[n];if(r){r.element.resizeBy(e,t);r.iframeElement.resizeBy(e,t)}},close:function(t,r){var i=this,s,o=e.doc,u,r;r=i._findId(r||t);if(!i.windows[r]){i.parent(t);return}i.count--;if(i.count==0){e.remove("mceModalBlocker");e.setAttrib(e.doc.body,"aria-hidden","false");i.editor.focus()}if(s=i.windows[r]){i.onClose.dispatch(i);n.remove(o,"mousedown",s.mousedownFunc);n.remove(o,"click",s.clickFunc);n.clear(r);n.clear(r+"_ifr");e.setAttrib(r+"_ifr","src",'javascript:""');s.element.remove();delete i.windows[r];u=i._frontWindow();u&&i.focus(u.id)}},_frontWindow:function(){var e,t=0;r(this.windows,function(n){if(n.zIndex>t){e=n;t=n.zIndex}});return e},setTitle:function(t,n){var r;t=this._findId(t);if(r=e.get(t+"_title"))r.innerHTML=e.encode(n)},alert:function(t,n,r){var i=this,s;s=i.open({title:i,type:"alert",button_func:function(e){n&&n.call(e||i,e);i.close(null,s.id)},content:e.encode(i.editor.getLang(t,t)),inline:1,width:400,height:130})},confirm:function(t,n,r){var i=this,s;s=i.open({title:i,type:"confirm",button_func:function(e){n&&n.call(e||i,e);i.close(null,s.id)},content:e.encode(i.editor.getLang(t,t)),inline:1,width:400,height:130})},_findId:function(t){var n=this;if(typeof t=="string")return t;r(n.windows,function(n){var r=e.get(n.id+"_ifr");if(r&&t==r.contentWindow){t=n.id;return!1}});return t},_fixIELayout:function(t,n){var i,s;if(!tinymce.isIE6)return;r(["n","s","w","e","nw","ne","sw","se"],function(r){var i=e.get(t+"_resize_"+r);e.setStyles(i,{width:n?i.clientWidth:"",height:n?i.clientHeight:"",cursor:e.getStyle(i,"cursor",1)});e.setStyle(t+"_bottom","bottom","-1px");i=0});if(i=this.windows[t]){i.element.hide();i.element.show();r(e.select("div,a",t),function(e,t){if(e.currentStyle.backgroundImage!="none"){s=new Image;s.src=e.currentStyle.backgroundImage.replace(/url\(\"(.+)\"\)/,"$1")}});e.get(t).style.filter=""}}});tinymce.PluginManager.add("inlinepopups",tinymce.plugins.InlinePopups)})();