require(['./views/ApplicationView'], (ApplicationView) ->
  console.log 'Hello from coffeebone!'
  mainView = new ApplicationView {el: $('.container')}
  mainView.render()
)