jQuery(document).ready(function(){jQuery(".akismet-status").each(function(){var e=jQuery(this).attr("commentid");jQuery(this).prependTo("#comment-"+e+" .column-comment div:first-child")});jQuery(".akismet-user-comment-count").each(function(){var e=jQuery(this).attr("commentid");jQuery(this).insertAfter("#comment-"+e+" .author strong:first").show()});jQuery('#the-comment-list tr.comment .column-author a[title ^= "http://"]').each(function(){var e=jQuery(this).attr("title");thisCommentId=jQuery(this).parents("tr:first").attr("id").split("-");jQuery(this).attr("id","author_comment_url_"+thisCommentId[1]);e&&jQuery(this).after(' <a href="#" class="remove_url" commentid="'+thisCommentId[1]+'" title="Remove this URL">x</a>')});jQuery(".remove_url").live("click",function(){var e=jQuery(this).attr("commentid"),t={action:"comment_author_deurl",_wpnonce:WPAkismet.comment_author_url_nonce,id:e};jQuery.ajax({url:ajaxurl,type:"POST",data:t,beforeSend:function(){jQuery("a[commentid='"+e+"']").hide();jQuery("#author_comment_url_"+e).html("<span>Removing...</span>")},success:function(t){t&&jQuery("#author_comment_url_"+e).attr("cid",e).addClass("akismet_undo_link_removal").html("<span>URL removed (</span>undo<span>)</span>")}});return!1});jQuery(".akismet_undo_link_removal").live("click",function(){var e=jQuery(this).attr("cid"),t=jQuery(this).attr("href").replace("http://www.","").replace("http://",""),n={action:"comment_author_reurl",_wpnonce:WPAkismet.comment_author_url_nonce,id:e,url:t};jQuery.ajax({url:ajaxurl,type:"POST",data:n,beforeSend:function(){jQuery("#author_comment_url_"+e).html("<span>Re-adding…</span>")},success:function(n){if(n){jQuery("a[commentid='"+e+"']").show();jQuery("#author_comment_url_"+e).removeClass("akismet_undo_link_removal").html(t)}}});return!1});jQuery('a[id^="author_comment_url"]').mouseover(function(){var e="https:"===location.protocol?"https://":"http://",t=jQuery(this).parent().width();t=jQuery(this).parent().find(".grav-hijack").length?t-42+"px":t+"px";if(jQuery(this).find(".mShot").length==0&&!jQuery(this).hasClass("akismet_undo_link_removal")){var n=jQuery(this).attr("id").replace("author_comment_url_","");jQuery(".widefat td").css("overflow","visible");jQuery(this).css("position","relative");var r=jQuery.URLEncode(jQuery(this).attr("href"));jQuery(this).append('<div class="mShot mshot-container" style="left: '+t+'"><div class="mshot-arrow"></div><img src="'+e+"s0.wordpress.com/mshots/v1/"+r+'?w=450" width="450" class="mshot-image_'+n+'" style="margin: 0;" /></div>');setTimeout(function(){jQuery(".mshot-image_"+n).attr("src",e+"s0.wordpress.com/mshots/v1/"+r+"?w=450&r=2")},6e3);setTimeout(function(){jQuery(".mshot-image_"+n).attr("src",e+"s0.wordpress.com/mshots/v1/"+r+"?w=450&r=3")},12e3)}else jQuery(this).find(".mShot").css("left",t).show()}).mouseout(function(){jQuery(this).find(".mShot").hide()})});jQuery.extend({URLEncode:function(e){var t="",n=0;e=e.toString();var r=/(^[a-zA-Z0-9_.]*)/;while(n<e.length){var i=r.exec(e.substr(n));if(i!=null&&i.length>1&&i[1]!=""){t+=i[1];n+=i[1].length}else{if(e[n]==" ")t+="+";else{var s=e.charCodeAt(n),o=s.toString(16);t+="%"+(o.length<2?"0":"")+o.toUpperCase()}n++}}return t}});jQuery(window).load(function(){var e="https:"===location.protocol?"https://":"http://";jQuery('a[id^="author_comment_url"]').each(function(){jQuery.get(e+"s0.wordpress.com/mshots/v1/"+jQuery.URLEncode(jQuery(this).attr("href"))+"?w=450")})});