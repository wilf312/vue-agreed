export const defaultResponse = {
  status: 200,
  response: null,
}

export const setMock = (arr, mockInstance) => {
  arr.map(obj => {
    const method = obj.method.toLocaleLowerCase()
    const data = {
      ...defaultResponse,
      ...obj,
    }
    mockInstance.onAny().reply(500)

    if (method === 'get') {
      mockInstance.onGet(data.path).reply(data.status, data.response)
    } else if (method === 'post') {
      mockInstance.onPost(data.path).reply(data.status, data.response)
    } else if (method === 'delete') {
      mockInstance.onDelete(data.path).reply(data.status, data.response)
    } else if (method === 'put') {
      mockInstance.onPut(data.path).reply(data.status, data.response)
    }
  })
}
