const reconcile = (state, payload) => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    const currentResource = state[key]
    switch (key) {
      case 'page':
        let currentPages = state[key]
        const rewritePages = {}

        for (let currentPage in currentPages) {
          const prevPage = currentPages[currentPage]
          const existPrevPage = Object.keys(prevPage).length

          if (existPrevPage) {
            rewritePages[currentPage] = prevPage

            trueState = {
              ...trueState,
              page: {
                ...currentPages,
                ...payload[key],
                ...rewritePages
              }
            }
          }
        }

        break
      case 'resource':
        if ('general' in currentResource.general)
          trueState = { ...trueState, resource: currentResource }
        break
      case 'user':
        const currentUser = state[key]
        trueState = { ...trueState, user: currentUser }
        break
      default:
        break;
    }
  });

  return trueState
}

export default reconcile
