(function(){
  'use strict';

    var LikeModel = Backbone.Model.extend({
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

    var PageView = Backbone.View.extend({
      tagName: 'button',
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
        this.$el.html(this.template({
          count: count,
          buttonText: buttonText
          }));
        return this;
      },
    });


    var currentLikes = new LikeModel();
    var currentPage = new PageView({model: currentLikes});
    $('.container').html(currentPage.$el);


})();
