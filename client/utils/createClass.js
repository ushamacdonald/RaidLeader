  const createMember = (name, level, id, weapon_id, heroClass, hp, power, speed) => (
  {
    name,
    level,
    heroClass,
    initHp: hp,
    hp,
    initSpeed: speed,
    speed,
    initPower: power,
    power,
    isAlive: true,
    id,
    weapon_id,
    effects: []
  }
)

const createPaladin = (name, level, id, weapon_id) => createMember(name, level, id, weapon_id, 'Paladin', (level + 1) * 50, (level + 1) * 15, 2)

const createPriest = (name, level, id, weapon_id) => createMember(name, level, id, weapon_id, 'Priest', (level + 1) * 30, level * 5, 4 + level)

const createMonk = (name, level, id, weapon_id) => createMember(name, level, id, weapon_id, 'Monk', (level + 1) * 40, (level*20) + 20, 0.5)

const createRogue = (name, level, id, weapon_id) => createMember(name, level, id, weapon_id, 'Rogue', (level + 1) * 40, level * 10, 4 + level)

const createMage = (name, level, id, weapon_id) => createMember(name, level, id, weapon_id, 'Mage', (level + 1) * 30, level * 30, 2)

const createWarrior = (name, level, id, weapon_id) => createMember(name, level, id, weapon_id, 'Warrior', (level + 1) * 50, level * 30, 2.5)

const createWarlock = (name, level, id, weapon_id) => createMember(name, level, id, weapon_id, 'Warlock', (level + 1) * 40, level * 30, 3)


module.exports = ({name, heroClass, level, id, weapon_id}) => {
  switch(heroClass) {
    case 'Paladin': return createPaladin(name, level, id, weapon_id)
    case 'Priest': return createPriest(name, level, id, weapon_id)
    case 'Monk': return createMonk(name, level, id, weapon_id)
    case 'Rogue': return createRogue(name, level, id, weapon_id)
    case 'Mage': return createMage(name, level, id, weapon_id)
    case 'Warrior': return createWarrior(name, level, id, weapon_id)
    case 'Warlock': return createWarlock(name, level, id, weapon_id)
    default: return null
  }
}
