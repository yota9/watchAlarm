window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
};

//управление
$(document).ready(function(){
	$("#alarmonoff").change(function() {
		if($("#alarmonoff").is(':checked')){
			var timearr = $("#time").val().split(":");
			var date = new Date();
			date.setHours(timearr[0], timearr[1], 0, 0);
			console.log(date);
			var alarm = new tizen.AlarmAbsolute(date, tizen.alarm.PERIOD_DAY);
			var appControl = new window.tizen.ApplicationControl("http://tizen.org/appcontrol/operation/alarm",null, null, null, null);
			tizen.alarm.add(alarm, tizen.application.getCurrentApplication().appInfo.id, appControl);
		}
		else{
			tizen.alarm.removeAll();
		}
	})	
})

//выставить дату
$(document).ready(function(){
	var d = new Date();
	$("#time").val(d.getHours() + ":" + d.getMinutes() + ":" + "00");
})


//Часы
$(document).ready(function startTime(){
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('timenow').innerHTML=h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
})

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}