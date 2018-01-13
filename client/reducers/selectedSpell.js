export default function (state = null, action) {
  switch(action.type) {
    case 'TRAVEL_TO_TOWN':
      return null
    case 'SELECT_SPELL':
      if (state == action.spell) return null
      return action.spell
    default:
      return state
  }
}
