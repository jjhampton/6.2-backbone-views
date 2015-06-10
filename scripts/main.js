(function(){
  'use strict';

    var LoadingModel = Backbone.Model.extend({
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

    var PageView = Backbone.View.extend({
      template: JST.submitButtonTemplate,

      events: {
        'click': function() {
          console.log("clicked");
          var that = this;
          this.model.set({'text': 'Loading...'});
          this.model.set({'isLoading': true});
          //change text CSS to lighter gray
          this.render();
          setTimeout(function() {
            that.model.set({'text': 'Submit'});
            that.model.set({'isLoading': false});
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


    var submitButtonModel = new LoadingModel();
    var submitButtonView = new PageView({model: submitButtonModel});
    $('.container').html(submitButtonView.$el);


})();
