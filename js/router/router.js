define([
    'lib/jquery',
    'lib/underscore',
    'lib/backbone',
    '../../node_modules/handlebars/lib/handlebars.js'
], function($, _, Backbone, Handlebars){
    var appRouter = Backbone.Router.extend({
        routes: {
            '*actions*': 'defaultRoute'
        }
    })
})