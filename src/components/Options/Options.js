import Card from "../../components/UI/Card";

function Options(props) {
  // for (const quote of props.allQuotes) {
  //   console.log("THE QUOTE", quote);
  // }
  return (
    <Card>
      <div className="option">Anakin Skywalker</div>
      <div className="option">{props.answer}</div>
      <div className="option">Yoda</div>
    </Card>
  );
}

export default Options;
