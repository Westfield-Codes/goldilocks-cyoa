// tollbooth.js
// Matches https://docs.google.com/spreadsheets/d/1eu_ymKNlnSQUzi6JfSyOwWewXX2fybDIw2YZfzhWIic/edit
scene1 = Goldilocks;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Ignore cabin") {
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
		smallPorridge();
	} 
	
	else if (answer == "Eat the medium porridge") {
		meduimPorridge();
	}
	else if (answer == "Eat the large porridge") {
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
	answer = setOptions(choices);
}

//1.2 Ignore Cabin
function ignoreCabin() {
	story("You ignore the cabin and try to continue, but the weather starts to get even worse. You start to see lightning strike nearby, and are forced to make another decision."); 
    choices = ["Keep running errands","Go back to the cabin","Go back home"];
	answer = setOptions(choices);
}

// 1.3 cabin
function homeEnding() {
	story("Although a little wet, you make it home safely. You tell your mother about the strange cabin in the woods, and she says she's never seen it before. You go back to take a picture of the cabin the day after, and once you get to the spot it had been, you find it's not there. Your mother tells you there was never a cabin."); 
    choices = ["Play again"];
	answer = setOptions(choices);
}

// 1.4 Discover Tollbooth
function cabin() {
  story("You go inside the cabin and find no one home. You find 3 bowls of porridge waiting for you on the table, and you feel extremely hungry. One is small and mildly cold, one is medium sized and warm, and one is large and hot.");
	choices = ["Eat the small porridge", "Eat the medium porridge", "Eat the large porridge"];
	answer = setOptions(choices);
}

// 1.5 Wild Nightmares
function hospitalEnding() {
	story("You try to keep running your errands, but you end up getting struck by lighning. You end up surviving, but you wake up in a hospital and forget all about the cabin in the woods.");
	choices = ["Play again"];
	answer = setOptions(choices);
}

// 1.6 Mom Can't See It
function smallPorridge() {
	story("The small porridge, although it tasted very good, it was much too cold for your liking. After eating, you now become very tired. You find 3 beds in the room next door; a small one, a medium sized one, and a large one.  ");
	choices = ["Sleep in the small bed","Sleep in the medium bed","Sleep in the big bed"];
	answer = setOptions(choices);
}

// 1.7 Call the Bomb Squad
function meduimPorridge() {
	story("The medium porridge was perfect. It tasted great and was the perfect temperature. After eating, you now become very tired. You find 3 beds in the room next door; a small one, a medium sized one, and a large one.  ");
    choices = ["Sleep in the small bed","Sleep in the medium bed","Sleep in the big bed"];
	answer = setOptions(choices);
}

// 1.8 Check Return Address
function largePorridge() {
	story("The large porridge was too hot for your liking, it tasted good, but you burned your mouth in the process. After eating, you now become very tired. You find 3 beds in the room next door; a small one, a medium sized one, and a large one.  ");
    choices = ["Sleep in the small bed","Sleep in the medium bed","Sleep in the large bed"];
	answer = setOptions(choices);
}

// // 1.9 Unpack Tollbooth
function smallBed() {
	story("You try sleeping in the small bed, but its too soft for your liking and it feels as if you sink into the bed whenevr you lay down. You can't fall asleep."); 
    choices = ["Sleep in the medium bed","Sleep in the large bed","Stay awake"];
	answer = setOptions(choices);
}

// 1.10 Enter Kingdom of Wisdom
function eatenEnding() { 
  story("You fall asleep very easily in the medium bed, it was perfectly soft enough and just the right size. When you wake up you hear something entering the cabin, and upon investigation you find three bears, a mom, a dad, and a son. They were angry that you tresspassed into their cabin and ate their porridge. You were never found again.");
	choices = ["Play again"];
	answer = setOptions(choices);
}

// 1.10 Enter Kingdom of Wisdom
function largeBed() { 
	story("You try sleeping in the big bed but its too hard for your liking, it feels like sleeping on a wooden board. You can't fall asleep.");
	  choices = ["Sleep in the small bed","Sleep in the medium bed","Stay awake"];
	  answer = setOptions(choices);
  }

  // 1.10 Enter Kingdom of Wisdom
function safeEnding() { 
	story("You wait for the storm to pass. After it stops raining you go back home, and will resume running errands tommorow.");
	  choices = ["Play again"];
	  answer = setOptions(choices);
  }

