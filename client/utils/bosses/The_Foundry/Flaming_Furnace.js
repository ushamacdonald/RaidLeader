export default {
  name: 'Flaming Furnace',
  level: 3,
  initHp: 2000,
  hp: 2000,
  initPower: 0,
  power: 0,
  initArmor: 2000,
  armor: 2000,
  mana: 0,
  maxMana: 1000,
  manaRegen: 0,
  armorRegen: 0,
  isCasting: false,
  bossTarget: null,
  description: "The sound of drooling Magma grows louder as you enter the hall of a giant Furnace. Lava flows from the ceiling into a large iron pot. You were going to just leave it alone, but one of your Party members falls over, switching a lever. This could get messy.",
  weaponRewards: ['Curved Chassis', 'Afterburn Arrows', 'Cracked Chassis'],
  goldReward: 700,
  weaponChance: 1,
  progress_required: 0,
  icon: 'ra-lava',
  spells: [
    {
      name: 'Unleash Flames',
      cost: 0,
      cast: 10,
      coolDown: 1,
      powerRatio: 0.3,
      tickPower: 0.1,
      type: 'damage',
      singleTarget: true,
      isChanneled: true,
      ticks: 15,
      onCooldown: false,
      description: "Useable when at 0 Armor: Damage ALL enemy recruits for (150%) Boss Power over the duration of the cast. Then change to Stage 2",
      icon: 'ra-fire-shield'
    },
    {
      name: 'Heat Up',
      cast: 5,
      cost: 0,
      coolDown: 10,
      type: 'damage',
      singleTarget: false,
      powerRatio: 0.5,
      power: 10,
      mana: 10,
      onCooldown: false,
      description: 'Gain 10 Power and 10 Mana, damage ALL enemy characters for (50%) Boss Power',
      icon: 'ra-heartburn'
    },
    {
      name: 'Boil',
      cast: 5,
      cost: 0,
      coolDown: 0,
      type: 'damage',
      singleTarget: false,
      powerRatio: 0.5,
      tickPercentage: 0.1,
      ticks: 3,
      onCooldown: false,
      isChanneled: true,
      tickPower: 0.5,
      description: 'Damage a Random Enemy Recruit for (10%) Max Health 3 times during the duration of the cast',
      icon: 'ra-hot-surface'
    },
  ],
  stageTwo: {
    description: 'Enters Stage 2 after casting "Unleash Flames" at 0 Armor. During Stage 2 the Flaming Furnace will regenerate mana over time, and has a new set of spells.',
    manaRegen: 1,
    spells: [
      {
        name: 'Heat Up',
        cast: 5,
        cost: 0,
        coolDown: 10,
        type: 'damage',
        singleTarget: false,
        powerRatio: 0.5,
        power: 10,
        mana: 10,
        onCooldown: false,
        description: 'Gain 10 Power and 10 Mana, damage ALL enemy characters for (50%) Boss Power',
        icon: 'ra-heartburn'
      },
      {
        name: 'Exhaust Heat',
        cast: 5,
        cost: 10,
        coolDown: 5,
        type: 'damage',
        singleTarget: false,
        powerRatio: 0.2,
        tickPower: 0.2,
        ticks: 5,
        onCooldown: false,
        isChanneled: true,
        power: -10,
        description: 'Damage ALL enemy Recruits for (100%) Boss Damage over the duration of the cast. Lose 10 Power',
        icon: 'ra-lava'
      },
      {
        name: 'Flame',
        cast: 3,
        cost: 5,
        coolDown: 0,
        type: 'damage',
        singleTarget: true,
        powerRatio: 1,
        power: -5,
        onCooldown: false,
        description: "Damage the Boss' Target and the Player for (100%) Boss Power. Lose 5 Power",
        icon: 'ra-burning-meteor'
      }
    ]
  }
}
