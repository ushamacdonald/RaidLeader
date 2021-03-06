
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dungeons').del()
    .then(function () {
      // Inserts seed entries
      return knex('dungeons').insert([
        {name: 'The Hunt', level: 1, is_repeatable: false, max_party: 1, max_spells: 1, requires_complete: null, rewards: JSON.stringify([]), gold_reward: 500, description: "The Paladin knows the location of a dying Dragon. Dragons are pretty scary, but they always hoard a large amount of treasure. Hopefully this Dragon won't live long enough to burn you alive..."},
        {name: 'The Cursed Wilds', level: 1, is_repeatable: true, max_party: 2, max_spells: 2, requires_complete: 'The Hunt', rewards: JSON.stringify([{name: 'Cursed Staff of the Wilds', min: 0, max: 0.7}, {name: 'Cleansed Staff of the Wilds', min: 0.7, max: 1}]), gold_reward: 500, description: "Patrons of the local Town Pub have told stories of the Cursed Wilds, filled with giant beasts who have been acting more aggressively lately. Will you brave the challenge and free these Beasts from the curse?"},
        {name: 'The Swamp', level: 2, is_repeatable: true, max_party: 3, max_spells: 3, requires_complete: 'The Cursed Wilds', rewards: JSON.stringify([{name: 'Plagued Staff of the Swamp', min: 0, max: 0.7}, {name: 'Cleansed Staff of the Woods', min: 0.7, max: 1}]), gold_reward: 1000, description: "The once tranquil woods have been overwhelmed by a strange sludge in recent weeks. Many adventurers have sought the source of this plague, but none have returned. That probably means there is a lot of loot to be found here!"},
        {name: 'The Foundry', level: 3, is_repeatable: true, max_party: 3, max_spells: 3, requires_complete: 'The Swamp', rewards: JSON.stringify([]), gold_reward: 500},
        {name: 'The Armory', level: 4, is_repeatable: true, max_party: 3, max_spells: 3, requires_complete: 'The Foundry', rewards: JSON.stringify([]), gold_reward: 1000},
        {name: 'The Lair', level: 5, is_repeatable: true, max_party: 5, max_spells: 5, requires_complete: 'The Armory', rewards: JSON.stringify([]), gold_reward: 2000}
      ]);
    });
};
