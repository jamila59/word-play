$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var inputSentence = $("input#sentence").val();
    var splitSentence = inputSentence.split(' ');
    var threePlus = [];
  splitSentence.forEach(function(word){
    var newArray = word.split("");
    if (newArray.length >= 3) {
      threePlus.push(word);
      console.log("New array of long words: ", threePlus);
    };
  });
  });
});
