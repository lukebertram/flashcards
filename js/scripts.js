$(document).ready(function() {
  $("#js-link").click(function() {
    $("#jquery-card").addClass("hidden");
    $("#attributes-card").addClass("hidden");
    $("#javascript-card").toggleClass("hidden");
  });




  $("#jquery-link").click(function() {
    $("#javascript-card").addClass("hidden");
    $("#attributes-card").addClass("hidden");
    $("#jquery-card").toggleClass("hidden");
  });



  $("#attrib-link").click(function() {
    $("#jquery-card").addClass("hidden");
    $("#javascript-card").addClass("hidden");
    $("#attributes-card").toggleClass("hidden");
  });
});


// addClass("showing") instead ?
// removeClass("visible")?
