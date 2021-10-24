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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "Obi-Wan was Qui-Gon's Padawan learner.",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation: "",
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
        answerExplanation: "TC-14 is a silver, feminine model of C3PO.",
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: 'The definition of wisdom is "knowledge applied."',
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "Must have been awfully hot there, huh?",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "If you look closely you can see it.",
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
        answerExplanation: "'No disintegrations!'",
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
        answerExplanation: "",
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "Jabba calls him a weak-minded fool.",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "They are very creepy creatures.",
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "Too little, too late.",
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
        answerExplanation: "They were part of the Royal house of Alderaan.",
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation: "Afterwards he was told to cut the chatter.",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation: "",
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
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
        answerExplanation:
          "In 'Episode III' Anakin became Darth Vader. He received a mission that was assigned by Darth Sidious. He ordered Darth Vader to kill the separatist leaders as part of the mission. Darth Vader went to the Mustafar system and did kill them. While killing them, Padme showed up with Obi Wan. That was went the unplanned fight occurred between Obi Wan and Darth Vader.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      // PAGE 7
      //////////////
      //////////////,

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which battle did the Rebel Alliance receive aid from the native Ewoks to destroy a shield generator guarded by two-legged AT-STs?",
        answer: "Battle of Endor",
        answerNotPerson: "Battle of Endor",
        answerExplanation:
          "The Battle of Endor was the final battle in \"Star Wars Episode VI: Return of the Jedi\". The Rebel Alliance had a plan to destroy the Empire's second Death Star, but it was protected by a shield generator on the surface of the moon. A small team of Rebels, including Han Solo, Princess Leia, Luke Skywalker, R2-D2, and C-3PO, snuck behind enemy lines to disable the shield generator before the Rebel fleet arrived. The ground team ran into a few problems, but thankfully they were able to recruit the native Ewoks to help. The Imperials had brought in deadly two-legged AT-STs (All Terrain Scout Walkers), but even they were destroyed by the Ewoks' simple but effective traps.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Return of the Jedi", Lando says, "Would you get going you pirate?". What does Han Solo say right before this?',
        answer: '"I\'ve got your word for it, not a scratch."',
        answerNotPerson: '"I\'ve got your word for it, not a scratch."',
        answerExplanation:
          'When the Rebel Alliance is preparing the fleet for the attack on the Death Star. Han says that Lando should take the Falcon. Lando says "She won\'t get a scratch". Han starts walking away, and says, "I got your word, not a scratch." Lando replies "Would you get going you pirate?"',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In the original trilogy, who is the only one of the following four characters to call Boba Fett by his actual name, instead of "bounty hunter"?',
        answer: "Han Solo",
        answerNotPerson: "Han Solo",
        answerExplanation:
          'In "The Empire Strikes Back," Lando, Darth Vader and Threepio all refer to Boba Fett as "bounty hunter." When discussing the deal with Vader wherein Leia and Chewie would have to remain in Cloud City, Lando angrily says, "That was never a part of our agreement nor was giving Han to this bounty hunter!" Just after Han Solo is frozen in carbonite, Vader turns to Fett and says, "He\'s all yours, bounty hunter." And when the heroes are racing to stop Fett from leaving Cloud City with the frozen Solo, Threepio hollers out to Artoo, "We\'re trying to save Han from the bounty hunter!" But during the sail barge fight in "Return of the Jedi," Chewie lets Han Solo know that Boba Fett is behind him. Han cries, "Boba Fett? Boba Fett! Where?!" just before Han swings a staff that hits Fett on his rocket pack, causing him to accidentally blast off.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does Grievous jeeringly call Obi-Wan, when Obi-Wan, Anakin, Artoo and Palpatine are brought to the Separatist flagship\'s bridge in "Revenge of the Sith"?',
        answer: "The negotiator",
        answerNotPerson: "The negotiator",
        answerExplanation:
          'Grievous says, "Ah, yes. General Kenobi...the negotiator." The way he says it implies that Obi-Wan\'s reputation as a negotiator is unwarranted. And the ways he greets Obi-Wan and Anakin are different, which implies that Grievous and Kenobi previously met. "The negotiator" refers to the beginning of "The Phantom Menace", where Obi-Wan and Qui-Gon arrive at Naboo to negotiate a settlement with the Trade Federation. Also, Anakin tells Padme, when the two are having lunch on Naboo in "Attack of the Clones", that on one occasion he and Obi-Wan "went into aggressive negotiations." Padme asks him what he means, and Anakin replies, "Negotiations with a light saber."',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Which weapon did Jango Fett NOT use against Obi-Wan Kenobi during the the chase through the rings of Geonosis in "Episode II - Attack of the Clones"?',
        answer: "Tractor Beam",
        answerNotPerson: "Tractor Beam",
        answerExplanation:
          "After a brief fight on Kamino, Obi-Wan placed a homing beacon on Slave I (Jango Fett's Ship), and tracked him to Geonosis. When Jango saw that he was being followed, he moved into the asteroid field to lose pursuit. The tenacious Obi-Wan, though, followed him. Jango initially tried dropping seismic charges to dissuade Obi-Wan, but the Jedi continued. Using some fancy flying, Jango eventually got the jump on Obi-Wan, and the hunter became the hunted. Jango fired relentlessly at Obi-Wan to damage his ship, and tried to finish off the Jedi with a homing missile. Obi-Wan was able to avoid being hit, but could not lose to missile, and decided to release the spare parts as a chaff, which ultimately destroyed the missile. Thinking that Obi-Wan was dead, Jango continued onto the surface of Geonosis.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie did the Galactic Republic become the Galactic Empire?",
        answer: "Episode III - The Revenge of the Sith",
        answerNotPerson: "Episode III - The Revenge of the Sith",
        answerExplanation:
          'Palpatine was a Sith Lord, and his single goal in his life was to create a Sith-run galaxy. He joined politics, first seen in "Episode I", as the senator from Naboo. He was then elected as Supreme Chancellor of the Galactic Republic, and was in office when the Clone Wars broke out. The Senate chose to keep him in office until the war\'s end. At the same time, it was Dath Sidious, the same man, who was secretly manipulating galactic events, including the leaders of the Trade Federation, and later, the Separatist Alliance. Thus, the entire Clone Wars were engineered by a single man in order to gain Sith dominance over the galaxy. In "Episode III", the Clone Wars ended with the death of General Grievous, and surrender of the Separatist Leaders. The Jedi learned from Anakin that Palpatine was a Sith Lord, and moved to arrest him, but the Sith Lord was able to defeat the Jedi (with the help of Anakin Skywalker at the last minute). Palpatine then issued Order 66 to the Grand Army of the Republic, ordering the clones to kill all Jedi. He also fabricated a story about the Jedi\'s attempts to take over the Republic, branding the Jedi as evil. Thus, Palpatine had the power of the Grand Army of the Republic behind him. His enemies, the Jedi, were all but destroyed, and the Senate allowed him to reform the Galactic Republic into the Galactic Empire with the promise of peace and stability.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Standing in stark contrast to Darth Vader's ebon attire, these TEMPEST CAVALRYMEN are anonymously clad in white. Apparently renowned for their accuracy (although this is little-evidenced in the films), what is their more familiar German-inspired designation?",
        answer: "Stormtroopers",
        answerNotPerson: "Stormtroopers",
        answerExplanation:
          "Despite the fact that they can never strike their targets when aiming at the movies' heroes, Obi-Wan lays claim to the skills of the Galactic Empire's soldiers when looking at an attacked Jawa Sandcrawler, saying that \"Only Imperial stormtroopers are so precise.\" Of course, one could excuse the contradictions, saying that these elite soldiers are under orders not to kill those who, incidentally, are the main characters; they can't see out of their helmets (a problem voiced by incognito Luke aboard the Death Star); or their weapons mysteriously suffer intermittent accuracy problems. However, this is a common flaw found in many action movies, and has been dubbed the Principle of Evil Marksmanship, or the Stormtrooper Effect.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which movie included the launch of the Clone Wars, at the Battle of Geonosis?",
        answer: "Episode II - Attack of the Clones",
        answerNotPerson: "Episode II - Attack of the Clones",
        answerExplanation:
          'The Battle of Geonosis was the climactic battle of "Attack of the Clones". Geonosis was a dusty planet whose inhabitants lived underground. There, the leaders of the Confederacy had large hidden droid factories, preparing for war against he Republic.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie is no character with the last name of Antilles mentioned or shown?",
        answer: "Attack of the Clones",
        answerNotPerson: "Attack of the Clones",
        answerExplanation:
          'Senator Antilles of Alderaan is a candidate for Chancellor in "The Phantom Menace". Captain Antilles is in both "Revenge of the Sith" and "A New Hope". Wedge Antilles is in "A New Hope", "The Empire Strikes Back" and "Return of the Jedi".\nDenis Lawson, who plays Wedge Antilles, is the uncle of Ewan McGregor (Obiwan). When Ewan McGregor was offered the part of Obiwan, he called his uncle to ask if it he should join the "Star Wars" family. Denis actually discouraged Ewan from taking the part. Luckily, Ewan did not take the advice.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"After getting off that giant airplane, because I didn't have no place to live in, I just went looking for them pilots to send me anywhere they went. I did this for twenty-two years, until I found this place they called Yavin, where I stayed for a little while. Oh, and you won't believe what I'm about to tell you. Y'know that familiar face from that giant airplane that I told you about? They said he turned into some robot. Must be hard for him livin' like a human. I wonder how I'd feel if I was a robot.\" So, who exactly is this \"robot\" that Forrest keeps babbling about?",
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplanation:
          '"Star Wars: Episode III - Revenge of the Sith" is the film in which Anakin Skywalker\'s turn to the Dark Side is explained.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What happens to Luke's first lightsaber, the one that belonged to his father?",
        answer: "He lost it when his hand was cut off.",
        answerNotPerson: "He lost it when his hand was cut off.",
        answerExplanation:
          'By "Return Of The Jedi", Luke has already made a new lightsaber with a green blade instead of the blue blade of his first one. In the a book called The Last Command, by Timothy Zahn, an evil clone is made from his severed hand and fights Luke with his old lightsaber. At the end of the book he gives the lightsaber to Mara Jade.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Jar Jar Binks makes his first appearance. Which "Star Wars" film does that happen in?',
        answer: "Episode I: The Phantom Menace",
        answerNotPerson: "Episode I: The Phantom Menace",
        answerExplanation:
          'What an annoying character! Thankfully he didn\'t appear very much in "Attack Of The Clones".',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Please finish the name, "Queen Padme _______."',
        answer: "Amidala",
        answerNotPerson: "Amidala",
        answerExplanation: "",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What new strategy does C-3PO propose to R2-D2 after Han Solo tells them that Wookies rip people's arms out of their sockets when they lose?",
        answer: '"Let the wookie win."',
        answerNotPerson: '"Let the wookie win."',
        answerExplanation:
          "Chewbacca, R2-D2, and C-3PO are playing a board game on the Millennium Falcon, and when Chewbacca loses he got very angry. Han Solo said that it is not a good idea to upset a wookie because it might rip your arms out of your sockets.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Padme had two stunt doubles in "Attack of the Clones", who were they?',
        answer: "Gill Stratham and Carly Harrop",
        answerNotPerson: "Gill Stratham and Carly Harrop",
        answerExplanation:
          'Katie Cole was a Pre-Visualization/Effects artist and Michelle McGahey was an art director. Ray Park was Darth Maul in "Episode 1" and Roel Robles was an Art Department Assistant. Jayne-Ann Tenggren was the Script Supervisor and Chris Penn was an Art Department Runner.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Following what scene in "Phantom Menace" did Qui-Gon tell Obi-Wan Kenobi that he had been "a good apprentice", and foreshadowed him becoming a "great Jedi Knight?"',
        answer:
          "When Jar-Jar Binks exited the swamp, reporting the Gungan city deserted.",
        answerNotPerson:
          "When Jar-Jar Binks exited the swamp, reporting the Gungan city deserted.",
        answerExplanation:
          "Obi-Wan Kenobi would become a great Jedi Knight. But the Jedi purge sent him into hiding on Tatooine.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who on the Council did Mace Windu train personally?",
        answer: "Depa Billaba",
        answerNotPerson: "Depa Billaba",
        answerExplanation:
          'In the "Shatterpoint" novel, Mace goes to his home planet, Haruun Kal, to rescue Billaba. The novel plays out like "Apocalypse Now" with lightsabers.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the droid that Luke's uncle would have bought instead of R2-D2 if it had not malfunctioned?",
        answer: "R5-D4",
        answerNotPerson: "R5-D4",
        answerExplanation:
          "R5-D4 did not make it very far and the Jawas were accused of selling faulty products.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What does AT-AT stand for?",
        answer: "All-Terrain Armored-Transport",
        answerNotPerson: "All-Terrain Armored-Transport",
        answerExplanation:
          "The AT-ATs were used to transport hundreds of troopers in versatile terrain.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Which two characters have used the phrase "delusions of grandeur?"',
        answer: "Han Solo and C-3PO",
        answerNotPerson: "Han Solo and C-3PO",
        answerExplanation:
          'Han uses the phrase in "Return of the Jedi" when Chewie tells him Luke is a Jedi Knight. C-3PO utters it to R2-D2 in "The Empire Strikes Back" when he\'s trying to save the day.',
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: '"Episode 1": Who is the apprentice to Darth Sidious?',
        answer: "Darth Maul",
        answerNotPerson: "Darth Maul",
        answerExplanation:
          "Darth Sidious trained Darth Maul secretly to destroy the rebellion. Darth Maul was a sith lord.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who becomes elected chancellor at the end of "The Phantom Menace"? (name only, not title)',
        answer: "Palpatine",
        answerNotPerson: "Palpatine",
        answerExplanation:
          "The Senator from Naboo gains more power...dangerous.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ANH' - C-3PO tells Uncle Owen that he has been programmed for over how many secondary functions?",
        answer: "30",
        answerNotPerson: "30",
        answerExplanation:
          "If you remember, he tells Owen Lars that his primary function is protocol and etiquette. Then he claims that he has 30 other secondary functions.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Darth Maul?",
        answer: "Zabrakian",
        answerNotPerson: "Zabrakian",
        answerExplanation:
          "Zabrakian's faces aren't all like that. Maul got his face tatooed after joining the Sith.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What weapon does Han Solo use?",
        answer: "blaster",
        answerNotPerson: "blaster",
        answerExplanation:
          "Phasers - from 'Star Trek'. Lightsaber - Jedi's weapon. Machine gun - real, modern weapon from this galaxy.",
        answerOptions: [
          "Battle of Endor",
          "Battle of Kashyyyk",
          "Battle of Hoth",
          "Battle of Utapau",
        ],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 8
      //////////////,

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who is the voice of Yoda?",
        answer: "Frank Oz",
        answerNotPerson: "Frank Oz",
        answerExplanation:
          "Frank Oz is also the voice of Grover from 'Sesame Street.'",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is the official name of an 'Imperial Walker'?",
        answer: "All-Terrain Armored Transport",
        answerNotPerson: "All-Terrain Armored Transport",
        answerExplanation:
          "The AT-AT's were used in the assault on the Rebel Base on Hoth in 'The Empire Strikes Back'. One of them blew up the shield generator.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Watto?",
        answer: "Toydarian",
        answerNotPerson: "Toydarian",
        answerExplanation: "\"Mind tricks won't work on me, I'm a Toydarian!\"",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "How many sentients are on the Jedi Council?",
        answer: "Twelve",
        answerNotPerson: "Twelve",
        answerExplanation:
          "Fans have noticed that Anakin's interview with the 12-member Jedi Council in Phantom Menace resembles the Last Supper.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What popular 'small' actor from 'Return of the Jedi' makes a cameo as one of Jabba's companions in 'The Phantom Menace'?",
        answer: "Warwick Davis",
        answerNotPerson: "Warwick Davis",
        answerExplanation: "He's pretty easy to spot in the pod racing scene.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What star system was the Falcon in when it detached itself from the Avenger?",
        answer: "Anoat",
        answerNotPerson: "Anoat",
        answerExplanation:
          "Boba Fett saw them, though, and tracked them to Cloud City.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "When Han and Luke received medals in the Grand Audience Chamber at the end of 'A New Hope', what did Chewbacca recieve?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Grand Moff Tarkin's first name?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the Jedi played by Samuel L Jackson?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Luke's Aunt's name?",
        answer: "Beru",
        answerNotPerson: "Beru",
        answerExplanation:
          "Uncle Owen and Aunt Beru are murdered by Imperial forces toward the beginning of Episode IV.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'Now let's blow this thing and go home.'",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Count Dooku's alternate name?",
        answer: "Darth Tyranus",
        answerNotPerson: "Darth Tyranus",
        answerExplanation:
          "Sidious called him Tyranus at the end of Episode 2 when he arrived on his ship after the battle of Geonosis.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In the final battle scene of "Episode IV", Luke Skywalker and his wingmen made a desperate attack on the Death Star. Vader, though, followed in perfect position for a kill. Luke was saved by Han Solo, who did what for a living before "Episode IV"?',
        answer: "Smuggled goods past the Empire",
        answerNotPerson: "Smuggled goods past the Empire",
        answerExplanation:
          "Han worked for the gangster Jabba the Hutt, among others, and he and his co-pilot, the Wookiee Chewbacca, flew the Millennium Falcon past blockades all over the galaxy. By this time, Han had run up a large debt to Jabba, and tried to make more money by taking Obi-Wan, Luke, C-3PO, and R2-D2 to Alderaan.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In 'Episode III', according to Obi Wan, why did Padme turn against Anakin?",
        answer: "His anger, and lust for power",
        answerNotPerson: "His anger, and lust for power",
        answerExplanation:
          "When Padme went to the Mustafar system, Anakin became angry and accused Obi Wan of turning Padme against him. The whole time Anakin was changing, and she turned against him because of the way he acted. She did not turn on him because of Obi Wan and he tried to explain that to Anakin. This was partially what started the incredible fight between Obi Wan and Anakin.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which battle started off as a rescue mission for Obi-Wan Kenobi, Anakin Skywalker, and Senator Amidala, but became the first major engagement of the Clone Wars between the Republic's clone army and the Confederacy's droid forces?",
        answer: "Battle of Geonosis",
        answerNotPerson: "Battle of Geonosis",
        answerExplanation:
          "The Battle of Geonosis took place at the end of \"Star Wars Episode II: Attack of the Clones\". Obi-Wan Kenobi tracked Jango Fett to Geonisis and was captured by the locals. Anakin Skywalker and Padme Amidala attempted to rescue Obi-Wan, but were also captured. Mace Windu then led a team of 200 Jedi to Geonosis to rescue the trio. Things escalated when Count Dooku revealed the Confederacy's massive droid army. The Jedi were surrounded by the droids, and about to be executed. Master Yoda arrived performed a third rescue attempt, which was finally successful, with the debut of the Republic's clone army, and the two sides were suddenly in the first engagement of the Clone Wars.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Which two characters say some form of "How rude"?',
        answer: "Jar Jar Binks, and C-3P0",
        answerNotPerson: "Jar Jar Binks, and C-3P0",
        answerExplanation:
          'In the "Phantom Menace", Jar Jar says, "How wude" because Anakin tells him that if a slave tries to escape, he gets blown up. In "The Empire Strikes Back", 3P0 says "How rude", because a droid said to him: "E\'chuta", which must be some kind of insult.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Darth" is the formal title given to all Sith Lords. Four Dark Lords of the Sith appear in person in the "Star Wars" movies. Of the four, who is known by only one name/one identity?',
        answer: "Darth Maul",
        answerNotPerson: "Darth Maul",
        answerExplanation:
          'Only Darth Maul is known by one name. Darth Sidious is also Naboo senator and then Supreme Chancellor Palpatine, Darth Tyrannus is Count Dooku, and Darth Vader is Anakin Skywalker. Note that when Darth Vader and Obi-Wan fight in "A New Hope," Kenobi calls Vader "Darth." ("You can\'t win, Darth. If you strike me down, I shall become more powerful than you can possibly imagine.") It\'s possible that George Lucas hadn\'t yet established that all Sith lords are titled Darth. The only other Sith Lord mentioned in the six movies is Darth Plegius; Palpatine tells Anakin about him during the opera scene in "Revenge of the Sith."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does Darth Sidious call Daultay Dofine, the captain of the Trade Federation command ship, in "The Phantom Menace"? This happens when the latter tells Sidious that "this scheme of yours has failed" at the beginning of the movie.',
        answer: "Stunted slime",
        answerNotPerson: "Stunted slime",
        answerExplanation:
          'After the two Jedi ambassadors arrive on the Trade Federation flagship, Viceroy Nute Gunray contacts Darth Sidious, who speaks via holocam. Dofine blurts out, "The blockade is finished. This scheme of yours has failed, Lord Sidious. We dare not go against the Jedi." To which Sidious replies, "Viceroy, I don\'t want this stunted slime in my sight again!" Dofine flinches and slinks off like a kicked puppy.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Which battle did Wedge Antilles NOT fly in?",
        answer: 'Battle of Coruscant ("Episode III")',
        answerNotPerson: 'Battle of Coruscant ("Episode III")',
        answerExplanation:
          'Wedge Antilles was a pilot for the Rebel Alliance and first appeared in "Episode IV - A New Hope" in the Battle of Yavin. During the battle he saved Luke from a pursuing TIE Fighter, and then flew down the trench with Luke and Biggs. Wedge was hit and had to pull out. Biggs never got the chance.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie did Anakin Skywalker and Obi-Wan Kenobi chase Zam Wessel through the streets of Coruscant?",
        answer: "Episode II - Attack of the Clones",
        answerNotPerson: "Episode II - Attack of the Clones",
        answerExplanation:
          "Zam Wessel was a bounty hunter, and associate of Jango Fett. She was hired to kill senator Amidala, which she tried to do at the beginning of \"Episode II\", when she detonated the senator's ship. Fortunately, Padme had been switched with a decoy, and was unharmed. The second attempt was when Zam sent two kouhuns, via assassin droid, to the Padme's apartment. The poisonous bugs were almost able to end Padme's life, but Obi-Wan Kenobi and Anakin Skywalker jumped in, and saved the day. Obi-Wan noticed the assassin droid hovering outside the window, and jumped out the window to grab onto it. Anakin then commandeered a speeder to go after his master. When Zam saw Obi-Wan coming at her, she used a sniper rifle to take down the droid, letting Obi-Wan plummet through the Coruscant traffic. Anakin caught his master, while Zam jumped into her own speeder, and a chase ensued. Anakin eventually jumped onto Zam's speeder, and made her crash on a pedestrian walkway. When on the ground, Anakin and Obi-Wan followed Zam into a cantina, where she attempted to kill Obi-Wan. But the Jedi was too fast for her, and she was disarmed. She was taken outside for interrogation, but was killed by Jango Fett's saberdart before she could reveal his identity.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "The evil Galactic Empire has built a technological terror, a device of mass destruction that might be called THE CELESTIAL BODY BRINGING DEMISE. However, this ultimate weapon, though insignificant next to the power of the Force, is generally known by a more concise yet fearsome name.",
        answer: "The Death Star",
        answerNotPerson: "The Death Star",
        answerExplanation:
          'The immense Death Star, with its horrific array of turbolasers, was constructed clandestinely over a span of nearly twenty years. It is unknown why its construction was delayed for so long. The space station is visible during the conclusion of Episode III: "Revenge of the Sith" in a partially finished state, but it is not completed and ready for use until Episode IV: "A New Hope," approximately 19 years later.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie was Han Solo encassed in carbonite, on Cloud City?",
        answer: "Episode V - The Empire Strikes Back",
        answerNotPerson: "Episode V - The Empire Strikes Back",
        answerExplanation:
          "Darth Vader set up a trap on Cloud City and lured Luke Skywalker in by causing his friends to suffer. Vader wanted to freeze Luke in the carbon freezing chamber so he could easily be transported to the Emperor. Han Solo was chosen to be the test subject to see if someone could survive the process of carbon freezing. He was encased and then given to Boba Fett after his vital signs were confirmed. Fett then took Solo to Jabba the Hutt on Tatooine. During the lightsaber fight on Cloud City, Luke did fall into freezing chamber once, but used a Force assisted jump to escape while Vader threw the switch. The chamber took a lot of preparation to set up, so the same tactic could not be used a second time.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'One of the most famous lines from all six "Star Wars" movies is "I have a bad feeling about this". Which of the following accurately lists all the characters who have uttered this line?',
        answer: "Obiwan, Anakin, Luke, Leia, Han, C3PO",
        answerNotPerson: "Obiwan, Anakin, Luke, Leia, Han, C3PO",
        answerExplanation:
          'Obiwan says the line in "The Phantom Menace" and "Revenge of the Sith". Anakin utters the line in "Attack of the Clones". Luke only utters it once, the first time it was ever heard, in "A New Hope". Han Solo says it in "A New Hope" and "Return of the Jedi". Leia speaks the line in both "The Empire Strikes Back" and "Return of the Jedi". C3PO gets his chance to say the line in "Return of the Jedi".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"While I was there at Yavin, I looked at the sky once, and I saw this great display of fireworks. It was big, but I didn't see too many colors. Right during the fireworks, I also saw some airplanes landing at the same location. Since I didn't have nothing to do, I just came running to that place where the airplanes landed. It took me a while to get there, but when I got there, I saw this giant building. I tried to get in, but one of them guards said that I was too late for the medal ceremony.\" That medal ceremony was held in honor of the heroes of the Battle of Yavin. Due to their brave actions during the aforementioned battle, Luke Skywalker and Han Solo were presented medals by Princess Leia and General Dodonna. The question is, what is the first name of General Dodonna?",
        answer: "Jan",
        answerNotPerson: "Jan",
        answerExplanation:
          'General Jan Dodonna was the strategist for the Rebel Alliance during the Battle of Yavin. The "fireworks" described by Forrest is the blown up Death Star, and the "giant building" is the Massassi Temple, which acted as the base for the Rebel Alliance during the Battle of Yavin.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "How many suns does Tatooine have?",
        answer: "2",
        answerNotPerson: "2",
        answerExplanation:
          'In "A New Hope", there is a part in the movie where Luke is looking out on the desert where you can see the two suns. In the books there is also a squadron named Twin Suns by Luke, after the planet Tatooine.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 9
      //////////////,

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie do we first meet Lando Calrissian?',
        answer: "Episode V: The Empire Strikes Back",
        answerNotPerson: "Episode V: The Empire Strikes Back",
        answerExplanation:
          'Lando is played by Billy Dee Williams. In "The Empire Strikes Back", Lando is tricked into betraying Han and company. He participates in the rescue of Han from Jabba and the attack on the Death Star in "Return Of The Jedi".',
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'When did Darth Vader say, ""I sense something. A presence I\'ve not felt since..."?',
        answer: "when the Falcon is pulled into the Death Star",
        answerNotPerson: "when the Falcon is pulled into the Death Star",
        answerExplanation:
          "This is a line that not many people hear because he says it so quietly. You can guess that he's talking about Obi-Wan, because Obi-Wan is on the Falcon when the tractor beam pulls it in. He can tell by the Force whose presence it is.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What does R2-D2 have to do when he works on Jabba's sail barge?",
        answer: "serve drinks",
        answerNotPerson: "serve drinks",
        answerExplanation:
          "C-3PO smashes into him while he was doing this. Luke said that he was giving R2-D2 and C-3PO to Jabba as a gift. Jabba wanted R2-D2 to learn some respect. That is why he was made to do that.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Attack of the Clones", who was the stunt double for Jango Fett ?',
        answer: "Scott Mclean",
        answerNotPerson: "Scott Mclean",
        answerExplanation:
          "It must have been easy to have a stunt double for Jango, he's always wearing his protection gear so you can't tell who's actually fighting.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the following BEST describes Qui-Gonn's attitude toward the Jedi council in the first film?",
        answer: "Defiant and Decisive",
        answerNotPerson: "Defiant and Decisive",
        answerExplanation:
          "Qui Gonn believed Anakin to be the chosen one. The council was hesitant about his training, but not Qui Gonn.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does the phrase "If Coleman Trebor had been a little faster, the Clone Wars would have been over before they started" mean?',
        answer: "He almost killed Dooku.",
        answerNotPerson: "He almost killed Dooku.",
        answerExplanation:
          "Coleman Trebor is the Jedi with the spiked head who was shot down by Jango on the balcony in the arena.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the following are Jedi not allowed to succumb to?",
        answer: "Attachment",
        answerNotPerson: "Attachment",
        answerExplanation:
          'Love, in its purest form, is unconditional, as Anakin states in "Episode II." However, he does get quite attached to Padme.',
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Where was the scene filmed in which R2D2 is submerged in the swamp on Dagobah?",
        answer: "In George Lucas's unfinished swimming pool",
        answerNotPerson: "In George Lucas's unfinished swimming pool",
        answerExplanation:
          "Lucas needed to find a way to film this scene, so he used his backyard.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Episode 1": Whose lightsaber does Obi-Wan Kenobi use to kill Darth Maul?',
        answer: "Qui-Gon Jinn",
        answerNotPerson: "Qui-Gon Jinn",
        answerExplanation:
          "Obi-Wan's own lightsaber was cast into the pit by Darth Maul while Obi-Wan was hanging onto a jut in the wall.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "How long did Padmé serve as queen?",
        answer: "8 years",
        answerNotPerson: "8 years",
        answerExplanation:
          "She served as senator once her term limit was reached. Her term limit was two terms, each of which was four years.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Pick the one that doesn't fit.",
        answer: "Y-wing",
        answerNotPerson: "Y-wing",
        answerExplanation:
          "The Y-wing is the only craft NOT made by Incom. Koensayr made the Y-wing. The X-wing is the Incom T-65. The Skyhopper is the Incom T-16. The Snowspeeder is the Incom T-47.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Admiral Daala?",
        answer: "Human",
        answerNotPerson: "Human",
        answerExplanation:
          "She is said to destroy an entire Rebel base with only one fleet after the Empire banished her.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "How do 'Star Wars' movies start?",
        answer: "Scrolling text",
        answerNotPerson: "Scrolling text",
        answerExplanation: "'A long time ago in a galaxy far, far away...'",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "During the filming of 'The Empire Strikes Back', what was it that scared actor Frank Oz so badly that it took Lucas 6 months to get him to come back?",
        answer: "Snakes",
        answerNotPerson: "Snakes",
        answerExplanation:
          "During the Dagobah scenes, Frank saw the snakes on the set and reportedly refused to continue for 6 months.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who was aboard the AT-AT that blew up the shield generator in 'The Empire Strikes Back'?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What was the Millennium Falcon modeled after?",
        answer: "A hamburger with an olive sitting next to it",
        answerNotPerson: "A hamburger with an olive sitting next to it",
        answerExplanation: "WEIRD!",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What comedian supplied the voice for the race announcer during the pod race in 'The Phantom Menace'?",
        answer: "Greg Proops",
        answerNotPerson: "Greg Proops",
        answerExplanation:
          "I would never have noticed this myself if his voice weren't so distinctive.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Salacious Crumb?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Fill in the blank: ______! Slimy! My home this is!",
        answer: "mudhole",
        answerNotPerson: "mudhole",
        answerExplanation:
          "Yoda says this to Luke before Luke know that he's Yoda.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Of which army is Captain Tarpals a member?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the planet that is the seat of the Empire and previously the Republic?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What does AT-AT stand for?",
        answer: "All Terrain Armored Transport",
        answerNotPerson: "All Terrain Armored Transport",
        answerExplanation:
          "The AT-AT's destroyed a large number of Rebel forces and bases at the Battle of Hoth in Episode V.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'What a piece of junk.'",
        answer: "Luke",
        answerNotPerson: "Luke",
        answerExplanation:
          "Said this when he first saw the Falcon, he was right.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "When did Luke tell Leia she was his sister?",
        answer: "On the moon of Endor",
        answerNotPerson: "On the moon of Endor",
        answerExplanation:
          'After the New Republic was formed, Leia and Han had children who went on to become Jedi. Remember, Luke told Leia she was Force-sensitive on the moon of Endor in "Episode 6".',
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Episode V", Vader starts an assault on the Rebel base of Hoth. The stormtroopers and their vehicles eventually overrun the base and force the Alliance to relocate. The key moment in the battle is the destruction of the Rebel shield generator by what Imperial vehicle?',
        answer: "AT-AT",
        answerNotPerson: "AT-AT",
        answerExplanation:
          "The main AT-AT destroyed the shield generator, enabling the rest of the troops to storm (no pun intended) the base. The Alliance made their getaway, however, covered by an ion cannon that was deployed on the surface.",
        answerOptions: [
          "Episode VI: Return Of The Jedi",
          "Episode V: The Empire Strikes Back",
          "Star Wars Episode IV: A New Hope",
          "Episode II: Attack Of The Clones",
        ],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 10
      //////////////,

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In 'Episode IV', who were Obi Wan and Luke looking for in Tatooine?",
        answer: "Someone to fly them to Alderaan",
        answerNotPerson: "Someone to fly them to Alderaan",
        answerExplanation:
          "Once Luke lost his uncle Owen and aunt Beru he did not believe that there was anything left for him on Tatooine. Also, Obi Wan needed to go to Alderaan to find Princess Leia and help her. Luke decided that he might as well tag along. In Tatooine they needed to find someone with a ship who could fly them to Alderaan. This was where Han Solo was introduced.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which battle did royal pilots fly N-1 Starfighters against the Trade Federation Droid Control Ship, ultimately destroying it with the help of young Anakin Skywalker?",
        answer: "Battle of Naboo",
        answerNotPerson: "Battle of Naboo",
        answerExplanation:
          "The Battle of Naboo was an elaborate operation by the people of Naboo to wrest control of their planet back from the Trade Federation. The Gungan Grand Army distracted the Trade Federation's droid forces while Amidala and her security detail infiltrated the palace. To help the gungans, the humans sent what pilots they had to try to destroy the orbiting Droid Control Ship. Anakin was ordered to hide, so he got into the cockpit of an N1 Starfighter. He accidentally initiated the launch sequence, and took off to join the battle in space. The Naboo pilots were unable to significantly damage the Droid Control Ship; it was too well armed and shielded. Anakin was shot, and tumbled into the Control Ship's hangar, where he was given a clear shot at the main reactor. He destroyed the Control Ship, deactivating all the droids in the palace and holding the Gungans.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Revenge of the Sith", Obi-Wan Kenobi says, "I will do what I must", as he does what?',
        answer: "Turns on his lightsaber",
        answerNotPerson: "Turns on his lightsaber",
        answerExplanation:
          "Obi-Wan turns on his lightsaber in order to fight Anakin on Mustafar. Anakin has turned to the dark side, killed younglings, and has been corrupted by the power of the dark side. Clones have turned on their masters, and Yoda and Obi-Wan are the only ones who have survived. Yoda goes to fight the Emperor, while Obi-Wan is fighting Anakin (AKA Darth Vader).",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "The Empire Strikes Back," Leia calls Han Solo a "scoundrel" when the Millennium Falcon is hiding in the asteroid field. Leia means it as an insult, but Solo likes it. As he\'s moving closer to kiss Leia, Han says, "I think you like me because I\'m a scoundrel. There aren\'t enough scoundrels in your life." What is Leia\'s mild protest?',
        answer: '"I happen to like nice men."',
        answerNotPerson: '"I happen to like nice men."',
        answerExplanation:
          '"I happen to like nice men," Leia says. Han replies, "I\'m nice men." She starts to say, "No you\'re not, you\'re - " and then they kiss. Threepio, with a perfect sense of timing, interrupts the kiss; Leia flees and she and Han don\'t kiss again until just before he\'s frozen in carbonite on Cloud City. Han doesn\'t call himself "nice men" again, but when the Falcon is clinging to the rear side of a star destroyer\'s bridge, he calls Lando a scoundrel.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does Rune Hakko say Nute Gunray is, when the latter tells Hakko to go distract the two Jedi (Qui-Gon and Obi-Wan) at the beginning of "The Phantom Menace"?',
        answer: "brain dead",
        answerNotPerson: "brain dead",
        answerExplanation:
          'Unwilling to meet two Jedi on his own, Gunray tells Hakko to "Distract them. I will contact Lord Sidious." Aghast, Hakko responds, "Are you brain dead? I\'m not going in there with two Jedi." Hakko nods to the protocal droid TC-14. "Send a droid."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What kind of droid was NOT present at the Battle of Coruscant in "Episode III - Revenge of the Sith"?',
        answer: "Scarab Droid",
        answerNotPerson: "Scarab Droid",
        answerExplanation:
          'The Battle of Coruscant was the opening scene of "Episode III - Revenge of the Sith". It was a massive conflict that involved thousands of ships on both sides. The Confederacy army was composed almost entirely of droids which were not as effective as organic combatants, but were able to be mass produced quickly. With all the different members of the Confederacy pooling their resources and technology, many new and interesting droid designs sprang up.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie was the Millennium Falcon nearly eaten by a Space Slug?",
        answer: "Episode V - The Empire Strikes Back",
        answerNotPerson: "Episode V - The Empire Strikes Back",
        answerExplanation:
          'In "Episode V", the Millennium Falcon was chock-full of problems, most notably, the hyperdrive wasn\'t working. When the Empire found the hidden Rebel base on Hoth, the Rebels had to make a hasty evacuation. Han, Chewie, Leia, and C-3PO made their escape on the Falcon, but were unable to jump to hyperspace. They had to outrun and out-fly Imperial forces through an asteroid field. Han dodged and weaved, and the pursuing TIE Fighters were destroyed by hurtling rocks. Then Han hid the Falcon in a cave, in a larger asteroid, where they could hide and make further repairs. Han soon realized that they weren\'t hiding in a cave, and quickly powered up the Falcon to make yet another escape, this time from being eaten by a giant Space Slug. Once again, out in open space, Han was pursued by the Imperials and unable to jump to hyperspace. His only option was to pull a daring manoeuvre, and hide on the back of a Star Destroyer. When the Star Destroyer ejected its garbage before jumping to hyperspace, Han detached his ship and floated away with it (it did look like a piece of junk). After the Imperials were gone, Han made his way for Bespin, to visit his old friend Lando Calrissian, to get the Falcon in working order. Unfortunately for Han, Boba Fett knew this trick, courtesy of Obi-Wan Kenobi in "Episode II", in the asteroids circling Geonosis, and tracked Han, allowing the Imperials to set up an ambush.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Just about every sci-fi fan knows that the "Star Wars" saga revolves around the ATMOSPHERIC PEDESTRIAN family, right? Well, perhaps that\'s the prose version; what more fanciful name do the primary heroes go by?',
        answer: "Skywalker",
        answerNotPerson: "Skywalker",
        answerExplanation:
          "In his original drafts of the first film's screenplay, George Lucas had, as the main hero, a girl named Starkiller. This character eventually evolved into Luke, whose surname was changed to the familiar Skywalker; to my knowledge, Mr. Lucas never considered the name Atmospheric Pedestrian - it's probably just as well. Luke Skywalker was portrayed by Mark Hamill in the three original \"Star Wars\" films.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie did Anakin Skywalker and Obi-Wan Kenobi duel on the volcanic world, Mustafar?",
        answer: "Episode III - Revenge of the Sith",
        answerNotPerson: "Episode III - Revenge of the Sith",
        answerExplanation:
          'This lightsaber duel is one of the most memorable and emotional fights of the series. It was the climactic sequence in "Revenge of the Sith" when two fellow Jedi, who had once been like brothers, fought for the survival of the galaxy.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What is significant about the opening scene, after the scrolling introduction, in all six "Star Wars" films?',
        answer: "they all take place in space",
        answerNotPerson: "they all take place in space",
        answerExplanation:
          '"The Phantom Menace" begins with a ship carrying two Jedi Ambassadors approaching the Trade Federation ships around Naboo. "Attack of the Clones" begins with Senator Amadala\'s ship approaching Coruscant. "Revenge of the Sith" begins with Anakin and Obiwan over Coruscant, going to rescue Palpatine. "A New Hope" begins with Leia\'s ship being chased by an Imperial Destroyer over Tatooine. "The Empire Strikes Back" begins with an Imperial Starcruiser sending out Imperial Probe Droids. "Return of the Jedi" begins with Darth Vader\'s shuttle approaching the Death Star.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Even though I stayed in Yavin longer than in any other place for the past twenty-two years, I only stayed there for about ten days. On the tenth day, the people from that giant building told me to come with them. They even taught me how to fly airplanes, especially the ones where the wings look like the letter X. But after three years, even though I already learned how to fly all kinds of airplanes, they didn\'t let me fight during that huge battle when we went to that cold, white place." Who was Rogue 4 during the "huge battle" that Forrest briefly described?',
        answer: 'Derek "Hobbie" Klivian',
        answerNotPerson: 'Derek "Hobbie" Klivian',
        answerExplanation:
          'Forrest was obviously describing the Battle of Hoth. During the Battle of Hoth, Derek "Hobbie" Kilivian served as Rogue 4, Dack Ralter was Luke Skywalker\'s gunner, Zev Senesca was Rogue 2, and Lieutenant Wes Janson was the gunner of Wedge Antilles. The "...[airplane with] wings that look like the letter X," as Forrest described it, speaks for itself.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who says this in "The Empire Strikes Back"? "Luke! No! It\'s a trap! Trap!"',
        answer: "Leia",
        answerNotPerson: "Leia",
        answerExplanation:
          "Darth Vader used Han and Leia as bait to lure Luke to Cloud City from Dagobah, where he had a vision of them in danger. Darth Vader wanted to freeze Luke in carbonite so he can take him to the Emperor, but first he tested the freezing process on Han to make sure Luke wouldn't die in the process. Luke escapes being frozen and fights Darth Vader but loses his right hand and his lightsaber. Han is frozen and taken to Jabba the Hutt.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Which "Star Wars" movie won an Oscar for Best Music, Original Score?',
        answer: "Star Wars Episode IV: A New Hope",
        answerNotPerson: "Star Wars Episode IV: A New Hope",
        answerExplanation:
          '"Star Wars", "The Empire Strikes Back" and "Return Of The Jedi" were all nominated for John Williams\' original scores, but only "Star Wars" won.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In Episode 5 when Luke is at Dagobah with Master Yoda he goes into a cave and "fights" Darth Vader. Whose face does he see once the mask opens?',
        answer: "His",
        answerNotPerson: "His",
        answerExplanation:
          "He finds his own face inside the mask, which reveals to him what he could become if he decides to choose the path of the Dark Side.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What does Leia say that Han has, right after he is unfrozen from the carbonite?",
        answer: "hibernation sickness",
        answerNotPerson: "hibernation sickness",
        answerExplanation:
          "Leia was still dressed as the bounty hunter that brought in Chewbacca.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In "Attack of the Clones", who portrayed Jango Fett?',
        answer: "Temuera Morrison",
        answerNotPerson: "Temuera Morrison",
        answerExplanation:
          'Temuera played Jango Fett really well, he seemed so serious when he first met Obi-Wan in his little "apartment" in Kamino.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'As explained in "Attack of the Clones" and "The Phantom Menace", which person had the highest midi-cholorian count "ever seen in a lifeform"?',
        answer: "Anakin Skywalker",
        answerNotPerson: "Anakin Skywalker",
        answerExplanation:
          'Midi-chlorians, according to "Star Wars", are the force that brings life to individuals, and is burrowed in every living cell of a lifeform. Qui-Gonn thought Anakin was conceived by the midi-chlorians, since he had no known father.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of these lines does Mace Windu NOT speak in the Geonosis arena?",
        answer: '"What would Padme do were she in your position?"',
        answerNotPerson: '"What would Padme do were she in your position?"',
        answerExplanation:
          "This line was spoken by Obi-Wan to Anakin after Padme fell out of the Republic gunship.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In the scene when the princess and Han are fixing the Millennium Falcon, Leia says, "My hands are _____."',
        answer: "dirty",
        answerNotPerson: "dirty",
        answerExplanation:
          "If you look closely during this scene, you can see Harrison Ford mouthing Carrie Fisher's lines, as she was under drug influence at the time.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Attack of the Clones" after the arena battle between the Jedi and the droids, a couple Jedi are pushed in with the circle of the survivors as Count Dooku begins to speak. These two Jedi, Plo Koon and Ki-Adi-Mundi, were leading a mission to do what?',
        answer: "Shut down the droid control ship.",
        answerNotPerson: "Shut down the droid control ship.",
        answerExplanation:
          "Plo Koon and Ki-Adi-Mundi led a group of Jedi to shut down the control ship that was landed on the planet. They were successful in doing so, but they found that the droids had been updated to function independently.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Episode 5": What body part does Darth Vader cut off from Luke?',
        answer: "hand",
        answerNotPerson: "hand",
        answerExplanation:
          "Afterwards, Luke jumped off an edge and was sucked into a trash chute.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What is the love theme from "Attack of the Clones" entitled?',
        answer: "Across the Stars",
        answerNotPerson: "Across the Stars",
        answerExplanation:
          'The theme is the first true love theme written for "Star Wars." John Williams did an excellent job creating a beautiful, yet dramatic score.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ANH' - How many rank cylinders did Grand Moff Tarkin have?",
        answer: "4",
        answerNotPerson: "4",
        answerExplanation:
          "Look closely at his shoulders. Right below them, where his arms meet his torso, there are some rank cylinders. He is wearing two on each side.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Which of the following is not a Gungan?",
        answer: "Mas Amaeda",
        answerNotPerson: "Mas Amaeda",
        answerExplanation:
          "Mas is the Suprime Chancellor's assistant at the Senate.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Where did Luke grow up?",
        answer: "Tatooine",
        answerNotPerson: "Tatooine",
        answerExplanation:
          "Luke grew up on Tatooine with Owen and Beru. Leia grew up on Alderaan with the Organa family.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 11
      //////////////,

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who did the incredible effects for all of the 'Star Wars' movies?",
        answer: "ILM",
        answerNotPerson: "ILM",
        answerExplanation:
          "Industrial Light and Magic also did the effects for 'The Mummy', 'The Mummy Returns', 'Titanic', all 3 'Jurassic Park' movies...the list goes on and on.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Why was Darth Vader so angry with Admiral Ozzel?",
        answer: "He came out of lightspeed in the wrong place",
        answerNotPerson: "He came out of lightspeed in the wrong place",
        answerExplanation:
          "Since he came out of lightspeed too close to Hoth, the rebels detected the fleet and were able to evacuate the base. The element of surprise was eliminated. Vader then eliminated Ozzel.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Mark Hamill (Luke Skywalker) does the voice of which animated 'Batman' character?",
        answer: "The Joker",
        answerNotPerson: "The Joker",
        answerExplanation:
          "If you've never heard The Joker's voice, you really should! His laugh is hilarious!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What are the odds of surviving piloting your way through an asteroid field?",
        answer: "3720 to 1",
        answerNotPerson: "3720 to 1",
        answerExplanation:
          "I wonder if that's true? I wish I could find out some day . . .",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What do Jawas sleep inside of?",
        answer: "sandcrawlers",
        answerNotPerson: "sandcrawlers",
        answerExplanation:
          "They actually sleep in those lumbering tanks, not in the caves as some people believe.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the following is not a suit in Sabacc, the game that Han won the Millennium Falcon in?",
        answer: "Jewels",
        answerNotPerson: "Jewels",
        answerExplanation: "He won it from Lando Calrissian.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who said 'No time to discuss this in a commitee!'?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What are the animals Luke used to bullseye in his T-16 on Tatooine?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Han Solo's home planet?",
        answer: "Corellia",
        answerNotPerson: "Corellia",
        answerExplanation: "Han's ship, the Millennium Falcon, is Corellian.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'With each passing moment you become more my servant.'",
        answer: "The Emperor",
        answerNotPerson: "The Emperor",
        answerExplanation: "How wrong he was.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Which of the following quotes is by Darth Maul in "Episode 1"?',
        answer: "At last we will have our revenge.",
        answerNotPerson: "At last we will have our revenge.",
        answerExplanation:
          "Darth Maul was a Zabrak, and was a Sith assassin trained by Darth Sidious. He destroyed the Black Sun and his next task was to destroy Obi-wan Kenobi and Qui-Gon Jinn on Naboo, revealing the Sith to the Jedi. Maul killed Qui-Gon, and would have killed Kenobi if not for Jinn's lightsaber.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'At the end of "Episode V", Vader and company go to Cloud City to ambush Han and Leia. They force Lando Calrissian, Han\'s old friend, to betray Han and Leia. Then Luke is lured into a lightsaber duel with Vader himself. What is the name of the planet the Cloud City is located on?',
        answer: "Bespin",
        answerNotPerson: "Bespin",
        answerExplanation:
          "Bespin is a planet with cities built on tall structures in the clouds (hence the name of the city).",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "While being trained by Yoda in 'Episode V', Luke was set up in a duel against Darth Vader. Why was he given this challenge?",
        answer: "To face his fears",
        answerNotPerson: "To face his fears",
        answerExplanation:
          "Yoda said several times that Luke needed to be more patient, to get over his fears. Again, Yoda was worried about the fear that the new padawan had. Yoda was also worried about Anakin and his fears. Luke failed this fear test from Yoda, and that left Yoda in doubt.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "The Rebel Alliance had a secret base that was discovered by Imperial probe droids. The Rebels stalled Imperial ground forces while the base was evacuated. Rogue Squadron used their snowspeeders' tow-cables to bring down the massive AT-ATs in which battle?",
        answer: "Battle of Hoth",
        answerNotPerson: "Battle of Hoth",
        answerExplanation:
          'The Battle of Hoth took place near the beginning of "Star Wars Episode V: The Empire Strikes Back". The Rebels had a secret base on the frozen planet of Hoth, which the Empire managed to find using large numbers of probe droids. The Imperial fleet set a course for Hoth to capture or kill as many Rebels as possible. The Rebels, on the other hand, scrambled to evacuate. They sent the famous Rogue Squadron, led by Luke Skywalker, to delay the Imperials\' advance. The Empire used heavily armored AT-ATs (All-Terrain Armored Transports) that the Rebel lasers could not harm. The Rogues had to use tow cables to tie up the legs of the walkers to slow them down. Despite the best efforts of the Rebels, their shield generator was destroyed and their base overrun.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In "A New Hope", who says, "Now, I am the master"?',
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplanation:
          "Darth Vader prepares to duel with Kenobi on the Death Star. Luke, Han, Leia, Chewie, R2, and 3PO have many adventures, including nearly getting smashed in a trash compactor. While this is going on, Kenobi has turned off the tractor beam, so the Millenium Falcon can escape. As Obi-Wan and Vader duel, the others escape to the ship. At the end of the duel, Kenobi dies.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Only one clone trooper is called by a name instead of a number in "Revenge of the Sith." Who is this clone?',
        answer: "Cody",
        answerNotPerson: "Cody",
        answerExplanation:
          'Commander Cody is Obi-Wan\'s primary senior clone officer, and the Jedi calls him by name just before the battle of Utapau. Cody is frequently seen at Obi-Wan\'s side in the "Star Wars: The Clone Wars" TV series, and is characterized as fiercely loyal to the Jedi master. However, when Darth Sidious issues Order 66 in "Revenge of the Sith," Cody doesn\'t hesitate to order his men to kill Obi-Wan. Captain Rex is Anakin\'s right-hand man in the "Star Wars: The Clones Wars" movie and TV series. Commander Gree is the officer who leads the clones in the battle of Kashyyyk in "Revenge of the Sith." (He\'s named in the novelization of the movie.) When Order 66 comes, Gree and another trooper attempt to take down Yoda only to literally lose their heads to Yoda\'s green blade. And in the novel "Dark Lord: The Rise of Darth Vader," Commander Apo accompanies Vader to Kashyyyk, where he is killed.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'On his flagship in "Revenge of the Sith", Grievous calls Obi-Wan and Anakin "Jedi ____". What\'s the missing word?',
        answer: "Scum",
        answerNotPerson: "Scum",
        answerExplanation:
          'He calls them "Jedi scum" after Anakin insults him by saying, "General Grievous: You\'re shorter than I expected." "Scum" is apparently a popular insult in the "Star Wars" universe, as it appears in four of the six movies. Grievous hates Jedi intensely, and in both of Cartoon Network\'s animated "Star Wars" series. Grievous has killed numerous Jedi and collected their light sabers as trophies.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "When/where do we see TIE Bombers?",
        answer: 'In the asteroid field ("Episode V")',
        answerNotPerson: 'In the asteroid field ("Episode V")',
        answerExplanation:
          "TIE Bombers have similar cockpits to other TIE spacecraft, though it is elongated. Bombers also have a second pod between curved solar panels that carries purely ordinance.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Next time you're trekking through the deserts of Tatooine, be forewarned: watch out for THE CITIZENS OF GRITTY SUBSTANCE FOUND AT BEACHES. They ride banthas, shoot at passing podracers with gaffi sticks, and violently raid human settlements and Jawa sandcrawlers. In a less loquacious form, what are they known as to the locals?",
        answer: "The Sand People",
        answerNotPerson: "The Sand People",
        answerExplanation:
          "The Sand People are known more formally as Tusken Raiders. Although the word citizen is indeed one synonym for people, many who have had loved ones fall victim to the Tuskens' bloody rituals consider them to be more animal than person. Anakin Skywalker's mother was taken by the Sand People for a coming-of-age ritual, where a young Tusken must capture a creature or sentient being and torture it, extending its suffering for weeks before it dies. It is understandable that Anakin's rage and hate overtook him upon finding his poor mother, and he slaughtered the entire Tusken camp: the men, women, and children.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie was the first Death Star destroyed in the Battle of Yavin?",
        answer: "Episode IV - A New Hope",
        answerNotPerson: "Episode IV - A New Hope",
        answerExplanation:
          'The Battle of Yavin took place at the end of "A New Hope" and was named after the gas giant Yavin where it took place. The Imperial forces were attempting to move the Death Star around Yavin to get a clear shot at Yavin IV, the moon of Yavin that the Rebel Alliance had built their secret base on. The Rebels launched X-Wings and Y-Wings to assault the Death Star and exploit its one known weakness.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"While I was flying one of those airplanes when they finally allowed me to, I got lost. So I landed on the nearest place that I could find. I didn't know what the place was actually called, so I just called it Cloud City because I sure did see a lot of clouds there. So I stayed in Cloud City for a little while, but I didn't do much. The only thing that I remember was this voice that I heard. No one else seemed to have heard it because whenever I asked anyone if they heard it, they always said 'no'. I guess I could hear pretty well. And just in case you want to know what the voice said, it was somethin' like, 'No, I am your father.' Y'know what? I think he just found his son.\" I think what Forrest is saying is easy to understand. So, if I may ask, what is the name of the aide of the Baron Administrator of Cloud City during the time of Forrest's description?",
        answer: "Lobot",
        answerNotPerson: "Lobot",
        answerExplanation:
          "The Baron Administrator of Cloud City during that time was Lando Calrissian, and his aide's name is Lobot. If that name doesn't ring a bell, Lobot is the human being from \"The Empire Strikes Back\" whom we could see wearing a semi-circle shaped device around the back of his head. The purpose of that device was to connect him to the central computer of Cloud City.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'A young guy named Luke ends up with a droid containing a message for a man named Obi-Wan Kenobi, regarding the Empire\'s Death Star plans. In which "Star Wars" movie did that happen?',
        answer: "Star Wars Episode IV: A New Hope",
        answerNotPerson: "Star Wars Episode IV: A New Hope",
        answerExplanation:
          "Princess Leia stored the message in R2D2 before she was captured. R2D2 ends up at the farm of Luke's uncle on Tatooine, and sets out to find Obi-Wan with Luke and C-3PO in pursuit.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Chewbacca's weapon?",
        answer: "bowcaster",
        answerNotPerson: "bowcaster",
        answerExplanation:
          "Luke tells Chewbacca to give the Ewoks this weapon when they are captured on Endor.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who was the Production Supervisor for the movie, "Attack of the Clones"?',
        answer: "Stephen Jones",
        answerNotPerson: "Stephen Jones",
        answerExplanation:
          "Claire Richardson was the Second Assistant Director, Ben Burtt was the Editor and Sound Designer, and Trisha Biggar was the Costume Designer.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In chronological order, what were the planets shown in "Attack of the Clones?"',
        answer: "Coruscant, Naboo, Kamino, Tatooine, Geonosis",
        answerNotPerson: "Coruscant, Naboo, Kamino, Tatooine, Geonosis",
        answerExplanation:
          "Coruscant was the capital of the Republic, Naboo is Amidala's home, Kamino the home of the cloners, Tatooine, the Lars' home, and Geonosis where Padme confessed her love to Anakin.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 12
      //////////////,

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is different about Mace Windu from all the other Jedi?",
        answer: "He has a purple lightsaber.",
        answerNotPerson: "He has a purple lightsaber.",
        answerExplanation:
          "Sam Jackson said he wanted the purple blade so he could point himself out in the movie.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the following was not an apprentice to the Emperor?",
        answer: "Jango Fett",
        answerNotPerson: "Jango Fett",
        answerExplanation: "Jango Fett was a bounty hunter.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Han got the Millennium Falcon by beating whom in a game of what?",
        answer: "Lando Calrissian in Sabacc",
        answerNotPerson: "Lando Calrissian in Sabacc",
        answerExplanation:
          "Lando did not quite understand Sabacc, so he lost badly.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "A New Hope," how fast does Han say the Millennium Falcon can go?',
        answer: "point-five past lightspeed",
        answerNotPerson: "point-five past lightspeed",
        answerExplanation:
          'When Luke says the Falcon looks like a piece of junk, Han counters with this remark. I have no idea what "point-five past lightspeed" means. A parsec is a unit of distance, not of speed or time, equal to 3.26 lightyears or around twenty trillion miles.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'How do C-3P0 and R2-D2 escape in "A New Hope" after R2-D2 received the data from Princess Leia?',
        answer: "escape pod",
        answerNotPerson: "escape pod",
        answerExplanation:
          "The gunners didn't shoot down the escape pod because their sensors showed no sign of life, because the droids weren't showing up on the scanners.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"Attack of the Clones\" takes place on 5 planets. Beginning on Coruscant, Anakin must escort Padmé to Naboo. While there, Obi-Wan travels to Kamino. Anakin returns to Tatooine, then learns of Obi-Wan's capture on a different planet. Where do he, Padmé, and all the Jedi travel for the film's climactic battles?",
        answer: "Geonosis",
        answerNotPerson: "Geonosis",
        answerExplanation:
          "Geonosis is a new planet, introduced in Episode 2. An arid planet, it houses a major center for the construction of droids.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'ANH' - Uncle Owen needs a droid that knows what?",
        answer:
          "binary language of independently programmable moisture vaporators",
        answerNotPerson:
          "binary language of independently programmable moisture vaporators",
        answerExplanation:
          "If you remember, Aunt Beru is the one who wants a droid that can speak Bocce, not Uncle Owen.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Jedi Master Kit Fisto?",
        answer: "Nautolan",
        answerNotPerson: "Nautolan",
        answerExplanation: "I got that from a Trading Card.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'Fear leads to anger. Anger leads to hate. Hate leads to...'",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "How often were the three original 'Star Wars' movies released?",
        answer: "Every 3 Years",
        answerNotPerson: "Every 3 Years",
        answerExplanation:
          "Episode 4 was released in {1977;} Episode 5 in {1980;} and Episode 6 in 1983. Episode 1 was released in 1999, Episode 2 was released May in 2002, and Episode 3 was released in 2005.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What swallowed R2-D2 on Dagobah?",
        answer: "A Dragonsnake",
        answerNotPerson: "A Dragonsnake",
        answerExplanation:
          "The Dragonsnake didn't like the taste of R2-D2, so it spit him out.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "The scene on Dagobah, where the swamp monster spits out R2-D2, was filmed where?",
        answer: "George Lucas's swimming pool",
        answerNotPerson: "George Lucas's swimming pool",
        answerExplanation:
          "They filled it with muddy water, then the whole crew just got in and did the scene while George filmed it!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the Imperial shuttle the rebels steal in 'The Return of the Jedi'?",
        answer: "Tyderium",
        answerNotPerson: "Tyderium",
        answerExplanation:
          "Listen carefully to the conversation on the rebels trip to the forest moon of Endor.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who choreographed the lightsaber battles in the original trilogy?",
        answer: "B. Anderson",
        answerNotPerson: "B. Anderson",
        answerExplanation:
          "Compared to \"Episode I\" and II, the trilogy's fights might seem bland, but for the late 70's and early 80's it was a breakthrough in stage fighting.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What prompted Han Solo to say 'Good, I hate long waits.'?",
        answer: "terminate immediately",
        answerNotPerson: "terminate immediately",
        answerExplanation:
          "C3P0 tells him that Jabba the Hutt has decreed that he is to be terminated immediately and we get this reply.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Greedo?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What are the last words heard before the first Death Star Explodes?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Where does Boba Fett supposedly die?",
        answer: "Pit of Carkoon",
        answerNotPerson: "Pit of Carkoon",
        answerExplanation:
          "Rumor has it that Boba Fett miraculously escapes the treacherous Sarlaac and goes on to live after Return of the Jedi.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'At that close range we won't last long against those Star Destroyers.'",
        answer: "Admiral Ackbar",
        answerNotPerson: "Admiral Ackbar",
        answerExplanation:
          "They lasted longer than they would have against that Death Star and they did take a few of them with them.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What vehicle was stuck in the water on Dagobah after Luke went there to find Yoda for his Jedi training?",
        answer: "Luke's X-Wing",
        answerNotPerson: "Luke's X-Wing",
        answerExplanation:
          "Yoda showed Luke the powers of the Force by lifting the great ship out of the water, even though Luke thought it was impossible. Later, Luke would climb aboard his X-Wing to help his friends on Bespin and find out that Darth Vader was his father.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Now we come to "Episode VI" and the fall of the Empire. The Empire was trying to build a second Death Star, protected by a shield generator on the forest moon of Endor. During the space battle off Endor, the outnumbered Rebel fleet tried to hold on against a fleet of Star Destroyers. The Super Star Destroyer flagship was destroyed by what method?',
        answer: "A damaged Rebel fighter rammed the bridge",
        answerNotPerson: "A damaged Rebel fighter rammed the bridge",
        answerExplanation:
          "The Super Star Destroyer was destroyed when a severely damaged A-Wing crashed into the Star Destroyer's bridge. The ship then plunged into the Death Star, killing all aboard.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In 'Episode V', while Luke was training with Yoda he had a vision. He said that it was a city in the clouds. What did he see?",
        answer: "Han Solo, Leia, and Chewie in pain",
        answerNotPerson: "Han Solo, Leia, and Chewie in pain",
        answerExplanation:
          "While Luke was training with Yoda he saw a vision of the future. Luke specifically said that he saw Han, Leia, and Chewie in pain. Luke asked Yoda if they were going to die, but Yoda was not sure. That frightened Luke, and he had an argument with Yoda and Obi Wan over whether or not he should go. Yoda didn't think that Luke should go because he didn't want him to leave his training.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which battle did Yoda oversee clone troopers as they helped the Wookiees defend their homeworld?",
        answer: "Battle of Kashyyyk",
        answerNotPerson: "Battle of Kashyyyk",
        answerExplanation:
          'The Battle of Kashyyyk was one of the many battles seen in "Star Wars Episode III: Revenge of the Sith". Kashyyyk was the Wookiee homeworld, and extremely important to the Republic. Yoda volunteered to travel to Kashyyyk to help the Wookiees repel Separatist forces. During the battle, Order 66 was given, and Yoda\'s clones tried to assassinate him. The Wookiees decided to help the Jedi on Kashyyyk, and the clones started targeting them too.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Attack of the Clones", who says "This party\'s over"?',
        answer: "Mace Windu",
        answerNotPerson: "Mace Windu",
        answerExplanation:
          "This takes place at the Geonosian arena. Padme, Kenobi and Anakin are about to be killed by wild beasts, when Mace comes to the rescue with all the other Jedi. He says, \"This party's over\", as he turns on his saber at Dooku's throat.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Near the beginning of "The Phantom Menace," Qui-Gon Jinn "saves" Jar-Jar by crashing into him before he\'s run down by a Trade Federation tank. The Gungan starts following the Jedi and effusively thanks him, but Qui-Gon, intent on his mission, wants to get away from Jar-Jar. Oddly for a Jedi, Qui-Gon insults Jar-Jar. What does he say?',
        answer: '"The ability to speak does not make you intelligent."',
        answerNotPerson:
          '"The ability to speak does not make you intelligent."',
        answerExplanation:
          '"You almost got us killed! Are you brainless?" Qui-Gon asks, not really caring to hear an answer. Jar-Jar says, "I spake," meaning "I speak," but the exasperated Qui-Gon says, "The ability to speak does not make you intelligent. Now, get out of here." Qui-Gon later changes his mind about Jar-Jar and finds him quite useful, despite his clumsiness. Jedi usually don\'t use insulting language, but in "The Phantom Menace," both Qui-Gon and Obi-Wan express some disdain for the clumsy Jar-Jar.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 13
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does a super battle droid call Artoo, when it catches the smaller droid in the flagship\'s hanger bay in "Revenge of the Sith?"',
        answer: '"You stupid little astro droid."',
        answerNotPerson: '"You stupid little astro droid."',
        answerExplanation:
          'While Artoo is trying to activate an elevator, two super battle droids catch him. One picks up Artoo and says, "You stupid little astro droid." But Artoo escapes by first spewing oil over them and then setting the oil on fire with his jets.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What kind of ships followed the Millennium Falcon after it escaped the Death Star in "Episode IV - A New Hope"?',
        answer: "TIE Fighters",
        answerNotPerson: "TIE Fighters",
        answerExplanation:
          "After Han and Luke rescue Leia, and escape the Death Star, four TIE Fighters were sent after the Falcon. Han and Luke manned the quad guns while Chewie flew the ship, and fended off the attackers.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Which movie did NOT feature the loss of someone's hand?",
        answer: "Episode I - The Phantom Menace",
        answerNotPerson: "Episode I - The Phantom Menace",
        answerExplanation:
          "It seems that the Jedi practiced the art of 'disarming' quite a bit when training. There were quite a few arms lost through the \"Star Wars\" series, due to lightsabers.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Han Solo, as he so proudly boasts, owns the fastest ship in the galaxy, though Princess Leia first considers it a bucket of bolts requiring bravery to pilot. Perhaps it would have made up for the intermittent engines if it had gone by the name RAPTOR OF A THOUSAND YEARS. But, poetical though it is, it just doesn't suit the roguish Captain Solo as the vessel's true moniker does.",
        answer: "Millennium Falcon",
        answerNotPerson: "Millennium Falcon",
        answerExplanation:
          "The YT-1300 model freighter known as the Millennium Falcon is Corellian, like its owner. Han won the ship in a game of Sabacc from his old buddy Lando Calrissian. While at first glance Han's claim of making the Kessel Run in less than 12 parsecs may seem like the term \"parsec,\" a unit of distance, is being misused as a unit of time, the statement is actually plausible. The Kessel Run involves skillful and gutsy flying through the Maw, an area chock full of black holes. A brave pilot such as Solo tries to find the most direct, and thus shortest, route through; Han's distance of 12 parsecs was a record. One parsec is equal to a distance of approximately 3.26 light years.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which movie did the Trade Federation invade and occupy the peaceful planet of Naboo?",
        answer: "Episode I - The Phantom Menace",
        answerNotPerson: "Episode I - The Phantom Menace",
        answerExplanation:
          'The Trade Federation was a galaxy-spanning corporation that fell under the influence of the Dark Lord of the Sith. When the Republic attempted to tax the free trade zones, the Trade Federation blockaded the planet of Naboo in protest. When Jedi were sent to resolve the crisis (the beginning of "The Phantom Menace"), the Trade Federation, under the guidance of Darth Sidious, invaded and occupied the planet.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which two episodes do we NOT see the Death Star (including pictures)?",
        answer: '"The Phantom Menace" and "The Empire Strikes Back"',
        answerNotPerson: '"The Phantom Menace" and "The Empire Strikes Back"',
        answerExplanation:
          'Plans for the Death Star, including a 3-D projection are shown at the end of "Attack of the Clones". "Revenge of the Sith" ends with a shot of the Death Star being constructed. The Death Star is, of course, in "A New Hope"; it is destroyed at the end. The second Death Star is featured and destroyed in "Return of the Jedi".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"Because I couldn't find anything to do in Cloud City, I decided to travel with my airplane and go back to that desert place. The problem was, I didn't know how to get there. So I asked one of them pilots to teach me how to get there. Eventually, the pilot told me that the desert planet's called Tatooine. When I finally got there, I saw this weird circle thing with some kind of moving tentacles on its side. My mama always told me not to talk to strangers. Because the creature wouldn't talk to me, I just ran away. He didn't seem friendly at all.\" In which of these locations was Forrest stationed, according to his above account?",
        answer: "Pit of Carkoon",
        answerNotPerson: "Pit of Carkoon",
        answerExplanation:
          "The creature that Forrest described is the Sarlacc, which is located at the Pit of Carkoon. Both Luke Skywalker and Han Solo were destined to die there, but they both managed to get away from the clutches of Jabba the Hutt.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Who saves Luke on Hoth in "The Empire Strikes Back"?',
        answer: "Han",
        answerNotPerson: "Han",
        answerExplanation:
          "Luke was carried off by a Wampa ice monster on Hoth. He managed to escape by cutting an arm off the wampa, but he is freezing to death in the snow during the cold night. That is when Obi-Wan comes to Luke in a vision and tells him to go to Dagobah to learn from Yoda. Han comes later and finds him.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie does Princess Leia say, "I\'d just as soon kiss a Wookiee"?',
        answer: "Episode V: The Empire Strikes Back",
        answerNotPerson: "Episode V: The Empire Strikes Back",
        answerExplanation:
          'She says it to Han Solo when he asks "Afraid I was gonna leave without giving you a goodbye kiss?". He responds to her remark with, "I can arrange that! You could use a good kiss!".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Out of these answers, who is the first one who knows Luke and Leia are brother and sister?",
        answer: "Yoda",
        answerNotPerson: "Yoda",
        answerExplanation:
          '"That\'s our last hope"-Obi Wan. "No, there is another"-Yoda.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Complete this quote from Luke Skywalker: "With the ___ down I can\'t see a thing. How am I supposed to fight?"',
        answer: "blast shield",
        answerNotPerson: "blast shield",
        answerExplanation:
          'Luke is beginning his Jedi training with Obi-Wan Kenobi on the Millennium Falcon. He said this quote to Obi-Wan. Obi-Wan then said, "Your eyes may deceive you. Don\'t trust them."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In "A New Hope", who portrayed Aunt Beru?',
        answer: "Shelagh Fraser",
        answerNotPerson: "Shelagh Fraser",
        answerExplanation:
          "Shelagh Fraser portrayed Aunt Beru, Luke Skywalker's aunt, and Anakin Skywalker's, A.K.A. Darth Vader, sister-law.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Which of these Council members are still alive as of "Episode II"?',
        answer: "Adi Gallia",
        answerNotPerson: "Adi Gallia",
        answerExplanation:
          'Micah Giett was killed in the Jedi Council comic book, Sifo-Dyas\' death is mentioned in "Episode II", and Poof died in the Zam Wesell comic book.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who are the leaders of the Trade Federation during "Attack of the Clones"?',
        answer: "Nute Gunray and Rune Haako",
        answerNotPerson: "Nute Gunray and Rune Haako",
        answerExplanation:
          'They failed in their mission to take over Naboo in "The Phantom Menace" and after 4 trials in the Senate, "Nute Gunray" still held onto his "Viceroy" position. The Senate reprimanded the Naboo incident, but the Trade Federation continued to operate, becoming all the more powerful and influential in the political chaos that would follow. (Some information provided here by www.StarWars.com)',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "According to Yoda, who is Luke's father?",
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplanation:
          "Darth Vader, as we now know, was consumed by his emotions and was seduced by the dark side shortly before Luke was born.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In "Return of the Jedi," when is Admiral Piett killed?',
        answer: "When an A-Wing fighter crashes into the bridge.",
        answerNotPerson: "When an A-Wing fighter crashes into the bridge.",
        answerExplanation:
          'Admiral Piett, who held on to the job he got in "The Empire Strikes Back," died when an out of control A-wing crashed into the Executor bridge after it lost its main bridge deflector shield.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"Episode 4\": What does R2-D2 tell C-3P0 is the reason he can't play Leia's message?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What classic "Star Wars" song from the original trilogy is played for the finale of "Attack of the Clones"?',
        answer: '"The Imperial March"',
        answerNotPerson: '"The Imperial March"',
        answerExplanation:
          'The march is played as the star destroyers take off. On a side note, "Duel of the Fates" is not even from the original trilogy. It was written for Episode 1.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ESB' - Who finds Luke and Han after they spent the night out in the open on Hoth?",
        answer: "Rogue 2",
        answerNotPerson: "Rogue 2",
        answerExplanation:
          "He found them! He found them! And later that evening the Rebels enjoyed meat flavored popsicles.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Jedi Master Plo Koon?",
        answer: "Kel Dor",
        answerNotPerson: "Kel Dor",
        answerExplanation: "Kel Dor's homeword is Dorin.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Both Luke and Anakin were considered too ____ to be trained as Jedi.",
        answer: "old",
        answerNotPerson: "old",
        answerExplanation: "Both were trained anyways.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who played C-3PO?",
        answer: "Anthony Daniels",
        answerNotPerson: "Anthony Daniels",
        answerExplanation:
          "Yes, the whiny but lovable C3PO was played by Anthony Daniels. Daniels spoiled the illusion with his article 'C3PO is Human,' in which he revealed that C-3PO was just a costume.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What planet does Cloud City orbit around?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Complete this C-3PO quote: 'Don't you call me a mindless philosopher, you overweight glob ______! '",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What was the name of the planet where the rebels met the ewoks?",
        answer: "The Forest Moon of Endor",
        answerNotPerson: "The Forest Moon of Endor",
        answerExplanation:
          "It actually is NOT Endor. Listen carefully to what is said, they land on THE FOREST MOON OF ENDOR. So, in fact, they went to one of Endor's moons, not Endor itself.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 14
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "On what ship is Admiral Ackbar stationed on during the second Death Star battle?",
        answer: "Home One",
        answerNotPerson: "Home One",
        answerExplanation:
          "Like many other rebel ships, Home One is a Mon Calimarian Star Cruiser.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Where do we see fireworks after the Emperor dies (in the special edition) that we had never seen before?",
        answer: "Coruscant",
        answerNotPerson: "Coruscant",
        answerExplanation:
          "I don't know why they would be celebrating the Emperor's death, seeing that that was the Imperial City, but, whatever works, I guess.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who initiated the ancient Sith Lord system of only one master and one apprentice?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the following Star Wars characters is not a bounty hunter?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Where does Queen Amidala live in Episode I?",
        answer: "Theed Palace",
        answerNotPerson: "Theed Palace",
        answerExplanation: "If you missed this, go watch it again!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'Yub nub.'",
        answer: "Wicket",
        answerNotPerson: "Wicket",
        answerExplanation: "Common Ewok phrase.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What was the name of the bounty hunter Han Solo shot on Tatooine in the Mos Eisley cantina when Luke and Ben arrived?",
        answer: "Greedo",
        answerNotPerson: "Greedo",
        answerExplanation:
          "Greedo was seeking a reward from Jabba by bringing Han to him, but met an unfortunate end from the Corellian's blaster.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In the final face-off, Luke is able to defeat Vader, but Palpatine hits Luke with Force lightning. Vader then throws Palpatine off the edge of a generator, killing him. Vader then dies, marking the complete end of the Empire. After the Empire's fall, there is a celebration on Endor. Which three characters appear as Force ghosts there?",
        answer: "Yoda, Obi-Wan, and Anakin",
        answerNotPerson: "Yoda, Obi-Wan, and Anakin",
        answerExplanation:
          'Yoda, Obi-Wan and Anakin were displayed as smiling at the celebration of Ewoks and Rebels on Endor. Anakin, in the original movie is displayed as an old man, but in the newer version, he is played by the Anakin from "Episode III". Thanks for playing!',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In 'Episode VI', if Luke did not choose the Dark Side and was killed, what was Darth Vader's other idea?",
        answer: "To use Princess Leia",
        answerNotPerson: "To use Princess Leia",
        answerExplanation:
          "Darth Vader pretty much gave Luke the decision of either joining the Dark Side or death. If Luke did not join him on the Dark Side and chose death, than Darth Vader would try to convince Leia to join. Darth Vader considered Leia another hope in case Luke didn't change. Darth Vader mentioned his other idea while talking to Darth Sidious, and this idea was also how Darth Vader got Luke to fight when he didn't want to.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In which battle did Wedge Antilles and Lando Calrissian fly into the second Death Star to destroy its core?",
        answer: "Battle of Endor",
        answerNotPerson: "Battle of Endor",
        answerExplanation:
          "The Empire built a new Death Star after their first one was destroyed during the Battle of Yavin. The secret construction site of the new super weapon was in orbit of the forest moon of Endor. Imperial engineers fixed the trench and thermal exhaust port design flaw of the first one, which meant that the Rebels would have to get to the main reactor to destroy it. Luckily, the Death Star was still under construction, and the Rebels were able to pilot their ships through the unfinished super weapon. Of the Rebel ships that entered the Death Star, some were destroyed, some diverted pursuit, and two actually made it through the narrow, twisting tunnels to the core. Wedge Antilles destroyed a power regulator while Lando Calrissian shot the main reactor itself. The two pilots barely made it out before they were engulfed in flames.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "A New Hope", Obi-Wan uses a jedi mind trick to make a storm trooper say what?',
        answer: '"Move along, move along."',
        answerNotPerson: '"Move along, move along."',
        answerExplanation:
          "The storm troopers are searching anyone who owns droids in the town of Mos Eisley, because the Princess's ship was boarded. She sent The Death Star plans with R2, in an escape pod and the storm troopers are looking for them. The Imperial scanners find no life readings on the pod, but when the storm troopers arrive on Tattooine, the planet the pod landed on, they find droid parts. They begin the search for the droids. But when they get to Luke's speeder, they are tricked by Kenobi!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In Palpatine\'s office at the beginning of "Attack of the Clones," Padme speculates that Count Dooku could be behind her assassination attempt. Ki-Adi-Mundi, a member of the Jedi Council, naively states that Count Dooku is "a political ___, my dear, not a ___." What are the two missing words?',
        answer: "idealist, murderer",
        answerNotPerson: "idealist, murderer",
        answerExplanation:
          '"He is a political idealist, my dear, not a murderer," says Ki-Adi-Mundi, and Mace Windu follows up by saying, "You realize, my lady, that Count Dooku was once a Jedi. He couldn\'t assassinate anyone. It\'s not in his character." The look on Padme\'s face suggests that she thinks the Jedi are fooling themselves. As it turns out, her suspicions are correct, in that Dooku had engaged Jango Fett\'s services to assassinate Padme in return for the Trade Federation joining the Separatist movement. Nute Gunray is the leader of the Trade Federation, and he bears a grudge against Padme for humiliating and defeating him 10 years earlier on Naboo in "The Phantom Menace." (Jango Fett in turn had hired the assassin Zam Wessel to do the actual murder.)',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'When Dooku walks into the room on Geonosis where Obi-Wan is imprisoned, in "Attack of the Clones," what single word does Obi-Wan immediately call Dooku?',
        answer: "Traitor",
        answerNotPerson: "Traitor",
        answerExplanation:
          "\"Traitor,\" Obi-Wan snarls. \"Oh no, my friend this is a mistake. A terrible mistake! They've gone too far. This is madness,\" Dooku responds smoothly, setting up one of the most critical conversations in the entire prequel trilogy. It's quite enlightening, as Dooku tries to play on their common bond of Qui-Gon Jin, who was Obi-Wan's master and Dooku's padawan. He then tells Obi-Wan the absolute truth about the Sith Lord Sidious' control of many in the Republic senate -- which Obi-Wan refuses to believe at the time.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which battle did not take place simultaneously with a lightsaber fight?",
        answer: 'Battle of Yavin ("Episode IV")',
        answerNotPerson: 'Battle of Yavin ("Episode IV")',
        answerExplanation:
          'In "Episode I - The Phantom Menace", the battle around the droid control ship was underway while Obi-Wan Kenobi and Qui-Gon Jinn fought Darth Maul in the reactor room on Naboo.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Which movie did not feature Tatooine?",
        answer: "Episode V - The Empire Strikes Back",
        answerNotPerson: "Episode V - The Empire Strikes Back",
        answerExplanation:
          'Five of the six "Star Wars" movies featured the planet Tatooine, the planet where both Anakin and Luke Skywalker grew up, despite being the planet "farthest from the bright center of the universe".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'I hope you\'ve enjoyed this alternative look at the COLLECTION OF STAR SYSTEMS A VERY, VERY GREAT DISTANCE FROM HERE. The story took place a long time ago - but the "Star Wars" films can bring the fantasy to a television near you!',
        answer: "The Galaxy Far Far Away",
        answerNotPerson: "The Galaxy Far Far Away",
        answerExplanation:
          'All six "Star Wars" movies open with that familiar line: "A long time ago in a galaxy far, far away ....", leading into the opening crawl which provides some context and backstory. The Galaxy Far Far Away, while a certainly shorter designation than mine, is often abbreviated by the fans as the GFFA.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "In which movie did the epic Battle of Endor take place?",
        answer: "Episode VI - Return of the Jedi",
        answerNotPerson: "Episode VI - Return of the Jedi",
        answerExplanation:
          'The Battle of Endor was the final battle seen in the "Star Wars" saga (chronologically). The Rebel Alliance fleet attacked the Empire\'s ultimate weapon, the Death Star II, in their bid to return democracy to the galaxy. It turned out to be a trap, and the Imperial fleet was waiting, resulting in one of the largest space battles ever.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What is significant about the final scene in all six "Star Wars" films?',
        answer: "they have no major dialogue",
        answerNotPerson: "they have no major dialogue",
        answerExplanation:
          '"The Phantom Menace" ends with Boss Nass holding up the glowing ball given him by the Queen and the whole crowd cheering. "Attack of the Clones" ends with the wedding of Padme and Anakin. "Revenge of the Sith" ends with Obiwan bringing baby Luke to Owen and Beru. "A New Hope" ends with the award ceremony for Luke and Han. "The Empire Strikes Back" ends with Luke and Leia looking out in space as Lando and Chewy leave to rescue Han. "Return of the Jedi" ends with the celebration of the end of the Empire and the return of Anakin to the good side. All feature wonderful musical masterpieces by John Williams.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "\"I couldn't come up with a reason on why I should stay on Tatooine, so I decided to travel again. This time, I got myself into this huge battle. I didn't really want to fight them airplanes, so I entered this sphere shaped thing that I saw. When I came in, I couldn't believe what my eyes saw. That person who won the race back in Tatooine was there. I was about to talk to him, but I realized that someone else was talking to him. Also, because I saw everyone running around and leaving that place, I decided to do that too. I didn't know where to go, so I told myself that I should go back to our old house. You know how I got back? I just opened my eyes and for some weird reason, I got back home.\" Forrest made his way to the interior of the Second Death Star. The question is, who was the commander of the Second Death Star?",
        answer: "Moff Jerjerrod",
        answerNotPerson: "Moff Jerjerrod",
        answerExplanation:
          "Moff Jerjerrod, the commander of the Second Death Star, was quite anxious of Emperor Palpatine's visit to the space station. Perhaps, he feared that if they didn't accomplish the completion of the Second Death Star in time, the Emperor would punish him.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie do the Ewoks help the rebels fight the evil Empire?',
        answer: "Episode VI: Return Of The Jedi",
        answerNotPerson: "Episode VI: Return Of The Jedi",
        answerExplanation:
          "The cute, cuddly inhabitants of Endor do what they can to help destroy the Death Star.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: '"And my ______ is out in it!" Please fill in the blank!',
        answer: "friend",
        answerNotPerson: "friend",
        answerExplanation:
          "Han Solo says this when Luke doesn't come back from scouting an area on the planet Hoth. He is such a heroic guy in these movies, and definitly one of my favorites!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does Anakin refer to Qui-Gon\'s lightsaber as, in "Episode 1"?',
        answer: "Laser sword",
        answerNotPerson: "Laser sword",
        answerExplanation:
          "Anakin, once seeing this, thought that Qui-Gon was coming there to free the slaves. He wasn't but it just turns out that he freed Anakin because of what he sensed in the boy.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In "A New Hope", who portrayed Ben (Obi-Wan) Kenobi?',
        answer: "Alec Guinness",
        answerNotPerson: "Alec Guinness",
        answerExplanation:
          "Mark Hammill portrayed Luke Skywalker, Harrison Ford played Han Solo, and Gary Guinness, I just made up.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Luke Skywalker went through a complete transformation between "Empire Strikes Back" and "Return of the Jedi." Which of the following BEST describes this transformation?',
        answer: "Weak and Immature, to Strong and Mature",
        answerNotPerson: "Weak and Immature, to Strong and Mature",
        answerExplanation:
          'Skywalker, in "Episode 5", would not accept Vader as his father. But, into the sixth, he came to terms with it.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Yaddle is approximately how old compared to Yoda?",
        answer: "Half his age",
        answerNotPerson: "Half his age",
        answerExplanation: "Yaddle is about 475 yrs old.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 15
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "How many languages is C-3PO fluent in?",
        answer: "Over Six Million",
        answerNotPerson: "Over Six Million",
        answerExplanation: "He states this several times in many movies.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What does Leia remember her mother as?",
        answer: "sad",
        answerNotPerson: "sad",
        answerExplanation:
          "When Luke and Leia were born, they had to be taken from their mother and hidden to keep them safe from Vader.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Luke realized Leia was his sister in which episode of "Star Wars?"',
        answer: "6",
        answerNotPerson: "6",
        answerExplanation:
          'It was in "Return of the Jedi," which is the sixth episode of the "Star Wars" saga. He finally figures it out when talking to Obi-Wan\'s ghost on Dagobah. Smarty-pants Leia said she always knew!',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          '"Episode 4": Who kills Obi-Wan Kenobi physically as Luke watches?',
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplanation:
          "Afterwards Luke tries to avenge Obi-Wan's death by attempting to kill Darth Vader, until Obi-Wan's spirit tells Luke to run.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the character (Jedi) played by Samuel L. Jackson named?",
        answer: "Mace Windu",
        answerNotPerson: "Mace Windu",
        answerExplanation: "This character also originated in Episode 1.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'ROTJ' - What does Jerjorrod ask Vader for more of?",
        answer: "Men",
        answerNotPerson: "Men",
        answerExplanation: "'You can tell the Emperor when he arrives.'",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species is Jedi Master Even Piell?",
        answer: "Lannik",
        answerNotPerson: "Lannik",
        answerExplanation:
          "Lanniks look like pigs that walk on two feet. He looks like Oolong in 'Dragon Ball Z'. Scary, just scary.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who was Luke's father?",
        answer: "Darth Vader",
        answerNotPerson: "Darth Vader",
        answerExplanation:
          "Luke didn't know Vader was his father until the end of 'The Empire Strikes Back'.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "In which country were many of the Hoth scenes filmed?",
        answer: "Norway",
        answerNotPerson: "Norway",
        answerExplanation:
          "Actor Harrison Ford commented that the cast and crew had shelter only in the backs of their snowmobiles during filming. I sure wouldn't want to be a 'permanent resident' there.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Boba Fett's ship named?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is the underwater city where the Gungans live?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "THE ULTIMATE QUESTION! There are only three words in the ENTIRE 'Star Wars' movie saga that have ever been written in English (during the actual film). Name one of the three words. (Not on the newer DVD version.)",
        answer: "power & tractor & beam",
        answerNotPerson: "power & tractor & beam",
        answerExplanation:
          "Most of the saga has its own language, a series of symbols and shapes. However, in 'A New Hope' a set piece accidentally had English words on it. That was the tractor beam control tower which Obi-Wan shuts off. It has POWER printed largely on it with tractor beam in smaller letters. Go figure!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What actor played Bib Fortuna?",
        answer: "Michael Carter",
        answerNotPerson: "Michael Carter",
        answerExplanation:
          "Bib Fortuna is a male Twi'lek, the same race as Oola, the dancing girl eaten by the rancor.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What was Luke's call sign when he announced he was 'going in'?",
        answer: "Red 5",
        answerNotPerson: "Red 5",
        answerExplanation: "He was going into the Death Star trench.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Name the Republic Cruiser that brought the Chancellor's ambassadors to Naboo.",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What kind of gas is mined on cloud city?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What weapon does Lando Calrissian use in Jabba's Palace?",
        answer: "Vibro-Ax",
        answerNotPerson: "Vibro-Ax",
        answerExplanation:
          "While trying to free his friends from the clutch of Jabba, Lando uses a Vibro-Ax in order not to blow his cover.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'ho ho ho ho ho.'",
        answer: "Jabba",
        answerNotPerson: "Jabba",
        answerExplanation:
          "Jabba's laugh, never knew what he thought was so funny.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Obi-Wan admonishes Anakin for his rashness as the two enter the bar after chasing the assassin Zam Wessel across the sky ways of Coruscant in "Attack of the Clones." The exasperated older Jedi makes a facetious remark about what Anakin is doing to him, but the casual remark turns out to be prophetic. What tongue-in-cheek remark does Obi-Wan say?',
        answer:
          '"Why do I get the feeling you\'re going to be the death of me?"',
        answerNotPerson:
          '"Why do I get the feeling you\'re going to be the death of me?"',
        answerExplanation:
          'While all of those statements are prophetic, only one is real. When Obi-Wan says "Why do I get the feeling you\'re going to be the death of me," anyone who has seen the original "Star Wars" trilogy knows that Anakin, as Darth Vader, will in fact kill Obi-Wan. As for the other choices, Vader watches while Tarkin\'s Death Star destroys Alderaan in "A New Hope," Dooku cuts off Anakin\'s right arm in "Attack of the Clones" and Obi-Wan chops off his legs and left arm in "Revenge of the Sith," and Vader is second only to the Emperor in ruling the galaxy in the original trilogy.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'After the opening battle above Coruscant, in "Revenge of the Sith", Chancellor Palpatine laments to Mace Windu that General Grievous escaped. How then does the confident Windu describe Grievous?',
        answer: 'He calls Grievous "a coward".',
        answerNotPerson: 'He calls Grievous "a coward".',
        answerExplanation:
          '"General Grievous has escaped once again," Palpatine says, to which Windu replies, "General Grievous will run and hide as he always does. He\'s a coward.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What advice does Obi-Wan give Luke at Yavin?",
        answer: '"Use the force, Luke."',
        answerNotPerson: '"Use the force, Luke."',
        answerExplanation:
          "Ben is already dead when he tells Luke this. He comes to Luke at various times throughout the trilogy to give him advice.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Padme Amidala is Queen in which "Star Wars" movie?',
        answer: "Episode I: The Phantom Menace",
        answerNotPerson: "Episode I: The Phantom Menace",
        answerExplanation:
          'Played by Natalie Portman, Padme is Queen Amidala in "The Phantom Menace", and Senator Amidala in "Attack Of The Clones".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'For the movie "A New Hope", which position on the crew does Marcia Lucas hold?',
        answer: "Film Editor",
        answerNotPerson: "Film Editor",
        answerExplanation: 'Marcia Lucas was the Film Editor of "A New Hope".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What is the position of power Palpatine held in "Attack of the Clones", in which he was given emergency powers by the Senate and administered a clone army for the Republic?',
        answer: "Supreme Chancellor",
        answerNotPerson: "Supreme Chancellor",
        answerExplanation:
          'Palpatine would use the army to form the future Empire. This would mean the destruction of the Old Republic, as mentioned by Obi-Wan Kenobi in "A New Hope."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'How does the Millennium Falcon evade the tractor beams at the end of "The Empire Strikes Back"?',
        answer: "R2-D2 fixes the hyperdrive",
        answerNotPerson: "R2-D2 fixes the hyperdrive",
        answerExplanation:
          "R2-D2 is actually the unheralded hero of all the movies. He has no ego however, like his friend, C-3PO.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 16
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Where does the opening scene of "A New Hope" take place?',
        answer: "Leia's Starship",
        answerNotPerson: "Leia's Starship",
        answerExplanation:
          "The film begins with the imperial invasion of Leia's starship.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ROTJ' - Who briefs the commandoes on the sabotage mission going to the Sanctuary Moon?",
        answer: "General Crix Madine",
        answerNotPerson: "General Crix Madine",
        answerExplanation:
          "He defected to the Alliance. He is a brilliant general.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What species of alien is Admiral Ackbar?",
        answer: "Mon Calamari",
        answerNotPerson: "Mon Calamari",
        answerExplanation:
          "He looks like a fish, or a squid. But he is a brilliant strategist.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the last spoken line in the entire 'Star Wars' trilogy?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who said 'Help me Obi-Wan Kenobi. You're my only hope.'?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Who is the Imperial Commander of the Death Star?",
        answer: "Grand Moff Tarkin",
        answerNotPerson: "Grand Moff Tarkin",
        answerExplanation:
          "Yes, Grand Moff goes BOOM! at the end of Episode IV.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'The insult "scum" is used in five of the six "Star Wars" movies. Which movie does not have this insult?',
        answer: "Attack of the Clones",
        answerNotPerson: "Attack of the Clones",
        answerExplanation:
          'The insult appears in all except "Attack of the Clones." It\'s used at least once in the other five. For example, just before the pod race in "The Phantom Menace," Sebulba calls Anakin "slave scum" in Huttese (which is "translated" in the subtitles). In "Revenge of the Sith," General Grievous calls Obi-Wan and Anakin "Jedi scum" on his flagship. In "A New Hope," Ben Kenobi refers to Mos Eisley as "a wretched hive of scum and villainy." Admiral Piett calls bounty hunters "scum" in "The Empire Strikes Back." And in "Return of the Jedi," an Imperial officer in the bunker on Endor calls Han, Chewie and Leia "You rebel scum!"',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Attack of the Clones", what impersonal label does Kamino\'s prime minister, Lama Su, use to describe the clone troopers?',
        answer: "Units",
        answerNotPerson: "Units",
        answerExplanation:
          'He calls them units, because the Kaminoins seem to treat the troopers as products or merchandise, not individuals. When Obi-Wan first meets Lama Su on Kamino, the prime minister assumes that the Jedi knows that they\'re growing a clone army. He says, "You will be delighted to hear that we are on schedule. Two hundred thousand units are ready, with another million well on the way."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Darth Maul was the apprentice of who?",
        answer: "Darth Sidious",
        answerNotPerson: "Darth Sidious",
        answerExplanation:
          'Darth Maul kills Qui-Gon Jinn in "The Phantom Menace" and is killed by young Obi-Wan later on in the movie.Obi-Wan later takes on an apprentice, Anakin Skywalker, though Yoda thinks that Anakin is too old to begin training.(He is nine. Most children entered the Jedi temple at six months old.)',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie does Han find out that Leia and Luke are brother and sister?',
        answer: "Episode VI: Return Of The Jedi",
        answerNotPerson: "Episode VI: Return Of The Jedi",
        answerExplanation:
          "While on Endor, Han asks Leia if she loves Luke. When she says yes, he says he'll stay out of their way. Leia tells Han it's not like that, Luke is her brother.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Who produced the movie "A New Hope"?',
        answer: "Gary Kurtz",
        answerNotPerson: "Gary Kurtz",
        answerExplanation: 'Gary Kurtz produced "A New Hope".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'How does Anakin acquire his "grievous injuries", according to the "Star Wars" saga?',
        answer: "In a duel with Obi-Wan.",
        answerNotPerson: "In a duel with Obi-Wan.",
        answerExplanation:
          "Obi Wan is battling his former pupil, who has turned to the Dark Side of the Force. He begs Anakin to come back to the light, but he refuses, and falls into a lava pit.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In "A New Hope", what is Tatooine\'s capital city?',
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ANH' - Luke claims Chewbacca is a prisoner transfer from what cellblock?",
        answer: "1138",
        answerNotPerson: "1138",
        answerExplanation:
          "He lied. Actually, this is an inside joke of Lucas's. One of his first movies was titled 'THX-1138'.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of the following is NOT a starship used by the Rebellion in the battle at the end of 'Return of the Jedi'?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In 'The Empire Strikes Back', Leia says sometimes she thinks Han is all right, when he's not acting like a what?",
        answer: "Scoundrel",
        answerNotPerson: "Scoundrel",
        answerExplanation:
          "'Occasionally, maybe...when you're not acting like a scoundrel...'",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "How old was Obi-Wan when he became Qui-Gon's apprentice?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What kind of droid is R2-D2?",
        answer: "Astromech",
        answerNotPerson: "Astromech",
        answerExplanation: "Beep Blip Beep Beep Doot Doo Doot Bleep!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Return of the Jedi," what slur does Han Solo shout to Jabba the Hutt just before Solo, Luke and Chewbacca are to be executed?',
        answer: '"Piece of worm-ridden filth!"',
        answerNotPerson: '"Piece of worm-ridden filth!"',
        answerExplanation:
          'On board his sail barge, Jabba wishes that Han, Luke and Chewie will die "honorably" inside the sarlaac, then says he will entertain pleas for mercy. Threepio amplifies his voice and interprets Jabba\'s Huttese for the three prisoners held on a nearby skiff. Not caring to beg for mercy, Han shouts, "Threepio, you tell that piece of worm-ridden filth that he\'ll get no such pleasure from us!" Chewie growls his agreement. Likely, Han does not need an interpreter to understand Jabba, considering Han fully understands the Huttese that the hapless bounty hunter Greedo uses when he attempts to kill Solo in "A New Hope."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What honorific does Palpatine give Darth Plagueis, when the chancellor is speaking with Anakin at the opera in "Revenge of the Sith"?',
        answer: "The Wise",
        answerNotPerson: "The Wise",
        answerExplanation:
          'Palpatine is presumably speaking of his own Sith Lord master. He calls Darth Plagueis "the wise" when relating "the tragedy of Darth Plagueis the Wise" as part of Palpatine\'s efforts to lure Anakin to the dark side. The other three honorifics apply to actual monarchs: Russia\'s Ivan the Terrible and Catherine the Great, and England\'s Richard the Lionhearted.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What color is the speeder Anakin flies to go chase after Obi-Wan and to find Padme\'s attempted assassin in "Attack of the Clones"?',
        answer: "yellow",
        answerNotPerson: "yellow",
        answerExplanation:
          "They do find the attempted assassin at the end of the chase, but she is killed by a toxic dart before she can fully say who hired her.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie is Chewbacca referred to as a "walking carpet"?',
        answer: "Star Wars Episode IV: A New Hope",
        answerNotPerson: "Star Wars Episode IV: A New Hope",
        answerExplanation:
          'When pushing past Chewbacca, Princess Leia says, "Will somebody get this big walking carpet out of my way?".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In the movie the "Empire Strikes Back", who portrayed Darth Vader?',
        answer: "David Prowse",
        answerNotPerson: "David Prowse",
        answerExplanation:
          "David Prowse just walked around in the Vader costume and acted out scenes without speaking, while James Earl Jones was the voice of Prowse's character.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'According to the "Attack of the Clones" DVD Featurette, most of the desert scenes, like the Lars\' homestead, were filmed on what continent?',
        answer: "Africa",
        answerNotPerson: "Africa",
        answerExplanation:
          "The scenes were filmed in the outer region of the Sahara Desert.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'From where must Luke and Han rescue Leia in "A New Hope"?',
        answer: "The Death Star",
        answerNotPerson: "The Death Star",
        answerExplanation:
          "She had been captured and destined for death at the hands of the empire, but her plea for help sent with R2-D2 got to Obi-Wan, and the team could save her.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 17
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'ESB' - The planetary defense cannon on Hoth fired what color Ion blast?",
        answer: "Red",
        answerNotPerson: "Red",
        answerExplanation: "In the novels, Ion bolts are blue.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is the name of the Chief of the Ewoks?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of the weird little frog that sits outside of Jabba's palace?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What color are the X-Wing fighters?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "When fleeing from Imperial Ships through an asteriod shower, where does Han Solo hide his ship?",
        answer: "A Space Slug",
        answerNotPerson: "A Space Slug",
        answerExplanation:
          "Space Slugs hide inside asteroids and almost got a free meal, but Han saved the day once again!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "A New Hope," the Death Star captures the Millennium Falcon, which had appeared out of hyperspace in the remains of the Alderaan system. Solo, Chewie, and their passengers hide in smuggling compartments. After the stormtroopers leave the ship, thinking that it is empty, Solo and company emerge. Obi-Wan announces that he\'ll take care of the tractor beam holding the ship, and Solo calls him a fool, saying, "I knew you\'d say something like that!" What was Obi-Wan\'s reply?',
        answer: '"Who\'s more foolish: the fool or the fool who follows him?"',
        answerNotPerson:
          '"Who\'s more foolish: the fool or the fool who follows him?"',
        answerExplanation:
          "Chewbacca actually likes Obi-Wan's reply, and howls his approval, to which Obi-Wan nods in agreement. Although Solo and the old Jedi don't see eye-to-eye, when the Falcon finally escapes from the Death Star, Solo probably doesn't think Obi-Wan so foolish anymore because he did take care of the tractor beam.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In the \"Attack of the Clones\" droid factory, C-3PO's head is literally separated from his body. A battle droid's head becomes welded to his body while Threepio's head is welded to the body of a battle droid. During the arena battle, Threepio's head and battle droid body shoot at the Jedi. What insult does Threepio call the Jedi, for which he quickly apologizes?",
        answer: "Jedi dogs",
        answerNotPerson: "Jedi dogs",
        answerExplanation:
          '"Die, Jedi dogs!" Threepio\'s head shouts. The fussy droid is immediately aghast at his words. "Oh... what did I say?" He then cries, "Oh dear. I\'m terribly sorry about all this!" A few moments earlier, while Threepio marched to battle with the other droids, he wailed, "What\'s all this noise? A battle? There\'s been some terrible mistake! I\'m programmed for etiquette, not destruction!"',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Who says this to Luke? "Looking? Found someone you have I would say."',
        answer: "Yoda",
        answerNotPerson: "Yoda",
        answerExplanation:
          'Yoda says this in "The Empire Strikes Back" before Luke knows who he really is, in Dagobah.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In which "Star Wars" movie is Han Solo thawed?',
        answer: "Episode VI: Return Of The Jedi",
        answerNotPerson: "Episode VI: Return Of The Jedi",
        answerExplanation:
          'Han was frozen at the end of "The Empire Strikes Back", and thawed in "Return Of The Jedi".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Empire Strikes Back", who played the character Lando Calrissian?',
        answer: "Billy Dee Williams",
        answerNotPerson: "Billy Dee Williams",
        answerExplanation:
          "Peter Mayhew is Chewbacca, John Hollis plays Lando's Aide, and Jeremy Bulloch portrays Boba Fett.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Final "Attack of the Clones" question. During the spectacular Asteroid Field battle, how many seismic charges did the Fetts launch at Obi-Wan before he lost them?',
        answer: "Two",
        answerNotPerson: "Two",
        answerExplanation:
          "Seismic charges are blue bursts of energy that are silent when they first discharge. Then, they make a loud sonic boom and consume every object around them in disaster.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which movie did Han Solo tell Luke about travelling through hyperspace, "This ain\'t like dusting crops, boy!"?',
        answer: "A New Hope",
        answerNotPerson: "A New Hope",
        answerExplanation: 'This is right after they leave "Mos Eisley."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Chewbacca's race?",
        answer: "Wookiee",
        answerNotPerson: "Wookiee",
        answerExplanation:
          "Chewbaca, or Chewie, is Han Solo's loyal partner, and a Wookiee.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "'ANH' - How many ships attack the Death Star?",
        answer: "31",
        answerNotPerson: "31",
        answerExplanation:
          "Remember, an Imperial Officer reminds Grand Moff Tarkin that 30 fighters are attacking. Where, then, is the 31st? The Millenium Falcon also attacks the Death Star, making it the 31st ship to attack the Death Star",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "What is Lando's rank during the battle at Endor?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which one of these actors from the 'Star Wars' Trilogy was NOT also in 'Episode I'?",
        answer: "Peter Mayhew",
        answerNotPerson: "Peter Mayhew",
        answerExplanation:
          "Peter Mayhew played everyone's favorite Wookiee, Chewbacca! You gotta love that big walking carpet! :-)",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "On which planet are Tauntauns found?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What becomes of Yoda after the rise of the evil Darth Vader?",
        answer: "Becomes a hermit",
        answerNotPerson: "Becomes a hermit",
        answerExplanation:
          "Yoda retreats to Dagobah after Anakin turns to the Dark Side and becomes Darth Vader.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Han Solo has little patience for Threepio in "The Empire Strikes Back." Just after Solo puts the Falcon down inside the cave in the asteroid field, the ship shakes hard. Threepio helpfully offers that the asteroid "may not be entirely stable." Solo sarcastically thanks the droid, then says irritably, "Chewie, take ________ in the back and plug him into the hyperdrive!" What does he call the droid?',
        answer: "the professor",
        answerNotPerson: "the professor",
        answerExplanation:
          '"Chewie, take the professor in the back and plug him into the hyperdrive!" Likely, Han doesn\'t mean this literally, but rather wants Threepio to communicate with the ship\'s computer to learn what is wrong with the hyperdrive. Threepio later reports to Han that, "I don\'t know where your ship learned to communicate, but it has a most peculiar dialect." Solo does call Threepio "goldenrod" earlier in the film, during their escape from Hoth. While Han and the princess are running to board the Falcon, Han shouts to the slow droid to "Hurry up, goldenrod! You\'re gonna be a permanent resident!"',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What does Jango Fett refer to himself as being, when he and Obi-Wan Kenobi meet on Kamino in "Attack of the Clones"?',
        answer: "A simple man",
        answerNotPerson: "A simple man",
        answerExplanation:
          'In their tense meeting in the Fetts\' apartment, Obi-Wan and Jango are instantly suspicious of the other. Obi-Wan, referring to the army cloned from Jango, tells Jango that "Your clones are very impressive. You must be very proud." Jango responds, "I\'m just a simple man trying to make my way in the universe."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Where on the body does Luke get shot while rescuing Han in "Return of the Jedi".',
        answer: "right hand",
        answerNotPerson: "right hand",
        answerExplanation:
          "He gets shot by a blaster on the sail barge. The blaster bolt hits his right hand, his fake hand. Later on when he's flying back to Dagobah you see the burned part of his fake hand where he was shot right before he puts a glove on to cover it.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In which "Star Wars" movie did Hayden Christensen appear?',
        answer: "Episode II: Attack Of The Clones",
        answerNotPerson: "Episode II: Attack Of The Clones",
        answerExplanation:
          'Hayden Christensen appeared in "Attack Of The Clones" as Anakin Skywalker. He also appeared in an excellent movie with Kevin Kline called "Life As A House".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Who directed the "Empire Strikes Back"?',
        answer: "Irvin Kershner",
        answerNotPerson: "Irvin Kershner",
        answerExplanation:
          "George Lucas wrote the film, Gary Kurtz was the Producer, and Paul Hirsch was the Editor.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'By logic of the orientation of the series, which of the following would NOT be a possible title for "Episode 3?"',
        answer: "Beginning of the Bounty Hunters",
        answerNotPerson: "Beginning of the Bounty Hunters",
        answerExplanation:
          'Bounty Hunters have existed in the "Star Wars" galaxy for thousands of years, so that theory is out the window. And logically, as the Empire rose, the Republic\'s Jedi were exterminated, and Anakin was converted.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'How old did Yoda live before he became part of "The Force"?',
        answer: "900",
        answerNotPerson: "900",
        answerExplanation:
          'He finally passes from physical form in "Return of the Jedi." Yoda states, "When nine hundred years old you reach, look as good you will not, hmm?"',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 18
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "How many dots are there on the lapel tab of a Rebel General, not an Admiral?",
        answer: "4",
        answerNotPerson: "4",
        answerExplanation:
          "Admirals, like Jan Dodonna and Ackbar, have five dots. Look at Lando's lapel in 'ROTJ' right before the attack on the Second Death Star. He has four dots.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What vehicle does Chewbacca commandeer during the Battle on Endor?",
        answer: "AT-ST",
        answerNotPerson: "AT-ST",
        answerExplanation: "The two-legged Imperial Walker.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What country in northern Africa were some of the Tatooine desert scenes filmed in?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Which of Amidala's handmaidens takes the role of Queen when Amidala disguises herself as Padme?",
        answer: "Sabe",
        answerNotPerson: "Sabe",
        answerExplanation:
          'Sabe was played by Keira Knightley in TPM. I only noticed her resemblance to Natalie Portman when I saw her in the recent film "Bend it like Beckham".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "Who is the actor who played Anakin in Episodes II and III?",
        answer: "Hayden Christensen",
        answerNotPerson: "Hayden Christensen",
        answerExplanation:
          "Hayden is a 19 year old from Canada. He got the call to play Anakin on May 12.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Empire Strikes Back", who does Harrison Ford portray?',
        answer: "Han Solo",
        answerNotPerson: "Han Solo",
        answerExplanation: "Harrison Ford has been featured in many movies.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Luke made the following quote to Leia in "Return of the Jedi": "The force is strong in my family. I have it. My father has it. And... my sister has it. Yes, Leia. That\'s you." On which planet\'s moon did he tell Leia this?',
        answer: "Endor",
        answerNotPerson: "Endor",
        answerExplanation:
          "Also, Endor was the home of the Ewoks. On a bit of a light note, they believed C-3PO to be a God of theirs.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Who was the director of the movie "Return of the Jedi"?',
        answer: "Richard Marquand",
        answerNotPerson: "Richard Marquand",
        answerExplanation: 'Richard Marquand directed "Return of the Jedi".',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What is the name of Han Solo's ship? It was given to him by Lando Calrissian and is co-piloted by Wookie Chewbacca.",
        answer: "Millennium Falcon",
        answerNotPerson: "Millennium Falcon",
        answerExplanation:
          "The Falcon was not a large ship, but, as boasted by Han Solo, it was the fastest in the galaxy?",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What planet does Luke travel to in search of Yoda in "The Empire Strikes Back"?',
        answer: "Dagobah",
        answerNotPerson: "Dagobah",
        answerExplanation:
          'Yoda is in "retirement" in the swampy, humid planet of Dagobah. Luke is trained as a Jedi in the Dagobah system.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'In "Return of the Jedi", who played Bib Fortuna?',
        answer: "Michael Carter",
        answerNotPerson: "Michael Carter",
        answerExplanation:
          "Femi Taylor played Oola, Caroline Blakiston portrayed Mon Mothma, and Warwick Davis was a Wicket.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Now for a "Star Wars" media question. Which magazine voted the Cantina Scene as one of the top 50 movie scenes of all time?',
        answer: "Reader's Digest",
        answerNotPerson: "Reader's Digest",
        answerExplanation:
          'The top rated scene of all time was from "Saving Private Ryan." Oh, Normandy!',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What four-legged "creatures" are destroyed by the snow speeders with harpoons and tow cables in the Battle of Hoth?',
        answer: "AT-AT's",
        answerNotPerson: "AT-AT's",
        answerExplanation:
          "The walkers had armor too strong for blasters. The cables were used to trip the beasts.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "'Episode I': how did Anakin tell Jar Jar to turn off the little pit droid he accidentally activated while in Watto's shop?",
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: 'Who composed all of the music in "Return of the Jedi"?',
        answer: "John Williams",
        answerNotPerson: "John Williams",
        answerExplanation:
          'John Williams composed the music for all of the "Star Wars" films.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In the wedding scene between Anakin and Padme, excluding the bride, groom, and priest, how many HUMANS were present? This was at the end of "Clones".',
        answer: "Zero",
        answerNotPerson: "Zero",
        answerExplanation:
          "There were no other humans present. Only 3PO and R2-D2 were there, but they wouldn't remember it anyway, having their memories erased.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What type of craft did Darth Vader send all over the galaxy to locate Luke in "The Empire Strikes Back"?',
        answer: "Imperial Probe Droids",
        answerNotPerson: "Imperial Probe Droids",
        answerExplanation:
          "Probe Droids, the black, insect-like craft were sent all across the galaxy to locate the rebels. The droids that landed on Hoth, where the new secret base was located, found Luke.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "What kind of large animals played Banthas in the 'Star Wars' movies?",
        answer: "Elephants",
        answerNotPerson: "Elephants",
        answerExplanation: "Wait a second, Banthas don't have trunks!",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'In "Return of the Jedi", who was the voice of Darth Vader?',
        answer: "James Earl Jones",
        answerNotPerson: "James Earl Jones",
        answerExplanation:
          "Kenny Baker was Artoo-Detoo (R2-D2), Jack Purvis played Teebo, and Jane Busby portrayed Chief Chirpa.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "In what city do the following scenes take place? Han Solo frozen, Luke informed that Vader is his father.",
        answer: "Cloud City",
        answerNotPerson: "Cloud City",
        answerExplanation:
          'Cloud City, on the planet of Bespin, is the scene of the major plot twists and action sequences of "Empire."',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          "While filming Return of the Jedi, the cast and crew used a false movie title to keep fans away from the set. What was this title?",
        answer: "Blue Harvest",
        answerNotPerson: "Blue Harvest",
        answerExplanation:
          "The full fake title was \"Blue Harvest-Horror Beyond Imagination\". While filming 'ROTJ', the crew wore t-shirts and hats with the Blue Harvest logo on them to fool nosy fans into thinking they were filming some other movie.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Luke only addresses Obi-Wan Kenobi by his real name one time. The rest of the time he says "Ben." When is the one time?',
        answer: "In the Dagobah system",
        answerNotPerson: "In the Dagobah system",
        answerExplanation:
          "This shows Luke's maturity as a Jedi. He has grown so much under Ben's instruction. Even Vader denounced it.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Complete this quote from "Empire Strikes Back". Vader: "You are __________ ." Don\'t let yourself be destroyed as Obi-Wan did."',
        answer: "Beaten",
        answerNotPerson: "Beaten",
        answerExplanation:
          "Luke was not prepared for that lightsaber duel. Without the help of Yoda and Kenobi, he lost his hand, and was destroyed, nearly.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What three locations were added in the special addition of "Return of the Jedi" in the ending celebration sequences? (hint: they are shown partying once the Death Star was destroyed.) VHS version only.',
        answer: "Cloud City, Mos Eisley, Coruscant",
        answerNotPerson: "Cloud City, Mos Eisley, Coruscant",
        answerExplanation:
          "When Lucas added in this sequence, it was the first time movie-goers had ever seen Coruscant. The capital city became a major setting for the prequels.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Which of the following is the BEST theme for "Return of the Jedi?"',
        answer: "There is always hope.",
        answerNotPerson: "There is always hope.",
        answerExplanation:
          "Explanation: After the Jedi purge, no one thought Jedis still existed. But Obi Wan, Luke, Yoda, and potentially Leia proved them wrong. I guess you could include Anakin, in a sense. After all, he did come back to the light side.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },

      //////////////
      // PAGE 19
      //////////////

      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'What type of creature does Jabba intend to feed Luke and Han to in the beginning of "Return of the Jedi"?',
        answer: "Sarlacc",
        answerNotPerson: "Sarlacc",
        answerExplanation:
          'The Sarlacc pit on Tatooine is the site of a major action sequence of "Jedi," in which Luke and Han must escape the hungry creature, and a thousand years of digestion in its stomach!',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText: "Which of the following Jedi survived the purge?",
        answer: "Obi-Wan Kenobi",
        answerNotPerson: "Obi-Wan Kenobi",
        answerExplanation:
          "The four who survived were Anakin, Yoda, Obi Wan, and Palpatine. Palpatine is classified as a Jedi because of his Dark Side powers.",
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Complete this conversation from "Phantom Menace": Qui-Gonn Jinn: "It was trained in the Jedi Arts." "My only conclusion can be that it was a Sith Lord." Ki-Adi Mundi: "Impossible! The sith have been extinct for a millenium." Mace Windu: "I do not the believe the Sith could have returned without us ______________." Yoda: "Ah, hard to see the dark side is."',
        answer: "knowing",
        answerNotPerson: "knowing",
        answerExplanation:
          'Mace Windu and the rest of the Jedi are oblivious to Darth Sidious\' control. Only the "Dark Lord of the Sith" knows of the weakness of Jedi.',
        answerOptions: [],
        photoOptions: null,
        faction: -1,
      },
      {
        type: "random-question",
        preQuestion: "Do you know...",
        id: "",
        questionText:
          'Which of these spacecraft types are not featured in the Death Star battle at the end of "Return of the Jedi"?',
        answer: "",
        answerNotPerson: "",
        answerExplanation: "",
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

    const answerExplanation = mainElm[key]
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
      answerExplanation,
      answerOptions,
      photoOptions: null,
      faction: -1,
    };
    output.push(questionObjectArray);
  }

  return output;
}
