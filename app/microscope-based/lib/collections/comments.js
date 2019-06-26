Comments = new Mongo.Collection('comments');

Darja = {
  postId: String, //TODO: rename it to englishId
  text: String,
  wilayaCode: String, // parse body or user.wilaya
}

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });
    
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!post)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    
    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    
    // update the post with the number of comments
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});
    
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    
    // now create a notification, informing the user that there's been a comment
    createCommentNotification(comment);
    
    return comment._id;
  },
  
  react: function(darjaId, reaction) {
    check(this.userId, String);
    check(darjaId, String);
    check(reaction, Number);
    
    var affected = Comments.update({
      _id: darjaId,
      reactors: {$ne: this.userId}
    }, {
      $addToSet: {upvoters: this.userId},
    });
    
    if (!affected)
      throw new Meteor.Error('invalid', "You weren't able to upvote that post");
  }

});
