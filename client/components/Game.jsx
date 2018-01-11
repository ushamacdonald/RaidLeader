import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import bossSwitch from './bosses/utils/bossSwitch'
import PlayerFrame from './frames/PlayerFrame'
import PartyFrame from './frames/PartyFrame'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interval: null
    }
    this.startGame = this.startGame.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    console.log({nextProps});
    if (nextProps.player.spells.length == 0 || nextProps.party.length == 0 || !nextProps.boss) return this.props.location.push('/')
    if (!this.props.started && nextProps.started) {
      let interval = setInterval(() => this.props.dispatch({type: 'TICK_ONE_SECOND'}), 1000)
      this.setState({interval})
    }
  }
  startGame () {
    this.props.dispatch({type: 'START'})
  }
  render () {
    const {started, boss, player, party} = this.props
    console.log(this.props);
    if (player.spells.length == 0 || party.length == 0 || !boss) return <div className="Game hero is-fullheight has-text-centered">
      <div className="hero">
        <h1 className="title is-1">Game not ready</h1><br />
        <Link to="/" className="button is-large is-success">Return to Menu</Link>
      </div>
    </div>
    return <div className="Game">
      {bossSwitch(boss)}
      <PartyFrame />
      <PlayerFrame />
      {!started && <button onClick={this.startGame}>Start</button>}
    </div>
  }
}

const mapStateToProps = ({started, boss, player, party}) => {
  return {
    started,
    boss,
    player,
    party
  }
}


export default connect(mapStateToProps)(Game)
