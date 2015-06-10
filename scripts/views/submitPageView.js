export default Backbone.View.extend({
  template: JST.submitButtonTemplate,

  events: {
    'click': function() {
      console.log("clicked");
      var that = this;
      this.model.set({'text': 'Loading...'});
      this.model.set({'isLoading': true});
      this.render();
      //change text CSS to lighter gray; must be done after element created by this.render() in order to function
      $('button').css('color', 'gray');

      //reset values to initial text, isLoading/non-disabled, and color
      setTimeout(function() {
        that.model.set({'text': 'Submit'});
        that.model.set({'isLoading': false});
        $('button').css('color', 'inherit');
        that.render();
      }, 4000);
    }
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    var text = this.model.get('text');
    var isLoading = this.model.get('isLoading');

    this.$el.html(this.template({
      text: text,
      isLoading: isLoading,
      }));
    return this;
  },
});
