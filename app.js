const secondsEle = document.getElementById('seconds-hand');
const minutesEle = document.getElementById('minutes-hand');
const hoursEle = document.getElementById('hours-hand');

function updateHandles() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const baseAngle = 6; // 360 deg / 60 min per hour

    secondsEle.style.transform = `rotate(${seconds * baseAngle}deg)`
    minutesEle.style.transform = `rotate(${minutes * baseAngle + (seconds * baseAngle / 60)}deg)`

    // 360/12 = 30
    hoursEle.style.transform = `rotate(${hours * 30 + (minutes * 30 / 60)}deg)`
}

updateHandles()
setInterval(updateHandles, 1000)