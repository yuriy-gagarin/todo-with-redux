const createWorker = (Worker) => {
  const worker = new Worker()
  const res = {}, rej = {}
  let idCounter = 0
  
  const dispatch = payload => {
    const id = idCounter++

    return new Promise((resolve, reject) => {
      res[id] = resolve
      rej[id] = reject
      worker.postMessage({
        payload, id
      })
    })
  }

  const receive = message => {
    const {id, result, error} = message.data
    
    if (result && res[id]) {
      res[id]({id, result})
    } else {
      rej[id]({id, error})
    }

    delete res[id]
    delete rej[id]
  }

  worker.onmessage = receive
  return dispatch
}

export default createWorker