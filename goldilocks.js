// tollbooth.js
// Matches https://docs.google.com/spreadsheets/d/1eu_ymKNlnSQUzi6JfSyOwWewXX2fybDIw2YZfzhWIic/edit
scene1 = Goldilocks;
var roll = 0;
var rollcount = 0;
function checkAnswers(answer) {  // Matches Scenes  - replace with yours
    if (answer == "Ignore cabin") {
        crapsSetup();
        ignoreCabin();
    } 
    
    else if (answer == "Go to the cabin") {
        cabin();
    } 
    else if (answer == "Go back home") {
        homeEnding();
    } 
    
    else if (answer == "Play again") {
        Goldilocks();
    } 
    
    else if (answer == "Eat the small porridge") {
        crapsSetup();
        smallPorridge();
    } 
    
    else if (answer == "Eat the medium porridge") {
        meduimPorridge();
    }
    else if (answer == "Eat the large porridge") {
        crapsSetup();
        largePorridge();
    }
    
    else if (answer == "Keep running errands") {
        hospitalEnding();
    }
    else if (answer == "Go back to the cabin") {
        cabin();
    }
    else if (answer == "Sleep in the small bed") {
        smallBed();
    }
    else if (answer == "Sleep in the medium bed") {
        eatenEnding();
    }
    else if (answer == "Sleep in the large bed") {
        largeBed();
    }
    else if (answer == "Stay awake") {
        safeEnding();
    }
}

function removeMap(){
    document.getElementById('border').classList.remove('hide');
}

//1.1 Opening Scene
function Goldilocks() {
  story("One day you're sent out to run errands in the woods, it starts pouring rain and you come across a small cabin that youve never seen before, that smells like freshly baked porridge.");
    choices = ["Ignore cabin","Go to the cabin","Go back home"];
    image.src = "cabin.jpg";
    answer = setOptions(choices);
}

//1.2 Ignore Cabin
function ignoreCabin() {
    story("You ignore the cabin and try to continue, but the weather starts to get even worse. You start to see lightning strike nearby, and are forced to make another decision."); 
    choices = ["Keep running errands","Go back to the cabin","Go back home"];
    image.src = "thunderstorm.jpg"; 
    answer = setOptions(choices);
}

// 1.3 cabin
function homeEnding() {
    story("Although a little wet, you make it home safely. You tell your mother about the strange cabin in the woods, and she says she's never seen it before. You go back to take a picture of the cabin the day after, and once you get to the spot it had been, you find it's not there. Your mother tells you there was never a cabin."); 
    choices = ["Play again"];
    image.src  = "house-storm.jpg";
    answer = setOptions(choices);
}

// 1.4 Discover Tollbooth
function cabin() {
  story("You go inside the cabin and find no one home. You find 3 bowls of porridge waiting for you on the table, and you feel extremely hungry. One is small and mildly cold, one is medium sized and warm, and one is large and hot.");
    choices = ["Eat the small porridge", "Eat the medium porridge", "Eat the large porridge"];
    image.src = "porridge.jpg";
    answer = setOptions(choices);
}

// 1.5 Wild Nightmares
function hospitalEnding() {
    story("You try to keep running your errands, but you end up getting struck by lighning. You end up surviving, but you wake up in a hospital and forget all about the cabin in the woods.");
    choices = ["Play again"];
    image.src = "lightningstruck.jpg"
    answer = setOptions(choices);
}

// 1.6 Mom Can't See It
function smallPorridge() {
    story("The small porridge, although it tasted very good, it was much too cold for your liking. After eating, you now become very tired. You find 3 beds in the room next door; a small one, a medium sized one, and a large one.  ");
    choices = ["Sleep in the small bed","Sleep in the medium bed","Sleep in the large bed"];
    image.src = "beds.jpg"
    answer = setOptions(choices);
}

