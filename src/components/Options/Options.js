import Card from "../../components/UI/Card";
import { getRandomInt } from "../../hooks/utilities";

function Options(props) {
  const allQuotes = props.allQuotes;
  const answer = props.answer;
  const availableSpeakers = [];
  for (const key in allQuotes) {
    console.log("THE QUOTE", allQuotes[key].speaker);
    if (answer !== allQuotes[key].speaker) {
      availableSpeakers.push(allQuotes[key].speaker);
    }
  }

  function twoUniqueRandomNumbers(highestLimit) {
    const randomOne = getRandomInt(highestLimit);
    const randomTwo = getRandomInt(highestLimit);
    console.log("randomOne", randomOne);
    console.log("randomTwo", randomTwo);
    if (highestLimit > 0 && randomOne === randomTwo) {
      twoUniqueRandomNumbers(highestLimit);
      return;
    }

    return [randomOne, randomTwo];
  }

  const randomNumbers = twoUniqueRandomNumbers(availableSpeakers.length);
  console.log("randomNumbers", randomNumbers);
  console.log("randomNumbers[0]", randomNumbers[0]);

  return (
    <Card>
      <div className="option">{availableSpeakers[randomNumbers[0]]}</div>
      <div className="option">{props.answer}</div>
      <div className="option">{availableSpeakers[randomNumbers[1]]}</div>
    </Card>
  );
}

export default Options;
