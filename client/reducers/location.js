import {set, get, clear} from '../utils/localstorage'

const town = {
  name: 'Town',
  type: 'Town',
  inGame: false
}

function getLocation () {
  let location = get('location')
  if (!location) return town
  location = JSON.parse(location)
  if (location.inGame == true) return town
  else return location
}

export default function (state = getLocation(), action) {
  let newState = {...state}
  switch (action.type) {
    case 'LOGOUT':
      clear()
      return town
    case 'START':
      newState.inGame = true
      set('location', JSON.stringify(newState))
      return newState
    case 'DUNGEON_CHEST_OPENED':
      set('location', JSON.stringify(town))
      return newState
    case 'GAME_WON':
      let boss = newState.bosses.find(dungeonBoss => dungeonBoss.name == action.boss.name)
      boss.isDefeated = true
      newState.inGame = false
      set('location', JSON.stringify(newState))
      return newState
    case 'TRAVEL_TO_DUNGEON':
      action.dungeon.bosses.forEach(boss => {
        boss.isDefeated = false
      })
      action.dungeon.inGame = false
      set('location', JSON.stringify(action.dungeon))
      return {...action.dungeon}
    case 'TRAVEL_TO_TOWN':
      set('location', JSON.stringify(town))
      return town
    case 'GAME_LOST':
      set('location', JSON.stringify(town))
      return town
    default: return state
  }
}
