const _getDeep = (data, deep) => {
  if (typeof deep === 'string') {
    data = data[deep];
  }
  
  if (Array.isArray(deep)) {
    for (let layer of deep) {
      data = data[layer]
    }
  }
  return data
}

export const orderBy = (array, key, type = 'desc', deep = null) => {
  return array.sort((a, b) => {
    a = _getDeep(a, deep);
    b = _getDeep(b, deep);

    if (a[key] > b[key] && type === 'asc') return 1
    if (a[key] < b[key] && type === 'asc') return -1
    if (a[key] < b[key] && type === 'desc') return 1
    if (a[key] > b[key] && type === 'desc') return -1
    return 0
  })
}


export const filter = (nodes: Array<any>, comparison, key, deep) => {

  const nodeFilter = (node) => {
    let validation = true
    let validFilter = false
    let select = _getDeep(node, deep)[key]
    validFilter = select === comparison
    return validation && validFilter
  }

  return (filter) ? nodes.filter(nodeFilter) : nodes
}
