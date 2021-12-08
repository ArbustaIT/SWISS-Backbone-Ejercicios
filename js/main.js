requirejs.config({
  shim: {
    jquery: {
      exports: "$",
    },
    underscore: {
      exports: "_",
    },
    backbone: {
      deps: ["lib/underscore", "lib/jquery"],
      exports: "Backbone",
    },
    bootstrap: {
      deps: ["jquery"],
    },
  },
  paths: {
    jquery: "./lib/jquery",
    underscore: "./lib/underscore",
    backbone: "./lib/backbone",
    bootstrap: "./lib/bootstrap",
  },
  waitSeconds: 0,
  //urlArgs: 'v='+Math.floor(math.random()*9999)
});

require(["app"], function (App) {
  App.initialize();
});
