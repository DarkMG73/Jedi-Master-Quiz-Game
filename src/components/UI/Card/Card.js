import styles from "./Card.module.css";
import specialGradient from "./specialGradient.module.css";

function Card(props) {
  return (
    <div className={`${styles.card} ${specialGradient["special-gradient"]}`}>
      {props.children}
    </div>
  );
}

export default Card;
