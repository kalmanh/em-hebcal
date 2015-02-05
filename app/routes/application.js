import Ember from 'ember';

import Hebcal from 'npm:hebcal';

export default Ember.Route.extend({
    model: function(){
        var calendar = new Hebcal(5775, 10);

        return calendar.days().map(function(day){ return day.toString('h'); });
    }
});
