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