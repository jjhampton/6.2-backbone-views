export default Backbone.View.extend({
  template: JST.likeButtonTemplate,

  events: {
    'click': function() {
      this.model.like();
      this.render();
    }
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    var count = this.model.get('count');
    var buttonText = this.model.get('buttonText');
    this.$el.html(this.template({
      count: count,
      buttonText: buttonText
      }));
    return this;
  },
});
