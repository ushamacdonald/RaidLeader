
export default function (state = null, action) {
  switch(action.type) {
    case 'SELECT_FRIENDLY_TARGET':
      if (action.target.isAlive) return action.target
      else return state
    case 'MEMBER_DIED':
      if (action.target == state) return null
    default:
      return state
  }
}
