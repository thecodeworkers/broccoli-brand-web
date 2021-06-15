const reconcile = (state, payload) => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    const currentResource = state[key]
    switch (key) {
      case 'resource':
        if ('general' in currentResource.general)
          trueState = { ...trueState, resource: currentResource }
        break
      case 'user':
        const currentUser = state[key]
        trueState = { ...trueState, user: currentUser }
        break
      case 'cart':
        const currentCart = state[key]
        trueState = { ...trueState, cart: currentCart }
        break
      default:
        break;
    }
  });

  return trueState
}

export default reconcile
