Template.postItem.helpers({
// {{pluralize votes "Vote"}},
// {{#if ownPost}}<a href="{{pathFor 'postEdit'}}">Edit</a>{{/if}}
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  }
});

Template.postItem.events({
//  <a href="#" class="upvote btn btn-default {{upvotedClass}}">⬆</a>
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});
