(function(){
  'use strict';

    console.log("TEST");

    var LikeModel = Backbone.Model.extend({
      defaults: {
        count: 0,
        buttonText: "Likes"
      },

      like: function() {
        var buttonText;
        var initialCount = this.get('count');
        console.log("Initial count is " + initialCount);
        this.set({'count': initialCount + 1});
        console.log("Set count is " + this.get('count'));
        buttonText = this.get('count') > 1 ? 'Likes' : 'Like';
        this.set({'buttonText': buttonText});
        }
    });

    var PageView = Backbone.View.extend({
      template: JST.likeButton,

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
        console.log("Count is " + count);
        this.$el.html(this.template({
          count: count,
          buttonText: buttonText
          }));
        return this;
      },
    });


    var currentLikes = new LikeModel();
    var currentPage = new PageView({model: currentLikes});
    $('.container').html(currentPage.el);


})();
