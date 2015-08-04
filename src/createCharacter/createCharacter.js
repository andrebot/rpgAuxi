(function(){

    ko.bindingHandlers.mouseOver = {
        init: function(element) {
            $(element).on('mouseover', function(evt){
                $('.race.z-depth-1').removeClass('z-depth-1')
                $(this).addClass('z-depth-1');
            });
        }
    };

    ko.bindingHandlers.mouseLeave = {
        init: function(element) {
            $(element).on('mouseleave', function(evt){
                $('.race.z-depth-1').removeClass('z-depth-1')
                $(this).addClass('z-depth-1');
            });
        }
    };

    function Race (name, faceImg) {
        this.name = name;
        this.faceImg = faceImg;
    }

    function CreateCharacterViewModel() {
        this.races = [new Race('Dwarf', 'DwarfFace.png'),new Race('Elf', 'ElfFace.png'),new Race('Gnome', 'GnomeFace.png'),
            new Race('Half-Elf', 'HalfElfFace.png'),new Race('Halfling', 'HalflingFace.png'),new Race('Half-Orc', 'HalfOrcFace.png'),
            new Race('Human', 'HumanFace.png')];

        this.selectedRace = {};

        this.selectRace = function(race, evt, mais, um) {
            this.selectedRace = race;

            $(evt.currentTarget).removeClass('z-depth-1');
            $('.race.z-depth-2').removeClass('z-depth-2');
            $(evt.currentTarget).addClass('z-depth-2');
        }.bind(this);
    }

    ko.applyBindings(new CreateCharacterViewModel());

})();