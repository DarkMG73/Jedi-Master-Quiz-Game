/***
 * FOR DEVELOPMENT
 ***/
// export function quoteList() {
//   return {
//     allFetchedQuotesIds: [36, 31, 56, 55],
//     allFetchedQuotes: [
//       {
//         type: 'quote', id: 36,
//         preQuestion, content: "PATIENCE YOU MUST HAVE my young padawan - Yoda",
//         faction: 0,
//       },
//       {
//         type: 'quote', id: 31,
//         preQuestion, content:
//           "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is. - Yoda",
//         faction: 0,
//       },
//       {
//         type: 'quote', id: 56,
//         preQuestion, content:
//           "You can’t stop the change, any more than you can stop the suns from setting. — Shmi Skywalker",
//         faction: 2,
//       },
//       {
//         type: 'quote', id: 55,
//         preQuestion, content:
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
//     Remove change "Hope" quote to "Never Be Afraid Of Who You Are"
//     Remove (Season One, Episode 15, Trespass)
//     Change "[Luke:] I can’t believe it. [Yoda:] That is why you fail. Speaker:Yoda / Luke" - remove the names from the quote and split into two
// Must add the following to each:
//        type,
//        preQuestion,

const type = "quote";
const preQuestion = "Who said it? ";
export function quoteList() {
  return {
    allFetchedQuotesIds: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
    ],
    allFetchedQuotes: [
      {
        type,
        id: 1,
        preQuestion,
        content:
          "I’m just a simple man trying to make my way in the universe. — Jango Fett",
        faction: 3,
      },
      {
        type,
        id: 2,
        preQuestion,
        content:
          "In time, the suffering of your people will persuade you to see our point of view. — Nute Gunray",
        faction: 4,
      },
      {
        type,
        id: 3,
        preQuestion,
        content:
          "We must keep our faith in the Republic. The day we stop believing democracy can work is the day we lose it. — Queen Jamillia",
        faction: 4,
      },
      {
        type,
        id: 4,
        preQuestion,
        content:
          "To die for one’s people is a great sacrifice. To live for one’s people, an even greater sacrifice. I choose to live for my people. — Riyo Chuchi",
        faction: 4,
      },
      {
        type,
        id: 5,
        preQuestion,
        content: "Chewie, we’re home. — Han Solo",
        faction: 4,
      },
      {
        type,
        id: 6,
        preQuestion,
        content:
          "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man. — Han Solo",
        faction: 4,
      },
      {
        type,
        id: 7,
        preQuestion,
        content: "Never tell me the odds! — Han Solo",
        faction: 4,
      },
      {
        type,
        id: 8,
        preQuestion,
        content: "I find your lack of faith disturbing. — Darth Vader",
        faction: 1,
      },
      {
        type,
        id: 9,
        preQuestion,
        content: "No. I am your father. — Darth Vader",
        faction: 1,
      },
      {
        type,
        id: 10,
        preQuestion,
        content: "Be Careful Not To Choke On Your Convictions. - Darth Vader",
        faction: 1,
      },
      {
        type,
        id: 11,
        preQuestion,
        content: "You have failed me for the last time. - Darth Vader",
        faction: 1,
      },
      {
        type,
        id: 12,
        preQuestion,
        content:
          "I sense something. A presence I have not felt since…. - Darth Vader",
        faction: 1,
      },
      {
        type,
        id: 13,
        preQuestion,
        content:
          "This technological terror is nothing compared to the power of the force - Darth Vader",
        faction: 1,
      },
      {
        type,
        id: 14,
        preQuestion,
        content: "Power! Unlimited power! — Darth Sidious",
        faction: 1,
      },
      {
        type,
        id: 15,
        preQuestion,
        content:
          "The Sith took everything from me. Ripped me from my mother’s arms, murdered my brother, used me as a weapon, and then cast me aside. Abandoned me. Once, I had power — now I have nothing. — Maul",
        faction: 1,
      },
      {
        type,
        id: 16,
        preQuestion,
        content:
          "The Sith killed each other, victims of their own greed. But from the ashes of their destruction, I was the last survivor. I chose to pass my knowledge on to only one. I created a legacy so resilient that now you come before me. — Darth Bane",
        faction: 1,
      },
      {
        type,
        id: 17,
        preQuestion,
        content:
          "What if I told you that the Republic was now under the control of a Dark Lord of the Sith? — Count Dooku",
        faction: 1,
      },
      {
        type,
        id: 18,
        preQuestion,
        content: "Now, young Skywalker, you will die. — Emperor Palpatine",
        faction: 1,
      },
      {
        type,
        id: 19,
        preQuestion,
        content: "Help me, Obi-Wan Kenobi. You’re my only hope. — Leia Organa",
        faction: 0,
      },
      {
        type,
        id: 20,
        preQuestion,
        content: "Never Be Afraid Of Who You Are. — Leia Organa",
        faction: 0,
      },
      {
        type,
        id: 21,
        preQuestion,
        content:
          "Why, you stuck-up, half-witted, scruffy-looking nerf herder! — Leia Organa",
        faction: 0,
      },
      {
        type,
        id: 22,
        preQuestion,
        content:
          "You know, no matter how much we fought, I’ve always hated watching you leave. — Leia Organa",
        faction: 0,
      },
      {
        type,
        id: 23,
        preQuestion,
        content: "The Force will be with you. Always. — Obi-Wan Kenobi",
        faction: 0,
      },
      {
        type,
        id: 24,
        preQuestion,
        content:
          "Well, if droids could think, there’d be none of us here, would there? — Obi-Wan Kenobi",
        faction: 0,
      },
      {
        type,
        id: 25,
        preQuestion,
        content: "You were my brother, Anakin. I loved you. — Obi-Wan Kenobi",
        faction: 0,
      },
      {
        type,
        id: 26,
        preQuestion,
        content:
          "If you define yourself by your power to take life, your desire to dominate, to possess, then you have nothing. — Obi-Wan Kenobi",
        faction: 0,
      },
      {
        type,
        id: 27,
        preQuestion,
        content: "Do. Or do not. There is no try. — Yoda",
        faction: 0,
      },
      {
        type,
        id: 28,
        preQuestion,
        content:
          "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned. — Yoda",
        faction: 0,
      },
      {
        type,
        id: 29,
        preQuestion,
        content:
          "Train yourself to let go of everything you fear to lose. - Yoda",
        faction: 0,
      },
      {
        type,
        id: 30,
        preQuestion,
        content:
          "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you. — Yoda",
        faction: 0,
      },
      {
        type,
        id: 31,
        preQuestion,
        content:
          "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is. - Yoda",
        faction: 0,
      },
      {
        type,
        id: 32,
        preQuestion,
        content: "Always pass on what you have learned. - Yoda",
        faction: 0,
      },
      {
        type,
        id: 33,
        preQuestion,
        content:
          "You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack. - Yoda",
        faction: 0,
      },
      {
        type,
        id: 34,
        preQuestion,
        content: "I can’t believe it.  - Luke",
        faction: 0,
      },
      {
        type,
        id: 35,
        preQuestion,
        content:
          "Powerful you have become, the dark side I sense in you. - Yoda",
        faction: 0,
      },
      {
        type,
        id: 36,
        preQuestion,
        content: "PATIENCE YOU MUST HAVE my young padawan - Yoda",
        faction: 0,
      },
      {
        type,
        id: 37,
        preQuestion,
        content:
          "Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice. - Yoda",
        faction: 0,
      },
      {
        type,
        id: 38,
        preQuestion,
        content:
          "I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me. — Luke Skywalker",
        faction: 0,
      },
      {
        type,
        id: 39,
        preQuestion,
        content:
          "Just for once, let me look on you with my own eyes. — Anakin Skywalker",
        faction: 0,
      },
      {
        type,
        id: 40,
        preQuestion,
        content:
          "So this is how liberty dies. With thunderous applause. — Padmé Amidala",
        faction: 0,
      },
      {
        type,
        id: 41,
        preQuestion,
        content: "There’s always a bigger fish. — Qui-Gon Jinn",
        faction: 0,
      },
      {
        type,
        id: 42,
        preQuestion,
        content: "Your focus determines your reality. — Qui-Gon Jinn",
        faction: 0,
      },
      {
        type,
        id: 43,
        preQuestion,
        content:
          "Secrets must be exposed when found. Detours must be taken when encountered. And if you are the one who stands at the crossroads or the place of concealment, you must never leave it to another to act in your place. — Qui-Gon Jinn",
        faction: 0,
      },
      {
        type,
        id: 44,
        preQuestion,
        content:
          "You've been a good apprentice, Obi-Wan, and you're a much wiser man than I am. I foresee you will become a great Jedi Knight. — Qui-Gon Jinn",
        faction: 0,
      },
      {
        type,
        id: 45,
        preQuestion,
        content:
          "Life does not treat you fairly or unfairly, it merely is. It is up to each of us to be fair, or unfair. — Qui-Gon Jinn",
        faction: 0,
      },
      {
        type,
        id: 46,
        preQuestion,
        content:
          "The ability to speak does not make you intelligent. — Qui-Gon Jinn",
        faction: 0,
      },
      {
        type,
        id: 47,
        preQuestion,
        content: "I am no Jedi. — Ahsoka Tano",
        faction: 0,
      },
      {
        type,
        id: 48,
        preQuestion,
        content: "The garbage’ll do! — Rey",
        faction: 0,
      },
      {
        type,
        id: 49,
        preQuestion,
        content: "Oh, my dear friend. How I’ve missed you. — C-3PO",
        faction: 0,
      },
      {
        type,
        id: 50,
        preQuestion,
        content: "I’m one with the Force. The Force is with me. — Chirrut Îmwe",
        faction: 0,
      },
      {
        type,
        id: 51,
        preQuestion,
        content:
          "Every time I walked away from something I wanted to forget, I told myself it was for a cause that I believed in. A cause that was worth it. Without that, we’re lost. — Cassian Andor",
        faction: 0,
      },
      {
        type,
        id: 52,
        preQuestion,
        content: "Jyn, I’ll be there for you. Cassian said I had to. — K-2SO",
        faction: 0,
      },
      {
        type,
        id: 53,
        preQuestion,
        content:
          "An object cannot make you good or evil. The temptation of power, forbidden knowledge, even the desire to do good can lead some down that path. But only you can change yourself. — Bendu",
        faction: 2,
      },
      {
        type,
        id: 54,
        preQuestion,
        content:
          "Remember, my dear Obi-Wan. I’ve loved you always. I always will. — Duchess Satine Kryze",
        faction: 2,
      },
      {
        type,
        id: 55,
        preQuestion,
        content:
          "The dark side of the Force is a pathway to many abilities some consider to be unnatural. — Chancellor Palpatine",
        faction: 2,
      },
      {
        type,
        id: 56,
        preQuestion,
        content:
          "You can’t stop the change, any more than you can stop the suns from setting. — Shmi Skywalker",
        faction: 2,
      },
      {
        type,
        id: 57,
        preQuestion,
        content: "That is why you fail. - Yoda",
        faction: 0,
      },
    ],
  };
}
