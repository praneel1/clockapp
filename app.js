
// Declaring Time
const hourElem = document.getElementById('hour');
const minuteElem = document.getElementById('minute');
const secondElem = document.getElementById('second');

// Declaring Date
const dateElem = document.getElementById('date');
const monthElem = document.getElementById('month');
const yearElem = document.getElementById('year');

// Day
const dayElem = document.getElementById('day');

//Timezone
const timezoneElem = document.getElementById('timezone');

updateTime = function () {

    let now = new Date();

    // TIME
    let hour = now.getHours();
    hourElem.innerText = hour;

    let minute = now.getMinutes();
    minuteElem.innerText = minute;

    let second = now.getSeconds();
    seconds = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];

    for (let i = 10; i < 60; i++) {
        seconds.push(i);

    }
    console.log(seconds[28]);
    secondElem.innerText = seconds[second];

    console.log(hour + ': ' + minute + ': ' + seconds[second]);

    // DATE

    let date = now.getDate();
    dateElem.innerText = date;

    let month = now.getMonth();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    monthElem.innerText = months[month];

    let year = now.getFullYear();
    yearElem.innerText = year;

    console.log(date + '/ ' + (month + 1) + '/ ' + year);

    // DAY AND TIMEZONE 
    let day = now.getDay();
    console.log(day);
    //////////////////    1           2          3            4          5          6          7
    days = [undefined, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    dayElem.innerText = days[day];

    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    timezoneElem.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;

};

setInterval(() => {
    console.clear();
    updateTime();
}, 1000);

