$("#new-dish").on("click", function(event) {
  event.preventDefault()
  $.get("/new-dish.json", function(newDish) {
    alert(newDish["dish"]); //callback function
  });
});
