
var vowel = ["a","e","i","o","u"];

$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
       string =($("#inputString").val());

       var newStringArray = string.split("")
       
       if ("#inputString".charAt(0) === vowel) {
         $("#inputString").add();

       }

     });
});
