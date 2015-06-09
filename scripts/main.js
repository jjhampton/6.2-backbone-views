(function(){
  'use strict';

  $(document).ready(function(){
    var LikeModel = Backbone.Model.extend({
      defaults: {
        count: 0
      },
      like: function() {
        var currentCount = this.get(count);
        console.log("Current count is" + currentCount);
        this.set({count: currentCount + 1});
        console.log("Set count is" + this.set);
      }
    });

  });

})();
