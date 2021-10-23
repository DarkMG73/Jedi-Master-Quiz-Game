/***
 * FOR DEVELOPMENT
 ***/
// export function questionTextList() {
//   return {
//     allFetchedQuotesIds: [36, 31, 56, 55],
//     allFetchedQuotes: [
//       {
//         type: 'questionText', id: 36,
//         preQuestion, questionText: "PATIENCE YOU MUST HAVE my young padawan - Yoda",
//         faction: 0,
//       },
//       {
//         type: 'questionText', id: 31,
//         preQuestion, questionText:
//           "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is. - Yoda",
//         faction: 0,
//       },
//       {
//         type: 'questionText', id: 56,
//         preQuestion, questionText:
//           "You can’t stop the change, any more than you can stop the suns from setting. — Shmi Skywalker",
//         faction: 2,
//       },
//       {
//         type: 'questionText', id: 55,
//         preQuestion, questionText:
//           "The dark side of the Force is a pathway to many abilities some consider to be unnatural. — Chancellor Palpatine",
//         faction: 2,
//       },
//     ],
//   };
// }

/***
 * FOR PRODUCTION
 ***/
// Cleanse after fetching:
//     Chnage ? to — (where needed)
//     Remove change "Hope" questionText to "Never Be Afraid Of Who You Are"
//     Remove (Season One, Episode 15, Trespass)
//     Change "[Luke:] I can’t believe it. [Yoda:] That is why you fail. Speaker:Yoda / Luke" - remove the names from the questionText and split into two
// Must add the following to each:
//        type,
//        preQuestion,

