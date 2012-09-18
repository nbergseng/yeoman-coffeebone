module.exports.<%= _.classify(name) %>.initialize = (app) -> 
  <% _.each(attrs, function(attr, i) { %>
    app.<%= _.camelize(attr.method) %>('<%= attr.path %>', (request, response) ->
      
    )
  <% }); %>}); 
