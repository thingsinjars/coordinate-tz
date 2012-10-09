Coordinate - Time Zone map
===

Takes a latitude and longitude and returns the [IANA Time Zone](http://en.wikipedia.org/wiki/Tz_database) name of the timezone that coordinate is in.

This can be used with the zoneinfo module to get the current time at that coordinate

Example
---

    var sys = require('util');
    var CoordinateTZ = require('coordinate-tz'),
    	zoneinfo = require('zoneinfo'),
        TZDate = zoneinfo.TZDate;
    
    
    var latitude = 52.5,
    	longitude = 13.3,
    	query = CoordinateTZ.calculate(latitude,longitude);
    
    var d = new TZDate();
    d.setTimezone(query.timezone);
    sys.puts(d);