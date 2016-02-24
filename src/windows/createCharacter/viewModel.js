'use strict';

(function(){
    let Race = require('../../models/Race');

    ko.bindingHandlers.mouseOver = {
        init: function(element) {
            $(element).on('mouseover', function(evt){
                $('.race.z-depth-1').removeClass('z-depth-1');
                $(this).addClass('z-depth-1');
            });
        }
    };

    ko.bindingHandlers.mouseLeave = {
        init: function(element) {
            $(element).on('mouseleave', function(evt){
                $('.race.z-depth-1').removeClass('z-depth-1');
                $(this).addClass('z-depth-1');
            });
        }
    };

    class RaceModel {
        constructor(name, description) {
          this.name = ko.observable(name);
          this.description = ko.observable(description);
        }

        maleFaceImg () {
          return `Male${this.name().replace('-', '')}Face.png`;
        }

        femaleFaceImg () {
          return `Female${this.name().replace('-', '')}Face.png`;
        }

        maleBodyImg () {
          return `Male${this.name().replace('-', '')}Body.png`;
        }

        femaleBodyImg () {
          return `Female${this.name().replace('-', '')}Body.png`;
        }

        createImageName (type, sexo) {
            return `${sexo}${this.name().replace('-', '')}${type}.png`;
        }
    }

    function CreateCharacterViewModel() {
        this.races = [new RaceModel('Dwarf', 'Isso é um anao'), new RaceModel('Elf', 'agora um elfo'), new RaceModel('Gnome', 'agora um gnomo'),
        new RaceModel('Half-Elf', 'olha o meio elfo ai.'), new RaceModel('Halfling', 'Halfling maroto'), new RaceModel('Half-Orc', 'Orc bruto'),
        new RaceModel('Human', 'meh')];

        this.selectedRace = ko.observable();
        this.selectedSex = ko.observable('Male');

        this.selectRace = function(race, evt) {
            this.selectedRace(race);

            $(evt.currentTarget).removeClass('z-depth-1');
            $('.race.z-depth-2').removeClass('z-depth-2');
            $(evt.currentTarget).addClass('z-depth-2');
        }.bind(this);

        this.selectSex = function(sex, evt) {
            let numberOfRaces = this.races.length;
            let racesElements = $('div.race');
            let selectedSex = this.selectedSex;
            let selectedRace = this.selectedRace;

            if($(evt.currentTarget).prop('value') === selectedSex()) {
                return true;
            }

            racesElements.reverse().each(function(index){
                let race = $(this);
                setTimeout(function(){
                    if(index === numberOfRaces - 1) {
                        race.animate({width:'toggle'},350, function(){
                            selectedSex($('input[name=sexRadio]:checked').val());
                        });
                        if(selectedRace()) {
                            $('.race-description').slideUp(350, function(){
                                $('.race-description').slideDown(350);
                            });
                        }
                        racesElements.reverse().each(function(index2){
                            let race2 = $(this);
                            setTimeout(function(){
                                race2.animate({width:'toggle'},350);
                            }, 250*(index2 + 1));
                        });
                    } else {
                        race.animate({width:'toggle'},350);
                    }
                }, 250*index);
            });

            return true;
        }.bind(this);
    }

    ko.applyBindings(new CreateCharacterViewModel());

})();
