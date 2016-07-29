function bottomHalf(n){
	var diamondString = "";
	if (n%2 === 0) {
		return null;
	}
	diamondString = printOneLine(n);
	if(n===1) {
		console.log("  " + diamondString);
		return n;
	}
	else {
		console.log(" " + diamondString);
	}


	bottomHalf(n-2);


}

function topHalf(n){
	var diamondString = "";
	if (n%2 === 0) {
		return null;
	}


	if(n===1) {
		diamondString = printOneLine(n);
		console.log("  " + diamondString);
		return n;
	}
	topHalf(n-2);

	diamondString = printOneLine(n);
	console.log(" " + diamondString);


}

function printOneLine(n) {
	var diam = "*";
	var diamonds = "";
	for(var i=0; i<n; i++) {
		diamonds = diamonds.concat(diam);
	}
	//console.log(" " + diamonds);
	return diamonds;
}

function printMiddleLine (n) {
	var diamondString = "";
	diamondString = printOneLine(n);
	console.log(diamondString);
}

function diamond(n) {
	if (n%2 === 0) {
		return null;
	}
	topHalf(n-2);
	printMiddleLine(n);
	bottomHalf(n-2);
	return n;
}

diamond(5);
