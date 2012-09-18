define([], () ->
  Backbone.Model.extend({
    defaults:
     <% _.each(attrs, function(attr, i) { %>
       <%= _.camelize(attr.name) %>: <%= attr.val %>
    <% }); %>});      
)
