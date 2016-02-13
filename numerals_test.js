
QUnit.test("Can convert from Arabic to Roman", function(assert) {
	assert.equal(arabicToRoman(1), 'I');
	assert.equal(arabicToRoman(3), 'III');
	assert.equal(arabicToRoman(4), 'IV');
	assert.equal(arabicToRoman(9), 'IX');
	assert.equal(arabicToRoman(1066), 'MLXVI');
	assert.equal(arabicToRoman(1989), 'MCMLXXXIX');
	assert.equal(arabicToRoman(4999), 'MMMMCMXCIX');
});

QUnit.test("Arabic to Roman throws exception when given nonstandard input", function(assert) {
	assert.throws(function() { arabicToRoman('hello'); });
	assert.throws(function() { arabicToRoman(0); });
	assert.throws(function() { arabicToRoman(-1); });
	assert.throws(function() { arabicToRoman(1.2); });
	assert.throws(function() { arabicToRoman(5000); });
});

QUnit.test("Can convert from Roman to Arabic", function(assert) {
	assert.equal(romanToArabic('I'), 1);
	//assert.equal(romanToArabic('III'), 3);
	//assert.equal(romanToArabic('IV'), 4);
	//assert.equal(romanToArabic('IX'), 9);
	//assert.equal(romanToArabic('MLXVI'), 1066);
	//assert.equal(romanToArabic('MCMLXXXIX'), 1989);
	//assert.equal(romanToArabic('MMMMCMXCIX'), 4999);
});