let app;

fetch("data/csc223_all_questions.json")
  .then((res) => res.json())
  .then((quiz) => {
    const userResponseSkeleton = Array(quiz.questions.length).fill(null);

    app = new Vue({
      el: "#app",
      data: {
        quiz,
        questions: quiz.questions,
        questionIndex: 0,
        userResponses: userResponseSkeleton,
        quizStarted: false,
        showForm: false,
      },
      filters: {
        charIndex: function (i) {
          return String.fromCharCode(65 + i); // A, B, C...
        },
      },
      methods: {
        selectOption(index) {
          Vue.set(this.userResponses, this.questionIndex, index);
        },
        next() {
          if (this.questionIndex < this.quiz.questions.length) {
            this.questionIndex++;
          }
        },
        prev() {
          if (this.questionIndex > 0) {
            this.questionIndex--;
          }
        },
        score() {
          let score = 0;
          for (let i = 0; i < this.userResponses.length; i++) {
            const question = this.quiz.questions[i];
            const selectedIndex = this.userResponses[i];
            if (question.responses[selectedIndex] && question.responses[selectedIndex].correct) {
              score++;
            }
          }
          return score;
        },
      },
    });
  })
  .catch((err) => {
    console.error("Failed to load quiz JSON:", err);
  });
