(function(){
    var Race = require('../models/Race');

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

    function CreateCharacterViewModel() {
        this.races = [new Race('Dwarf'), new Race('Elf'), new Race('Gnome'), new Race('Half-Elf'), new Race('Halfling'),
            new Race('Half-Orc'), new Race('Human')];

        this.selectedRace = ko.observable();
        this.selectedSex = ko.observable('male');

        this.selectRace = function(race, evt) {
            this.selectedRace(race);

            $(evt.currentTarget).removeClass('z-depth-1');
            $('.race.z-depth-2').removeClass('z-depth-2');
            $(evt.currentTarget).addClass('z-depth-2');
        }.bind(this);
    }

    ko.applyBindings(new CreateCharacterViewModel());

})();
