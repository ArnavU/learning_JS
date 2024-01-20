const prompt = require("prompt-sync")({sigint: true});
/*
1-- snake
2-- water
3-- gun

(comp->1)  (p)          (comp->2) (p)           (comp->3) (p)
snake v snake(1) tie       water v snake snake     gun v snake  gun
snake v water(2) snake     water v water tie       gun v water  water
snake v gun(3)   gun       water v gun   water     gun v gun    tie
*/

console.log("1 for snake \n2 for water \n3 for gun\n");
let i = 3;
let win_count = 0;
let loose_count = 0;

while(i--){
    let computer = Math.floor((Math.random() * 3) + 1);
    let user;
    console.log("Chance no.", 3-i + "/3")
    user = prompt("Enter here: ");
    let compSWG;
    if(computer==1)
        compSWG = "Snake";
    else if(computer==2)
        compSWG = "Water";
    else    
        compSWG = "Gun";

    let userSWG;
    if(user==1)
        userSWG = "Snake";
    else if(user==2)
        userSWG = "Water";
    else    
        userSWG = "Gun";

    if((computer==1 && user==2) || (computer==2 && user==3) || (computer==3 && user==1)){
        console.log("Computer chose", compSWG, "\nYou chose", userSWG, "\nYou lost\n");
        loose_count++;
    }
    else if(computer==user){
        console.log("Computer chose", compSWG, "\nYou chose", userSWG, "\nTie\n")
    }
    else{
        console.log("Computer chose", compSWG, "\nYou chose", userSWG, "\nYou win\n")
        win_count++;
    }
}
if(win_count>loose_count){
    console.log("You won the game!!!!")
}
else if(win_count==loose_count){
    console.log("Its a tie...")
}
else{
    console.log("You lost...")
}
console.log("Wins = ", win_count, "\nLost = ", loose_count);