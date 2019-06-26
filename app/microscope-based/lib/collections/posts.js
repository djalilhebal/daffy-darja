Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the 'title' field:
    return (_.without(fieldNames, 'title').length > 0);
  }
});

Posts.deny({
  update: function(userId, post, fieldNames, modifier) {
    return !isValidatePost(modifier.$set);
  }
});

isValidatePost = function (post) {
  return !!post.title && !!post.title.length
}

Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId, String);
    check(postAttributes, {
      title: String,
    });
    
    if (!isValidatePost(postAttributes))
      throw new Meteor.Error('invalid-post', "You must write something!");
    
    var postWithSameTitle = Posts.findOne({title: postAttributes.title});
    if (postWithSameTitle) {
      return {
        postExists: true,
        _id: postWithSameTitle._id
      }
    }
    
    var user = Meteor.user();
    var post = {
      ...postAttributes,
      userId: user._id,
      author: user.username, 
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [], 
      votes: 0
    };
    
    var postId = Posts.insert(post);
    
    return {
      _id: postId
    };
  }
});
