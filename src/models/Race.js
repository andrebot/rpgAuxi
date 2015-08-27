function Race (name) {
    this.name = name;
    this.maleFaceImg = this.createImageName('Face', 'Male');
    this.femaleFaceImg = this.createImageName('Face', 'Female');
    this.maleBodyImg = this.createImageName('Body', 'Male');
    this.femaleBodyImg = this.createImageName('Body', 'Female');
    this.description = 'Ahahahaha';

}

Race.prototype.createImageName = function (sufix, sex) {
    return sex + this.name.replace('-', '') + sufix + '.png';
};

module.exports = Race;
