var quiz = {
  user: "",
  questions: [
    {
      text: "A statement which is said to be either true or false is called a...",
      responses: [
        { text: "equilogue" },
        { text: "sentence" },
        { text: "Logical statement" },
        { text: "proposition", correct: true }
      ]
    },
    {
      text: "Determine if the statements below are Logical Equivalent\n\nStatement A: you can enter the club only if you have a membership card\nStatement B: if you do not have a membership card, then you cannot enter the club…",
      responses: [
        { text: "Logical Equivalent", correct: true },
        { text: "Not Logical equivalent" }
      ]
    },
    {
      text: "Statement A: you will pass the Exam if and only if you Study hard\nStatement B: if you pass the Exam, then you studied hard, and if you study hard, then you will pass the Exam.",
      responses: [
        { text: "Logical Equivalent", correct: true },
        { text: "Not Logical equivalent" }
      ]
    },
    {
      text: "Statement A: If you eat vegetable, you will be healthy\nStatement B: if you are healthy, then you eat Vegetables.",
      responses: [
        { text: "Logical equivalent" },
        { text: "Not Logical Equivalent", correct: true }
      ]
    },
    {
      text: "Determine if the following Logical Expression follows deduction rule.\nP → q\nP\n= q",
      responses: [
        { text: "True", correct: true },
        { text: "False" }
      ]
    },
    {
      text: "(P → q) ∧ (¬P → ¬q)\n¬q\n¬p",
      responses: [
        { text: "True", correct: true },
        { text: "False" }
      ]
    },
    {
      text: "p → q\nq → r\np → r",
      responses: [
        { text: "True", correct: true },
        { text: "False" }
      ]
    },
    {
      text: "p ∨ q\n¬p\nq",
      responses: [
        { text: "True", correct: true },
        { text: "False" }
      ]
    },
    {
      text: "Premise 1: If all students submit their homework, the teacher will give extra credit\nPremise 2: All Students submitted their homework.\nConclusion: The teacher will not give extra credit",
      responses: [
        { text: "True" },
        { text: "False", correct: true }
      ]
    },
    {
      text: "Premise 1: If the Committee approves the proposal, the project will start next month.\nPremise 2: The project will not start next month\nConclusion: Committee did not approve the proposal",
      responses: [
        { text: "True", correct: true },
        { text: "False" }
      ]
    }
  ]
};

if (typeof module !== "undefined") {
  module.exports = quiz;
}

// Landing page logic
window.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="start-screen">
      <h1>Welcome to the CSC 223 Quiz</h1>
      <input type="text" id="username" placeholder="Enter your name" />
      <button id="startQuiz">Start Quiz</button>
    </div>
  `;

  document.getElementById("startQuiz").addEventListener("click", function () {
    const nameInput = document.getElementById("username").value.trim();
    if (!nameInput) return alert("Please enter your name to start the quiz.");
    localStorage.setItem("quizUser", nameInput);
    window.location.href = "quiz.html";
  });
});
