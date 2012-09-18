define(["./../models/<%= _.classify(name) %>"], (<%= _.classify(name) %>) ->
  Backbone.Collection.extend({
    model: <%= _.classify(name) %>
    url: '/<%= _.slugify(name) %>'
  })
)
