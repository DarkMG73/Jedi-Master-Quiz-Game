import { popularStarWarsInfo } from "../store/starWarsInfo";
import { randomQuestionsList } from "../store/random-questions";

export const normalizeAnswerText = (props) => {
  console.log("___________________");
  console.log("normalizeAnswerText ");

  const namesContainingPartofAnswer = [];
  const randomQuestionsObject = randomQuestionsList();
  const randomQuestions = randomQuestionsObject.allFetchedQuestions;

  for (const key in randomQuestions) {
    console.log("randomQuestions: ", randomQuestions);

    console.log("randomQuestions[key]: ", randomQuestions[key]);
    const category = randomQuestions[key].category;
    console.log("category: ", category);
    const answer = randomQuestions[key].answer;

    console.log(
      "---> popularStarWarsInfo[category].includes(answer)--->s ",
      popularStarWarsInfo[category].includes(answer)
    );
    if (popularStarWarsInfo[category].includes(answer)) continue;

    const answerArray = answer.split(" ");
    answerArray.forEach((word) => {
      const containsWord = popularStarWarsInfo[category].filter((name) => {
        console.log("word: ", word);
        console.log("name.includes[word]: ", name.includes(word));
        return name.includes(word);
      });
      if (containsWord.length > 0)
        namesContainingPartofAnswer.push({ answer, containsWord });
    });
  }
  console.log("namesContainingPartofAnswer", namesContainingPartofAnswer);
};

const GatherAllPics = () => {
  const outputHTMLArray = [];
  for (const key in popularStarWarsInfo) {
    if (key === "battles") continue;
    outputHTMLArray.push({ href: "", name: "*" });
    outputHTMLArray.push({ href: "", name: "*******************" });
    outputHTMLArray.push({ href: "", name: "*** " + key + "***" });
    outputHTMLArray.push({ href: "", name: "*******************" });

    popularStarWarsInfo[key].forEach((name) => {
      // console.log("name: ", name);
      const nameForUrl = name.replace(" ", "+");
      const href = `https://www.google.com/search?q=${nameForUrl}+star+wars&tbm=isch&ved=2ahUKEwjo_Nnb3PfzAhUur3IEHdrxBNwQ2-cCegQIABAA&oq=${nameForUrl}+star+wars&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BggAEAcQHlCMEViiJmCwKWgAcAB4AIABlQGIAb4KkgEEMTAuNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=mCiAYejQNK7eytMP2uOT4A0&bih=1560&biw=1504&NameForFile=${nameForUrl}`;
      outputHTMLArray.push({ href, name });
    });
    outputHTMLArray.forEach((link) => {
      console.log("link: ", link);
      console.log(`<li><a href=${link.href}>${link.name}</a></li>`);
    });
  }
  console.log("outputHTMLArray: ", outputHTMLArray);
  return (
    <ul
      style={{
        listStyle: "none",
      }}
    >
      Test
      {outputHTMLArray.map((link) => (
        <li>
          {outputHTMLArray.indexOf(link)}: &nbsp;
          <a
            key={outputHTMLArray.indexOf(link)}
            href={link.href}
            target="_blank"
            style={{
              textDecoration: "none",
            }}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GatherAllPics;
