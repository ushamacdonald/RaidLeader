import React from 'react'
import {connect} from 'react-redux'
import {HealthIcon, SpeedIcon, PowerIcon} from '../icons/StatIcons'
import EffectTag from './EffectTag'

import { Line, Circle } from 'rc-progress';


const RecruitHealthBar = ({recruit, party}) => {
  let {hp, initHp, power, speed, effects} = recruit
  const percent = hp/initHp * 100
  const colourClass = percent >= 25
    ? percent >= 50
      ? 'hsl(171, 100%, 41%)'
      : 'hsl(48, 100%, 67%)'
    : 'hsl(348, 100%, 61%)'
  return <div className="RecruitHealthBar has-text-centered">
    <div className="">
      <div className="columns">
        <span className="column" style={{heigth: '15px'}}>
          <Line percent={percent} strokeWidth={`${4 * party.length}`} strokeColor={colourClass} strokeLinecap="square"  trailWidth={`${4 * party.length}`}/>
        </span>
        <div className="column is-pulled-right is-desktop-only"><p className="subtitle is-5"><HealthIcon value={`${Math.round(hp)} / ${Math.round(initHp)}`} /></p></div>
      </div>
    </div>
  </div>
}

const mapStateToProps = ({party}) => ({party})

export default connect(mapStateToProps)(RecruitHealthBar)
