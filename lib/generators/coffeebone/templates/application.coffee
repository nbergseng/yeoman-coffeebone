requirejs.config
  paths:
    backbone: "framework/backbone"
    handlebars: "framework/handlebars"
    lodash: "framework/lodash"
    jquery: "framework/jquery.min"
    affix: "framework/bootstrap/bootstrap-affix"
    alert: "framework/bootstrap/bootstrap-alert"
    button: "framework/bootstrap/bootstrap-button"
    carousel: "framework/bootstrap/bootstrap-carousel"
    collapse: "framework/bootstrap/bootstrap-collapse"
    dropdown: "framework/bootstrap/bootstrap-dropdown"
    modal: "framework/bootstrap/bootstrap-modal"
    popover: "framework/bootstrap/bootstrap-popover"
    scrollspy: "framework/bootstrap/bootstrap-scrollspy"
    tab: "framework/bootstrap/bootstrap-tab"
    tooltip: "framework/bootstrap/bootstrap-tooltip"
    transition: "framework/bootstrap/bootstrap-transition"
    typeahead: "framework/bootstrap/bootstrap-typeahead"

  shim:
    affix: 
      deps: ["jquery"]
    alert: 
      deps: ["jquery"]
    button: 
      deps: ["jquery"]
    carousel: 
      deps: ["jquery"]
    collapse: 
      deps: ["jquery"]
    dropdown: 
      deps: ["jquery"]
    modal: 
      deps: ["jquery"]
    popover: 
      deps: ["jquery", "tooltip"]
    scrollspy: 
      deps: ["jquery"]
    tab: 
      deps: ["jquery"]
    tooltip: 
      deps: ["jquery"]
    transition: 
      deps: ["jquery"]
    typeahead: 
      deps: ["jquery"]
    backbone:
      deps: ["lodash", "jquery", "affix", "alert", "button", "carousel", "collapse", "dropdown", "modal", "popover", "scrollspy", "tab", "tooltip", "transition", "typeahead"]
      exports: "Backbone"



require(['backbone', 'handlebars', './views/ApplicationView'], (Backbone, Handlebars, ApplicationView) ->
  mainView = new ApplicationView {el: $('#container')}
  mainView.render()
)
