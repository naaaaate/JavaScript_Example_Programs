var message = '';
var student;
var match = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  // had to add += so it wouldnt overwrite Jody which is 2 users w same name..
  outputDiv.innerHTML += message;
}

function getStudentReport(student){
  report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  var studentSearch = prompt('Enter name of student u want to search for:');
  //check for user typing quit or nothing
  //null is if user enters nothing or no value
  //break out of loop if user types quit.. or null
  if (studentSearch === null || studentSearch.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    //make the current student in the loop equal to var student
    student = students[i];
    // check to see if current students name is equal to student user typed in search
    if (student.name === studentSearch) {
      match.push(student);
      alert(student.name);
    }
  }
  if (match.length >= 1) {
    for (var i=0; i < match.length; i+=1) {
      // if theres a match then call getstudentreport function on each element in the match array and pass in current student
        // had to change student.. to match[i] bc student was taking the last student in the students array which is Trish and passing her in and printing her info..
      message = getStudentReport(match[i]);

      // now print out the student to the html div
      print(message);

    }
  } else {
    alert('No Student Found');
  }
  // clear the match array bc its retaining search data and printing it again.
  match = [];
}


