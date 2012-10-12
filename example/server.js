var sys = require('util');
var CoordinateTZ = require('../index'),
	zoneinfo = require('zoneinfo'),
    TZDate = zoneinfo.TZDate;


var latitude = 52.5,
	longitude = 13.3,
	query = CoordinateTZ.calculate(latitude,longitude);

var d = new TZDate();
d.setTimezone(query.timezone);
sys.puts(d);