// 1.7 Call the Bomb Squad
function meduimPorridge() {
    story("The medium porridge was perfect. It tasted great and was the perfect temperature. After eating, you now become very tired. You find 3 beds in the room next door; a small one, a medium sized one, and a large one.  ");
    choices = ["Sleep in the small bed","Sleep in the medium bed","Sleep in the large bed"];
    image.src = "beds.jpg"
    answer = setOptions(choices);
}

// 1.8 Check Return Address
function largePorridge() {
    story("The large porridge was too hot for your liking, it tasted good, but you burned your mouth in the process. After eating, you now become very tired. You find 3 beds in the room next door; a small one, a medium sized one, and a large one.  ");
    image.src = "beds.jpg"
    choices = ["Sleep in the small bed","Sleep in the medium bed","Sleep in the large bed"];
    answer = setOptions(choices);
}

// // 1.9 Unpack Tollbooth
function smallBed() {
    story("You try sleeping in the small bed, but its too soft for your liking and it feels as if you sink into the bed whenevr you lay down. You can't fall asleep."); 
    choices = ["Sleep in the medium bed","Sleep in the large bed","Stay awake"];
    image.src = "cantsleep.jpg"
    answer = setOptions(choices);
}

// 1.10 Enter Kingdom of Wisdom
function eatenEnding() { 
  story("You fall asleep very easily in the medium bed, it was perfectly soft enough and just the right size. When you wake up you hear something entering the cabin, and upon investigation you find three bears, a mom, a dad, and a son. They were angry that you tresspassed into their cabin and ate their porridge. You were never found again.");
    choices = ["Play again"];
    image.src = "eaten.jpg"
    answer = setOptions(choices);
}

// 1.10 Enter Kingdom of Wisdom
function largeBed() { 
    story("You try sleeping in the big bed but its too hard for your liking, it feels like sleeping on a wooden board. You can't fall asleep.");
    choices = ["Sleep in the small bed","Sleep in the medium bed","Stay awake"];
    image.src = "cantsleep.jpg"
    answer = setOptions(choices);
  }

  // 1.10 Enter Kingdom of Wisdom
function safeEnding() { 
    story("You wait for the storm to pass. After it stops raining you go back home, and will resume running errands tommorow.");
      choices = ["Play again"];
      image.src = "sunny.jpg"
      answer = setOptions(choices);
  }

function crapsSetup(){
    let popup =  document.getElementById("popup");
    popup.innerHTML = "";
    popup.style.display = "block";
    let dialogue = document.createElement("p");
    dialogue.id = "dialogue";
    popup.appendChild(dialogue);
    diceGame();
}
function diceGame(){
    let dialogue = document.getElementById("dialogue");
    let message= " <p>Play craps to continue with your story. <br>Roll your come-out. <br>Don\'t crap out with a 7 or 11!</p>";
    dialogue.innerHTML = message;
    let rollCraps = document.createElement("button");
        rollCraps.id = "rollCraps";
        rollCraps.addEventListener("click",firstRoll);
        rollCraps.addEventListener("click",rollCraps.remove);
        rollCraps.innerHTML = "Roll come out.";
        popup.appendChild(rollCraps);
}

