(function(){var e=tinymce.util.JSONRequest,t=tinymce.each,n=tinymce.DOM;tinymce.create("tinymce.plugins.SpellcheckerPlugin",{getInfo:function(){return{longname:"Spellchecker",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/spellchecker",version:tinymce.majorVersion+"."+tinymce.minorVersion}},init:function(e,n){var r=this,i;r.url=n;r.editor=e;r.rpcUrl=e.getParam("spellchecker_rpc_url","{backend}");if(r.rpcUrl=="{backend}"){if(tinymce.isIE)return;r.hasSupport=!0;e.onContextMenu.addToTop(function(e,t){if(r.active)return!1})}e.addCommand("mceSpellCheck",function(){if(r.rpcUrl=="{backend}"){r.editor.getBody().spellcheck=r.active=!r.active;return}if(!r.active){e.setProgressState(1);r._sendRPC("checkWords",[r.selectedLang,r._getWords()],function(t){if(t.length>0){r.active=1;r._markWords(t);e.setProgressState(0);e.nodeChanged()}else{e.setProgressState(0);e.getParam("spellchecker_report_no_misspellings",!0)&&e.windowManager.alert("spellchecker.no_mpell")}})}else r._done()});e.settings.content_css!==!1&&e.contentCSS.push(n+"/css/content.css");e.onClick.add(r._showMenu,r);e.onContextMenu.add(r._showMenu,r);e.onBeforeGetContent.add(function(){r.active&&r._removeWords()});e.onNodeChange.add(function(e,t){t.setActive("spellchecker",r.active)});e.onSetContent.add(function(){r._done()});e.onBeforeGetContent.add(function(){r._done()});e.onBeforeExecCommand.add(function(e,t){t=="mceFullScreen"&&r._done()});r.languages={};t(e.getParam("spellchecker_languages","+English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Polish=pl,Portuguese=pt,Spanish=es,Swedish=sv","hash"),function(e,t){if(t.indexOf("+")===0){t=t.substring(1);r.selectedLang=e}r.languages[t]=e})},createControl:function(e,n){var r=this,i,s=r.editor;if(e=="spellchecker"){if(r.rpcUrl=="{backend}"){r.hasSupport&&(i=n.createButton(e,{title:"spellchecker.desc",cmd:"mceSpellCheck",scope:r}));return i}i=n.createSplitButton(e,{title:"spellchecker.desc",cmd:"mceSpellCheck",scope:r});i.onRenderMenu.add(function(e,n){n.add({title:"spellchecker.langs","class":"mceMenuItemTitle"}).setDisabled(1);t(r.languages,function(e,t){var i={icon:1},s;i.onclick=function(){if(e==r.selectedLang)return;s.setSelected(1);r.selectedItem.setSelected(0);r.selectedItem=s;r.selectedLang=e};i.title=t;s=n.add(i);s.setSelected(e==r.selectedLang);e==r.selectedLang&&(r.selectedItem=s)})});return i}},_walk:function(e,t){var n=this.editor.getDoc(),r;if(n.createTreeWalker){r=n.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1);while((e=r.nextNode())!=null)t.call(this,e)}else tinymce.walk(e,t,"childNodes")},_getSeparators:function(){var e="",t,n=this.editor.getParam("spellchecker_word_separator_chars",'\\s!"#$%&()*+,-./:;<=>?@[]^_{|}����������������”“');for(t=0;t<n.length;t++)e+="\\"+n.charAt(t);return e},_getWords:function(){var e=this.editor,n=[],r="",i={},s=[];this._walk(e.getBody(),function(e){e.nodeType==3&&(r+=e.nodeValue+" ")});if(e.getParam("spellchecker_word_pattern"))s=r.match("("+e.getParam("spellchecker_word_pattern")+")","gi");else{r=r.replace(new RegExp("([0-9]|["+this._getSeparators()+"])","g")," ");r=tinymce.trim(r.replace(/(\s+)/g," "));s=r.split(" ")}t(s,function(e){if(!i[e]){n.push(e);i[e]=1}});return n},_removeWords:function(e){var n=this.editor,r=n.dom,i=n.selection,s=i.getRng(!0);t(r.select("span").reverse(),function(t){t&&(r.hasClass(t,"mceItemHiddenSpellWord")||r.hasClass(t,"mceItemHidden"))&&(!e||r.decode(t.innerHTML)==e)&&r.remove(t,1)});i.setRng(s)},_markWords:function(e){var n=this.editor,r=n.dom,i=n.getDoc(),s=n.selection,o=s.getRng(!0),u=[],a=e.join("|"),f=this._getSeparators(),l=new RegExp("(^|["+f+"])("+a+")(?=["+f+"]|$)","g");this._walk(n.getBody(),function(e){e.nodeType==3&&u.push(e)});t(u,function(e){var t,n,s,o,u=e.nodeValue;if(l.test(u)){u=r.encode(u);n=r.create("span",{"class":"mceItemHidden"});if(tinymce.isIE){u=u.replace(l,"$1<mcespell>$2</mcespell>");while((o=u.indexOf("<mcespell>"))!=-1){s=u.substring(0,o);if(s.length){t=i.createTextNode(r.decode(s));n.appendChild(t)}u=u.substring(o+10);o=u.indexOf("</mcespell>");s=u.substring(0,o);u=u.substring(o+11);n.appendChild(r.create("span",{"class":"mceItemHiddenSpellWord"},s))}if(u.length){t=i.createTextNode(r.decode(u));n.appendChild(t)}}else n.innerHTML=u.replace(l,'$1<span class="mceItemHiddenSpellWord">$2</span>');r.replace(n,e)}});s.setRng(o)},_showMenu:function(e,r){var i=this,e=i.editor,s=i._menu,o,u=e.dom,a=u.getViewPort(e.getWin()),f=r.target;r=0;if(!s){s=e.controlManager.createDropMenu("spellcheckermenu",{"class":"mceNoIcons"});i._menu=s}if(u.hasClass(f,"mceItemHiddenSpellWord")){s.removeAll();s.add({title:"spellchecker.wait","class":"mceMenuItemTitle"}).setDisabled(1);i._sendRPC("getSuggestions",[i.selectedLang,u.decode(f.innerHTML)],function(n){var r;s.removeAll();if(n.length>0){s.add({title:"spellchecker.sug","class":"mceMenuItemTitle"}).setDisabled(1);t(n,function(t){s.add({title:t,onclick:function(){u.replace(e.getDoc().createTextNode(t),f);i._checkDone()}})});s.addSeparator()}else s.add({title:"spellchecker.no_sug","class":"mceMenuItemTitle"}).setDisabled(1);if(e.getParam("show_ignore_words",!0)){r=i.editor.getParam("spellchecker_enable_ignore_rpc","");s.add({title:"spellchecker.ignore_word",onclick:function(){var t=f.innerHTML;u.remove(f,1);i._checkDone();if(r){e.setProgressState(1);i._sendRPC("ignoreWord",[i.selectedLang,t],function(t){e.setProgressState(0)})}}});s.add({title:"spellchecker.ignore_words",onclick:function(){var t=f.innerHTML;i._removeWords(u.decode(t));i._checkDone();if(r){e.setProgressState(1);i._sendRPC("ignoreWords",[i.selectedLang,t],function(t){e.setProgressState(0)})}}})}i.editor.getParam("spellchecker_enable_learn_rpc")&&s.add({title:"spellchecker.learn_word",onclick:function(){var t=f.innerHTML;u.remove(f,1);i._checkDone();e.setProgressState(1);i._sendRPC("learnWord",[i.selectedLang,t],function(t){e.setProgressState(0)})}});s.update()});o=n.getPos(e.getContentAreaContainer());s.settings.offset_x=o.x;s.settings.offset_y=o.y;e.selection.select(f);o=u.getPos(f);s.showMenu(o.x,o.y+f.offsetHeight-a.y);return tinymce.dom.Event.cancel(r)}s.hideMenu()},_checkDone:function(){var e=this,n=e.editor,r=n.dom,i;t(r.select("span"),function(e){if(e&&r.hasClass(e,"mceItemHiddenSpellWord")){i=!0;return!1}});i||e._done()},_done:function(){var e=this,t=e.active;if(e.active){e.active=0;e._removeWords();e._menu&&e._menu.hideMenu();t&&e.editor.nodeChanged()}},_sendRPC:function(t,n,r){var i=this;e.sendRPC({url:i.rpcUrl,method:t,params:n,success:r,error:function(e,t){i.editor.setProgressState(0);i.editor.windowManager.alert(e.errstr||"Error response: "+t.responseText)}})}});tinymce.PluginManager.add("spellchecker",tinymce.plugins.SpellcheckerPlugin)})();