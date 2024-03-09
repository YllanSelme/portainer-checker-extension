export function formatTimestamp(timestamp: number): string {
    var a = new Date(timestamp * 1000);
    var year = a.getFullYear();
    var month = String(a.getMonth()+1).padStart(2, '0');
    var day = String(a.getDate()).padStart(2, '0');
    var hour = String(a.getHours()).padStart(2, '0');
    var min = String(a.getMinutes()).padStart(2, '0');
    var sec = String(a.getSeconds()).padStart(2, '0');
    var time = year + '-' + day + '-' + month + ' ' + hour + ':' + min + ':' + sec ;

    return time;
}