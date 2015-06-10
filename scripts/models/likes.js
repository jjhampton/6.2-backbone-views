export default Backbone.Model.extend({
  defaults: {
    count: 0,
    buttonText: "Likes" //starting value when at 0
  },

  like: function() {
    var buttonText;
    var initialCount = this.get('count');
    this.set({'count': initialCount + 1});
    buttonText = this.get('count') > 1 ? 'Likes' : 'Like';
    this.set({'buttonText': buttonText});
    }
});
