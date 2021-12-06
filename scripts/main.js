requirejs.config({
   shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery']
        },
        handlebars: {
            exports: 'Handlebars'
        },
        jquery: {
            exports: '$'
        }

   },
   paths: {
        underscore: '/js/lib/underscore',
        jquery: 'js/lib/jquery',
        backbone: 'js/lib/backbone',
        bootstrap: 'js/lib/bootstrap',
        handlebars: '../node_modules/handlebars/dist/handlebars',
   },
   waitSeconds: 0
});


require(['app'], function(App){
    App.initialize();
})