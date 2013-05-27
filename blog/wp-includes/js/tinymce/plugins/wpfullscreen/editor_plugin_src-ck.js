/**
 * WP Fullscreen TinyMCE plugin
 *
 * Contains code from Moxiecode Systems AB released under LGPL License http://tinymce.moxiecode.com/license
 */(function(){tinymce.create("tinymce.plugins.wpFullscreenPlugin",{resize_timeout:!1,init:function(e,t){function o(t,r){var i=tinymce.DOM,s=e.getBody(),o=i.get(e.id+"_ifr"),u,a=e.dom.win.scrollY;if(n.resize_timeout)return;n.resize_timeout=!0;setTimeout(function(){n.resize_timeout=!1},500);u=s.scrollHeight>300?s.scrollHeight:300;if(u!=o.scrollHeight){i.setStyle(o,"height",u+"px");e.getWin().scrollTo(0,0)}r&&r.type=="paste"&&tinymce.isWebKit&&setTimeout(function(){e.dom.win.scrollTo(0,a)},40)}var n=this,r=0,i={},s=tinymce.DOM;e.addCommand("wpFullScreenClose",function(){e.getParam("wp_fullscreen_is_enabled")&&s.win.setTimeout(function(){tinyMCE.remove(e);s.remove("wp_mce_fullscreen_parent");tinyMCE.settings=tinyMCE.oldSettings},10)});e.addCommand("wpFullScreenSave",function(){var e=tinyMCE.get("wp_mce_fullscreen"),t;e.focus();t=tinyMCE.get(e.getParam("wp_fullscreen_editor_id"));t.setContent(e.getContent({format:"raw"}),{format:"raw"})});e.addCommand("wpFullScreenInit",function(){var t,n,r;e=tinyMCE.activeEditor;t=e.getDoc();n=t.body;tinyMCE.oldSettings=tinyMCE.settings;tinymce.each(e.settings,function(e,t){i[t]=e});i.id="wp_mce_fullscreen";i.wp_fullscreen_is_enabled=!0;i.wp_fullscreen_editor_id=e.id;i.theme_advanced_resizing=!1;i.theme_advanced_statusbar_location="none";i.content_css=i.content_css?i.content_css+","+i.wp_fullscreen_content_css:i.wp_fullscreen_content_css;i.height=tinymce.isIE?n.scrollHeight:n.offsetHeight;tinymce.each(e.getParam("wp_fullscreen_settings"),function(e,t){i[t]=e});r=new tinymce.Editor("wp_mce_fullscreen",i);r.onInit.add(function(t){var n=tinymce.DOM,r=n.select("a.mceButton",n.get("wp-fullscreen-buttons"));e.isHidden()?t.setContent(switchEditors.wpautop(t.getElement().value)):t.setContent(e.getContent());setTimeout(function(){t.onNodeChange.add(function(e,t,i){tinymce.each(r,function(e){var t,r;if(t=n.get("wp_mce_fullscreen_"+e.id.substr(6))){r=t.className;r&&(e.className=r)}})})},1e3);t.dom.addClass(t.getBody(),"wp-fullscreen-editor");t.focus()});r.render();"undefined"!=fullscreen&&r.dom.bind(r.dom.doc,"mousemove",function(e){fullscreen.bounder("showToolbar","hideToolbar",2e3,e)})});e.addCommand("wpFullScreen",function(){if(typeof fullscreen=="undefined")return;"wp_mce_fullscreen"==e.id?fullscreen.off():fullscreen.on()});e.addButton("wp_fullscreen",{title:"wordpress.wp_fullscreen_desc",cmd:"wpFullScreen"});if(e.getParam("fullscreen_is_enabled")||!e.getParam("wp_fullscreen_is_enabled"))return;e.onInit.add(function(e,t){e.onChange.add(o);e.onSetContent.add(o);e.onPaste.add(o);e.onKeyUp.add(o);e.onPostRender.add(o);e.getBody().style.overflowY="hidden"});e.getParam("autoresize_on_init",!0)&&e.onLoadContent.add(function(e,t){setTimeout(function(){o()},1200)});e.addCommand("wpAutoResize",o)},getInfo:function(){return{longname:"WP Fullscreen",author:"WordPress",authorurl:"http://wordpress.org",infourl:"",version:"1.0"}}});tinymce.PluginManager.add("wpfullscreen",tinymce.plugins.wpFullscreenPlugin)})();