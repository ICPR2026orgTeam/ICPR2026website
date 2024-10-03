var path = window.location.pathname;
var pagename = path.split("/").pop();
if (!pagename || 0 === pagename.length|| pagename=="tc18.org" || pagename=="www.tc18.org" || !pagename || 0 === pagename.length)
{
  pagename="index.html"; 
}
document.getElementById("footerSite").innerHTML = '  \
<hr /> \
<div class="footer"> \
<p><a href="index.html">ICPR 2026 webpage</a> \
You can contribute to the edition through the <a href="https://github.com/ICPR2026orgTeam/ICPR2026website">Github source page</a> and directly edit this page <a href="https://github.com/ICPR2026orgTeam/ICPR2026website/blob/main/'+pagename+'">here</a>. </p>\
</div> \
';

