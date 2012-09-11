define(['./views/ApplicationView'], (ApplicationView) ->
  run: function(mainElement) {
    console.log 'Hello from coffeebone!'
    mainView = new ApplicationView {el: mainElement}
  }
)
