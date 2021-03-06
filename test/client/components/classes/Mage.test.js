import {Mage} from '../../../../client/components/classes/Mage'
import React from 'react'
import {shallow, mount} from 'enzyme'
import {Provider} from 'react-redux'
import clone from 'clone'
import configureStore from  'redux-mock-store'

const mockStore = configureStore([])


const member = {
  id: 1,
  isAlive: true,
  power: 10,
  weapon_effect: null
}

const boss = {
  bossTarget: member
}

const player = {
  maxMana: 100,
  mana: 100,
}

test('Mage attack basic success', () => {
  const store = mockStore()
  Mage.prototype.render = function () {
    return <div></div>
  }

  const wrapper = shallow(<Mage
    member={clone(member)}
    player={clone(player)}
    started={true}
    dispatch={store.dispatch}
  />)
  wrapper.instance().finishCast()

  const actions = store.getActions()

  expect(actions).toHaveLength(1)

  expect(actions[0]).toEqual({
    type: 'PHYSICAL_ATTACK_BOSS',
    power: 10
  })
})

test('Mage attack low player mana', () => {
  const store = mockStore()
  Mage.prototype.render = function () {
    return <div></div>
  }

  const fakePlayer = {
    ...player,
    mana: 29
  }

  const wrapper = shallow(<Mage
    member={clone(member)}
    player={fakePlayer}
    started={true}
    dispatch={store.dispatch}
  />)

  wrapper.instance().finishCast()

  const actions = store.getActions()

  expect(actions).toHaveLength(1)

  expect(actions[0]).toEqual({
    type: 'PHYSICAL_ATTACK_BOSS',
    power: 20
  })
})

test('Mage attack not alive', () => {
  const store = mockStore()
  Mage.prototype.render = function () {
    return <div></div>
  }

  const fakeMember = {
    ...member,
    isAlive: false
  }

  const fakePlayer = {
    ...player,
    mana: 29
  }

  const wrapper = shallow(<Mage
    member={fakeMember}
    player={fakePlayer}
    started={true}
    dispatch={store.dispatch}
  />)

  wrapper.instance().finishCast()

  const actions = store.getActions()

  expect(actions).toHaveLength(0)
})

test('Mage startFighting', () => {
  const store = mockStore()
  Mage.prototype.render = () =>  <div></div>
  Mage.prototype.startCast = () => ({})

  const wrapper = shallow(<Mage
    started={true}
    dispatch={store.dispatch}
  />)

  wrapper.instance().startFighting()

  const actions = store.getActions()

  expect(actions).toHaveLength(1)

  expect(actions[0]).toEqual({
    type: 'MAGE_START_BUFF'
  })
})
