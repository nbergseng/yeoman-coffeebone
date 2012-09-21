require(['./views/ApplicationView'], (ApplicationView) ->
  mainView = new ApplicationView {el: $('#container')}
  mainView.render()
)