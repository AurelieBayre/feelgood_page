var newQuote;
var careQuotes;
var randomNumber;

function feelGood() {
	careQuotes = [
		"Take care to get what you like or you will be forced to like what you get. <br><strong>Georges Bernard Shaw</strong>",
		"Self-love is the source of all our other loves. <br><strong>   Pierre Corneille</strong>",
		"Feeling compassion for ourselves in no way releases us from responsibility for our actions. Rather, it releases us from the self-hatred that prevents us from responding to our life with clarity and balance. <br><strong>   Tara Brach</strong>",
		"One day I looked at something in myself that I had been avoiding because it was too painful. Yet once I did, I had an unexpected surprise. Rather than self-hatred, I was flooded with compassion for myself because I realized the pain necessary to develop that coping mechanism to begin with. <br><strong>   Marianne Williamson</strong>",
		"Difficulty creates the opportunity for self-reflection and compassion. <br><strong>   Suzanne-Lori Parks</strong>",
		"What if no one is coming to discover your hidden talents, to acknowledge your untapped potential, to heal you, to save you from yourself? What if the saviour was always supposed to be you? <br><strong>   Vironika Tugaleva</strong>",
		"Talk to yourself like a cherished friend. Treat yourself with love and care. You are perfect, just as you are. <br><strong>   Amy Leigh Mercree</strong>",
		'We dismantle the predator by countering its diatribes with our own nurturant truths. <br>Predator: "You never finish anything you start." <br>Yourself: "I finish many things." <br>We dismantle the assaults of the natural predator by taking to heart and working with what is truthful in what the predator says and then discarding the rest. <br><strong>   Clarissa Pinkola Estes</strong>',
		"Rest and self-care are so important. When you take time to replenish your spirit, it allows you to serve others from the overflow. You cannot serve from an empty vessel. <br><strong>   Eleanor Brownn</strong>",
		"You only have one life to live. Make sure it's yours. <br><strong>   Eleanor Brownn</strong>",
		"Accept where you are, accept what you have, accept who you are ~ do what you can with all of that and let it be enough. <br><strong>   Nikki Rowe</strong>",
		"No amount of self-improvement can make up for any lack of self-acceptance. <br><strong>   Robert Holden</strong>"
	];

	randomNumber = Math.floor(Math.random() * careQuotes.length);
	//document.getElementById("").innerHTML = careQuotes[randomNumber];
	newQuote = careQuotes[randomNumber];
	$("#randomQuote").html(newQuote);
};


function userResult () {
	var x = document.getElementById("testForm");
	var userName = x.elements["name"].value;
	var userMeal = x.elements["meal"].value;
	var userMovie = x.elements["movie"].value;

	$("#greetings").html("Hello " + userName + "!");
	$("#instruction").html("Here is a message for you: ");
	$("#personalMessage").html(" <br> You are a super cool person. Did you know that? <br>You deserve to feel good. You are worthy.<br>Remember to take care of yourself. <br>Maybe tonight you could eat " + userMeal + " while watching <i>" + userMovie +"</i>?<br>Have fun!");
};



function publishResult() {	
userResult();
feelGood();
};

function output() {
	$("#before").fadeOut("slow", function () {
		$("#after").fadeIn("slow", publishResult());
	})
}

function refresh() {
	$("#after").fadeOut("slow", function (){
		$("#before").fadeIn("slow");
	})
}

//PS : I should add something so that the button is clicked when I press enter
