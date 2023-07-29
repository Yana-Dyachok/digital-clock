function currentTime() {
    let date=new Date(),
    hours=getDigitalClock(date.getHours()),
    minutes=getDigitalClock(date.getMinutes()),
    seconds=getDigitalClock(date.getSeconds())
    document.querySelector('.clockface').innerText= `${hours} : ${minutes} :${seconds}`
    setTimeout(()=>currentTime(),1000);
}

function getDigitalClock(value) {
    return value<10?`0${value}`:value;
}

currentTime() 