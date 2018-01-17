import React, {Component} from 'react'
import {connect} from 'react-redux'

import spells from '../../utils/spells'
import {earnGold} from '../../actions/gold'
import {addSpell} from '../../actions/spells'
import {get, set} from '../../utils/localstorage'

class RecruitmentCentre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showChoices: !!JSON.parse(get('offeredSpells')),
      offeredSpells: JSON.parse(get('offeredSpells')) || [],
      selectedSpell: null
    }
    console.log(this.state);
    this.showOptions = this.showOptions.bind(this)
  }
  solveOptions() {
    const offeredSpells = []
    console.log({spells});
    const spellNames = Object.keys(spells)
    while (offeredSpells.length < 3) {
      let idx = Math.floor(Math.random() * spellNames.length)
      let spell = spells[spellNames[idx]]
      if (!offeredSpells.find(c => c.name == spell.name)) offeredSpells.push(spell)
      console.log({idx, spell});
    }
    console.log({offeredSpells});
    return offeredSpells
  }
  selectSpell (selectedSpell) {
    this.setState({selectedSpell})
  }
  showOptions() {
    this.props.dispatch(earnGold(-1 * this.props.spellBook.length * 300))
    const offeredSpells = this.solveOptions()
    set('offeredSpells', JSON.stringify(offeredSpells))
    this.setState({showChoices: true, offeredSpells})
  }
  learnSpell(spell) {
    this.props.dispatch(addSpell(spell))
    set('offeredSpells', null)
    this.setState({offeredSpells: [], showChoices: null})
  }
  render() {
    const {close, gold, spellBook} = this.props
    const {offeredSpells, showChoices, selectedSpell} = this.state
    const spellCost = spellBook.length * 300
    return <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title is-1">The Library</p>
          <button onClick={close} className="delete" aria-label="close"></button>
        </header>
        <section style={{backgroundColor: '#A9A9A9'}} className="modal-card-body">
          <p className="title is-1">Welcome to The Library!</p>
          <p className="subtitle is-3">Here you can learn new spells to support your party in Dungeons</p>
          <p className="subtitle is-3">It will cost {spellCost} Gold for your next Spell</p>
          {showChoices
            ? (<div>
              <p className="title is-3">Choose a Spell:</p>
              <hr />
              {offeredSpells.map((spell, i) => <div key={`offered-spell-${i}`} className="">
                <div className="columns">
                  <div className="column is-3"></div>
                  <div className="column is-6 has-text-centered">
                    <p className="title is-4">{spell.name}</p>
                  </div>
                  <div className="column is-3">
                    {selectedSpell != spell
                      ? <button onClick={() => this.selectSpell(spell)} className="button is-success">View More</button>
                      : <button onClick={() => this.selectSpell(null)} className="button is-warning">Show Less</button>
                    }
                  </div>
                </div>
                {selectedSpell == spell && <div className="has-text-centered">
                  <div className="subtitle is-5">{spell.description}</div>
                  <div className="columns">
                    <div className="column is-4"><p className="subtitle is-4">Cast: {spell.cast} s</p></div>
                    <div className="column is-4"><p className="subtitle is-4">Cost: {spell.cost} s</p></div>
                    <div className="column is-4"><p className="subtitle is-4">Cooldown: {spell.coolDown} s</p></div>
                  </div>
                  <button onClick={() => this.learnSpell(spell)} className="button is-success is-large">Learn</button>
                </div>}
                <hr />
              </div>)}
            </div>)
            : (gold >= spellCost
              ? <button onClick={this.showOptions} className="button is-large is-fullwidth">Learn a Spell! (-{spellCost} Gold)</button>
              : <button className="is-danger is-large button is-fullwidth" disabled>Not Enough Gold</button>
            )
          }
        </section>
        <footer className="modal-card-foot">
          <button onClick={close} className="button is-large is-info is-outlined is-fullwidth">Leave</button>
        </footer>
      </div>
    </div>
  }
}

const mapStateToProps = ({gold, spellBook}) => {
  return {
    gold,
    spellBook
  }
}

export default connect(mapStateToProps)(RecruitmentCentre)
