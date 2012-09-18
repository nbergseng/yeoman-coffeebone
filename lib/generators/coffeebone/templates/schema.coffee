module.exports.<%= _.classify(name) %>.initialize = (app) -> 
  app.db.schemas.<%= _.classify(name) %> = new app.mongoose.Schema({
    <% _.each(attrs, function(attr, i) { %>
      <%= _.camelize(attr.name) %>: <%= attr.type %>
    <% }); %>}); 
