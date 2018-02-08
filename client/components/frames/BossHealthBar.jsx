import React from 'react'
import {connect} from 'react-redux'
import {HealthIcon, ArmorIcon, ManaIcon} from '../icons/StatIcons'

const healthBar = (current, max) => {
  const percent = Math.round(current/max * 100)
  const colourClass = percent > 1/3*100
    ? percent > 2/3*100
      ? percent == 100
        ? 'is-primary'
        : 'is-success'
      : 'is-warning'
    : 'is-danger'
  return <div className="column">
    <p className="subtitle is-4"><HealthIcon value={`${current} / ${max}`} /></p>
    <div className="box">
      <progress className={`ProgressBar progress ${colourClass}`} max="100" value={percent}>{percent}%</progress>
    </div>
  </div>
}

const armorBar = (current, max) => {
  const percent = Math.round(current/max * 100)
  return <div className="column">
    <p className="subtitle is-4"><ArmorIcon value={`${current} / ${max}`} /></p>
    <div className="box">
      <progress className={`ProgressBar progress ArmorBar`} max="100" value={percent}>{percent}%</progress>
    </div>
  </div>
}

const manaBar = (current, max) =>{
  const percent = current/max * 100
  const colourClass = percent > 1/3*100 ? 'is-info' : 'is-warning'
  return <div className="column is-4 ManaBar has-text-centered">
    <p className="subtitle is-4"><ManaIcon value={`${current}/${max}`} /></p>
    <div className="box">
      <progress className={`ProgressBar progress ${colourClass}`} max="100" value={percent}>{percent}%</progress>
    </div>
  </div>
}

const BossHealthBar = ({boss}) => {
  const {initHp, hp, armor, initArmor, mana, maxMana} = boss
  const percent = hp/initHp * 100
  const colourClass = percent > 1/3*100
    ? percent > 2/3*100
      ? percent == 100
        ? 'is-primary'
        : 'is-success'
      : 'is-warning'
    : 'is-danger'
    return <div className="BossHealthBar columns has-text-centered">
      {healthBar(hp, initHp)}
      {armor > 0 && armorBar(armor, initArmor)}
      {manaBar(mana, maxMana)}
    </div>
}

export default connect()(BossHealthBar)
