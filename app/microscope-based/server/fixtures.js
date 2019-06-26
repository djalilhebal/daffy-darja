// Fixture data

var fakeSentence = {
  english: 'Is it just me imagining things or is she in love with you?',
  tags: ['love', 'drama'],
  darjas: `
  @Mouh GL ghir ana rani netkhayel wela rahi tayha fik!
  @Rabiaa TA Rani neskhayel wla rahi tay7a fik!
  @Mohamed SK ana brrk wla ay tay7a fyk lm5lo9a
  @Mariem AL Ani ntkhayel wla tefla ay tay7a fik?
  @Hiba OR Ghir ana raha bayntli wla raha t3shk fik?
  @Wissem TZ Ghir ana li ni chama belli rahy tayha fik
  `.trim().split('\n').map((line) => {
    const rDarjaLine = /(@\w+) ([A-Z]{2}) (.+)/;
    const [, username, wilayaCode, text] = line.match(rDarjaLine);
    return { username, wilayaCode, text };
  })
}

if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  var adminId = Meteor.users.insert({
    profile: { name: 'admin' }
  });
  var admin = Meteor.users.findOne(adminId);

  var loveId = Posts.insert({
    title: fakeSentence.english,
    tags: fakeSentence.tags,
    userId: admin._id,
    author: admin.profile.name,
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: fakeSentence.darjas.length,
    upvoters: [], votes: 0
  });

  fakeSentence.darjas.forEach((darja) => {
    const userId = Meteor.users.insert({
      profile: { name: darja.username }
    });

    Comments.insert({
      postId: loveId,
      userId: userId,
      author: darja.username,
      body: darja.text,
      wilayaCode: darja.wilayaCode,
      submitted: new Date(now - 5 * 3600 * 1000),
    });  
  });
  
}