function firstRoll(){
    let dialogue = document.getElementById("dialogue");
    let rollCraps = document.getElementById("rollCraps");
    let newRound = document.getElementById("newRound");
    if (dialogue = document.getElementById("dialogue")){
        dialogue.innerHTML = "";
    }
    if (rollCraps = document.getElementById("rollCraps")){
        rollCraps.remove();
    }
    if (newRound = document.getElementById("newRound")){
        newRound.remove();
    }
    let diceOne = rollDie();
    let diceTwo = rollDie();
    let target = diceOne + diceTwo;
    rollcount++;
    console.log("diceGameCount = "+rollcount);
    if(target == 7 || target == 11){
        message = "<p>You crapped out! Try again.</p>";
        dialogue.innerHTML = message;
        newRound = document.createElement("button");
        newRound.id = "newRound";
        newRound.innerHTML = "New Round";
        newRound.addEventListener("click",crapsSetup);
        popup.appendChild(newRound);
    }
    else {
        dialogue = document.getElementById("dialogue");
        message = "Your come-out role was <strong>"+target+"</strong>.<br> Roll "+target+" again before you roll 7 or 11<br> to continue with the story.";
        dialogue.innerHTML = message;
        popup.appendChild(dialogue);
        rollCraps = document.createElement("button");
        rollCraps.addEventListener("click",rollAgain);
        rollCraps.id = "rollCraps";
        rollCraps.innerHTML = "Roll";
        popup.appendChild(rollCraps);
    }

    function rollAgain(){
        let reroll = document.getElementById("reroll");
        let wonCraps = document.getElementById("wonCraps");
        let rollCraps = document.getElementById("rollCraps");
        let dialogue = document.getElementById("dialogue");
        let newRound = document.getElementById("newRound");
        let roll = 0;
        if (rollCraps = document.getElementById("rollCraps")){
            rollCraps.remove();
        }
        if (reroll = document.getElementById("reroll")){
            reroll.remove();
        }
        if (dialogue = document.getElementById("dialogue")){
            dialogue.innerHTML = "";
        }
        if (newRound = document.getElementById("newRound")){
            newRound.remove();
        }
        diceOne = rollDie();
        diceTwo = rollDie();
        roll = diceOne + diceTwo;
        dialogue.innerHTML = "";
        if(roll == target){
            dialogue = document.getElementById("dialogue");
            message = "";
            message += "Your target is "+target+". <br> You rolled a "+diceOne+" and a "+diceTwo+", that makes "+roll+". you are in!";
            dialogue.innerHTML = message;
            popup.appendChild(dialogue);
            wonCraps = document.createElement("button");
            wonCraps.innerHTML = "Close"
            wonCraps.addEventListener("click",closePopup);
            popup.appendChild(wonCraps);
        }
        else if(roll == 7 || roll == 11){ 
            dialogue = document.getElementById("dialogue");
            dialogue.innerHTML = "";
            message = "";
            message += "You crapped out with a "+roll+". Try again.";
            dialogue.innerHTML = message;
            popup.appendChild(dialogue);
            newRound = document.createElement("button");
            newRound.id = "newRound";
            newRound.innerHTML = "New Round";
            newRound.addEventListener("click",crapsSetup);
            popup.appendChild(newRound);
        }
        else {
            dialogue = document.getElementById("dialogue");
            dialogue.innerHTML = "";
            message = "";
            message += "Your target is "+target+". You rolled "+diceOne+" and "+diceTwo+"! That makes "+roll+". Try again."
            dialogue.innerHTML = message;
            popup.appendChild(dialogue);
            reroll = document.createElement("button");
            reroll.addEventListener("click",rollAgain);
            reroll.id = "reroll";
            reroll.innerHTML = "Roll";
            popup.appendChild(reroll);
        }
    }
}
function rollDie(){
    return Math.floor(Math.random()*6+1);
}


function closePopup(){
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}
// Things left to do: 
// Fix tryAgain button, 
// add rollCraps button, 
// let rollCraps = rollDie, 
// create all if statements
// if (rollCraps == target) message = "You rolled a(n) "+roll+" you are in!", dialogue.innerHTML = message, popup.appendChild(dialogue), let wonCraps = document.createElement("button"), wonCraps.innerHTML = "Close", wonCraps.addEventListener("click",closePopup), popup.appendChild(wonCraps);
// else if (rollCraps == 7 || rollCraps = 11) message = "You crapped out with a(n) "+roll+". Try again.", dialogue.innerHTML = message, popup.appendChild(dialogue), diceGame()
// else message = "You rolled a(n) "+roll+". Try again.", dialogue.innerHTML = message, popup.appendChild(dialogue), 
