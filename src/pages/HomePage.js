import Question from "../components/Questions/Question";
import Options from "../components/Options/Options";
import Score from "../components/Score/Score";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Question />
      <Options />
      <Score />
    </div>
  );
}

export default HomePage;
