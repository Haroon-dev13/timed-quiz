var timerCount = 30;
// Attach event listener to document to listen for key event
document.addEventListener("click", function(event) {
    // If the count is zero, exit function
    if (timerCount === 0) {
      return;
    }
    var startScreen = document.querySelector(".start");
    var questions = document.querySelector("#questions");
    startScreen.classList.add("hide");
    questions.classList.remove("hide");
    // questions.children[0].textContent= questionsList[0];
    // console.log(questionsList);

    // console.log(questions)
  });