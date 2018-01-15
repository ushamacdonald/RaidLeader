import React, {Component} from 'react'
import {connect} from 'react-redux'

import HealthBar from './HealthBar'

class MemberFrame extends Component {
  constructor(props) {
    super(props)
  }
  startCast() {
    const {power, speed, isAlive} = this.props.member
    const {started} = this.props
    if (isAlive && started) setTimeout(() => {
      if (isAlive && started) this.finishCast(power)
    }, 10000 / speed)
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.started && nextProps.started) setTimeout(() => this.startFighting(), Math.random() * 1000)
    if (nextProps.member.hp <= 0 && nextProps.member.isAlive) this.props.dispatch({type: 'MEMBER_DIED', target: this.props.member})
  }
  render() {
    const {member, dispatch, friendlyTarget, boss} = this.props
    const {initHp, hp, name, isAlive} = member
    return <div className={`column button MemberFrame ${!isAlive ? 'is-dark' : friendlyTarget == member ? 'is-success' : 'is-light'}`} onClick={() => dispatch({type: 'SELECT_FRIENDLY_TARGET', target: member})}>
      <h1 className="title is-3" style={{color: boss.bossTarget == member ? 'red' : 'black'}}>{name}</h1>
      <div className="columns has-text-centered">
        <div className="column is-3"><p className="title is-4">Power: {member.power}</p></div>
        <div className="column is-3"><p className="title is-4">Speed: {member.speed}</p></div>
      </div>
      <HealthBar maxHP={initHp} hp={hp} />
    </div>
  }
}

const mapStateToProps = ({started, party, friendlyTarget}) => {
  return {
    started,
    party,
    friendlyTarget
  }
}

export default MemberFrame
