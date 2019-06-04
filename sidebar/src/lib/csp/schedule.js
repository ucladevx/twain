
const schedule = () => {
    const taskList = getTasks()
    const intervalList = getFreeIntervals()
    for (var i = 0; i < taskList.length; i++) {
        const duration = taskList[i].duration
        for (var j = 0; j < intervalList.length; j++) {
            var intervalDuration = intervalList[j].duration
            if (duration < intervalDuration) {
                var id = intervalDuration[j].id
                taskList.push({ "intervalId": id })
                intervalDuration[j].duration = intervalDuration[j].duration - duration
            }
        }
    }
    return taskList
}