

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


(function (arrayOfNames) {
  for (i = 0; i < arrayOfNames.length; i++) {
    var firstLetter = arrayOfNames[i][0].toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(arrayOfNames[i]);
    } else {
      helloSpeaker.speak(arrayOfNames[i]);
    }
  }
})(names);




