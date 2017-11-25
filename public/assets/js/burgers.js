// Wait for DOM to load.
$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    var devourState = {
      devoured: true
    };

    console.log(devourState);

    // Send the PUT request.
    $.ajax("/api/" + id, {
      type: "PUT",
      data: devourState
    }).then(
      function() {
        console.log("changed devoured to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#add-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var burgerDate = moment().format("YYYY-MM-DD HH:mm:ss");;

    var newBurger = {
      name: $("#new-burger").val().trim(),
      devoured: false,
      date: burgerDate
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
