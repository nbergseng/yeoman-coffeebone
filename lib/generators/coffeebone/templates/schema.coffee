exports.initialize = (app) ->
  new app.mongoose.Schema({
  <% _.each(attrs, function(attr, i) { %>
    <%= _.camelize(attr.name) %>: <%= attr.type %>
  <% }); %>}); 
