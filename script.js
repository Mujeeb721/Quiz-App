const quizData = [
    {
        question: "Who is the father of HTML?",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "HyperLoop Markup Language",
        d: "Helicopter Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "When was JavaScript launched?",
        a: "1995",
        b: "1996",
        c: "1997",
        d: "1998",
        correct: "a",
    },
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "Java",
        c: "HTML",
        d: "C++",
        correct: "c",
    },
    {
        question: "What does JSON stand for?",
        a: "JavaScript Object Notation",
        b: "JavaScript Online Notation",
        c: "JavaScript Object Native",
        d: "JavaScript Object Network",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = `Question ${currentQuiz + 1}: ${currentQuizData.question}`;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Play Again</button>`;
        }
    }
});
