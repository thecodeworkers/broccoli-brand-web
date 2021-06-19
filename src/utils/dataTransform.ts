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

const getData = (data, type) => {
  switch (type) {
    case 'attributes':
      return data['attributes']['nodes']
    case 'categories':
      return data['productCategories']['nodes']
    default:
      return _getDeep(data, type)
  }
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

export const simplifyArray = (array) => {
  let indexes = []
  return array.filter((item) => {
    const id = item?.translation?.id
    if (!indexes.includes(id)) {
      indexes.push(id)
      return true
    }
  })
}

export const productFilter = (nodes: Array<any>, comparison, key) => {

  const nodeFilter = (node) => {
    let validation = true
    let validFilter = false
    for (let type in comparison) {
      let select = getData(node, type)
      for (let value of select) {
        if (type === 'categories') {
          for (let compare of comparison[type]) {
            if (value.translation[key] === compare) {
              validFilter = true
              break;
            }
          }
        }
        if (type === 'attributes') {
          for (let compare of comparison[type]) {
            for (let option of value.options) {
              if (option.toLowerCase() === compare.toLowerCase()) {
                validFilter = true;
                break;
              }
            }
          }
        }
      }
      return validation && validFilter
    }
  }
  return (comparison.attributes.length || comparison.attributes.length) ? nodes.filter(nodeFilter) : nodes
}