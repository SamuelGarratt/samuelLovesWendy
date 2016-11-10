function startTimer(duration, display) {
    var hasTimed = false;
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? + minutes : minutes;
        seconds = seconds < 10 ? + seconds : seconds;

		if (seconds < 65)
			display.textContent = seconds + (minutes * 60);
		else
			display.textContent = minutes + ":" + seconds;

        if (!hasTimed)
            {
            if (--timer < 0) {            
                timer = duration;
                hasTimed = true;
                }            
            }
        }
    }, 1000);
}

