import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

const bow = new Bowman('Bow');
const sword = new Swordsman('Sword');
const mag = new Magician('Mag');
const undead = new Undead('Нежить');
const zombie = new Zombie('Зомби');
const daemon = new Daemon('Демон');

console.log(bow, sword, mag, undead, zombie, daemon);
