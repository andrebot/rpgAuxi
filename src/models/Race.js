function Race (name) {
    this.name = name;
    this.maleFaceImg = this.createImageName('Face', 'Male');
    this.femaleFaceImg = this.createImageName('Face', 'Female');
    this.maleBodyImg = this.createImageName('Body', 'Male');
    this.femaleBodyImg = this.createImageName('Body', 'Female');
    this.description = descriptions[name];

}

Race.prototype.createImageName = function (sufix, sex) {
    return sex + this.name.replace('-', '') + sufix + '.png';
};

var descriptions = {
  'Dwarf': 'Dwarfs are strong.',
  'Elf': 'Elfs are slim and cunnig.',
  'Gnome': 'Gnomes are magical creatures.',
  'Half-Elf': 'Half-Human and Half-Elfs, they are eager to learn and kind.',
  'Halfling': 'Halfling are hard to detect. If they want, they can sneaky under your nose without being noticed.',
  'Half-Orc': 'Half-Human Half-Ord, they are strong and sevage, but with a minimal amount of brain to being able to breath and count to ten.',
  'Human': 'Human are boring.'
};

module.exports = Race;
