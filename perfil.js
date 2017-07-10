var count = 0;

$(".curtir").click(function() {
  count++;
  $(".curtir").html(count);
  $(this).off(event);
});
