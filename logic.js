
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}

var btn = document.getElementById("home");
var dropmodal = document.getElementById("homedropid");
btn.addEventListener('mouseover', function(){
  dropmodal.style.display = 'block';
})

window.addEventListener('click', function(){
 dropmodal.style.display = 'none';
})