define([
    "jquery",
    "underscore",
    "Backbone",
    "Boostrap",
    "../templates/templateMain",
], function ($, _, Backbone, Bootstrap, TemplateMain) {
    var AppView = Backbone.View.extend({

        initialize: function() {
			this.render();
		},

        el: "#main",
        
        template: _.template(TemplateMain),
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
    return AppView;
});