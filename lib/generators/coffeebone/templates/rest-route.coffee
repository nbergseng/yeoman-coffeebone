module.exports.initialize = (app) -> 
  <%= name %> = app.db.model('<%= name %>', app.schemas.<%= name %>)

  app.get('<%= prefix %><%= _.slugify(name) %>', (request, response) ->
    <%= name %>.find(request.params, (err, objs) -> 
      response.send(JSON.stringify(objs))
    )
  )
  app.get('<%= prefix %><%= _.slugify(name) %>/:id', (request, response) ->
    id = request.params.id;
    <%= name %>.findById(id, (err, obj) -> 
      response.send(JSON.stringify(obj))
    )
  )
  app.put('<%= prefix %><%= _.slugify(name) %>/:id', (request, response) ->
    id = request.params.id;
    <%= name %>.update({_id: id}, {$set: request.body}, (error, result) ->
        response.send(JSON.stringify(result))
      )
  )
  app.post('<%= prefix %><%= _.slugify(name) %>', (request, response) ->
    obj = new <%= name %>(request.body)
    obj.save((err) ->
      response.send(JSON.stringify(obj));
    )
  )
  app.delete('<%= prefix %><%= _.slugify(name) %>/:id', (request, response) ->
    id = request.params.id;
    if (id)
      <%= name %>.findById(id, (err, obj) -> 
        obj.remove(() ->
            response.send('')
          )
      )
  )
 
