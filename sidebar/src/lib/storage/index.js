/*global chrome*/
const storeTask = task => {
  chrome.storage.sync.get(['tasks'], result => {
    let newTasks
    if (result.tasks === undefined) {
      newTasks = []
    } else newTasks = result.tasks

    // newTasks = [] // uncomment this if you want to clear the local storage
    newTasks.push(task)

    chrome.storage.sync.set({ tasks: newTasks }, () => {
      console.log('DONE')
    })
  })
}

const getTasks = () => {
  let promise = new Promise(resolve => {
    chrome.storage.sync.get(['tasks'], result => {
      console.log(result.tasks)
      if (result.tasks === undefined) resolve([])
      else {
        resolve(result.tasks)
      }
    })
  })
  return promise
  //logic to return an empty
}

module.exports = {
  storeTask,
  getTasks,
}
