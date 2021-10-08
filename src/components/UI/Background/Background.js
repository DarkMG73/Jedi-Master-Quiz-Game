import classes from "./Background.module.css";

function Background(props) {
  return (
    <div className={classes.background}>
      <div className={classes.stars}></div>
      <div className={classes.twinkling}></div>
      <div className={classes.clouds}></div>
      <div className={classes.clouds2}></div>
      {props.children}
    </div>
  );
}

export default Background;
