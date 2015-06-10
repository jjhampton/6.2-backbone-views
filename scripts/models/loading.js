export default Backbone.Model.extend({
  defaults: {
    //starting values before it is clicked:
    isLoading: false,
    text: "Submit"
  },

  // load: function() {
  //   var text;
  //   // var initialCount = this.get('count');
  //   // this.set({'count': initialCount + 1});
  //   text = this.get('count') > 1 ? 'Likes' : 'Like';
  //   this.set({'text': text});
  //   }
});
