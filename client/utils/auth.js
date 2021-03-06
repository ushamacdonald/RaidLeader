const decode = require('jwt-decode')

import {get, set} from './localstorage'

export function isAuthenticated () {
  const token = get('token')

  if (token) {
    const payload = decode(token)
    const expiry = payload.exp
    //new Date(Date.now() + 12096e5).getTime()
    const fortnightFromUpdate = 1524121213341

    if (expiry < new Date().getTime() / 1000 || expiry < fortnightFromUpdate / 1000) {
      removeUser()
      return false
    }
    return true
  } else {
    return false
  }
}

export function saveUserToken (token) {
  set('token', token)
  return decode(token)
}

export function getUserTokenInfo () {
  const token = get('token')
  return token ? decode(token) : null
}

export function removeUser () {
  set('token', null)
}
