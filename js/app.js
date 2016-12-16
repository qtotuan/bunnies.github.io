$(".giphy").hide();
var input = window.prompt("Hi Wooly :) Please type in the secret password to view today's calendar gift. Hint: It is the German word for bosa (lower case).","Magic is happening");
console.log(input);


if (input === "kuss") {
  $(".giphy").show();
}
