define(['./views/ApplicationView'], (ApplicationView) ->
  run: (mainElement) ->
    console.log 'Hello from coffeebone!'
    mainView = new ApplicationView {el: mainElement}
)
