export default {
  name: 'Damaged Dragon',
  level: 1,
  initHp: 10000,
  hp: 2000,
  initPower: 1000,
  power: 200,
  initArmor: 5000,
  armor: 0,
  mana: 10,
  maxMana: 1000,
  manaRegen: 1,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: "A big scary Dragon, with a big Boo-Boo",
  weaponRewards: ['Dragon Scale'],
  goldReward: 500,
  weaponChance: 1,
  progress_required: 0,
  spells: [
    {
      name: 'Roar',
      cast: 5,
      cost: 10,
      coolDown: 10,
      type: 'damage',
      singleTarget: false,
      powerRatio: 50,
      onCooldown: false,
      description: 'Gain 50 Power',
    },
    {
      name: 'Feeble Fire',
      cast: 3,
      cost: 5,
      coolDown: 10,
      type: 'damage',
      singleTarget: false,
      powerRatio: 0.15,
      onCooldown: false,
      description: 'Damage ALL enemy characters for 15% BOSS POWER, lose 200 health',
    },
    {
      name: 'Weakened Bite',
      cost: 0,
      cast: 4,
      coolDown: 1,
      powerRatio: 0.1,
      type: 'damage',
      singleTarget: true,
      onCooldown: false,
      description: "Damage the TARGET for 10% of BOSS POWER, lose 100 health"
    }
  ]
}