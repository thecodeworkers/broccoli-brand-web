const reconcile = state => {
  const keyNames = Object.keys(state);
  let trueState = {}
    
  keyNames.forEach(key => {
    switch (key) {
      case 'resource':
        const currentResource = state[key]
        if ('generals' in currentResource.general) 
          trueState = { ...trueState, resource: currentResource }
        break

      default:
        break;
    }
  });

  return trueState
}

export default reconcile
