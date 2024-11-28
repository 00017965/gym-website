const questions = document.querySelectorAll(".qa");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    console.log('clicked');
    question.classList.toggle('active');
  });
});