// PIC NEEDED LIST
// Boba Fett
// Dengar
// Bossk
const type = "random-question";
const preQuestion = "Do you know...";
export function randomQuestionsList() {
  return {
    allFetchedQuestionIds: [...Array(123).keys()],
    allFetchedQuestions: [
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'To which bounty hunter does Darth Vader warn that Han and his friends must not be disintegrated, to which the bounty hunter replies, "As you wish..."?',
        answer: "Boba Fett",
        answerNotPerson: "Boba Fett",
        answerExplaination:
          "Boba Fett is the one who tracks Han to Bespin and leads Vader to him. It is said that Fett didn't die when he got knocked into the Sarlacc Pit, and emerged alive, his armor saving him. Later, he became Mandalore and assisted the New Republic on many occasions, even training Jaina Solo to fight and destroy her brother, Jacen A.K.A Darth Caedus.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "The Empire started out in the brain of a Sith Lord, who went by the name Palpatine. He was called the Emperor in the original three episodes. What was the proper name of this Sith?",
        answer: "Darth Sidious",
        answerNotPerson: "Darth Sidious",
        answerExplaination:
          'Sidious was mentioned in all six movies, and his identity was kept secret until "Episode III". He was a senator from Naboo, and then was elected Supreme Chancellor of the Republic, in "Episode I", to replace Chancellor Valorum.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In 'Episode I,' what did Yoda discover that Anakin possessed, that may lead him to the Dark Side?",
        answer: "Fear",
        answerNotPerson: "Fear",
        answerExplaination:
          "In 'Episode I', Qui-Gon Jin brought Anakin to the Jedi Council. While testing Anakin, Yoda sensed that he had fear. This fear was of losing his mother. Yoda said several times that fear leads to other issues like anger, and hate. Anger and hate are signs of the Dark Side.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In which battle did Obi-Wan Kenobi and Anakin Skywalker fly a rescue mission to save Supreme Chancellor Palpatine, who had been captured by General Grievous during the Separatists' invasion?",
        answer: "Battle of Coruscant",
        answerNotPerson: "Battle of Coruscant",
        answerExplaination:
          'The Battle of Coruscant started in season 2 of the cartoon "Star Wars: Clone Wars" (Not to be confused with the cartoon "Star Wars: The Clone Wars"). General Grievous actually managed to land ground forces on Coruscant, and personally captured the Supreme Chancellor.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: 'In "Attack of the Clones", who says "Oh, not good"?',
        answer: "Obi-Wan Kenobi",
        answerNotPerson: "Obi-Wan Kenobi",
        answerExplaination:
          'When Obi-wan is fighting Jango on Kamino, the two are connected by a string. Jango falls and Kenobi is still connected to him, therefore, you have Obi-Wan saying "Oh, not good".',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'Throughout the prequel trilogy, Anakin Skywalker is called a two-word title in reference to the Jedi prophesy that he would "bring balance to the force". What is this title?',
        answer: "Chosen One",
        answerNotPerson: "Chosen One",
        answerExplaination:
          'Qui-Gon is the first to call Anakin the Chosen One in "The Phantom Menace" when Mace Windu, speaking for the Jedi Council, declares that Anakin will not be trained as a Jedi. "No?" Qui-Gon says, shocked. "He is too old," Windu replies. "He IS the Chosen One. You must see it." Qui-Gon says, but the council refuses to listen. Obi-Wan is the last one to call Anakin the Chosen One, on Mustafar at the end of "Revenge of the Sith". After he defeats Anakin, now Darth Vader, Obi-Wan cries in anguish, "You were the Chosen One! You were supposed to bring balance to the force, not leave it in darkness!"',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "Which space battle did Darth Vader personally fly in?",
        answer: 'Battle of Yavin ("Episode IV")',
        answerNotPerson: 'Battle of Yavin ("Episode IV")',
        answerExplaination:
          'Anakin Skywalker was an excellent pilot, and he carried his skill with him when he became Darth Vader. That being said, Vader only intervened personally once in the movies. In "Episode IV - A New Hope" he flew his unique TIE Advance and was responsible for the death of many Rebel Alliance pilots.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In which movie did Han Solo and Luke Skywalker free Princess Leia from the Death Star?",
        answer: "Episode IV - A New Hope",
        answerNotPerson: "Episode IV - A New Hope",
        answerExplaination:
          "When the Millennium Falcon came out of hyperspace to find no Alderaan, they followed a lone TIE Fighter to what they realized, too late, was no moon. They were pulled onboard the Death Star, and commandeered some disguises in order to move about freely while looking for a solution to their problems. After Obi-Wan left to deactivate the tractor beam, Luke learned that Princess Leia had been captured and was scheduled to be executed. He then enlisted the help of Han and Chewie to stage a rescue. The trio made their way to the detention block and quickly took control of it. Luke found and freed the princess, but didn't have any escape plan, which resulted in the cell-block shootout, before the group bailed into the garbage chute. They were almost crushed by the masher, but R2-D2 was able to shut it down just in time. The gang then made their way through the Death Star back to the Falcon, where they were eventually able to leave, but only with the sacrifice of Obi-Wan Kenobi at the hands of Darth Vader. Once clear of the Death Star, Han and Luke still had to fend off four pursuing TIE Fighters. However, it had been Vader's plan for the Falcon to escape with a tracking beacon that would lead the Imperials straight to the hidden Rebel Base on Yavin IV.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          '(The phrases in need of translation are written in capital letters.) May the Force be with you as you play this quiz - just make sure to avoid THE perilous FACET OF LIGHTING CONDITIONS AFTER SUNSET. The Sith may welcome you into their ranks; but as Jedi Master Yoda warned young Anakin, and as Darth Vader knows so well, "Fear leads to anger, anger leads to hate, hate leads to suffering."',
        answer: "The Dark Side",
        answerNotPerson: "The Dark Side",
        answerExplaination:
          "The Dark Side of the Force is, of course, a reference to morality - not an actual lack of sunlight as my wordy term suggests.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In which movie did the famous Battle of Hoth take place?",
        answer: "Episode V - The Empire Strikes Back",
        answerNotPerson: "Episode V - The Empire Strikes Back",
        answerExplaination:
          'Hoth, the icy world seen in "The Empire Strikes Back", was where the Rebel Alliance had built Echo Base. The Imperials sent out probe droids to a variety of locations, including Hoth, and it found the Rebel shield generator before Han Solo and Chewbacca managed to destroy it. They Imperials sent the fleet to Hoth, but had to use a ground invasion due to the shield.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "How many actors hold the distinction of being credited in all six movies?",
        answer: "2",
        answerNotPerson: "2",
        answerExplaination:
          'Only Anthony Daniels as C3PO and Kenny Baker as R2D2 are credited in all six movies. Anthony Daniels only did a voice for "The Phantom Menace" and Kenny Baker was only used in a few scenes of "Revenge of the Sith" because R2D2 was largely computer-generated.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'Forrest Gump\'s accounts in this quiz are solely based on his observations. Therefore, Forrest only tells the story according to what he saw or what he thought he saw. Your job is to interpret each account using your knowledge of the "Star Wars" movies. You do not need to know the plotline of the 1994 movie "Forrest Gump" to answer the questions from this quiz. However, in order to make the correct interpretations, you must know that Forrest has an IQ of 75, and he has a limited understanding of his surroundings. This forces him to look at his surroundings with his heart more so than with his mind. Let us begin with this account from Forrest: "Hello. My name\'s Forrest, Forrest Gump. You know, my Mama always told me that the hottest place she could imagine was that convenience store three blocks from our old house. Turned out, she was wrong. Y\'see, I once came to this desert place. I saw all these weird creatures, and they told me that there are two suns there." To which of these planets does Forrest most likely refer?',
        answer: "Tatooine",
        answerNotPerson: "Tatooine",
        answerExplaination:
          'Tatooine, the homeworld of both Anakin and Luke Skywalker, is situated beneath two suns. Appropriately, the suns are called "Tatoo 1" and "Tatoo 2".',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "Which planet is Princess Leia from?",
        answer: "Alderaan",
        answerNotPerson: "Alderaan",
        answerExplaination:
          'Leia is from Alderaan, the planet that Darth Vader destroyed using the first Death Star in "A New Hope". Luke is from Tatooine, which is also the same planet his father, Anakin (or Darth Vader), is from. Padme is from Naboo. And Han Solo is from Corellia.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'In which "Star Wars" movie does Liam Neeson play Qui-Gon Jinn?',
        answer: "Episode I: The Phantom Menace",
        answerNotPerson: "Episode I: The Phantom Menace",
        answerExplaination:
          'Qui-Gon Jinn is killed near the end of "The Phantom Menace" by Darth Maul, who is then killed by Obi-Wan.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'What famous person played a minor (really minor) role in "Episode 1: The Phantom Menace"?',
        answer: "Kiera Knightley",
        answerNotPerson: "Kiera Knightley",
        answerExplaination:
          'Kiera Knightley stars in the famous release "Pirates of the Caribbean: The Curse of the Black Pearl". She also stared in "The Princess of Thieves", as Robin Hood\'s adventurous daughter.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'What does Yoda tell Anakin in "Episode 1" is the path to the Dark Side?',
        answer: "fear",
        answerNotPerson: "fear",
        answerExplaination:
          'Yoda says this to Anakin when he is first brought to the Jedi Council in "Episode 1". Anakin\'s thoughts were all on his mother and he felt that it had nothing to deal with learning about the force. Yoda told him that it had everything to deal with the force.',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'Who was the Director of Photography for the movie "The Phantom Menace"?',
        answer: "David Tattersall",
        answerNotPerson: "David Tattersall",
        answerExplaination:
          "David Tattersall did an excellent job for the film. The way that he films is very cool. He makes the movie look better. If the Director of Photography of the film just films regularly (just still camera), then the movie would be less interesting than it would be if the Director of Photography filmed with more excitement.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'When Master Yoda told Anakin Skywalker, "I sense much fear in you", it foreshadowed his future development into which evil Sith Lord? This took place in "Phantom Menace."',
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplaination:
          "Darth Vader became one of the leading servants of the Emperor in exterminating the Jedi race.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "Where is the Council Chambers located?",
        answer: "Jedi Temple, Coruscant",
        answerNotPerson: "Jedi Temple, Coruscant",
        answerExplaination:
          "The Temple was said to be built on a spot of great evil to conquer that evil.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'In "Episode IV (A New Hope)", who is the first character to talk?',
        answer: "C-3PO",
        answerNotPerson: "C-3PO",
        answerExplaination:
          'He says, "Did you hear that? They shut down the main reactor! There\'ll be no escape for the princess this time."',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'In "A New Hope," the hologram message that Leia sent to Obi-Wan via R2 said that Obi-Wan served Leia\'s father during the Clone Wars. Who is the person Leia was referring to, and what actor played him in "Attack of the Clones?"',
        answer: "Bail Organa / Jimmy Smits",
        answerNotPerson: "Bail Organa / Jimmy Smits",
        answerExplaination:
          'At some point after Anakin falls to the Dark Side, Obi-Wan sends Padme to Alderaan, and Leia is adopted by the Royal Family. Bail Organa is her adopted father. Jimmy Smits played him in "Attack of the Clones."',
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: '"Episode 6": Who is Luke Skywalker\'s twin sister?',
        answer: "Princess Leia",
        answerNotPerson: "Princess Leia",
        answerExplaination:
          "Luke and Leia were separated at birth for fear of discovery by Darth Vader.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'What planet, never previously mentioned in a "Star Wars" movie, is invaded by the Trade Federation in "The Phantom Menace"?',
        answer: "Naboo",
        answerNotPerson: "Naboo",
        answerExplaination:
          "Padme Amidala is the queen of Naboo, travelling to Coruscant to plead her case to the senate, because her peaceful planet has been invaded.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "'ANH' - When flying down the trench, one Rebel pilot estimates the number of gun towers in the trench. How many turbolaser towers did the pilot estimate?",
        answer: "20",
        answerNotPerson: "20",
        answerExplaination:
          "20 turbolasers would do some damage against capital ships. They are too big for using against snubfighters, like the Y-wing and X-wing.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "Which wasn't seen at Jabba's Palace or his space craft?",
        answer: "Mon Calamari",
        answerNotPerson: "Mon Calamari",
        answerExplaination:
          "Jawas were seen beside Jabba in 'Episode VI', Quarren are seen laughing at Luke's threat in 'Episode VI', and Gamorrean look like pigs with tusks in 'Episode VI'.",
        answerOptions: ["Dengar", "Boba Fett", "Bossk", "4-LOM"],
        photoOptions: null,
        faction: -1,
      },

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "Who trained Obi-Wan Kenobi?",
        answer: "Qui-Gon Jinn",
        answerNotPerson: "Qui-Gon Jinn",
        answerExplaination: "Obi-Wan was Qui-Gon's Padawan learner.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "Who played Lando Calrissian in Episodes 5 and 6?",
        answer: "Billy Dee Wiliams",
        answerNotPerson: "Billy Dee Wiliams",
        answerExplaination:
          "Billy Dee Wiliams was 'too handsome for his own good' according to Anja Gallandro.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "What's the name of the starship which was captured by a Star Destroyer at the very beginning of 'A New Hope'?",
        answer: "Tantive IV",
        answerNotPerson: "Tantive IV",
        answerExplaination:
          "The Tantive IV was carrying Princess Leia, who had stored critical Death Star plans R2-D2. It was quite excellent, then, that the droid escaped.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "What year was 'The Empire Strikes Back' first released into theaters?",
        answer: "1980",
        answerNotPerson: "1980",
        answerExplaination:
          "'A New Hope'(1977), 'The Empire Strikes Back' (1980), 'Return of the Jedi' (1983), 'The Phantom Menace' (1999), and \"Attack of the Clones\" (2002).",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "Why was Jar Jar Binks banished from the company of other Gungans?",
        answer: "he was embarrassingly clumsy",
        answerNotPerson: "he was embarrassingly clumsy",
        answerExplaination:
          "As the official sources describe Jar Jar's situation, his 'main sin' was 'being clumsy in front of the head of his clan.'",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "How tall was the actor that played Chewbacca?",
        answer: "7'2'",
        answerNotPerson: "7'2'",
        answerExplaination:
          "Yep, he really was that tall (no platform shoes required).",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "How many lights are on the wingtips of an X-Wing fighter?",
        answer: "3",
        answerNotPerson: "3",
        answerExplaination:
          "This was an easy one, if you've seen each trilogy movie 20 times like me:)",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "Who was rebuked with 'I find your lack of faith disturbing.'?",
        answer: "Admiral Motti",
        answerNotPerson: "Admiral Motti",
        answerExplaination:
          "Vader was choking him, and Grand Moff Tarkin saved him by ordering Vader to release him.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "The Gungan shield generators are carried into battle by what creatures?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "What type of droid is R2-D2?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "What is the name of the 'protocol droid' who first approaches the two Jedi in the opening scene of Episode I?",
        answer: "TC-14",
        answerNotPerson: "TC-14",
        answerExplaination: "TC-14 is a silver, feminine model of C3PO.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText: "'I have a bad feeling about this.'",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "Over which planet was Princess Leia's ship flying when she was attacked by an Imperial Star Destroyer and Vader?",
        answer: "Tatooine",
        answerNotPerson: "Tatooine",
        answerExplaination:
          "R2-D2 and C-3PO were sent to Tatooine below to stop Darth Vader getting the plans for the Death Star from Leia. In addition, Leia had kept a message inside R2-D2 asking Ben Kenobi to help. Luke Skywalker and Ben went with R2 and C-3PO to help her.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "The basis for the Empire's army was an army of clones, originally built for the Republic. From what planet did these clones come?",
        answer: "Kamino",
        answerNotPerson: "Kamino",
        answerExplaination:
          'Obi-Wan Kenobi found the Kaminoan cloners working on the army in "Episode II". They made their grand entrance to save the Jedi on Geonosis and then drove the Separatist droids off the planet. Coruscant was the capital of the Republic, and Cloninium is not real.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In 'Episode I', what was it that Anakin possesed that made Qui-Gon Jin think that he was special?",
        answer: "Extreme amount of midi-chlorians",
        answerNotPerson: "Extreme amount of midi-chlorians",
        answerExplaination:
          'Obi Wan Kenobi specifically told Qui-Gon Jin that Anakin has over 20,000 midi-chlorians. Anakin had even more than Yoda, which was very special and rare. He found this out by telling Anakin that he was "testing his blood" after the podrace.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In which battle did the Gungan army fight Trade Federation droid forces on the grassy plains while Queen Amidala infiltrated the palace?",
        answer: "Battle of Naboo",
        answerNotPerson: "Battle of Naboo",
        answerExplaination:
          'The Battle of Naboo was seen in "Star Wars Episode I: The Phantom Menace". It was fought between the natives of Naboo and the Trade Federation droid armies that were blockading the planet. Queen Amidala fled to Coruscant to resolve the dispute diplomatically, but the Republic refused to help her in a timely manner while her people were dying. The queen returned to Naboo to enlist the help of the native Gungans against the Trade Federation.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'In "Return of the Jedi", who says "You want this, don\'t you?"',
        answer: "Emperor Palpatine",
        answerNotPerson: "Emperor Palpatine",
        answerExplaination:
          "When Luke is aboard the Death Star, the Emperor has confiscated his lightsaber, and is trying to persuade Luke to take it and attack him.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'Threepio often expresses a low opinion of the Wookie, Chewbacca, in "The Empire Strikes Back." Just after Chewie chokes Lando and Threepio apologizes for the Wookie\'s actions, what insult does the droid say that not only insults Chewbacca, but all Wookies?',
        answer: '"After all, he\'s only a Wookie."',
        answerNotPerson: '"After all, he\'s only a Wookie."',
        answerExplaination:
          "After Lando frees Chewie, Leia, and Threepio from the stormtroopers on Cloud City, Chewie starts choking Lando until he reveals that there is still a chance to save Han Solo from Boba Fett. As Leia and Chewie run to save Han, Threepio, on Chewie's back, says to Lando, \"I'm terribly sorry about all of this. After all, he's only a Wookie!\" He implies that Chewie just can't help being a brute because all Wookies are like that. The fussy protocol is probably still upset because Chewbacca had only partially reassembled him after the droid was shot to pieces.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'In "The Phantom Menace", Captain Panaka objects to Qui-Gon\'s plan to land on Tatooine to repair the queen\'s star ship, because the planet is controlled by the Hutts. "You can\'t take her highness there! The Hutts are ____!" What word is missing?',
        answer: "Gangsters",
        answerNotPerson: "Gangsters",
        answerExplaination:
          'After Obi-Wan suggests that they hide on Tatootine, Panaka protests, "You can\'t take her highness there! The Hutts are gangsters!" But Qui-Gon is not concerned: "The Hutts aren\'t looking for her, which gives us the advantage."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'Who used the Millennium Falcon\'s turrets when it was being pursued through an asteroid field in "Episode V - The Empire Strikes Back"?',
        answer: "No one",
        answerNotPerson: "No one",
        answerExplaination:
          'In "Episode IV - A New Hope" when fleeing the Death Star, Han and Luke used the Falcon\'s heavy quad guns to fight of pursuit while Chewie flew the ship. For some reason, in "Episode V - The Empire Strikes Back", Han, Leia, Chewie, and C-3PO decide to all stay in the cockpit and rely entirely on fancy maneuvering through an asteroid field to save the day.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In which movie did we see the Speeder Bike chase on Endor?",
        answer: "Episode VI - The Return of the Jedi",
        answerNotPerson: "Episode VI - The Return of the Jedi",
        answerExplaination:
          'In "Episode VI", before the main assault on the second Death Star could commence, the shield had to be removed. The shield generator for the second Death Star was on the surface of the Forest Moon of Endor (sometimes just called "Endor"). A small Rebel team, led by Han Solo, snuck onto the moon in the stolen Imperial shuttle, Tyderium. When making their way to the generator, the team spotted an Imperial patrol, and Han moved in to quietly neutralize the Scout Troopers. He accidentally stepped on a branch that snapped, alerting the troopers to his presence. Luke and Leia rushed down to help, and spotted two more troops already on speeder bikes. Luke and Leia jumped on the last remaining bike, and a chase through the trees ensued. During the chase, Luke commandeered another bike, and he and Leia split up to take on different targets. Luke eventually had to bail off his bike when struggling with his adversary, but managed to finish off the biker with his lightsaber. Leia continued on forward and was eventually thrown from her bike, and she passed out, only to be woken later by Wicket, the Ewok.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          'Every saga has a beginning - that of "Star Wars" could have been called THE ILLUSORY THREATENER. Although, the shadowy figure referred to in the title is, rather than something of the supernatural as the real title suggests, using holograms and cowls to hide his real identity.',
        answer: "The Phantom Menace",
        answerNotPerson: "The Phantom Menace",
        answerExplaination:
          'Episode I: "The Phantom Menace," the first of the prequel trilogy, was released in 1999, starring Liam Neeson, Ewan McGregor, Natalie Portman, and Ian McDiarmid as the aforementioned threatener: seemingly beneficent Senator/Chancellor Palpatine, who has an evil Sith Lord for an alter ego. This film is generally not considered one of the more popular of the series.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "In which movie did Anakin Skywalker win the famous Boonta Eve Podrace?",
        answer: "Episode I - The Phantom Menace",
        answerNotPerson: "Episode I - The Phantom Menace",
        answerExplaination:
          "When the Queen of Naboo had to flee her planet during its occupation, the ship was damaged. They needed to land their ship and make repairs, and settled for Tatooine. There, they found out that Republic credits were not accepted as currency, and had to resort to betting in order to acquire the parts needed to repair the ship.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: 1,
        questionText:
          "How many characters (not actors) appear in every one of the six movies?",
        answer: "4",
        answerNotPerson: "4",
        answerExplaination:
          'In addition to R2D2 and C3PO, Both Anakin Skywalker/Darth Vader and Obiwan Kenobi appear in all six "Star Wars" films. Obiwan Kenobi is played by both Alec Guiness and Ewan McGregor.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'What is the setting of the "Star Wars" movies?',
        answer: '"A long time ago in a galaxy far far away..."',
        answerNotPerson: '"A long time ago in a galaxy far far away..."',
        answerExplaination:
          'These are the first words in the beginning of the movies in the "Star Wars" trilogy.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In which "Star Wars" movie do we first meet Jango Fett?',
        answer: "Episode II: Attack Of The Clones",
        answerNotPerson: "Episode II: Attack Of The Clones",
        answerExplaination:
          "Jango Fett is the one being cloned. Boba Fett is the clone he is raising as a son.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Which of the following did Yoda NOT say?",
        answer: '"Soon you will learn to trust your feelings."',
        answerNotPerson: '"Soon you will learn to trust your feelings."',
        answerExplaination:
          'Palpatine says the quote that Yoda does not. Palpatine says this quote to Anakin in "Episode II" when they are discussing having Senator Amidala leave the capital. This in turn demonstrates why Anakin will someday be working under Palpatine.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "The Phantom Menace", who portrayed Anakin\'s mother, Shmi Skywalker?',
        answer: "Pernilla August",
        answerNotPerson: "Pernilla August",
        answerExplaination:
          'August also appeared in "Episode 2". She appeared in only one scene, because her character dies in Anakin\'s, Hayden Christensen, arms. Anakin then gets so furious with the people that had kidnapped him, Tusken Raiders, that he killed the entire tribe of Tusken Raiders.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Mace Windu had a viewing screen in which he told Anakin to predict the objects on the screen. He tested Anakin on three specific objects. In chronological order, what were these? All appeared in "Episode 1".',
        answer: "Ship, Cup, Speeder",
        answerNotPerson: "Ship, Cup, Speeder",
        answerExplaination:
          "This proved that Anakin had embraced the force. He could manipulate it to foresee events of the future. This would send him to Tatooine to see his mother in the future.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who was the oldest on the Council?",
        answer: "Yoda",
        answerNotPerson: "Yoda",
        answerExplaination:
          "Yoda is the oldest Jedi ever, clocking in at 900 years old.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What does Dex tell Obi-Wan in the cafe after finding out that the droids in the library could not tell where the poisonous dart came from?",
        answer: "He should know the difference between knowledge and wisdom",
        answerNotPerson:
          "He should know the difference between knowledge and wisdom",
        answerExplaination: 'The definition of wisdom is "knowledge applied."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "When the power of the force is questioned in front of Vader, what does he find disturbing?",
        answer: "a lack of faith",
        answerNotPerson: "a lack of faith",
        answerExplaination:
          "Vader chokes the offending officer, but does not kill him.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the following actors has NOT portrayed Anakin Skywalker or Darth Vader?",
        answer: "Jeremy Bulloch",
        answerNotPerson: "Jeremy Bulloch",
        answerExplaination:
          'Jeremy Bulloch played the late Boba Fett in "The Empire Strikes Back" and "Return of the Jedi." Jake Lloyd played pre-teen Anakin Skywalker in "The Phantom Menance," while Sebastian Shaw played him in his final moments of life in "Return of the Jedi." David Prowse acted as Darth Vader. The voice was provided by James Earl Jones.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: '"Episode 6": Who is Luke Skywalker\'s father?',
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplaination:
          "Darth Vader was unaware of where Luke was taken soon after he was born.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What color is the Naboo Starfighter in "The Phantom Menace"?',
        answer: "Yellow",
        answerNotPerson: "Yellow",
        answerExplaination:
          "The Naboo Starfighter is a yellow ship, featured in the space battle towards the end of the film.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ANH' - What type of shield does the thermal exhaust port have on the Death Star?",
        answer: "ray shielding",
        answerNotPerson: "ray shielding",
        answerExplaination:
          "It is ray shielded, so lasers won't work. Since being particle-shielded would essentially negate the fact that it is an exhaust port for excess heat, it does not have it. Proton torpedoes are used because lasers won't punch through the shielding. Torpedoes will.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species massaged Sebulba?",
        answer: "Twi'lek",
        answerNotPerson: "Twi'lek",
        answerExplaination:
          "Twi'lek are the blue women and light white men that have extended heads. I've also seen them in pink, light green, and light purple.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is the name of the R2 unit that flies with Luke?",
        answer: "R2D2",
        answerNotPerson: "R2D2",
        answerExplaination:
          "R2D2 was often shown with C3PO, the golden colored protocol droid.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "The Tatooine scenes in the original trilogy were filmed where?",
        answer: "Tunisia",
        answerNotPerson: "Tunisia",
        answerExplaination: "Must have been awfully hot there, huh?",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What business are Luke's aunt and uncle in?",
        answer: "Moisture Farming",
        answerNotPerson: "Moisture Farming",
        answerExplaination:
          "The Owen and Beru Lars harvest moisture from the atmosphere since they live on such a dry planet. I guess they probably sell the water after they extract it.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who composed the music for ALL of the 'Star Wars' movies?",
        answer: "John Williams",
        answerNotPerson: "John Williams",
        answerExplaination:
          "The most brilliant composer ever...well I think so anyway!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "How did Sir Alec Guinness, who played Obi-Wan Kenobi, view the mystical banter of the Jedi Order?",
        answer: "'bloody awful, banal'",
        answerNotPerson: "'bloody awful, banal'",
        answerExplaination:
          "Guinness loathed mouthing Jedi 'mumbo jumbo' so much he convinced George Lucas to kill off the character.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What did the first Ewok say after C3P0's 'godlike' speech to his would-be captors?",
        answer: "That guy's wise",
        answerNotPerson: "That guy's wise",
        answerExplaination:
          "Yep, that's right, the two ewoks that speak right after C3P0's speech are actually speaking English. Check it out.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Whose tauntaun had a broken left horn?",
        answer: "Luke",
        answerNotPerson: "Luke",
        answerExplaination: "If you look closely you can see it.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie did the Empire employ bounty hunters such as 4-LOM and Boba Fett?",
        answer: "The Empire Strikes Back",
        answerNotPerson: "The Empire Strikes Back",
        answerExplaination: "'No disintegrations!'",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the planet that is farthest from the bright center of the universe according to a character from ANH?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the battle armour worn by Boba Fett?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the lifeforms that embody 'The Force'?",
        answer: "Midichlorians",
        answerNotPerson: "Midichlorians",
        answerExplaination:
          "Anakin was thought to be conceived by the Midichlorians, giving him the highest Midi-count ever recorded...even higher than Yoda!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'Into the garbage chute flyboy.'",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      // PAGE 4
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which Jedi suggested that if Chancellor Palpatine stays in office after General Grievous is destroyed, he should be removed?",
        answer: "Ki-Adi-Mundi",
        answerNotPerson: "Ki-Adi-Mundi",
        answerExplaination:
          "Jedi Master Ki-Adi-Mundi and his fellow Jedi, legendary Plo Koon and Twi'lek Aayla Secura were betrayed and murdered by their clone troopers. Ki-Adi-Mundi was killed on Mygeeto by Commander Bacara and his troopers. Plo Koon was shot down in his own star-fighter and Aayla was killed by her troopers on Felucia.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Episode III", Palpatine\'s master plan went into action. He issued Order 66 to make all clones turn against and kill the Jedi generals. What was the name of the clone who gave the order to shoot Obi-Wan Kenobi?',
        answer: "Commander Cody",
        answerNotPerson: "Commander Cody",
        answerExplaination:
          "Cody was helping Obi-Wan capture the Separatist planet of Utapau. We hear his name when Obi-Wan orders him to attack the levels of a sinkhole. Cody then received Order 66 and ordered an artillery shot on Obi-Wan. Obi-Wan survived the shot, which made him land in a pool of water.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "How was Kamino using Jango Fett in 'Episode II'?",
        answer: "To build the Clone Army",
        answerNotPerson: "To build the Clone Army",
        answerExplaination:
          "In 'Episode II', they specifically said that Jango Fett was being used to create the Clone Army on the Kamino system. While Obi Wan was visiting Kamino, he was told about Jango Fett and the purpose that he served. Jango Fett was the host-clone. Palpatine hoped to use the Clone Army as a way to kill the Jedi Order.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which battle did Luke Skywalker fly for the Rebel Alliance in an X-Wing, and destroy the Empire's superweapon, the Death Star?",
        answer: "Battle of Yavin",
        answerNotPerson: "Battle of Yavin",
        answerExplaination:
          'The first space battle to ever be seen was the Battle of Yavin in "Star Wars Episode IV: A New Hope". The Rebel base at the time was on the fourth moon of the gas giant Yavin. The Empire tracked the Millennium Falcon to the base, and moved their station towards the moon. They were making their way around Yavin to get a clear shot at Yavin IV when the Rebels attacked the Death Star with X-wings and Y-wings. Darth Vader personally flew in the Battle of Yavin to ensure the safety of the Death Star. The Rebels were down to their last chance to destroy the Death Star when Luke flew down the trench. The timely arrival of Han Solo stopped Vader from blasting Luke, letting Luke fire the killing shot.',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "The Phantom Menace", which jedi says, "He\'s too old to begin the training."?',
        answer: "Mace Windu",
        answerNotPerson: "Mace Windu",
        answerExplaination:
          "In the \"Phantom Menace\", Windu informs Qui-Gon that Anakin is too old to be trained, although later he is trained by Obi-Wan. Qui-Gon was apparently a jedi who could be on the council, but wasn't, because he didn't always listen to the council. He was planning to train Anakin even after he learned this. He probably would have, if he'd had the chance (he was stabbed in the stomach by Darth Maul).",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'How does the fussy Threepio refer to Jawas in "A New Hope"?',
        answer: '"Disgusting creatures"',
        answerNotPerson: '"Disgusting creatures"',
        answerExplaination:
          "Just before Kenobi, Luke, and the two droids enter the Mos Eisley cantina, a Jawa comes up to look over Luke's speeder. Luke gently chases the Jawa away. Threepio says, \"I simply can't abide those Jawas. Disgusting creatures.\" Threepio doesn't care much for Jawas, especially because after they capture him earlier in the film, he is afraid that they might melt him down. Plus, Threepio has the repugnant job of burning Jawa bodies after Luke and Kenobi discover the junk dealers' destroyed sandcrawler.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does Anakin call his rival, Sebulba, when the latter taunts Anakin, just before the pod race in "The Phantom Menace"? (Both are speaking in another language.)',
        answer: "Sleemo",
        answerNotPerson: "Sleemo",
        answerExplaination:
          'After the flag parade at the start of the pod race, Sebulba comes over to Anakin and insults him. Speaking in Huttese, Anakin replies by calling Sebulba "sleemo", which the subtitles render as "slime-ball". Sebulba laughs this off by telling Anakin that he will wind up "Bantha poodoo" in the coming race. Sebulba is not just trying to get in a final dig at Anakin. He speaks to Anakin to cover up his sabotage of Anakin\'s pod racer.',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who destroyed the droid control ship in "Episode I - The Phantom Menace"?',
        answer: "Anakin Skywalker",
        answerNotPerson: "Anakin Skywalker",
        answerExplaination:
          "Anakin Skywalker must have been guided by The Force, because the sheer number of unlikely events that happened to help him save the day are statistically near impossible. Anakin Skywalker, who had no actual starfighter training, was told to hide, so he chose a starfighter which used its autopilot to take him to the space battle above Naboo. He was eventually hit and spun into the hanger of the droid control ship, where he managed to avoid a collision in the confined and crowded spaces, and came to a screeching halt without tearing his ship apart. Droids quickly surrounded his ship, but did not attempt to take him prisoner while the ship cooled. When the ship was good to go again, Anakin started firing at the droids around his ship, and just happened to fire a pair of proton torpedoes into a conveniently unprotected reactor core.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which two movies featured a chase through an asteroid field?",
        answer:
          '"Episode II -Attack of the Clones" and "Episode V - The Empire Strikes Back"',
        answerNotPerson:
          '"Episode II -Attack of the Clones" and "Episode V - The Empire Strikes Back"',
        answerExplaination:
          'The two movies to feature chase scenes through an asteroid field were "Episode II", and "Episode V". There were asteroids in "Episode IV", when the Millennium Falcon reverted out of hyperspace to find Alderaan blown to bits, and they did chase a TIE Fighter to the Death Star. This chase was not through the asteroids, however, and it was not nearly as dramatic as the other chases in the "Star Wars" series.',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Jedi Knights such as Obi-Wan Kenobi took on the role of Generals and served in a history-altering series of battles that might be defined as THE CONFLICTS OF REPLICATED BEINGS. What more common term did Yoda coin for this time in the Republic's history?",
        answer: "The Clone Wars",
        answerNotPerson: "The Clone Wars",
        answerExplaination:
          'The Replicated Beings I referenced, despite misinformation found in early Expanded Universe novels, are the "good guys," clone soldiers fighting for the crumbling and corrupt Republic under the command of the Jedi. They are clones of Mandalorian Jango Fett, who was killed in the first battle of The Clone Wars: the Battle of Geonosis. Timothy Zahn\'s "Heir to the Empire" novel trilogy would lead you to believe, however, that this war comprised of insane clones who attacked the Republic.',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie did Jabba the Hutt die, at the great Pit of Carkoon?",
        answer: "Episode VI - Return of the Jedi",
        answerNotPerson: "Episode VI - Return of the Jedi",
        answerExplaination:
          "In the first half of \"Return of the Jedi\", Jabba the Hutt had Han Solo encased in Carbonite. An elaborate plan that involved Luke Skywalker, Princess Leia, Chewbacca, Lando Calrissian, and the droids, was set in motion to free their friend. Things didn't go quite according to plan, but it was flexible. Luke Skywalker tried to bargain with Jabba, but the crime lord instead attempted to kill Luke with his pet Rancor (the large beast in the pit at Jabba's palace).",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which character holds the distinction for being played by the most actors?",
        answer: "Anakin Skywalker/Darth Vader",
        answerNotPerson: "Anakin Skywalker/Darth Vader",
        answerExplaination:
          'Anakin Skywalker is played by Jake Lloyd in "The Phantom Menace"; Hayden Christensen in "Attack of the Clones" and "Revenge of the Sith" as well as the DVD version of "Return of the Jedi". James Earl Jones provides the voice of Darth Vader in episodes III through VI. David Prowse was the body of Darth Vader in "A New Hope", "The Empire Strikes Back" and "Return of the Jedi". Sebastian Shaw appeared as Anakin at the end of "Return of the Jedi". Bob Anderson performed the lightsaber duel scenes in "The Empire Strikes Back" and "Return of the Jedi".',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"I stayed in that same desert place for another ten years or so. After that, one of them pilots sent me to this other place they called Coruscant. For the first time, I actually rode on an airplane. They all said it was frightening to fly, but I didn't think so. There was this one time though, when our airplane almost hit this man with a blue helmet while he was playing this dart game. Believe me, that man sure could fly. Good thing that the pilot made a turn before hitting him, 'cause if he got hit, he couldn't target the bullseye.\" Forrest refers to Jango Fett using the Kamino saberdart to kill a fellow bounty hunter, Zam Wessell. What is the name of Zam's species?",
        answer: "Clawdite",
        answerNotPerson: "Clawdite",
        answerExplaination:
          'A Clawdite is also referred to as a changeling in the "Star Wars" universe due to its unique ability to change its outward appearance. Furthermore, by killing a fellow bounty hunter, Jango Fett had broken a portion of the bounty hunters\' "code of honor".',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie does Yoda show some fancy moves against Count Dooku?',
        answer: "Episode II: Attack Of The Clones",
        answerNotPerson: "Episode II: Attack Of The Clones",
        answerExplaination:
          "Yoda man! It takes a lot out of him, but Yoda takes on Count Dooku.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who is the viceroy of the Trade Federation?",
        answer: "Nute Gunray",
        answerNotPerson: "Nute Gunray",
        answerExplaination:
          'Gunray appears in both "Episode I" and "Episode II" as the viceroy of the Trade Federation.',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who was Assistant Stunt Coordinator and the Obi-Wan Kenobi stunt double in the movie "The Phantom Menace"?',
        answer: "Andreas Petrides",
        answerNotPerson: "Andreas Petrides",
        answerExplaination:
          "Rob Inch was the Qui-Gon Jinn stunt double. Nick Gillard was the main Stunt Coordinator. And Dominic Preece is a Stunt Performer.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'When Anakin was before the Jedi Council, Yoda says to him, "Fear leads to anger, anger leads to hate, hate leads to suffering." What was Yoda\'s next remark?',
        answer: '"I sense much fear in you."',
        answerNotPerson: '"I sense much fear in you."',
        answerExplaination:
          "Yoda could tell through Anakin's training that he was turning to the dark side, especially after hearing Qui-Gonn Jinn's voice cry out when Anakin slaughtered the Tusken camp.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who was the only Jedi Knight on the Council? ("Episode I" only)',
        answer: "Ki-Adi Mundi",
        answerNotPerson: "Ki-Adi Mundi",
        answerExplaination:
          'Ki-Adi was made a Master before "Episode II". He fought at Geonosis.',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who greets people in Jabba's kingdom and was fooled by Luke's Jedi mind trick?",
        answer: "Bib Fortuna",
        answerNotPerson: "Bib Fortuna",
        answerExplaination: "Jabba calls him a weak-minded fool.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Why were scenes on Tatooine filmed in Tunisia, as opposed to other places Lucas was considering?",
        answer: "The local architecture pleased Lucas more",
        answerNotPerson: "The local architecture pleased Lucas more",
        answerExplaination:
          "Lucas liked the architecture, because it was very close to what he had wanted for Tatooine.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "The Empire Strikes Back," how long did Yoda state he had trained Jedi?',
        answer: "800 years",
        answerNotPerson: "800 years",
        answerExplaination:
          'Yoda tells Luke he had been training Jedi for 800 years. In "Return of the Jedi," he implies to Luke that he is 900 years old.',
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Episode 4": Who answers the telecommunicator when Luke is stuck in the trash pit after saving Princess Leia?',
        answer: "C-3P0",
        answerNotPerson: "C-3P0",
        answerExplaination:
          "C-3PO told R2-D2 the coordinates of the trash pit so that R2-D2 could hack into the mainframe of the system and disable the crusher.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ROTJ' - How does Luke cut the rope that Boba Fett has entangled him in?",
        answer: "Deflected blaster shot",
        answerNotPerson: "Deflected blaster shot",
        answerExplaination:
          "While he did use his lightsaber, Luke actually deflects a shot into the synthrope, which cut the rope, freeing him.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Ishi Tib have heads shaped like what?",
        answer: "star",
        answerNotPerson: "star",
        answerExplaination: "They are very creepy creatures.",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What did Leia call Han Solo?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [
          "Mace Windu",
          "Ki-Adi-Mundi",
          "Kit Fisto",
          "Agen Kolar",
        ],
        photoOptions: null,
        faction: -1,
      },

      ///////////////
      // PAGE 5,
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Three people brought Darth Vader to life in the original trilogy. Name any one of them.",
        answer: "David Prowse",
        answerNotPerson: "David Prowse",
        answerExplaination:
          "David Prowse was the man in the costume. James Earl Jones provided Vader's voice. Sebastian Shaw played Anakin Skywalker (the 'unmasked' Vader) in 'Return of the Jedi.'",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What Planet is Han Solo from?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the four 'Star Wars' films took in the least amount of money at the United States box office?",
        answer: "The Empire Strikes Back",
        answerNotPerson: "The Empire Strikes Back",
        answerExplaination:
          "Empire, with domestic box office receipts of {$290} million, is only the tenth-biggest film of all time. The other three 'Star Wars' movies did better.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "This line was spoken in all of the first five 'Star Wars' films. 'I have a ______ _________ ________ ____________'.",
        answer: "bad feeling about this",
        answerNotPerson: "bad feeling about this",
        answerExplaination:
          "This very line is spoken by Han, Leia, Luke, and even Obi-wan.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What word of advice did Biggs give Porkins when Porkins' X-Wing was damaged?",
        answer: "Eject!",
        answerNotPerson: "Eject!",
        answerExplaination: "Too little, too late.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What was the name of Princess Leia's adoptive father?",
        answer: "Bail Organa",
        answerNotPerson: "Bail Organa",
        answerExplaination: "They were part of the Royal house of Alderaan.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the designation of the red droid that blew its motivator at the Lars homestead?",
        answer: "R5-D4",
        answerNotPerson: "R5-D4",
        answerExplaination:
          'According to Bill Slavicsek\'s Third Edition "Guide to the Star Wars Universe", R5-D4 is "an inexpensive astromech droid commenly referred to as Red.... allowed R2-D2 to program its motivator to blow up after it learned of R2-D2\'s mission". Apparently, "Red" was later repaired and sold to a moisture farm.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who was the voice of Darth Vader?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'Look at the size of that thing.'",
        answer: "Wedge",
        answerNotPerson: "Wedge",
        answerExplaination: "Afterwards he was told to cut the chatter.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the trader who Anakin Skywalker helped while on Tatooine with his mother?",
        answer: "Watto",
        answerNotPerson: "Watto",
        answerExplaination:
          "After Anakin left with Jedi Knight Qui-Gon Jinn, his Padawan Obi-Wan Kenobi, handmaiden Padme, Jar Jar Wings and the two droids, Watto sold his mother to a moisture farmer some time later. Anakin would come to Tatooine when he is a Padawan to find his mother and rescue her from the Sand People.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "The Empire then entered the period of its greatest power. Nineteen years elapsed between the formation of the Empire and the destruction of the first Death Star. During these years, which planet did Yoda go into hermitage on?",
        answer: "Dagobah",
        answerNotPerson: "Dagobah",
        answerExplaination:
          'Dagobah is especially featured in "Episode V", when Yoda trains Luke Skywalker in the ways of the Force. Luke also comes back in "Episode VI", just in time to see Yoda before he passes away.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "While talking to Dex in the cafe in 'Episode II', Obi Wan asked what an item was. What did Dex say that it was?",
        answer: "Kamino Saberdart",
        answerNotPerson: "Kamino Saberdart",
        answerExplaination:
          "In the cafe Obi Wan wanted to talk to Dex to figure out what was used to kill Zam Wesell. His answer was the Kamino Saberdart that was made in the system, Kamino. The Kamino Saberdart was a toxic dart that was used to kill Zam Wesell.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which battle was Obi-Wan Kenobi able to track down and kill General Grievous, the leader of the Separatists' droid armies?",
        answer: "Battle of Utapau",
        answerNotPerson: "Battle of Utapau",
        answerExplaination:
          'The Battle of Utapau was seen in "Star Wars Episode III: Revenge of the Sith". General Grievous, after escaping the Battle of Coruscant, fled to Utapau to hide and regroup. Clone Intelligence agents found Grievous, and Kenobi took a group to Utapau to kill Grievous. It was at Utapau that the feared General Grievous was slain by Kenobi himself. The death of Grievous was a significant blow to the Separatists, and though the droids continued to fight, it essentially marked the end of the Clone Wars.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "The Empire Strikes Back" Yoda says what to Luke, when Luke is about to attempt to raise his spaceship out of the water?',
        answer: '"Do, or do not. There is no try."',
        answerNotPerson: '"Do, or do not. There is no try."',
        answerExplaination:
          "Luke's ship has sunk into the water, and he is told by Yoda to use the force to get it out. Luke says \"I'll try\", and is corrected by Yoda with \"Do, or do not. There is no try.\"\nAfterwards we find out that Luke fails because he doesn't believe it's possible. Most people think Yoda could do it simply because he was more powerful with the force.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What is the call sign of the clone commander pilot, who Obi-Wan hails at the beginning of "Revenge of the Sith"?',
        answer: "Oddball",
        answerNotPerson: "Oddball",
        answerExplaination:
          'Obi-Wan hails Oddball to have his squadron of ARC-170 fighters provide cover while he and Anakin attempt to reach Grievous\' flagship. Obi-Wan hails "Oddball, do you copy?" "Copy, Red Leader," he responds. Obi-Wan orders, "Mark my position and form your squadron behind me." Oddball replies, "We\'re on your tail, General Kenobi. Lock S-foils in attack position." Most of Oddball\'s squadron is destroyed in the ensuing fight with the droid starfighters. Maverick and Iceman are the call signs for the characters played by Tom Cruise and Val Kilmer respectively in "Top Gun".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which battle was the Executor, Darth Vader's personal Super Star Destroyer, involved?",
        answer: 'Battle of Endor ("Episode VI")',
        answerNotPerson: 'Battle of Endor ("Episode VI")',
        answerExplaination:
          'The Executor was a massive ship at 19,000 meters long, compared to the standard Imperial Star Destroyer at 1,600 meters. It was first seen in "Episode V - The Empire Stries Back" where it led the Imperial fleet during the assault on Hoth, and later led the search for the Millennium Falcon. It was finally used to move Vader to Bespin where he set a trap for Luke Skywalker. However, the Executor was never actually involved in combat during the events of "Episode V".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie did Qui-Gon Jinn die at the hands of Darth Maul?",
        answer: "Episode I - The Phantom Menace",
        answerNotPerson: "Episode I - The Phantom Menace",
        answerExplaination:
          "Qui-Gon Jinn and Obi-Wan Kenobi, in \"Episode I\", were charged with protecting Queen Amidala. Because of the sluggishness of the Galactic Senate, she returned to her planet to remove the Trade Federation herself. While the Gungan Grand Army fought the Trade Federation Battle Droid Army, at the Battle of the Grassy Planes, the Queen infiltrated the palace at Theed to confront the Viceroy, while also taking control of the hangar in order to send starfighters to destroy the orbiting Droid Control Ship. While making their way out of the hangar, the Queen's party was stopped by Darth Maul. The Queen elected to take the long way to the throne room, while the Jedi fought Maul. The Jedi and Sith engaged in battle, and moved into the power generator room of Theed. The two Jedi were separated by energy fields, and Obi-Wan Kenobi was unable to aid his master in fighting the Sith. It was then that the young, agile and vicious Maul was able to defeat the aged and slow Jedi Master. Obi-Wan then had his turn to fight Maul, and cut the Sith in half. Fighting Maul was the Jedi's first real indication that the Sith were still present in the galaxy.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Army or not, you must realize: You Are Doomed," boldly declares the UNSPECIFIC MONSTROUS one in that villainous, rasping voice. A classic line from Episode III: "Revenge of the Sith," its speaker might object to being called by that unusual title! How does the fiendish droid leader prefer to be addressed?',
        answer: "General Grievous",
        answerNotPerson: "General Grievous",
        answerExplaination:
          'General Grievous, a cyborg, was intended to be a foreshadowing of Darth Vader. His trademark cough was designed to show he was an imperfect prototype of the technology used to transform Anakin Skywalker into Vader. Prior to being "borged," Grievous was a member of the Kaleesh species, a warlord named Qymaen jai Sheelal.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which movie had the Battle of Coruscant in which two Jedi knights rescued the Chancellor of the Republic?",
        answer: "Episode III - Revenge of the Sith",
        answerNotPerson: "Episode III - Revenge of the Sith",
        answerExplaination:
          '"The Revenge of the Sith" opened up with space portion of the Battle of Coruscant. Anakin Skywalker and Obi-Wan Kenobi flew their ships through the maze of capital ships and fighters, eventually coming to the Invisible Hand, General Grievous\' flagship. Once onboard they made their way through the ship until they found the Supreme Chancellor on the observation deck. It was here that they confronted Count Dooku. Dooku met his demise at the hands of Anakin Skywalker, and the Chancellor was freed.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which two characters appear in only five of the six movies?",
        answer: "Yoda and Palpatine",
        answerNotPerson: "Yoda and Palpatine",
        answerExplaination:
          'Yoda and Palpatine both appear in five films. Neither of them appears in Episode IV "A New Hope". Clive Revill was Palpatine in the original "The Empire Strikes Back", but was replaced by Ian McDiarmid in the Special Edition release. Characters that only appear in four episodes are Luke and Leia (as infants in "Revenge of the Sith") and Chewbacca.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"For no particular reason, them pilots asked me to transfer to the biggest airplane I\'ve seen. To tell you the truth, I saw a familiar face in that airplane. He won that race that I told you about in that desert place. I also saw this robot thing with blue stripes and this girl." Forrest is riding on the AA-9 Coruscant Freighter that is destined to transport refugees to a certain planet. What is the name of the current ruler of the planet to which the ship is going?',
        answer: "Queen Jamillia",
        answerNotPerson: "Queen Jamillia",
        answerExplaination:
          'The AA-9 Coruscant Freighter is destined to go to the planet Naboo, and the ruler of Naboo during that time is Queen Jamillia. In Forrest\'s description, the "familiar face" is Anakin Skywalker. The "robot... with blue stripes" is R2-D2, and "the girl" is Padmé Amidala, the former queen of Naboo.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who is Shmi Skywalker?",
        answer: "All of these options are correct",
        answerNotPerson: "All of these options are correct",
        answerExplaination:
          "Shmi is Anakin's mother. After Anakin is freed, she is sold to Cliegg who marries her. Luke and Leia are Anakin's kids making Shmi their grandmother although she was already dead.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie does Luke Skywalker first go to Dagobah to receive Jedi training?',
        answer: "Episode V: The Empire Strikes Back",
        answerNotPerson: "Episode V: The Empire Strikes Back",
        answerExplaination:
          "Luke and R2D2 travel to Dagobah for Jedi training from Yoda.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which actor plays the role of Chancellor Palpatine in Episode 2?",
        answer: "Ian McDiarmid",
        answerNotPerson: "Ian McDiarmid",
        answerExplaination:
          "Some, after seeing Episode 1 and 2, think that Chancellor Palpatine is the Emperor. I myself would have to agree. It's a key part of the movie, which I failed to catch the first few times I watched it.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What was the other name for the Rebel Base on Hoth?",
        answer: "Echo Base",
        answerNotPerson: "Echo Base",
        answerExplaination:
          'This is the base used by the rebels at the beginning of "The Empire Strikes Back".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 6,
      //////////////,

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who was the Stunt Performer and Qui-Gon Jinn stunt double in the movie, "The Phantom Menace"?',
        answer: "Rob Inch",
        answerNotPerson: "Rob Inch",
        answerExplaination:
          "Mark Newman, Joss Gower, and Danni Biernat are all Stunt Performers.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Last question on Anakin for awhile. On what planet was Anakin in "Attack of the Clones" when his shadow on a hut resembled the Darth Vader mask?',
        answer: "Tatooine",
        answerNotPerson: "Tatooine",
        answerExplaination:
          "Tatooine was the home to not only him, but his son Luke Skywalker. It is also home to the malicious Hutts.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Yarael Poof?",
        answer: "Quermian",
        answerNotPerson: "Quermian",
        answerExplaination:
          'Yarael Poof is a Quermian, not a Kaminoan as some believe. He was removed from "Episode II" due to his resemblance to the Kaminoans.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What was the Ewok village originally supposed to be?",
        answer: "A village of Wookies",
        answerNotPerson: "A village of Wookies",
        answerExplaination:
          "This was cut because it wasn't in the budget. There was even supposed to be an Albino Wookie.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What was Han's excuse for returning to help Luke?",
        answer: "He wanted some of the reward",
        answerNotPerson: "He wanted some of the reward",
        answerExplaination:
          "Chewbacca often acted as Han's conscience, but Han never admitted that he just wanted to help.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "The Phantom Menace," which color does Watto roll with his chance cube?',
        answer: "Blue",
        answerNotPerson: "Blue",
        answerExplaination:
          "Watto makes the deal with Qui-Gon that if he rolls a blue he would wager Anakin and if he rolls a red he would wager Anakin's mother. With a little help from the Force, he rolls blue.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Episode 4": How does Ben Kenobi escape capture after shutting down the power?',
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'How many action sequences take place simultaneously towards the end of "The Phantom Menace"?',
        answer: "4",
        answerNotPerson: "4",
        answerExplaination:
          "Anakin and the Starfighter pilots are engaged in a space battle near the federation's primary ship. The Gungans are engaged in a battle in a field of Naboo with droids. Qui Gon Jinn and Obi-Wan are fighting Darth Maul with lightsabers, and Amidala is leading an attempt into the palace to kidnap the viceroy of the Trade Federation.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ROTJ' - The FX crew for the film put something into one of the battle scenes that is yet to be found, but is there. What is it that they put in the scene?",
        answer: "A shoe",
        answerNotPerson: "A shoe",
        answerExplaination:
          "The special effects crew claim that a shoe is in one of the scenes depicting the battle.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Which species doesn't belong?",
        answer: "Ewok",
        answerNotPerson: "Ewok",
        answerExplaination:
          "Ewoks were never seen on Tatooine! I think they would be very, very hot.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What did Luke call the Millenium Falcon?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What Broadway production was actress Natalie Portman working on during the filming of Episode 1?",
        answer: "The Diary of Anne Frank",
        answerNotPerson: "The Diary of Anne Frank",
        answerExplaination:
          "Natalie played the title role in a Brodway prouction of 'The Diary of Anne Frank'.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What planet is Chewbacca from?",
        answer: "Kashyyyk",
        answerNotPerson: "Kashyyyk",
        answerExplaination:
          "Chewbacca is a Wookie, and all Wookies are from Kashyyyk.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "This is from 'The Phantom Menace': on the Jedi Council, there is a female Yoda! What is her name?",
        answer: "Yaddle",
        answerNotPerson: "Yaddle",
        answerExplaination:
          "I've heard of her but never seen her. My sister told me about this one.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "When Episode Two finally arrives in 2002, what's the likeliest character or grouping we'll see?",
        answer:
          "Boba Fett, a karate-style Sith apprentice, Chancellor Palpatine",
        answerNotPerson:
          "Boba Fett, a karate-style Sith apprentice, Chancellor Palpatine",
        answerExplaination:
          "If you didn't get this, be ashamed. Lucas has promised more Boba Fett in the upcoming movie, and a practitioner of hard Japanese martial arts has been signed to replace the hapless Darth Maul.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What famous mailman makes an appearance in 'The Empire Strikes Back' (give the character's full name from the TV show)?",
        answer: "Cliff Clavin",
        answerNotPerson: "Cliff Clavin",
        answerExplaination:
          "That wonderful, yet talkative, mailman is a squadron leader during the beginning of the film. He even has a line: 'Alright everybody to your stations, let's go!'",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What ship was Lieutenant Hija a gunnery officer on?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who is the only character to refer to a certain kind of Star Destroyer as a 'Super Star Destroyer'?",
        answer: "Admiral Ackbar",
        answerNotPerson: "Admiral Ackbar",
        answerExplaination:
          "Although the Empire shunned women and aliens, Admiral Ackbar is Mon Calamari, and the Rebellion had many alien contributors.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who said 'Asteroids do not concern me, Admiral. I want that ship, not excuses.'?",
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplaination:
          'Well, at least he didn\'t follow it up with a resounding "Weeee!" as they navigated the asteroid field.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who owned the Millennium Falcon before Han Solo?",
        answer: "",
        answerNotPerson: "",
        answerExplaination: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "In the first trilogy, who is 'Wedge'?",
        answer: "A fighter pilot for the Rebels",
        answerNotPerson: "A fighter pilot for the Rebels",
        answerExplaination:
          "Wedge is a pilot along with another very important character.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'He is too old.'",
        answer: "Yoda",
        answerNotPerson: "Yoda",
        answerExplaination:
          "Yoda said this about both Luke and Anakin when he first met them.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of Luke's closest friends died in the battle of Yavin while trying to destroy the Death Star?",
        answer: "Biggs",
        answerNotPerson: "Biggs",
        answerExplaination:
          "Luke went to grieve for his friend on Tatooine with Leia, and met up with his old mates. After being challenged to a deadly race by Jackson, they both were captured by Bossk; however, they escaped through the Jundland Wastes.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Welcome to "Episode IV". The opening scene is a firefight between a diplomatic vessel, Tantive IV, from Alderaan and an Imperial Star Destroyer. What was the name of the captain of the diplomatic ship?',
        answer: "Captain Antilles",
        answerNotPerson: "Captain Antilles",
        answerExplaination:
          'Captain Raymus Antilles was a ship commander for Senator Bail Organa, and he was very loyal to Princess Leia. He captained the Tantive IV (the diplomatic ship) in "Episodes III and IV". He is no relation to Wedge Antilles.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Why was Anakin ordered to go to the Mustafar system in 'Episode III'?",
        answer: "To kill separatist leaders",
        answerNotPerson: "To kill separatist leaders",
        answerExplaination:
          "In 'Episode III' Anakin became Darth Vader. He received a mission that was assigned by Darth Sidious. He ordered Darth Vader to kill the separatist leaders as part of the mission. Darth Vader went to the Mustafar system and did kill them. While killing them, Padme showed up with Obi Wan. That was went the unplanned fight occurred between Obi Wan and Darth Vader.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
    ],
  };
}

