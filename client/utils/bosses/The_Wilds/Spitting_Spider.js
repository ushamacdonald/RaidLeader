export default {
  name: 'Spitting Spider',
  level: 1,
  initHp: 1000,
  hp: 1000,
  initPower: 25,
  power: 25,
  initArmor: 0,
  armor: 0,
  mana: 0,
  maxMana: 20,
  manaRegen: 1,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: "This Spider knows you hate her, but she hates you too, and she spits on you for it.",
  goldReward: 300,
  weaponRewards: ['Fine Silk', 'Spider Eye Wand', 'Lute Thread'],
  weaponChance: 1,
  progress_required: 2,
  icon: 'ra-spider-face',
  spells: [
    {
      name: 'Feed',
      cast: 5,
      cost: 20,
      coolDown: 20,
      type: 'special',
      singleTarget: false,
      powerRatio: 5,
      onCooldown: false,
      description: "Gain 5 POWER",
      icon: 'ra-knife-fork'
    },
    {
      name: 'Swipe',
      cast: 5,
      cost: 0,
      coolDown: 5,
      type: 'damage',
      singleTarget: false,
      powerRatio: 1,
      onCooldown: false,
      description: "Damage ALL enemy characters for 100% BOSS POWER",
      icon: 'ra-bird-claw'
    },
    {
      name: 'Spit',
      cast: 5,
      cost: 0 ,
      coolDown: 5,
      type: 'damage',
      singleTarget: false,
      powerRatio: 1,
      onCooldown: false,
      description: "Damage the PLAYER for 100% BOSS POWER",
      icon: 'ra-player-thunder-struck'
    },
  ]
}
