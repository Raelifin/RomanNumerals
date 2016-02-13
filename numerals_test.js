
QUnit.test("Can convert from arabic to roman", function(assert) {
	assert.equal(arabicToRoman(1), 'I');
	assert.equal(arabicToRoman(3), 'III');
	assert.equal(arabicToRoman(4), 'IV');
	assert.equal(arabicToRoman(9), 'IX');
	assert.equal(arabicToRoman(1066), 'MLXVI');
	assert.equal(arabicToRoman(1989), 'MCMLXXXIX');
});

QUnit.test("Throws exception when given nonstandard input", function(assert) {
	assert.throws(function() { arabicToRoman('hello'); });
	assert.throws(function() { arabicToRoman(0); });
	assert.throws(function() { arabicToRoman(-1); });
	assert.throws(function() { arabicToRoman(1.2); });
	assert.throws(function() { arabicToRoman(1.2); });
});