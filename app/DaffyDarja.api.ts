// Just a general idea of how things will be
// in actuality these will be Mongo Collections and Meteor Methods and idk.
abstract class DaffyDarja {
  private reactions = new Set<Reaction>();
  private englishes = new Set<English>();
  private darjas = new Set<Darja>();

  abstract addEnglish();
  abstract addDarja();
  abstract react();

  abstract editUser(); // user can change `name`, `pass`, and `language`
  abstract editSentence(); // Only admin/moderator
}

type ID = number;

interface Sentence {
  id: ID,
  text: string,
  userId: ID, // creator
}

interface English extends Sentence {
  tags: Set<string>,
}

interface Darja extends Sentence {
  englishId: ID,
  wilaya: number,
}

interface Reaction {
  id: ID,
  value: REACTION_VALUE,
  darjaId: ID,
  userId: ID,
}

enum REACTION_VALUE {
  meh,
  mmm,
  lol
}

// Probably use a third party lib to handle sign-ups and logins.
interface User {
  id: ID,
  name: string,
  pass: string,
  wilaya: number,
  gender: string,
  year: number, // of birth
  languages: Set<string> // Languages User knows: ar, en, fr, "amazighi", or maybe even ar_EGY

  joined: Date, // needed?
}
