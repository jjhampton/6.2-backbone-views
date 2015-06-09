(function(){
  'use strict';

    console.log("TEST");

    var LikeModel = Backbone.Model.extend({
      defaults: {
        count: 0
      },

      like: function() {
        var currentCount = this.get('count');
        console.log("Current count is" + currentCount);
        this.set({'count': currentCount + 1});
        console.log("Set count is" + this.get('count'));
      }
    });

    var PageView = Backbone.View.extend({
      template: JST.likeButton,

      events: {
        'click': 'alertTest',
      },
      initialize: function() {
        this.render();
      },
      render: function() {
        var count = this.model.get('count');
        console.log("Count is " + count);
        this.$el.html(this.template(count));
        $('.container').html(this.el);
      },
      alertTest: function() {
        alert("Click pressed");
      }
    });

    var currentLikes = new LikeModel();
    var currentPage = new PageView({model: currentLikes});
})();
