//move to util
export function getDayName(date: Date) {
    return date.toLocaleDateString("he-IL", { weekday: 'long' });
}
export function getDateString(date: Date) {
    let today = new Date(date);
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) var newdd = '0' + dd;
    else newdd = dd.toString();
    if (mm < 10) var newMM = '0' + mm;
    else newMM = mm.toString();
    return newdd + '/' + newMM + '/' + yyyy;
}
//move to utli
export function minToTime(value: number) {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor((value - ((hours * 3600)) / 60));
    //let seconds = Math.floor((value * 60) - (hours * 3600) - (minutes * 60));

    // Appends 0 when unit is less than 10
    if (hours < 10) {
        var newH = "0" + hours;
    } else {
        newH = hours.toString();
    }
    if (minutes < 10) {
        var newMin = "0" + minutes;
    }
    else {
        newMin = minutes.toString();
    }
    return newH + ':' + newMin;
}