let buttonsubmit = document.querySelector(".button-submit");
buttonsubmit.disabled = true;

// Rating Buttons Behaviour
$(".rb-tab").click(function() {

  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});

$(".rb-spot").click(function() {
  //Spot switcher:
  buttonsubmit.disabled = false;
  moveCount = $(this).find('span.rb-txt').html();
  $('span#your-rating').html("You selected " + moveCount + " out of 5");
});

$(".rb-spot").mouseenter(function() {
  //Spot switcher:
  $(this).addClass("rb-tab-hover");
});

$(".rb-spot").mouseleave(function() {
  //Spot switcher:
  $(this).parent().find(".rb-spot").removeClass("rb-tab-hover");
});

$(".button-submit").click(function() {

  $(".button-submit").css("background-color", "white");
  $(".button-submit").css("color", "hsl(25, 97%, 53%)");
  $(".container").css("display", "none");
  $(".container2").css("display", "inherit");
});
