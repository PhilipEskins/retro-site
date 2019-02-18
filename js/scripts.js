function hide() {
  $(".main").hide();
  $(".nintendo").hide();
}

$(document).ready(function() {

  $(".homeLink").click(function(){
    hide();
    $(".main").show();
  });

  $(".nintendoLink").click(function(){
    hide();
    $(".nintendo").show();
  });
});
