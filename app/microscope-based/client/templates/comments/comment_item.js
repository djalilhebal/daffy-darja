Template.commentItem.helpers({
  submittedText: function() {
    return this.submitted.toDateString();
  },
  wilaya: function() {
    return Wilaya.fromCode(this.wilayaCode);
  }
});
