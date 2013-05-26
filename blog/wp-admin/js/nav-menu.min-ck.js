var wpNavMenu;(function(e){var t=wpNavMenu={options:{menuItemDepthPerLevel:30,globalMaxDepth:11},menuList:undefined,targetList:undefined,menusChanged:!1,isRTL:"undefined"!=typeof isRtl&&!!isRtl,negateIfRTL:"undefined"!=typeof isRtl&&isRtl?-1:1,init:function(){t.menuList=e("#menu-to-edit");t.targetList=t.menuList;this.jQueryExtensions();this.attachMenuEditListeners();this.setupInputWithDefaultTitle();this.attachQuickSearchListeners();this.attachThemeLocationsListeners();this.attachTabsPanelListeners();this.attachUnsavedChangesListener();t.menuList.length&&this.initSortables();this.initToggles();this.initTabManager()},jQueryExtensions:function(){e.fn.extend({menuItemDepth:function(){var e=t.isRTL?this.eq(0).css("margin-right"):this.eq(0).css("margin-left");return t.pxToDepth(e&&-1!=e.indexOf("px")?e.slice(0,-2):0)},updateDepthClass:function(t,n){return this.each(function(){var r=e(this);n=n||r.menuItemDepth();e(this).removeClass("menu-item-depth-"+n).addClass("menu-item-depth-"+t)})},shiftDepthClass:function(t){return this.each(function(){var n=e(this),r=n.menuItemDepth();e(this).removeClass("menu-item-depth-"+r).addClass("menu-item-depth-"+(r+t))})},childMenuItems:function(){var t=e();this.each(function(){var n=e(this),r=n.menuItemDepth(),i=n.next();while(i.length&&i.menuItemDepth()>r){t=t.add(i);i=i.next()}});return t},updateParentMenuItemDBId:function(){return this.each(function(){var t=e(this),n=t.find(".menu-item-data-parent-id"),r=t.menuItemDepth(),i=t.prev();if(r==0)n.val(0);else{while(!i[0]||!i[0].className||-1==i[0].className.indexOf("menu-item")||i.menuItemDepth()!=r-1)i=i.prev();n.val(i.find(".menu-item-data-db-id").val())}})},hideAdvancedMenuItemFields:function(){return this.each(function(){var t=e(this);e(".hide-column-tog").not(":checked").each(function(){t.find(".field-"+e(this).val()).addClass("hidden-field")})})},addSelectedToMenu:function(n){return 0==e("#menu-to-edit").length?!1:this.each(function(){var r=e(this),i={},s=r.find(".tabs-panel-active .categorychecklist li input:checked"),o=new RegExp("menu-item\\[([^\\]]*)");n=n||t.addMenuItemToBottom;if(!s.length)return!1;r.find(".spinner").show();e(s).each(function(){var r=e(this),s=o.exec(r.attr("name")),u="undefined"==typeof s[1]?0:parseInt(s[1],10);this.className&&-1!=this.className.indexOf("add-to-top")&&(n=t.addMenuItemToTop);i[u]=r.closest("li").getItemData("add-menu-item",u)});t.addItemToMenu(i,n,function(){s.removeAttr("checked");r.find(".spinner").hide()})})},getItemData:function(e,t){e=e||"menu-item";var n={},r,i=["menu-item-db-id","menu-item-object-id","menu-item-object","menu-item-parent-id","menu-item-position","menu-item-type","menu-item-title","menu-item-url","menu-item-description","menu-item-attr-title","menu-item-target","menu-item-classes","menu-item-xfn"];!t&&e=="menu-item"&&(t=this.find(".menu-item-data-db-id").val());if(!t)return n;this.find("input").each(function(){var s;r=i.length;while(r--){e=="menu-item"?s=i[r]+"["+t+"]":e=="add-menu-item"&&(s="menu-item["+t+"]["+i[r]+"]");this.name&&s==this.name&&(n[i[r]]=this.value)}});return n},setItemData:function(t,n,r){n=n||"menu-item";!r&&n=="menu-item"&&(r=e(".menu-item-data-db-id",this).val());if(!r)return this;this.find("input").each(function(){var i=e(this),s;e.each(t,function(e,t){n=="menu-item"?s=e+"["+r+"]":n=="add-menu-item"&&(s="menu-item["+r+"]["+e+"]");s==i.attr("name")&&i.val(t)})});return this}})},initToggles:function(){postboxes.add_postbox_toggles("nav-menus");columns.useCheckboxesForHidden();columns.checked=function(t){e(".field-"+t).removeClass("hidden-field")};columns.unchecked=function(t){e(".field-"+t).addClass("hidden-field")};t.menuList.hideAdvancedMenuItemFields()},initSortables:function(){function g(e){var n;o=e.placeholder.prev();u=e.placeholder.next();o[0]==e.item[0]&&(o=o.prev());u[0]==e.item[0]&&(u=u.next());f=o.length?o.offset().top+o.height():0;l=u.length?u.offset().top+u.height()/3:0;i=u.length?u.menuItemDepth():0;o.length?s=(n=o.menuItemDepth()+1)>t.options.globalMaxDepth?t.options.globalMaxDepth:n:s=0}function y(e,t){e.placeholder.updateDepthClass(t,n);n=t}function w(){if(!d[0].className)return 0;var e=d[0].className.match(/menu-max-depth-(\d+)/);return e&&e[1]?parseInt(e[1]):0}function E(n){var r,i=m;if(n===0)return;if(n>0){r=v+n;r>m&&(i=r)}else if(n<0&&v==m)while(!e(".menu-item-depth-"+i,t.menuList).length&&i>0)i--;d.removeClass("menu-max-depth-"+m).addClass("menu-max-depth-"+i);m=i}var n=0,r,i,s,o,u,f,l,c,h,p=t.menuList.offset().left,d=e("body"),v,m=w();p+=t.isRTL?t.menuList.width():0;t.menuList.sortable({handle:".menu-item-handle",placeholder:"sortable-placeholder",start:function(n,i){var s,o,u,f,l;t.isRTL&&(i.item[0].style.right="auto");h=i.item.children(".menu-item-transport");r=i.item.menuItemDepth();y(i,r);u=i.item.next()[0]==i.placeholder[0]?i.item.next():i.item;f=u.childMenuItems();h.append(f);s=h.outerHeight();s+=s>0?i.placeholder.css("margin-top").slice(0,-2)*1:0;s+=i.helper.outerHeight();c=s;s-=2;i.placeholder.height(s);v=r;f.each(function(){var t=e(this).menuItemDepth();v=t>v?t:v});o=i.helper.find(".menu-item-handle").outerWidth();o+=t.depthToPx(v-r);o-=2;i.placeholder.width(o);l=i.placeholder.next();l.css("margin-top",c+"px");i.placeholder.detach();e(this).sortable("refresh");i.item.after(i.placeholder);l.css("margin-top",0);g(i)},stop:function(e,i){var s,o=n-r;s=h.children().insertAfter(i.item);if(o!=0){i.item.updateDepthClass(n);s.shiftDepthClass(o);E(o)}t.registerChange();i.item.updateParentMenuItemDBId();i.item[0].style.top=0;if(t.isRTL){i.item[0].style.left="auto";i.item[0].style.right=0}t.refreshMenuTabs(!0)},change:function(e,n){n.placeholder.parent().hasClass("menu")||(o.length?o.after(n.placeholder):t.menuList.prepend(n.placeholder));g(n)},sort:function(r,o){var h=o.helper.offset(),d=t.isRTL?h.left+o.helper.width():h.left,v=t.negateIfRTL*t.pxToDepth(d-p);v>s||h.top<f?v=s:v<i&&(v=i);v!=n&&y(o,v);if(l&&h.top+c>l){u.after(o.placeholder);g(o);e(this).sortable("refreshPositions")}}})},attachMenuEditListeners:function(){var t=this;e("#update-nav-menu").bind("click",function(e){if(e.target&&e.target.className){if(-1!=e.target.className.indexOf("item-edit"))return t.eventOnClickEditLink(e.target);if(-1!=e.target.className.indexOf("menu-save"))return t.eventOnClickMenuSave(e.target);if(-1!=e.target.className.indexOf("menu-delete"))return t.eventOnClickMenuDelete(e.target);if(-1!=e.target.className.indexOf("item-delete"))return t.eventOnClickMenuItemDelete(e.target);if(-1!=e.target.className.indexOf("item-cancel"))return t.eventOnClickCancelLink(e.target)}});e('#add-custom-links input[type="text"]').keypress(function(t){if(t.keyCode===13){t.preventDefault();e("#submit-customlinkdiv").click()}})},setupInputWithDefaultTitle:function(){var t="input-with-default-title";e("."+t).each(function(){var n=e(this),r=n.attr("title"),i=n.val();n.data(t,r);if(""==i)n.val(r);else{if(r==i)return;n.removeClass(t)}}).focus(function(){var n=e(this);n.val()==n.data(t)&&n.val("").removeClass(t)}).blur(function(){var n=e(this);""==n.val()&&n.addClass(t).val(n.data(t))})},attachThemeLocationsListeners:function(){var t=e("#nav-menu-theme-locations"),n={};n.action="menu-locations-save";n["menu-settings-column-nonce"]=e("#menu-settings-column-nonce").val();t.find('input[type="submit"]').click(function(){t.find("select").each(function(){n[this.name]=e(this).val()});t.find(".spinner").show();e.post(ajaxurl,n,function(e){t.find(".spinner").hide()});return!1})},attachQuickSearchListeners:function(){var n;e(".quick-search").keypress(function(r){var i=e(this);if(13==r.which){t.updateQuickSearchResults(i);return!1}n&&clearTimeout(n);n=setTimeout(function(){t.updateQuickSearchResults(i)},400)}).attr("autocomplete","off")},updateQuickSearchResults:function(n){var r,i,s=2,o=n.val();if(o.length<s)return;r=n.parents(".tabs-panel");i={action:"menu-quick-search","response-format":"markup",menu:e("#menu").val(),"menu-settings-column-nonce":e("#menu-settings-column-nonce").val(),q:o,type:n.attr("name")};e(".spinner",r).show();e.post(ajaxurl,i,function(e){t.processQuickSearchQueryResponse(e,i,r)})},addCustomLink:function(n){var r=e("#custom-menu-item-url").val(),i=e("#custom-menu-item-name").val();n=n||t.addMenuItemToBottom;if(""==r||"http://"==r)return!1;e(".customlinkdiv .spinner").show();this.addLinkToMenu(r,i,n,function(){e(".customlinkdiv .spinner").hide();e("#custom-menu-item-name").val("").blur();e("#custom-menu-item-url").val("http://")})},addLinkToMenu:function(e,n,r,i){r=r||t.addMenuItemToBottom;i=i||function(){};t.addItemToMenu({"-1":{"menu-item-type":"custom","menu-item-url":e,"menu-item-title":n}},r,i)},addItemToMenu:function(t,n,r){var i=e("#menu").val(),s=e("#menu-settings-column-nonce").val();n=n||function(){};r=r||function(){};params={action:"add-menu-item",menu:i,"menu-settings-column-nonce":s,"menu-item":t};e.post(ajaxurl,params,function(t){var i=e("#menu-instructions");n(t,params);!i.hasClass("menu-instructions-inactive")&&i.siblings().length&&i.addClass("menu-instructions-inactive");r()})},addMenuItemToBottom:function(n,r){e(n).hideAdvancedMenuItemFields().appendTo(t.targetList)},addMenuItemToTop:function(n,r){e(n).hideAdvancedMenuItemFields().prependTo(t.targetList)},attachUnsavedChangesListener:function(){e("#menu-management input, #menu-management select, #menu-management, #menu-management textarea").change(function(){t.registerChange()});0!=e("#menu-to-edit").length?window.onbeforeunload=function(){if(t.menusChanged)return navMenuL10n.saveAlert}:e("#menu-settings-column").find("input,select").prop("disabled",!0).end().find("a").attr("href","#").unbind("click")},registerChange:function(){t.menusChanged=!0},attachTabsPanelListeners:function(){e("#menu-settings-column").bind("click",function(n){var r,i,s,o,u=e(n.target);if(u.hasClass("nav-tab-link")){i=/#(.*)$/.exec(n.target.href);if(!i||!i[1])return!1;i=i[1];s=u.parents(".inside").first();e("input",s).removeAttr("checked");e(".tabs-panel-active",s).removeClass("tabs-panel-active").addClass("tabs-panel-inactive");e("#"+i,s).removeClass("tabs-panel-inactive").addClass("tabs-panel-active");e(".tabs",s).removeClass("tabs");u.parent().addClass("tabs");e(".quick-search",s).focus();return!1}if(u.hasClass("select-all")){r=/#(.*)$/.exec(n.target.href);if(r&&r[1]){o=e("#"+r[1]+" .tabs-panel-active .menu-item-title input");o.length===o.filter(":checked").length?o.removeAttr("checked"):o.prop("checked",!0);return!1}}else{if(u.hasClass("submit-add-to-menu")){t.registerChange();n.target.id&&"submit-customlinkdiv"==n.target.id?t.addCustomLink(t.addMenuItemToBottom):n.target.id&&-1!=n.target.id.indexOf("submit-")&&e("#"+n.target.id.replace(/submit-/,"")).addSelectedToMenu(t.addMenuItemToBottom);return!1}if(u.hasClass("page-numbers")){e.post(ajaxurl,n.target.href.replace(/.*\?/,"").replace(/action=([^&]*)/,"")+"&action=menu-get-metabox",function(t){if(-1==t.indexOf("replace-id"))return;var n=e.parseJSON(t),r=document.getElementById(n["replace-id"]),i=document.createElement("div"),s=document.createElement("div");if(!n.markup||!r)return;s.innerHTML=n.markup?n.markup:"";r.parentNode.insertBefore(i,r);i.parentNode.removeChild(r);i.parentNode.insertBefore(s,i);i.parentNode.removeChild(i)});return!1}}})},initTabManager:function(){var n=e(".nav-tabs-wrapper"),r=n.children(".nav-tabs"),i=r.children(".nav-tab-active"),s=r.children(".nav-tab"),o=0,u,f,l,c,h,p={},d=t.isRTL?"margin-right":"margin-left",v=t.isRTL?"margin-left":"margin-right",m=2;t.refreshMenuTabs=function(e){var t=n.width(),a=0,h={};f=n.offset().left;u=f+t;e||i.makeTabVisible();if(s.last().isTabVisible()){a=n.width()-o;a=a>0?0:a;h[d]=a+"px";r.animate(h,100,"linear")}t>o?l.add(c).hide():l.add(c).show()};e.fn.extend({makeTabVisible:function(){var e=this.eq(0),n,i,s={},o=0;if(!e.length)return this;n=e.offset().left;i=n+e.outerWidth();i>u?o=u-i:n<f&&(o=f-n);if(!o)return this;s[d]="+="+t.negateIfRTL*o+"px";r.animate(s,Math.abs(o)*m,"linear");return this},isTabVisible:function(){var e=this.eq(0),t=e.offset().left,n=t+e.outerWidth();return n<=u&&t>=f?!0:!1}});s.each(function(){o+=e(this).outerWidth(!0)});p.padding=0;p[v]=-1*o+"px";r.css(p);l=e('<div class="nav-tabs-arrow nav-tabs-arrow-left"><a>&laquo;</a></div>');c=e('<div class="nav-tabs-arrow nav-tabs-arrow-right"><a>&raquo;</a></div>');n.wrap('<div class="nav-tabs-nav"/>').parent().prepend(l).append(c);t.refreshMenuTabs();e(window).resize(function(){h&&clearTimeout(h);h=setTimeout(t.refreshMenuTabs,200)});e.each([{arrow:l,next:"next",last:"first",operator:"+="},{arrow:c,next:"prev",last:"last",operator:"-="}],function(){var e=this;this.arrow.mousedown(function(){var t=Math.abs(parseInt(r.css(d))),i=t,s={};"-="==e.operator&&(i=Math.abs(o-n.width())-t);if(!i)return;s[d]=e.operator+i+"px";r.animate(s,i*m,"linear")}).mouseup(function(){var t,n;r.stop(!0);t=s[e.last]();while((n=t[e.next]())&&n.length&&!n.isTabVisible())t=n;t.makeTabVisible()})})},eventOnClickEditLink:function(t){var n,r,i=/#(.*)$/.exec(t.href);if(i&&i[1]){n=e("#"+i[1]);r=n.parent();if(0!=r.length){if(r.hasClass("menu-item-edit-inactive")){n.data("menu-item-data")||n.data("menu-item-data",n.getItemData());n.slideDown("fast");r.removeClass("menu-item-edit-inactive").addClass("menu-item-edit-active")}else{n.slideUp("fast");r.removeClass("menu-item-edit-active").addClass("menu-item-edit-inactive")}return!1}}},eventOnClickCancelLink:function(t){var n=e(t).closest(".menu-item-settings");n.setItemData(n.data("menu-item-data"));return!1},eventOnClickMenuSave:function(n){var r="",i=e("#menu-name"),s=i.val();if(!s||s==i.attr("title")||!s.replace(/\s+/,"")){i.parent().addClass("form-invalid");return!1}e("#nav-menu-theme-locations select").each(function(){r+='<input type="hidden" name="'+this.name+'" value="'+e(this).val()+'" />'});e("#update-nav-menu").append(r);t.menuList.find(".menu-item-data-position").val(function(e){return e+1});window.onbeforeunload=null;return!0},eventOnClickMenuDelete:function(e){if(confirm(navMenuL10n.warnDeleteMenu)){window.onbeforeunload=null;return!0}return!1},eventOnClickMenuItemDelete:function(n){var r=parseInt(n.id.replace("delete-",""),10);t.removeMenuItem(e("#menu-item-"+r));t.registerChange();return!1},processQuickSearchQueryResponse:function(t,n,r){var i,s,o={},u=document.getElementById("nav-menu-meta"),a=new RegExp("menu-item\\[([^\\]]*)","g"),f=e("<div>").html(t).find("li"),l;if(!f.length){e(".categorychecklist",r).html("<li><p>"+navMenuL10n.noResultsFound+"</p></li>");e(".spinner",r).hide();return}f.each(function(){l=e(this);i=a.exec(l.html());if(i&&i[1]){s=i[1];while(u.elements["menu-item["+s+"][menu-item-type]"]||o[s])s--;o[s]=!0;s!=i[1]&&l.html(l.html().replace(new RegExp("menu-item\\["+i[1]+"\\]","g"),"menu-item["+s+"]"))}});e(".categorychecklist",r).html(f);e(".spinner",r).hide()},removeMenuItem:function(t){var n=t.childMenuItems();t.addClass("deleting").animate({opacity:0,height:0},350,function(){var r=e("#menu-instructions");t.remove();n.shiftDepthClass(-1).updateParentMenuItemDBId();r.siblings().length||r.removeClass("menu-instructions-inactive")})},depthToPx:function(e){return e*t.options.menuItemDepthPerLevel},pxToDepth:function(e){return Math.floor(e/t.options.menuItemDepthPerLevel)}};e(document).ready(function(){wpNavMenu.init()})})(jQuery);