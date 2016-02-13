
QUnit.test("Can convert from 1 to I and from 3 to III and from 9 to IX", function(assert) {
	assert.equal(arabicToRoman(1), 'I');
	assert.equal(arabicToRoman(3), 'III');
	assert.equal(arabicToRoman(9), 'IX');
});

QUnit.test("Throws exception when given nonstandard input", function(assert) {
	assert.throws(function() { arabicToRoman('hello'); });
	assert.throws(function() { arabicToRoman(0); });
	assert.throws(function() { arabicToRoman(-1); });
	assert.throws(function() { arabicToRoman(1.2); });
});