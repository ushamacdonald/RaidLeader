export function startingBuff (heroClass) {
  switch(heroClass) {
    case 'Paladin': return 'The Paladin gains (+3%) HP for each other Party Member. The Paladin also starts as both the Player and the Boss target'
    case 'Priest': return "The Priest increases each Party Member's max HP by (10%)"
    case 'Rogue': return "The Rogue removes (5%) of the Boss' current HP"
    case 'Warrior': return "The Warrior increases the Power of each other Party Member by (+10%)"
    case 'Warlock': return "The Warlock removes (10%) of the Boss' Armor"
    case 'Mage': return "The Mage increases the Player's Mana by (20%)"
    case 'Monk': return "The Monk gains (10%) more Power for each other Party Member"
    case 'Hunter': return "The Hunter increases the speed of all other party members by (10%)"
    case 'Shaman': return "The Shaman reduces the Cast Time and Cool Down of all Player Spells by (10%)"
    case 'Bard': return "The Bard reduces the Mana Cost of ALL Player Spells by (1)"
    case 'Necromancer': return "The Necromancer increases your Player Power by (10%)"
    case 'Beast Master': return "The Beast Master will Summon a Wolf (with (50%) of the Beast Master's Health and power, and (100%) Speed) to assist your party"
    break;
    default: return null
  }
}

export function classTraits(heroClass) {
  switch(heroClass) {
    case 'Paladin': return "The Paladin's attacks heal the Paladin equal to their Power if the Paladin is the Boss' Target. These attacks also force the Boss to target the Paladin"
    case 'Mage': return "The Mage deals (100%) more damage while the Player is below (30%) Mana"
    case 'Warrior': return "The Warrior's attacks deal Critical Damage while the Boss is below (25%) HP. (Critical Damage: Deals (100%) bonus Damage and ignores Armor)"
    case 'Priest': return "The Priest heals a Damaged Party Member instead of Attacking the Boss. (Any excess healing will be dealt as damage to the Boss at 3x the amount of overhealing)"
    case 'Rogue': return "All attacks have a (20%) chance to deal Critical Damage (Critical Damage: Deals (100%) bonus Damage and ignores Armor)"
    case 'Monk': return "Whenever the Monk attacks, Heal All Friendly Characters for (100%) of the Attack's Damage, divided amongst all recruits"
    case 'Warlock': return "Whenever the Warlock attacks, all Party Members take (5%) of the max HP as damage"
    case 'Hunter': return "The Hunter's attacks deal Critical Damage while below 50% Health, and these attacks also heal the Hunter for 10% of Max Health"
    case 'Shaman': return "The Shaman's attacks have a chance to place a Renew effect on a friendly recruit with the lowest health %, healing for 60% of Target's Max Health over 15 seconds. (This chance scales with the Shaman's Speed and will occur roughly once per 10 seconds.)"
    case 'Bard': return "The Bard's attacks have a chance to restore 3 Mana to the Player. (This chance scales with the Bard's Speed and will occur roughly once per 10 seconds)"
    case 'Necromancer': return "The Necromancer continues to Attack while Dead, for (50%) of normal Damage"
    case 'Beast Master': return "The Beast Master will deal (20%) more damage if their Summoned Pet is Dead"
    default: return null
  }
}

export function classIcons (heroClass) {
  switch(heroClass) {
    case 'Paladin': return 'ra-heavy-shield'
    case 'Mage': return 'ra-frostfire'
    case 'Priest': return 'ra-angel-wings'
    case 'Warlock': return 'ra-flaming-claw'
    case 'Rogue': return ' ra-hood'
    case 'Monk': return 'ra-doubled'
    case 'Warrior': return 'ra-knight-helmet'
    case 'Hunter': return 'ra-archer'
    case 'Shaman': return 'ra-gem-pendant'
    case 'Bard': return 'ra-ocarina'
    case 'Necromancer': return 'ra-death-skull'
    case 'Beast Master': return 'ra-pawprint'
    case 'Beast': return 'ra-wolf-head'
    case 'Player': return 'ra-player-king'
    default: return null
  }
}

export function attackIcons (heroClass) {
  switch(heroClass) {
    case 'Paladin': return {
      colour: '#FF3E96    ',
      rotates: true,
      rotation: 0,
      icon: 'ra-bolt-shield'
    }
    case 'Mage': return {
      colour: '#EE9A00',
      rotates: false,
      rotation: 180,
      icon: 'ra-frostfire'
    }
    case 'Warlock': return {
      colour: '#9370DB',
      rotates: false,
      rotation: 180,
      icon: 'ra-beam-wake'
    }
    case 'Rogue': return {
      colour: '#800000',
      rotates: false,
      rotation: 180,
      icon: 'ra-plain-dagger'
    }
    case 'Hunter': return {
      colour: '#8E8E38',
      rotates: false,
      rotation: 180,
      icon: 'ra-broadhead-arrow'
    }
    case 'Priest': return {
      colour: '#C0FF3E',
      rotates: true,
      rotation: 0,
      icon: 'ra-radial-balance'
    }
    case 'Shaman': return {
      colour: '#5CACEE',
      rotates: false,
      rotation: 180,
      icon: 'ra-focused-lightning'
    }
    case 'Warrior': return {
      colour: '#EE5C42',
      rotates: true,
      rotation: 0,
      icon: 'ra-spinning-sword'
    }
    case 'Monk': return {
      colour: '#00FF7F',
      rotates: true,
      rotation: 0,
      icon: 'ra-fluffy-swirl'
    }
    case 'Bard': return {
      colour: '#4682B4',
      rotates: true,
      rotation: 0,
      icon: 'ra-ringing-bell'
    }
    case 'Player': return {
      colour: 'white',
      icon: 'ra-player-king'
    }
    case 'Necromancer': return {
      colour: 'black',
      icon: 'ra-sickle',
      rotation: 270,
      rotates: true
    }
    case 'Beast Master': return {
      colour: 'sienna',
      icon: 'ra-horseshoe',
      rotation: 270,
      rotates: true
    }
    case 'Beast': return {
      colour: 'sienna',
      icon: 'ra-broken-bone',
      rotation: 270,
      rotates: true
    }
    default: return null
  }
}
