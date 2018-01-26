import React from 'react'
import {connect} from 'react-redux'

import mapStateToProps from './utils/bossStateMap'
import BossFrame from '../frames/BossFrame'

class LungingLocusts extends BossFrame {
  constructor(props) {
    super(props)
  }
  solveSpell(spells, boss) {
    let castSpell = spells.filter(spell => {
      if (!spell.onCooldown && spell.cost <= boss.mana) {
        switch (spell.name) {
          case 'Overwhelm': return true
          case 'Regenerate':
            return (boss.hp <= boss.initHp - spell.health)
          case 'Lunge': return party.find(member => member.isAlive && !member.effects.find(eff => eff.name == 'Poison'))
          default: return false
        }
      } else return false
    })[0]
    return castSpell
  }
}

export default connect(mapStateToProps)(LungingLocusts)
