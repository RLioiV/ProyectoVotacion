class Question {
    constructor(question, options, correctAnswer, userAnswer) {
      this.question = question;
      this.options = options;
      this.correctAnswer = correctAnswer;
      this.userAnswer = userAnswer;
    }
  
    isCorrectAnswer() {
      return this.userAnswer === this.correctAnswer;
    }
  }
  
  class Quiz {
    constructor(questions) {
      this.questions = questions;
    }
  
    askQuestions() {
      this.questions.forEach((question) => {
        console.log(question.question);
        const userAnswer = question.userAnswer;
        if (question.isCorrectAnswer()) {
          console.log("¡Correcto!");
        } else {
          console.log(`Incorrecto. La respuesta correcta es ${question.correctAnswer}`);
        }
      });
    }
  }
  
  const questions = [
    new Question("¿Cuál es la capital de Francia?", ["París", "Londres", "Roma"], "París", "París"),
    new Question("¿Cuál es la capital de Inglaterra?", ["Madrid", "Londres", "Berlín"], "Londres", "Berlín"),
    new Question("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Sevilla"], "Madrid", "Madrid"),
    new Question("¿Cuál es la capital de Italia?", ["Milán", "Roma", "Nápoles"], "Roma", "Milán"),
    new Question("¿Cuál es la capital de Alemania?", ["Hamburgo", "Berlín", "Múnich"], "Berlín", "Berlín"),
    new Question("¿Cuál es la capital de Rusia?", ["Moscú", "San Petersburgo", "Sochi"], "Moscú", "San Petersburgo"),
    new Question("¿Cuál es la capital de Japón?", ["Osaka", "Tokio", "Yokohama"], "Tokio", "Tokio"),
    new Question("¿Cuál es la capital de Australia?", ["Sydney", "Melbourne", "Canberra"], "Canberra", "Sydney"),
  ];
  
  const quiz = new Quiz(questions);
  quiz.askQuestions();
  