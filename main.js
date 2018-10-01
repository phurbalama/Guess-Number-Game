var score =0;
function guess()
{
    //adds up score so the user have limited number of tries
    score++;
    var guessNumber=21; 
    //gets the value and stores it in userGuess variable
   var userGuess= document.getElementById("myText").value;
    //checks if the userguess is not a number or the value is not entered. and asks user to enter a Number
  if(isNaN(userGuess)||userGuess=='')
      {
           document.getElementById("para").innerHTML= "Please Enter a Number";
          score--;//keeps the score at the initial value 
          
      }
  
    //checks if the user has use all the tries and didnt guess the number correctly
    else if(score==10 && userGuess!=21)
         {
            console.log("Game Over");
         // document.getElementById("over").innerHTML = "Game Over";
             //pops images in the html through para id
        document.getElementById("para").innerHTML = "<img src='gameover.png'/>"
             //resets the scores to 0 for refresh
             score=0;
             document.getElementById("score").innerHTML=score;
            
        }
    //checks if user guess equals guess number and pops image of You win
   else if(userGuess==guessNumber)
        {
            console.log("You win ");
            document.getElementById("para").innerHTML = "<img src='youwin.jpg'/>"
            score=0;
            document.getElementById("score").innerHTML=score;
        }
    //less than condition
    else if(userGuess<guessNumber)
        {
            console.log("Your value is low");
             document.getElementById("para").innerHTML = "<img src='up.png'/>";
            document.getElementById("score").innerHTML=score;
        }
    //greater condition
    else if(userGuess>guessNumber)
        {
            console.log("Your Value is High");
             document.getElementById("para").innerHTML = "<img src='down.png'/>";
            document.getElementById("score").innerHTML=score;
        }
  
    //allows user to keep track of score in HTML
 
    console.log(score);
}