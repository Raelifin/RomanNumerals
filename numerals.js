var romanComponents = {
	I: 1,
	IV: 4,
	V: 5,
	IX: 9,
	X: 10,
	XL: 40,
	L: 50,
	XC: 90,
	C: 100,
	CD: 400,
	D: 500,
	CM: 900,
	M: 1000
};

function arabicToRoman(integer) {
	if (typeof integer != 'number') { throw 'Input must be a number'; }
	if (integer < 1) { throw 'Arabic number must be greater than 0'; }
	if (integer > 4999) { throw 'Arabic number must be less than 5000'; }
	if (parseInt(integer) != integer) { throw 'Arabic number must be an integer'; }
	
	var result = '';
	while (integer > 0) {
		var largest = 'I';
		var largestVal = romanComponents[largest];
		for (var romanSymb in romanComponents) {
			var romanVal = romanComponents[romanSymb];
			if (romanVal <= integer && romanVal > largestVal) {
				largest = romanSymb;
				largestVal = romanVal;
			}
		}
		result += largest;
		integer -= largestVal;
	}
	return result;
}

function romanToArabic(numeral) {
	if (typeof numeral != 'string') { throw 'Input must be a string'; }
	if (numeral.length < 1) { throw 'Input must not be empty'; }
	
	var originalNumeral = numeral;
	var result = 0;
	while (numeral.length > 0) {
		var largest = '?';
		var largestVal = romanComponents[largest];
		for (var romanSymb in romanComponents) {
			var romanVal = romanComponents[romanSymb];
			if (romanSymb === numeral.substring(0,romanSymb.length)) {
				largest = romanSymb;
				largestVal = romanVal;
			}
		}
		if (largest === '?') { throw 'Unrecognized numeral'; }
		result += largestVal;
		numeral = numeral.substring(largest.length);
	}
	if (arabicToRoman(result) !== originalNumeral) { throw 'Invalid numeral'; }
	return result;
}