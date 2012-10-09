var sys = require('util');
var CoordinateTZ = require('coordinate-tz');

var assert = require('assert');


var latitude = 52.5,
	longitude = 13.3,
	query = CoordinateTZ.calculate(latitude,longitude);

assert.equal(query.timezone, "Europe/Berlin", "coordinate DB mismatch");