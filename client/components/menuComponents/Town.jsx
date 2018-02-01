import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logoutUser} from '../../actions/logout'

import RecruitmentCentre from './RecruitmentCentre'
import Library from './Library'
import TrainingCentre from './TrainingCentre'
import Dungeons from './Dungeons'
import WeaponStore from './WeaponStore'

const buttonStyle = {height: '10vh'}

class Town extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: null
    }
  }
  toggleModal(menu) {
    this.setState({showModal: menu})
  }
  modalSwitch() {
    const {showModal} = this.state
    let close = () => this.toggleModal(null)
    close = close.bind(this)
    switch (showModal) {
      case 'Recruitment Centre': return <RecruitmentCentre close={close} />
      case 'Library': return <Library close={close} />
      case 'Training Centre': return <TrainingCentre close={close} />
      case 'Weapon Store': return <WeaponStore close={close} />
      case 'Dungeon Map': return <Dungeons close={close} />
      default: return null
    }
  }
  renderTownMenuButton (name, icon) {
    return <a onClick={() => this.toggleModal(name)} style={buttonStyle} className="column is-6 button is-large is-dark is-outlined is-fullwidth ">
      <span className="icon is-large">
        <i className={`ra ${icon} ra-2x`}></i>
      </span>
      <span className="content is-large"> &nbsp;{name}&nbsp;</span>
      <span className="icon is-large">
        <i className={`ra ${icon} ra-2x` }></i>
      </span>
    </a>
  }
  render() {
    const {gold, recruits, spellBook} = this.props
    const {showRecruitmentModal} = this.state
    return <div className="Town">
      <div className="hero-head has-text-centered">
          <p className="title is-1"> <i className="ra  ra-heart-tower ra-fw" /> Town <i className="ra ra-heart-tower ra-fw" /></p>
        <div className="level has-text-centered" style={{width: '50vw', margin: 'auto'}}>
          <div className=" is-4">
            <div className="tooltip">
              <span className="tooltiptext">You have learned {spellBook.length} Spells</span>
              <p className="subtitle is-2">{spellBook.length}<i className="ra ra-book icon-large" /></p>
            </div>
          </div>
          <div className=" is-4">
            <div className="tooltip">
              <span className="tooltiptext">You have {gold} Gold</span>
              <p className="subtitle is-2">{gold} <i className="ra ra-gold-bar icon-large" /></p>
            </div>
          </div>
          <div className=" is-4">
            <div className="tooltip">
              <span className="tooltiptext">You have Recruited {recruits.length} Recruits</span>
              <p className="subtitle is-2">{recruits.length} <i className="ra ra-double-team icon-large" /></p>
            </div>
          </div>
        </div>

      </div>
      {this.modalSwitch()}
      <div className="Town-Buttons has-text-centered">
        <button onClick={() => this.toggleModal('Dungeon Map')} style={{height: '10vh', width: '45vw', margin: 'auto', marginBottom: '2vw'}} className="button is-large is-fullwidth is-inverted is-light">Travel</button>

        <div className="columns">
          {this.renderTownMenuButton('Recruitment Centre', 'ra-crossed-swords')}
          {this.renderTownMenuButton('Library', 'ra-crystal-ball')}
        </div>
        <div className="columns">
          {this.renderTownMenuButton('Training Centre', 'ra-muscle-up')}
          <button disabled style={buttonStyle} className="column is-6 button is-large is-dark is-fullwidth is-outlined">Store (WIP)</button>
        </div>
        <div className="columns">
          <Link to="/" style={buttonStyle} className="button is-large is-fullwidth is-danger is-outlined" onClick={() => this.props.dispatch(logoutUser())}>Logout</Link>
          <div style={buttonStyle} disabled className="button is-large is-fullwidth is-dark is-outlined">Profile (WIP)</div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  const {gold, recruits, spellBook} = state
  return {
    gold, recruits, spellBook
  }
}

export default connect(mapStateToProps)(Town)
