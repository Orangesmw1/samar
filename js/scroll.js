// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height= "90px";
    document.getElementById("navbar").style.background= "white";
    document.getElementById("navbar").style.width= "100%";
    document.getElementById("navbar").style.left= "0";
    document.getElementById("logo").style.margin= "0 200px 0 350px";

    document.getElementById("navbar").style.boxShadow= "0px 1px 40px 0px rgb(0 0 0 / 10%)";

    
  } else {
    document.getElementById("navbar").style.height= "130px";
    document.getElementById("navbar").style.background= "transparent";
    
    document.getElementById("navbar").style.boxShadow= "none";

  }
}