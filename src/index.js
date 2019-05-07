const getQueryVariable = name => {
  const query = window.location.search.substring(1)
  const variables = query.split("&")
  for (const variable of variables) {
    const pair = variable.split("=")
    if (decodeURIComponent(pair[0]) == name) {
      return decodeURIComponent(pair[1])
    }
  }
  return null
}

const init = ({ port, path, actions }) => {
  const socket = new WebSocket(
    path || `ws://localhost:${port || getQueryVariable("port")}`
  )

  const parseMessage = ({ action, ...payload }) => {
    actions[action](payload)
  }

  socket.onmessage = evt => {
    parseMessage(JSON.parse(evt.data))
  }
}

export default {
  init,
  getQueryVariable
}
