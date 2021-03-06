export default function (state = null, action) {
  switch(action.type) {
    case 'LOGOUT': return null
    case 'RETURN_TO_MENU':
      return null
    case 'TRAVEL_TO_TOWN':
      return null
    case 'SELECT_SPELL':
      if (state && state.name == action.spell.name) return null
      return action.spell
    default:
      return state
  }
}
