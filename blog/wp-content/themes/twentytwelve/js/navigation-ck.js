/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */(function(){var e=document.getElementById("site-navigation"),t,n;if(!e)return;t=e.getElementsByTagName("h3")[0];n=e.getElementsByTagName("ul")[0];if(!t)return;if(!n||!n.childNodes.length){t.style.display="none";return}t.onclick=function(){-1==n.className.indexOf("nav-menu")&&(n.className="nav-menu");if(-1!=t.className.indexOf("toggled-on")){t.className=t.className.replace(" toggled-on","");n.className=n.className.replace(" toggled-on","")}else{t.className+=" toggled-on";n.className+=" toggled-on"}}})();