define(['text!templates/<%= name %>.handlebars'], (templateString) ->
  Backbone.View.extend({
    initialize: () ->


    render: () -> 
      template = Handlebars.compile templateString
      data = {}
      data = @model.attributes if not typeof @model is 'undefined'
      $(@el).empty().append(template(data))

  })
)
