const reconcile = (state, payload) => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
      case 'intermittence':
        const currentIntermittence = state[key]
        trueState = { ...trueState, user: currentIntermittence }
        break
      case 'user':
        const currentUser = state[key]
        trueState = { ...trueState, user: currentUser }
        break
      case 'shop':
        const currentShop = state[key]
        trueState = { ...trueState, shop: currentShop }
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
