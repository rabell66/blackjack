/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/
var totalHand=0;
var value;
var over=0

function handValue (hand) {
totalHand = 0;
over = 0
 for (let i=0;i<hand.length;i++){
  value = hand[i];
  
   
   if (value == "K" || value == "Q" || value =="J" ){
      totalHand = totalHand + 10;}
  else if(value =="A" && totalHand < 11){
      totalHand = totalHand +11
      over = 1
      }
  else if (value=="A"){
    totalHand = totalHand +1;
      }
  else (totalHand = totalHand + Number(value))
       
        



      }
     
      if (totalHand > 21 && over==1){
       totalHand = totalHand-10;
      
   }
    
    return totalHand ;  
}
  



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/