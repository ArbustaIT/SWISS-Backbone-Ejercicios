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
        underscore: 'libs/underscore',
        jquery: './lib/jquery',
        backbone: 'libs/backbone',
        bootstrap: 'libs/bootstrap',
        handlebars: '../node_modules/lib/handlebars',
   },
   waitSeconds: 0,
   urlArgs: 'v='+Math.floor(math.random()*9999)
});


require(['app'], function(App){
    App.initialize();
})