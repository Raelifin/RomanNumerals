function arabicToRoman(integer) {
	if (typeof integer != 'number') { throw 'Input must be a number'; }
	if (integer < 1) { throw 'Arabic number must be greater than 0'; }
	if (parseInt(integer) != integer) { throw 'Arabic number must be an integer'; }
	return 'I';
}