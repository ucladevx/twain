/*global chrome*/
export const storeTask = task => {
  chrome.storage.sync.get(['tasks'], result => {
    let newTasks
    if (result.tasks === undefined) {
      newTasks = []
    } else newTasks = result.tasks

    console.log('this is the pushed task: ', task)
    // newTasks = [] // uncomment this if you want to clear the local storage

    let index = newTasks.findIndex(t => t.id === task.id)
    if (index === -1) newTasks.push(task)
    else newTasks[index] = task

    chrome.storage.sync.set({ tasks: newTasks }, () => {
      console.log('DONE')
    })
  })
}

export const getTasks = () => {
  let promise = new Promise(resolve => {
    chrome.storage.sync.get(['tasks'], result => {
      if (result.tasks === undefined) resolve([])
      else {
        resolve(result.tasks)
      }
    })
  })
  return promise
  //logic to return an empty
}

export const getSingleTask = async function(id) {
  const tasks = await getTasks()
  const match = tasks.filter(t => t.id === id)
  console.log('this is match in getSingleTask: ', match)
  return match
}

// module.exports = {
//   storeTask,
//   getTasks,
//   getSingleTask,
// }
