var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];

function print(message) {
  // notice we use getElementByID to target a div in the html by its ID
  var outputDiv = document.getElementById('output');
  // also we use the innherHTML PROPERTY to write to change the html we see on the page.
  outputDiv.innerHTML = message;
}

//this function will take an array: and put each element into a list item of an ordered list..of correct questions and incorrect questions
function buildList(arr) {
 var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

// cycle thru the questions array
for (var i = 0; i < questions.length; i += 1) {
  // assign the first question to question var
  question = questions[i][0];
  // assign first answer to answer var
  answer = questions[i][1];
  //ask question to user and get their response and assign it to var response
  // notice we are converting our response to a int then storing it in response
  response = parseInt(prompt(question));
  // test if their response for question 1 equals answer 1
  if (response === answer) {
    //if it is equal then increment answer correct count
    correctAnswers += 1;
    //add question u got correct to teh correct array
    correct.push(question);
  } else {
    //add ques u got wrong to the wrong array
    wrong.push(question);
  }
}

// printout correct answer count
html = "You got " + correctAnswers + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
// call build list to put all the correct questions array in an ordered list
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
// call build list to put all the wrong questions array in an ordered list
html += buildList(wrong);

// print it out to the div output..
print(html);








