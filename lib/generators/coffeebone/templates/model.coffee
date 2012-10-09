define([], () ->
  Backbone.Model.extend({
    idAttribute: "_id"
    defaults:
     <% _.each(attrs, function(attr, i) { %>
       <%= _.camelize(attr.name) %>: <%= attr.val %>
    <% }); %>});      
)
