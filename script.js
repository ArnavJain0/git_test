// Function to calculate time remaining until July 7
function getTimeRemaining() {
    var july7 = new Date('2024-09-01');
    var today = new Date();

    var timeDiff = july7.getTime() - today.getTime();

    var seconds = Math.floor((timeDiff / 1000) % 60);
    var minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return {
        'total': timeDiff,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// Function to initialize the countdown and update the display
function initializeClock() {
    var timer = document.getElementById('timer');

    function updateClock() {
        var t = getTimeRemaining();

        timer.innerHTML = t.days + ' days ' +
                           ('0' + t.hours).slice(-2) + ' hours ' +
                           ('0' + t.minutes).slice(-2) + ' minutes ' +
                           ('0' + t.seconds).slice(-2) + ' seconds ';

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
}

initializeClock();
