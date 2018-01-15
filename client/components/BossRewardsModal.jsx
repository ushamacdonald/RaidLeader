import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import weaponSwitch from '../utils/weaponSwitch'

import {earnGold} from '../actions/gold'

class BossRewardsModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRewards: false,
      goldReward: props.boss.goldReward || 0,
      weaponReward: this.solveWeaponReward(props.boss)
    }
    this.showRewards = this.showRewards.bind(this)
    this.showRewards = this.showRewards.bind(this)
  }
  solveWeaponReward(boss) {
    const {currentLocation} = this.props
    const giveWeapon = Math.random() < boss.weaponChance
    if (!giveWeapon) return null
    const weapons = boss.weaponRewards
    // const weapons = boss.weaponRewards.concat(currentLocation.weaponRewards)
    let reward = weapons[Math.floor(Math.random() * weapons.length)]
    reward = weaponSwitch[reward]()
    console.log({reward, weapons});
    return reward
  }
  showRewards() {
    this.setState({showRewards: true})
    this.props.dispatch(earnGold(this.state.goldReward))
  }
  backToMenu() {
    console.log(this.props);
    this.props.dispatch({type: 'RETURN_TO_MENU', boss: this.props.boss})
    this.props.history.push('/')
  }
  render() {
    const {showRewards, goldReward, weaponReward} = this.state
    const {boss} = this.props
    console.log(this.props);
    return <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title title is-1 has-text-centered">{boss.name} Defeated! </p>
        </header>
        <section className="modal-card-body">
          {showRewards
            ? <div className="has-text-centered">
              <p className="title is-2">Your Rewards</p>
              <p className="subtitle is-1">{goldReward} Gold</p>
              {weaponReward && <div>
                <p className="title is-3">You found a Weapon!</p>
                <hr />
                <div className="columns is-multiline">
                  <div className="subtitle is-3">Health: {weaponReward.hp}</div>
                  <div className="subtitle is-3">Power: {weaponReward.power}</div>
                  <div className="subtitle is-3">Speed: {weaponReward.speed}</div>
                </div>
                <h1 className="title is-3">{weaponReward.name}</h1>
              </div>}
              <button onClick={() => this.backToMenu()} className="button is-info is-large is-fullwidth">Back to Dungeon Menu</button>
            </div>
            : <button onClick={this.showRewards} className="button is-large is-fullwidth is-success">Collect Rewards</button>
          }
        </section>
        <footer className="modal-card-foot">

        </footer>
      </div>
    </div>
  }
}

const mapStateToProps = ({location}) => {
  return {
    currentLocation: location
  }
}

export default withRouter(connect(mapStateToProps)(BossRewardsModal))
