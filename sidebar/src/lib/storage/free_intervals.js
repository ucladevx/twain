/*global chrome*/
var API_KEY = 'AIzaSyAx2zbBHSisuacAEQDaXB7GbnK4VIvITrM'
function getTodaysFreeIntervals() {
    chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
        var init = {
            'method': 'GET',
            'async': true,
            'headers': {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            'contentType': 'json'
        };

        var time_now = new Date()
        var time_midnight = new Date()
        time_midnight.setDate(time_midnight.getDate() + 1)
        time_midnight.setHours(0)
        time_midnight.setMinutes(0)
        time_midnight.setSeconds(0)
        time_midnight.setMilliseconds(0)

        var time_now_string = ISODateString(time_now)
        var time_midnight_string = ISODateString(time_midnight)

        var url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMax=' + time_midnight_string + '&timeMin=' + time_now_string + '&orderBy=startTime&singleEvents=true' + '&key=' + API_KEY

        var free_intervals = []

        fetch(url, init)
            .then((response) => response.json()) // Transform the data into json
            .then(function (data) {
                var events = data['items'];
                free_intervals = getFreeIntervals(events);
                console.log("Free intervals: ", free_intervals);
                return free_intervals;
            });

    })
}

function getHourDifference(start, end) {

    return end.getUTCHours() - start.getUTCHours() + (end.getUTCMinutes() - start.getUTCMinutes()) / 60;

}

function Interval(start, end, id) {
    this.start = start;
    this.end = end;
    this.duration = getHourDifference(start, end);
    this.intervalId = id;
}

function getTimeMidnight() {
    var time_midnight = new Date()
    time_midnight.setDate(time_midnight.getDate() + 1)
    time_midnight.setHours(0)
    time_midnight.setMinutes(0)
    time_midnight.setSeconds(0)
    time_midnight.setMilliseconds(0)
    return time_midnight
}

function getFreeIntervals(events) {

    console.log("Getting intervals")
    console.log(events)

    var time_now = new Date()
    var time_midnight = getTimeMidnight()

    var free_interval_list = new Array()
    var count = 2
    free_interval_list.push(new Interval(time_now, time_midnight, 1))

    for (var i = 0; i < events.length; i++) {

        var curr_event = events[i];

        var latestFreeInterval = free_interval_list[free_interval_list.length - 1];
        var event_start = new Date(curr_event['start']['dateTime']);
        var event_end = new Date(curr_event['end']['dateTime']);

        if (event_start > latestFreeInterval.start) {
            var new_interval = new Interval(event_end, latestFreeInterval.end, count)
            latestFreeInterval.end = new Date(event_start);
            latestFreeInterval.duration = getHourDifference(latestFreeInterval.start, latestFreeInterval.end)
            free_interval_list.push(new_interval)
            count++;
        }
        else if (event_end > latestFreeInterval.start) {
            latestFreeInterval.start = event_end
        }


    }

    return free_interval_list;
}

function ISODateString(d) {
    function pad(n) { return n < 10 ? '0' + n : n }
    return d.getUTCFullYear() + '-'
        + pad(d.getUTCMonth() + 1) + '-'
        + pad(d.getUTCDate()) + 'T'
        + pad(d.getUTCHours()) + ':'
        + pad(d.getUTCMinutes()) + ':'
        + pad(d.getUTCSeconds()) + 'Z'
}

module.exports = { getTodaysFreeIntervals }
