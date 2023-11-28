//A bank of questions in an array with object for the questions
var questions = [
    {
        title: "Which HTML attribute is used to define inline styles?",
        choices: ["class", "font", "style", "styles"],
        answer:2
    },
    {
        title: "Which property is used to create rounded corners for an element?",
        choices: ["border-style", "border-radius", "border-width ", "border-color "],
        answer:1
    },
    {
        title: "How do you select all <a> elements within an <div> element using CSS? ",
        choices: ["div + a", "a > div", "div a", "a div"],
        answer:2
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer:2
    },
    {
        title: "Where do you source the JavaScript file in your html file",
        choices: ["side", "top", "inside", "bottom"],
        answer:3
    },
    {
        title: "What is the full form of the acronym CSS?",
        choices: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        answer:1
    },

];


//Declared variables
var score = 0;
var questionIndex = -1;
var container = document.querySelector("#container");
var timer = document.querySelector("#startTime");
var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionsDiv");




//Seconds left is 10 seconds per question
var Secondsleft = 61;
//Interval start time
var Intervalstart = 0;
//Penalty for questions wrong
var penalty = 10;
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
            clrPage();
            currentTime.textContent = "Time's up!!!!";
         }
        }, 1000);
    }
    loadquestion(questionIndex);
})

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
    userChoices.forEach(function (newItem, idx) {
        var listItem = document.createElement("button");
        listItem.textContent = newItem;
        listItem.setAttribute('data-choice', idx);
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compareAnswer));
        })
        
}

//Compares user choice with correct answer
function compareAnswer(event) {
    var selectedChoice = event.target.getAttribute('data-choice');
    console.log(selectedChoice);
    
    if (selectedChoice = "button") {        
        q = questions[questionIndex];
        var createDiv = document.createElement("div");
         createDiv.setAttribute("id", "createDiv");
         createDiv.textContent = '';
         questionsDiv.appendChild(createDiv);
                  
         if (selectedChoice === q.answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + q.choices[q.answer];
         } else {
             Secondsleft = Secondsleft - penalty;
             createDiv.textContent = "Wrong! The correct answer is:  " + q.choices[q.answer];
        }
    }
}
  
questionIndex++;

// Clears html content from page
function clrPage() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";
}

// //Clears html content and show score & # of questions correct on screen
//     if (questionIndex <= questions.length) {
//         clrPage();
//         createDiv.textContent = "End of Coding Question Quiz Challenge!!" + " " + "You got " + score + " points!!" + "&" + questions.length + " Questions Correct!";
//     } else {
//         loadquestion(questionIndex);
//         };
//     questionsDiv.appendChild(createDiv);

//     //Clears score message from html & appends new message to html
//     function clrPage() {
//         questionsDiv.innerHTML = "";
//         currentTime.innerHTML = "";

//     var newH1 = document.createElement("h1");
//     newH1.setAttribute("id", "newH1");
//     newH1.textContent = "Quiz Complete!!";

//     questionsDiv.appendChild(newH1);

//     var newP = document.createElement("p");
//     newP.setAttribute("id", "newP");

//     questionsDiv.appendChild(newP);

//     if (Secondsleft >= 0) {
//         var timeRemaining = Secondsleft;
//         var newP2 = document.createElement("p");
//         clearInterval(Intervalstart);
//         newP2.textContent = "Your final score is: " + timeRemaining;
        
//         questionsDiv.appendChild(newP2);
//     }
//     //New Score Label
//     var newLabel = document.createElement("label");
//     newLabel.setAttribute("id", "newLabel");
//     newLabel.textContent = "Enter your Initials: ";

//     questionsDiv.appendChild(newLabel);

//     //New Score Input
//     var newInput = document.createElement("input");
//     newInput.setAttribute("type", "text");
//     newInput.setAttribute("id", "initials");
//     newInput.textContent = "";

//     questionsDiv.appendChild(newInput);

//     //New Score Submit
//     var newSubmit = document.createElement("button");
//     newSubmit.setAttribute("type", "submit");
//     newSubmit.setAttribute("id", "Submit");
//     newSubmit.textContent = "Submit";

//     questionsDiv.appendChild(newSubmit);
//     //Event listener on click for submit score button
//     newSubmit.addEventListener("click"), function () {
//         var initials = newInput.value;

//         if (initials === null) {
//             console.log ("No value submitted!");
        
//         } else {
//             var finalScore = {
//                 initials: initials,
//                 score: timeRemaining
//             }
//             console.log(finalScore);
//             var allScores = localStorage.getItem("allScores");
//             if (allScores === null){
//                 allScores = [];
//             } else {
//                 allScores = JSON.parse(allScores);
//             }
//             allScores.push(finalScore);
//             var newScore = JSON.stringify(allScores);
//             localStorage.setItem("allScores", newScore);

//             window.location.replace("./HighScores.html");
//         }}}
