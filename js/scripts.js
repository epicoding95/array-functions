  function convertToRoman(num) {

    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {

      var q = Math.floor(num / roman[i]);

      num -= q * roman[i];
      
      str += i.repeat(q);
    }

    return str;
  }





$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var output = convertToRoman (parseInt($("input#number").val()));
    $("#output").text(output);
  });
});


//
// $(function(){
//   $("form").submit(function(event) {
//     event.preventDefault();
// //     string =parseInt($("#number").val()).split();
// //     // if{ userInput.length == 1){
// //     //   isOnes(userInput)
// //     //
// //     // }
//

//
//
//
//
//     $("#output").text("This is your number in roman numeral:");
//
//
//
//
//
//
//
//
//
//      });
// });

// function translate(string) {
//   var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];
//   var inputArray = string.split(' ');
//   inputArray = inputArray.map(function(input) {
//     var consonantCluster = ['-'];
//     var singleWord = input.split('');
//     if(!/[aeiouAEIOU]/.test(input)) {
//       return input;
//     }
//     if(singleWord[0] === 'y') {
//       consonantCluster.push(singleWord.shift());
//     } else while(!vowels.includes(singleWord[0])) {
//       if(singleWord[0] === 'q' && singleWord[1] === 'u') {
//         consonantCluster.push(singleWord.shift());
//         consonantCluster.push(singleWord.shift());
//       } else {
//         consonantCluster.push(singleWord.shift());
//       }
//     }
//     input = singleWord.join('') + consonantCluster.join('');
//     return input.concat('ay');
//   });
//   return inputArray.join(' ');
// }
//
//
// $().ready(function() {
//   $('form#pigLatin').submit(function(event) {
//     event.preventDefault();
//     var userInput = $('#string').val();
//     var result = translate(userInput);
//     $('#result p').text(result);
//   })
