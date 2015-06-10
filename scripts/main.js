import LikeView from './views/likePageView';
import SubmitButtonView from './views/submitPageView';

import LikeModel from './models/likes';
import LoadingModel from './models/loading';




(function(){
  'use strict';

  $(document).ready(function(){
    var currentLikes = new LikeModel();
    var currentPage = new LikeView({model: currentLikes});
    $('.container-like').html(currentPage.$el);

    var submitButtonModel = new LoadingModel();
    var submitButtonView = new SubmitButtonView({model: submitButtonModel});
    $('.container-submit').html(submitButtonView.$el);

  });
})();