// Scraping Utility
// console.log(scrapeQuestions());
function scrapeQuestions() {
  const mainElm = document.querySelectorAll('[itemprop="mainEntity"]');
  const questionElms = [];

  for (const elm of mainElm.entries()) {
    questionElms.push(elm[1]);
  }
  const output = [];
  for (const key of mainElm.keys()) {
    const gatheredAnswerOptions = questionElms[0].querySelectorAll("font");
    if (gatheredAnswerOptions) {
      var answerOptions = [];
      gatheredAnswerOptions.forEach((answerOption) => {
        answerOptions.push(answerOption.innerText);
      });
    }

    const questionText = mainElm[key].querySelector('[itemprop="name"]')
      ? mainElm[key].querySelector('[itemprop="name"]').innerText
      : "";

    const answer = mainElm[key].querySelector('[itemprop="text"] u')
      ? mainElm[key].querySelector('[itemprop="text"] u').innerText
      : "";

    const answerNotPerson = mainElm[key].querySelector('[itemprop="text"] u')
      ? mainElm[key].querySelector('[itemprop="text"] u').innerText
      : "";

    const answerExplaination = mainElm[key]
      .querySelector('[itemprop="text"]')
      .innerText.split("\n\n")[1]
      ? mainElm[key]
          .querySelector('[itemprop="text"]')
          .innerText.split("\n\n")[1]
      : "";

    const questionObjectArray = {
      type: "random-question",
      preQuestion: "Do you know...",
      id: 1,
      questionText,
      answer,
      answerNotPerson,
      answerExplaination,
      answerOptions,
      photoOptions: null,
      faction: -1,
    };
    output.push(questionObjectArray);
  }

  return output;
}
