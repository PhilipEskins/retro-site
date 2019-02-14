
function scrollWin(x, y) {
  window.scrollTo(x, y);
}

$(document).ready(function() {

  $(".homeLink").click(function(){
    scrollWin(0,0);
  });

  $(".nintendoLink").click(function(){
    scrollWin(0,190);
  });
});
