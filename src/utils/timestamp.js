const moment = require("moment-timezone");

exports.currentDate = function() {
    return new Date(1458619200000);
}

exports.chatString = function(timestamp) {
    var myTimezone = "America/Toronto";
    var myDatetimeFormat= "YYYY-MM-DD hh:mm:ss a z";
    var myDatetimeString = moment(d).tz(myTimezone).format(myDatetimeFormat);
    return (" à " + myDatetimeString); 
}
