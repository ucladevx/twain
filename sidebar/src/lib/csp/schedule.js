function schedule(intervalList) {
    var taskList = [
        {
            "taskId": 1,
            "name": "Gym",
            "duration": 2,
            "deadline": "2019-08-29 23:59:59",
            "intervalId": null,
            "completed": false,
            "categry": "school"
        },
        {
            "taskId": 2,
            "name": "Do Laundry",
            "duration": 1,
            "deadline": "2019-08-29 23:59:59",
            "intervalId": null,
            "completed": false
        }
    ]
    for (var i = 0; i < taskList.length; i++) {
        const duration = taskList[i].duration
        for (var j = 0; j < intervalList.length; j++) {
            var intervalDuration = intervalList[j].duration
            if (duration <= intervalDuration) {
                var id = intervalList[j].intervalId
                taskList[i].intervalId = id
                intervalList[j].duration = intervalList[j].duration - duration
                break
            }
        }
    }
    console.log(taskList)
    return taskList
}

module.exports = {
    schedule
}