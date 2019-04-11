//建立基本資料
let locale = [{
    Country: "New York",
    TimeZone: "America/New_York"
}, {
    Country: "LONDON",
    TimeZone: "Europe/LONDON"
}, {
    Country: "BANGKOK",
    TimeZone: "Asia/Bangkok"
}, {
    Country: "TAIWAN",
    TimeZone: "Asia/Taipei"
}, {
    Country: "SYDNEY",
    TimeZone: "Australia/Sydney"
}]
let monthEn = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
let zone = document.querySelector('.clock');

/**
 * @function
 * @param {string} day - 時間
 * @param {string} zone - 地區
 * @param {boolean} hour12 - 顯示是否為12小時制
 */
function getLocaleStr(day, zone, hour12) {
    return day.toLocaleString('en-US', {
        timeZone: zone,
        hour12: hour12
    });
}

/**
 * @function
 * @description 依據不同地區獲取不同的時間，並顯示頁面上，PM黑底白字AM白底黑字顯示
 */
function getTimeZone() {
    let dayTime = new Date();
    let isNight = false;
    locale.forEach(e => {
        let areaTime = getLocaleStr(dayTime, e.TimeZone, false).split(' ');
        let amPm = getLocaleStr(dayTime, e.TimeZone, true).split(' ')[2]; //取得ampm
        let day = areaTime[0];
        let time = areaTime[1].split(':');
        let timeZoneDay = `${day.split('/')[0]} ${monthEn[day.split('/')[1]-1]}. ${day.split('/')[2]}`
        if (amPm === 'PM') {
            isNight = true;
        }
        zone.innerHTML += `<div class="zone ${isNight?'pm':'am'}"><div><h3>${e.Country}</h3><div>${timeZoneDay}</div></div><div><p>${time[0]}:${time[1]}</p></div></div>`
    })
}

getTimeZone();
setTimeout(getTimeZone, 60 * 1000); //每分鐘更新一次