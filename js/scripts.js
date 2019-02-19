function hide() {
  $(".main").hide();
  $(".nintendo").hide();
  $(".sony").hide();
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

  $(".sonyLink").click(function(){
    hide();
    $(".sony").show();
  });
});
