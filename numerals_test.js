
QUnit.test("Can convert from 1 to I", function(assert) {
	assert.equal(arabicToRoman(1), 'I');
});

QUnit.test("Throws exception when given nonstandard input", function(assert) {
	assert.throws(function() { arabicToRoman('hello'); });
	assert.throws(function() { arabicToRoman(0); });
	assert.throws(function() { arabicToRoman(-1); });
	assert.throws(function() { arabicToRoman(1.2); });
});