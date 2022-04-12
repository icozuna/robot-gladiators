var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trouble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy robots
//  *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

// fight function
var fight = function (enemyName) {
  //Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  // if the player chooses to fight, then fight
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

    //check enemys health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died! ");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left ");
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

    // check players health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died! ");
    } else {
      window.alert(
        playerName + " still has " + playerHealth + " health left. "
      );
    }
    // if player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //Confirm your player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye! ");
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again
    else {
      fight();
    }
  } else {
    window.alert("You need to pick a valid optio. Try again!");
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
