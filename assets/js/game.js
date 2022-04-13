//function to generate a random numeric value
var randonNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
// fight function
var fight = function (enemy) {
  console.log(enemy);
  while (playerInfo.health > 0 && enemy.health > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      //Confirm your player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(
          playerInfo.name + " has decided to skip this fight. Goodbye! "
        );
        //subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    //generate random damage value based on players attack power
    var damage = randonNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    //check enemys health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died! ");

      //award player for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove players health by subracting the amount set in the enemy.attack variable
    var damage = randonNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining. "
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

// function to start a new game
var startGame = function () {
  //Reset player stats
  playerInfo.reset();

  // fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randonNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      //if were not the last enemy in array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        //ask player if they want to visit the shop
        var storeConfirm = window.confirm(
          "The fight is over, visit the shop before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  //after loop ends, er are either out of player health or enemies to fight, so run the endgame fucntion
  endGame();
};

// function to ending the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how did!");

  //if player is till alive, player wins
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
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

//goto the shop between battles function
var shop = function () {
  //ask the player whay theyd like to do
  var shopOptionPromt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  //use the swtich case to carry out above action
  switch (shopOptionPromt) {
    case "refill":
    case "REFILL":
      playerInfo.refillHealth();
      break;

    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
      break;

    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      //don nothing, so funcion will end

      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

var playerInfo = {
  name: window.prompt("What is your robots nam?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },

  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You dont have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You dont have enought money");
    }
  },
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randonNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randonNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randonNumber(10, 14),
  },
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]["attack"]);

// start the game when the page loads
startGame();
