$(document).ready(function() {
  $("form#character").submit(function(event) {
    event.preventDefault();
    const wolverine = parseInt($("input:radio[name=sideburns]:checked").val());
    const wizard = $("input#wand").val();

    if (wolverine === 1) {
      console.log("HELLO");
      $("#xmen").show();
    }
});