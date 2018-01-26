import Damaged_Dragon from './The_Hunt/Damaged_Dragon'
import Biting_Bear from './The_Wilds/Biting_Bear'
import Trampling_Turtle from './The_Wilds/Trampling_Turtle'
import Spitting_Spider from './The_Wilds/Spitting_Spider'
import Seeping_Slime from './The_Swamp/Seeping_Slime'
import Decaying_Deer from './The_Swamp/Decaying_Deer'
import Lunging_Locusts from './The_Swamp/Lunging_Locusts'
import Plague_Piltherer from './The_Swamp/Plague_Piltherer'

export default function (bossName) {
  switch(bossName) {
    case 'Damaged Dragon': return Damaged_Dragon
    case 'Biting Bear': return Biting_Bear
    case 'Trampling Turtle': return Trampling_Turtle
    case 'Spitting Spider': return Spitting_Spider
    case 'Seeping Slime': return Seeping_Slime
    case 'Decaying Deer': return Decaying_Deer
    case 'Lunging Locusts': return Lunging_Locusts
    case 'Plague Piltherer': return Plague_Piltherer
    default: return null
  }
}