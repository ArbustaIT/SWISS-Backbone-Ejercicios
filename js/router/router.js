define([
    'lib/jquery',
    'lib/underscore',
    'lib/backbone'
], function($, _, Backbone){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '*actions*': 'defaultRoute'
        },

        defaultRoute: function(){
            console.log('default route');
        }
    });

    

    var initialize = function(){
        var appRouter = new AppRouter();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    }
})