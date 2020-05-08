// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function(window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i in names) {
  var firstLetter = (names[i].toLowerCase()).charAt(0);
  
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
    // byeSpeaker.xxxx
  } else {
    helloSpeaker.speak(names[i]);
    // helloSpeaker.xxxx
  }
}


})(window);




