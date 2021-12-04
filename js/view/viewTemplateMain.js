define([
    'lib/backbone',
    'text/templates!templateMain.html',
], function(Backbone, templateMain){
    var MainView = Backbone.View.extend({
        el: '#main',
        initialize: function(){
            this.render();
        },
        render: function(){
            this.$el.html(templateMain);
            return this;
        }
    });

    var mainView = new MainView();
    console.log(mainView.el);
})