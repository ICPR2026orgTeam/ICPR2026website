var path = window.location.pathname;
var pagename = path.split("/").pop();
if (!pagename || 0 === pagename.length|| pagename=="icpr2026.org" || pagename=="www.icpr2026.org" || !pagename || 0 === pagename.length)
{
  pagename="index.html"; 
}
document.getElementById("footerSite").innerHTML = '  \
<hr /> \
<div class="footer"> \
</div> \
';

