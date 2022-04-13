var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trouble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      //Confirm your player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye! ");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the player Attack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    //check enemys health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died! ");

      //award player for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players health by subracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining. "
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

// function to start a new game
var startGame = function () {
  //Reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  debugger;
  // fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }

    // ending the game
    var endGame = function () {
      window.alert("The game has now ended. Let's see how did!");
      //if player is till alive, player wins
      if (playerHealth > 0) {
        window.alert(
          "Great job, you've survived the game! You now have a score of " +
            playerMoney +
            "."
        );
      } else {
        window.alert("You've lost your robot in battle.");
      }
      // ask the player if they want to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");
      if (playAgainConfirm) {
        //restart the game
        startGame();
      } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
    };

    // start the game when the page loads
    // startGame();
  }
  fight();
  startGame();
  endGame();

  /* if the player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemys health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          " now has " +
          enemyHealth +
          " health remaining. "
      );

      check enemys health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left ");
      }

      

       check players health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left. "
        );
      }
     
      if no (false), ask question again by running fight() again
      else {
        fight();
      }
    } else {
      window.alert("You need to pick a valid optio. Try again!");
    }
  }
  /*for (var i = 0; i < enemyNames.length; i++) {
      debugger;
      fight(enemyNames[i]);
    }*/

  /*for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
};*/
};
