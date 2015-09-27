function howdy() {
	window.alert = howdy;
	return "Kristen Pairitz says hi!";
}

function numba(string) {
	if (string.length < 7) {
		window.alert ("What a short little word!");
	}
	else if (string.length > 7) {
		window.alert ("I’m sorry, but that’s too many to count.");
	}
	else (string.length == 7) {
		window.alert ("7, what a perfect choice!");
	}
}

function inception(callback, value)