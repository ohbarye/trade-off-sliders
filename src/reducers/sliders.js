const sliders = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SLIDER':
      return [
        ...state,
        {
        }
      ]
    case 'REMOVE_SLIDER':
      return [
        ...state,
        {
        }
      ]
    default:
      return state
  }
}

export default sliders
