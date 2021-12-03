define(["lib/backbone"], function (Backbone) {
  var appModel = Backbone.Model.extend({
    defaults: {
      title: "unnamed",
      content: "empty",
    },
    initialize: function() {
        console.log("model initialized");
    }
  });
});
