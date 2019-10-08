 'use strict';
// var love = prompt('Is the last name of \"jumana\" is \"hawamdeh\"?')
// love = love.toLowerCase();
// if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
//    alert('Great answer');
// } else if (love == 'y') {
//    alert('Great answer');
// } else if (love == 'no') {
//    alert('Oooh, wrong answer');
// } else if (love == 'n') {
//    alert('Oooh, wrong answer');
// }
// else {
//    alert('Wrong answer, please enter \"yes\" OR \"no\"');
// }
// var love = prompt('Is jumana age 23 years?')
// love = love.toLowerCase();
// if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
//    alert('Great one, keep going');
// } else if (love == 'y') {
//    alert('Great one, keep going');
// } else if (love == 'no') {
//    alert('WHAT DID YOU SAY!, Do you think I am at the age of your father, Certainly wrong answer.');
// } else if (love == 'n') {
//    alert('WHAT DID YOU SAY!, Do you think I am at the age of your father, Certainly wrong answer.');
// }
// else {
//    alert('Wrong answer, please enter \"yes\" OR \"no\"');
// }
// var love = prompt('Has jumana studied at the ttu?')
// love = love.toLowerCase();
// if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
//    alert('Wow, Great answer');
// } else if (love == 'y') {
//    alert('Wow, Great answer');
// } else if (love == 'no') {
//    alert('thats rong ');
// } else if (love == 'n') {
//    alert('thats rong');
// }
// else {
//    alert('Wrong answer, please enter \"yes\" OR \"no\"');
// }
// var love = prompt('do you think jumana loves football?')
// love = love.toLowerCase();
// if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
//    alert('Oooh, wrong annswer, sorry about that!');
// } else if (love == 'y') {
//    alert('Oooh, wrong annswer, sorry about that!');
// } else if (love == 'no') {
//    alert('of course i dont' );
// } else if (love == 'n') {
//    alert('of course i dont');
// }
// else {
//    alert('Wrong answer, please enter \"yes\" OR \"no\"');
// }
// var love = prompt('do jumana love cooking ?')
// love = love.toLowerCase();
// if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
//    alert('Of course i do');
// } else if (love == 'y') {
//    alert('Of course i do');
// } else if (love == 'no') {
//    alert('Sorry about that, wrong answer');
// } else if (love == 'n') {
//    alert('Sorry about that, wrong answer');
// }
// else {
//    alert('Wrong answer, please enter \"yes\" OR \"no\"');
// }


var j = [
   [ 'is the last name of jumana is hawamdeh?',
   'Great answer',
     'Oooh, wrong answer'
   ],['is jumana age 23 years ?',
     'Great one, keep going',
     'WHAT DID YOU SAY!, Do you think I am at the age of your father, Certainly wrong answer.'
   ],[' has jumana studied at the ttu ?', 
   'Wow, Great answer',
   'thats rong'
   ],['do you think jumana loves football?',
   'Oooh, wrong annswer, sorry about that!',
   'of course i dont'
   ],['do jumana love cooking ',
   'Of course i do',
   'Sorry about that, wrong answer']
]

for ( var i=0; i<5; i++) {
   var currentj = j[i];
   var currentp = currentj[0];
   var responseReply = prompt (currentp);
   responseReply = responseReply.toLowerCase();
   var positive = currentj[1];
   var negative = currentj [2];


switch (responseReply) {
   case 'yes':
      case 'y':
      alert(positive);
        break;

        case 'no':
           case 'n':
              alert (negative);
              break;
              default:
                 alert ('nooooooooooo');


}

}

// for (let j = 0; j < 3; j++) {
//    var number = prompt('can you guess my height?');
//  if (number == 154) {
//    alert('correct answer, you got 1 point');
//    break;}
//   else if (number > 154) {
//    alert('too high');
//  }
//  else  (number < 154) {
//    alert('too short');

//  }
// }
var length = prompt ('can you guess my height ?');
for (let j=0 ; j<3 ; j++)
{
   if (length == 154){alert('correct answer , you got 1 point');}
else if (length > 154)
{alert(' high');}
else if (length < 154 )
{alert(' short');}
else
{alert('Correct answer ,you got 1 point');
    break;}
    length = prompt(' correct you guess my heigt thanks ... ');}

    var color = ['red', 'black', 'banana', 'blue', 'green', 'White'];
var userreplies = prompt('what is the color that i like ?');
userreplies = userreplies.toLowerCase();
for (var h = 0; h < color.length; h++){
switch (userreplies) {
   case 'red':
   case 'black':
   case 'blue':
   case 'green':
   case 'Yellow':
   case 'White':
       alert('correct answer ' );
       var userreplies = prompt('what is the  other color that i like ?');
       score++;
       break;
   default:
           alert('wrong answer');
           var userreplies = prompt('please reanswer the question?and choose from these choice (purple , blue , white, black, green, broun, red , orang ,grey)');
       }
}
alert('your score is '+ score)
alert('the color that i like  '+ color[0] + ' ,' + color[1] + ', ' + color[2] + ', ' + color[3] + ' ,' + color[4] + ' and ' + color[5]);
alert('Bye bye   ' + name + ', I hope that you enjoy visiting my site ');
console.log('name', name);
console.log('userreplay', userreply);
console.log('age', age);
console.log('userreplies)', userreplies);
// document.write('<h2>'+score+'</h2>')