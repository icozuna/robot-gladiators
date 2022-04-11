var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//Tou can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth'
enemyHealth = enemyHealth - playerAttack;

    //Log a result in gmessage to the console so we know that it worked
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
);

    //Subtract the value of 'enemyAttack' from the value of 'playerAttack' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know theat it worked.
console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


//check players health 
if (playerHealth <= 0) {
    Window.alert(playerName + " has died ");
}

else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}

console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining .");
}

//Check enemy's health
if (enemyHealth <=0) {
    window.alert(enemyName + " has died!")

}

else {
    window.alert(enemyName + " still has " + enemyHealth + " healtlh left");
}


fight();



// Note the lack of question marks around playerName

window.alert(playerName);


console.log(playerName);

console.log("this logs a string, good for leaving yourself a message");

//this will do math and log 20
console.log(10 + 10);

//what is this?
console.log("Our robot's name is " +  playerName);



// This creates a function called 'fight'
function fight() {
    window.alert("The fight had begun!");
}
//fight();