// ==UserScript==
// @name     Stereoanlage
// @version  1
// @grant    none
// ==/UserScript==

//--- Note that content search is case-sensitive.
var links = document.querySelectorAll("a[href$='.mp3'], a[href*='.mp3?'], a[href$='.m3u'], a[href*='.m3u?']");

for (var i = links.length-1;  i >= 0; --i) { 
    var thisLink            = links[i]; 
    var newElement          = document.createElement("span");
    newURL                  = 'http://192.168.42.23/?playurl=' + encodeURIComponent(thisLink.href);
    newElement.innerHTML    = '&nbsp;<a title="Auf der Stereoanlage abspielen" href="' + newURL + '" target="_blank" style="background-color: #fff; border: 2px solid #999; padding: 7px 9px; border-radius: 50%; box-shadow: 5px 10px 18px #888888; font: 20px Arial, Helvetica, sans-serif;">📻</a>';

    InsertNodeAfter (newElement, thisLink);
}

function InsertNodeAfter (newElement, targetElement) {
    var parent  = targetElement.parentNode;
    if (parent.lastChild == targetElement)
        parent.appendChild  (newElement);
    else
        parent.insertBefore (newElement, targetElement.nextSibling);
}
