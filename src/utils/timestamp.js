const moment = require("moment");

exports.currentDate = function() {
    var d = new Date(1458619200000);
    var myTimezone = "America/Toronto";
    var myDatetimeFormat= "YYYY-MM-DD hh:mm:ss a z";
    var myDatetimeString = moment(d).tz(myTimezone).format(myDatetimeFormat);
    return myDatetimeString;
}

exports.chatString = function(timestamp) {
    return (" à " + timestamp.split(" ")[1]); 
}
