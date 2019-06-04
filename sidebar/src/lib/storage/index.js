/*global chrome*/
const storeTask = task => {
  chrome.storage.sync.get('tasks', tasks => {
    if (!tasks) {
      tasks = []
    }
    tasks.push(task)

    chrome.storage.sync.set({'tasks': tasks}, () => {
      console.log("DONE")
    })
  })
}

const getTasks = () => {
  return chrome.storage.sync.get('tasks', tasks => {
    return tasks
  })
}

module.exports = {
  storeTask,
  getTasks
}
