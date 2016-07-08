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


//выставить дату
$(document).ready(function(){
	navigator.vibrate(2000);
	tizen.alarm.removeAll();
})

//закрывать по клику
