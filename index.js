//Coordinate - Time Zone map
//Takes a latitude and longitude and returns the
//[IANA Time Zone](http://en.wikipedia.org/wiki/Tz_database) name of the timezone
//that coordinate is in.
//
//This can be used with the zoneinfo module to get the
//current time at that coordinate

//Load the big database of lat/lng -> Timezone
var city_timezones = require("./city_timezones");
var kdTree = require("./kdTree").kdTree;

var tree;

function distance(a, b) {
	var lat1 = a.latitude,
		lon1 = a.longitude,
		lat2 = b.latitude,
		lon2 = b.longitude;
	var rad = Math.PI / 180;

	var dLat = (lat2 - lat1) * rad;
	var dLon = (lon2 - lon1) * rad;
	lat1 = lat1 * rad;
	lat2 = lat2 * rad;

	var x = Math.sin(dLat / 2);
	var y = Math.sin(dLon / 2);

	a = x * x + y * y * Math.cos(lat1) * Math.cos(lat2);
	return Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function initialize() {
	tree = new kdTree(city_timezones, distance, ["latitude", "longitude"]);
}

calculate = function(latitude, longitude) {
	var point = {
		"latitude": latitude,
		"longitude": longitude
	};

	// We only need the nearest timezone
	var nearest = tree.nearest(point, 1);
	return nearest[0][0];
};

initialize();

module.exports = {calculate:calculate};