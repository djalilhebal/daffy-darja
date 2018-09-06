# Daffy Darja
What's the weirdest Wilaya's way of talking? *[DRAFT] [JOKE] [MEMOIR PARODY] [Learning UML, Promises, Vue, Vuetify, and maybe RESTful API]*

I really don't know what the hell I'm doing. This shit doesn't sound very boring/serious/academic. I must be doing it wrong OvO


<br>
## Title Page
**Gamification**

***Case study: A crowdsourcing system for building an English-Darja bilingual text corpus***

<br>

Djalil "Despair" Dreamski

<br>


Posted in fulfillment of the requirements for the degree of Master in Meaninglessness, October 2018


<br>
## Abstract
Due to the pervasive anti-intellectualism in Algeria, relying on the Algerian community's serious collaboration to do anything serious is hopeless. In *My Mean Memoir*, I propose directing Algerians' primitiveness towards building a useless dataset. This data can be used in sociolinguistic research, machine translation, and other Natural Language Processing tasks.


<br>
## Acknowledgment/Dedication
First and foremost, I have to thank Shinedown for giving me the *Energy* to be a proud *Outcast*, for teaching me to *Sin with a Grin*, and for teaching me that being unapologetic is all what one needs to succeed in life.

To Abdou, I will always be in debt; you have always been a friend, a supporter, and a mentor.

I dedicate this junk to nobody.


<br>
## Quote
```
You think that by crying to me
Looking so sorry that I'm gonna believe
You've been infected by a social disease
Well, then take your medicine

I created the sound of madness
Wrote the book on pain
Somehow I'm still here to explain
That the darkest hour never comes in the night
```
-- *Sound of Madness, Shinedown*


<br>
## Contents
- Abstract
- Acknowledgment
- Introduction
- Bibliography


<br>
## Concepts
- **Crowdsourcing**
- **Gamification** (competitive)
- **Xenophobia**, **regionalism**, **outgroup hostility** (and mockery)
- **Languagism**
- **Self-representation** (and pride)

Just 'Wikipedia' them for God's sake!


<br>
## Existing Works
**The Google Translate Community** uses crowd-sourcing to improve its translations. Users gain points by adding translations or judging others'.

**Tatoeba**, from Wikipedia:
> Tatoeba.org is a free collaborative online database of example sentences geared towards foreign language learners. Its name comes from the Japanese term "tatoeba" (例えば　tatoeba), meaning "for example". Unlike other online dictionaries, which focus on words, Tatoeba focuses on translation of complete sentences. In addition, the structure of the database and interface emphasize one-to-many relationships.

**How is our project different from them?** Ours is not serious. Period.


<br>
## Introduction
It all started after I've finished reading a friend's memoir, and done scratching this unreadable shit:

*(2018-08-20)*

![](idea-2018-08-20.jpg)

<hr>

"I Am Dz And I Speak English" is a Facebook group with over 200K members. Most of these members are Algerian and know both Darja (AKA Algerian Arabic) and (to varying degrees) English. They are our target.

In that group, users highly engage with posts of the forms, "How do you say <ENGLISH> in your Wilaya?" and, "How do you say <DARJA> in English?"

The whole point is to provoke Algerians to show off their cool ways of talking, to defend their dialects, or to mock others'. Basically using the *concepts* mentioned above.


<br>
## System Design
### "They Talk Like This"
Browsing English sentences (automatically sorted, or filtered by *tags*), users can **add translations** (Darja); if the Wilaya's number is not specified, the user's Wilaya will be assumed.

Users can **react** to translations: Assessing their accuracy and ridiculousness. Reactions = {LOL/true, Mmm/unsure, Nah/wrong}

To stimulate the folks, low quality sentences would be used (that talk about 'love', relationships, and impolite/offensive/insulting topics...)

### "Guess the Wilaya!"
It serves a similar purpose as 'reactions':

- Given a Darja-English phrase, the user can:
  - Enter the Wilaya's number
  - Skip if cannot decide
  - Mark as spam

- To make it less boring, score the user's performance

### "LOLest List"
To encourage users to participate and compete, we introduced the "LOLest List": A dynamically updated list of the Wilayas/users/phrases with the most "LOL" reactions.


<br>
### UML Diagrams
*Using Microsoft Visio Pro 2016*

#### Wireframe
![](UML/uml_wireframe-translator.jpg)

#### Use Cases
Translator

![](UML/uml_use-case-translator.jpg)

Guesser

![](UML/uml_use-case-guesser.jpg)

#### Database
![](UML/uml_database.jpg)


<br>
## Web API
All requests are JSON representations that get POSTed to a single entry point (`/api.js`);
The same goes with responds: In addition, the HTTP code is always `OK`, regardless of the result.

```js
const req = {
  v: 0,
  action: 'login',
  user: 'malice',
  pass: 'GU3SS'
}
```
```js
const res = {
  type: 'loginError',
  message: 'User or password is not correct'
}
```

## Implementation
I implemented practically nothing. Ain't good with frameworks.

### Development tools
Software and hardware used:

- **Atom** is a code editor developed by GitHub.

- **[Vue][vue-repo]**, from Wikipedia
> Vue.js is an open-source JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is simplified with Vue because it is designed to be incrementally adoptable. Vue can also function as a web application framework capable of powering advanced single-page applications.

- **[Vuetify][vuetify-repo]** is an implementation of Google's Material Design, built for Vue.

- **Google Chrome** for testing the web app:
  - **Android** 6.0 on Condor P6 Pro LTE
  - **Windows** 10 Pro 64-bit on HP 255 G1 Notebook PC (4GB RAM, 1.48 GHz)

## Methodology/Results/Conclusion
- We (as in, "I") manually examined 5% of users' submissions.
- Our nonexistent app generated no data. Most of them (72%) are spam. The rest (28%) are badly formatted and unusable.
- This was a total waste of time.


<br>
## Bibliography/References
- Brian Mulloy (2012), Web API Design: Crafting Interfaces that Developers Love

- How to Write Your Thesis.  https://www.ldeo.columbia.edu/~martins/sen_sem/thesis_org.html


## License
WTFPL

[vue-repo]:https://github.com/vuejs/vue
[vuetify-repo]:https://github.com/vuetifyjs/vuetify
