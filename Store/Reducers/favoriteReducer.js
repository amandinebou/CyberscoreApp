
const initialState = { favoritesDevices: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteDeviceIndex = state.favoritesDevice.findIndex(item => item.id === action.value.id)
      if (favoriteDeviceIndex !== -1) {
        // Le Device est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritesDevice: state.favoritesDevice.filter( (item, index) => index !== favoriteDeviceIndex)
        }
      }
      else {
        // Le Device n'est pas dans les Devices favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritesDevice: [...state.favoritesDevice, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite