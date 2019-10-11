// 'use strict';
// var love = prompt('Is the last name of \"jumana\" is \"hawamdeh\"?')
//  love = love.toLowerCase();
// if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
//    alert('Great answer');
//  } else if (love == 'y') {
//     alert('Great answer');
//  } else if (love == 'no') {
//     alert('Oooh, wrong answer');
//  } else if (love == 'n') {
//   alert('Oooh, wrong answer');
//  }
//  else {
//     alert('Wrong answer, please enter \"yes\" OR \"no\"');
//  }
//  var love = prompt('Is jumana age 23 years?')
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
 function res (){

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

 }} res ();

 

for (i=0 ; i<4 ;i++ ){
   var tall = prompt (" guess what is my tall ?");
   if (tall>154 ){
      alert ("too high");
   } else if (tall<154){
      alert ("too low");
   }else if (tall==154){
      alert ("correct answer ")
      mark=mark +1
      break;
   }
   if (i==3){
      alert ("my tall is 154");
   }

   
}

var mark=0;
 var  child =  ['one', 'two', 'three', 'four','five','six']
 var childhood= prompt('How many child i want to have in future?  Use letters');
 for(var i = 0; i < child.length; i++)
 {
   switch(childhood)
   {
    case  'one':
    case  'two':
    case   'three':
    case  'four':
    case   'five':
    case  'six':
        alert('correct answer , keep guessing ');
         childhood= prompt('How many child i want to have in future?');
         mark= mark +1 ;
      break;
    default:
             childhood= prompt('How many child i want to have in future?');
             alert('Your answer wrong ,try again ');
             break;
   }
   alert( 'mark' +mark);
   }