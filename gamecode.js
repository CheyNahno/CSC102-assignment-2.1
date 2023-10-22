function playCraps() {
      /*this is a function to play craps in the game. html for craps, sum of 7 or 11 loses 
      , even or doubles wins, everything else is a push, Cheyenne Pointer Into to programming 10*/
      console.log("playCraps() started");
      // this will write to console log here saying it started
      var die1 = Math.ceil(Math.random() * 6);
      console.log("die1 result = " + die1);
      document.getElementById("die1Res").innerHTML = "die1 result = " + die1; 

      var die2 = Math.ceil(Math.random() * 6);
      console.log("die2 result = " + die2);
      document.getElementById("die2Res").innerHTML = "die2 result = " + die2; 

      var sum = die1 + die2;
      console.log("sum result = " + sum);
      document.getElementById("sumRes").innerHTML = "sum result = " + sum; 

      //check for 7 or 11 meaning loss 
      if (sum == 7 || sum == 11)  { 
        document.getElementById("gameRes").innerHTML = "You lost to the Andaconda!";
      } //check for doubles and even for the win 
      else if (die1 == die2  && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML =
         "Beat the Andaconda!Please press to play again.";
      } //did not win, did not lose so a push 
      else {
        document.getElementById("gameRes"). innerHTML = 
            "You did not win or lose, but really who wins anyway!";
      }
      }
