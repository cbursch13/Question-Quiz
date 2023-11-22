//A bank of questions in an array with object for the questions
var questions = [
    {
        title: "Which HTML attribute is used to define inline styles?",
        choices: ["class", "font", "style", "styles"],
        answer: "style"
    },
    {
        title: "Which property is used to create rounded corners for an element?",
        choices: ["border-style", "border-radius", "border-width ", "border-color "],
        answer: "style"
    },
    {
        title: "How do you select all <a> elements within an <div> element using CSS? ",
        choices: ["div + a", "a > div", "div a", "a div"],
        answer: "div a"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "Where do you source the JavaScript file in your html file",
        choices: ["side", "top", "inside", "bottom"],
        answer: "bottom"
    },
    {
        title: "What is the full form of the acronym CSS?",
        choices: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },

];


//Declared variables
var score = 0;
var questionIndex = 0;
var timer = document.querySelector("#startTime");
var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionsDiv");
var container = document.querySelector("#container");



//Seconds left is 10 seconds per question
var Secondsleft = 61;
//Interval start time
var Intervalstart = 0;
//Penalty for questions wrong
var penalty = 5;
//Create new element 
var ulCreate = document.createElement("ul");

//Start timer on start button click
timer.addEventListener("click", function () {
        if (Intervalstart === 0) {
        Intervalstart = setInterval(function () {
        Secondsleft--;
        currentTime.textContent = "Time Left: " + Secondsleft;

        if (Secondsleft<=0) {
            clearInterval(Intervalstart);
            allDone();
            currentTime.textContent = "Time's up!!!!";
         }
        }, 1000);
    }
    loadquestion(questionIndex);
});

//Loads question array to the questionsDiv
function loadquestion (questionIndex) {
//Clears existing data & start message
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
//Adds questions to html with for loop
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
//Adds question choices to html
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click",(compare));
         })
}
//Compares user event with correct question answer
function compare(event) {
    var element = event.target;
    
    if (element.matches("li")) {
         
        var createDiv = document.createElement("div");
         createDiv.setAttribute("id", "createDiv");

         if(element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;

         } else {
            Secondsleft = Secondsleft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
         }
            }

}

function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";}





